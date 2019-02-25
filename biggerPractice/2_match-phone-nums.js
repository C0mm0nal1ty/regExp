//Example A2
//match the phone numbers
//and capture the area code

function teststring(str) {
//alternate solutions
//1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}
  let regex = /^\d? ?\(?(\d{3})\)?[ -]?\d{3}[ -]?\d{4}$/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last element
let str1 = ['415-555-1234',
 '650-555-2345',
'(416)555-3456','202 555 4567','4035555678'
,'1 416 555 9292'];

let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
