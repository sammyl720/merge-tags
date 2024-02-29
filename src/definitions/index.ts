
export interface MergeTagOptions {
    type: MergeTagType;
    count: number;
}

export enum MergeTagType {
    AngleBracket,
    Parenttheses,
    Braces,
    SquareBrackets,
}

export interface MergeValues {
    [key: string]: string;
}

export interface TagStrategy {
    opener: string;
    closer: string;
}