import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Landing } from './pages/Landing';
import { OutputDisplay } from './pages/OutputDisplay';
import { InputDisplay } from './pages/InputDisplay';
import { Testimonials } from './components/Testimonials';
import { HeroSection } from './components/HeroSection';
import { RecentlyAdded } from './components/RecentlyAdded';
import { CategoriesSection } from './components/CategoriesSection';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="OutputDisplay" element={<OutputDisplay />} />
          <Route path="InputDisplay" element={<InputDisplay />} />
          <Route path="Testimonials" element={<Testimonials />} />
          <Route path="HeroSection" element={<HeroSection />} />
          <Route path="RecentlyAdded" element={<RecentlyAdded />} />
          <Route path="CategoriesSection" element={<CategoriesSection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;