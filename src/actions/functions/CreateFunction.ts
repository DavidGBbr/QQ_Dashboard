export async function createFunction(formData: FormData) {
  const _function = {
    transactionId: Number(formData.get("transaction")),
    name: formData.get("function") as string,
  };

  const response = await fetch("http://localhost:3333/function", {
    next: { revalidate: 0 },
    method: "POST",
    body: JSON.stringify(_function),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed to create a function");
    return;
  }

  await response.json();
}
