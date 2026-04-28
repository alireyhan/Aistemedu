import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, Share2, Link2 } from 'lucide-react';
import pmuLogo from '../assets/pmulogo.png';
import cshsLogo from '../assets/cshs-logo.png';


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
              <li><Link to="/call-for-papers">Call for Paper</Link></li>
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
                <span>aistemedu@pmu.edu.sa</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '1rem' }}>
                <Phone size={20} style={{ color: 'var(--accent-color)' }} />
                <span>+966 54 857 4636</span>
              </li>
            </ul>
          </div>



        </div>

        {/* SPONSORED & ORGANIZED SECTION - NOW PART OF GLOBAL FOOTER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            marginTop: '3rem', 
            padding: '4rem 1rem', 
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center'
          }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.5rem', color: 'white', fontWeight: '800' }}>Sponsored & Organized By</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4rem' }}>
            {/* PMU Logo Centered */}
            <div style={{ textAlign: 'center' }}>
              <img 
                src={pmuLogo} 
                alt="Prince Mohammad Bin Fahd University" 
                style={{ height: '140px', width: 'auto', filter: 'brightness(1.1) drop-shadow(0 0 15px rgba(0,0,0,0.5))' }} 
              />
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginTop: '1.2rem', fontWeight: '600' }}>Prince Mohammad Bin Fahd University</p>
            </div>

            {/* Partner Logos Row */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '6rem' }}>
              {[
                { src: cshsLogo, alt: "College of Sciences and Human Studies", height: '85px' },
              ].map((logo, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    style={{ height: logo.height, width: 'auto', filter: 'brightness(1.1) drop-shadow(0 5px 15px rgba(0,0,0,0.3))' }} 
                  />
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textAlign: 'center' }}>{logo.alt}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', marginTop: '4rem', fontSize: '0.85rem' }}>
            Prince Mohammad Bin Fahd University (PMU), Al Khobar, 31952, Kingdom of Saudi Arabia
          </p>
        </motion.div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AISTEMEDU. Organized by Prince Mohammad Bin Fahd University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
