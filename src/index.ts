/// <reference path="../node_modules/@types/node/index.d.ts" />

import {rules} from "./list";
import * as Fin from "finnlp";
Fin.preProcessors.push(function(string:string){
	for (var index = 0; index < rules.length; index++) {
		var rule = rules[index];
		string = string.replace(rule.regex,rule.replacement);
	}
	return string;
});