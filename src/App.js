import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './Components/Cart/Cart';
import Pubg from './Components/Pubg/Pubg';
import Header from './Components/Header/Header';
import CopyRight from './Components/CopyRight/CopyRight';
import Steam from './Components/Steam/Steam';
import SuperCell from './Components/SuperCell/SuperCell';
import RocketLeague from './Components/Rocket/Rocket';
import Efootball from './Components/Efootball/Efootball';
import FreeFire from './Components/FreeFire/FreeFire';
import Riot from './Components/riot/Riot';
function App() {
  return (
    <div className="app container">
          <Router>
          <Header />
          <Routes>
          <Route path="*" element={ <Home />} />
          <Route path="/riot" element={ <Riot />} />
          <Route path="/cartpage" element={ <Cart />} />
          <Route path="/pubg" element={ <Pubg />} />
          <Route path="/steam" element={ <Steam />} />
          <Route path="/super" element={ <SuperCell />} />
          <Route path="/rocketleague" element={ <RocketLeague />} />
          <Route path="/efootball" element={ <Efootball />} />
          <Route path="/freefire" element={ <FreeFire />} />
        </Routes>
        <CopyRight className="copyRight"/>
    </Router>
    <div className='version text-white-50'>V 1.0.0</div>
    </div>
  );
}

export default App;
