// Import the coinFlip function from your coin.mjs file
import { coinFlip } from "./modules/coin.mjs";
import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";
import { flipACoin } from "./modules/coin.mjs";
var arr = coinFlips(10)
for (var i=0; i< arr.length; i++){
    console.log(arr[i])
}
console.log(countFlips(arr))
console.log(flipACoin('heads'))
//console.log(coinFlip())
// Call the coinFlip function and put the return into STDOUT
