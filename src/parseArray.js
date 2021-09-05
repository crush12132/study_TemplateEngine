import lookup from './lookup'
import renderTemplate from './renderTemplate'
/**
 * 处理数组，结合renderTemplate实现递归
 * 注意：这个函数接收的参数是token而不是tokens
 * token为['#', 'arr',[...]]
 * data[arr]--->数据
 */
export default function parseArray(token,data){
    //得到整体数据data中这个数组要使用的部分
    let v = lookup(data,token[1])
    //结果字符串
    let resultStr = ""
    //遍历v数组，v一定是数组
    //注意：下面这个循环可能是整个包中最难思考的一个循环
    //它是遍历数据，而不是遍历token。数组中的数据有几条，就要遍历几条
    for(let i=0;i<v.length;i++){
        //若循环简单数组时
        resultStr += renderTemplate(token[2],{
            ".":v[i],
            ...v[i]
        })
    }
    return resultStr;
}