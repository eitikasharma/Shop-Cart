import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    
    <div>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
