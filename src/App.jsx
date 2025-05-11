import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Landing } from './pages/Landing';
import { OutputDisplay } from './pages/OutputDisplay';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="OutputDisplay" element={<OutputDisplay />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;