import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [scrolled, setScrolled] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const importantDates = [
    { label: "Paper Submission", date: "August 15, 2026" },
    { label: "Notification Date", date: "September 15, 2026" },
    { label: "Camera Ready", date: "September 30, 2026" },
    { label: "Conference Days", date: "October 26-27, 2026" }
  ];

  return (
    <>
      <div className="dates-banner">
        <div className="ticker-wrap">
          <div className="ticker">
            {importantDates.map((item, i) => (
              <div key={`orig-${i}`} className="ticker-item">
                <span>• {item.label}:</span> {item.date}
              </div>
            ))}
            {importantDates.map((item, i) => (
              <div key={`dup1-${i}`} className="ticker-item">
                <span>• {item.label}:</span> {item.date}
              </div>
            ))}
            {importantDates.map((item, i) => (
              <div key={`dup2-${i}`} className="ticker-item">
                <span>• {item.label}:</span> {item.date}
              </div>
            ))}
          </div>
        </div>
      </div>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="nav-logo text-gradient">
            AISTEMEDU 2026
          </Link>
          <div className="nav-links mobile-hidden">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>HOME</Link>
            <Link to="/call-for-papers" className={`nav-link ${isActive('/call-for-papers') ? 'active' : ''}`}>CALL FOR PAPERS</Link>
            <Link to="/scope" className={`nav-link ${isActive('/scope') ? 'active' : ''}`}>SCOPE</Link>
            <Link to="/committee" className={`nav-link ${isActive('/committee') ? 'active' : ''}`}>COMMITTEE</Link>
            <Link to="/special-sessions" className={`nav-link ${isActive('/special-sessions') ? 'active' : ''}`}>SPECIAL SESSIONS</Link>
            <Link to="/khobar-city" className={`nav-link ${isActive('/khobar-city') ? 'active' : ''}`}>KHOBAR CITY</Link>
            <Link to="/accommodation" className={`nav-link ${isActive('/accommodation') ? 'active' : ''}`}>ACCOMMODATION</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>CONTACT</Link>
          </div>
          <button 
            className="hamburger-placeholder" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'none', border: 'none', padding: '5px' }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-links">
            <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>HOME</Link>
            <Link to="/call-for-papers" className={`mobile-nav-link ${isActive('/call-for-papers') ? 'active' : ''}`}>CALL FOR PAPERS</Link>
            <Link to="/scope" className={`mobile-nav-link ${isActive('/scope') ? 'active' : ''}`}>SCOPE</Link>
            <Link to="/committee" className={`mobile-nav-link ${isActive('/committee') ? 'active' : ''}`}>COMMITTEE</Link>
            <Link to="/special-sessions" className={`mobile-nav-link ${isActive('/special-sessions') ? 'active' : ''}`}>SPECIAL SESSIONS</Link>
            <Link to="/khobar-city" className={`mobile-nav-link ${isActive('/khobar-city') ? 'active' : ''}`}>KHOBAR CITY</Link>
            <Link to="/accommodation" className={`mobile-nav-link ${isActive('/accommodation') ? 'active' : ''}`}>ACCOMMODATION</Link>
            <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>CONTACT</Link>
          </div>
        </div>
        <div className="mobile-drawer-overlay" onClick={() => setIsMenuOpen(false)}></div>
      </div>
    </>
  );
};

export default Header;
