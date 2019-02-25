//Example 6
// \d\d\d - matching repeating digits, could
//also be characters and strings
//{} -match a character a specific number of times
//a{3} - match it 3 times
//a{1,3} - match a more than 1 times and less than 3 times
//[wxz]{5} - match any wxz character five times
function teststring(str) {
  // alternate solution : waz{3,5}up
  let regex = /[z]{2,1000}/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

let str1 = ['wazzzzzup', 'wazzzup', 'wazup'];
let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}

console.log(newstr);
