import React, { useCallback, useEffect, useMemo } from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import banner from "../assets/banner.png";
import loader from "../assets/Spinner.svg";
import { useWalletValue } from "../providers/WalletProvider";
import Button from "../components/Button";
import { FaDiscord, FaGoogle, FaShareAlt, FaTwitter } from "react-icons/fa";
import { signInwithGoogle } from "../utils/discordAuth";
// import axios from "axios";

function ProfilePage() {
  const { wallet } = useWalletValue();
  // const token = window.location.search.substring(1).split("=")[1];
  // let data = useCallback(() => {
  //   let param = new URLSearchParams({
  //     client_id: "992266095601909840",
  //     client_secret: "v1Hu3p4dCmtX0AJyTEBRQhz-Hxq_ixP3",
  //     grant_type: "authorization_code",
  //     code: token,
  //     redirect_uri: "http://localhost:3000/profile",
  //   });
  //   return param;
  // }, [token]);
  // const data1 = useMemo(() => data(), [data]);
  // const getToken = useCallback(async () => {
  //   let data = await axios
  //     .post("https://discord.com/api/oauth2/token", data1, {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     })
  //     .then((res) => res.data);
  //   return data;
  // }, [data1]);

  // console.log(data1);
  // useEffect(() => {
  //   if (token) {
  //     async function getProfile() {
  //       let token1 = await getToken();
  //       console.log(token1.access_token);
  //       let profile = await axios
  //         .get("https://www.discord.com/api/v10/users/@me", {
  //           headers: { Authorization: `Bearer ${token1.access_token}` },
  //         })
  //         .then((res) => res.data);
  //       console.log(profile);
  //     }

  //     getProfile();
  //   }
  // }, [getToken, token]);

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
          <h1>Connect Account</h1>
          <div className="flex flex-wrap gap-3 mt-5">
            {/* <a
              href="/"
              className="flex gap-2 rounded-full px-8 py-2 items-center outline outline-5 outline-red-400"
            >
              <FaTwitter /> Twitter
            </a> */}

            <Button onClick={signInwithGoogle}>
              <FaGoogle /> Gmail
            </Button>
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
