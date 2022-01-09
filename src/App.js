import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Explore" element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
