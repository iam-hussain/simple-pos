import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './style/global.scss';

import Home from './page/home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
