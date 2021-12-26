interface ErrorType {
    [name: string]: string;
}
interface WithV {
    [key: string]: any;
}
declare class MyForm implements WithV {
    [k: string]: any;
    error: ErrorType;
    defaults: ErrorType | null;
    constructor(defaults?: null);
    hasError(field: string): boolean;
    errorOut(field: string): undefined;
    clearAll(): {};
    clear(field: string): void;
    any(): boolean;
    reset(): this;
}
export default MyForm;
