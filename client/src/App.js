
import './App.css';
import Login from './Pages/login';
import Profile from './Pages/profile';
import Register from './Pages/register';
import Admin from './Pages/admin';
import AdminOnly from './Pages/adminOnly';
import Home from './Pages/Home.js';
import Episode from './Pages/Episode';
import { PrivateRoute } from './PrivateRoute';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path='/Login' element={<Login/>}  />
      <Route path='/Profile' element={<Profile/>}  />
      <Route path='/Register' element={<Register/>}  />
      <Route path='/Admin' element={<Admin/>}  />
      <Route path="/AdminOnly" element={<PrivateRoute children={<AdminOnly/>}/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/watch/:animeName/:season/:number/:id" element={<Episode/>}/>

    </Routes>
  );
}

export default App;