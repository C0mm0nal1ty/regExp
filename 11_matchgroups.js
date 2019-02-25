//Example 11
//(and) - metacharacter
//any pattern in the parenthesis will be captured as a group
//example: ^(IMG\d+\.png)$
//capture only the imagename? ^(IMG\d+)\.png$

function teststring(str) {
//solutions
//(.+)\.pdf$

  let regex = /^(file.+)\.pdf$/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last element
let str1 = ['file_record_transcript.pdf', 'file_07241999.pdf', '	testfile_fake.pdf.tmp'];
let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
