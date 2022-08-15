import * as AST from '../ast/nodes';
import * as Rust from '../rust';
import { CWScriptEnv } from '../symbol-table/env';
export interface FileSource {
    file: string;
    ast: AST.SourceFile;
}
export declare type Source = FileSource;
export declare class CWScriptCodegen {
    sources: Source[];
    envs: {
        [filePath: string]: CWScriptEnv;
    };
    constructor(sources: Source[]);
    generateContract(name: string, file?: string): Rust.CodeGroup;
}
