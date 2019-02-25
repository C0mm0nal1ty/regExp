//Example 3
//[]  - match specific characters in the brackets.
function teststring(str){
  let regex = /[abc]/g;
  let found = str.match(regex).join('');

  console.log(str);
  console.log(found);
}

let str1 = 'jumboPuff 122';
teststring(str1);
