import React from "react";
import { MdSunny } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { BiLogoStripe } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RiHome7Fill } from "react-icons/ri";
import { GrServicePlay } from "react-icons/gr";
import { GrTransaction } from "react-icons/gr";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="background">
        <div className="side_nav_bar">
          <ul className="navbar_component">
            <li>
              <i>
                <RiHome7Fill size={20} color="#94DBB8" />
              </i>
              <a href="">Home</a>
            </li>
            <li>
              <i>
                <GrServicePlay size={22} color="#8F928D" />
              </i>
              <a href="">Accounts</a>
            </li>
            <li>
              <i>
                <GrTransaction size={22} color="#8F928D" />
              </i>
              <a href="">Transaction</a>
            </li>
            <li>
              <i>
                <BsPersonSquare size={22} color="#8F928D" />
              </i>
              <a href="">Customer Service</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
