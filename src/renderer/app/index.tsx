import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/home';
import InitialSetting from './pages/initial-setting';
import useTheme from './utils/useTheme';
import { GlobalStyle } from './styles/global-styles';

export default function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<InitialSetting />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
