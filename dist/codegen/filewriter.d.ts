import * as Rust from '../rust';
export declare class FileWriter {
    constructor();
    writeContract(p: string, contractName: string, contractRustCode: Rust.CodeGroup): void;
}
