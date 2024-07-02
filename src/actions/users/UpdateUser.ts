import toast from "react-hot-toast";

export async function updateUser(user: {
  userId: number;
  name: string;
  email: string;
  profileId: number;
}) {
  const response = await fetch(`http://localhost:3333/user`, {
    next: { revalidate: 0 },
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    toast.error("Falha ao atualizar o usuário");
    return { success: false };
  }

  toast.success("Usuário atualizado com sucesso!");
  return { success: true };
}
