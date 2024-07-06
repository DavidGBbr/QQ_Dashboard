import axios from "axios";

export async function createFunction(formData: FormData) {
  const _function = {
    transactionId: Number(formData.get("transaction")),
    name: formData.get("function") as string,
  };

  try {
    const response = await axios.post("/function", _function, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200 && response.status !== 201) {
      alert("Falha ao criar a função");
      console.error("Failed to create a function");
      return;
    }

    alert("Função criada com sucesso!");
  } catch (error) {
    alert("Falha ao criar a função");
    console.error("Failed to create a function", error);
  }
}
