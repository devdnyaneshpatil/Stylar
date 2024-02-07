import './App.css'
import Homepage from './pages/Homepage'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App
