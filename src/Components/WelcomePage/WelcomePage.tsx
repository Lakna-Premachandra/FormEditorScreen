import SideBarCommon from '../FormComponent/SideBarCommon';
import MainContainer from '../Container/MainContainer';
import '../HomePage/HomePage.css';

const WelcomePage: React.FC<{
  onScreenChange: (screen: 'default' | 'welcome-form') => void;
  formData: { title: string; description: string; text: string; image?: string };
  onFormDataChange: (key: string, value: string) => void;
}> = ({ onScreenChange, formData, onFormDataChange }) => {
  return (
    <div className='main__containe__wrapper'>
      <SideBarCommon
        onScreenChange={onScreenChange}
        formData={formData}
        onFormDataChange={onFormDataChange}
      />
      <MainContainer formData={formData} />
    </div>
  );
};

export default WelcomePage;
