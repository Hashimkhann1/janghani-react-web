import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Header from './component/Header/Header';
import ProductList from './component/Home/productList/ProductList';
import ProductMainList from './component/Home/productList/ProductMainList';
import ProductDetail from './component/Home/productList/ProductDetail';
import DeliveryInformation from './component/custemerInformation/DeliveryInformation';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/main-list' element={<ProductMainList />} />
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='/deli-detail/:id' element={<DeliveryInformation />} />
      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
