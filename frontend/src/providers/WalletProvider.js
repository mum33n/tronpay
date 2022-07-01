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

  const tronWeb = window.tronWeb;
  const tronLink = window?.tronLink;
  const defaultAddress = tronWeb?.defaultAddress.base58;

  const detectWallet = useCallback(async () => {
    if (tronLink?.ready) {
      setConnection(true);
      setWallet(defaultAddress);
    }
  }, [tronLink?.ready, defaultAddress]);

  const connectWallet = useCallback(async () => {
    if (tronWeb) {
      alert("Tronlink Found");
      await tronWeb.request({
        method: "tron_requestAccounts",
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      setConnection(true);
      setWallet(defaultAddress);
    } else {
      alert("Tronlink is Not installed");
    }
  }, [tronWeb, defaultAddress]);

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
