import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOUT } from '../Redux/usersSlice'
import { getTrailers, getTrailers2, getEpisode } from '../Redux/animeSlice'
import { useEffect } from 'react'
import NewAnimes from '../animeComponents/newAnimes'
import { useLocation } from 'react-router-dom';
import Video from '../animeComponents/video'
import NewEpisode from '../animeComponents/newEpisode'

const Episode = () => {
  const location = useLocation();//console.log(location)
  let { id, number,season,animeName } = useParams();//console.log(number)
  const user = JSON.parse(localStorage.getItem('user'))
  const authorized = useSelector(state => state.Users.authorized)

  const trailers2 = useSelector(state => state.animes.trailers2);
  const Episodes = useSelector(state => state.animes?.clickedEpisode?.episodes)
  // const Episode=JSON.parse(Episodes[0]);console.log(Episode)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getTrailers2())
    dispatch(getEpisode({id:id,season:season,animeName:animeName }));console.log(season);console.log(animeName)
  }, [])

  return (
    <div class="homeBackground">
      <div class="home">
        <nav>
          <li><a onClick={() => navigate("/")} href="">Home</a></li>
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
            <div class="newEpisodesBar"><h4 style={{ marginLeft: "1cm", color: "white" }}>Episode</h4 ></div>
            <div class="newEpisode" >

              {Episodes ? Episodes?.map(e => JSON.parse(e).number == number ? <Video url={JSON.parse(e)?.url} /> : null) : null}
              <div>
                comments section
              </div>
            </div>

          </div>
          <div class="subFirstSection">
            <div class="newAnimeBar"><h4 style={{ marginLeft: "1cm", color: "white" }}>New Animes</h4 ></div>
            <div class="newAnimes">
              {true && trailers2.map((e, i) => i < 5 ? <NewAnimes Rate={9 - i} animeName={e.animeName} animePicture={e.animePicture} season={e.season} Id={e._id} /> : null).reverse()}
              {true && trailers2.map((e, i) => i < 1 ? <NewAnimes Rate={i + 1} animeName={e.animeName} animePicture={e.animePicture} season={e.season} Id={e._id} /> : null)}
              {true && trailers2.map((e, i) => i < 3 ? <NewAnimes Rate={i + 1} animeName={e.animeName} animePicture={e.animePicture} season={e.season} Id={e._id} /> : null)}

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Episode