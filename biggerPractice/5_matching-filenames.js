//Example A5
//extract the following filenames and extensiosn types of
//only image files

function teststring(str) {
//alternate solutions'
// (\w+)\.(jpg|png|gif)$

  let regex = /(.+)\.(png|jpg|gif)$/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }

}

//skip the last element
let str1 = ['.bash_profile',
'workspace.doc',
'img0912.jpg',
'updated_img0912.png',
'documentation.html',
'favicon.gif',
'img0912.jpg.tmp',
'access.lock'];

let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
