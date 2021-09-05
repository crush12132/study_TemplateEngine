/**
 * 功能：可以在dataObj对象中寻找用连续点符号.的keyName属性，比如
 *  dataObj = {
 *    a:{
 *     b:{
 *        c:100
 *       }
 *    }
 * }
 * lookup(dataObj,'a.b.c')  100
 */
export default function lookup(dataObj,keyName){
 var temp ;
 var keys;
 if(keyName.indexOf(".")!=0&&keyName!='.'){
     keys = keyName.split(".");//['a','b','c']
     temp = dataObj
     for(let i=0;i<keys.length;i++){
         temp = temp[keys[i]]
     }
     return temp
 }
 return dataObj[keyName]
}