// components/EditBannerTemplateBs.tsx

import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import styles from '../styles/BannerStyles.module.css';

interface EditBannerProps {
  open: boolean;
  onClose: () => void;
  banner: { title: string; description: string; cta: string; image: string; background: string };
  onSave: (banner: { title: string; description: string; cta: string; image: string; background: string }) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ open, onClose, banner, onSave }) => {
  const [editedBanner, setEditedBanner] = useState(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedBanner({ ...editedBanner, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(editedBanner);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.modalContainer}>
        <TextField label="Title" name="title" value={editedBanner.title} onChange={handleChange} fullWidth margin="normal" className={styles.modalInput} />
        <TextField label="Description" name="description" value={editedBanner.description} onChange={handleChange} fullWidth margin="normal" className={styles.modalInput} />
        <TextField label="CTA" name="cta" value={editedBanner.cta} onChange={handleChange} fullWidth margin="normal" className={styles.modalInput} />
        <TextField label="Image URL" name="image" value={editedBanner.image} onChange={handleChange} fullWidth margin="normal" className={styles.modalInput} />
        <TextField label="Background" name="background" value={editedBanner.background} onChange={handleChange} fullWidth margin="normal" className={styles.modalInput} />
        <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
      </div>
    </Modal>
  );
};

export default EditBannerTemplateBs;
