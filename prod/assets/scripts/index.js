!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(T,e){"use strict";function v(e){return null!=e&&e===e.window}var t=[],k=T.document,n=Object.getPrototypeOf,a=t.slice,g=t.concat,l=t.push,o=t.indexOf,i={},r=i.toString,y=i.hasOwnProperty,s=y.toString,c=s.call(Object),m={},w=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},d={type:!0,src:!0,noModule:!0};function b(e,t,n){var i,o=(t=t||k).createElement("script");if(o.text=e,n)for(i in d)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function h(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?i[r.call(e)]||"object":typeof e}var S=function(e,t){return new S.fn.init(e,t)},u=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function p(e){var t=!!e&&"length"in e&&e.length,n=h(e);return!w(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:"3.3.1",constructor:S,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){e=S.merge(this.constructor(),e);return e.prevObject=this,e},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,e=+e+(e<0?t:0);return this.pushStack(0<=e&&e<t?[this[e]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,i,o,r=arguments[0]||{},s=1,a=arguments.length,l=!1;for("boolean"==typeof r&&(l=r,r=arguments[s]||{},s++),"object"==typeof r||w(r)||(r={}),s===a&&(r=this,s--);s<a;s++)if(null!=(e=arguments[s]))for(t in e)o=r[t],r!==(n=e[t])&&(l&&n&&(S.isPlainObject(n)||(i=Array.isArray(n)))?(o=i?(i=!1,o&&Array.isArray(o)?o:[]):o&&S.isPlainObject(o)?o:{},r[t]=S.extend(l,o,n)):void 0!==n&&(r[t]=n));return r},S.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){return!(!e||"[object Object]"!==r.call(e)||(e=n(e))&&("function"!=typeof(e=y.call(e,"constructor")&&e.constructor)||s.call(e)!==c))},isEmptyObject:function(e){for(var t in e)return!1;return!0},globalEval:function(e){b(e)},each:function(e,t){var n,i=0;if(p(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(u,"")},makeArray:function(e,t){t=t||[];return null!=e&&(p(Object(e))?S.merge(t,"string"==typeof e?[e]:e):l.call(t,e)),t},inArray:function(e,t,n){return null==t?-1:o.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i=[],o=0,r=e.length,s=!n;o<r;o++)!t(e[o],o)!=s&&i.push(e[o]);return i},map:function(e,t,n){var i,o,r=0,s=[];if(p(e))for(i=e.length;r<i;r++)null!=(o=t(e[r],r,n))&&s.push(o);else for(r in e)null!=(o=t(e[r],r,n))&&s.push(o);return g.apply([],s)},guid:1,support:m}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){i["[object "+t+"]"]=t.toLowerCase()});var f=function(n){function u(e,t,n){var i="0x"+t-65536;return i!=i||n?t:i<0?String.fromCharCode(65536+i):String.fromCharCode(i>>10|55296,1023&i|56320)}function i(){T()}var e,f,b,r,o,h,p,v,x,l,c,T,k,s,S,g,a,d,y,C="sizzle"+ +new Date,m=n.document,$=0,w=0,A=se(),E=se(),D=se(),j=function(e,t){return e===t&&(c=!0),0},N={}.hasOwnProperty,t=[],H=t.pop,O=t.push,L=t.push,P=t.slice,q=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",z="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+I+"*("+z+")(?:"+I+"*([*^$|!~]?=)"+I+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+z+"))|)"+I+"*\\]",R=":("+z+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(I+"+","g"),B=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),U=new RegExp("^"+I+"*,"+I+"*"),X=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),_=new RegExp("="+I+"*([^\\]'\"]*?)"+I+"*\\]","g"),Y=new RegExp(R),V=new RegExp("^"+z+"$"),G={ID:new RegExp("^#("+z+")"),CLASS:new RegExp("^\\.("+z+")"),TAG:new RegExp("^("+z+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+I+"?|("+I+")|.)","ig"),ne=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=ge(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(t=P.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(n){L={apply:t.length?function(e,t){O.apply(e,P.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function re(e,t,n,i){var o,r,s,a,l,c,d,u=t&&t.ownerDocument,p=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;if(!i&&((t?t.ownerDocument||t:m)!==k&&T(t),t=t||k,S)){if(11!==p&&(l=Z.exec(e)))if(o=l[1]){if(9===p){if(!(s=t.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(u&&(s=u.getElementById(o))&&y(t,s)&&s.id===o)return n.push(s),n}else{if(l[2])return L.apply(n,t.getElementsByTagName(e)),n;if((o=l[3])&&f.getElementsByClassName&&t.getElementsByClassName)return L.apply(n,t.getElementsByClassName(o)),n}if(f.qsa&&!D[e+" "]&&(!g||!g.test(e))){if(1!==p)u=t,d=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(ne,ie):t.setAttribute("id",a=C),r=(c=h(e)).length;r--;)c[r]="#"+a+" "+ve(c[r]);d=c.join(","),u=ee.test(e)&&fe(t.parentNode)||t}if(d)try{return L.apply(n,u.querySelectorAll(d)),n}catch(e){}finally{a===C&&t.removeAttribute("id")}}}return v(e.replace(B,"$1"),t,n,i)}function se(){var n=[];function i(e,t){return n.push(e+" ")>b.cacheLength&&delete i[n.shift()],i[e+" "]=t}return i}function ae(e){return e[C]=!0,e}function le(e){var t=k.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ce(e,t){for(var n=e.split("|"),i=n.length;i--;)b.attrHandle[n[i]]=t}function de(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ue(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&oe(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function pe(s){return ae(function(r){return r=+r,ae(function(e,t){for(var n,i=s([],e.length,r),o=i.length;o--;)e[n=i[o]]&&(e[n]=!(t[n]=e[n]))})})}function fe(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in f=re.support={},o=re.isXML=function(e){e=e&&(e.ownerDocument||e).documentElement;return!!e&&"HTML"!==e.nodeName},T=re.setDocument=function(e){var t,e=e?e.ownerDocument||e:m;return e!==k&&9===e.nodeType&&e.documentElement&&(s=(k=e).documentElement,S=!o(k),m!==k&&(t=k.defaultView)&&t.top!==t&&(t.addEventListener?t.addEventListener("unload",i,!1):t.attachEvent&&t.attachEvent("onunload",i)),f.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),f.getElementsByTagName=le(function(e){return e.appendChild(k.createComment("")),!e.getElementsByTagName("*").length}),f.getElementsByClassName=K.test(k.getElementsByClassName),f.getById=le(function(e){return s.appendChild(e).id=C,!k.getElementsByName||!k.getElementsByName(C).length}),f.getById?(b.filter.ID=function(e){var t=e.replace(te,u);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&S){e=t.getElementById(e);return e?[e]:[]}}):(b.filter.ID=function(e){var t=e.replace(te,u);return function(e){e=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return e&&e.value===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&S){var n,i,o,r=t.getElementById(e);if(r){if((n=r.getAttributeNode("id"))&&n.value===e)return[r];for(o=t.getElementsByName(e),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),b.find.TAG=f.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):f.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"!==e)return r;for(;n=r[o++];)1===n.nodeType&&i.push(n);return i},b.find.CLASS=f.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&S)return t.getElementsByClassName(e)},a=[],g=[],(f.qsa=K.test(k.querySelectorAll))&&(le(function(e){s.appendChild(e).innerHTML="<a id='"+C+"'></a><select id='"+C+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+I+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+I+"*(?:value|"+M+")"),e.querySelectorAll("[id~="+C+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+C+"+*").length||g.push(".#.+[+~]")}),le(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=k.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+I+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),s.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(f.matchesSelector=K.test(d=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.oMatchesSelector||s.msMatchesSelector))&&le(function(e){f.disconnectedMatch=d.call(e,"*"),d.call(e,"[s!='']:x"),a.push("!=",R)}),g=g.length&&new RegExp(g.join("|")),a=a.length&&new RegExp(a.join("|")),t=K.test(s.compareDocumentPosition),y=t||K.test(s.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,t=t&&t.parentNode;return e===t||!(!t||1!==t.nodeType||!(n.contains?n.contains(t):e.compareDocumentPosition&&16&e.compareDocumentPosition(t)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return c=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!f.sortDetached&&t.compareDocumentPosition(e)===n?e===k||e.ownerDocument===m&&y(m,e)?-1:t===k||t.ownerDocument===m&&y(m,t)?1:l?q(l,e)-q(l,t):0:4&n?-1:1)}:function(e,t){if(e===t)return c=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,s=[e],a=[t];if(!o||!r)return e===k?-1:t===k?1:o?-1:r?1:l?q(l,e)-q(l,t):0;if(o===r)return de(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?de(s[i],a[i]):s[i]===m?-1:a[i]===m?1:0}),k},re.matches=function(e,t){return re(e,null,null,t)},re.matchesSelector=function(e,t){if((e.ownerDocument||e)!==k&&T(e),t=t.replace(_,"='$1']"),f.matchesSelector&&S&&!D[t+" "]&&(!a||!a.test(t))&&(!g||!g.test(t)))try{var n=d.call(e,t);if(n||f.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<re(t,k,null,[e]).length},re.contains=function(e,t){return(e.ownerDocument||e)!==k&&T(e),y(e,t)},re.attr=function(e,t){(e.ownerDocument||e)!==k&&T(e);var n=b.attrHandle[t.toLowerCase()],n=n&&N.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==n?n:f.attributes||!S?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},re.escape=function(e){return(e+"").replace(ne,ie)},re.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},re.uniqueSort=function(e){var t,n=[],i=0,o=0;if(c=!f.detectDuplicates,l=!f.sortStable&&e.slice(0),e.sort(j),c){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return l=null,e},r=re.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=r(t);return n},(b=re.selectors={cacheLength:50,createPseudo:ae,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,u),e[3]=(e[3]||e[4]||e[5]||"").replace(te,u),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||re.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&re.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Y.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,u).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=A[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&A(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(e){e=re.attr(e,t);return null==e?"!="===n:!n||(e+="","="===n?e===i:"!="===n?e!==i:"^="===n?i&&0===e.indexOf(i):"*="===n?i&&-1<e.indexOf(i):"$="===n?i&&e.slice(-i.length)===i:"~="===n?-1<(" "+e.replace(F," ")+" ").indexOf(i):"|="===n&&(e===i||e.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,v,g){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),w="of-type"===e;return 1===v&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var i,o,r,s,a,l,c=y!=m?"nextSibling":"previousSibling",d=e.parentNode,u=w&&e.nodeName.toLowerCase(),p=!n&&!w,f=!1;if(d){if(y){for(;c;){for(s=e;s=s[c];)if(w?s.nodeName.toLowerCase()===u:1===s.nodeType)return!1;l=c="only"===h&&!l&&"nextSibling"}return!0}if(l=[m?d.firstChild:d.lastChild],m&&p){for(f=(a=(i=(o=(r=(s=d)[C]||(s[C]={}))[s.uniqueID]||(r[s.uniqueID]={}))[h]||[])[0]===$&&i[1])&&i[2],s=a&&d.childNodes[a];s=++a&&s&&s[c]||(f=a=0)||l.pop();)if(1===s.nodeType&&++f&&s===e){o[h]=[$,a,f];break}}else if(p&&(f=a=(i=(o=(r=(s=e)[C]||(s[C]={}))[s.uniqueID]||(r[s.uniqueID]={}))[h]||[])[0]===$&&i[1]),!1===f)for(;(s=++a&&s&&s[c]||(f=a=0)||l.pop())&&((w?s.nodeName.toLowerCase()!==u:1!==s.nodeType)||!++f||(p&&((o=(r=s[C]||(s[C]={}))[s.uniqueID]||(r[s.uniqueID]={}))[h]=[$,f]),s!==e)););return(f-=g)===v||f%v==0&&0<=f/v}}},PSEUDO:function(e,r){var t,s=b.pseudos[e]||b.setFilters[e.toLowerCase()]||re.error("unsupported pseudo: "+e);return s[C]?s(r):1<s.length?(t=[e,e,"",r],b.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,t){for(var n,i=s(e,r),o=i.length;o--;)e[n=q(e,i[o])]=!(t[n]=i[o])}):function(e){return s(e,0,t)}):s}},pseudos:{not:ae(function(e){var i=[],o=[],a=p(e.replace(B,"$1"));return a[C]?ae(function(e,t,n,i){for(var o,r=a(e,null,i,[]),s=e.length;s--;)(o=r[s])&&(e[s]=!(t[s]=o))}):function(e,t,n){return i[0]=e,a(i,null,n,o),i[0]=null,!o.pop()}}),has:ae(function(t){return function(e){return 0<re(t,e).length}}),contains:ae(function(t){return t=t.replace(te,u),function(e){return-1<(e.textContent||e.innerText||r(e)).indexOf(t)}}),lang:ae(function(n){return V.test(n||"")||re.error("unsupported lang: "+n),n=n.replace(te,u).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===s},focus:function(e){return e===k.activeElement&&(!k.hasFocus||k.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ue(!1),disabled:ue(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(e=e.getAttribute("type"))||"text"===e.toLowerCase())},first:pe(function(){return[0]}),last:pe(function(e,t){return[t-1]}),eq:pe(function(e,t,n){return[n<0?n+t:n]}),even:pe(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:pe(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:pe(function(e,t,n){for(var i=n<0?n+t:n;0<=--i;)e.push(i);return e}),gt:pe(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=function(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}(e);function he(){}function ve(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function ge(s,e,t){var a=e.dir,l=e.next,c=l||a,d=t&&"parentNode"===c,u=w++;return e.first?function(e,t,n){for(;e=e[a];)if(1===e.nodeType||d)return s(e,t,n);return!1}:function(e,t,n){var i,o,r=[$,u];if(n){for(;e=e[a];)if((1===e.nodeType||d)&&s(e,t,n))return!0}else for(;e=e[a];)if(1===e.nodeType||d)if(i=(o=e[C]||(e[C]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[a]||e;else{if((o=i[c])&&o[0]===$&&o[1]===u)return r[2]=o[2];if((i[c]=r)[2]=s(e,t,n))return!0}return!1}}function ye(o){return 1<o.length?function(e,t,n){for(var i=o.length;i--;)if(!o[i](e,t,n))return!1;return!0}:o[0]}function me(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),c&&t.push(a)));return s}function we(f,h,v,g,y,e){return g&&!g[C]&&(g=we(g)),y&&!y[C]&&(y=we(y,e)),ae(function(e,t,n,i){var o,r,s,a=[],l=[],c=t.length,d=e||function(e,t,n){for(var i=0,o=t.length;i<o;i++)re(e,t[i],n);return n}(h||"*",n.nodeType?[n]:n,[]),u=!f||!e&&h?d:me(d,a,f,n,i),p=v?y||(e?f:c||g)?[]:t:u;if(v&&v(u,p,n,i),g)for(o=me(p,l),g(o,[],n,i),r=o.length;r--;)(s=o[r])&&(p[l[r]]=!(u[l[r]]=s));if(e){if(y||f){if(y){for(o=[],r=p.length;r--;)(s=p[r])&&o.push(u[r]=s);y(null,p=[],o,i)}for(r=p.length;r--;)(s=p[r])&&-1<(o=y?q(e,s):a[r])&&(e[o]=!(t[o]=s))}}else p=me(p===t?p.splice(c,p.length):p),y?y(null,t,p,i):L.apply(t,p)})}function be(g,y){function e(e,t,n,i,o){var r,s,a,l=0,c="0",d=e&&[],u=[],p=x,f=e||w&&b.find.TAG("*",o),h=$+=null==p?1:Math.random()||.1,v=f.length;for(o&&(x=t===k||t||o);c!==v&&null!=(r=f[c]);c++){if(w&&r){for(s=0,t||r.ownerDocument===k||(T(r),n=!S);a=g[s++];)if(a(r,t||k,n)){i.push(r);break}o&&($=h)}m&&((r=!a&&r)&&l--,e&&d.push(r))}if(l+=c,m&&c!==l){for(s=0;a=y[s++];)a(d,u,t,n);if(e){if(0<l)for(;c--;)d[c]||u[c]||(u[c]=H.call(i));u=me(u)}L.apply(i,u),o&&!e&&0<u.length&&1<l+y.length&&re.uniqueSort(i)}return o&&($=h,x=p),d}var m=0<y.length,w=0<g.length;return m?ae(e):e}return he.prototype=b.filters=b.pseudos,b.setFilters=new he,h=re.tokenize=function(e,t){var n,i,o,r,s,a,l,c=E[e+" "];if(c)return t?0:c.slice(0);for(s=e,a=[],l=b.preFilter;s;){for(r in n&&!(i=U.exec(s))||(i&&(s=s.slice(i[0].length)||s),a.push(o=[])),n=!1,(i=X.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length)),b.filter)!(i=G[r].exec(s))||l[r]&&!(i=l[r](i))||(n=i.shift(),o.push({value:n,type:r,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?re.error(e):E(e,a).slice(0)},p=re.compile=function(e,t){var n,i=[],o=[],r=D[e+" "];if(!r){for(n=(t=t||h(e)).length;n--;)((r=function e(t){for(var i,n,o,r=t.length,s=b.relative[t[0].type],a=s||b.relative[" "],l=s?1:0,c=ge(function(e){return e===i},a,!0),d=ge(function(e){return-1<q(i,e)},a,!0),u=[function(e,t,n){return n=!s&&(n||t!==x)||((i=t).nodeType?c:d)(e,t,n),i=null,n}];l<r;l++)if(n=b.relative[t[l].type])u=[ge(ye(u),n)];else{if((n=b.filter[t[l].type].apply(null,t[l].matches))[C]){for(o=++l;o<r&&!b.relative[t[o].type];o++);return we(1<l&&ye(u),1<l&&ve(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace(B,"$1"),n,l<o&&e(t.slice(l,o)),o<r&&e(t=t.slice(o)),o<r&&ve(t))}u.push(n)}return ye(u)}(t[n]))[C]?i:o).push(r);(r=D(e,be(o,i))).selector=e}return r},v=re.select=function(e,t,n,i){var o,r,s,a,l,c="function"==typeof e&&e,d=!i&&h(e=c.selector||e);if(n=n||[],1===d.length){if(2<(r=d[0]=d[0].slice(0)).length&&"ID"===(s=r[0]).type&&9===t.nodeType&&S&&b.relative[r[1].type]){if(!(t=(b.find.ID(s.matches[0].replace(te,u),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=G.needsContext.test(e)?0:r.length;o--&&(s=r[o],!b.relative[a=s.type]);)if((l=b.find[a])&&(i=l(s.matches[0].replace(te,u),ee.test(r[0].type)&&fe(t.parentNode)||t))){if(r.splice(o,1),!(e=i.length&&ve(r)))return L.apply(n,i),n;break}}return(c||p(e,d))(i,t,!S,n,!t||ee.test(e)&&fe(t.parentNode)||t),n},f.sortStable=C.split("").sort(j).join("")===C,f.detectDuplicates=!!c,T(),f.sortDetached=le(function(e){return 1&e.compareDocumentPosition(k.createElement("fieldset"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ce("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),f.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ce("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ce(M,function(e,t,n){if(!n)return!0===e[t]?t.toLowerCase():(t=e.getAttributeNode(t))&&t.specified?t.value:null}),re}(T);S.find=f,S.expr=f.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=f.uniqueSort,S.text=f.getText,S.isXMLDoc=f.isXML,S.contains=f.contains,S.escapeSelector=f.escape;function x(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&S(e).is(n))break;i.push(e)}return i}function C(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}var $=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var E=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,i){return w(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==i}):n.nodeType?S.grep(e,function(e){return e===n!==i}):"string"!=typeof n?S.grep(e,function(e){return-1<o.call(n,e)!==i}):S.filter(n,e,i)}S.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?S.find.matchesSelector(i,e)?[i]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<i;t++)if(S.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)S.find(e,o[t],n);return 1<i?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&$.test(e)?S(e):e||[],!1).length}});var j,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){if(!e)return this;if(n=n||j,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):w(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this);if(!(i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:N.exec(e))||!i[1]&&t)return(!t||t.jquery?t||n:this.constructor(t)).find(e);if(i[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:k,!0)),E.test(i[1])&&S.isPlainObject(t))for(var i in t)w(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(e=k.getElementById(i[2]))&&(this[0]=e,this.length=1),this}).prototype=S.fn,j=S(k);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function L(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,o=this.length,r=[],s="string"!=typeof e&&S(e);if(!$.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(1<r.length?S.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?o.call(S(e),this[0]):o.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){e=e.parentNode;return e&&11!==e.nodeType?e:null},parents:function(e){return x(e,"parentNode")},parentsUntil:function(e,t,n){return x(e,"parentNode",n)},next:function(e){return L(e,"nextSibling")},prev:function(e){return L(e,"previousSibling")},nextAll:function(e){return x(e,"nextSibling")},prevAll:function(e){return x(e,"previousSibling")},nextUntil:function(e,t,n){return x(e,"nextSibling",n)},prevUntil:function(e,t,n){return x(e,"previousSibling",n)},siblings:function(e){return C((e.parentNode||{}).firstChild,e)},children:function(e){return C(e.firstChild)},contents:function(e){return A(e,"iframe")?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(i,o){S.fn[i]=function(e,t){var n=S.map(this,o,e);return"Until"!==i.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(O[i]||S.uniqueSort(n),H.test(i)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function q(e){return e}function M(e){throw e}function I(e,t,n,i){var o;try{e&&w(o=e.promise)?o.call(e).done(t).fail(n):e&&w(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(i){var e,n;i="string"==typeof i?(e=i,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},i);function o(){for(a=a||i.once,s=r=!0;c.length;d=-1)for(t=c.shift();++d<l.length;)!1===l[d].apply(t[0],t[1])&&i.stopOnFalse&&(d=l.length,t=!1);i.memory||(t=!1),r=!1,a&&(l=t?[]:"")}var r,t,s,a,l=[],c=[],d=-1,u={add:function(){return l&&(t&&!r&&(d=l.length-1,c.push(t)),function n(e){S.each(e,function(e,t){w(t)?i.unique&&u.has(t)||l.push(t):t&&t.length&&"string"!==h(t)&&n(t)})}(arguments),t&&!r&&o()),this},remove:function(){return S.each(arguments,function(e,t){for(var n;-1<(n=S.inArray(t,l,n));)l.splice(n,1),n<=d&&d--}),this},has:function(e){return e?-1<S.inArray(e,l):0<l.length},empty:function(){return l=l&&[],this},disable:function(){return a=c=[],l=t="",this},disabled:function(){return!l},lock:function(){return a=c=[],t||r||(l=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],c.push(t),r||o()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!s}};return u},S.extend({Deferred:function(e){var r=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],o="pending",s={state:function(){return o},always:function(){return a.done(arguments).fail(arguments),this},catch:function(e){return s.then(null,e)},pipe:function(){var o=arguments;return S.Deferred(function(i){S.each(r,function(e,t){var n=w(o[t[4]])&&o[t[4]];a[t[1]](function(){var e=n&&n.apply(this,arguments);e&&w(e.promise)?e.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[t[0]+"With"](this,n?[e]:arguments)})}),o=null}).promise()},then:function(t,n,i){var l=0;function c(o,r,s,a){return function(){function e(){var e,t;if(!(o<l)){if((e=s.apply(n,i))===r.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,w(t)?a?t.call(e,c(l,r,q,a),c(l,r,M,a)):(l++,t.call(e,c(l,r,q,a),c(l,r,M,a),c(l,r,q,r.notifyWith))):(s!==q&&(n=void 0,i=[e]),(a||r.resolveWith)(n,i))}}var n=this,i=arguments,t=a?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),l<=o+1&&(s!==M&&(n=void 0,i=[e]),r.rejectWith(n,i))}};o?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),T.setTimeout(t))}}return S.Deferred(function(e){r[0][3].add(c(0,e,w(i)?i:q,e.notifyWith)),r[1][3].add(c(0,e,w(t)?t:q)),r[2][3].add(c(0,e,w(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,s):s}},a={};return S.each(r,function(e,t){var n=t[2],i=t[5];s[t[1]]=n.add,i&&n.add(function(){o=i},r[3-e][2].disable,r[3-e][3].disable,r[0][2].lock,r[0][3].lock),n.add(t[3].fire),a[t[0]]=function(){return a[t[0]+"With"](this===a?void 0:this,arguments),this},a[t[0]+"With"]=n.fireWith}),s.promise(a),e&&e.call(a,a),a},when:function(e){function t(t){return function(e){o[t]=this,r[t]=1<arguments.length?a.call(arguments):e,--n||s.resolveWith(o,r)}}var n=arguments.length,i=n,o=Array(i),r=a.call(arguments),s=S.Deferred();if(n<=1&&(I(e,s.done(t(i)).resolve,s.reject,!n),"pending"===s.state()||w(r[i]&&r[i].then)))return s.then();for(;i--;)I(r[i],t(i),s.reject);return s.promise()}});var z=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){T.console&&T.console.warn&&e&&z.test(e.name)&&T.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){T.setTimeout(function(){throw e})};var W=S.Deferred();function R(){k.removeEventListener("DOMContentLoaded",R),T.removeEventListener("load",R),S.ready()}S.fn.ready=function(e){return W.then(e).catch(function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||((S.isReady=!0)!==e&&0<--S.readyWait||W.resolveWith(k,[S]))}}),S.ready.then=W.then,"complete"===k.readyState||"loading"!==k.readyState&&!k.documentElement.doScroll?T.setTimeout(S.ready):(k.addEventListener("DOMContentLoaded",R),T.addEventListener("load",R));var F=function(e,t,n,i,o,r,s){var a=0,l=e.length,c=null==n;if("object"===h(n))for(a in o=!0,n)F(e,t,a,n[a],!0,r,s);else if(void 0!==i&&(o=!0,w(i)||(s=!0),c&&(t=s?(t.call(e,i),null):(c=t,function(e,t,n){return c.call(S(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:c?t.call(e):l?t(e[0],n):r},B=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function _(e){return e.replace(B,"ms-").replace(U,X)}function Y(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}function V(){this.expando=S.expando+V.uid++}V.uid=1,V.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[_(t)]=n;else for(i in t)o[_(i)]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][_(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(_):(t=_(t))in i?[t]:t.match(P)||[]).length;for(;n--;)delete i[t[n]]}void 0!==t&&!S.isEmptyObject(i)||(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){e=e[this.expando];return void 0!==e&&!S.isEmptyObject(e)}};var G=new V,Q=new V,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var i,o;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===(o=n)||"false"!==o&&("null"===o?null:o===+o+""?+o:J.test(o)?JSON.parse(o):o)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||G.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return G.access(e,t,n)},_removeData:function(e,t){G.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,i,o,r=this[0],s=r&&r.attributes;if(void 0!==n)return"object"==typeof n?this.each(function(){Q.set(this,n)}):F(this,function(e){var t;if(r&&void 0===e){if(void 0!==(t=Q.get(r,n)))return t;if(void 0!==(t=Z(r,n)))return t}else this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(o=Q.get(r),1===r.nodeType&&!G.get(r,"hasDataAttrs"))){for(t=s.length;t--;)s[t]&&0===(i=s[t].name).indexOf("data-")&&(i=_(i.slice(5)),Z(r,i,o[i]));G.set(r,"hasDataAttrs",!0)}return o},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=G.get(e,t),n&&(!i||Array.isArray(n)?i=G.access(e,t,S.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),i=n.length,o=n.shift(),r=S._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,function(){S.dequeue(e,t)},r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return G.get(e,n)||G.access(e,n,{empty:S.Callbacks("once memory").add(function(){G.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){function n(){--o||r.resolveWith(s,[s])}var i,o=1,r=S.Deferred(),s=this,a=this.length;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(i=G.get(s[a],e+"queueHooks"))&&i.empty&&(o++,i.empty.add(n));return n(),r.promise(t)}});function ee(e,t,n,i){var o,r={};for(o in t)r[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,i||[]),t)e.style[o]=r[o];return i}var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),ie=["Top","Right","Bottom","Left"],oe=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&S.contains(e.ownerDocument,e)&&"none"===S.css(e,"display")};function re(e,t,n,i){var o,r,s=20,a=i?function(){return i.cur()}:function(){return S.css(e,t,"")},l=a(),c=n&&n[3]||(S.cssNumber[t]?"":"px"),d=(S.cssNumber[t]||"px"!==c&&+l)&&ne.exec(S.css(e,t));if(d&&d[3]!==c){for(l/=2,c=c||d[3],d=+l||1;s--;)S.style(e,t,d+c),(1-r)*(1-(r=a()/l||.5))<=0&&(s=0),d/=r;d*=2,S.style(e,t,d+c),n=n||[]}return n&&(d=+d||+l||0,o=n[1]?d+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=d,i.end=o)),o}var se={};function ae(e,t){for(var n,i,o,r,s,a=[],l=0,c=e.length;l<c;l++)(i=e[l]).style&&(n=i.style.display,t?("none"===n&&(a[l]=G.get(i,"display")||null,a[l]||(i.style.display="")),""===i.style.display&&oe(i)&&(a[l]=(s=r=void 0,r=(o=i).ownerDocument,s=o.nodeName,(o=se[s])||(r=r.body.appendChild(r.createElement(s)),o=S.css(r,"display"),r.parentNode.removeChild(r),"none"===o&&(o="block"),se[s]=o)))):"none"!==n&&(a[l]="none",G.set(i,"display",n)));for(l=0;l<c;l++)null!=a[l]&&(e[l].style.display=a[l]);return e}S.fn.extend({show:function(){return ae(this,!0)},hide:function(){return ae(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){oe(this)?S(this).show():S(this).hide()})}});var le=/^(?:checkbox|radio)$/i,ce=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,de=/^$|^module$|\/(?:java|ecma)script/i,ue={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function pe(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&A(e,t)?S.merge([e],n):n}function fe(e,t){for(var n=0,i=e.length;n<i;n++)G.set(e[n],"globalEval",!t||G.get(t[n],"globalEval"))}ue.optgroup=ue.option,ue.tbody=ue.tfoot=ue.colgroup=ue.caption=ue.thead,ue.th=ue.td;var he=/<|&#?\w+;/;function ve(e,t,n,i,o){for(var r,s,a,l,c,d=t.createDocumentFragment(),u=[],p=0,f=e.length;p<f;p++)if((r=e[p])||0===r)if("object"===h(r))S.merge(u,r.nodeType?[r]:r);else if(he.test(r)){for(s=s||d.appendChild(t.createElement("div")),a=(ce.exec(r)||["",""])[1].toLowerCase(),a=ue[a]||ue._default,s.innerHTML=a[1]+S.htmlPrefilter(r)+a[2],c=a[0];c--;)s=s.lastChild;S.merge(u,s.childNodes),(s=d.firstChild).textContent=""}else u.push(t.createTextNode(r));for(d.textContent="",p=0;r=u[p++];)if(i&&-1<S.inArray(r,i))o&&o.push(r);else if(l=S.contains(r.ownerDocument,r),s=pe(d.appendChild(r),"script"),l&&fe(s),n)for(c=0;r=s[c++];)de.test(r.type||"")&&n.push(r);return d}t=k.createDocumentFragment().appendChild(k.createElement("div")),(f=k.createElement("input")).setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),t.appendChild(f),m.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue;var ge=k.documentElement,ye=/^key/,me=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,we=/^([^.]*)(?:\.(.+)|)/;function be(){return!0}function xe(){return!1}function Te(){try{return k.activeElement}catch(e){}}function ke(e,t,n,i,o,r){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)ke(e,a,n,i,t[a],r);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=xe;else if(!o)return e;return 1===r&&(s=o,(o=function(e){return S().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=S.guid++)),e.each(function(){S.event.add(this,t,o,i,n)})}S.event={global:{},add:function(t,e,n,i,o){var r,s,a,l,c,d,u,p,f,h=G.get(t);if(h)for(n.handler&&(n=(r=n).handler,o=r.selector),o&&S.find.matchesSelector(ge,o),n.guid||(n.guid=S.guid++),(a=h.events)||(a=h.events={}),(s=h.handle)||(s=h.handle=function(e){return void 0!==S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;l--;)u=f=(c=we.exec(e[l])||[])[1],p=(c[2]||"").split(".").sort(),u&&(d=S.event.special[u]||{},u=(o?d.delegateType:d.bindType)||u,d=S.event.special[u]||{},c=S.extend({type:u,origType:f,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&S.expr.match.needsContext.test(o),namespace:p.join(".")},r),(f=a[u])||((f=a[u]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(t,i,p,s)||t.addEventListener&&t.addEventListener(u,s)),d.add&&(d.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),o?f.splice(f.delegateCount++,0,c):f.push(c),S.event.global[u]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,c,d,u,p,f,h,v,g=G.hasData(e)&&G.get(e);if(g&&(l=g.events)){for(c=(t=(t||"").match(P)||[""]).length;c--;)if(f=v=(a=we.exec(t[c])||[])[1],h=(a[2]||"").split(".").sort(),f){for(u=S.event.special[f]||{},p=l[f=(i?u.delegateType:u.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=p.length;r--;)d=p[r],!o&&v!==d.origType||n&&n.guid!==d.guid||a&&!a.test(d.namespace)||i&&i!==d.selector&&("**"!==i||!d.selector)||(p.splice(r,1),d.selector&&p.delegateCount--,u.remove&&u.remove.call(e,d));s&&!p.length&&(u.teardown&&!1!==u.teardown.call(e,h,g.handle)||S.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)S.event.remove(e,f+t[c],n,i,!0);S.isEmptyObject(l)&&G.remove(e,"handle events")}},dispatch:function(e){var t,n,i,o,r,s=S.event.fix(e),a=new Array(arguments.length),l=(G.get(this,"events")||{})[s.type]||[],e=S.event.special[s.type]||{};for(a[0]=s,t=1;t<arguments.length;t++)a[t]=arguments[t];if(s.delegateTarget=this,!e.preDispatch||!1!==e.preDispatch.call(this,s)){for(r=S.event.handlers.call(this,s,l),t=0;(i=r[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(o=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a))&&!1===(s.result=o)&&(s.preventDefault(),s.stopPropagation()));return e.postDispatch&&e.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,i,o,r,s,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&1<=e.button))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(r=[],s={},n=0;n<l;n++)void 0===s[o=(i=t[n]).selector+" "]&&(s[o]=i.needsContext?-1<S(o,this).index(c):S.find(o,this,null,[c]).length),s[o]&&r.push(i);r.length&&a.push({elem:c,handlers:r})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:w(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Te()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Te()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&A(this,"input"))return this.click(),!1},_default:function(e){return A(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?be:xe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:xe,isPropagationStopped:xe,isImmediatePropagationStopped:xe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=be,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=be,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=be,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&ye.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&me.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,o){S.event.special[e]={delegateType:o,bindType:o,handle:function(e){var t,n=e.relatedTarget,i=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=i.origType,t=i.handler.apply(this,arguments),e.type=o),t}}}),S.fn.extend({on:function(e,t,n,i){return ke(this,e,t,n,i)},one:function(e,t,n,i){return ke(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,S(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=xe),this.each(function(){S.event.remove(this,e,n,t)});for(o in e)this.off(o,t,e[o]);return this}});var Se=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ce=/<script|<style|<link/i,$e=/checked\s*(?:[^=]|=\s*.checked.)/i,Ae=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ee(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function je(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ne(e,t){var n,i,o,r,s,a;if(1===t.nodeType){if(G.hasData(e)&&(r=G.access(e),s=G.set(t,r),a=r.events))for(o in delete s.handle,s.events={},a)for(n=0,i=a[o].length;n<i;n++)S.event.add(t,o,a[o][n]);Q.hasData(e)&&(e=Q.access(e),e=S.extend({},e),Q.set(t,e))}}function He(n,i,o,r){i=g.apply([],i);var e,t,s,a,l,c,d=0,u=n.length,p=u-1,f=i[0],h=w(f);if(h||1<u&&"string"==typeof f&&!m.checkClone&&$e.test(f))return n.each(function(e){var t=n.eq(e);h&&(i[0]=f.call(this,e,t.html())),He(t,i,o,r)});if(u&&(t=(e=ve(i,n[0].ownerDocument,!1,n,r)).firstChild,1===e.childNodes.length&&(e=t),t||r)){for(a=(s=S.map(pe(e,"script"),De)).length;d<u;d++)l=e,d!==p&&(l=S.clone(l,!0,!0),a&&S.merge(s,pe(l,"script"))),o.call(n[d],l,d);if(a)for(c=s[s.length-1].ownerDocument,S.map(s,je),d=0;d<a;d++)l=s[d],de.test(l.type||"")&&!G.access(l,"globalEval")&&S.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?S._evalUrl&&S._evalUrl(l.src):b(l.textContent.replace(Ae,""),c,l))}return n}function Oe(e,t,n){for(var i,o=t?S.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||S.cleanData(pe(i)),i.parentNode&&(n&&S.contains(i.ownerDocument,i)&&fe(pe(i,"script")),i.parentNode.removeChild(i));return e}S.extend({htmlPrefilter:function(e){return e.replace(Se,"<$1></$2>")},clone:function(e,t,n){var i,o,r,s,a,l,c,d=e.cloneNode(!0),u=S.contains(e.ownerDocument,e);if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(s=pe(d),i=0,o=(r=pe(e)).length;i<o;i++)a=r[i],l=s[i],c=void 0,"input"===(c=l.nodeName.toLowerCase())&&le.test(a.type)?l.checked=a.checked:"input"!==c&&"textarea"!==c||(l.defaultValue=a.defaultValue);if(t)if(n)for(r=r||pe(e),s=s||pe(d),i=0,o=r.length;i<o;i++)Ne(r[i],s[i]);else Ne(e,d);return 0<(s=pe(d,"script")).length&&fe(s,!u&&pe(e,"script")),d},cleanData:function(e){for(var t,n,i,o=S.event.special,r=0;void 0!==(n=e[r]);r++)if(Y(n)){if(t=n[G.expando]){if(t.events)for(i in t.events)o[i]?S.event.remove(n,i):S.removeEvent(n,i,t.handle);n[G.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return F(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ee(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=Ee(this,e)).insertBefore(e,t.firstChild)})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(pe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return F(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ce.test(e)&&!ue[(ce.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(pe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(pe(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,s){S.fn[e]=function(e){for(var t,n=[],i=S(e),o=i.length-1,r=0;r<=o;r++)t=r===o?this:this.clone(!0),S(i[r])[s](t),l.apply(n,t.get());return this.pushStack(n)}});var Le,Pe,qe,Me,Ie,ze,We,Re=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=T),t.getComputedStyle(e)},Be=new RegExp(ie.join("|"),"i");function Ue(){var e;We&&(ze.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",We.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ge.appendChild(ze).appendChild(We),e=T.getComputedStyle(We),Le="1%"!==e.top,Ie=12===Xe(e.marginLeft),We.style.right="60%",Me=36===Xe(e.right),Pe=36===Xe(e.width),We.style.position="absolute",qe=36===We.offsetWidth||"absolute",ge.removeChild(ze),We=null)}function Xe(e){return Math.round(parseFloat(e))}function _e(e,t,n){var i,o,r=e.style;return(n=n||Fe(e))&&(""!==(o=n.getPropertyValue(t)||n[t])||S.contains(e.ownerDocument,e)||(o=S.style(e,t)),!m.pixelBoxStyles()&&Re.test(o)&&Be.test(t)&&(i=r.width,e=r.minWidth,t=r.maxWidth,r.minWidth=r.maxWidth=r.width=o,o=n.width,r.width=i,r.minWidth=e,r.maxWidth=t)),void 0!==o?o+"":o}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}ze=k.createElement("div"),(We=k.createElement("div")).style&&(We.style.backgroundClip="content-box",We.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===We.style.backgroundClip,S.extend(m,{boxSizingReliable:function(){return Ue(),Pe},pixelBoxStyles:function(){return Ue(),Me},pixelPosition:function(){return Ue(),Le},reliableMarginLeft:function(){return Ue(),Ie},scrollboxSize:function(){return Ue(),qe}}));var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Qe={position:"absolute",visibility:"hidden",display:"block"},Je={letterSpacing:"0",fontWeight:"400"},Ke=["Webkit","Moz","ms"],Ze=k.createElement("div").style;function et(e){return S.cssProps[e]||(S.cssProps[e]=function(e){if(e in Ze)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Ke.length;n--;)if((e=Ke[n]+t)in Ze)return e}(e)||e)}function tt(e,t,n){var i=ne.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function nt(e,t,n,i,o,r){var s="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=S.css(e,n+ie[s],!0,o)),i?("content"===n&&(l-=S.css(e,"padding"+ie[s],!0,o)),"margin"!==n&&(l-=S.css(e,"border"+ie[s]+"Width",!0,o))):(l+=S.css(e,"padding"+ie[s],!0,o),"padding"!==n?l+=S.css(e,"border"+ie[s]+"Width",!0,o):a+=S.css(e,"border"+ie[s]+"Width",!0,o));return!i&&0<=r&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-a-.5))),l}function it(e,t,n){var i=Fe(e),o=_e(e,t,i),r="border-box"===S.css(e,"boxSizing",!1,i),s=r;if(Re.test(o)){if(!n)return o;o="auto"}return s=s&&(m.boxSizingReliable()||o===e.style[t]),"auto"!==o&&(parseFloat(o)||"inline"!==S.css(e,"display",!1,i))||(o=e["offset"+t[0].toUpperCase()+t.slice(1)],s=!0),(o=parseFloat(o)||0)+nt(e,t,n||(r?"border":"content"),s,i,o)+"px"}function ot(e,t,n,i,o){return new ot.prototype.init(e,t,n,i,o)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){e=_e(e,"opacity");return""===e?"1":e}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=_(t),l=Ge.test(t),c=e.style;if(l||(t=et(a)),s=S.cssHooks[t]||S.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:c[t];"string"==(r=typeof n)&&(o=ne.exec(n))&&o[1]&&(n=re(e,t,o),r="number"),null!=n&&n==n&&("number"===r&&(n+=o&&o[3]||(S.cssNumber[a]?"":"px")),m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var o,r=_(t);return Ge.test(t)||(t=et(r)),(r=S.cssHooks[t]||S.cssHooks[r])&&"get"in r&&(o=r.get(e,!0,n)),void 0===o&&(o=_e(e,t,i)),"normal"===o&&t in Je&&(o=Je[t]),""===n||n?(t=parseFloat(o),!0===n||isFinite(t)?t||0:o):o}}),S.each(["height","width"],function(e,s){S.cssHooks[s]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?it(e,s,n):ee(e,Qe,function(){return it(e,s,n)})},set:function(e,t,n){var i,o=Fe(e),r="border-box"===S.css(e,"boxSizing",!1,o),n=n&&nt(e,s,n,r,o);return r&&m.scrollboxSize()===o.position&&(n-=Math.ceil(e["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(o[s])-nt(e,s,"border",!1,o)-.5)),n&&(i=ne.exec(t))&&"px"!==(i[3]||"px")&&(e.style[s]=t,t=S.css(e,s)),tt(0,t,n)}}}),S.cssHooks.marginLeft=Ye(m.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ee(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(o,r){S.cssHooks[o+r]={expand:function(e){for(var t=0,n={},i="string"==typeof e?e.split(" "):[e];t<4;t++)n[o+ie[t]+r]=i[t]||i[t-2]||i[0];return n}},"margin"!==o&&(S.cssHooks[o+r].set=tt)}),S.fn.extend({css:function(e,t){return F(this,function(e,t,n){var i,o,r={},s=0;if(Array.isArray(t)){for(i=Fe(e),o=t.length;s<o;s++)r[t[s]]=S.css(e,t[s],!1,i);return r}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),(S.Tween=ot).prototype={constructor:ot,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(S.cssNumber[n]?"":"px")},cur:function(){var e=ot.propHooks[this.prop];return(e&&e.get?e:ot.propHooks._default).get(this)},run:function(e){var t,n=ot.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),(n&&n.set?n:ot.propHooks._default).set(this),this}},ot.prototype.init.prototype=ot.prototype,ot.propHooks={_default:{get:function(e){return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(e=S.css(e.elem,e.prop,""))&&"auto"!==e?e:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[S.cssProps[e.prop]]&&!S.cssHooks[e.prop]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}},ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=ot.prototype.init,S.fx.step={};var rt,st,at=/^(?:toggle|show|hide)$/,lt=/queueHooks$/;function ct(){st&&(!1===k.hidden&&T.requestAnimationFrame?T.requestAnimationFrame(ct):T.setTimeout(ct,S.fx.interval),S.fx.tick())}function dt(){return T.setTimeout(function(){rt=void 0}),rt=Date.now()}function ut(e,t){var n,i=0,o={height:e};for(t=t?1:0;i<4;i+=2-t)o["margin"+(n=ie[i])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function pt(e,t,n){for(var i,o=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,t,e))return i}function ft(o,e,t){var n,r,i=0,s=ft.prefilters.length,a=S.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var e=rt||dt(),e=Math.max(0,c.startTime+c.duration-e),t=1-(e/c.duration||0),n=0,i=c.tweens.length;n<i;n++)c.tweens[n].run(t);return a.notifyWith(o,[c,t,e]),t<1&&i?e:(i||a.notifyWith(o,[c,1,0]),a.resolveWith(o,[c]),!1)},c=a.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||dt(),duration:t.duration,tweens:[],createTween:function(e,t){e=S.Tween(o,c.opts,e,t,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(e),e},stop:function(e){var t=0,n=e?c.tweens.length:0;if(r)return this;for(r=!0;t<n;t++)c.tweens[t].run(1);return e?(a.notifyWith(o,[c,1,0]),a.resolveWith(o,[c,e])):a.rejectWith(o,[c,e]),this}}),d=c.props;for(function(e,t){var n,i,o,r,s;for(n in e)if(i=_(n),o=t[i],r=e[n],Array.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),(s=S.cssHooks[i])&&"expand"in s)for(n in r=s.expand(r),delete e[i],r)n in e||(e[n]=r[n],t[n]=o);else t[i]=o}(d,c.opts.specialEasing);i<s;i++)if(n=ft.prefilters[i].call(c,o,d,c.opts))return w(n.stop)&&(S._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return S.map(d,pt,c),w(c.opts.start)&&c.opts.start.call(o,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),S.fx.timer(S.extend(l,{elem:o,anim:c,queue:c.opts.queue})),c}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return re(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){for(var n,i=0,o=(e=w(e)?(t=e,["*"]):e.match(P)).length;i<o;i++)n=e[i],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,o,r,s,a,l,c,d="width"in t||"height"in t,u=this,p={},f=e.style,h=e.nodeType&&oe(e),v=G.get(e,"fxshow");for(i in n.queue||(null==(s=S._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,S.queue(e,"fx").length||s.empty.fire()})})),t)if(o=t[i],at.test(o)){if(delete t[i],r=r||"toggle"===o,o===(h?"hide":"show")){if("show"!==o||!v||void 0===v[i])continue;h=!0}p[i]=v&&v[i]||S.style(e,i)}if((l=!S.isEmptyObject(t))||!S.isEmptyObject(p))for(i in d&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(c=v&&v.display)&&(c=G.get(e,"display")),"none"===(d=S.css(e,"display"))&&(c?d=c:(ae([e],!0),c=e.style.display||c,d=S.css(e,"display"),ae([e]))),("inline"===d||"inline-block"===d&&null!=c)&&"none"===S.css(e,"float")&&(l||(u.done(function(){f.display=c}),null==c&&(d=f.display,c="none"===d?"":d)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",u.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]})),l=!1,p)l||(v?"hidden"in v&&(h=v.hidden):v=G.access(e,"fxshow",{display:c}),r&&(v.hidden=!h),h&&ae([e],!0),u.done(function(){for(i in h||ae([e]),G.remove(e,"fxshow"),p)S.style(e,i,p[i])})),l=pt(h?v[i]:0,i,u),i in v||(v[i]=l.start,h&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var i=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||w(e)&&e,duration:e,easing:n&&t||t&&!w(t)&&t};return S.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in S.fx.speeds?i.duration=S.fx.speeds[i.duration]:i.duration=S.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){w(i.old)&&i.old.call(this),i.queue&&S.dequeue(this,i.queue)},i},S.fn.extend({fadeTo:function(e,t,n,i){return this.filter(oe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(t,e,n,i){var o=S.isEmptyObject(t),r=S.speed(e,n,i),i=function(){var e=ft(this,S.extend({},t),r);(o||G.get(this,"finish"))&&e.stop(!0)};return i.finish=i,o||!1===r.queue?this.each(i):this.queue(r.queue,i)},stop:function(o,e,r){function s(e){var t=e.stop;delete e.stop,t(r)}return"string"!=typeof o&&(r=e,e=o,o=void 0),e&&!1!==o&&this.queue(o||"fx",[]),this.each(function(){var e=!0,t=null!=o&&o+"queueHooks",n=S.timers,i=G.get(this);if(t)i[t]&&i[t].stop&&s(i[t]);else for(t in i)i[t]&&i[t].stop&&lt.test(t)&&s(i[t]);for(t=n.length;t--;)n[t].elem!==this||null!=o&&n[t].queue!==o||(n[t].anim.stop(r),e=!1,n.splice(t,1));!e&&r||S.dequeue(this,o)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var e,t=G.get(this),n=t[s+"queue"],i=t[s+"queueHooks"],o=S.timers,r=n?n.length:0;for(t.finish=!0,S.queue(this,s,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===s&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<r;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,i){var o=S.fn[i];S.fn[i]=function(e,t,n){return null==e||"boolean"==typeof e?o.apply(this,arguments):this.animate(ut(i,!0),e,t,n)}}),S.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){S.fn[e]=function(e,t,n){return this.animate(i,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),rt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){st||(st=!0,ct())},S.fx.stop=function(){st=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(i,e){return i=S.fx&&S.fx.speeds[i]||i,e=e||"fx",this.queue(e,function(e,t){var n=T.setTimeout(e,i);t.stop=function(){T.clearTimeout(n)}})},t=k.createElement("input"),te=k.createElement("select").appendChild(k.createElement("option")),t.type="checkbox",m.checkOn=""!==t.value,m.optSelected=te.selected,(t=k.createElement("input")).value="t",t.type="radio",m.radioValue="t"===t.value;var ht,vt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return F(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===e.getAttribute?S.prop(e,t,n):(1===r&&S.isXMLDoc(e)||(o=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):!(o&&"get"in o&&null!==(i=o.get(e,t)))&&null==(i=S.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,o=t&&t.match(P);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var s=vt[t]||S.find.attr;vt[t]=function(e,t,n){var i,o,r=t.toLowerCase();return n||(o=vt[r],vt[r]=i,i=null!=s(e,t,n)?r:null,vt[r]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(P)||[]).join(" ")}function wt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return F(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&S.isXMLDoc(e)||(t=S.propFix[t]||t,o=S.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(S.propHooks.selected={get:function(e){e=e.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(e){e=e.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,i,o,r,s,a=0;if(w(t))return this.each(function(e){S(this).addClass(t.call(this,e,wt(this)))});if((e=bt(t)).length)for(;n=this[a++];)if(s=wt(n),i=1===n.nodeType&&" "+mt(s)+" "){for(r=0;o=e[r++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");s!==(s=mt(i))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,i,o,r,s,a=0;if(w(t))return this.each(function(e){S(this).removeClass(t.call(this,e,wt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)for(;n=this[a++];)if(s=wt(n),i=1===n.nodeType&&" "+mt(s)+" "){for(r=0;o=e[r++];)for(;-1<i.indexOf(" "+o+" ");)i=i.replace(" "+o+" "," ");s!==(s=mt(i))&&n.setAttribute("class",s)}return this},toggleClass:function(o,t){var r=typeof o,s="string"==r||Array.isArray(o);return"boolean"==typeof t&&s?t?this.addClass(o):this.removeClass(o):w(o)?this.each(function(e){S(this).toggleClass(o.call(this,e,wt(this),t),t)}):this.each(function(){var e,t,n,i;if(s)for(t=0,n=S(this),i=bt(o);e=i[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==o&&"boolean"!=r||((e=wt(this))&&G.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==o&&G.get(this,"__className__")||""))})},hasClass:function(e){for(var t,n=0,i=" "+e+" ";t=this[n++];)if(1===t.nodeType&&-1<(" "+mt(wt(t))+" ").indexOf(i))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(t){var n,e,i,o=this[0];return arguments.length?(i=w(t),this.each(function(e){1===this.nodeType&&(null==(e=i?t.call(this,e,S(this).val()):t)?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=S.map(e,function(e){return null==e?"":e+""})),(n=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&void 0!==n.set(this,e,"value")||(this.value=e))})):o?(n=S.valHooks[o.type]||S.valHooks[o.nodeName.toLowerCase()])&&"get"in n&&void 0!==(e=n.get(o,"value"))?e:"string"==typeof(e=o.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:mt(S.text(e))}},select:{get:function(e){for(var t,n=e.options,i=e.selectedIndex,o="select-one"===e.type,r=o?null:[],s=o?i+1:n.length,a=i<0?s:o?i:0;a<s;a++)if(((t=n[a]).selected||a===i)&&!t.disabled&&(!t.parentNode.disabled||!A(t.parentNode,"optgroup"))){if(t=S(t).val(),o)return t;r.push(t)}return r},set:function(e,t){for(var n,i,o=e.options,r=S.makeArray(t),s=o.length;s--;)((i=o[s]).selected=-1<S.inArray(S.valHooks.option.get(i),r))&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},m.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),m.focusin="onfocusin"in T;function Tt(e){e.stopPropagation()}var kt=/^(?:focusinfocus|focusoutblur)$/;S.extend(S.event,{trigger:function(e,t,n,i){var o,r,s,a,l,c,d,u=[n||k],p=y.call(e,"type")?e.type:e,f=y.call(e,"namespace")?e.namespace.split("."):[],h=d=r=n=n||k;if(3!==n.nodeType&&8!==n.nodeType&&!kt.test(p+S.event.triggered)&&(-1<p.indexOf(".")&&(p=(f=p.split(".")).shift(),f.sort()),a=p.indexOf(":")<0&&"on"+p,(e=e[S.expando]?e:new S.Event(p,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=f.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[p]||{},i||!c.trigger||!1!==c.trigger.apply(n,t))){if(!i&&!c.noBubble&&!v(n)){for(s=c.delegateType||p,kt.test(s+p)||(h=h.parentNode);h;h=h.parentNode)u.push(h),r=h;r===(n.ownerDocument||k)&&u.push(r.defaultView||r.parentWindow||T)}for(o=0;(h=u[o++])&&!e.isPropagationStopped();)d=h,e.type=1<o?s:c.bindType||p,(l=(G.get(h,"events")||{})[e.type]&&G.get(h,"handle"))&&l.apply(h,t),(l=a&&h[a])&&l.apply&&Y(h)&&(e.result=l.apply(h,t),!1===e.result&&e.preventDefault());return e.type=p,i||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(u.pop(),t)||!Y(n)||a&&w(n[p])&&!v(n)&&((r=n[a])&&(n[a]=null),S.event.triggered=p,e.isPropagationStopped()&&d.addEventListener(p,Tt),n[p](),e.isPropagationStopped()&&d.removeEventListener(p,Tt),S.event.triggered=void 0,r&&(n[a]=r)),e.result}},simulate:function(e,t,n){e=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(e,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),m.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,i){function o(e){S.event.simulate(i,e.target,S.event.fix(e))}S.event.special[i]={setup:function(){var e=this.ownerDocument||this,t=G.access(e,i);t||e.addEventListener(n,o,!0),G.access(e,i,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=G.access(e,i)-1;t?G.access(e,i,t):(e.removeEventListener(n,o,!0),G.remove(e,i))}}});var St=T.location,Ct=Date.now(),$t=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new T.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var At=/\[\]$/,Et=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;S.param=function(e,t){function n(e,t){t=w(t)?t():t,o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==t?"":t)}var i,o=[];if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){n(this.name,this.value)});else for(i in e)!function n(i,e,o,r){if(Array.isArray(e))S.each(e,function(e,t){o||At.test(i)?r(i,t):n(i+"["+("object"==typeof t&&null!=t?e:"")+"]",t,o,r)});else if(o||"object"!==h(e))r(i,e);else for(var t in e)n(i+"["+t+"]",e[t],o,r)}(i,e[i],t,n);return o.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!le.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Lt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:GET|HEAD)$/,qt=/^\/\//,Mt={},It={},zt="*/".concat("*"),Wt=k.createElement("a");function Rt(r){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,i=0,o=e.toLowerCase().match(P)||[];if(w(t))for(;n=o[i++];)"+"===n[0]?(n=n.slice(1)||"*",(r[n]=r[n]||[]).unshift(t)):(r[n]=r[n]||[]).push(t)}}function Ft(t,i,o,r){var s={},a=t===It;function l(e){var n;return s[e]=!0,S.each(t[e]||[],function(e,t){t=t(i,o,r);return"string"!=typeof t||a||s[t]?a?!(n=t):void 0:(i.dataTypes.unshift(t),l(t),!1)}),n}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,i,o=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i=i||{})[n]=t[n]);return i&&S.extend(!0,e,i),e}Wt.href=St.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:St.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Rt(Mt),ajaxTransport:Rt(It),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var l,c,d,n,u,i,p,f,o,h=S.ajaxSetup({},t),v=h.context||h,g=h.context&&(v.nodeType||v.jquery)?S(v):S.event,y=S.Deferred(),m=S.Callbacks("once memory"),w=h.statusCode||{},r={},s={},a="canceled",b={readyState:0,getResponseHeader:function(e){var t;if(p){if(!n)for(n={};t=Lt.exec(d);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return p?d:null},setRequestHeader:function(e,t){return null==p&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,r[e]=t),this},overrideMimeType:function(e){return null==p&&(h.mimeType=e),this},statusCode:function(e){if(e)if(p)b.always(e[b.status]);else for(var t in e)w[t]=[w[t],e[t]];return this},abort:function(e){e=e||a;return l&&l.abort(e),x(0,e),this}};if(y.promise(b),h.url=((e||h.url||St.href)+"").replace(qt,St.protocol+"//"),h.type=t.method||t.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(P)||[""],null==h.crossDomain){i=k.createElement("a");try{i.href=h.url,i.href=i.href,h.crossDomain=Wt.protocol+"//"+Wt.host!=i.protocol+"//"+i.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=S.param(h.data,h.traditional)),Ft(Mt,h,t,b),p)return b;for(o in(f=S.event&&h.global)&&0==S.active++&&S.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Pt.test(h.type),c=h.url.replace(Ht,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Nt,"+")):(e=h.url.slice(c.length),h.data&&(h.processData||"string"==typeof h.data)&&(c+=($t.test(c)?"&":"?")+h.data,delete h.data),!1===h.cache&&(c=c.replace(Ot,"$1"),e=($t.test(c)?"&":"?")+"_="+Ct+++e),h.url=c+e),h.ifModified&&(S.lastModified[c]&&b.setRequestHeader("If-Modified-Since",S.lastModified[c]),S.etag[c]&&b.setRequestHeader("If-None-Match",S.etag[c])),(h.data&&h.hasContent&&!1!==h.contentType||t.contentType)&&b.setRequestHeader("Content-Type",h.contentType),b.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+zt+"; q=0.01":""):h.accepts["*"]),h.headers)b.setRequestHeader(o,h.headers[o]);if(h.beforeSend&&(!1===h.beforeSend.call(v,b,h)||p))return b.abort();if(a="abort",m.add(h.complete),b.done(h.success),b.fail(h.error),l=Ft(It,h,t,b)){if(b.readyState=1,f&&g.trigger("ajaxSend",[b,h]),p)return b;h.async&&0<h.timeout&&(u=T.setTimeout(function(){b.abort("timeout")},h.timeout));try{p=!1,l.send(r,x)}catch(e){if(p)throw e;x(-1,e)}}else x(-1,"No Transport");function x(e,t,n,i){var o,r,s,a=t;p||(p=!0,u&&T.clearTimeout(u),l=void 0,d=i||"",b.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s=s||o}r=r||s}if(r)return r!==l[0]&&l.unshift(r),n[r]}(h,b,n)),s=function(e,t,n,i){var o,r,s,a,l,c={},d=e.dataTypes.slice();if(d[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(r=d.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=d.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(s=c[l+" "+r]||c["* "+r]))for(o in c)if((a=o.split(" "))[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[o]:!0!==c[o]&&(r=a[0],d.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}(h,s,b,i),i?(h.ifModified&&((n=b.getResponseHeader("Last-Modified"))&&(S.lastModified[c]=n),(n=b.getResponseHeader("etag"))&&(S.etag[c]=n)),204===e||"HEAD"===h.type?a="nocontent":304===e?a="notmodified":(a=s.state,o=s.data,i=!(r=s.error))):(r=a,!e&&a||(a="error",e<0&&(e=0))),b.status=e,b.statusText=(t||a)+"",i?y.resolveWith(v,[o,a,b]):y.rejectWith(v,[b,a,r]),b.statusCode(w),w=void 0,f&&g.trigger(i?"ajaxSuccess":"ajaxError",[b,h,i?o:r]),m.fireWith(v,[b,a]),f&&(g.trigger("ajaxComplete",[b,h]),--S.active||S.event.trigger("ajaxStop")))}return b},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,o){S[o]=function(e,t,n,i){return w(t)&&(i=i||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:o,dataType:i,data:t,success:n},S.isPlainObject(e)&&e))}}),S._evalUrl=function(e){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},S.fn.extend({wrapAll:function(e){return this[0]&&(w(e)&&(e=e.call(this[0])),e=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return w(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=w(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new T.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=S.ajaxSettings.xhr();m.cors=!!Xt&&"withCredentials"in Xt,m.ajax=Xt=!!Xt,S.ajaxTransport(function(o){var r,s;if(m.cors||Xt&&!o.crossDomain)return{send:function(e,t){var n,i=o.xhr();if(i.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(n in o.xhrFields)i[n]=o.xhrFields[n];for(n in o.mimeType&&i.overrideMimeType&&i.overrideMimeType(o.mimeType),o.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)i.setRequestHeader(n,e[n]);r=function(e){return function(){r&&(r=s=i.onload=i.onerror=i.onabort=i.ontimeout=i.onreadystatechange=null,"abort"===e?i.abort():"error"===e?"number"!=typeof i.status?t(0,"error"):t(i.status,i.statusText):t(Ut[i.status]||i.status,i.statusText,"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},i.onload=r(),s=i.onerror=i.ontimeout=r("error"),void 0!==i.onabort?i.onabort=s:i.onreadystatechange=function(){4===i.readyState&&T.setTimeout(function(){r&&s()})},r=r("abort");try{i.send(o.hasContent&&o.data||null)}catch(e){if(r)throw e}},abort:function(){r&&r()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var i,o;if(n.crossDomain)return{send:function(e,t){i=S("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",o=function(e){i.remove(),o=null,e&&t("error"===e.type?404:200,e.type)}),k.head.appendChild(i[0])},abort:function(){o&&o()}}});var _t=[],Yt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=_t.pop()||S.expando+"_"+Ct++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var i,o,r,s=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=w(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Yt,"$1"+i):!1!==e.jsonp&&(e.url+=($t.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return r||S.error(i+" was not called"),r[0]},e.dataTypes[0]="json",o=T[i],T[i]=function(){r=arguments},n.always(function(){void 0===o?S(T).removeProp(i):T[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,_t.push(i)),r&&w(o)&&o(r[0]),r=o=void 0}),"script"}),m.createHTMLDocument=((t=k.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(m.createHTMLDocument?((i=(t=k.implementation.createHTMLDocument("")).createElement("base")).href=k.location.href,t.head.appendChild(i)):t=k),i=!n&&[],(n=E.exec(e))?[t.createElement(n[1])]:(n=ve([e],t,i),i&&i.length&&S(i).remove(),S.merge([],n.childNodes)));var i},S.fn.load=function(e,t,n){var i,o,r,s=this,a=e.indexOf(" ");return-1<a&&(i=mt(e.slice(a)),e=e.slice(0,a)),w(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),0<s.length&&S.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?S("<div>").append(S.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var i,o,r,s,a=S.css(e,"position"),l=S(e),c={};"static"===a&&(e.style.position="relative"),r=l.offset(),i=S.css(e,"top"),s=S.css(e,"left"),s=("absolute"===a||"fixed"===a)&&-1<(i+s).indexOf("auto")?(o=(a=l.position()).top,a.left):(o=parseFloat(i)||0,parseFloat(s)||0),w(t)&&(t=t.call(e,n,S.extend({},r))),null!=t.top&&(c.top=t.top-r.top+o),null!=t.left&&(c.left=t.left-r.left+s),"using"in t?t.using.call(e,c):l.css(c)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n=this[0];return n?n.getClientRects().length?(e=n.getBoundingClientRect(),n=n.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],o={top:0,left:0};if("fixed"===S.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((o=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),o.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-S.css(i,"marginTop",!0),left:t.left-o.left-S.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===S.css(e,"position");)e=e.offsetParent;return e||ge})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,o){var r="pageYOffset"===o;S.fn[t]=function(e){return F(this,function(e,t,n){var i;return v(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===n?i?i[o]:e[t]:void(i?i.scrollTo(r?i.pageXOffset:n,r?n:i.pageYOffset):e[t]=n)},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Ye(m.pixelPosition,function(e,t){if(t)return t=_e(e,n),Re.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(s,a){S.each({padding:"inner"+s,content:a,"":"outer"+s},function(i,r){S.fn[r]=function(e,t){var n=arguments.length&&(i||"boolean"!=typeof e),o=i||(!0===e||!0===t?"margin":"border");return F(this,function(e,t,n){var i;return v(e)?0===r.indexOf("outer")?e["inner"+s]:e.document.documentElement["client"+s]:9===e.nodeType?(i=e.documentElement,Math.max(e.body["scroll"+s],i["scroll"+s],e.body["offset"+s],i["offset"+s],i["client"+s])):void 0===n?S.css(e,t,o):S.style(e,t,n,o)},a,n?e:void 0,n)}})}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),S.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),S.proxy=function(e,t){var n,i;if("string"==typeof t&&(i=e[t],t=e,e=i),w(e))return n=a.call(arguments,2),(i=function(){return e.apply(t||this,n.concat(a.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=w,S.isWindow=v,S.camelCase=_,S.type=h,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=T.jQuery,Gt=T.$;return S.noConflict=function(e){return T.$===S&&(T.$=Gt),e&&T.jQuery===S&&(T.jQuery=Vt),S},e||(T.jQuery=T.$=S),S}),function(){function t(e,t){return function(){return e.apply(t,arguments)}}var i,e,n,l,o,s=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};function r(){}function a(){this.keys=[],this.values=[]}function c(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}function d(e){null==e&&(e={}),this.scrollCallback=t(this.scrollCallback,this),this.scrollHandler=t(this.scrollHandler,this),this.resetAnimation=t(this.resetAnimation,this),this.start=t(this.start,this),this.scrolled=!0,this.config=this.util().extend(e,this.defaults),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}r.prototype.extend=function(e,t){var n,i;for(n in t)i=t[n],null==e[n]&&(e[n]=i);return e},r.prototype.isMobile=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)},r.prototype.createEvent=function(e,t,n,i){var o;return null==t&&(t=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(e,t,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=e:o.eventName=e,o},r.prototype.emitEvent=function(e,t){return null!=e.dispatchEvent?e.dispatchEvent(t):t in(null!=e)?e[t]():"on"+t in(null!=e)?e["on"+t]():void 0},r.prototype.addEvent=function(e,t,n){return null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n},r.prototype.removeEvent=function(e,t,n){return null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]},r.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},e=r,n=this.WeakMap||this.MozWeakMap||(a.prototype.get=function(e){for(var t,n=this.keys,i=t=0,o=n.length;t<o;i=++t)if(n[i]===e)return this.values[i]},a.prototype.set=function(e,t){for(var n,i=this.keys,o=n=0,r=i.length;n<r;o=++n)if(i[o]===e)return void(this.values[o]=t);return this.keys.push(e),this.values.push(t)},a),i=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(c.notSupported=!0,c.prototype.observe=function(){},c),l=this.getComputedStyle||function(n,e){return this.getPropertyValue=function(e){var t;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(e,t){return t.toUpperCase()}),(null!=(t=n.currentStyle)?t[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=(d.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},d.prototype.init=function(){var e;return this.element=window.document.documentElement,"interactive"===(e=document.readyState)||"complete"===e?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},d.prototype.start=function(){var o,e,t,n,s;if(this.stopped=!1,this.boxes=function(){for(var e=this.element.querySelectorAll("."+this.config.boxClass),t=[],n=0,i=e.length;n<i;n++)o=e[n],t.push(o);return t}.call(this),this.all=function(){for(var e=this.boxes,t=[],n=0,i=e.length;n<i;n++)o=e[n],t.push(o);return t}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=0,t=(n=this.boxes).length;e<t;e++)o=n[e],this.applyStyle(o,!0);if(this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new i((s=this,function(e){for(var o,r,t=[],n=0,i=e.length;n<i;n++)r=e[n],t.push(function(){for(var e=r.addedNodes||[],t=[],n=0,i=e.length;n<i;n++)o=e[n],t.push(this.doSync(o));return t}.call(s));return t})).observe(document.body,{childList:!0,subtree:!0})},d.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},d.prototype.sync=function(e){if(i.notSupported)return this.doSync(this.element)},d.prototype.doSync=function(e){var t,n,i,o,r;if(null==e&&(e=this.element),1===e.nodeType){for(r=[],n=0,i=(o=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass)).length;n<i;n++)t=o[n],s.call(this.all,t)<0?(this.boxes.push(t),this.all.push(t),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(t,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},d.prototype.show=function(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),this.util().emitEvent(e,this.wowEvent),this.util().addEvent(e,"animationend",this.resetAnimation),this.util().addEvent(e,"oanimationend",this.resetAnimation),this.util().addEvent(e,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(e,"MSAnimationEnd",this.resetAnimation),e},d.prototype.applyStyle=function(e,t){var n,i=e.getAttribute("data-wow-duration"),o=e.getAttribute("data-wow-delay"),r=e.getAttribute("data-wow-iteration");return this.animate((n=this,function(){return n.customStyle(e,t,i,o,r)}))},d.prototype.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},d.prototype.resetStyle=function(){for(var e,t=this.boxes,n=[],i=0,o=t.length;i<o;i++)e=t[i],n.push(e.style.visibility="visible");return n},d.prototype.resetAnimation=function(e){if(0<=e.type.toLowerCase().indexOf("animationend"))return(e=e.target||e.srcElement)instanceof SVGElement?e.setAttribute("class",this.config.animateClass):e.className=e.className.replace(this.config.animateClass,"").trim()},d.prototype.customStyle=function(e,t,n,i,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e},d.prototype.vendors=["moz","webkit"],d.prototype.vendorSet=function(o,e){var r,s,a,t=[];for(r in e)s=e[r],o[""+r]=s,t.push(function(){for(var e=this.vendors,t=[],n=0,i=e.length;n<i;n++)a=e[n],t.push(o[""+a+r.charAt(0).toUpperCase()+r.substr(1)]=s);return t}.call(this));return t},d.prototype.vendorCSS=function(e,t){for(var n,i=l(e),o=i.getPropertyCSSValue(t),r=this.vendors,s=0,a=r.length;s<a;s++)n=r[s],o=o||i.getPropertyCSSValue("-"+n+"-"+t);return o},d.prototype.animationName=function(t){var n;try{n=this.vendorCSS(t,"animation-name").cssText}catch(e){n=l(t).getPropertyValue("animation-name")}return"none"===n?"":n},d.prototype.cacheAnimationName=function(e){return this.animationNameCache.set(e,this.animationName(e))},d.prototype.cachedAnimationName=function(e){return this.animationNameCache.get(e)},d.prototype.scrollHandler=function(){return this.scrolled=!0},d.prototype.scrollCallback=function(){var o;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){for(var e=this.boxes,t=[],n=0,i=e.length;n<i;n++)(o=e[n])&&(this.isVisible(o)?this.show(o):t.push(o));return t}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},d.prototype.offsetTop=function(e){for(var t;void 0===e.offsetTop;)e=e.parentNode;for(t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},d.prototype.isVisible=function(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,n=window.pageYOffset,i=n+Math.min(this.element.clientHeight,this.util().innerHeight())-t,t=this.offsetTop(e),e=t+e.clientHeight;return t<=i&&n<=e},d.prototype.util=function(){return null!=this._util?this._util:this._util=new e},d.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},d)}.call(this),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(c){"use strict";var i,s=window.Slick||{};i=0,(s=function(e,t){var n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:c(e),appendDots:c(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return c('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},c.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=c(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,e=c(e).data("slick")||{},n.options=c.extend({},n.defaults,t,e),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=c.proxy(n.autoPlay,n),n.autoPlayClear=c.proxy(n.autoPlayClear,n),n.autoPlayIterator=c.proxy(n.autoPlayIterator,n),n.changeSlide=c.proxy(n.changeSlide,n),n.clickHandler=c.proxy(n.clickHandler,n),n.selectHandler=c.proxy(n.selectHandler,n),n.setPosition=c.proxy(n.setPosition,n),n.swipeHandler=c.proxy(n.swipeHandler,n),n.dragHandler=c.proxy(n.dragHandler,n),n.keyHandler=c.proxy(n.keyHandler,n),n.instanceUid=i++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},s.prototype.addSlide=s.prototype.slickAdd=function(e,t,n){var i=this;if("boolean"==typeof t)n=t,t=null;else if(t<0||t>=i.slideCount)return!1;i.unload(),"number"==typeof t?0===t&&0===i.$slides.length?c(e).appendTo(i.$slideTrack):n?c(e).insertBefore(i.$slides.eq(t)):c(e).insertAfter(i.$slides.eq(t)):!0===n?c(e).prependTo(i.$slideTrack):c(e).appendTo(i.$slideTrack),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slides.each(function(e,t){c(t).attr("data-slick-index",e)}),i.$slidesCache=i.$slides,i.reinit()},s.prototype.animateHeight=function(){var e,t=this;1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical&&(e=t.$slides.eq(t.currentSlide).outerHeight(!0),t.$list.animate({height:e},t.options.speed))},s.prototype.animateSlide=function(e,t){var n={},i=this;i.animateHeight(),!0===i.options.rtl&&!1===i.options.vertical&&(e=-e),!1===i.transformsEnabled?!1===i.options.vertical?i.$slideTrack.animate({left:e},i.options.speed,i.options.easing,t):i.$slideTrack.animate({top:e},i.options.speed,i.options.easing,t):!1===i.cssTransitions?(!0===i.options.rtl&&(i.currentLeft=-i.currentLeft),c({animStart:i.currentLeft}).animate({animStart:e},{duration:i.options.speed,easing:i.options.easing,step:function(e){e=Math.ceil(e),!1===i.options.vertical?n[i.animType]="translate("+e+"px, 0px)":n[i.animType]="translate(0px,"+e+"px)",i.$slideTrack.css(n)},complete:function(){t&&t.call()}})):(i.applyTransition(),e=Math.ceil(e),!1===i.options.vertical?n[i.animType]="translate3d("+e+"px, 0px, 0px)":n[i.animType]="translate3d(0px,"+e+"px, 0px)",i.$slideTrack.css(n),t&&setTimeout(function(){i.disableTransition(),t.call()},i.options.speed))},s.prototype.getNavTarget=function(){var e=this.options.asNavFor;return e&&null!==e&&(e=c(e).not(this.$slider)),e},s.prototype.asNavFor=function(t){var e=this.getNavTarget();null!==e&&"object"==typeof e&&e.each(function(){var e=c(this).slick("getSlick");e.unslicked||e.slideHandler(t,!0)})},s.prototype.applyTransition=function(e){var t=this,n={};!1===t.options.fade?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,(!1===t.options.fade?t.$slideTrack:t.$slides.eq(e)).css(n)},s.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},s.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},s.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},s.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=c(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=c(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},s.prototype.buildDots=function(){var e,t,n=this;if(!0===n.options.dots){for(n.$slider.addClass("slick-dotted"),t=c("<ul />").addClass(n.options.dotsClass),e=0;e<=n.getDotCount();e+=1)t.append(c("<li />").append(n.options.customPaging.call(this,n,e)));n.$dots=t.appendTo(n.options.appendDots),n.$dots.find("li").first().addClass("slick-active")}},s.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){c(t).attr("data-slick-index",e).data("originalStyling",c(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?c('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),c("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},s.prototype.buildRows=function(){var e,t,n,i=this,o=document.createDocumentFragment(),r=i.$slider.children();if(1<i.options.rows){for(n=i.options.slidesPerRow*i.options.rows,t=Math.ceil(r.length/n),e=0;e<t;e++){for(var s=document.createElement("div"),a=0;a<i.options.rows;a++){for(var l=document.createElement("div"),c=0;c<i.options.slidesPerRow;c++){var d=e*n+(a*i.options.slidesPerRow+c);r.get(d)&&l.appendChild(r.get(d))}s.appendChild(l)}o.appendChild(s)}i.$slider.empty().append(o),i.$slider.children().children().children().css({width:100/i.options.slidesPerRow+"%",display:"inline-block"})}},s.prototype.checkResponsive=function(e,t){var n,i,o,r=this,s=!1,a=r.$slider.width(),l=window.innerWidth||c(window).width();if("window"===r.respondTo?o=l:"slider"===r.respondTo?o=a:"min"===r.respondTo&&(o=Math.min(l,a)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){for(n in i=null,r.breakpoints)r.breakpoints.hasOwnProperty(n)&&(!1===r.originalSettings.mobileFirst?o<r.breakpoints[n]&&(i=r.breakpoints[n]):o>r.breakpoints[n]&&(i=r.breakpoints[n]));null!==i?null!==r.activeBreakpoint&&i===r.activeBreakpoint&&!t||(r.activeBreakpoint=i,"unslick"===r.breakpointSettings[i]?r.unslick(i):(r.options=c.extend({},r.originalSettings,r.breakpointSettings[i]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),s=i):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),s=i),e||!1===s||r.$slider.trigger("breakpoint",[r,s])}},s.prototype.changeSlide=function(e,t){var n,i,o=this,r=c(e.currentTarget);switch(r.is("a")&&e.preventDefault(),r.is("li")||(r=r.closest("li")),n=o.slideCount%o.options.slidesToScroll!=0?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,e.data.message){case"previous":i=0==n?o.options.slidesToScroll:o.options.slidesToShow-n,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-i,!1,t);break;case"next":i=0==n?o.options.slidesToScroll:n,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+i,!1,t);break;case"index":e=0===e.data.index?0:e.data.index||r.index()*o.options.slidesToScroll;o.slideHandler(o.checkNavigable(e),!1,t),r.children().trigger("focus");break;default:return}},s.prototype.checkNavigable=function(e){var t=this.getNavigableIndexes(),n=0;if(e>t[t.length-1])e=t[t.length-1];else for(var i in t){if(e<t[i]){e=n;break}n=t[i]}return e},s.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(c("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",c.proxy(e.interrupt,e,!0)).off("mouseleave.slick",c.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),c(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().off("click.slick",e.selectHandler),c(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),c(window).off("resize.slick.slick-"+e.instanceUid,e.resize),c("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),c(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},s.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",c.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",c.proxy(e.interrupt,e,!1))},s.prototype.cleanUpRows=function(){var e;1<this.options.rows&&((e=this.$slides.children().children()).removeAttr("style"),this.$slider.empty().append(e))},s.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},s.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),c(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){c(this).attr("style",c(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},s.prototype.disableTransition=function(e){var t={};t[this.transitionType]="",(!1===this.options.fade?this.$slideTrack:this.$slides.eq(e)).css(t)},s.prototype.fadeSlide=function(e,t){var n=this;!1===n.cssTransitions?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout(function(){n.disableTransition(e),t.call()},n.options.speed))},s.prototype.fadeSlideOut=function(e){var t=this;!1===t.cssTransitions?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},s.prototype.filterSlides=s.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},s.prototype.focusHandler=function(){var n=this;n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(e){e.stopImmediatePropagation();var t=c(this);setTimeout(function(){n.options.pauseOnFocus&&(n.focussed=t.is(":focus"),n.autoPlay())},0)})},s.prototype.getCurrent=s.prototype.slickCurrentSlide=function(){return this.currentSlide},s.prototype.getDotCount=function(){var e=this,t=0,n=0,i=0;if(!0===e.options.infinite)if(e.slideCount<=e.options.slidesToShow)++i;else for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)i=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else i=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return i-1},s.prototype.getLeft=function(e){var t,n,i=this,o=0;return i.slideOffset=0,t=i.$slides.first().outerHeight(!0),!0===i.options.infinite?(i.slideCount>i.options.slidesToShow&&(i.slideOffset=i.slideWidth*i.options.slidesToShow*-1,n=-1,!0===i.options.vertical&&!0===i.options.centerMode&&(2===i.options.slidesToShow?n=-1.5:1===i.options.slidesToShow&&(n=-2)),o=t*i.options.slidesToShow*n),i.slideCount%i.options.slidesToScroll!=0&&e+i.options.slidesToScroll>i.slideCount&&i.slideCount>i.options.slidesToShow&&(o=e>i.slideCount?(i.slideOffset=(i.options.slidesToShow-(e-i.slideCount))*i.slideWidth*-1,(i.options.slidesToShow-(e-i.slideCount))*t*-1):(i.slideOffset=i.slideCount%i.options.slidesToScroll*i.slideWidth*-1,i.slideCount%i.options.slidesToScroll*t*-1))):e+i.options.slidesToShow>i.slideCount&&(i.slideOffset=(e+i.options.slidesToShow-i.slideCount)*i.slideWidth,o=(e+i.options.slidesToShow-i.slideCount)*t),i.slideCount<=i.options.slidesToShow&&(o=i.slideOffset=0),!0===i.options.centerMode&&i.slideCount<=i.options.slidesToShow?i.slideOffset=i.slideWidth*Math.floor(i.options.slidesToShow)/2-i.slideWidth*i.slideCount/2:!0===i.options.centerMode&&!0===i.options.infinite?i.slideOffset+=i.slideWidth*Math.floor(i.options.slidesToShow/2)-i.slideWidth:!0===i.options.centerMode&&(i.slideOffset=0,i.slideOffset+=i.slideWidth*Math.floor(i.options.slidesToShow/2)),t=!1===i.options.vertical?e*i.slideWidth*-1+i.slideOffset:e*t*-1+o,!0===i.options.variableWidth&&(o=i.slideCount<=i.options.slidesToShow||!1===i.options.infinite?i.$slideTrack.children(".slick-slide").eq(e):i.$slideTrack.children(".slick-slide").eq(e+i.options.slidesToShow),t=!0===i.options.rtl?o[0]?-1*(i.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===i.options.centerMode&&(o=i.slideCount<=i.options.slidesToShow||!1===i.options.infinite?i.$slideTrack.children(".slick-slide").eq(e):i.$slideTrack.children(".slick-slide").eq(e+i.options.slidesToShow+1),t=!0===i.options.rtl?o[0]?-1*(i.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,t+=(i.$list.width()-o.outerWidth())/2)),t},s.prototype.getOption=s.prototype.slickGetOption=function(e){return this.options[e]},s.prototype.getNavigableIndexes=function(){for(var e=this,t=0,n=0,i=[],o=!1===e.options.infinite?e.slideCount:(t=-1*e.options.slidesToScroll,n=-1*e.options.slidesToScroll,2*e.slideCount);t<o;)i.push(t),t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return i},s.prototype.getSlick=function(){return this},s.prototype.getSlideCount=function(){var n,i=this,o=!0===i.options.centerMode?i.slideWidth*Math.floor(i.options.slidesToShow/2):0;return!0===i.options.swipeToSlide?(i.$slideTrack.find(".slick-slide").each(function(e,t){if(t.offsetLeft-o+c(t).outerWidth()/2>-1*i.swipeLeft)return n=t,!1}),Math.abs(c(n).attr("data-slick-index")-i.currentSlide)||1):i.options.slidesToScroll},s.prototype.goTo=s.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},s.prototype.init=function(e){var t=this;c(t.$slider).hasClass("slick-initialized")||(c(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},s.prototype.initADA=function(){var n=this,i=Math.ceil(n.slideCount/n.options.slidesToShow),o=n.getNavigableIndexes().filter(function(e){return 0<=e&&e<n.slideCount});n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==n.$dots&&(n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e){var t=o.indexOf(e);c(this).attr({role:"tabpanel",id:"slick-slide"+n.instanceUid+e,tabindex:-1}),-1!==t&&c(this).attr({"aria-describedby":"slick-slide-control"+n.instanceUid+t})}),n.$dots.attr("role","tablist").find("li").each(function(e){var t=o[e];c(this).attr({role:"presentation"}),c(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+n.instanceUid+e,"aria-controls":"slick-slide"+n.instanceUid+t,"aria-label":e+1+" of "+i,"aria-selected":null,tabindex:"-1"})}).eq(n.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var e=n.currentSlide,t=e+n.options.slidesToShow;e<t;e++)n.$slides.eq(e).attr("tabindex",0);n.activateADA()},s.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},s.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(c("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&c("li",e.$dots).on("mouseenter.slick",c.proxy(e.interrupt,e,!0)).on("mouseleave.slick",c.proxy(e.interrupt,e,!1))},s.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",c.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",c.proxy(e.interrupt,e,!1)))},s.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),c(document).on(e.visibilityChange,c.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().on("click.slick",e.selectHandler),c(window).on("orientationchange.slick.slick-"+e.instanceUid,c.proxy(e.orientationChange,e)),c(window).on("resize.slick.slick-"+e.instanceUid,c.proxy(e.resize,e)),c("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),c(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),c(e.setPosition)},s.prototype.initUI=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},s.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===t.options.accessibility?t.changeSlide({data:{message:!0===t.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===t.options.accessibility&&t.changeSlide({data:{message:!0===t.options.rtl?"previous":"next"}}))},s.prototype.lazyLoad=function(){function e(e){c("img[data-lazy]",e).each(function(){var e=c(this),t=c(this).attr("data-lazy"),n=c(this).attr("data-srcset"),i=c(this).attr("data-sizes")||r.$slider.attr("data-sizes"),o=document.createElement("img");o.onload=function(){e.animate({opacity:0},100,function(){n&&(e.attr("srcset",n),i&&e.attr("sizes",i)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},o.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},o.src=t})}var t,n,i,r=this;if(!0===r.options.centerMode?i=!0===r.options.infinite?(n=r.currentSlide+(r.options.slidesToShow/2+1))+r.options.slidesToShow+2:(n=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),r.options.slidesToShow/2+1+2+r.currentSlide):(n=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,i=Math.ceil(n+r.options.slidesToShow),!0===r.options.fade&&(0<n&&n--,i<=r.slideCount&&i++)),t=r.$slider.find(".slick-slide").slice(n,i),"anticipated"===r.options.lazyLoad)for(var o=n-1,s=i,a=r.$slider.find(".slick-slide"),l=0;l<r.options.slidesToScroll;l++)o<0&&(o=r.slideCount-1),t=(t=t.add(a.eq(o))).add(a.eq(s)),o--,s++;e(t),r.slideCount<=r.options.slidesToShow?e(r.$slider.find(".slick-slide")):r.currentSlide>=r.slideCount-r.options.slidesToShow?e(r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow)):0===r.currentSlide&&e(r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow))},s.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},s.prototype.next=s.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},s.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},s.prototype.pause=s.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},s.prototype.play=s.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},s.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&c(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},s.prototype.prev=s.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},s.prototype.preventDefault=function(e){e.preventDefault()},s.prototype.progressiveLazyLoad=function(e){e=e||1;var t,n,i,o,r=this,s=c("img[data-lazy]",r.$slider);s.length?(t=s.first(),n=t.attr("data-lazy"),i=t.attr("data-srcset"),o=t.attr("data-sizes")||r.$slider.attr("data-sizes"),(s=document.createElement("img")).onload=function(){i&&(t.attr("srcset",i),o&&t.attr("sizes",o)),t.attr("src",n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===r.options.adaptiveHeight&&r.setPosition(),r.$slider.trigger("lazyLoaded",[r,t,n]),r.progressiveLazyLoad()},s.onerror=function(){e<3?setTimeout(function(){r.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,t,n]),r.progressiveLazyLoad())},s.src=n):r.$slider.trigger("allImagesLoaded",[r])},s.prototype.refresh=function(e){var t=this,n=t.slideCount-t.options.slidesToShow;!t.options.infinite&&t.currentSlide>n&&(t.currentSlide=n),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),n=t.currentSlide,t.destroy(!0),c.extend(t,t.initials,{currentSlide:n}),t.init(),e||t.changeSlide({data:{message:"index",index:n}},!1)},s.prototype.registerBreakpoints=function(){var e,t,n,i=this,o=i.options.responsive||null;if("array"===c.type(o)&&o.length){for(e in i.respondTo=i.options.respondTo||"window",o)if(n=i.breakpoints.length-1,o.hasOwnProperty(e)){for(t=o[e].breakpoint;0<=n;)i.breakpoints[n]&&i.breakpoints[n]===t&&i.breakpoints.splice(n,1),n--;i.breakpoints.push(t),i.breakpointSettings[t]=o[e].settings}i.breakpoints.sort(function(e,t){return i.options.mobileFirst?e-t:t-e})}},s.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},s.prototype.resize=function(){var e=this;c(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=c(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},s.prototype.removeSlide=s.prototype.slickRemove=function(e,t,n){var i=this;if(e="boolean"==typeof e?!0===(t=e)?0:i.slideCount-1:!0===t?--e:e,i.slideCount<1||e<0||e>i.slideCount-1)return!1;i.unload(),(!0===n?i.$slideTrack.children():i.$slideTrack.children(this.options.slide).eq(e)).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,i.reinit()},s.prototype.setCSS=function(e){var t,n,i=this,o={};!0===i.options.rtl&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",o[i.positionProp]=e,!1===i.transformsEnabled||(!(o={})===i.cssTransitions?o[i.animType]="translate("+t+", "+n+")":o[i.animType]="translate3d("+t+", "+n+", 0px)"),i.$slideTrack.css(o)},s.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},s.prototype.setFade=function(){var n,i=this;i.$slides.each(function(e,t){n=i.slideWidth*e*-1,!0===i.options.rtl?c(t).css({position:"relative",right:n,top:0,zIndex:i.options.zIndex-2,opacity:0}):c(t).css({position:"relative",left:n,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},s.prototype.setHeight=function(){var e,t=this;1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical&&(e=t.$slides.eq(t.currentSlide).outerHeight(!0),t.$list.css("height",e))},s.prototype.setOption=s.prototype.slickSetOption=function(){var e,t,n,i,o,r=this,s=!1;if("object"===c.type(arguments[0])?(n=arguments[0],s=arguments[1],o="multiple"):"string"===c.type(arguments[0])&&(i=arguments[1],s=arguments[2],"responsive"===(n=arguments[0])&&"array"===c.type(arguments[1])?o="responsive":void 0!==arguments[1]&&(o="single")),"single"===o)r.options[n]=i;else if("multiple"===o)c.each(n,function(e,t){r.options[e]=t});else if("responsive"===o)for(t in i)if("array"!==c.type(r.options.responsive))r.options.responsive=[i[t]];else{for(e=r.options.responsive.length-1;0<=e;)r.options.responsive[e].breakpoint===i[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(i[t])}s&&(r.unload(),r.reinit())},s.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),!1===e.options.fade?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},s.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},s.prototype.setSlideClasses=function(e){var t,n,i,o=this,r=o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");o.$slides.eq(e).addClass("slick-current"),!0===o.options.centerMode?(n=o.options.slidesToShow%2==0?1:0,i=Math.floor(o.options.slidesToShow/2),!0===o.options.infinite&&(i<=e&&e<=o.slideCount-1-i?o.$slides.slice(e-i+n,e+i+1).addClass("slick-active").attr("aria-hidden","false"):(t=o.options.slidesToShow+e,r.slice(t-i+1+n,t+i+2).addClass("slick-active").attr("aria-hidden","false")),0===e?r.eq(r.length-1-o.options.slidesToShow).addClass("slick-center"):e===o.slideCount-1&&r.eq(o.options.slidesToShow).addClass("slick-center")),o.$slides.eq(e).addClass("slick-center")):0<=e&&e<=o.slideCount-o.options.slidesToShow?o.$slides.slice(e,e+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):r.length<=o.options.slidesToShow?r.addClass("slick-active").attr("aria-hidden","false"):(i=o.slideCount%o.options.slidesToShow,t=!0===o.options.infinite?o.options.slidesToShow+e:e,(o.options.slidesToShow==o.options.slidesToScroll&&o.slideCount-e<o.options.slidesToShow?r.slice(t-(o.options.slidesToShow-i),t+i):r.slice(t,t+o.options.slidesToShow)).addClass("slick-active").attr("aria-hidden","false")),"ondemand"!==o.options.lazyLoad&&"anticipated"!==o.options.lazyLoad||o.lazyLoad()},s.prototype.setupInfinite=function(){var e,t,n,i=this;if(!0===i.options.fade&&(i.options.centerMode=!1),!0===i.options.infinite&&!1===i.options.fade&&(t=null,i.slideCount>i.options.slidesToShow)){for(n=!0===i.options.centerMode?i.options.slidesToShow+1:i.options.slidesToShow,e=i.slideCount;e>i.slideCount-n;--e)t=e-1,c(i.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");for(e=0;e<n+i.slideCount;e+=1)t=e,c(i.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");i.$slideTrack.find(".slick-cloned").find("[id]").each(function(){c(this).attr("id","")})}},s.prototype.interrupt=function(e){e||this.autoPlay(),this.interrupted=e},s.prototype.selectHandler=function(e){e=c(e.target).is(".slick-slide")?c(e.target):c(e.target).parents(".slick-slide"),e=(e=parseInt(e.attr("data-slick-index")))||0;this.slideCount<=this.options.slidesToShow?this.slideHandler(e,!1,!0):this.slideHandler(e)},s.prototype.slideHandler=function(e,t,n){var i,o,r,s,a=this;if(t=t||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===e))if(!1===t&&a.asNavFor(e),i=e,s=a.getLeft(i),t=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?t:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(e<0||e>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(i=a.currentSlide,!0!==n?a.animateSlide(t,function(){a.postSlide(i)}):a.postSlide(i));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(e<0||e>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(i=a.currentSlide,!0!==n?a.animateSlide(t,function(){a.postSlide(i)}):a.postSlide(i));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),o=i<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+i:i>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:i-a.slideCount:i,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,o]),t=a.currentSlide,a.currentSlide=o,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(r=(r=a.getNavTarget()).slick("getSlick")).slideCount<=r.options.slidesToShow&&r.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==n?(a.fadeSlideOut(t),a.fadeSlide(o,function(){a.postSlide(o)})):a.postSlide(o),void a.animateHeight();!0!==n?a.animateSlide(s,function(){a.postSlide(o)}):a.postSlide(o)}},s.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},s.prototype.swipeDirection=function(){var e=this,t=e.touchObject.startX-e.touchObject.curX,n=e.touchObject.startY-e.touchObject.curY,t=Math.atan2(n,t);return(t=Math.round(180*t/Math.PI))<0&&(t=360-Math.abs(t)),t<=45&&0<=t||t<=360&&315<=t?!1===e.options.rtl?"left":"right":135<=t&&t<=225?!1===e.options.rtl?"right":"left":!0===e.options.verticalSwiping?35<=t&&t<=135?"down":"up":"vertical"},s.prototype.swipeEnd=function(e){var t,n,i=this;if(i.dragging=!1,i.swiping=!1,i.scrolling)return i.scrolling=!1;if(i.interrupted=!1,i.shouldClick=!(10<i.touchObject.swipeLength),void 0===i.touchObject.curX)return!1;if(!0===i.touchObject.edgeHit&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(t),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},s.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},s.prototype.swipeMove=function(e){var t,n,i=this,o=void 0!==e.originalEvent?e.originalEvent.touches:null;return!(!i.dragging||i.scrolling||o&&1!==o.length)&&(t=i.getLeft(i.currentSlide),i.touchObject.curX=void 0!==o?o[0].pageX:e.clientX,i.touchObject.curY=void 0!==o?o[0].pageY:e.clientY,i.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(i.touchObject.curX-i.touchObject.startX,2))),n=Math.round(Math.sqrt(Math.pow(i.touchObject.curY-i.touchObject.startY,2))),!i.options.verticalSwiping&&!i.swiping&&4<n?!(i.scrolling=!0):(!0===i.options.verticalSwiping&&(i.touchObject.swipeLength=n),o=i.swipeDirection(),void 0!==e.originalEvent&&4<i.touchObject.swipeLength&&(i.swiping=!0,e.preventDefault()),n=(!1===i.options.rtl?1:-1)*(i.touchObject.curX>i.touchObject.startX?1:-1),!0===i.options.verticalSwiping&&(n=i.touchObject.curY>i.touchObject.startY?1:-1),e=i.touchObject.swipeLength,(i.touchObject.edgeHit=!1)===i.options.infinite&&(0===i.currentSlide&&"right"===o||i.currentSlide>=i.getDotCount()&&"left"===o)&&(e=i.touchObject.swipeLength*i.options.edgeFriction,i.touchObject.edgeHit=!0),!1===i.options.vertical?i.swipeLeft=t+e*n:i.swipeLeft=t+e*(i.$list.height()/i.listWidth)*n,!0===i.options.verticalSwiping&&(i.swipeLeft=t+e*n),!0!==i.options.fade&&!1!==i.options.touchMove&&(!0===i.animating?(i.swipeLeft=null,!1):void i.setCSS(i.swipeLeft))))},s.prototype.swipeStart=function(e){var t,n=this;if(n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow)return!(n.touchObject={});void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,n.dragging=!0},s.prototype.unfilterSlides=s.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},s.prototype.unload=function(){var e=this;c(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},s.prototype.unslick=function(e){this.$slider.trigger("unslick",[this,e]),this.destroy()},s.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode||e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode)&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},s.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").end(),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},s.prototype.visibility=function(){this.options.autoplay&&(document[this.hidden]?this.interrupted=!0:this.interrupted=!1)},c.fn.slick=function(){for(var e,t=this,n=arguments[0],i=Array.prototype.slice.call(arguments,1),o=t.length,r=0;r<o;r++)if("object"==typeof n||void 0===n?t[r].slick=new s(t[r],n):e=t[r].slick[n].apply(t[r].slick,i),void 0!==e)return e;return t}});;

document.addEventListener('DOMContentLoaded', () => {
	(function ($) {
		let activeSlide = 0
		let totalSlide
		let isFirst = true
		let isFinish = false
		const section = $('section')
		const nav = $('.navigation')
		const anchorLinks = $('.hash-link')
		let headerHeight = 0

		if(document.documentElement.clientWidth >= 800) {
			$('.features').on('mouseenter', (e) => {
				if(isFirst) {
					$('.features').addClass('features--animated')
					noscroll(false)
					$('html, body').stop().animate({ 
						scrollTop : $('.features__wrap').offset().top + headerHeight
					} , 450, 'swing', () => {
						isFirst = false
						$('.features__wrap').slick('setPosition')
					}); 
			
					document.onwheel = function(e) {
						if(!isAnimateFinish) {
							if(e.wheelDeltaY < 0 || e.deltaY > 0) {
								directionWhell = 'bottom'
								$('.features__wrap').slick('slickNext')
			
								if(activeSlide === totalSlide -1  && isFinish) {
									sliderFinish(document.documentElement.clientHeight)
								}
							} else if(e.wheelDeltaY > 0 || e.deltaY < 0) {
								directionWhell = 'top'
								$('.features__wrap').slick('slickPrev')
			
								if(!activeSlide && isFinish) {
									sliderFinish(-document.documentElement.clientHeight)
								}
							}
						}
					}
				}
			})

			let prevCoord = document.documentElement.clientWidth / 1.8
			let currentCord
			let isFirstForGallery = true
			$('.gallery').on('mouseenter', (e) => {
				let directionName = ''
					
				$('.gallery').css({cursor: 'none'})
				$('.gallery-info-slide').css({opacity: 1})

				if(e.originalEvent.clientX > prevCoord) {
					directionName = 'right'
				} else {
					directionName = 'left'
					$('.gallery-info-slide').addClass('gallery-info-slide--prev')
				}
				
		
				document.onmousemove = function(e) {
					$('.gallery-info-slide').css({transform: `translate(${e.offsetX - 70}px, ${e.offsetY - 70}px)`})
					if(prevCoord < e.clientX) {
						if(isFirstForGallery) {
							$('.gallery-info-slide').removeClass('gallery-info-slide--prev')
							directionName = 'right'
							isFirstForGallery = false
						}
					} else {
						if(prevCoord > e.clientX) {
							if(!isFirstForGallery) {
								$('.gallery-info-slide').addClass('gallery-info-slide--prev')
								directionName = 'left'
								isFirstForGallery = true
							}
						}
					}
				}
		
				document.onclick = function() {
					if(directionName === 'right') {
						$('.gallery__wrap').slick('slickNext')
					} else {
						$('.gallery__wrap').slick('slickPrev')
					}
				}
			})

			$('.gallery').on('mouseleave', (e) => {
				e.stopPropagation()
				$('.gallery-info-slide').css({opacity: 0})
				document.onmousemove = null
				document.onclick = null
				$('.gallery').css({cursor: 'default'})
			})
		}

		$(window).on('scroll', (e) => {
			let offset
			let sectionName
			const position = $(this).scrollTop();

			section.each(function () {
				if(document.documentElement.clientWidth < 480) {
					offset = 250
				} else {
					offset = 250
				}

				const topPos = $(this).offset().top - offset,
						bottomPos = topPos + $(this).outerHeight()

				if (position >= topPos && position <= bottomPos) {
					nav.find('.navigation__link').removeClass('navigation__link--active');
					sectionName = $(this).attr('id')
					nav.find('a[href="#' + sectionName + '"]').addClass('navigation__link--active')
				}
			});

			if(document.documentElement.clientWidth >= 850 && sectionName === 'features') {
				if(isFirst) {
					isFirst = false
					$('.features').addClass('features--animated')
					noscroll(false)
					$('html, body').stop().animate({ 
						scrollTop : $('.features__wrap').offset().top + headerHeight
					} , 500, 'swing', () => {
						isFirst = false
						$('.features__wrap').slick('setPosition')
					}); 
			
					document.onwheel = function(e) {
						if(!isAnimateFinish) {
							if(e.wheelDeltaY < 0 || e.deltaY > 0) {
								directionWhell = 'bottom'
								$('.features__wrap').slick('slickNext')
			
								if(activeSlide === totalSlide -1  && isFinish) {
									sliderFinish(document.documentElement.clientHeight)
								}
							} else if(e.wheelDeltaY > 0 || e.deltaY < 0) {
								directionWhell = 'top'
								$('.features__wrap').slick('slickPrev')
			
								if(!activeSlide && isFinish) {
									sliderFinish(-document.documentElement.clientHeight)
								}
							}
						}
					}
				}
			}

			/* SIDEBAR SCROLL COLOR CHANGE */
			let activeSection = $('.navigation__link--active').children('a').attr('href');
		})

		$('.burger__btn--open').click(() => {
			closeAllModal()
			$('.overlay').addClass('overlay--dark')
			$('.header__content').addClass('header__content--show')
		})

		$('.burger__btn--close').click(() => {
			closeAllModal()
			$('.overlay').removeClass('overlay--dark')
			$('.header__content').removeClass('header__content--show')
		})

		anchorLinks.each(function (_, item) {
			$(this).on('click', (e) => {
				$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1500);
				e.preventDefault()
			})
		})
	
		function closeAllModal() {
			$(`[data-modal]`).css('display', 'none')
		}
	
		function initSlider(sliderContainer, showSlide = 1, slidePrev, slideNext, isButton) {
			sliderContainer.slick({
				dots: false,
				arrows: false,
				slidesToShow: showSlide
			})
	
			if(isButton) {
				slidePrev.click(() => {
					sliderContainer.slick('slickPrev')
				})
	
				slideNext.click(() => {
					sliderContainer.slick('slickNext')
				})
			}
	
			return sliderContainer
		}

			
		$('.main__wrap').on('init afterChange', (_, slick, CurrentSlide = 0) => {
			if(document.documentElement.clientWidth <= 800) {
			const content = $(slick.$slides).find('.main__right-wrap')

			$(slick.$slides).each(function(i) {
				$(this).append(content[i])
			})
			}

			const slide = $(slick.$slides[CurrentSlide + 1]) || $(slick.$slides[CurrentSlide])
			const src = slide.find('img').attr('src')

			$('.main__right-slider-content-item img').attr('src', src)
			$('.main__right-slider-current').text(`0${CurrentSlide + 1}`)
		})

		$('.main__wrap').slick({
			dots: false,
			arrows: false,
			slidesToShow: 1,
			infinite: false
		})

		$('.main__right-slider-left-btn--left').click(() => {
			$('.main__wrap').slick('slickPrev')
		})

		$('.main__right-slider-left-btn--right').click(() => {
			$('.main__wrap').slick('slickNext')
		})
	
		let isFirstInit = true
		let isAnimateFinish = false
	
		$('.features__wrap').on('init afterChange', (_, slick, currentSlide = 0) => {
			activeSlide = slick.currentSlide
			totalSlide = slick.$slides.length - 1
	
			if(!slick.activeIndex) {
				isFinish = true
			} else if(slick.currentSlide === slick.$slides.length - 1) {
				isFinish = true
			}
	
			if(isFirstInit) {
				$(slick.$slides[currentSlide]).find('.features__info-total').text(0 + '' + slick.$slides.length)
				$(slick.$slides[currentSlide]).find('.features__info-current').text(`0${currentSlide + 1}`)
				$(slick.$slides[currentSlide + 1]).find('.features__info-total').text(0 + '' + slick.$slides.length)
				$(slick.$slides[currentSlide + 1]).find('.features__info-current').text(`0${currentSlide + 2}`)
	
				isFirstInit = false
				isAnimateFinish = false
				return
			} else if(currentSlide === slick.$slides.length - 2) {
				$(slick.$slides[currentSlide]).find('.features__info-total').text(0 + '' + slick.$slides.length)
				$(slick.$slides[currentSlide]).find('.features__info-current').text(`0${currentSlide + 1}`)
				$(slick.$slides[currentSlide + 1]).find('.features__info-total').text(0 + '' + slick.$slides.length)
				$(slick.$slides[currentSlide + 1]).find('.features__info-current').text(`0${currentSlide + 2}`)
				isAnimateFinish = false
			}
	
			$(slick.$slides[currentSlide]).find('.features__info-total ').text(0 + '' + slick.$slides.length)
			$(slick.$slides[currentSlide]).find('.features__info-current ').text(`0${currentSlide + 1}`)
			isAnimateFinish = false
		})
	
		$('.features__wrap').slick({
			arrows: false,
			dots: false,
			slidesToShow: 2,
			speed: 700,
			infinite: false,
			responsive: [
				{
					breakpoint: 770,
					settings: {
					  slidesToShow: 1,
					  verticalSwiping: true
					}
				  },
			]
		})

		$('.features__wrap').on('beforeChange', () => {
			isAnimateFinish = true
		})
	
		function sliderFinish(offset) {
			$('.features').removeClass('features--animated')
			isFinish = false
			document.onwheel = null
			document.onscroll = null
			$(document).off('touchmove', null)
	
			$('html, body').stop().animate({ 
				scrollTop : $('.features__wrap').offset().top + offset
			} , 350);

			setTimeout(() => {
				isFirst = true
			}, 500)
			noscroll(true)
		}

		let lastY

		$('.features__wrap').on('touchstart', (e) => {
			lastY = e.originalEvent.touches[0].clientX;
			noscroll(false)
			if(isFirst) {
				$('html, body').stop().animate({
					scrollTop : $('.features').offset().top + 15
				} , 450, 'swing', () => {
				isFirst = false
				});

				$(document).on('touchmove', function (e) {
					let te = e.originalEvent.changedTouches[0].clientX;
					if (lastY > te) {
						$('.features__wrap').slick('slickNext')

						if(activeSlide === totalSlide  && isFinish) {
							sliderFinish(document.documentElement.clientHeight)
						}

					} else {
						$('.features__wrap').slick('slickPrev')

						if(!activeSlide && isFinish) {
							sliderFinish(-document.documentElement.clientHeight)
						}
					}
			   });
			}
		})

		function noscroll(isScroll){
			if(isScroll){
			  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
			  document.body.style.paddingRight = "0";
			}else{
			  document.getElementsByTagName("body")[0].setAttribute('style', '-webkit-overflow-y: hidden !important; overflow-y: hidden !important');
			  document.body.style.paddingRight = "17px";
			}
		  }/*noscroll()*/
	
		$('.gallery').on('init afterChange', (_, slick, currentSlide = 0) => {
			$(slick.$slides[currentSlide]).find('.features__info-total').text(0 + '' + slick.$slides.length)
			$(slick.$slides[currentSlide]).find('.features__info-current').text(`0${currentSlide + 1}`)
		})
	
		$('.gallery__wrap').slick({
			arrows: false,
			dots: false,
		})

		$('.gallery__right-slider-left-btn--left').click(() => {
			$('.gallery__wrap').slick('slickPrev')
		})

		$('.gallery__right-slider-left-btn--right').click(() => {
			$('.gallery__wrap').slick('slickNext')
		})
	
		$('.view__wrap').slick({
			dots: false,
			arrows: false,
			variableWidth: true,
			infinite: false
		})
	
		$('.view__control--left').click(() => {
			$('.view__wrap').slick('slickPrev')
		})
	
		$('.view__control--right').click(() => {
			$('.view__wrap').slick('slickNext')
		})
	
		$('.building__wrap').slick({
			arrows: false,
			dots: false,
			slidesToShow: 1,
			variableWidth: true,
			infinite: false
		})

		$('.building__wrap').slick('setPosition')
	
		$('.building__control--left').click(() => {
			$('.building__wrap').slick('slickPrev')
		})
	
		$('.building__control--right').click(() => {
			$('.building__wrap').slick('slickNext')
		})
	
		$('.view__item').on('click', (e) => {
			// if(e.target.tagName.toLowerCase() === 'a') {
			// 	return
			// }
			e.preventDefault()
			closeAllModal()
			const src = e.currentTarget.dataset.viewFull

			$('.preview img').attr('src', src)
			$('.overlay').addClass('overlay--show')
			$('.preview').css('display', 'flex')
		})
	
		function createSlider(slider, sliderPrev, sliderNext) {
			if(slider.hasClass('slick-initialized')) {
				slider.slick('slickGoTo', 0);
				return
			}
	
			slider.slick({
				arrows: false,
				dots: false,
				variableWidth: true,
				infinite: false,
				lazyLoad: 'ondemand',
			})
	
			sliderPrev.click(() => {
				slider.slick('slickPrev')
			})
	
			sliderNext.click(() => {
				slider.slick('slickNext')
			})
		}
	
		$('.building').on('click', (e) => {
			if(e.target.closest('[data-month]')) {
				const parent = e.target.closest('[data-month]')
				let month = parent.dataset.month
				const sliderContainer = $(`[data-record="${month}"]`)
				const slider = $(`[data-record="${month}"]`).find('.record__wrap')
				const prev = sliderContainer.find('.record__control--left')
				const next = sliderContainer.find('.record__control--right')
	
				closeAllModal()
				$('.overlay').addClass('overlay--dark')
				createSlider(slider, prev, next)
				sliderContainer.css('display', 'block')
			}
		})

		$(document).on('touchstart', e => {
			if(e.target === $('.overlay')[0] || e.target === $('.preview')[0]) {
				closeAllModal()
				$('.overlay').removeClass('overlay--show')
				$('.overlay').removeClass('overlay--dark')
				$('.header__content').removeClass('header__content--show')
			}
		})

		$(document).on('click', (e) => {
			if(e.target === $('.overlay')[0] || e.target === $('.preview')[0]) {
				closeAllModal()
				$('.overlay').removeClass('overlay--show')
				$('.overlay').removeClass('overlay--dark')
				$('.header__content').removeClass('header__content--show')
			}
		})
	
		$(`[data-modal-open]`).on('click', function(e) {
			closeAllModal()
			$(`[data-modal="popup"]`).css({display: 'flex'})
			$('.overlay').addClass('overlay--show')
		})
	
		$('.popup__close').on('click', function() {
			$('.overlay').removeClass('overlay--show')
			$('.overlay').removeClass('overlay--dark')
			closeAllModal()
		})
	
		let map
	
		map = new google.maps.Map(document.querySelector('.contacts__left'), {
			center: {lat: 50.4726294, lng: 30.5142653},
			zoom: 15,
			styles: [
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#444444"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#a6b6bc"
						},
						{
							"visibility": "on"
						}
					]
				}
			]
		})

		let markers = [
			{
				position: {lat: 50.472669, lng: 30.516454},
				icon: 'assets/images/cli/object.svg' 
			},
			{
				position: {lat: 50.473781, lng: 30.512321},
				icon: 'assets/images/cli/hospital.svg' 
			},
			{
				position: {lat: 50.472021, lng: 30.513921},
				icon: 'assets/images/cli/kinder-gat.svg' 
			},
			{
				position: {lat: 50.472894, lng: 30.513015},
				icon: 'assets/images/cli/school.svg' 
			},
			{
				position: {lat: 50.472159, lng: 30.502965},
				icon: 'assets/images/cli/bank.svg' 
			},
			{
				position: {lat: 50.472355, lng: 30.511470},
				icon: 'assets/images/cli/bank.svg' 
			},
			{
				position: {lat: 50.471460, lng: 30.512037},
				icon: 'assets/images/cli/hospital.svg' 
			},
			{
				position: {lat: 50.466557, lng: 30.513491},
				icon: 'assets/images/cli/metro.svg' 
			},
			{
				position: {lat: 50.466369, lng: 30.517440},
				icon: 'assets/images/cli/museum.svg' 
			},
			{
				position: {lat: 50.465546, lng: 30.522570},
				icon: 'assets/images/cli/university.svg' 
			},
			{
				position: {lat: 50.467424, lng: 30.507700},
				icon: 'assets/images/cli/university.svg' 
			},
			{
				position: {lat:  50.467384, lng: 30.508963},
				icon: 'assets/images/cli/university.svg' 
			},
			{
				position: {lat:  50.468431, lng: 30.510183},
				icon: 'assets/images/cli/cinema.svg' 
			},
			{
				position: {lat:  50.472831, lng: 30.511344},
				icon: 'assets/images/cli/sport.svg' 
			},
			{
				position: {lat:  50.474018, lng: 30.503866},
				icon: 'assets/images/cli/metro.svg' 
			},
			{
				position: {lat:  50.471777, lng: 30.507165},
				icon: 'assets/images/cli/shop.svg' 
			},
		]

		markers.forEach(marker => {
			let point =  new google.maps.Marker({
				position: marker.position,
				icon: marker.icon,
				map: map
			  });
		})

		function mask(inputName, mask, evt) {
			try {
				var text = document.querySelector(inputName);
				var value = text.value;
	
				// If user pressed DEL or BACK SPACE, clean the valu
				try {
					var e = evt.which ? evt.which : event.keyCode;
					if (e == 46 || e == 8) {
						text.value = "";
						return;
					}
				} catch (e1) {}
	
				var literalPattern = /[0\*]/;
				var numberPattern = /[0-9]/;
				var newValue = "";
	
				for (var vId = 0, mId = 0; mId < mask.length;) {
					if (mId >= value.length) break;
	
					// Number expected but got a different value, store only the valid portion
					if (mask[mId] == "0" && value[vId].match(numberPattern) == null) {
						break;
					}
	
					// Found a literal
					while (mask[mId].match(literalPattern) == null) {
						if (value[vId] == mask[mId]) break;
	
						newValue += mask[mId++];
					}
	
					newValue += value[vId++];
					mId++;
				}
				text.value = newValue;
			} catch (e) {}
		}

		const phone = document.querySelector('[data-phone]')
		const phone2 = document.querySelector('[data-phone2]')

		phone.addEventListener("keyup", (e) => {
			mask('[data-phone]', "+000(00)000-00-00", e);
		});

		phone2.addEventListener("keyup", (e) => {
			mask('[data-phone2]', "+000(00)000-00-00", e);
		});

		function removeFormTextWarn(input) {
			input.parent().find(".field__error-msg").remove();
		  }
		
		  function removeAllFormTextWarn(inputs) {
			inputs.each(function () {
			  $(this).parent().find(".field__error-msg").remove();
			});
		  }
		
		  function addIndicateWarnForNode(node, classes, isAdded = true) {
			if (isAdded) {
			  $(node).closest(".field").addClass(classes);
			  return;
			}
		
			$(node).closest(".field").removeClass(classes);
		  }
		
		  function removeNodeByDelay(node, delay) {
			setTimeout(() => {
			  node.remove();
			}, delay);
		  }
		
		  function validateForm(inputs) {
			let isValid = true;
			inputs.each(function () {
			  $(this).on("input", (e) => {
				if ($(e.target).val().replace(/\s+/g, "") && $(e.target).attr('name') === 'name'  && e.currentTarget.value.length <= 3) {
				  removeFormTextWarn($(this));
					$(this)
						.parent()
						.append(
							'<div class="field__error-msg">некоректне значення</div>'
						);

				  addIndicateWarnForNode($(this), "field--error", false);
				  isValid = false;
				  return;
				} else if($(e.target).attr('name') === 'phone' && e.currentTarget.value.length < 13) {
					removeFormTextWarn($(this));
					$(this)
						.parent()
						.append('<div class="field__error-msg">введить коректний телефон</div>');
					addIndicateWarnForNode($(this), "field--error", true);
					isValid = false;
					return
				} else {
					removeFormTextWarn($(this));
					isValid = true;
					return
				}
			  });

				if($(this).attr('name') === 'phone' && this.value.length < 12) {
					removeFormTextWarn($(this));
					$(this)
						.parent()
						.append('<div class="field__error-msg">введить коректний телефон</div>');
					addIndicateWarnForNode($(this), "field--error", true);
					isValid = false;
					return
				}
		
			  if (!$(this).val().replace(/\s+/g, "")) {
				removeFormTextWarn($(this));
				$(this)
				  .parent()
				  .append('<div class="field__error-msg">некоректне значення</div>');
				addIndicateWarnForNode($(this), "field--error", true);
				isValid = false;
			  }
			});
		
			return isValid;
		  }
		
		  $(document).on("click", ".submit__form", (e) => {
				e.preventDefault();
			let parent = $(e.target).parent()
			let $form = parent.tagName === 'FORM' ? parent : parent.parent()
			const inputs = $form.find($("[name]"));
			const isValid = validateForm(inputs);
		
			if (isValid) {
			  sendAjaxForm("static/mail.php", $form);
			}
		  });
		
		  function sendAjaxForm(url, selectorForm) {
			const status = {
			  sucess: "Спасибо за заявку мы с вами свяжемся в ближайшее время",
			  error: "Ошибка на сервере повторите попытку позже",
			};
		
			$.ajax({
			  url: url, //url страницы (action_ajax_form.php)
			  type: "POST", //метод отправки
			  dataType: "html", //формат данных
			  data: $(selectorForm).serialize(), // Сеарилизуем объект
			  success: function (response) {
				//Данные отправлены успешно
				$(selectorForm).append(
				  `<div class="form__status">${status.sucess}</div>`
				);
				const msg = $(selectorForm).find(".form__status");
				removeNodeByDelay(msg, 5000);
					if(selectorForm[0].tagName.toLowerCase() === 'form') {
						selectorForm[0].reset();
					} else {
						selectorForm.find('form')[0].reset();
					}
			  },
			  error: function (response) {
				// Данные не отправлены
				$(selectorForm).append(
				  `<div class="form__status">${status.error}</div>`
				);
				const msg = $(selectorForm).find(".form__status");
		
				removeNodeByDelay(msg, 5000);

				if(selectorForm[0].tagName.toLowerCase() === 'form') {
					selectorForm[0].reset();
				} else {
					selectorForm.find('form')[0].reset();
				}
			  },
			});
		  }

		  if(document.documentElement.clientWidth <= 770) {
			  $('.header').append($('.main__right-contacts')[0])
			  $('.main__left').append($('.main__right-slider'))
			  $('.overlay').append($('.header__content'))
		  }

		  if(document.documentElement.clientWidth <= 480) {
			  headerHeight = $('.header').outerHeight()

			  $('.features__item').css({paddingTop: headerHeight})
		  }
	
	})(jQuery);
})