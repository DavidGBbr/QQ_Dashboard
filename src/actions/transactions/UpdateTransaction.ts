import axios from "axios";

export async function updateTransaction(formData: FormData) {
  const transaction = {
    transactionId: Number(formData.get("transactionId")),
    name: formData.get("transaction") as string,
    moduleId: Number(formData.get("moduleId")),
  };

  try {
    const response = await axios.put("/transaction", transaction, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      alert("Falha ao atualizar a transação");
      console.error("Failed to update a transaction");
      return;
    }

    alert("Transação atualizada com sucesso!");
  } catch (error) {
    alert("Falha ao atualizar a transação");
    console.error("Failed to update a transaction", error);
  }
}
