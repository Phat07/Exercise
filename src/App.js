import './App.css';
import Navigation from './Components/Navigation';
// import Player from './Components/Player';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { useState, useEffect } from 'react';
function App() {
  const [color,setColor]=useState('white')
  function handleChange(item){
    console.log(item)
    setColor(item)
  }
  useEffect(()=>{
    setColor('black')
  },[])
  return (
    <div className="App" style={{backgroundColor: `${color}`}}>      
      <Navigation handleChange={handleChange}/>
      {/* <Player/> */}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
