import logo from './logo.svg';
import './App.css';
import FeaturedItem from './components/FeaturedItem/FeaturedItem';
import Advantages from './components/Advantages/Advantages';
import FishImage from './components/FishImage/FishImage';
import DiscountOffer from './components/DiscountOffer/DiscountOffer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import AddEvents from './components/AddEvents/AddEvents'
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
        
     
    
     <Routes>
       
        <Route exact path="/" element={<Header />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
        <Route path="add." element={<AddEvents />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
       
      </Routes>
     
    </div>
  );
}

export default App;
