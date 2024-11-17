import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Swiper from './components/Swiper';
import SelectGenre from './components/Genre';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Swiper></Swiper>
      <SelectGenre></SelectGenre>
    </div>
  );
}

export default App;
