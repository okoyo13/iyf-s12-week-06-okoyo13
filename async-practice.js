// Synchronous - blocks until complete

console.log("1 - Start");
console.log("2 - Middle");
console.log("3 - End");
// Asynchronous - doesn't block

console.log("1 - Start");

setTimeout(() => {
  console.log("2 - This is delayed");
}, 2000);

console.log("3 - End");
// Predict the output

console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

setTimeout(() => console.log("D"), 100);

console.log("E");
// Exercise 2: Callback Pattern

// Old-style callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

fetchData(function (data) {
  console.log("Data received:", data);
});
// Build: Create a function that simulates loading user data

function loadUser(userId, callback) {
  // Simulate 1.5 second database lookup
  setTimeout(() => {
    const user = {
      id: userId,
      name: "John",
      age: 30,
    };

    // Call callback with user object
    callback(user);
  }, 1500);
}
loadUser(101, function (user) {
  console.log("User loaded:", user);
});
// ============================================
// TASK 11.2 - EXERCISE 1: CALLBACK HELL
// ============================================

// Get user data
function getUserData(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: "John" });
  }, 1000);
}

// Get user posts
function getUserPosts(userId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ]);
  }, 1000);
}

// Get post comments
function getPostComments(postId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, text: "Great post!" },
      { id: 2, text: "Thanks for sharing" },
    ]);
  }, 1000);
}

// The nightmare: Callback Hell
getUserData(1, function (user) {
  console.log("User:", user);

  getUserPosts(user.id, function (posts) {
    console.log("Posts:", posts);

    getPostComments(posts[0].id, function (comments) {
      console.log("Comments:", comments);
    });
  });
});
// ============================================
//  EXERCISE 2: INTRODUCTION TO PROMISES
// ============================================

// Create a Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise completed successfully!");
  }, 2000);
});

// Handle the Promise
myPromise.then((result) => {
  console.log(result);
});
// Promise rejection
const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong!");
  }, 2000);
});

// Handle the rejection
failedPromise.catch((error) => {
  console.log("Error:", error);
});
// Promise chaining
const chainedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Step 1 completed");
  }, 1000);
});

chainedPromise
  .then((result) => {
    console.log(result);
    return "Step 2 completed";
  })
  .then((result) => {
    console.log(result);
    return "Step 3 completed";
  })
  .then((result) => {
    console.log(result);
  });
// Refactor getUserData to return a Promise
function getUserDataPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "John" });
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}
getUserDataPromise(1)
  .then((user) => {
    console.log("Promise User:", user);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
// Refactor getUserPosts to return a Promise
function getUserPostsPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve([
          { id: 1, title: "Post 1" },
          { id: 2, title: "Post 2" },
        ]);
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}
getUserPostsPromise(1)
  .then((posts) => {
    console.log("Promise Posts:", posts);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
// Refactor getPostComments to return a Promise
function getPostCommentsPromise(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId > 0) {
        resolve([
          { id: 1, text: "Great post!" },
          { id: 2, text: "Thanks for sharing" },
        ]);
      } else {
        reject("Invalid post ID");
      }
    }, 1000);
  });
}
getPostCommentsPromise(1)
  .then((comments) => {
    console.log("Promise Comments:", comments);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
// Combine all three Promises using chaining
getUserDataPromise(1)
  .then((user) => {
    console.log("User:", user);
    return getUserPostsPromise(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return getPostCommentsPromise(posts[0].id);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
// ============================================
// TASK 11.3 - EXERCISE 2: PROMISE.ALL
// ============================================

// Run multiple promises in parallel
const promise1 = getUserDataPromise(1);
const promise2 = getUserDataPromise(2);
const promise3 = getUserDataPromise(3);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All users:", results);
  })
  .catch((error) => {
    console.error("One failed:", error);
  });
// ============================================
// TASK 11.3 - EXERCISE 3: PROMISE.RACE
// ============================================

// First to complete wins
const fast = new Promise((resolve) => setTimeout(() => resolve("Fast!"), 100));

const slow = new Promise((resolve) => setTimeout(() => resolve("Slow!"), 500));

Promise.race([fast, slow]).then((result) => {
  console.log("Winner:", result);
});
// ============================================
// TASK 11.4 - EXERCISE 1: ASYNC/AWAIT
// ============================================

async function getDataWithAsync() {
  const user = await getUserDataPromise(1);
  const posts = await getUserPostsPromise(user.id);
  const comments = await getPostCommentsPromise(posts[0].id);

  return comments;
}

// Using the async function
getDataWithAsync().then((comments) => {
  console.log("Async/Await Comments:", comments);
});
// ============================================
// TASK 11.4 - EXERCISE 2: ERROR HANDLING
// ============================================

async function fetchUserData(userId) {
  try {
    const user = await getUserDataPromise(userId);
    const posts = await getUserPostsPromise(user.id);

    return { user, posts };
  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error;
  }
}

// Using the function
fetchUserData(1)
  .then((result) => {
    console.log("Fetched User Data:", result);
  })
  .catch((error) => {
    console.log("Final Error:", error);
  });
// ============================================
// TASK 11.4 - EXERCISE 3: PARALLEL ASYNC/AWAIT
// ============================================

async function getAllUsers() {
  // Sequential (slow)
  const user1 = await getUserDataPromise(1);
  const user2 = await getUserDataPromise(2);
  const user3 = await getUserDataPromise(3);

  // Parallel (fast)
  const [u1, u2, u3] = await Promise.all([
    getUserDataPromise(1),
    getUserDataPromise(2),
    getUserDataPromise(3),
  ]);

  return [u1, u2, u3];
}

// Using the function
getAllUsers().then((users) => {
  console.log("All Users with Async/Await:", users);
});
// ============================================
// TASK 11.4 - BUILD: REWRITE CALLBACK HELL
// ============================================

async function getDataWithoutCallbackHell() {
  try {
    const user = await getUserDataPromise(1);
    console.log("User:", user);

    const posts = await getUserPostsPromise(user.id);
    console.log("Posts:", posts);

    const comments = await getPostCommentsPromise(posts[0].id);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Error:", error);
  }
}

getDataWithoutCallbackHell();
// ============================================
// TASK 12.1 - EXERCISE 1: YOUR FIRST FETCH
// ============================================

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log("Response object:", response);
    console.log("Status:", response.status);
    console.log("OK:", response.ok);

    return response.json();
  })
  .then((data) => {
    console.log("User data:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
// ============================================
// TASK 12.1 - EXERCISE 2: FETCH WITH ASYNC/AWAIT
// ============================================

async function getUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

async function main() {
  const user = await getUser(1);
  console.log("Async/Await User:", user);
}

main();
