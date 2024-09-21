import SideBar from '../SideBar/SideBar';
import MainContainer from '../Container/MainContainer';

const HomePage: React.FC<{
  onScreenChange: (screen: 'default' | 'welcome-form') => void;
  formData: { title: string; description: string; text: string };
}> = ({ onScreenChange, formData }) => {
  return (
    <>
      <div className='main__containe__wrapper'>
        <SideBar onScreenChange={onScreenChange} />
        <MainContainer formData={formData} />
      </div>
    </>
  );
};

export default HomePage;
