import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/home';
import InitialSetting from './pages/initial-setting';
import CustomThemeProvider from './theme-provider';
import useTheme from './utils/useTheme';

export default function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<InitialSetting />} />
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
}
