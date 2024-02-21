import React from "react";
import { Account } from "../Account/Account";
import Transaction from "../Transaction/Transaction";
import CustomerServices from "../CustomerService/CustomerServices";
import Home from "../Home2/Home";
const Routesconfig = [
  {
    path: "/home",
    component: Home,
    role: ["User", "Admin"],
  },
  {
    path: "/account",
    component: Account,
    role: ["User", "Admin"],
  },
  {
    path: "/transaction",
    component: Transaction,
    role: ["User", "Admin"],
  },
  {
    path: "/customerservice",
    component: CustomerServices,
    role: ["User", "Admin"],
  },
];

export default Routesconfig;
