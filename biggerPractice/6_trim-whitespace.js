//Example A6
// extract the contents between whitespace Characters
//avoid the start and end whitespaces

function teststring(str) {
//alternate solutions'
// ^\s*(.*)\s*$
// ^\s*(.*)\s*$
// ^\s*(.*\.)$

  let regex = /^\s*(.*)\s*$/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }
}

//skip the last element
let str1 = ['			The quick brown fox...',
'   jumps over the lazy dog.    '];

let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
