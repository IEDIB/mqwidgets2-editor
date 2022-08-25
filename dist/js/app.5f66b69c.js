(function(e){function t(t){for(var o,n,d=t[0],s=t[1],c=t[2],u=0,b=[];u<d.length;u++)n=d[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&b.push(i[n][0]),i[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);r&&r(t);while(b.length)b.shift()();return a.push.apply(a,c||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],o=!0,d=1;d<l.length;d++){var s=l[d];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=n(n.s=l[0]))}return e}var o={},i={app:0},a=[];function n(t){if(o[t])return o[t].exports;var l=o[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=o,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var c=0;c<d.length;c++)t(d[c]);var r=s;a.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("cd49")},"90c3":function(e,t,l){"use strict";l("eb44")},cd49:function(e,t,l){"use strict";l.r(t);var o=l("7a23");const i={id:"app"},a=Object(o["i"])("div",{class:"app-container"},[Object(o["i"])("h1",null,"MQwidgets2 editor"),Object(o["i"])("small",null,"Josep Mulet (c) 2022")],-1),n=Object(o["i"])("h4",null,"Load content into the editor",-1),d=Object(o["i"])("label",{for:"theLoadCode"},"Paste the HTML code",-1),s=Object(o["k"])("Load"),c=Object(o["i"])("hr",null,null,-1),r=Object(o["k"])(" Preview "),u=Object(o["i"])("p",null,[Object(o["i"])("br")],-1),b={id:"preview_area"},p=Object(o["i"])("p",null,[Object(o["i"])("br")],-1),m={key:0},h=Object(o["i"])("label",{for:"shareCode"},"Code to embed",-1),O=Object(o["i"])("pre",null,[Object(o["i"])("code",null,'\nAdd at the bottom of the page\n<script src="https://iedib.github.io/mqwidgets2/dist/mqwidgets2.js"><\/script>\n      ')],-1);function f(e,t,l,f,j,g){const w=Object(o["w"])("TextArea"),y=Object(o["w"])("Button"),v=Object(o["w"])("Dialog"),C=Object(o["w"])("widget-component");return Object(o["q"])(),Object(o["h"])("div",i,[a,Object(o["l"])(v,{visible:e.showLoadDlg,"onUpdate:visible":t[3]||(t[3]=t=>e.showLoadDlg=t)},{header:Object(o["C"])(()=>[n]),footer:Object(o["C"])(()=>[Object(o["l"])(y,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:t[1]||(t[1]=t=>e.onCancelLoad())}),Object(o["l"])(y,{label:"Accept",icon:"pi pi-check",autofocus:"",onClick:t[2]||(t[2]=t=>e.onLoad())})]),default:Object(o["C"])(()=>[d,Object(o["l"])(w,{id:"theLoadCode",modelValue:e.contentsToLoad,"onUpdate:modelValue":t[0]||(t[0]=t=>e.contentsToLoad=t),style:{width:"99%"},rows:"5"},null,8,["modelValue"])]),_:1},8,["visible"]),Object(o["l"])(y,{onClick:t[4]||(t[4]=t=>e.onShowLoadDlg())},{default:Object(o["C"])(()=>[s]),_:1}),(Object(o["q"])(!0),Object(o["h"])(o["a"],null,Object(o["u"])(e.mqgroup.widgets,e=>(Object(o["q"])(),Object(o["h"])("div",{key:e.id},[Object(o["l"])(C,{widget:e},null,8,["widget"])]))),128)),c,Object(o["l"])(y,{onClick:t[5]||(t[5]=t=>e.preview()),icon:"pi pi-refresh"}),r,u,Object(o["D"])(Object(o["i"])("div",b,null,512),[[o["B"],e.shareCode]]),p,e.shareCode?(Object(o["q"])(),Object(o["h"])("div",m,[h,Object(o["l"])(w,{id:"shareCode",modelValue:e.shareCode,"onUpdate:modelValue":t[6]||(t[6]=t=>e.shareCode=t),autoResize:!0,rows:"5",cols:"30",style:{width:"95%"}},null,8,["modelValue"]),O])):Object(o["g"])("",!0)])}var j=l("ade3"),g=(l("b7ef"),l("9ab4")),w=l("ce1f");const y=Object(o["i"])("label",{for:"def_desc"},"Question description (HTML)",-1),v=Object(o["i"])("br",null,null,-1),C=Object(o["i"])("label",{for:"def_desc2"},"Additional description (HTML)",-1),_=Object(o["i"])("br",null,null,-1),x=Object(o["i"])("hr",null,null,-1),V=Object(o["i"])("label",{for:"def_editor"},[Object(o["k"])("Widget type"),Object(o["i"])("sup",null,"*")],-1),q={key:0},k={for:"def_ini"},L=Object(o["k"])("Initial content (LaTeX) "),S={key:0},A={key:1},M=Object(o["i"])("label",{for:"def_choices0"},"Options ",-1),T=Object(o["i"])("p",null,[Object(o["i"])("br")],-1),P=Object(o["i"])("label",{for:"def_rightchoice"},"Right option (from 0) ",-1),U={key:2},R=Object(o["i"])("label",{for:"def_choices"},"Symbols ",-1),D=Object(o["i"])("label",{for:"def_rightchoice"},[Object(o["k"])("Right answer (Sympy)"),Object(o["i"])("sup",null,"*")],-1),z=Object(o["i"])("label",{for:"def_feedback"},"Explanation right answer (HTML) ",-1),E=Object(o["i"])("label",{for:"rules_forbidden"},"Symbols that are forbidden in the answer",-1),J=Object(o["i"])("label",{for:"rules_forbidden"},"Symbols that are required in the answer",-1),I=Object(o["i"])("p",null,null,-1),H=Object(o["i"])("label",{for:"rules_factor"},"The answer must be factorized",-1),W=Object(o["i"])("p",null,null,-1),N=Object(o["i"])("label",{for:"rules_expanded"},"The answer must be expanded",-1),Q=Object(o["i"])("p",null,null,-1),B=Object(o["i"])("label",{for:"rules_precision"},"Precision",-1),$=Object(o["i"])("p",null,null,-1),F=Object(o["i"])("label",{for:"rules_expanded"},"Regard coma as decimal place",-1),G={key:3},X=Object(o["i"])("label",{for:"def_paletes"},"Editor paletes ",-1);function K(e,t,l,i,a,n){const d=Object(o["w"])("TextArea"),s=Object(o["w"])("InputText"),c=Object(o["w"])("Dropdown"),r=Object(o["w"])("Button"),u=Object(o["w"])("Column"),b=Object(o["w"])("DataTable"),p=Object(o["w"])("Chips"),m=Object(o["w"])("Checkbox"),h=Object(o["w"])("InputNumber"),O=Object(o["w"])("AccordionTab"),f=Object(o["w"])("Accordion"),j=Object(o["w"])("MultiSelect"),g=Object(o["w"])("Panel");return Object(o["q"])(),Object(o["f"])(g,{toggleable:!0,class:"mq-widget-component"},{header:Object(o["C"])(()=>[Object(o["k"])(" Widget "+Object(o["z"])(e.widget.id),1)]),default:Object(o["C"])(()=>[y,v,Object(o["l"])(d,{id:"def_dec",modelValue:e.widget.htmlContent,"onUpdate:modelValue":t[0]||(t[0]=t=>e.widget.htmlContent=t),autoResize:!0,rows:"3",cols:"30",style:{width:"95%"}},null,8,["modelValue"]),C,_,Object(o["l"])(s,{id:"def_dec2",type:"label",modelValue:e.widget.def.formulation,"onUpdate:modelValue":t[1]||(t[1]=t=>e.widget.def.formulation=t),style:{width:"95%"}},null,8,["modelValue"]),x,V,Object(o["l"])(c,{id:"def_editor",modelValue:e.widget.def.editor,"onUpdate:modelValue":t[2]||(t[2]=t=>e.widget.def.editor=t),options:e.editorOptions,optionLabel:"label",optionValue:"value",onChange:t[3]||(t[3]=t=>e.editorChange())},null,8,["modelValue","options"]),e.hasInitialOpt?(Object(o["q"])(),Object(o["h"])("div",q,[Object(o["i"])("label",k,[L,"cloze"==e.widget.def.editor?(Object(o["q"])(),Object(o["h"])("i",S,"Use ? as placeholder")):Object(o["g"])("",!0)]),Object(o["l"])(s,{id:"def_ini",type:"text",modelValue:e.widget.def.initial_latex,"onUpdate:modelValue":t[4]||(t[4]=t=>e.widget.def.initial_latex=t)},null,8,["modelValue"])])):Object(o["g"])("",!0),["mchoice","mchoice*"].indexOf(e.widget.def.editor)>=0?(Object(o["q"])(),Object(o["h"])("div",A,[M,Object(o["l"])(b,{id:"def_choices0",value:e.widget.def.symbols,editMode:"cell",onCellEditComplete:e.onCellEditComplete,class:"editable-cells-table",responsiveLayout:"scroll",onRowReorder:e.onSymbolReorder},{default:Object(o["C"])(()=>[Object(o["l"])(r,{onClick:t[5]||(t[5]=t=>e.addChoice()),class:"p-button-rounded p-button-success p-button-sm",icon:"pi pi-plus"}),Object(o["l"])(u,{rowReorder:!0,headerStyle:"width: 3rem",reorderableColumn:!1}),Object(o["l"])(u,{field:"name",header:"Option",key:"name",style:{width:"80%"}},{body:Object(o["C"])(e=>[Object(o["k"])(Object(o["z"])(e.data.name),1)]),editor:Object(o["C"])(({data:e,field:t})=>[Object(o["l"])(s,{modelValue:e[t],"onUpdate:modelValue":l=>e[t]=l,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),Object(o["l"])(u,{exportable:!1,style:{"min-width":"8rem"}},{body:Object(o["C"])(t=>[Object(o["l"])(r,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning",onClick:l=>e.deleteSymbol(t.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","onCellEditComplete","onRowReorder"]),T,P,Object(o["l"])(s,{id:"def_rightchoice",type:"number",modelValue:e.widget.def.ans,"onUpdate:modelValue":t[6]||(t[6]=t=>e.widget.def.ans=t)},null,8,["modelValue"])])):Object(o["g"])("",!0),["mchoice","mchoice*"].indexOf(e.widget.def.editor)<0?(Object(o["q"])(),Object(o["h"])("div",U,[R,Object(o["l"])(r,{onClick:t[7]||(t[7]=t=>e.addChoice()),class:"p-button-rounded p-button-success p-button-sm",icon:"pi pi-plus"}),Object(o["l"])(b,{id:"def_choices",value:e.widget.def.symbols,editMode:"cell",onCellEditComplete:e.onCellEditComplete,class:"editable-cells-table",responsiveLayout:"scroll",onRowReorder:e.onSymbolReorder},{default:Object(o["C"])(()=>[Object(o["l"])(u,{rowReorder:!0,headerStyle:"width: 3rem",reorderableColumn:!1}),Object(o["l"])(u,{field:"name",header:"Variable",key:"name",style:{width:"20%"}},{body:Object(o["C"])(e=>[Object(o["k"])(Object(o["z"])(e.data.name),1)]),editor:Object(o["C"])(({data:e,field:t})=>[Object(o["l"])(s,{modelValue:e[t],"onUpdate:modelValue":l=>e[t]=l,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),Object(o["l"])(u,{field:"value",header:"Value",key:"value",style:{width:"60%"}},{body:Object(o["C"])(e=>[Object(o["k"])(Object(o["z"])(e.data.value),1)]),editor:Object(o["C"])(({data:e,field:t})=>[Object(o["l"])(s,{modelValue:e[t],"onUpdate:modelValue":l=>e[t]=l,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),Object(o["l"])(u,{exportable:!1,style:{"min-width":"8rem"}},{body:Object(o["C"])(t=>[Object(o["l"])(r,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning",onClick:l=>e.deleteSymbol(t.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","onCellEditComplete","onRowReorder"]),D,Object(o["l"])(d,{id:"def_rightchoice",style:{width:"95%"},autoResize:!0,modelValue:e.widget.def.ans,"onUpdate:modelValue":t[8]||(t[8]=t=>e.widget.def.ans=t)},null,8,["modelValue"])])):Object(o["g"])("",!0),z,Object(o["l"])(d,{id:"def_feedback",style:{width:"95%"},autoResize:!0,modelValue:e.widget.def.right_answer,"onUpdate:modelValue":t[9]||(t[9]=t=>e.widget.def.right_answer=t)},null,8,["modelValue"]),Object(o["l"])(f,null,{default:Object(o["C"])(()=>[Object(o["l"])(O,{header:"Rules"},{default:Object(o["C"])(()=>[E,Object(o["l"])(p,{id:"rules_forbidden",modelValue:e.widget.def.rules.forbidden,"onUpdate:modelValue":t[10]||(t[10]=t=>e.widget.def.rules.forbidden=t),style:{width:"96%"}},null,8,["modelValue"]),J,Object(o["l"])(p,{id:"rules_forbidden",modelValue:e.widget.def.rules.required,"onUpdate:modelValue":t[11]||(t[11]=t=>e.widget.def.rules.required=t),style:{width:"96%"}},null,8,["modelValue"]),I,H,Object(o["l"])(m,{id:"rules_factor",modelValue:e.widget.def.rules.factor,"onUpdate:modelValue":t[12]||(t[12]=t=>e.widget.def.rules.factor=t),binary:!0},null,8,["modelValue"]),W,N,Object(o["l"])(m,{id:"rules_expanded",modelValue:e.widget.def.rules.expand,"onUpdate:modelValue":t[13]||(t[13]=t=>e.widget.def.rules.expand=t),binary:!0},null,8,["modelValue"]),Q,B,Object(o["l"])(h,{id:"rules_precision",mode:"decimal",locale:"es-ES",minFractionDigits:2,maxFractionDigits:8,modelValue:e.widget.def.rules.precision,"onUpdate:modelValue":t[14]||(t[14]=t=>e.widget.def.rules.precision=t)},null,8,["modelValue"]),$,F,Object(o["l"])(m,{id:"rules_expanded",modelValue:e.widget.def.rules.coma_as_decimal,"onUpdate:modelValue":t[15]||(t[15]=t=>e.widget.def.rules.coma_as_decimal=t),binary:!0},null,8,["modelValue"])]),_:1})]),_:1}),e.hasPaletesOpt?(Object(o["q"])(),Object(o["h"])("div",G,[X,Object(o["l"])(j,{id:"def_paletes",modelValue:e.widget.def.palettes,"onUpdate:modelValue":t[16]||(t[16]=t=>e.widget.def.palettes=t),options:e.paletesOptions,optionLabel:"label",optionValue:"value"},null,8,["modelValue","options"])])):Object(o["g"])("",!0)]),_:1})}function Y(e){const t=e.getAttribute("data-mq")||"simple";let l=e.getAttribute("data-mq-ans")||"",o="ans";if(!l&&(l=e.getAttribute("data-mq-anse")||"",o="anse",!l))return console.error("> MQ has no data-mq-ans/e!"),{};l=l.trim(),l.startsWith("[")&&(l=l.substring(1)),l.endsWith("]")&&(l=l.substring(0,l.length-1));const i=e.getAttribute("data-mq-ini")||"",a=e.getAttribute("data-mq-symbols");let n="";e.getAttribute("data-mq-ra")&&(n=atob(e.getAttribute("data-mq-ra")||""));const d=[];if(a){const e=a.split(";");e.forEach(e=>{const t=e.split(":=");2==t.length?d.push({name:t[0],value:t[1]}):d.push({name:t[0],value:t[0]})})}const s=e.getAttribute("data-mq-rules");let c=[];s&&(c=JSON.parse(s));const r=[],u=e.getAttribute("data-mq-palettes");if(u){const e=u.split(",");e.forEach((function(e){r.push(e.trim())}))}const b={editor:t,symbols:d,right_answer:n,initial_latex:i,rules:c,palettes:r,ans:l,ansType:o};return e.getAttribute("data-mq-formulation")&&(b.formulation=e.getAttribute("data-mq-formulation")||""),b}function Z(e){const t=atob(e),l=JSON.parse(t);return["mchoice","mchoice*"].indexOf(l.editor)>=0?l.symbols=(l.symbols||[]).map(e=>({name:e,value:""})):l.symbols=(l.symbols||[]).map(e=>{const t=e.split(":=");return{name:t[0],value:t[1]}}),l.right_answer&&(l.right_answer=atob(l.right_answer)),l}function ee(e){const t=JSON.parse(JSON.stringify(e));return delete t["symbols"],["mchoice","mchoice*"].indexOf(e.editor)>=0?(t.symbols=e.symbols.map(e=>e.name),delete t["rules"],delete t["palettes"]):t.symbols=e.symbols.map(e=>e.name+":="+e.value),"cloze"==e.editor&&(t.ans=t.ans.split(",")),t.symbols&&0==t.symbols.length&&delete t.symbols,t.palettes&&0==t.palettes.length&&delete t.palettes,t.right_answer?t.right_answer=btoa(t.right_answer):delete t.right_answer,btoa(JSON.stringify(t))}function te(e){const t={},l=e.getAttribute("data-lang");return l&&(t.lang=l),t}class le{constructor(e,t){Object(j["a"])(this,"htmlContent",void 0),Object(j["a"])(this,"def",void 0),Object(j["a"])(this,"id",void 0),this.id="mqw_"+Math.random().toString(32).substring(2),this.htmlContent=t||"Express the polynomial \\(x^2+x-2\\) into factors",this.def=e||{editor:"simple",symbols:[{name:"p",value:"x**2+x-2"}],ans:"factor(p)",initial_latex:"(x+ )(x- )",rules:{factor:!0},palettes:["all"]}}share(){const e=ee(this.def);return`<p data-mq="${e}">${this.htmlContent}</p>`}}let oe=class extends w["b"]{constructor(...e){super(...e),Object(j["a"])(this,"widget",void 0),Object(j["a"])(this,"editorOptions",void 0),Object(j["a"])(this,"paletesOptions",void 0),Object(j["a"])(this,"hasPaletesOpt",!0),Object(j["a"])(this,"hasInitialOpt",!0)}created(){if(console.log("Created"),["panel","simple"].indexOf(this.widget.def.editor)>=0)this.hasPaletesOpt=!0;else{this.hasPaletesOpt=!1;const e=this.widget.def.palettes;e.splice(0,e.length)}this.hasInitialOpt=["basic","simple","panel","cloze"].indexOf(this.widget.def.editor)>=0}data(){const e=[{label:"Basic",value:"basic"},{label:"Simple",value:"simple"},{label:"Panel",value:"panel"},{label:"Cloze",value:"cloze"},{label:"Multiple choice (dropdown)",value:"mchoice"},{label:"Multiple choice (checkbox)",value:"mchoice*"}],t=[{label:"All",value:"all"},{label:"General",value:"general"},{label:"Symbols",value:"symbols"},{label:"Intervals",value:"intervals"},{label:"Geometry",value:"geometria"},{label:"Functions",value:"funcions"}];return{editorOptions:e,paletesOptions:t}}editorChange(){console.log(this.widget.def);const e=this.widget.def.palettes;["panel","simple"].indexOf(this.widget.def.editor)>=0?(this.hasPaletesOpt=!0,e.indexOf("all")<0&&e.push("all")):(this.hasPaletesOpt=!1,e.splice(0,e.length)),this.hasInitialOpt=["basic","simple","panel","cloze"].indexOf(this.widget.def.editor)>=0}onCellEditComplete(e){const{data:t,newValue:l,field:o}=e;switch(o){case"quantity":case"price":this.isPositiveInteger(l)?t[o]=l:e.preventDefault();break;default:l.trim().length>0?t[o]=l:e.preventDefault();break}}isPositiveInteger(e){let t=String(e);if(t=t.trim(),!t)return!1;t=t.replace(/^0+/,"")||"0";const l=Math.floor(Number(t));return l!==1/0&&String(l)===t&&l>=0}addChoice(){console.log("Add choice"),this.widget.def.symbols.push({name:"a",value:"1"})}onSymbolReorder(e){this.widget.def.symbols=e.value}deleteSymbol(e){const t=this.widget.def.symbols;for(let l=t.length-1;l>=0;l--){const o=t[l];console.log(o,e),o.name==e.name&&t.splice(l,1)}}};oe=Object(g["a"])([Object(w["a"])({props:{widget:le}})],oe);var ie=oe,ae=l("6b0d"),ne=l.n(ae);const de=ne()(ie,[["render",K]]);var se=de;class ce{static parse(e){var t;const l=document.createElement("div");l.style.display="none",l.innerHTML=e;let o=null;const i=new ce,a=l.querySelectorAll("div.pw-mq-group");if(a.length>=1){a.length>1&&console.error("Only one pw-mq-group is supported. All the remaining are discarded");const e=a[0];i.context=te(e),o=e.querySelectorAll("[data-mq]")}else 0==a.length&&(console.error("No pw-mq-group found. Creating a blank one!"),o=l.querySelectorAll("[data-mq]"));return null===(t=o)||void 0===t||t.forEach(e=>{const t=e.getAttribute("data-mq")||"";if(["basic","simple","panel","cloze","mchoice","mchoice*"].indexOf(t)>=0){const t=Y(e);i.addWidget(t,e.innerHTML)}else if(t){const l=Z(t);i.addWidget(l,e.innerHTML)}}),i}constructor(){Object(j["a"])(this,"context",void 0),Object(j["a"])(this,"widgets",void 0),this.widgets=[],this.context={}}addWidget(e,t){const l=new le(e,t);this.widgets.push(l)}serializeContext(){let e=Object.keys(this.context).map(e=>"data-"+e+'="'+this.context[e]+'"').join(" ");return e&&(e=" "+e),e}share(){const e=this.widgets.map(e=>e.share()).join("\n");return`<div class="pw-mq-group"${this.serializeContext()}>\n        ${e}\n        </div>`}}function re(e){const t=document.createElement("link");t.href=e,t.rel="stylesheet",document.head.appendChild(t)}function ue(e,t,l){const o=document.createElement("script");return o.setAttribute("src",e),o.setAttribute("type","text/javascript"),l&&o.setAttribute("id",l),t&&o.setAttribute("async",""),new Promise((e,t)=>{o.onload=function(){e()},o.onabort=function(){t()},o.onerror=function(){t()},document.head.prepend(o)})}let be=class extends w["b"]{constructor(...e){super(...e),Object(j["a"])(this,"mqgroup",new ce),Object(j["a"])(this,"shareCode",""),Object(j["a"])(this,"showLoadDlg",!1),Object(j["a"])(this,"contentsToLoad","")}mounted(){re("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),re("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"),ue("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",!0,"MathJax-script"),ue("https://code.jquery.com/jquery-3.6.0.min.js").then(()=>{ue("https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"),ue("https://iedib.github.io/mqwidgets2/dist/mqwidgets2.js").then(()=>{window.MQWidgets.init({lang:"en"})})})}created(){console.log("App created");const e=window.location.search,t=new URLSearchParams(e);t.get("doc")?(this.contentsToLoad=atob(t.get("doc")||""),console.log(this.contentsToLoad),this.onLoad()):this.mqgroup.addWidget()}preview(){const e=document.getElementById("preview_area");this.shareCode=this.mqgroup.share(),e.innerHTML=this.shareCode,window.MathJax&&(window.MathJax.typesetPromise&&window.MathJax.typesetPromise(),window.MathJax.Hub&&window.MathJax.Hub.Queue&&window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub])),setTimeout((function(){window.MQWidgets.reflow()}),500)}onShowLoadDlg(){this.contentsToLoad="",this.showLoadDlg=!0}onCancelLoad(){this.showLoadDlg=!1}onLoad(){if(this.showLoadDlg=!1,this.contentsToLoad)try{this.mqgroup=ce.parse(this.contentsToLoad),this.shareCode=""}catch(e){console.error(e)}}};be=Object(g["a"])([Object(w["a"])({components:{WidgetComponent:se}})],be);var pe=be;l("90c3");const me=ne()(pe,[["render",f]]);var he=me,Oe=l("9319"),fe=l("8398"),je=l("bb57"),ge=l("4147"),we=l("0100"),ye=l("4c62"),ve=l("1e2d"),Ce=l("5b2c"),_e=l("6f85"),xe=l("5bd2"),Ve=l("de53"),qe=l("c8c8"),ke=l("2052"),Le=l("bae7"),Se=l("3822");l("098b"),l("e1ae"),l("4121");const Ae=Object(o["e"])(he);Ae.use(Oe["a"]),Ae.component("InputText",fe["a"]),Ae.component("TextArea",ye["a"]),Ae.component("Button",je["a"]),Ae.component("MultiSelect",ge["a"]),Ae.component("Dropdown",we["a"]),Ae.component("Panel",ve["a"]),Ae.component("DataTable",Ce["a"]),Ae.component("Column",_e["a"]),Ae.component("Dialog",xe["a"]),Ae.component("Accordion",Ve["a"]),Ae.component("AccordionTab",qe["a"]),Ae.component("Checkbox",ke["a"]),Ae.component("Chips",Le["a"]),Ae.component("InputNumber",Se["a"]),Ae.mount("#app")},eb44:function(e,t,l){}});
//# sourceMappingURL=app.5f66b69c.js.map