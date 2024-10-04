import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { StepsOne } from "./stpes/StepOne";
import StepTwo from "./stpes/stepTwo";
import { PersonalInfoData } from "./constants";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import { StepSix } from "./SepSix";
import ConfirmationDialog from "../../reusableComponet/confirmation/Confirmation";
import { AlertMessage } from "../../reusableComponet/ALertMessage";

const SavingsAccountStepperForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState<string>("");
  const [pan, setPan] = useState<string>("");
  const [aadhar, setAadhar] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [OTP, setOTP] = useState<string>("");
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSkip, setIsSkip] = useState(false);
  const [formData, setFormData] = useState<PersonalInfoData>({
    pan: "",
    aadhar: "",
    emailVerify: "",
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
    accountType: "",
    maritalStatus: "",
    fatherName: "",
    motherName: "",
    occupationType: "",
    companyName: "",
    annualIncome: "",
    employmentStatus: "",
    nomineeName: "",
    relation: "",
    dateOfBirth: "",
    nomineeAddress: "",
    accountCity: null,
    accountState: null,
    accountDistrict: null,
    branch: null,
    bank: null,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });

  const steps = [
    "verify",
    "Personal Details",
    "Occupation Detail",
    "Nominee",
    "Branch",
    // "Confirmation",
  ];

  useEffect(() => {
    const otpStatus = localStorage.getItem("otpStatus");
    if (otpStatus === "submitted")
      localStorage.setItem("otpStatus", "notSubmitted");
  }, []);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setOpenDialog(true);
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

  const handleFormSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
    // You can handle form submission logic here, such as sending data to an API.
  };

  const handleConfirm = () => {
    setAlertMsg({ msg: `Account created successfully`, severity: "success" });
    setOpenDialog(false);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <StepsOne
            // pan={pan}
            // setPan={setPan}
            // email={email}
            // setAadhar={setAadhar}
            // aadhar={aadhar}
            // setEmail={setEmail}
            onSubmit={handleFormSubmit}
            formData={formData}
            setFormData={setFormData}
            isSkip={isSkip}
            setIsSkip={setIsSkip}
          />
        );
      case 1:
        return (
          // <Grid container spacing={2}>
          //   <Grid item xs={12}>
          // <TextField
          //   variant="standard"
          //   required
          //   fullWidth
          //   label="+91 Mobile Number"
          //   value={mobileNumber}
          //   onChange={handleMobileChange}
          //   error={!!error}
          //   helperText={error}
          //   type="tel"
          //   inputProps={{ maxLength: 10 }} // Limit to 10 digits
          // />
          //   </Grid>
          //   <Grid item xs={12}>
          //     <TextField
          //       variant="standard"
          //       required
          //       fullWidth
          //       label="OTP"
          //       value={otp}
          //       onChange={(e) => setOtp(e.target.value)}
          //     />
          //   </Grid>
          // </Grid>
          <StepTwo
            onSubmit={handleFormSubmit}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <StepThree
            onSubmit={handleFormSubmit}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 3:
        return (
          <StepFour
            onSubmit={handleFormSubmit}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <StepFive
            onSubmit={handleFormSubmit}
            formData={formData}
            setFormData={setFormData}
          />
        );
      // case 5:
      //   return (
      //     <StepSix
      //       isAgreed={isAgreed}
      //       setIsAgreed={setIsAgreed}
      //       OTP={OTP}
      //       setOTP={setOTP}
      //     />
      //   );
      default:
        return null;
    }
  };

  return (
    <>
      <AlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          // height: "100vh", // Full height of the viewport
          padding: "20px",
          backgroundColor: "#f9f9f9",
          marginTop: "1rem",
        }}
      >
        <Paper elevation={3} sx={{ padding: "24px", width: "80%" }}>
          <Typography variant="h6" align="center" gutterBottom>
            Savings Account Opening at Your Doorstep
          </Typography>

          <Stepper
            className="mb-4 mt-4"
            activeStep={activeStep}
            alternativeLabel
          >
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
      <ConfirmationDialog
        open={openDialog}
        setOpenDialog={setOpenDialog}
        onConfirm={handleConfirm}
        message="Are you sure you want to proceed with submitting this form?"
      />
    </>
  );
};

export default SavingsAccountStepperForm;
