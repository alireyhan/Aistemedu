import { motion } from 'framer-motion';

const Contact = () => {
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
        <h1 style={{ fontSize: '3rem', color: 'var(--secondary-color)', fontWeight: '800' }}>Contact <span style={{ color: 'var(--primary-color)' }}>Us</span></h1>
        <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Get in touch with the AISTEMEDU 2026 Organizing Committee.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div style={{ background: 'var(--glass-bg)', borderRadius: '24px', padding: '3rem', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Conference Secretariat</h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--primary-color)', marginBottom: '1.5rem' }}></div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Dr. Shakir M. Usman</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Organizing Committee</p>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li><strong style={{ color: 'var(--primary-color)' }}>Email:</strong> aistemedu@pmu.edu.sa</li>
            <li><strong style={{ color: 'var(--primary-color)' }}>Phone:</strong> +966 54 857 4636</li>
            <li>
              <strong style={{ color: 'var(--primary-color)' }}>Location:</strong> <br/>
              Prince Mohammad Bin Fahd University (PMU)<br/>
              Al Khobar, 31952<br/>
              Kingdom of Saudi Arabia
            </li>
          </ul>
        </div>
        
        <div style={{ background: 'var(--glass-bg)', borderRadius: '24px', padding: '3rem', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Send us a message</h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--primary-color)', marginBottom: '1.5rem' }}></div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.03)', color: 'white', fontFamily: 'inherit' }} />
            <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.03)', color: 'white', fontFamily: 'inherit' }} />
            <textarea placeholder="Your Message" rows="5" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.03)', color: 'white', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
            <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', padding: '1rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
