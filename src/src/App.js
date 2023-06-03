import './App.css';
import Navigation from './Components/Navigation';
// import Player from './Components/Player';

import Footer from './Components/Footer';
import Main from './Components/Main';
function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <Player/> */}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
