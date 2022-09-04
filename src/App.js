import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Header from './components/commons/Header';
import productAtom from './store/productAtom';
import orderAtom from './store/orderAtom';
import GlobalStyle from './styles/Globalstyles';
import ProductData from './data/product.json';
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
        <Route path="/fruitstore" element={<ListPage />} />
        <Route path="/fruitstore/:product_id" element={<div>상품 상세 페이지</div>} />
        <Route path="/shop_payment/:product_id" element={<div>상품 주문 페이지</div>} />
        <Route path="/shop_payment/complete" element={<PaymentComplet />} />

        <Route path="/admin" element={<div>관리자 페이지</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
