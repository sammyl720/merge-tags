import { MergeTagOptions, MergeTagType, MergeValues, TagStrategy } from "./definitions/index.js";
import { TagStrategyDecorator } from "./strategies/index.js";

export class Merger {
    private strategy: TagStrategy;

    constructor(private options: MergeTagOptions = { type: MergeTagType.Braces, count: 1})
    {
        this.strategy = TagStrategyDecorator.GetStrategy(options.type, options.count);
    }

    MergeTags(value: string, dictionary: MergeValues)
    {
        let valueToParse = value;
        let result = "";
        let indexOfNextTag = valueToParse.indexOf(this.strategy.opener);
        while(indexOfNextTag != -1)
        {
            result += valueToParse.substring(0, indexOfNextTag);
            valueToParse = valueToParse.substring(indexOfNextTag);
            const indexOfClosingTag = valueToParse.indexOf(this.strategy.closer);
            if (indexOfClosingTag == -1)
            {
                throw new Error("Expected closing " + this.strategy.closer);
            }

            const key = valueToParse.substring(this.options.count, indexOfClosingTag);
            const value = dictionary[key] ?? "";
            result += value;
            valueToParse = valueToParse.substring(indexOfClosingTag + this.options.count);
            indexOfNextTag = valueToParse.indexOf(this.strategy.opener);
        }

        return result;
    }
}
