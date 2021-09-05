export default class Scanner{
   constructor(templateStr){
     this.templateStr = templateStr;
     this.pos = 0;
     this.tail = this.templateStr
   }
   //功能弱，就是走过指定内容，没有返回值
   scan(tag){
        if(this.tail.indexOf(tag)==0){
            this.pos+=tag.length
            this.tail = this.templateStr.substring(this.pos)

        }
   }
   //让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
   scanUtils(stopTag){
    let pos_backup = this.pos   
    //当尾巴的开头不是stopTag的时候，就说明还没有扫描stopTag
    while(this.tail.indexOf(stopTag)!=0 && !this.eos()){
        this.pos++
        //改变尾巴为从当前指针这个字符开始，到后面全部字符
        this.tail = this.templateStr.substring(this.pos)
    }
    return this.templateStr.substring(pos_backup,this.pos)
   }
   //判断指针是否到头，返回布尔值
   eos(){
     return this.pos>=this.templateStr.length
   }
}