import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Landing } from './pages/Landing';
import { OutputDisplay } from './pages/OutputDisplay';
import { InputDisplay } from './pages/InputDisplay';
import { Provider } from 'react-redux';
import { store } from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="OutputDisplay" element={<OutputDisplay />} />
            <Route path="InputDisplay" element={<InputDisplay />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;