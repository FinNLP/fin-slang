import * as Fin from "finnlp";
import "../src/index";
const inst = new Fin.Run("This is gr8");
if(inst.raw.indexOf("great") === -1) process.exit(1);