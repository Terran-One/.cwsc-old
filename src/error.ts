export class ASTValidationError extends Error {
  constructor(public message: string) {
    super(message);
  }
}
