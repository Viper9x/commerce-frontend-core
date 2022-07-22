"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[7342],{10099:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(87462),m=a(63366),r=(a(15007),a(64983)),d=a(91515),i=["components"],l={},o={_frontmatter:l},p=d.Z;function s(e){var t=e.components,a=(0,m.Z)(e,i);return(0,r.mdx)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"bookmarks-component"},"Bookmarks component"),(0,r.mdx)("p",null,"The Bookmarks component stores active and changed state of a grid implemented using ",(0,r.mdx)("a",{parentName:"p",href:"listing-grid.md"},"Listing"),". It includes the state of filters, columns position, applied sorting, pagination, and so on."),(0,r.mdx)("h2",{id:"options"},"Options"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Option"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"newViewLabel")),(0,r.mdx)("td",{parentName:"tr",align:null},"Default label for a new bookmark."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"New View")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"template")),(0,r.mdx)("td",{parentName:"tr",align:null},"Path to the component’s ",(0,r.mdx)("inlineCode",{parentName:"td"},".html")," template."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"ui/grid/controls/bookmarks/bookmarks"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"viewTmpl")),(0,r.mdx)("td",{parentName:"tr",align:null},"Path to the ",(0,r.mdx)("inlineCode",{parentName:"td"},".html")," template used to render each bookmark in the list."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"ui/grid/controls/bookmarks/view"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"defaultIndex")),(0,r.mdx)("td",{parentName:"tr",align:null},"The index of the default view."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"default"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"activeIndex")),(0,r.mdx)("td",{parentName:"tr",align:null},"The index of the current view."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"default"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"viewsArray")),(0,r.mdx)("td",{parentName:"tr",align:null},"The array of views."),(0,r.mdx)("td",{parentName:"tr",align:null},"Array"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"default"))))),(0,r.mdx)("h2",{id:"source-files"},"Source files"),(0,r.mdx)("p",null,"Extends ",(0,r.mdx)("a",{parentName:"p",href:"../concepts/collection.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"uiCollection")),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/controls/bookmarks/bookmarks.js"},(0,r.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/view/base/web/js/grid/controls/bookmarks/bookmarks.js"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/grid/controls/bookmarks/view.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/view/base/web/templates/grid/controls/bookmarks/view.html")))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("h3",{id:"integration"},"Integration"),(0,r.mdx)("p",null,"This is an example of how to integrate the Bookmarks component with the ",(0,r.mdx)("a",{parentName:"p",href:"listing-grid.md"},"Listing")," component:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing>\n    ...\n    <listingToolbar>\n        ...\n        <bookmark name="bookmarks"/>\n    </listingToolbar>\n    ...\n</listing>\n')),(0,r.mdx)("h4",{id:"result"},"Result"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"252px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/577c1bd087b87e82bf13fc07aab8d3dd/0acae/bookmarks-result.webp 252w"],sizes:"(max-width: 252px) 100vw, 252px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/577c1bd087b87e82bf13fc07aab8d3dd/5e02b/bookmarks-result.png 252w"],sizes:"(max-width: 252px) 100vw, 252px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/577c1bd087b87e82bf13fc07aab8d3dd/5e02b/bookmarks-result.png",alt:"Bookmarks Component example",title:"Bookmarks Component example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-bookmarks-md-af821d8aae6500110255.js.map