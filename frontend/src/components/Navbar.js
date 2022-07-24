import React, { useEffect, useState } from "react";
import Button from "./Button";
import spinner from "../assets/gear.svg";
// import { AiOutlineWallet } from "react-icons/ai";
import { BsWallet } from "react-icons/bs";
import { useWalletValue } from "../providers/WalletProvider";
import { useContractValue } from "../providers/ContractProvider";
import { useProfileContext } from "../providers/ProfileProvider";
import { Link } from "react-router-dom";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const { connectWallet, isConnected, wallet } = useWalletValue();
  const { getProfile } = useContractValue();
  const { setProfile } = useProfileContext();
  const [toggle, setToggle] = useState(false);
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
      <AiOutlineBars onClick={() => setToggle((prev) => !prev)} />
      <div className="md:flex hidden items-center gap-3">
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
      <div
        // onMouseLeave={() => setToggle((prev) => !prev)}
        id="mobile-nav"
        className={`${
          toggle ? "flex right-0" : "hidden -right-[100%]"
        } fixed flex-col p-5 w-[70%] top-0 bg-slate-900 z-10 h-[100vh] transtion transition-all ease-in-out 6s md:hidden items-start gap-3`}
      >
        <AiOutlineClose
          onClick={() => setToggle((prev) => !prev)}
          className="ml-auto"
        />
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
