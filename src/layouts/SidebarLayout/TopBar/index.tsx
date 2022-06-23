import './style.css'
import { CgSearch } from 'react-icons/cg'
import { IoIosArrowDown } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="topbar">
        <div className="flex items-center topbar__container">
            <div className="flex items-center topbar__search-container">
              <CgSearch className="topbar__search-icon" />
              <input type="text" placeholder='Search' className='tobar__search-input' />
            </div>
            <div className="flex items-center topbar__profile">
                <div className="flex items-center topbar__profile-left">
                  <div className="flex items-center justify-content topbar__profile-image__container">
                    {/* <img src="/static/images/" */}
                  </div>
                  <div className="flex flex-col justify-center topbar__profile-left__content">
                    <h5 className="topbar__profile-heading">
                      Mr Luis
                    </h5>
                    <p className="topbar__profile-subheading">
                      Patient
                    </p>
                  </div>
                </div>
                <div className="topbar__profile-right">
                    <IoIosArrowDown className="topbar__profile-drop__icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar