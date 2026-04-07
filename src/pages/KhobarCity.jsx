import { motion } from 'framer-motion';
import khobarImg from '../assets/images/khobar_city.png';

const KhobarCity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '120px', paddingBottom: '60px' }}
      className="container"
    >
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 className="hero-title text-gradient">Discover Al Khobar</h1>
        <p className="hero-subtitle">Experience the vibrant hub of the Eastern Province of Saudi Arabia.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>
        <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>A Hub of Innovation and Culture</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Al Khobar is a bustling commercial center located on the coast of the Arabian Gulf. Known for its picturesque corniche, thriving business districts, and proximity to major energy hubs, it perfectly represents the Kingdom's rapid modernization.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              As host to Prince Mohammad Bin Fahd University (PMU), Khobar provides an inspiring academic and coastal backdrop for the AISTEMEDU 2026 conference, blending world-class hospitality with rich local heritage.
            </p>
          </div>
          <div style={{ height: '400px', borderRadius: '16px', overflow: 'hidden', background: '#1e293b' }}>
            <img 
              src={khobarImg} 
              alt="Al Khobar Corniche" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
           <div className="glass-panel text-center">
             <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌊</div>
             <h3 style={{ marginBottom: '0.5rem' }}>The Corniche</h3>
             <p style={{ color: 'var(--text-secondary)' }}>A stunning waterfront park offering beautiful views of the Arabian Gulf.</p>
           </div>
           <div className="glass-panel text-center">
             <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌇</div>
             <h3 style={{ marginBottom: '0.5rem' }}>Half Moon Bay</h3>
             <p style={{ color: 'var(--text-secondary)' }}>A gorgeous crescent-shaped beach offering recreational activities.</p>
           </div>
           <div className="glass-panel text-center">
             <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛍️</div>
             <h3 style={{ marginBottom: '0.5rem' }}>Modern Hubs</h3>
             <p style={{ color: 'var(--text-secondary)' }}>World-class shopping malls, restaurants, and business centers.</p>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KhobarCity;
