import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/commons/Header';
import GlobalStyle from './styles/Globalstyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<div>Root</div>} />
        <Route path="/fruitstore" element={<div>상품 전체 조회 페이지</div>} />
        <Route path="/fruitstore/:product_id" element={<div>상품 상세 페이지</div>} />
        <Route path="/shop_payment/:product_id" element={<div>상품 주문 페이지</div>} />
        <Route path="/shop_payment/complete" element={<div>주문 내역 확인 페이지</div>} />
        <Route path="/admin" element={<div>관리자 페이지</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
