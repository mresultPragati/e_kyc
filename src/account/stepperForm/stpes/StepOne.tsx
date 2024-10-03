import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

export const StepsOne = ({
  fullName,
  setFullName,
  pan,
  setPan,
  email,
  setEmail,
  isSkip,
  setIsSkip,
}: any) => {
  const handleSkip = () => {
    setIsSkip(true);
  };

  return (
    <>
      <Grid container spacing={1}>
        {!isSkip ? (
          <>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                label="PAN Number"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Grid>
            <Button size="small">Verify PAN</Button>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                label="Aadhaar Number"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Button size="small">Verify Email</Button>
          </>
        )}
      </Grid>
    </>
  );
};
