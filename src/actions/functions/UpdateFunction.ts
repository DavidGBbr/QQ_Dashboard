import toast from "react-hot-toast";

export async function updateFunction(formData: FormData) {
  const _function = {
    functionId: Number(formData.get("functionId")),
    name: formData.get("function") as string,
    transactionId: Number(formData.get("transactionId")),
  };

  const response = await fetch("http://localhost:3333/function", {
    next: { revalidate: 0 },
    method: "PUT",
    body: JSON.stringify(_function),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    toast.error("Falha ao atualizar a função");
    console.error("Failed to update a function");
    return;
  }

  await response.json();
  toast.success("Função atualizada com sucesso!");
}
