async function fetchUser(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (response.status === 404) {
    return {
      id: userId,
      name: "Default User",
      email: "default@example.com",
    };
  }

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}
async function testFetchUser() {
  const existingUser = await fetchUser(1);
  console.log("Existing user:", existingUser);

  const missingUser = await fetchUser(999);
  console.log("Missing user:", missingUser);
}

testFetchUser();
