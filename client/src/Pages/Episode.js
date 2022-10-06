import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOUT } from '../Redux/usersSlice'
import { getTrailers, getTrailers2, getEpisode, modifyEpisode,deleteEpisode } from '../Redux/animeSlice'
import { useEffect } from 'react'
import NewAnimes from '../animeComponents/newAnimes'
import { useLocation } from 'react-router-dom';
import Video from '../animeComponents/video'
import swil from "sweetalert2"
import Swal from 'sweetalert2'


const Episode = () => {
  const location = useLocation();//console.log(location)
  let { number, season, animeName } = useParams();//console.log(number)
  const user = JSON.parse(localStorage.getItem('user'))
  const authorized = useSelector(state => state.Users.authorized)
  const admin=useSelector(state=>state.Users.user?.Role)
  const trailers2 = useSelector(state => state.animes.trailers2);
  const Episodes = useSelector(state => state.animes?.clickedEpisode?.episodes)
  const Id = useSelector(state => state.animes?.clickedEpisode?._id); console.log(Id)


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [oldUrl, setOldUrl] = useState({number:number}); //console.log(oldUrl)
  const [url, seturl] = useState(null);// console.log(url)
   const data = new FormData();const data2=new FormData();
   data.append('episodes', JSON.stringify(oldUrl));console.log(data.get("episodes"))
   data.append('newEpisodes', JSON.stringify(url))
  for (var pair of data2.entries()) {
    //console.log(pair[0] + ', ' + pair[1]);
  }
  useEffect(() => {

    authorized ? navigate() : navigate("/")
    dispatch(getTrailers2())
    dispatch(getEpisode({ season: season, animeName: animeName })).then(result => result.payload.episodes?.map(e => JSON.parse(e).number == number ? setOldUrl({ ...oldUrl, number: number, url: JSON.parse(e).url }) : null)
);//console.log(season); console.log(animeName)
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
              {admin==="admin"?<button style={{ marginLeft: "4cm",color:"black" }} type="button" class="btn btn-primary"onClick={() => {Swal.fire({text: "Url :", input: 'text',}).then( result => result.isConfirmed? seturl({number:number,url:result.value}):null)}} >Modify</button>:null}
              {admin==="admin"?<button  style={{color:"black"}} type="button" class="btn btn-success" onClick={() => { url?Swal.fire({text: "are you sure you want to save changes?",confirmButtonText:"yes",confirmButtonColor:"green"}).then( result =>  result.isConfirmed ?  dispatch(modifyEpisode({ id: Id, Data: data }))&&window.location.reload() : null):Swal.fire({icon:'warning',text: "you didn't apply any changes",showCloseButton:true,showConfirmButton: false})}} >Save</button>:null}
              {admin==="admin"?<button  style={{color:"black"}} type="button" class="btn btn-danger" onClick={() => {;Swal.fire({text: "are you sure you want to delete The episode",showCloseButton:true,showConfirmButton: true,confirmButtonText:"yes",confirmButtonColor:"red"}).then(result=>result.isConfirmed?dispatch(deleteEpisode({id:Id,data:data}))&&oldUrl&&window.location.reload():null)}} >Delete</button>:null}

            </div>
            <div class="newEpisode" >
              <div class="episodeVideo">
                <div class="videoSpace">{Episodes ? Episodes?.map((e,i) => JSON.parse(e).number == number ? <Video url={JSON.parse(e)?.url} /> : null) : null}</div>
                <div class="nextPrevious">
                  {Episodes ? parseInt(number) > Math.min(...Episodes.map(e => JSON.parse(e).number)) ? <button onClick={() => { navigate(`/watch/${animeName}/${season || 0}/${parseInt(number) - 1}`); dispatch(getTrailers2()) }} > &lt;&lt; previous episode</button> : null : null}
                  {Episodes ? parseInt(number) < Math.max(...Episodes.map(e => JSON.parse(e).number)) ? <button onClick={() => { navigate(`/watch/${animeName}/${season || 0}/${parseInt(number) + 1}`); dispatch(getTrailers2()); }}>&nbsp;&nbsp;next episode&nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt;</button> : null : null}

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
              {true && trailers2.map((e, i) => i < 9 ? <NewAnimes Rate={9 - i} animeName={e.animeName} animePicture={e.animePicture} season={e.season} Id={e._id} /> : null).reverse()}

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Episode