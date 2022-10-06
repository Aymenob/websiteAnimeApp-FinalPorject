import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOUT } from '../Redux/usersSlice'
import { getTrailers2, getEpisode,addEpisode } from '../Redux/animeSlice'
import { useEffect } from 'react'
import NewAnimes from '../animeComponents/newAnimes'
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import Video from '../animeComponents/video'
import EpisodesBtn from "../animeComponents/episodesBtn"
import ModalAddEp from '../animeComponents/modalAddEp'
import { useRef } from 'react'

const Trailer = () => {
  let {  season, animeName } = useParams();//console.log(number)
  const user = JSON.parse(localStorage.getItem('user'))
  const authorized = useSelector(state => state.Users.authorized)
  const admin=useSelector(state=>state.Users.user?.Role)
  const trailers2 = useSelector(state => state.animes?.trailers2);
  const Trailer = useSelector(state => state.animes?.clickedEpisode);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getTrailers2());dispatch(getEpisode({  season: season, animeName: animeName }));// console.log(season); console.log(animeName)
  }, [authorized])
  const formRef = useRef();
  const handleClick = () => { 
    formRef.current.reset();
  }
  const [EpInfo, setEpInfo] = useState({number:0,url:""});console.log(EpInfo);const [checked, setchecked] = useState(false)
  /*add Episode modal handles*/const handleClose = () => {setShow(false);setEpInfo({})};const [show, setShow] = useState(false);const handleShow = () => setShow(true);
  const data=new FormData();
  data.append("newEpisodes",JSON.stringify(EpInfo));data.append("New",checked);console.log(data.get("newEpisodes"));console.log(data.get("New"))
  const handleSubmit = () => {EpInfo.number<=0||EpInfo.url===""||EpInfo.number===""?alert("please verify your information"):dispatch(addEpisode({id:Trailer._id,Data:data})).then(result=>{setEpInfo({number:0,url:""});dispatch(getEpisode({  season: season, animeName: animeName }));handleClick()})}
  const handleNew=(e)=>{setchecked(e.target.checked)};
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
              <h4 style={{ marginLeft: "1cm", color: "white" }}>Anime Trailer</h4 >
              {admin==="admin"?<ModalAddEp formRef={formRef} handleNew={handleNew} handleSubmit={handleSubmit} handleNumber={(e)=>setEpInfo({...EpInfo,[e.target.name]:e.target.value})} handleUrl={(e)=>setEpInfo({...EpInfo,[e.target.name]:e.target.value})} handleClose={handleClose} handleShow={handleShow} show={show}/>:null}
              {admin==="admin"?<button onClick={()=>alert("are you sure you want to delete this trailer")}>Delete </button>:null}

            </div>
            <div class="newTrailer" >
              {Trailer ? (<Video url={Trailer.trailer} />) : null}
              <p style={{}}>Episodes :</p>
              <div class="buttons">
                {Trailer ? Trailer.episodes.map((e,i) => <EpisodesBtn season={Trailer.season} animeName={Trailer.animeName} number={JSON.parse(e).number} />): null}
               
                

              </div>
              {Trailer ? <p style={{width:"93%",maxHeight:"2cm" }}>{Trailer.animeDescription}</p> : null}

              
            </div>

          </div>
          <div class="subFirstSection">
            <div class="newAnimeBar"><h4 style={{ marginLeft: "1cm", color: "white" }}>New Animes</h4 ></div>
            <div class="newAnimes">
              {true && trailers2.map((e, i) => i < 9? <NewAnimes Rate={9 - i} animeName={e.animeName} animePicture={e.animePicture} season={e.season} Id={e._id} /> : null).reverse()}

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Trailer