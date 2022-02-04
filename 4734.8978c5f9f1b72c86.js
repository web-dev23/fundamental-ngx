"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4734],{90147:(m,_,e)=>{e.d(_,{h:()=>t}),e(25978);var o=e(83668),h=e(34033),p=e(90101),c=e(86019),d=e(5551),C=e(11937),T=e(48869),A=e(22829),b=e(69290),S=e(17631);const v=["menu"];function D(w,x){if(1&w&&o._UZ(0,"button",8),2&w){const s=o.oxw(),l=o.MAs(6);o.Q6J("label","Select a file ("+s.files.length+")")("fdMenu",!0)("fdMenuTrigger",l)}}function E(w,x){if(1&w){const s=o.EpF();o.TgZ(0,"li",9),o.NdJ("click",function(){const Z=o.CHM(s).$implicit;return o.oxw().getFile(Z)}),o.TgZ(1,"div",10),o.TgZ(2,"span",11),o._uU(3),o.qZA(),o.qZA(),o.qZA()}if(2&w){const s=x.$implicit,l=o.oxw();o.ekj("is-selected",s===l.activeFile),o.xp6(3),o.Oqu(s)}}let t=(()=>{class w{constructor(s,l){this.route=s,this.apiService=l}ngOnInit(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"}getFile(s){this.apiService.getComponentHtml(s).subscribe(l=>{this.result=l,this.activeFile=s,this.menu.close()},l=>{console.warn("Did not find file "+s+".\nError: "+l)})}}return w.\u0275fac=function(s){return new(s||w)(o.Y36(h.gz),o.Y36(p.S))},w.\u0275cmp=o.Xpm({type:w,selectors:[["fd-api"]],viewQuery:function(s,l){if(1&s&&o.Gf(v,5),2&s){let g;o.iGM(g=o.CRH())&&(l.menu=g.first)}},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"label","fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"is-selected","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"label","fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(s,l){1&s&&(o.TgZ(0,"div",0),o.TgZ(1,"h2",1),o._uU(2),o.qZA(),o._UZ(3,"span",2),o.YNc(4,D,1,3,"button",3),o.TgZ(5,"fd-menu",4,5),o.YNc(7,E,4,3,"li",6),o.qZA(),o.qZA(),o._UZ(8,"div",7)),2&s&&(o.xp6(2),o.Oqu(l.activeFile),o.xp6(2),o.Q6J("ngIf",l.files.length>1),o.xp6(1),o.Q6J("fillControlMode",null),o.xp6(2),o.Q6J("ngForOf",l.files),o.xp6(1),o.Q6J("innerHTML",l.result,o.oJD))},directives:[c.O5,d.M,c.sg,C.r,T.k,A.qv,b.K,S.h],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:bold;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),w})()},34506:(m,_,e)=>{e.d(_,{c:()=>A});var n=e(83668),o=e(73685),h=e(63062),p=e(34033),c=e(89095),d=e(82195),C=e(55505);const T=function(){return{exact:!0}};let A=(()=>{class b{}return b.\u0275fac=function(v){return new(v||b)},b.\u0275cmp=n.Xpm({type:b,selectors:[["fd-header-tabs"]],decls:12,vars:4,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLink","./","routerLinkActive","",3,"active","routerLinkActiveOptions"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLink","./api","routerLinkActive","",3,"active"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(v,D){if(1&v&&(n.TgZ(0,"ul",0),n.TgZ(1,"li",1),n.TgZ(2,"a",2,3),n.TgZ(4,"span",4),n._uU(5,"Examples"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"li",1),n.TgZ(7,"a",5,6),n.TgZ(9,"span",4),n._uU(10,"API"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(11,"separator",7)),2&v){const E=n.MAs(3),t=n.MAs(8);n.xp6(2),n.Q6J("active",E.isActive)("routerLinkActiveOptions",n.DdM(3,T)),n.xp6(5),n.Q6J("active",t.isActive)}},directives:[o.d,h.w,p.yS,c.w,p.Od,d.P6,C.N],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px;box-shadow:none}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),b})()},43870:(m,_,e)=>{e.d(_,{G:()=>h});var n=e(83668);const o=["*"];let h=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["header"]],ngContentSelectors:o,decls:2,vars:0,consts:[[1,"header"]],template:function(d,C){1&d&&(n.F$t(),n.TgZ(0,"h1",0),n.Hsn(1),n.qZA())},styles:[".header[_ngcontent-%COMP%]{margin-top:2rem;font-size:2.2rem}"]}),p})()},87444:(m,_,e)=>{e.d(_,{k:()=>o});var n=e(83668);let o=(()=>{class h{constructor(c){this.currentLib=c}ngOnInit(){const c=["@fundamental-ngx",this.currentLib];this.subPackage&&c.push(this.subPackage),this.library=c.join("/")}}return h.\u0275fac=function(c){return new(c||h)(n.Y36("CURRENT_LIB"))},h.\u0275cmp=n.Xpm({type:h,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:9,vars:2,consts:[[2,"color","rgb(0, 0, 136)"],[2,"color","rgb(0, 136, 0)"]],template:function(c,d){1&c&&(n.TgZ(0,"code"),n.TgZ(1,"span",0),n._uU(2,"import"),n.qZA(),n._uU(3),n.TgZ(4,"span",0),n._uU(5,"from "),n.qZA(),n.TgZ(6,"span",1),n._uU(7),n.qZA(),n._uU(8,"; "),n.qZA()),2&c&&(n.xp6(3),n.hij(" { ",d.module," } "),n.xp6(4),n.hij("'",d.library,"'"))},encapsulation:2}),h})()},90101:(m,_,e)=>{e.d(_,{S:()=>h});var n=e(83668),o=e(44522);let h=(()=>{class p{constructor(d,C){this.httpClient=d,this.currentLib=C,this.BASE_URL="assets/typedoc/"}getComponentHtml(d){d=d.toLocaleLowerCase()+".html";const C=this.buildUrl(this.BASE_URL,this.currentLib||"core","classes",d);return this.httpClient.get(C,{responseType:"text"})}buildUrl(...d){return d.join("/").replace(/\/+/g,"/")}}return p.\u0275fac=function(d){return new(d||p)(n.LFG(o.eN),n.LFG("CURRENT_LIB"))},p.\u0275prov=n.Yz7({token:p,factory:p.\u0275fac}),p})()},16543:(m,_,e)=>{e.d(_,{g:()=>l});var n=e(86019),o=e(34033),h=e(39010),p=e(71029),c=e(52427),d=e(90101),C=e(58817),T=e(13131),A=e(90667),b=e(7754),S=e(23932),v=e(25978),D=e(73272),E=e(38203),t=e(74349),w=e(37152);const x=[t.P4,v.$9,b.Q,E.o,T.hJ,D.H,A.nY,S.L,w.s];var s=e(83668);let l=(()=>{class g{}return g.\u0275fac=function(U){return new(U||g)},g.\u0275mod=s.oAB({type:g}),g.\u0275inj=s.cJS({providers:[c.t,d.S],imports:[[h.u5,n.ez,o.Bz,C.f,x,p.JP.forChild()],h.u5,h.UX,C.f,n.ez,t.P4,v.$9,b.Q,E.o,T.hJ,D.H,A.nY,S.L,w.s]}),g})()},54734:(m,_,e)=>{e.r(_),e.d(_,{PlatformSwitchDocsModule:()=>X});var n=e(34033),o=e(80270),h=e(90147),p=e(16543),c=e(85533),d=e(98309),C=e(38982),T=e(533),A=e(32059),b=e(37883),S=e(21907),v=e(9263),D=e(52664),E=e(46787),t=e(83668),w=e(83382),x=e(9156),s=e(16966),l=e(74360),g=e(94859),Z=e(63288);let U=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["fdp-switch-sizes-example"]],decls:5,vars:2,consts:[["id","default-switch","label","Default Switch",3,"rank"],["name","default-switch","ariaLabel","Default Switch","ariaLabelledby","switch-disabled-label"],["id","default-compact-switch","label","Default Compact Switch",3,"rank"],["name","default-compact-switch","ariaLabel","Default Compact Switch","ariaLabelledby","switch-disabled-label","contentDensity","compact"]],template:function(a,f){1&a&&(t.TgZ(0,"fdp-form-group"),t.TgZ(1,"fdp-form-field",0),t._UZ(2,"fdp-switch",1),t.qZA(),t.TgZ(3,"fdp-form-field",2),t._UZ(4,"fdp-switch",3),t.qZA(),t.qZA()),2&a&&(t.xp6(1),t.Q6J("rank",1),t.xp6(2),t.Q6J("rank",1))},directives:[l.H,g.h,Z.q],encapsulation:2}),i})();var L=e(33512),P=e(55505),u=e(39010);let O=(()=>{class i{constructor(){this.customForm=new u.cw({fieldDisable:new u.NI({value:!0,disabled:!0})})}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["fdp-disabled-switch-example"]],decls:5,vars:5,consts:[[3,"formGroup"],["id","switch-disabled","label","Default disabled Switch",3,"rank"],["name","switch-disabled","ariaLabel","Switch disabled","ariaLabelledby","switch-disabled-label","contentDensity","cozy",3,"semantic","disabled"],["id","form-switch-disabled","label","Form Default disabled Switch",3,"rank"],["name","form-switch-disabled","ariaLabel","Form Switch disabled","ariaLabelledby","form-switch-disabled-label","formControlName","fieldDisable"]],template:function(a,f){1&a&&(t.TgZ(0,"fdp-form-group",0),t.TgZ(1,"fdp-form-field",1),t._UZ(2,"fdp-switch",2),t.qZA(),t.TgZ(3,"fdp-form-field",3),t._UZ(4,"fdp-switch",4),t.qZA(),t.qZA()),2&a&&(t.Q6J("formGroup",f.customForm),t.xp6(1),t.Q6J("rank",1),t.xp6(1),t.Q6J("semantic",!1)("disabled",!0),t.xp6(1),t.Q6J("rank",1))},directives:[l.H,u.JL,u.sg,g.h,Z.q,u.JJ,u.u],encapsulation:2}),i})(),J=(()=>{class i{constructor(){this.switched=!0}onSwitchChange(){}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["fdp-semantic-switch-example"]],decls:5,vars:5,consts:[["id","semantic-switch","label","Default Semantic Switch",3,"rank"],["name","semantic-switch","ariaLabel","Semantic Switch","ariaLabelledby","semantic-switch-label",3,"semantic","switchChange"],["id","semantic-switch-compact","label","Default Semantic Compact Switch",3,"rank"],["name","semantic-switch-compact","ariaLabel","Semantic Switch Compact","ariaLabelledby","semantic-switch-compact-label","contentDensity","compact",3,"semantic","ngModel","ngModelChange","switchChange"]],template:function(a,f){1&a&&(t.TgZ(0,"fdp-form-group"),t.TgZ(1,"fdp-form-field",0),t.TgZ(2,"fdp-switch",1),t.NdJ("switchChange",function(){return f.onSwitchChange()}),t.qZA(),t.qZA(),t.TgZ(3,"fdp-form-field",2),t.TgZ(4,"fdp-switch",3),t.NdJ("ngModelChange",function(F){return f.switched=F})("switchChange",function(){return f.onSwitchChange()}),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(1),t.Q6J("rank",1),t.xp6(1),t.Q6J("semantic",!0),t.xp6(1),t.Q6J("rank",1),t.xp6(1),t.Q6J("semantic",!0)("ngModel",f.switched))},directives:[l.H,g.h,Z.q,u.JJ,u.On],encapsulation:2}),i})();var M=e(86019);function I(i,r){1&i&&(t.TgZ(0,"span",10),t._uU(1," Selection is required "),t.qZA())}function N(i,r){1&i&&t.YNc(0,I,2,0,"span",9),2&i&&t.Q6J("ngIf",r.$implicit.required)}let Q=(()=>{class i{constructor(){this.customForm=new u.cw({switch1:new u.NI(!1),switch2:new u.NI(!0),switch3:new u.NI(!1)}),this.validators=[u.kI.requiredTrue]}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["fdp-switch-forms-example"]],decls:12,vars:13,consts:[[3,"formGroup"],["id","switch1","label","Form Switch 1",3,"rank","required","validators","i18Strings"],["name","switch-1","ariaLabel","switch-label","ariaLabelledby","switch-label","contentDensity","cozy","formControlName","switch1",3,"semantic"],["id","switch2","label","Form Switch 2",3,"rank"],["name","switch-2","ariaLabel","Switch","ariaLabelledby","switch-label","contentDensity","compact","formControlName","switch2",3,"semantic"],["id","switch3","label","Form Switch 3",3,"rank"],["name","switch-3","ariaLabel","Switch","ariaLabelledby","switch-label","contentDensity","compact","formControlName","switch3",3,"semantic"],["switchOneErrors",""],[2,"padding-left","2rem"],["role","alert","aria-atomic","true",4,"ngIf"],["role","alert","aria-atomic","true"]],template:function(a,f){if(1&a&&(t.TgZ(0,"fdp-form-group",0),t.TgZ(1,"fdp-form-field",1),t._UZ(2,"fdp-switch",2),t.qZA(),t.TgZ(3,"fdp-form-field",3),t._UZ(4,"fdp-switch",4),t.qZA(),t.TgZ(5,"fdp-form-field",5),t._UZ(6,"fdp-switch",6),t.qZA(),t.qZA(),t.YNc(7,N,1,1,"ng-template",null,7,t.W1O),t.TgZ(9,"div",8),t._uU(10),t.ALo(11,"json"),t.qZA()),2&a){const y=t.MAs(8);t.Q6J("formGroup",f.customForm),t.xp6(1),t.Q6J("rank",4)("required",!0)("validators",f.validators)("i18Strings",y),t.xp6(1),t.Q6J("semantic",!1),t.xp6(1),t.Q6J("rank",4),t.xp6(1),t.Q6J("semantic",!0),t.xp6(1),t.Q6J("rank",4),t.xp6(1),t.Q6J("semantic",!1),t.xp6(4),t.hij("form value: ",t.lcZ(11,11,f.customForm.getRawValue()),"")}},directives:[l.H,u.JL,u.sg,g.h,Z.q,u.JJ,u.u,M.O5],pipes:[M.Ts],encapsulation:2}),i})();const R=c.eE.createProviderFactory({contentDensity:"compact"}),B={provide:c.eE,useFactory:R};let H=(()=>{class i{constructor(){this.model={switch:!0}}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["fdp-switch-config-example"]],features:[t._Bn([B])],decls:8,vars:6,consts:[[3,"object"],["fg",""],["id","switch","label","Switch with Config",3,"rank"],["ff",""],["name","switch",3,"formControl"],[2,"padding-left","2rem"]],template:function(a,f){if(1&a&&(t.TgZ(0,"fdp-form-group",0,1),t.TgZ(2,"fdp-form-field",2,3),t._UZ(4,"fdp-switch",4),t.qZA(),t.qZA(),t.TgZ(5,"div",5),t._uU(6),t.ALo(7,"json"),t.qZA()),2&a){const y=t.MAs(1),F=t.MAs(3);t.Q6J("object",f.model),t.xp6(2),t.Q6J("rank",4),t.xp6(2),t.Q6J("formControl",F.formControl),t.xp6(2),t.hij("form value: ",t.lcZ(7,4,y.formGroup.getRawValue()),"")}},directives:[l.H,g.h,Z.q,u.JJ,u.oH],pipes:[M.Ts],encapsulation:2}),i})(),z=(()=>{class i{constructor(){this.switchSize=[{language:"html",code:d,fileName:"switch-sizes-example"}],this.switchDisable=[{language:"html",code:C,fileName:"disabled-switch-example"},{language:"typescript",code:T,fileName:"disabled-switch-example",component:"DisabledSwitchExampleComponent"}],this.switchSemantic=[{language:"html",code:A,fileName:"semantic-switch-example"},{language:"typescript",code:b,fileName:"semantic-switch-example",component:"SemanticSwitchExampleComponent"}],this.switchFormExample=[{language:"html",code:S,fileName:"switch-forms-example"},{language:"typescript",code:v,fileName:"switch-forms-example",component:"SwitchFormsExampleComponent"}],this.switchConfig=[{language:"html",code:D,fileName:"switch-config-example"},{language:"typescript",code:E,fileName:"switch-config-example",component:"SwitchConfigExampleComponent"}]}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-switch"]],decls:43,vars:5,consts:[["id","sizes","componentName","switch"],[3,"exampleFiles"],["id","disabled","componentName","switch"],["id","semantic-compact","componentName","switch"],["id","with-reactive-form","componentName","switch"],["id","config","componentName","switch"]],template:function(a,f){1&a&&(t.TgZ(0,"fd-docs-section-title",0),t._uU(1,"Default switch with variations"),t.qZA(),t._UZ(2,"description"),t.TgZ(3,"component-example"),t._UZ(4,"fdp-switch-sizes-example"),t.qZA(),t._UZ(5,"code-example",1),t._UZ(6,"separator"),t.TgZ(7,"fd-docs-section-title",2),t._uU(8,"Disabled State"),t.qZA(),t.TgZ(9,"description"),t._uU(10,"Switch can be in the disabled state, which prevents the user from interacting with it."),t.qZA(),t.TgZ(11,"component-example"),t._UZ(12,"fdp-disabled-switch-example"),t.qZA(),t._UZ(13,"code-example",1),t._UZ(14,"separator"),t.TgZ(15,"fd-docs-section-title",3),t._uU(16,"Semantic and Compact Mode"),t.qZA(),t.TgZ(17,"description"),t._uU(18," It is possible to add semantic mode by passing "),t.TgZ(19,"code"),t._uU(20,'[semantic]="true"'),t.qZA(),t._uU(21," and compact mode by passing "),t.TgZ(22,"code"),t._uU(23,'[compact]="true"'),t.qZA(),t._uU(24," to switch component.\n"),t.qZA(),t.TgZ(25,"component-example"),t._UZ(26,"fdp-semantic-switch-example"),t.qZA(),t._UZ(27,"code-example",1),t._UZ(28,"separator"),t.TgZ(29,"fd-docs-section-title",4),t._uU(30,"Switch used within FormFieldControl\n"),t.qZA(),t.TgZ(31,"description"),t._uU(32,"It is possible to use the fdp-switch component within Angular Reactive Forms"),t.qZA(),t.TgZ(33,"component-example"),t._UZ(34,"fdp-switch-forms-example"),t.qZA(),t._UZ(35,"code-example",1),t.TgZ(36,"fd-docs-section-title",5),t._uU(37,"Switch Config"),t.qZA(),t.TgZ(38,"description"),t._uU(39,"Use Switch Config to override default options"),t.qZA(),t.TgZ(40,"component-example"),t._UZ(41,"fdp-switch-config-example"),t.qZA(),t._UZ(42,"code-example",1)),2&a&&(t.xp6(5),t.Q6J("exampleFiles",f.switchSize),t.xp6(8),t.Q6J("exampleFiles",f.switchDisable),t.xp6(14),t.Q6J("exampleFiles",f.switchSemantic),t.xp6(8),t.Q6J("exampleFiles",f.switchFormExample),t.xp6(7),t.Q6J("exampleFiles",f.switchConfig))},directives:[w.k,x.w,s.O,U,L.E,P.N,O,J,Q,H],encapsulation:2}),i})();var K=e(43870),W=e(87444),G=e(34506);const j=[{path:"",component:(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["fdp-switch-header"]],decls:15,vars:0,consts:[["routerLink","/core/switch"],["module","PlatformSwitchModule","subPackage","form"]],template:function(a,f){1&a&&(t.TgZ(0,"header"),t._uU(1,"Switch"),t.qZA(),t.TgZ(2,"description"),t.TgZ(3,"p"),t._uU(4," This is an extension of the Switch component present in "),t.TgZ(5,"a",0),t._uU(6,"fundamental-ngx/core"),t.qZA(),t._uU(7,". "),t.qZA(),t.TgZ(8,"h3"),t._uU(9,"Platform specific enhancements:"),t.qZA(),t.TgZ(10,"p"),t._uU(11," The Platform Switch component implement the FormFieldControl interface, thus can be used within the FormField component. "),t.qZA(),t.qZA(),t._UZ(12,"import",1),t._UZ(13,"fd-header-tabs"),t._UZ(14,"router-outlet"))},directives:[K.G,x.w,n.yS,W.k,G.c,n.lC],encapsulation:2}),i})(),children:[{path:"",component:z},{path:"api",component:h.h,data:{content:o.X.switch}}]}];let X=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[n.Bz.forChild(j),p.g,c.RU,c.Mk],n.Bz]}),i})()},38982:m=>{m.exports='<fdp-form-group [formGroup]="customForm">\n    <fdp-form-field id="switch-disabled" label="Default disabled Switch" [rank]="1">\n        <fdp-switch\n            name="switch-disabled"\n            ariaLabel="Switch disabled"\n            ariaLabelledby="switch-disabled-label"\n            contentDensity="cozy"\n            [semantic]="false"\n            [disabled]="true"\n        >\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="form-switch-disabled" label="Form Default disabled Switch" [rank]="1">\n        <fdp-switch\n            name="form-switch-disabled"\n            ariaLabel="Form Switch disabled"\n            ariaLabelledby="form-switch-disabled-label"\n            formControlName="fieldDisable"\n        >\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n'},533:m=>{m.exports="import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'fdp-disabled-switch-example',\n    templateUrl: './disabled-switch-example.component.html'\n})\nexport class DisabledSwitchExampleComponent {\n    customForm = new FormGroup({\n        fieldDisable: new FormControl({ value: true, disabled: true })\n    });\n}\n"},32059:m=>{m.exports='<fdp-form-group>\n    <fdp-form-field id="semantic-switch" label="Default Semantic Switch" [rank]="1">\n        <fdp-switch\n            name="semantic-switch"\n            ariaLabel="Semantic Switch"\n            ariaLabelledby="semantic-switch-label"\n            [semantic]="true"\n            (switchChange)="onSwitchChange()"\n        >\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="semantic-switch-compact" label="Default Semantic Compact Switch" [rank]="1">\n        <fdp-switch\n            name="semantic-switch-compact"\n            ariaLabel="Semantic Switch Compact"\n            ariaLabelledby="semantic-switch-compact-label"\n            contentDensity="compact"\n            [semantic]="true"\n            [(ngModel)]="switched"\n            (switchChange)="onSwitchChange()"\n        >\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n'},37883:m=>{m.exports="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fdp-semantic-switch-example',\n    templateUrl: 'semantic-switch-example.component.html'\n})\nexport class SemanticSwitchExampleComponent {\n    switched = true;\n\n    onSwitchChange(): void {}\n}\n"},52664:m=>{m.exports='<fdp-form-group [object]="model" #fg>\n    <fdp-form-field #ff id="switch" label="Switch with Config" [rank]="4">\n        <fdp-switch name="switch" [formControl]="ff.formControl"></fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n\n<div style="padding-left: 2rem">form value: {{ fg.formGroup.getRawValue() | json }}</div>\n'},46787:m=>{m.exports="import { Component } from '@angular/core';\n\nimport { SwitchConfig } from '@fundamental-ngx/platform/form';\n\nexport const switchConfigFactory = SwitchConfig.createProviderFactory({\n    contentDensity: 'compact'\n});\n\nexport const customSwitchConfigProvider = {\n    provide: SwitchConfig,\n    useFactory: switchConfigFactory\n};\n\n@Component({\n    selector: 'fdp-switch-config-example',\n    templateUrl: './switch-config-example.component.html',\n    providers: [customSwitchConfigProvider]\n})\nexport class SwitchConfigExampleComponent {\n    model: { switch: boolean } = {\n        switch: true\n    };\n}\n"},21907:m=>{m.exports='<fdp-form-group [formGroup]="customForm">\n    <fdp-form-field\n        id="switch1"\n        label="Form Switch 1"\n        [rank]="4"\n        [required]="true"\n        [validators]="validators"\n        [i18Strings]="switchOneErrors"\n    >\n        <fdp-switch\n            name="switch-1"\n            ariaLabel="switch-label"\n            ariaLabelledby="switch-label"\n            contentDensity="cozy"\n            [semantic]="false"\n            formControlName="switch1"\n        >\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="switch2" label="Form Switch 2" [rank]="4">\n        <fdp-switch\n            name="switch-2"\n            ariaLabel="Switch"\n            ariaLabelledby="switch-label"\n            contentDensity="compact"\n            [semantic]="true"\n            formControlName="switch2"\n        >\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="switch3" label="Form Switch 3" [rank]="4">\n        <fdp-switch\n            name="switch-3"\n            ariaLabel="Switch"\n            ariaLabelledby="switch-label"\n            contentDensity="compact"\n            [semantic]="false"\n            formControlName="switch3"\n        >\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n\n<ng-template #switchOneErrors let-errors>\n    <span *ngIf="errors.required" role="alert" aria-atomic="true"> Selection is required </span>\n</ng-template>\n\n<div style="padding-left: 2rem">form value: {{ customForm.getRawValue() | json }}</div>\n'},9263:m=>{m.exports="import { Component } from '@angular/core';\nimport { FormControl, FormGroup, Validators } from '@angular/forms';\n\n@Component({\n    selector: 'fdp-switch-forms-example',\n    templateUrl: './switch-forms-example.component.html'\n})\nexport class SwitchFormsExampleComponent {\n    customForm = new FormGroup({\n        switch1: new FormControl(false),\n        switch2: new FormControl(true),\n        switch3: new FormControl(false)\n    });\n    validators = [Validators.requiredTrue];\n}\n"},98309:m=>{m.exports='<fdp-form-group>\n    <fdp-form-field id="default-switch" label="Default Switch" [rank]="1">\n        <fdp-switch name="default-switch" ariaLabel="Default Switch" ariaLabelledby="switch-disabled-label">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="default-compact-switch" label="Default Compact Switch" [rank]="1">\n        <fdp-switch\n            name="default-compact-switch"\n            ariaLabel="Default Compact Switch"\n            ariaLabelledby="switch-disabled-label"\n            contentDensity="compact"\n        >\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n'}}]);