import React from "react";
import tron from "../assets/tron.png";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { useWalletValue } from "../providers/WalletProvider";

function Transaction({ data }) {
  let { ReceiverAddress, senderAddress, Amount, note, timestamp, status } =
    data;
  let { tronWeb, wallet } = useWalletValue();
  let reciever = tronWeb?.address.fromHex(ReceiverAddress);
  let sender = tronWeb?.address.fromHex(senderAddress);
  let amount = Amount.toNumber();
  let time = new Date(timestamp.toNumber() * 1000).toLocaleString();
  console.log(time);
  return (
    <div className="rounded p-2 mb-3 relative bg-slate-700 w-[90%] mx-auto md:w-1/5">
      <div className="flex justify-between">
        {status === "pending" ? (
          <AiOutlineClockCircle className="text-2xl text-yellow-600" />
        ) : (
          <AiOutlineCheckCircle className="text-2xl text-green-600" />
        )}
        <div>
          {wallet === reciever ? (
            <button className="bg-green-700 px-5 rounded-full">IN</button>
          ) : (
            <button className="bg-red-700 px-5 rounded-full">Out</button>
          )}
        </div>
      </div>
      <div className="flex mt-3 justify-between items-end">
        <div>
          <div>at: {time} </div>
          <div>{`from: ${sender.slice(0, 5)}...${sender.slice(-5)}`}</div>
          <div>{`to: ${reciever.slice(0, 5)}...${reciever.slice(-5)}`}</div>
        </div>
        <div>
          <div className="flex items-center">
            <img src={tron} alt="" width={"20px"}></img>
            <div>{amount}</div>
          </div>
        </div>
      </div>
      <div className="mt-5 h-[99px] overflow-y-scroll max-h-[100px]">
        {note}
      </div>
      <button className="rounded-full px-7 py-2.5 mx-auto bg-green-500 block">
        Claim
      </button>
    </div>
  );
}

export default Transaction;
