import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const tracks = [
  {
    id: 1,
    title: "AI-Driven Education, Learning Sciences, and Human Development",
    color: "#0284c7",
    items: [
      "AI in Personalized, Adaptive, and Intelligent Learning Systems",
      "AI for Curriculum Design, Assessment, and Learning Analytics",
      "Human-AI Interaction in Educational Contexts",
      "AI in Language Learning, Educational Psychology, and Cognitive Development",
      "Equity, Inclusion, and Ethical Dimensions of AI in Education",
      "Digital Transformation, E-Learning Technologies, and Future Learning Models"
    ]
  },
  {
    id: 2,
    title: "Mathematics, Computational Intelligence, and AI Foundations",
    color: "#7c3aed",
    items: [
      "Applied Mathematics and Optimization for AI Systems",
      "Computational Modeling, Simulation, and Intelligent Systems",
      "Cryptography, Secure Computation, and AI in Cybersecurity",
      "Data Science, Algorithm Design, and Computational Social Systems",
      "AI in Economic, Financial, and Decision Sciences Modeling",
      "Network Science, Complexity, and Socio-Technical Systems"
    ]
  },
  {
    id: 3,
    title: "AI for Sustainable Development, Smart Systems, and Environmental Resilience",
    color: "#059669",
    items: [
      "AI-Driven Climate Solutions and Environmental Sustainability",
      "Smart Cities, Smart Infrastructure, and Renewable Energy Systems",
      "Sustainable Manufacturing, Automation, and Green AI",
      "AI for Urban Planning and Social Infrastructure",
      "AI Governance for Sustainability and Environmental Ethics",
      "Community-Based AI and AI for UN Sustainable Development Goals (SDGs)"
    ]
  },
  {
    id: 4,
    title: "AI Ethics, Policy, and Global Governance",
    color: "#d97706",
    items: [
      "Ethical, Transparent, and Accountable AI Systems",
      "AI in Public Administration, Governance, and Policymaking",
      "AI and Human Rights, Labor Markets, and Workforce Policy",
      "AI in Media, Communication, and Public Discourse",
      "Philosophical Foundations and Cultural Implications of AI",
      "Regulation, Global Legislation, and Responsible AI Frameworks"
    ]
  },
  {
    id: 5,
    title: "Innovation, Leadership, and AI-Driven Organizational Transformation",
    color: "#dc2626",
    items: [
      "AI for Strategic Decision-Making and Organizational Excellence",
      "Human-AI Collaboration in Leadership and Management",
      "AI in Global Business, Entrepreneurship, and Emerging Markets",
      "Innovation Studies and Transformative AI Applications",
      "Behavioral Insights and AI-Augmented Decision Sciences",
      "AI for Social Innovation, Community Impact, and Institutional Change"
    ]
  },
  {
    id: 6,
    title: "AI for Emerging Technologies, Workforce Intelligence, and Future Skills",
    color: "#0891b2",
    items: [
      "AI-Driven Skill Forecasting and Labor Market Intelligence",
      "Predictive Workforce Planning and Talent Development Systems",
      "AI in Curriculum Governance and Higher Education Transformation",
      "Lifelong Learning, Reskilling, and Digital Credentials",
      "Reinforcement Learning and Adaptive Systems for Skills Optimization",
      "Workforce Equity, Inclusion, and AI-Enabled Opportunity Access"
    ]
  }
];

const TrackCard = ({ track, idx }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: idx * 0.07 }}
      style={{
        background: 'var(--glass-bg)',
        border: `1px solid var(--glass-border)`,
        borderLeft: `5px solid ${track.color}`,
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      }}
    >
      {/* Track Header - always visible */}
      <div style={{ padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: `linear-gradient(135deg, ${track.color}, ${track.color}88)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: '900', fontSize: '1.2rem', color: '#fff', flexShrink: 0,
            boxShadow: `0 4px 15px ${track.color}44`
          }}>
            {track.id}
          </div>
          <div>
            <p style={{ color: track.color, fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 0.5rem 0' }}>
              Track {track.id}
            </p>
            <h3 style={{ fontSize: '1.3rem', color: 'white', fontWeight: '800', lineHeight: '1.4', margin: 0 }}>
              {track.title}
            </h3>
          </div>
        </div>

        <button
          onClick={() => setExpanded(v => !v)}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.6rem 1.4rem', borderRadius: '30px',
            background: expanded ? `${track.color}22` : 'rgba(255,255,255,0.05)',
            border: `1.5px solid ${track.color}44`,
            color: track.color, fontWeight: '700', fontSize: '0.88rem',
            cursor: 'pointer', transition: 'all 0.25s', whiteSpace: 'nowrap',
            fontFamily: 'inherit'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = `${track.color}22`; }}
          onMouseLeave={e => { e.currentTarget.style.background = expanded ? `${track.color}22` : 'rgba(255,255,255,0.05)'; }}
        >
          {expanded ? '▲ Show Less' : '▼ View More'}
        </button>
      </div>

      {/* Expandable sub-topics */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 2.5rem 2.5rem',
              borderTop: `1px solid ${track.color}22`,
              paddingTop: '1.75rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1rem'
              }}>
                {track.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                      background: `${track.color}0d`,
                      border: `1px solid ${track.color}22`,
                      borderRadius: '10px',
                      padding: '1rem 1.25rem',
                    }}
                  >
                    <div style={{
                      width: '10px', height: '10px', borderRadius: '50%',
                      background: track.color, marginTop: '5px', flexShrink: 0
                    }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', fontWeight: '500' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Scope = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px' }}
    >
      {/* Header */}
      <section style={{ padding: '5rem 0', background: 'transparent', textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1.5rem', color: 'white', fontWeight: '800' }}>
              Scope of the{' '}
              <span style={{ color: 'var(--primary-color)' }}>
                Conference
              </span>
            </h1>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.9' }}>
              AISTEMEDU 2026 aims to foster interdisciplinary research that advances AI applications in education,
              computational sciences, humanities, and sustainable technologies. Aligned with{' '}
              <strong style={{ color: 'var(--primary-color)' }}>Saudi Vision 2030</strong>, the conference brings
              together academia, industry, and policymakers to explore AI-driven innovations that enhance learning
              methodologies, optimize smart systems, and promote ethical AI adoption for societal transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: 'white', fontWeight: '800' }}>
              Key Focus <span style={{ color: 'var(--primary-color)' }}>Areas</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { title: "AI for Education", desc: "Advancing AI-driven learning methodologies, intelligent tutoring systems, and adaptive educational technologies to enhance student engagement and knowledge acquisition." },
              { title: "Computational & Mathematical Modeling", desc: "Exploring advanced mathematical and computational techniques to optimize AI applications, driving economic diversification and technological progress." },
              { title: "AI for Humanities", desc: "Generating innovative solutions to develop humanities through AI applications; facing ethical & intellectual challenges." },
              { title: "AI for Sustainability", desc: "Showcasing AI-powered solutions in economic and environmental sustainability, smart infrastructure, and renewable energy to support global green initiatives and Net Zero goals." },
              { title: "Ethical and Societal Impacts", desc: "Examining AI governance, ethical considerations, and workforce transformation to ensure responsible AI integration in education, industry, and society." },
            ].map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              >
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: '800' }}>{area.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Expandable Tracks */}
      <section style={{ padding: '5rem 0', background: 'transparent' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white', fontWeight: '800' }}>
              Conference <span style={{ color: 'var(--primary-color)' }}>Tracks</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>

          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {tracks.map((track, idx) => (
              <TrackCard key={idx} track={track} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'var(--glass-bg)', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <div className="container">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>
              Join us in shaping the future of <span style={{ color: 'var(--primary-color)' }}>responsible AI</span> development
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
              By uniting academia, industry, and policymakers, AISTEMEDU 2026 aims to explore groundbreaking solutions
              that contribute to technological progress, sustainable growth, and societal transformation.
            </p>
            <a
              href="https://easychair.org/account/signin?l=8568301878240743666.1775567869.25b8e943"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px' }}
            >
              Submit Your Paper
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Scope;
