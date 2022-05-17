import * as fs from 'fs';
import * as path from 'path';
import * as toml from '@iarna/toml';
import * as glob from 'glob';

export interface ICWSProjectConfig {
  project: {
    name: string;
    version: string;
    description?: string;
    authors?: string[];
    license?: string;
    readme?: string;
  };
}
export class CWSProjectConfig {
  public static read(filePath: string): CWSProjectConfig {
    let config = toml.parse(fs.readFileSync(filePath, 'utf8'));
    if (CWSProjectConfig.validate(config)) {
      return new CWSProjectConfig(config);
    } else {
      throw new Error(
        `Invalid cwsproject.toml project configuration: ${filePath}`
      );
    }
  }

  public static validate(config: any): config is ICWSProjectConfig {
    try {
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(public config: ICWSProjectConfig) {}

  public write(filePath: string) {
    fs.writeFileSync(filePath, toml.stringify(this.config as any));
  }
}

export class CWSProjectManager {
  public rootPath: string;
  constructor(fpath: string) {
    this.rootPath = path.resolve(fpath);
  }

  public static createNewProject(name: string, dir: string): CWSProjectManager {
    let pRoot = path.resolve(dir);
    let pSrc = path.join(pRoot, 'src');
    let pCwsprojectToml = path.join(pRoot, 'cwsproject.toml');

    fs.mkdirSync(pSrc, { recursive: true });
    fs.writeFileSync(
      pCwsprojectToml,
      toml.stringify({ project: { name, version: '0.1.0' } })
    );
    return new CWSProjectManager(pRoot);
  }

  public static isProject(dir: string): boolean {
    let hasToml = fs.existsSync(path.join(dir, 'cwsproject.toml'));
    let hasSrc = fs.existsSync(path.join(dir, 'src'));
    return hasToml && hasSrc;
  }

  public static readProject(dir: string): CWSProjectManager {
    if (CWSProjectManager.isProject(dir)) {
      return new CWSProjectManager(dir);
    } else {
      throw new Error(
        `${dir} is not a CWScript project. Run 'cwsc new' to create a new project.`
      );
    }
  }

  public getConfig(): CWSProjectConfig {
    let pCwsprojectToml = path.join(this.rootPath, 'cwsproject.toml');
    return CWSProjectConfig.read(pCwsprojectToml);
  }

  public getSources(): string[] {
    let pSrc = path.join(this.rootPath, 'src');
    return glob.sync('**/*.cws', { cwd: pSrc, absolute: true, nodir: true });
  }
}
