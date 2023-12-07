import './scss/main.scss';
import LoginPage from './components/page/LoginPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './components/page/RegisterPage';
import MenuPage from './components/page/MenuPage';
import SettingPage from './components/page/SettingPage';
import { AuthProvider } from './components/context/AuthContext';
import CartProvider from './components/context/CartContext';
import CartPage from './components/page/CartPage';
import AdminBeansPage from './components/page/AdminBeansPage';
import HomePage from './components/page/HomePage';
import HistoryPage from './components/page/HistoryPage';

function App() {
  const basename = import.meta.env.PUBLIC_URL ? '/' : '/coffee-shop/';

  return (
    <BrowserRouter basename={basename}>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="*" element={<LoginPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/admin/main" element={<AdminBeansPage />}></Route>
            <Route path="/setting" element={<SettingPage />}></Route>
            <Route path="/checkout" element={<HistoryPage />}></Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
