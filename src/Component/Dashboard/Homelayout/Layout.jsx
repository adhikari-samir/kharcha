import React, { useState } from "react";
import { MdChangeCircle } from "react-icons/md";
const Layout = () => {
  const datas = [
    {
      Account_name: "Sameeradk",
      Balance: "10000000000000000",
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

  const [currentData, SetCurrentData] = useState(0);

  const handleChangeData = () => {
    SetCurrentData((prevdata) => (prevdata + 1) % datas.length);
  };
  const CurrentData = datas[currentData];

  return (
    <>
      <div className="details">
        <div>
          <h1>
            <span>k</span>harcha
          </h1>
        </div>
        <i>
          <MdChangeCircle color="white" size={20} onClick={handleChangeData} />
        </i>

        <div key={CurrentData.Account_number}>
          <p>Account Name</p>
          <p>{CurrentData.Account_name}</p>
          <p>Available balance</p>
          <p>Npr {CurrentData.Balance}</p>
        </div>
      </div>
    </>
  );
};

export default Layout;
