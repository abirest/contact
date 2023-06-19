import {Routes, Route, Link}from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import AddEdit from "./Pages/AddEdit";
import NavComponent from "./components/NavComponent/NavComponent";
function App() {
  return (
    <div>
      <NavComponent/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/add" element={<AddEdit/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
