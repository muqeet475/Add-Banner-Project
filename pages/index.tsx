import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import styles from '../styles/BannerStyles.module.css';
const initialBanners = [
  {
    title: 'Boost Your Leads',
    description: 'Harness Al For Effective Campaigns',
    cta: 'Learn More',
    image: '/images/img1.png',
    background: '/images/back1.png'
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness Al For Effective Campaigns',
    cta: 'Learn More',
    image: '/images/img2.png',
    background: '/images/back2.png'
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness Al For Effective Campaigns',
    cta: 'Learn More',
    image: '/images/img3.png',
    background: '/images/back3.png'
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness Al For Effective Campaigns',
    cta: 'Learn More',
    image: '/images/img4.png',
    background: '/images/back4.png'
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness Al For Effective Campaigns',
    cta: 'Learn More',
    image: '/images/img5.png',
    background: '/images/back1.png'
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness Al For Effective Campaigns',
    cta: 'Learn More',
    image: '/images/img6.png',
    background: '/images/back2.png'
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness Al For Effective Campaigns',
    cta: 'Learn More',
    image: '/images/img7.png',
    background: '/images/back3.png'
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness Al For Effective Campaigns',
    cta: 'Learn More',
    image: '/images/img8.png',
    background: '/images/back4.png'
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness Al For Effective Campaigns',
    cta: 'Learn More',
    image: '/images/img4.png',
    background: '/images/back4.png'
  },
  
  // Add more banners as needed
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