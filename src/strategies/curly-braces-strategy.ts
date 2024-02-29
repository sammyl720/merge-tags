import { TagStrategy } from "../definitions";

export class CurlyBracesStrategy implements TagStrategy {
    get opener(): string {
        return "{";
    }
    get closer(): string {
        return "}";
    }
}