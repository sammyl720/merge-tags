import { TagStrategy } from "../definitions";

export class SquareBracketStrategy implements TagStrategy {
    get opener(): string {
        return "[";
    }
    get closer(): string {
        return "]";
    }
}