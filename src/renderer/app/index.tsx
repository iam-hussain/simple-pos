import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/scss/bootstrap.scss';

// import 'bootstrap/scss/functions';
// import 'bootstrap/scss/_variables.scss';
// import 'bootstrap/scss/mixins';
import './styles/global.scss';

import Home from './pages/home';
import InitialSetting from './pages/initial-setting';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialSetting />} />
      </Routes>
    </Router>
  );
}
