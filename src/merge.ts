import { MergeTagOptions, MergeValues, TagStrategy } from "./definitions/index";
import { TagStrategyDecorator } from "./strategies";

export class Merger {
    private get tagLength() {
        return this.strategy.opener.length;
    }

    constructor(private strategy: TagStrategy)
    {
        if (strategy.closer.length !== strategy.opener.length)
        {
            throw new Error("Merger constructor: input strategy opener and closer should have the same length.")
        }
    }

    static From(options: MergeTagOptions)
    {
        return new Merger(TagStrategyDecorator.GetStrategy(options.type, options.count));
    }

    setStrategy(strategy: TagStrategy)
    {
        this.strategy = strategy;
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

            const key = valueToParse.substring(this.tagLength, indexOfClosingTag);
            const value = dictionary[key] ?? `${this.strategy.opener}${key}${this.strategy.closer}`;
            result += value;
            valueToParse = valueToParse.substring(indexOfClosingTag + this.tagLength);
            indexOfNextTag = valueToParse.indexOf(this.strategy.opener);
        }

        result += valueToParse;

        return result;
    }
}
