const fs=require('fs');
const path=require('path');


classStr=''//




function getClass(ctrPath){
    let data=fs.readFileSync(ctrPath,'utf-8');
    let temp=data;

    temp=temp.replace(/\/\*\*(.|\r\n)+?\*\//g,'');

    classStr=temp.match(/class(.|\r\n)+\}/)[0];

    // console.log(classStr);

    let classContentStr=classStr.match(/\{(.|\r\n)+\}/)[0];//{}包裹的类的内容

    let classContentStrTrim=classContentStr.replace(/(\r\n|\s)/g,'')  //除掉空格

    let ctrNoScope=classContentStr.replace(/this\.\$scope\./g,'this.');
    let className=classStr.match(/class\s+(\w+)\s+/)[1];
    return {
        className:className,
        classStr:classStr,
        classContentStr:classContentStr,
        ctrNoScope:ctrNoScope
    }
}



function getBaseCom(){
    let baseCom=fs.readFileSync(path.join(__dirname,'./baseCom.ts'),'utf-8');
    // console.log(baseCom)
    // console.log(typeof baseCom)
    return baseCom;
}

function transCtr(soucePath,destPath){
    let classInfo=getClass(soucePath);
    let baseCom=getBaseCom();
    baseCom=baseCom.replace('componentName',classInfo.className);
    let comStr=baseCom+classInfo.ctrNoScope;
    fs.writeFileSync(destPath,comStr)
    
}


module.exports.transCtr=transCtr;