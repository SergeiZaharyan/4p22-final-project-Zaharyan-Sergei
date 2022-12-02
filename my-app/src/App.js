import './App.css';
import BodyShop from './components/MyComponent/BodyShop/BodyShop';
import FooterShop from './components/MyComponent/FooterShop/FooterShop';
import HeaderShop from './components/MyComponent/HeaderShop/HeaderShop';
import Feedback from './pages/Feedback/Feedback';
import BasketPages from './pages/Basket/Basket';

import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState('');
  const handelSearchChange = (search) => {
    setSearch(search)
  }
  return (
    <div className="App">
      <HeaderShop className="AppHeaderShop" onChange={handelSearchChange} /> 
      <div className="MainShop">
        <Routes>
          <Route index path="/" element={<BodyShop search={search} />} />
          <Route  path='/Feedback' element={<Feedback/>} /> 
          <Route  path='/basket' element={<BasketPages/>} /> 
          
        </Routes>
      </div>
      <FooterShop className="AppFooterShop" />
        
    </div>
  );
}

export default App;
