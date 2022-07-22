import React, { createContext, useCallback, useContext, useMemo } from "react";
import { contractAddress } from "../utils/constants";
import { useWalletValue } from "./WalletProvider";
import { abi } from "../utils/abi.js";
// const tronweb = require("tronweb");

const contractProviderContext = createContext();

function ContractProvider({ children }) {
  const { tronWeb, wallet } = useWalletValue();

  //   const fullNode = "https://api.shasta.trongrid.io";
  //   const solidityNode = "https://api.shasta.trongrid.io";
  //   const eventServer = "https://api.shasta.trongrid.io";
  //   const tronWeb = useMemo(
  //     () => new tronweb(fullNode, solidityNode, eventServer),
  //     []
  //   );

  // const contract = async () => await tronWeb?.contract().at(contractAddress);
  const addUser = useCallback(
    async (address, username, twitter, email) => {
      let contract1 = await tronWeb?.contract().at(contractAddress);
      let add = await contract1
        .addUser(address, username, twitter, email)
        .send();
      return add;
    },
    [tronWeb]
  );
  const getProfile = useCallback(
    async (address) => {
      console.log(abi[0]);
      if (wallet) {
        const contract = await tronWeb?.contract(abi, contractAddress);
        console.log(contract?.getUserMap().call());
        // console.log();
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
  const values = useMemo(() => {
    return { addUser, getProfile, getUsers };
  }, [addUser, getProfile]);

  return (
    <contractProviderContext.Provider value={values}>
      {children}
    </contractProviderContext.Provider>
  );
}

export default ContractProvider;
export const useContractValue = () => useContext(contractProviderContext);
