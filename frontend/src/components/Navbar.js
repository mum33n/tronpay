import React from "react";
import Button from "./Button";
import { AiOutlineWallet } from "react-icons/ai";

function Navbar() {
  return (
    <div
      className={
        "bg-slate-900 items-center py-5 flex justify-between px-10 text-white"
      }
    >
      <a href="#"> TRONPAY</a>
      <Button>
        <span>Connect</span>
        <AiOutlineWallet />
      </Button>
    </div>
  );
}

export default Navbar;
