import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className="navbar">
      <NavBarItem item={"Freecodecamp"} title="Project 1" />
      <NavBarItem item={"counter"} title="Project 2" />
      <NavBarItem item={"calculator"} title="Project 3" />
      <NavBarItem item={"tasks"} title="Project 4" />
    </div>
  );
}
