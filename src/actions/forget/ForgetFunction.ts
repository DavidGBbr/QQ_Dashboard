import axios from "axios";

export async function forgetFunction(email: string) {
  const emailData = { email };

  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/send-recovery-email",
      emailData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Failed to get recovery email", error);
    throw new Error("Failed to get recovery email");
  }
}
