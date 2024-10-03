import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { constDocumentType, handleCancelFile } from "./constants";

export const DocVerifyForm = (props: any) => {
  const {
    docType,
    setDocType,
    formData,
    setFormData,
    document,
    setDocument,
    errors,
    setErrors,
  } = props;

  const handleDocTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, docType: event.target.value });
    // setDocType(event.target.value);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    switch (formData?.docType) {
      case "Aadhar":
        setErrors(
          /^\d{12}$/.test(value) ? "" : "Aadhaar must be a 12-digit number"
        );
        break;
      case "PAN":
        setErrors(
          /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)
            ? ""
            : "PAN must be in format: 5 letters, 4 digits, and 1 letter"
        );
        break;
      case "Driving License":
        setErrors(
          /^[A-Z]{1,2}[0-9]{13}$/.test(value)
            ? ""
            : "Driving license should have 1-2 letters followed by 13 digits"
        );
        break;
      case "passport":
        setErrors(
          /^[A-Z]{1}[0-9]{7}$/.test(value)
            ? ""
            : "Passport must be in format: 1 letter followed by 7 digits"
        );
        break;
      default:
        break;
    }
  };

  const handleDocFileChange = (event: any) => {
    const file = event?.target?.files?.[0];
    console.log("handleDocFileChange", file);
    if (file) {
      // setFormData({docFile:file});
      setFormData({ ...formData, docFile: file });
      // setDocument(file);
    }
  };

  return (
    <>
      <div>
        {" "}
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Update KYC Type:{" "}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={formData?.docType}
            // value={docType}
            onChange={(e) => handleDocTypeChange(e)}
          >
            <FormControlLabel
              value={constDocumentType?.pan}
              control={<Radio />}
              label="Pan"
            />
            <FormControlLabel
              value={constDocumentType?.aadhar}
              control={<Radio />}
              label="Aadhar"
            />
            <FormControlLabel
              value={constDocumentType?.drivingLicense}
              control={<Radio />}
              label="Driving License"
            />
            <FormControlLabel
              value={constDocumentType?.passport}
              control={<Radio />}
              label="Passport"
            />
          </RadioGroup>
          <TextField
            variant="standard"
            label="Document Number: "
            name="docNum"
            value={formData?.docNum}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            required
            error={!!errors}
            helperText={errors}
          />
          <div className="mt-5">
            <Button
              component="label"
              role={undefined}
              variant="outlined"
              style={{ color: "#002a4a" }}
              tabIndex={-1}
              startIcon={<CloudUploadOutlinedIcon />}
            >
              Upload Document
              <input
                style={{ display: "none" }}
                accept=".doc,.docx,.pdf"
                type="file"
                value={formData?.DocFile}
                onChange={handleDocFileChange}
                // multiple
              />
            </Button>
            {formData?.docFile && (
              <Tooltip arrow title="Delete Uploaded File">
                <IconButton
                  // color="error"
                  onClick={() => handleCancelFile(setFormData)}
                >
                  <CancelOutlinedIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </FormControl>
      </div>
    </>
  );
};
