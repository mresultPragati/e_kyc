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
  const { docType, setDocType, formData, setFormData, document, setDocument } =
    props;

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
