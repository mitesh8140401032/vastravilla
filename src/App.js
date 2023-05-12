import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Salwar_Suit from './Salwar_Suit';
import Saree from './Saree';
import Stitched from './Stitched';
import Wedding from './Wedding';
import Lehengas from './Lehengas';
import Test from './test';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Saree' element={<Saree />} />
        <Route path='/test' element={<Test />} />

        <Route path='/salwarSuit' element={<Salwar_Suit />} />
        <Route path='/Stitched' element={<Stitched />} />
        <Route path='/wedding' element={<Wedding />} />
        <Route path='/Lehengas' element={<Lehengas />} />

      </Routes>
    </BrowserRouter>
  );
}



// img dowland
// shopkund.com
