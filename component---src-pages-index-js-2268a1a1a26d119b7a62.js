"use strict";(self.webpackChunkethno_contemporary_ballet=self.webpackChunkethno_contemporary_ballet||[]).push([[678],{549:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},1928:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var l=n(549),r={nodeType:l.BLOCKS.DOCUMENT,data:{},content:[{nodeType:l.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=r},6061:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var l=n(549),r=n(7845);function a(e,t){for(var n=0,l=Object.keys(e);n<l.length;n++){if(t===e[l[n]])return!0}return!1}t.isInline=function(e){return a(r.INLINES,e.nodeType)},t.isBlock=function(e){return a(l.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},6437:function(e,t,n){var l=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,l,r)}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||l(t,e,n)},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var c=n(549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return c.BLOCKS}});var s=n(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return s.INLINES}});var E=n(1376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return i(E).default}}),a(n(7951),t),a(n(167),t),a(n(1911),t);var d=n(1928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return i(d).default}});var u=o(n(6061));t.helpers=u},7845:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))},1376:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n},1911:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},7951:function(e,t,n){var l,r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var l,r=0,a=t.length;r<a;r++)!l&&r in t||(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var o=n(549),i=n(7845),c=a(n(1376));t.TOP_LEVEL_BLOCKS=[o.BLOCKS.PARAGRAPH,o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6,o.BLOCKS.OL_LIST,o.BLOCKS.UL_LIST,o.BLOCKS.HR,o.BLOCKS.QUOTE,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET,o.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[o.BLOCKS.PARAGRAPH,o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6,o.BLOCKS.OL_LIST,o.BLOCKS.UL_LIST,o.BLOCKS.HR,o.BLOCKS.QUOTE,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[o.BLOCKS.TABLE,o.BLOCKS.TABLE_ROW,o.BLOCKS.TABLE_CELL,o.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[o.BLOCKS.HR,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((l={})[o.BLOCKS.OL_LIST]=[o.BLOCKS.LIST_ITEM],l[o.BLOCKS.UL_LIST]=[o.BLOCKS.LIST_ITEM],l[o.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,l[o.BLOCKS.QUOTE]=[o.BLOCKS.PARAGRAPH],l[o.BLOCKS.TABLE]=[o.BLOCKS.TABLE_ROW],l[o.BLOCKS.TABLE_ROW]=[o.BLOCKS.TABLE_CELL,o.BLOCKS.TABLE_HEADER_CELL],l[o.BLOCKS.TABLE_CELL]=[o.BLOCKS.PARAGRAPH],l[o.BLOCKS.TABLE_HEADER_CELL]=[o.BLOCKS.PARAGRAPH],l),t.HEADINGS=[o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([o.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[o.BLOCKS.DOCUMENT,o.BLOCKS.PARAGRAPH,o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6,o.BLOCKS.OL_LIST,o.BLOCKS.UL_LIST,o.BLOCKS.LIST_ITEM,o.BLOCKS.HR,o.BLOCKS.QUOTE,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET,i.INLINES.HYPERLINK,i.INLINES.ENTRY_HYPERLINK,i.INLINES.ASSET_HYPERLINK,i.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[c.default.BOLD,c.default.CODE,c.default.ITALIC,c.default.UNDERLINE]},167:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},2240:function(e,t,n){var l=n(7294),r=n(8872),a=n(6437);t.Z=function(e){let{data:t,colorText:n="inherit"}=e;const o={renderMark:{[a.MARKS.BOLD]:e=>l.createElement("b",{className:"font-bold"},e)},renderNode:{[a.INLINES.HYPERLINK]:(e,t)=>{const{uri:n}=e.data;return l.createElement("a",{href:n,className:"link-decorated"},t)},[a.BLOCKS.HEADING_2]:(e,t)=>l.createElement("h2",null,t)}};return l.createElement("div",{className:"text",style:{color:n}},(0,r.Z)(t,o))}},5928:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),r=n(1883);var a=function(e){let{showData:t}=e;return console.log(t),l.createElement(r.rU,{to:t.newEvent?"/new-events/"+t.slug:"/projects/"+t.slug,className:"event-card"},t.image&&l.createElement("div",{className:"event-card__img"},t.newEvent&&l.createElement("span",{className:"newEvent"},t.newEventsText),l.createElement("img",{src:t.image.url,alt:t.image.description})),l.createElement("div",{className:"event-card__body"},t.title&&l.createElement("h5",{className:"event-card__title"},t.title),t.previewText&&l.createElement("div",{className:"event-card__text"},l.createElement("p",null,t.previewText)),t.textBtn&&l.createElement("div",{className:"btn-wrap"},l.createElement("span",{className:"link "},t.textBtn))))},o=n(2240),i=n(9057);var c=function(e){var t,n,r,c;let{data:s,eventCard:E="",indent:d=!1}=e;const u=i.m(s,"blockDescription"),L=i.m(s,E);return L.sort(((e,t)=>parseInt(e.countPosition)-parseInt(t.countPosition))),l.createElement("section",{className:d?"section-events section-indent":"section-events"},l.createElement("div",{className:"container"},l.createElement("div",{className:"description"},(null===(t=u[0])||void 0===t?void 0:t.title)&&l.createElement("h2",{className:"title"},null===(n=u[0])||void 0===n?void 0:n.title),(null===(r=u[0])||void 0===r?void 0:r.description)&&l.createElement(o.Z,{data:null===(c=u[0])||void 0===c?void 0:c.description})),l.createElement("div",{className:"row events-row"},L.map((e=>l.createElement("div",{className:"col",key:e.id},l.createElement(a,{showData:e})))))))}},626:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),r=n(1883);var a=function(e){var t,n,a,o;let{personData:i}=e;return l.createElement("div",{className:"person-card",style:{backgroundColor:i.bgColorCard?i.bgColorCard:"#00087a"}},l.createElement(r.rU,{to:"/team/"+(null==i?void 0:i.slug),className:"link-image"},(null===(t=i.personImage)||void 0===t?void 0:t.url)&&null!=(null===(n=i.personImage)||void 0===n?void 0:n.url)&&l.createElement("div",{className:"person-card__img"},l.createElement("img",{src:null===(a=i.personImage)||void 0===a?void 0:a.url,alt:null===(o=i.personImage)||void 0===o?void 0:o.description}),"  "),l.createElement("div",{className:"person-card__body"},l.createElement("span",{className:"bg-body",style:{backgroundColor:i.bgColorAnimation?i.bgColorAnimation:"#fff"}}),i.namePersone&&l.createElement("h5",{className:"person-card__title",style:{color:i.colorText?i.colorText:"#fff"}},i.namePersone," "),i.position&&l.createElement("div",{className:"person-card__position",style:{color:i.colorText?i.colorText:"#fff"}},l.createElement("p",null,i.position)))))},o=n(2240),i=n(9057);var c=function(e){var t,n,r,c;let{data:s,indent:E=!1}=e;const d={...s[0]},u=i.m(s,"blockDescription"),L=i.m(s,"person");return l.createElement("section",{className:E?"section-team section-indent":"section-team",style:{backgroundColor:d.sectionColor?d.sectionColor:""}},l.createElement("div",{className:"container"},l.createElement("div",{className:"description"},(null===(t=u[0])||void 0===t?void 0:t.title)&&l.createElement("h2",{className:"title"},null===(n=u[0])||void 0===n?void 0:n.title),(null===(r=u[0])||void 0===r?void 0:r.description)&&l.createElement(o.Z,{data:null===(c=u[0])||void 0===c?void 0:c.description})),l.createElement("div",{className:"row team-row"},L.map((e=>l.createElement("div",{className:"col",key:e.id},l.createElement(a,{personData:e})))))))}},9057:function(e,t,n){function l(e,t){for(const n in e)if(e[n].nameBlock===t)return e[n].sectionBlocks}function r(e,t){const n=[];for(const l in e)e[l].nameBlock===t&&n.push(e[l]);return n}n.d(t,{Y:function(){return l},m:function(){return r}})},3614:function(e,t,n){n.r(t),n.d(t,{Head:function(){return _},default:function(){return S}});var l=n(7294),r=n(757),a=n(9357),o=n(2240),i=n(6610),c=n(2263);var s=function(e){let{data:t}=e;return l.createElement("section",{className:"sectionMain"},l.createElement(i.tq,{modules:[c.pt,c.tl],slidesPerView:1,loop:"true",pagination:{clickable:!0}},t.map(((e,t)=>{var n,r;return l.createElement(i.o5,{key:e.title+t},l.createElement("div",{className:"bg-image",style:{backgroundColor:"#000"}},(null==e||null===(n=e.slideBgImage)||void 0===n?void 0:n.url)&&l.createElement("img",{src:null==e?void 0:e.slideBgImage.url,alt:null===(r=e.slideBgImage)||void 0===r?void 0:r.description}),(null==e?void 0:e.layerOnImage)&&l.createElement("span",{className:"bg-image-layer",style:{backgroundColor:e.layerOnImage?e.layerOnImage:""}})),l.createElement("div",{className:"sectionMain__slide"},l.createElement("div",{className:"container"},l.createElement("div",{className:"description"},(null==e?void 0:e.title)&&l.createElement("h1",{className:"title",style:{color:e.colorText?e.colorText:""}},e.title),(null==e?void 0:e.subtitle)&&l.createElement("h6",{className:"subtitle",style:{color:e.colorText?e.colorText:""}},e.subtitle),(null==e?void 0:e.colorText)&&l.createElement(o.Z,{data:e.slideDescription,colorText:e.colorText})))))}))))},E=n(626),d=n(5928),u=n(1883);var L=function(e){let{data:t,indent:n=!1}=e;const r={...t[0]};return l.createElement("section",{className:n?"section-about section-indent":"section-about",style:{backgroundColor:r.sectionColor?r.sectionColor:""}},l.createElement("div",{className:"container"},l.createElement("div",{className:"description"},r.title&&l.createElement("h2",{className:"title",style:{color:r.textColor?r.textColor:"#0000"}},r.title),(null==r?void 0:r.description)&&l.createElement(o.Z,{data:null==r?void 0:r.description,colorText:r.textColor})),(null==r?void 0:r.buttonURl)&&l.createElement("div",{className:"btn-wrap"},l.createElement(u.rU,{to:r.buttonURl,className:"link",style:{color:r.textColor?r.textColor:"#0000"}},r.buttonText))))},m=n(9057);const _=()=>l.createElement(a.Z,{title:"Home"});var S=e=>{let{data:t}=e;const n={...t.allContentfulPage.nodes[0].sectionContents};return l.createElement(r.Z,null,l.createElement(s,{data:m.Y(n,"ModelMainSlider")}),l.createElement(L,{data:m.Y(n,"ModelAboutUS")}),l.createElement(E.Z,{data:m.Y(n,"ModelTeam")}),l.createElement(d.Z,{data:m.Y(n,"ModelProject"),eventCard:"projectModel"}),l.createElement(d.Z,{data:m.Y(n,"ModelEvent"),eventCard:"CardNewEvent"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2268a1a1a26d119b7a62.js.map