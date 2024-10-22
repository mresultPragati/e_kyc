import React, { useState } from "react";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { generateDigiURL } from "../../../eKyc/personalDetails/constant";
import CircleLoader from "../../../reusableComponet/loader/CircleLoader";
import {
  constDocumentType,
  validateDocumentNumber,
} from "../../../eKyc/personalDetails/Documents/constants";
import { AlertMessage } from "../../../reusableComponet/ALertMessage";

export const StepsOne = ({
  formData,
  setFormData,
  onSubmit,
  isSkip,
  setIsSkip,
}: any) => {
  const [isCodeSendClick, setIsCodeSendClick] = useState(false);

  const handleSkip = () => {
    setIsSkip(true);
  };
  const [showLoader, setShowLoader] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });

  const handleChange = (e: any, type?: string) => {
    const { name, value } = e.target;
    console.log("handleDocTypeChange", name, value, type);

    setFormData({
      ...formData,
      [name]: value,
      docType: type,
    });
    // if (type === constDocumentType?.pan || type === constDocumentType?.aadhar) {
    //   setFormData({
    //     ...formData,
    //     docType: name,
    //   });
    // }
  };

  const handleVerification = async () => {
    if (formData?.docType === constDocumentType.pan) {
      if (!validateDocumentNumber(constDocumentType?.pan, formData?.docNum)) {
        // setAlertMsg({msg:`Invalid ${formData?.docFile?.name} number`,severity:"error"});
        setAlertMsg({
          msg: `Invalid pan number`,
          severity: "error",
        });
        return;
      }
    } else {
      console.log(
        formData?.docNum,
        validateDocumentNumber(constDocumentType?.aadhar, formData?.docNum),
        "handleDocTypeChange"
      );

      if (
        !validateDocumentNumber(constDocumentType?.aadhar, formData?.docNum)
      ) {
        // setAlertMsg({msg:`Invalid ${formData?.docFile?.name} number`,severity:"error"});
        setAlertMsg({
          msg: `Invalid aadhar number`,
          severity: "error",
        });
        return;
      }
    }
    setShowLoader(true);
    let stepOneForm = {
      email: formData.accountEmail,
      docType: formData.docType,
      docNum: formData.docNum,
    };
    console.log(" formData.docType", stepOneForm, formData);

    await generateDigiURL(stepOneForm, setShowLoader, setAlertMsg);
  };

  // const handleAddharVerification = async () => {
  //   if (!validateDocumentNumber(constDocumentType?.aadhar, formData?.aadhar)) {
  //     // setAlertMsg({msg:`Invalid ${formData?.docFile?.name} number`,severity:"error"});
  //     setAlertMsg({ msg: `Invalid aadhar number`, severity: "error" });
  //     return;
  //   }

  //   setShowLoader(true);
  //   await generateDigiURL(formData, setShowLoader, setAlertMsg);
  // };
  console.log("handleChange", formData);

  return (
    <>
      <AlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      {showLoader && <CircleLoader />}
      <form
      // onSubmit={onSubmit}
      >
        <Grid container spacing={1}>
          {!isSkip ? (
            <>
              <Grid item xs={12} className="mb-3">
                <TextField
                  variant="standard"
                  // required
                  fullWidth
                  label="Email"
                  name="accountEmail"
                  value={formData?.accountEmail}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  // required
                  fullWidth
                  label="PAN Number"
                  name="docNum"
                  // name={constDocumentType.pan}
                  value={formData?.pan}
                  onChange={(e) => handleChange(e, constDocumentType?.pan)}
                />
              </Grid>
              <Button onClick={() => handleVerification()} size="small">
                Verify PAN
              </Button>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  // required
                  fullWidth
                  label="Aadhaar Number"
                  name="docNum"
                  // name={constDocumentType.aadhar}
                  value={formData.aadhar}
                  onChange={(e) => handleChange(e, constDocumentType?.aadhar)}
                />
              </Grid>
              <Button onClick={() => handleVerification()} size="small">
                Verify Aadhar
              </Button>
              <Grid xs={12} sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  onClick={() => handleSkip()}
                  size="large"
                  sx={{ color: "gray" }}
                >
                  Skip
                </Button>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  label="Email"
                  name="emailVerify"
                  value={formData.emailVerify}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button onClick={() => setIsCodeSendClick(true)} size="small">
                  Send Code
                </Button>
              </Grid>
              {isCodeSendClick && (
                <>
                  <Grid item xs={6}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      label="Code"
                      name="emailCode"
                      value={formData.emailCode}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Button
                    onClick={() => setIsCodeSendClick(false)}
                    size="small"
                  >
                    Verify Email
                  </Button>
                </>
              )}
              <Grid
                className="mt-3"
                xs={12}
                sx={{ display: "flex", justifyContent: "start" }}
              >
                <IconButton onClick={() => setIsSkip(false)}>
                  <ArrowBackIcon />
                </IconButton>
              </Grid>
            </>
          )}
        </Grid>
      </form>
    </>
  );
};
