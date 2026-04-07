import { motion } from 'framer-motion';
import khobarImg from '../assets/images/khobar_city.png';
import landmarksSet from '../assets/khobar_landmarks_set_png_1775599490029.png';
import split1 from '../assets/split_1.jfif';
import split2 from '../assets/split_2.jfif';
import split3 from '../assets/split_3.jpg';

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
        <h1 style={{ fontSize: '3rem', color: 'white', fontWeight: '800' }}>Discover <span style={{ color: 'var(--primary-color)' }}>Al Khobar</span></h1>
        <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Experience the vibrant hub of the Eastern Province of Saudi Arabia.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', background: 'var(--glass-bg)', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
          <div>
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '2rem' }}>A Hub of Innovation and Culture</h2>
            <div style={{ width: '40px', height: '4px', background: 'var(--primary-color)', marginBottom: '1.5rem' }}></div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Al Khobar is a bustling commercial center located on the coast of the Arabian Gulf. Known for its picturesque corniche, thriving business districts, and proximity to major energy hubs, it perfectly represents the Kingdom's rapid modernization.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              As host to Prince Mohammad Bin Fahd University (PMU), Khobar provides an inspiring academic and coastal backdrop for the AISTEMEDU 2026 conference, blending world-class hospitality with rich local heritage.
            </p>
          </div>
          <div style={{ height: '550px', borderRadius: '16px', overflow: 'hidden', background: 'var(--background-dark)' }}>
            <img 
              src={split1} 
              alt="Al Khobar Corniche" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
              <img src={split2} alt="Ithra Building" style={{width: '100%', aspectRatio: '1/1', objectFit: 'cover'}} />
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1.3rem' }}>The Corniche & Ithra</h3>
                <p style={{ color: 'var(--text-secondary)' }}>A stunning waterfront park and world-class architectural marvels.</p>
              </div>
            </div>
            <div style={{ background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
              <img src={split3} alt="King Fahd Causeway" style={{width: '100%', aspectRatio: '1/1', objectFit: 'cover'}} />
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1.3rem' }}>King Fahd Causeway</h3>
                <p style={{ color: 'var(--text-secondary)' }}>An engineering masterpiece connecting Saudi Arabia to Bahrain.</p>
              </div>
            </div>
            <div style={{ background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
              <img src={khobarImg} alt="Modern Hubs" style={{width: '100%', aspectRatio: '1/1', objectFit: 'cover'}} />
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1.3rem' }}>Modern Hubs</h3>
                <p style={{ color: 'var(--text-secondary)' }}>World-class shopping malls, restaurants, and business centers.</p>
              </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KhobarCity;
