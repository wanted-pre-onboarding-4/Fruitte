import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Header from './components/commons/Header';
import productAtom from './store/productAtom';
import FruitStoreDetailPage from './pages/fruitstore/[product_id]';
import orderAtom from './store/orderAtom';
import GlobalStyle from './styles/Globalstyles';
import ProductData from './data/product.json';
import AuthManagement from './pages/admin/AuthManagement';
import ListPage from './pages/ListPage';
import OrderData from './data/order.json';
import PaymentComplet from './pages/PaymentComplete';

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
        <Route path="/" element={<div>Root</div>} />
        <Route path="/fruitstore" element={<div>상품 전체 조회 페이지</div>} />
        <Route path="/fruitstore/:product_id" element={<FruitStoreDetailPage />} />
        <Route path="/fruitstore" element={<ListPage />} />
        <Route path="/fruitstore/:product_id" element={<div>상품 상세 페이지</div>} />
        <Route path="/shop_payment/:product_id" element={<div>상품 주문 페이지</div>} />
        <Route path="/shop_payment/complete" element={<div>주문 내역 확인 페이지</div>} />
        <Route path="/admin" element={<div>관리자 등록페이지</div>} />
        <Route path="/admin/management" element={<AuthManagement />} />
        <Route path="/shop_payment/complete" element={<PaymentComplet />} />

        <Route path="/admin" element={<div>관리자 페이지</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
