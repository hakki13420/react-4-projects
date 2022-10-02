import React from 'react'
import { Link } from 'react-router-dom';
import './navbaritem.css'

export default function NavBarItem ({item, title}) {
  return (
    <div className="navbaritem">
      <div className="title">
        {title}
      </div>  
      <Link to={item}>
          {item}
      </Link>      
    </div>
  );
}
