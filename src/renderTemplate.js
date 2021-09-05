import lookup from './lookup'
import parseArray from './parseArray'
export default function renderTemplate(tokens,data){
    
    var str = ''
    var token;
    for(let i=0;i<tokens.length;i++){
       token = tokens[i];
       if(token[0]=='text'){
          str+=token[1]
       }else if(token[0]=='name'){
           str+=lookup(data,token[1]);
       }else if(token[0]=='#'){
           str+=parseArray(token,data)
       }
    }
    return str
}