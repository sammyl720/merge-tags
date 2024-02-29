import { MergeTagType, MergeValues } from "./definitions/index.js";
import { Merger } from "./merge.js";

const merge = new Merger({ type: MergeTagType.AngleBracket, count: 3});

const valueToMerge = "Hi <<<name>>>, good <<<time>>>";

const dictionary: MergeValues = {
    "name": "Bob",
    "time": "afternoon"
}

const result = merge.MergeTags(valueToMerge, dictionary);

console.table({
    original: valueToMerge,
    result,
    dictionary: JSON.stringify(dictionary)
})