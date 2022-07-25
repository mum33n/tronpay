import React, { createContext, useCallback, useContext, useMemo } from "react";
import { contractAddress } from "../utils/constants";
import { useWalletValue } from "./WalletProvider";
import { abi } from "../utils/abi.js";
// const tronweb = require("tronweb");

const contractProviderContext = createContext();

function ContractProvider({ children }) {
  const { tronWeb, wallet } = useWalletValue();
  const addUser = useCallback(
    async (address, username, twitter, email, image) => {
      let contract1 = await tronWeb?.contract().at(contractAddress);
      let add = await contract1
        .addUser(address, username, twitter, email, image)
        .send();
      return add;
    },
    [tronWeb]
  );
  const getProfile = useCallback(
    async (address) => {
      if (wallet) {
        const contract = await tronWeb?.contract(abi, contractAddress);
        let profile = await contract?.getUser(wallet).call();
        return profile;
      } else {
        return "";
      }
    },
    [tronWeb, wallet]
  );
  const getUsers = useCallback(async () => {
    const contract = await tronWeb?.contract(abi, contractAddress);
    let profile = await contract?.getUserMap().call();
    return profile;
  }, [tronWeb]);
  const getHistory = useCallback(async () => {
    const contract = await tronWeb?.contract(abi, contractAddress);
    let profile = await contract?.getTransactions().call();
    let history = [];
    if (profile.length !== 0) {
      for (let i in profile) {
        let base = tronWeb.address.toHex(wallet);
        if (
          profile[i].senderAddress === base ||
          profile[i].ReceiverAddress === base
        ) {
          history.push(profile[i]);
        }
      }
    }
    return history;
  }, [tronWeb, wallet]);
  const sendTrx = useCallback(
    async (sender, reciever, amount, note) => {
      const contract = await tronWeb?.contract(abi, contractAddress);
      const tradeobj = await tronWeb.transactionBuilder.sendTrx(
        reciever,
        tronWeb.toSun(amount)
      );
      const signedtxn = await tronWeb.trx.sign(tradeobj);
      await tronWeb.trx.sendRawTransaction(signedtxn);
      let tx = await contract
        ?.sendTRX(sender, reciever, amount, note, "TRX")
        .send();
      return tx;
    },
    [tronWeb]
  );
  const sendTRC = useCallback(
    async (asset, reciever, amount, note, tokenName) => {
      const contract = await tronWeb?.contract(abi, contractAddress);
      const contract1 = await tronWeb?.contract().at(asset);

      await contract1
        .approve("TQJBBsQF78Qeo4k36tdTPrhX7TbwPQ221D", amount)
        .send();
      let tx = await contract
        ?.sendTRC(asset, reciever, amount, note, tokenName)
        .send();
      return tx;
    },
    [tronWeb]
  );
  const values = useMemo(() => {
    return { addUser, getProfile, getUsers, sendTrx, sendTRC, getHistory };
  }, [addUser, getProfile, getUsers, sendTrx, sendTRC, getHistory]);

  return (
    <contractProviderContext.Provider value={values}>
      {children}
    </contractProviderContext.Provider>
  );
}

export default ContractProvider;
export const useContractValue = () => useContext(contractProviderContext);
