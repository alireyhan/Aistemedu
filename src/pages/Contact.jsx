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
        <h1 className="hero-title text-gradient">Contact Us</h1>
        <p className="hero-subtitle">Get in touch with the AISTEMEDU 2026 Organizing Committee.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-panel">
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Conference Secretariat</h2>
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.25rem' }}>Dr. Jason Sparkes</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Conference Secretary</p>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><strong>Email:</strong> info@aistemedu.org</li>
            <li><strong>Phone:</strong> +966 13 849 9239</li>
            <li>
              <strong>Location:</strong> <br/>
              Prince Mohammad Bin Fahd University (PMU)<br/>
              Al Khobar, 31952<br/>
              Kingdom of Saudi Arabia
            </li>
          </ul>
        </div>
        
        <div className="glass-panel">
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Send us a message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--secondary-color)', color: 'var(--text-primary)', fontFamily: 'inherit' }} />
            <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--secondary-color)', color: 'var(--text-primary)', fontFamily: 'inherit' }} />
            <textarea placeholder="Your Message" rows="5" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--secondary-color)', color: 'var(--text-primary)', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
            <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
