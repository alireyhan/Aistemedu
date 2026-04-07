import { motion } from 'framer-motion';

const SpecialSessions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 2rem'
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        <h1 style={{ fontSize: '4rem', color: 'white', fontWeight: '800' }}>Coming <span style={{ color: 'var(--primary-color)' }}>Soon</span></h1>
        <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto 2.5rem' }}></div>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          We are currently preparing an exciting lineup of special sessions for AISTEMEDU 2026.<br />
          Please check back later for updates.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SpecialSessions;
