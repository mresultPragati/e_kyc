import { clientKYC, verifyPan } from "../../services/ApiServices";
import { constDocumentType } from "./Documents/constants";

export const generateDigiURL = async (
  formData: any,
  // formData?.docNum: any,
  setShowLoader: any,
  setAlertMsg: any
  // type: string,
  // email?: string
) => {
  console.log("EXXPD0097L", formData);

  var resp;
  if (formData?.docType === constDocumentType.aadhar) {
    resp = await clientKYC(formData?.docNum, formData?.email);
  } else if (formData?.docType === constDocumentType.pan) {
    const payload = {
      identifier: formData?.email,
      panNum: formData?.docNum,
    };
    resp = await verifyPan(payload);
  }
  console.log("respresp", resp);

  if (resp) {
    setShowLoader(false);
    const apiResponse = resp;

    const { access_token, reference_id, customer_identifier, id } = apiResponse;

    const entity_id = access_token?.entity_id;
    const token_id = access_token?.id;
    const customerEmail = encodeURIComponent(customer_identifier); // Ensure formData?.email is URL safe

    // Construct the URL
    const sdkVersion = "9.0";
    const logo = "..%2Fimages%2Fdigio_logo_blue.png";
    const method = "otp";
    const theme = encodeURIComponent(
      JSON.stringify({ PRIMARY_COLOR: "#2979BF", SECONDARY_COLOR: "#FFFFFF" })
    );

    const digioUrl = `https://ext.digio.in/#/gateway/login/${id}/${reference_id}/${customerEmail}?sdkver=${sdkVersion}&logo=${logo}&method=${method}&theme=${theme}`;

    console.log(digioUrl, "digioUrl");
    const width = 500;
    const height = 750;

    // Calculate the center position
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const windowFeatures = `height=${height},width=${width},top=${top},left=${left},scrollbars=no,resizable=yes`;
    console.log("resppppp", resp);

    if (id) {
      // const popup =
      window.open(digioUrl, "_blank", windowFeatures);

      // if (popup) {
      //   // Poll the popup window's URL to check when KYC is completed
      //   console.log(popup?.location?.href, "POPUPRESP");
      //   const pollTimer = setInterval(() => {
      //     try {
      //       // Check if the popup URL contains the success message
      //       if (
      //         popup.location.href.includes(
      //           "exitMessage=KYC%20process%20completed&type=success"
      //         )
      //       ) {
      //         // KYC process completed successfully
      //         setAlertMsg({
      //           msg: "KYC process completed successfully!",
      //           severity: "success",
      //         });
      //         console.log("POPUPRESP suceess");

      //         setShowLoader(false);
      //         popup.close(); // Close the popup window
      //         clearInterval(pollTimer); // Stop polling
      //       }
      //     } catch (e) {
      //       // This will throw errors due to cross-origin security until the URL is redirected to the success page
      //       console.log("POPUPRESP err 75");
      //       console.log("Error while polling popup window: ", e);
      //     }
      //   }, 3000); // Poll every second (1000ms)
      // }
      return;
    } else {
      console.log("POPUPRESP err 81 internet");
      setAlertMsg({
        msg: "Please check your internet connection",
        severity: "error",
      });
      setShowLoader(false);
    }
    return;
  }

  if (!resp) {
    setAlertMsg({
      msg: "Please check your internet connection",
      severity: "error",
    });
    setShowLoader(false);
  }
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
