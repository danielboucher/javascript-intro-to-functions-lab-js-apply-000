function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}

var lowercase = 'hello!';
var mixedcase = "'I love you, Grandma. ";
var uppercase = "HELLO!";


function sayHiToGrandma(string) {
  // for input string to function sayHiToGrandma,
  // if string is equal to string in all lowercase, return string "I can't hear you!"

    if (lowercase.toLowerCase() === lowercase) {
        console.log(`I can't hear you!`);
    } else if (uppercase.toUpperCase(s) === uppercase)
        console.log("YES INDEED!");
    // } else (mixedcase.toLowerCase() !== mixedcase)
        // console.log("I love you, too.");
  }

//   if (lowercase.toLowerCase() === lowercase) {
//       console.log(`I can't hear you!`);
//   } else if (uppercase.toUpperCase(s) === uppercase) {
//       console.log("YES INDEED!");
//   } else (mixedcase.toLowerCase() !== mixedcase)
//       console.log("I love you, too.");
// }
