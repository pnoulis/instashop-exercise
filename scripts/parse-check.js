import Parse from "parse/lib/node/Parse.js";

Parse.initialize(process.env.APP_ID, "", process.env.MASTER_KEY);
Parse.serverURL = process.env.PUBLIC_SERVER_URL;

const landmark = new Parse.Object("Landmark");
const query = new Parse.Query(landmark);

const response = await query.find();
const first = response.at(0);
first.set("title", first.get("title") + " 2");

const admin = await Parse.User.logIn("admin", "admin");
const saved = await first.save(null, { useMasterKey: true });
debug(saved);
