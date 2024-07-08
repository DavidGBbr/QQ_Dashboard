import { api } from "@/services/apiClient";

export async function updateUser(user: {
  userId: number;
  name: string;
  email: string;
  profileId: number;
}) {
  try {
    const response = await api.patch(`/user`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      alert("Falha ao atualizar o usuário");
      console.error("Failed to update the user");
      return { success: false };
    }

    alert("Usuário atualizado com sucesso!");
    return { success: true };
  } catch (error) {
    alert("Falha ao atualizar o usuário");
    console.error("Failed to update the user", error);
    return { success: false };
  }
}
