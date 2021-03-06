export class LinkedList {
    
    private _head: Node;
    private _tail: Node;

    constructor(value?: number) {
        this._tail = this._head = value === undefined ? null : new Node(value);
    }

    /**
     * Logs to console all of the nodes in the linked list.
     */
    print(): void {
        let current: Node = this._head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    /**
     * Searches the linked list for the value, returns true if found, false otherwise.
     * @param value The value to search for
     */
    find(value: number): boolean {
        let current: Node = this._head;
        while(current) {
            if(current.value === value) return true;
        }
        return false;
    }

    /**
     * Adds the value to the end of the linked list.
     * @param value Value to add to the end of the linked list.
     */
    addToEnd(value: number): void {
        if(!this._head) this._tail = this._head = new Node(value);
        else {
            let newNode: Node = new Node(value);
            let prev: Node = this._tail;
            this._tail = this._tail.next = newNode;
            this._tail.prev = prev;
        }
    }

    /**
     * Adds the value to the beginning of the Linked List.
     * @param value Value to add to the beginning of the linked list.
     */
    addToBeginning(value: number) : void {
        if(!this._head) this._tail = this._head = new Node(value);
        else {
            let newNode: Node = new Node(value);
            newNode.next = this._head;
            this._head = this._head.prev = newNode;
        }
    }

    /**
     * Removes the head node and returns the value.
     */
    removeHead(): number {
        if(this._head) {
            let value: number = this._head.value;
            this._head = this._head.next;
            if(this._head !== null) this._head.prev = null;
            else this._tail = null;
            return value;
        }
        else return null;
    }

    /**
     * Removes the tail node and returns the value.
     */
    removeTail(): number {
        if(this._tail) {
            let value: number = this._tail.value;
            this._tail = this._tail.prev;
            if(this._tail !== null) this._tail.next = null;
            else this._head = null;
            return value;
        } else return null;
    }

    //Returns the value of the head of the Linked List.
    getHead(): number {
        return this._head !== null ? this._head.value : null;
    }

    //Returns the value of the tail of the Linked List.
    getTail(): number {
        return this._tail !== null ? this._tail.value : null;
    }

    /**
     * Searches the linked list for the specified value and removes it if found.
     * If found and successfully removed, returns true, false otherwise.
     * @param value Value to remove from the linked list
     */
    remove(value: number): boolean {
        let current: Node = this._head;
        let prev: Node;

        while(current) {
            if(current.value === value) {
                if(current === this._head && current === this._tail) this._tail = this._head = null;
                else if(current === this._head) this.removeHead();
                else if(current === this._tail) this.removeTail();
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                return true;
            } else {
                prev = current;
                current = current.next;
            }
        }
        return false;
    }

    /**
     * Returns a string representation of the Linked List.
     */
    toString(): string {
        let elements: number[] = [];
        let current: Node = this._head;
        while(current) {
            elements.push(current.value);
            current = current.next;
        }
        return elements.join(' -> ');
    }
}

class Node {
    private _value: number;
    private _prev: Node;
    private _next: Node;

    constructor(value: number) {
        this._value = value;
        this._prev = null;
        this._next = null;
    }

    get value(): number {
        return this._value;
    }

    get prev(): Node {
        return this._prev;
    }

    get next(): Node {
        return this._next;
    }

    set value(newValue: number) {
        this._value = newValue;
    }

    set prev(newPrev: Node) {
        this._prev = newPrev;
    }

    set next(newNext: Node) {
        this._next = newNext;
    }
}

