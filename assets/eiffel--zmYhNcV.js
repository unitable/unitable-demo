import{g as l}from"./index-BYiznOLA.js";function d(e,n){for(var a=0;a<n.length;a++){const r=n[a];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const o=Object.getOwnPropertyDescriptor(r,t);o&&Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,s;function u(){if(s)return i;s=1,i=e,e.displayName="eiffel",e.aliases=[];function e(n){n.languages.eiffel={comment:/--.*/,string:[{pattern:/"([^[]*)\[[\s\S]*?\]\1"/,greedy:!0},{pattern:/"([^{]*)\{[\s\S]*?\}\1"/,greedy:!0},{pattern:/"(?:%(?:(?!\n)\s)*\n\s*%|%\S|[^%"\r\n])*"/,greedy:!0}],char:/'(?:%.|[^%'\r\n])+'/,keyword:/\b(?:across|agent|alias|all|and|as|assign|attached|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,boolean:/\b(?:False|True)\b/i,"class-name":/\b[A-Z][\dA-Z_]*\b/,number:[/\b0[xcb][\da-f](?:_*[\da-f])*\b/i,/(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i],punctuation:/:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,operator:/\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/}}return i}var f=u();const c=l(f),p=d({__proto__:null,default:c},[f]);export{p as e};
