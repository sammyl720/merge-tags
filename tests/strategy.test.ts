import "jest";
import { MergeTagType } from '../src/definitions';
import { TagStrategyDecorator } from '../src/strategies';

describe("TagStrategyDecorator", () => {
    it("Can get angle bracket strategy with a count of 3", () => {
        const strategy = TagStrategyDecorator.GetStrategy(MergeTagType.AngleBracket, 3);
        expect(strategy.opener).toBe("<<<");
        expect(strategy.closer).toBe(">>>");
    })
})