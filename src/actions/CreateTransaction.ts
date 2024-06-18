export async function createTransaction(formData: FormData) {
  const transaction = {
    moduleId: Number(formData.get("module")),
    name: formData.get("transaction") as string,
  };

  const response = await fetch("http://localhost:3333/transaction", {
    next: { revalidate: 0 },
    method: "POST",
    body: JSON.stringify(transaction),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed to create a transaction");
    return;
  }

  await response.json();
}