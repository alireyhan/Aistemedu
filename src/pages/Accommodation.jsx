import { motion } from 'framer-motion';

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
      mapLink: "https://www.google.com/maps?q=Grand+Hyatt+Al+Khobar+Hotel+and+Residences,+Olaya,+3266+Custodian+of+Two+Holy+Mosques+Road,+Al+Khobar,+Saudi+Arabia"
    },
    {
      name: "InterContinental Al Khobar",
      address: "King Saud Branch Road Crossing 21st Street, Dhahran Saudi Arabia, Al Olayya, Al Khobar",
      phone: "+966 13 816 4444",
      mapLink: "https://www.google.com/maps?q=King+Saud+Branch+Road+Crossing+21st+Street,+Al+Khobar,+Saudi+Arabia"
    },
    {
      name: "Aloft Dhahran Hotel",
      address: "King Saud Branch Road behind Mall Al Dhahran, Al Olayya, 11496 Al Khobar",
      phone: "+966 13 864 9777",
      mapLink: "https://www.google.com/maps?q=King+Saud+Branch+Road+behind+Mall+Al+Dhahran,+Al+Olayya,+11496+Al+Khobar,+Saudi+Arabia"
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
        <h1 style={{ fontSize: '3rem', color: 'var(--secondary-color)', fontWeight: '800' }}>Accommodation</h1>
        <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Recommended hotels for the IEEE Conference organized by PMU.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {hotels.map((hotel, index) => (
          <motion.div key={index} variants={itemVariants} style={{ background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{hotel.name}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1 }}>{hotel.address}</p>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', color: 'var(--primary-color)', borderRadius: '8px', marginBottom: '1.5rem', fontWeight: '800', border: '1px solid var(--glass-border)' }}>
              📞 {hotel.phone}
            </div>
            <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'block', width: '100%', textAlign: 'center' }}>
              View on Google Maps
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Accommodation;
