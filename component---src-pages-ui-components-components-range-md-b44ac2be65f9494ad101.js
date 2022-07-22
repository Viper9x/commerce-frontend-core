"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[8757],{18671:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return s}});var n=a(87462),r=a(63366),i=(a(15007),a(64983)),m=a(91515),l=["components"],d={},o={_frontmatter:d},p=m.Z;function s(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.mdx)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"range-component"},"Range component"),(0,i.mdx)("p",null,"The Range component implements the range for filtering rows in a grid. Visually, this component represents two input fields of ",(0,i.mdx)("inlineCode",{parentName:"p"},"date")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"text"),' type, for entering the "from" and "to" range limits.'),(0,i.mdx)("h2",{id:"options"},"Options"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Option"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"class")),(0,i.mdx)("td",{parentName:"tr",align:null},"Path to the PHP class responsible for the backend implementation of the component."),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Magento\\Ui\\Component\\Filters\\Type\\Range"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"component")),(0,i.mdx)("td",{parentName:"tr",align:null},"The path to the component’s ",(0,i.mdx)("inlineCode",{parentName:"td"},".js")," file in terms of RequireJS."),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Magento_Ui/js/grid/filters/range"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"isRange")),(0,i.mdx)("td",{parentName:"tr",align:null},"Defines range filter."),(0,i.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"true"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"rangeType")),(0,i.mdx)("td",{parentName:"tr",align:null},"Defines what kind of input elements the range contains.",(0,i.mdx)("br",null),"For example, if the value is ",(0,i.mdx)("inlineCode",{parentName:"td"},"date"),", then range includes two date fields."),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},"-")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"template")),(0,i.mdx)("td",{parentName:"tr",align:null},"Path to the component’s ",(0,i.mdx)("inlineCode",{parentName:"td"},".html")," template."),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"ui/grid/filters/elements/group"))))),(0,i.mdx)("h2",{id:"source-files"},"Source files"),(0,i.mdx)("p",null,"Extends ",(0,i.mdx)("a",{parentName:"p",href:"multiline.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"Multiline")),":"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/filters/range.js"},"app/code/Magento/Ui/view/base/web/js/grid/filters/range.js")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/grid/filters/elements/group.html"},"app/code/Magento/Ui/view/base/web/templates/grid/filters/elements/group.html"))),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)("h3",{id:"daterange"},"DateRange"),(0,i.mdx)("p",null,"This is an example of how to add a date range filter type:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing>\n    <columns>\n        <column name="period">\n            <settings>\n                <filter>dateRange</filter>\n                <label translate="true">Period</label>\n            </settings>\n        </column>\n    </columns>\n</listing>\n')),(0,i.mdx)("h4",{id:"result"},"Result"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"422px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"117.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/2cd18a5c9b6441a99a66fb394978ed75/cb523/date-range-result.webp 320w","/commerce-frontend-core/static/2cd18a5c9b6441a99a66fb394978ed75/59abc/date-range-result.webp 422w"],sizes:"(max-width: 422px) 100vw, 422px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/2cd18a5c9b6441a99a66fb394978ed75/72799/date-range-result.png 320w","/commerce-frontend-core/static/2cd18a5c9b6441a99a66fb394978ed75/fa5c1/date-range-result.png 422w"],sizes:"(max-width: 422px) 100vw, 422px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/2cd18a5c9b6441a99a66fb394978ed75/fa5c1/date-range-result.png",alt:"DateRange filter type",title:"DateRange filter type",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h3",{id:"textrange"},"TextRange"),(0,i.mdx)("p",null,"This is an example of how to add a text range filter type:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing>\n    <columns>\n        <column name="size">\n            <settings>\n                <filter>textRange</filter>\n                <label translate="true">Size</label>\n            </settings>\n        </column>\n    </columns>\n</listing>\n')),(0,i.mdx)("h4",{id:"result-1"},"Result"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"340px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/637993dfa436ef9fbcca5e62cfdee064/cb523/text-range-result.webp 320w","/commerce-frontend-core/static/637993dfa436ef9fbcca5e62cfdee064/3b4fb/text-range-result.webp 340w"],sizes:"(max-width: 340px) 100vw, 340px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/637993dfa436ef9fbcca5e62cfdee064/72799/text-range-result.png 320w","/commerce-frontend-core/static/637993dfa436ef9fbcca5e62cfdee064/9f933/text-range-result.png 340w"],sizes:"(max-width: 340px) 100vw, 340px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/637993dfa436ef9fbcca5e62cfdee064/9f933/text-range-result.png",alt:"TextRange filter type",title:"TextRange filter type",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"methods-and-events"},"Methods and events"),(0,i.mdx)("p",null,"The following ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API")," methods are available:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"buildChildren()")," - create a configuration for the child components."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"clear()")," - clear child elements data."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hasData()")," - check if some children element has data.")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-range-md-b44ac2be65f9494ad101.js.map