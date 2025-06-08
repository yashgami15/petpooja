import React from 'react';

const Header = () => {
  return (
    <div className="bg-white p-2" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>Petpooja Tasks</h4>
        </div>
        <div>
          <button className="btn btn-outline-secondary">Notifications</button>
          <button className="btn btn-outline-secondary ms-2">Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
