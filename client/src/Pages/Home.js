import React from 'react'

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div class="HomeBackground">

      <div class="Home">
        <nav>

          <li><a href="#home">Anime List</a></li>
          <li><a href="#news">Random Anime</a></li>
          <li><a href="#contact">Genres</a></li>
          <li><a href="#about">Popular</a></li>
          <input type="search"></input><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
          <div class="container">
            <div class="Dropdown">
              <button class="link dropdown-toggle" type="button" >
                <img class="rounded-circle " alt="" src={user?user.Image.path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zh3zLDwF4t9ZB-qKYUsiT3zbwrVMAOOewb2mqmIyif1qifJnxo7T-c_k2jsxYbWENqs&usqp=CAU"} />
                {!user?<span>Login</span>:<span>Logout</span>}<span class="caret"></span>
              </button>
              <div class="Dropdown-menu" role="menu" aria-labelledby="menu1">
                <li><a role="menuitem" tabindex="-1" href="#">Menu item 1</a></li>
                <li><a role="menuitem" tabindex="-1" href="#">Menu item 2</a></li>
                <li><a role="menuitem" tabindex="-1" href="#">Menu item 3</a></li>
                
                <li><a role="menuitem" tabindex="-1" href="#">Menu item 4</a></li>
              </div>
            </div>
          </div>
          
        </nav>
     
        
      </div>
    </div>
  )
}

export default Home