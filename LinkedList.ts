export class LinkedList {
    
    private _head: Node;

    constructor(value: number) {
        this._head = new Node(value);
    }

    print(): void {
        let current: Node = this._head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    find(value: number) {
        let current: Node = this._head;
        while(current) {
            if(current.value === value) return true;
        }
        return false;
    }

    add(value: number): void {
        if(!this._head) this._head = new Node(value);
        else {
            let current: Node = this._head
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
    }

    remove(value: number): boolean {
        let current: Node = this._head;
        let prev: Node;

        while(current) {
            if(current.value === value) {
                if(current === this._head) this._head = current.next;
                else prev.next = current.next;
                return true;
            } else {
                prev = current;
                current = current.next;
            }
        }
        return false;
    }
}

class Node {
    private _value: number;
    private _next: Node;

    constructor(value: number) {
        this._value = value;
        this._next = null;
    }

    get value(): number {
        return this._value;
    }

    get next(): Node {
        return this._next;
    }

    set value(newValue: number) {
        this._value = newValue;
    }

    set next(newNext) {
        this._next = newNext;
    }
}

