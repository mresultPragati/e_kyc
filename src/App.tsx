import React, { useEffect } from "react";
import TopBar from "./TopBar/TopBar";
import { Route, Routes } from "react-router-dom";
import { navigatorPath } from "./TopBar/constant/TopBarConst";
import { Home } from "./home/Home";
import { PersonalDetail } from "./eKyc/personalDetails/PersonalDetail";
import { Footer } from "./footer/Footer";
import "./App.css";
import PersonalDetailTest from "./Test/Detail";
import { EKycForm } from "./eKyc";
import BankAccount from "./account";

function App() {
  // useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     alert("Inspect Disable");
  //     e.preventDefault();
  //   });

  //   document.onkeydown = function (e) {
  //     if (e.keyCode == 123) {
  //       alert("F12 Disable");
  //       // Disable F12
  //       return false;
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
  //       alert("Disable Ctrl+Shift+I");
  //       // Disable Ctrl+Shift+I
  //       return false;
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
  //       alert("Disable Ctrl+Shift+J");
  //       // Disable Ctrl+Shift+J
  //       return false;
  //     }
  //     if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
  //       alert("Disable Ctrl+U");
  //       // Disable Ctrl+U
  //       return false;
  //     }
  //   };
  // }, []);

  return (
    <div className="App">
      <TopBar />
      {/* <PersonalDetailTest /> */}

      <Routes>
        <Route path={navigatorPath.home} element={<Home />} />
        <Route path={navigatorPath.eKyc} element={<EKycForm />} />
        <Route path={navigatorPath.account} element={<BankAccount />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
