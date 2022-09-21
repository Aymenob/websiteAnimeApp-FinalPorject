
import './App.css';
import Login from './Pages/login';
import Profile from './Pages/profile';
import Register from './Pages/register';
import Admin from './Pages/admin';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}  />
      <Route path='/Profile' element={<Profile/>}  />
      <Route path='/Register' element={<Register/>}  />
      <Route path='/Admin' element={<Admin/>}  />
     

    </Routes>
  );
}

export default App;