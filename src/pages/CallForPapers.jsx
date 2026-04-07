import { motion } from 'framer-motion';
import conferencePDF from '../assets/Final - AISTEMEDU2025 Conference Program Day 1 & 2.pdf';

const CallForPapers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '120px', paddingBottom: '60px' }}
      className="container"
    >
      <div className="glass-panel text-center" style={{ marginBottom: '4rem', padding: '4rem 2rem' }}>
        <h1 className="hero-title text-gradient">[ Conference Program Released! ]</h1>
        <p className="hero-subtitle" style={{ maxWidth: '900px', margin: '1.5rem auto', color: 'var(--text-secondary)' }}>
          We are pleased to announce that the complete program for the IEEE International Conference on AI-Driven STEM Education and Learning Technologies
          <strong style={{ color: 'var(--text-primary)' }}> AISTEMEDU 2026</strong> is now available. Explore an exciting lineup of keynote addresses,
          expert panel discussions, technical sessions, and special events scheduled across the two-day conference.
        </p>
        
        <div style={{ marginTop: '2.5rem' }}>
           <a href={conferencePDF} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
              Download Conference Program
           </a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '3rem 1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
          <div style={{ width: '60px', height: '60px', background: '#0284c7', borderRadius: '50%', margin: '-60px auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(2, 132, 199, 0.4)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Paper Submission</h2>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '60%', margin: '1.5rem auto' }}></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>March 15, 2026</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '3rem 1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
          <div style={{ width: '60px', height: '60px', background: '#0284c7', borderRadius: '50%', margin: '-60px auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(2, 132, 199, 0.4)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Acceptance</h2>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '60%', margin: '1.5rem auto' }}></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>April 10, 2026</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '3rem 1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
          <div style={{ width: '60px', height: '60px', background: '#0284c7', borderRadius: '50%', margin: '-60px auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(2, 132, 199, 0.4)' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Final Paper Submission</h2>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '60%', margin: '1.5rem auto' }}></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>April 25, 2026</p>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-panel">
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Important Dates</h2>
          <ul className="track-list" style={{ marginTop: '1.5rem' }}>
            <li><strong>Paper Submission Deadline:</strong> March 15, 2026</li>
            <li><strong>Notification of Acceptance:</strong> April 10, 2026</li>
            <li><strong>Camera-Ready Paper Due:</strong> April 25, 2026</li>
            <li><strong>Conference Dates:</strong> May 17-18, 2026</li>
          </ul>
        </div>
        
        <div className="glass-panel">
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Registration Fees</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ fontWeight: '600' }}>IEEE/Conference Member</span>
              <span className="text-gradient" style={{ fontWeight: '800', fontSize: '1.2rem' }}>$200</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ fontWeight: '600' }}>Non-Member</span>
              <span className="text-gradient" style={{ fontWeight: '800', fontSize: '1.2rem' }}>$250</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ fontWeight: '600' }}>Student / Online Presentation</span>
              <span className="text-gradient" style={{ fontWeight: '800', fontSize: '1.2rem' }}>$100</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CallForPapers;
