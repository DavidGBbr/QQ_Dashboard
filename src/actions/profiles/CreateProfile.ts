import toast from "react-hot-toast";

export async function createProfile(formData: FormData) {
  const profile = {
    moduleId: Number(formData.get("module")),
    name: formData.get("profile") as string,
  };

  const response = await fetch("http://localhost:3333/profile", {
    next: { revalidate: 0 },
    method: "POST",
    body: JSON.stringify(profile),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    toast.error("Falha ao criar o perfil");
    console.error("Failed to create a profile");
    return;
  }

  toast.success("Perfil criado com sucesso!");
  await response.json();
}
