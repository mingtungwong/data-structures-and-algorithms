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

    add(value: any, index?: number): void {
        if(index !== undefined) {
            for(let i: number = this.currentIndex; i > index; i--) {
                this.array[i] = this.array[i - 1];
            }
            this.array[index] = value;
            this.currentIndex++;
        }
        else this.array[this.currentIndex++] = value;
        if(this.currentIndex / this.capacity > this.threshold) this.doubleCapacity();
    }

    print(): void {
        for(let value of this.array) {
            console.log(value);
        }
    }

    private doubleCapacity(): void {
        this.capacity *= 2;
        let newArray = new Array(this.capacity);
        for(let i: number = 0; i < this.currentIndex; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }
}