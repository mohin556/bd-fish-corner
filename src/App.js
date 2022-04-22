import logo from './logo.svg';
import './App.css';
import FeaturedItem from './components/FeaturedItem/FeaturedItem';
import Advantages from './components/Advantages/Advantages';
import FishImage from './components/FishImage/FishImage';
import DiscountOffer from './components/DiscountOffer/DiscountOffer';

function App() {
  return (
    <div className="App">
       <FeaturedItem />
       <Advantages />
       <FishImage />
       <DiscountOffer />
    </div>
  );
}

export default App;
