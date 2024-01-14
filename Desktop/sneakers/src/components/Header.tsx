import React from "react"
import './styles/Header.css';
import {Wishlist} from '../pages/Wishlist'
import { Router, Routes, Link } from 'react-router-dom';

interface HeaderProps {
  handleChange: (value: string) => void;
  setSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps>  = ({handleChange, setSearch})  => {
   const [searchValue, setSearchValue] = React.useState('')
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setSearchValue(value);
  handleChange(value);
};
return (
<div>
   <header>
      <nav className="navbar">
         <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
               <span className="line line1"></span>
               <span className="line line2"></span>
               <span className="line line3"></span>
            </div>
            <ul className="menu-items">
               <li><input value={searchValue} onChange={handleInputChange}/></li>
               <li><a href="#"><i className="fa fa-shopping-cart"></i> 0</a></li>
               <Link to='/wishlist'><li><a href="#"><i className="fa fa-heart"></i> Wishlist</a></li></Link>
               <li><a href="#"><i className="fa fa-user"></i>  Account</a></li>
            </ul>
            <h1 className="logo"><img src="" alt="" />logo</h1>
         </div>
      </nav>
   </header>
</div>
)
}
export default Header