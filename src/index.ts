import {rules} from "./list";

export default function(string:string):string{
	rules.forEach((rule)=>{
		string = string.replace(rule.regex,rule.replacement);
	});
	return string;
}