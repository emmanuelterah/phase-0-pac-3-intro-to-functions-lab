const expect = require("expect");
const { spyOn } = require("expect");

let string = "Hello!"

function shout (string) {
    return string.toUpperCase();
}

console.log(shout(string));

///

let words = "HELLO!"

function whisper (words) {
    return words.toLowerCase();
}

console.log(whisper(words));
/////

let whisperedwordsCap = "HELLO"
function logWhisper (whisperedwordsCap) {
    console.log(whisperedwordsCap.toLowerCase());
}
spyOn(console, "log").andCallThrough();
logWhisper(whisperedwordsCap);
expect(console.log).toHaveBeenCalledWith("hello");

console.log.restore ()

/////

let shoutedWords = "hello"

function logShout (shoutedWords) {
    console.log(shoutedWords.toUpperCase());
}

spyOn(console, "log").andCallThrough();
logShout(shoutedWords);
expect(console.log).toHaveBeenCalledWith("HELLO");

console.log.restore()






/////
let headphonedRoommate = "Let's have dinner together!"

function sayHiToHeadphonedRoommate(headphonedRoommate) {   
    if (headphonedRoommate === "Let's have dinner together!") {
        return "I would love to!";
    }

    if (headphonedRoommate === headphonedRoommate.toUpperCase()) {
        return "YES INDEED!";
    }

    if (headphonedRoommate === headphonedRoommate.toLowerCase()) {
        return "I can't hear you!";
    }
}

console.log(sayHiToHeadphonedRoommate(headphonedRoommate));

/////

