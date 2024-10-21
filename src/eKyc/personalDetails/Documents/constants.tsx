export const handleCancelFile = (setFile: any) => {
  setFile({ docType: "" });
};

export const constDocumentType = {
  aadhar: "Aadhar",
  pan: "PAN",
  drivingLicense: "Driving License",
  passport: "Passport",
};

export const validateDocumentNumber = (
  docType: string,
  number: string
): boolean => {
  console.log("handleDocTypeChange file", docType);
  switch (docType) {
    case constDocumentType?.aadhar:
      return /^\d{12}$/.test(number); // Aadhaar is 12 digits
    case constDocumentType?.pan:
      return /^[A-Z]{5}\d{4}[A-Z]{1}$/.test(number); // PAN is 10 characters (5 letters, 4 digits, 1 letter)
    case constDocumentType?.drivingLicense:
      return /^[A-Z]{2}\d{13}$/.test(number); // Example format (varies by state)
    case constDocumentType?.passport:
      return /^[A-Z]{1}\d{7}$/.test(number); // Passport format: 1 letter, 7 digits
    default:
      return false;
  }
};

export const validatePersonalForm = (formData: any, setErrors: any) => {
  console.log("validatePersonalForm", formData);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.name?.trim()) {
    setErrors("Name is required");
    return;
  }

  // Check if email is valid
  if (!emailRegex.test(formData.email)) {
    setErrors("Invalid email address");
    return;
  }
  setErrors("");
  // setErrors(validationErrors);
  // return Object.keys(validationErrors).length === 0; // If no errors, return true
};
