import axios from "axios";

type ResetProps = {
  email: string;
  password: string;
  token: string;
};

export async function resetFunction({
  email,
  password,
  token,
}: ResetProps): Promise<boolean> {
  const resetPasswordData = { email, password };

  try {
    const response = await axios.patch(`/forget/${token}`, resetPasswordData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      console.error("Failed to update password");
      throw new Error("Failed to update password");
    }

    return true;
  } catch (error) {
    console.error("Failed to update password", error);
    throw new Error("Failed to update password");
  }
}
