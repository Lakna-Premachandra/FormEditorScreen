import React from 'react';
import { IoMdSettings, IoIosClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import '../FormComponent/SideBarCommon.css';

const SideBarCommontwo: React.FC<{
  formData: { title: string; description: string; email: string };
  onFormDataChange: (key: string, value: string) => void;
  onScreenChange: (screen: 'default' | 'welcome-form') => void;
}> = ({ formData, onFormDataChange }) => {
  const navigate = useNavigate();

  const handleInputChange = (key: string, value: string) => {
    onFormDataChange(key, value);
  };

  const handleSave = () => {
    navigate('/');
  };

  const handleDiscard = () => {
    onFormDataChange('title', '');
    onFormDataChange('description', '');
    onFormDataChange('email', '');
  };

  return (
    <div className="main__container__wrapper">
      <div className="main__bar__container">
        <div className="secondary__bar__container">
          <IoMdSettings size={22} className="btn__settings" />
          <div className="secondary__bar__container__title">Settings</div>
        </div>
        <IoIosClose size={26} onClick={() => navigate('/')} className="btn__close" />
      </div>

      <div className="main__baricon__container">
        <div className="bar__container">
          <div className="bar__container__title">Title</div>
          <input
            className="bar__container__input"
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="Enter title"
          />
        </div>

        <div className="bar__container">
          <div className="bar__container__title">Description</div>
          <input
            className="bar__container__input"
            type="text"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Enter description"
          />
        </div>

        <div className="btn__group">
          <button className="save_btn" onClick={handleSave}>Save</button>
          <button className="discard_btn" onClick={handleDiscard}>Discard</button>
        </div>
      </div>
    </div>
  );
};

export default SideBarCommontwo;
