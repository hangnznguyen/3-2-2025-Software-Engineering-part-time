import { Routes, Route } from 'react-router-dom';
import Home from './EXERCISE4&5/Pages/Home';
import Login from './EXERCISE4&5/Pages/Login';
import BitcoinRates from './EXERCISE4&5/Pages/BitcoinRates';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bitcoin" element={<BitcoinRates />} />
    </Routes>
  );
}

export default AppRoutes;