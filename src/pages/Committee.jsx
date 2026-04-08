import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import { ExternalLink, Award, Shield, Users, Briefcase } from 'lucide-react';
import { committeesSnapshot as committees } from '../data/committees';
/* Data imported from committees.js */

const getInitials = (name) => {
  const parts = name.replace(/^(Dr\.|Mr\.|Ms\.|Prof\.|Eng\.)\s*/i, '').split(' ');
  return parts.slice(0, 2).map(p => p[0]).join('').toUpperCase();
};

const getCommitteeIcon = (title) => {
  if (!title) return <Shield size={20} />;
  if (title.includes('Chair')) return <Award size={20} />;
  if (title.includes('Technical') || title.includes('Scientific') || title.includes('Program')) return <Users size={20} />;
  if (title.includes('Treasurer') || title.includes('Secretary')) return <Briefcase size={20} />;
  return <Shield size={20} />;
};

const MemberCard = ({ member, color, featured = false }) => (
  <motion.div
    whileHover={{ y: featured ? -10 : -7, scale: featured ? 1.02 : 1 }}
    style={{
      background: featured ? 'var(--glass-bg)' : 'rgba(255,255,255,0.02)',
      border: `1px solid ${featured ? 'var(--primary-color)' + '44' : 'var(--glass-border)'}`,
      borderRadius: featured ? '24px' : '16px',
      padding: featured ? '2rem' : '1.5rem',
      textAlign: 'center',
      boxShadow: featured ? `0 20px 40px -15px rgba(0,0,0,0.4)` : 'rgba(0,0,0,0.2) 0px 10px 20px -10px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    }}
  >
    <div style={{
      width: '100%',
      aspectRatio: featured ? '3/4' : '4/5',
      marginBottom: '1.5rem',
      borderRadius: '12px',
      background: `var(--background-dark)`,
      border: `1px solid rgba(0,0,0,0.05)`,
      boxShadow: `0 8px 20px rgba(14,27,77,0.1)`,
      flexShrink: 0,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {member.image ? (
        <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      ) : (
        <span style={{ fontSize: featured ? '4rem' : '3rem', fontWeight: '800', color: color }}>{getInitials(member.name)}</span>
      )}
    </div>
    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '100%', marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: featured ? '1.4rem' : '1.2rem', color: 'white', marginBottom: '0.4rem', lineHeight: '1.2' }}>{member.name}</h4>
        <p style={{ color: color, fontSize: featured ? '1rem' : '0.9rem', fontWeight: '700', marginBottom: '0.5rem' }}>{member.role}</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.4' }}>{member.affiliation}</p>
    </div>
    
    {member.photoUrl && (
      <a href={member.photoUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: 'auto', alignSelf: 'center', color: color, fontSize: '0.8rem', fontWeight: '600', padding: '0.6rem 1.2rem', borderRadius: '30px', background: `${color}15`, transition: 'all 0.2s', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.background = `${color}30`} onMouseLeave={e => e.currentTarget.style.background = `${color}15`}>
        View Profile <ExternalLink size={14} />
      </a>
    )}
  </motion.div>
);

const Committee = () => {
  const leadershipTitles = ["Honorary Chair", "Conference Chair", "Deputy Conference Chairs"];
  
  const leadership = useMemo(() => committees.filter(c => leadershipTitles.includes(c.title)), []);
  const secondaries = useMemo(() => committees.filter(c => !leadershipTitles.includes(c.title)), []);
  
  const [activeTab, setActiveTab] = useState(secondaries[0]?.title);
  const activeCommittee = useMemo(() => secondaries.find(c => c.title === activeTab), [activeTab, secondaries]);

  // Pagination / Show All logic
  const INITIAL_COUNT = 24;
  const [showAll, setShowAll] = useState(false);
  const displayedMembers = showAll ? activeCommittee?.members : activeCommittee?.members.slice(0, INITIAL_COUNT);
  const hasMore = activeCommittee?.members.length > INITIAL_COUNT;

  // Reset showAll when switching tabs
  useMemo(() => {
    setShowAll(false);
  }, [activeTab]);

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header - Centralized */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '800', marginBottom: '1.5rem', color: 'white' }}>
            The <span style={{ color: 'var(--primary-color)' }}>Leadership</span> Circle
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            A centralized hub of academic excellence and organizational leadership behind AISTEMEDU 2026.
          </p>
        </motion.div>

        {/* Leadership Grid - The Main Hub */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '8rem' }}>
          {leadership.map((comm, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: idx * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ textAlign: 'center', marginBottom: '1.5rem', minHeight: '35px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <h3 style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: comm.color, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: '800', margin: 0 }}>
                   {getCommitteeIcon(comm.title)} {comm.title}
                </h3>
              </div>
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <MemberCard member={comm.members[0]} color={comm.color} featured={true} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centralized Explorer Section */}
        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', borderRadius: '40px', padding: 'clamp(1.5rem, 4vw, 3rem)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 0% 0%, rgba(243, 112, 33, 0.05) 0%, transparent 50%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Committee <span style={{ color: 'var(--primary-color)' }}>Explorer</span></h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Browse specialized teams and their respective expert members in a single centralized space.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {/* Navigation Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.8rem' }}>
                        {secondaries.map((comm) => (
                            <button
                                key={comm.title}
                                onClick={() => setActiveTab(comm.title)}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '50px',
                                    border: '1px solid',
                                    borderColor: activeTab === comm.title ? comm.color : 'rgba(0,0,0,0.1)',
                                    background: activeTab === comm.title ? comm.color : 'rgba(255,255,255,0.05)',
                                    color: activeTab === comm.title ? 'white' : 'var(--text-secondary)',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseEnter={(e) => {
                                  if (activeTab !== comm.title) {
                                    e.currentTarget.style.borderColor = comm.color + '55';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (activeTab !== comm.title) {
                                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                                  }
                                }}
                            >
                                {activeTab === comm.title && getCommitteeIcon(comm.title)}
                                <span>{comm.title}</span>
                                <span style={{ 
                                  background: activeTab === comm.title ? 'white' : 'rgba(255,255,255,0.05)', 
                                  color: activeTab === comm.title ? comm.color : 'white',
                                  padding: '0.1rem 0.5rem', 
                                  borderRadius: '20px', 
                                  fontSize: '0.75rem',
                                  marginLeft: '0.2rem',
                                  fontWeight: '800'
                                }}>
                                  {comm.members.length}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Active Committee Display */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.8rem', color: activeCommittee?.color, marginBottom: '0.5rem' }}>{activeCommittee?.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Showing {displayedMembers?.length} of {activeCommittee?.members.length} members</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
                                {displayedMembers?.map((member, mIdx) => (
                                    <MemberCard key={mIdx} member={member} color={activeCommittee?.color || '#3b82f6'} />
                                ))}
                            </div>

                            {hasMore && !showAll && (
                              <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                                <button
                                  onClick={() => setShowAll(true)}
                                  style={{
                                    padding: '1rem 3rem',
                                    borderRadius: '50px',
                                    background: `rgba(255,255,255,0.05)`,
                                    border: `1px solid var(--glass-border)`,
                                    color: 'var(--text-primary)',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background = activeCommittee?.color;
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.borderColor = activeCommittee?.color;
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = `rgba(255,255,255,0.05)`;
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                    e.currentTarget.style.borderColor = `var(--glass-border)`;
                                  }}
                                >
                                  View All {activeCommittee?.members.length} Members
                                </button>
                              </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
