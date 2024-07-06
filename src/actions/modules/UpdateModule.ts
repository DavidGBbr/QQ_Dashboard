import axios from "axios";

export async function updateModule(formData: FormData) {
  const moduleData = {
    moduleId: Number(formData.get("moduleId")),
    name: formData.get("name") as string,
  };

  try {
    const response = await axios.patch("/module", moduleData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      alert("Falha ao atualizar o módulo");
      console.error("Failed to update the module");
      return;
    }

    alert("Módulo atualizado com sucesso!");
  } catch (error) {
    alert("Falha ao atualizar o módulo");
    console.error("Failed to update the module", error);
  }
}
