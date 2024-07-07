import { api } from "@/services/apiClient";

export async function createProfile(formData: FormData) {
  const profile = {
    moduleId: Number(formData.get("module")),
    name: formData.get("profile") as string,
  };

  try {
    const response = await api.post("/profile", profile, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      alert("Falha ao criar o perfil");
      console.error("Failed to create a profile");
      return;
    }

    alert("Perfil criado com sucesso!");
    window.location.href = "/profiles";
  } catch (error) {
    alert("Falha ao criar o perfil");
    console.error("Failed to create a profile", error);
  }
}
