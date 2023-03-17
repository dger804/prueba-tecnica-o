import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Dashboard } from "./components/Dashboard"
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  return (
    <div className="bg-slate-300 h-screen text-white flex">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes> 
    </div>
  );
}

export default App;
