import logo from './logo.svg';
import './App.css';
import FeaturedItem from './components/FeaturedItem/FeaturedItem';
import Advantages from './components/Advantages/Advantages';
import FishImage from './components/FishImage/FishImage';

function App() {
  return (
    <div className="App">
       <FeaturedItem />
       <Advantages />
       <FishImage />
    </div>
  );
}

export default App;
