import React from 'react'
import { Link } from 'react-router-dom'


const GenreDropDown = ({ handleSingOut, handleRegister, user, handleSearch2 }) => {
    return (

        <div class="Dropdown2">
            <button style={{ color: "white",fontSize:"Large",fontWeight:"500" }} class="link -toggle" type="button" >

                {!user}genre
            </button>
            <div class="Dropdown-menu2" role="menu" aria-labelledby="menu1">
                {["Action","Adventure","Cars","Comedy","Crime","Dementia","Demons","Drama","Dub","Vampire","Family","Fantasy","Game","Harem","Horror",
                "Historical","Kids","Josei","Martial Arts","Magic","Military","Mecha","Mystery","Music","Police","Parody","Romance","Psychological","School","Samurai"
                ,"Seinen","Sci-Fi","Shoujo Ai","Shoujo","Shounen Ai","Shounen","Space","Slice of Life","Super Power","Sports","Thriller","Supernatural"   ].map(e=><li><a onClick={handleSearch2}  name={e}    role="menuitem" tabindex="-1" href="#">{e}</a></li>)}
               

            </div>
        </div>

    )
}

export default GenreDropDown