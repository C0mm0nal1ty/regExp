//Example A7
//extract the filename, method name, and line number
//of the stack trace
//form is: package.class.methodname(filename:linenumber)

function teststring(str) {
//alternate solutions'
//List\.(.+)\((.*):(\d+)

  let regex = /(\w+)\(([\w\.]+):(\d+)\)/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }
}

//skip the first 3 elements
let str1 = ['W/dalvikvm( 1553): threadid=1: uncaught exception',
'E/( 1553): FATAL EXCEPTION: main',
'E/( 1553): java.lang.StringIndexOutOfBoundsException',
'E/( 1553):   at widget.List.makeView(ListView.java:1727)',
'E/( 1553):   at widget.List.fillDown(ListView.java:652)',
'E/( 1553):   at widget.List.fillFrom(ListView.java:709)'];

let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
