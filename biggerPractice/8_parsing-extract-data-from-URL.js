//Example A8
//objective:
//URL composition: scheme,host,port,resourcepath
//ex. http://regexone.com:80/page,
//    scheme/host:port/resourcepath
//
//this test cannot run because syntax dictates for // to be commented out

function teststring(str) {
//alternate solutions'
//(\w+)://((\w+)/|([\w.-]+):?([\d]+)?/|)
//(\w+)://([\w\-\.]+)(:(\d+))?

  let regex = /(\w+)://([\w\-\.]+)(:(\d+))?/g;
  let found = str.match(regex);

  if (found !== null) {
    return true;
  }
}

//skip the first 3 elements
let str1 = ['ftp://file_server.com:21/top_secret/life_changing_plans.pdf',
'https://regexone.com/lesson/introduction#section',
'file://localhost:4040/zip_file',
'https://s3cur3-server.com:9999/',
'market://search/angry%20birds'
];

let newstr = [];

for (let word of str1) {
  if(teststring(word)){
    newstr.push(word);
  }
}
console.log(str1.join(' '));
console.log(newstr.join(' '));
