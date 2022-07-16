import React, { useEffect, useState } from "react";
import Button from "./Button";
import spinner from "../assets/gear.svg";
import { AiOutlineWallet } from "react-icons/ai";
import { useWalletValue } from "../providers/WalletProvider";
import { useContractValue } from "../providers/ContractProvider";
import { useProfileContext } from "../providers/ProfileProvider";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const { connectWallet, isConnected, wallet } = useWalletValue();
  const { getProfile } = useContractValue();
  const { setProfile } = useProfileContext();
  useEffect(() => {
    getProfile(wallet).then((res) => {
      console.log(res);
      setProfile(res);
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
        <a href="/pay">Payment</a>
        <a href="/profile">Profile</a>
        {!isConnected ? (
          <Button
            onClick={() => {
              connectWallet(setLoading);
            }}
          >
            {loading ? (
              <img src={spinner} className="block" width="40px" alt=""></img>
            ) : (
              <>
                <span>Connect</span>
                <AiOutlineWallet />
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
