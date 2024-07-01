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
  const response = await fetch(`http://localhost:3333/forget/${token}`, {
    method: "PATCH",
    body: JSON.stringify(resetPasswordData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed to update password");
    throw new Error("Failed to update password");
  }

  await response.json();
  return true;
}
