import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppContainer from "./pages/AppContainer";
import WalletProvider from "./providers/WalletProvider";

function App() {
  return (
    <WalletProvider>
      <div className="min-h-[100vh] w-[100vw] bg-slate-800">
        <Routes>
          <Route element={<AppContainer />}>
            <Route path="/" element={<div>Hello</div>} />
            <Route path="/pay" element={<div>Payment</div>} />
          </Route>
        </Routes>
      </div>
    </WalletProvider>
  );
}

export default App;
