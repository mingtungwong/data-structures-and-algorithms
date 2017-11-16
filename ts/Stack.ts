import { LinkedList } from './LinkedList';

export class Stack {

    private _stack: LinkedList;

    constructor() {
        this._stack = new LinkedList();
    }

    /**
     * Pushes the value to the top of the stack.
     * @param value Value to push onto Stack.
     */
    push(value: number) {
        this._stack.addToEnd(value);
    }

    /**
     * Pops the value from the top of the stack and returns it.
     */
    pop(): number {
        let result: number = this._stack.removeTail();
        if(result === null) throw new Error("The stack is empty!");
        else return result;
    }

    /**
     * Returns the value at the top of the stack without removing it.
     */
    peek(): number {
        return this._stack.getTail();
    }

    /**
     * Returns a string representation of the stack.
     */
    toString(): string {
        return this._stack.toString().replace(' -> ', ', ');
    }

    /**
     * Outputs to console a string representation of the stack.
     */
    print() {
        console.log(this.toString());
    }
}