/**
 * Sebastien Guillotin, Autumn Fischer 3/21/25
 * IGME-102: 9-2 Exercise: Collection Palooza
 * Homemade Queue class
 */

class Queue{
    /**
     * constructor: set queue array & size
     * properties
     * @param {[]} qArray, default []
     */
    constructor(qArray = []){  //be able to accept parameter as a starting array
            //default to an empty array
        //this.array = qArray;  //sets equal to THE array- stomping on the array
        //copy og array to be model for queue/queue backbone/queuebone
        this.array = qArray.slice();  //copy from [] (all)
        this.size = this.array.size;
    }


    /**
     * dequeue: remove item from front
     * of queue and return it
     * @returns {*} dequeued item
     */
    dequeue(){
        let val = this.array.pop();
        this.size = this.array.length;  //note size vs length
            //length for 1D, size for objects??
        return val;
    }


    /**
     * enqueue: add new data to end of queue
     * and update its size
     * @param {*} data addition to queue
     */
    enqueue(data){
        this.array.unshift(data);
        this.size = this.array.length;
    }


    /**
     * peek: return item at front of queue 
     * (or undefined if empty)
     * @returns {*} item at front of queue (or undefined)
     */
    peek(){
        //array[index] last item in array
        return this.array[this.array.length - 1];
    }


    /**
     * includes: return whether given item
     * is in the queue
     * @param {*} item item to search for
     * @returns {boolean} true if present
     */
    includes(item){
        return this.array.includes(item);
    }


    /**
     * clear: empty queue array &
     * update size
     */
    clear() {
        this.array.splice(0);
        this.size = this.array.length;
    }


    /**
     * toString: returns string of size & array contents as one
     * prints contents as comma separated list
     *      - connect with .split() possible?
     * @returns {string} array size + array
     * contents of string
     */
    toString(){
        return "("+ this.size + ") {" + this.array.toString() + "}";
        //plain version: return this.array.toString();
    }
}