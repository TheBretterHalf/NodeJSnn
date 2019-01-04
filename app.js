// var fs = require('fs');

// var file = fs.readFile('input.txt','utf8',function(err,data){
//     fs.writeFile('writeme.txt',data);
//     console.log(data);
// });

// console.log('This is an instruction outside the sync file system.');

// console.log("Hey Ninjas");

// var time = 0

// setInterval(function(){
//     time+=2;
//     console.log(time+ ' seconds have passed');
// },2000);

// console.log(__dirname);
// console.log(__filename)

function sayHi(){
    console.log('hi');
}

sayHi()

var sayBye = function(){
    console.log('bye');
}
sayBye();