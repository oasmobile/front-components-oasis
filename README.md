# front-components-oasis
**Oasis公共插件**


使用此组件库，如果有webpack和node环境按照以下步骤进行使用：  
1.npm install front-components-oasis --save-dev   安装  
2.想调用的页面引入  例： import {FcoFooter} from 'front-components-oasis';  
3.方法调用 例：FcoFooter({'year':2018,'lang': 'zh','forumBok':true}).fire('footwrap'); \/\/后面详细介绍参数  
4.对应html页面创建标签 例如（\<div id="footwrap"\>\</div\>）.  
方法调用参数说明：    
1.必填参数：可以用后端返回的年，或者写死的值例({'year':'2017'}) 使用位置如下：  
©2012-{year} OASIS GAMES LIMITED. All rights reserved.  
2.选填参数：  
        （1）lang默认语言是en 。  
        （2）forumBok是forum（论坛）的开关 值为true则是关闭论坛入口。  
        （3）forumHref是forum（论坛）跳转地址配置。  
        （4）priHref是Privacy Policy（隐私权申明）的跳转地址配置。  
        （5）termSerHref是Terms of Service（服务条款）的跳转地址配置。  

如果没有webpack编译环境直接引入  
css地址：https://img.oasgames.com/upload/1506681304/dist/css/runtime.min.css  
js地址：https://img.oasgames.com/upload/1506681304/dist/scripts/runtime.min.js 
