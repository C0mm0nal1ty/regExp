//Example 6
// \d\d\d - matching repeating digits, could
//also be characters and strings
//{} -match a character a specific number of times
//a{3} - match it 3 times
//a{1,3} - match a more than 1 times and less than 3 times
//[wxz]{5} - match any wxz character five times
function teststring(str){
  let regex = /[z]{2}/g;
  let found = str.match(regex);

  console.log(found);
}

let str1 = ['wazzzzzup','wazzzup','wazup'];
//skip the last 3, very hard to do.
for(let word of str1){
  teststring(word);
}
//note that this isn't going to return your correct string.
