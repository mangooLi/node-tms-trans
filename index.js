var fs=require('fs');
var  getKeysFromClassStr= require('./getKeysFromCTS').getKeysFromClassStr
const {log}=console;

// fs.readFile('./orderController.ts','utf-8',(err,data)=>{
//     if(err){
//         console.log('err in read file',err)
//     }else{
//         log(typeof data);
//         let temp=data;
//         temp=temp.replace(/\n/g,'nnnnnnnnnn')
//         log(temp)
//     }
// })

let data=fs.readFileSync('./orderController.ts','utf-8');
let temp=data;
// temp=temp.replace(/\s/g,'nn');

//  temp=temp.match(/\n/)
 temp=temp.replace(/\/\*\*(.|\r\n)+?\*\//g,'');

let classStr=temp.match(/class(.|\r\n)+\}/)[0]

// let className=classStr.match(/class\s\w+\s/)[0].replace('class ','');//OK 
let classContentStr=classStr.match(/\{(.|\r\n)+\}/)[0];//{}包裹的类的内容

let classContentStrTrim=classContentStr.replace(/(\r\n|\s)/g,'')

let ctrNoScope=classContentStr.replace(/this\.\$scope\./g,'this.');


getKeysFromClassStr(ctrNoScope)



// fs.writeFileSync('./demo.ts',ctrNoScope);


// log(ctrNoScope.charAt(ctrNoScope.length-1))




