"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[8084],{97124:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return s}});var a=n(87462),r=n(63366),d=(n(15007),n(64983)),m=n(91515),i=["components"],o={},l={_frontmatter:o},p=m.Z;function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,d.mdx)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"griddataprovider-component"},"GridDataProvider component"),(0,d.mdx)("p",null,"The GridDataProvider ",(0,d.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/ui-component"},"UI component")," is a data provider for the ",(0,d.mdx)("a",{parentName:"p",href:"listing-grid.md"},"Listing")," component. It provides data in specific format which is shared among all UI components in the scope of the ",(0,d.mdx)("a",{parentName:"p",href:"listing-grid.md"},"Listing")," component."),(0,d.mdx)("h2",{id:"options"},"Options"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Option"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default Value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"class")),(0,d.mdx)("td",{parentName:"tr",align:null},"Path to the ",(0,d.mdx)("a",{parentName:"td",href:"https://glossary.magento.com/php"},"PHP")," class responsible for the ",(0,d.mdx)("a",{parentName:"td",href:"https://glossary.magento.com/backend"},"backend")," implementation of the component"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Magento\\Framework\\View\\Element\\UiComponent\\DataProvider\\DataProvider"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"component")),(0,d.mdx)("td",{parentName:"tr",align:null},"The path to the component's ",(0,d.mdx)("inlineCode",{parentName:"td"},".js")," file, relative to RequireJS."),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Magento_Ui/js/grid/provider"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"firstLoad")),(0,d.mdx)("td",{parentName:"tr",align:null},"Defines the first loading of data. The value changes to ",(0,d.mdx)("inlineCode",{parentName:"td"},"false")," if data reloads."),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"true"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"lastError")),(0,d.mdx)("td",{parentName:"tr",align:null},"Defines if an error occurred for the latest data reloading."),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"false"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"storageConfig")),(0,d.mdx)("td",{parentName:"tr",align:null},"Configuration of the GridDataStorage component."),(0,d.mdx)("td",{parentName:"tr",align:null},"Object"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"{component: 'Magento_Ui/js/grid/data-storage',provider: '${ $.storageConfig.name }',name: '${ $.name }_storage',updateUrl: '${ $.update_url }'}"))))),(0,d.mdx)("h2",{id:"sources-files"},"Sources files"),(0,d.mdx)("p",null,"Extends ",(0,d.mdx)("a",{parentName:"p",href:"../concepts/element.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"UiElement")),":"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/provider.js"},"app/code/Magento/Ui/view/base/web/js/grid/provider.js"))),(0,d.mdx)("h2",{id:"examples"},"Examples"),(0,d.mdx)("h3",{id:"integration"},"Integration"),(0,d.mdx)("p",null,"This is an example of how the GridDataProvider component integrates with the ",(0,d.mdx)("a",{parentName:"p",href:"listing-grid.md"},"Listing")," component:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing>\n    <dataSource name="listing_data_source" component="Magento_Ui/js/grid/provider">\n        <settings>\n            <storageConfig>\n                <param name="indexField" xsi:type="string">entity_id</param>\n            </storageConfig>\n            <updateUrl path="mui/index/render"/>\n        </settings>\n        <aclResource>Vendor_Module::resource</aclResource>\n        <dataProvider class="Magento\\Framework\\View\\Element\\UiComponent\\DataProvider\\DataProvider" name="listing_data_source">\n            <settings>\n                <requestFieldName>id</requestFieldName>\n                <primaryFieldName>entity_id</primaryFieldName>\n            </settings>\n        </dataProvider>\n    </dataSource>\n    ...\n</listing>\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-grid-data-provider-md-f53498a66ba4b0e203f5.js.map