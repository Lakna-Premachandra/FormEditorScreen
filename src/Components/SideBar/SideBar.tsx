import { BsBoxFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdSettings, IoIosClose, IoIosAdd } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaRegCircle } from "react-icons/fa";
import './SideBar.css'
import { useNavigate } from 'react-router-dom';

const SideBar: React.FC<{ onScreenChange: (screen: 'default' | 'welcome-form') => void }> = ({
  onScreenChange,
}) => {
  const navigate = useNavigate();

  return (
    <div className="main__container__wrapper">

      <div className="main__bar__container">
        <div className="secondary__bar__container">
          <BsBoxFill size={16} />
          <div className="secondary__bar__container__title">Dashboard</div>
          <MdKeyboardArrowRight size={25} />
          <div>Demo Form</div>
        </div>

        <IoMdSettings size={22} className="btn__settings" />
      </div>

      <div className="header__selector">
        <div className="sub__header__selector">
          <button>Content</button>
          <button>Design</button>
          <button>Share</button>
          <button>Replies</button>
        </div>
      </div>

      <div className="main__baricon__container">

        <div className="bar__container"><HiOutlineBars3 size={24} className="btn__bar" />
          <div className="bar__container__title">Steps</div>
        </div>
        <div className="bar__container__description">
          The steps users will take to complete the form
        </div>

        <div className="fields__container">
          <div className="sub__fields__container">
            <button onClick={() => navigate("/welcome-form")} className="btn__welcome">
              Welcome Screen
            </button>
          </div>

          <div onClick={() => navigate("/enter-email")} className="sub__fields__container">
            <button>
              Enter your email
            </button>
            <IoIosClose size={24} className="btn__close" />
          </div>
        </div>
        <div>
          <button className="add_btn"><IoIosAdd size={22} />Add field</button>
        </div>
      </div>

      <div className="end__screen__wrapper">
        <button className="end__screen__btn"><FaRegCircle size={12} />End Screen</button>
      </div>

    </div>
  )
}

export default SideBar
