"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[4997],{28638:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return s}});var a=n(87462),i=n(63366),m=(n(15007),n(64983)),l=n(91515),o=["components"],d={},r={_frontmatter:d},p=l.Z;function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,m.mdx)(p,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"expandablecolumn-component"},"ExpandableColumn component"),(0,m.mdx)("p",null,"The ExpandableColumn ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/ui-component"},"UI component")," is an ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/extension"},"extension")," for ",(0,m.mdx)("a",{parentName:"p",href:"column.md"},"Column"),". It alphabetically sorts the options associated with a record/row and renders several options (the number is defined in configuration) into a cell. The full list of options is displayed in a tooltip implemented by the Tooltip UI component ",(0,m.mdx)("inlineCode",{parentName:"p"},"<Magento_Ui_module_dir>/view/base/web/js/lib/knockout/bindings/tooltip.js"),"."),(0,m.mdx)("p",null,"The Expandable Column component can be used in ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"Admin")," and the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/storefront"},"storefront"),"."),(0,m.mdx)("h2",{id:"options"},"Options"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Option"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"bodyTmpl")),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to the template used for rendering the column's fields in the table's body."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ui/grid/cells/expandable"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"component")),(0,m.mdx)("td",{parentName:"tr",align:null},"The path to the component’s ",(0,m.mdx)("inlineCode",{parentName:"td"},".js")," file in terms of RequireJS."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Magento_Ui/js/grid/columns/expandable"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"tooltipTitle")),(0,m.mdx)("td",{parentName:"tr",align:null},"A title for the tooltip."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"''"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"tooltipTmpl")),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to the template used for rendering the component's tooltip content template."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ui/grid/cells/expandable/content"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"visibeItemsLimit")),(0,m.mdx)("td",{parentName:"tr",align:null},"A number of options to display in a cell."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"5"))))),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)("h3",{id:"integration"},"Integration"),(0,m.mdx)("p",null,"The following example shows how the Expandable component integrates with the ",(0,m.mdx)("a",{parentName:"p",href:"listing-grid.md"},"Listing")," component:"),(0,m.mdx)("p",null,"The component's options are set in the configuration ",(0,m.mdx)("inlineCode",{parentName:"p"},".xml")," file as follows:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing>\n    ...\n    <columns>\n        ...\n        <column name="labels" class="Magento\\Ui\\Component\\MassAction\\Columns\\Column">\n            <argument name="data" xsi:type="array">\n                <item name="config" xsi:type="array">\n                    <item name="component" xsi:type="string">Magento_Ui/js/grid/columns/expandable</item>\n                    <item name="tooltipTitle" xsi:type="string">Tooltip Title</item>\n                    <item name="visibeItemsLimit" xsi:type="number">2</item>\n                    <item name="options" xsi:type="array">\n                        <item name="0" xsi:type="array">\n                            <item name="value" xsi:type="number">1</item>\n                            <item name="label" xsi:type="string" translate="true">Option #1</item>\n                        </item>\n                        <item name="1" xsi:type="array">\n                            <item name="value" xsi:type="number">2</item>\n                            <item name="label" xsi:type="string" translate="true">Option #2</item>\n                        </item>\n                        <item name="2" xsi:type="array">\n                            <item name="value" xsi:type="number">3</item>\n                            <item name="label" xsi:type="string" translate="true">Option #3</item>\n                        </item>\n                    </item>\n                </item>\n            </argument>\n            <settings>\n                <label translate="true">Expandable Column Component Example</label>\n            </settings>\n        </column>\n    </columns>\n</listing>\n')),(0,m.mdx)("h4",{id:"result"},"Result"),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"712px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.87500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/2e554ceb98245b2dd785c4bf1357798c/cb523/ui-expandable-result.webp 320w","/commerce-frontend-core/static/2e554ceb98245b2dd785c4bf1357798c/797b9/ui-expandable-result.webp 640w","/commerce-frontend-core/static/2e554ceb98245b2dd785c4bf1357798c/9a0f5/ui-expandable-result.webp 712w"],sizes:"(max-width: 712px) 100vw, 712px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/2e554ceb98245b2dd785c4bf1357798c/72799/ui-expandable-result.png 320w","/commerce-frontend-core/static/2e554ceb98245b2dd785c4bf1357798c/6af66/ui-expandable-result.png 640w","/commerce-frontend-core/static/2e554ceb98245b2dd785c4bf1357798c/3d4b6/ui-expandable-result.png 712w"],sizes:"(max-width: 712px) 100vw, 712px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/2e554ceb98245b2dd785c4bf1357798c/3d4b6/ui-expandable-result.png",alt:"Expandable Component example",title:"Expandable Component example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"808px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.18749999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/c1fc1c66ebe569263715d9712ed4a493/cb523/ui-expandable-expanded-result.webp 320w","/commerce-frontend-core/static/c1fc1c66ebe569263715d9712ed4a493/797b9/ui-expandable-expanded-result.webp 640w","/commerce-frontend-core/static/c1fc1c66ebe569263715d9712ed4a493/97dc1/ui-expandable-expanded-result.webp 808w"],sizes:"(max-width: 808px) 100vw, 808px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/c1fc1c66ebe569263715d9712ed4a493/72799/ui-expandable-expanded-result.png 320w","/commerce-frontend-core/static/c1fc1c66ebe569263715d9712ed4a493/6af66/ui-expandable-expanded-result.png 640w","/commerce-frontend-core/static/c1fc1c66ebe569263715d9712ed4a493/3534c/ui-expandable-expanded-result.png 808w"],sizes:"(max-width: 808px) 100vw, 808px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/c1fc1c66ebe569263715d9712ed4a493/3534c/ui-expandable-expanded-result.png",alt:"Expandable Component expanded example",title:"Expandable Component expanded example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,m.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,m.mdx)("p",null,"This component has a dependency on the Column component, ",(0,m.mdx)("inlineCode",{parentName:"p"},"<Magento_Ui_module_dir>/view/base/web/js/grid/columns/column.js"),"."),(0,m.mdx)("h2",{id:"source-files"},"Source files"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/columns/expandable.js"},(0,m.mdx)("inlineCode",{parentName:"a"},"<Magento_Ui_module_dir>/view/base/web/js/grid/columns/expandable.js"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/grid/cells/expandable.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"<Magento_Ui_module_dir>/view/base/web/templates/grid/cells/expandable.html"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/grid/cells/expandable/content.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"<Magento_Ui_module_dir>/view/base/web/templates/grid/cells/expandable/content.html")))),(0,m.mdx)("h2",{id:"methods-and-events"},"Methods and events"),(0,m.mdx)("p",null,"The following ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API")," methods are available:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"getFullLabel()")," - gets a label from a full list of options."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"getShortLabel()")," - gets a label from a list of options limited by ",(0,m.mdx)("inlineCode",{parentName:"li"},"visibeItemsLimit")," value."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"getLabelsArray()")," - extracts an array of labels associated with provided values and sorts these labels alphabetically."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"isExpandable()")," - checks if the amount of options associated with a record is greater than a ",(0,m.mdx)("inlineCode",{parentName:"li"},"visibeItemsLimit")," value."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"flatOptions()")," - transforms the tree options structure to a linear array.")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-expandable-column-md-6d6ee451dc700e28ec0c.js.map