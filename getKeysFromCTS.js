//classContentStr中获取属性和属性的值

function getKeysFromClassStr(str){
    // console.log('length',str.length);
    let keys=[],ents=[];
    tempKey='',tempCtn='',tempEnt={};
    let isKey=true;
    let KHnum=0;
    for(let i=0;i<str.length;i++){
        if(i==0||(i==str.length-1)){  //对第一个{和最后一个字符}不做处理
            continue;
        }
        let char=str.charAt(i);
        // console.log(char)
        if(isKey){
            
            if(char.match(/[a-zA-Z\$\:\<\>\.\(\)]/)){
                tempKey=tempKey+char;
            }
            if(char=="="||char=="{"){
                // console.log(tempKey)//------------------------------------------------------------打印出tempkey
                keys.push(tempKey);
                tempEnt.key=tempKey; //添加到tempEnt中
                tempEnt.split=char;
                tempKey='';
                isKey=false;
                if(char==='{'){  //碰到第一个{，添加到tempCtn中去
                    KHnum++;
                    tempCtn=tempCtn+char;
                }
                
            }
            if(char===';'){  //key碰到分号后，value直接为空
                // console.log(tempKey)//------------------------------------------------------------打印出tempkey
                tempCtn='';
                keys.push(tempKey);
                tempEnt={key:tempKey,value:tempCtn};
                ents.push(tempEnt);

                tempKey='';
                tempEnt={};
                isKey=true
            }
        }else{
            tempCtn=tempCtn+char;
            if(char==='{'){
                KHnum++;
            }
            if(char==='}'){
                KHnum--;
                if(KHnum===0){
                    isKey=true;//碰到最后一个}时候，tempCtn暂时结束;
                    tempEnt.value=tempCtn;
                    ents.push(tempEnt);
                    tempEnt={};
                    tempCtn=''
                }
            }
            if(char===';'&&!tempEnt.key.match(/\(/)&&!tempCtn.match(/\(/)){
                isKey=true;
                tempEnt.value=tempCtn;
                ents.push(tempEnt);
                tempEnt={};
                tempCtn=''
            }
        }
        

    }

    // console.log(ents);
    log(ents)


    return {keys,ents}
}

module.exports={getKeysFromClassStr:getKeysFromClassStr}



function log(list){
    list.forEach(item=>{
        for(var key in item){
            console.log(key);
            console.log(item[key])
        }
    })
}