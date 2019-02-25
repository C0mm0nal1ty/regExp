//Example 4
//[^] - avoid specific characters
function teststring(str){
  let regex = /[^abc]/g;
  let found = str.match(regex).join('');

  console.log(str);
  console.log(found);
}

let str1 = 'PuffDaddyTupac';
teststring(str1);
