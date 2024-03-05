import { createReadStream } from "node:fs";
import { writeFileSync } from "node:fs";
import readline from "node:readline";

const env = {};

const rl = readline.createInterface({
  input: createReadStream(".env"),
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  const [k, v] = line.split("=");
  env[k] = v;
});

rl.on("close", () => {
  console.log(env);
});
