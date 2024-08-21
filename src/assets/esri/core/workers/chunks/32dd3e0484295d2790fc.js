"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1967,3069],{13069:(e,t,n)=>{n.d(t,{lk:()=>r,vD:()=>s,yS:()=>i});const o="randomUUID"in crypto;function r(){if(o)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function i(){return`{${r().toUpperCase()}}`}function s(){return`{${r()}}`}},33143:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(90237),r=n(69540),i=n(25482),s=n(10107),l=(n(44208),n(53966),n(87811),n(36005)),a=n(40608),p=n(43937),u=n(72088),c=n(29005);let y=class extends((0,r.O)(i.oY)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const n of Object.keys(e))t[n]=(0,u.rS)(e[n]);return t}writeDomains(e,t){const n={};for(const t of Object.keys(e))e[t]&&(n[t]=e[t]?.toJSON());t.domains=n}};(0,o._)([(0,s.MZ)({json:{write:!0}})],y.prototype,"id",void 0),(0,o._)([(0,s.MZ)({json:{write:!0}})],y.prototype,"name",void 0),(0,o._)([(0,s.MZ)({json:{write:!0}})],y.prototype,"domains",void 0),(0,o._)([(0,l.w)("domains")],y.prototype,"readDomains",null),(0,o._)([(0,p.K)("domains")],y.prototype,"writeDomains",null),(0,o._)([(0,s.MZ)({type:[c.A],json:{write:!0}})],y.prototype,"templates",void 0),y=(0,o._)([(0,a.$)("esri.layers.support.FeatureType")],y);const f=y},10407:(e,t,n)=>{n.d(t,{It:()=>y,LG:()=>s,OM:()=>p,Y:()=>l,bK:()=>a,mm:()=>c,sQ:()=>u});var o=n(57251),r=n(16930),i=n(28735);function s(e,t){if(!l(e,t)){const n=e.typeKeywords;n?n.push(t):e.typeKeywords=[t]}}function l(e,t){return!!e.typeKeywords?.includes(t)}function a(e){return l(e,c.HOSTED_SERVICE)}function p(e,t){const n=e.typeKeywords;if(n){const e=n.indexOf(t);e>-1&&n.splice(e,1)}}async function u(e){const t=e.clone().normalize();let n;if(t.length>1)for(const e of t)n?e.width>n.width&&(n=e):n=e;else n=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,i.ci)(e);const n=r.A.WGS84;return await(0,o.initializeProjection)(t,n),(0,o.project)(e,n)}(n)}const c={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function y(e){const{portal:t,isOrgItem:n,itemControl:o}=e,r=t.user?.privileges;let i=!r||r.includes("features:user:edit"),s=!!n&&!!r?.includes("features:user:fullEdit");const l="update"===o||"admin"===o;return l?s=i=!0:s&&(i=!0),{features:{edit:i,fullEdit:s},content:{updateItem:l}}}},22671:(e,t,n)=>{n.d(t,{A:()=>_});var o,r=n(90237),i=n(59456),s=n(52106),l=n(66552),a=n(25482),p=n(4718),u=n(10107),c=(n(44208),n(53966),n(36005)),y=n(40608),f=n(43937),m=n(16930),d=n(65864),h=n(20437);const g=new l.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let w=o=class extends a.oY{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const n=m.A.fromJSON(t.spatialReference),o=[];for(let t=0;t<e.length;t++){const r=e[t],i=s.A.fromJSON(r),l=r.geometry?.spatialReference;null==i.geometry||l||(i.geometry.spatialReference=n);const a=r.aggregateGeometries,p=i.aggregateGeometries;if(a&&null!=p)for(const e in p){const t=p[e],o=a[e],r=o?.spatialReference;null==t||r||(t.spatialReference=n)}o.push(i)}return o}writeGeometryType(e,t,n,o){if(e)return void g.write(e,t,n,o);const{features:r}=this;if(r)for(const e of r)if(null!=e?.geometry)return void g.write(e.geometry.type,t,n,o)}readQueryGeometry(e,t){if(!e)return null;const n=!!e.spatialReference,o=(0,d.rS)(e);return o&&!n&&t.spatialReference&&(o.spatialReference=m.A.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:n}=this;if(n)for(const e of n)if(e&&null!=e.geometry&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new o(this.cloneProperties())}cloneProperties(){return(0,p.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let n=0;n<t.features.length;n++){const o=t.features[n];if(o.geometry){const t=e?.[n];o.geometry=t?.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,n],translate:[o,r]}=e,i=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-o)/t)),(e=>Math.round((r-e)/n)));for(let e=0,t=i.length;e<t;e++)s?.(i[e].geometry)||(i.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:n}=this;if(!n)return this;const{translate:[o,r],scale:[i,s]}=n;let l=null,a=null;if(this.hasZ&&null!=n?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=n;l=n=>n*t+e}if(this.hasM&&null!=n?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=n;a=n=>null==n?n:n*t+e}const p=this._getHydrationFunction(e,(e=>e*i+o),(e=>r-e*s),l,a);for(const{geometry:e}of t)null!=e&&p&&p(e);return this.transform=null,this}_quantizePoints(e,t,n){let o,r;const i=[];for(let s=0,l=e.length;s<l;s++){const l=e[s];if(s>0){const e=t(l[0]),s=n(l[1]);e===o&&s===r||(i.push([e-o,s-r]),o=e,r=s)}else o=t(l[0]),r=n(l[1]),i.push([o,r])}return i.length>0?i:null}_getQuantizationFunction(e,t,n){return"point"===e?e=>(e.x=t(e.x),e.y=n(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,d.Bi)(e)?e.rings:e.paths,r=[];for(let e=0,i=o.length;e<i;e++){const i=o[e],s=this._quantizePoints(i,t,n);s&&r.push(s)}return r.length>0?((0,d.Bi)(e)?e.rings=r:e.paths=r,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,n);return o&&o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,n,o,r){return"point"===e?e=>{e.x=t(e.x),e.y=n(e.y),o&&(e.z=o(e.z))}:"polyline"===e||"polygon"===e?e=>{const i=(0,d.Bi)(e)?e.rings:e.paths;let s,l;for(let e=0,o=i.length;e<o;e++){const o=i[e];for(let e=0,r=o.length;e<r;e++){const r=o[e];e>0?(s+=r[0],l+=r[1]):(s=r[0],l=r[1]),r[0]=t(s),r[1]=n(l)}}if(o&&r)for(let e=0,t=i.length;e<t;e++){const t=i[e];for(let e=0,n=t.length;e<n;e++){const n=t[e];n[2]=o(n[2]),n[3]=r(n[3])}}else if(o)for(let e=0,t=i.length;e<t;e++){const t=i[e];for(let e=0,n=t.length;e<n;e++){const n=t[e];n[2]=o(n[2])}}else if(r)for(let e=0,t=i.length;e<t;e++){const t=i[e];for(let e=0,n=t.length;e<n;e++){const n=t[e];n[2]=r(n[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=n(e.ymin),e.xmax=t(e.xmax),e.ymax=n(e.ymax),o&&null!=e.zmax&&null!=e.zmin&&(e.zmax=o(e.zmax),e.zmin=o(e.zmin)),r&&null!=e.mmax&&null!=e.mmin&&(e.mmax=r(e.mmax),e.mmin=r(e.mmin))}:"multipoint"===e?e=>{const i=e.points;let s,l;for(let e=0,o=i.length;e<o;e++){const o=i[e];e>0?(s+=o[0],l+=o[1]):(s=o[0],l=o[1]),o[0]=t(s),o[1]=n(l)}if(o&&r)for(let e=0,t=i.length;e<t;e++){const t=i[e];t[2]=o(t[2]),t[3]=r(t[3])}else if(o)for(let e=0,t=i.length;e<t;e++){const t=i[e];t[2]=o(t[2])}else if(r)for(let e=0,t=i.length;e<t;e++){const t=i[e];t[2]=r(t[2])}}:null}};(0,r._)([(0,u.MZ)({type:String,json:{write:!0}})],w.prototype,"displayFieldName",void 0),(0,r._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],w.prototype,"exceededTransferLimit",void 0),(0,r._)([(0,u.MZ)({type:[s.A],json:{write:!0}})],w.prototype,"features",void 0),(0,r._)([(0,c.w)("features")],w.prototype,"readFeatures",null),(0,r._)([(0,u.MZ)({type:[h.A],json:{write:!0}})],w.prototype,"fields",void 0),(0,r._)([(0,u.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],w.prototype,"geometryType",void 0),(0,r._)([(0,f.K)("geometryType")],w.prototype,"writeGeometryType",null),(0,r._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],w.prototype,"hasM",void 0),(0,r._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],w.prototype,"hasZ",void 0),(0,r._)([(0,u.MZ)({types:i.yR,json:{write:!0}})],w.prototype,"queryGeometry",void 0),(0,r._)([(0,c.w)("queryGeometry")],w.prototype,"readQueryGeometry",null),(0,r._)([(0,u.MZ)({type:m.A,json:{write:!0}})],w.prototype,"spatialReference",void 0),(0,r._)([(0,f.K)("spatialReference")],w.prototype,"writeSpatialReference",null),(0,r._)([(0,u.MZ)({json:{write:!0}})],w.prototype,"transform",void 0),w=o=(0,r._)([(0,y.$)("esri.rest.support.FeatureSet")],w),w.prototype.toJSON.isDefaultToJSON=!0;const _=w}}]);