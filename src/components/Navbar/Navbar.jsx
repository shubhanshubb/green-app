import React from 'react';
import { HiHome } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const bottomTab = [
    {
      path: '/homeportal/',
      icon: <HiHome />,
    },
    {
      path: '/homeportal/user',
      icon: <FaUser />,
    },
  ];

  return (
    <div className="container">
      <div className="table">
        {bottomTab.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            style={{
              backgroundColor: location.pathname === item.path ? '#38383885' : 'transparent',
            }}
          >
            <div className="icon">{item.icon}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
