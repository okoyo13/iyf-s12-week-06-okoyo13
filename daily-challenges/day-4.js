function getUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "John",
      });
    }, 1000);
  });
}
function getUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Post 1", userId: userId },
        { id: 2, title: "Post 2", userId: userId },
      ]);
    }, 1000);
  });
}
function getPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Great post!", "Thanks for sharing"]);
    }, 1000);
  });
}
async function displayUserData() {
  const user = await getUserData(1);
  console.log("User:", user);

  const posts = await getUserPosts(user.id);
  console.log("Posts:", posts);

  const comments = await getPostComments(posts[0].id);
  console.log("Comments:", comments);
}

displayUserData();
