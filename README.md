# front-components-oasis
**Oasis公共插件**


使用此组件库，如果有webpack和node环境按照以下步骤进行使用：  
1.npm install front-components-oasis --save-dev   安装  
2.想调用的页面引入  例： import {FcoFooter} from 'front-components-oasis';  
3.方法调用 例：  
FcoFooter({   
&nbsp;&nbsp;&nbsp;&nbsp;lang: 'zh',  
&nbsp;&nbsp;&nbsp;&nbsp;forumBok:true   
}).fire('footer'); \/\/后面详细介绍参数  
4.对应html页面创建标签 例如（\<div id="footer"\>\</div\>)  
方法调用参数说明：    
1.选填参数：  
        （1）lang默认语言是en  
        （2）forumBok是forum（论坛）的开关 值为true则是关闭论坛入口  
        （3）forumHref是forum（论坛）跳转地址配置  
        （4）priHref是Privacy Policy（隐私权申明）的跳转地址配置  
        （5）termSerHref是Terms of Service（服务条款）的跳转地址配置  
        （6）backgroundColor背景色  

如果没有webpack编译环境直接引入  
js地址：https://img.oasgames.com/upload/1511850439/dist/scripts/runtime.min.js
