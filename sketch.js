/**
 * Sebastien Guillotin, Autumn Fischer 3/21/25
 * IGME-102: 9-2 Exercise: Collection Palooza
 * Testing every method/function/property option
 * we have learned for each data type.
 * 
 * Every which way of Arrays, Objects, Maps,
 * Sets, Iterators, DIY Stacks, and DIY Queues.
 * 
 * Overview of work: copy Queue and Stack files from class,
 * then do the rest of this project (declearing + testing) in sketch.
 * I have copied my class notes, but we can use Professor Harris's
 * if preferred/mine break.
 * 
 * TODO: use functions to break up all this testing mess
 */

"use strict"; //catch some common coding errors

/* Global variables */
//maps:
const sayMap = new Map();
//sets:
let newSet;
let sigmaSet;
let alphaArray;


/**
 * setup: run all tester functions here
 */
function setup() {
   createCanvas(400, 400);

   console.log("debugging...");
      //best way to animate ./../...?
}


/**
 * function to hold the setup() code for all
 * Stack actions
 */
function stackTester(){
   let testStack = new Stack();
   console.log("empty stack?", testStack);
   testStack = new Stack([3,4, 5,6,78]); //how does this affect
   // first instance of testStack?
   // references vs addresses...?
   console.log("num stack?", testStack);
   //destructive?
   const testArr = [4,5,6]; //make an arr that is its own var
   const safeStack = new Stack(testArr); //make a stack from this array
   //pop a val from safe stack
   safeStack.pop();
   console.log("testArr", testArr, "\nsafeStack", safeStack);
   //testArr is safe! nice


   //test .pop
   console.log("testStack.size", testStack.size);
   console.log("pop stack", testStack.pop(), testStack.size);
   console.log("pop stack", testStack.pop(), testStack.size);
   console.log("pop stack", testStack.pop(), testStack.size);


   //test .push
   testStack.push("hey");
   console.log(testStack, testStack.size);
   testStack.push("ho");
   console.log(testStack, testStack.size);
   testStack.push("hooray");
   console.log(testStack, testStack.size);
   console.log("pop stack", testStack.pop(), testStack.size);


   //test .peek
   testStack.push("howdy");
   console.log("pushed hody. peek?", testStack.peek());
   //pop everything from testStack-
   //no probs with empty stack?
   testStack.clear();
   console.log("empty stack peek?", testStack.peek());


   //test .includes
   //false if not included?
   console.log("testStack.includes('45')", testStack.includes("45"));
   console.log("pushing hi, hooray, ho (separately)");
   // testStack.push("hi", "hooray, "ho");
   testStack.push("hi");
   testStack.push("hooray");
   testStack.push("ho");
   console.log("pushed hi, hooray, ho?", testStack);
   console.log(".includes('hooray')", testStack.includes("hooray"));


   //test .clear
   console.log("testStack.clear()");
   testStack.clear();
   console.log("cleared stack?", testStack);


   //testing toString
   testStack.push("hi")
   testStack.push("hooray");
   testStack.push("ho");
   console.log("toString after pushing hi, hooray, ho:\n",
      testStack.toString());
}

/**
 * function to hold the setup() code for all
 * Queue actions
 */
function queueTester(){
   let testQueue = new Queue();  //wait, why don't we always do this?
   console.log("empty Queue?", testQueue);
   testQueue = new Queue([3,4, 5,6,78]); //how does this affect
   // first instance of testQueue?
   // references vs addresses...?
   console.log("num Queue?", testQueue);
   //destructive?
   const testArr = [4,5,6]; //make an arr that is its own var
   const safeQueue = new Queue(testArr); //make a Queue from this array
   //dequeue a val from safe Queue
   safeQueue.dequeue();
   console.log("testArr", testArr, "\nsafeQueue", safeQueue);
   //testArr is safe! nice

   //test .dequeue
   console.log("testQueue.size", testQueue.size);
   console.log("dequeue Queue", testQueue.dequeue(), testQueue.size);
   console.log("dequeue Queue", testQueue.dequeue(), testQueue.size);
   console.log("dequeue Queue", testQueue.dequeue(), testQueue.size);

   //test .enqueue
   testQueue.enqueue("hey");
   console.log(testQueue, testQueue.size);
   testQueue.enqueue("ho");
   console.log(testQueue, testQueue.size);
   testQueue.enqueue("hooray");
   console.log(testQueue, testQueue.size);
   console.log("dequeue Queue", testQueue.dequeue(), testQueue.size);

   //test .peek
   testQueue.enqueue("howdy");
   console.log("enqueueed hody. peek?", testQueue.peek());
   //dequeue everything from testQueue-
   //no probs with empty Queue?
   testQueue.clear();
   console.log("empty Queue peek?", testQueue.peek());

   //test .includes
   //false if not included?
   console.log("testQueue.includes('45')", testQueue.includes("45"));
   console.log("enqueueing hi, hooray, ho (separately)");
   // testQueue.enqueue("hi", "hooray, "ho");
   testQueue.enqueue("hi");
   testQueue.enqueue("hooray");
   testQueue.enqueue("ho");
   console.log("enqueueed hi, hooray, ho?", testQueue);
   console.log(".includes('hooray')", testQueue.includes("hooray"));

   //test .clear
   console.log("testQueue.clear()");
   testQueue.clear();
   console.log("cleared Queue?", testQueue);

   //testing toString
   testQueue.enqueue("hi")
   testQueue.enqueue("hooray");
   testQueue.enqueue("ho");
   console.log("toString after enqueueing hi, hooray, ho:\n",
      testQueue.toString());
}

/**
 * function to hold the setup() code for all
 * Map actions - copied from my INCOMPLETE
 * class notes
 */
function mapTester(){
   //create an object literal storing the cast pairs
   //role : actor
   //key : value
   const cmcCast = { //catch me if you can
      "Frank Abagnale, Jr.": "Leonardo DiCaprio",
      "Carl Hanratty": "Tom Hanks",
      "Frank Abagnale, Sr.": "Christopher Walken",
      "Roger Strong": "Martin Sheen",
      "Marci": "Ellen Pompeo"
   };

   //create Map from existing array of pairs
   let cmcMap = new Map(Object.entries(cmcCast));
   console.log("cmcMap: ", cmcMap, "sayMap:", sayMap);

   //Get .keys, .values, .entries of Map


   //slide 6
   console.log("cmcMap.get('Carl Hanratty')");
      //.get(key: string)  ->  use key as a string
   console.log(cmcMap.get("Carl Hanratty"));


   /**
    * challenge 1
    * create map for 4 temp based activities
   */
   //const map1 = new Map([key, value]);
   //[[pair1], [pair2], [pairN]]
   const funMap = new Map([[60, 'Basketball'], [30, "Eating Snowflakes"],
      [90, "Swimming"], [0, "Staying Inside"], ["Celsius Version", "32 is now 0!"]]);
   // funMap.set(60, 'Basketball'); //key, value
   console.log("funMap", funMap);
   //incoplete- get 'em next time


   /**
    * challenge 2
    */
   //also get them next time lmao
}

/**
 * function to hold the setup() code for all
 * Set actions - copied from my class notes
 * these notes shouldn't have gaps
 */
function setTester(){
   newSet = new Set(["toonces", "radar", 42, 13, 107]);
   console.log("newSet:", newSet.entries());
   newSet.add(45);
   newSet.add(45);
   newSet.add(45);   //only adds one 45- no dupes in sets
   console.log("newSet:", newSet.values());


   /**
    * challenge 1
    */
   sigmaSet = new Set();
   alphaArray = new Array();

   while(sigmaSet.size < 20){
      let randInt = round(random(20));
      sigmaSet.add(randInt);
      alphaArray.push(randInt);
   }

   //print contents of both
   console.log("set", sigmaSet);
   console.log("array", alphaArray);
   
   //safely clear both data structures
   sigmaSet.clear();
   alphaArray.splice(0);

   //print contents of both again
   console.log("set", sigmaSet);
   console.log("array", alphaArray);


   //Resumed from after break!
   //9-1, 3/17/25
   const sentence = "\"I wrote myself in, " +
      "since I'm me and I'm here and " + 
      "I'm writing.\" -OB";
      //declare a sentence as a string

   //loop over every char in string:
   for(let char of sentence){
      text(char, random(0, width-20), random(20, height));
   }


   //set challenge 2
   let wombatNews = "Wombats are furry, nocturnal marsupials found only in Australia. Baby wombats have recently been in the news after an American influencer filmed herself snatching a young joey from its mother, setting off a global conversation about mistreatment of wildlife. Wild animals are cute -- but please don’t touch, for your sake and theirs."
   let splitWombat = wombatNews.split(" ");
   //assign a new set using the array as an argument
   let wombatSet = new Set(splitWombat);

   //print the array and the Set
   console.log("splitWombat", splitWombat, "\nwombatSet", wombatSet);
}