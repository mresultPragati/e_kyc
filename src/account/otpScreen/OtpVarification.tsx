import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { AlertMessage } from "../../reusableComponet/ALertMessage";
import { OtpMobileBox } from "./OtpStyled";
import SavingsAccountStepperForm from "../stepperForm/SavingsAccountStepperForm";

const OtpVerifyMobile: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [isOtpSubmitted, setIsOtpSubmitted] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    const mobileRegex = /^[789]\d{9}$/;

    if (!mobileRegex.test(mobileNumber)) {
      setAlertMsg({
        msg: "Invalid mobile number.",
        severity: "error",
      });
      return;
    }
    // else if (mobileNumber?.length < 10) {
    //   setAlertMsg({
    //     msg: "Please enter a valid 10-digit mobile number.",
    //     severity: "error",
    //   });
    //   return;
    // }

    setOtpSent(true);
    console.log(`OTP sent to ${mobileNumber}`);
    return;
  };

  const handleOtpSent = () => {
    console.log(`Submitted OTP: ${otp}`);
    setIsOtpSubmitted(true);
    // localStorage.setItem("otpStatus", "submitted");
  };

  return (
    <>
      <AlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />

      <div className="mb-5">
        {!isOtpSubmitted ? (
          <OtpMobileBox>
            <Paper
              elevation={3}
              sx={{ padding: "24px", maxWidth: "400px", width: "100%" }}
            >
              <Typography variant="h6" gutterBottom align="center">
                Savings Account opening
              </Typography>

              <Grid container spacing={2} alignItems="center">
                {/* Mobile Number Field with Send OTP Button */}
                <Grid item xs={8}>
                  <TextField
                    required
                    fullWidth
                    variant="standard"
                    label="Mobile Number"
                    value={mobileNumber}
                    name={"mobileNumber"}
                    onChange={handleMobileChange}
                    type="tel"
                    inputProps={{ maxLength: 10 }} // Limit to 10 digits
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    // variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSendOtp}
                    disabled={otpSent} // Disable button after OTP is sent
                  >
                    {otpSent ? "OTP Sent" : "Send OTP"}
                  </Button>
                </Grid>

                {/* OTP Field */}
                {otpSent && (
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      variant="standard"
                      label="Enter OTP"
                      value={otp}
                      name={"otp"}
                      onChange={handleOtpChange}
                      type="text"
                    />
                  </Grid>
                )}

                {/* Submit Button */}
                {otpSent && (
                  <>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={isAgreed}
                            onChange={(e) => setIsAgreed(e.target.checked)}
                          />
                        }
                        label={
                          <Typography variant="body2">
                            I have read and agree to the
                            <a
                              href="/terms-and-conditions"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {" "}
                              Terms and Conditions
                            </a>
                            .
                          </Typography>
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        className="mt-5"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => handleOtpSent()}
                        disabled={!isAgreed || !otp}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </>
                )}
              </Grid>
            </Paper>
          </OtpMobileBox>
        ) : (
          <SavingsAccountStepperForm />
        )}
      </div>
    </>
  );
};

export default OtpVerifyMobile;
