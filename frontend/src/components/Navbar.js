import React, { useEffect, useState } from "react";
import Button from "./Button";
import spinner from "../assets/gear.svg";
// import { AiOutlineWallet } from "react-icons/ai";
import { BsWallet } from "react-icons/bs";
import { useWalletValue } from "../providers/WalletProvider";
import { useContractValue } from "../providers/ContractProvider";
import { useProfileContext } from "../providers/ProfileProvider";
import { Link } from "react-router-dom";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const { connectWallet, isConnected, wallet } = useWalletValue();
  const { getProfile } = useContractValue();
  const { setProfile } = useProfileContext();
  useEffect(() => {
    getProfile(wallet).then((res) => {
      console.log(res);
      if (res.emailAddress !== "") {
        setProfile(res);
      }
    });
  }, [getProfile, setProfile, wallet]);
  return (
    <div
      className={
        "bg-slate-900 items-center py-5 flex justify-between px-5 md:px-10 text-white"
      }
    >
      <a href="/"> TRONPAY</a>
      <div className="flex items-center gap-3">
        <Link to="pay">Payment</Link>
        <Link to="profile">Profile</Link>
        {!isConnected ? (
          <Button
            className={"gap-1"}
            onClick={() => {
              connectWallet(setLoading);
            }}
          >
            {loading ? (
              <>
                <div>Connecting</div>
                <img src={spinner} className="block" width="20px" alt=""></img>
              </>
            ) : (
              <>
                <span>Connect</span>
                <BsWallet />
              </>
            )}
          </Button>
        ) : (
          <div className="text-lg">
            {wallet ? `${wallet?.slice(0, 5)}...${wallet?.slice(-4)}` : ""}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
