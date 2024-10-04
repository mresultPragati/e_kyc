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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Autocomplete
            options={states}
            onChange={(event, value) =>
              handleAutocompleteChange(event, value, "state")
            }
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                label="State"
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            options={districts}
            onChange={(event, value) =>
              handleAutocompleteChange(event, value, "district")
            }
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
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
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            options={banks}
            onChange={(event, value) =>
              handleAutocompleteChange(event, value, "bank")
            }
            renderInput={(params) => (
              <TextField variant="standard" {...params} label="Bank" required />
            )}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default StepFive;
