import { api } from "@/services/apiClient";

export async function createTransaction(formData: FormData) {
  const transaction = {
    moduleId: Number(formData.get("module")),
    name: formData.get("transaction") as string,
  };

  try {
    const response = await api.post("/transaction", transaction, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      alert("Falha ao criar a transação");
      console.error("Failed to create a transaction");
      return;
    }

    alert("Transação criada com sucesso!");
    window.location.href = "/transactions";
  } catch (error) {
    alert("Falha ao criar a transação");
    console.error("Failed to create a transaction", error);
  }
}
