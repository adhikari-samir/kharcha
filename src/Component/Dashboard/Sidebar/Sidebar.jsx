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
  const navigationOptions = [
    {
      id: 1,
      label: "Home",
      icon: <RiHome7Fill size={20} color="#94DBB8" />,
      roles: ["admin", "user"],
      route: "/Home",
    },
    {
      id: 2,
      label: "Account",
      icon: <GrServicePlay size={22} color="#8F928D" />,
      roles: ["admin", "user"],
      route: "/Account",
    },
    {
      id: 3,
      label: "Transaction",
      icon: <GrTransaction size={22} color="#8F928D" />,
      roles: ["user"],
      route: "/Transaction",
    },
    {
      id: 4,
      label: "Customer Service",
      icon: <BsPersonSquare size={22} color="#8F928D" />,
      roles: ["user"],
      route: "/Customer Service",
    },
  ];

  return (
    <>
      <div className="background">
        <div className="side_nav_bar">
          <ul className="navbar_component">
            {navigationOptions.map((option) => (
              <li key={option.id}>
                <i>{option.icon}</i>
                <a href="">{option.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
