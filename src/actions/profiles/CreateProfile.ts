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
    console.error("Failed to create a profile");
    return;
  }

  await response.json();
}
