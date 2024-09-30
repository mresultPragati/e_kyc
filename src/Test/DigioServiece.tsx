import axios from "axios";

const DIGIO_API_URL = "https://api.digio.in/v2"; // Update with Digio's actual API base URL
const DIGIO_KYC_ENDPOINT = "/kyc/create"; // KYC endpoint

// Service class to handle Digio KYC
export class DigioKycService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // Create a KYC request
  public async createKyc(userData: any): Promise<string> {
    try {
      const response = await axios.post(
        `${DIGIO_API_URL}${DIGIO_KYC_ENDPOINT}`,
        userData,
        {
          headers: {
            Authorization: `Basic ${this.apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.kyc_url) {
        return response.data.kyc_url;
      } else {
        throw new Error("KYC URL not found in response");
      }
    } catch (error) {
      console.error("Error creating KYC request:", error);
      throw error;
    }
  }
}
