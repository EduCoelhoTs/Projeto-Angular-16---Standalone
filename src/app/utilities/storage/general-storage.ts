import { BehaviorSubject } from "rxjs";

export class GeneralStorage {

    protected storage: Object | any = {}

    constructor() { }

    public createTopic(name: string): void {
        const topic: BehaviorSubject<any> = new BehaviorSubject([]);
        this.storage[name] = topic;
    }

    public removeTopic(name: string): void {
        delete this.storage[name];
    }

    public getTopic(name: string): BehaviorSubject<any> {
        return this.storage[name]
    }

    public updateTopic(name: string, value: any): void {
        this.storage[name].next(value);
    }

    public clearTopic(name: string): void {
        this.storage[name].next(null);
    }
}