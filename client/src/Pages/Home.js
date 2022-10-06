import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOUT } from '../Redux/usersSlice'
import { getTrailers, getTrailers2 } from '../Redux/animeSlice'
import { useEffect } from 'react'
import NewEpisode from '../animeComponents/newEpisode'
import NewAnimes from '../animeComponents/newAnimes'
import Modals from '../animeComponents/modal'
const Home = () => {
  const admin=useSelector(state=>state.Users.user?.Role)
  const user = JSON.parse(localStorage.getItem('user'))
  const authorized = useSelector(state => state.Users.authorized)
  const trailers = useSelector(state => state.animes.trailers)
  const trailers2 = useSelector(state => state.animes.trailers2);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getTrailers())
    dispatch(getTrailers2())
  }, [user])

  return (
    <div class="HomeBackground">
      <div class="Home">
        <nav>
          <li><a onClick={() => navigate("/")} href="/">Home</a></li>
          <li><a href="#home">Anime List</a></li>
          <li><a href="#news">Random Anime</a></li>
          <li><a href="#contact">Genres</a></li>
          <input type="search"></input><svg style={{ marginLeft: "0.3cm" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <div class="container">
            <div class="Dropdown">
              <button class="link dropdown-toggle" type="button" >
                <img class="rounded-circle " alt="" src={user ? user.Image?.path : "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"} />
                {!user && <span>Login</span>}<span class="caret"></span>
              </button>
              <div class="Dropdown-menu" role="menu" aria-labelledby="menu1">
                {authorized ? <li><Link role="menuitem" to="/Admin">Account</Link></li> : <li><Link role="menuitem" to="/Login">Sign in</Link></li>}
                {authorized && <li><a onClick={() => { dispatch(logOUT()); navigate("/") }} role="menuitem" tabindex="-1" href="#">Sign out</a></li>}
                {!authorized && <li><a onClick={() => { navigate("/Register") }} role="menuitem" tabindex="-1" href="#">Register</a></li>}
              </div>
            </div>
          </div>
        </nav>
        <section class="firstSection">
          <div class="subFirstSection">
            <div class="newEpisodesBar">
              <h4 style={{ marginLeft: "1cm", color: "white" }}>New Episodes</h4 >
              {admin==="admin"?<Modals/>:null}
              </div>
            <div class="newEpisodes">
              {true && trailers?.map(e => e.episodes?.map((d, i) => Math.max(...e.episodes.map(f => JSON.parse(f).number))==JSON.parse(d).number  ? <NewEpisode Rate={i - 1} number={JSON.parse(d).number} url={JSON.parse(d).url} animePicture={e.animePicture} animeName={e.animeName} season={e.season} Id={e._id} /> : null))}


            </div>
          </div>
          <div class="subFirstSection">
            <div class="newAnimeBar">
              <h4 style={{ marginLeft: "1cm", color: "white" }}>New Animes</h4 >
             

            </div>
            <div class="newAnimes">
              {true && trailers2?.map((e, i) => i < 9 ? <NewAnimes Rate={9 - i} animeName={e.animeName} animePicture={e.animePicture} season={e.season} Id={e._id} /> : null).reverse()}

            </div>
          </div>
        </section>
        <section class="favorites">
          favorites for the ones who have an Account
          
        </section>
      </div>
    </div>
  )
}

export default Home