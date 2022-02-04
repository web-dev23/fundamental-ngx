"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2091],{22091:(l,m,o)=>{o.r(m),o.d(m,{BusyIndicatorDocsModule:()=>G});var i=o(34033),u=o(90147),r=o(6814),e=o(83668),d=o(43870),c=o(9156),x=o(87444),Z=o(34506);let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-busy-indicator-header"]],decls:18,vars:0,consts:[["module","BusyIndicatorModule","subPackage","busy-indicator"]],template:function(n,s){1&n&&(e.TgZ(0,"header"),e._uU(1,"Busy Indicator"),e.qZA(),e.TgZ(2,"description"),e._uU(3," The busy indicator informs the user about an ongoing operation. Try to avoid showing multiple busy indicators at once. Use the busy indicator if: "),e.TgZ(4,"ul"),e.TgZ(5,"li"),e._uU(6,"The ongoing operation covers only part of a screen that has multiple controls"),e.qZA(),e.TgZ(7,"li"),e._uU(8,"You need to display additional information or the user needs to be able to cancel the operation"),e.qZA(),e.qZA(),e._uU(9," Do not use the busy indicator if: "),e.TgZ(10,"ul"),e.TgZ(11,"li"),e._uU(12,"The operation takes less than one second"),e.qZA(),e.TgZ(13,"li"),e._uU(14," You need to block the screen because the user is not supposed to start another activity. In this case, use the busy dialog "),e.qZA(),e.qZA(),e.qZA(),e._UZ(15,"import",0),e._UZ(16,"fd-header-tabs"),e._UZ(17,"router-outlet"))},directives:[d.G,c.w,x.k,Z.c,i.lC],encapsulation:2}),t})();var T=o(35083),v=o(34188),I=o(10043),B=o(35045),U=o(68163),A=o(41921),E=o(50248),C=o(47058),z=o(83382),w=o(16966),p=o(15765);let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-busy-indicator-basic-example"]],decls:2,vars:1,consts:[[2,"text-align","center"],["ariaLabel","loading","title","Please Wait",3,"loading"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"fd-busy-indicator",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("loading",!0))},directives:[p.B],encapsulation:2}),t})();var S=o(33512),N=o(55505),P=o(86019);function J(t,a){if(1&t&&(e.TgZ(0,"div",1),e._UZ(1,"fd-busy-indicator",2),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.Q6J("loading",!0)("size",n)("title",n+" size loading")}}let W=(()=>{class t{constructor(){this.sizes=["s","m","l"]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-busy-indicator-size-example"]],decls:1,vars:1,consts:[["style","text-align: center",4,"ngFor","ngForOf"],[2,"text-align","center"],[3,"loading","size","title"]],template:function(n,s){1&n&&e.YNc(0,J,2,3,"div",0),2&n&&e.Q6J("ngForOf",s.sizes)},directives:[P.sg,p.B],encapsulation:2}),t})();var b=o(19067);let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-busy-indicator-label-example"]],decls:2,vars:1,consts:[["fd-busy-indicator-extended",""],["label","Please wait","title","Please wait",3,"loading"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"fd-busy-indicator",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("loading",!0))},directives:[b.R,p.B],encapsulation:2}),t})();var q=o(64179),f=o(11937);function D(t,a){1&t&&(e.TgZ(0,"div",3),e._UZ(1,"fd-busy-indicator",4),e.qZA()),2&t&&(e.xp6(1),e.Q6J("loading",!0))}let L=(()=>{class t{constructor(n){this.messageToastService=n}openFromTemplate(n){this.messageToastService.open(n,{mousePersist:!0,duration:-1})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(q.H2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-busy-indicator-extended-example"]],decls:4,vars:0,consts:[["fd-button","","label","Open from Template",3,"click"],["fd-button","","label","Hide All","fdType","emphasized",3,"click"],["template",""],["fd-busy-indicator-extended",""],["label","Please Wait...","title","Please wait",3,"loading"]],template:function(n,s){if(1&n){const g=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){e.CHM(g);const $=e.MAs(3);return s.openFromTemplate($)}),e.qZA(),e.TgZ(1,"button",1),e.NdJ("click",function(){return s.messageToastService.hideAll()}),e.qZA(),e.YNc(2,D,2,1,"ng-template",null,2,e.W1O)}},directives:[f.r,b.R,p.B],encapsulation:2}),t})();var y=o(39010),Q=o(40481),M=o(40961),H=o(95098);let O=(()=>{class t{constructor(){this.loading=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-busy-indicator-wrapper-example"]],decls:23,vars:4,consts:[["id","fd-busy-indicator-label-1"],["aria-labelledby","fd-busy-indicator-label-1","title","Block Wrapper",3,"loading","block"],["fd-form-item",""],["fd-form-label","","for","name"],["fd-form-control","","id","name","type","text"],["fd-form-label","","for","surname"],["fd-form-control","","id","surname","type","text"],["fd-form-label","","for","password"],["fd-form-control","","id","password","type","password"],["id","fd-busy-indicator-label-2"],["size","s","aria-labelledby","fd-busy-indicator-label-2","title","Inline Wrapper",3,"loading"],["fd-button","","label","Save"],["fd-button","",3,"label","click"]],template:function(n,s){1&n&&(e.TgZ(0,"h5",0),e._uU(1,"Use Busy Indicator as a block wrapper"),e.qZA(),e.TgZ(2,"fd-busy-indicator",1),e.TgZ(3,"form"),e.TgZ(4,"div",2),e.TgZ(5,"label",3),e._uU(6,"Name:"),e.qZA(),e._UZ(7,"input",4),e.qZA(),e.TgZ(8,"div",2),e.TgZ(9,"label",5),e._uU(10,"Surname:"),e.qZA(),e._UZ(11,"input",6),e.qZA(),e.TgZ(12,"div",2),e.TgZ(13,"label",7),e._uU(14,"Password:"),e.qZA(),e._UZ(15,"input",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"h5",9),e._uU(17,"Use Busy Indicator as a inline wrapper"),e.qZA(),e.TgZ(18,"fd-busy-indicator",10),e._UZ(19,"button",11),e.qZA(),e._UZ(20,"br"),e._UZ(21,"br"),e.TgZ(22,"button",12),e.NdJ("click",function(){return s.loading=!s.loading}),e.qZA()),2&n&&(e.xp6(2),e.Q6J("loading",s.loading)("block",!0),e.xp6(16),e.Q6J("loading",s.loading),e.xp6(4),e.Q6J("label",s.loading?"Disable":"Enable loading"))},directives:[p.B,y._Y,y.JL,y.F,Q.J,M.h,H.A,f.r],encapsulation:2}),t})(),X=(()=>{class t{constructor(){this.busyIndicatorBasicExample=[{language:"html",code:T,fileName:"busy-indicator-basic-example"}],this.busyIndicatorSizeExample=[{language:"html",code:v,fileName:"busy-indicator-size-example"},{language:"typescript",code:I,fileName:"busy-indicator-size-example",component:"BusyIndicatorSizeExampleComponent"}],this.busyIndicatorLabelExample=[{language:"html",code:B,fileName:"busy-indicator-label-example"}],this.busyIndicatorExtendedExample=[{language:"html",code:U,fileName:"busy-indicator-extended-example"},{language:"typescript",code:A,fileName:"busy-indicator-extended-example",component:"BusyIndicatorExtendedExampleComponent"}],this.busyIndicatorWrapperExample=[{language:"html",code:C,fileName:"busy-indicator-wrapper-example"},{language:"typescript",code:E,fileName:"busy-indicator-wrapper-example",component:"BusyIndicatorWrapperExampleComponent"}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-busy-indicator-docs"]],decls:60,vars:5,consts:[["id","default","componentName","busy-indicator"],[3,"exampleFiles"],["id","size","componentName","busy-indicator"],["id","label","componentName","busy-indicator"],["id","extended","componentName","busy-indicator"],["id","wrapper","componentName","busy-indicator"]],template:function(n,s){1&n&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Default Busy Indicator "),e.qZA(),e.TgZ(2,"description"),e._uU(3," Busy Indicator displays loading animation depending on its state. To set Busy Indicator state use "),e.TgZ(4,"code"),e._uU(5,"[loading]"),e.qZA(),e._uU(6," property.\n"),e.qZA(),e.TgZ(7,"component-example"),e._UZ(8,"fd-busy-indicator-basic-example"),e.qZA(),e._UZ(9,"code-example",1),e._UZ(10,"separator"),e.TgZ(11,"fd-docs-section-title",2),e._uU(12," Busy Indicator sizes "),e.qZA(),e.TgZ(13,"description"),e._uU(14," Busy Indicator can be displayed in three different sizes. To change the size use "),e.TgZ(15,"code"),e._uU(16,"[size]"),e.qZA(),e._uU(17," property.\n"),e.qZA(),e.TgZ(18,"component-example"),e._UZ(19,"fd-busy-indicator-size-example"),e.qZA(),e._UZ(20,"code-example",1),e._UZ(21,"separator"),e.TgZ(22,"fd-docs-section-title",3),e._uU(23," Busy Indicator with label "),e.qZA(),e.TgZ(24,"description"),e._uU(25," Busy Indicator can be displayed with label when loading the content. To add the label use "),e.TgZ(26,"code"),e._uU(27,"[label]"),e.qZA(),e._uU(28," string property.\n"),e.qZA(),e.TgZ(29,"component-example"),e._UZ(30,"fd-busy-indicator-label-example"),e.qZA(),e._UZ(31,"code-example",1),e._UZ(32,"separator"),e.TgZ(33,"fd-docs-section-title",4),e._uU(34," Busy Indicator with message toast\n"),e.qZA(),e.TgZ(35,"description"),e._uU(36," Busy Indicator can be displayed with message toast when loading the content. To add the extended busy indicator wrap the "),e.TgZ(37,"code"),e._uU(38,"fd-busy-indicator"),e.qZA(),e._uU(39," component with in "),e.TgZ(40,"code"),e._uU(41,"fd-busy-indicator-extended"),e.qZA(),e._uU(42," directive.\n"),e.qZA(),e.TgZ(43,"component-example"),e._UZ(44,"fd-busy-indicator-extended-example"),e.qZA(),e._UZ(45,"code-example",1),e._UZ(46,"separator"),e.TgZ(47,"fd-docs-section-title",5),e._uU(48," Busy Indicator as wrapper "),e.qZA(),e.TgZ(49,"description"),e._uU(50," Busy Indicator might be used as a wrapper to display elements or sections of the page behind an overflow. Depending of the wrapped element type, use "),e.TgZ(51,"code"),e._uU(52,"[block]"),e.qZA(),e._uU(53," property to manipulate the "),e.TgZ(54,"code"),e._uU(55,"display"),e.qZA(),e._uU(56," property of the Busy Indicator.\n"),e.qZA(),e.TgZ(57,"component-example"),e._UZ(58,"fd-busy-indicator-wrapper-example"),e.qZA(),e._UZ(59,"code-example",1)),2&n&&(e.xp6(9),e.Q6J("exampleFiles",s.busyIndicatorBasicExample),e.xp6(11),e.Q6J("exampleFiles",s.busyIndicatorSizeExample),e.xp6(11),e.Q6J("exampleFiles",s.busyIndicatorLabelExample),e.xp6(14),e.Q6J("exampleFiles",s.busyIndicatorExtendedExample),e.xp6(14),e.Q6J("exampleFiles",s.busyIndicatorWrapperExample))},directives:[z.k,c.w,w.O,F,S.E,N.N,W,_,L,O],styles:[".fd-button{margin-right:8px}\n"],encapsulation:2}),t})();var Y=o(16543),j=o(37090),R=o(90667);const k=[{path:"",component:h,children:[{path:"",component:X},{path:"api",component:u.h,data:{content:r.X.busyIndicator}}]}];let G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.Bz.forChild(k),Y.g,j.UH,R.ej],i.Bz]}),t})()},87444:(l,m,o)=>{o.d(m,{k:()=>u});var i=o(83668);let u=(()=>{class r{constructor(d){this.currentLib=d}ngOnInit(){const d=["@fundamental-ngx",this.currentLib];this.subPackage&&d.push(this.subPackage),this.library=d.join("/")}}return r.\u0275fac=function(d){return new(d||r)(i.Y36("CURRENT_LIB"))},r.\u0275cmp=i.Xpm({type:r,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:9,vars:2,consts:[[2,"color","rgb(0, 0, 136)"],[2,"color","rgb(0, 136, 0)"]],template:function(d,c){1&d&&(i.TgZ(0,"code"),i.TgZ(1,"span",0),i._uU(2,"import"),i.qZA(),i._uU(3),i.TgZ(4,"span",0),i._uU(5,"from "),i.qZA(),i.TgZ(6,"span",1),i._uU(7),i.qZA(),i._uU(8,"; "),i.qZA()),2&d&&(i.xp6(3),i.hij(" { ",c.module," } "),i.xp6(4),i.hij("'",c.library,"'"))},encapsulation:2}),r})()},35083:l=>{l.exports='<div style="text-align: center">\n    <fd-busy-indicator [loading]="true" ariaLabel="loading" title="Please Wait"></fd-busy-indicator>\n</div>\n'},68163:l=>{l.exports='<button fd-button label="Open from Template" (click)="openFromTemplate(template)"></button>\n<button fd-button label="Hide All" fdType="emphasized" (click)="messageToastService.hideAll()"></button>\n\n<ng-template #template>\n    <div fd-busy-indicator-extended>\n        <fd-busy-indicator [loading]="true" label="Please Wait..." title="Please wait"></fd-busy-indicator>\n    </div>\n</ng-template>\n'},41921:l=>{l.exports="import { Component } from '@angular/core';\nimport { MessageToastService } from '@fundamental-ngx/core/message-toast';\n\n@Component({\n    selector: 'fd-busy-indicator-extended-example',\n    templateUrl: './busy-indicator-extended-example.component.html'\n})\nexport class BusyIndicatorExtendedExampleComponent {\n    /** @hidden */\n    constructor(public messageToastService: MessageToastService) {}\n\n    openFromTemplate(template): void {\n        this.messageToastService.open(template, {\n            mousePersist: true,\n            duration: -1\n        });\n    }\n}\n"},35045:l=>{l.exports='<div fd-busy-indicator-extended>\n    <fd-busy-indicator [loading]="true" label="Please wait" title="Please wait"></fd-busy-indicator>\n</div>\n'},34188:l=>{l.exports='<div style="text-align: center" *ngFor="let size of sizes">\n    <fd-busy-indicator [loading]="true" [size]="size" [title]="size + \' \' + \'size loading\'"></fd-busy-indicator>\n</div>\n'},10043:l=>{l.exports="import { Component } from '@angular/core';\nimport { BusyIndicatorSize } from '@fundamental-ngx/core/busy-indicator';\n\n@Component({\n    selector: 'fd-busy-indicator-size-example',\n    templateUrl: './busy-indicator-size-example.component.html'\n})\nexport class BusyIndicatorSizeExampleComponent {\n    sizes: BusyIndicatorSize[] = ['s', 'm', 'l'];\n}\n"},47058:l=>{l.exports='<h5 id="fd-busy-indicator-label-1">Use Busy Indicator as a block wrapper</h5>\n<fd-busy-indicator [loading]="loading" [block]="true" aria-labelledby="fd-busy-indicator-label-1" title="Block Wrapper">\n    <form>\n        <div fd-form-item>\n            <label fd-form-label for="name">Name:</label>\n            <input fd-form-control id="name" type="text" />\n        </div>\n\n        <div fd-form-item>\n            <label fd-form-label for="surname">Surname:</label>\n            <input fd-form-control id="surname" type="text" />\n        </div>\n\n        <div fd-form-item>\n            <label fd-form-label for="password">Password:</label>\n            <input fd-form-control id="password" type="password" />\n        </div>\n    </form>\n</fd-busy-indicator>\n\n<h5 id="fd-busy-indicator-label-2">Use Busy Indicator as a inline wrapper</h5>\n<fd-busy-indicator [loading]="loading" size="s" aria-labelledby="fd-busy-indicator-label-2" title="Inline Wrapper">\n    <button fd-button label="Save"></button>\n</fd-busy-indicator>\n\n<br />\n<br />\n\n<button fd-button [label]="loading ? \'Disable\' : \'Enable\' + \' loading\'" (click)="loading = !loading"></button>\n'},50248:l=>{l.exports="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-busy-indicator-wrapper-example',\n    templateUrl: './busy-indicator-wrapper-example.component.html'\n})\nexport class BusyIndicatorWrapperExampleComponent {\n    loading = true;\n}\n"}}]);