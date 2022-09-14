import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeSwitch from './components/organisms/theme-switch';

import Home from './pages/home';
import InitialSetting from './pages/initial-setting';
import OrderBoard from './pages/order-board';
import Products from './pages/products';
import CustomThemeProvider from './theme-provider';

export default function App() {
  return (
    <CustomThemeProvider>
      <>
        <ThemeSwitch />
        <Router>
          <Routes>
            <Route path="/order" element={<OrderBoard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/s" element={<InitialSetting />} />
            <Route path="/" element={<Products />} />
          </Routes>
        </Router>
      </>
    </CustomThemeProvider>
  );
}
