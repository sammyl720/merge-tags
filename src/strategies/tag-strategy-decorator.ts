import { MergeTagType, TagStrategy } from "../definitions/index.js";
import { TagStrategyFactory } from "./tag-strategy-factory.js";

export class TagStrategyDecorator implements TagStrategy {

    private constructor(private innerStrategy: TagStrategy, private count = 1)
    {

    }

    get opener()
    {
        return this.innerStrategy.opener.repeat(this.count);
    }

    get closer()
    {
        return this.innerStrategy.closer.repeat(this.count);
    }

    static GetStrategy(type: MergeTagType, count = 1)
    {
        const innerStrategy = TagStrategyFactory.getTagStrategy(type);
        return new TagStrategyDecorator(innerStrategy, count); 
    }

}