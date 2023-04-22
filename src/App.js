import {Route, Routes} from "react-router-dom";
import  Navbar from"./Navbar"
import Home from './Home'
import AddReaminder from './AddReaminder';
import MyLists from './MyLists';
import NearbyNGOs from './NearbyNGOs';
import Login from './Login';


function App() {
    return (
      <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddReaminder" element={<AddReaminder />} />
          <Route path="/NearbyNGOs" element={<NearbyNGOs />} />
          <Route path="/MyLists" element={<MyLists />} />
          <Route path="Login" element={<Login />} />
        </Routes>

      </div>
      </>
    )  
      
    }
  



export default App;
