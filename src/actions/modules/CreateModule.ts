import { api } from "@/services/apiClient";

export async function createModule(formData: FormData) {
  const moduleData = {
    name: formData.get("nameModule") as string,
  };

  try {
    const response = await api.post("/module", moduleData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      alert("Falha ao criar o módulo");
      console.error("Failed to create a module");
      return;
    }

    alert("Módulo criado com sucesso!");
    window.location.href = "/modules";
  } catch (error) {
    alert("Falha ao criar o módulo");
    console.error("Failed to create a module", error);
  }
}
