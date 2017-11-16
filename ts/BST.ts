export class BST {
    private _value: number;
    private _left: BST;
    private _right: BST;

    constructor(value: number) {
        this._value = value;
        this._left = this._right = null;
    }

    insert(value: number) {
        if(value < this._value) {
            if(!this._left) this._left = new BST(value);
            else this._left.insert(value);
        } else {
            if(!this._right) this._right = new BST(value);
            else this._right.insert(value);
        }
    }

    find(value: number): boolean {
        if(this._value === value) return true;
        else {
            if(value < this._value && this._left) return this._left.find(value);
            else if(this._right) return this._right.find(value);
            else return false;
        }
    }
}