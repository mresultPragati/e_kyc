import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Grid2,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { StepsOne } from "./stpes/StepOne";

const SavingsAccountStepperForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pan, setPan] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSkip, setIsSkip] = useState(false);

  const steps = ["Personal Details", "Mobile Verification", "Confirmation"];

  useEffect(() => {
    const otpStatus = localStorage.getItem("otpStatus");
    if (otpStatus === "submitted")
      localStorage.setItem("otpStatus", "notSubmitted");
  }, []);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Handle form submission
      console.log("Form submitted", {
        fullName,
        pan,
        pincode,
        mobileNumber,
        otp,
      });
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const mobileRegex = /^[789]\d{9}$/; // Validate Indian mobile number

    if (mobileRegex.test(inputValue) || inputValue === "") {
      setMobileNumber(inputValue);
      setError(""); // Clear error if valid
    } else {
      setError(
        "Invalid mobile number. Must be 10 digits and start with 7, 8, or 9."
      );
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <StepsOne
            fullName={fullName}
            setFullName={setFullName}
            pan={pan}
            setPan={setPan}
            email={email}
            setEmail={setEmail}
            isSkip={isSkip}
            setIsSkip={setIsSkip}
          />
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                label="+91 Mobile Number"
                value={mobileNumber}
                onChange={handleMobileChange}
                error={!!error}
                helperText={error}
                type="tel"
                inputProps={{ maxLength: 10 }} // Limit to 10 digits
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                label="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                  />
                }
                label="I authorise ICICI Bank and its representatives to contact me through phone, email, SMS and WhatsApp. I also agree to ICICI Bank's Terms & Conditions."
              />
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Full height of the viewport
        padding: "16px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: "24px", maxWidth: "400px", width: "100%" }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Savings Account Opening at Your Doorstep
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
              {/* <StepLabel>{label}</StepLabel> */}
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 2 }}>{renderStepContent(activeStep)}</Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SavingsAccountStepperForm;
