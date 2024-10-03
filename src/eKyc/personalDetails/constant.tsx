import { clientKYC } from "../../services/ApiServices";

export const generateDigiURL = async (formData: any, setShowLoader: any) => {
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
  console.log("handleUploadClick", resp);
  if (resp) setShowLoader(false);

  // if (resp?.status === 200) {
  const apiResponse = resp;
  // const apiResponse = resp?.data;

  const { access_token, customer_identifier } = apiResponse;
  const entity_id = access_token.entity_id;
  const token_id = access_token.id;
  const customerEmail = encodeURIComponent(customer_identifier); // Ensure email is URL safe

  const sdkVersion = "9.0";
  const logo = "..%2Fimages%2Fdigio_logo_blue.png";
  const method = "otp";
  const theme = encodeURIComponent(
    JSON.stringify({ PRIMARY_COLOR: "#2979BF", SECONDARY_COLOR: "#FFFFFF" })
  );

  const digioUrl = `https://ext.digio.in/#/gateway/login/${entity_id}/${token_id}/${customerEmail}?sdkver=${sdkVersion}&logo=${logo}&method=${method}&theme=${theme}`;

  console.log(digioUrl, "digioUrl");
  const width = 500;
  const height = 750;

  // Calculate the center position
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  // Set window options, including the calculated center position
  const windowFeatures = `height=${height},width=${width},top=${top},left=${left},scrollbars=no,resizable=yes`;

  const popup: any = window.open(digioUrl, "_blank", windowFeatures);
  const checkPopupClosed = setInterval(() => {
    if (popup.closed) {
      clearInterval(checkPopupClosed);
      handleDigiLockerRedirect();
    }
  }, 500);
  // }
};

export const handleDigiLockerRedirect = () => {
  // After the redirect back, extract the response from the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);

  const accessToken = urlParams.get("access_token");
  const customerId = urlParams.get("customer_identifier");

  if (accessToken && customerId) {
    console.log("Access Token:", accessToken);
    console.log("Customer Identifier:", customerId);

    // You can now use the token to perform further actions
    alert("DigiLocker Authentication Successful");
  } else {
    console.error("No response data found.");
  }
};
