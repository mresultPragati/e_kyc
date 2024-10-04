import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";

export const StepSix = ({ setIsAgreed, isAgreed, OTP, setOTP }: any) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            className="mb-3"
            variant="standard"
            // required
            fullWidth
            label="OTP"
            name="otp"
            value={OTP}
            onChange={(e: any) => setOTP(e.target.value)}
          />
        </Grid>
        <Button size="small">Send Otp</Button>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
              />
            }
            label="I authorize Bank and its representatives to contact me through phone, email, SMS and WhatsApp. I also agree to Bank's Terms & Conditions."
          />
        </Grid>
      </Grid>
    </>
  );
};
