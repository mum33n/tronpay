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
    if (window.tronLink?.ready) {
      setConnection(true);
      setWallet(window.tronWeb.defaultAddress.base58);
    }
  }, []);

  const connectWallet = useCallback(async (loading) => {
    if (window.tronWeb) {
      loading(true);
      try {
        let account = await window.tronWeb.request({
          method: "tron_requestAccounts",
        });
        if (account.code === 200) {
          setConnection(true);
          setWallet(window.tronWeb.defaultAddress.base58);
          loading(false);
        } else {
          let err = { error: "rejected by the user" };
          throw err;
        }
      } catch (err) {
        alert("Rejected by the user");
        loading(false);
      }
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
