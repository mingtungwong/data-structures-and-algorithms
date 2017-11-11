export class DynamicArray {

    private array: any[];
    private capacity: number;
    private threshold: number;
    private currentIndex: number;

    constructor(capacity: number) {
        this.array = new Array(capacity);
        this.capacity = capacity;
        this.threshold = 0.8;
        this.currentIndex = 0;
    }

    /**
     * Adds value to the end of array. If index is provided, value is placed in
     * that index. If index is before the last element then everything after
     * the insertion is shifted down.
     * @param value The value to insert into array
     * @param index Optional, index location of array to insert value into
     */
    add(value: any, index?: number): void {
        if(index !== undefined) {
            if(index < 0 || index >= this.capacity) throw new Error("Array Index Out of Bounds");
            for(let i: number = this.currentIndex; i > index; i--) {
                this.array[i] = this.array[i - 1];
            }
            this.array[index] = value;
            this.currentIndex++;
        }
        else this.array[this.currentIndex++] = value;
        if(this.currentIndex / this.capacity > this.threshold) this.doubleCapacity();
    }

    /**
     * Searches for the value in the array linearly and returns the index of
     * the first occurence of value. Returns -1 if not found.
     * @param value The value to search for
     */
    indexOf(value: number): number {
        for(let i: number = 0; i < this.currentIndex; i++) {
            if(value === this.array[i]) return i;
        }
        return -1;
    }

    /**
     * Searches for value linearly starting at the end of the array and returns
     * the index of the first occurence of value. Returns -1 if not found.
     * @param value The value to search for
     */
    lastIndexOf(value: number): number {
        for(let i: number = this.currentIndex - 1; i >= 0; i--) {
            if(value === this.array[i]) return i;
        }
        return -1;
    }

    /**
     * Returns the size/capacity of the array.
     */
    size(): number {
        return this.capacity;
    }

    /**
     * Logs to console all the values in the array.
     */
    print(): void {
        for(let value of this.array) {
            console.log(value);
        }
    }

    /**
     * Doubles the size/capacity of the array when the array surpasses the specified threshold.
     */
    private doubleCapacity(): void {
        this.capacity *= 2;
        let newArray = new Array(this.capacity);
        for(let i: number = 0; i < this.currentIndex; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }
}