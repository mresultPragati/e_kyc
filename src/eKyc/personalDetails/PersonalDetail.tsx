import { Button, FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DocVerifyForm } from "./Documents/DocVarifyForm";
import { validateDocumentNumber } from "./Documents/constants";
import { AlertMessage } from "../../reusableComponet/ALertMessage";
import { clientKYC } from "../../services/ApiServices";
import CircleLoader from "../../reusableComponet/loader/CircleLoader";
import { generateDigiURL } from "./constant";

type DynamicState<T> = {
  [key: string]: T;
};

export const PersonalDetail = () => {
  const initialState = {
    docType: "",
    DocFile: null, // Ensure docType is initialized
  };
  // const [docType, setDocType] = useState("");
  const [formData, setFormData] = useState<DynamicState<any>>(initialState);
  // const [extDigiUrl, setExtDigioUrl] = useState("");
  const [errors, setErrors] = useState("");

  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
  const [showLoader, setShowLoader] = useState(false);

  const handleVerification = async (e: React.FormEvent) => {
    // // e.preventDefault();
    if (!formData?.docType || formData?.docType === "") {
      setAlertMsg({
        msg: "Please select a document type",
        severity: "error",
      });
      return;
    }
    if (!formData?.docNum || formData?.docNum === "") {
      setAlertMsg({
        msg: "Please enter the document number",
        severity: "error",
      });
      return;
    }
    if (!validateDocumentNumber(formData?.docType, formData?.docNum)) {
      // setAlertMsg({msg:`Invalid ${formData?.docFile?.name} number`,severity:"error"});
      setAlertMsg({ msg: `Invalid document number`, severity: "error" });
      return;
    }
    // // if (!formData?.docFile || formData?.docFile === "") {
    // //  setAlertMsg({ msg: "Please select a document file", severity: "error" });
    //  // return;
    // //}

    // setFormData(
    //   Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
    // );
    // setAlertMsg({ msg: `Verification Done Successfully`, severity: "success" });
    setShowLoader(true);
    await generateDigiURL(
      formData?.docNum,
      setShowLoader,
      setAlertMsg,
      formData?.docType
    );
  };

  return (
    <>
      {showLoader && <CircleLoader />}

      <div style={{ padding: "2rem 3rem" }}>
        <h5 className="mb-5 d-flex justify-content-center">
          ADD/UPDATE PERSONAL DETAILS
        </h5>
        <div>
          {" "}
          <AlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
          <FormControl>
            <DocVerifyForm
              //    docType={docType} setDocType={setDocType}
              formData={formData}
              setFormData={setFormData}
              //    document={document    setDocument={setDocument}
              errors={errors}
              setErrors={setErrors}
            />
            <Button
              className="mt-5"
              variant="contained"
              onClick={(e) => handleVerification(e)}
            >
              Authenticate
            </Button>
          </FormControl>
        </div>
      </div>
    </>
  );
};
