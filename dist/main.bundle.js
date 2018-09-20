!function(t){function e(e){for(var a,i,o=e[0],l=e[1],d=e[2],h=0,p=[];h<o.length;h++)i=o[h],n[i]&&p.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(c&&c(e);p.length;)p.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={1:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=l;r.push([125,0]),s()}({125:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s.n(a);s(140),s(138),s(136);function r(t,e){for(const t of document.querySelectorAll(".nav_toggle"))t===e?t.classList.remove("hidden"):t.classList.add("hidden")}s(134);s(132),s(130);class i{constructor(t){this.raw=t.trim(),this.index=0,this.data=[],this.init()}init(){this.data=[this.raw];const t=/\\n/g;if("string"==typeof this.raw&&t.test(this.raw)){this.data=this.raw.split(t);const s=this.data.length-1;for(var e=0;e<s;e++)this.data.splice(e+e+1,0,document.createElement("br"))}}[Symbol.toString](){return this.raw}[Symbol.iterator](){return{next:()=>this.index<this.data.length?{value:this.data[this.index++],done:!1}:(this.index=0,{done:!0})}}}class o{constructor(t,e="DD.MM.YYYY",s="DD.MM.YYYY"){t=t.trim(),this.raw=t,"now"==this.raw?this.moment=new n.a:this.moment=new n.a(this.raw,e),this._iterator_done=!1,this.index=0,this.display_format=s,this.parse_format=e}[Symbol.iterator](){return{next:()=>this.index<1?(this.index++,{value:this.moment.format(this.display_format),done:!1}):(this.index=0,{done:!0})}}}class l{constructor(t,e){e.moment.isValid()||(e.moment=t.moment.clone().endOf("day")),this.moment=t.moment.twix(e.moment),this._iterator_done=!1,this.index=0}[Symbol.iterator](){return{next:()=>this.index<1?(this.index++,{value:this.moment.humanizeLength(),done:!1}):(this.index=0,{done:!0})}}}s(129),s(127);class d{constructor(t){this.data=t,this.output_headers=Object.keys(this.data.entries[0]),this.css_class=""}get_css_class(){return this.css_class}append_headers(t){for(let e of this.output_headers){const s=document.createElement("th");s.append(e),t.append(s)}}append_row_content(t,e){for(let s in e){const a=document.createElement("td");t.append(a),this.append_entry_part(e,a,s)}}append_entry_part(t,e,s,a=!1){if("object"==typeof t[s]&&(e.append(...t[s]),a)){const t=document.createElement("br");e.append(t)}}}class c extends d{constructor(t){super(t),this.output_headers=["date","company\nplace","action","details"],this.output_content=["date_start\nduration","company\nplace","date_start","date_start"],this.css_class="myFormat"}append_row_content(t,e){this.create_date(t,e),this.create_place(t,e),this.create_activity(t,e),this.create_details(t,e)}create_date(t,e){const s=document.createElement("td");t.append(s),this.append_entry_part(e,s,"date_start",!0),this.append_entry_part(e,s,"duration")}create_place(t,e){const s=document.createElement("td");t.append(s),this.append_entry_part(e,s,"company",!0),this.append_entry_part(e,s,"place")}create_activity(t,e){const s=document.createElement("td");t.append(s),this.append_entry_part(e,s,"activity")}create_details(t,e){const s=document.createElement("td");t.append(s),this.append_entry_part(e,s,"description")}}window.addEventListener("load",function(){console.log("init application"),function(){console.groupCollapsed("navigation");const t=document.querySelector("header > nav > ul");if(console.log("nav_el",t),t)for(const e of t.querySelectorAll("li"))if(console.log("li_el",e),e.hasAttribute("data-target_id")){const t=e.getAttribute("data-target_id"),s=document.getElementById(t);s&&(s.classList.add("nav_toggle"),e.addEventListener("click",t=>{r(0,s)}))}console.groupEnd()}(),n.a.locale("de");let t={entries:[]};window.debug_data=t,new class{constructor(t,e,s){console.groupCollapsed("timeline"),this.data=t,this.parent=e,this.svg_el=s||this.parent.querySelector("svg"),this.parent.addEventListener(this.data_update_event_name,t=>{this.update(t)}),console.log("this.svg_el",this.svg_el),console.groupEnd()}update(t){console.log("TimeLine update",t),self.map_data_D3TimelineChart()}map_data_D3TimelineChart(t){}}(t,document.querySelector("#timeline"));const e=document.querySelector("#raw_data_format_input"),s=document.querySelector("#raw_data_input"),a=new class{constructor(t,e,s,a){console.groupCollapsed("RawParser"),this.data_update_event_name="data_update",this.data=t,this.format_input_el=s,this.text_input_el=e,this.data_json_el=a,this.separator=";",this.data_format=[],this.min_part_count_default=3,this.min_part_count=this.min_part_count_default,this.text_input_el.addEventListener("input",()=>{this.parse()}),this.parse(),console.groupEnd()}parse(){this.parseFormat(this.format_input_el.value),this.parseContent(this.text_input_el.value),this.refineData(),this.data_json_el.textContent=this.prettyprint(this.data.entries),this.sendUpdate()}parseFormat(t){t=t.trim(),this.data_format=[];for(let e of t.split(this.separator))this.data_format.push(e.trim());this.min_part_count_default>this.data_format.length?this.min_part_count=this.data_format.length:this.min_part_count=this.min_part_count_default}parseContent(t){t=t.trim(),this.data.entries=[];let e=t.split("\n");for(let[t,s]of e.entries())this.parseLine(s,t)}parseLine(t,e){const s=(t=t.trim()).split(this.separator);if(s.length>=this.min_part_count){let t={};t.line=e;for(let[e,a]of s.entries())this.parsePart(a,t,e);for(let e=s.length;e<this.data_format.length;e++)this.parsePart("",t,e);Object.keys(t).length>=this.min_part_count&&this.data.entries.push(t)}}parsePart(t,e,s){if((t=t.trim()).length>0){const a=new RegExp("^"+this.separator+"+|"+this.separator+"+$","g");t=t.replace(a,"");let n=this.data_format[s];n||(n="extended_"+s.toString()),n.includes("date")?e[n]=new o(t):e[n]=new i(t)}}refineData(){for(const t of this.data.entries)"date_end"in t==0&&(t.date_end=new o("")),t.duration=new l(t.date_start,t.date_end)}sendUpdate(){const t=new CustomEvent(this.data_update_event_name,{bubbles:!0,detail:{data:this.data,message:"parsed ♥"}});this.text_input_el.dispatchEvent(t)}prettyprint(t){return JSON.stringify(t,null,2)}}(t,s,e,document.querySelector("#data_json"));new class{constructor(t){console.groupCollapsed("TextAreaWithLineNumbers"),this.init(t),console.log("this.textarea_el",this.textarea_el),console.groupEnd()}init(t){this.textarea_el=t,this.wrapper_el=document.createElement("div"),this.wrapper_el.classList.add("textarea-wrapper"),this.textarea_el.before(this.wrapper_el),this.linenumbers_el=document.createElement("label"),this.linenumbers_el.setAttribute("for",this.textarea_el.id),this.linenumbers_el.textContent="♥",this.wrapper_el.append(this.linenumbers_el),this.wrapper_el.append(this.textarea_el),this.textarea_el.addEventListener("input",()=>{this.update()}),this.update()}update(){let t=1;this.textarea_el.value.length>0&&(t=this.textarea_el.value.match(/\n/g).length+1);let e=[...Array(t).keys()].join("\n");this.textarea_el.setAttribute("rows",t+1),this.linenumbers_el.textContent=e}}(s),new class{constructor(t,e,s){console.group("listview"),this.data_update_event_name=s,this.data=t,this.main_el=e,console.log("this.main_el",this.main_el),this.tablecontent_creator=new c(this.data),this.init(),this.update(),this.main_el.parentElement.addEventListener(this.data_update_event_name,t=>{this.update(t)}),console.groupEnd()}init(){this.page=document.createElement("section"),this.page.classList.add("sheet"),this.page.classList.add("DINA4"),this.page.classList.add("landscape"),this.table=document.createElement("table"),this.thead=document.createElement("thead"),this.table.append(this.thead),this.tbody=document.createElement("tbody"),this.table.append(this.tbody),this.page.append(this.table),this.main_el.append(this.page)}update(t){this.thead.remove(),this.tbody.remove();for(let t of this.table.classList.values())console.log(t),this.table.classList.remove(t);this.table.classList.add(this.tablecontent_creator.get_css_class()),this.thead=document.createElement("thead"),this.table.append(this.thead);let e=document.createElement("tr");this.thead.append(e),this.tablecontent_creator.append_headers(e),this.tbody=document.createElement("tbody"),this.table.append(this.tbody);let s=this.data.entries;s=s.sort(this.sort_entries);for(let t of s){const e=document.createElement("tr");this.tbody.append(e),this.tablecontent_creator.append_row_content(e,t)}}sort_entries(t,e){let s=t.date_start.moment-e.date_start.moment;return 0==s&&(s=t.duration.moment.count()-e.duration.moment.count()),s}}(t,document.querySelector("#listview"),a.data_update_event_name),document.addEventListener(a.data_update_event_name,t=>{})})},127:function(t,e,s){},129:function(t,e,s){},132:function(t,e,s){},134:function(t,e,s){},136:function(t,e,s){},138:function(t,e,s){},140:function(t,e,s){},141:function(t,e,s){var a={"./af":123,"./af.js":123,"./ar":122,"./ar-dz":121,"./ar-dz.js":121,"./ar-kw":120,"./ar-kw.js":120,"./ar-ly":119,"./ar-ly.js":119,"./ar-ma":118,"./ar-ma.js":118,"./ar-sa":117,"./ar-sa.js":117,"./ar-tn":116,"./ar-tn.js":116,"./ar.js":122,"./az":115,"./az.js":115,"./be":114,"./be.js":114,"./bg":113,"./bg.js":113,"./bm":112,"./bm.js":112,"./bn":111,"./bn.js":111,"./bo":110,"./bo.js":110,"./br":109,"./br.js":109,"./bs":108,"./bs.js":108,"./ca":107,"./ca.js":107,"./cs":106,"./cs.js":106,"./cv":105,"./cv.js":105,"./cy":104,"./cy.js":104,"./da":103,"./da.js":103,"./de":102,"./de-at":101,"./de-at.js":101,"./de-ch":100,"./de-ch.js":100,"./de.js":102,"./dv":99,"./dv.js":99,"./el":98,"./el.js":98,"./en-au":97,"./en-au.js":97,"./en-ca":96,"./en-ca.js":96,"./en-gb":95,"./en-gb.js":95,"./en-ie":94,"./en-ie.js":94,"./en-il":93,"./en-il.js":93,"./en-nz":92,"./en-nz.js":92,"./eo":91,"./eo.js":91,"./es":90,"./es-do":89,"./es-do.js":89,"./es-us":88,"./es-us.js":88,"./es.js":90,"./et":87,"./et.js":87,"./eu":86,"./eu.js":86,"./fa":85,"./fa.js":85,"./fi":84,"./fi.js":84,"./fo":83,"./fo.js":83,"./fr":82,"./fr-ca":81,"./fr-ca.js":81,"./fr-ch":80,"./fr-ch.js":80,"./fr.js":82,"./fy":79,"./fy.js":79,"./gd":78,"./gd.js":78,"./gl":77,"./gl.js":77,"./gom-latn":76,"./gom-latn.js":76,"./gu":75,"./gu.js":75,"./he":74,"./he.js":74,"./hi":73,"./hi.js":73,"./hr":72,"./hr.js":72,"./hu":71,"./hu.js":71,"./hy-am":70,"./hy-am.js":70,"./id":69,"./id.js":69,"./is":68,"./is.js":68,"./it":67,"./it.js":67,"./ja":66,"./ja.js":66,"./jv":65,"./jv.js":65,"./ka":64,"./ka.js":64,"./kk":63,"./kk.js":63,"./km":62,"./km.js":62,"./kn":61,"./kn.js":61,"./ko":60,"./ko.js":60,"./ky":59,"./ky.js":59,"./lb":58,"./lb.js":58,"./lo":57,"./lo.js":57,"./lt":56,"./lt.js":56,"./lv":55,"./lv.js":55,"./me":54,"./me.js":54,"./mi":53,"./mi.js":53,"./mk":52,"./mk.js":52,"./ml":51,"./ml.js":51,"./mn":50,"./mn.js":50,"./mr":49,"./mr.js":49,"./ms":48,"./ms-my":47,"./ms-my.js":47,"./ms.js":48,"./mt":46,"./mt.js":46,"./my":45,"./my.js":45,"./nb":44,"./nb.js":44,"./ne":43,"./ne.js":43,"./nl":42,"./nl-be":41,"./nl-be.js":41,"./nl.js":42,"./nn":40,"./nn.js":40,"./pa-in":39,"./pa-in.js":39,"./pl":38,"./pl.js":38,"./pt":37,"./pt-br":36,"./pt-br.js":36,"./pt.js":37,"./ro":35,"./ro.js":35,"./ru":34,"./ru.js":34,"./sd":33,"./sd.js":33,"./se":32,"./se.js":32,"./si":31,"./si.js":31,"./sk":30,"./sk.js":30,"./sl":29,"./sl.js":29,"./sq":28,"./sq.js":28,"./sr":27,"./sr-cyrl":26,"./sr-cyrl.js":26,"./sr.js":27,"./ss":25,"./ss.js":25,"./sv":24,"./sv.js":24,"./sw":23,"./sw.js":23,"./ta":22,"./ta.js":22,"./te":21,"./te.js":21,"./tet":20,"./tet.js":20,"./tg":19,"./tg.js":19,"./th":18,"./th.js":18,"./tl-ph":17,"./tl-ph.js":17,"./tlh":16,"./tlh.js":16,"./tr":15,"./tr.js":15,"./tzl":14,"./tzl.js":14,"./tzm":13,"./tzm-latn":12,"./tzm-latn.js":12,"./tzm.js":13,"./ug-cn":11,"./ug-cn.js":11,"./uk":10,"./uk.js":10,"./ur":9,"./ur.js":9,"./uz":8,"./uz-latn":7,"./uz-latn.js":7,"./uz.js":8,"./vi":6,"./vi.js":6,"./x-pseudo":5,"./x-pseudo.js":5,"./yo":4,"./yo.js":4,"./zh-cn":3,"./zh-cn.js":3,"./zh-hk":2,"./zh-hk.js":2,"./zh-tw":1,"./zh-tw.js":1};function n(t){var e=r(t);return s(e)}function r(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=141}});
//# sourceMappingURL=main.bundle.js.map