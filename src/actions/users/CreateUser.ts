import { api } from "@/services/apiClient";

export async function createUser(formData: FormData) {
  const user = {
    name: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    profileId: 1,
  };

  try {
    const response = await api.post("/user", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      alert("Falha ao criar o usuário");
      console.error("Failed to create a user");
      return;
    }

    alert("Usuário criado com sucesso!");

    window.location.href = "/users";
  } catch (error) {
    alert("Falha ao criar o usuário");
    console.error("Failed to create a user", error);
  }
}
