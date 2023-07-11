import React, { useState } from 'react';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={isSidebarOpen ? 'dashboard-container open' : 'dashboard-container'}>
      <div className="sidebar">
        <SidebarContent />
      </div>
      <div className="main-content">
        <button onClick={handleSidebarToggle} className="toggle-button">
          Toggle Sidebar
        </button>
        {/* Main content of your dashboard */}
      </div>
    </div>
  );
};

export default Sidebar;
