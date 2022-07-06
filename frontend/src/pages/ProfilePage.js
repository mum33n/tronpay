import React, { useCallback, useEffect, useMemo } from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import banner from "../assets/banner.png";
import loader from "../assets/Spinner.svg";
import { useWalletValue } from "../providers/WalletProvider";
import { FaDiscord, FaShareAlt, FaTwitter } from "react-icons/fa";
import axios from "axios";

function ProfilePage() {
  const { wallet } = useWalletValue();
  const token = window.location.search.substring(1).split("=")[1];
  let data = useCallback(() => {
    let param = new URLSearchParams({
      client_id: "992266095601909840",
      client_secret: "v1Hu3p4dCmtX0AJyTEBRQhz-Hxq_ixP3",
      grant_type: "authorization_code",
      code: token,
      redirect_uri: "http://localhost:3000/profile",
    });
    return param;
  }, [token]);

  // let headers = {
  //   "Content-Type": "application/x-www-form-urlencoded",
  // };
  const data1 = useMemo(() => data(), [data]);
  console.log(data1);
  useEffect(() => {
    axios
      .post("https://discord.com/api/oauth2/token", data1, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }, [data1]);

  return (
    <div>
      <div>
        <img src={banner} alt="" className="w-full block max-h-[300px]" />
      </div>
      <div className="px-5 md:px-10 -mt-20">
        <img
          src={banner}
          alt=""
          className="w-[150px] outline outline-10 outline-white block h-[150px] rounded-full"
        />

        <div className="pt-5 flex flex-wrap justify-between items-center">
          <p className="text-white truncate">{wallet}</p>
          <div className="flex text-white text-3xl gap-2">
            <a href="/">
              <AiFillTwitterSquare />
            </a>
            <a href="/">
              <FaDiscord />
            </a>
            <a href="/">
              <FaShareAlt />
            </a>
          </div>
        </div>

        <div className="text-white mt-10">
          <h1>Connect Accounts</h1>
          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href="/"
              className="flex gap-2 rounded-full px-8 py-2 items-center outline outline-5 outline-red-400"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=992266095601909840&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofile&response_type=code&scope=identify%20email"
              className="flex gap-2 rounded-full px-8 py-2 items-center outline outline-5 outline-red-400"
            >
              <FaDiscord /> Discord
            </a>
          </div>
        </div>

        <div className="text-white mt-10">
          <h1>Recent History</h1>
          <img className="block max-w-full" alt="" src={loader} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
