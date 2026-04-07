import { motion } from 'framer-motion';

const SpecialSessions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="coming-soon-container"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        <h1 className="coming-soon-title text-gradient">Coming Soon</h1>
        <p className="coming-soon-text">
          We are currently preparing an exciting lineup of special sessions for AISTEMEDU 2026.<br />
          Please check back later for updates.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SpecialSessions;
