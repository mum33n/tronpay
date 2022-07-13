import React, { createContext, useCallback, useContext, useMemo } from "react";
import { contractAddress } from "../utils/constants";
import { useWalletValue } from "./WalletProvider";
// const tronweb = require("tronweb");

const contractProviderContext = createContext();

function ContractProvider({ children }) {
  const { tronWeb } = useWalletValue();

  //   const fullNode = "https://api.shasta.trongrid.io";
  //   const solidityNode = "https://api.shasta.trongrid.io";
  //   const eventServer = "https://api.shasta.trongrid.io";
  //   const tronWeb = useMemo(
  //     () => new tronweb(fullNode, solidityNode, eventServer),
  //     []
  //   );

  const contract = async () => await tronWeb?.contract().at(contractAddress);
  console.log(contract());
  const addUser = useCallback(
    async (address, email, username, twitter) => {
      let contract1 = await tronWeb.contract().at(contractAddress);
      let add = await contract1
        .addUser(address, username, twitter, email)
        .send();
      console.log(add);
    },
    [tronWeb]
  );
  //   if (tronWeb) {
  //     addUser(contractAddress, "fff", "ggg");
  //   }
  const values = useMemo(() => {
    return { addUser };
  }, [addUser]);

  return (
    <contractProviderContext.Provider value={values}>
      {children}
    </contractProviderContext.Provider>
  );
}

export default ContractProvider;
export const useContractValue = () => useContext(contractProviderContext);
