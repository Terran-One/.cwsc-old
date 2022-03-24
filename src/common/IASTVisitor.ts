import {
    ContractDefn
} from "../ast";

export interface IASTVisitor {
    visit(contractDefn: ContractDefn): void;
}