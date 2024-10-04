import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

export const StepsOne = ({
  formData,
  setFormData,
  onSubmit,
  isSkip,
  setIsSkip,
}: any) => {
  const handleSkip = () => {
    setIsSkip(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Grid container spacing={1}>
          {!isSkip ? (
            <>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  // required
                  fullWidth
                  label="PAN Number"
                  name="pan"
                  value={formData?.pan}
                  onChange={handleChange}
                />
              </Grid>
              <Button size="small">Verify PAN</Button>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  // required
                  fullWidth
                  label="Aadhaar Number"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleChange}
                />
              </Grid>
              <Button size="small">Verify Aadhar</Button>
              <Grid xs={12} sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  onClick={() => handleSkip()}
                  size="large"
                  sx={{ color: "gray" }}
                >
                  Skip
                </Button>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  label="Email"
                  name="emailVerify"
                  value={formData.emailVerify}
                  onChange={handleChange}
                />
              </Grid>
              <Button size="small">Verify Email</Button>
            </>
          )}
        </Grid>
      </form>
    </>
  );
};
