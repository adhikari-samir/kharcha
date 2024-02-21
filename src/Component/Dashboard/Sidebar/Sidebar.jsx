import React, { useState } from "react";
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
import { MdChangeCircle } from "react-icons/md";
import "./sidebar.css";
import Home from "../Home2/Home";

const Sidebar = () => {
  const transaction = [
    {
      Account_name: "Sameeradk",
      Balance: "Rs. ******",
      Account_nbr: 1,
      Date: "February 09, 2024",
    },
    {
      Account_name: "Sandipbgn",
      Balance: "Rs. ******",
      Account_nbr: 1,
      Date: "February 08, 2024",
    },
    {
      Account_name: "Nirgun Subedi",
      Balance: "Rs. *******",
      Account_nbr: 1,
      Date: "February 07, 2024",
    },
  ];

  const navigationOptions = [
    {
      id: 1,
      label: "Home",
      icon: <RiHome7Fill size={20} color="#94DBB8" />,
      roles: ["Admin", "User"],
      route: "/Home",
    },
    {
      id: 2,
      label: "Account",
      icon: <GrServicePlay size={22} color="#8F928D" />,
      roles: ["Admin", "User"],
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
  const datas = [
    {
      Account_name: "Sameeradk",
      Balance: "1000000000000000",
      Account_number: 1,
    },
    {
      Account_name: "sandip",
      Balance: "234526000000000",
      Account_number: 2,
    },
    {
      Account_name: "Nirgun",
      Balance: "34500000000000  ",
      Account_number: 3,
    },
  ];
  const [currentData, SetCurrentData] = useState(0);

  const handleChangeData = () => {
    SetCurrentData((prevdata) => (prevdata + 1) % datas.length);
  };
  const CurrentData = datas[currentData];

  return (
    <>
      <div className="background_component">
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
        <div className="details">
          <div className="flexing_logonbtn">
            <h1>
              <span>k</span>harcha
            </h1>

            <i>
              <MdChangeCircle
                color="white"
                size={20}
                onClick={handleChangeData}
              />
            </i>
          </div>
          <div className="details_comp" key={CurrentData.Account_number}>
            <p>Account Name</p>
            <p>{CurrentData.Account_name}</p>
            <p>Available balance</p>
            <p>Npr {CurrentData.Balance}</p>
          </div>
        </div>
        <div className="Recent_transaction_Component">
          <p className="recentransaction_txt">Recent Transactions</p>
          <div className="transaction_datas">
            {transaction.map((option) => (
              <div key={option.Account_nbr}>
                <div className="flexing_transaction_datas">
                  <p>{option.Account_name}</p>

                  <p>{option.Balance}</p>
                </div>
                <p className="date">{option.Date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
