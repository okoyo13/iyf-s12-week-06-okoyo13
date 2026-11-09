function task1() {
  return new Promise((resolve) => {
    const delay = Math.random() * 3000;

    setTimeout(() => {
      console.log("Task 1 completed");
      resolve();
    }, delay);
  });
}
function task2() {
  return new Promise((resolve) => {
    const delay = Math.random() * 3000;

    setTimeout(() => {
      console.log("Task 2 completed");
      resolve();
    }, delay);
  });
}
function task3() {
  return new Promise((resolve) => {
    const delay = Math.random() * 3000;

    setTimeout(() => {
      console.log("Task 3 completed");
      resolve();
    }, delay);
  });
}
console.time("Total execution time");

task1()
  .then(() => task2())
  .then(() => task3())
  .then(() => {
    console.timeEnd("Total execution time");
    console.log("All tasks completed!");
  });
