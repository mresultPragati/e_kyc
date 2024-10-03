import React, { useEffect } from "react";
import OtpVerifyMobile from "./otpScreen/OtpVarification";
import SavingsAccountStepperForm from "./stepperForm/SavingsAccountStepperForm";
import axios from "axios";
import { getSingleRequest } from "../services/ApiServices";

const BankAccount: React.FC = () => {
  //   const otpStatus = localStorage.getItem("otpStatus");
  //   console.log("otpStatus Submitted", otpStatus);

  return (
    <>
      {/* {otpStatus === "submitted" ? (
        <SavingsAccountStepperForm />
      ) : ( */}
      <OtpVerifyMobile />
      {/* )} */}
    </>
  );
};

export default BankAccount;
