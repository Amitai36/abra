"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1528],{60945:(e,t,r)=>{r.d(t,{A:()=>m});var i,n=r(90237),s=r(25482),a=r(88930),o=r(10107),l=(r(44208),r(53966),r(87811),r(36005)),p=r(40608),u=r(43937),c=r(56400);let d=i=class extends s.oY{static get allTime(){return y}static get empty(){return h}static fromArray(e){return new i({start:null!=e[0]?new Date(e[0]):e[0],end:null!=e[1]?new Date(e[1]):e[1]})}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=e.start?.getTime()??e.start,n=e.end?.getTime()??e.end;return t===i&&r===n}expandTo(e,t=c.qU){if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,a.lL)(r,e,t));let n=this.end;if(n){const r=(0,a.lL)(n,e,t);n=n.getTime()===r.getTime()?r:(0,a.S1)(r,1,e,t)}return new i({start:r,end:n})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,n=e.start?.getTime()??-1/0,s=e.end?.getTime()??1/0;let a,o;return n>=t&&n<=r?a=n:t>=n&&t<=s&&(a=t),r>=n&&r<=s?o=r:s>=t&&s<=r&&(o=s),null==a||null==o||isNaN(a)||isNaN(o)?i.empty:new i({start:a===-1/0?null:new Date(a),end:o===1/0?null:new Date(o)})}offset(e,t,r=c.qU){if(this.isEmpty||this.isAllTime)return this.clone();const n=new i,{start:s,end:o}=this;return null!=s&&(n.start=(0,a.S1)(s,e,t,r)),null!=o&&(n.end=(0,a.S1)(o,e,t,r)),n}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return y.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,n._)([(0,o.MZ)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,n._)([(0,l.w)("end")],d.prototype,"readEnd",null),(0,n._)([(0,u.K)("end")],d.prototype,"writeEnd",null),(0,n._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,n._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,n._)([(0,o.MZ)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,n._)([(0,l.w)("start")],d.prototype,"readStart",null),(0,n._)([(0,u.K)("start")],d.prototype,"writeStart",null),d=i=(0,n._)([(0,p.$)("esri.TimeExtent")],d);const y=new d,h=new d({start:void 0,end:void 0}),m=d},4902:(e,t,r)=>{r.d(t,{PH:()=>o,sA:()=>a});var i=r(90237),n=r(40608);let s=0;const a=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+s++})}};return t=(0,i._)([(0,n.$)("esri.core.Identifiable")],t),t},o=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:s++})}};return t=(0,i._)([(0,n.$)("esri.core.Identifiable.NumericIdentifiable")],t),t};let l=class extends(a(class{})){};l=(0,i._)([(0,n.$)("esri.core.Identifiable")],l)},92071:(e,t,r)=>{r.d(t,{P:()=>w,L:()=>S});var i=r(90237),n=r(69622),s=r(76953),a=r(4718),o=r(35666);class l{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(o.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new l,r=this._originStores[o.Gr.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,a.o8)(e),o.Gr.DEFAULTS)}));for(let r=o.Gr.SERVICE;r<o.AU;r++){const i=this._originStores[r];i&&i.forEach(((i,n)=>{e&&e.has(n)||t.set(n,(0,a.o8)(i),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=o.Gr.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||this._propertyOriginMap.get(e)<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=o.Gr.USER){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r?.get(e),n=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),n!==i}originOf(e){return this._propertyOriginMap.get(e)||o.Gr.DEFAULTS}forEach(e){this._values.forEach(e)}}var p=r(45917),u=r(88620),c=r(40608);const d=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,u.oY)(this),r=t.store,i=new l;t.store=i,(0,s.k)(t,r,i)}read(e,t){(0,p.L)(this,e,t)}getAtOrigin(e,t){const r=y(this),i=(0,o.aB)(t);if("string"==typeof e)return r.get(e,i);const n={};return e.forEach((e=>{n[e]=r.get(e,i)})),n}originOf(e){return(0,o.OL)(this.originIdOf(e))}originIdOf(e){return y(this).originOf(e)}revert(e,t){const r=y(this),i=(0,o.aB)(t),n=(0,u.oY)(this);let s;s="string"==typeof e?"*"===e?r.keys(i):[e]:e,s.forEach((e=>{n.invalidate(e),r.revert(e,i),n.commit(e)}))}};return t=(0,i._)([(0,c.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function y(e){return(0,u.oY)(e).store}let h=class extends(d(n.A)){};h=(0,i._)([(0,c.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],h);var m=r(16649),f=r(49422);const g=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return v(this).delete(e,(0,o.aB)(t))}write(e,t){return(0,f.M)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,u.oY)(this).setAtOrigin(e,t,(0,o.aB)(r))}removeOrigin(e){const t=v(this),r=(0,o.aB)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),o.Gr.USER)}updateOrigin(e,t){const r=v(this),i=(0,o.aB)(t),n=(0,m.Jt)(this,e);for(let t=i+1;t<o.AU;++t)r.delete(e,t);r.set(e,n,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,c.$)("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function v(e){return(0,u.oY)(e).store}const w=e=>{let t=class extends(g(d(e))){constructor(...e){super(...e)}};return t=(0,i._)([(0,c.$)("esri.core.MultiOriginJSONSupport")],t),t};let S=class extends(w(n.A)){};S=(0,i._)([(0,c.$)("esri.core.MultiOriginJSONSupport")],S)},89317:(e,t,r)=>{r.d(t,{K:()=>i});const i=["operational-layers","basemap","ground"]},61528:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var i=r(90237),n=r(78888),s=r(49186),a=r(53966),o=r(34727),l=r(92071),p=r(74887),u=r(10107),c=(r(44208),r(87811),r(40608)),d=r(38954),y=r(51850),h=r(73941),m=r(5443),f=r(16930),g=r(9762),v=r(4146),w=r(52136),S=r(18768),b=r(69208),_=r(16131),I=r(8303),A=r(25036),M=r(10873),x=r(24212);let L=class extends((0,S.b)((0,_.q)((0,I.A)((0,A.j)((0,l.P)((0,b.d)((0,w.p)(v.A)))))))){constructor(e){super(e),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new f.A({wkid:4326,vcsWkid:115700}),this.fullExtent=new m.A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}_verifyArray(e,t){if(!Array.isArray(e)||e.length<t)return!1;for(const t of e)if("number"!=typeof t)return!1;return!0}_initFullExtent(e){const t=e.root?.boundingVolume;if(!t)return;if(t.box){const e=t?.box;if(e[3]>7972671&&e[7]>7972671&&e[11]>7945940)return}const r=e.root?.transform,i=(0,y.vt)();if(t.region&&this._verifyArray(t.region,6)){const e=t.region,r=(0,o.KJ)(e[0]),i=(0,o.KJ)(e[1]),n=e[4],s=(0,o.KJ)(e[2]),a=(0,o.KJ)(e[3]),l=e[5];this.fullExtent=new m.A({xmin:r,ymin:i,zmin:n,xmax:s,ymax:a,zmax:l,spatialReference:this.spatialReference})}else if(t.sphere&&this._verifyArray(t.sphere,4)){const e=t.sphere,n=(0,y.fA)(e[0],e[1],e[2]),s=e[3]/Math.sqrt(3),a=(0,y.vt)();(0,d.f)(a,n,(0,y.fA)(s,s,s));const o=(0,y.vt)();if((0,d.g)(o,n,(0,y.fA)(s,s,s)),r&&this._verifyArray(r,16)){const e=r;(0,d.h)(i,a,e),(0,d.c)(a,i),(0,d.h)(i,o,e),(0,d.c)(o,i)}(0,g.projectBuffer)(a,h.Ro,0,a,f.A.WGS84,0,1),(0,g.projectBuffer)(o,h.Ro,0,o,f.A.WGS84,0,1);const l=(0,y.vt)(),p=(0,y.vt)();(0,d.y)(l,a,o),(0,d.C)(p,a,o),this.fullExtent=new m.A({xmin:l[0],ymin:l[1],zmin:l[2],xmax:p[0],ymax:p[1],zmax:p[2],spatialReference:this.spatialReference})}else if(t.box&&this._verifyArray(t.box,12)){const e=t.box,i=(0,y.fA)(e[0],e[1],e[2]),n=(0,y.fA)(e[3],e[4],e[5]),s=(0,y.fA)(e[6],e[7],e[8]),a=(0,y.fA)(e[9],e[10],e[11]),o=[];for(let e=0;e<8;++e)o.push((0,y.vt)());if((0,d.g)(o[0],i,n),(0,d.g)(o[0],o[0],s),(0,d.g)(o[0],o[0],a),(0,d.z)(o[1],i,n),(0,d.g)(o[1],o[1],s),(0,d.g)(o[1],o[1],a),(0,d.g)(o[2],i,n),(0,d.z)(o[2],o[2],s),(0,d.g)(o[2],o[2],a),(0,d.z)(o[3],i,n),(0,d.z)(o[3],o[3],s),(0,d.g)(o[3],o[3],a),(0,d.g)(o[4],i,n),(0,d.g)(o[4],o[4],s),(0,d.z)(o[4],o[4],a),(0,d.z)(o[5],i,n),(0,d.g)(o[5],o[5],s),(0,d.z)(o[5],o[5],a),(0,d.g)(o[6],i,n),(0,d.z)(o[6],o[6],s),(0,d.z)(o[6],o[6],a),(0,d.z)(o[7],i,n),(0,d.z)(o[7],o[7],s),(0,d.z)(o[7],o[7],a),r&&this._verifyArray(r,16)){const e=r;for(let t=0;t<8;++t)(0,d.h)(o[t],o[t],e)}const l=(0,y.fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p=(0,y.fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let e=0;e<8;++e)(0,g.projectBuffer)(o[e],h.Ro,0,o[e],f.A.WGS84,0,1),(0,d.y)(p,p,o[e]),(0,d.C)(l,l,o[e]);this.fullExtent=new m.A({xmin:p[0],ymin:p[1],zmin:p[2],xmax:l[0],ymax:l[1],zmax:l[2],spatialReference:this.spatialReference})}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=null!=e?e.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:e=>{if(e.typeKeywords?.includes("IntegratedMesh"))return!0;throw new s.A("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},e)}catch(e){(0,p.QP)(e)}if(this.url){const e=(0,n.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{this._initFullExtent(e.data)}),(e=>{(0,p.QP)(e)}));await e}}async fetchAttributionData(){return this.load().then((()=>({})))}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh 3d tiles layers";(0,x.XF)(a.A.getLogger(this),(0,x.B)(t,"absolute-height",e)),(0,x.XF)(a.A.getLogger(this),(0,x.tW)(t,e))}};(0,i._)([(0,u.MZ)({type:["IntegratedMesh3DTilesLayer"]})],L.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.MZ)({type:f.A})],L.prototype,"spatialReference",void 0),(0,i._)([(0,u.MZ)({type:m.A})],L.prototype,"fullExtent",void 0),(0,i._)([(0,u.MZ)(M.Yj)],L.prototype,"elevationInfo",null),(0,i._)([(0,u.MZ)({type:["show","hide"]})],L.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)(M.OZ)],L.prototype,"url",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],L.prototype,"type",void 0),(0,i._)([(0,u.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],L.prototype,"path",void 0),(0,i._)([(0,u.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],L.prototype,"minScale",void 0),(0,i._)([(0,u.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],L.prototype,"maxScale",void 0),L=(0,i._)([(0,c.$)("esri.layers.IntegratedMesh3DTilesLayer")],L);const E=L},4146:(e,t,r)=>{r.d(t,{A:()=>S});var i=r(90237),n=(r(59456),r(78888)),s=r(60945),a=r(49186),o=r(65529),l=r(4902),p=r(92474),u=r(53966),c=r(74887),d=r(84952),y=r(10107),h=(r(44208),r(87811),r(40608)),m=r(92602),f=r(5443),g=r(16930);let v=0,w=class extends(o.A.EventedMixin((0,l.sA)(p.A))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new f.A(-180,-90,180,90,g.A.WGS84),this.id=Date.now().toString(16)+"-layer-"+v++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=g.A.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await r.e(7982).then(r.bind(r,27982))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:i}=await r.e(5613).then(r.bind(r,45613));try{return await i(t)}catch(e){const r=t?.portalItem,i=r?.id||"unset",n=r?.portal?.url||m.A.portalUrl;throw u.A.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+i+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,c.zf)(e)||u.A.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,d.An)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,n.A)(e,{query:{f:"json"},responseType:"json"})).data;throw new a.A("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,y.MZ)({type:String})],w.prototype,"attributionDataUrl",void 0),(0,i._)([(0,y.MZ)({type:f.A})],w.prototype,"fullExtent",void 0),(0,i._)([(0,y.MZ)({readOnly:!0})],w.prototype,"hasAttributionData",null),(0,i._)([(0,y.MZ)({type:String,clonable:!1})],w.prototype,"id",void 0),(0,i._)([(0,y.MZ)({type:Boolean,nonNullable:!0})],w.prototype,"legendEnabled",void 0),(0,i._)([(0,y.MZ)({type:["show","hide","hide-children"]})],w.prototype,"listMode",void 0),(0,i._)([(0,y.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0})],w.prototype,"opacity",void 0),(0,i._)([(0,y.MZ)({clonable:!1})],w.prototype,"parent",void 0),(0,i._)([(0,y.MZ)({readOnly:!0})],w.prototype,"parsedUrl",null),(0,i._)([(0,y.MZ)({type:Boolean,readOnly:!0})],w.prototype,"persistenceEnabled",void 0),(0,i._)([(0,y.MZ)({type:Boolean})],w.prototype,"popupEnabled",void 0),(0,i._)([(0,y.MZ)({type:Boolean})],w.prototype,"attributionVisible",void 0),(0,i._)([(0,y.MZ)({type:g.A})],w.prototype,"spatialReference",void 0),(0,i._)([(0,y.MZ)({type:String})],w.prototype,"title",void 0),(0,i._)([(0,y.MZ)({readOnly:!0,json:{read:!1}})],w.prototype,"type",void 0),(0,i._)([(0,y.MZ)()],w.prototype,"url",void 0),(0,i._)([(0,y.MZ)({type:s.A})],w.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,y.MZ)({type:Boolean,nonNullable:!0})],w.prototype,"visible",void 0),w=(0,i._)([(0,h.$)("esri.layers.Layer")],w);const S=w},52136:(e,t,r)=>{r.d(t,{p:()=>a});var i=r(90237),n=r(10107),s=(r(44208),r(53966),r(87811),r(40608));const a=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,n.MZ)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,s.$)("esri.layers.mixins.APIKeyMixin")],t),t}},18768:(e,t,r)=>{r.d(t,{b:()=>l});var i=r(90237),n=r(53966),s=r(10107),a=(r(44208),r(87811),r(40608)),o=r(60694);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,o.qg)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,o.Jf)(e,n.A.getLogger(this)))}};return(0,i._)([(0,s.MZ)()],t.prototype,"title",null),(0,i._)([(0,s.MZ)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,a.$)("esri.layers.mixins.ArcGISService")],t),t}},69208:(e,t,r)=>{r.d(t,{d:()=>a});var i=r(90237),n=r(10107),s=(r(44208),r(53966),r(87811),r(40608));const a=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,i._)([(0,n.MZ)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,i._)([(0,s.$)("esri.layers.mixins.CustomParametersMixin")],t),t}},16131:(e,t,r)=>{r.d(t,{q:()=>S});var i=r(90237),n=r(60945),s=r(49186),a=r(84952),o=r(10107),l=r(56507),p=(r(87811),r(44208),r(36005)),u=r(40608),c=r(43937),d=r(89317),y=r(45917),h=r(49422);const m={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},f={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},g={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},v={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,Voxel:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":m,"web-map/basemap":f,"web-map/tables":g,"link-chart/operational-layers":{...m,LinkChartLayer:!0},"link-chart/basemap":f,"link-chart/tables":g,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0}};var w=r(10873);const S=e=>{let t=class extends e{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,t,r){return"Group Layer"===r?.portalItem?.type?void 0:e}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&(0,h.R)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){e&&"tables"!==i?.layerContainerType&&(t.layerType=e)}writeTitle(e,t){t.title=e??"Layer"}readTimeExtent(e){return e?n.A.fromArray(e):null}writeTimeExtent(e,t,r,i){e&&"tables"!==i.layerContainerType&&(e.isEmpty?i?.messages&&i.messages.push(new s.A("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):t[r]=e.toArray())}read(e,t){t&&(t.layer=this),(0,y.t)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(!this.persistenceEnabled&&!t?.ignorePersistenceEnabled)return null;if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=v[e];let i=!!r?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return t.messages?.push(new s.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof s.A&&"web-document-write:property-required"===e.name)).length;return(0,a.w8)(r?.url)?(t?.messages?.push(new s.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&i?null:r}beforeSave(){}};return(0,i._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,i._)([(0,p.w)("id",["id"])],t.prototype,"readId",null),(0,i._)([(0,o.MZ)(w.C1)],t.prototype,"listMode",void 0),(0,i._)([(0,c.K)("listMode")],t.prototype,"writeListMode",null),(0,i._)([(0,o.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:d.K}}}}})],t.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.K)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,i._)([(0,o.MZ)(w.ke)],t.prototype,"opacity",void 0),(0,i._)([(0,o.MZ)({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),(0,i._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,i._)([(0,c.K)("title"),(0,c.K)(["web-scene"],"title")],t.prototype,"writeTitle",null),(0,i._)([(0,o.MZ)({type:n.A,json:{origins:{"web-scene":{write:{layerContainerTypes:d.K}}}}})],t.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,p.w)("visibilityTimeExtent")],t.prototype,"readTimeExtent",null),(0,i._)([(0,c.K)(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[l.jz,l.Uv]]}})],t.prototype,"writeTimeExtent",null),(0,i._)([(0,o.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:d.K}}},name:"visibility",write:!0}})],t.prototype,"visible",void 0),t=(0,i._)([(0,u.$)("esri.layers.mixins.OperationalLayer")],t),t}},8303:(e,t,r)=>{r.d(t,{A:()=>_});var i=r(90237),n=r(92602),s=r(70333),a=r(78888),o=r(60999),l=r(49186),p=r(53966),u=r(97768),c=r(74887),d=r(84952),y=r(10107),h=(r(44208),r(87811),r(36005)),m=r(40608),f=r(43937),g=r(83531),v=r(20655),w=r(80812),S=r(41318),b=r(10407);const _=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,u.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new w.default({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:i}=await Promise.all([r.e(5356),r.e(1204)]).then(r.bind(r,41204));return(0,c.Te)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,c.zf)(e)||p.A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,c.QP)(e),!0))))}async setUserPrivileges(e,t){if(!n.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:n}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",n)}catch(e){(0,c.QP)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,b.It)(r);let n,a;if(i)n=r.portal.url;else try{n=await(0,g.wI)(this.url,t)}catch(e){(0,c.QP)(e)}if(!n||!(0,d.b8)(n,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(s.id?.getCredential(`${n}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,c.QP)(e)}const o=!0,l=!1,p=!1;if(!a)return{features:{edit:o,fullEdit:l},content:{updateItem:p}};try{if(i?await r.reload():(r=new w.default({id:e,portal:{url:n}}),await r.load(t)),r.portal.user)return(0,b.It)(r)}catch(e){(0,c.QP)(e)}return{features:{edit:o,fullEdit:l},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,c.QP)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?s.id?.findCredential(this.url):null;if(!t)return!0;const r=I.credential===t?I.user:await this._fetchEditingUser(e);return I.credential=t,I.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=s.id?.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,n=v.A.getDefault();if(n&&n.loaded&&(0,d.S8)(n.restUrl)===(0,d.S8)(i))return n.user;const l=`${i}/community/self`,p=null!=e?e.signal:null,u=await(0,o.Ke)((0,a.A)(l,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?S.A.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||v.A.getDefault());return r&&i&&!(0,d.ut)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,y.MZ)({type:w.default})],t.prototype,"portalItem",null),(0,i._)([(0,h.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,f.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,y.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,y.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,y.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,y.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,m.$)("esri.layers.mixins.PortalLayer")],t),t},I={credential:null,user:null}},25036:(e,t,r)=>{r.d(t,{j:()=>a});var i=r(90237),n=r(10107),s=(r(44208),r(53966),r(87811),r(40608));const a=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,i._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,i._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,i._)([(0,s.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},10873:(e,t,r)=>{r.d(t,{C1:()=>I,Fm:()=>w,Ih:()=>v,M6:()=>u,OZ:()=>d,PY:()=>p,Qo:()=>m,Yj:()=>h,fV:()=>y,hG:()=>_,hn:()=>b,id:()=>S,kF:()=>c,ke:()=>g});var i=r(89317),n=r(5443),s=r(16930),a=r(97159),o=r(88625),l=r(78553);const p={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:i.K}}},u={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},c={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:i.K}}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.w}}},y={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:i.K}}},h={value:null,type:o.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:i.K}}};function m(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const f={write:{enabled:!0,layerContainerTypes:i.K},read:!0},g={type:Number,json:{origins:{"web-document":f,"portal-item":{write:!0}}}},v={...g,json:{...g.json,origins:{"web-document":{...f,write:{enabled:!0,layerContainerTypes:i.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition?.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?(0,l.D)(t.layerDefinition.drawingInfo.transparency):void 0:(0,l.D)(t.drawingInfo.transparency)}}},w={type:n.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=n.A.fromJSON(e);return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=s.A.fromJSON(t.spatialReference)),r}}}},read:!1}},S={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},b={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:i.K}}},name:"layerDefinition.minScale",write:!0}},_={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:i.K}}},name:"layerDefinition.maxScale",write:!0}},I={json:{write:{ignoreOrigin:!0,layerContainerTypes:i.K},origins:{"web-map":{read:!1,write:!1}}}}},31756:(e,t,r)=>{r.d(t,{j:()=>s});var i=r(83047),n=r(79258);const s={unknown:1,inches:(0,i.oU)(1,"meters","inches"),feet:(0,i.oU)(1,"meters","feet"),"us-feet":(0,i.oU)(1,"meters","us-feet"),yards:(0,i.oU)(1,"meters","yards"),miles:(0,i.oU)(1,"meters","miles"),"nautical-miles":(0,i.oU)(1,"meters","nautical-miles"),millimeters:(0,i.oU)(1,"meters","millimeters"),centimeters:(0,i.oU)(1,"meters","centimeters"),decimeters:(0,i.oU)(1,"meters","decimeters"),meters:(0,i.oU)(1,"meters","meters"),kilometers:(0,i.oU)(1,"meters","kilometers"),"decimal-degrees":1/(0,i.vl)(1,"meters",n.$O.radius)}},24212:(e,t,r)=>{function i(e,t){return function(e,t){return t?.mode?t.mode:function(e){return e?l:p}(e).mode}(null!=e&&e.hasZ,t)}function n(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function s(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function a(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function o(e,t){t&&e.warn(".elevationInfo=",t)}r.d(t,{$7:()=>s,B:()=>n,XF:()=>o,tW:()=>a,w7:()=>i}),r(83047),r(16271);const l={mode:"absolute-height",offset:0},p={mode:"on-the-ground",offset:null}},88625:(e,t,r)=>{r.d(t,{A:()=>S});var i,n=r(90237),s=r(66552),a=r(25482),o=r(97768),l=r(10107),p=(r(44208),r(53966),r(87811),r(36005)),u=r(40608),c=r(43937),d=r(30524);let y=i=class extends a.oY{constructor(e){super(e)}async collectRequiredFields(e,t){return(0,d.Dx)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],y.prototype,"expression",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],y.prototype,"title",void 0),y=i=(0,n._)([(0,u.$)("esri.symbols.support.FeatureExpressionInfo")],y);const h=y;var m,f=r(16271);const g=(0,s.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),v=new s.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let w=m=class extends a.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write({},i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new m({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,o.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,n._)([(0,l.MZ)({type:h,json:{write:!0}})],w.prototype,"featureExpressionInfo",void 0),(0,n._)([(0,p.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],w.prototype,"readFeatureExpressionInfo",null),(0,n._)([(0,c.K)("featureExpressionInfo",{featureExpressionInfo:{type:h},"featureExpression.value":{type:[0]}})],w.prototype,"writeFeatureExpressionInfo",null),(0,n._)([(0,l.MZ)({type:g.apiValues,nonNullable:!0,json:{type:g.jsonValues,read:g.read,write:{writer:g.write,isRequired:!0}}})],w.prototype,"mode",null),(0,n._)([(0,l.MZ)({type:Number,json:{write:!0}})],w.prototype,"offset",void 0),(0,n._)([(0,l.MZ)({type:f.KQ,json:{type:String,read:v.read,write:v.write}})],w.prototype,"unit",null),w=m=(0,n._)([(0,u.$)("esri.symbols.support.ElevationInfo")],w);const S=w},16271:(e,t,r)=>{r.d(t,{Ao:()=>n,KQ:()=>s});var i=r(31756);function n(e){return 1/(i.j[e]||1)}const s=function(){const e=Object.keys(i.j);return e.sort(),e}()},78553:(e,t,r)=>{r.d(t,{D:()=>s,p:()=>n});var i=r(56507);function n(e){const t=(0,i.Vr)(100*(1-e));return Math.max(0,Math.min(t,100))}function s(e){const t=1-e/100;return Math.max(0,Math.min(t,1))}}}]);