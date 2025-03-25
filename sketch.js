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
 * 
 * Work structure: Autumn will take Arrays,
 * Sébastien will start with Objects columns
 * alternate columns.
 */

"use strict"; //catch some common coding errors

/* Global variables */
//objects
let e30Test = {};
//for reference, the BMW e30 is a sports car model
let e30 = {Cylinders : "4 or 6", Seating : "4-door or 2-door",
   Drivetrain : "AWD", "Production years" : "1982-1994",
   "Can be Convertible" : true, "Number of wheels" : 4};
   //properties can be declared with or without ""
//maps:
const sayMap = new Map();
//sets:
let newSet;
let set;

//AUTUMN VARIABLES
//init array variable
let creatureArray;
//init map variable
let ageMap;
//iterator
let iterator;

/**
 * setup: run all tester functions here
 */
function setup() {
   createCanvas(400, 400);
   
}


/**
 * function to hold the setup() code for all
 * Object actions
 * done! -SG
 */
function objectTester(){
   e30.Tires = "Summer tires";
   e30["Color of Trim"] = "Puke Green";
   console.log(e30.Tires);
   console.log("e30['Color of Trim']: ", e30["Color of Trim"]);
   console.log(e30["Tires"]);
   console.log("e30.ColorofTrim: ", e30.ColorofTrim); //notice how "Tires" is a one-word string that can be
   //refernced using dot or [] notation, but because color of trim uses a reserve word "of"
   //and, more importantly, because color of trim is not one word and uses spaces,
   //color of trim must be referenced using [] bracket notation -SG
   
   //test if some of the values/properties are defined or not
   console.log(e30.Cylinders !== undefined); //checking IS DEFINED
   //check if propterty/item is included in object properties
   // let testBool = e30.Cylinders !== undefined;
   console.log(e30["Tires"] !== undefined); //checking IS DEFINED
   //note that here Tires has to be in ""
   //"" always for [] notation
   //"" for strings > 1 word in . notation
   //what about non-string keys? -just curious
   delete e30.Tires;
   console.log("Tires property removed?", e30.Tires);
   delete e30["Color of Trim"];
   console.log("Trim property removed?", e30["Color of Trim"]);
   //both properties have been removed from the car

   let e30Arr = Object.entries(e30);
   //stores the array of all key:value pairs of e30 (returned by Obj.entries())
   //Object.entries returns an array
   console.log("e30Arr:", e30Arr);
   console.log(Object.entries(e30));
   //notice how these are the same array
   //print all properties of e30
   console.log("Properties of e30:", Object.keys(e30));
   console.log("Values of e30:", Object.values(e30));
   //copy everything about e30 to a new address, m3
   let m3 = {};
   for(let pair in e30){  //looping through each key:value pair?
      // console.log(e30[pair]); //value
      // console.log("pair", pair); //property (key)
      m3[pair] = e30[pair]; //copies each key/value pair to m3
      //any add'tl declarations? (i.e. m3 = new etc...)
      //just need let m3 = {}; outside of loop
   }
   //console.log("m3:", m3); //created successfully!

   //loop over all pairs in m3
   console.log("All pairs in m3:");
   for(let pair in m3){
      console.log(" ", pair +" : "+ m3[pair]); //print key:value pair to console
   }

   //how many properties in m3?
   //find length of array of kay:value pairs
   console.log("Number of properties stored by m3:", Object.entries(m3).length);

   //empty m3 object of all contents
   //scrap the m3 (remove all property:value pairs)
   for(let pair in m3){  //for every pair
      delete m3[pair];  //deletes the property (related value no longer stored either)
   }
   console.log("m3 empty?", m3); //m3 has been scrapped
}

/**
 * Autumn Fischer
 * ARRAY FUNCTIONS AND METHODS TESTING
 */
function arrayTester(){
   console.log("**ARRAY TESTING**");

   //Create/ construct empty
   creatureArray = [];
   console.log("Created empty array:", creatureArray);

   //Create/ construct with contents
   creatureArray = ["crab", "fish", "cow", "turtle", "stingray", "tiger", "frog"];
   console.log("Filled the array with creatures:", creatureArray);

   //Set/ add value
   creatureArray[1] = "dog";
   console.log("Set the second item (index 1) to dog:", creatureArray);

   creatureArray.push("duck");
   console.log("Added a duck to the end of the array:", creatureArray);

   creatureArray.unshift("t-rex", "octopus");
   console.log("Added a t-rex and an octopus to the beginning of the array:", creatureArray);

   creatureArray.splice(6, 0, "goat", "bunny");
   console.log("Added a goat and a bunny at index 6 of the array:", creatureArray);

   //Retrieve value 
   let animal = creatureArray[4];
   console.log("Retrived the fifth item (index 4):", animal);

   //Item included?
   let animalBool = creatureArray.includes("turtle");
   console.log("Testing to see if the array includes the animal 'turtle':", animalBool);

   //Remove item
   let removeCreature = creatureArray.pop();
   console.log("Removed the last item of the array:", removeCreature, creatureArray);

   let removeAnimal = creatureArray.shift();
   console.log("Removed the first item of the array:", removeAnimal, creatureArray);

   creatureArray.splice(3, 2);
   console.log("Removed two items starting at index 3", creatureArray);

   //Copy all to fresh address
   let newArray = animalArray.slice();
   console.log("Slice the array to a new variable:", newArray);

   let evenNewerArray = Array.from(newArray);
   console.log("Array.from to use a new variable name:", evenNewerArray);

   //Loop over all
   console.log("For loop to iterate:");
   for(let i=0; i<creatureArray.length; i++){
      console.log(creatureArray[i]);
   }

   console.log("For of loop to iterate:");
   for(let creature of creatureArray){
      console.log(creature);
   }

   //How many?
   let arrayLength = creatureArray.length;
   console.log("Array Length:", arrayLength);

   //Empty all contents
   creatureArray.splice(0);
   console.log("Empty the array:", creatureArray);
}

/**
 Autumn Fischer
 MAP FUNCTIONS AND METHODS TESTING
 */
function mapTester(){
   console.log("**MAP TESTING**");

   //Create/ construct empty
   ageMap = new Map();
   console.log("Created empty map:", ageMap);

   //Create/ construct with contents
   ageMap = new Map([["Geroge", 47], ["Layla", 16], ["Jeremy", 39], ["Elizabeth", 26], ["Gertrude", 73], ["Keith", 55]]);
   console.log("Filled the map with name and age pairs:", ageMap);

   //Set/ add value
   ageMap.set("Layla", 17);
   console.log("Set Layla's age to 17:", ageMap);

   //Retrieve value
   let jeremyAge = ageMap.get("Jeremy");
   console.log("Retrieve Jeremy's age:", jeremyAge);  

   //Item included?
   let bobBool = ageMap.has("Bob");
   console.log("Testing to see if 'Bob' is included as a key in the map:", bobBool);  

   //Remove item
   ageMap.delete("Gertrude");
   console.log("Delete 'Gertrude' from the map:", ageMap);  

   //Iterator or array of entries
   let mapIt = ageMap.entries();
   console.log("Map Entries:", mapIt);

   //Iterator or array of keys
   mapIt = ageMap.keys();
   console.log("Map Keys:", mapIt);

   //Iterator or array of values
   mapIt = ageMap.values();
   console.log("Map Values:", mapIt);

   //Array.from
   let mapArray = Array.from(ageMap);
   console.log("Array from the age map:", mapArray);

   //Copy all to fresh address
   let newMap = new Map(Array.from(ageMap));
   console.log("Copy the values into a new variable:", newMap);

   //Loop over all
   console.log("For loop to iterate:");
   for(let [k, v] of ageMap){
      console.log(k, v);
   }

   console.log("For of loop to iterate:");
   for(let entry of ageMap){
      console.log(entry);
   }

   //How many?
   let mapSize = ageMap.size;
   console.log("Map length:", mapSize);

   //Empty all contents
   ageMap.clear();
   console.log("Empty the map:", ageMap);
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
   set = new Set();
   array = new Array();

   while(set.size < 20){
      let randInt = round(random(20));
      set.add(randInt);
      array.push(randInt);
   }

   //print contents of both
   console.log("set", set);
   console.log("array", array);
   
   //safely clear both data structures
   set.clear();
   array.splice(0);

   //print contents of both again
   console.log("set", set);
   console.log("array", array);


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