/**
 * Sebastien Guillotin, Autumn Fischer 3/21/25
 * IGME-102: 9-2 Exercise: Collection Palooza
 * Homemade Stack class
 */

class Stack{
    /**
     * constructor: set stack array & size
     * properties
     * @param {[]} sArray, default []
     */
    constructor(sArray = []){  //be able to accept parameter as a starting array
            //default to an empty array
        //this.array = sArray;  //sets equal to THE array- stomping on the array
        //copy og array to be model for Stack/stack backbone/stackbone
        this.array = sArray.slice();  //copy from [] (all)
        this.size = this.array.size;
    }


    /**
     * pop: remove item from top
     * of stack and return it
     * @returns {*} popped item
     */
    pop(){
        let val = this.array.pop();
        this.size = this.array.length;  //note size vs length
            //length for 1D, size for objects??
        return val;
    }


    /**
     * push: add new data to end/top of stack
     * and update its size
     * @param {*} data addition to stack
     */
    push(data){
        this.array.push(data);
        this.size = this.array.length;
    }


    /**
     * peek: return item at top of stack (think MTG "The Stack")
     * (or undefined if empty)
     * @returns {*} item at top of stack (or undefined)
     */
    peek(){
        //array[index] last item in array
        return this.array[this.array.length - 1];
    }


    /**
     * includes: return whether given item
     * is in the stack
     * @param {*} item item to search for
     * @returns {boolean} true if present
     */
    includes(item){
        return this.array.includes(item);
    }


    /**
     * clear: empty stack array &
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