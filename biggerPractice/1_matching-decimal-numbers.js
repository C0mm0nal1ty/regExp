//Example 15
//skip the last one


function teststring(str) {
//alternate solutions
//-?[\d,]*\.?[\de]+[^p]$

  let regex = /^-?\d+(,\d+)*(\.\d+(e\d+)?)?$/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last element
let str1 = ['3.14529',
 '-255.34',
'128','1.9e10','123,340.00','720p'];

let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
