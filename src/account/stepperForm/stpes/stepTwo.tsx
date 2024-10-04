import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Paper,
} from "@mui/material";

interface PersonalInfoFormProps {
  onSubmit: (data: PersonalInfoData) => void;
}

interface PersonalInfoData {
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
  accountType: string;
}

const StepTwo = ({ onSubmit, setFormData, formData }: any) => {
  //   const [formData, setFormData] = useState<PersonalInfoData>({
  //     firstName: "",
  //     lastName: "",
  //     dob: "",
  //     address: "",
  //     city: "",
  //     state: "",
  //     postalCode: "",
  //     phoneNumber: "",
  //     email: "",
  //     accountType: "",
  //   });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        {/* First Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Date of Birth */}
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Grid>

        {/* Phone Number */}
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="Marital Status"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="Father Name"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="Mother Name"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Address */}
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* City */}
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* State */}
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Postal Code */}
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            fullWidth
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Submit Button */}
        {/* <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid> */}
      </Grid>
    </Box>
  );
};

export default StepTwo;
