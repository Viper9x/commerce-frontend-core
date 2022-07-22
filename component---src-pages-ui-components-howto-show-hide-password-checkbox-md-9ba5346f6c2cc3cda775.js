"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[9961],{23768:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return m}});var n=t(87462),o=t(63366),s=(t(15007),t(64983)),d=t(91515),i=["components"],r={},p={_frontmatter:r},c=d.Z;function m(e){var a=e.components,t=(0,o.Z)(e,i);return(0,s.mdx)(c,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"add-a-showhide-password-checkbox"},"Add a show/hide password checkbox"),(0,s.mdx)("p",null,'This topic describes how you can implement the "show or hide" password checkbox functionality in custom forms.'),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"690px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/0ac3bcc06b9aae5b15ffd2cdfa4d5e86/cb523/show-or-hide-password-checkbox-v2.1.webp 320w","/commerce-frontend-core/static/0ac3bcc06b9aae5b15ffd2cdfa4d5e86/797b9/show-or-hide-password-checkbox-v2.1.webp 640w","/commerce-frontend-core/static/0ac3bcc06b9aae5b15ffd2cdfa4d5e86/1f55c/show-or-hide-password-checkbox-v2.1.webp 690w"],sizes:"(max-width: 690px) 100vw, 690px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/0ac3bcc06b9aae5b15ffd2cdfa4d5e86/72799/show-or-hide-password-checkbox-v2.1.png 320w","/commerce-frontend-core/static/0ac3bcc06b9aae5b15ffd2cdfa4d5e86/6af66/show-or-hide-password-checkbox-v2.1.png 640w","/commerce-frontend-core/static/0ac3bcc06b9aae5b15ffd2cdfa4d5e86/1e043/show-or-hide-password-checkbox-v2.1.png 690w"],sizes:"(max-width: 690px) 100vw, 690px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/0ac3bcc06b9aae5b15ffd2cdfa4d5e86/1e043/show-or-hide-password-checkbox-v2.1.png",alt:"Show or Hide Password Checkbox",title:"Show or Hide Password Checkbox",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"step-1-add-the-html-code"},"Step 1: Add the HTML code"),(0,s.mdx)("p",null,'Add the HTML code snippet which renders the "show or hide" password checkbox to the PHTML template file. It uses the ',(0,s.mdx)("inlineCode",{parentName:"p"},"scope")," custom knockout binding."),(0,s.mdx)("p",null,"Below is the HTML code snippet:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-phtml"},'<div class="field choice" data-bind="scope: \'showPassword\'">\n    \x3c!-- ko template: getTemplate() --\x3e\x3c!-- /ko --\x3e\n</div>\n')),(0,s.mdx)("p",null,"For more information about ",(0,s.mdx)("inlineCode",{parentName:"p"},"Scope")," binding, refer to ",(0,s.mdx)("a",{parentName:"p",href:"../concepts/knockout-bindings.md#scope"},"Scope Binding")),(0,s.mdx)("h2",{id:"step-2-add-the-x-magento-init-script"},"Step 2: Add the x-magento-init script"),(0,s.mdx)("p",null,'Initialize the "show or hide" password checkbox using the ',(0,s.mdx)("inlineCode",{parentName:"p"},"text/x-magento-init")," script. It uses the scope binding name ",(0,s.mdx)("inlineCode",{parentName:"p"},"showPassword")," to initialize the component. Pass both the component javascript file path, and the password field id prefixed with #."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-phtml"},'<script type="text/x-magento-init">\n    {\n        "*": {\n            "Magento_Ui/js/core/app": {\n                "components": {\n                    "showPassword": {\n                        "component": "Magento_Customer/js/show-password",\n                        "passwordSelector": "#pass"\n                    }\n                }\n            }\n        }\n    }\n<\/script>\n')),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Option"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"component")),(0,s.mdx)("td",{parentName:"tr",align:null},"The path to the component’s ",(0,s.mdx)("inlineCode",{parentName:"td"},".js")," file, relative to RequireJS. Here the component path value is ",(0,s.mdx)("inlineCode",{parentName:"td"},"Magento_Customer/js/show-password")),(0,s.mdx)("td",{parentName:"tr",align:null},"String")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"passwordSelector")),(0,s.mdx)("td",{parentName:"tr",align:null},"The id of the password input field, such as ",(0,s.mdx)("inlineCode",{parentName:"td"},"#pass"),"."),(0,s.mdx)("td",{parentName:"tr",align:null},"String")))),(0,s.mdx)("p",null,'The RequireJS file path for the "show or hide" password checkbox is ',(0,s.mdx)("inlineCode",{parentName:"p"},"Magento_Customer/js/show-password"),". It is defined in ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Customer/view/frontend/web/js/show-password.js"},(0,s.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Customer/view/frontend/web/js/show-password.js")),"."),(0,s.mdx)("h2",{id:"example"},"Example"),(0,s.mdx)("p",null,'This example shows the custom implemented company login form template (PHTML file) with the "show or hide" password checkbox.'),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-phtml"},'<div class="block-content" aria-labelledby="block-company-login-heading">\n    <form class="form form-company-login" action="<?= $escaper->escapeUrl($block->getPostActionUrl()) ?>" method="post" id="company-login-form">\n        <?= $block->getBlockHtml(\'formkey\') ?>\n        <fieldset class="fieldset login" data-hasrequired="<?= $escaper->escapeHtml(__(\'* Required Fields\')) ?>">\n            <div class="field email required">\n                <label class="label" for="email"><span><?= $escaper->escapeHtml(__(\'Company Email\')) ?></span></label>\n                <div class="control">\n                    <input name="login[username]" id="email" type="email" class="input-text" data-validate="{required:true, \'validate-email\':true}">\n                </div>\n            </div>\n            <div class="field password required">\n                <label for="pass" class="label"><span><?= $escaper->escapeHtml(__(\'Password\')) ?></span></label>\n                <div class="control">\n                    <input name="login[password]" type="password" class="input-text" id="pass" data-validate="{required:true}">\n                </div>\n            </div>\n            <div class="field choice" data-bind="scope: \'showPassword\'">\n                \x3c!-- ko template: getTemplate() --\x3e\x3c!-- /ko --\x3e\n            </div>\n            <div class="actions-toolbar">\n                <div class="primary">\n                    <button type="submit" class="action login primary" id="company-submit"><span><?= $escaper->escapeHtml(__(\'Company Sign In\')) ?></span></button>\n                </div>\n            </div>\n        </fieldset>\n    </form>\n</div>\n<script type="text/x-magento-init">\n    {\n        "*": {\n            "Magento_Ui/js/core/app": {\n                "components": {\n                    "showPassword": {\n                        "component": "Magento_Customer/js/show-password",\n                        "passwordSelector": "#pass"\n                    }\n                }\n            }\n        }\n    }\n<\/script>\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-howto-show-hide-password-checkbox-md-9ba5346f6c2cc3cda775.js.map