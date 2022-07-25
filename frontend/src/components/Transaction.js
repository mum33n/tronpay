import React from "react";
import tron from "../assets/tron.png";
import { useWalletValue } from "../providers/WalletProvider";

function Transaction({ data }) {
  let { ReceiverAddress, senderAddress, Amount, note, timestamp } = data;
  let { tronWeb, wallet } = useWalletValue();
  let reciever = tronWeb?.address.fromHex(ReceiverAddress);
  let sender = tronWeb?.address.fromHex(senderAddress);
  let amount = Amount.toNumber();
  let time = new Date(timestamp.toNumber() * 1000).toLocaleString();
  console.log(time);
  return (
    <div className="rounded-lg p-2 mb-3 relative bg-slate-700 w-[90%] mx-auto md:mx-0 md:w-[23%]">
      <div className="flex justify-between">
        <div>
          {wallet === reciever ? (
            <button className="bg-green-700 px-5 rounded-full">IN</button>
          ) : (
            <button className="bg-red-700 px-5 rounded-full">Out</button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <img src={tron} alt="" width={"20px"}></img>
            <div>{amount}</div>
          </div>
        </div>
      </div>
      <div className="flex mt-3 justify-between items-end">
        <div>
          <div>at: {time} </div>
          <div>{`from: ${sender.slice(0, 5)}...${sender.slice(-5)}`}</div>
          <div>{`to: ${reciever.slice(0, 5)}...${reciever.slice(-5)}`}</div>
        </div>
      </div>
      <div className="mt-2">
        <div>note</div>
        <div className="h-[99px] overflow-y-scroll max-h-[100px]">{note}</div>
      </div>
    </div>
  );
}

export default Transaction;
