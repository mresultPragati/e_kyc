import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Autocomplete,
} from "@mui/material";

const states = ["State 1", "State 2", "State 3"]; // Example states
const districts = ["District 1", "District 2", "District 3"]; // Example districts
const branches = ["Branch A", "Branch B", "Branch C"]; // Example branches
const banks = ["Bank X", "Bank Y", "Bank Z"]; // Example banks

const StepFive = ({ formData, setFormData, onSubmit }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAutocompleteChange = (event: any, value: any, name: string) => {
    // const handleAutocompleteChange = (event: any) => {
    // const { name, value } = event.target;
    console.log(name, value, "Form Data Submitted:");
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
    // onSubmit={onSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Autocomplete
            options={states}
            onChange={(event, value) =>
              handleAutocompleteChange(event, value, "accountState")
            }
            // onChange={(event: any) => handleAutocompleteChange(event)}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                label="State"
                name="accountState"
                value={formData?.accountState}
                // onChange={(event: any) => handleAutocompleteChange(event)}
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
                value={formData?.accountDistrict}
                // onChange={(event: any) => handleAutocompleteChange(event)}
                label="District"
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            options={branches}
            onChange={(event, value) =>
              handleAutocompleteChange(event, value, "branch")
            }
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                label="Branch"
                name="branch"
                value={formData?.branch}
                // onChange={(event: any) => handleAutocompleteChange(event)}
                required
              />
            )}
          />
        </Grid>
        {/* <Grid item xs={6}>
          <Autocomplete
            options={banks}
            onChange={(event, value) =>
              handleAutocompleteChange(event, value, "bank")
            }
            renderInput={(params) => (
              <TextField variant="standard" {...params} label="Bank" required />
            )}
          />
        </Grid> */}
      </Grid>
    </form>
  );
};

export default StepFive;
