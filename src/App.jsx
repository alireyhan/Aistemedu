import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Committee from './pages/Committee';
import SpecialSessions from './pages/SpecialSessions';
import Scope from './pages/Scope';
import CallForPapers from './pages/CallForPapers';
import KhobarCity from './pages/KhobarCity';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/call-for-papers" element={<CallForPapers />} />
              <Route path="/scope" element={<Scope />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/khobar-city" element={<KhobarCity />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/special-sessions" element={<SpecialSessions />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
