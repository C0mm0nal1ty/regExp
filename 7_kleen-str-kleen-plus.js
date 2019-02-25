//Example 7
//kleene star - represent a 0 or more
//kleene plus represents a 1 or more
//

function teststring(str) {
  let regex = /[a]+[bc]+/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

let str1 = ['aaaabcc', 'aabbbbc', 'aacc','a'];
let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
