import express from "express";
import { ParseServer } from "parse-server";
import { default as ParseDashboard } from "parse-dashboard";
import { URL } from "node:url";

const url = new URL(process.env.SERVER_URL);
const config = {
  appName: process.env.APP_NAME,
  port: process.env.PORT || 5000,
  databaseURI: process.env.DB_URI,
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  serverUrl: url.href,
  mountPath: url.pathname || "/",
  allowClientClassCreation: false,
  allowExpiredAuthDataToken: false,
  encodeParseObjectInCloudFunction: true,
};
console.log(config);

try {
  const api = new ParseServer(config);
  const dashboard = ParseDashboard({
    apps: [
      {
        ...config,
        allowInsecureHTTP: true,
        production: false,
      },
    ],
  });
  await api.start();

  const parsed = express();
  parsed.use("/", (req, res, next) => {
    console.log(`[PARSED REQ ${req.method}] ${req.path}`);
    res.on("finish", () => {
      console.log(`[PARSED RES] ${res.statusCode}`);
    });
    return next();
  });
  parsed.use("/dashboard", dashboard);
  parsed.use(config.mountPath, api.app);
  parsed.listen(config.port, () => {
    console.log(`\n\nparsed started at: ${config.serverUrl}`);
    console.log(`dashboard started at: ${url.origin}/dashboard`);
  });
} catch (err) {
  console.error(err);
  console.error(`\n\nFailed to start parsed`);
}
