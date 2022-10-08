
import './App.css';
import Login from './Pages/login';
import Profile from './Pages/profile';
import Register from './Pages/register';
import Admin from './Pages/admin';
import AdminOnly from './Pages/adminOnly';
import Home from './Pages/Home.js';
import Episode from './Pages/Episode';
import Trailer from './Pages/EpisodeTrailer';
import { PrivateRoute } from './PrivateRoute';
import {Routes,Route} from "react-router-dom";
import HomeSearch from './Pages/HomeSearch';
import Random from './Pages/Random.js';
function App() {
  return (
    <Routes>
      <Route path='/Login' element={<Login/>}  />
      <Route path='/Profile' element={<Profile/>}  />
      <Route path='/Register' element={<Register/>}  />
      <Route path='/Admin' element={<Admin/>}  />
      <Route path="/AdminOnly" element={<PrivateRoute children={<AdminOnly/>}/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/watch/:animeName/:season/:number" element={<Episode/>}/>
      <Route path="/watch/:animeName/:season" element={<Trailer/>}/>
      <Route path="/HomeSearch" element={<HomeSearch/>}/>
      <Route path="/Random" element={<Random/>}/>
    </Routes>
  );
}

export default App;