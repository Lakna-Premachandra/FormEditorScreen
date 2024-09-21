import React from 'react';
import './EmailContaine.css';

const EmailContainer: React.FC<{ formData: { title: string; description: string; email: string } }> = ({ formData }) => {
  return (
    <div className="main__content__wrapper">
      <div className="main__Container__wrapper">
        <div className="main__wrapper">
          <div className="main__wrapper__title">{formData.title || 'Enter your email'}</div>
          <div className="main__wrapper__description">{formData.description || 'This will be used to contact you for the next steps.'}</div>

          <div className="email-input-container">
            <input
              type="email"
              placeholder="Type here..."
              style={{ border: 'none', borderBottom: '1px solid gray' }}
              value={formData.email}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailContainer;
