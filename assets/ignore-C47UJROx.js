import{g as s}from"./index-BYiznOLA.js";function l(n,t){for(var e=0;e<t.length;e++){const r=t[e];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const g=Object.getOwnPropertyDescriptor(r,o);g&&Object.defineProperty(n,o,g.get?g:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var a,i;function f(){if(i)return a;i=1,a=n,n.displayName="ignore",n.aliases=["gitignore","hgignore","npmignore"];function n(t){(function(e){e.languages.ignore={comment:/^#.*/m,entry:{pattern:/\S(?:.*(?:(?:\\ )|\S))?/,alias:"string",inside:{operator:/^!|\*\*?|\?/,regex:{pattern:/(^|[^\\])\[[^\[\]]*\]/,lookbehind:!0},punctuation:/\//}}},e.languages.gitignore=e.languages.ignore,e.languages.hgignore=e.languages.ignore,e.languages.npmignore=e.languages.ignore})(t)}return a}var u=f();const p=s(u),d=l({__proto__:null,default:p},[u]);export{d as i};
