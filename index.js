const path=require('path');
const transCtr=require('./TRANS/transCtr').transCtr;
const parseRoute=require('./TRANS/parseRoute').parseRoute



let routeList= parseRoute()
// transCtr('./TRANS/ctr/orderController.ts','./TRANS/tempresult/demo.ts')


for(let i=0;i<routeList.length;i++){
    if(routeList[i].str){
        console.log(routeList[i].str)
    }else{
        console.log(routeList[i]);
    }
    
}

