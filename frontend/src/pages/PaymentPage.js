import React, { useCallback, useState } from "react";
import { BsWallet } from "react-icons/bs";
import Button from "../components/Button";
import Input from "../components/Input";
import { useContractValue } from "../providers/ContractProvider";
import { useWalletValue } from "../providers/WalletProvider";
import Swal from "sweetalert2";
import { supportedTokens, supportedTokensMap } from "../utils/support";

function PaymentPage() {
  const { wallet, connectWallet } = useWalletValue();
  const { getUsers, sendTrx, sendTRC } = useContractValue();
  const [formValue, setForm] = useState({
    reciever: "",
    amount: "",
    asset: "1",
    note: "",
    method: "twitter",
  });
  const changeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }, []);
  const sendTxn = useCallback(() => {
    const { amount, reciever, asset, note, method } = formValue;

    getUsers().then((res) => {
      if (amount && asset && note && method) {
        let reciepien;
        if (method === "email") {
          for (let user in res) {
            if (res[user].emailAddress === reciever) {
              reciepien = res[user];
              break;
            }
          }
        } else if (method === "username") {
          for (let user in res) {
            if (res[user].userName === reciever) {
              reciepien = res[user];
              break;
            }
          }
        } else if (method === "twitter") {
          for (let user in res) {
            if (res[user].twitterHandle === reciever) {
              reciepien = res[user];
              break;
            }
          }
        } else {
          for (let user in res) {
            if (res[user].walletAddress === reciever) {
              reciepien = res[user];
              break;
            }
          }
        }
        if (reciepien) {
          if (asset === "1") {
            sendTrx(wallet, reciepien.walletAddress, amount, note)
              .then((res) =>
                Swal.fire({
                  icon: "success",
                  title: "Successful",
                  text: "Social accounts linked successfully",
                  // footer: '<a href="">Why do I have this issue?</a>',
                })
              )
              .catch((err) => {
                console.log(err);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                  // footer: '<a href="">Why do I have this issue?</a>',
                });
              });
          } else {
            let tokenDetails = supportedTokensMap().get(asset);
            sendTRC(
              tokenDetails.contractAddress,
              reciepien.walletAddress,
              amount * 10 ** tokenDetails.decimal,
              note,
              tokenDetails.name
            )
              .then((res) =>
                Swal.fire({
                  icon: "success",
                  title: "Successful",
                  text: "Social accounts linked successfully",
                  // footer: '<a href="">Why do I have this issue?</a>',
                })
              )
              .catch((err) => {
                console.log(err);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                  // footer: '<a href="">Why do I have this issue?</a>',
                });
              });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No user with the provided username!",
            // footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      }
    });
  }, [formValue, getUsers, sendTrx, wallet, sendTRC]);
  return (
    <div className="mt-10 md:mt-20 w-[95%] md:w-2/5 bg-slate-900 p-3 py-10 md:px-5 mx-auto">
      <div>
        <h1 className="text-center text-white mb-5">MAKE PAYMENT</h1>
        <div className="md:flex gap-3 md:px-10">
          <div className="mx-auto md:w-1/3 items-center gap-5 justify-center flex-wrap">
            <label className="text-white block " htmlFor="reciepient">
              Method
            </label>
            <select
              onChange={(e) => changeHandler(e)}
              className={`block w-full h-10 flex-1 mx-auto max-w-full bg-gray-600 outline-0 focus:bg-slate-900 outline px-5 text-white   focus:outline-1 focus:outline-red-400 border-0 rounded`}
              id="asset"
              name="method"
              value={formValue.method}
            >
              <option value={"username"}>Username</option>
              <option value={"twitter"}>Twitter</option>
              <option value={"email"}>Email</option>
            </select>
          </div>
          <div className="mx-auto md:flex-1 items-center gap-5 justify-center flex-wrap ">
            <label className="text-white block " htmlFor="reciepient">
              Username:
            </label>
            <Input
              onChange={(e) => changeHandler(e)}
              name="reciever"
              id="recipient block w-[100%]"
              value={formValue.reciever}
            />
          </div>
        </div>
        <div className="md:flex md:px-10 gap-2">
          <div className="flex-1 mt-5 items-center flex-wrap md:gap-2">
            <label className="text-white" htmlFor="amount">
              Amount:
            </label>
            <Input
              onChange={(e) => changeHandler(e)}
              name="amount"
              type="number"
              id="amount"
              value={formValue.amount}
            />
          </div>
          <div className="gap-2 flex-1 mt-5 items-center flex-wrap md:gap-2">
            <label className="block text-white" htmlFor="asset">
              Asset:
            </label>
            <select
              onChange={(e) => changeHandler(e)}
              className={`block w-full h-10 flex-1 mx-auto max-w-full bg-gray-600 outline-0 focus:bg-slate-900 outline px-5 text-white   focus:outline-1 focus:outline-red-400 border-0 rounded`}
              id="asset"
              name="asset"
              value={formValue.asset}
            >
              <option value={"1"}>TRX</option>
              {supportedTokens.map((item) => (
                <option value={item.name}>{item.name.toUpperCase()}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="gap-5 mt-5 items-center md:px-10 flex-wrap md:gap-5">
          <label className="text-white block" htmlFor="note">
            Note
          </label>
          <textarea
            onChange={(e) => changeHandler(e)}
            rows="3"
            className={`flex-1 w-full mx-auto max-w-full bg-gray-600 outline-0 focus:bg-slate-900 outline px-5 text-white   focus:outline-1 focus:outline-red-400 border-0 rounded`}
            id="note"
            name="note"
            value={formValue.note}
          ></textarea>
        </div>
        <div className="md:px-10">
          {wallet ? (
            <Button
              onClick={sendTxn}
              className="w-[100%] md:w-[50%] mx-auto mt-5"
            >
              SEND
            </Button>
          ) : (
            <Button
              onClick={() => connectWallet()}
              className="w-[100%] mt-5 gap-3 md:w-[50%] mx-auto"
            >
              <span>Connect Wallet</span>
              <BsWallet className="text-lg" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
