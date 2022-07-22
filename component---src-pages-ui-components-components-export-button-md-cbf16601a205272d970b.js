"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[1444],{48313:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return x}});var a=n(87462),r=n(63366),m=(n(15007),n(64983)),d=n(91515),l=["components"],i={},o={_frontmatter:i},p=d.Z;function x(e){var t=e.components,n=(0,r.Z)(e,l);return(0,m.mdx)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"exportbutton-component"},"ExportButton component"),(0,m.mdx)("p",null,"The ExportButton component implements the ability to export grid data to the specified data format (csv, xml, and so on)."),(0,m.mdx)("h2",{id:"options"},"Options"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Option"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Default Value"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"additionalParams")),(0,m.mdx)("td",{parentName:"tr",align:null},"List of additional parameters added to each performed request."),(0,m.mdx)("td",{parentName:"tr",align:null},"{",(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},"[name: string]: string"),(0,m.mdx)("br",null),"}"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"[]"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"options")),(0,m.mdx)("td",{parentName:"tr",align:null},"List of available formats in which the table's data can be exported."),(0,m.mdx)("td",{parentName:"tr",align:null},"Array",(0,m.mdx)("a",{parentName:"td",href:"#exportoption-interface"},"<",(0,m.mdx)("inlineCode",{parentName:"a"},"ExportOption"),">")),(0,m.mdx)("td",{parentName:"tr",align:null},"[{",(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},'value: "csv",'),(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},'label: "CSV"'),",",(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},'url: "mui/export/gridToCsv"'),(0,m.mdx)("br",null),"}, {",(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},'value: "xml"'),",",(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},'label: "Excel XML",'),(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},'url: "mui/export/gridToXml"'),(0,m.mdx)("br",null),"}]")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"template")),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to the component’s ",(0,m.mdx)("inlineCode",{parentName:"td"},".html")," template."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ui/grid/exportButton"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"checked")),(0,m.mdx)("td",{parentName:"tr",align:null},"The checked data format to export."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"''"))))),(0,m.mdx)("h3",{id:"exportoption-interface"},"ExportOption interface"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Option"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"label")),(0,m.mdx)("td",{parentName:"tr",align:null},"Option's label."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Required")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"url")),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to controller that will process the request."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Required")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"Identifier of the export option."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Required")))),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)("h3",{id:"configure-component"},"Configure component"),(0,m.mdx)("p",null,"To enable the ExportButton component, add the ",(0,m.mdx)("inlineCode",{parentName:"p"},"exportButton")," element with a ",(0,m.mdx)("inlineCode",{parentName:"p"},"selectProvider")," item to the listing configuration file:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<exportButton name="export_button">\n    <argument name="data" xsi:type="array">\n        <item name="config" xsi:type="array">\n            <item name="selectProvider" xsi:type="string">{select_provider_path}</item>\n        </item>\n    </argument>\n</exportButton>\n')),(0,m.mdx)("p",null,"The following is an example of configuring the component using the",(0,m.mdx)("inlineCode",{parentName:"p"},"sales_order_grid")," ",(0,m.mdx)("inlineCode",{parentName:"p"},"selectProvider")," item, ",(0,m.mdx)("inlineCode",{parentName:"p"},"<Magento_Sales_module_dir>/view/adminhtml/ui_component/sales_order_grid.xml"),"."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n    <container name="listing_top">\n        <exportButton name="export_button">\n            <argument name="data" xsi:type="array">\n                <item name="config" xsi:type="array">\n                    <item name="selectProvider" xsi:type="string">sales_order_grid.sales_order_grid.sales_order_columns.ids</item>\n                </item>\n            </argument>\n        </exportButton>\n    </container>\n</listing>\n')),(0,m.mdx)("p",null,"By default the application allows ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/csv"},"CSV")," and Excel ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/xml"},"XML")," export data formats."),(0,m.mdx)("h3",{id:"add-new-export-format"},"Add new export format"),(0,m.mdx)("p",null,"To add new export format:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Add configuration data to ExportButton definition ",(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/ui_component/etc/definition.xml"},(0,m.mdx)("inlineCode",{parentName:"a"},"Magento/Ui/view/base/ui_component/etc/definition.xml"))),(0,m.mdx)("li",{parentName:"ul"},"Add controller for new format processing ",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Ui\\Controller\\Adminhtml\\Export\\GridToFoo")),(0,m.mdx)("li",{parentName:"ul"},"Add converter ",(0,m.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Ui\\Model\\Export\\ConvertToFoo"))),(0,m.mdx)("h2",{id:"source-files"},"Source files"),(0,m.mdx)("p",null,"Extends ",(0,m.mdx)("a",{parentName:"p",href:"../concepts/element.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"UiElement")),":"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/export.js"},(0,m.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/view/base/web/js/grid/export.js")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-export-button-md-cbf16601a205272d970b.js.map