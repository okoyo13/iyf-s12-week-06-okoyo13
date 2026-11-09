async function fetchData(url, name) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${name}`);
  }

  const data = await response.json();

  console.log(`${name} completed:`, data);

  return data;
}
async function fetchAllData() {
  const results = await Promise.allSettled([
    fetchData("https://jsonplaceholder.typicode.com/users/1", "User"),
    fetchData("https://jsonplaceholder.typicode.com/posts/1", "Post"),
    fetchData("https://jsonplaceholder.typicode.com/todos/1", "Todo"),
  ]);

  console.log("All requests settled:", results);
}

fetchAllData();
