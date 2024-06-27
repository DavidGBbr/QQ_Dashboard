export async function updateModule(formData: FormData) {
  const module = {
    moduleId: Number(formData.get("moduleId")),
    name: formData.get("name") as string,
  };

  const response = await fetch("http://localhost:3333/module", {
    next: { revalidate: 0 },
    method: "PATCH",
    body: JSON.stringify(module),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed to update the module");
    return;
  }

  await response.json();
}
