export async function forgetFunction(email: string) {
  const emailData = { email };

  const response = await fetch("http://127.0.0.1:5000/send-recovery-email", {
    method: "POST",
    body: JSON.stringify(emailData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed to get recovery email");
    throw new Error("Failed to get recovery email");
  }

  return await response.json();
}
