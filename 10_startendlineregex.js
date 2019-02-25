//Example 10
// TIP: ALWAYS WRITE AS SPECIFIC REGULAR EXPRESSIONS AS POSSIBLE
// Why? avoid real world scenarios.
// ^, $ specify the start and end of the line, respectively

function teststring(str) {
//solutions
//no other solution

  let regex = /^Mission: successful$/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last element
let str1 = ['Mission: successful', 'Last Mission: unsuccessful', 'Next Mission: successful upon capture of target'];
let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
