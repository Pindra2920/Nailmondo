if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.9)) 
{
 !function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+[i][0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+[i]+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
}
else {
    var $ = jQuery.noConflict();
}


var lookbookid = "";
var scripts = document.getElementsByTagName('script');
for (var i = 0, l = scripts.length; i < l; i++) {
    if (scripts[i].getAttribute('data-id') != null) {
        lookbookid = scripts[i].getAttribute('data-id');
    }
}



+
function($) {
    'use strict';

    var zooomygallerymodal = function(element, options) {
        this.options = options
        this.$body = $(document.body)
        this.$element = $(element)
        this.$dialog = this.$element.find('.zooomygallerymodal-dialog')
        this.$backdrop = null
        this.isShown = null
        this.originalBodyPad = null
        this.scrollbarWidth = 0
        this.ignoreBackdropClick = false

        if (this.options.remote) {
            this.$element
                .find('.zooomygallerymodal-content')
                .load(this.options.remote, $.proxy(function() {
                    this.$element.trigger('loaded.bs.zooomygallerymodal')
                }, this))
        }
    }

    zooomygallerymodal.VERSION = '3.3.4'

    zooomygallerymodal.TRANSITION_DURATION = 300
    zooomygallerymodal.BACKDROP_TRANSITION_DURATION = 150

    zooomygallerymodal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }

    zooomygallerymodal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    }

    zooomygallerymodal.prototype.show = function(_relatedTarget) {
        var that = this
        var e = $.Event('show.bs.zooomygallerymodal', {
            relatedTarget: _relatedTarget
        })

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.checkScrollbar()
        this.setScrollbar()
        this.$body.addClass('zooomygallerymodal-open')

        this.escape()
        this.resize()

        this.$element.on('click.dismiss.bs.zooomygallerymodal', '[data-dismiss="zooomygallerymodal"]', $.proxy(this.hide, this))

        this.$dialog.on('mousedown.dismiss.bs.zooomygallerymodal', function() {
            that.$element.one('mouseup.dismiss.bs.zooomygallerymodal', function(e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
            })
        })

        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass('zooomyfade')

            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body) // don't move zooomygallerymodals dom position
            }
            that.$element.addClass('fadingall');

            that.$element
                .show()
                .scrollTop(0)

            that.adjustDialog()

            if (transition) {
                that.$element[0].offsetWidth // force reflow
            }

            that.$element
                .addClass('in')
                .attr('aria-hidden', false)

            that.enforceFocus()

            var e = $.Event('shown.bs.zooomygallerymodal', {
                relatedTarget: _relatedTarget
            })

            transition ?
                that.$dialog // wait for zooomygallerymodal to slide in
                .one('bsTransitionEnd', function() {
                    that.$element.trigger('focus').trigger(e)
                })
                .emulateTransitionEnd(zooomygallerymodal.TRANSITION_DURATION) :
                that.$element.trigger('focus').trigger(e)
        })
    }

    zooomygallerymodal.prototype.hide = function(e) {
        if (e) e.preventDefault()

        e = $.Event('hide.bs.zooomygallerymodal')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()
        this.resize()

        $(document).off('focusin.bs.zooomygallerymodal')

        this.$element
            .removeClass('in')
            .attr('aria-hidden', true)
            .off('click.dismiss.bs.zooomygallerymodal')
            .off('mouseup.dismiss.bs.zooomygallerymodal')

        this.$dialog.off('mousedown.dismiss.bs.zooomygallerymodal')


    }

    zooomygallerymodal.prototype.enforceFocus = function() {
        $(document)
            .off('focusin.bs.zooomygallerymodal') // guard against infinite focus loop
            .on('focusin.bs.zooomygallerymodal', $.proxy(function(e) {
                if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                    this.$element.trigger('focus')
                }
            }, this))
    }

    zooomygallerymodal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keydown.dismiss.bs.zooomygallerymodal', $.proxy(function(e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keydown.dismiss.bs.zooomygallerymodal')
        }
    }

    zooomygallerymodal.prototype.resize = function() {
        if (this.isShown) {
            $(window).on('resize.bs.zooomygallerymodal', $.proxy(this.handleUpdate, this))
        } else {
            $(window).off('resize.bs.zooomygallerymodal')
        }
    }

    zooomygallerymodal.prototype.hidezooomygallerymodal = function() {
        var that = this
        this.$element.hide()
        this.backdrop(function() {
            that.$body.removeClass('zooomygallerymodal-open')
            that.resetAdjustments()
            that.resetScrollbar()
            that.$element.trigger('hidden.bs.zooomygallerymodal')
        })
    }

    zooomygallerymodal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }

    zooomygallerymodal.prototype.backdrop = function(callback) {
        var that = this
        var animate = this.$element.hasClass('zooomyfade') ? 'zooomyfade' : ''

        if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')

            var callbackRemove = function() {
                that.removeBackdrop()
                callback && callback()
            }
            $.support.transition && this.$element.hasClass('zooomyfade') ?
                this.$backdrop
                .one('bsTransitionEnd', callbackRemove)
                .emulateTransitionEnd(zooomygallerymodal.BACKDROP_TRANSITION_DURATION) :
                callbackRemove()

        } else if (callback) {
            callback()
        }
    }

    zooomygallerymodal.prototype.handleUpdate = function() {
        this.adjustDialog()
    }

    zooomygallerymodal.prototype.adjustDialog = function() {
        var zooomygallerymodalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && zooomygallerymodalIsOverflowing ? this.scrollbarWidth : '',
            paddingRight: this.bodyIsOverflowing && !zooomygallerymodalIsOverflowing ? this.scrollbarWidth : ''
        })
    }

    zooomygallerymodal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: '',
            paddingRight: ''
        })
    }

    zooomygallerymodal.prototype.checkScrollbar = function() {
        var fullWindowWidth = window.innerWidth
        if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect()
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
        this.scrollbarWidth = this.measureScrollbar()
    }

    zooomygallerymodal.prototype.setScrollbar = function() {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
        this.originalBodyPad = document.body.style.paddingRight || ''
        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
    }

    zooomygallerymodal.prototype.resetScrollbar = function() {
        this.$body.css('padding-right', this.originalBodyPad)
    }

    zooomygallerymodal.prototype.measureScrollbar = function() { // thx walsh
        var scrollDiv = document.createElement('div')
        scrollDiv.className = 'zooomygallerymodal-scrollbar-measure'
        this.$body.append(scrollDiv)
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        this.$body[0].removeChild(scrollDiv)
        return scrollbarWidth
    }


    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.zooomygallerymodal')
            var options = $.extend({}, zooomygallerymodal.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('bs.zooomygallerymodal', (data = new zooomygallerymodal(this, options)))
            if (typeof option == 'string') data[option](_relatedTarget)
            else if (options.show) data.show(_relatedTarget)
        })
    }

    var old = $.fn.zooomygallerymodal

    $.fn.zooomygallerymodal = Plugin
    $.fn.zooomygallerymodal.Constructor = zooomygallerymodal

    $.fn.zooomygallerymodal.noConflict = function() {
        $.fn.zooomygallerymodal = old
        return this
    }


    $(document).on('click.bs.zooomygallerymodal.data-api', '[data-toggle="zooomygallerymodal"]', function(e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        var option = $target.data('bs.zooomygallerymodal') ? 'toggle' : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data())

        if ($this.is('a')) e.preventDefault()

        $target.one('show.bs.zooomygallerymodal', function(showEvent) {
            if (showEvent.isDefaultPrevented()) return // only register focus restorer if zooomygallerymodal will actually get shown
            $target.one('hidden.bs.zooomygallerymodal', function() {
                $this.is(':visible') && $this.trigger('focus')
            })
        })
        Plugin.call($target, option, this)
    })
    

}(jQuery);




Zooomystl(lookbookid);


function Zooomystl(lookbookid) {

    $.ajax({
        url: "https://zooomyapps.com/lookbook/ZooomyLookbook.php",
        data: {
            lookbookid: lookbookid,
            pagetype: meta.page.pageType
        },
        dataType: "jsonp",
        jsonp: "jsonCode",
        async: "true",
        success: function(jsonData) {
            var usercss = jsonData.custom_css;
            var images = jsonData.images;
            var itemsno = 2;

            var image_name_shopify = jsonData.image_name_shopify;
            var width = jsonData.width;
            var img_overlay = jsonData.img_overlay;
            var img_overlay_opacity = jsonData.img_overlay_opacity;
            var img_overlay_background_color = jsonData.img_overlay_background_color;
            var img_overlay_font_color = jsonData.img_overlay_font_color;

            var usercss = jsonData.custom_css;
            var images = jsonData.images;
            var ids = jsonData.ids;
            var sno = jsonData.sno;
            var layout = jsonData.layout;
            var grid_style = jsonData.grid_style;
            var ZooomyLookbookModal__itemsno = jsonData.slider_style;
            var width = jsonData.width;
            var choose_layout = jsonData.choose_layout;
            var img_cta = jsonData.img_cta;
            var image_name_shopify = jsonData.image_name_shopify;
            var width = jsonData.width;
            var prevvalue = jsonData.prevvalue;
            var nextvalue = jsonData.nextvalue;
            var a__tags = jsonData.a__tags;
            var show__tag = jsonData.show__tag;
            var tagimgid = jsonData.tagimgid;
            var shop_currency = jsonData.shop_currency;
            var details_text = jsonData.details_text;
            var details_font_color = jsonData.details_font_color;
            var details_background_color = jsonData.details_background_color;
            var hotspot_background = jsonData.hotspot_background;
            var hotspot_border = jsonData.hotspot_border;
            var hotspot_shadow = jsonData.hotspot_shadow;
            var cart_btn_background_color = jsonData.cart_btn_background_color;
            var cart_btn_text = jsonData.cart_btn_text;
            var cart_btn_font_color = jsonData.cart_btn_font_color;
            var cart_text = jsonData.cart_text;
            var hastags = jsonData.has_tags;
            var sold_out_text = jsonData.sold_out_text;
            var mobile_img = jsonData.mobile_img;
            var target = jsonData.target;
            var mobilewidth = jsonData.mobilewidth;
            var open_img = jsonData.open_img;
            var mobile_slider_margin = 10;
            var auto_play = jsonData.autoplay;
            var showbutton = jsonData.showbutton;
            var show_btn_text = jsonData.show_btn_text;
            var pinit = jsonData.pinit;
            var img_border = jsonData.img_border;
            var branding = jsonData.branding;


            if (auto_play == "false") {
                auto_play = 0;

            }
            if (auto_play == "true") {
                auto_play = 1;

            }
            if (mobile_img == 1) {
                mobile_slider_margin = 0;
            }
            if (branding == "yes") {
                $("#ZooomyLookbook-" + lookbookid).before("<div style='font-family:monospace!important;opacity:1!important;margin:2px 0;display:block!important;visibility:visible!important;font-weight:bold;font-size:16px!important;color:#333!important;float:left;width:100%;padding:5px 0;z-index:initial!important;margin:0!important;position:unset!important;'>Powered by <a style='color:#333;font-size:16px!important;text-decoration:underline;border:0!important;' href='https://apps.shopify.com/partners/zoomyapps' target='_blank'>Zooomy</a></div>");
            }
            if (jsonData.show_heading == "yes") {
                $("#ZooomyLookbook-" + lookbookid).before("<div style='font-size:" + jsonData.heading_font_size + ";float:left;width:100%;text-align:center;margin:0;padding:15px 0;'>" + jsonData.lookbook_name + "</div>");
            }

            if (img_border == "yes") {
                $('<style>.ZooomyLookbookSquareGrid, .ZooomyImgCollAnchor > img{border: 5px solid #fff; box-shadow:0px 0px 4px rgb(0 0 0 / 50%);}</style>').appendTo("body");

            }
            $('<style>#ZooomyLookbook-' + lookbookid + '{float:left;width:100%;}</style>').appendTo("body");

            $('<style>.ZooomyImgColl{list-style:none;}</style>').appendTo("body");

            if (layout == "slider") {
                ! function(C, e) {
                    "use strict";
                    var t = {
                        ZooomyLookbookModal__item: 3,
                        autoWidth: !1,
                        slideMove: 1,
                        slideMargin: 10,
                        addClass: "",
                        mode: "slide",
                        useCSS: !0,
                        cssEasing: "ease",
                        easing: "linear",
                        speed: 400,
                        auto: !1,
                        pauseOnHover: !0,
                        loop: !0,
                        slideEndAnimation: !1,
                        pause: 2e3,
                        keyPress: !1,
                        controls: !0,
                        prevHtml: "",
                        nextHtml: "",
                        rtl: !1,
                        adaptiveHeight: !0,
                        vertical: !1,
                        verticalHeight: 500,
                        vThumbWidth: 100,
                        thumbItem: 10,
                        pager: !0,
                        gallery: !1,
                        galleryMargin: 5,
                        thumbMargin: 5,
                        currentPagerPosition: "middle",
                        enableTouch: !0,
                        enableDrag: !0,
                        freeMove: !0,
                        swipeThreshold: 40,
                        responsive: [],
                        onBeforeStart: function(e) {},
                        onSliderLoad: function(e) {},
                        onBeforeSlide: function(e, o) {},
                        onAfterSlide: function(e, o) {},
                        onBeforeNextSlide: function(e, o) {},
                        onBeforePrevSlide: function(e, o) {}
                    };
                    C.fn.ZooomyLookbookSlider = function(e) {
                        if (0 === this.length) return this;
                        if (1 < this.length) return this.each(function() {
                            C(this).ZooomyLookbookSlider(e)
                        }), this;
                        var i = {},
                            c = C.extend(!0, {}, t, e),
                            n = {},
                            u = this;
                        i.$el = this;
                        var d = u.children(),
                            l = C(window).width(),
                            a = null,
                            s = 0,
                            f = 0,
                            o = !1,
                            h = 0,
                            g = "",
                            v = 0,
                            m = !0 === c.vertical ? "height" : "width",
                            p = !0 === c.vertical ? "margin-bottom" : "margin-right",
                            k = 0,
                            S = 0,
                            b = 0,
                            _ = 0,
                            r = null,
                            y = "ontouchstart" in document.documentElement,
                            M = {
                                chbreakpoint: function() {
                                    if (l = C(window).width(), c.responsive.length) {
                                        var e;
                                        if (!1 === c.autoWidth && (e = c.ZooomyLookbookModal__item), l < c.responsive[0].breakpoint)
                                            for (var o = 0; o < c.responsive.length; o++) l < c.responsive[o].breakpoint && (c.responsive[o].breakpoint, a = c.responsive[o]);
                                        if (null != a)
                                            for (var i in a.settings) a.settings.hasOwnProperty(i) && (void 0 !== n[i] && null !== n[i] || (n[i] = c[i]), c[i] = a.settings[i]);
                                        if (!C.isEmptyObject(n) && l > c.responsive[0].breakpoint)
                                            for (var t in n) n.hasOwnProperty(t) && (c[t] = n[t]);
                                        !1 === c.autoWidth && 0 < k && 0 < b && e !== c.ZooomyLookbookModal__item && (v = Math.round(k / ((b + c.slideMargin) * c.slideMove)))
                                    }
                                },
                                calSW: function() {
                                    !1 === c.autoWidth && (b = (h - (c.ZooomyLookbookModal__item * c.slideMargin - c.slideMargin)) / c.ZooomyLookbookModal__item)
                                },
                                calWidth: function(e) {
                                    var o = !0 === e ? g.find(".lslide").length : d.length;
                                    if (!1 === c.autoWidth) f = o * (b + c.slideMargin);
                                    else
                                        for (var i = f = 0; i < o; i++) f += parseInt(d.eq(i).width()) + c.slideMargin;
                                    return f
                                }
                            };
                        return (i = {
                            doCss: function() {
                                return !(!c.useCSS || ! function() {
                                    for (var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], o = document.documentElement, i = 0; i < e.length; i++)
                                        if (e[i] in o.style) return !0
                                }())
                            },
                            keyPress: function() {
                                c.keyPress && C(document).on("keyup.enapmultislider", function(e) {
                                    C(":focus").is("input, textarea") || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, 37 === e.keyCode ? u.goToPrevSlide() : 39 === e.keyCode && u.goToNextSlide())
                                })
                            },
                            controls: function() {
                                c.controls && (u.after('<div class="ZooomyLookbookSlider__Slick_Nav"><a class="ZooomyLookbookSlider__Slick_NavPrev">' + c.prevHtml + '</a><a class="ZooomyLookbookSlider__Slick_NavNext">' + c.nextHtml + "</a></div>"), c.autoWidth ? M.calWidth(!1) < h && g.find(".ZooomyLookbookSlider__Slick_Nav").hide() : s <= c.ZooomyLookbookModal__item && g.find(".ZooomyLookbookSlider__Slick_Nav").hide(), g.find(".ZooomyLookbookSlider__Slick_Nav a").on("click", function(e) {
                                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, "ZooomyLookbookSlider__Slick_NavPrev" === C(this).attr("class") ? u.goToPrevSlide() : u.goToNextSlide(), !1
                                }))
                            },
                            initialStyle: function() {
                                var r = this;
                                "zooomyfade" === c.mode && (c.autoWidth = !1, c.slideEndAnimation = !1), c.auto && (c.slideEndAnimation = !1), c.autoWidth && (c.slideMove = 1, c.ZooomyLookbookModal__item = 1), c.loop && (c.slideMove = 1, c.freeMove = !1), c.onBeforeStart.call(this, u), M.chbreakpoint(), u.addClass("ZooomyLookbookSlider").wrap('<div class="ZooomyLookbookSlider__Skin ' + c.addClass + '"><div class="ZooomyLookbookSlider__OuterWrap"></div></div>'), g = u.parent(".ZooomyLookbookSlider__OuterWrap"), !0 === c.rtl && g.parent().addClass("lSrtl"), c.vertical ? (g.parent().addClass("vertical"), h = c.verticalHeight, g.css("height", h + "px")) : h = u.outerWidth(), d.addClass("lslide"), !0 === c.loop && "slide" === c.mode && (M.calSW(), M.clone = function() {
                                    if (M.calWidth(!0) > h) {
                                        for (var e = 0, o = 0, i = 0; i < d.length && (o++, !((e += parseInt(u.find(".lslide").eq(i).width()) + c.slideMargin) >= h + c.slideMargin)); i++);
                                        var t = !0 === c.autoWidth ? o : c.ZooomyLookbookModal__item;
                                        if (t < u.find(".clone.left").length)
                                            for (var n = 0; n < u.find(".clone.left").length - t; n++) d.eq(n).remove();
                                        if (t < u.find(".clone.right").length)
                                            for (var l = d.length - 1; l > d.length - 1 - u.find(".clone.right").length; l--) v--, d.eq(l).remove();
                                        for (var a = u.find(".clone.right").length; a < t; a++) u.find(".lslide").eq(a).clone().removeClass("lslide").addClass("clone right").appendTo(u), v++;
                                        for (var s = u.find(".lslide").length - u.find(".clone.left").length; s > u.find(".lslide").length - t; s--) u.find(".lslide").eq(s - 1).clone().removeClass("lslide").addClass("clone left").prependTo(u);
                                        d = u.children()
                                    } else d.hasClass("clone") && (u.find(".clone").remove(), r.move(u, 0))
                                }, M.clone()), M.sSW = function() {
                                    s = d.length, !0 === c.rtl && !1 === c.vertical && (p = "margin-left"), !1 === c.autoWidth && d.css(m, b + "px"), d.css(p, c.slideMargin + "px"), f = M.calWidth(!1), u.css(m, f + "px"), !0 === c.loop && "slide" === c.mode && !1 === o && (v = u.find(".clone.left").length)
                                }, M.calL = function() {
                                    d = u.children(), s = d.length
                                }, this.doCss() && g.addClass("usingCss"), M.calL(), "slide" === c.mode ? (M.calSW(), M.sSW(), !0 === c.loop && (k = r.slideValue(), this.move(u, k)), !1 === c.vertical && this.setHeight(u, !1)) : (this.setHeight(u, !0), u.addClass("lSFade"), this.doCss() || (d.zooomyfadeOut(0), d.eq(v).zooomyfadeIn(0))), !0 === c.loop && "slide" === c.mode ? d.eq(v).addClass("active") : d.first().addClass("active")
                            },
                            pager: function() {
                                var d = this;
                                if (M.createPager = function() {
                                        _ = (h - (c.thumbItem * c.thumbMargin - c.thumbMargin)) / c.thumbItem;
                                        var e = g.find(".lslide"),
                                            o = g.find(".lslide").length,
                                            i = 0,
                                            t = "",
                                            n = 0;
                                        for (i = 0; i < o; i++) {
                                            "slide" === c.mode && (c.autoWidth ? n += (parseInt(e.eq(i).width()) + c.slideMargin) * c.slideMove : n = i * ((b + c.slideMargin) * c.slideMove));
                                            var l = e.eq(i * c.slideMove).attr("data-thumb");
                                            if (!0 === c.gallery ? t += '<li style="width:100%;' + m + ":" + _ + "px;" + p + ":" + c.thumbMargin + 'px"><a href="#"><img src="' + l + '" /></a></li>' : t += '<li><a href="#">' + (i + 1) + "</a></li>", "slide" === c.mode && n >= f - h - c.slideMargin) {
                                                i += 1;
                                                var a = 2;
                                                c.autoWidth && (t += '<li><a href="#">' + (i + 1) + "</a></li>", a = 1), i < a ? (t = null, g.parent().addClass("noPager")) : g.parent().removeClass("noPager");
                                                break
                                            }
                                        }
                                        var s = g.parent();
                                        s.find(".ZooomyLookbookSlider__Pagination").html(t), !0 === c.gallery && (!0 === c.vertical && s.find(".ZooomyLookbookSlider__Pagination").css("width", c.vThumbWidth + "px"), S = i * (c.thumbMargin + _) + .5, s.find(".ZooomyLookbookSlider__Pagination").css({
                                            property: S + "px",
                                            "transition-duration": c.speed + "ms"
                                        }), !0 === c.vertical && g.parent().css("padding-right", c.vThumbWidth + c.galleryMargin + "px"), s.find(".ZooomyLookbookSlider__Pagination").css(m, S + "px"));
                                        var r = s.find(".ZooomyLookbookSlider__Pagination").find("li");
                                        r.first().addClass("active"), r.on("click", function() {
                                            return !0 === c.loop && "slide" === c.mode ? v += r.index(this) - s.find(".ZooomyLookbookSlider__Pagination").find("li.active").index() : v = r.index(this), u.mode(!1), !0 === c.gallery && d.slideThumb(), !1
                                        })
                                    }, c.pager) {
                                    var e = "ZooomyPagern";
                                    c.gallery && (e = "ZooomyLookbookSlider__Slick_Gallery"), g.after('<ul class="ZooomyLookbookSlider__Pagination ' + e + '"></ul>');
                                    var o = c.vertical ? "margin-left" : "margin-top";
                                    g.parent().find(".ZooomyLookbookSlider__Pagination").css(o, c.galleryMargin + "px"), M.createPager()
                                }
                                setTimeout(function() {
                                    M.init()
                                }, 0)
                            },
                            setHeight: function(t, n) {
                                var l = null,
                                    e = this;
                                l = c.loop ? t.children(".lslide ").first() : t.children().first();
                                var o = function() {
                                    var e = l.outerHeight(),
                                        o = 0,
                                        i = e;
                                    n && (e = 0, o = 100 * i / h), t.css({
                                        height: e + "px",
                                        "padding-bottom": o + "%"
                                    })
                                };
                                o(), l.find("img").length ? l.find("img")[0].complete ? (o(), r || e.auto()) : l.find("img").on("load", function() {
                                    setTimeout(function() {
                                        o(), r || e.auto()
                                    }, 100)
                                }) : r || e.auto()
                            },
                            active: function(e, o) {
                                this.doCss() && "zooomyfade" === c.mode && g.addClass("on");
                                var i, t, n = 0;
                                v * c.slideMove < s ? (e.removeClass("active"), this.doCss() || "zooomyfade" !== c.mode || !1 !== o || e.zooomyfadeOut(c.speed), n = !0 === o ? v : v * c.slideMove, !0 === o && (t = (i = e.length) - 1, i <= n + 1 && (n = t)), !0 === c.loop && "slide" === c.mode && (n = !0 === o ? v - u.find(".clone.left").length : v * c.slideMove, !0 === o && (t = (i = e.length) - 1, n + 1 === i ? n = t : i < n + 1 && (n = 0))), this.doCss() || "zooomyfade" !== c.mode || !1 !== o || e.eq(n).zooomyfadeIn(c.speed), e.eq(n).addClass("active")) : (e.removeClass("active"), e.eq(e.length - 1).addClass("active"), this.doCss() || "zooomyfade" !== c.mode || !1 !== o || (e.zooomyfadeOut(c.speed), e.eq(n).zooomyfadeIn(c.speed)))
                            },
                            move: function(e, o) {
                                !0 === c.rtl && (o = -o), this.doCss() ? !0 === c.vertical ? e.css({
                                    transform: "translate3d(0px, " + -o + "px, 0px)",
                                    "-webkit-transform": "translate3d(0px, " + -o + "px, 0px)"
                                }) : e.css({
                                    transform: "translate3d(" + -o + "px, 0px, 0px)",
                                    "-webkit-transform": "translate3d(" + -o + "px, 0px, 0px)"
                                }) : !0 === c.vertical ? e.css("position", "relative").animate({
                                    top: -o + "px"
                                }, c.speed, c.easing) : e.css("position", "relative").animate({
                                    left: -o + "px"
                                }, c.speed, c.easing);
                                var i = g.parent().find(".ZooomyLookbookSlider__Pagination").find("li");
                                this.active(i, !0)
                            },
                            zooomyfade: function() {
                                this.active(d, !1);
                                var e = g.parent().find(".ZooomyLookbookSlider__Pagination").find("li");
                                this.active(e, !0)
                            },
                            slide: function() {
                                var e = this;
                                M.calSlide = function() {
                                    h < f && (k = e.slideValue(), e.active(d, !1), k > f - h - c.slideMargin ? k = f - h - c.slideMargin : k < 0 && (k = 0), e.move(u, k), !0 === c.loop && "slide" === c.mode && (v >= s - u.find(".clone.left").length / c.slideMove && e.resetSlide(u.find(".clone.left").length), 0 === v && e.resetSlide(g.find(".lslide").length)))
                                }, M.calSlide()
                            },
                            resetSlide: function(e) {
                                var o = this;
                                g.find(".ZooomyLookbookSlider__Slick_Nav a").addClass(""), setTimeout(function() {
                                    v = e, g.css("transition-duration", "0ms"), k = o.slideValue(), o.active(d, !1), i.move(u, k), setTimeout(function() {
                                        g.css("transition-duration", c.speed + "ms"), g.find(".ZooomyLookbookSlider__Slick_Nav a").removeClass("")
                                    }, 50)
                                }, c.speed + 100)
                            },
                            slideValue: function() {
                                var e = 0;
                                if (!1 === c.autoWidth) e = v * ((b + c.slideMargin) * c.slideMove);
                                else
                                    for (var o = e = 0; o < v; o++) e += parseInt(d.eq(o).width()) + c.slideMargin;
                                return e
                            },
                            slideThumb: function() {
                                var e;
                                switch (c.currentPagerPosition) {
                                    case "left":
                                        e = 0;
                                        break;
                                    case "middle":
                                        e = h / 2 - _ / 2;
                                        break;
                                    case "right":
                                        e = h - _
                                }
                                var o = v - u.find(".clone.left").length,
                                    i = g.parent().find(".ZooomyLookbookSlider__Pagination");
                                "slide" === c.mode && !0 === c.loop && (o >= i.children().length ? o = 0 : o < 0 && (o = i.children().length));
                                var t = o * (_ + c.thumbMargin) - e;
                                S < t + h && (t = S - h - c.thumbMargin), t < 0 && (t = 0), this.move(i, t)
                            },
                            auto: function() {
                                c.auto && (clearInterval(r), r = setInterval(function() {
                                    u.goToNextSlide()
                                }, c.pause))
                            },
                            pauseOnHover: function() {
                                var e = this;
                                c.auto && c.pauseOnHover && (g.on("mouseenter", function() {
                                    C(this).addClass("ls-hover"), u.pause(), c.auto = !0
                                }), g.on("mouseleave", function() {
                                    C(this).removeClass("ls-hover"), g.find(".ZooomyLookbookSlider").hasClass("lsGrabbing") || e.auto()
                                }))
                            },
                            touchMove: function(e, o) {
                                if (g.css("transition-duration", "0ms"), "slide" === c.mode) {
                                    var i = k - (e - o);
                                    if (i >= f - h - c.slideMargin)
                                        if (!1 === c.freeMove) i = f - h - c.slideMargin;
                                        else {
                                            var t = f - h - c.slideMargin;
                                            i = t + (i - t) / 5
                                        }
                                    else i < 0 && (!1 === c.freeMove ? i = 0 : i /= 5);
                                    this.move(u, i)
                                }
                            },
                            touchEnd: function(e) {
                                if (g.css("transition-duration", c.speed + "ms"), "slide" === c.mode) {
                                    var l = !1,
                                        o = !0;
                                    (k -= e) > f - h - c.slideMargin ? (k = f - h - c.slideMargin, !1 === c.autoWidth && (l = !0)) : k < 0 && (k = 0);
                                    var i = function(e) {
                                        var o = 0;
                                        if (l || e && (o = 1), c.autoWidth)
                                            for (var i = 0, t = 0; t < d.length && (i += parseInt(d.eq(t).width()) + c.slideMargin, v = t + o, !(k <= i)); t++);
                                        else {
                                            var n = k / ((b + c.slideMargin) * c.slideMove);
                                            v = parseInt(n) + o, k >= f - h - c.slideMargin && n % 1 != 0 && v++
                                        }
                                    };
                                    e >= c.swipeThreshold ? (i(!1), o = !1) : e <= -c.swipeThreshold && (i(!0), o = !1), u.mode(o), this.slideThumb()
                                } else e >= c.swipeThreshold ? u.goToPrevSlide() : e <= -c.swipeThreshold && u.goToNextSlide()
                            },
                            enableDrag: function() {
                                var i = this;
                                if (!y) {
                                    var t = 0,
                                        n = 0,
                                        l = !1;
                                    g.find(".ZooomyLookbookSlider").addClass("lsGrab"), g.on("mousedown", function(e) {
                                        if (f < h && 0 !== f) return !1;
                                        "ZooomyLookbookSlider__Slick_NavPrev" !== C(e.target).attr("class") && "ZooomyLookbookSlider__Slick_NavNext" !== C(e.target).attr("class") && (t = !0 === c.vertical ? e.pageY : e.pageX, l = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, g.scrollLeft += 1, g.scrollLeft -= 1, g.find(".ZooomyLookbookSlider").removeClass("lsGrab").addClass("lsGrabbing"), clearInterval(r))
                                    }), C(window).on("mousemove", function(e) {
                                        l && (n = !0 === c.vertical ? e.pageY : e.pageX, i.touchMove(n, t))
                                    }), C(window).on("mouseup", function(e) {
                                        if (l) {
                                            g.find(".ZooomyLookbookSlider").removeClass("lsGrabbing").addClass("lsGrab");
                                            var o = (n = !(l = !1) === c.vertical ? e.pageY : e.pageX) - t;
                                            Math.abs(o) >= c.swipeThreshold && C(window).on("click.ls", function(e) {
                                                e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopImmediatePropagation(), e.stopPropagation(), C(window).off("click.ls")
                                            }), i.touchEnd(o)
                                        }
                                    })
                                }
                            },
                            enableTouch: function() {
                                var n = this;
                                if (y) {
                                    var l = {},
                                        a = {};
                                    g.on("touchstart", function(e) {
                                        a = e.originalEvent.targetTouches[0], l.pageX = e.originalEvent.targetTouches[0].pageX, l.pageY = e.originalEvent.targetTouches[0].pageY, clearInterval(r)
                                    }), g.on("touchmove", function(e) {
                                        if (f < h && 0 !== f) return !1;
                                        var o = e.originalEvent;
                                        a = o.targetTouches[0];
                                        var i = Math.abs(a.pageX - l.pageX),
                                            t = Math.abs(a.pageY - l.pageY);
                                        !0 === c.vertical ? (i < 3 * t && e.preventDefault(), n.touchMove(a.pageY, l.pageY)) : (t < 3 * i && e.preventDefault(), n.touchMove(a.pageX, l.pageX))
                                    }), g.on("touchend", function() {
                                        if (f < h && 0 !== f) return !1;
                                        var e;
                                        e = !0 === c.vertical ? a.pageY - l.pageY : a.pageX - l.pageX, n.touchEnd(e)
                                    })
                                }
                            },
                            build: function() {
                                var e = this;
                                e.initialStyle(), this.doCss() && (!0 === c.enableTouch && e.enableTouch(), !0 === c.enableDrag && e.enableDrag()), C(window).on("focus", function() {
                                    e.auto()
                                }), C(window).on("blur", function() {
                                    clearInterval(r)
                                }), e.pager(), e.pauseOnHover(), e.controls(), e.keyPress()
                            }
                        }).build(), M.init = function() {
                            M.chbreakpoint(), !0 === c.vertical ? (h = 1 < c.ZooomyLookbookModal__item ? c.verticalHeight : d.outerHeight(), g.css("height", h + "px")) : h = g.outerWidth(), !0 === c.loop && "slide" === c.mode && M.clone(), M.calL(), "slide" === c.mode && u.removeClass("ZooomyLookbookSlider__Slick_Slide"), "slide" === c.mode && (M.calSW(), M.sSW()), setTimeout(function() {
                                "slide" === c.mode && u.addClass("ZooomyLookbookSlider__Slick_Slide")
                            }, 1e3), c.pager && M.createPager(), !0 === c.adaptiveHeight && !1 === c.vertical && u.css("height", d.eq(v).outerHeight(!0)), !1 === c.adaptiveHeight && ("slide" === c.mode ? !1 === c.vertical ? i.setHeight(u, !1) : i.auto() : i.setHeight(u, !0)), !0 === c.gallery && i.slideThumb(), "slide" === c.mode && i.slide(), !1 === c.autoWidth ? d.length <= c.ZooomyLookbookModal__item ? g.find(".ZooomyLookbookSlider__Slick_Nav").hide() : g.find(".ZooomyLookbookSlider__Slick_Nav").show() : M.calWidth(!1) < h && 0 !== f ? g.find(".ZooomyLookbookSlider__Slick_Nav").hide() : g.find(".ZooomyLookbookSlider__Slick_Nav").show()
                        }, u.goToPrevSlide = function() {
                            if (0 < v) c.onBeforePrevSlide.call(this, u, v), v--, u.mode(!1), !0 === c.gallery && i.slideThumb();
                            else if (!0 === c.loop) {
                                if (c.onBeforePrevSlide.call(this, u, v), "zooomyfade" === c.mode) v = parseInt((s - 1) / c.slideMove);
                                u.mode(!1), !0 === c.gallery && i.slideThumb()
                            } else !0 === c.slideEndAnimation && (u.addClass("leftEnd"), setTimeout(function() {
                                u.removeClass("leftEnd")
                            }, 400))
                        }, u.goToNextSlide = function() {
                            var e = !0;
                            "slide" === c.mode && (e = i.slideValue() < f - h - c.slideMargin);
                            v * c.slideMove < s - c.slideMove && e ? (c.onBeforeNextSlide.call(this, u, v), v++, u.mode(!1), !0 === c.gallery && i.slideThumb()) : !0 === c.loop ? (c.onBeforeNextSlide.call(this, u, v), v = 0, u.mode(!1), !0 === c.gallery && i.slideThumb()) : !0 === c.slideEndAnimation && (u.addClass("rightEnd"), setTimeout(function() {
                                u.removeClass("rightEnd")
                            }, 400))
                        }, u.mode = function(e) {
                            !0 === c.adaptiveHeight && !1 === c.vertical && u.css("height", d.eq(v).outerHeight(!0)), !1 === o && ("slide" === c.mode ? i.doCss() && (u.addClass("ZooomyLookbookSlider__Slick_Slide"), "" !== c.speed && g.css("transition-duration", c.speed + "ms"), "" !== c.cssEasing && g.css("transition-timing-function", c.cssEasing)) : i.doCss() && ("" !== c.speed && u.css("transition-duration", c.speed + "ms"), "" !== c.cssEasing && u.css("transition-timing-function", c.cssEasing))), e || c.onBeforeSlide.call(this, u, v), "slide" === c.mode ? i.slide() : i.zooomyfade(), g.hasClass("ls-hover") || i.auto(), setTimeout(function() {
                                e || c.onAfterSlide.call(this, u, v)
                            }, c.speed), o = !0
                        }, u.play = function() {
                            u.goToNextSlide(), c.auto = !0, i.auto()
                        }, u.pause = function() {
                            c.auto = !1, clearInterval(r)
                        }, u.refresh = function() {
                            M.init()
                        }, u.getCurrentSlideCount = function() {
                            var e = v;
                            if (c.loop) {
                                var o = g.find(".lslide").length,
                                    i = u.find(".clone.left").length;
                                e = v <= i - 1 ? o + (v - i) : o + i <= v ? v - o - i : v - i
                            }
                            return e + 1
                        }, u.getTotalSlideCount = function() {
                            return g.find(".lslide").length
                        }, u.goToSlide = function(e) {
                            v = c.loop ? e + u.find(".clone.left").length - 1 : e, u.mode(!1), !0 === c.gallery && i.slideThumb()
                        }, u.destroy = function() {
                            u.ZooomyLookbookSlider && (u.goToPrevSlide = function() {}, u.goToNextSlide = function() {}, u.mode = function() {}, u.play = function() {}, u.pause = function() {}, u.refresh = function() {}, u.getCurrentSlideCount = function() {}, u.getTotalSlideCount = function() {}, u.goToSlide = function() {}, u.ZooomyLookbookSlider = null, M = {
                                init: function() {}
                            }, u.parent().parent().find(".ZooomyLookbookSlider__Slick_Nav, .ZooomyLookbookSlider__Pagination").remove(), u.removeClass("ZooomyLookbookSlider lSFade ZooomyLookbookSlider__Slick_Slide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(), u.children().removeAttr("style"), d.removeClass("lslide active"), u.find(".clone").remove(), r = d = null, o = !1, v = 0)
                        }, setTimeout(function() {
                            c.onSliderLoad.call(this, u)
                        }, 10), C(window).on("resize orientationchange", function(e) {
                            setTimeout(function() {
                                e.preventDefault ? e.preventDefault() : e.returnValue = !1, M.init()
                            }, 200)
                        }), this
                    }
                }(jQuery), $(document).ready(function() {
                    $("#ZooomyLookbook-" + lookbookid).ZooomyLookbookSlider({
                        gallery: !1,
                        ZooomyLookbookModal__item: ZooomyLookbookModal__itemsno,
                        thumbItem: ZooomyLookbookModal__itemsno,
                        adaptiveHeight: !1,
                        speed: 3000,
                        auto: auto_play,
                        pause: 3000,
                        pager: !0,
                        loop: !0,
                        enableDrag: !1,
                        pauseOnHover: !0,
                        currentPagerPosition: "left",
                        responsive: [{
                            breakpoint: 800,
                            settings: {
                                ZooomyLookbookModal__item: mobile_img,
                                slideMove: 1,
                                slideMargin: mobile_slider_margin
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                ZooomyLookbookModal__item: mobile_img,
                                slideMove: 1,
                                slideMargin: mobile_slider_margin
                            }
                        }]
                    })
                });

            }
            if (layout == "slider")

            {
                $('<link rel="stylesheet" type="text/css" href="https://zooomyapps.com/lookbook/ZooomyLookbookSlider.css">').appendTo('body');

            }
            $("#ZooomyLookbook-" + lookbookid).after("<div id='ZooomyLookbookPopup-" + lookbookid + "'></div>");


            $('<link rel="stylesheet" type="text/css" href="https://zooomyapps.com/lookbook/ZooomyLookStyle.css">').appendTo('body');


            $('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">').appendTo("body");
            if (pinit == "yes") {
                $('<style>.zooomy-pin-it{position: absolute; font-size: 32px; bottom: 5px; right: 5px; line-height: 20px;}.zooomy-pin-it i.fa.fa-pinterest{color:#E60023;}.ZooomyImgColl{position:relative;}</style>').appendTo("body");

            }

            $('<style>.theimgtags { display: none; }.zooomy___show___tags:after { width: 10px; height: 10px; content: ""; }.ZooomyImgColl{float:left; width:' + width + '; padding:10px;box-sizing:border-box;}</style>').appendTo("body");
            $('<style>@media screen and (max-width: 767px){.ZooomyImgColl{float:left; width:' + mobilewidth + '; padding:10px;box-sizing:border-box;}}</style>').appendTo("body");
            $('<style>.page-container, #PageContainer{transform:none;}</style>').appendTo("body");

            $('<style>.ZooomyModelPopup-outer .fa{ background: #000; border-radius: 0; width: 30px; height: 30px; font-size: 16px; line-height: 30px; text-align: center; font-weight: 100; color: #eee; } .ZooomyModelPopup-close{background: #fff; border-radius: 30px; width: 30px; height: 30px; font-size: 30px; line-height: 30px; text-align: center; font-weight: 100; color: #333;}.ZooomyImgColl img{margin:0!important;}.ZooomyImgCaptions { position: absolute; top: 47%; z-index: 999; text-align: center; width: 100%; opacity: 0; }.ZooomyImgColl:hover .ZooomyImgCaptions {    color: ' + img_overlay_font_color + ';opacity:1;} .ZooomyImgCollAnchor{position:relative;float:left; width:100%;}.ZooomyImgCollAnchor::after {left: 0; right: 0; top: 0; bottom: 0;content: ""; background: rgba(' + img_overlay_background_color + ',' + img_overlay_opacity + '); position: absolute; top: 0; width: 100%; height: 100%;opacity:0; }.ZooomyImgColl:hover .ZooomyImgCollAnchor:after {transition: opacity .5s ease-in-out; -moz-transition: opacity .5s ease-in-out; -webkit-transition: opacity .5s ease-in-out;opacity:1;} </style>').appendTo("body");
            var itemtoadd = "";
            if (layout == "collage") {
                $("#ZooomyLookbook-" + lookbookid).append('<div class="ZooomyLookbookModal__MasonryGrid-' + lookbookid + ' ZooomyLookbookModal__MasonryGrid" id="ZooomyLookbookModal__MasonryGrid-' + lookbookid + '"></div>');
                $("<link rel='stylesheet prefetch' href='https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css'>").appendTo('body');
                $('<style>.ZooomyLookbookModal__MasonryGrid { max-width: 100%; list-style: none; margin: 30px auto; padding: 1; } .ZooomyLookbookModal__MasonryGrid .ZooomyLookbookModal__item {  } .ZooomyLookbookModal__MasonryGrid .ZooomyLookbookModal__item a { outline: none; border: none; display: block; max-width: 100%; } .ZooomyLookbookModal__item { -webkit-transform: translateY(200px); transform: translateY(200px); -webkit-animation: moveUp 0.65s ease forwards; animation: moveUp 0.65s ease forwards; } @-webkit-keyframes moveUp { 0% { } 100% { -webkit-transform: translateY(0); opacity: 1; } } @keyframes moveUp { 0% { } 100% { -webkit-transform: translateY(0); transform: translateY(0); opacity: 1; } } @media screen and (max-width: 900px) { .ZooomyLookbookModal__MasonryGrid .ZooomyLookbookModal__item {width: 50%;}} @media screen and (max-width: 400px) { .ZooomyLookbookModal__MasonryGrid .ZooomyLookbookModal__item {width: 100%;} }</style>').appendTo('body');
                ! function(t, e) {
                    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
                        return e(t, i)
                    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
                }(window, function(t, e) {
                    "use strict";

                    function i(i, r, a) {
                        function h(t, e, n) {
                            var o, r = "$()." + i + '("' + e + '")';
                            return t.each(function(t, h) {
                                var u = a.data(h, i);
                                if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                                var d = u[e];
                                if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                                var l = d.apply(u, n);
                                o = void 0 === o ? l : o
                            }), void 0 !== o ? o : t
                        }

                        function u(t, e) {
                            t.each(function(t, n) {
                                var o = a.data(n, i);
                                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
                            })
                        }
                        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
                            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
                        }), a.fn[i] = function(t) {
                            if ("string" == typeof t) {
                                var e = o.call(arguments, 1);
                                return h(this, t, e)
                            }
                            return u(this, t), this
                        }, n(a))
                    }

                    function n(t) {
                        !t || t && t.bridget || (t.bridget = i)
                    }
                    var o = Array.prototype.slice,
                        r = t.console,
                        s = "undefined" == typeof r ? function() {} : function(t) {
                            r.error(t)
                        };
                    return n(e || t.jQuery), i
                }),
                function(t, e) {
                    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
                }("undefined" != typeof window ? window : this, function() {
                    function t() {}
                    var e = t.prototype;
                    return e.on = function(t, e) {
                        if (t && e) {
                            var i = this._events = this._events || {},
                                n = i[t] = i[t] || [];
                            return -1 == n.indexOf(e) && n.push(e), this
                        }
                    }, e.once = function(t, e) {
                        if (t && e) {
                            this.on(t, e);
                            var i = this._onceEvents = this._onceEvents || {},
                                n = i[t] = i[t] || {};
                            return n[e] = !0, this
                        }
                    }, e.off = function(t, e) {
                        var i = this._events && this._events[t];
                        if (i && i.length) {
                            var n = i.indexOf(e);
                            return -1 != n && i.splice(n, 1), this
                        }
                    }, e.emitEvent = function(t, e) {
                        var i = this._events && this._events[t];
                        if (i && i.length) {
                            var n = 0,
                                o = i[n];
                            e = e || [];
                            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                                var s = r && r[o];
                                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
                            }
                            return this
                        }
                    }, t
                }),
                function(t, e) {
                    "use strict";
                    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
                        return e()
                    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
                }(window, function() {
                    "use strict";

                    function t(t) {
                        var e = parseFloat(t),
                            i = -1 == t.indexOf("%") && !isNaN(e);
                        return i && e
                    }

                    function e() {}

                    function i() {
                        for (var t = {
                                width: 0,
                                height: 0,
                                innerWidth: 0,
                                innerHeight: 0,
                                outerWidth: 0,
                                outerHeight: 0
                            }, e = 0; u > e; e++) {
                            var i = h[e];
                            t[i] = 0
                        }
                        return t
                    }

                    function n(t) {
                        var e = getComputedStyle(t);
                        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
                    }

                    function o() {
                        if (!d) {
                            d = !0;
                            var e = document.createElement("div");
                            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                            var i = document.body || document.documentElement;
                            i.appendChild(e);
                            var o = n(e);
                            r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
                        }
                    }

                    function r(e) {
                        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                            var r = n(e);
                            if ("none" == r.display) return i();
                            var a = {};
                            a.width = e.offsetWidth, a.height = e.offsetHeight;
                            for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                                var c = h[l],
                                    f = r[c],
                                    m = parseFloat(f);
                                a[c] = isNaN(m) ? 0 : m
                            }
                            var p = a.paddingLeft + a.paddingRight,
                                g = a.paddingTop + a.paddingBottom,
                                y = a.marginLeft + a.marginRight,
                                v = a.marginTop + a.marginBottom,
                                _ = a.borderLeftWidth + a.borderRightWidth,
                                z = a.borderTopWidth + a.borderBottomWidth,
                                E = d && s,
                                b = t(r.width);
                            b !== !1 && (a.width = b + (E ? 0 : p + _));
                            var x = t(r.height);
                            return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
                        }
                    }
                    var s, a = "undefined" == typeof console ? e : function(t) {
                            console.error(t)
                        },
                        h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                        u = h.length,
                        d = !1;
                    return r
                }),
                function(t, e) {
                    "use strict";
                    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
                }(window, function() {
                    "use strict";
                    var t = function() {
                        var t = window.Element.prototype;
                        if (t.matches) return "matches";
                        if (t.matchesSelector) return "matchesSelector";
                        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                            var n = e[i],
                                o = n + "MatchesSelector";
                            if (t[o]) return o
                        }
                    }();
                    return function(e, i) {
                        return e[t](i)
                    }
                }),
                function(t, e) {
                    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
                        return e(t, i)
                    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
                }(window, function(t, e) {
                    var i = {};
                    i.extend = function(t, e) {
                        for (var i in e) t[i] = e[i];
                        return t
                    }, i.modulo = function(t, e) {
                        return (t % e + e) % e
                    }, i.makeArray = function(t) {
                        var e = [];
                        if (Array.isArray(t)) e = t;
                        else if (t && "object" == typeof t && "number" == typeof t.length)
                            for (var i = 0; i < t.length; i++) e.push(t[i]);
                        else e.push(t);
                        return e
                    }, i.removeFrom = function(t, e) {
                        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
                    }, i.getParent = function(t, i) {
                        for (; t != document.body;)
                            if (t = t.parentNode, e(t, i)) return t
                    }, i.getQueryElement = function(t) {
                        return "string" == typeof t ? document.querySelector(t) : t
                    }, i.handleEvent = function(t) {
                        var e = "on" + t.type;
                        this[e] && this[e](t)
                    }, i.filterFindElements = function(t, n) {
                        t = i.makeArray(t);
                        var o = [];
                        return t.forEach(function(t) {
                            if (t instanceof HTMLElement) {
                                if (!n) return void o.push(t);
                                e(t, n) && o.push(t);
                                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
                            }
                        }), o
                    }, i.debounceMethod = function(t, e, i) {
                        var n = t.prototype[e],
                            o = e + "Timeout";
                        t.prototype[e] = function() {
                            var t = this[o];
                            t && clearTimeout(t);
                            var e = arguments,
                                r = this;
                            this[o] = setTimeout(function() {
                                n.apply(r, e), delete r[o]
                            }, i || 100)
                        }
                    }, i.docReady = function(t) {
                        var e = document.readyState;
                        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
                    }, i.toDashed = function(t) {
                        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                            return e + "-" + i
                        }).toLowerCase()
                    };
                    var n = t.console;
                    return i.htmlInit = function(e, o) {
                        i.docReady(function() {
                            var r = i.toDashed(o),
                                s = "data-" + r,
                                a = document.querySelectorAll("[" + s + "]"),
                                h = document.querySelectorAll(".js-" + r),
                                u = i.makeArray(a).concat(i.makeArray(h)),
                                d = s + "-options",
                                l = t.jQuery;
                            u.forEach(function(t) {
                                var i, r = t.getAttribute(s) || t.getAttribute(d);
                                try {
                                    i = r && JSON.parse(r)
                                } catch (a) {
                                    return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
                                }
                                var h = new e(t, i);
                                l && l.data(t, o, h)
                            })
                        })
                    }, i
                }),
                function(t, e) {
                    "function" == typeof define && define.amd ? define("outlayer/ZooomyLookbookModal__item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
                }(window, function(t, e) {
                    "use strict";

                    function i(t) {
                        for (var e in t) return !1;
                        return e = null, !0
                    }

                    function n(t, e) {
                        t && (this.element = t, this.layout = e, this.position = {
                            x: 0,
                            y: 0
                        }, this._create())
                    }

                    function o(t) {
                        return t.replace(/([A-Z])/g, function(t) {
                            return "-" + t.toLowerCase()
                        })
                    }
                    var r = document.documentElement.style,
                        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
                        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
                        h = {
                            WebkitTransition: "webkitTransitionEnd",
                            transition: "transitionend"
                        } [s],
                        u = {
                            transform: a,
                            transition: s,
                            transitionDuration: s + "Duration",
                            transitionProperty: s + "Property",
                            transitionDelay: s + "Delay"
                        },
                        d = n.prototype = Object.create(t.prototype);
                    d.constructor = n, d._create = function() {
                        this._transn = {
                            ingProperties: {},
                            clean: {},
                            onEnd: {}
                        }, this.css({
                            position: "absolute"
                        })
                    }, d.handleEvent = function(t) {
                        var e = "on" + t.type;
                        this[e] && this[e](t)
                    }, d.getSize = function() {
                        this.size = e(this.element)
                    }, d.css = function(t) {
                        var e = this.element.style;
                        for (var i in t) {
                            var n = u[i] || i;
                            e[n] = t[i]
                        }
                    }, d.getPosition = function() {
                        var t = getComputedStyle(this.element),
                            e = this.layout._getOption("originLeft"),
                            i = this.layout._getOption("originTop"),
                            n = t[e ? "left" : "right"],
                            o = t[i ? "top" : "bottom"],
                            r = this.layout.size,
                            s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
                            a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
                        s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
                    }, d.layoutPosition = function() {
                        var t = this.layout.size,
                            e = {},
                            i = this.layout._getOption("originLeft"),
                            n = this.layout._getOption("originTop"),
                            o = i ? "paddingLeft" : "paddingRight",
                            r = i ? "left" : "right",
                            s = i ? "right" : "left",
                            a = this.position.x + t[o];
                        e[r] = this.getXValue(a), e[s] = "";
                        var h = n ? "paddingTop" : "paddingBottom",
                            u = n ? "top" : "bottom",
                            d = n ? "bottom" : "top",
                            l = this.position.y + t[h];
                        e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
                    }, d.getXValue = function(t) {
                        var e = this.layout._getOption("horizontal");
                        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
                    }, d.getYValue = function(t) {
                        var e = this.layout._getOption("horizontal");
                        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
                    }, d._transitionTo = function(t, e) {
                        this.getPosition();
                        var i = this.position.x,
                            n = this.position.y,
                            o = parseInt(t, 10),
                            r = parseInt(e, 10),
                            s = o === this.position.x && r === this.position.y;
                        if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
                        var a = t - i,
                            h = e - n,
                            u = {};
                        u.transform = this.getTranslate(a, h), this.transition({
                            to: u,
                            onTransitionEnd: {
                                transform: this.layoutPosition
                            },
                            isCleaning: !0
                        })
                    }, d.getTranslate = function(t, e) {
                        var i = this.layout._getOption("originLeft"),
                            n = this.layout._getOption("originTop");
                        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
                    }, d.goTo = function(t, e) {
                        this.setPosition(t, e), this.layoutPosition()
                    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
                        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
                    }, d._nonTransition = function(t) {
                        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
                    }, d.transition = function(t) {
                        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                        var e = this._transn;
                        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                        if (t.from) {
                            this.css(t.from);
                            var n = this.element.offsetHeight;
                            n = null
                        }
                        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
                    };
                    var l = "opacity," + o(a);
                    d.enableTransition = function() {
                        if (!this.isTransitioning) {
                            var t = this.layout.options.transitionDuration;
                            t = "number" == typeof t ? t + "ms" : t, this.css({
                                transitionProperty: l,
                                transitionDuration: t,
                                transitionDelay: this.staggerDelay || 0
                            }), this.element.addEventListener(h, this, !1)
                        }
                    }, d.onwebkitTransitionEnd = function(t) {
                        this.ontransitionend(t)
                    }, d.onotransitionend = function(t) {
                        this.ontransitionend(t)
                    };
                    var c = {
                        "-webkit-transform": "transform"
                    };
                    d.ontransitionend = function(t) {
                        if (t.target === this.element) {
                            var e = this._transn,
                                n = c[t.propertyName] || t.propertyName;
                            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                                var o = e.onEnd[n];
                                o.call(this), delete e.onEnd[n]
                            }
                            this.emitEvent("transitionEnd", [this])
                        }
                    }, d.disableTransition = function() {
                        this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
                    }, d._removeStyles = function(t) {
                        var e = {};
                        for (var i in t) e[i] = "";
                        this.css(e)
                    };
                    var f = {
                        transitionProperty: "",
                        transitionDuration: "",
                        transitionDelay: ""
                    };
                    return d.removeTransitionStyles = function() {
                        this.css(f)
                    }, d.stagger = function(t) {
                        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
                    }, d.removeElem = function() {
                        this.element.parentNode.removeChild(this.element), this.css({
                            display: ""
                        }), this.emitEvent("remove", [this])
                    }, d.remove = function() {
                        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                            this.removeElem()
                        }), void this.hide()) : void this.removeElem()
                    }, d.reveal = function() {
                        delete this.isHidden, this.css({
                            display: ""
                        });
                        var t = this.layout.options,
                            e = {},
                            i = this.getHideRevealTransitionEndProperty("visibleStyle");
                        e[i] = this.onRevealTransitionEnd, this.transition({
                            from: t.hiddenStyle,
                            to: t.visibleStyle,
                            isCleaning: !0,
                            onTransitionEnd: e
                        })
                    }, d.onRevealTransitionEnd = function() {
                        this.isHidden || this.emitEvent("reveal")
                    }, d.getHideRevealTransitionEndProperty = function(t) {
                        var e = this.layout.options[t];
                        if (e.opacity) return "opacity";
                        for (var i in e) return i
                    }, d.hide = function() {
                        this.isHidden = !0, this.css({
                            display: ""
                        });
                        var t = this.layout.options,
                            e = {},
                            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                        e[i] = this.onHideTransitionEnd, this.transition({
                            from: t.visibleStyle,
                            to: t.hiddenStyle,
                            isCleaning: !0,
                            onTransitionEnd: e
                        })
                    }, d.onHideTransitionEnd = function() {
                        this.isHidden && (this.css({
                            display: "none"
                        }), this.emitEvent("hide"))
                    }, d.destroy = function() {
                        this.css({
                            position: "",
                            left: "",
                            right: "",
                            top: "",
                            bottom: "",
                            transition: "",
                            transform: ""
                        })
                    }, n
                }),
                function(t, e) {
                    "use strict";
                    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./ZooomyLookbookModal__item"], function(i, n, o, r) {
                        return e(t, i, n, o, r)
                    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./ZooomyLookbookModal__item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
                }(window, function(t, e, i, n, o) {
                    "use strict";

                    function r(t, e) {
                        var i = n.getQueryElement(t);
                        if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
                        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
                        var o = ++l;
                        this.element.outlayerGUID = o, c[o] = this, this._create();
                        var r = this._getOption("initLayout");
                        r && this.layout()
                    }

                    function s(t) {
                        function e() {
                            t.apply(this, arguments)
                        }
                        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
                    }

                    function a(t) {
                        if ("number" == typeof t) return t;
                        var e = t.match(/(^\d*\.?\d*)(\w*)/),
                            i = e && e[1],
                            n = e && e[2];
                        if (!i.length) return 0;
                        i = parseFloat(i);
                        var o = m[n] || 1;
                        return i * o
                    }
                    var h = t.console,
                        u = t.jQuery,
                        d = function() {},
                        l = 0,
                        c = {};
                    r.namespace = "outlayer", r.Item = o, r.defaults = {
                        containerStyle: {
                            position: "relative"
                        },
                        initLayout: !0,
                        originLeft: !0,
                        originTop: !0,
                        resize: !0,
                        resizeContainer: !0,
                        transitionDuration: "0.4s",
                        hiddenStyle: {
                            opacity: 0,
                            transform: "scale(0.001)"
                        },
                        visibleStyle: {
                            opacity: 1,
                            transform: "scale(1)"
                        }
                    };
                    var f = r.prototype;
                    n.extend(f, e.prototype), f.option = function(t) {
                        n.extend(this.options, t)
                    }, f._getOption = function(t) {
                        var e = this.constructor.compatOptions[t];
                        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
                    }, r.compatOptions = {
                        initLayout: "isInitLayout",
                        horizontal: "isHorizontal",
                        layoutInstant: "isLayoutInstant",
                        originLeft: "isOriginLeft",
                        originTop: "isOriginTop",
                        resize: "isResizeBound",
                        resizeContainer: "isResizingContainer"
                    }, f._create = function() {
                        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
                        var t = this._getOption("resize");
                        t && this.bindResize()
                    }, f.reloadItems = function() {
                        this.ZooomyLookbookModal__items = this._ZooomyLookbookModal__itemize(this.element.children)
                    }, f._ZooomyLookbookModal__itemize = function(t) {
                        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                            var r = e[o],
                                s = new i(r, this);
                            n.push(s)
                        }
                        return n
                    }, f._filterFindItemElements = function(t) {
                        return n.filterFindElements(t, this.options.ZooomyLookbookModal__itemSelector)
                    }, f.getItemElements = function() {
                        return this.ZooomyLookbookModal__items.map(function(t) {
                            return t.element
                        })
                    }, f.layout = function() {
                        this._resetLayout(), this._manageStamps();
                        var t = this._getOption("layoutInstant"),
                            e = void 0 !== t ? t : !this._isLayoutInited;
                        this.layoutItems(this.ZooomyLookbookModal__items, e), this._isLayoutInited = !0
                    }, f._init = f.layout, f._resetLayout = function() {
                        this.getSize()
                    }, f.getSize = function() {
                        this.size = i(this.element)
                    }, f._getMeasurement = function(t, e) {
                        var n, o = this.options[t];
                        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
                    }, f.layoutItems = function(t, e) {
                        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
                    }, f._getItemsForLayout = function(t) {
                        return t.filter(function(t) {
                            return !t.isIgnored
                        })
                    }, f._layoutItems = function(t, e) {
                        if (this._emitCompleteOnItems("layout", t), t && t.length) {
                            var i = [];
                            t.forEach(function(t) {
                                var n = this._getItemLayoutPosition(t);
                                n.ZooomyLookbookModal__item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
                            }, this), this._processLayoutQueue(i)
                        }
                    }, f._getItemLayoutPosition = function() {
                        return {
                            x: 0,
                            y: 0
                        }
                    }, f._processLayoutQueue = function(t) {
                        this.updateStagger(), t.forEach(function(t, e) {
                            this._positionItem(t.ZooomyLookbookModal__item, t.x, t.y, t.isInstant, e)
                        }, this)
                    }, f.updateStagger = function() {
                        var t = this.options.stagger;
                        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
                    }, f._positionItem = function(t, e, i, n, o) {
                        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
                    }, f._postLayout = function() {
                        this.resizeContainer()
                    }, f.resizeContainer = function() {
                        var t = this._getOption("resizeContainer");
                        if (t) {
                            var e = this._getContainerSize();
                            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
                        }
                    }, f._getContainerSize = d, f._setContainerMeasure = function(t, e) {
                        if (void 0 !== t) {
                            var i = this.size;
                            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                        }
                    }, f._emitCompleteOnItems = function(t, e) {
                        function i() {
                            o.dispatchEvent(t + "Complete", null, [e])
                        }

                        function n() {
                            s++, s == r && i()
                        }
                        var o = this,
                            r = e.length;
                        if (!e || !r) return void i();
                        var s = 0;
                        e.forEach(function(e) {
                            e.once(t, n)
                        })
                    }, f.dispatchEvent = function(t, e, i) {
                        var n = e ? [e].concat(i) : i;
                        if (this.emitEvent(t, n), u)
                            if (this.$element = this.$element || u(this.element), e) {
                                var o = u.Event(e);
                                o.type = t, this.$element.trigger(o, i)
                            } else this.$element.trigger(t, i)
                    }, f.ignore = function(t) {
                        var e = this.getItem(t);
                        e && (e.isIgnored = !0)
                    }, f.unignore = function(t) {
                        var e = this.getItem(t);
                        e && delete e.isIgnored
                    }, f.stamp = function(t) {
                        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
                    }, f.unstamp = function(t) {
                        t = this._find(t), t && t.forEach(function(t) {
                            n.removeFrom(this.stamps, t), this.unignore(t)
                        }, this)
                    }, f._find = function(t) {
                        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
                    }, f._manageStamps = function() {
                        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
                    }, f._getBoundingRect = function() {
                        var t = this.element.getBoundingClientRect(),
                            e = this.size;
                        this._boundingRect = {
                            left: t.left + e.paddingLeft + e.borderLeftWidth,
                            top: t.top + e.paddingTop + e.borderTopWidth,
                            right: t.right - (e.paddingRight + e.borderRightWidth),
                            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                        }
                    }, f._manageStamp = d, f._getElementOffset = function(t) {
                        var e = t.getBoundingClientRect(),
                            n = this._boundingRect,
                            o = i(t),
                            r = {
                                left: e.left - n.left - o.marginLeft,
                                top: e.top - n.top - o.marginTop,
                                right: n.right - e.right - o.marginRight,
                                bottom: n.bottom - e.bottom - o.marginBottom
                            };
                        return r
                    }, f.handleEvent = n.handleEvent, f.bindResize = function() {
                        t.addEventListener("resize", this), this.isResizeBound = !0
                    }, f.unbindResize = function() {
                        t.removeEventListener("resize", this), this.isResizeBound = !1
                    }, f.onresize = function() {
                        this.resize()
                    }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
                        this.isResizeBound && this.needsResizeLayout() && this.layout()
                    }, f.needsResizeLayout = function() {
                        var t = i(this.element),
                            e = this.size && t;
                        return e && t.innerWidth !== this.size.innerWidth
                    }, f.addItems = function(t) {
                        var e = this._ZooomyLookbookModal__itemize(t);
                        return e.length && (this.ZooomyLookbookModal__items = this.ZooomyLookbookModal__items.concat(e)), e
                    }, f.appended = function(t) {
                        var e = this.addItems(t);
                        e.length && (this.layoutItems(e, !0), this.reveal(e))
                    }, f.prepended = function(t) {
                        var e = this._ZooomyLookbookModal__itemize(t);
                        if (e.length) {
                            var i = this.ZooomyLookbookModal__items.slice(0);
                            this.ZooomyLookbookModal__items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                        }
                    }, f.reveal = function(t) {
                        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                            var e = this.updateStagger();
                            t.forEach(function(t, i) {
                                t.stagger(i * e), t.reveal()
                            })
                        }
                    }, f.hide = function(t) {
                        if (this._emitCompleteOnItems("hide", t), t && t.length) {
                            var e = this.updateStagger();
                            t.forEach(function(t, i) {
                                t.stagger(i * e), t.hide()
                            })
                        }
                    }, f.revealItemElements = function(t) {
                        var e = this.getItems(t);
                        this.reveal(e)
                    }, f.hideItemElements = function(t) {
                        var e = this.getItems(t);
                        this.hide(e)
                    }, f.getItem = function(t) {
                        for (var e = 0; e < this.ZooomyLookbookModal__items.length; e++) {
                            var i = this.ZooomyLookbookModal__items[e];
                            if (i.element == t) return i
                        }
                    }, f.getItems = function(t) {
                        t = n.makeArray(t);
                        var e = [];
                        return t.forEach(function(t) {
                            var i = this.getItem(t);
                            i && e.push(i)
                        }, this), e
                    }, f.remove = function(t) {
                        var e = this.getItems(t);
                        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                            t.remove(), n.removeFrom(this.ZooomyLookbookModal__items, t)
                        }, this)
                    }, f.destroy = function() {
                        var t = this.element.style;
                        t.height = "", t.position = "", t.width = "", this.ZooomyLookbookModal__items.forEach(function(t) {
                            t.destroy()
                        }), this.unbindResize();
                        var e = this.element.outlayerGUID;
                        delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
                    }, r.data = function(t) {
                        t = n.getQueryElement(t);
                        var e = t && t.outlayerGUID;
                        return e && c[e]
                    }, r.create = function(t, e) {
                        var i = s(r);
                        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
                    };
                    var m = {
                        ms: 1,
                        s: 1e3
                    };
                    return r.Item = o, r
                }),
                function(t, e) {
                    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
                }(window, function(t, e) {
                    var i = t.create("masonry");
                    i.compatOptions.fitWidth = "isFitWidth";
                    var n = i.prototype;
                    return n._resetLayout = function() {
                        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
                        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                        this.maxY = 0, this.horizontalColIndex = 0
                    }, n.measureColumns = function() {
                        if (this.getContainerWidth(), !this.columnWidth) {
                            var t = this.ZooomyLookbookModal__items[0],
                                i = t && t.element;
                            this.columnWidth = i && e(i).outerWidth || this.containerWidth
                        }
                        var n = this.columnWidth += this.gutter,
                            o = this.containerWidth + this.gutter,
                            r = o / n,
                            s = n - o % n,
                            a = s && 1 > s ? "round" : "floor";
                        r = Math[a](r), this.cols = Math.max(r, 1)
                    }, n.getContainerWidth = function() {
                        var t = this._getOption("fitWidth"),
                            i = t ? this.element.parentNode : this.element,
                            n = e(i);
                        this.containerWidth = n && n.innerWidth
                    }, n._getItemLayoutPosition = function(t) {
                        t.getSize();
                        var e = t.size.outerWidth % this.columnWidth,
                            i = e && 1 > e ? "round" : "ceil",
                            n = Math[i](t.size.outerWidth / this.columnWidth);
                        n = Math.min(n, this.cols);
                        for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
                                x: this.columnWidth * r.col,
                                y: r.y
                            }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
                        return s
                    }, n._getTopColPosition = function(t) {
                        var e = this._getTopColGroup(t),
                            i = Math.min.apply(Math, e);
                        return {
                            col: e.indexOf(i),
                            y: i
                        }
                    }, n._getTopColGroup = function(t) {
                        if (2 > t) return this.colYs;
                        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
                        return e
                    }, n._getColGroupY = function(t, e) {
                        if (2 > e) return this.colYs[t];
                        var i = this.colYs.slice(t, t + e);
                        return Math.max.apply(Math, i)
                    }, n._getHorizontalColPosition = function(t, e) {
                        var i = this.horizontalColIndex % this.cols,
                            n = t > 1 && i + t > this.cols;
                        i = n ? 0 : i;
                        var o = e.size.outerWidth && e.size.outerHeight;
                        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
                            col: i,
                            y: this._getColGroupY(i, t)
                        }
                    }, n._manageStamp = function(t) {
                        var i = e(t),
                            n = this._getElementOffset(t),
                            o = this._getOption("originLeft"),
                            r = o ? n.left : n.right,
                            s = r + i.outerWidth,
                            a = Math.floor(r / this.columnWidth);
                        a = Math.max(0, a);
                        var h = Math.floor(s / this.columnWidth);
                        h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
                        for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
                    }, n._getContainerSize = function() {
                        this.maxY = Math.max.apply(Math, this.colYs);
                        var t = {
                            height: this.maxY
                        };
                        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
                    }, n._getContainerFitWidth = function() {
                        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                        return (this.cols - t) * this.columnWidth - this.gutter
                    }, n.needsResizeLayout = function() {
                        var t = this.containerWidth;
                        return this.getContainerWidth(), t != this.containerWidth
                    }, i
                });
                var itemtoadd = " #ZooomyLookbookModal__MasonryGrid-" + lookbookid;
                $(window).on('load', function() {
                    var $container = $('.ZooomyLookbookModal__MasonryGrid-' + lookbookid);
                    $container.masonry({
                        ZooomyLookbookModal__itemSelector: '.ZooomyLookbookModal__item'
                    })

                });
                $('<style>.ZooomyLookbookModal__MasonryGrid .ZooomyLookbookModal__item{float:left; width:' + width + '; padding:10px;box-sizing:border-box;}</style>').appendTo("body");

            }

            $.each(tagimgid, function(i, v) {
                if (image_name_shopify[i] == "notfound") {
                    image_name_shopify[i] = "";
                }

                if (layout != "list") {

                    $("#ZooomyLookbook-" + lookbookid + "  " + itemtoadd).append("<li  class='ZooomyImgColl ZooomyLookbookModal__item' id='ZooomyImgColl-" + sno[i] + "' style=' box-sizing:border-box; float:left; padding:4px;'><div class='ZooomyModelPopup ZooomyImgCollAnchor' data-toggle='zooomygallerymodal' data-target='#myzooomygallerymodal-" + sno[i] + "' title='" + image_name_shopify[i] + "' id='zooomyimage__tags-" + tagimgid[i] + "'><img src='" + jsonData.images[i] + "' class='zooomyimg zooomyimg-" + tagimgid[i] + "' alt='" + jsonData.img_alt_tag[i] + "'></div></li>");
                    $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  .ZooomyImgCollAnchor").append("<div class='ZooomyImgCaptions'><span class='Zooomyoriginalcap'>" + image_name_shopify[i] + "</span></div>");

                    if (choose_layout == "popup_layout") {
                        if (image_name_shopify[i] == "") {
                            $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  .ZooomyImgCollAnchor .ZooomyImgCaptions .Zooomyoriginalcap").replaceWith('<i class="fa fa-search  fa-2x"></i>');
                        }
                        if (image_name_shopify[i] == "notfound") {
                            image_name_shopify[i] = "";
                        }


                    }
                    if (image_name_shopify[i] == "notfound") {
                        image_name_shopify[i] = "";
                    }
                    if (img_cta[i] == "empty") {
                        $("#ZooomyLookbookPopup-" + lookbookid).append("<div class='zooomygallerymodal zooomyfade' id='myzooomygallerymodal-" + sno[i] + "' tabindex='-1' role='dialog' aria-labelledby='myzooomygallerymodalLabel' aria-hidden='true'> <div class='zooomygallerymodal-dialog'> <div class='zooomygallerymodal-content'> <div class='zooomygallerymodal-body' id= 'zooomygallerymodal-" + tagimgid[i] + "'> <img src='" + jsonData.images[i] + "' class='zooomypopupimg zooomypopupimg-" + tagimgid[i] + "'></div><div class='zooomygallerymodal-footer'> </div> <div class='ZooomyImgCaptionsPopup'>" + image_name_shopify[i] + "</div></div> </div> <button type='button' class='zooomygallerybtn zooomygallerybtn-default zooomygallerybtn-prev' id='" + sno[i] + "'><i class='fa fa-angle-left'></i></button> <button type='button' class='zooomygallerybtn zooomygallerybtn-default zooomygallerybtn-next' id='" + sno[i] + "'><i class='fa fa-angle-right'></i></button> <button type='button' class=' zooomygallerybtn-close' data-dismiss='zooomygallerymodal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z'></path></svg></button> </div>");

                    } else {
                        $("#ZooomyLookbookPopup-" + lookbookid).append("<div class='zooomygallerymodal zooomyfade' id='myzooomygallerymodal-" + sno[i] + "' tabindex='-1' role='dialog' aria-labelledby='myzooomygallerymodalLabel' aria-hidden='true'> <div class='zooomygallerymodal-dialog'> <div class='zooomygallerymodal-content'> <div class='zooomygallerymodal-body' id= 'zooomygallerymodal-" + tagimgid[i] + "'><a href='" + jsonData.img_cta[i] + "'> <img src='" + jsonData.images[i] + "' class='zooomypopupimg zooomypopupimg-" + tagimgid[i] + "'> </a></div><div class='zooomygallerymodal-footer'> </div> <div class='ZooomyImgCaptionsPopup'>" + image_name_shopify[i] + "</div></div> </div> <button type='button' class='zooomygallerybtn zooomygallerybtn-default zooomygallerybtn-prev' id='" + sno[i] + "'><i class='fa fa-angle-left'></i></button> <button type='button' class='zooomygallerybtn zooomygallerybtn-default zooomygallerybtn-next' id='" + sno[i] + "'><i class='fa fa-angle-right'></i></button> <button type='button' class=' zooomygallerybtn-close' data-dismiss='zooomygallerymodal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z'></path></svg></button> </div>");

                    }
                }
                if (image_name_shopify[i] == "notfound") {
                    image_name_shopify[i] = "";
                }
                if (pinit == "yes") {
                    $("#ZooomyImgColl-" + sno[i]).append('<a class="zooomy-pin-it" href="https://pinterest.com/pin/create/button/?media=' + jsonData.images[i] + '&amp;description=' + image_name_shopify[i] + '" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i></a>');
                }

                if (choose_layout == "inline_layout") {


                    if (img_cta[i] == "empty") {
                        $("#ZooomyLookbook-" + lookbookid + "  " + itemtoadd + "  #ZooomyImgColl-" + sno[i] + " .ZooomyImgCollAnchor").replaceWith("<div class='ZooomyImgCollAnchor'  id='zooomyimage__tags-" + tagimgid[i] + "'><img src='" + jsonData.images[i] + "' class='zooomyimg zooomyimg-" + tagimgid[i] + "' alt='" + jsonData.img_alt_tag[i] + "'></div>");
                        $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  .ZooomyImgCollAnchor").append("<div class='ZooomyImgCaptions'>" + image_name_shopify[i] + "</div>");

                    } else {
                        $("#ZooomyLookbook-" + lookbookid + "  " + itemtoadd + "  #ZooomyImgColl-" + sno[i] + " .ZooomyImgCollAnchor").replaceWith("<a class='ZooomyImgCollAnchor' target='" + open_img + "' id='zooomyimage__tags-" + tagimgid[i] + "' href='" + img_cta[i] + "' title='" + image_name_shopify[i] + "'><img src='" + jsonData.images[i] + "' class='zooomyimg  zooomyimg-" + tagimgid[i] + "' alt='" + jsonData.img_alt_tag[i] + "'></a>");
                        $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  .ZooomyImgCollAnchor").append("<div class='ZooomyImgCaptions'>" + image_name_shopify[i] + "</div>");

                    }


                }
                if (layout == "square_grid") {
                    $("#ZooomyLookbook-" + lookbookid + "  " + itemtoadd + "  #ZooomyImgColl-" + sno[i] + " .zooomyimg").replaceWith("<div class='ZooomyLookbookSquareGrid' style='background:url(" + jsonData.images[i] + ") no-repeat center center/cover; width:100%;float:left;'></div>");
                    $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  .ZooomyImgCollAnchor").append("<div class='ZooomyImgCaptions'>" + image_name_shopify[i] + "</div>");

                }
                if (layout == "collage") {

                }

                if (layout == "list") {

                    if (hastags[i] == "false") {
                        $("#ZooomyLookbook-" + lookbookid).append("<li  class='ZooomyImgColl ZooomyLookbookModal__item' id='ZooomyImgColl-" + sno[i] + "' style='width:100%; position:relative;box-sizing:border-box; float:left; padding:0;margin:5px 0px;'><a class='ZooomyImgCollAnchor'  id='zooomyimage__tags-" + tagimgid[i] + "'><img src='" + jsonData.images[i] + "' class='zooomyimg zooomyimg-" + tagimgid[i] + "' alt='" + jsonData.img_alt_tag[i] + "'></a></li>");

                    } else {
                        $("#ZooomyLookbook-" + lookbookid).append("<li  class='ZooomyImgColl ZooomyLookbookModal__item' id='ZooomyImgColl-" + sno[i] + "' style='width:100%; position:relative;box-sizing:border-box; float:left; padding:0;margin:5px 0px;'><a class='ZooomyImgCollAnchor'  href='" + img_cta[i] + "' target='" + open_img + "' id='zooomyimage__tags-" + tagimgid[i] + "'><img src='" + jsonData.images[i] + "' class='zooomyimg zooomyimg-" + tagimgid[i] + "' alt='" + jsonData.img_alt_tag[i] + "'></a></li>");

                    }
                    if (img_cta[i] == "empty") {
                        $("#ZooomyLookbook-" + lookbookid + "  " + itemtoadd + "  #ZooomyImgColl-" + sno[i] + " .ZooomyImgCollAnchor").replaceWith("<div class='ZooomyImgCollAnchor'  id='zooomyimage__tags-" + tagimgid[i] + "'><img src='" + jsonData.images[i] + "' class='zooomyimg zooomyimg-" + tagimgid[i] + "' alt='" + jsonData.img_alt_tag[i] + "'></div>");
                        $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  .ZooomyImgCollAnchor").append("<div class='ZooomyImgCaptions'>" + image_name_shopify[i] + "</div>");

                    } else {
                        $("#ZooomyLookbook-" + lookbookid + "  " + itemtoadd + "  #ZooomyImgColl-" + sno[i] + " .ZooomyImgCollAnchor").replaceWith("<a class='ZooomyImgCollAnchor'  id='zooomyimage__tags-" + tagimgid[i] + "' href='" + img_cta[i] + "' title='" + image_name_shopify[i] + "' target='" + open_img + "'><img src='" + jsonData.images[i] + "' class='zooomyimg  zooomyimg-" + tagimgid[i] + "' alt='" + jsonData.img_alt_tag[i] + "'></a>");
                        $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  .ZooomyImgCollAnchor").append("<div class='ZooomyImgCaptions'>" + image_name_shopify[i] + "</div>");

                    }
                }
                var shop = jsonData.shop;

                if (a__tags != null) {

                    if (typeof a__tags[v] != 'undefined' && a__tags[v] instanceof Array) {
                        var image__tags = a__tags[v];
                        $.each(image__tags, function(index, value) {
                            var the_tag_product_handle = image__tags[index]['product_handle'];
                            var img_tag_id = image__tags[index]['img_tag_id'];
                            var the_tag_pro_id = image__tags[index]['product_id'];
                            if (image__tags[index]['tag_v_pos'] > "60") {
                                var ncss = "bottom: -80px;top: unset;";
                                if (layout == "slider") {
                                    var ncss = "bottom: 0px;top: unset;";

                                }
                                if (screen.width < 600) {
                                    var ncss = "bottom: -20px;top: unset;";
                                    if (layout == "slider") {
                                        var ncss = "bottom: 0px;top: unset;";

                                    }
                                }
                                var nbcss = "bottom: 80px;top: unset;";
                            }
                            if (image__tags[index]['tag_v_pos'] < "60") {
                                var ncss = "top: -80px;bottom: unset;";
                                var nbcss = "top: 80px;bottom: unset;";
                                if (layout == "slider") {
                                    var ncss = "top: 0px;bottom: unset;";
                                    var nbcss = "top: 0px;bottom: unset;";

                                }
                            }
                            if (image__tags[index]['tag_h_pos'] > "60") {
                                var vcss = "right:20px;left: unset;";
                                if (screen.width < 600) {
                                    var vcss = "right:-10px;left: unset;";

                                }
                                var vbcss = "right: -10px;border-left: 10px solid #fff;border-right:0;";
                            }
                            if (image__tags[index]['tag_h_pos'] < "60") {
                                var vcss = "left:20px; right: unset;";
                                if (screen.width < 600) {
                                    var vcss = "left:-30px; right: unset;";
                                }
                                var vbcss = "left:-10px;border-right: 10px solid #fff;border:left:0;";
                            }

                            var shop = jsonData.shop;
                            if (showbutton == "yes" && choose_layout == "popup_layout") {

                                $('<style>#ZooomyImgColl-' + sno[i] + ' .ZooomyImgCaptions::after {content: "' + show_btn_text + '"; border: 2px solid #fff; padding: 4px 10px; border-radius: 3px;  font-weight: 500;}#ZooomyImgColl-' + sno[i] + ' .ZooomyImgCaptions { display: block!important;transition: opacity .5s ease-in-out; -moz-transition: opacity .5s ease-in-out; -webkit-transition: opacity .5s ease-in-out; }#ZooomyImgColl-' + sno[i] + ' .ZooomyImgCaptions i.fa.fa-search.fa-2x{display:none;}</style>').appendTo("body");

                            }
                            $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  #zooomyimage__tags-" + tagimgid[i] + "  .ZooomyImgCaptions").hide();
                            if (layout != "slider" || layout != "list") {
                                if (showbutton == "yes" && choose_layout == "popup_layout") {

                                    $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  #zooomyimage__tags-" + tagimgid[i]).append("");

                                } else {


                                    $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  #zooomyimage__tags-" + tagimgid[i]).append("<div class='theimgtags' style='left:" + image__tags[index]['tag_h_pos'] + "%;top:" + image__tags[index]['tag_v_pos'] + "%;position:absolute; '><a class='zooomytagspot'>+</a></div>");
                                }
                            }

                            $("#ZooomyLookbookPopup-" + lookbookid + " #myzooomygallerymodal-" + sno[i] + "  #zooomygallerymodal-" + tagimgid[i]).append("<div class='theimgtags' id='theimgtags-" + img_tag_id + "-" + the_tag_product_handle + "' style='left:" + image__tags[index]['tag_h_pos'] + "%;top:" + image__tags[index]['tag_v_pos'] + "%;position:absolute; '><a class='zooomytagspot'>+</a><div class='zooomy___show___tags' id='zooomy___show___tags-" + the_tag_pro_id + "'><a class='zooomytagboxclose'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z'></path></svg></a><div class='zoptionbox' style='float:left;width:100%;margin:10px 0px;'><select class='zooomyshopvariant' id='zooomyshopvariant'></select></div><div class='zgalleryaddcartbtn'><a class='zooomyseedetails' href='https://" + shop + "/products/" + the_tag_product_handle + "' target='_blank'><span>" + details_text + "</span></a><a class='zooomyaddtocart' id='" + the_tag_pro_id + "'>" + cart_btn_text + " </a></div></div>");
                            if (layout == "list") {
                                if (showbutton == "yes" && choose_layout == "popup_layout") {

                                    $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  #zooomyimage__tags-" + tagimgid[i]).append("");

                                } else {
                                    $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  #zooomyimage__tags-" + tagimgid[i]).append("<div class='theimgtags' id='theimgtags-" + img_tag_id + "-" + the_tag_product_handle + "' style='left:" + image__tags[index]['tag_h_pos'] + "%;top:" + image__tags[index]['tag_v_pos'] + "%;position:absolute; '><a class='zooomytagspot'>+</a><div class='zooomy___show___tags' id='zooomy___show___tags-" + the_tag_pro_id + "'><a class='zooomytagboxclose'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z'></path></svg></a><div class='zoptionbox' style='float:left;width:100%;margin:10px 0px;'><select class='zooomyshopvariant' id='zooomyshopvariant'></select></div><div class='zgalleryaddcartbtn'><a class='zooomyseedetails' href='https://" + shop + "/products/" + the_tag_product_handle + "' target='_blank'><span>" + details_text + "</span></a><a class='zooomyaddtocart' id='" + the_tag_pro_id + "'>" + cart_btn_text + " </a></div></div>");
                                }
                            }

                            if (choose_layout == "inline_layout") {
                                $("#ZooomyLookbook-" + lookbookid + " #ZooomyImgColl-" + sno[i] + "  #zooomyimage__tags-" + tagimgid[i]).append("<div class='theimgtags' id='theimgtags-" + img_tag_id + "-" + the_tag_product_handle + "' style='left:" + image__tags[index]['tag_h_pos'] + "%;top:" + image__tags[index]['tag_v_pos'] + "%;position:absolute; '><a class='zooomytagspot'>+</a><div class='zooomy___show___tags' id='zooomy___show___tags-" + the_tag_pro_id + "'><a class='zooomytagboxclose'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z'></path></svg></a><div class='zoptionbox' style='float:left;width:100%;margin:10px 0px;'><select class='zooomyshopvariant' id='zooomyshopvariant'></select></div><div class='zgalleryaddcartbtn'><a class='zooomyseedetails' href='https://" + shop + "/products/" + the_tag_product_handle + "' target='_blank'><span>" + details_text + "</span></a><a class='zooomyaddtocart' id='" + the_tag_pro_id + "'>" + cart_btn_text + " </a></div></div>");

                            }

                            $('<style>#theimgtags-' + img_tag_id + '-' + the_tag_product_handle + ' #zooomy___show___tags-' + the_tag_pro_id + '{' + ncss + vcss + '}</style>').appendTo("body");
                            $('<style>#theimgtags-' + img_tag_id + '-' + the_tag_product_handle + ' #zooomy___show___tags-' + the_tag_pro_id + ':after{border-top: 10px solid transparent; position: absolute; border-bottom: 10px solid transparent;  width: 0; height: 0; ' + nbcss + vbcss + '}</style>').appendTo("body");

                            $.ajax({
                                url: '/products/' + the_tag_product_handle + '.js',
                                dataType: 'json',
                                success: function(cartvalues) {

                                    var variantprice = cartvalues.variants[0].price;
                                    var ava = cartvalues.variants.available;

                                    if (ava == undefined) {
                                        ava = cartvalues.available;
                                    }
                                    avail = cartvalues.variants[0].available;
                                    if (avail == false) {
                                        ava = 'false';
                                    }

                                    if (ava == 'false' || ava == false) {
                                        $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #" + the_tag_pro_id).addClass("zsoldout");
                                        $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #" + the_tag_pro_id).text(sold_out_text);
                                    } else {
                                        $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #" + the_tag_pro_id).removeClass("zsoldout");
                                        $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #" + the_tag_pro_id).text(cart_btn_text);
                                    }

                                    variantprice = (variantprice) / 100;
                                    if (shop == "lookae.myshopify.com") {
                                        variantprice = variantprice.toFixed(0);
                                        variantprice = variantprice + " " + shop_currency;

                                    } else {
                                        variantprice = variantprice.toFixed(2);
                                        variantprice = shop_currency + variantprice;

                                    }
                                    zvarp = variantprice;

                                    m_img = cartvalues.featured_image;



                                    $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " .zooomy___show___tags").prepend("<div class='zbodypimg'><a href='https://" + shop + "/products/" + the_tag_product_handle + "'><img src='" + m_img + "' height='300'/></div></a></div>");
                                    $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " .zooomy___show___tags .zbodypimg").append("<div class='zooomytagptitle'>" + cartvalues.title + "</div>");

                                    $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " .zooomy___show___tags .zbodypimg").append("<div class='zooomytagprice'  data-zprice-id='" + zvarp + "' >" + variantprice + "</div>");


                                    $(cartvalues.variants).each(function(k, variants) {
                                        var showselect = variants.title;
                                        if (variants.featured_image == null) {
                                            vimg = "";
                                        } else {
                                            vimg = variants.featured_image.src;



                                        }

                                        $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #zooomyshopvariant").append("<option value='" + variants.id + "' data-vid='" + variants.id + "' data-image='" + vimg + "' data-price='" + variants.price + "'  data-available='" + variants.available + "'>" + variants.title + "</option>");


                                        if (showselect == "Default Title")

                                        {
                                            $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " .zoptionbox").hide();
                                        }
                                    });
                                    $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle).change(function() {


                                        var dropdown = $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #zooomyshopvariant");
                                        var selectedText = dropdown.find("option:selected").text();
                                        var imgg = dropdown.find('option:selected').attr('data-image');
                                        var vprice = dropdown.find('option:selected').attr('data-price');
                                        var vavailable = dropdown.find('option:selected').attr('data-available');
                                        var vhandle = dropdown.find('option:selected').attr('data-vid');

                                        if (vavailable == 'false' || vavailable == false) {
                                            $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #" + the_tag_pro_id).addClass("zsoldout");
                                            $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #" + the_tag_pro_id).text(sold_out_text);
                                        } else {
                                            $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #" + the_tag_pro_id).removeClass("zsoldout");
                                            $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #" + the_tag_pro_id).text(cart_btn_text);
                                        }
                                        $(".zooomyseedetails").replaceWith("<a class='zooomyseedetails' href='https://" + shop + "/products/" + cartvalues.handle + "?variant=" + vhandle + "' target='_blank'><span>" + details_text + "</span></a>");

                                        vprice = (vprice) / 100;
                                        if (shop == "lookae.myshopify.com") {
                                            vprice = vprice.toFixed(0);
                                            vprice = vprice + " " + shop_currency;

                                        } else {
                                            vprice = vprice.toFixed(2);
                                            vprice = shop_currency + vprice;

                                        }
                                        zvp = vprice;

                                        if (imgg != "") {
                                            $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + "  .zbodypimg img").attr('src', imgg);
                                        }
                                        $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " .zooomy___show___tags .zooomytagprice").replaceWith("<div class='zooomytagprice' data-zprice-id='" + zvp + "' '>" + vprice + "</div>");



                                    });
                                    $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " .zooomyaddtocart").click(function() {
                                        var dropdown = $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " #zooomyshopvariant");
                                        var selectedText = dropdown.find("option:selected").text();
                                        var imgg = dropdown.find('option:selected').attr('data-image');
                                        var wishlistid = $(this).attr('data-pro-id');
                                        var selectedValue = "";
                                        selectedValue = dropdown.val();
                                        if (selectedValue == "") {
                                            selectedValue = the_tag_pro_id;
                                        }


                                        $.ajax({
                                            type: 'POST',
                                            url: '/cart/add.js',
                                            dataType: 'json',
                                            data: {
                                                quantity: 1,
                                                id: selectedValue,
                                            },
                                            success: function(a) {

                                                let countCart=$("cart-count").text();
                                              console.log("..countCart..",countCart)
                                                jQuery.getJSON('/cart.js', function(cart) {
                                                    console.log("cart..",cart.item_count)
                                                  $("cart-count").text(cart.item_count)
                                                    $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " .zgalleryaddcartbtn").append("<div id='zooomyitemadded-" + the_tag_pro_id + "' class='zooomyitemadded'><a href='https://" + shop + "/cart' target='" + target + "'>" + cart_text + "</a></div>");

                                                    $('#zooomyitemadded-' + the_tag_pro_id).each(function() {
                                                        $('[id="' + this.id + '"]:gt(0)').remove();
                                                    });

                                                });

                                            },

                                        });




                                    });




                                },


                            });

                            $(document).ready(function() {
                                if (shop == "battersea-shop.myshopify.com") {
                                    setTimeout(function() {
                                        $('.theimgtags').show();
                                    }, 6000);
                                } else {
                                    setTimeout(function() {
                                        $('.theimgtags').show();
                                    }, 2000);
                                }
                                
                              
                            });

                            $("body").on('click',".zooomy___show___tags",function(e){
                                  console.log("..",$(this))
                                  
                                  if (!e.target.closest('.theimgtags') && !e.target.closest('.theimgtags')) {
                                      $(".zooomy___show___tags").removeClass('show-image')
                                    }
                              });
                            window.addEventListener('click', (e) => {
                                  if (!e.target.closest('.theimgtags') && !e.target.closest('.theimgtags')) {
                                      $(".zooomy___show___tags").hide().removeClass('show-image')
                                  }
                              });
                            $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " .zooomytagspot").click(function() {
                                $(".zooomy___show___tags").removeClass('show-image');
                                
                                $("#theimgtags-" + img_tag_id + "-" + the_tag_product_handle + " .zooomy___show___tags").addClass('show-image');

                            });
                            $(".zooomytagboxclose").click(function() {
                                // $(".zooomy___show___tags").hide();
                              
                               $(".zooomy___show___tags").removeClass('show-image');
                            });

                           

                          


                        });
                        $('<style>#zooomyimage__tags-' + tagimgid[i] + '::after{display:none; opacity:0;}</style>').appendTo("body");
                        $('<style>#zooomygallerymodal-' + tagimgid[i] + ' img{max-height:inherit;width:100%;}</style>').appendTo("body");
                        $('<style>#zooomygallerymodal-' + tagimgid[i] + ' .zooomy___show___tags .zbodypimg img {max-height: inherit; width: 57%;}</style>').appendTo("body");



                    }


                } else {
                    if (img_cta[i] != "empty") {
                        $("#myzooomygallerymodal-" + sno[i] + " .zooomygallerymodal-body img").wrap("<a class='ZooomyImgCollAnchor' href='" + img_cta[i] + "' title='" + image_name_shopify[i] + "' target='" + open_img + "'></a>");

                    }
                }


            });

            if (choose_layout == "popup_layout") {

                $(".ZooomyModelPopup.ZooomyImgCollAnchor").click(function() {

                    $('.site-header').hide();
                    $('nav').hide();
                    $('header').hide();
                    $('header').hide();
                });

                $('.zooomygallerybtn-prev').click(function() {
                    var previd = $(this).attr('id');
                    var pnewid = parseInt(previd, 10) - parseInt(1);
                    $('#myzooomygallerymodal-' + previd).hide();
                    $('#myzooomygallerymodal-' + pnewid).show();
                    $('.site-header').hide();
                    $('nav').hide();
                    $('header').hide();
                    if (previd == prevvalue) {
                        $('#myzooomygallerymodal-' + nextvalue).show();
                    }


                });

                $('.zooomygallerybtn-next').click(function() {
                    var nextid = $(this).attr('id');
                    var newid = nextid + 1;
                    var newid = parseInt(nextid, 10) + parseInt(1);
                    $('#myzooomygallerymodal-' + nextid).hide();
                    $('#myzooomygallerymodal-' + newid).show();
                    $('.site-header').hide();
                    $('header').hide();
                    $('nav').hide();
                    if (nextid == nextvalue) {
                        $('#myzooomygallerymodal-' + prevvalue).show();
                    }

                });



                $('.zooomygallerybtn-close').click(function() {
                    $('.site-header').show();
                    $('header').show();
                    $('.zooomygallerymodal').hide();
                    $('nav').show();
                    $('<style>.site-header{display:block;}</style>').appendTo("body");
                    $('body').removeClass('zooomygallerymodal-open');
                });




                $(document).keydown(function(e) {
                    if (e.keyCode == 37) {

                    }
                });



            }
            if (layout == "grid" || layout == "square_grid") {
                $('<style>.ZooomyLookbook{display: flex; flex-wrap: wrap;}</style>').appendTo("body");

            }
            if (layout == "square_grid") {
                $('<style>.ZooomyLookbook img{display: none;}</style>').appendTo("body");
                var height = $(".ZooomyLookbookModal__item").width();
                $("#ZooomyLookbook-" + lookbookid + " .ZooomyLookbookSquareGrid").css("height", height);
            }
            $('<style>' + jsonData.custom_css + '</style>').appendTo("body");

            if (img_overlay == "hide") {
                $('<style>.ZooomyImgCollAnchor::after, .ZooomyImgCaptions{display:none; opacity:0;}</style>').appendTo("body");
            }
            if (img_overlay == "staticcaption") {
                $('<style>.ZooomyImgCaptions { float: left; width: 100%; padding: 10px; background:rgba(' + img_overlay_background_color + ',' + img_overlay_opacity + '); color:' + img_overlay_font_color + '; }i.fa.fa-search.fa-2x{display:none;}.ZooomyImgCollAnchor::after {position: unset;}.ZooomyImgCaptions { position:unset; z-index: 999; text-align: center; width: 100%; opacity: 1; }</style>').appendTo("body");
            }
            if (img_overlay == "zoomicon") {
                $('<style></style>').appendTo("body");
            }


            var shop = jsonData.shop;

            $(".zooomy___show___tags").click(function() {
                var viewid = $(this).attr('id');
                $.ajax({
                    url: "https://zooomyapps.com/lookbook/ZooomyViewCount.php",
                    data: {
                        shop: shop,
                        viewid: viewid
                    },
                    dataType: "jsonp",
                    jsonp: "jsonViewCode",
                    async: "true",
                    success: function(a) {


                    },

                });


            });

            $(".zooomyaddtocart").click(function() {
                var viewid = $(this).attr('id');

                var newp = $("#zooomy___show___tags-" + viewid + " .zooomytagprice").attr("data-zprice-id");

                $.ajax({
                    url: "https://zooomyapps.com/lookbook/ZooomyClicks.php",
                    data: {
                        shop: shop,
                        viewid: viewid,
                        newp: newp
                    },
                    dataType: "jsonp",
                    jsonp: "jsonnViewCode",
                    async: "true",
                    success: function(a) {


                    },

                });


            });
            $('<style>.zooomy___show___tags .zgalleryaddcartbtn a{box-sizing:border:box;}.zooomyaddtocart{background:' + cart_btn_background_color + '!important; color:' + cart_btn_font_color + '!important;}.zooomyseedetails{background:' + details_background_color + '!important; color:' + details_font_color + '!important;}</style>').appendTo("body");
            $('<style>@-webkit-keyframes zooomytagspot { from { box-shadow: 0 0 0 0 ' + hotspot_shadow + ', 0 0 4px 2px rgba(0, 0, 0, 0.4); } to { box-shadow: 0 0 0 10px rgba(20,171,192,0), 0 0 4px 2px rgba(0, 0, 0, 0.4); } } @keyframes zooomytagspot { from { box-shadow: 0 0 0 0 ' + hotspot_shadow + ', 0 0 4px 2px rgba(0, 0, 0, 0.4); } to { box-shadow: 0 0 0 10px rgba(20,171,192,0), 0 0 4px 2px rgba(0, 0, 0, 0.4); } } .zooomytagspot { width: 20px; height: 20px;float:left; line-height: 20px; border-radius: 50%; background-color: ' + hotspot_border + '; cursor: pointer; border: 2px solid ' + hotspot_background + '; -webkit-animation: zooomytagspot 800ms ease-out infinite; animation: zooomytagspot 800ms ease-out infinite; }</style>').appendTo("body");
            if (screen.width < 786) {
                $(".zooomyseedetails span").replaceWith("<i class='fa fa-eye'></i>");
                $(".zooomyaddtocart div").replaceWith("i class='fa fa-eye'></i>");
            }


            $('.theimgtags[id]').each(function() {
                $('[id="' + this.id + '"]:gt(0)').remove();
            });

        }



    });

}



