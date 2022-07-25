import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from "react";
import Swal from "sweetalert2";
const walletProviderContext = createContext();
function WalletProvider({ children }) {
  const [wallet, setWallet] = useState();
  const [isConnected, setConnection] = useState(false);
  const [tronWeb, setTronWeb] = useState();
  window.addEventListener("message", function (e) {
    if (e.data.message && e.data.message.action === "disconnectWeb") {
      setConnection(false);
      setWallet();
    }
    if (e.data.message && e.data.message.action === "tabReply") {
      console.log("tabReply event", e.data.message);
      if (e.data.message && e.data.message.data.data.node?.chain === "_") {
        console.log("tronLink currently selects the main chain");
      } else {
        console.log("tronLink currently selects the side chain");
      }
    }

    if (e.data.message && e.data.message.action === "setAccount") {
      console.log("setAccount event", e.data.message);
      console.log("current address:", e.data.message.data.address);
    }
    if (e.data.message && e.data.message.action === "setNode") {
      console.log("setNode event", e.data.message);
      if (e.data.message.data.node.chain === "_") {
        console.log("tronLink currently selects the main chain");
      } else {
        console.log("tronLink currently selects the side chain");
      }

      // Tronlink chrome v3.22.1 & Tronlink APP v4.3.4 started to support
      if (e.data.message && e.data.message.action === "connect") {
        console.log("connect event", e.data.message.isTronLink);
      }

      // Tronlink chrome v3.22.1 & Tronlink APP v4.3.4 started to support
      if (e.data.message && e.data.message.action === "disconnect") {
        console.log("disconnect event", e.data.message.isTronLink);
      }

      // Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support
      if (e.data.message && e.data.message.action === "accountsChanged") {
        console.log("accountsChanged event", e.data.message);
        console.log("current address:", e.data.message.data.address);
      }

      // Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support
      if (e.data.message && e.data.message.action === "connectWeb") {
        console.log("connectWeb event", e.data.message);
        console.log("current address:", e.data.message.data.address);
      }

      // Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support
      if (e.data.message && e.data.message.action === "accountsChanged") {
        console.log("accountsChanged event", e.data.message);
      }

      // Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support
      if (e.data.message && e.data.message.action === "acceptWeb") {
        console.log("acceptWeb event", e.data.message);
      }
      // Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support
      if (e.data.message && e.data.message.action === "disconnectWeb") {
        console.log("disconnectWeb event", e.data.message);
      }

      // Tronlink chrome v3.22.0 & Tronlink APP v4.3.4 started to support
      if (e.data.message && e.data.message.action === "rejectWeb") {
        console.log("rejectWeb event", e.data.message);
      }
    }
  });

  const detectWallet = useCallback(async () => {
    if (window.tronLink?.ready) {
      setConnection(true);
      setTronWeb(window.tronWeb);
      setWallet(window.tronWeb.defaultAddress.base58);
    }
  }, []);
  console.log(tronWeb);

  const connectWallet = useCallback(async (loading) => {
    if (window.tronWeb) {
      // loading(true);
      try {
        let account = await window.tronWeb.request({
          method: "tron_requestAccounts",
        });
        setTronWeb(window.tronWeb);
        if (account.code === 200) {
          setConnection(true);
          setWallet(window.tronWeb.defaultAddress.base58);
          loading(false);
        } else {
          let err = { account };
          throw err;
        }
      } catch (err) {
        if (err.account.code === 4001) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Rejected by the user",
            // footer: '<a href="">Why do I have this issue?</a>',
          });
          console.log(err);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Unlock your Tronlink wallet",
            // footer: '<a href="">Why do I have this issue?</a>',
          });
        }
        loading(false);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tronlink is Not installed",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  }, []);

  const values = useMemo(() => {
    return { wallet, connectWallet, detectWallet, isConnected, tronWeb };
  }, [connectWallet, wallet, detectWallet, isConnected, tronWeb]);

  return (
    <walletProviderContext.Provider value={values}>
      {children}
    </walletProviderContext.Provider>
  );
}

export default WalletProvider;
export const useWalletValue = () => useContext(walletProviderContext);
