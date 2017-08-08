//从ng1的路由配置文件中爬取对应的html和controller文件


const fs=require('fs');
const path=require('path');
function parseRoute(){
    let routeStr=fs.readFileSync(path.join(__dirname,'./sourceFile/config.router.ts'),'utf-8');
    // console.log(routeStr);
    let routeList=routeStr.match(/.state\((.|\r\n)+?\}(\s\r\n)?\)/g);
    // console.log(routeList[3]);

    return routeList.map(item=>{
       return getPath(item)
    })

    // getPath(routeList[6]);

}
function getPath(item){
    // console.log(item);
    if(!item.match(/resolve/)){return {str:item}};
    let htmlPath=item.match(/templateUrl(.|\r\n)*?(\..+?html)/)[2];
    let url=item.match(/url\s*\:\s*\"?\'?(.+?)(\'|\")/)[1];
    let ctrPath=item.match(/\.load\(\"?\'?(\..*?js)\"?\'?\)/)[1];
    return {
        // str:item,
        url:url,
        htmlPath:htmlPath,
        ctrPath:ctrPath
    }
    // console.log(htmlPath,url,ctrPath)
}

module.exports.parseRoute=parseRoute;