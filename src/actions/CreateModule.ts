import { redirect } from "next/navigation";

export async function createModule(formData: FormData) {
  const module = {
    name: formData.get("nameModule") as string,
  };

  const response = await fetch("http://localhost:3333/module", {
    next: { revalidate: 0 },
    method: "POST",
    body: JSON.stringify(module),
    headers: {
      "Content-Type": "application/json",
    },
  });

  await response.json();
  redirect("/modules");
}
