import './App.css';
import Goods from './components/Goods/Goods';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <hr/>
        
        <Slider />
        <Goods />
      </div>
    </div>
  );
}

export default App;
