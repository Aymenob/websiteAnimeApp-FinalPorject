import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOUT } from '../Redux/usersSlice'
import { getTrailers, getTrailers2,addTrailer,cleanTrailerErreurs,searchTrailer,random } from '../Redux/animeSlice'
import { useEffect } from 'react'
import NewEpisode from '../animeComponents/newEpisode'
import NewAnimes from '../animeComponents/newAnimes'
import Modals from '../animeComponents/modal'
import { useState } from 'react'
import Swal from 'sweetalert2'
import HomeDropDown from '../animeComponents/HomeDropDown'
import GenreDropDown from '../animeComponents/genreDropDown'
import PageBtn from '../animeComponents/pageBtn'
const Home = () => {
  const admin=useSelector(state=>state.Users.user?.Role)
  const user = JSON.parse(localStorage.getItem('user'))
  const authorized = useSelector(state => state.Users.authorized)
  const trailers = useSelector(state => state.animes?.trailers)
  const trailers2 = useSelector(state => state.animes?.trailers2);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getTrailers())
    dispatch(getTrailers2())
  }, [])
  const [TRInfo, setTRInfo] = useState({});//console.log(TRInfo)
  const handleClose = () => {setShow(false);setTRInfo({})};const [show, setShow] = useState(false);const handleShow = () => {setShow(true);dispatch(cleanTrailerErreurs())};
  const handleSubmit = () => {dispatch(addTrailer( TRInfo)).then(result=>{result.payload._message==="Trailer validation failed"?Swal.fire({text:"empty input fields",icon:"warning",showConfirmButton:false,timer:1000,showCloseButton:true}):dispatch(getTrailers2())})}
  const [page, setpage] = useState(1);
  const handlePage=(e)=>{setpage(parseInt(e.target.name))};//console.log(page)
  return (
    <div class="HomeBackground">
      <div class="Home">
        <nav>
          
          
          <li><a onClick={() => navigate("/")} href="/">Home</a></li>
          <li><a href="#news" onClick={(e)=>dispatch(random()).then(result=>navigate(`/watch/${result.payload[0].animeName}/${result.payload[0].season||0}`))}>Random</a></li>
          
          <GenreDropDown handleSearch2={(e) => { dispatch(searchTrailer({genre:[e.target.name]})).then(result=>navigate("/HomeSearch")) }}/>
          <input style={{marginLeft:"4cm"}} onKeyDown={(e)=>e.keyCode==13?navigate("/HomeSearch",{state:e.target.value}):null} onChange={(e)=>{dispatch(searchTrailer({animeName:e.target.value}))}} type="search"></input>
          <svg style={{ marginLeft: "0.3cm" }}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <div class="container">
           
            <HomeDropDown handleSingOut={() => { dispatch(logOUT()); navigate("/") }} handleRegister={() => { navigate("/Register") }} src={user ? user.Image?.path : "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"} user={user} authorized={authorized}/>

          </div>
        </nav>
        <section class="firstSection">
          <div class="subFirstSection">
            
            <div class="newEpisodesBar">
            <div class="PagesBtn">{[1,2,3,4,5].map(e=><PageBtn handlePage={handlePage}  number={e}/>)}</div>

              <h4 style={{ marginLeft: "1cm", color: "white" }}>New Episodes</h4 >
              {admin==="admin"?<Modals handleSubmit={handleSubmit} handleNumber={(e)=>setTRInfo({...TRInfo,[e.target.name]:e.target.value})} handleUrl={(e)=>setTRInfo({...TRInfo,[e.target.name]:e.target.value})} handleClose={handleClose} handleShow={handleShow} show={show}/>:null}
              </div>
            <div class="newEpisodes">
              
               {true && trailers?.map((e,i) =>  i<=((page-1)*12)+11&&i>=((page-1)*12)+0?e.episodes?.map((d, i) => Math.max(...e.episodes.map(f => JSON.parse(f).number))==JSON.parse(d).number  ? 
              <NewEpisode  number={JSON.parse(d).number} url={JSON.parse(d).url} animePicture={e.animePicture} animeName={e.animeName} season={e.season} Id={e._id} /> : null):null)}


            </div>
          </div>
          <div class="subFirstSection">
            <div class="newAnimeBar">
              <h4 style={{ marginLeft: "1cm", color: "white" }}>New Animes</h4 >
             

            </div>
            <div class="newAnimes">
              {true && trailers2?.map((e, i) => i < 9 ? <NewAnimes Rate={9 - i} animeName={e.animeName} animePicture={e.animePicture} season={e.season} Id={e._id} /> : null)}

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