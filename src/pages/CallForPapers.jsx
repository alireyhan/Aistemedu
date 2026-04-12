import { motion } from 'framer-motion';
import conferencePDF from '../assets/Call_For_Paper_AISTEMEDU 2026 (Final).pdf';
import { Calendar, CreditCard, Clock, CheckCircle, FileText, Award, ShieldAlert } from 'lucide-react';

const CallForPapers = () => {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: 'white' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        style={{ paddingTop: '120px', paddingBottom: '60px' }}
        className="container"
      >
        <div style={{ background: 'var(--glass-bg)', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', textAlign: 'center', marginBottom: '4rem', padding: '4rem 2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'white', fontWeight: '800', marginBottom: '1rem' }}>
            Call for <span style={{ color: 'var(--primary-color)'}}>Paper!</span>
          </h1>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '0 auto 1.5rem' }}></div>
          <p style={{ maxWidth: '900px', margin: '0 auto 1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            We are pleased to announce the Call for Paper for the IEEE International Conference on AI-Driven STEM Education and Learning Technologies
            <strong style={{ color: 'white' }}> AISTEMEDU 2026</strong>. We invite authors to submit their original research, findings, and 
            innovations covering topics across our diverse tracks to contribute to the global academic community.
          </p>
          
          <div style={{ marginTop: '2.5rem' }}>
             <a href={conferencePDF} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
                Download Call for Paper
             </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          {[
            { icon: <FileText size={32} color="var(--secondary-color)" />, title: "Paper Submission", date: "August 15, 2026" },
            { icon: <CheckCircle size={32} color="var(--secondary-color)" />, title: "Acceptance", date: "September 15, 2026" },
            { icon: <Award size={32} color="var(--secondary-color)" />, title: "Camera Ready", date: "September 30, 2026" }
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'var(--glass-bg)', borderRadius: '24px', padding: '3rem 1.5rem', textAlign: 'center', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', position: 'relative' }}>
              <div style={{ width: '70px', height: '70px', background: 'var(--primary-color)', borderRadius: '50%', margin: '-60px auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(243, 112, 33, 0.4)' }}>
                {item.icon}
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>{item.title}</h2>
              <div style={{ height: '2px', background: 'rgba(243, 112, 33, 0.4)', width: '60px', margin: '1.5rem auto' }}></div>
              <p style={{ color: 'var(--primary-color)', fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'center' }}>{item.date}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'white' }}>
               <Calendar color="var(--primary-color)" strokeWidth={2.5} size={32} />
               Important <span style={{ color: 'var(--primary-color)' }}>Dates</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
               {[
                 { title: "Paper Submission", date: "August 15, 2026", color: "var(--primary-color)" },
                 { title: "Acceptance", date: "September 15, 2026", color: "white" },
                 { title: "Camera Ready", date: "September 30, 2026", color: "var(--primary-color)" },
                 { title: "Conference Date", date: "October 26-27, 2026", color: "white" }
               ].map((item, i) => (
                  <div key={i} style={{ padding: '1.25rem 1.75rem', background: 'rgba(0,0,0,0.2)', borderRadius: '16px', border: `1px solid rgba(255,255,255,0.05)`, borderLeft: `6px solid ${item.color}`, transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateX(8px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0px)'}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'white', letterSpacing: '0.5px', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{item.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: item.color, fontWeight: '800', fontSize: '1.1rem' }}>
                       <Clock size={18} /> {item.date}
                    </div>
                  </div>
               ))}
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)' }}>
            <h2 style={{ fontSize: 'clamp(1rem, 3.2vw, 1.35rem)', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'white', whiteSpace: 'nowrap' }}>
               <CreditCard color="var(--primary-color)" strokeWidth={2.5} size={28} style={{ flexShrink: 0 }} />
               Registration Fees <span style={{ color: 'var(--primary-color)' }}>(for Online & In-person)</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
               {[
                  { title: "Non-IEEE Member", price: "$100", desc: "Full Conference Access" },
                  { title: "IEEE Member", price: "$80", desc: "Full Conference Access" }
               ].map((item, i) => (
                  <div key={i} style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.3s', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.border = '1px solid rgba(243, 112, 33, 0.4)'; e.currentTarget.style.background = 'rgba(243, 112, 33, 0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(0,0,0,0.2)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'white', marginBottom: '0.3rem' }}>{item.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{item.desc}</p>
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: '700', background: 'linear-gradient(135deg, #fbbf24 0%, #f37021 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginLeft: '1rem' }}>
                      {item.price}
                    </div>
                  </div>
               ))}
            </div>

            <div style={{ 
              marginTop: '2rem', 
              padding: '1.5rem', 
              background: 'rgba(243, 112, 33, 0.08)', 
              borderRadius: '16px', 
              border: '1px solid rgba(243, 112, 33, 0.2)',
              borderLeft: '5px solid var(--primary-color)',
              textAlign: 'left'
            }}>
              <h4 style={{ color: 'var(--primary-color)', fontSize: '1rem', fontWeight: '800', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldAlert size={20} /> Important Note
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                All accepted papers that are presented at the conference, either in person or virtually, will be published in the <strong>Proceedings of the AISTEMEDU 2026 Conference</strong>. Please note that papers that are not presented during the conference will not be included in the official conference proceedings.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                The conference proceedings of <strong>AISTEMEDU 2026</strong> will be submitted to the <strong>IEEE Xplore Digital Library</strong> for publication, provided that all articles meet IEEE’s scope and quality requirements.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallForPapers;
