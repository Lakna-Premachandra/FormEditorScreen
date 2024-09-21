import React from 'react';
import SideBarCommontwo from '../InputBox/SideBarCommontwo';
import EmailContainer from '../EmailContainer/EmailContainer';
import './EmailPage.css';


interface EmailPageProps {
  onScreenChange: (screen: 'default' | 'welcome-form') => void;
  formData: { title: string; description: string; email: string };
  onFormDataChange: (key: string, value: string) => void;
}

const EmailPage: React.FC<EmailPageProps> = ({ onScreenChange, formData, onFormDataChange }) => {
  return (
    <div className="main__containe__wrapper">
      <SideBarCommontwo
        formData={formData}
        onFormDataChange={onFormDataChange}
        onScreenChange={onScreenChange}
      />
      <EmailContainer formData={formData} />
    </div>
  );
};

export default EmailPage;
