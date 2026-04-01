import { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';

// Pages
import Home      from './pages/Home';
import About     from './pages/About';
import Services  from './pages/Services';
import Products  from './pages/Products';
import Career    from './pages/Career';
import Placement from './pages/Placement';
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
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"          element={<Home />}      />
          <Route path="/about"     element={<About />}     />
          <Route path="/services"  element={<Services />}  />
          <Route path="/products"  element={<Products />}  />
          <Route path="/career"    element={<Career />}    />
          <Route path="/placement" element={<Placement />} />
          <Route path="/contact"   element={<Contact />}   />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
