import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useWalletValue } from "../providers/WalletProvider";

function AppContainer() {
  const { detectWallet } = useWalletValue();
  useEffect(() => {
    detectWallet();
  }, [detectWallet]);
  return (
    <div>
      <Navbar />
      <div className="mt-5 md:mt-10 pb-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AppContainer;
