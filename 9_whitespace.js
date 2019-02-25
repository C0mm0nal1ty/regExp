//Example 9
//whitespace - normal space, tab, new line, or crraige return (windows environment)
// \s - whitespace special characters
//

function teststring(str) {
//solution 1
//[1-3]
//\d\.\s+abc

  let regex = /\d\.\s.*/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last element
let str1 = ['1.   abc', '2.	abc', '3.           abc','4.abc'];
let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
