import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from './Components/HomePage/HomePage';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import EmailPage from './Components/EmailPage/EmailPage';

const App: React.FC = () => {
  const [, setActiveScreen] = useState<'default' | 'welcome-form'>('default');
  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   text: '',
  //   email: ''
  // });

  const [welcomeFormData, setWelcomeFormData] = useState({
    title: '',
    description: '',
    text: '',
    image: ''
  });

  const [emailFormData, setEmailFormData] = useState({
    title: '',
    description: '',
    email: ''
  });

  const handleScreenChange = (screen: 'default' | 'welcome-form') => {
    setActiveScreen(screen);
  };

  const handleWelcomeFormDataChange = (key: string, value: string) => {
    setWelcomeFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleEmailFormDataChange = (key: string, value: string) => {
    setEmailFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <Router>
      <div className="app__container">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                formData={welcomeFormData}
                onScreenChange={handleScreenChange}
              />
            }
          />
          <Route
            path="/welcome-form"
            element={
              <WelcomePage
                formData={welcomeFormData}
                onScreenChange={handleScreenChange}
                onFormDataChange={handleWelcomeFormDataChange}
              />
            }
          />
          <Route
            path="/enter-email"
            element={
              <EmailPage
                formData={emailFormData}
                onScreenChange={handleScreenChange}
                onFormDataChange={handleEmailFormDataChange}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;