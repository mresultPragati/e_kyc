import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const StepThree = ({ onSubmit, setFormData, formData }: any) => {
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name as string]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Occupation Type</InputLabel>
        <Select
          variant="standard"
          name="occupationType"
          value={formData.occupationType}
          onChange={handleChange}
          required
        >
          <MenuItem value="Salaried">Salaried</MenuItem>
          <MenuItem value="Self-employed">Self-employed</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Retired">Retired</MenuItem>
          <MenuItem value="Unemployed">Unemployed</MenuItem>
        </Select>
      </FormControl>

      <TextField
        variant="standard"
        label="Company Name"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        variant="standard"
        label="Annual Income"
        name="annualIncome"
        value={formData.annualIncome}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Employment Status</InputLabel>
        <Select
          variant="standard"
          name="employmentStatus"
          value={formData.employmentStatus}
          onChange={handleChange}
          required
        >
          <MenuItem value="Full-time">Full-time</MenuItem>
          <MenuItem value="Part-time">Part-time</MenuItem>
          <MenuItem value="Contractor">Contractor</MenuItem>
          <MenuItem value="Freelancer">Freelancer</MenuItem>
        </Select>
      </FormControl>

      {/* <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button> */}
    </form>
  );
};

export default StepThree;
