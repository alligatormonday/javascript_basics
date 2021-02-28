// === VARIABLES === //
var firstName = 'Foo'; // leaks out of scope
var lastName = 'Faux';

// === STRING === //
let firstString = "hello";
const secondString = "world";
const RegEx = "\n\"world\"";
firstString = "goodbye";
const bothStrings = `${firstString} ${secondString}`;
console.log(bothStrings)

// === NUMBER === //
const newScore = 32;
let highScore = 47;

highScore++ // add 1 to the highScore
highScore += 2; // adds 2 to the high score
highScore -= 3; // remove 3 from the high score.
++highScore; // add 1 to the original high score
highScore -= -1 // add 1 to the high score.
highScore = + true // add 1 to high score. // BUT THIS IS BAD

if (newScore > highScore) {
    console.log("We have a new high score");
} else {
    console.log("If you're not first; You're last, Ricky Bobby");
};

// === BOOLEAN === //
// type checking ===
// value checking ==

 //yes no, true false, agree disagree, etc.
// const bool = true;
// 1 or true or "1" = kinda true
// 0 or false or NaN or undefined or null = kinda false

if (null) {
    console.log("True");
} else {
    console.log("False");
};


// === ARRAY === //
let arr = ["hello", " ", "world"];
let arrTwo = ["hello", "", "earth", 2];
//           [0, 1, 2, 3, 4, ...];
arrTwo[1] = " ";
arrTwo[2] = arr[2];

console.log(arrTwo); // output = ["hello", " ", "world"]
console.log(...arrTwo); // output = hello world
console.table(arrTwo); // output is SQL style
console.log(arrTwo.join(" ")); // output is csv = hello, ,world
console.log(arrTwo.length.toString()); // output = 4;

// === OBJECT / JSON === //
const playerOne = {
    name: "Player One",
    hp: 12,
    level: 2,
    armor: 1,
    jump: function (input) {
        // this hero jumps
    },
};

const playerTwo = {
    name: "Player Two",
    hp: 10,
    level: 1,
    jump: function (input) {
        // this hero jumps
    },
};

const enemy = {
    hp: 3,
    attack: function (player) {
        // STEP 1: make a random number
        let damage = Math.floor(Math.random() * 7) + 1;

        // OPTION: check for armor
        if (player.hasOwnProperty("armor")) {
            // remove armors worth of damage.
            damage - player.armor;

            console.log(`${player.name} was protected by your armor!`)

            // NOT LESS THAN 1 damage damage can be done.
            if (damage < 1) { damage = 1 };

            // STEP 2: Log the players name and damage done.
            console.log(`Enemy attacks ${player.name} for ${damage} damage.`);
            // const betterWayOfMathing = Math.random(1, 5);

            // LAST STEP: remove the hp from that player.
            player.hp = player.hp - damage;
        };
    },
};

// What are the player hps?
console.log(`
${playerOne.name} hp: ${playerOne.hp}. 
${playerTwo.name} hp: ${playerTwo.hp}.
`);
// Enemy Attack!
enemy.attack(playerOne);
enemy.attack(playerTwo);
enemy.attack(playerTwo);
// Now what are the player hps?
console.log(`
${playerOne.name} hp: ${playerOne.hp}. 
${playerTwo.name} hp: ${playerTwo.hp}.
`);

// FOR, DO & WHILE - LOOPS //


// === FUNCTIONS 5 TYPES TODAY === //