import { motion } from 'framer-motion';
import aloftImg from '../assets/Aloft.jpg';
import interImg from '../assets/Intercontinental.jpg';
import hyattImg from '../assets/grandhayat.jfif';

const Accommodation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const hotels = [
    {
      name: "Grand Hyatt Al Khobar Hotel and Residences",
      address: "3266 Custodian of Two Holy Mosques Road, Al Khobar, Saudi Arabia, 31952",
      phone: "+966 20 1333 11234",
      mapLink: "https://www.google.com/maps?q=Grand+Hyatt+Al+Khobar+Hotel+and+Residences,+Olaya,+3266+Custodian+of+Two+Holy+Mosques+Road,+Al+Khobar,+Saudi+Arabia",
      image: hyattImg
    },
    {
      name: "InterContinental Al Khobar",
      address: "King Saud Branch Road Crossing 21st Street, Dhahran Saudi Arabia, Al Olayya, Al Khobar",
      phone: "+966 13 816 4444",
      mapLink: "https://www.google.com/maps?q=King+Saud+Branch+Road+Crossing+21st+Street,+Al+Khobar,+Saudi+Arabia",
      image: interImg
    },
    {
      name: "Aloft Dhahran Hotel",
      address: "King Saud Branch Road behind Mall Al Dhahran, Al Olayya, 11496 Al Khobar",
      phone: "+966 13 864 9777",
      mapLink: "https://www.google.com/maps?q=King+Saud+Branch+Road+behind+Mall+Al+Dhahran,+Al+Olayya,+11496+Al+Khobar,+Saudi+Arabia",
      image: aloftImg
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ paddingTop: '120px', paddingBottom: '60px' }}
      className="container"
    >
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'white', fontWeight: '800', marginBottom: '1.5rem' }}>Accommodation</h1>
        <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '0 auto 2rem' }}></div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          Recommended hotels for the IEEE Conference organized by PMU.
        </p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {hotels.map((hotel, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants} 
            whileHover={{ y: -10 }}
            style={{ 
              background: 'rgba(15, 23, 42, 0.6)', 
              borderRadius: '24px', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)', 
              padding: '0', 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <div style={{ height: '240px', width: '100%', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={hotel.image} 
                alt={hotel.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
              />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 60%, rgba(15, 23, 42, 0.8))' }}></div>
            </div>
            
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', color: 'white', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.3' }}>
                {hotel.name}
              </h3>
              
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem' }}>
                {hotel.address}
              </p>
              
              <div style={{ 
                padding: '1.2rem', 
                background: 'rgba(255, 255, 255, 0.05)', 
                color: 'var(--primary-color)', 
                borderRadius: '16px', 
                marginBottom: '1.5rem', 
                fontWeight: '700', 
                border: '1px solid rgba(255, 255, 255, 0.05)', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                fontSize: '1.1rem'
              }}>
                <span style={{ fontSize: '1.3rem' }}>📞</span> {hotel.phone}
              </div>
              
              <a 
                href={hotel.mapLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline" 
                style={{ 
                  display: 'flex', 
                  width: '100%', 
                  textAlign: 'center',
                  justifyContent: 'center',
                  padding: '1rem',
                  borderRadius: '16px',
                  fontWeight: '800',
                  letterSpacing: '1px'
                }}
              >
                VIEW ON GOOGLE MAPS
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Accommodation;

