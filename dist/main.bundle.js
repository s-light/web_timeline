!function(t){function e(e){for(var n,r,o=e[0],l=e[1],d=e[2],h=0,p=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(c&&c(e);p.length;)p.shift()();return i.push.apply(i,d||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={0:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=l;i.push([147,1]),s()}({138:function(t,e,s){var n={"./af":2,"./af.js":2,"./ar":3,"./ar-dz":4,"./ar-dz.js":4,"./ar-kw":5,"./ar-kw.js":5,"./ar-ly":6,"./ar-ly.js":6,"./ar-ma":7,"./ar-ma.js":7,"./ar-sa":8,"./ar-sa.js":8,"./ar-tn":9,"./ar-tn.js":9,"./ar.js":3,"./az":10,"./az.js":10,"./be":11,"./be.js":11,"./bg":12,"./bg.js":12,"./bm":13,"./bm.js":13,"./bn":14,"./bn-bd":15,"./bn-bd.js":15,"./bn.js":14,"./bo":16,"./bo.js":16,"./br":17,"./br.js":17,"./bs":18,"./bs.js":18,"./ca":19,"./ca.js":19,"./cs":20,"./cs.js":20,"./cv":21,"./cv.js":21,"./cy":22,"./cy.js":22,"./da":23,"./da.js":23,"./de":24,"./de-at":25,"./de-at.js":25,"./de-ch":26,"./de-ch.js":26,"./de.js":24,"./dv":27,"./dv.js":27,"./el":28,"./el.js":28,"./en-SG":29,"./en-SG.js":29,"./en-au":30,"./en-au.js":30,"./en-ca":31,"./en-ca.js":31,"./en-gb":32,"./en-gb.js":32,"./en-ie":33,"./en-ie.js":33,"./en-il":34,"./en-il.js":34,"./en-in":35,"./en-in.js":35,"./en-nz":36,"./en-nz.js":36,"./en-sg":37,"./en-sg.js":37,"./eo":38,"./eo.js":38,"./es":39,"./es-do":40,"./es-do.js":40,"./es-mx":41,"./es-mx.js":41,"./es-us":42,"./es-us.js":42,"./es.js":39,"./et":43,"./et.js":43,"./eu":44,"./eu.js":44,"./fa":45,"./fa.js":45,"./fi":46,"./fi.js":46,"./fil":47,"./fil.js":47,"./fo":48,"./fo.js":48,"./fr":49,"./fr-ca":50,"./fr-ca.js":50,"./fr-ch":51,"./fr-ch.js":51,"./fr.js":49,"./fy":52,"./fy.js":52,"./ga":53,"./ga.js":53,"./gd":54,"./gd.js":54,"./gl":55,"./gl.js":55,"./gom-deva":56,"./gom-deva.js":56,"./gom-latn":57,"./gom-latn.js":57,"./gu":58,"./gu.js":58,"./he":59,"./he.js":59,"./hi":60,"./hi.js":60,"./hr":61,"./hr.js":61,"./hu":62,"./hu.js":62,"./hy-am":63,"./hy-am.js":63,"./id":64,"./id.js":64,"./is":65,"./is.js":65,"./it":66,"./it-ch":67,"./it-ch.js":67,"./it.js":66,"./ja":68,"./ja.js":68,"./jv":69,"./jv.js":69,"./ka":70,"./ka.js":70,"./kk":71,"./kk.js":71,"./km":72,"./km.js":72,"./kn":73,"./kn.js":73,"./ko":74,"./ko.js":74,"./ku":75,"./ku.js":75,"./ky":76,"./ky.js":76,"./lb":77,"./lb.js":77,"./lo":78,"./lo.js":78,"./lt":79,"./lt.js":79,"./lv":80,"./lv.js":80,"./me":81,"./me.js":81,"./mi":82,"./mi.js":82,"./mk":83,"./mk.js":83,"./ml":84,"./ml.js":84,"./mn":85,"./mn.js":85,"./mr":86,"./mr.js":86,"./ms":87,"./ms-my":88,"./ms-my.js":88,"./ms.js":87,"./mt":89,"./mt.js":89,"./my":90,"./my.js":90,"./nb":91,"./nb.js":91,"./ne":92,"./ne.js":92,"./nl":93,"./nl-be":94,"./nl-be.js":94,"./nl.js":93,"./nn":95,"./nn.js":95,"./oc-lnc":96,"./oc-lnc.js":96,"./pa-in":97,"./pa-in.js":97,"./pl":98,"./pl.js":98,"./pt":99,"./pt-br":100,"./pt-br.js":100,"./pt.js":99,"./ro":101,"./ro.js":101,"./ru":102,"./ru.js":102,"./sd":103,"./sd.js":103,"./se":104,"./se.js":104,"./si":105,"./si.js":105,"./sk":106,"./sk.js":106,"./sl":107,"./sl.js":107,"./sq":108,"./sq.js":108,"./sr":109,"./sr-cyrl":110,"./sr-cyrl.js":110,"./sr.js":109,"./ss":111,"./ss.js":111,"./sv":112,"./sv.js":112,"./sw":113,"./sw.js":113,"./ta":114,"./ta.js":114,"./te":115,"./te.js":115,"./tet":116,"./tet.js":116,"./tg":117,"./tg.js":117,"./th":118,"./th.js":118,"./tk":119,"./tk.js":119,"./tl-ph":120,"./tl-ph.js":120,"./tlh":121,"./tlh.js":121,"./tr":122,"./tr.js":122,"./tzl":123,"./tzl.js":123,"./tzm":124,"./tzm-latn":125,"./tzm-latn.js":125,"./tzm.js":124,"./ug-cn":126,"./ug-cn.js":126,"./uk":127,"./uk.js":127,"./ur":128,"./ur.js":128,"./uz":129,"./uz-latn":130,"./uz-latn.js":130,"./uz.js":129,"./vi":131,"./vi.js":131,"./x-pseudo":132,"./x-pseudo.js":132,"./yo":133,"./yo.js":133,"./zh-cn":134,"./zh-cn.js":134,"./zh-hk":135,"./zh-hk.js":135,"./zh-mo":136,"./zh-mo.js":136,"./zh-tw":137,"./zh-tw.js":137};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=138},139:function(t,e,s){},140:function(t,e,s){},141:function(t,e,s){},142:function(t,e,s){},143:function(t,e,s){},145:function(t,e,s){},146:function(t,e,s){},147:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n);s(139),s(140),s(141);function i(t,e){for(const t of document.querySelectorAll(".nav_toggle"))t===e?t.classList.remove("hidden"):t.classList.add("hidden")}s(142);class r{constructor(t,e,s){console.groupCollapsed("timeline"),this.data=t,this.parent=e,this.svg_el=s||this.parent.querySelector("svg"),this.parent.addEventListener(this.data_update_event_name,t=>{this.update(t)}),console.log("this.svg_el",this.svg_el),console.groupEnd()}update(t){console.log("TimeLine update",t),self.map_data_D3TimelineChart()}map_data_D3TimelineChart(t){}}s(143),s(144);class o{constructor(t,e,s,n){console.groupCollapsed("RawParser"),this.data_update_event_name="data_update",this.data=t,this.format_input_el=s,this.text_input_el=e,this.data_json_el=n,this.separator=";",this.data_format=[],this.min_part_count_default=4,this.min_part_count=this.min_part_count_default,this.text_input_el.addEventListener("input",()=>{this.parse()}),this.parse(),console.groupEnd()}parse(){this.parseFormat(this.format_input_el.value),this.parseContent(this.text_input_el.value),this.refineData(),this.data_json_el.textContent=this.prettyprint(this.data.entries),this.sendUpdate()}parseFormat(t){t=t.trim(),this.data_format=[];for(let e of t.split(this.separator))this.data_format.push(e.trim());this.min_part_count_default>this.data_format.length?this.min_part_count=this.data_format.length:this.min_part_count=this.min_part_count_default}parseContent(t){t=t.trim(),this.data.entries=[];let e=t.split("\n");for(let[t,s]of e.entries())this.parseLine(s,t)}parseLine(t,e){const s=(t=t.trim()).split(this.separator);if(s.length>=this.min_part_count){let t={};t.line=e;for(let[e,n]of s.entries())this.parsePart(n,t,e);for(let e=s.length;e<this.data_format.length;e++)this.parsePart("",t,e);Object.keys(t).length>=this.min_part_count&&this.data.entries.push(t)}}parsePart(t,e,s){if((t=t.trim()).length>0){const n=new RegExp("^"+this.separator+"+|"+this.separator+"+$","g");t=t.replace(n,"");let a=this.data_format[s];a||(a="extended_"+s.toString()),a.includes("date")?e[a]=new d(t):e[a]=new l(t)}}refineData(){for(const t of this.data.entries)"weight"in t==!1&&(t.weight=42),"date_end"in t==!1&&(t.date_end=new d("")),t.duration=new c(t.date_start,t.date_end)}sendUpdate(){const t=new CustomEvent(this.data_update_event_name,{bubbles:!0,detail:{data:this.data,message:"parsed ♥"}});this.text_input_el.dispatchEvent(t)}prettyprint(t){return JSON.stringify(t,null,2)}}class l{constructor(t){this.raw=t.trim(),this.index=0,this.data=[],this.init()}init(){this.data=[this.raw];const t=/\\n/g;if("string"==typeof this.raw&&t.test(this.raw)){this.data=this.raw.split(t);const s=this.data.length-1;for(var e=0;e<s;e++)this.data.splice(e+e+1,0,document.createElement("br"))}}[Symbol.toString](){return this.raw}[Symbol.iterator](){return{next:()=>this.index<this.data.length?{value:this.data[this.index++],done:!1}:(this.index=0,{done:!0})}}}class d{constructor(t,e="DD.MM.YYYY",s="DD.MM.YYYY"){t=t.trim(),this.raw=t,"now"==this.raw?this.moment=new a.a:this.moment=new a.a(this.raw,e),this._iterator_done=!1,this.index=0,this.display_format=s,this.parse_format=e}[Symbol.iterator](){return{next:()=>this.index<1?(this.index++,{value:this.moment.format(this.display_format),done:!1}):(this.index=0,{done:!0})}}}class c{constructor(t,e){e.moment.isValid()||(e.moment=t.moment.clone().endOf("day")),this.moment=t.moment.twix(e.moment),this._iterator_done=!1,this.index=0}[Symbol.iterator](){return{next:()=>this.index<1?(this.index++,{value:this.moment.humanizeLength(),done:!1}):(this.index=0,{done:!0})}}}class h{constructor(t){console.groupCollapsed("TextAreaWithLineNumbers"),this.init(t),console.log("this.textarea_el",this.textarea_el),console.groupEnd()}init(t){this.textarea_el=t,this.wrapper_el=document.createElement("div"),this.wrapper_el.classList.add("textarea-wrapper"),this.textarea_el.before(this.wrapper_el),this.linenumbers_el=document.createElement("label"),this.linenumbers_el.setAttribute("for",this.textarea_el.id),this.linenumbers_el.textContent="♥",this.wrapper_el.append(this.linenumbers_el),this.wrapper_el.append(this.textarea_el),this.textarea_el.addEventListener("input",()=>{this.update()}),this.update()}update(){let t=1;this.textarea_el.value.length>0&&(t=this.textarea_el.value.match(/\n/g).length+1);let e=[...Array(t).keys()].join("\n");this.textarea_el.setAttribute("rows",t+1),this.linenumbers_el.textContent=e}}s(145),s(146);class p extends class{constructor(t){this.data=t,this.output_headers=Object.keys(this.data.entries[0]),this.css_class=""}get_css_class(){return this.css_class}append_headers(t){for(let e of this.output_headers){const s=document.createElement("th");s.append(e),t.append(s)}}append_row_content(t,e){for(let s in e){const n=document.createElement("td");t.append(n),this.append_entry_part(e,n,s)}}append_entry_part(t,e,s,n=!1){if("object"==typeof t[s]&&(e.append(...t[s]),n)){const t=document.createElement("br");e.append(t)}}}{constructor(t){super(t),this.output_headers=["date","company\nplace","action","details"],this.output_content=["date_start\nduration","company\nplace","date_start","date_start"],this.css_class="myFormat"}append_row_content(t,e){this.create_date(t,e),this.create_place(t,e),this.create_activity(t,e),this.create_details(t,e)}create_date(t,e){const s=document.createElement("td");t.append(s),this.append_entry_part(e,s,"date_start",!0),this.append_entry_part(e,s,"duration")}create_place(t,e){const s=document.createElement("td");t.append(s),this.append_entry_part(e,s,"company",!0),this.append_entry_part(e,s,"place")}create_activity(t,e){const s=document.createElement("td");t.append(s),this.append_entry_part(e,s,"activity")}create_details(t,e){const s=document.createElement("td");t.append(s),this.append_entry_part(e,s,"description")}}class u{constructor(t,e,s){console.group("listview"),this.data_update_event_name=s,this.data=t,this.main_el=e,console.log("this.main_el",this.main_el),this.tablecontent_creator=new p(this.data),this.init(),this.update(),this.main_el.parentElement.addEventListener(this.data_update_event_name,t=>{this.update(t)}),console.groupEnd()}init(){this.page=document.createElement("section"),this.page.classList.add("sheet"),this.page.classList.add("DINA4"),this.page.classList.add("landscape"),this.table=document.createElement("table"),this.thead=document.createElement("thead"),this.table.append(this.thead),this.tbody=document.createElement("tbody"),this.table.append(this.tbody),this.page.append(this.table),this.main_el.append(this.page)}update(t){this.thead.remove(),this.tbody.remove();for(let t of this.table.classList.values())console.log(t),this.table.classList.remove(t);this.table.classList.add(this.tablecontent_creator.get_css_class()),this.thead=document.createElement("thead"),this.table.append(this.thead);let e=document.createElement("tr");this.thead.append(e),this.tablecontent_creator.append_headers(e),this.tbody=document.createElement("tbody"),this.table.append(this.tbody);let s=this.data.entries;s=s.sort(this.sort_entries);for(let t of s){const e=document.createElement("tr");this.tbody.append(e),this.tablecontent_creator.append_row_content(e,t)}}sort_entries(t,e){let s=t.date_start.moment-e.date_start.moment;return 0==s&&(s=t.duration.moment.count()-e.duration.moment.count()),s}}window.addEventListener("load",(function(){console.log("init application"),function(){console.groupCollapsed("navigation");const t=document.querySelector("header > nav > ul");if(console.log("nav_el",t),t)for(const e of t.querySelectorAll("li"))if(console.log("li_el",e),e.hasAttribute("data-target_id")){const t=e.getAttribute("data-target_id"),s=document.getElementById(t);s&&(s.classList.add("nav_toggle"),e.addEventListener("click",t=>{i(t,s)}))}console.groupEnd()}(),a.a.locale("de");let t={entries:[]};window.debug_data=t;const e=document.querySelector("#timeline");new r(t,e);const s=document.querySelector("#raw_data_format_input"),n=document.querySelector("#raw_data_input"),l=document.querySelector("#data_json"),d=new o(t,n,s,l);new h(n);const c=document.querySelector("#listview");new u(t,c,d.data_update_event_name),document.addEventListener(d.data_update_event_name,t=>{})}))}});
//# sourceMappingURL=main.bundle.js.map