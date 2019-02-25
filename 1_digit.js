//Example 1
// \d - digit
function teststring(str){
  let regex = /\d/g;
  let found = str.match(regex).join('');

  console.log(str);
  console.log(found);
}

let str1 = '12212cd';
teststring(str1);
