import { MergeTagType, TagStrategy } from "../definitions/index.js";
import { AngleBracketsStrategy, CurlyBracesStrategy, ParenthesesStrategy, SquareBracketStrategy } from "./index.js";

export class TagStrategyFactory {
    static getTagStrategy(type: MergeTagType): TagStrategy {
        switch(type)
        {
            case MergeTagType.AngleBracket:
                return new AngleBracketsStrategy();
            case MergeTagType.Braces:
                return new CurlyBracesStrategy();
            case MergeTagType.Parenttheses:
                return new ParenthesesStrategy();
            default:
                return new SquareBracketStrategy();
            
        }
    }
}