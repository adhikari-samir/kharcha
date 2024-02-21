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
import "./Navbar.css";

const Navbar = () => {
  const datas = [
    {
      Account_name: "Sameeradk",
      Balance: "123",
      Account_number: 1,
    },
    {
      Account_name: "sandip",
      Balance: "234",
      Account_number: 2,
    },
    {
      Account_name: "Nirgun",
      Balance: "345",
      Account_number: 3,
    },
  ];
  return (
    <>
      <div className="background2">
        <div className="header">
          <div>
            <h1 className="header_logos">
              <span>k</span>harcha
            </h1>
          </div>

          <div className="header_txt">
            <div>
              <i>
                <MdSunny size={20} color="yellow" />
              </i>
            </div>
            <div>Good Afternoon , sameer </div>
          </div>

          <div className="header_icons">
            <div className="bell-logo">
              <i>
                <BsFillBellFill size={22} color="lightblue" />
              </i>
            </div>
            <div>
              <i>
                <RiAccountPinCircleFill size={24} color="#ED8E63" />
              </i>
            </div>
            <div>
              <i>
                <IoIosArrowDown size={24} />
              </i>
            </div>
          </div>
        </div>
        {/* <div className="side_nav_bar">
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
        <div className="details">
          <div>
            <h1 className="header_logo">
              <span>k</span>harcha
            </h1>
          </div>
          <button>change</button>
          {datas.map((data) => (
            <div key={data.Account_number}>
              <p>Account Name</p>
              <p>{data.Account_name}</p>
              <p>Available balance</p>
              <p>NPR ****</p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
