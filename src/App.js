import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Players from './components/Players';
import News from "./components/News";

function App() {
  return (
    <div className='App'>
      <Navigation />
      {/* <Main/> */}
      <Routes>
        <Route path='/' element={<Players />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/news' element={<News />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
