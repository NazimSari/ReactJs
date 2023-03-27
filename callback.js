// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((data) => data.json())
//   .then((users) => {
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//       .then((data) => data.json())
//       .then((posts) => console.log(posts));
//   });

// async function getData() {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/")
//   ).json();
//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//   ).json();
//   console.log("users", users);
//   console.log("post1", post1);
// }
// getData();
// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users/"
//   );
//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts?userId=1"
//   );
//   console.log("users", users);
//   console.log("post1", post1);
// })();

// SORUNUN ÇÖZÜMÜ

import fetch from "node-fetch";
import axios from "axios";
const getUsers = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    resolve(data);
  });
};
const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    resolve(data);
  });
};
(async () => {
  const users = await getUsers(1);
  const post = await getPost(1);
  console.log(users);
  console.log(post);
})();
