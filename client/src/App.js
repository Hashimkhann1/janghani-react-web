import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Header from './component/Header/Header';
import ProductList from './component/Home/productList/ProductList';
import ProductMainList from './component/Home/productList/ProductMainList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/main-list' element={<ProductMainList />} />
      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
