import { Button, FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DocVerifyForm } from "./Documents/DocVarifyForm";
import { validateDocumentNumber } from "./Documents/constants";
import { AlertMessage } from "../../reusableComponet/ALertMessage";
import { clientKYC } from "../../services/ApiServices";
import CircleLoader from "../../reusableComponet/loader/CircleLoader";

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

  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
  const [showLoader, setShowLoader] = useState(false);

  const generateDigioURL = async () => {
    // const apiResponse = {
    //   id: "KID240927180758285COKGHCB3BUB2PP",
    //   created_at: "2024-09-27 18:07:58",
    //   status: "requested",
    //   customer_identifier: "pragati.dhobe@mresult.com",
    //   reference_id: "CRN240927180758285O4",
    //   request_details: {
    //     "aadhar number": "452494347990",
    //   },
    //   transaction_id: "CRN240927180758285O4",
    //   customer_name: "",
    //   expire_in_days: 10,
    //   reminder_registered: false,
    //   access_token: {
    //     entity_id: "KID240927180758285COKGHCB3BUB2PP",
    //     id: "GWT240927180758317R4RM4ONE8NFEAS",
    //     valid_till: "2024-09-28 18:07:58",
    //     created_at: "2024-09-27 18:07:58",
    //   },
    //   workflow_name: "AADHAR_VARIFICATION",
    //   auto_approved: false,
    //   template_id: "KTP240925153829472IIR9ZUDHHPMVAP",
    // };
    const payload = {
      request_details: {
        "aadhar number": formData?.docNum,
      },
      customer_identifier: "pragati.dhobe@mresult.com",
      template_name: "AADHAR_VARIFICATION",
    };

    // const resp = await clientKYC(payload);
    const resp = await clientKYC(formData?.docNum);
    console.log("handleUploadClick", resp,formData?.docNum);
    if (resp){
       setShowLoader(false);

    // if (resp?.status === 200) {
    const apiResponse = resp;
    // const apiResponse = resp?.data;

    // Extract relevant data
    const { access_token,reference_id, customer_identifier,id } = apiResponse;
    
    const entity_id = access_token.entity_id;
    const token_id = access_token?.id;
    const customerEmail = encodeURIComponent(customer_identifier); // Ensure email is URL safe

    // Construct the URL
    const sdkVersion = "9.0";
    const logo = "..%2Fimages%2Fdigio_logo_blue.png";
    const method = "otp";
    const theme = encodeURIComponent(
      JSON.stringify({ PRIMARY_COLOR: "#2979BF", SECONDARY_COLOR: "#FFFFFF" })
    );

    // const digioUrl = `https://ext.digio.in/#/gateway/login/${entity_id}/${token_id}/${customerEmail}?sdkver=${sdkVersion}&logo=${logo}&method=${method}&theme=${theme}`;
    const digioUrl = `https://ext.digio.in/#/gateway/login/${id}/${reference_id}/${customerEmail}?sdkver=${sdkVersion}&logo=${logo}&method=${method}&theme=${theme}`;

    console.log(digioUrl, "digioUrl");
    const width = 500;
    const height = 750;

    // Calculate the center position
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    // Set window options, including the calculated center position
    const windowFeatures = `height=${height},width=${width},top=${top},left=${left},scrollbars=no,resizable=yes`;

    window.open(digioUrl, "_blank", windowFeatures);
    }
    // }
  };

  const handleUploadClick = async (e: React.FormEvent) => {
    // // e.preventDefault();
    // if (!formData?.docType || formData?.docType === "") {
    //   setAlertMsg({
    //     msg: "Please select a document type",
    //     severity: "error",
    //   });
    //   return;
    // }
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
    generateDigioURL();
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
            />
            <Button
              className="mt-5"
              variant="contained"
              onClick={(e) => handleUploadClick(e)}
            >
              Authenticate
            </Button>
          </FormControl>
        </div>
      </div>
    </>
  );
};
