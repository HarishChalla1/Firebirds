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

const Side = () => {
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
          <li className="nav-item logo">
            <MdDashboard className="dashboard-icon" />
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${selectedLink === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleLinkClick('dashboard')}
            >
              <FaHome className="nav-icon" />
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${selectedLink === 'columns' ? 'active' : ''}`}
              onClick={() => handleLinkClick('columns')}
            >
              <FaColumns className="nav-icon" />
              <span className="nav-text">Columns</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${selectedLink === 'users' ? 'active' : ''}`}
              onClick={() => handleLinkClick('users')}
            >
              <FaUsers className="nav-icon" />
              <span className="nav-text">Users</span>
            </a>
          </li>
          <li className={`nav-item notification ${isNotificationOpen ? 'open' : ''}`}>
            <a href="#" className="nav-link" onClick={toggleNotification}>
              <FaBell className="nav-icon" />
              <span className="nav-text">Notification</span>
              {isNotificationOpen ? <FaAngleUp className="toggle-icon" /> : <RiArrowDropDownLine className="toggle-icon" />}
            </a>
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
          </li>
        </ul>
        <button className={`toggle-button ${isExpanded ? 'expanded' : ''}`} onClick={toggleNav}>
          {isExpanded ? <TfiArrowCircleLeft className="toggle-icon" /> : <TfiArrowCircleRight className="toggle-icon" />}
        </button>
      </div>
    </div>
  );
};

export default Side;
