import './App.css';
import BodyShop from './components/MyComponent/BodyShop/BodyShop';
import FooterShop from './components/MyComponent/FooterShop/FooterShop';
import HederShop from './components/MyComponent/HederShop/HederShop';
//import MyComponent from './components/MyComponent/MyComponent';
function App() {
  return (
    <div className="App">
      <HederShop />
      <BodyShop />
      <FooterShop />
    </div>
  );
}

export default App;
