import toast from "react-hot-toast";

export async function updateTransaction(formData: FormData) {
  const transaction = {
    transactionId: Number(formData.get("transactionId")),
    name: formData.get("transaction") as string,
    moduleId: Number(formData.get("moduleId")),
  };

  const response = await fetch("http://localhost:3333/transaction", {
    next: { revalidate: 0 },
    method: "PUT",
    body: JSON.stringify(transaction),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    toast.error("Falha ao atualizar a transação");
    console.error("Failed to update a transaction");
    return;
  }

  await response.json();
  toast.success("Transação atualizada com sucesso!");
}
