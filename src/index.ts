import { MergeTagOptions, MergeTagType } from './definitions';
import { Merger } from './merge';

export * from './merge';
export * from './strategies';
export * from './definitions';

const mergerOptions = { type: MergeTagType.Braces, count: 2};

declare global {
    interface Window {
        Merger: Merger;
    }
}

window.Merger = Merger.From(mergerOptions);