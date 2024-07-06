import axios from "axios";
import { redirect } from "next/navigation";

export async function createModule(formData: FormData) {
  const moduleData = {
    name: formData.get("nameModule") as string,
  };

  try {
    const response = await axios.post("/module", moduleData, {
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
    redirect("/modules");
  } catch (error) {
    alert("Falha ao criar o módulo");
    console.error("Failed to create a module", error);
  }
}
