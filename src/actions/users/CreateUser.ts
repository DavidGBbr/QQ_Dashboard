import { redirect } from "next/navigation";

export async function createUser(formData: FormData) {
  const user = {
    name: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    profileId: 1,
  };

  const response = await fetch("http://localhost:3333/user", {
    next: { revalidate: 0 },
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    alert("Falha ao criar o usuário");
    console.error("Failed to create a user");
    return;
  }

  await response.json();
  alert("Usuário criado com sucesso!");
  redirect("/users");
}
