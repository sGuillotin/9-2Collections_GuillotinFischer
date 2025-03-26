/**
 * IGME-102: 9-2 Exercise: Collection Palooza
 * Homemade Queue class
 *
 * Autumn Fischer 3/25/25
 * Queue: Uses an array and a class to make a DIY Queue
 */

class Queue {
    /**
     * constructor: set queue array & size
     * @param {[]} inputArray, the array used for the queue
     */
    constructor(inputArray = []) {
        //copy the original array to be safe
        this.array = inputArray.slice();
        this.size = this.array.length;
    }

    /**
     * dequeue: remove and return the item from the front of the queue
     * update the length
     * @returns {*} dequeued item
     */
    dequeue() {
        let item = this.array.pop();
        this.size = this.array.length;

        return item;
    }

    /**
     * enqueue: add a new item to the end of the queue
     * update the length
     * @param {*} object enqueued item
     */
    enqueue(object) {
        this.array.unshift(object);
        this.size = this.array.length;
    }

    /**
     * peek: gives the item from the front of the queue
     * returns undefined if the queue is empty
     * @returns {*} item at the front of the queue
     */
    peek() {
        //get last item in array
        return this.array[this.array.length - 1];
    }

    /**
     * includes: determines whether an item is in the queue
     * @param {*} inQueue item you are searching for
     * @returns {boolean} true if the item is in the queue, false otherwise
     */
    includes(inQueue) {
        return this.array.includes(inQueue);
    }

    /**
     * clear: empty the queue
     * update the length
     */
    clear() {
        this.array.splice(0);
        this.size = this.array.length;
    }

    /**
     * toString: returns a string containing the length and contents of the queue
     * @returns {string} string of the size and the items in the queue
     */
    toString() {
        return "("+ this.size + "){" + this.array.toString() + "}";
    }
}