//Guess the flip
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const args = require("minimist")(process.argv.slice(2))
import { coinFlip } from "./modules/coin.mjs";
import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";
import { flipACoin } from "./modules/coin.mjs";

args["call"]
console.log(flipACoin(args.call))