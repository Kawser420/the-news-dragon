import React from "react";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const LoginLayout: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
