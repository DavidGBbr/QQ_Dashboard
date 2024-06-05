import { redirect } from "next/navigation";

export async function authUser(formData: FormData) {
  const session = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const response = await fetch("http://localhost:3333/session", {
    next: { revalidate: 0 },
    method: "POST",
    body: JSON.stringify(session),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const userData = await response.json();
  if (userData.name) {
    redirect("/users");
  }
}
