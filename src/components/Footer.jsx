import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Globe, Share2, Link2 } from 'lucide-react';
import pmuLogo from '../assets/footer-logos/blank-img-removebg-preview.png';
import ieeeAdvancingLogo from '../assets/footer-logos/IEEE-Advancing-Technology-for-Humanity-logo-removebg-preview.png';
import ieeeSaudiLogo from '../assets/footer-logos/images-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col" style={{ gridColumn: 'span 1' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1rem', background: 'linear-gradient(135deg, #38bdf8, #bae6fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              AISTEMEDU 2026
            </h3>
            <p style={{ lineHeight: '1.8' }}>
              The 2nd International Conference on AI-Driven STEM Education and Learning Technologies. Fostering interdisciplinary research that aligns with Saudi Vision 2030, driving advancements in Mathematics, AI, Education and Sustainability.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }}><Link2 size={24} /></a>
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }}><Share2 size={24} /></a>
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }}><Globe size={24} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/call-for-papers">Call for Papers</Link></li>
              <li><Link to="/scope">Scope & Tracks</Link></li>
              <li><Link to="/committee">Committee</Link></li>
              <li><Link to="/special-sessions">Special Sessions</Link></li>
              <li><a href="https://easychair.org/account/signin?l=8568301878240743666.1775567869.25b8e943" target="_blank" rel="noopener noreferrer">Submit Paper</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Venue Info</h4>
            <ul style={{ listStyle: 'none' }}>
              <li><Link to="/khobar-city">About Khobar City</Link></li>
              <li><Link to="/accommodation">Accommodation</Link></li>
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <h4>Hosted By</h4>
              <p>Prince Mohammad Bin Fahd University (PMU)</p>
            </div>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '4px' }} />
                <span>Conference Hall, PMU,<br />Al Khobar, 31952,<br />Kingdom of Saudi Arabia</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '1rem' }}>
                <Mail size={20} style={{ color: 'var(--accent-color)' }} />
                <span>info@aistemedu.org</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '1rem' }}>
                <Phone size={20} style={{ color: 'var(--accent-color)' }} />
                <span>+966 13 849 9239</span>
              </li>
            </ul>
          </div>

          <div className="footer-col" style={{ gridColumn: '1 / -1', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '3rem', marginTop: '2rem', padding: '2rem 0', borderTop: '1px solid var(--glass-border)' }}>
            <img src={pmuLogo} alt="PMU Logo" style={{ height: '80px', width: 'auto', filter: 'brightness(1.1)' }} />
            <img src={ieeeAdvancingLogo} alt="IEEE Advancing Technology Logo" style={{ height: '60px', width: 'auto', filter: 'brightness(1.1)' }} />
            <img src={ieeeSaudiLogo} alt="IEEE Saudi Arabia Logo" style={{ height: '60px', width: 'auto', filter: 'brightness(1.1)' }} />
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AISTEMEDU. Organized by Prince Mohammad Bin Fahd University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
