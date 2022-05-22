export default interface IMethodGeneric<T> {
    create(tipo: T): Promise<T>;
    update(tipo: T): Promise<T>;
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T>;
}