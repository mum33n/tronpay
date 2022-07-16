import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppContainer from "./pages/AppContainer";
import WalletProvider from "./providers/WalletProvider";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <WalletProvider>
      <div className="min-h-[100vh] w-[100vw] bg-slate-800">
        <Routes>
          <Route element={<AppContainer />}>
            <Route path="/pay" element={<PaymentPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </div>
      <ContractProvider>
        <ProfileProvider>
          <div className="min-h-[100vh] w-[100vw] bg-slate-800">
            <Routes>
              <Route element={<AppContainer />}>
                <Route path="/" element={<div>Hello</div>} />
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
