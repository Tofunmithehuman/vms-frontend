import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<Signup />}  />

      </Routes>
    </div>
  );
}

export default App;
