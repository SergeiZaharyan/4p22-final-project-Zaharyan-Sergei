import './App.css';
import BodyShop from './components/MyComponent/BodyShop/BodyShop';
import FooterShop from './components/MyComponent/FooterShop/FooterShop';
import HeaderShop from './components/MyComponent/HeaderShop/HeaderShop';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <HeaderShop className="AppHeaderShop" /> 
      <div className="MainShop">
        <Routes>
          <Route index path="/" element={<BodyShop/>} />
          <Route  path="/signIn" element={<SignIn/>} />
          <Route  path='/signUp' element={<SignUp/>} /> 
        </Routes>
      </div>
      <FooterShop className="AppFooterShop" />
        
    </div>
  );
}

export default App;
