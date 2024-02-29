import { TagStrategy } from "../definitions";

export class ParenthesesStrategy implements TagStrategy {
    get opener(): string {
        return "(";
    }
    get closer(): string {
        return ")";
    }
}