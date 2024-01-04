import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Productlist from './components/Productlist';
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Form from './components/Form';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/new-product' element={<Form />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
