import { IASTVisitor } from "./IASTVisitor";

export interface IValidationVisitable {
    accept(astVisitor: IASTVisitor): void;
}