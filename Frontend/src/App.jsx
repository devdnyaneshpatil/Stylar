import './App.css'
import Homepage from './pages/Homepage'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <Routes>
      <Route path="/" Component={Homepage } />
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/services" Component={Services} />
      <Route path="/contact" Component={Contact} />
    </Routes>
  );
}

export default App
