import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import styles from '../styles/BannerStyles.module.css';

const initialBanners = [
  {
    title: 'Unleash Your Cricket Passion',
    description: 'Get the Latest Gear and Equipment',
    cta: 'Learn More',
    image: '/images/1bannerbot-banner.png',
    background: '/images/back1.png'
  },
  {
    title: 'Unleash Your Cricket Passion',
    description: 'Get the Latest Gear and Equipment',
    cta: 'Learn More',
    image: '/images/2bannerbot-banner.png',
    background: '/images/back2.png'
  },
  {
    title: 'Unleash Your Cricket Passion',
    description: 'Get the Latest Gear and Equipment',
    cta: 'Learn More',
    image: '/images/3bannerbot-banner.png',
    background: '/images/back3.png'
  },
  {
    title: 'Unleash Your Cricket Passion',
    description: 'Get the Latest Gear and Equipment',
    cta: 'Learn More',
    image: '/images/4bannerbot-banner.png',
    background: '/images/back4.png'
  },
  {
    title: 'Unleash Your Cricket Passion',
    description: 'Get the Latest Gear and Equipment',
    cta: 'Learn More',
    image: '/images/5bannerbot-banner.png',
    background: '/images/back1.png'
  },
  {
    title: 'Unleash Your Cricket Passion',
    description: 'Get the Latest Gear and Equipment',
    cta: 'Learn More',
    image: '/images/6bannerbot-banner.png',
    background: '/images/back2.png'
  },
  {
    title: 'Unleash Your Cricket Passion',
    description: 'Get the Latest Gear and Equipment',
    cta: 'Learn More',
    image: '/images/7bannerbot-banner.png',
    background: '/images/back3.png'
  },
  {
    title: 'Unleash Your Cricket Passion',
    description: 'Get the Latest Gear and Equipment',
    cta: 'Learn More',
    image: '/images/8bannerbot-banner.png',
    background: '/images/back4.png'
  },
  {
    title: 'Unleash Your Cricket Passion',
    description: 'Get the Latest Gear and Equipment',
    cta: 'Learn More',
    image: '/images/9bannerbot-banner.png',
    background: '/images/back4.png'
  },
  {
    title: 'Unleash Your Cricket Passion',
    description: 'Get the Latest Gear and Equipment',
    cta: 'Learn More',
    image: '/images/10bannerbot-banner.png',
    background: '/images/back1.png'
  },
];

const Home: React.FC = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [editOpen, setEditOpen] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    setCurrentBannerIndex(index);
    setEditOpen(true);
  };

  const handleSave = (updatedBanner: typeof initialBanners[0]) => {
    if (currentBannerIndex !== null) {
      const updatedBanners = [...banners];
      updatedBanners[currentBannerIndex] = updatedBanner;
      setBanners(updatedBanners);
    }
  };

  const handleClose = () => {
    setEditOpen(false);
    setCurrentBannerIndex(null);
  };

  return (
    <div className={styles.bannersContainer}>
      {banners.map((banner, index) => (
        <BannerImageComp
          key={index}
          {...banner}
          onEdit={() => handleEdit(index)}
        />
      ))}
      {currentBannerIndex !== null && (
        <EditBannerTemplateBs
          open={editOpen}
          onClose={handleClose}
          banner={banners[currentBannerIndex]}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Home;
