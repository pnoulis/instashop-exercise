import Parse from "parse/lib/node/Parse.js";

Parse.initialize(process.env.APP_ID, "", process.env.MASTER_KEY);
Parse.serverURL = process.env.PUBLIC_SERVER_URL;

const Post = Parse.Object.extend("Post");
// const post = new Post();
// post.set("body", "hello");
// post.set("comments", 0);
// await post.save(null, { useMasterKey: true });
// console.log(`Post saved: ${post.id}`);
const query = new Parse.Query("Post");
query
  .find()
  .then((args) => args.map((arg) => arg.attributes))
  .then((args) => console.log(args));
