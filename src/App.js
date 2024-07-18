import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import VisitorForm from './Pages/VisitorForm';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/visitorForm" element={<ProtectedRoute element={<VisitorForm />} />} />
      </Routes>
    </div>
  );
}

export default App;
