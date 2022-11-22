import './App.css';
import BodyShop from './components/MyComponent/BodyShop/BodyShop';
import FooterShop from './components/MyComponent/FooterShop/FooterShop';
import HederShop from './components/MyComponent/HederShop/HederShop';

function App() {
  return (
    <div className="App">
      <HederShop className="AppHederShop" />
      <BodyShop className="AppBodyShop" />
      <FooterShop className="AppFooterShop" />
    </div>
  );
}

export default App;
