import{g as n}from"./index-BYiznOLA.js";import{r as c}from"./c-kgVuzdLE.js";function p(t,r){for(var e=0;e<r.length;e++){const a=r[e];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(a,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s,l;function m(){if(l)return s;l=1;var t=c();s=r,r.displayName="glsl",r.aliases=[];function r(e){e.register(t),e.languages.glsl=e.languages.extend("c",{keyword:/\b(?:active|asm|atomic_uint|attribute|[ibdu]?vec[234]|bool|break|buffer|case|cast|centroid|class|coherent|common|const|continue|d?mat[234](?:x[234])?|default|discard|do|double|else|enum|extern|external|false|filter|fixed|flat|float|for|fvec[234]|goto|half|highp|hvec[234]|[iu]?sampler2DMS(?:Array)?|[iu]?sampler2DRect|[iu]?samplerBuffer|[iu]?samplerCube|[iu]?samplerCubeArray|[iu]?sampler[123]D|[iu]?sampler[12]DArray|[iu]?image2DMS(?:Array)?|[iu]?image2DRect|[iu]?imageBuffer|[iu]?imageCube|[iu]?imageCubeArray|[iu]?image[123]D|[iu]?image[12]DArray|if|in|inline|inout|input|int|interface|invariant|layout|long|lowp|mediump|namespace|noinline|noperspective|out|output|partition|patch|precise|precision|public|readonly|resource|restrict|return|sample|sampler[12]DArrayShadow|sampler[12]DShadow|sampler2DRectShadow|sampler3DRect|samplerCubeArrayShadow|samplerCubeShadow|shared|short|sizeof|smooth|static|struct|subroutine|superp|switch|template|this|true|typedef|uint|uniform|union|unsigned|using|varying|void|volatile|while|writeonly)\b/})}return s}var u=m();const f=n(u),b=p({__proto__:null,default:f},[u]);export{b as g};
