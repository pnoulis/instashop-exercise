import Parse from "parse/lib/node/Parse.js";

Parse.initialize(process.env.APP_ID, "", process.env.MASTER_KEY);
Parse.serverURL = process.env.PUBLIC_SERVER_URL;

const user = new Parse.User();
user.set("username", "admin");
user.set("password", "admin");
console.log(user.get("username"));
user
  .logIn()
  .then((args) => console.log(args.attributes))
  .catch((err) => console.log(err));

// const qUser = new Parse.Query("User");
// const admin = await qUser
//   .equalTo("username", "admin")
//   .first()
//   .then((record) => ({
//     id: record.id,
//     ...record.attributes,
//   }));
// console.log(admin);

// // const res = await qUser
// //   .find({ username: "admin" })
// //   .then((users) =>
// //     users.map((user) => ({
// //       id: user.id,
// //       ...user.attributes,
// //     })),
// //   )
// //   .pop();

// // console.log(res);
