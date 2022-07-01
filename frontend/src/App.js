import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AppContainer from "./pages/AppContainer";

function App() {
  return (
    <div className="min-h-[100vh] w-[100vw] bg-slate-800">
      <Routes>
        <Route element={<AppContainer />}>
          <Route path="/" element={<div>Hello</div>} />
          <Route path="/pay" element={<div>Payment</div>} />
        </Route>
      </Routes>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
