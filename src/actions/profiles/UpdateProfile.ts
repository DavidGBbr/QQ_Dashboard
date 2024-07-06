import axios from "axios";

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

  try {
    const response = await axios.patch<ResponseType>("/profile", profile, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const associated = response.data;

    alert(
      associated.associated
        ? "Perfil atualizado: módulo vinculado!"
        : "Perfil atualizado: módulo desvinculado!"
    );
  } catch (error) {
    alert("Falha ao atualizar o perfil");
    console.error("Failed to update the profile", error);
  }
}
