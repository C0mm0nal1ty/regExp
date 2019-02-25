//Example 8
// ? - optionality, metacharacter
// allows you to match a either 0 or 1 of the preceding characters
// ab?c matches abc or ac

function teststring(str) {
  //alternate solution: \d+files? found\?
  let regex = /\?/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

let str1 = ['1 files found?', '2 files found?', '24 files found?','No files found.'];
let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
