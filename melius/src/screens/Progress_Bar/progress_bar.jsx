// import React, { useState, useEffect, useRef } from "react";
import React from "react"
// import './Progress_Bar.css'
// import { CSSTransition } from 'react-transition-group';
// import BellIcon from '../icons/bell.png';
// import MessengerIcon from '../icons/messenger.png';
// import CaretIcon from '../icons/caret.png';
// import PlusIcon  from '../icons/plus.png';
// import  CogIcon  from '../icons/cog.svg';
// import ChevronIcon  from '../icons/chevron.png';
// import ArrowIcon  from '../icons/arrow.png';
// import BoltIcon  from '../icons/bolt.png';

function progress_bar() {
    return (
        <div>
            hello this is the progress bar page!
        </div>
    )
    // return (
    //     <Navbar>
    //       <NavItem icon={<PlusIcon />} />
    //       <NavItem icon={<BellIcon />} />
    //       <NavItem icon={<MessengerIcon />} />
    
    //       <NavItem icon={<CaretIcon />}>
    //         <DropdownMenu></DropdownMenu>
    //       </NavItem>
    //     </Navbar>
    //   );
    // }
    
    // function Navbar(props) {
    //   return (
    //     <nav className="navbar">
    //       <ul className="navbar-nav">{props.children}</ul>
    //     </nav>
    //   );
    // }
    
    // function NavItem(props) {
    //   const [open, setOpen] = useState(false);
    
    //   return (
    //     <li className="nav-item">
    //       <a href="www.google.com" className="icon-button" onClick={() => setOpen(!open)}>
    //         {props.icon}
    //       </a>
    
    //       {open && props.children}
    //     </li>
    //   );
    // }
    
    // function DropdownMenu() {
    //   const [activeMenu, setActiveMenu] = useState('main');
    //   const [menuHeight, setMenuHeight] = useState(null);
    //   const dropdownRef = useRef(null);
    
    //   useEffect(() => {
    //     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    //   }, [])
    
    //   function calcHeight(el) {
    //     const height = el.offsetHeight;
    //     setMenuHeight(height);
    //   }
    
    //   function DropdownItem(props) {
    //     return (
    //       <a href="www.yahoo.com" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
    //         <span className="icon-button">{props.leftIcon}</span>
    //         {props.children}
    //         <span className="icon-right">{props.rightIcon}</span>
    //       </a>
    //     );
    //   }
    
    //   return (
    //     <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
    
    //       <CSSTransition
    //         in={activeMenu === 'main'}
    //         timeout={500}
    //         classNames="menu-primary"
    //         unmountOnExit
    //         onEnter={calcHeight}>
    //         <div className="menu">
    //           <DropdownItem>My Profile</DropdownItem>
    //           <DropdownItem
    //             leftIcon={<CogIcon />}
    //             rightIcon={<ChevronIcon />}
    //             goToMenu="settings">
    //             Settings
    //           </DropdownItem>
    //           <DropdownItem
    //             leftIcon="🦧"
    //             rightIcon={<ChevronIcon />}
    //             goToMenu="animals">
    //             Animals
    //           </DropdownItem>
    
    //         </div>
    //       </CSSTransition>
    
    //       <CSSTransition
    //         in={activeMenu === 'settings'}
    //         timeout={500}
    //         classNames="menu-secondary"
    //         unmountOnExit
    //         onEnter={calcHeight}>
    //         <div className="menu">
    //           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
    //             <h2>My Tutorial</h2>
    //           </DropdownItem>
    //           <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
    //           <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
    //           <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
    //           <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
    //         </div>
    //       </CSSTransition>
    
    //       <CSSTransition
    //         in={activeMenu === 'animals'}
    //         timeout={500}
    //         classNames="menu-secondary"
    //         unmountOnExit
    //         onEnter={calcHeight}>
    //         <div className="menu">
    //           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
    //             <h2>Animals</h2>
    //           </DropdownItem>
    //           <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
    //           <DropdownItem leftIcon="🐸">Frog</DropdownItem>
    //           <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
    //           <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
    //         </div>
    //       </CSSTransition>
    //     </div>
    //   );
    // }
}
export default progress_bar