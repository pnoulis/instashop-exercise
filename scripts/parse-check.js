import Parse from "parse/lib/node/Parse.js";

Parse.initialize(process.env.APP_ID, "", process.env.MASTER_KEY);
Parse.serverURL = process.env.PUBLIC_SERVER_URL;

// const Post = Parse.Object.extend("Post");
// // const post = new Post();
// // post.set("body", "hello");
// // post.set("comments", 0);
// // await post.save(null, { useMasterKey: true });
// // console.log(`Post saved: ${post.id}`);
// const query = new Parse.Query("Post");
// query
//   .find()
//   .then((args) => args.map((arg) => arg.attributes))
//   .then((args) => console.log(args));

// const Landmark = new Parse.Query("Landmark");
// const landmarks = await Landmark.find();
// console.log(landmarks);

class Query extends Parse.Query {
  constructor(className) {
    super(className);
  }

  strip(parseResponse) {
    return parseResponse.map((obj) => ({ id: obj.id, ...obj.attributes }));
  }

  find() {
    return super.find().then(this.strip);
  }
}

class LandmarkQuery extends Query {
  constructor() {
    super("Landmark");
  }
  getAll() {
    return new LandmarkQuery().find();
  }
  search(key, value) {
    if (arguments.length === 1) {
      value = key;
      key = "title";
    }
    if (!key || !value) {
      throw new TypeError("Landmark.query() missing arguments");
    }
    return new LandmarkQuery().fullText(key, value).find();
  }
}

class Landmark extends Parse.Object {
  constructor(landmark) {
    super("Landmark", landmark);
  }
}

// const landmark = new LandmarkQuery();
// const response = await landmark.getAll();
// const search = await landmark.search("burj");
// debug(search);

const ln = new Landmark({ title: "yolo " });
const title = ln.get("title");
ln.save(null, { useMasterKey: true });

// class LandmarkQuery {
//   constructor(Parse) {
//     this.Query = Parse.Query;
//   }
// }

// class Landmark extends Parse.Query {
//   constructor() {
//     super("Landmark");
//   }

//   parse(parseObjects) {
//     return parseObjects.map((obj) => ({
//       id: obj.id,
//       ...obj.attributes,
//     }));
//   }

//   getAll() {
//     return super.find().then((landmarks) =>
//       landmarks.map((landmark) => ({
//         id: landmark.id,
//         ...landmark.attributes,
//       })),
//     );
//   }
//   async search(key, value) {
//     if (arguments.length === 1) {
//       value = key;
//       key = "title";
//     }
//     const query = new Parse.Query();
//     await super.fullText(key, value);
//     return super.fullText(key, value).find().then(this.parse);
//   }
// }

// const landmark = new Landmark();

// // const res = await landmark.find();
// const res = await landmark.search("burj").find();
// debug(res);
