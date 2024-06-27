import toast from "react-hot-toast";

type ResponseType = {
  message: string;
  associated: boolean;
};

export async function updateProfile(formData: FormData) {
  const profile = {
    profileId: Number(formData.get("profileId")),
    moduleId: Number(formData.get("module")),
    name: formData.get("profile") as string,
  };

  const response = await fetch("http://localhost:3333/profile", {
    next: { revalidate: 0 },
    method: "PATCH",
    body: JSON.stringify(profile),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed to update the profile");
    return;
  }

  const associated = (await response.json()) as ResponseType;

  toast.success(
    associated.associated
      ? "Perfil atualizado: módulo vinculado!"
      : "Perfil atualizado: módulo desvinculado!"
  );
}
