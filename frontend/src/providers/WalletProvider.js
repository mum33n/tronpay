import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from "react";
const walletProviderContext = createContext();
function WalletProvider({ children }) {
  const [wallet, setWallet] = useState();
  const [isConnected, setConnection] = useState(false);

  const detectWallet = useCallback(async () => {
    console.log(window.tronLink.request);
    if (window.tronLink?.ready) {
      setConnection(true);
      setWallet(window.tronWeb.defaultAddress.base58);
    }
  }, []);

  const connectWallet = useCallback(async () => {
    if (window.tronWeb) {
      await window.tronWeb.request({
        method: "tron_requestAccounts",
      });
      setConnection(true);
      setWallet(window.tronWeb.defaultAddress.base58);
    } else {
      alert("Tronlink is Not installed");
    }
  }, []);

  const values = useMemo(() => {
    return { wallet, connectWallet, detectWallet, isConnected };
  }, [connectWallet, wallet, detectWallet, isConnected]);

  return (
    <walletProviderContext.Provider value={values}>
      {children}
    </walletProviderContext.Provider>
  );
}

export default WalletProvider;
export const useWalletValue = () => useContext(walletProviderContext);
