import { api } from "@/services/apiClient";

export async function createFunction(formData: FormData) {
  const _function = {
    transactionId: Number(formData.get("transaction")),
    name: formData.get("function") as string,
  };

  try {
    const response = await api.post("/function", _function, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      alert("Falha ao criar a função");
      console.error("Failed to create a function");
      return;
    }

    alert("Função criada com sucesso!");
    window.location.href = "/functions";
  } catch (error) {
    alert("Falha ao criar a função");
    console.error("Failed to create a function", error);
  }
}
