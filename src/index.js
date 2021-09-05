import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'
//全局提供TemplateEngine对象
window.TemplateEngine = {
    //渲染方法
    render(templateStr,data){
      //让模板字符串变为tokens数组
      var tokens = parseTemplateToTokens(templateStr)
      //让tokens数组变为dom字符串
      var result = renderTemplate(tokens,data)
      console.log(result)
      return result
    }
}