import { baseUrl } from "../../common/constants/baseUrl";
import { usersAdapter, getCodeAdapter } from "../adapters/usersAdapter";
import UserModel from "../models/userModel";

export default class UsersRepository {
  /**
   * Creates a new user and returns an array with the newly created user.
   * @param name User's first name.
   * @param lastName User's last name.
   * @param email User's email address.
   * @returns {Promise<UserModel[]>} An array with the newly created users.
   */
  static async createUser(
    name: string,
    lastName: string,
    email: string
  ): Promise<UserModel[]> {
    try {
      // Simulated response
      const simulatedResponse = {
        status: 200,
        json: async () => [
          {
            id: "1",
            name,
            lastName,
            email
          }
        ]
      };

      const response = simulatedResponse; // Simulated response

      // Uncomment and use this for real API call
      // const response = await fetch(`${baseUrl.mockApi}/user`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({ name, lastName, email })
      // });

      if (response.status !== 200) {
        // throw new Error(response.message || "Failed to create user");
      }

      const body = await response.json();
      const data = body.map((item: any) => usersAdapter(item));
      return data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  /**
   * Retrieves a code associated with an email address.
   * @param email User's email address.
   * @returns {Promise<{ code: string }>} The code associated with the email address.
   */
  static async getCode(email: string): Promise<{ code: string }> {
    try {
      // Simulated response
      const simulatedResponse = {
        status: 200,
        json: async () => [
          {
            id: "1",
            code: "8765"
          }
        ]
      };

      const response = simulatedResponse; // Simulated response

      // Uncomment and use this for real API call
      // const response = await fetch(`${baseUrl.mockApi}/code`, {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // });

      if (response.status !== 200) {
        // throw new Error(response.message || 'Failed to get code');
      }

      const body = await response.json();
      const data = body.map((item: any) => getCodeAdapter(item));
      return { code: data[0]?.code || "" };
    } catch (error) {
      console.error("Error getting code:", error);
      throw error;
    }
  }
}
