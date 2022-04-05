export interface FileSource {
  type: 'file';
  path: string;
}

export type SourceType = FileSource;

export class CWSCompiler {
  public index: CompilationIndex;
  constructor(public sources: SourceType[] = []) {}

  buildIndex() {}
}
