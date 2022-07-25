import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useContractValue } from "./ContractProvider";
import { useWalletValue } from "./WalletProvider";

const profileContext = createContext();
function ProfileProvider({ children }) {
  const [profile, setProfile] = useState();
  const [history, setHistory] = useState();
  const { wallet } = useWalletValue();
  const { getHistory } = useContractValue();
  useEffect(() => {
    if (wallet) {
      getHistory().then((res) => {
        console.log(res);
        setHistory(res);
      });
    }
  }, [wallet, getHistory]);
  const values = useMemo(() => {
    return { profile, setProfile, history, setHistory };
  }, [profile, setProfile, history, setHistory]);

  return (
    <profileContext.Provider value={values}>{children}</profileContext.Provider>
  );
}

export default ProfileProvider;
export const useProfileContext = () => useContext(profileContext);
