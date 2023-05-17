import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Player from './Components/Player';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Player/>
      <Footer/>
    </div>
  );
}

export default App;
