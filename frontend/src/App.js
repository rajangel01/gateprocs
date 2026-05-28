import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './components/Auth.css';
import Signup from './components/Signup'
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Admin from './components/Admin';
import UserHome from './components/UserHome';
import UserDashboard from './components/UserDashboard';
import Tests from './components/Tests';
import TestInterface from './components/TestInterface';

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <BrowserRouter>
    <Navbar/>
    {/* <Space/> */}
    <Routes>
      {isLoggedIn?(<Route path='/home' element={<UserHome/>} />):(<Route path='/' element={<Home/>} />)}
      {isLoggedIn?(<Route path='/home' element={<UserHome/>} />):(<Route path='/signup' element={<Signup/>} />)}
      {isLoggedIn?(<Route path='/home' element={<UserHome/>} />):(<Route path='/login' element={<Login/>} />)}
      {isLoggedIn?(<Route path='/dashboard' element={<UserDashboard/>} />):(<Route path='/login' element={<Login/>} />)}
      {isLoggedIn?(<Route path='/tests' element={<Tests/>} />):(<Route path='/' element={<Home/>} />)}
      
      <Route path='/info' element={<Info/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/testinterface' element={<TestInterface/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
