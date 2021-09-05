import Scanner from './Scanner'
import nestTokens from './nestTokens'
//生成token数组
export  default function parseTemplateToTokens(templateStr){
    var tokens = [];
    var words ;
    var _words 
    let isInJJH;
    //创建扫描器
    var scanner = new Scanner(templateStr)
    //让扫描器工作
    while(!scanner.eos()){
        //收集开始标记出现之前的文字
        words = scanner.scanUtils('{{')
        //存起来
        if(words!=''){
            //判断：普通文字的空格，还是标签中的空格
            //标签中的空格不能去调<div class='box'></div>
             isInJJH = false;
             _words = "";
            for(let i=0; i<words.length; i++){
                if(words[i]=="<"){
                    isInJJH = true;
                }else if(words[i]=='>'){
                    isInJJH = false;
                }
                //如果不是空格就拼接
                if(!/\s/.test(words[i])){
                    _words+= words[i]
                }else{
                    //如果是空格的话，只有当他在标签内时才拼接
                    if(isInJJH){
                        _words+=""
                    }
                }
            }


            tokens.push(['text',words])
        }
        //过双大括号
        scanner.scan("{{")

        //收集开始标记出现之前的文字
        words = scanner.scanUtils('}}')
        //这里的words就是{{}}中间的东西，接着判断一下首字符
        if(words!=""){
             //判断：普通文字的空格，还是标签中的空格
            //标签中的空格不能去调<div class='box'></div>
            isInJJH = false;
            _words = "";
           for(let i=0; i<words.length; i++){
               if(words[i]=="<"){
                   isInJJH = true;
               }else if(words[i]=='>'){
                   isInJJH = false;
               }
               //如果不是空格就拼接
               if(!/\s/.test(words[i])){
                   _words+= words[i]
               }else{
                   //如果是空格的话，只有当他在标签内时才拼接
                   if(isInJJH){
                       _words+=""
                   }
               }
           }
            if(words[0]=='#'){
                //存起来，从下标为1的项开始存，因为下标为0的项是#
                tokens.push(['#',words.substring(1)])
            }else if(words[0]=='/'){
                //存起来，从下标为1的项开始存，因为下标为0的项是/
                tokens.push(['/',words.substring(1)])
            }else{
                tokens.push(['name',words])
            }
        }
        //过双大括号
        scanner.scan('}}')
    }
    // return tokens;
    console.log(nestTokens(tokens))
    return nestTokens(tokens);
}