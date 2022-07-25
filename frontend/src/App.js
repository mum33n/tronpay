import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppContainer from "./pages/AppContainer";
import WalletProvider from "./providers/WalletProvider";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileProvider from "./providers/ProfileProvider";
import Home from "./pages/Home";
import ContractProvider from "./providers/ContractProvider";

function App() {
  return (
    <WalletProvider>
      <ContractProvider>
        <ProfileProvider>
          <div className="min-h-[100vh] w-max-[100%] bg-slate-800">
            <Routes>
              <Route element={<AppContainer />}>
                <Route path="/" element={<Home />} />
                <Route path="/pay" element={<PaymentPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </div>
        </ProfileProvider>
      </ContractProvider>
    </WalletProvider>
  );
}

export default App;
