
import './App.css';
import Home from './components/Home/Home';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import AddEvents from './components/AddEvents/AddEvents'
import Login from './components/Login/Login';
import OderDetails from './components/OderDetails/OderDetails';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Notfound from './components/NotFount/Notfound';
import OderList from './components/OderList/OderList';
import Lists from './components/Lists/Lists';
import UpdateItem from './components/UpdateItem/UpdateItem';
import View from './components/View/View';
import CheckOder from './components/CheckOder/CheckOder';
import AdvantureDetails from './components/Advanture/AdvantureDetails/AdvantureDetails';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        
    
    
     <Routes>
       
        <Route exact path="/" element={<Header />} />
        <Route exact path="/home" element={<Header />} />
        <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth> } />
        <Route path="/advantage/:id" element={< AdvantureDetails/>} />
        <Route path="/view/:id" element={< View/>} />
        <Route path="/check/:id" element={< CheckOder/>} />
        <Route path="login" element={<Login />} />
        <Route path="add." element={<AddEvents />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/total" element={<Lists />} />
        <Route path="/beadmin" element={<MakeAdmin />} />
        <Route path="/services/:oderId" element={ <RequireAuth><OderDetails /></RequireAuth> } />
        <Route path="/update/:id" element ={<UpdateItem />}  />
        <Route path="/lists" element={ <RequireAuth><OderList /> </RequireAuth> } />
       
        <Route path="*" element={<Notfound />} />
      </Routes>
     
    </div>
  );
}

export default App;
