var fs=require('fs');
var  parseCtrStr= require('./getKeysFromCTS').parseCtrStr
const {log}=console;




function parseCtr(ctrPath){
    let data=fs.readFileSync(ctrPath,'utf-8');
    let temp=data;

    temp=temp.replace(/\/\*\*(.|\r\n)+?\*\//g,'');

    let classStr=temp.match(/class(.|\r\n)+\}/)[0]

    let classContentStr=classStr.match(/\{(.|\r\n)+\}/)[0];//{}包裹的类的内容

    let classContentStrTrim=classContentStr.replace(/(\r\n|\s)/g,'')

    let ctrNoScope=classContentStr.replace(/this\.\$scope\./g,'this.');


    parseCtrStr(ctrNoScope)
}


// parseCtr('./orderController.add.ts')

module.exports.parseCtr=parseCtr;


