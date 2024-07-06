import axios from "axios";

export async function updateFunction(formData: FormData) {
  const _function = {
    functionId: Number(formData.get("functionId")),
    name: formData.get("function") as string,
    transactionId: Number(formData.get("transactionId")),
  };

  try {
    const response = await axios.put("/function", _function, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      alert("Falha ao atualizar a função");
      console.error("Failed to update a function");
      return;
    }

    alert("Função atualizada com sucesso!");
  } catch (error) {
    alert("Falha ao atualizar a função");
    console.error("Failed to update a function", error);
  }
}
