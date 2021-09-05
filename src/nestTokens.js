//将零散的tokens嵌套起来
export default function nestTokens(tokens){
   var nestTokens = [];
   var sections = [];
   var collector = nestTokens;
   var token;
   for(let i=0;i<tokens.length;i++){
       token = tokens[i];
       switch(token[0]){
           case '#':
               collector.push(token);
               sections.push(token);
               collector = token[2] = []; 
               break;
           case '/':
              sections.pop();
              collector = sections.length>0?sections[sections.length-1][2]:nestTokens
               break;
            default:
              collector.push(token)
              break;    
       }
    }
    return nestTokens
}