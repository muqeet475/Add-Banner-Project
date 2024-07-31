import React from 'react';
import styles from '../styles/BannerStyles.module.css';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  const backgroundStyle = background.startsWith('/')
    ? { backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: background };

  return (
    <div className={styles.bannerContainer} style={backgroundStyle}>
      <img src={image} alt={title} className={styles.bannerImage} />
      <h2 className={styles.bannerTitle}>{title}</h2>
      <p className={styles.bannerDescription}>{description}</p>
      <button className={styles.bannerCTA}>{cta}</button>
      <button onClick={onEdit} className={styles.editButton}>✎</button>
    </div>
  );
};

export default BannerImageComp;
