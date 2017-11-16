import { LinkedList } from './LinkedList';

export class Stack {

    private _stack: LinkedList;

    constructor() {
        this._stack = new LinkedList();
    }

    push(value: number) {
        this._stack.addToEnd(value);
    }

    pop(): number {
        let result: number = this._stack.removeTail();
        if(result === null) throw new Error("The stack is empty!");
        else return result;
    }

    toString(): string {
        return this._stack.toString().replace(' -> ', ', ');
    }

    print() {
        console.log(this.toString());
    }
}