import React from 'react';
import './Menu.css';
import Head from 'next/head';
import { AiOutlineCalendar , AiFillCaretRight, AiFillFile } from "react-icons/ai";
import { BsHouseFill, BsNewspaper } from "react-icons/bs";
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-item">
        <Link href="/">
            <BsHouseFill size={65}/>
        </Link>
      </div>
      <div className="menu-item">
        <Link href="/about">
            <AiFillFile size={65}/>
        </Link>
      </div>
      <div className="menu-item">
        <Link href="/calendar">
            <AiOutlineCalendar  size={65}/>
        </Link>
      </div>
      <div className="menu-item">
        <AiFillCaretRight size={65}/>
      </div>
      <div className="menu-item">
        <BsNewspaper size={65}/>
      </div>
    </div>
  );
};

export default Menu;
