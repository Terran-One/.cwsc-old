
export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      toContainUse(received: any, value?: any): R;
      toContainRust(received: any, value?: any): R;
      toContainAnnotation(received: any, value?: any): R;
    }
  }
}