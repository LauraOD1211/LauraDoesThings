import { Vocab } from "./vocab";
export interface Vocablist {
    _id: string;
    topic: string;
    vocab: Vocab[];
}