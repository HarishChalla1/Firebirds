import React, { useState } from 'react';
import './sliding.css';
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiArrowDropRightLine,
  RiArrowDropLeftLine
} from 'react-icons/ri';
import {
  FaHome,
  FaColumns,
  FaUsers,
  FaBell,
  FaAngleDown,
  FaAngleUp,
  FaUserCircle
} from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import { TfiArrowCircleRight, TfiArrowCircleLeft } from 'react-icons/tfi';
import { MdDashboard } from 'react-icons/md';
import {PiCaretCircleLeftFill} from 'react-icons/pi'

const Sliding = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const toggleNav = () => {
    if (!isNotificationOpen) {
      setIsExpanded(!isExpanded);
    }
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div>
      <div className={`slide-nav-bar ${isExpanded ? 'expanded' : ''}`}>
        <ul className="nav-items">
          {isExpanded ? (
            <>
              <li className="nav-item">
                <div className="user-circle" >
                  <FaUserCircle style={{ fontSize: '70px', marginTop: '60px' }} />
                </div>
              </li>
              <li className="nav-item">
                <p className="welcome-text" >Welcome!</p>
              </li>
              <li className="nav-item">
                <p className="welcome-text" style={{color:'#A020F0'}}>Rahul Mallavajjala</p>
              </li>
              <li className={`nav-item ${selectedLink === 'dashboard' ? 'selected' : ''}`} id="nav-item">
                <a href="#" onClick={() => handleLinkClick('dashboard')} style={{ marginTop: '40px' }} >
                  Dashboard
                </a>
              </li>
              <li className={`nav-item ${selectedLink === 'collaboration' ? 'selected' : ''}`} id="nav-item">
                <a href="#" onClick={() => handleLinkClick('collaboration')} >
                  Collaboration
                </a>
              </li>
              <li className="nav-item notification" id="nav-item">
  <a href="#" onClick={toggleNotification}>
    Notification {isNotificationOpen ? <RiArrowDropRightLine /> : <RiArrowDropRightLine />}
  </a>
  {isNotificationOpen && (
    <div className="notification-dropdown">
      <div className="notification-card-container">
        <div className="notification-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam</p>
        </div>
        <div className="notification-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam</p>
        </div>
        <div className="notification-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam</p>
        </div>
      </div>
    </div>
  )}
</li>



            </>
          ) : (
            <>
              <li className="nav-item">
                <div className="user-circle">
                  <FaUserCircle style={{ fontSize: '70px', marginTop: '60px' }} />
                  <br />
                </div>
              </li>
              <li className={`nav-item ${selectedLink === 'dashboard' ? 'selected' : ''}`} id="nav-item-icon">
                <a href="#" onClick={() => handleLinkClick('dashboard')} style={{ fontSize: '30px', marginTop: '60px' }}>
                  <MdDashboard />
                </a>
              </li>
              <li className={`nav-item ${selectedLink === 'collaboration' ? 'selected' : ''}`} id="nav-item-icon">
                <a href="#" onClick={() => handleLinkClick('collaboration')} style={{ fontSize: '25px' }}>
                  <FaUsers />
                </a>
              </li>
              <li className="nav-item notification">
                <a href="#" onClick={toggleNotification} style={{ fontSize: '20px' }}>
                  <FaBell /> {isNotificationOpen ? <RiArrowDropRightLine /> : <RiArrowDropRightLine />}
                </a>
                {isNotificationOpen && (
                  <div className="notification-dropdown">
                    <div className="notification-card">
                      <p>Notification 1</p>
                    </div>
                    <div className="notification-card">
                      <p>Notification 2</p>
                    </div>
                    <div className="notification-card">
                      <p>Notification 3</p>
                    </div>
                  </div>
                )}
              </li>
            </>
          )}
        </ul>
        <button
  className={`toggle-button ${isExpanded ? 'expanded' : ''}`}
  onClick={toggleNav}
  style={{
    border: '1px solid #000', // Set the border style and color
    padding: '2px', // Adjust the padding as needed
    borderRadius:'50px',
    backgroundColor:'#5729CE',
    fontSize:'19px',
    padding:'4px'

  }}
>
  {isExpanded ? (
    <>
      &lt;
    </>
  ) : (
    <>
      &gt;
    </>
  )}
</button>

      </div>
    </div>
  );
};

export default Sliding;
