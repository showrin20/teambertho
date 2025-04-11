// src/pages/ShortFilms.tsx
import React from 'react';
import shortfilmsBanner from '../assets/shortfilms.png'; // adjust path as needed
import Watch from '../components/Watch';

const videoData = [
  { src: "https://www.youtube.com/embed/7VoOSCUrEyE?si=qbpEn74zuuINR3HZ", title: "Inspiring Story 1" },
  { src: "https://www.youtube.com/embed/CGqavSq5Dz8?si=xXOA5m399TF7ByXg", title: "Behind the Scenes" },

  { src: "https://www.youtube.com/embed/UpFSSLbopxg?si=QebzouP2Qf_UL2dh", title: "Behind the Scenes" },


  { src: "https://www.youtube.com/embed/kedIYOoAKhg?si=r_2557mZgK2x55rY", title: "Behind the Scenes" },


  { src: "https://www.youtube.com/embed/NHzUavTHqnI?si=Qmq1VmIgruJL6Hbm", title: "Behind the Scenes" },


  { src: "https://www.youtube.com/embed/G6uesc01lO4?si=CmDt13ZVSQJ9HjkQ", title: "Behind the Scenes" },

  { src: "https://www.youtube.com/embed/Ogr4UjbDxQE?si=1rwWV_uB68ejbzHT", title: "Behind the Scenes" },


  { src: "https://www.youtube.com/embed/DI6PTGdWWC4?si=D6wpZyrjTQ_INXmR", title: "Behind the Scenes" },




];


const ShortFilms: React.FC = () => {
  return (
    <div style={styles.page}>
      {/* Full-width banner */}
      <div style={styles.heroSection}>
        <img
          src={shortfilmsBanner}
          alt="Short Films Banner"
          style={styles.heroImage}
        />
      </div>

      {/* Content below banner */}
      <div style={styles.content}>
        <p>This was the first genre that Team Bertho started working on. These films showcased various issues rolling the developing milieu of Bangladesh
</p>

      </div>


      <section
        className="w-full  px-6 text-center"
      >
        <div className="mt-6">
          <Watch videos={videoData} />
        </div>
      </section>
    </div>
    
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    width: '100%',
    overflowX: 'hidden',
  },
  heroSection: {
    width: '100%',
    height: 'auto',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block',
  },
  content: {
    padding: '40px',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: "20px",
    marginTop: '30px',
  },
};

export default ShortFilms;
