import React from "react";
const sidebarRoutes = [
  {
    path: "/dashboard",
    icon: "dashboard-icon",
    roles: ["admin", "user"],
    name: "Dashboard",
  },
  {
    path: "/admin/settings",
    icon: "admin-settings-icon",
    roles: ["admin"],
    name: "Admin Settings",
  },
  {
    path: "/user/settings",
    icon: "user-settings-icon",
    roles: ["user"],
    name: "User Settings",
  },
];

export default sidebarRoutes;
