import { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';

// Pages
import Home      from './pages/Home';
import AboutServices from './pages/AboutServices';
import Products  from './pages/Products';
import CareerPlacement from './pages/CareerPlacement';
import Contact   from './pages/Contact';

/** Scroll-to-top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRoutes() {
  const location = useLocation();
  return (
    <div className="site-theme">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"          element={<Home />}      />
          <Route path="/about"     element={<AboutServices />}     />
          <Route path="/services"  element={<AboutServices />}  />
          <Route path="/products"  element={<Products />}  />
          <Route path="/career"    element={<CareerPlacement />}    />
          <Route path="/placement" element={<CareerPlacement />} />
          <Route path="/contact"   element={<Contact />}   />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
