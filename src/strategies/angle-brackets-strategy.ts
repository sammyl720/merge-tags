import { TagStrategy } from "../definitions";

export class AngleBracketsStrategy implements TagStrategy {
    get opener(): string {
        return "<";
    }
    get closer(): string {
        return ">";
    }
}