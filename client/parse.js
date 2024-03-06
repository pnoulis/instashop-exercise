import Parse from "parse";
import { environment as env } from "env.angular";

Parse.initialize(env.APP_ID, "", env.MASTER_KEY);
Parse.serverURL = env.PUBLIC_SERVER_URL;
const parse = Parse;

export { parse };
