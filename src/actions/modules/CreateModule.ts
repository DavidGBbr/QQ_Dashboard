import { redirect } from "next/navigation";

export async function createModule(formData: FormData) {
  const moduleData = {
    name: formData.get("nameModule") as string,
  };

  const response = await fetch("http://localhost:3333/module", {
    next: { revalidate: 0 },
    method: "POST",
    body: JSON.stringify(moduleData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    alert("Falha ao criar o módulo");
    console.error("Failed to create a module");
    return;
  }

  await response.json();
  alert("Módulo criado com sucesso!");
  redirect("/modules");
}
