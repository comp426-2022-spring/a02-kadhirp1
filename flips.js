//Script for testing number of flips
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const args = require("minimist")(process.argv.slice(2))
import { coinFlip } from "./modules/coin.mjs";
import { coinFlips } from "./modules/coin.mjs";
args["number"]

console.log(coinFlips(args.number))