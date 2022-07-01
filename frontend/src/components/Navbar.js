import React, { useEffect } from "react";
import Button from "./Button";
import { AiOutlineWallet } from "react-icons/ai";
import { useWalletValue } from "../providers/WalletProvider";

function Navbar() {
  const { connectWallet, isConnected, detectWallet, wallet } = useWalletValue();
  useEffect(() => {
    detectWallet();
  }, [detectWallet]);
  return (
    <div
      className={
        "bg-slate-900 items-center py-5 flex justify-between px-10 text-white"
      }
    >
      <a href="/"> TRONPAY</a>
      {!isConnected ? (
        <Button onClick={connectWallet}>
          <span>Connect</span>
          <AiOutlineWallet />
        </Button>
      ) : (
        <div className="text-lg">{`${wallet}`}</div>
      )}
    </div>
  );
}

export default Navbar;
