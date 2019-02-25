//Example 15
// \d - digits
// \s - whitespace(space,tab,newline, or windows newline)
// \w - any alphannumeric letter and digit
// \D - nondigits
// \S - nonwhitespace
// \W - nonalphanumeric or digits
//
// \b - captures boundary between word and non-word character
//  -> ex. \w+\b - capture entire words
//
// back-referencing
// use this to reference your captured groups
// -> ex. \0,\1,\2
//


function teststring(str) {
//alternate solutions
//^The.+.$

  let regex = /^The.+.$/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last 2 element
let str1 = ['The quick brown fox jumps over the lazy dog.',
 'There were 614 instances of students getting 90.0% or above.',
  'The FCC had to censor the network for saying &$#*@!.'];
let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
