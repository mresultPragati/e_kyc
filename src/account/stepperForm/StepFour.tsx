import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";

const StepFour = ({ onSubmit, formData, setFormData }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form
      // onSubmit={onSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              fullWidth
              label="Nominee Name"
              name="nomineeName"
              value={formData.nomineeName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              fullWidth
              label="Relation to Account Holder"
              name="nomineeRelation"
              value={formData.nomineeRelation}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              fullWidth
              label="Address"
              name="nomineeAddress"
              value={formData.nomineeAddress}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="standard"
              fullWidth
              label="Date of Birth"
              name="nomineeDOB"
              type="date"
              value={formData.nomineeDOB}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="standard"
              fullWidth
              label="Guardian Name (If any)"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              fullWidth
              label="Guardian Age"
              name="guardianAge"
              value={formData.guardianAge}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {/* <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box> */}
      </form>
    </>
  );
};

export default StepFour;
