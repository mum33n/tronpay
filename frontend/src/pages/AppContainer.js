import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useWalletValue } from "../providers/WalletProvider";

function AppContainer() {
  const { detectWallet } = useWalletValue();
  useEffect(() => {
    window.addEventListener("load", () => {
      detectWallet();
    });
    return window.removeEventListener("load", () => {
      detectWallet();
    });
  }, [detectWallet]);
  return (
    <div>
      <Navbar />
      <div className="pb-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AppContainer;
