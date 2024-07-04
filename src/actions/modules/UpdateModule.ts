export async function updateModule(formData: FormData) {
  const moduleData = {
    moduleId: Number(formData.get("moduleId")),
    name: formData.get("name") as string,
  };

  const response = await fetch("http://localhost:3333/module", {
    next: { revalidate: 0 },
    method: "PATCH",
    body: JSON.stringify(moduleData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    alert("Falha ao atualizar o módulo");
    console.error("Failed to update the module");
    return;
  }

  await response.json();
  alert("Módulo atualizado com sucesso!");
}
