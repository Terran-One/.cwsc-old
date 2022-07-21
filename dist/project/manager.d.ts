export interface ICWSProjectConfig {
    project: {
        name: string;
        version?: string;
        description?: string;
        authors?: string[];
        license?: string;
        readme?: string;
    };
}
export declare class CWSProjectConfig {
    config: ICWSProjectConfig;
    static read(filePath: string): CWSProjectConfig;
    static validate(config: any): config is ICWSProjectConfig;
    constructor(config: ICWSProjectConfig);
    write(filePath: string): void;
}
export declare class CWSProjectManager {
    rootPath: string;
    constructor(fpath: string);
    static createNewProject(name: string, dir: string): CWSProjectManager;
    static isProject(dir: string): boolean;
    static readProject(dir: string): CWSProjectManager;
    getConfig(): CWSProjectConfig;
}
