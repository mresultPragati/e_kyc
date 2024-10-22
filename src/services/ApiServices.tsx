import axios from "axios";
import axiosInstance from "./axiosInstance";

export const clientKYC = async (aadharNum: string, email: any) => {
  // export const clientKYC = async (payload: any, contentType?: string) => {
  try {
    const response = await axiosInstance.post(
      `/api/verify-aadhar?aadhar=${aadharNum}&customerIdentifier=${email}&templateName=AADHAR_VARIFICATION`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("KYC Service Response", response);
    return response.data;
  } catch (error) {
    // Log the error for debugging
    // console.error("KYC Submission Failed:", error);
    // throw new Error(`KYC Submission Failed: ${error}`);
    if (axios.isAxiosError(error)) {
      console.log("eRRROR KYC Submission Failed:", error.message);
    }
    throw new Error(`KYC Submission Failed: ${error}`);
  }
};

export const getSingleRequest = async (req_id: string) => {
  // export const clientKYC = async (payload: any, contentType?: string) => {
  try {
    const response = await axiosInstance.post(
      `https://ext.digio.in:444/client/kyc/v2/${req_id}/response`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic QUNLMjQwOTI0MTcxODU1MTc5WkZERlFQSkJONTJIM1A6TzJXTEFKSzQzNjk2U05TQ1lYM1VXV0NGRklDU0VFMko=",
        },
      }
    );
    console.log("KYC Service Response", response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("eRRROR KYC Submission Failed:", error.message);
    }
    throw new Error(`KYC Submission Failed: ${error}`);
  }
};

export const verifyPan = async (payload: any) => {
  // export const clientKYC = async (payload: any, contentType?: string) => {
  try {
    const response = await axiosInstance.post(
      `http://localhost:8080/api/verify-pan?templateName=PAN_VERIFICATION&PAN_Number=${payload.panNum}&customerIdentifier=${payload.identifier}`
    );
    // const response = await axiosInstance.post(`/api/submitPanRequest`, payload);
    console.log("KYC pan Response", response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("eRRROR KYC Submission Failed:", error.message);
    }
    throw new Error(`KYC Submission Failed: ${error}`);
  }
};

export const createAccount = async (payload: any) => {
  // export const clientKYC = async (payload: any, contentType?: string) => {
  try {
    const response = await axiosInstance.post(`/api/user/save`, payload);
    console.log("KYC Service Response", response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("eRRROR KYC Submission Failed:", error.message);
    }
    throw new Error(`KYC Submission Failed: ${error}`);
  }
};
