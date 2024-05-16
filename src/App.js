import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import VisitorForm from './Pages/VisitorForm';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<Signup />}  />
        <Route path="/visitorForm" element={<VisitorForm />}  />
      </Routes>
    </div>
  );
}

export default App;
