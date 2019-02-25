//Example A4

function teststring(str) {
//alternate solutions'
//<(\w+)
//capturing content in tags
// >([\w\s]*)<
//capturing attribute values
//='([\w://.]*)

  let regex = /^<(\w+)/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last element
let str1 = ['<a>This is a link</a>',
'<a href="https://regexone.com">Link</a>',
'<div class="test_style">Test</div>',
'<div>Hello <span>world</span></div>'];

let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
