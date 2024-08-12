import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import CustomerLogin from './components/Login';
import AllProduct from './components/AllProduct';
import Update from './components/Update';
import Details from './components/Details';
import Logout from './components/LogOut';
import Footer from './components/Footer';
import Create from './components/Create';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/update/:product_id" element={<Update />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:product_id" element={<Details />} />
        <Route path="/" element={
          <AllProduct />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
