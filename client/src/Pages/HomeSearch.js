import React, { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOUT } from '../Redux/usersSlice'
import { getTrailers, getTrailers2, searchTrailer, cleanTrailers,random} from '../Redux/animeSlice'
import { useEffect} from 'react'
import NewEpisode from '../animeComponents/newEpisode'
import NewAnimes from '../animeComponents/newAnimes'
import SearchTrailer from '../animeComponents/searchedTrailer'
import Modals from '../animeComponents/modal'
import { useState } from 'react'
import Swal from 'sweetalert2'
import HomeDropDown from '../animeComponents/HomeDropDown'
import GenreDropDown from '../animeComponents/genreDropDown'
import PageBtn from '../animeComponents/pageBtn'

const HomeSearch = () => {
    const admin = useSelector(state => state.Users.user?.Role)
    const user = JSON.parse(localStorage.getItem('user'))
    const authorized = useSelector(state => state.Users.authorized)
    const trailers3 = useSelector(state => state.animes?.searchedTrailers)
    const trailers2 = useSelector(state => state.animes?.trailers2);
    const trailers = useSelector(state => state.animes?.trailers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getTrailers())
        dispatch(getTrailers2())

    }, [])
    const [search, setsearch] = useState("");//console.log(search)
    const { state } = useLocation(); console.log(state);
    const [page, setpage] = useState(1);
  const handlePage=(e)=>{setpage(parseInt(e.target.name))};
    return (
        <div class="HomeBackground">
            <div class="Home">
                <nav>
                    
                    <li><a onClick={() => navigate("/")} href="/">Home</a></li>
                    <li><a href="#news" onClick={(e)=>dispatch(random()).then(result=>navigate(`/watch/${result.payload[0].animeName}/${result.payload[0].season||0}`))}>Random</a></li>
                    <GenreDropDown handleSearch2={(e) => { dispatch(searchTrailer({genre:[e.target.name]})).then(result=>navigate("/HomeSearch")) }}/>
                    <input style={{marginLeft:"4cm"}}  defaultValue={state} onChange={(e) => { setsearch(e.target.value); dispatch(searchTrailer({ animeName: e.target.value||state })) }} type="search" autofocus="autofocus" ></input><svg style={{ marginLeft: "0.3cm" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <div class="container">
                    <HomeDropDown handleSingOut={() => { dispatch(logOUT())}} handleRegister={() => { navigate("/Register") }} src={user ? user.Image?.path : "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"} user={user} authorized={authorized}/>

                    </div>
                </nav>
                <section class="firstSection">
                    <div class="subFirstSection">
                        <div class="newEpisodesBar">
                            <h4 style={{ marginLeft: "1cm", color: "white" }}>Searched Animes</h4 >
                            <div class="PagesBtn">{[1,2,3,4,5].map(e=><PageBtn handlePage={handlePage}  number={e}/>)}</div>
                        </div>
                        <div class="newEpisodes">
                            {false&&trailers3?.map(e => e.episodes?.map((d, i) => Math.max(...e.episodes.map(f => JSON.parse(f).number)) == JSON.parse(d).number ? <SearchTrailer number={JSON.parse(d).number} url={JSON.parse(d).url} animePicture={e.animePicture} animeName={e.animeName} season={e.season} Id={e._id} /> : null))}
                            {true && trailers3?.map((e,i) =>  i<=((page-1)*12)+11&&i>=((page-1)*12)+0?e.episodes?.map((d, i) => Math.max(...e.episodes.map(f => JSON.parse(f).number)) == JSON.parse(d).number ? <SearchTrailer number={JSON.parse(d).number} url={JSON.parse(d).url} animePicture={e.animePicture} animeName={e.animeName} season={e.season} Id={e._id} /> : null):null)}

                        </div>
                    </div>
                    <div class="subFirstSection">
                        <div class="newAnimeBar">
                            <h4 style={{ marginLeft: "1cm", color: "white" }}>New Animes</h4 >


                        </div>
                        <div class="newAnimes">
                            {true && trailers2?.map((e, i) => <NewAnimes Rate={9 - i} animeName={e.animeName} animePicture={e.animePicture} season={e.season} Id={e._id} /> )}

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

export default HomeSearch