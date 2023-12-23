import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Details from "./components/details/Details";
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import Home from "./components/Home";
import Artilce from "./components/items/Article";
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Router>
        <Navbar />
     
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/items" element={<Artilce/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/cart" element={<Artilce/>} />
        </Routes>  
        <Footer/>   
    </Router>
      </header>
    </div>
  );
}

export default App;
