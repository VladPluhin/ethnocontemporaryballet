"use strict";(self.webpackChunkethno_contemporary_ballet=self.webpackChunkethno_contemporary_ballet||[]).push([[853],{549:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},1928:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(549),E={nodeType:r.BLOCKS.DOCUMENT,data:{},content:[{nodeType:r.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=E},6061:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var r=n(549),E=n(7845);function a(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}t.isInline=function(e){return a(E.INLINES,e.nodeType)},t.isBlock=function(e){return a(r.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},6437:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var E=Object.getOwnPropertyDescriptor(t,n);E&&!("get"in E?!t.__esModule:E.writable||E.configurable)||(E={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,E)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),E=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},L=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return E(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var l=n(549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return l.BLOCKS}});var o=n(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return o.INLINES}});var c=n(1376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return i(c).default}}),a(n(7951),t),a(n(167),t),a(n(1911),t);var S=n(1928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return i(S).default}});var _=L(n(6061));t.helpers=_},7845:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))},1376:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n},1911:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},7951:function(e,t,n){var r,E=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,E=0,a=t.length;E<a;E++)!r&&E in t||(r||(r=Array.prototype.slice.call(t,0,E)),r[E]=t[E]);return e.concat(r||Array.prototype.slice.call(t))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var L=n(549),i=n(7845),l=a(n(1376));t.TOP_LEVEL_BLOCKS=[L.BLOCKS.PARAGRAPH,L.BLOCKS.HEADING_1,L.BLOCKS.HEADING_2,L.BLOCKS.HEADING_3,L.BLOCKS.HEADING_4,L.BLOCKS.HEADING_5,L.BLOCKS.HEADING_6,L.BLOCKS.OL_LIST,L.BLOCKS.UL_LIST,L.BLOCKS.HR,L.BLOCKS.QUOTE,L.BLOCKS.EMBEDDED_ENTRY,L.BLOCKS.EMBEDDED_ASSET,L.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[L.BLOCKS.PARAGRAPH,L.BLOCKS.HEADING_1,L.BLOCKS.HEADING_2,L.BLOCKS.HEADING_3,L.BLOCKS.HEADING_4,L.BLOCKS.HEADING_5,L.BLOCKS.HEADING_6,L.BLOCKS.OL_LIST,L.BLOCKS.UL_LIST,L.BLOCKS.HR,L.BLOCKS.QUOTE,L.BLOCKS.EMBEDDED_ENTRY,L.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[L.BLOCKS.TABLE,L.BLOCKS.TABLE_ROW,L.BLOCKS.TABLE_CELL,L.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[L.BLOCKS.HR,L.BLOCKS.EMBEDDED_ENTRY,L.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((r={})[L.BLOCKS.OL_LIST]=[L.BLOCKS.LIST_ITEM],r[L.BLOCKS.UL_LIST]=[L.BLOCKS.LIST_ITEM],r[L.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[L.BLOCKS.QUOTE]=[L.BLOCKS.PARAGRAPH],r[L.BLOCKS.TABLE]=[L.BLOCKS.TABLE_ROW],r[L.BLOCKS.TABLE_ROW]=[L.BLOCKS.TABLE_CELL,L.BLOCKS.TABLE_HEADER_CELL],r[L.BLOCKS.TABLE_CELL]=[L.BLOCKS.PARAGRAPH],r[L.BLOCKS.TABLE_HEADER_CELL]=[L.BLOCKS.PARAGRAPH],r),t.HEADINGS=[L.BLOCKS.HEADING_1,L.BLOCKS.HEADING_2,L.BLOCKS.HEADING_3,L.BLOCKS.HEADING_4,L.BLOCKS.HEADING_5,L.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=E([L.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[L.BLOCKS.DOCUMENT,L.BLOCKS.PARAGRAPH,L.BLOCKS.HEADING_1,L.BLOCKS.HEADING_2,L.BLOCKS.HEADING_3,L.BLOCKS.HEADING_4,L.BLOCKS.HEADING_5,L.BLOCKS.HEADING_6,L.BLOCKS.OL_LIST,L.BLOCKS.UL_LIST,L.BLOCKS.LIST_ITEM,L.BLOCKS.HR,L.BLOCKS.QUOTE,L.BLOCKS.EMBEDDED_ENTRY,L.BLOCKS.EMBEDDED_ASSET,i.INLINES.HYPERLINK,i.INLINES.ENTRY_HYPERLINK,i.INLINES.ASSET_HYPERLINK,i.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[l.default.BOLD,l.default.CODE,l.default.ITALIC,l.default.UNDERLINE]},167:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},2240:function(e,t,n){var r=n(7294),E=n(8872),a=n(6437);t.Z=function(e){let{data:t,colorText:n="inherit"}=e;const L={renderMark:{[a.MARKS.BOLD]:e=>r.createElement("b",{className:"font-bold"},e)},renderNode:{[a.INLINES.HYPERLINK]:(e,t)=>{const{uri:n}=e.data;return r.createElement("a",{href:n,className:"link-decorated"},t)},[a.BLOCKS.HEADING_2]:(e,t)=>r.createElement("h2",null,t)}};return r.createElement("div",{className:"text",style:{color:n}},(0,E.Z)(t,L))}},5928:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),E=n(1883);var a=function(e){let{showData:t}=e;return r.createElement(E.rU,{to:t.newEvent?"/new-events/"+t.slug:"/projects/"+t.slug,className:"event-card"},t.image&&r.createElement("div",{className:"event-card__img"},t.newEvent&&r.createElement("span",{className:"newEvent"},t.newEventsText),r.createElement("img",{src:t.image.url,alt:t.image.description})),r.createElement("div",{className:"event-card__body"},t.title&&r.createElement("h5",{className:"event-card__title"},t.title),t.previewText&&r.createElement("div",{className:"event-card__text"},r.createElement("p",null,t.previewText)),t.textBtn&&r.createElement("div",{className:"btn-wrap"},r.createElement("span",{className:"link "},t.textBtn))))},L=n(2240),i=n(9057);var l=function(e){var t,n;let{data:E,eventCard:l="",indent:o=!1}=e;const c=i.m(E,"blockDescription"),S=i.m(E,l);return r.createElement("section",{className:o?"section-events section-indent":"section-events"},r.createElement("div",{className:"container"},r.createElement("div",{className:"description"},(null===(t=c[0])||void 0===t?void 0:t.title)&&r.createElement("h2",{className:"title"},c[0].title),(null===(n=c[0])||void 0===n?void 0:n.description)&&r.createElement(L.Z,{data:c[0].description})),r.createElement("div",{className:"row events-row"},S.map((e=>r.createElement("div",{className:"col",key:e.id},r.createElement(a,{showData:e})))))))}},9057:function(e,t,n){function r(e,t){for(const n in e)if(e[n].nameBlock===t)return e[n].sectionBlocks}function E(e,t){const n=[];for(const r in e)e[r].nameBlock===t&&n.push(e[r]);return n}n.d(t,{Y:function(){return r},m:function(){return E}})},7219:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l}});var r=n(7294),E=n(757),a=n(9357),L=n(5928),i=n(9057);const l=()=>r.createElement(a.Z,{title:"Home"});t.default=e=>{let{data:t}=e;const n={...t.allContentfulPage.nodes[0].sectionContents};return r.createElement(E.Z,null,r.createElement(L.Z,{data:i.Y(n,"ModelProject"),eventCard:"projectModel",indent:!0}))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-a6980cb0eda1cd1f037d.js.map