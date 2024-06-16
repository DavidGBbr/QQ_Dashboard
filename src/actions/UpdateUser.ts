export async function updateUser(user: {
  userId: number;
  name: string;
  email: string;
  profileId: number;
}) {
  const response = await fetch(`http://localhost:3333/user`, {
    next: { revalidate: 0 },
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    console.error("Failed to update the user");
    return { success: false };
  }

  return { success: true };
}
