//Example A3
//filter out an email with plus addressing
//make sure to match the domain portion of the email
//problem
//capture the email without plus and @ character
//capture it in a match group

function teststring(str) {
//alternate solutions'
//^([\w.]*)
  let regex = /([^+@]+)/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last element
let str1 = ['tom@hogwarts.com',
'tom.riddle@hogwarts.com',
'tom.riddle+regexone@hogwarts.com',
'tom@hogwarts.eu.com',
'potter@hogwarts.com',
'harry@hogwarts.com',
'hermione+regexone@hogwarts.com'];

let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
