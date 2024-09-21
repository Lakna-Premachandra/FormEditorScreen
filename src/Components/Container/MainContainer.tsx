import './Container.css';
import { GrReturn } from "react-icons/gr";

const MainContainer: React.FC<{ formData: { title: string; description: string; text: string; image?: string; placement?: 'left' | 'right' } }> = ({
  formData,
}) => {
  return (
    <div className='main__content__wrapper'>
      <div className='main__Container__wrapper'>
        <div className="main__wrapper">

          <div className="main__wrapper__title">{formData.title || 'Welcome to our form'}</div>
          <div className="main__wrapper__description">{formData.description || 'This is a description of the form'}</div>
          <div className="main__text__content">{formData.text || ''}</div>

          <div className='main__button__container'>
            <button className='btn__start'>Start</button>
            <div className='secondary__button__container'>
              <button className='btn__enter'>Press <strong>Enter</strong></button>
              <GrReturn />
            </div>
          </div>
        </div>
        <div className="secondary__wrapper">
          {(formData.image) ? (
            <div className="main__image__container">
              <img src={formData.image} alt="Uploaded" className="main__image" />
            </div>
          ) : (
            <>
              <div className="secondary__wrapper__box1"></div>
              <div className="secondary__wrapper__box2"></div>
              <div className="secondary__wrapper__box3"></div>
            </>)}


        </div>
      </div>
    </div>
  );
};

export default MainContainer;

