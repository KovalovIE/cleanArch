import { action, makeAutoObservable } from 'mobx';
import { IRepository } from './IRepository';

export class MobXRepository<T> implements IRepository<T> {
    constructor() {
        makeAutoObservable(this);
    }

    data: T | null = null;

    @action save = (data: T | null): void => {
        this.data = data;
    }
}
