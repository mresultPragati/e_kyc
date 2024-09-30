import React from "react";

const PersonalDetailTest: React.FC = () => {
  const digioKycUrl =
    "https://ext.digio.in/#/gateway/login/KID240927124613189O9C2OPCJZ..."; // Your generated URL here

  const openKycWindow = () => {
    // Set window options to match the dimensions and behavior you need
    const windowFeatures = "height=800,width=600,scrollbars=no,resizable=yes";
    window.open(digioKycUrl, "_blank", windowFeatures);
  };

  return (
    <div>
      <h1>KYC Process</h1>
      <button onClick={openKycWindow}>Open KYC Authentication Window</button>
    </div>
  );
};

export default PersonalDetailTest;
