function t(){return t=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},t.apply(this,arguments)}var r="streak";function e(t){return t.toLocaleDateString("en-US")}function n(r,n){return t({},{currentCount:1,startDate:e(r),lastLoginDate:e(r)},n)}function a(t,e){t.setItem(r,JSON.stringify(e))}exports.streakCounter=function(t,o){var s,i,u=t.getItem(r);if(u)try{var c=JSON.parse(u),f=(s=c.lastLoginDate,0==(i=o.getDate()-parseInt(s.split("/")[1]))?"none":1===i?"increment":"reset"),l="reset"===f;if("increment"===f){var g=n(o,{startDate:c.startDate,currentCount:c.currentCount+1,lastLoginDate:e(o)});return a(t,g),g}if(l){var p=n(o);return a(t,p),p}return c}catch(t){console.error("Failed to parse stream from localStorage")}var v=n(o);return t.setItem(r,JSON.stringify(v)),v};
//# sourceMappingURL=index.cjs.map
