import axios from "axios";

export async function createTransaction(formData: FormData) {
  const transaction = {
    moduleId: Number(formData.get("module")),
    name: formData.get("transaction") as string,
  };

  try {
    const response = await axios.post("/transaction", transaction, {
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
  } catch (error) {
    alert("Falha ao criar a transação");
    console.error("Failed to create a transaction", error);
  }
}
