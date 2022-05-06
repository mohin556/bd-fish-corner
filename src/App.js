import logo from './logo.svg';
import './App.css';
import FeaturedItem from './components/FeaturedItem/FeaturedItem';
import Advantages from './components/Advantages/Advantages';
import FishImage from './components/FishImage/FishImage';
import DiscountOffer from './components/DiscountOffer/DiscountOffer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
       <FeaturedItem />
       <Advantages />
       <FishImage />
       <DiscountOffer />
    </div>
  );
}

export default App;
