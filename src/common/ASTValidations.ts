import { ContractDefn } from "../ast";
import { IASTVisitor } from "./IASTVisitor";

export class ASTValidations implements IASTVisitor {
    visit(contractDefn: ContractDefn): void {
        const regex = /([A-Z]+[a-z0-9]+)/g;
        if (!regex.test(contractDefn.name.text)) {
            throw new Error("Invalid contract name.");
        }
    }
}