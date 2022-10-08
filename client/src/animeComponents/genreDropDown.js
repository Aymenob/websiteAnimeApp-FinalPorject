import React from 'react'
import { Link } from 'react-router-dom'


const GenreDropDown = ({ handleSingOut, handleRegister, src, user, authorized }) => {
    return (

        <div class="Dropdown2">
            <button style={{ color: "white" }} class="link dropdown-toggle" type="button" >

                {!user}genre
            </button>
            <div class="Dropdown-menu2" role="menu" aria-labelledby="menu1">
                {["Action","Adventure","Cars","Comedy","Crime","Dementia","Demons","Drama","Dub","Vampire","Family","Fantasy","Game","Harem","Horror",
                "Historical","Kids","Josei","Martial Arts","Magic","Military","Mecha","Mystery","Music","Police","Parody","Romance","Psychological","School","Samurai"
                ,"Seinen","Sci-Fi","Shoujo Ai","Shoujo","Shounen Ai","Shounen","Space","Slice of Life","Super Power","Sports","Thriller","Supernatural"   ].map(e=><li><a onClick={()=>(alert("working"))}  name={e}    role="menuitem" tabindex="-1" href="#">{e}</a></li>)}
               { false&&<li><a onClick={handleSingOut}  name="Adventure" role="menuitem" tabindex="-1" href="#">Adventure</a></li>&&
                false&&<li><a onClick={handleRegister} name="Cars"      role="menuitem" tabindex="-1" href="#">Cars</a></li>&&
                false&&<li><a onClick={handleRegister} name="Comedy"    role="menuitem" tabindex="-1" href="#">Comedy</a></li>&&
                false&&<li><a onClick={handleRegister} name="Crime"     role="menuitem" tabindex="-1" href="#">Crime</a></li>&&
                false&&<li><a onClick={handleRegister} name="Dementia"  role="menuitem" tabindex="-1" href="#">Dementia</a></li>&&
                false&&<li><a onClick={handleRegister} name="Demons"    role="menuitem" tabindex="-1" href="#">Demons</a></li>&&
                false&&<li><a onClick={handleRegister} name="Drama"     role="menuitem" tabindex="-1" href="#">Drama</a></li>&&
                false&&<li><a onClick={handleRegister} name="Dub"       role="menuitem" tabindex="-1" href="#">Dub</a></li>&&
                false&&<li><a onClick={handleRegister} name="Vampire"   role="menuitem" tabindex="-1" href="#">Vampire</a></li>&&
                false&&<li><a onClick={handleSingOut}  name="Family"    role="menuitem" tabindex="-1" href="#">Family</a></li>&&
                false&&<li><a onClick={handleRegister} name="Fantasy"   role="menuitem" tabindex="-1" href="#">Fantasy</a></li>&&
                false&&<li><a onClick={handleRegister} name="Game"      role="menuitem" tabindex="-1" href="#">Game</a></li>&&
                false&&<li><a onClick={handleRegister} name="Harem"     role="menuitem" tabindex="-1" href="#">Harem</a></li>&&
                false&&<li><a onClick={handleRegister} name="Horror"    role="menuitem" tabindex="-1" href="#">Horror</a></li>&&
                false&&<li><a onClick={handleRegister} name="Historical"role="menuitem" tabindex="-1" href="#">Historical</a></li>&&
                false&&<li><a onClick={handleRegister} name="Kids"      role="menuitem" tabindex="-1" href="#">Kids</a></li>&&
                false&&<li><a onClick={handleRegister} name="Josei"     role="menuitem" tabindex="-1" href="#">Josei</a></li>&&
                false&&<li><a onClick={handleRegister} name="Martial Arts" role="menuitem" tabindex="-1" href="#">Martial Arts</a></li>&&
                false&&<li><a onClick={handleSingOut}  name="Magic"     role="menuitem" tabindex="-1" href="#">Magic</a></li>&&
                false&&<li><a onClick={handleSingOut}  name="Military"  role="menuitem" tabindex="-1" href="#">Military</a></li>&&
                false&&<li><a onClick={handleRegister} name="Mecha"     role="menuitem" tabindex="-1" href="#">Mecha</a></li>&&
                false&&<li><a onClick={handleRegister} name="Mystery"   role="menuitem" tabindex="-1" href="#">Mystery</a></li>&&
                false&&<li><a onClick={handleRegister} name="Music"     role="menuitem" tabindex="-1" href="#">Music</a></li>&&
                false&&<li><a onClick={handleRegister} name="Police"    role="menuitem" tabindex="-1" href="#">Police</a></li>&&
                false&&<li><a onClick={handleRegister} name="Parody"    role="menuitem" tabindex="-1" href="#">Parody</a></li>&&
                false&&<li><a onClick={handleRegister} name="Romance"   role="menuitem" tabindex="-1" href="#">Romance</a></li>&&
                false&&<li><a onClick={handleRegister} name="Psychological"role="menuitem" tabindex="-1" href="#">Psychological</a></li>&&
                false&&<li><a onClick={handleRegister} name="School"    role="menuitem" tabindex="-1" href="#">School</a></li>&&
                false&&<li><a onClick={handleSingOut}  name="Samurai"   role="menuitem" tabindex="-1" href="#">Samurai</a></li>&&
                false&&<li><a onClick={handleSingOut}  name="Seinen"    role="menuitem" tabindex="-1" href="#">Seinen</a></li>&&
                false&&<li><a onClick={handleRegister} name="Sci-Fi"    role="menuitem" tabindex="-1" href="#">Sci-Fi</a></li>&&
                false&&<li><a onClick={handleRegister} name="Shoujo Ai" role="menuitem" tabindex="-1" href="#">Shoujo Ai</a></li>&&
                false&&<li><a onClick={handleRegister} name="Shoujo"    role="menuitem" tabindex="-1" href="#">Shoujo</a></li>&&
                false&&<li><a onClick={handleRegister} name="Shounen Ai"role="menuitem" tabindex="-1" href="#">Shounen Ai</a></li>&&
                false&&<li><a onClick={handleRegister} name="Shounen"   role="menuitem" tabindex="-1" href="#">Shounen</a></li>&&
                false&&<li><a onClick={handleRegister} name="Space"     role="menuitem" tabindex="-1" href="#">Space</a></li>&&
                false&&<li><a onClick={handleRegister} name="Slice of Life" role="menuitem" tabindex="-1" href="#">Slice of Life</a></li>&&
                false&&<li><a onClick={handleRegister} name="Super Power" role="menuitem" tabindex="-1" href="#">Super Power</a></li>&&
                false&&<li><a onClick={handleRegister} name="Sports" role="menuitem" tabindex="-1" href="#">Sports</a></li>&&
                false&&<li><a onClick={handleRegister} name="Thriller" role="menuitem" tabindex="-1" href="#">Thriller</a></li>&&
                false&&<li><a onClick={handleSingOut}  name="Supernatural" role="menuitem" tabindex="-1" href="#">Supernatural</a></li>}

            </div>
        </div>

    )
}

export default GenreDropDown