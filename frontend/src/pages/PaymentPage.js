import React, { useCallback, useState } from "react";
import { BsWallet } from "react-icons/bs";
import Button from "../components/Button";
import Input from "../components/Input";
import { useWalletValue } from "../providers/WalletProvider";

function PaymentPage() {
  const { wallet, connectWallet } = useWalletValue();
  const [formValue, setForm] = useState({
    reciever: "",
    amount: "",
    asset: "",
    note: "",
    method: "Address",
  });
  const changeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }, []);
  console.log(formValue);
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
              <option value={"Username"}>Username</option>
              <option value={"Address"}>Address</option>
              <option value={"Twitter"}>Twitter</option>
              <option value={"Email"}>Email</option>
            </select>
          </div>
          <div className="mx-auto md:flex-1 items-center gap-5 justify-center flex-wrap ">
            <label className="text-white block " htmlFor="reciepient">
              Address:
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
              <option value={1}>TRX</option>
              <option value={2}>TRX1</option>
            </select>
          </div>
        </div>
        <div className="gap-5 mt-5 items-center md:px-10 flex-wrap md:gap-5">
          <label className="text-white block" htmlFor="asset">
            Note:
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
            <Button className="w-[100%] md:w-[50%] mx-auto mt-5">SEND</Button>
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
