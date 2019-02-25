//Example 14
// | - pipe,logical OR
//use it inside regex to specify a search
//ex. buy more (milk | bread |juice)

function teststring(str) {
//alternate solutions
// I love (cats|dogs)

  let regex = /I love cats|dogs/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last 2 element
let str1 = ['	I love cats', 'I love dogs', 'I love logs','I love cogs'];
let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
