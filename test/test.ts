import * as Fin from "finnlp";
import "../src/index";
const inst = new Fin.Run("This is gr8");
if(inst.intercepted.indexOf("great") === -1) {
    console.log("test failed");
    console.log(new Fin.Run("This is gr8").intercepted);
    process.exit(1);
}