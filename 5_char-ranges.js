//Example 5
// [A-Za-Z0-9] - specified ranges
function teststring(str){
  let regex = /[A-C]/g;
  let found = str.match(regex).join('');

  console.log(found);
}

let str1 = ['Ana','Bob','Cpc','aax',
'bby','ccz'];
//skip the last 3, very hard to do.
for(let word of str1){
  teststring(word);
}
//note that this isn't going to return your correct string.
