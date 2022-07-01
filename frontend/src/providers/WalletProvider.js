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

  const tronWeb = window.tronWeb;
  const tronLink = window.tronLink;

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
      setWallet(tronWeb.defaultAddress.base58);
    } else {
      alert("Tronlink is Not installed");
    }
  }, [tronWeb]);

  const values = useMemo(() => {
    return { wallet, connectWallet };
  }, [connectWallet, wallet]);

  return (
    <walletProviderContext.Provider value={values}>
      {children}
    </walletProviderContext.Provider>
  );
}

export default WalletProvider;
export const useWalletValue = () => useContext(walletProviderContext);
