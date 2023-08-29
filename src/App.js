import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import FetchData from './components/FetchData';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  path='/general' element={<FetchData cat='general'/>} />
        <Route  path='/bussiness' element={<FetchData cat='bussiness'/>} />
        <Route  path='/entertainment' element={<FetchData cat='entertainment'/>} />
        <Route  path='/sports' element={<FetchData cat='sports'/>} />
        <Route  path='/science' element={<FetchData cat='science'/>} />
        <Route  path='/technology' element={<FetchData cat='technology'/>} />
       
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
