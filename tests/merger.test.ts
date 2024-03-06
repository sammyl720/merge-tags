import { MergeTagType } from "../src/definitions";
import { Merger } from "../src/merge";


describe("Merger", () => {
    const merger = Merger.From({
        type: MergeTagType.Braces,
        count: 2
    });
    const inputText = "Hello {{name}}, How can I assist you {{time}}?";

    it("Can merge texts", () => {

        const inputDictionary = {
            name: "Bob",
            time: "this evening"
        };

        const expectedResult = "Hello Bob, How can I assist you this evening?";

        const result = merger.MergeTags(inputText, inputDictionary);
        expect(result).toBe(expectedResult);
    });

    it("Can keep texts that don't have a replacement value", () => {
        const inputDictionary = {
            time: "this evening"
        };

        const expectedResult = "Hello {{name}}, How can I assist you this evening?";

        const result = merger.MergeTags(inputText, inputDictionary);
        expect(result).toBe(expectedResult);
    });
});