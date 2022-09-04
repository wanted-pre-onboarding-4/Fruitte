import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Header from './components/commons/Header';
import productAtom from './store/productAtom';
import FruitStoreDetailPage from './pages/fruitstore/[product_id]';
import orderAtom from './store/orderAtom';
import GlobalStyle from './styles/Globalstyles';
import ProductData from './data/product.json';
import Order from './pages/order/Order';
import AuthManagement from './pages/admin/AuthManagement';
import ListPage from './pages/ListPage';
import OrderData from './data/order.json';
import PaymentComplet from './pages/PaymentComplete';
import AuthRegister from './pages/admin/AuthRegister';
import Footer from './components/commons/Footer';

function App() {
  const setProductData = useSetRecoilState(productAtom);
  const setOrderData = useSetRecoilState(orderAtom);
  useEffect(() => {
    setProductData(ProductData);
  }, []);

  useEffect(() => {
    setOrderData(OrderData);
  });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/fruitstore" />} />
        <Route path="/fruitstore/:product_id" element={<FruitStoreDetailPage />} />
        <Route path="/fruitstore" element={<ListPage />} />
        <Route path="/shop_payment/:product_id" element={<Order />} />
        <Route path="/admin" element={<div>관리자 등록페이지</div>} />
        <Route path="/admin/register" element={<AuthRegister />} />
        <Route path="/admin/management" element={<AuthManagement />} />
        <Route path="/shop_payment/complete" element={<PaymentComplet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
