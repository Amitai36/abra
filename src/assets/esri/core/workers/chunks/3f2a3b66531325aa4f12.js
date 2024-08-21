"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4322],{67482:(e,t,n)=>{function r(e){return null!=s(e)||null!=a(e)}function o(e){return l.test(e)}function i(e){return s(e)??a(e)}function a(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,r=0;for(;!t&&r<=e.length;)t=!u.test(e[r]),r++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function s(e){const t=l.exec(e);if(!t?.groups)return null;const n=t.groups,r=+n.year,o=+n.month-1,i=+n.day,a=+(n.hours??"0"),s=+(n.minutes??"0"),u=+(n.seconds??"0");if(a>23)return null;if(s>59)return null;if(u>59)return null;const c=n.ms??"0",p=c?+c.padEnd(3,"0").substring(0,3):0;let d;if(n.isUTC||!n.offsetSign)d=Date.UTC(r,o,i,a,s,u,p);else{const e=+n.offsetHours,t=+n.offsetMinutes;d=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,o,i,a,s,u,p)}return Number.isNaN(d)?null:d}n.d(t,{Br:()=>o,Cq:()=>r,_U:()=>i});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},85113:(e,t,n)=>{n.d(t,{BM:()=>x,bd:()=>A,sO:()=>v,xD:()=>c});var r=n(67482),o=n(49186),i=n(21325),a=n(43334),s=n(92722),l=n(30524);const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return u[e]}function*p(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*d(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function y(e){for(const t of e)if(t.length>2)return!0;return!1}function f(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)b(e,r,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){h(e,r[0],n);for(let t=1;t<r.length;t++)w(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return T(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;h(e,r[0],n);for(let t=1;t<r.length;t++)w(e,r[t],n);return e}(e,t,n)}}function h(e,t,n){const r=m(t);!function(e){return!f(e)}(r)?b(e,r,n):S(e,r,n)}function w(e,t,n){const r=m(t);!function(e){return f(e)}(r)?b(e,r,n):S(e,r,n)}function b(e,t,n){for(const r of t)T(e,r,n);e.lengths.push(t.length)}function S(e,t,n){for(let r=t.length-1;r>=0;r--)T(e,t[r],n);e.lengths.push(t.length)}function T(e,t,n){const[r,o,i]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(i||0)}function F(e){switch(typeof e){case"string":return(0,r.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function v(e,t=4326){if(!e)throw new o.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const r="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,a=(0,i.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!r||!a.test(r))throw new o.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function x(e,t={}){const n=[],r=new Set,o=new Set;let i,a=!1,s=null,u=!1,{geometryType:f=null}=t,m=!1;for(const t of p(e)){const{geometry:e,properties:p,id:g}=t;if((!e||(f||(f=c(e.type)),c(e.type)===f))&&(a||(a=y(d(e))),u||(u=null!=g,u&&(i=typeof g,p&&(s=Object.keys(p).filter((e=>p[e]===g))))),p&&s&&u&&null!=g&&(s.length>1?s=s.filter((e=>p[e]===g)):1===s.length&&(s=p[s[0]]===g?s:[])),!m&&p)){let e=!0;for(const t in p){if(r.has(t))continue;const i=p[t];if(null==i){e=!1,o.add(t);continue}const a=F(i);if("unknown"===a){o.add(t);continue}o.delete(t),r.add(t);const s=(0,l.rS)(t);s&&n.push({name:s,alias:t,type:a})}m=e}}const g=(0,l.rS)(1===s?.length&&s[0]||null)??void 0;if(g)for(const e of n)if(e.name===g&&(0,l.WA)(e)){e.type="esriFieldTypeOID";break}return{fields:n,geometryType:f,hasZ:a,objectIdFieldName:g,objectIdFieldType:i,unknownFields:Array.from(o)}}function A(e,t){return Array.from(function*(e,t={}){const{geometryType:n,objectIdField:r}=t;for(const o of e){const{geometry:e,properties:i,id:l}=o;if(e&&c(e.type)!==n)continue;const u=i||{};let p;r&&(p=u[r],null==l||p||(u[r]=p=l));const d=new a.Om(e?g(new s.A,e,t):null,u,null,p??void 0);yield d}}(p(e),t))}},34322:(e,t,n)=>{n.d(t,{E:()=>Z,Fu:()=>M,O8:()=>G,UH:()=>z,YW:()=>O,i5:()=>b,mG:()=>_,x$:()=>U}),n(59456);var r=n(78888),o=n(49186),i=n(5479),a=n(84952),s=n(57251),l=n(21325),u=n(50498),c=n(85113),p=n(13043),d=n(60694),y=n(20437),f=n(30524),m=n(5443),g=n(16930);const h="xlink:href",w="2.0.0",b="__esri_wfs_id__",S="wfs-layer:getWFSLayerTypeInfo-error",T="wfs-layer:empty-service",F="wfs-layer:feature-type-not-found",v="wfs-layer:geojson-not-supported",x="wfs-layer:kvp-encoding-not-supported",A="wfs-layer:malformed-json",N="wfs-layer:unknown-geometry-type",P="wfs-layer:unknown-field-type",C="wfs-layer:unsupported-spatial-reference",k="wfs-layer:unsupported-wfs-version";async function M(e,t){const n=function(e){const t=J(e);(function(e){const t=e.firstElementChild?.getAttribute("version");if(t&&t!==w)throw new o.A(k,`Unsupported WFS version ${t}. Supported version: ${w}`)})(t),W(t);const n=t.firstElementChild,r=(0,i.PP)(function(e){return(0,p.i)(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},n=new Set;return(0,p.p)(e,{Name:e=>{const{name:n,prefix:r}=Y(e.textContent);t.typeName=`${r}:${n}`,t.name=n,t.namespacePrefix=r,t.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=m.A.fromJSON(function(e){let t,n,r,o;for(const i of e.children)switch(i.localName){case"LowerCorner":[t,n]=i.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,o]=i.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:l.KK}}(e))},DefaultCRS:e=>{const r=j(e);r&&(t.defaultSpatialReference=r,n.add(r))},OtherCRS:e=>{const t=j(e);t&&n.add(t)}}),t.title||(t.title=t.name),n.add(4326),t.supportedSpatialReferences.push(...n),t}}})}(n));return{operations:V(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}((await(0,r.A)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:w,...t?.customParameters},signal:t?.signal})).data);return function(e,t){(0,a.m3)(e)&&((0,a.FX)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,a.lM)(t.operations.DescribeFeatureType.url)),(0,a.FX)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,a.lM)(t.operations.GetFeature.url)))}(e,n),n}const R=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function E(e){for(const t of R){const n=e.findIndex((e=>e.toLowerCase()===t));if(n>=0)return e[n]}return null}function V(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},r=[],i=[];if((0,p.p)(e,{OperationsMetadata:{Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:({textContent:e})=>{e&&r.push(e)}}}},Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(h)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(h)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(h)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:({textContent:e})=>{e&&i.push(e)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),n.GetFeature.outputFormat=E(i)??E(r),!t)throw new o.A(x,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new o.A(v,"WFS service doesn't support GeoJSON output format");return n}function j(e){const t=parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function _(e,t,n){return(0,i.I6)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function G(e,t,n,r={}){const{featureType:i,extent:a}=await async function(e,t,n,r={}){const i=e.readFeatureTypes(),a=t?_(i,t,n):i.next().value,{spatialReference:u=new g.A({wkid:a?.defaultSpatialReference})}=r;if(null==a)throw t?new o.A(F,`The type '${t}' could not be found in the service`):new o.A(T,"The service is empty");let c=a.extent;if(c&&!(0,l.aI)(c.spatialReference,u))try{await(0,s.initializeProjection)(c.spatialReference,u,void 0,r),c=(0,s.project)(c,u)}catch{throw new o.A(C,"Projection not supported")}return{extent:c,spatialReference:u,featureType:a}}(e,t,n,r),{spatialReference:u}=z(e.operations.GetFeature.url,i,r.spatialReference),{fields:c,geometryType:p,swapXY:d,objectIdField:y,geometryField:f}=await async function(e,t,n,r={}){const{typeName:i}=t,[a,s]=await Promise.allSettled([I(e.operations.DescribeFeatureType.url,i,r),D(e,i,n,r)]),l=e=>new o.A(S,`An error occurred while getting info about the feature type '${i}'`,{error:e});if("rejected"===a.status)throw l(a.reason);if("rejected"===s.status)throw l(s.reason);const{fields:u,errors:c}=a.value??{},p=a.value?.geometryType||s.value?.geometryType,d=s.value?.swapXY??!1;if(null==p)throw new o.A(N,`The geometry type could not be determined for type '${i}`,{typeName:i,geometryType:p,fields:u,errors:c});return{...O(u??[]),geometryType:p,swapXY:d}}(e,i,u,r);return{url:e.operations.GetCapabilities.url,name:i.name,namespaceUri:i.namespaceUri,fields:c,geometryField:f,geometryType:p,objectIdField:y,spatialReference:r.spatialReference??new g.A({wkid:i.defaultSpatialReference}),extent:a,swapXY:d,wfsCapabilities:e,customParameters:r.customParameters}}function O(e){const t=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new y.A({name:b,type:"oid",alias:b}),e.unshift(n)),{geometryField:t?.name??null,objectIdField:n.name,fields:e}}async function D(e,t,n,o={}){let i,a=!1;const[s,l]=await Promise.all([U(e.operations.GetFeature.url,t,n,e.operations.GetFeature.outputFormat,{...o,count:1}),(0,r.A)(e.operations.GetFeature.url,{responseType:"text",query:L(t,n,void 0,{...o,count:1}),signal:o?.signal})]),p="FeatureCollection"===s.type&&s.features[0]?.geometry;if(p){let e;switch(i=u.g.fromJSON((0,c.xD)(p.type)),p.type){case"Point":e=p.coordinates;break;case"LineString":case"MultiPoint":e=p.coordinates[0];break;case"MultiLineString":case"Polygon":e=p.coordinates[0][0];break;case"MultiPolygon":e=p.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(l.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),o=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===o&&(a=!0)}}return{geometryType:i,swapXY:a}}async function I(e,t,n){return function(e,t){const{name:n}=Y(e),r=J(t);W(r);const a=(0,i.I6)((0,p.i)(r.firstElementChild,{element:e=>e}),(e=>e.getAttribute("name")===n));if(null!=a){const e=a.getAttribute("type"),t=e?(0,i.I6)((0,p.i)(r.firstElementChild,{complexType:e=>e}),(t=>t.getAttribute("name")===Y(e).name)):(0,i.I6)((0,p.i)(a,{complexType:e=>e}),(()=>!0));if(t)return function(e){const t=[],n=[];let r;const i=(0,p.i)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const a of i){const i=a.getAttribute("name");if(!i)continue;let s,l;if(a.hasAttribute("type")?s=Y(a.getAttribute("type")).name:(0,p.p)(a,{simpleType:{restriction:e=>(s=Y(e.getAttribute("base")).name,{maxLength:e=>{l=+e.getAttribute("value")}})}}),!s)continue;const u="true"===a.getAttribute("nillable");let c=!1;switch(s.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new y.A({name:i,alias:i,type:"integer",nullable:u,length:(0,f._b)("integer")}));break;case"float":case"double":case"decimal":n.push(new y.A({name:i,alias:i,type:"double",nullable:u,length:(0,f._b)("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new y.A({name:i,alias:i,type:"string",nullable:u,length:l??(0,f._b)("string")}));break;case"datetime":case"date":n.push(new y.A({name:i,alias:i,type:"date",nullable:u,length:l??(0,f._b)("date")}));break;case"pointpropertytype":r="point",c=!0;break;case"multipointpropertytype":r="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new o.A(N,`geometry type '${s}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:t.push(new o.A(P,`Unknown field type '${s}'`,{type:(new XMLSerializer).serializeToString(e)}))}c&&n.push(new y.A({name:i,alias:i,type:"geometry",nullable:u}))}for(const e of n)if("integer"===e.type&&!e.nullable&&$.has(e.name.toLowerCase())){e.type="oid";break}return{geometryType:r,fields:n,errors:t}}(t)}throw new o.A(F,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(r)})}(t,(await(0,r.A)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:w,TYPENAME:t,TYPENAMES:t,...n?.customParameters},signal:n?.signal})).data)}const $=new Set(["objectid","fid"]);async function U(e,t,n,i,a){let{data:s}=await(0,r.A)(e,{responseType:"text",query:L(t,n,i,a),signal:a?.signal});s=s.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(s)}catch(e){throw new o.A(A,"Error while parsing the response",{response:s,error:e})}}function L(e,t,n,r){const o="number"==typeof t?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:w,TYPENAMES:e,OUTPUTFORMAT:n,SRSNAME:"EPSG:"+o,STARTINDEX:r?.startIndex,COUNT:r?.count,...r?.customParameters}}async function Z(e,t,n){const o=await(0,r.A)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:w,TYPENAMES:t,RESULTTYPE:"hits",...n?.customParameters},signal:n?.signal}),i=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(o.data);if(i?.groups)return+i.groups.numberMatched}function J(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function Y(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:n??t}}function W(e){let t="",n="";if((0,p.p)(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new o.A(`wfs-layer:${t}`,n)}function z(e,t,n){const r={wkid:t.defaultSpatialReference},o=null!=n?.wkid?{wkid:n.wkid}:r;return{spatialReference:o,getFeatureSpatialReference:(0,d.Fi)(e)||o.wkid&&t.supportedSpatialReferences.includes(o.wkid)?{wkid:o.wkid}:{wkid:t.defaultSpatialReference}}}},13043:(e,t,n)=>{function r(e,t){if(e&&t)for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&r(n,t)}else r(n,e)}}function*o(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*o(n,e)}}n.d(t,{i:()=>o,p:()=>r})},20437:(e,t,n)=>{n.d(t,{A:()=>g});var r,o=n(90237),i=n(66552),a=n(25482),s=n(10107),l=n(56507),u=(n(87811),n(44208),n(93223)),c=n(36005),p=n(40608),d=n(72088),y=n(98453);const f=new i.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=r=class extends a.oY{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let n=null;try{n=t?JSON.parse(t):null}catch(e){}return n?.value??null}readValueType(e,{description:t}){let n=null;try{n=t?JSON.parse(t):null}catch(e){}return n?f.fromJSON(n.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,o._)([(0,s.MZ)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,o._)([(0,s.MZ)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"description",void 0),(0,o._)([(0,c.w)("description")],m.prototype,"readDescription",null),(0,o._)([(0,s.MZ)({types:d.gK,json:{read:{reader:d.rS},write:!0}})],m.prototype,"domain",void 0),(0,o._)([(0,s.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,o._)([(0,s.MZ)({type:l.jz,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],m.prototype,"length",void 0),(0,o._)([(0,s.MZ)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,o._)([(0,s.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,o._)([(0,u.e)(y.m)],m.prototype,"type",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"valueType",void 0),(0,o._)([(0,c.w)("valueType",["description"])],m.prototype,"readValueType",null),(0,o._)([(0,s.MZ)({type:Boolean,json:{read:!1}})],m.prototype,"visible",void 0),m=r=(0,o._)([(0,p.$)("esri.layers.support.Field")],m);const g=m},72088:(e,t,n)=>{n.d(t,{rS:()=>x,gK:()=>v}),n(44208);var r,o=n(90237),i=n(4718),a=n(10107),s=(n(53966),n(93223)),l=n(40608),u=n(25482);n(87811);let c=r=class extends u.oY{constructor(e){super(e),this.name=null,this.code=null}clone(){return new r({name:this.name,code:this.code})}};(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,o._)([(0,a.MZ)({type:[String,Number],json:{write:!0}})],c.prototype,"code",void 0),c=r=(0,o._)([(0,l.$)("esri.layers.support.CodedValue")],c);const p=new(n(66552).J)({inherited:"inherited",codedValue:"coded-value",range:"range"});let d=class extends u.oY{constructor(e){super(e),this.name=null,this.type=null}};(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],d.prototype,"name",void 0),(0,o._)([(0,s.e)(p)],d.prototype,"type",void 0),d=(0,o._)([(0,l.$)("esri.layers.support.Domain")],d);const y=d;var f;let m=f=class extends y{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const n=String(e);this.codedValues.some((e=>(String(e.code)===n&&(t=e.name),!!t)))}return t}clone(){return new f({codedValues:(0,i.o8)(this.codedValues),name:this.name})}};(0,o._)([(0,a.MZ)({type:[c],json:{write:!0}})],m.prototype,"codedValues",void 0),(0,o._)([(0,s.e)({codedValue:"coded-value"})],m.prototype,"type",void 0),m=f=(0,o._)([(0,l.$)("esri.layers.support.CodedValueDomain")],m);const g=m;var h;n(49186);let w=h=class extends y{constructor(e){super(e),this.type="inherited"}clone(){return new h}};(0,o._)([(0,s.e)({inherited:"inherited"})],w.prototype,"type",void 0),w=h=(0,o._)([(0,l.$)("esri.layers.support.InheritedDomain")],w);const b=w;var S;let T=S=class extends y{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new S({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,o._)([(0,a.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,n){t[n]=[this.minValue||0,e]}}}})],T.prototype,"maxValue",void 0),(0,o._)([(0,a.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[0]},write:{target:"range",writer(e,t,n){t[n]=[e,this.maxValue||0]}}}})],T.prototype,"minValue",void 0),(0,o._)([(0,s.e)({range:"range"})],T.prototype,"type",void 0),T=S=(0,o._)([(0,l.$)("esri.layers.support.RangeDomain")],T);const F=T,v={key:"type",base:y,typeMap:{range:T,"coded-value":g,inherited:b}};function x(e){if(!e?.type)return null;switch(e.type){case"range":return F.fromJSON(e);case"codedValue":return g.fromJSON(e);case"inherited":return b.fromJSON(e)}return null}}}]);