import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOUT } from '../Redux/usersSlice'
import { getTrailers, getTrailers2, getEpisode,modifyEpisode } from '../Redux/animeSlice'
import { useEffect } from 'react'
import NewAnimes from '../animeComponents/newAnimes'
import { useLocation } from 'react-router-dom';
import Video from '../animeComponents/video'
import swil from "sweetalert2"
import Swal from 'sweetalert2'

const Episode = () => {
  const location = useLocation();//console.log(location)
  let {  number, season, animeName } = useParams();//console.log(number)
  const user = JSON.parse(localStorage.getItem('user'))
  const authorized = useSelector(state => state.Users.authorized)

  const trailers2 = useSelector(state => state.animes.trailers2);
  const Episodes = useSelector(state => state.animes?.clickedEpisode?.episodes)
  const Id=useSelector(state => state.animes?.clickedEpisode?._id);console.log(Id)
  //Episodes?console.log(Episodes[Episodes.length-1]):console.log("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
   const [url, seturl] = useState({number:number});console.log(url)
   const [oldUrl, setOldUrl] = useState({number:"",url:""});console.log(oldUrl)
   const data = new FormData();
   data.append('number',url.number);
   data.append('url', url.url);
  useEffect(() => {

    authorized ? navigate() : navigate("/")
    dispatch(getTrailers2())
    dispatch(getEpisode({ season: season, animeName: animeName }));//console.log(season); console.log(animeName)
    Episodes?.map(e => JSON.parse(e).number == number ?  setOldUrl({...oldUrl,number:number,url:JSON.parse(e).url}) : null) 
  }, [number])

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
            <div class="newEpisodesBar">
              <h4 style={{ marginLeft: "1cm", color: "white" }}>Episode</h4 >
              <button style={{marginLeft:"5cm"}} type="button" class="btn btn-danger" 
              onClick={()=>Swal.fire({text:"Url :",input: 'text'}).then(result=>result.isConfirmed?seturl({number:number,url:result.value}):null)} >Add/Modify</button>
              <button type="button" class="btn btn-danger" onClick={()=>{alert("it's working")}} >Delete</button>
              </div>
            <div class="newEpisode" >
              <div class="episodeVideo">
                <div class="videoSpace">{Episodes ? Episodes?.map(e => JSON.parse(e).number == number ? <Video url={JSON.parse(e)?.url} />  : null) : null}</div>
                <div class="nextPrevious">
                  {Episodes?parseInt(number)>Math.min(...Episodes.map(e=>JSON.parse(e).number))? <button onClick={()=>{navigate(`/watch/${animeName}/${season||0}/${parseInt(number)-1}`);dispatch(getTrailers2())}} > &lt;&lt; previous episode</button>:null:null}
                  {Episodes?parseInt(number)<Math.max(...Episodes.map(e=>JSON.parse(e).number))? <button onClick={()=>{navigate(`/watch/${animeName}/${season||0}/${parseInt(number)+1}`);dispatch(getTrailers2());}}>&nbsp;&nbsp;next episode&nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt;</button>:null:null}
                    
                  </div>
                   if you can't watch the video please try to reload page
              </div>
              <div class="episodeComments">
                comments section
              </div>
            </div>

          </div>
          <div class="subFirstSection">
            <div class="newAnimeBar"><h4 style={{ marginLeft: "1cm", color: "white" }}>New Animes</h4 ></div>
            <div class="newAnimes">
              {true && trailers2.map((e, i) => i < 8 ? <NewAnimes Rate={9 - i} animeName={e.animeName} animePicture={e.animePicture} season={e.season} Id={e._id} /> : null).reverse()}
              {true && trailers2.map((e, i) => i < 1 ? <NewAnimes Rate={i + 1} animeName={e.animeName} animePicture={e.animePicture} season={e.season} Id={e._id} /> : null)}

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Episode