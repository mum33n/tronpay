import phone from "../assets/phone.png";
import tron from "../assets/devpost.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center px-20 gap-5 justify-between py-10">
        <div className="md:w-1/2">
          <h1 className="font-medium break-word  text-5xl text-white">
            DECENTRALISED WEB3 PAYMENT SYSTEM WITH WEB2 IDs
          </h1>
          <p className="mt-5 text-white text-md break md:text-xl">
            Make and Recieve payment easily with your Social Media Handles
            without third party
          </p>
          <Link
            to="./pay"
            className="inline-block text-white mt-3 bg-red-600 px-5 py-2 rounded"
          >
            Get started
          </Link>
        </div>
        <img className="md:w-1/2 flex" src={phone} alt=""></img>
      </div>

      <div className="flex max-w-[100%] h-[100px] justify-around py-3 px-5 bg-slate-200  ">
        <img
          alt=""
          className="flex block"
          src="https://cryptologos.cc/logos/versions/tron-trx-logo-full.svg?v=023"
        ></img>
        <img
          className="block"
          alt=""
          src="https://cryptologos.cc/logos/bittorrent-bttold-logo.png?v=023"
        ></img>
        <img className="block" alt="" src={tron} width={"150px"}></img>
      </div>
      <div className="mt-10 px-10 justify-between gap-3 flex flex-col md:flex-row ">
        <div className="flex items-center gap-2 text-white flex-col md:flex-row">
          <div className="text-[10rem]  font-bold">01</div>
          <div>
            <div>Link Account</div>
            <p>Connect Your Web2 social media handles with web3 wallet</p>
          </div>
        </div>
        <div className="flex items-center gap-2  text-white flex-col md:flex-row">
          <div className="text-[10rem] font-bold">02</div>
          <div>
            <div>Make Payment</div>
            <p>
              Make easy payment using the Web2 handle instead of web3 wallet
              address
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
