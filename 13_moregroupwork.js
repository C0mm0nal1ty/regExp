//Example 12
//more on groups
//using other quantifiers inside the capture group patterns

function teststring(str) {
//alternate solutions
//(\d+)x(\d+)


  let regex = /(\d{4})x(\d{3,4})/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last element
let str1 = ['1280x720', '1920x1600', '1024x768'];
let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
