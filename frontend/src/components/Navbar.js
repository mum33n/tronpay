import React from "react";
import Button from "./Button";
import { AiOutlineWallet } from "react-icons/ai";
import { useWalletValue } from "../providers/WalletProvider";

function Navbar() {
  const { connectWallet } = useWalletValue();
  return (
    <div
      className={
        "bg-slate-900 items-center py-5 flex justify-between px-10 text-white"
      }
    >
      <a href="/"> TRONPAY</a>
      <Button onClick={connectWallet}>
        <span>Connect</span>
        <AiOutlineWallet />
      </Button>
    </div>
  );
}

export default Navbar;
