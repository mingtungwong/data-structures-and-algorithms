import { LinkedList } from './LinkedList';

export class Queue {
    private _queue: LinkedList;

    constructor() {
        this._queue = new LinkedList();
    }

    /**
     * Adds the specified value to the end of the queue.
     * @param value Value to add to the end of the queue.
     */
    enqueue(value: number) {
        this._queue.addToEnd(value);
    }

    /**
     * Returns the first element in the queue. Throws an
     * error if the queue is empty.
     */
    dequeue(): number {
        let result: number = this._queue.removeHead();
        if(!result) throw new Error("The queue is empty!");
        else return result;
    }

    /**
     * Returns a string representation of the queue.
     */
    toString(): string {
        return this._queue.toString().replace(' -> ', ', ');
    }
}