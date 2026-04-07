import { motion, useScroll, useTransform } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';
import { Calendar, MapPin, Users, BookOpen, Clock, Presentation, ChevronRight, FileText, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import conferencePDF from '../assets/Final - AISTEMEDU2025 Conference Program Day 1 & 2.pdf';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring" } }
};

const InteractiveNodes = ({ color }) => {
  return (
    <div style={{
      position: 'absolute', right: '0', top: '0',
      width: '60%', height: '100%', pointerEvents: 'none', overflow: 'visible',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            width: `${15 + Math.random() * 40}px`,
            height: `${15 + Math.random() * 40}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            filter: 'blur(10px)',
            zIndex: 0
          }}
        />
      ))}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          width: '320px', height: '320px',
          border: `1.5px dashed ${color}22`,
          borderRadius: '50%',
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            width: '180px', height: '180px',
            background: `radial-gradient(circle, ${color}11 0%, transparent 70%)`,
            borderRadius: '50%'
          }}
        />
        <div style={{
          position: 'absolute', top: '-12px', left: '50%', marginLeft: '-12px',
          width: '24px', height: '24px', borderRadius: '50%', background: color,
          boxShadow: `0 0 30px ${color}`
        }} />
      </motion.div>
    </div>
  );
};

const NeuralBridge = ({ color }) => {
  return (
    <div style={{
      position: 'absolute', left: '0', top: '0',
      width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden'
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.2 }}>
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${10 + i * 15}%`} y1="20%"
            x2={`${85 - i * 10}%`} y2="80%"
            stroke={color}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4 + Math.random() * 4, repeat: Infinity }}
          style={{
            position: 'absolute',
            right: `${15 + i * 8}%`,
            top: `${Math.random() * 80}%`,
            width: '4px', height: '4px',
            background: color,
            borderRadius: '50%',
            boxShadow: `0 0 10px ${color}`
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ position: 'relative' }}>
        <ThreeBackground />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '30px', color: 'var(--accent-color)', fontWeight: '700', marginBottom: '1.5rem', letterSpacing: '2px', backdropFilter: 'blur(5px)' }}
            >
              MAY 17-18, 2026 • PMU, AL KHOBAR
            </motion.div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              The 2nd International Conference on <br />
              <span style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                AI-Driven STEM Education
              </span> <br />
              & Learning Technologies
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2.5rem', color: 'var(--text-secondary)' }}>
              Fostering interdisciplinary research that advances AI applications in education, computational sciences, humanities and sustainable technologies, aligned with Saudi Vision 2030.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-block' }}
            >
              <a href="https://easychair.org/account/signin?l=8568301878240743666.1775567869.25b8e943" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', borderRadius: '50px', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.3)' }}>
                Submit Your Paper
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating animated shapes for modern feel */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: 1 }} 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: 'absolute', bottom: '20%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(2,132,199,0.08) 0%, rgba(0,0,0,0) 70%)', zIndex: 1 }} 
        />
      </section>

      {/* 2. STATS / INFO STRIP */}
      <section style={{ padding: '3rem 0', background: 'linear-gradient(90deg, #0f172a, #1e293b)' }}>
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}
          >
            {[
              { icon: <FileText size={32} />, label: "Paper Submission", date: "March 15, 2026" },
              { icon: <CheckCircle size={32} />, label: "Acceptance", date: "April 10, 2026" },
              { icon: <Award size={32} />, label: "Camera Ready", date: "April 25, 2026" },
              { icon: <Calendar size={32} />, label: "Conference Date", date: "May 17-18, 2026" }
            ].map((stat, i) => (
              <motion.div key={i} variants={cardVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--accent-color)' }}>{stat.icon}</div>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</h4>
                <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>{stat.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SCOPE AND TRACKS */}
      <section className="section" style={{ background: 'var(--background-dark)', position: 'relative' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>
              Conference <span style={{ color: 'var(--accent-color)' }}>Tracks</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem' }}
          >
            {[
              "Track 1: AI-Driven Education, Learning Sciences, and Human Development",
              "Track 2: Mathematics, Computational Intelligence, and AI Foundations",
              "Track 3: AI for Sustainable Development, Smart Systems, and Environmental Resilience",
              "Track 4: AI Ethics, Policy, and Global Governance",
              "Track 5: Innovation, Leadership, and AI-Driven Organizational Transformation",
              "Track 6: AI for Emerging Technologies, Workforce Intelligence, and Future Skills",
            ].map((track, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                style={{ 
                  background: 'linear-gradient(145deg, #1e293b, #0f172a)',
                  boxShadow: '10px 10px 20px #080d1a, -4px -4px 15px rgba(255,255,255,0.02)',
                  padding: '2.5rem 2rem', 
                  borderRadius: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}
              >
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '40px' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  style={{ height: '4px', background: 'var(--accent-color)', marginBottom: '1.5rem', borderRadius: '2px' }} 
                />
                <h3 style={{ fontSize: '1.35rem', color: 'white', lineHeight: '1.4', fontWeight: '800' }}>
                  {track.split(': ')[0]}
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.6', opacity: 0.8 }}>
                  {track.split(': ')[1]}
                </p>
                
                {/* Neumorphic Inner Glow on Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'radial-gradient(circle at 10% 10%, rgba(56, 189, 248, 0.05), transparent 70%)',
                    pointerEvents: 'none'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '5rem' }}
          >
            <Link to="/scope" className="btn btn-outline" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '1rem', 
              padding: '1.25rem 3rem', borderRadius: '50px', fontSize: '1.1rem', 
              fontWeight: 'bold', 
              background: '#0f172a',
              boxShadow: '6px 6px 12px #080d1a, -6px -6px 12px rgba(255,255,255,0.02)',
              border: 'none',
              color: 'var(--accent-color)',
              transition: 'all 0.3s ease' 
            }}>
              <span>Explore All Tracks & Scope</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronRight size={20} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. CALL FOR PAPERS SECTION (NEW) */}
      <section className="section" style={{ background: '#0f172a' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Call for <span style={{ color: 'var(--accent-color)' }}>Papers</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '800px', margin: '1rem auto' }}>
              Contribute to the advancement of AI-Driven STEM Education and Sustainability. We invite high-quality research papers for presentation and publication.
            </p>
          </motion.div>

          <div className="paper-dates-grid">
            {[
              { label: "Paper Submission", date: "March 15, 2026" },
              { label: "Acceptance", date: "April 10, 2026" },
              { label: "Final Paper Submission", date: "April 25, 2026" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '3rem 1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', marginTop: '30px' }}
              >
                <div style={{ width: '60px', height: '60px', background: '#0284c7', borderRadius: '50%', position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(2, 132, 199, 0.4)' }}></div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '10px' }}>{item.label}</h3>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '60%', margin: '1.5rem auto' }}></div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.date}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel">
              <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Registration Fees</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '600' }}>IEEE Member</span>
                  <span className="text-gradient" style={{ fontWeight: '800', fontSize: '1.2rem' }}>$200</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '600' }}>Non-Member</span>
                  <span className="text-gradient" style={{ fontWeight: '800', fontSize: '1.2rem' }}>$250</span>
                </div>
              </div>
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link to="/call-for-papers" className="btn btn-outline" style={{ padding: '0.8rem 2rem', borderRadius: '50px' }}>View All Fees →</Link>
              </div>
            </div>

            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Ready to <span style={{ color: 'var(--accent-color)' }}>Submit?</span></h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Join leading researchers and submit your original work through EasyChair.</p>
              <a href="https://easychair.org/account/signin?l=8568301878240743666.1775567869.25b8e943" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '50px', marginBottom: '2rem' }}>
                Submit via EasyChair
              </a>
              
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '80%', margin: '1rem 0' }}></div>
              
              <div style={{ marginTop: '2rem' }}>
                <h3 className="text-gradient" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Conference Program Released!</h3>
                <a href={conferencePDF} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem', borderRadius: '50px' }}>
                  Download Program (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ORGANIZING COMMITTEE */}
      <section className="section" style={{ background: 'var(--background-dark)' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Organizing <span style={{ color: 'var(--accent-color)' }}>Committee</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem' }}>The dedicated team making AISTEMEDU 2026 possible.</p>
          </motion.div>

          {/* Honorary Chair */}
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '3rem', position: 'relative', background: 'rgba(56, 189, 248, 0.02)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.02)' }}>
            <InteractiveNodes color="#38bdf8" />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>Honorary Chair</h3>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 400px))', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
              {[
                { name: "Dr. Issa H. Al Ansari", role: "President", org: "PMU, Saudi Arabia", image: "https://www.pmu.edu.sa/images/board-of-trustees/Dr-Issa.PNG" },
              ].map((m, i) => (
                <motion.div key={i} variants={cardVariants} whileHover={{ y: -6, borderColor: 'rgba(56,189,248,0.4)' }}
                  style={{ background: 'rgba(30,41,59,0.7)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '1.75rem', backdropFilter: 'blur(10px)', transition: 'border-color 0.3s' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg,#0284c7,#38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '800', color: '#fff', overflow: 'hidden' }}>
                    {m.image ? <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : m.name.charAt(0)}
                  </div>
                  <h4 style={{ color: 'white', fontSize: '1.05rem', marginBottom: '0.3rem' }}>{m.name}</h4>
                  <p style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.3rem' }}>{m.role}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{m.org}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* General Chair */}
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            style={{ marginBottom: '3rem', position: 'relative', background: 'rgba(56, 189, 248, 0.015)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.015)', overflow: 'hidden' }}>
            <NeuralBridge color="var(--accent-color)" />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>General Chair</h3>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 400px))', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
              {[
                { name: "Dr. Jason Sparkes", role: "General Chair", org: "PMU, Saudi Arabia", image: "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/133547404450296704_Sparkes_Photo.jpg" },
              ].map((m, i) => (
                <motion.div key={i} variants={cardVariants} whileHover={{ y: -6, borderColor: 'rgba(56,189,248,0.4)' }}
                  style={{ background: 'rgba(30,41,59,0.7)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '1.75rem', backdropFilter: 'blur(10px)', transition: 'border-color 0.3s' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg,#0284c7,#38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '800', color: '#fff', overflow: 'hidden' }}>
                    {m.image ? <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : m.name.charAt(0)}
                  </div>
                  <h4 style={{ color: 'white', fontSize: '1.05rem', marginBottom: '0.3rem' }}>{m.name}</h4>
                  <p style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.3rem' }}>{m.role}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{m.org}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Technical Program Committee */}
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem', marginBottom: '2rem' }}>Technical Program Committee</h3>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { name: "Dr. Bilal Shoaib", role: "TPC Chair", org: "PMU, Saudi Arabia" },
                { name: "Dr. Saqib Saeed", role: "TPC Co-Chair", org: "PMU, Saudi Arabia" },
                { name: "Dr. Syed Asad Hussain", role: "TPC Co-Chair", org: "PMU, Saudi Arabia" },
                { name: "Dr. Tariq Jamil Saifullah Khanzada", role: "TPC Co-Chair", org: "PMU, Saudi Arabia" },
              ].map((m, i) => (
                <motion.div key={i} variants={cardVariants} whileHover={{ y: -6, borderColor: 'rgba(56,189,248,0.4)' }}
                  style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '1.75rem', backdropFilter: 'blur(10px)', transition: 'border-color 0.3s' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg,#0284c7,#38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '800', color: '#fff', overflow: 'hidden' }}>
                    {m.image ? <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : m.name.charAt(0)}
                  </div>
                  <h4 style={{ color: 'white', fontSize: '1.05rem', marginBottom: '0.3rem' }}>{m.name}</h4>
                  <p style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.3rem' }}>{m.role}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{m.org}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scientific Committee Preview */}
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem', marginBottom: '2rem' }}>Scientific Committee (Selected Members)</h3>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { name: "Dr. Joel Craig Richmond", role: "Chair", org: "PMU, Saudi Arabia", image: "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/133699043912731114_Picture_Bio.jpg" },
                { name: "Dr. Hanadi Abdelsalam", role: "Co-Chair", org: "PMU, Saudi Arabia", image: "https://faculty.pmu.edu.sa/Admin/Upload/Faculty_PIC/134189007807371910_Profile_picture.jpeg" },
                { name: "Dr. Abul Bashar", role: "Member", org: "PMU, Saudi Arabia" },
                { name: "Dr. Anwar Majid Mirza", role: "Member", org: "PMU, Saudi Arabia" },
                { name: "Dr. Marius Nagy", role: "Member", org: "PMU, Saudi Arabia" },
                { name: "Dr. Maura A. Pilotti", role: "Member", org: "PMU, Saudi Arabia" },
                { name: "Ghazanfar Latif", role: "Member", org: "Thompson Rivers University, Canada" },
                { name: "Muhammad Rizwan", role: "Member", org: "Soongsil University, South Korea" },
              ].map((m, i) => (
                <motion.div key={i} variants={cardVariants} whileHover={{ y: -6, borderColor: 'rgba(56,189,248,0.4)' }}
                  style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '1.75rem', backdropFilter: 'blur(10px)', transition: 'border-color 0.3s' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#c084fc)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '800', color: '#fff', overflow: 'hidden' }}>
                    {m.image ? <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : m.name.charAt(0)}
                  </div>
                  <h4 style={{ color: 'white', fontSize: '1.05rem', marginBottom: '0.3rem' }}>{m.name}</h4>
                  <p style={{ color: '#c084fc', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.3rem' }}>{m.role}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{m.org}</p>
                </motion.div>
              ))}
            </motion.div>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a href="/committee" className="btn btn-outline" style={{ padding: '0.9rem 2.5rem', borderRadius: '50px' }}>
                View Full Committee →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. EXPLORE KHOBAR CITY */}
      <section className="section" style={{ background: 'var(--background-dark)' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Explore <span style={{ color: 'var(--accent-color)' }}>Khobar City</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem' }}>Experience the vibrant hub of the Eastern Province of Saudi Arabia.</p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="city-grid-wrapper">
            <div className="city-image-container" style={{ borderRadius: '16px', overflow: 'hidden' }}>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.pexels.com/photos/373409/pexels-photo-373409.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Khobar 1" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div className="paper-dates-grid" style={{ gap: '2rem', marginBottom: '0' }}>
              <div className="city-image-container" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Khobar 2" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="city-image-container" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Khobar 3" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. ACCOMMODATION / HOTELS */}
      <section className="section" style={{ background: '#0f172a' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Recommended <span style={{ color: 'var(--accent-color)' }}>Accommodations</span></h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
          >
            {[
              {
                name: "Grand Hyatt Al Khobar",
                address: "3266 Custodian of Two Holy Mosques Road, Al Khobar, Saudi Arabia, 31952",
                img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
                phone: "+966 20 1333 11234"
              },
              {
                name: "InterContinental Al Khobar",
                address: "King Saud Branch Road Crossing 21st Street, Al Olayya, Al Khobar",
                img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
                phone: "+966 13 816 4444"
              },
              {
                name: "Aloft Dhahran Hotel",
                address: "King Saud Branch Road behind Mall Al Dhahran, Al Olayya, 11496 Al Khobar",
                img: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
                phone: "+966 13 864 9777"
              }
            ].map((hotel, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                style={{ background: 'var(--background-dark)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div style={{ height: '200px', background: `url(${hotel.img}) center/cover` }} />
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.5rem' }}>{hotel.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px' }}>{hotel.address}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontWeight: 'bold' }}>
                    <span>📞</span> {hotel.phone}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. SPONSORED BY */}
      <section style={{ padding: '5rem 0', background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Sponsored & Organized By</h2>
            <p style={{ color: 'var(--text-secondary)' }}>With prestigious technical co-sponsorship from IEEE</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '4rem' }}>
            {[
              { label: "Prince Mohammad Bin Fahd University", abbr: "PMU", color: '#0284c7' },
              { label: "IEEE — Advancing Technology for Humanity", abbr: "IEEE", color: '#00629b' },
              { label: "IEEE Saudi Arabia Section", abbr: "IEEE KSA", color: '#00629b' },
              { label: "IEEE Computational Intelligence Society", abbr: "IEEE CIS", color: '#00629b' },
            ].map((s, i) => (
              <motion.div key={i} variants={cardVariants} whileHover={{ scale: 1.08 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '120px', height: '70px', background: 'rgba(30,41,59,0.8)', border: `2px solid ${s.color}33`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '1.3rem', color: s.color, letterSpacing: '2px' }}>
                  {s.abbr}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textAlign: 'center', maxWidth: '150px' }}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '3rem', fontSize: '0.9rem' }}>
            Prince Mohammad Bin Fahd University (PMU), Al Khobar, 31952, Kingdom of Saudi Arabia
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Home;
