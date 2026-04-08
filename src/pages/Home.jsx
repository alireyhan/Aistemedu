import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Calendar, MapPin, Users, BookOpen, Clock, Presentation, ChevronRight, 
  FileText, CheckCircle, Award, CreditCard, Brain, GraduationCap, 
  Globe, ShieldAlert, Lightbulb, Cpu, FileUp, ClipboardCheck, FileCheck,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';
import conferencePDF from '../assets/Final - AISTEMEDU2025 Conference Program Day 1 & 2.pdf';
import khobarCity from '../assets/images/khobar_city.png';
import landmarksSet from '../assets/khobar_landmarks_set_png_1775599490029.png';
import split1 from '../assets/split_1.jfif';
import split2 from '../assets/split_2.jfif';
import split3 from '../assets/split_3.jpg';
import { committeesSnapshot } from '../data/committees';
import pmuLogo from '../assets/footer-logos/blank-img-removebg-preview.png';
import ieeeAdvancingLogo from '../assets/footer-logos/IEEE-Advancing-Technology-for-Humanity-logo-removebg-preview.png';
import ieeeSaudiLogo from '../assets/footer-logos/images-removebg-preview.png';
import cshsLogo from '../assets/cshs-logo.png';


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

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* 1. HERO SECTION (Dark Navy pattern matching PMU CSNT 2026) */}
      <section className="hero-section" style={{ 
        position: 'relative', 
        paddingTop: 'calc(var(--banner-height) + 120px)', 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent'
      }}>
        {/* Hero Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          top: 'calc(-1 * var(--banner-height) - 100px)', 
          left: 0,
          width: '100%',
          height: 'calc(100% + var(--banner-height) + 100px)', 
          backgroundImage: `linear-gradient(to bottom, rgba(14, 27, 77, 0.4), rgba(2, 6, 23, 0.9)), url(${khobarCity})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          zIndex: -1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ 
                display: 'inline-block', 
                padding: '0.4rem 1.5rem', 
                background: 'rgba(243, 112, 33, 0.1)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--primary-color)', 
                borderRadius: '50px', 
                color: 'var(--primary-color)', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                marginTop: '1rem',
                letterSpacing: '2px', 
                fontSize: '0.8rem'
              }}
            >
              OCTOBER 26-27, 2026 • PMU, AL KHOBAR
            </motion.div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(1.6rem, 4vw, 3.2rem)', lineHeight: '1.2', marginBottom: '1.2rem', color: 'white', fontWeight: '800' }}>
              The 2nd International Conference on <br />
              <span className="text-gradient" style={{ display: 'block', marginTop: '0.5rem' }}>
                AI-Driven STEM Education
              </span>
              <span style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.2rem)', color: 'rgba(255,255,255,0.9)' }}>& Learning Technologies</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '0.95rem', maxWidth: '800px', margin: '0 auto 2.5rem', color: 'white', opacity: 0.85, lineHeight: '1.7' }}>
              Fostering interdisciplinary research that advances AI applications in education, computational sciences, humanities and sustainable technologies, aligned with Saudi Vision 2030.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://easychair.org/account/signin?l=8568301878240743666.1775567869.25b8e943" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', fontSize: '1rem' }}>
                  Submit Your Paper
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/scope" className="btn btn-outline" style={{ padding: '0.8rem 2.5rem', fontSize: '1rem', borderColor: 'white', color: 'white' }}>
                  Explore Tracks
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS / INFO STRIP */}
      <section style={{ padding: '3rem 0', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}
          >
            {[
              { icon: <FileText size={40} />, label: "Paper Submission", date: "August 15, 2026" },
              { icon: <CheckCircle size={40} />, label: "Acceptance", date: "September 15, 2026" },
              { icon: <Award size={40} />, label: "Camera Ready", date: "September 30, 2026" },
              { icon: <Calendar size={40} />, label: "Conference Date", date: "October 26-27, 2026" }
            ].map((stat, i) => (
              <motion.div key={i} variants={cardVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-color)' }}>{stat.icon}</div>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</h4>
                <p style={{ color: 'white', fontWeight: '800', fontSize: '1.25rem' }}>{stat.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SCOPE AND TRACKS */}
      <section className="section" style={{ background: 'transparent', position: 'relative' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white' }}>
              Conference <span style={{ color: 'var(--primary-color)' }}>Tracks</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem' }}
          >
            {[
              { title: "Track 1: AI-Driven Education, Learning Sciences, and Human Development", icon: <GraduationCap size={40} /> },
              { title: "Track 2: Mathematics, Computational Intelligence, and AI Foundations", icon: <Brain size={40} /> },
              { title: "Track 3: AI for Sustainable Development, Smart Systems, and Environmental Resilience", icon: <Globe size={40} /> },
              { title: "Track 4: AI Ethics, Policy, and Global Governance", icon: <Scale size={40} /> },
              { title: "Track 5: Innovation, Leadership, and AI-Driven Organizational Transformation", icon: <Lightbulb size={40} /> },
              { title: "Track 6: AI for Emerging Technologies, Workforce Intelligence, and Future Skills", icon: <Cpu size={40} /> },
            ].map((trackItem, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 }, border: '1px solid var(--primary-color)' }}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  padding: '2.5rem 2rem', 
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}

              >
                <div style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', opacity: 0.9 }}>
                  {trackItem.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'white', lineHeight: '1.4', fontWeight: '800' }}>
                  {trackItem.title.split(': ')[0]}
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  {trackItem.title.split(': ')[1]}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '5rem' }}
          >
            <Link to="/scope" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1rem 3rem' }}>
              <span>Explore All Tracks & Scope</span>
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. CALL FOR PAPERS SECTION */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'white' }}>Call for <span style={{ color: 'var(--primary-color)' }}>Papers</span></h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '800px', margin: '1rem auto' }}>
              Contribute to the advancement of AI-Driven STEM Education and Sustainability. We invite high-quality research papers for presentation and publication.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
            {[
              { label: "Paper Submission", date: "August 15, 2026", icon: <FileUp size={30} /> },
              { label: "Acceptance Notice", date: "September 15, 2026", icon: <ClipboardCheck size={30} /> },
              { label: "Final Paper Submission", date: "September 30, 2026", icon: <FileCheck size={30} /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ 
                  background: 'var(--glass-bg)', 
                  borderRadius: '16px', 
                  padding: '3.5rem 1.5rem 2.5rem', 
                  textAlign: 'center', 
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  position: 'relative'
                }}
              >
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: 'rgba(243, 112, 33, 0.1)', 
                  color: 'var(--primary-color)',
                  borderRadius: '50%', 
                  position: 'absolute', 
                  top: '-35px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  border: '1px solid var(--primary-color)'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white', fontWeight: '700' }}>{item.label}</h3>
                <div style={{ height: '2px', background: 'rgba(243, 112, 33, 0.2)', width: '60px', margin: '1.5rem auto' }}></div>
                <p style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: '800' }}>{item.date}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '3rem', backdropFilter: 'blur(20px)' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'white' }}>
                 <CreditCard color="var(--primary-color)" strokeWidth={2.5} size={32} />
                 Registration Fees
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { title: "Non-IEEE Member", price: "$250", desc: "Full Conference Access" },
                    { title: "IEEE Member", price: "$200", desc: "Full Access & Proceedings" },
                    { title: "Online Presentation", price: "$100", desc: "Digital Access & Certification" }
                  ].map((item, i) => (
                     <div key={i} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div>
                         <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'white', marginBottom: '0.3rem' }}>{item.title}</h3>
                         <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
                       </div>
                       <div style={{ fontSize: '1.6rem', fontWeight: '700', background: 'linear-gradient(135deg, #fbbf24 0%, #f37021 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginLeft: '1rem' }}>
                         {item.price}
                       </div>
                     </div>
                  ))}
              </div>
              <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                <Link to="/call-for-papers" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>View All Fees →</Link>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '3rem', backdropFilter: 'blur(20px)', display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(243, 112, 33, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                 <FileText color="var(--primary-color)" size={40} strokeWidth={2} />
              </div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'white' }}>Ready to <span style={{ color: 'var(--primary-color)'}}>Submit?</span></h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '300px' }}>Join leading researchers and submit your original work through EasyChair.</p>
              <a href="https://easychair.org/account/signin?l=8568301878240743666.1775567869.25b8e943" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 3rem', marginBottom: '2.5rem' }}>
                Submit via EasyChair
              </a>
              
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%', margin: '1rem 0' }}></div>
              
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white', fontWeight: '700' }}>Conference Program Released!</h3>
                <a href={conferencePDF} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={18} /> Download Program (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 7. DYNAMIC COMMITTEE REVEAL - SHOWING ALL MEMBERS */}
      <section className="section" style={{ background: 'transparent', position: 'relative', padding: '10rem 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            style={{ textAlign: 'center', marginBottom: '6rem' }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', fontWeight: '800', marginBottom: '1.5rem' }}>
              The Organizing <span style={{ color: 'var(--primary-color)' }}>Committees</span>
            </h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto 2rem' }}></div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              A collective of world-class experts dedicated to advancing AI-driven STEM education.
            </p>
          </motion.div>

          {(() => {
            const chairTitles = ["Honorary Chair", "Conference Chair", "Deputy Conference Chair"];
            const mainChairs = committeesSnapshot.filter(c => chairTitles.includes(c.title));
            const otherCommittees = committeesSnapshot.filter(c => !chairTitles.includes(c.title));

            return (
              <>
                {/* 1. Combined Main Chairs Row */}
                <div style={{ marginBottom: '8rem', position: 'relative' }}>
                  <div style={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2.5rem',
                    padding: '0 1rem'
                  }}>
                    {mainChairs.map((committee, cIdx) => (
                      <motion.div 
                        key={`main-chair-col-${cIdx}`} 
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: cIdx * 0.2, type: 'spring', stiffness: 80 }}
                        style={{ flex: '1 1 0', minWidth: '300px', display: 'flex', flexDirection: 'column' }}
                      >
                        {/* Animated Header for this chair */}
                        <div
                          style={{ 
                            textAlign: 'center', 
                            marginBottom: '3rem',
                            padding: '0 1rem'
                          }}
                        >
                          <h3 style={{ 
                            color: 'white', 
                            fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
                            fontWeight: '800', 
                            marginBottom: '0.8rem',
                            letterSpacing: '-1px'
                          }}>
                            {committee.title.split(' ').map((word, i) => (
                              <span key={i} style={{ color: i === 0 ? committee.color : 'inherit' }}>{word} </span>
                            ))}
                          </h3>
                          <div style={{ 
                            width: '100px', 
                            height: '5px', 
                            background: `linear-gradient(90deg, ${committee.color}, transparent)`, 
                            margin: '0 auto',
                            borderRadius: '10px'
                          }}></div>
                        </div>

                        {/* Animated Card for member */}
                        {committee.members.map((member, mIdx) => (
                          <motion.div 
                            key={`chair-member-${cIdx}-${mIdx}`} 
                            style={{ 
                              flex: '1',
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))', 
                              border: '1px solid rgba(255,255,255,0.1)', 
                              borderRadius: '30px', 
                              padding: '2rem 1.5rem',
                              backdropFilter: 'blur(30px)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              textAlign: 'center',
                              position: 'relative',
                              overflow: 'hidden',
                              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            }}
                            whileHover={{ 
                              y: -15, 
                              scale: 1.02,
                              borderColor: committee.color,
                              boxShadow: `0 0 40px ${committee.color}22` 
                            }}
                          >
                            <div style={{ 
                              position: 'absolute', 
                              top: '-10px', 
                              right: '-10px', 
                              width: '60px', 
                              height: '60px', 
                              background: committee.color, 
                              opacity: 0.1, 
                              borderRadius: '50%',
                              filter: 'blur(20px)'
                            }}></div>

                            <div style={{ 
                              width: '100%', 
                              maxWidth: '240px', 
                              aspectRatio: '1/1', 
                              borderRadius: '24px', 
                              background: 'rgba(255,255,255,0.03)', 
                              marginBottom: '2rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              border: `1px solid rgba(255,255,255,0.1)`,
                              overflow: 'hidden',
                              transform: 'rotate(-3deg)',
                              boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                            }}>
                              {member.image ? (
                                <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'rotate(3deg)' }} />
                              ) : (
                                <span style={{ fontSize: '2.5rem', fontWeight: '900', color: committee.color, transform: 'rotate(3deg)' }}>
                                  {member.name.split(' ').filter(n => !n.includes('.')).slice(0, 2).map(n => n[0]).join('')}
                                </span>
                              )}
                            </div>
                            
                            <h4 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.4rem', lineHeight: '1.2' }}>{member.name}</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
                            <div style={{ height: '1px', width: '40%', background: 'rgba(255,255,255,0.1)', marginBottom: '0.8rem' }}></div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.4', fontWeight: '500' }}>{member.affiliation}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 2. Other Committees */}
                {otherCommittees.map((committee, cIdx) => (
                  <div key={`other-${cIdx}`} style={{ marginBottom: '12rem', position: 'relative' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      style={{ 
                        textAlign: cIdx % 2 === 0 ? 'left' : 'right', 
                        marginBottom: '4rem',
                        padding: '0 2rem'
                      }}
                    >
                      <h3 style={{ 
                        color: 'white', 
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', 
                        fontWeight: '800', 
                        marginBottom: '1rem',
                        letterSpacing: '-1px'
                      }}>
                        {committee.title.split(' ').map((word, i) => (
                          <span key={i} style={{ color: i === 0 ? committee.color : 'inherit' }}>{word} </span>
                        ))}
                      </h3>
                      <div style={{ 
                        width: '120px', 
                        height: '6px', 
                        background: `linear-gradient(90deg, ${committee.color}, transparent)`, 
                        margin: cIdx % 2 === 0 ? '0 0 1.5rem' : '0 0 1.5rem auto',
                        borderRadius: '10px'
                      }}></div>
                    </motion.div>
                    
                    <div style={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      gap: '2.5rem',
                      padding: '0 1rem'
                    }}>
                      {(committee.title === "Scientific Committee" ? committee.members.slice(0, 10) : committee.members).map((member, mIdx) => (
                        <motion.div 
                          key={mIdx} 
                          initial={{ opacity: 0, y: 50, rotate: -2 }}
                          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ 
                            duration: 0.6, 
                            delay: (mIdx % 6) * 0.1,
                            type: 'spring',
                            stiffness: 100 
                          }}
                          style={{ 
                            flex: committee.members.length < 4 ? '0 1 400px' : '0 1 300px',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))', 
                            border: '1px solid rgba(255,255,255,0.1)', 
                            borderRadius: '30px', 
                            padding: '2.5rem',
                            backdropFilter: 'blur(30px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            marginTop: (mIdx % 2 === 0 && committee.members.length > 4) ? '2rem' : '0' 
                          }}
                          whileHover={{ 
                            y: -15, 
                            scale: 1.02,
                            borderColor: committee.color,
                            boxShadow: `0 0 40px ${committee.color}22` 
                          }}
                        >
                          <div style={{ 
                            position: 'absolute', 
                            top: '-10px', 
                            right: '-10px', 
                            width: '60px', 
                            height: '60px', 
                            background: committee.color, 
                            opacity: 0.1, 
                            borderRadius: '50%',
                            filter: 'blur(20px)'
                          }}></div>

                          <div style={{ 
                            width: '120px', 
                            height: '120px', 
                            borderRadius: '24px', 
                            background: 'rgba(255,255,255,0.03)', 
                            marginBottom: '2rem', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            border: `1px solid rgba(255,255,255,0.1)`,
                            overflow: 'hidden',
                            transform: 'rotate(-3deg)',
                            boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                          }}>
                            {member.image ? (
                              <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'rotate(3deg)' }} />
                            ) : (
                              <span style={{ fontSize: '2.5rem', fontWeight: '900', color: committee.color, transform: 'rotate(3deg)' }}>
                                {member.name.split(' ').filter(n => !n.includes('.')).slice(0, 2).map(n => n[0]).join('')}
                              </span>
                            )}
                          </div>
                          
                          <h4 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.6rem', lineHeight: '1.2' }}>{member.name}</h4>
                          <p style={{ color: committee.color, fontSize: '0.9rem', fontWeight: '800', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{member.role}</p>
                          <div style={{ height: '1px', width: '40%', background: 'rgba(255,255,255,0.1)', marginBottom: '1rem' }}></div>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', fontWeight: '500' }}>{member.affiliation}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            );
          })()}

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ textAlign: 'center', marginTop: '4rem' }}
          >
             <Link to="/committee" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.1rem', borderRadius: '50px' }}>
               Learn More Details
             </Link>
          </motion.div>
        </div>
      </section>

      {/* 10. LOCATION & MAP SECTION */}
      <section style={{ padding: '8rem 0', background: 'rgba(2, 6, 23, 0.5)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '3rem', color: 'white', fontWeight: '800', marginBottom: '1.5rem' }}>
                Join Us in <span style={{ color: 'var(--primary-color)' }}>Al Khobar</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                The conference will be hosted at the state-of-the-art campus of Prince Mohammad Bin Fahd University (PMU). Experience world-class academic facilities in one of Saudi Arabia's most vibrant coastal cities.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--primary-color)', background: 'rgba(243, 112, 33, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Venue Location</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Prince Mohammad Bin Fahd University (PMU)<br />Al Khobar, Kingdom of Saudi Arabia</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--primary-color)', background: 'rgba(243, 112, 33, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Accommodations</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Special rates available at nearby premium hotels for conference attendees.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ height: '500px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.893112258832!2d50.0934331!3d26.1472848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49d950138d15c5%3A0xdc2e01b3cf357894!2sPrince%20Mohammad%20Bin%20Fahd%20University!5e0!3m2!1sen!2ssa!4v1714210000000!5m2!1sen!2ssa" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE KHOBAR CITY */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'white' }}>Explore <span style={{ color: 'var(--primary-color)' }}>Khobar City</span></h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem' }}>Experience the vibrant hub of the Eastern Province of Saudi Arabia.</p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="city-grid">
              <div className="city-image-wrapper" style={{ border: 'none', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', overflow: 'hidden'}}>
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={split1} 
                  alt="Khobar Corniche" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="city-image-wrapper" style={{ border: 'none', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', overflow: 'hidden'}}>
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={split2} 
                  alt="Ithra" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="city-image-wrapper" style={{ border: 'none', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', overflow: 'hidden'}}>
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={split3} 
                  alt="King Fahd Causeway" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. SPONSORED BY */}
      <section style={{ 
        padding: '8rem 0', 
        background: 'linear-gradient(180deg, transparent 0%, rgba(243, 112, 33, 0.05) 50%, transparent 100%), radial-gradient(circle at 50% 50%, rgba(14, 27, 77, 1) 0%, #020617 100%)', 
        color: 'white', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Blur Orbs */}
        <div style={{ position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px', background: 'var(--primary-color)', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '300px', height: '300px', background: 'var(--secondary-color)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'white', fontWeight: '800' }}>Sponsored & Organized By</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary-color)', margin: '1.5rem auto' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>With prestigious technical co-sponsorship from IEEE</p>
          </motion.div>

          
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}
          >
            {/* First Row: PMU Logo Centered */}
            <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }} style={{ textAlign: 'center' }}>
              <img 
                src={pmuLogo} 
                alt="Prince Mohammad Bin Fahd University" 
                style={{ height: '120px', width: 'auto', filter: 'brightness(1.1) drop-shadow(0 0 10px rgba(0,0,0,0.5))' }} 
              />
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginTop: '1rem', fontWeight: '600', whiteSpace: 'nowrap' }}>Prince Mohammad Bin Fahd University</p>
            </motion.div>


            {/* Second Row: 3 Logos Below */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '4rem' }}>
              {[
                { src: ieeeAdvancingLogo, alt: "IEEE — Advancing Technology for Humanity", height: '70px' },
                { src: ieeeSaudiLogo, alt: "IEEE Saudi Arabia Section", height: '70px' },
                { src: cshsLogo, alt: "College of Sciences and Human Studies", height: '70px' },
              ].map((logo, i) => (
                <motion.div key={i} variants={cardVariants} whileHover={{ scale: 1.08 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    style={{ height: logo.height, width: 'auto', filter: 'brightness(1.1) drop-shadow(0 5px 15px rgba(0,0,0,0.3))' }} 
                  />
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', whiteSpace: 'nowrap' }}>{logo.alt}</p>
                </motion.div>

              ))}
            </div>

          </motion.div>

          <motion.p variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginTop: '4rem', fontSize: '0.9rem' }}>
            Prince Mohammad Bin Fahd University (PMU), Al Khobar, 31952, Kingdom of Saudi Arabia
          </motion.p>
        </div>
      </section>

    </div>
  );
};

export default Home;
