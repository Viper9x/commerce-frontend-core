"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[3194],{86434:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return s}});var a=n(87462),m=n(63366),i=(n(15007),n(64983)),r=n(91515),o=["components"],d={},l={_frontmatter:d},p=r.Z;function s(e){var t=e.components,n=(0,m.Z)(e,o);return(0,i.mdx)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"radioset-component"},"Radioset component"),(0,i.mdx)("p",null,"The Radioset component is a shortcut for ",(0,i.mdx)("a",{parentName:"p",href:"checkbox-set.md"},"Checkboxset"),", with the input type set to the radio button."),(0,i.mdx)("h2",{id:"options"},"Options"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Option"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"component")),(0,i.mdx)("td",{parentName:"tr",align:null},"The path to the component’s ",(0,i.mdx)("inlineCode",{parentName:"td"},".js")," file in terms of RequireJS."),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Magento_Ui/js/form/element/checkbox-set"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"multiple")),(0,i.mdx)("td",{parentName:"tr",align:null},"Set the input type in the UI: true for checkbox, false for radio button."),(0,i.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"false"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"options")),(0,i.mdx)("td",{parentName:"tr",align:null},"The array of the options to be displayed in the list for selection."),(0,i.mdx)("td",{parentName:"tr",align:null},"Array"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"[]"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"template")),(0,i.mdx)("td",{parentName:"tr",align:null},"The path to the component’s ",(0,i.mdx)("inlineCode",{parentName:"td"},".html")," template."),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"ui/form/element/checkbox-set"))))),(0,i.mdx)("h2",{id:"source-files"},"Source files"),(0,i.mdx)("p",null,"Extends ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js"},(0,i.mdx)("inlineCode",{parentName:"a"},"Abstract")),":"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/element/checkbox-set.js"},(0,i.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/view/base/web/js/form/element/checkbox-set.js"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/form/element/checkbox-set.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/view/base/web/templates/form/element/checkbox-set.html")))),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)("h3",{id:"integration"},"Integration"),(0,i.mdx)("p",null,"This is an example of how the Radioset component integrates with the ",(0,i.mdx)("a",{parentName:"p",href:"form.md"},"Form")," component:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<form>\n    ...\n    <fieldset>\n        ...\n        <radioset name="radioset_example">\n            <argument name="data" xsi:type="array">\n                <item name="config" xsi:type="array">\n                    <item name="additionalInfo" xsi:type="string">Additional information</item>\n                </item>\n            </argument>\n            <settings>\n                <label translate="true">Radioset Component Example</label>\n                <options>\n                    <option name="0" xsi:type="array">\n                        <item name="value" xsi:type="number">1</item>\n                        <item name="label" xsi:type="string" translate="true">Option #1</item>\n                    </option>\n                    <option name="1" xsi:type="array">\n                        <item name="value" xsi:type="number">2</item>\n                        <item name="label" xsi:type="string" translate="true">Option #2</item>\n                    </option>\n                    <option name="2" xsi:type="array">\n                        <item name="value" xsi:type="number">3</item>\n                        <item name="label" xsi:type="string" translate="true">Option #3</item>\n                    </option>\n                </options>\n            </settings>\n        </radioset>\n    </fieldset>\n</form>\n')),(0,i.mdx)("h4",{id:"result"},"Result"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"796px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/5357881610b40a67ebc65cad3748882b/cb523/ui-radioset-result.webp 320w","/commerce-frontend-core/static/5357881610b40a67ebc65cad3748882b/797b9/ui-radioset-result.webp 640w","/commerce-frontend-core/static/5357881610b40a67ebc65cad3748882b/a8d47/ui-radioset-result.webp 796w"],sizes:"(max-width: 796px) 100vw, 796px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/5357881610b40a67ebc65cad3748882b/72799/ui-radioset-result.png 320w","/commerce-frontend-core/static/5357881610b40a67ebc65cad3748882b/6af66/ui-radioset-result.png 640w","/commerce-frontend-core/static/5357881610b40a67ebc65cad3748882b/d48f1/ui-radioset-result.png 796w"],sizes:"(max-width: 796px) 100vw, 796px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/5357881610b40a67ebc65cad3748882b/d48f1/ui-radioset-result.png",alt:"Radioset Component Example",title:"Radioset Component Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-radio-set-md-71fb0bd11d13e1d23c1b.js.map