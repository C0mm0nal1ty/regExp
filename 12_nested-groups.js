//Example 12
//nested groups
//use double parenthesis for this one
//

function teststring(str) {
//solutions


  let regex = /(.+(\d{4}))/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last element
let str1 = ['Jan 1987', 'May 1969', 'Aug 2011'];
let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
