import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppContainer() {
  return (
    <div>
      <Navbar />
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AppContainer;
