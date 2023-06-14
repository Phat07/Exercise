import './App.css';
import Navigation from './Components/Navigation';
import Player from './Components/Player';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Detail from './Components/Detail';
import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [color, setColor] = useState('white')
  function handleChange(item) {
    console.log(item)
    setColor(item)
  }
  useEffect(() => {
    setColor('black')
  }, [])
  return (
    <div className="App" style={{ backgroundColor: `${color}` }}>
      <Navigation handleChange={handleChange} />
      <Routes>
        <Route path='/' element={<Player />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
