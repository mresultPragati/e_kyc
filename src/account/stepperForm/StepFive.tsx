import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Autocomplete,
  ListItem,
  ListItemText,
} from "@mui/material";
import { branchesWithDistrict, districts } from "./constants";
import { StyledListItem } from "./StepStyled";

const states = ["State 1", "State 2", "State 3"]; // Example states
const banks = ["Bank X", "Bank Y", "Bank Z"]; // Example banks

const StepFive = ({ formData, setFormData, onSubmit }: any) => {
  // Reset branch when district is null or empty
  useEffect(() => {
    if (!formData?.accountDistrict) {
      setFormData({
        ...formData,
        branchName: "",
        branchCode: "",
      });
    }
  }, [formData?.accountDistrict]);

  const handleAutocompleteChange = (event: any, value: any, name: string) => {
    console.log("handleAutocompleteChange", name, value);

    if (name === "branch") {
      setFormData({
        ...formData,
        branchName: value?.branchName || "",
        branchCode: value?.branchCode || "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Filter branches based on selected district
  const filteredBranches = branchesWithDistrict.filter((branch) =>
    formData?.accountDistrict
      ? branch.district === formData?.accountDistrict
      : []
  );
  console.log("handleAutocompleteChange", formData.branchName);

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Autocomplete
            options={states}
            onChange={(event, value) =>
              handleAutocompleteChange(event, value, "accountState")
            }
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                label="State"
                name="accountState"
                value={formData?.accountState || ""}
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            options={districts}
            onChange={(event, value) =>
              handleAutocompleteChange(event, value, "accountDistrict")
            }
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                name="accountDistrict"
                value={formData?.accountDistrict || ""}
                label="District"
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            options={filteredBranches}
            getOptionLabel={(option) =>
              formData?.accountDistrict === option.district
                ? `${option.branchName} (${option.branchCode})`
                : ""
            }
            onChange={(event, value) =>
              handleAutocompleteChange(event, value, "branch")
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Branch"
                name="branch"
                required
              />
            )}
            renderOption={(props, option) => (
              <StyledListItem {...props}>
                <ListItemText
                  primary={option.branchName}
                  secondary={`Branch Code: ${option.branchCode}`}
                />
              </StyledListItem>
            )}
            sx={{ width: 300 }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default StepFive;
