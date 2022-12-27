function VE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E={},BE={get exports(){return E},set exports(t){E=t}},Cl={},S={},zE={get exports(){return S},set exports(t){S=t}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),HE=Symbol.for("react.portal"),qE=Symbol.for("react.fragment"),WE=Symbol.for("react.strict_mode"),KE=Symbol.for("react.profiler"),GE=Symbol.for("react.provider"),QE=Symbol.for("react.context"),YE=Symbol.for("react.forward_ref"),XE=Symbol.for("react.suspense"),JE=Symbol.for("react.memo"),ZE=Symbol.for("react.lazy"),pp=Symbol.iterator;function e_(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var ay={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ly=Object.assign,uy={};function ki(t,e,n){this.props=t,this.context=e,this.refs=uy,this.updater=n||ay}ki.prototype.isReactComponent={};ki.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ki.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cy(){}cy.prototype=ki.prototype;function Qh(t,e,n){this.props=t,this.context=e,this.refs=uy,this.updater=n||ay}var Yh=Qh.prototype=new cy;Yh.constructor=Qh;ly(Yh,ki.prototype);Yh.isPureReactComponent=!0;var mp=Array.isArray,hy=Object.prototype.hasOwnProperty,Xh={current:null},dy={key:!0,ref:!0,__self:!0,__source:!0};function fy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hy.call(e,r)&&!dy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:to,type:t,key:s,ref:o,props:i,_owner:Xh.current}}function t_(t,e){return{$$typeof:to,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===to}function n_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gp=/\/+/g;function Nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n_(""+t.key):e.toString(36)}function ia(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case to:case HE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Nu(o,0):r,mp(i)?(n="",t!=null&&(n=t.replace(gp,"$&/")+"/"),ia(i,e,n,"",function(u){return u})):i!=null&&(Jh(i)&&(i=t_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",mp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Nu(s,a);o+=ia(s,e,n,l,i)}else if(l=e_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Nu(s,a++),o+=ia(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Do(t,e,n){if(t==null)return t;var r=[],i=0;return ia(t,r,"","",function(s){return e.call(n,s,i++)}),r}function r_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ye={current:null},sa={transition:null},i_={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:sa,ReactCurrentOwner:Xh};q.Children={map:Do,forEach:function(t,e,n){Do(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Do(t,function(){e++}),e},toArray:function(t){return Do(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=ki;q.Fragment=qE;q.Profiler=KE;q.PureComponent=Qh;q.StrictMode=WE;q.Suspense=XE;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i_;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ly({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)hy.call(e,l)&&!dy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:to,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:QE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:GE,_context:t},t.Consumer=t};q.createElement=fy;q.createFactory=function(t){var e=fy.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:YE,render:t}};q.isValidElement=Jh;q.lazy=function(t){return{$$typeof:ZE,_payload:{_status:-1,_result:t},_init:r_}};q.memo=function(t,e){return{$$typeof:JE,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=sa.transition;sa.transition={};try{t()}finally{sa.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return Ye.current.useCallback(t,e)};q.useContext=function(t){return Ye.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Ye.current.useDeferredValue(t)};q.useEffect=function(t,e){return Ye.current.useEffect(t,e)};q.useId=function(){return Ye.current.useId()};q.useImperativeHandle=function(t,e,n){return Ye.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Ye.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Ye.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Ye.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Ye.current.useReducer(t,e,n)};q.useRef=function(t){return Ye.current.useRef(t)};q.useState=function(t){return Ye.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Ye.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Ye.current.useTransition()};q.version="18.2.0";(function(t){t.exports=q})(zE);const Ct=oy(S),_c=VE({__proto__:null,default:Ct},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_=S,o_=Symbol.for("react.element"),a_=Symbol.for("react.fragment"),l_=Object.prototype.hasOwnProperty,u_=s_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c_={key:!0,ref:!0,__self:!0,__source:!0};function py(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)l_.call(e,r)&&!c_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:o_,type:t,key:s,ref:o,props:i,_owner:u_.current}}Cl.Fragment=a_;Cl.jsx=py;Cl.jsxs=py;(function(t){t.exports=Cl})(BE);var Sc={},ka={},h_={get exports(){return ka},set exports(t){ka=t}},ct={},Ic={},d_={get exports(){return Ic},set exports(t){Ic=t}},my={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,V){var B=D.length;D.push(V);e:for(;0<B;){var he=B-1>>>1,Ie=D[he];if(0<i(Ie,V))D[he]=V,D[B]=Ie,B=he;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var V=D[0],B=D.pop();if(B!==V){D[0]=B;e:for(var he=0,Ie=D.length,Ro=Ie>>>1;he<Ro;){var Zn=2*(he+1)-1,xu=D[Zn],er=Zn+1,Ao=D[er];if(0>i(xu,B))er<Ie&&0>i(Ao,xu)?(D[he]=Ao,D[er]=B,he=er):(D[he]=xu,D[Zn]=B,he=Zn);else if(er<Ie&&0>i(Ao,B))D[he]=Ao,D[er]=B,he=er;else break e}}return V}function i(D,V){var B=D.sortIndex-V.sortIndex;return B!==0?B:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=D)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function w(D){if(v=!1,g(D),!y)if(n(l)!==null)y=!0,ku(C);else{var V=n(u);V!==null&&Cu(w,V.startTime-D)}}function C(D,V){y=!1,v&&(v=!1,m(O),O=-1),p=!0;var B=d;try{for(g(V),h=n(l);h!==null&&(!(h.expirationTime>V)||D&&!_t());){var he=h.callback;if(typeof he=="function"){h.callback=null,d=h.priorityLevel;var Ie=he(h.expirationTime<=V);V=t.unstable_now(),typeof Ie=="function"?h.callback=Ie:h===n(l)&&r(l),g(V)}else r(l);h=n(l)}if(h!==null)var Ro=!0;else{var Zn=n(u);Zn!==null&&Cu(w,Zn.startTime-V),Ro=!1}return Ro}finally{h=null,d=B,p=!1}}var x=!1,A=null,O=-1,Z=5,z=-1;function _t(){return!(t.unstable_now()-z<Z)}function Vi(){if(A!==null){var D=t.unstable_now();z=D;var V=!0;try{V=A(!0,D)}finally{V?Bi():(x=!1,A=null)}}else x=!1}var Bi;if(typeof f=="function")Bi=function(){f(Vi)};else if(typeof MessageChannel<"u"){var fp=new MessageChannel,jE=fp.port2;fp.port1.onmessage=Vi,Bi=function(){jE.postMessage(null)}}else Bi=function(){k(Vi,0)};function ku(D){A=D,x||(x=!0,Bi())}function Cu(D,V){O=k(function(){D(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,ku(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var B=d;d=V;try{return D()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=d;d=D;try{return V()}finally{d=B}},t.unstable_scheduleCallback=function(D,V,B){var he=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?he+B:he):B=he,D){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=B+Ie,D={id:c++,callback:V,priorityLevel:D,startTime:B,expirationTime:Ie,sortIndex:-1},B>he?(D.sortIndex=B,e(u,D),n(l)===null&&D===n(u)&&(v?(m(O),O=-1):v=!0,Cu(w,B-he))):(D.sortIndex=Ie,e(l,D),y||p||(y=!0,ku(C))),D},t.unstable_shouldYield=_t,t.unstable_wrapCallback=function(D){var V=d;return function(){var B=d;d=V;try{return D.apply(this,arguments)}finally{d=B}}}})(my);(function(t){t.exports=my})(d_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy=S,lt=Ic;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yy=new Set,Ss={};function Rr(t,e){ui(t,e),ui(t+"Capture",e)}function ui(t,e){for(Ss[t]=e,t=0;t<e.length;t++)yy.add(e[t])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=Object.prototype.hasOwnProperty,f_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},vp={};function p_(t){return Tc.call(vp,t)?!0:Tc.call(yp,t)?!1:f_.test(t)?vp[t]=!0:(yp[t]=!0,!1)}function m_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g_(t,e,n,r){if(e===null||typeof e>"u"||m_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zh=/[\-:]([a-z])/g;function ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zh,ed);Oe[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zh,ed);Oe[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zh,ed);Oe[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function td(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g_(e,n,i,r)&&(n=null),r||i===null?p_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pn=gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),vy=Symbol.for("react.provider"),wy=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),xc=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),Ey=Symbol.for("react.offscreen"),wp=Symbol.iterator;function zi(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Ru;function Ji(t){if(Ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ru=e&&e[1]||""}return`
`+Ru+t}var Au=!1;function Du(t,e){if(!t||Au)return"";Au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Au=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ji(t):""}function y_(t){switch(t.tag){case 5:return Ji(t.type);case 16:return Ji("Lazy");case 13:return Ji("Suspense");case 19:return Ji("SuspenseList");case 0:case 2:case 15:return t=Du(t.type,!1),t;case 11:return t=Du(t.type.render,!1),t;case 1:return t=Du(t.type,!0),t;default:return""}}function Nc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jr:return"Fragment";case Fr:return"Portal";case kc:return"Profiler";case nd:return"StrictMode";case Cc:return"Suspense";case xc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wy:return(t.displayName||"Context")+".Consumer";case vy:return(t._context.displayName||"Context")+".Provider";case rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case id:return e=t.displayName||null,e!==null?e:Nc(t.type)||"Memo";case wn:e=t._payload,t=t._init;try{return Nc(t(e))}catch{}}return null}function v_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nc(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _y(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w_(t){var e=_y(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oo(t){t._valueTracker||(t._valueTracker=w_(t))}function Sy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_y(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Iy(t,e){e=e.checked,e!=null&&td(t,"checked",e,!1)}function Ac(t,e){Iy(t,e);var n=Vn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dc(t,e.type,Vn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dc(t,e,n){(e!=="number"||Ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zi=Array.isArray;function Jr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Zi(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vn(n)}}function Ty(t,e){var n=Vn(e.value),r=Vn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ip(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ky(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ky(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,Cy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Is(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E_=["Webkit","ms","Moz","O"];Object.keys(ls).forEach(function(t){E_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ls[e]=ls[t]})});function xy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ls.hasOwnProperty(t)&&ls[t]?(""+e).trim():e+"px"}function Ny(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var __=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lc(t,e){if(e){if(__[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Mc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=null;function sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bc=null,Zr=null,ei=null;function Tp(t){if(t=io(t)){if(typeof bc!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Dl(e),bc(t.stateNode,t.type,e))}}function Ry(t){Zr?ei?ei.push(t):ei=[t]:Zr=t}function Ay(){if(Zr){var t=Zr,e=ei;if(ei=Zr=null,Tp(t),e)for(t=0;t<e.length;t++)Tp(e[t])}}function Dy(t,e){return t(e)}function Py(){}var Pu=!1;function Oy(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return Dy(t,e,n)}finally{Pu=!1,(Zr!==null||ei!==null)&&(Py(),Ay())}}function Ts(t,e){var n=t.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Uc=!1;if(sn)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Uc=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Uc=!1}function S_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var us=!1,xa=null,Na=!1,Fc=null,I_={onError:function(t){us=!0,xa=t}};function T_(t,e,n,r,i,s,o,a,l){us=!1,xa=null,S_.apply(I_,arguments)}function k_(t,e,n,r,i,s,o,a,l){if(T_.apply(this,arguments),us){if(us){var u=xa;us=!1,xa=null}else throw Error(I(198));Na||(Na=!0,Fc=u)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ly(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kp(t){if(Ar(t)!==t)throw Error(I(188))}function C_(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kp(i),t;if(s===r)return kp(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function My(t){return t=C_(t),t!==null?$y(t):null}function $y(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$y(t);if(e!==null)return e;t=t.sibling}return null}var by=lt.unstable_scheduleCallback,Cp=lt.unstable_cancelCallback,x_=lt.unstable_shouldYield,N_=lt.unstable_requestPaint,de=lt.unstable_now,R_=lt.unstable_getCurrentPriorityLevel,od=lt.unstable_ImmediatePriority,Uy=lt.unstable_UserBlockingPriority,Ra=lt.unstable_NormalPriority,A_=lt.unstable_LowPriority,Fy=lt.unstable_IdlePriority,xl=null,bt=null;function D_(t){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(xl,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:L_,P_=Math.log,O_=Math.LN2;function L_(t){return t>>>=0,t===0?32:31-(P_(t)/O_|0)|0}var Mo=64,$o=4194304;function es(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Aa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=es(a):(s&=o,s!==0&&(r=es(s)))}else o=n&~i,o!==0?r=es(o):s!==0&&(r=es(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nt(e),i=1<<n,r|=t[n],e&=~i;return r}function M_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=M_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function jc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jy(){var t=Mo;return Mo<<=1,!(Mo&4194240)&&(Mo=64),t}function Ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function no(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nt(e),t[e]=n}function b_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Vy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var By,ld,zy,Hy,qy,Vc=!1,bo=[],Rn=null,An=null,Dn=null,ks=new Map,Cs=new Map,_n=[],U_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(t,e){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cs.delete(e.pointerId)}}function qi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=io(e),e!==null&&ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function F_(t,e,n,r,i){switch(e){case"focusin":return Rn=qi(Rn,t,e,n,r,i),!0;case"dragenter":return An=qi(An,t,e,n,r,i),!0;case"mouseover":return Dn=qi(Dn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ks.set(s,qi(ks.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Cs.set(s,qi(Cs.get(s)||null,t,e,n,r,i)),!0}return!1}function Wy(t){var e=ir(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Ly(n),e!==null){t.blockedOn=e,qy(t.priority,function(){zy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$c=r,n.target.dispatchEvent(r),$c=null}else return e=io(n),e!==null&&ld(e),t.blockedOn=n,!1;e.shift()}return!0}function Np(t,e,n){oa(t)&&n.delete(e)}function j_(){Vc=!1,Rn!==null&&oa(Rn)&&(Rn=null),An!==null&&oa(An)&&(An=null),Dn!==null&&oa(Dn)&&(Dn=null),ks.forEach(Np),Cs.forEach(Np)}function Wi(t,e){t.blockedOn===e&&(t.blockedOn=null,Vc||(Vc=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,j_)))}function xs(t){function e(i){return Wi(i,t)}if(0<bo.length){Wi(bo[0],t);for(var n=1;n<bo.length;n++){var r=bo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rn!==null&&Wi(Rn,t),An!==null&&Wi(An,t),Dn!==null&&Wi(Dn,t),ks.forEach(e),Cs.forEach(e),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Wy(n),n.blockedOn===null&&_n.shift()}var ti=pn.ReactCurrentBatchConfig,Da=!0;function V_(t,e,n,r){var i=Y,s=ti.transition;ti.transition=null;try{Y=1,ud(t,e,n,r)}finally{Y=i,ti.transition=s}}function B_(t,e,n,r){var i=Y,s=ti.transition;ti.transition=null;try{Y=4,ud(t,e,n,r)}finally{Y=i,ti.transition=s}}function ud(t,e,n,r){if(Da){var i=Bc(t,e,n,r);if(i===null)zu(t,e,r,Pa,n),xp(t,r);else if(F_(i,t,e,n,r))r.stopPropagation();else if(xp(t,r),e&4&&-1<U_.indexOf(t)){for(;i!==null;){var s=io(i);if(s!==null&&By(s),s=Bc(t,e,n,r),s===null&&zu(t,e,r,Pa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zu(t,e,r,null,n)}}var Pa=null;function Bc(t,e,n,r){if(Pa=null,t=sd(r),t=ir(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ly(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pa=t,null}function Ky(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R_()){case od:return 1;case Uy:return 4;case Ra:case A_:return 16;case Fy:return 536870912;default:return 16}default:return 16}}var Cn=null,cd=null,aa=null;function Gy(){if(aa)return aa;var t,e=cd,n=e.length,r,i="value"in Cn?Cn.value:Cn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return aa=i.slice(t,1<r?1-r:void 0)}function la(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function Rp(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uo:Rp,this.isPropagationStopped=Rp,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),e}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=ht(Ci),ro=ae({},Ci,{view:0,detail:0}),z_=ht(ro),Lu,Mu,Ki,Nl=ae({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ki&&(Ki&&t.type==="mousemove"?(Lu=t.screenX-Ki.screenX,Mu=t.screenY-Ki.screenY):Mu=Lu=0,Ki=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),Ap=ht(Nl),H_=ae({},Nl,{dataTransfer:0}),q_=ht(H_),W_=ae({},ro,{relatedTarget:0}),$u=ht(W_),K_=ae({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),G_=ht(K_),Q_=ae({},Ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Y_=ht(Q_),X_=ae({},Ci,{data:0}),Dp=ht(X_),J_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eS[t])?!!e[t]:!1}function dd(){return tS}var nS=ae({},ro,{key:function(t){if(t.key){var e=J_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rS=ht(nS),iS=ae({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=ht(iS),sS=ae({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),oS=ht(sS),aS=ae({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),lS=ht(aS),uS=ae({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=ht(uS),hS=[9,13,27,32],fd=sn&&"CompositionEvent"in window,cs=null;sn&&"documentMode"in document&&(cs=document.documentMode);var dS=sn&&"TextEvent"in window&&!cs,Qy=sn&&(!fd||cs&&8<cs&&11>=cs),Op=String.fromCharCode(32),Lp=!1;function Yy(t,e){switch(t){case"keyup":return hS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function fS(t,e){switch(t){case"compositionend":return Xy(e);case"keypress":return e.which!==32?null:(Lp=!0,Op);case"textInput":return t=e.data,t===Op&&Lp?null:t;default:return null}}function pS(t,e){if(Vr)return t==="compositionend"||!fd&&Yy(t,e)?(t=Gy(),aa=cd=Cn=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qy&&e.locale!=="ko"?null:e.data;default:return null}}var mS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mS[t.type]:e==="textarea"}function Jy(t,e,n,r){Ry(r),e=Oa(e,"onChange"),0<e.length&&(n=new hd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var hs=null,Ns=null;function gS(t){uv(t,0)}function Rl(t){var e=Hr(t);if(Sy(e))return t}function yS(t,e){if(t==="change")return e}var Zy=!1;if(sn){var bu;if(sn){var Uu="oninput"in document;if(!Uu){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),Uu=typeof $p.oninput=="function"}bu=Uu}else bu=!1;Zy=bu&&(!document.documentMode||9<document.documentMode)}function bp(){hs&&(hs.detachEvent("onpropertychange",ev),Ns=hs=null)}function ev(t){if(t.propertyName==="value"&&Rl(Ns)){var e=[];Jy(e,Ns,t,sd(t)),Oy(gS,e)}}function vS(t,e,n){t==="focusin"?(bp(),hs=e,Ns=n,hs.attachEvent("onpropertychange",ev)):t==="focusout"&&bp()}function wS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(Ns)}function ES(t,e){if(t==="click")return Rl(e)}function _S(t,e){if(t==="input"||t==="change")return Rl(e)}function SS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dt=typeof Object.is=="function"?Object.is:SS;function Rs(t,e){if(Dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tc.call(e,i)||!Dt(t[i],e[i]))return!1}return!0}function Up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,e){var n=Up(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Up(n)}}function tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nv(){for(var t=window,e=Ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ca(t.document)}return e}function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IS(t){var e=nv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tv(n.ownerDocument.documentElement,n)){if(r!==null&&pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fp(n,s);var o=Fp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TS=sn&&"documentMode"in document&&11>=document.documentMode,Br=null,zc=null,ds=null,Hc=!1;function jp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hc||Br==null||Br!==Ca(r)||(r=Br,"selectionStart"in r&&pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ds&&Rs(ds,r)||(ds=r,r=Oa(zc,"onSelect"),0<r.length&&(e=new hd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Br)))}function Fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zr={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Fu={},rv={};sn&&(rv=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Al(t){if(Fu[t])return Fu[t];if(!zr[t])return t;var e=zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rv)return Fu[t]=e[n];return t}var iv=Al("animationend"),sv=Al("animationiteration"),ov=Al("animationstart"),av=Al("transitionend"),lv=new Map,Vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(t,e){lv.set(t,e),Rr(e,[t])}for(var ju=0;ju<Vp.length;ju++){var Vu=Vp[ju],kS=Vu.toLowerCase(),CS=Vu[0].toUpperCase()+Vu.slice(1);Gn(kS,"on"+CS)}Gn(iv,"onAnimationEnd");Gn(sv,"onAnimationIteration");Gn(ov,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(av,"onTransitionEnd");ui("onMouseEnter",["mouseout","mouseover"]);ui("onMouseLeave",["mouseout","mouseover"]);ui("onPointerEnter",["pointerout","pointerover"]);ui("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));function Bp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,k_(r,e,void 0,t),t.currentTarget=null}function uv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Bp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Bp(i,a,u),s=l}}}if(Na)throw t=Fc,Na=!1,Fc=null,t}function ee(t,e){var n=e[Qc];n===void 0&&(n=e[Qc]=new Set);var r=t+"__bubble";n.has(r)||(cv(e,t,2,!1),n.add(r))}function Bu(t,e,n){var r=0;e&&(r|=4),cv(n,t,r,e)}var jo="_reactListening"+Math.random().toString(36).slice(2);function As(t){if(!t[jo]){t[jo]=!0,yy.forEach(function(n){n!=="selectionchange"&&(xS.has(n)||Bu(n,!1,t),Bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jo]||(e[jo]=!0,Bu("selectionchange",!1,e))}}function cv(t,e,n,r){switch(Ky(e)){case 1:var i=V_;break;case 4:i=B_;break;default:i=ud}n=i.bind(null,e,n,t),i=void 0,!Uc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ir(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Oy(function(){var u=s,c=sd(n),h=[];e:{var d=lv.get(t);if(d!==void 0){var p=hd,y=t;switch(t){case"keypress":if(la(n)===0)break e;case"keydown":case"keyup":p=rS;break;case"focusin":y="focus",p=$u;break;case"focusout":y="blur",p=$u;break;case"beforeblur":case"afterblur":p=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=q_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=oS;break;case iv:case sv:case ov:p=G_;break;case av:p=lS;break;case"scroll":p=z_;break;case"wheel":p=cS;break;case"copy":case"cut":case"paste":p=Y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pp}var v=(e&4)!==0,k=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Ts(f,m),w!=null&&v.push(Ds(f,w,g)))),k)break;f=f.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==$c&&(y=n.relatedTarget||n.fromElement)&&(ir(y)||y[on]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?ir(y):null,y!==null&&(k=Ar(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=Ap,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Pp,w="onPointerLeave",m="onPointerEnter",f="pointer"),k=p==null?d:Hr(p),g=y==null?d:Hr(y),d=new v(w,f+"leave",p,n,c),d.target=k,d.relatedTarget=g,w=null,ir(c)===u&&(v=new v(m,f+"enter",y,n,c),v.target=g,v.relatedTarget=k,w=v),k=w,p&&y)t:{for(v=p,m=y,f=0,g=v;g;g=$r(g))f++;for(g=0,w=m;w;w=$r(w))g++;for(;0<f-g;)v=$r(v),f--;for(;0<g-f;)m=$r(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=$r(v),m=$r(m)}v=null}else v=null;p!==null&&zp(h,d,p,v,!1),y!==null&&k!==null&&zp(h,k,y,v,!0)}}e:{if(d=u?Hr(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=yS;else if(Mp(d))if(Zy)C=_S;else{C=wS;var x=vS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=ES);if(C&&(C=C(t,u))){Jy(h,C,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&Dc(d,"number",d.value)}switch(x=u?Hr(u):window,t){case"focusin":(Mp(x)||x.contentEditable==="true")&&(Br=x,zc=u,ds=null);break;case"focusout":ds=zc=Br=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,jp(h,n,c);break;case"selectionchange":if(TS)break;case"keydown":case"keyup":jp(h,n,c)}var A;if(fd)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Vr?Yy(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Qy&&n.locale!=="ko"&&(Vr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Vr&&(A=Gy()):(Cn=c,cd="value"in Cn?Cn.value:Cn.textContent,Vr=!0)),x=Oa(u,O),0<x.length&&(O=new Dp(O,t,null,n,c),h.push({event:O,listeners:x}),A?O.data=A:(A=Xy(n),A!==null&&(O.data=A)))),(A=dS?fS(t,n):pS(t,n))&&(u=Oa(u,"onBeforeInput"),0<u.length&&(c=new Dp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}uv(h,e)})}function Ds(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ts(t,n),s!=null&&r.unshift(Ds(t,s,i)),s=Ts(t,e),s!=null&&r.push(Ds(t,s,i))),t=t.return}return r}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ts(n,s),l!=null&&o.unshift(Ds(n,l,a))):i||(l=Ts(n,s),l!=null&&o.push(Ds(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var NS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function Hp(t){return(typeof t=="string"?t:""+t).replace(NS,`
`).replace(RS,"")}function Vo(t,e,n){if(e=Hp(e),Hp(t)!==e&&n)throw Error(I(425))}function La(){}var qc=null,Wc=null;function Kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,DS=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(t){return qp.resolve(null).then(t).catch(PS)}:Gc;function PS(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xs(e)}function Pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xi=Math.random().toString(36).slice(2),Mt="__reactFiber$"+xi,Ps="__reactProps$"+xi,on="__reactContainer$"+xi,Qc="__reactEvents$"+xi,OS="__reactListeners$"+xi,LS="__reactHandles$"+xi;function ir(t){var e=t[Mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[on]||n[Mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wp(t);t!==null;){if(n=t[Mt])return n;t=Wp(t)}return e}t=n,n=t.parentNode}return null}function io(t){return t=t[Mt]||t[on],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Dl(t){return t[Ps]||null}var Yc=[],qr=-1;function Qn(t){return{current:t}}function ne(t){0>qr||(t.current=Yc[qr],Yc[qr]=null,qr--)}function X(t,e){qr++,Yc[qr]=t.current,t.current=e}var Bn={},ze=Qn(Bn),tt=Qn(!1),yr=Bn;function ci(t,e){var n=t.type.contextTypes;if(!n)return Bn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function Ma(){ne(tt),ne(ze)}function Kp(t,e,n){if(ze.current!==Bn)throw Error(I(168));X(ze,e),X(tt,n)}function hv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,v_(t)||"Unknown",i));return ae({},n,r)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bn,yr=ze.current,X(ze,t),X(tt,tt.current),!0}function Gp(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=hv(t,e,yr),r.__reactInternalMemoizedMergedChildContext=t,ne(tt),ne(ze),X(ze,t)):ne(tt),X(tt,n)}var Qt=null,Pl=!1,qu=!1;function dv(t){Qt===null?Qt=[t]:Qt.push(t)}function MS(t){Pl=!0,dv(t)}function Yn(){if(!qu&&Qt!==null){qu=!0;var t=0,e=Y;try{var n=Qt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qt=null,Pl=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(t+1)),by(od,Yn),i}finally{Y=e,qu=!1}}return null}var Wr=[],Kr=0,ba=null,Ua=0,dt=[],ft=0,vr=null,Xt=1,Jt="";function tr(t,e){Wr[Kr++]=Ua,Wr[Kr++]=ba,ba=t,Ua=e}function fv(t,e,n){dt[ft++]=Xt,dt[ft++]=Jt,dt[ft++]=vr,vr=t;var r=Xt;t=Jt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var s=32-Nt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xt=1<<32-Nt(e)+i|n<<i|r,Jt=s+t}else Xt=1<<s|n<<i|r,Jt=t}function md(t){t.return!==null&&(tr(t,1),fv(t,1,0))}function gd(t){for(;t===ba;)ba=Wr[--Kr],Wr[Kr]=null,Ua=Wr[--Kr],Wr[Kr]=null;for(;t===vr;)vr=dt[--ft],dt[ft]=null,Jt=dt[--ft],dt[ft]=null,Xt=dt[--ft],dt[ft]=null}var ot=null,st=null,re=!1,kt=null;function pv(t,e){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ot=t,st=Pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ot=t,st=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:Xt,overflow:Jt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ot=t,st=null,!0):!1;default:return!1}}function Xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jc(t){if(re){var e=st;if(e){var n=e;if(!Qp(t,e)){if(Xc(t))throw Error(I(418));e=Pn(n.nextSibling);var r=ot;e&&Qp(t,e)?pv(r,n):(t.flags=t.flags&-4097|2,re=!1,ot=t)}}else{if(Xc(t))throw Error(I(418));t.flags=t.flags&-4097|2,re=!1,ot=t}}}function Yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ot=t}function Bo(t){if(t!==ot)return!1;if(!re)return Yp(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kc(t.type,t.memoizedProps)),e&&(e=st)){if(Xc(t))throw mv(),Error(I(418));for(;e;)pv(t,e),e=Pn(e.nextSibling)}if(Yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){st=Pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}st=null}}else st=ot?Pn(t.stateNode.nextSibling):null;return!0}function mv(){for(var t=st;t;)t=Pn(t.nextSibling)}function hi(){st=ot=null,re=!1}function yd(t){kt===null?kt=[t]:kt.push(t)}var $S=pn.ReactCurrentBatchConfig;function It(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Fa=Qn(null),ja=null,Gr=null,vd=null;function wd(){vd=Gr=ja=null}function Ed(t){var e=Fa.current;ne(Fa),t._currentValue=e}function Zc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){ja=t,vd=Gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(vd!==t)if(t={context:t,memoizedValue:e,next:null},Gr===null){if(ja===null)throw Error(I(308));Gr=t,ja.dependencies={lanes:0,firstContext:t}}else Gr=Gr.next=t;return e}var sr=null;function _d(t){sr===null?sr=[t]:sr.push(t)}function gv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_d(e)):(n.next=i.next,i.next=n),e.interleaved=n,an(t,r)}function an(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var En=!1;function Sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function On(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,an(t,n)}return i=r.interleaved,i===null?(e.next=e,_d(r)):(e.next=i.next,i.next=e),r.interleaved=e,an(t,n)}function ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}function Xp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Va(t,e,n,r){var i=t.updateQueue;En=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=ae({},h,d);break e;case 2:En=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=h}}function Jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var vv=new gy.Component().refs;function eh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Mn(t),s=nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=On(t,s,i),e!==null&&(Rt(e,t,i,r),ua(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Mn(t),s=nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=On(t,s,i),e!==null&&(Rt(e,t,i,r),ua(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ge(),r=Mn(t),i=nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=On(t,i,r),e!==null&&(Rt(e,t,r,n),ua(e,t,r))}};function Zp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Rs(n,r)||!Rs(i,s):!0}function wv(t,e,n){var r=!1,i=Bn,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=nt(e)?yr:ze.current,r=e.contextTypes,s=(r=r!=null)?ci(t,i):Bn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function em(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function th(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=vv,Sd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=nt(e)?yr:ze.current,i.context=ci(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ol.enqueueReplaceState(i,i.state,null),Va(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===vv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tm(t){var e=t._init;return e(t._payload)}function Ev(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=$n(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,w){return f===null||f.tag!==6?(f=Ju(g,m.mode,w),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,w){var C=g.type;return C===jr?c(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wn&&tm(C)===f.type)?(w=i(f,g.props),w.ref=Gi(m,f,g),w.return=m,w):(w=ma(g.type,g.key,g.props,null,m.mode,w),w.ref=Gi(m,f,g),w.return=m,w)}function u(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Zu(g,m.mode,w),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,w,C){return f===null||f.tag!==7?(f=dr(g,m.mode,w,C),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ju(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Po:return g=ma(f.type,f.key,f.props,null,m.mode,g),g.ref=Gi(m,null,f),g.return=m,g;case Fr:return f=Zu(f,m.mode,g),f.return=m,f;case wn:var w=f._init;return h(m,w(f._payload),g)}if(Zi(f)||zi(f))return f=dr(f,m.mode,g,null),f.return=m,f;zo(m,f)}return null}function d(m,f,g,w){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:return g.key===C?l(m,f,g,w):null;case Fr:return g.key===C?u(m,f,g,w):null;case wn:return C=g._init,d(m,f,C(g._payload),w)}if(Zi(g)||zi(g))return C!==null?null:c(m,f,g,w,null);zo(m,g)}return null}function p(m,f,g,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(f,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Po:return m=m.get(w.key===null?g:w.key)||null,l(f,m,w,C);case Fr:return m=m.get(w.key===null?g:w.key)||null,u(f,m,w,C);case wn:var x=w._init;return p(m,f,g,x(w._payload),C)}if(Zi(w)||zi(w))return m=m.get(g)||null,c(f,m,w,C,null);zo(f,w)}return null}function y(m,f,g,w){for(var C=null,x=null,A=f,O=f=0,Z=null;A!==null&&O<g.length;O++){A.index>O?(Z=A,A=null):Z=A.sibling;var z=d(m,A,g[O],w);if(z===null){A===null&&(A=Z);break}t&&A&&z.alternate===null&&e(m,A),f=s(z,f,O),x===null?C=z:x.sibling=z,x=z,A=Z}if(O===g.length)return n(m,A),re&&tr(m,O),C;if(A===null){for(;O<g.length;O++)A=h(m,g[O],w),A!==null&&(f=s(A,f,O),x===null?C=A:x.sibling=A,x=A);return re&&tr(m,O),C}for(A=r(m,A);O<g.length;O++)Z=p(A,m,O,g[O],w),Z!==null&&(t&&Z.alternate!==null&&A.delete(Z.key===null?O:Z.key),f=s(Z,f,O),x===null?C=Z:x.sibling=Z,x=Z);return t&&A.forEach(function(_t){return e(m,_t)}),re&&tr(m,O),C}function v(m,f,g,w){var C=zi(g);if(typeof C!="function")throw Error(I(150));if(g=C.call(g),g==null)throw Error(I(151));for(var x=C=null,A=f,O=f=0,Z=null,z=g.next();A!==null&&!z.done;O++,z=g.next()){A.index>O?(Z=A,A=null):Z=A.sibling;var _t=d(m,A,z.value,w);if(_t===null){A===null&&(A=Z);break}t&&A&&_t.alternate===null&&e(m,A),f=s(_t,f,O),x===null?C=_t:x.sibling=_t,x=_t,A=Z}if(z.done)return n(m,A),re&&tr(m,O),C;if(A===null){for(;!z.done;O++,z=g.next())z=h(m,z.value,w),z!==null&&(f=s(z,f,O),x===null?C=z:x.sibling=z,x=z);return re&&tr(m,O),C}for(A=r(m,A);!z.done;O++,z=g.next())z=p(A,m,O,z.value,w),z!==null&&(t&&z.alternate!==null&&A.delete(z.key===null?O:z.key),f=s(z,f,O),x===null?C=z:x.sibling=z,x=z);return t&&A.forEach(function(Vi){return e(m,Vi)}),re&&tr(m,O),C}function k(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===jr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:e:{for(var C=g.key,x=f;x!==null;){if(x.key===C){if(C=g.type,C===jr){if(x.tag===7){n(m,x.sibling),f=i(x,g.props.children),f.return=m,m=f;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wn&&tm(C)===x.type){n(m,x.sibling),f=i(x,g.props),f.ref=Gi(m,x,g),f.return=m,m=f;break e}n(m,x);break}else e(m,x);x=x.sibling}g.type===jr?(f=dr(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=ma(g.type,g.key,g.props,null,m.mode,w),w.ref=Gi(m,f,g),w.return=m,m=w)}return o(m);case Fr:e:{for(x=g.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Zu(g,m.mode,w),f.return=m,m=f}return o(m);case wn:return x=g._init,k(m,f,x(g._payload),w)}if(Zi(g))return y(m,f,g,w);if(zi(g))return v(m,f,g,w);zo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Ju(g,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return k}var di=Ev(!0),_v=Ev(!1),so={},Ut=Qn(so),Os=Qn(so),Ls=Qn(so);function or(t){if(t===so)throw Error(I(174));return t}function Id(t,e){switch(X(Ls,e),X(Os,t),X(Ut,so),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Oc(e,t)}ne(Ut),X(Ut,e)}function fi(){ne(Ut),ne(Os),ne(Ls)}function Sv(t){or(Ls.current);var e=or(Ut.current),n=Oc(e,t.type);e!==n&&(X(Os,t),X(Ut,n))}function Td(t){Os.current===t&&(ne(Ut),ne(Os))}var se=Qn(0);function Ba(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wu=[];function kd(){for(var t=0;t<Wu.length;t++)Wu[t]._workInProgressVersionPrimary=null;Wu.length=0}var ca=pn.ReactCurrentDispatcher,Ku=pn.ReactCurrentBatchConfig,wr=0,oe=null,ve=null,ke=null,za=!1,fs=!1,Ms=0,bS=0;function Me(){throw Error(I(321))}function Cd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dt(t[n],e[n]))return!1;return!0}function xd(t,e,n,r,i,s){if(wr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ca.current=t===null||t.memoizedState===null?VS:BS,t=n(r,i),fs){s=0;do{if(fs=!1,Ms=0,25<=s)throw Error(I(301));s+=1,ke=ve=null,e.updateQueue=null,ca.current=zS,t=n(r,i)}while(fs)}if(ca.current=Ha,e=ve!==null&&ve.next!==null,wr=0,ke=ve=oe=null,za=!1,e)throw Error(I(300));return t}function Nd(){var t=Ms!==0;return Ms=0,t}function Lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?oe.memoizedState=ke=t:ke=ke.next=t,ke}function wt(){if(ve===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=ke===null?oe.memoizedState:ke.next;if(e!==null)ke=e,ve=t;else{if(t===null)throw Error(I(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ke===null?oe.memoizedState=ke=t:ke=ke.next=t}return ke}function $s(t,e){return typeof e=="function"?e(t):e}function Gu(t){var e=wt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((wr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,oe.lanes|=c,Er|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Dt(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,Er|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qu(t){var e=wt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dt(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Iv(){}function Tv(t,e){var n=oe,r=wt(),i=e(),s=!Dt(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,Rd(xv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,bs(9,Cv.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(I(349));wr&30||kv(n,e,i)}return i}function kv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cv(t,e,n,r){e.value=n,e.getSnapshot=r,Nv(e)&&Rv(t)}function xv(t,e,n){return n(function(){Nv(e)&&Rv(t)})}function Nv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dt(t,n)}catch{return!0}}function Rv(t){var e=an(t,1);e!==null&&Rt(e,t,1,-1)}function nm(t){var e=Lt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:t},e.queue=t,t=t.dispatch=jS.bind(null,oe,t),[e.memoizedState,t]}function bs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Av(){return wt().memoizedState}function ha(t,e,n,r){var i=Lt();oe.flags|=t,i.memoizedState=bs(1|e,n,void 0,r===void 0?null:r)}function Ll(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&Cd(r,o.deps)){i.memoizedState=bs(e,n,s,r);return}}oe.flags|=t,i.memoizedState=bs(1|e,n,s,r)}function rm(t,e){return ha(8390656,8,t,e)}function Rd(t,e){return Ll(2048,8,t,e)}function Dv(t,e){return Ll(4,2,t,e)}function Pv(t,e){return Ll(4,4,t,e)}function Ov(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lv(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4,4,Ov.bind(null,e,t),n)}function Ad(){}function Mv(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bv(t,e,n){return wr&21?(Dt(n,e)||(n=jy(),oe.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function US(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Ku.transition;Ku.transition={};try{t(!1),e()}finally{Y=n,Ku.transition=r}}function Uv(){return wt().memoizedState}function FS(t,e,n){var r=Mn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fv(t))jv(e,n);else if(n=gv(t,e,n,r),n!==null){var i=Ge();Rt(n,t,r,i),Vv(n,e,r)}}function jS(t,e,n){var r=Mn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fv(t))jv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Dt(a,o)){var l=e.interleaved;l===null?(i.next=i,_d(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=gv(t,e,i,r),n!==null&&(i=Ge(),Rt(n,t,r,i),Vv(n,e,r))}}function Fv(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function jv(t,e){fs=za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}var Ha={readContext:vt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},VS={readContext:vt,useCallback:function(t,e){return Lt().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ha(4194308,4,Ov.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return ha(4,2,t,e)},useMemo:function(t,e){var n=Lt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Lt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FS.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Lt();return t={current:t},e.memoizedState=t},useState:nm,useDebugValue:Ad,useDeferredValue:function(t){return Lt().memoizedState=t},useTransition:function(){var t=nm(!1),e=t[0];return t=US.bind(null,t[1]),Lt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Lt();if(re){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Ce===null)throw Error(I(349));wr&30||kv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rm(xv.bind(null,r,s,t),[t]),r.flags|=2048,bs(9,Cv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Lt(),e=Ce.identifierPrefix;if(re){var n=Jt,r=Xt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ms++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BS={readContext:vt,useCallback:Mv,useContext:vt,useEffect:Rd,useImperativeHandle:Lv,useInsertionEffect:Dv,useLayoutEffect:Pv,useMemo:$v,useReducer:Gu,useRef:Av,useState:function(){return Gu($s)},useDebugValue:Ad,useDeferredValue:function(t){var e=wt();return bv(e,ve.memoizedState,t)},useTransition:function(){var t=Gu($s)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Iv,useSyncExternalStore:Tv,useId:Uv,unstable_isNewReconciler:!1},zS={readContext:vt,useCallback:Mv,useContext:vt,useEffect:Rd,useImperativeHandle:Lv,useInsertionEffect:Dv,useLayoutEffect:Pv,useMemo:$v,useReducer:Qu,useRef:Av,useState:function(){return Qu($s)},useDebugValue:Ad,useDeferredValue:function(t){var e=wt();return ve===null?e.memoizedState=t:bv(e,ve.memoizedState,t)},useTransition:function(){var t=Qu($s)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Iv,useSyncExternalStore:Tv,useId:Uv,unstable_isNewReconciler:!1};function pi(t,e){try{var n="",r=e;do n+=y_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HS=typeof WeakMap=="function"?WeakMap:Map;function Bv(t,e,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wa||(Wa=!0,dh=r),nh(t,e)},n}function zv(t,e,n){n=nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){nh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nh(t,e),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function im(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new HS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=iI.bind(null,t,e,n),e.then(t,t))}function sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function om(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nn(-1,1),e.tag=2,On(n,e,1))),n.lanes|=1),t)}var qS=pn.ReactCurrentOwner,et=!1;function We(t,e,n,r){e.child=t===null?_v(e,null,n,r):di(e,t.child,n,r)}function am(t,e,n,r,i){n=n.render;var s=e.ref;return ni(e,i),r=xd(t,e,n,r,s,i),n=Nd(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ln(t,e,i)):(re&&n&&md(e),e.flags|=1,We(t,e,r,i),e.child)}function lm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Hv(t,e,s,r,i)):(t=ma(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Rs,n(o,r)&&t.ref===e.ref)return ln(t,e,i)}return e.flags|=1,t=$n(s,r),t.ref=e.ref,t.return=e,e.child=t}function Hv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Rs(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,ln(t,e,i)}return rh(t,e,n,r,i)}function qv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Yr,it),it|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Yr,it),it|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Yr,it),it|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Yr,it),it|=r;return We(t,e,i,n),e.child}function Wv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rh(t,e,n,r,i){var s=nt(n)?yr:ze.current;return s=ci(e,s),ni(e,i),n=xd(t,e,n,r,s,i),r=Nd(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ln(t,e,i)):(re&&r&&md(e),e.flags|=1,We(t,e,n,i),e.child)}function um(t,e,n,r,i){if(nt(n)){var s=!0;$a(e)}else s=!1;if(ni(e,i),e.stateNode===null)da(t,e),wv(e,n,r),th(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=nt(n)?yr:ze.current,u=ci(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&em(e,o,r,u),En=!1;var d=e.memoizedState;o.state=d,Va(e,r,o,i),l=e.memoizedState,a!==r||d!==l||tt.current||En?(typeof c=="function"&&(eh(e,n,c,r),l=e.memoizedState),(a=En||Zp(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:It(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=nt(n)?yr:ze.current,l=ci(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&em(e,o,r,l),En=!1,d=e.memoizedState,o.state=d,Va(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||tt.current||En?(typeof p=="function"&&(eh(e,n,p,r),y=e.memoizedState),(u=En||Zp(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return ih(t,e,n,r,s,i)}function ih(t,e,n,r,i,s){Wv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gp(e,n,!1),ln(t,e,s);r=e.stateNode,qS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=di(e,t.child,null,s),e.child=di(e,null,a,s)):We(t,e,a,s),e.memoizedState=r.state,i&&Gp(e,n,!0),e.child}function Kv(t){var e=t.stateNode;e.pendingContext?Kp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kp(t,e.context,!1),Id(t,e.containerInfo)}function cm(t,e,n,r,i){return hi(),yd(i),e.flags|=256,We(t,e,n,r),e.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gv(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(se,i&1),t===null)return Jc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bl(o,r,0,null),t=dr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=oh(n),e.memoizedState=sh,t):Dd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return WS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=$n(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$n(a,s):(s=dr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sh,r}return s=t.child,t=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dd(t,e){return e=bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ho(t,e,n,r){return r!==null&&yd(r),di(e,t.child,null,n),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function WS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yu(Error(I(422))),Ho(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bl({mode:"visible",children:r.children},i,0,null),s=dr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&di(e,t.child,null,o),e.child.memoizedState=oh(o),e.memoizedState=sh,s);if(!(e.mode&1))return Ho(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Yu(s,r,void 0),Ho(t,e,o,r)}if(a=(o&t.childLanes)!==0,et||a){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,an(t,i),Rt(r,t,i,-1))}return bd(),r=Yu(Error(I(421))),Ho(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,st=Pn(i.nextSibling),ot=e,re=!0,kt=null,t!==null&&(dt[ft++]=Xt,dt[ft++]=Jt,dt[ft++]=vr,Xt=t.id,Jt=t.overflow,vr=e),e=Dd(e,r.children),e.flags|=4096,e)}function hm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zc(t.return,e,n)}function Xu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Qv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(We(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,n,e);else if(t.tag===19)hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ba(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ba(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xu(e,!0,n,null,s);break;case"together":Xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function da(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KS(t,e,n){switch(e.tag){case 3:Kv(e),hi();break;case 5:Sv(e);break;case 1:nt(e.type)&&$a(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(Fa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?Gv(t,e,n):(X(se,se.current&1),t=ln(t,e,n),t!==null?t.sibling:null);X(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Qv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,qv(t,e,n)}return ln(t,e,n)}var Yv,ah,Xv,Jv;Yv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ah=function(){};Xv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,or(Ut.current);var s=null;switch(n){case"input":i=Rc(t,i),r=Rc(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Pc(t,i),r=Pc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=La)}Lc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ss.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Jv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qi(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GS(t,e,n){var r=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return nt(e.type)&&Ma(),$e(e),null;case 3:return r=e.stateNode,fi(),ne(tt),ne(ze),kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kt!==null&&(mh(kt),kt=null))),ah(t,e),$e(e),null;case 5:Td(e);var i=or(Ls.current);if(n=e.type,t!==null&&e.stateNode!=null)Xv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return $e(e),null}if(t=or(Ut.current),Bo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mt]=e,r[Ps]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<ts.length;i++)ee(ts[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Ep(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Sp(r,s),ee("invalid",r)}Lc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Vo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Vo(r.textContent,a,t),i=["children",""+a]):Ss.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":Oo(r),_p(r,s,!0);break;case"textarea":Oo(r),Ip(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=La)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ky(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mt]=e,t[Ps]=r,Yv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<ts.length;i++)ee(ts[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Ep(t,r),i=Rc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Sp(t,r),i=Pc(t,r),ee("invalid",t);break;default:i=r}Lc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ny(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Is(t,l):typeof l=="number"&&Is(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ss.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&td(t,s,l,o))}switch(n){case"input":Oo(t),_p(t,r,!1);break;case"textarea":Oo(t),Ip(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Jr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Jr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=La)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)Jv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=or(Ls.current),or(Ut.current),Bo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mt]=e,(s=r.nodeValue!==n)&&(t=ot,t!==null))switch(t.tag){case 3:Vo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=e,e.stateNode=r}return $e(e),null;case 13:if(ne(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&st!==null&&e.mode&1&&!(e.flags&128))mv(),hi(),e.flags|=98560,s=!1;else if(s=Bo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Mt]=e}else hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else kt!==null&&(mh(kt),kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?we===0&&(we=3):bd())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return fi(),ah(t,e),t===null&&As(e.stateNode.containerInfo),$e(e),null;case 10:return Ed(e.type._context),$e(e),null;case 17:return nt(e.type)&&Ma(),$e(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qi(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ba(t),o!==null){for(e.flags|=128,Qi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>mi&&(e.flags|=128,r=!0,Qi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ba(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return $e(e),null}else 2*de()-s.renderingStartTime>mi&&n!==1073741824&&(e.flags|=128,r=!0,Qi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=se.current,X(se,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return $d(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?it&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function QS(t,e){switch(gd(e),e.tag){case 1:return nt(e.type)&&Ma(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fi(),ne(tt),ne(ze),kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Td(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return fi(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var qo=!1,Ue=!1,YS=typeof WeakSet=="function"?WeakSet:Set,R=null;function Qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function lh(t,e,n){try{n()}catch(r){le(t,e,r)}}var dm=!1;function XS(t,e){if(qc=Da,t=nv(),pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wc={focusedElem:t,selectionRange:n},Da=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:It(e.type,v),k);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){le(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return y=dm,dm=!1,y}function ps(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lh(e,n,s)}i=i.next}while(i!==r)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zv(t){var e=t.alternate;e!==null&&(t.alternate=null,Zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mt],delete e[Ps],delete e[Qc],delete e[OS],delete e[LS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e0(t){return t.tag===5||t.tag===3||t.tag===4}function fm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=La));else if(r!==4&&(t=t.child,t!==null))for(ch(t,e,n),t=t.sibling;t!==null;)ch(t,e,n),t=t.sibling}function hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hh(t,e,n),t=t.sibling;t!==null;)hh(t,e,n),t=t.sibling}var Re=null,Tt=!1;function gn(t,e,n){for(n=n.child;n!==null;)t0(t,e,n),n=n.sibling}function t0(t,e,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:Ue||Qr(n,e);case 6:var r=Re,i=Tt;Re=null,gn(t,e,n),Re=r,Tt=i,Re!==null&&(Tt?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(Tt?(t=Re,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),xs(t)):Hu(Re,n.stateNode));break;case 4:r=Re,i=Tt,Re=n.stateNode.containerInfo,Tt=!0,gn(t,e,n),Re=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lh(n,e,o),i=i.next}while(i!==r)}gn(t,e,n);break;case 1:if(!Ue&&(Qr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}gn(t,e,n);break;case 21:gn(t,e,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,gn(t,e,n),Ue=r):gn(t,e,n);break;default:gn(t,e,n)}}function pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YS),e.forEach(function(r){var i=oI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,Tt=!1;break e;case 3:Re=a.stateNode.containerInfo,Tt=!0;break e;case 4:Re=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Re===null)throw Error(I(160));t0(s,o,i),Re=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n0(e,t),e=e.sibling}function n0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(St(e,t),Ot(t),r&4){try{ps(3,t,t.return),Ml(3,t)}catch(v){le(t,t.return,v)}try{ps(5,t,t.return)}catch(v){le(t,t.return,v)}}break;case 1:St(e,t),Ot(t),r&512&&n!==null&&Qr(n,n.return);break;case 5:if(St(e,t),Ot(t),r&512&&n!==null&&Qr(n,n.return),t.flags&32){var i=t.stateNode;try{Is(i,"")}catch(v){le(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Iy(i,s),Mc(a,o);var u=Mc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Ny(i,h):c==="dangerouslySetInnerHTML"?Cy(i,h):c==="children"?Is(i,h):td(i,c,h,u)}switch(a){case"input":Ac(i,s);break;case"textarea":Ty(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Jr(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Jr(i,!!s.multiple,s.defaultValue,!0):Jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ps]=s}catch(v){le(t,t.return,v)}}break;case 6:if(St(e,t),Ot(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){le(t,t.return,v)}}break;case 3:if(St(e,t),Ot(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xs(e.containerInfo)}catch(v){le(t,t.return,v)}break;case 4:St(e,t),Ot(t);break;case 13:St(e,t),Ot(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ld=de())),r&4&&pm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ue=(u=Ue)||c,St(e,t),Ue=u):St(e,t),Ot(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(h=R=c;R!==null;){switch(d=R,p=d.child,d.tag){case 0:case 11:case 14:case 15:ps(4,d,d.return);break;case 1:Qr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){le(r,n,v)}}break;case 5:Qr(d,d.return);break;case 22:if(d.memoizedState!==null){gm(h);continue}}p!==null?(p.return=d,R=p):gm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xy("display",o))}catch(v){le(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){le(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:St(e,t),Ot(t),r&4&&pm(t);break;case 21:break;default:St(e,t),Ot(t)}}function Ot(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(e0(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Is(i,""),r.flags&=-33);var s=fm(t);hh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fm(t);ch(t,a,o);break;default:throw Error(I(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JS(t,e,n){R=t,r0(t)}function r0(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||qo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ue;a=qo;var u=Ue;if(qo=o,(Ue=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?ym(i):l!==null?(l.return=o,R=l):ym(i);for(;s!==null;)R=s,r0(s),s=s.sibling;R=i,qo=a,Ue=u}mm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):mm(t)}}function mm(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ue||Ml(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:It(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&xs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ue||e.flags&512&&uh(e)}catch(d){le(e,e.return,d)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function gm(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function ym(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{uh(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{uh(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var ZS=Math.ceil,qa=pn.ReactCurrentDispatcher,Pd=pn.ReactCurrentOwner,gt=pn.ReactCurrentBatchConfig,K=0,Ce=null,me=null,De=0,it=0,Yr=Qn(0),we=0,Us=null,Er=0,$l=0,Od=0,ms=null,Ze=null,Ld=0,mi=1/0,Gt=null,Wa=!1,dh=null,Ln=null,Wo=!1,xn=null,Ka=0,gs=0,fh=null,fa=-1,pa=0;function Ge(){return K&6?de():fa!==-1?fa:fa=de()}function Mn(t){return t.mode&1?K&2&&De!==0?De&-De:$S.transition!==null?(pa===0&&(pa=jy()),pa):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Ky(t.type)),t):1}function Rt(t,e,n,r){if(50<gs)throw gs=0,fh=null,Error(I(185));no(t,n,r),(!(K&2)||t!==Ce)&&(t===Ce&&(!(K&2)&&($l|=n),we===4&&Sn(t,De)),rt(t,r),n===1&&K===0&&!(e.mode&1)&&(mi=de()+500,Pl&&Yn()))}function rt(t,e){var n=t.callbackNode;$_(t,e);var r=Aa(t,t===Ce?De:0);if(r===0)n!==null&&Cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cp(n),e===1)t.tag===0?MS(vm.bind(null,t)):dv(vm.bind(null,t)),DS(function(){!(K&6)&&Yn()}),n=null;else{switch(Vy(r)){case 1:n=od;break;case 4:n=Uy;break;case 16:n=Ra;break;case 536870912:n=Fy;break;default:n=Ra}n=h0(n,i0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function i0(t,e){if(fa=-1,pa=0,K&6)throw Error(I(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=Aa(t,t===Ce?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ga(t,r);else{e=r;var i=K;K|=2;var s=o0();(Ce!==t||De!==e)&&(Gt=null,mi=de()+500,hr(t,e));do try{nI();break}catch(a){s0(t,a)}while(1);wd(),qa.current=s,K=i,me!==null?e=0:(Ce=null,De=0,e=we)}if(e!==0){if(e===2&&(i=jc(t),i!==0&&(r=i,e=ph(t,i))),e===1)throw n=Us,hr(t,0),Sn(t,r),rt(t,de()),n;if(e===6)Sn(t,r);else{if(i=t.current.alternate,!(r&30)&&!eI(i)&&(e=Ga(t,r),e===2&&(s=jc(t),s!==0&&(r=s,e=ph(t,s))),e===1))throw n=Us,hr(t,0),Sn(t,r),rt(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:nr(t,Ze,Gt);break;case 3:if(Sn(t,r),(r&130023424)===r&&(e=Ld+500-de(),10<e)){if(Aa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ge(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gc(nr.bind(null,t,Ze,Gt),e);break}nr(t,Ze,Gt);break;case 4:if(Sn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ZS(r/1960))-r,10<r){t.timeoutHandle=Gc(nr.bind(null,t,Ze,Gt),r);break}nr(t,Ze,Gt);break;case 5:nr(t,Ze,Gt);break;default:throw Error(I(329))}}}return rt(t,de()),t.callbackNode===n?i0.bind(null,t):null}function ph(t,e){var n=ms;return t.current.memoizedState.isDehydrated&&(hr(t,e).flags|=256),t=Ga(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&mh(e)),t}function mh(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function eI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sn(t,e){for(e&=~Od,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nt(e),r=1<<n;t[n]=-1,e&=~r}}function vm(t){if(K&6)throw Error(I(327));ri();var e=Aa(t,0);if(!(e&1))return rt(t,de()),null;var n=Ga(t,e);if(t.tag!==0&&n===2){var r=jc(t);r!==0&&(e=r,n=ph(t,r))}if(n===1)throw n=Us,hr(t,0),Sn(t,e),rt(t,de()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,Ze,Gt),rt(t,de()),null}function Md(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(mi=de()+500,Pl&&Yn())}}function _r(t){xn!==null&&xn.tag===0&&!(K&6)&&ri();var e=K;K|=1;var n=gt.transition,r=Y;try{if(gt.transition=null,Y=1,t)return t()}finally{Y=r,gt.transition=n,K=e,!(K&6)&&Yn()}}function $d(){it=Yr.current,ne(Yr)}function hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AS(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ma();break;case 3:fi(),ne(tt),ne(ze),kd();break;case 5:Td(r);break;case 4:fi();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Ed(r.type._context);break;case 22:case 23:$d()}n=n.return}if(Ce=t,me=t=$n(t.current,null),De=it=e,we=0,Us=null,Od=$l=Er=0,Ze=ms=null,sr!==null){for(e=0;e<sr.length;e++)if(n=sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}sr=null}return t}function s0(t,e){do{var n=me;try{if(wd(),ca.current=Ha,za){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}za=!1}if(wr=0,ke=ve=oe=null,fs=!1,Ms=0,Pd.current=null,n===null||n.return===null){we=1,Us=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=sm(o);if(p!==null){p.flags&=-257,om(p,o,a,s,e),p.mode&1&&im(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){im(s,u,e),bd();break e}l=Error(I(426))}}else if(re&&a.mode&1){var k=sm(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),om(k,o,a,s,e),yd(pi(l,a));break e}}s=l=pi(l,a),we!==4&&(we=2),ms===null?ms=[s]:ms.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Bv(s,l,e);Xp(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ln===null||!Ln.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=zv(s,a,e);Xp(s,w);break e}}s=s.return}while(s!==null)}l0(n)}catch(C){e=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function o0(){var t=qa.current;return qa.current=Ha,t===null?Ha:t}function bd(){(we===0||we===3||we===2)&&(we=4),Ce===null||!(Er&268435455)&&!($l&268435455)||Sn(Ce,De)}function Ga(t,e){var n=K;K|=2;var r=o0();(Ce!==t||De!==e)&&(Gt=null,hr(t,e));do try{tI();break}catch(i){s0(t,i)}while(1);if(wd(),K=n,qa.current=r,me!==null)throw Error(I(261));return Ce=null,De=0,we}function tI(){for(;me!==null;)a0(me)}function nI(){for(;me!==null&&!x_();)a0(me)}function a0(t){var e=c0(t.alternate,t,it);t.memoizedProps=t.pendingProps,e===null?l0(t):me=e,Pd.current=null}function l0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QS(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,me=null;return}}else if(n=GS(n,e,it),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);we===0&&(we=5)}function nr(t,e,n){var r=Y,i=gt.transition;try{gt.transition=null,Y=1,rI(t,e,n,r)}finally{gt.transition=i,Y=r}return null}function rI(t,e,n,r){do ri();while(xn!==null);if(K&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(b_(t,s),t===Ce&&(me=Ce=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wo||(Wo=!0,h0(Ra,function(){return ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gt.transition,gt.transition=null;var o=Y;Y=1;var a=K;K|=4,Pd.current=null,XS(t,n),n0(n,t),IS(Wc),Da=!!qc,Wc=qc=null,t.current=n,JS(n),N_(),K=a,Y=o,gt.transition=s}else t.current=n;if(Wo&&(Wo=!1,xn=t,Ka=i),s=t.pendingLanes,s===0&&(Ln=null),D_(n.stateNode),rt(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wa)throw Wa=!1,t=dh,dh=null,t;return Ka&1&&t.tag!==0&&ri(),s=t.pendingLanes,s&1?t===fh?gs++:(gs=0,fh=t):gs=0,Yn(),null}function ri(){if(xn!==null){var t=Vy(Ka),e=gt.transition,n=Y;try{if(gt.transition=null,Y=16>t?16:t,xn===null)var r=!1;else{if(t=xn,xn=null,Ka=0,K&6)throw Error(I(331));var i=K;for(K|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:ps(8,c,s)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var d=c.sibling,p=c.return;if(Zv(c),c===u){R=null;break}if(d!==null){d.return=p,R=d;break}R=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ps(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,R=m;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(C){le(a,a.return,C)}if(a===o){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(K=i,Yn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(xl,t)}catch{}r=!0}return r}finally{Y=n,gt.transition=e}}return!1}function wm(t,e,n){e=pi(n,e),e=Bv(t,e,1),t=On(t,e,1),e=Ge(),t!==null&&(no(t,1,e),rt(t,e))}function le(t,e,n){if(t.tag===3)wm(t,t,n);else for(;e!==null;){if(e.tag===3){wm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){t=pi(n,t),t=zv(e,t,1),e=On(e,t,1),t=Ge(),e!==null&&(no(e,1,t),rt(e,t));break}}e=e.return}}function iI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ge(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(De&n)===n&&(we===4||we===3&&(De&130023424)===De&&500>de()-Ld?hr(t,0):Od|=n),rt(t,e)}function u0(t,e){e===0&&(t.mode&1?(e=$o,$o<<=1,!($o&130023424)&&($o=4194304)):e=1);var n=Ge();t=an(t,e),t!==null&&(no(t,e,n),rt(t,n))}function sI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),u0(t,n)}function oI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),u0(t,n)}var c0;c0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,KS(t,e,n);et=!!(t.flags&131072)}else et=!1,re&&e.flags&1048576&&fv(e,Ua,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;da(t,e),t=e.pendingProps;var i=ci(e,ze.current);ni(e,n),i=xd(null,e,r,t,i,n);var s=Nd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,$a(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sd(e),i.updater=Ol,e.stateNode=i,i._reactInternals=e,th(e,r,t,n),e=ih(null,e,r,!0,s,n)):(e.tag=0,re&&s&&md(e),We(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(da(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lI(r),t=It(r,t),i){case 0:e=rh(null,e,r,t,n);break e;case 1:e=um(null,e,r,t,n);break e;case 11:e=am(null,e,r,t,n);break e;case 14:e=lm(null,e,r,It(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),rh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),um(t,e,r,i,n);case 3:e:{if(Kv(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yv(t,e),Va(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=pi(Error(I(423)),e),e=cm(t,e,r,n,i);break e}else if(r!==i){i=pi(Error(I(424)),e),e=cm(t,e,r,n,i);break e}else for(st=Pn(e.stateNode.containerInfo.firstChild),ot=e,re=!0,kt=null,n=_v(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),r===i){e=ln(t,e,n);break e}We(t,e,r,n)}e=e.child}return e;case 5:return Sv(e),t===null&&Jc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Kc(r,i)?o=null:s!==null&&Kc(r,s)&&(e.flags|=32),Wv(t,e),We(t,e,o,n),e.child;case 6:return t===null&&Jc(e),null;case 13:return Gv(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=di(e,null,r,n):We(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),am(t,e,r,i,n);case 7:return We(t,e,e.pendingProps,n),e.child;case 8:return We(t,e,e.pendingProps.children,n),e.child;case 12:return We(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(Fa,r._currentValue),r._currentValue=o,s!==null)if(Dt(s.value,o)){if(s.children===i.children&&!tt.current){e=ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}We(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ni(e,n),i=vt(i),r=r(i),e.flags|=1,We(t,e,r,n),e.child;case 14:return r=e.type,i=It(r,e.pendingProps),i=It(r.type,i),lm(t,e,r,i,n);case 15:return Hv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),da(t,e),e.tag=1,nt(r)?(t=!0,$a(e)):t=!1,ni(e,n),wv(e,r,i),th(e,r,i,n),ih(null,e,r,!0,t,n);case 19:return Qv(t,e,n);case 22:return qv(t,e,n)}throw Error(I(156,e.tag))};function h0(t,e){return by(t,e)}function aI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,e,n,r){return new aI(t,e,n,r)}function Ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lI(t){if(typeof t=="function")return Ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rd)return 11;if(t===id)return 14}return 2}function $n(t,e){var n=t.alternate;return n===null?(n=mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ma(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jr:return dr(n.children,i,s,e);case nd:o=8,i|=8;break;case kc:return t=mt(12,n,e,i|2),t.elementType=kc,t.lanes=s,t;case Cc:return t=mt(13,n,e,i),t.elementType=Cc,t.lanes=s,t;case xc:return t=mt(19,n,e,i),t.elementType=xc,t.lanes=s,t;case Ey:return bl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vy:o=10;break e;case wy:o=9;break e;case rd:o=11;break e;case id:o=14;break e;case wn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function dr(t,e,n,r){return t=mt(7,t,r,e),t.lanes=n,t}function bl(t,e,n,r){return t=mt(22,t,r,e),t.elementType=Ey,t.lanes=n,t.stateNode={isHidden:!1},t}function Ju(t,e,n){return t=mt(6,t,null,e),t.lanes=n,t}function Zu(t,e,n){return e=mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fd(t,e,n,r,i,s,o,a,l){return t=new uI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(s),t}function cI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function d0(t){if(!t)return Bn;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(nt(n))return hv(t,n,e)}return e}function f0(t,e,n,r,i,s,o,a,l){return t=Fd(n,r,!0,t,i,s,o,a,l),t.context=d0(null),n=t.current,r=Ge(),i=Mn(n),s=nn(r,i),s.callback=e??null,On(n,s,i),t.current.lanes=i,no(t,i,r),rt(t,r),t}function Ul(t,e,n,r){var i=e.current,s=Ge(),o=Mn(i);return n=d0(n),e.context===null?e.context=n:e.pendingContext=n,e=nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=On(i,e,o),t!==null&&(Rt(t,i,o,s),ua(t,i,o)),o}function Qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jd(t,e){Em(t,e),(t=t.alternate)&&Em(t,e)}function hI(){return null}var p0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vd(t){this._internalRoot=t}Fl.prototype.render=Vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ul(t,e,null,null)};Fl.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){Ul(null,t,null,null)}),e[on]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_n.length&&e!==0&&e<_n[n].priority;n++);_n.splice(n,0,t),n===0&&Wy(t)}};function Bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _m(){}function dI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Qa(o);s.call(u)}}var o=f0(e,r,t,0,null,!1,!1,"",_m);return t._reactRootContainer=o,t[on]=o.current,As(t.nodeType===8?t.parentNode:t),_r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Qa(l);a.call(u)}}var l=Fd(t,0,!1,null,null,!1,!1,"",_m);return t._reactRootContainer=l,t[on]=l.current,As(t.nodeType===8?t.parentNode:t),_r(function(){Ul(e,l,n,r)}),l}function Vl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Qa(o);a.call(l)}}Ul(e,o,t,i)}else o=dI(n,e,t,i,r);return Qa(o)}By=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=es(e.pendingLanes);n!==0&&(ad(e,n|1),rt(e,de()),!(K&6)&&(mi=de()+500,Yn()))}break;case 13:_r(function(){var r=an(t,1);if(r!==null){var i=Ge();Rt(r,t,1,i)}}),jd(t,1)}};ld=function(t){if(t.tag===13){var e=an(t,134217728);if(e!==null){var n=Ge();Rt(e,t,134217728,n)}jd(t,134217728)}};zy=function(t){if(t.tag===13){var e=Mn(t),n=an(t,e);if(n!==null){var r=Ge();Rt(n,t,e,r)}jd(t,e)}};Hy=function(){return Y};qy=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};bc=function(t,e,n){switch(e){case"input":if(Ac(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Dl(r);if(!i)throw Error(I(90));Sy(r),Ac(r,i)}}}break;case"textarea":Ty(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};Dy=Md;Py=_r;var fI={usingClientEntryPoint:!1,Events:[io,Hr,Dl,Ry,Ay,Md]},Yi={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pI={bundleType:Yi.bundleType,version:Yi.version,rendererPackageName:Yi.rendererPackageName,rendererConfig:Yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=My(t),t===null?null:t.stateNode},findFiberByHostInstance:Yi.findFiberByHostInstance||hI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{xl=Ko.inject(pI),bt=Ko}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fI;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bd(e))throw Error(I(200));return cI(t,e,null,n)};ct.createRoot=function(t,e){if(!Bd(t))throw Error(I(299));var n=!1,r="",i=p0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fd(t,1,!1,null,null,n,!1,r,i),t[on]=e.current,As(t.nodeType===8?t.parentNode:t),new Vd(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=My(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return _r(t)};ct.hydrate=function(t,e,n){if(!jl(e))throw Error(I(200));return Vl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!Bd(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=p0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=f0(e,null,t,1,n??null,i,!1,s,o),t[on]=e.current,As(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fl(e)};ct.render=function(t,e,n){if(!jl(e))throw Error(I(200));return Vl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!jl(t))throw Error(I(40));return t._reactRootContainer?(_r(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[on]=null})}),!0):!1};ct.unstable_batchedUpdates=Md;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jl(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Vl(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ct})(h_);const mI=oy(ka);var Sm=ka;Sc.createRoot=Sm.createRoot,Sc.hydrateRoot=Sm.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ya.apply(this,arguments)}var Nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nn||(Nn={}));const Im="popstate";function gI(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Dr(i.location.hash.substr(1));return gh("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Fs(s))}function r(i,s){yI(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return EI(e,n,r,t)}function ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vI(){return Math.random().toString(36).substr(2,8)}function Tm(t){return{usr:t.state,key:t.key}}function gh(t,e,n,r){return n===void 0&&(n=null),Ya({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Dr(e):e,{state:n,key:e&&e.key||r||vI()})}function Fs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Dr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function wI(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:Fs(t);return ye(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function EI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Nn.Pop,l=null;function u(){a=Nn.Pop,l&&l({action:a,location:d.location})}function c(p,y){a=Nn.Push;let v=gh(d.location,p,y);n&&n(v,p);let k=Tm(v),m=d.createHref(v);try{o.pushState(k,"",m)}catch{i.location.assign(m)}s&&l&&l({action:a,location:d.location})}function h(p,y){a=Nn.Replace;let v=gh(d.location,p,y);n&&n(v,p);let k=Tm(v),m=d.createHref(v);o.replaceState(k,"",m),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Im,u),l=p,()=>{i.removeEventListener(Im,u),l=null}},createHref(p){return e(i,p)},encodeLocation(p){let y=wI(typeof p=="string"?p:Fs(p));return{pathname:y.pathname,search:y.search,hash:y.hash}},push:c,replace:h,go(p){return o.go(p)}};return d}var km;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(km||(km={}));function _I(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Dr(e):e,i=y0(r.pathname||"/",n);if(i==null)return null;let s=m0(t);SI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=DI(s[a],LI(i));return o}function m0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=bn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),m0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:RI(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of g0(s.path))i(s,o,l)}),e}function g0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=g0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function SI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:AI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const II=/^:\w+$/,TI=3,kI=2,CI=1,xI=10,NI=-2,Cm=t=>t==="*";function RI(t,e){let n=t.split("/"),r=n.length;return n.some(Cm)&&(r+=NI),e&&(r+=kI),n.filter(i=>!Cm(i)).reduce((i,s)=>i+(II.test(s)?TI:s===""?CI:xI),r)}function AI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function DI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=PI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:bn([i,c.pathname]),pathnameBase:UI(bn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=bn([i,c.pathnameBase]))}return s}function PI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=OI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=MI(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function OI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function LI(t){try{return decodeURI(t)}catch(e){return zd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function MI(t,e){try{return decodeURIComponent(t)}catch(n){return zd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function y0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function zd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $I(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Dr(t):t;return{pathname:n?n.startsWith("/")?n:bI(n,e):e,search:FI(r),hash:jI(i)}}function bI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ec(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function v0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function w0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Dr(t):(i=Ya({},t),ye(!i.pathname||!i.pathname.includes("?"),ec("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),ec("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),ec("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=$I(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const bn=t=>t.join("/").replace(/\/\/+/g,"/"),UI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),FI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class VI{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function BI(t){return t instanceof VI}const zI=["post","put","patch","delete"];[...zI];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yh(){return yh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yh.apply(this,arguments)}function HI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const qI=typeof Object.is=="function"?Object.is:HI,{useState:WI,useEffect:KI,useLayoutEffect:GI,useDebugValue:QI}=_c;function YI(t,e,n){const r=e(),[{inst:i},s]=WI({inst:{value:r,getSnapshot:e}});return GI(()=>{i.value=r,i.getSnapshot=e,tc(i)&&s({inst:i})},[t,r,e]),KI(()=>(tc(i)&&s({inst:i}),t(()=>{tc(i)&&s({inst:i})})),[t]),QI(r),r}function tc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!qI(n,r)}catch{return!0}}function XI(t,e,n){return e()}const JI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZI=!JI,eT=ZI?XI:YI;"useSyncExternalStore"in _c&&(t=>t.useSyncExternalStore)(_c);const tT=S.createContext(null),nT=S.createContext(null),Hd=S.createContext(null),Bl=S.createContext(null),zl=S.createContext(null),Pr=S.createContext({outlet:null,matches:[]}),E0=S.createContext(null);function rT(t,e){let{relative:n}=e===void 0?{}:e;Ni()||ye(!1);let{basename:r,navigator:i}=S.useContext(Bl),{hash:s,pathname:o,search:a}=S0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:bn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ni(){return S.useContext(zl)!=null}function Hl(){return Ni()||ye(!1),S.useContext(zl).location}function oo(){Ni()||ye(!1);let{basename:t,navigator:e}=S.useContext(Bl),{matches:n}=S.useContext(Pr),{pathname:r}=Hl(),i=JSON.stringify(v0(n).map(a=>a.pathnameBase)),s=S.useRef(!1);return S.useEffect(()=>{s.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=w0(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:bn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function _0(){let{matches:t}=S.useContext(Pr),e=t[t.length-1];return e?e.params:{}}function S0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(Pr),{pathname:i}=Hl(),s=JSON.stringify(v0(r).map(o=>o.pathnameBase));return S.useMemo(()=>w0(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function iT(t,e){Ni()||ye(!1);let{navigator:n}=S.useContext(Bl),r=S.useContext(Hd),{matches:i}=S.useContext(Pr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Hl(),u;if(e){var c;let v=typeof e=="string"?Dr(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||ye(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=_I(t,{pathname:d}),y=lT(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:bn([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:bn([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&y?S.createElement(zl.Provider,{value:{location:yh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Nn.Pop}},y):y}function sT(){let t=dT(),e=BI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unhandled Thrown Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:s},"errorElement")," props on ",S.createElement("code",{style:s},"<Route>")))}class oT extends S.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(Pr.Provider,{value:this.props.routeContext},S.createElement(E0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aT(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(tT);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),S.createElement(Pr.Provider,{value:e},r)}function lT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ye(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||S.createElement(sT,null):null,c=e.concat(r.slice(0,a+1)),h=()=>S.createElement(aT,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?S.createElement(oT,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var xm;(function(t){t.UseRevalidator="useRevalidator"})(xm||(xm={}));var Xa;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Xa||(Xa={}));function uT(t){let e=S.useContext(Hd);return e||ye(!1),e}function cT(t){let e=S.useContext(Pr);return e||ye(!1),e}function hT(t){let e=cT(),n=e.matches[e.matches.length-1];return n.route.id||ye(!1),n.route.id}function dT(){var t;let e=S.useContext(E0),n=uT(Xa.UseRouteError),r=hT(Xa.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function I0(t){let{to:e,replace:n,state:r,relative:i}=t;Ni()||ye(!1);let s=S.useContext(Hd),o=oo();return S.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function vn(t){ye(!1)}function fT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nn.Pop,navigator:s,static:o=!1}=t;Ni()&&ye(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Dr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,y=S.useMemo(()=>{let v=y0(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:p}},[a,u,c,h,d,p]);return y==null?null:S.createElement(Bl.Provider,{value:l},S.createElement(zl.Provider,{children:n,value:{location:y,navigationType:i}}))}function pT(t){let{children:e,location:n}=t,r=S.useContext(nT),i=r&&!e?r.router.routes:vh(e);return iT(i,n)}var Nm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Nm||(Nm={}));new Promise(()=>{});function vh(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;if(r.type===S.Fragment){n.push.apply(n,vh(r.props.children,e));return}r.type!==vn&&ye(!1),!r.props.index||!r.props.children||ye(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=vh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wh(){return wh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wh.apply(this,arguments)}function mT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function gT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yT(t,e){return t.button===0&&(!e||e==="_self")&&!gT(t)}const vT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function wT(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=gI({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(fT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const T0=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=mT(e,vT),d=rT(u,{relative:i}),p=ET(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(v){r&&r(v),v.defaultPrevented||p(v)}return S.createElement("a",wh({},h,{href:d,onClick:s?r:y,ref:n,target:l}))});var Rm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Rm||(Rm={}));var Am;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Am||(Am={}));function ET(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=oo(),l=Hl(),u=S0(t,{relative:o});return S.useCallback(c=>{if(yT(c,n)){c.preventDefault();let h=r!==void 0?r:Fs(l)===Fs(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_T=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},C0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_T(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ST=function(t){const e=k0(t);return C0.encodeByteArray(e,!0)},Ja=function(t){return ST(t).replace(/\./g,"")},x0=function(t){try{return C0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function TT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CT(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xT(){try{return typeof indexedDB=="object"}catch{return!1}}function NT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function RT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=()=>RT().__FIREBASE_DEFAULTS__,DT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&x0(t[1]);return e&&JSON.parse(e)},qd=()=>{try{return AT()||DT()||PT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},N0=t=>{var e,n;return(n=(e=qd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},R0=t=>{const e=N0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},OT=()=>{var t;return(t=qd())===null||t===void 0?void 0:t.config},A0=t=>{var e;return(e=qd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ja(JSON.stringify(n)),Ja(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="FirebaseError";class qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MT,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ao.prototype.create)}}class ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$T(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,r)}}function $T(t,e){return t.replace(bT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bT=/\{\$([^}]+)}/g;function UT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Za(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dm(s)&&Dm(o)){if(!Za(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function FT(t,e){const n=new jT(t,e);return n.subscribe.bind(n)}class jT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nc),i.error===void 0&&(i.error=nc),i.complete===void 0&&(i.complete=nc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HT(e))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rr){return this.instances.has(e)}getOptions(e=rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rr){return this.component?this.component.multipleInstances?e:rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zT(t){return t===rr?void 0:t}function HT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const WT={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},KT=G.INFO,GT={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},QT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wd{constructor(e){this.name=e,this._logLevel=KT,this._logHandler=QT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const YT=(t,e)=>e.some(n=>t instanceof n);let Pm,Om;function XT(){return Pm||(Pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JT(){return Om||(Om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P0=new WeakMap,Eh=new WeakMap,O0=new WeakMap,rc=new WeakMap,Kd=new WeakMap;function ZT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&P0.set(n,t)}).catch(()=>{}),Kd.set(e,t),e}function ek(t){if(Eh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Eh.set(t,e)}let _h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||O0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tk(t){_h=t(_h)}function nk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ic(this),e,...n);return O0.set(r,e.sort?e.sort():[e]),Un(r)}:JT().includes(t)?function(...e){return t.apply(ic(this),e),Un(P0.get(this))}:function(...e){return Un(t.apply(ic(this),e))}}function rk(t){return typeof t=="function"?nk(t):(t instanceof IDBTransaction&&ek(t),YT(t,XT())?new Proxy(t,_h):t)}function Un(t){if(t instanceof IDBRequest)return ZT(t);if(rc.has(t))return rc.get(t);const e=rk(t);return e!==t&&(rc.set(t,e),Kd.set(e,t)),e}const ic=t=>Kd.get(t);function ik(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const sk=["get","getKey","getAll","getAllKeys","count"],ok=["put","add","delete","clear"],sc=new Map;function Lm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sc.get(e))return sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ok.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return sc.set(e,s),s}tk(t=>({...t,get:(e,n,r)=>Lm(e,n)||t.get(e,n,r),has:(e,n)=>!!Lm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sh="@firebase/app",Mm="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Wd("@firebase/app"),uk="@firebase/app-compat",ck="@firebase/analytics-compat",hk="@firebase/analytics",dk="@firebase/app-check-compat",fk="@firebase/app-check",pk="@firebase/auth",mk="@firebase/auth-compat",gk="@firebase/database",yk="@firebase/database-compat",vk="@firebase/functions",wk="@firebase/functions-compat",Ek="@firebase/installations",_k="@firebase/installations-compat",Sk="@firebase/messaging",Ik="@firebase/messaging-compat",Tk="@firebase/performance",kk="@firebase/performance-compat",Ck="@firebase/remote-config",xk="@firebase/remote-config-compat",Nk="@firebase/storage",Rk="@firebase/storage-compat",Ak="@firebase/firestore",Dk="@firebase/firestore-compat",Pk="firebase",Ok="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="[DEFAULT]",Lk={[Sh]:"fire-core",[uk]:"fire-core-compat",[hk]:"fire-analytics",[ck]:"fire-analytics-compat",[fk]:"fire-app-check",[dk]:"fire-app-check-compat",[pk]:"fire-auth",[mk]:"fire-auth-compat",[gk]:"fire-rtdb",[yk]:"fire-rtdb-compat",[vk]:"fire-fn",[wk]:"fire-fn-compat",[Ek]:"fire-iid",[_k]:"fire-iid-compat",[Sk]:"fire-fcm",[Ik]:"fire-fcm-compat",[Tk]:"fire-perf",[kk]:"fire-perf-compat",[Ck]:"fire-rc",[xk]:"fire-rc-compat",[Nk]:"fire-gcs",[Rk]:"fire-gcs-compat",[Ak]:"fire-fst",[Dk]:"fire-fst-compat","fire-js":"fire-js",[Pk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Map,Th=new Map;function Mk(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ir(t){const e=t.name;if(Th.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;Th.set(e,t);for(const n of el.values())Mk(n,t);return!0}function ql(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fn=new ao("app","Firebase",$k);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=Ok;function L0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ih,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=OT()),!n)throw Fn.create("no-options");const s=el.get(i);if(s){if(Za(n,s.options)&&Za(r,s.config))return s;throw Fn.create("duplicate-app",{appName:i})}const o=new qT(i);for(const l of Th.values())o.addComponent(l);const a=new bk(n,r,o);return el.set(i,a),a}function Gd(t=Ih){const e=el.get(t);if(!e&&t===Ih)return L0();if(!e)throw Fn.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let i=(r=Lk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(a.join(" "));return}Ir(new zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="firebase-heartbeat-database",Fk=1,js="firebase-heartbeat-store";let oc=null;function M0(){return oc||(oc=ik(Uk,Fk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(js)}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),oc}async function jk(t){try{return(await M0()).transaction(js).objectStore(js).get($0(t))}catch(e){if(e instanceof qt)Sr.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(n.message)}}}async function $m(t,e){try{const r=(await M0()).transaction(js,"readwrite");return await r.objectStore(js).put(e,$0(t)),r.done}catch(n){if(n instanceof qt)Sr.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sr.warn(r.message)}}}function $0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=1024,Bk=30*24*60*60*1e3;class zk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Bk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bm(),{heartbeatsToSend:n,unsentEntries:r}=Hk(this._heartbeatsCache.heartbeats),i=Ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bm(){return new Date().toISOString().substring(0,10)}function Hk(t,e=Vk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Um(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Um(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xT()?NT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Um(t){return Ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t){Ir(new zn("platform-logger",e=>new ak(e),"PRIVATE")),Ir(new zn("heartbeat",e=>new zk(e),"PRIVATE")),Ft(Sh,Mm,t),Ft(Sh,Mm,"esm2017"),Ft("fire-js","")}Wk("");var Kk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Qd=Qd||{},U=Kk||self;function tl(){}function Wl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function uo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Gk(t){return Object.prototype.hasOwnProperty.call(t,ac)&&t[ac]||(t[ac]=++Qk)}var ac="closure_uid_"+(1e9*Math.random()>>>0),Qk=0;function Yk(t,e,n){return t.call.apply(t.bind,arguments)}function Xk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=Yk:Ve=Xk,Ve.apply(null,arguments)}function Go(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Xn(){this.s=this.s,this.o=this.o}var Jk=0;Xn.prototype.s=!1;Xn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Jk!=0)&&Gk(this)};Xn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Fm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Zk=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",tl,e),U.removeEventListener("test",tl,e)}catch{}return t}();function nl(t){return/^[\s\xa0]*$/.test(t)}var jm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lc(t,e){return t<e?-1:t>e?1:0}function Kl(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function $t(t){return Kl().indexOf(t)!=-1}function Xd(t){return Xd[" "](t),t}Xd[" "]=tl;function eC(t){var e=rC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var tC=$t("Opera"),gi=$t("Trident")||$t("MSIE"),U0=$t("Edge"),kh=U0||gi,F0=$t("Gecko")&&!(Kl().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge"))&&!($t("Trident")||$t("MSIE"))&&!$t("Edge"),nC=Kl().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge");function j0(){var t=U.document;return t?t.documentMode:void 0}var rl;e:{var uc="",cc=function(){var t=Kl();if(F0)return/rv:([^\);]+)(\)|;)/.exec(t);if(U0)return/Edge\/([\d\.]+)/.exec(t);if(gi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(nC)return/WebKit\/(\S+)/.exec(t);if(tC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(cc&&(uc=cc?cc[1]:""),gi){var hc=j0();if(hc!=null&&hc>parseFloat(uc)){rl=String(hc);break e}}rl=uc}var rC={};function iC(){return eC(function(){let t=0;const e=jm(String(rl)).split("."),n=jm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=lc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||lc(i[2].length==0,s[2].length==0)||lc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ch;if(U.document&&gi){var Vm=j0();Ch=Vm||parseInt(rl,10)||void 0}else Ch=void 0;var sC=Ch;function Vs(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(F0){e:{try{Xd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:oC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vs.X.h.call(this)}}Le(Vs,Be);var oC={2:"touch",3:"pen",4:"mouse"};Vs.prototype.h=function(){Vs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var co="closure_listenable_"+(1e6*Math.random()|0),aC=0;function lC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++aC,this.ba=this.ea=!1}function Gl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Jd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function V0(t){const e={};for(const n in t)e[n]=t[n];return e}const Bm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Bm.length;s++)n=Bm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ql(t){this.src=t,this.g={},this.h=0}Ql.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Nh(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new lC(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function xh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=b0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Gl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Nh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Zd="closure_lm_"+(1e6*Math.random()|0),dc={};function z0(t,e,n,r,i){if(r&&r.once)return q0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)z0(t,e[s],n,r,i);return null}return n=nf(n),t&&t[co]?t.N(e,n,uo(r)?!!r.capture:!!r,i):H0(t,e,n,!1,r,i)}function H0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=uo(i)?!!i.capture:!!i,a=tf(t);if(a||(t[Zd]=a=new Ql(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=uC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Zk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(K0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uC(){function t(n){return e.call(t.src,t.listener,n)}const e=cC;return t}function q0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)q0(t,e[s],n,r,i);return null}return n=nf(n),t&&t[co]?t.O(e,n,uo(r)?!!r.capture:!!r,i):H0(t,e,n,!0,r,i)}function W0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)W0(t,e[s],n,r,i);else r=uo(r)?!!r.capture:!!r,n=nf(n),t&&t[co]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Nh(s,n,r,i),-1<n&&(Gl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=tf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Nh(e,n,r,i)),(n=-1<t?e[t]:null)&&ef(n))}function ef(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[co])xh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(K0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=tf(e))?(xh(n,t),n.h==0&&(n.src=null,e[Zd]=null)):Gl(t)}}}function K0(t){return t in dc?dc[t]:dc[t]="on"+t}function cC(t,e){if(t.ba)t=!0;else{e=new Vs(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ef(t),t=n.call(r,e)}return t}function tf(t){return t=t[Zd],t instanceof Ql?t:null}var fc="__closure_events_fn_"+(1e9*Math.random()>>>0);function nf(t){return typeof t=="function"?t:(t[fc]||(t[fc]=function(e){return t.handleEvent(e)}),t[fc])}function xe(){Xn.call(this),this.i=new Ql(this),this.P=this,this.I=null}Le(xe,Xn);xe.prototype[co]=!0;xe.prototype.removeEventListener=function(t,e,n,r){W0(this,t,e,n,r)};function Pe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(r,t),B0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Qo(o,r,!0,e)&&i}if(o=e.g=t,i=Qo(o,r,!0,e)&&i,i=Qo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Qo(o,r,!1,e)&&i}xe.prototype.M=function(){if(xe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Gl(n[r]);delete t.g[e],t.h--}}this.I=null};xe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&xh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var rf=U.JSON.stringify;function hC(){var t=Y0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dC{constructor(){this.h=this.g=null}add(e,n){const r=G0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var G0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new fC,t=>t.reset());class fC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pC(t){U.setTimeout(()=>{throw t},0)}function Q0(t,e){Rh||mC(),Ah||(Rh(),Ah=!0),Y0.add(t,e)}var Rh;function mC(){var t=U.Promise.resolve(void 0);Rh=function(){t.then(gC)}}var Ah=!1,Y0=new dC;function gC(){for(var t;t=hC();){try{t.h.call(t.g)}catch(n){pC(n)}var e=G0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ah=!1}function Yl(t,e){xe.call(this),this.h=t||1,this.g=e||U,this.j=Ve(this.lb,this),this.l=Date.now()}Le(Yl,xe);P=Yl.prototype;P.ca=!1;P.R=null;P.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Pe(this,"tick"),this.ca&&(sf(this),this.start()))}};P.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}P.M=function(){Yl.X.M.call(this),sf(this),delete this.g};function of(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function X0(t){t.g=of(()=>{t.g=null,t.i&&(t.i=!1,X0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yC extends Xn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:X0(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bs(t){Xn.call(this),this.h=t,this.g={}}Le(Bs,Xn);var zm=[];function J0(t,e,n,r){Array.isArray(n)||(n&&(zm[0]=n.toString()),n=zm);for(var i=0;i<n.length;i++){var s=z0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Z0(t){Jd(t.g,function(e,n){this.g.hasOwnProperty(n)&&ef(e)},t),t.g={}}Bs.prototype.M=function(){Bs.X.M.call(this),Z0(this)};Bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xl(){this.g=!0}Xl.prototype.Aa=function(){this.g=!1};function vC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function wC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Xr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_C(t,n)+(r?" "+r:"")})}function EC(t,e){t.info(function(){return"TIMEOUT: "+e})}Xl.prototype.info=function(){};function _C(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return rf(n)}catch{return e}}var Or={},Hm=null;function Jl(){return Hm=Hm||new xe}Or.Pa="serverreachability";function ew(t){Be.call(this,Or.Pa,t)}Le(ew,Be);function zs(t){const e=Jl();Pe(e,new ew(e))}Or.STAT_EVENT="statevent";function tw(t,e){Be.call(this,Or.STAT_EVENT,t),this.stat=e}Le(tw,Be);function Ke(t){const e=Jl();Pe(e,new tw(e,t))}Or.Qa="timingevent";function nw(t,e){Be.call(this,Or.Qa,t),this.size=e}Le(nw,Be);function ho(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var Zl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},rw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function af(){}af.prototype.h=null;function qm(t){return t.h||(t.h=t.i())}function iw(){}var fo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function lf(){Be.call(this,"d")}Le(lf,Be);function uf(){Be.call(this,"c")}Le(uf,Be);var Dh;function eu(){}Le(eu,af);eu.prototype.g=function(){return new XMLHttpRequest};eu.prototype.i=function(){return{}};Dh=new eu;function po(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Bs(this),this.O=SC,t=kh?125:void 0,this.T=new Yl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new sw}function sw(){this.i=null,this.g="",this.h=!1}var SC=45e3,Ph={},il={};P=po.prototype;P.setTimeout=function(t){this.O=t};function Oh(t,e,n){t.K=1,t.v=nu(un(e)),t.s=n,t.P=!0,ow(t,null)}function ow(t,e){t.F=Date.now(),mo(t),t.A=un(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),pw(n.i,"t",r),t.C=0,n=t.l.H,t.h=new sw,t.g=Mw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new yC(Ve(t.La,t,t.g),t.N)),J0(t.S,t.g,"readystatechange",t.ib),e=t.H?V0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),zs(),vC(t.j,t.u,t.A,t.m,t.U,t.s)}P.ib=function(t){t=t.target;const e=this.L;e&&Zt(t)==3?e.l():this.La(t)};P.La=function(t){try{if(t==this.g)e:{const c=Zt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||kh||this.g&&(this.h.h||this.g.fa()||Qm(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?zs(3):zs(2)),tu(this);var n=this.g.aa();this.Y=n;t:if(aw(this)){var r=Qm(this.g);t="";var i=r.length,s=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),ys(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,wC(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nl(a)){var u=a;break t}}u=null}if(n=u)Xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lh(this,n);else{this.i=!1,this.o=3,Ke(12),ar(this),ys(this);break e}}this.P?(lw(this,c,o),kh&&this.i&&c==3&&(J0(this.S,this.T,"tick",this.hb),this.T.start())):(Xr(this.j,this.m,o,null),Lh(this,o)),c==4&&ar(this),this.i&&!this.I&&(c==4?Dw(this.l,this):(this.i=!1,mo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),ar(this),ys(this)}}}catch{}finally{}};function aw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function lw(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=IC(t,n),i==il){e==4&&(t.o=4,Ke(14),r=!1),Xr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ph){t.o=4,Ke(15),Xr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xr(t.j,t.m,i,null),Lh(t,i);aw(t)&&i!=il&&i!=Ph&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),gf(e),e.K=!0,Ke(11))):(Xr(t.j,t.m,n,"[Invalid Chunked Response]"),ar(t),ys(t))}P.hb=function(){if(this.g){var t=Zt(this.g),e=this.g.fa();this.C<e.length&&(tu(this),lw(this,t,e),this.i&&t!=4&&mo(this))}};function IC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?il:(n=Number(e.substring(n,r)),isNaN(n)?Ph:(r+=1,r+n>e.length?il:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.I=!0,ar(this)};function mo(t){t.V=Date.now()+t.O,uw(t,t.O)}function uw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ho(Ve(t.gb,t),e)}function tu(t){t.B&&(U.clearTimeout(t.B),t.B=null)}P.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(EC(this.j,this.A),this.K!=2&&(zs(),Ke(17)),ar(this),this.o=2,ys(this)):uw(this,this.V-t)};function ys(t){t.l.G==0||t.I||Dw(t.l,t)}function ar(t){tu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,sf(t.T),Z0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Lh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Mh(n.h,t))){if(!t.J&&Mh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)al(n),su(n);else break e;mf(n),Ke(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ho(Ve(n.cb,n),6e3));if(1>=yw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else lr(n,11)}else if((t.J||n.g==t)&&al(n),!nl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(cf(s,s.h),s.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,ie(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Lw(r,r.H?r.ka:null,r.V),o.J){vw(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(tu(a),mo(a)),r.g=o}else Rw(r);0<n.i.length&&ou(n)}else u[0]!="stop"&&u[0]!="close"||lr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?lr(n,7):pf(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}zs(4)}catch{}}function TC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function kC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function cw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kC(t),r=TC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var hw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof fr){this.h=e!==void 0?e:t.h,sl(this,t.j),this.s=t.s,this.g=t.g,ol(this,t.m),this.l=t.l,e=t.i;var n=new Hs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wm(this,n),this.o=t.o}else t&&(n=String(t).match(hw))?(this.h=!!e,sl(this,n[1]||"",!0),this.s=is(n[2]||""),this.g=is(n[3]||"",!0),ol(this,n[4]),this.l=is(n[5]||"",!0),Wm(this,n[6]||"",!0),this.o=is(n[7]||"")):(this.h=!!e,this.i=new Hs(null,this.h))}fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ss(e,Km,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ss(e,Km,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ss(n,n.charAt(0)=="/"?RC:NC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ss(n,DC)),t.join("")};function un(t){return new fr(t)}function sl(t,e,n){t.j=n?is(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ol(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wm(t,e,n){e instanceof Hs?(t.i=e,PC(t.i,t.h)):(n||(e=ss(e,AC)),t.i=new Hs(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function nu(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function is(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ss(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Km=/[#\/\?@]/g,NC=/[#\?:]/g,RC=/[#\?]/g,AC=/[#\?@]/g,DC=/#/g;function Hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jn(t){t.g||(t.g=new Map,t.h=0,t.i&&CC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Hs.prototype;P.add=function(t,e){Jn(this),this.i=null,t=Ai(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dw(t,e){Jn(t),e=Ai(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fw(t,e){return Jn(t),e=Ai(t,e),t.g.has(e)}P.forEach=function(t,e){Jn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.oa=function(){Jn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.W=function(t){Jn(this);let e=[];if(typeof t=="string")fw(this,t)&&(e=e.concat(this.g.get(Ai(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Jn(this),this.i=null,t=Ai(this,t),fw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function pw(t,e,n){dw(t,e),0<n.length&&(t.i=null,t.g.set(Ai(t,e),Yd(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ai(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function PC(t,e){e&&!t.j&&(Jn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(dw(this,r),pw(this,i,n))},t)),t.j=e}var OC=class{constructor(e,n){this.h=e,this.g=n}};function mw(t){this.l=t||LC,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LC=10;function gw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yw(t){return t.h?1:t.g?t.g.size:0}function Mh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function cf(t,e){t.g?t.g.add(e):t.h=e}function vw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mw.prototype.cancel=function(){if(this.i=ww(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ww(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Yd(t.i)}function hf(){}hf.prototype.stringify=function(t){return U.JSON.stringify(t,void 0)};hf.prototype.parse=function(t){return U.JSON.parse(t,void 0)};function MC(){this.g=new hf}function $C(t,e,n){const r=n||"";try{cw(t,function(i,s){let o=i;uo(i)&&(o=rf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function bC(t,e){const n=new Xl;if(U.Image){const r=new Image;r.onload=Go(Yo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Go(Yo,n,r,"TestLoadImage: error",!1,e),r.onabort=Go(Yo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Go(Yo,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Yo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function go(t){this.l=t.ac||null,this.j=t.jb||!1}Le(go,af);go.prototype.g=function(){return new ru(this.l,this.j)};go.prototype.i=function(t){return function(){return t}}({});function ru(t,e){xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=df,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(ru,xe);var df=0;P=ru.prototype;P.open=function(t,e){if(this.readyState!=df)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qs(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||U).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yo(this)),this.readyState=df};P.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ew(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ew(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}P.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yo(this):qs(this),this.readyState==3&&Ew(this)}};P.Va=function(t){this.g&&(this.response=this.responseText=t,yo(this))};P.Ua=function(t){this.g&&(this.response=t,yo(this))};P.ga=function(){this.g&&yo(this)};function yo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qs(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ru.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var UC=U.JSON.parse;function ce(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_w,this.K=this.L=!1}Le(ce,xe);var _w="",FC=/^https?$/i,jC=["POST","PUT"];P=ce.prototype;P.Ka=function(t){this.L=t};P.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Dh.g(),this.C=this.u?qm(this.u):qm(Dh),this.g.onreadystatechange=Ve(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Gm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=b0(jC,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Tw(this),0<this.B&&((this.K=VC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.qa,this)):this.A=of(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Gm(this,s)}};function VC(t){return gi&&iC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.qa=function(){typeof Qd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function Gm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Sw(t),iu(t)}function Sw(t){t.D||(t.D=!0,Pe(t,"complete"),Pe(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),iu(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),iu(this,!0)),ce.X.M.call(this)};P.Ha=function(){this.s||(this.F||this.v||this.l?Iw(this):this.fb())};P.fb=function(){Iw(this)};function Iw(t){if(t.h&&typeof Qd<"u"&&(!t.C[1]||Zt(t)!=4||t.aa()!=2)){if(t.v&&Zt(t)==4)of(t.Ha,0,t);else if(Pe(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(hw)[1]||null;if(!i&&U.self&&U.self.location){var s=U.self.location.protocol;i=s.substr(0,s.length-1)}r=!FC.test(i?i.toLowerCase():"")}n=r}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var o=2<Zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Sw(t)}}finally{iu(t)}}}}function iu(t,e){if(t.g){Tw(t);const n=t.g,r=t.C[0]?tl:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Tw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}function Zt(t){return t.g?t.g.readyState:0}P.aa=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};P.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),UC(e)}};function Qm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _w:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ea=function(){return this.m};P.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function kw(t){let e="";return Jd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ff(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=kw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function Xi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cw(t){this.Ca=0,this.i=[],this.j=new Xl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Xi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Xi("baseRetryDelayMs",5e3,t),this.bb=Xi("retryDelaySeedMs",1e4,t),this.$a=Xi("forwardChannelMaxRetries",2,t),this.ta=Xi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new mw(t&&t.concurrentRequestLimit),this.Fa=new MC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}P=Cw.prototype;P.ma=8;P.G=1;function pf(t){if(xw(t),t.G==3){var e=t.U++,n=un(t.F);ie(n,"SID",t.I),ie(n,"RID",e),ie(n,"TYPE","terminate"),vo(t,n),e=new po(t,t.j,e,void 0),e.K=2,e.v=nu(un(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(e.v.toString(),"")),!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=Mw(e.l,null),e.g.da(e.v)),e.F=Date.now(),mo(e)}Ow(t)}function su(t){t.g&&(gf(t),t.g.cancel(),t.g=null)}function xw(t){su(t),t.u&&(U.clearTimeout(t.u),t.u=null),al(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function ou(t){gw(t.h)||t.m||(t.m=!0,Q0(t.Ja,t),t.C=0)}function BC(t,e){return yw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ho(Ve(t.Ja,t,e),Pw(t,t.C)),t.C++,!0)}P.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new po(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=V0(s),B0(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Nw(this,i,e),n=un(this.F),ie(n,"RID",t),ie(n,"CVER",22),this.D&&ie(n,"X-HTTP-Session-Id",this.D),vo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(kw(s)))+"&"+e:this.o&&ff(n,this.o,s)),cf(this.h,i),this.Ya&&ie(n,"TYPE","init"),this.O?(ie(n,"$req",e),ie(n,"SID","null"),i.Z=!0,Oh(i,n,null)):Oh(i,n,e),this.G=2}}else this.G==3&&(t?Ym(this,t):this.i.length==0||gw(this.h)||Ym(this))};function Ym(t,e){var n;e?n=e.m:n=t.U++;const r=un(t.F);ie(r,"SID",t.I),ie(r,"RID",n),ie(r,"AID",t.T),vo(t,r),t.o&&t.s&&ff(r,t.o,t.s),n=new po(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Nw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),cf(t.h,n),Oh(n,r,e)}function vo(t,e){t.ia&&Jd(t.ia,function(n,r){ie(e,r,n)}),t.l&&cw({},function(n,r){ie(e,r,n)})}function Nw(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ve(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{$C(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Rw(t){t.g||t.u||(t.Z=1,Q0(t.Ia,t),t.A=0)}function mf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ho(Ve(t.Ia,t),Pw(t,t.A)),t.A++,!0)}P.Ia=function(){if(this.u=null,Aw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ho(Ve(this.eb,this),t)}};P.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ke(10),su(this),Aw(this))};function gf(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function Aw(t){t.g=new po(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=un(t.sa);ie(e,"RID","rpc"),ie(e,"SID",t.I),ie(e,"CI",t.L?"0":"1"),ie(e,"AID",t.T),ie(e,"TYPE","xmlhttp"),vo(t,e),t.o&&t.s&&ff(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=nu(un(e)),n.s=null,n.P=!0,ow(n,t)}P.cb=function(){this.v!=null&&(this.v=null,su(this),mf(this),Ke(19))};function al(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function Dw(t,e){var n=null;if(t.g==e){al(t),gf(t),t.g=null;var r=2}else if(Mh(t.h,e))n=e.D,vw(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Jl(),Pe(r,new nw(r,n)),ou(t)}else Rw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&BC(t,e)||r==2&&mf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:lr(t,5);break;case 4:lr(t,10);break;case 3:lr(t,6);break;default:lr(t,2)}}}function Pw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function lr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ve(t.kb,t);n||(n=new fr("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||sl(n,"https"),nu(n)),bC(n.toString(),r)}else Ke(2);t.G=0,t.l&&t.l.va(e),Ow(t),xw(t)}P.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Ow(t){if(t.G=0,t.la=[],t.l){const e=ww(t.h);(e.length!=0||t.i.length!=0)&&(Fm(t.la,e),Fm(t.la,t.i),t.h.i.length=0,Yd(t.i),t.i.length=0),t.l.ua()}}function Lw(t,e,n){var r=n instanceof fr?un(n):new fr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ol(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new fr(null,void 0);r&&sl(s,r),e&&(s.g=e),i&&ol(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ie(r,n,e),ie(r,"VER",t.ma),vo(t,r),r}function Mw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ce(new go({jb:!0})):new ce(t.ra),e.Ka(t.H),e}function $w(){}P=$w.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Ra=function(){};function ll(){if(gi&&!(10<=Number(sC)))throw Error("Environmental error: no available transport.")}ll.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){xe.call(this),this.g=new Cw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!nl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!nl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Di(this)}Le(ut,xe);ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ke(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Lw(t,null,t.V),ou(t)};ut.prototype.close=function(){pf(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rf(t),t=n);e.i.push(new OC(e.ab++,t)),e.G==3&&ou(e)};ut.prototype.M=function(){this.g.l=null,delete this.j,pf(this.g),delete this.g,ut.X.M.call(this)};function bw(t){lf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(bw,lf);function Uw(){uf.call(this),this.status=1}Le(Uw,uf);function Di(t){this.g=t}Le(Di,$w);Di.prototype.xa=function(){Pe(this.g,"a")};Di.prototype.wa=function(t){Pe(this.g,new bw(t))};Di.prototype.va=function(t){Pe(this.g,new Uw)};Di.prototype.ua=function(){Pe(this.g,"b")};ll.prototype.createWebChannel=ll.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Zl.NO_ERROR=0;Zl.TIMEOUT=8;Zl.HTTP_ERROR=6;rw.COMPLETE="complete";iw.EventType=fo;fo.OPEN="a";fo.CLOSE="b";fo.ERROR="c";fo.MESSAGE="d";xe.prototype.listen=xe.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;var zC=function(){return new ll},HC=function(){return Jl()},pc=Zl,qC=rw,WC=Or,Xm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},KC=go,Xo=iw,GC=ce;const Jm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Wd("@firebase/firestore");function Zm(){return Tr.logLevel}function L(t,...e){if(Tr.logLevel<=G.DEBUG){const n=e.map(yf);Tr.debug(`Firestore (${Pi}): ${t}`,...n)}}function cn(t,...e){if(Tr.logLevel<=G.ERROR){const n=e.map(yf);Tr.error(`Firestore (${Pi}): ${t}`,...n)}}function $h(t,...e){if(Tr.logLevel<=G.WARN){const n=e.map(yf);Tr.warn(`Firestore (${Pi}): ${t}`,...n)}}function yf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: `+t;throw cn(e),new Error(e)}function J(t,e){t||b()}function j(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(be.UNAUTHENTICATED))}shutdown(){}}class YC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XC{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new rn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new Fw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new be(e)}}class JC{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=be.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(J(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ZC{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new JC(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ex{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tx{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.A=n.token,new ex(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=nx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function yi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ee(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new Ee(0,0))}static max(){return new F(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ws?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends Ws{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const rx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Ws{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return rx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(te.fromString(e))}static fromName(e){return new M(te.fromString(e).popFirst(5))}static empty(){return new M(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new te(e.slice()))}}function ix(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new Hn(i,M.empty(),e)}function sx(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(F.min(),M.empty(),-1)}static max(){return new Hn(F.max(),M.empty(),-1)}}function ox(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==ax)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Eo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}vf.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ks{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ks("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ks&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){return t==null}function ul(t){return t===0&&1/t==-1/0}function cx(t){return typeof t=="number"&&Number.isInteger(t)&&!ul(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new qe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const hx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(J(!!t),typeof t=="string"){let e=0;const n=hx.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vi(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zw(t){const e=t.mapValue.fields.__previous_value__;return Bw(e)?zw(e):e}function Gs(t){const e=qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bw(t)?4:dx(t)?9007199254740991:10:b()}function Ht(t,e){if(t===e)return!0;const n=kr(t);if(n!==kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gs(t).isEqual(Gs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=qn(r.timestampValue),o=qn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return vi(r.bytesValue).isEqual(vi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return pe(r.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return pe(r.integerValue)===pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=pe(r.doubleValue),o=pe(i.doubleValue);return s===o?ul(s)===ul(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return yi(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(eg(s)!==eg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ht(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function Qs(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function wi(t,e){if(t===e)return 0;const n=kr(t),r=kr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=pe(i.integerValue||i.doubleValue),a=pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return tg(t.timestampValue,e.timestampValue);case 4:return tg(Gs(t),Gs(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=vi(i),a=vi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(pe(i.latitude),pe(s.latitude));return o!==0?o:Q(pe(i.longitude),pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=wi(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Jo.mapValue&&s===Jo.mapValue)return 0;if(i===Jo.mapValue)return 1;if(s===Jo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=wi(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function tg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=qn(t),r=qn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Ei(t){return bh(t)}function bh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=qn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?vi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=bh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${bh(r.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function ng(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uh(t){return!!t&&"integerValue"in t}function wf(t){return!!t&&"arrayValue"in t}function rg(t){return!!t&&"nullValue"in t}function ig(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ga(t){return!!t&&"mapValue"in t}function vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function dx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.position=e,this.inclusive=n}}function sg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=wi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function og(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{}class ge extends Hw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mx(e,n,r):n==="array-contains"?new vx(e,r):n==="in"?new wx(e,r):n==="not-in"?new Ex(e,r):n==="array-contains-any"?new _x(e,r):new ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gx(e,r):new yx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wi(n,this.value)):n!==null&&kr(this.value)===kr(n)&&this.matchesComparison(wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pt extends Hw{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Pt(e,n)}matches(e){return qw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qw(t){return t.op==="and"}function fx(t){return px(t)&&qw(t)}function px(t){for(const e of t.filters)if(e instanceof Pt)return!1;return!0}function Ww(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+Ei(t.value);{const e=t.filters.map(n=>Ww(n)).join(",");return`${t.op}(${e})`}}function Kw(t,e){return t instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.field.isEqual(r.field)&&Ht(n.value,r.value)}(t,e):t instanceof Pt?function(n,r){return r instanceof Pt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Kw(s,r.filters[o]),!0):!1}(t,e):void b()}function Gw(t){return t instanceof ge?function(e){return`${e.field.canonicalString()} ${e.op} ${Ei(e.value)}`}(t):t instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(Gw).join(" ,")+"}"}(t):"Filter"}class mx extends ge{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class gx extends ge{constructor(e,n){super(e,"in",n),this.keys=Qw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yx extends ge{constructor(e,n){super(e,"not-in",n),this.keys=Qw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class vx extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wf(n)&&Qs(n.arrayValue,this.value)}}class wx extends ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qs(this.value.arrayValue,n)}}class Ex extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qs(this.value.arrayValue,n)}}class _x extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function Sx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zo(this.root,e,this.comparator,!0)}}class Zo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ae.RED,this.left=i??Ae.EMPTY,this.right=s??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ae(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ag(this.data.getIterator())}getIteratorFrom(e){return new ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new jt([])}unionWith(e){let n=new _e(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(n)}setAll(e){let n=je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=vs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Oi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(vs(this.value))}}function Yw(t){const e=[];return Oi(t.fields,(n,r)=>{const i=new je([n]);if(ga(r)){const s=Yw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,F.min(),F.min(),F.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new Fe(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new Fe(e,2,n,F.min(),F.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,F.min(),F.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function lg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ix(t,e,n,r,i,s,o)}function Ef(t){const e=j(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ww(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ei(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ei(r)).join(",")),e.ft=n}return e.ft}function _f(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Sx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!og(t.startAt,e.startAt)&&og(t.endAt,e.endAt)}function Fh(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function Tx(t,e,n,r,i,s,o,a){return new Li(t,e,n,r,i,s,o,a)}function lu(t){return new Li(t)}function ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Sf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function uu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Xw(t){return t.collectionGroup!==null}function si(t){const e=j(t);if(e.dt===null){e.dt=[];const n=uu(e),r=Sf(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new ii(n)),e.dt.push(new ii(je.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new ii(je.keyField(),s))}}}return e.dt}function hn(t){const e=j(t);if(!e._t)if(e.limitType==="F")e._t=lg(e.path,e.collectionGroup,si(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of si(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ii(s.field,o))}const r=e.endAt?new cl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new cl(e.startAt.position,e.startAt.inclusive):null;e._t=lg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function jh(t,e){e.getFirstInequalityField(),uu(t);const n=t.filters.concat([e]);return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hl(t,e,n){return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cu(t,e){return _f(hn(t),hn(e))&&t.limitType===e.limitType}function Jw(t){return`${Ef(hn(t))}|lt:${t.limitType}`}function Vh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Gw(r)).join(", ")}]`),au(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ei(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ei(r)).join(",")),`Target(${n})`}(hn(t))}; limitType=${t.limitType})`}function If(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of si(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=sg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,si(n),r)||n.endAt&&!function(i,s,o){const a=sg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,si(n),r))}(t,e)}function kx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zw(t){return(e,n)=>{let r=!1;for(const i of si(t)){const s=Cx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Cx(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?wi(a,l):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ul(e)?"-0":e}}function t1(t){return{integerValue:""+t}}function xx(t,e){return cx(e)?t1(e):e1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this._=void 0}}function Nx(t,e,n){return t instanceof Ys?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Xs?r1(t,e):t instanceof Js?i1(t,e):function(r,i){const s=n1(r,i),o=cg(s)+cg(r.gt);return Uh(s)&&Uh(r.gt)?t1(o):e1(r.yt,o)}(t,e)}function Rx(t,e,n){return t instanceof Xs?r1(t,e):t instanceof Js?i1(t,e):n}function n1(t,e){return t instanceof dl?Uh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ys extends hu{}class Xs extends hu{constructor(e){super(),this.elements=e}}function r1(t,e){const n=s1(e);for(const r of t.elements)n.some(i=>Ht(i,r))||n.push(r);return{arrayValue:{values:n}}}class Js extends hu{constructor(e){super(),this.elements=e}}function i1(t,e){let n=s1(e);for(const r of t.elements)n=n.filter(i=>!Ht(i,r));return{arrayValue:{values:n}}}class dl extends hu{constructor(e,n){super(),this.yt=e,this.gt=n}}function cg(t){return pe(t.integerValue||t.doubleValue)}function s1(t){return wf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n){this.field=e,this.transform=n}}function Dx(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Xs&&r instanceof Xs||n instanceof Js&&r instanceof Js?yi(n.elements,r.elements,Ht):n instanceof dl&&r instanceof dl?Ht(n.gt,r.gt):n instanceof Ys&&r instanceof Ys}(t.transform,e.transform)}class Px{constructor(e,n){this.version=e,this.transformResults=n}}class At{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class du{}function o1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tf(t.key,At.none()):new _o(t.key,t.data,At.none());{const n=t.data,r=pt.empty();let i=new _e(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Lr(t.key,r,new jt(i.toArray()),At.none())}}function Ox(t,e,n){t instanceof _o?function(r,i,s){const o=r.value.clone(),a=dg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(r,i,s){if(!ya(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=dg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(a1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ws(t,e,n,r){return t instanceof _o?function(i,s,o,a){if(!ya(i.precondition,s))return o;const l=i.value.clone(),u=fg(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(i,s,o,a){if(!ya(i.precondition,s))return o;const l=fg(i.fieldTransforms,a,s),u=s.data;return u.setAll(a1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ya(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Lx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=n1(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function hg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&yi(n,r,(i,s)=>Dx(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _o extends du{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Lr extends du{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function a1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dg(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Rx(o,a,n[i]))}return r}function fg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Nx(s,o,e))}return r}class Tf extends du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mx extends du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,W;function bx(t){switch(t){default:return b();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function l1(t){if(t===void 0)return cn("GRPC error has no .code"),_.UNKNOWN;switch(t){case fe.OK:return _.OK;case fe.CANCELLED:return _.CANCELLED;case fe.UNKNOWN:return _.UNKNOWN;case fe.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case fe.INTERNAL:return _.INTERNAL;case fe.UNAVAILABLE:return _.UNAVAILABLE;case fe.UNAUTHENTICATED:return _.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case fe.NOT_FOUND:return _.NOT_FOUND;case fe.ALREADY_EXISTS:return _.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return _.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case fe.ABORTED:return _.ABORTED;case fe.OUT_OF_RANGE:return _.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return _.UNIMPLEMENTED;case fe.DATA_LOSS:return _.DATA_LOSS;default:return b()}}(W=fe||(fe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Oi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Vw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=new Se(M.comparator);function dn(){return Ux}const u1=new Se(M.comparator);function os(...t){let e=u1;for(const n of t)e=e.insert(n.key,n);return e}function c1(t){let e=u1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ur(){return Es()}function h1(){return Es()}function Es(){return new Mi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Fx=new Se(M.comparator),jx=new _e(M.comparator);function H(...t){let e=jx;for(const n of t)e=e.add(n);return e}const Vx=new _e(Q);function d1(){return Vx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fu(F.min(),i,d1(),dn(),H())}}class So{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new So(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class f1{constructor(e,n){this.targetId=e,this.Et=n}}class p1{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class pg{constructor(){this.At=0,this.Rt=gg(),this.bt=qe.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=H(),n=H(),r=H();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new So(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=gg()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Bx{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=dn(),this.qt=mg(),this.Ut=new _e(Q)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(Fh(s))if(r===0){const o=new M(s.path);this.Qt(n,o,Fe.newNoDocument(o,F.min()))}else J(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Fh(a.target)){const l=new M(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Fe.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=H();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new fu(e,n,this.Ut,this.Lt,r);return this.Lt=dn(),this.qt=mg(),this.Ut=new _e(Q),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new pg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new _e(Q),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new pg),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function mg(){return new Se(M.comparator)}function gg(){return new Se(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Hx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qx=(()=>({and:"AND",or:"OR"}))();class Wx{constructor(e,n){this.databaseId=e,this.wt=n}}function fl(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function m1(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Kx(t,e){return fl(t,e.toTimestamp())}function Vt(t){return J(!!t),F.fromTimestamp(function(e){const n=qn(e);return new Ee(n.seconds,n.nanos)}(t))}function kf(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function g1(t){const e=te.fromString(t);return J(E1(e)),e}function Bh(t,e){return kf(t.databaseId,e.path)}function mc(t,e){const n=g1(e);if(n.get(1)!==t.databaseId.projectId)throw new N(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(y1(n))}function zh(t,e){return kf(t.databaseId,e)}function Gx(t){const e=g1(t);return e.length===4?te.emptyPath():y1(e)}function Hh(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function y1(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yg(t,e,n){return{name:Bh(t,e),fields:n.value.mapValue.fields}}function Qx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(J(u===void 0||typeof u=="string"),qe.fromBase64String(u||"")):(J(u===void 0||u instanceof Uint8Array),qe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:l1(l.code);return new N(u,l.message||"")}(o);n=new p1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mc(t,r.document.name),s=Vt(r.document.updateTime),o=r.document.createTime?Vt(r.document.createTime):F.min(),a=new pt({mapValue:{fields:r.document.fields}}),l=Fe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new va(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mc(t,r.document),s=r.readTime?Vt(r.readTime):F.min(),o=Fe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new va([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mc(t,r.document),s=r.removedTargetIds||[];n=new va([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new $x(i),o=r.targetId;n=new f1(o,s)}}return n}function Yx(t,e){let n;if(e instanceof _o)n={update:yg(t,e.key,e.value)};else if(e instanceof Tf)n={delete:Bh(t,e.key)};else if(e instanceof Lr)n={update:yg(t,e.key,e.data),updateMask:sN(e.fieldMask)};else{if(!(e instanceof Mx))return b();n={verify:Bh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ys)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Js)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof dl)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Kx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function Xx(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Vt(r.updateTime):Vt(i);return s.isEqual(F.min())&&(s=Vt(i)),new Px(s,r.transformResults||[])}(n,e))):[]}function Jx(t,e){return{documents:[zh(t,e.path)]}}function Zx(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=zh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return w1(Pt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:br(c.field),direction:nN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||au(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function eN(t){let e=Gx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=v1(c);return h instanceof Pt&&fx(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ii(Ur(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,au(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new cl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new cl(d,h)}(n.endAt)),Tx(e,i,o,s,a,"F",l,u)}function tN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function v1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ur(e.unaryFilter.field);return ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ur(e.unaryFilter.field);return ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(e.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ur(e.unaryFilter.field);return ge.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(e){return ge.create(Ur(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(n=>v1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(t):b()}function nN(t){return zx[t]}function rN(t){return Hx[t]}function iN(t){return qx[t]}function br(t){return{fieldPath:t.canonicalString()}}function Ur(t){return je.fromServerFormat(t.fieldPath)}function w1(t){return t instanceof ge?function(e){if(e.op==="=="){if(ig(e.value))return{unaryFilter:{field:br(e.field),op:"IS_NAN"}};if(rg(e.value))return{unaryFilter:{field:br(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ig(e.value))return{unaryFilter:{field:br(e.field),op:"IS_NOT_NAN"}};if(rg(e.value))return{unaryFilter:{field:br(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:br(e.field),op:rN(e.op),value:e.value}}}(t):t instanceof Pt?function(e){const n=e.getFilters().map(r=>w1(r));return n.length===1?n[0]:{compositeFilter:{op:iN(e.op),filters:n}}}(t):b()}function sN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function E1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ox(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=h1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=o1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&yi(this.mutations,e.mutations,(n,r)=>hg(n,r))&&yi(this.baseMutations,e.baseMutations,(n,r)=>hg(n,r))}}class Cf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=Fx;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r,i,s=F.min(),o=F.min(),a=qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.ie=e}}function uN(t){const e=eN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.Je=new hN}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Hn.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class hN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new _i(0)}static vn(){return new _i(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.changes=new Mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ws(r.mutation,i,jt.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=os();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=dn();const o=Es(),a=Es();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Lr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),ws(c.mutation,u,c.mutation.getFieldMask(),Ee.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new fN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Es();let i=new Se((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||jt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=h1();c.forEach(d=>{if(!s.has(d)){const p=o1(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(ur());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:c1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=os();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=os();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new Li(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Fe.newInvalidDocument(u)))});let o=os();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ws(u.mutation,l,jt.empty(),Ee.now()),If(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Vt(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:uN(r.bundledQuery),readTime:Vt(r.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.overlays=new Se(M.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ur();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=ur(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ur(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ur(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aN(n,r));let s=this.es.get(n);s===void 0&&(s=H(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.ns=new _e(Te.ss),this.rs=new _e(Te.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Te(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Te(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new M(new te([])),r=new Te(n,e),i=new Te(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new te([])),r=new Te(n,e),i=new Te(n,e+1);let s=H();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Te(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||Q(e._s,n._s)}static os(e,n){return Q(e._s,n._s)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new _e(Te.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Te(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(Q);return n.forEach(i=>{const s=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),T.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Te(new M(s),0);let a=new _e(Q);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return T.forEach(n.mutations,i=>{const s=new Te(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Te(n,0),i=this.gs.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.Es=e,this.docs=new Se(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let r=dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),T.resolve(r)}getAllFromCollection(e,n,r){let i=dn();const s=new M(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||ox(sx(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,r,i){b()}As(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wN(this)}getSize(e){return T.resolve(this.size)}}class wN extends dN{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.persistence=e,this.Rs=new Mi(n=>Ef(n),_f),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Ps=new xf,this.targetCount=0,this.vs=_i.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new _i(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new vf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new EN(this),this.indexManager=new cN,this.remoteDocumentCache=function(r){return new vN(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new lN(n),this.Ns=new mN(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new yN(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new SN(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return T.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class SN extends lx{constructor(e){super(),this.currentSequenceNumber=e}}class Nf{constructor(e){this.persistence=e,this.Fs=new xf,this.$s=null}static Bs(e){return new Nf(e)}get Ls(){if(this.$s)return this.$s;throw b()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,r=>{const i=M.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Rf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(ug(n))return T.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hl(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,hl(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return ug(n)||i.isEqual(F.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Zm()<=G.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vh(n)),this.Bi(e,o,n,ix(i,-1)))})}Fi(e,n){let r=new _e(Zw(e));return n.forEach((i,s)=>{If(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Zm()<=G.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Vh(n)),this.Ni.getDocumentsMatchingQuery(e,n,Hn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Se(Q),this.Ui=new Mi(s=>Ef(s),_f),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pN(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function kN(t,e,n,r){return new TN(t,e,n,r)}async function _1(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function CN(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=T.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(y=>{const v=l.docVersions.get(p);J(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function S1(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function xN(t,e){const n=j(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(qe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,v,k){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,p,c)&&a.push(n.Cs.updateTargetData(s,p))});let l=dn(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(NN(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(F.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function NN(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=dn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function RN(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function AN(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new pr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function qh(t,e,n){const r=j(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Eo(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function vg(t,e,n){const r=j(t);let i=F.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=j(a),h=c.Ui.get(u);return h!==void 0?T.resolve(c.qi.get(h)):c.Cs.getTargetData(l,u)}(r,o,hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:H())).next(a=>(DN(r,kx(e),a),{documents:a,Hi:s})))}function DN(t,e,n){let r=t.Ki.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class wg{constructor(){this.activeTargetIds=d1()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PN{constructor(){this.Lr=new wg,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);L("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(L("RestConnection","Received: ",l),l),l=>{throw $h("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Pi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=LN[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new GC;a.setWithCredentials(!0),a.listenOnce(qC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case pc.NO_ERROR:const u=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(u)),s(u);break;case pc.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new N(_.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const c=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(v)>=0?v:_.UNKNOWN}(d.status);o(new N(p,d.message))}else o(new N(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(_.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=zC(),o=HC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new KC({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");L("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new MN({Hr:y=>{h?L("Connection","Not sending because WebChannel is closed:",y):(c||(L("Connection","Opening WebChannel transport."),u.open(),c=!0),L("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),p=(y,v,k)=>{y.listen(v,m=>{try{k(m)}catch(f){setTimeout(()=>{throw f},0)}})};return p(u,Xo.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),p(u,Xo.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),d.io())}),p(u,Xo.EventType.ERROR,y=>{h||(h=!0,$h("Connection","WebChannel transport errored:",y),d.io(new N(_.UNAVAILABLE,"The operation could not be completed")))}),p(u,Xo.EventType.MESSAGE,y=>{var v;if(!h){const k=y.data[0];J(!!k);const m=k,f=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(f){L("Connection","WebChannel received error:",f);const g=f.status;let w=function(x){const A=fe[x];if(A!==void 0)return l1(A)}(g),C=f.message;w===void 0&&(w=_.INTERNAL,C="Unknown error status: "+g+" with message "+f.message),h=!0,d.io(new N(w,C)),u.close()}else L("Connection","WebChannel received:",k),d.ro(k)}}),p(o,WC.STAT_EVENT,y=>{y.stat===Xm.PROXY?L("Connection","Detected buffering proxy"):y.stat===Xm.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){return new Wx(t,!0)}class I1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new I1(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(cn(n.toString()),cn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new N(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bN extends T1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Qx(this.yt,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?Vt(s.readTime):F.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Hh(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=Fh(a)?{documents:Jx(i,a)}:{query:Zx(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=m1(i,s.resumeToken):s.snapshotVersion.compareTo(F.min())>0&&(o.readTime=fl(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=tN(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Hh(this.yt),n.removeTarget=e,this.Bo(n)}}class UN extends T1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Xx(e.writeResults,e.commitTime),r=Vt(e.commitTime);return this.listener.Zo(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Hh(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Yx(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new N(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(_.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(_.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class jN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(cn(n),this.ou=!1):L("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Mr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=j(a);l._u.add(4),await Io(l),l.gu.set("Unknown"),l._u.delete(4),await mu(l)}(this))})}),this.gu=new jN(r,i)}}async function mu(t){if(Mr(t))for(const e of t.wu)await e(!0)}async function Io(t){for(const e of t.wu)await e(!1)}function k1(t,e){const n=j(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Pf(n)?Df(n):$i(n).ko()&&Af(n,e))}function C1(t,e){const n=j(t),r=$i(n);n.du.delete(e),r.ko()&&x1(n,e),n.du.size===0&&(r.ko()?r.Fo():Mr(n)&&n.gu.set("Unknown"))}function Af(t,e){t.yu.Ot(e.targetId),$i(t).zo(e)}function x1(t,e){t.yu.Ot(e),$i(t).Ho(e)}function Df(t){t.yu=new Bx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),$i(t).start(),t.gu.uu()}function Pf(t){return Mr(t)&&!$i(t).No()&&t.du.size>0}function Mr(t){return j(t)._u.size===0}function N1(t){t.yu=void 0}async function BN(t){t.du.forEach((e,n)=>{Af(t,e)})}async function zN(t,e){N1(t),Pf(t)?(t.gu.hu(e),Df(t)):t.gu.set("Unknown")}async function HN(t,e,n){if(t.gu.set("Online"),e instanceof p1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pl(t,r)}else if(e instanceof va?t.yu.Kt(e):e instanceof f1?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(F.min()))try{const r=await S1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(qe.EMPTY_BYTE_STRING,l.snapshotVersion)),x1(i,a);const u=new pr(l.target,a,1,l.sequenceNumber);Af(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await pl(t,r)}}async function pl(t,e,n){if(!Eo(e))throw e;t._u.add(1),await Io(t),t.gu.set("Offline"),n||(n=()=>S1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await mu(t)})}function R1(t,e){return e().catch(n=>pl(t,n,e))}async function gu(t){const e=j(t),n=Wn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;qN(e);)try{const i=await RN(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,WN(e,i)}catch(i){await pl(e,i)}A1(e)&&D1(e)}function qN(t){return Mr(t)&&t.fu.length<10}function WN(t,e){t.fu.push(e);const n=Wn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function A1(t){return Mr(t)&&!Wn(t).No()&&t.fu.length>0}function D1(t){Wn(t).start()}async function KN(t){Wn(t).eu()}async function GN(t){const e=Wn(t);for(const n of t.fu)e.Xo(n.mutations)}async function QN(t,e,n){const r=t.fu.shift(),i=Cf.from(r,e,n);await R1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await gu(t)}async function YN(t,e){e&&Wn(t).Yo&&await async function(n,r){if(i=r.code,bx(i)&&i!==_.ABORTED){const s=n.fu.shift();Wn(n).Mo(),await R1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await gu(n)}var i}(t,e),A1(t)&&D1(t)}async function _g(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Mr(n);n._u.add(3),await Io(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await mu(n)}async function XN(t,e){const n=j(t);e?(n._u.delete(2),await mu(n)):e||(n._u.add(2),await Io(n),n.gu.set("Unknown"))}function $i(t){return t.pu||(t.pu=function(e,n,r){const i=j(e);return i.su(),new bN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:BN.bind(null,t),Zr:zN.bind(null,t),Wo:HN.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Pf(t)?Df(t):t.gu.set("Unknown")):(await t.pu.stop(),N1(t))})),t.pu}function Wn(t){return t.Iu||(t.Iu=function(e,n,r){const i=j(e);return i.su(),new UN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:KN.bind(null,t),Zr:YN.bind(null,t),tu:GN.bind(null,t),Zo:QN.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await gu(t)):(await t.Iu.stop(),t.fu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Of(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lf(t,e){if(cn("AsyncQueue",`${e}: ${t}`),Eo(t))return new N(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=os(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.Tu=new Se(M.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):b():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Si{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Si(e,n,oi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.Au=void 0,this.listeners=[]}}class ZN{constructor(){this.queries=new Mi(e=>Jw(e),cu),this.onlineState="Unknown",this.Ru=new Set}}async function Mf(t,e){const n=j(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new JN),i)try{s.Au=await n.onListen(r)}catch(o){const a=Lf(o,`Initialization of query '${Vh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&bf(n)}async function $f(t,e){const n=j(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function eR(t,e){const n=j(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&bf(n)}function tR(t,e,n){const r=j(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function bf(t){t.Ru.forEach(e=>{e.next()})}class Uf{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.key=e}}class O1{constructor(e){this.key=e}}class nR{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=H(),this.mutatedKeys=H(),this.Gu=Zw(e),this.Qu=new oi(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new Sg,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=If(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let k=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),k=!0):this.Hu(d,p)||(r.track({type:2,doc:p}),k=!0,(l&&this.Gu(p,l)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),k=!0):d&&!p&&(r.track({type:1,doc:d}),k=!0,(l||u)&&(a=!0)),k&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return p(h)-p(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new Si(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Sg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=H(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new O1(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new P1(r))}),n}tc(e){this.qu=e.Hi,this.Ku=H();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Si.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class rR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iR{constructor(e){this.key=e,this.nc=!1}}class sR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Mi(a=>Jw(a),cu),this.rc=new Map,this.oc=new Set,this.uc=new Se(M.comparator),this.cc=new Map,this.ac=new xf,this.hc={},this.lc=new Map,this.fc=_i.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function oR(t,e){const n=gR(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await AN(n.localStore,hn(e));n.isPrimaryClient&&k1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await aR(n,e,r,a==="current",o.resumeToken)}return i}async function aR(t,e,n,r,i){t._c=(h,d,p)=>async function(y,v,k,m){let f=v.view.Wu(k);f.$i&&(f=await vg(y.localStore,v.query,!1).then(({documents:C})=>v.view.Wu(C,f)));const g=m&&m.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,g);return Tg(y,v.targetId,w.Xu),w.snapshot}(t,h,d,p);const s=await vg(t.localStore,e,!0),o=new nR(e,s.Hi),a=o.Wu(s.documents),l=So.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Tg(t,n,u.Xu);const c=new rR(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function lR(t,e){const n=j(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!cu(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),C1(n.remoteStore,r.targetId),Wh(n,r.targetId)}).catch(wo)):(Wh(n,r.targetId),await qh(n.localStore,r.targetId,!0))}async function uR(t,e,n){const r=yR(t);try{const i=await function(s,o){const a=j(s),l=Ee.now(),u=o.reduce((d,p)=>d.add(p.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=dn(),y=H();return a.Gi.getEntries(d,u).next(v=>{p=v,p.forEach((k,m)=>{m.isValidDocument()||(y=y.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const k=[];for(const m of o){const f=Lx(m,c.get(m.key).overlayedDocument);f!=null&&k.push(new Lr(m.key,f,Yw(f.value.mapValue),At.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,k,o)}).next(v=>{h=v;const k=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,k)})}).then(()=>({batchId:h.batchId,changes:c1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Se(Q)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await To(r,i.changes),await gu(r.remoteStore)}catch(i){const s=Lf(i,"Failed to persist write");n.reject(s)}}async function L1(t,e){const n=j(t);try{const r=await xN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?J(o.nc):i.removedDocuments.size>0&&(J(o.nc),o.nc=!1))}),await To(n,r,e)}catch(r){await wo(r)}}function Ig(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=j(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&bf(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cR(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Se(M.comparator);o=o.insert(s,Fe.newNoDocument(s,F.min()));const a=H().add(s),l=new fu(F.min(),new Map,new _e(Q),o,a);await L1(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Ff(r)}else await qh(r.localStore,e,!1).then(()=>Wh(r,e,n)).catch(wo)}async function hR(t,e){const n=j(t),r=e.batch.batchId;try{const i=await CN(n.localStore,e);$1(n,r,null),M1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await To(n,i)}catch(i){await wo(i)}}async function dR(t,e,n){const r=j(t);try{const i=await function(s,o){const a=j(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(J(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);$1(r,e,n),M1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await To(r,i)}catch(i){await wo(i)}}function M1(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function $1(t,e,n){const r=j(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Wh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||b1(t,r)})}function b1(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(C1(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ff(t))}function Tg(t,e,n){for(const r of n)r instanceof P1?(t.ac.addReference(r.key,e),fR(t,r)):r instanceof O1?(L("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||b1(t,r.key)):b()}function fR(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ff(t))}function Ff(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new M(te.fromString(e)),r=t.fc.next();t.cc.set(r,new iR(n)),t.uc=t.uc.insert(n,r),k1(t.remoteStore,new pr(hn(lu(n.path)),r,2,vf.at))}}async function To(t,e,n){const r=j(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Rf.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=j(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>T.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Eo(c))throw c;L("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.qi.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(h,y)}}}(r.localStore,s))}async function pR(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await _1(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new N(_.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await To(n,r.ji)}}function mR(t,e){const n=j(t),r=n.cc.get(e);if(r&&r.nc)return H().add(r.key);{let i=H();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function gR(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=L1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cR.bind(null,e),e.sc.Wo=eR.bind(null,e.eventManager),e.sc.wc=tR.bind(null,e.eventManager),e}function yR(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dR.bind(null,e),e}class vR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=pu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return kN(this.persistence,new IN,e.initialUser,this.yt)}yc(e){return new _N(Nf.Bs,this.yt)}gc(e){return new PN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ig(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pR.bind(null,this.syncEngine),await XN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ZN}createDatastore(e){const n=pu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new $N(i));var i;return function(s,o,a,l){return new FN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Ig(this.syncEngine,a,0),o=Eg.C()?new Eg:new ON,new VN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new sR(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=j(e);L("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Io(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t,e,n){if(!n)throw new N(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ER(t,e,n,r){if(e===!0&&r===!0)throw new N(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kg(t){if(!M.isDocumentKey(t))throw new N(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cg(t){if(M.isDocumentKey(t))throw new N(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yu(t);throw new N(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function _R(t,e){if(e<=0)throw new N(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new Map;class Ng{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ER("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ng({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ng(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new QC;switch(n.type){case"gapi":const r=n.client;return new ZC(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=xg.get(e);n&&(L("ComponentProvider","Removing Datastore"),xg.delete(e),n.terminate())}(this),Promise.resolve()}}function SR(t,e,n,r={}){var i;const s=(t=yt(t,vu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&$h("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=be.MOCK_USER;else{o=D0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new N(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new be(l)}t._authCredentials=new YC(new Fw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}}class mn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mn(this.firestore,e,this._query)}}class jn extends mn{constructor(e,n,r){super(e,n,lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new M(e))}withConverter(e){return new jn(this.firestore,e,this._path)}}function Cr(t,e,...n){if(t=ue(t),U1("collection","path",e),t instanceof vu){const r=te.fromString(e,...n);return Cg(r),new jn(t,null,r)}{if(!(t instanceof Qe||t instanceof jn))throw new N(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return Cg(r),new jn(t.firestore,null,r)}}function mr(t,e,...n){if(t=ue(t),arguments.length===1&&(e=jw.R()),U1("doc","path",e),t instanceof vu){const r=te.fromString(e,...n);return kg(r),new Qe(t,null,new M(r))}{if(!(t instanceof Qe||t instanceof jn))throw new N(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return kg(r),new Qe(t.firestore,t instanceof jn?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):cn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=jw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function TR(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function kR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CR(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>_g(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>_g(e.remoteStore,s)),t.onlineComponents=e}async function CR(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await TR(t,new vR)),t.offlineComponents}async function F1(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await kR(t,new wR)),t.onlineComponents}function xR(t){return F1(t).then(e=>e.syncEngine)}async function ml(t){const e=await F1(t),n=e.eventManager;return n.onListen=oR.bind(null,e.syncEngine),n.onUnlisten=lR.bind(null,e.syncEngine),n}function NR(t,e,n={}){const r=new rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new jf({next:h=>{s.enqueueAndForget(()=>$f(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new N(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new N(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Uf(lu(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Mf(i,c)}(await ml(t),t.asyncQueue,e,n,r)),r.promise}function RR(t,e,n={}){const r=new rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new jf({next:h=>{s.enqueueAndForget(()=>$f(i,c)),h.fromCache&&a.source==="server"?l.reject(new N(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Uf(o,u,{includeMetadataChanges:!0,Nu:!0});return Mf(i,c)}(await ml(t),t.asyncQueue,e,n,r)),r.promise}class AR{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new I1(this,"async_queue_retry"),this.Wc=()=>{const n=gc();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new rn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Eo(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Of.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&b()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Rg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Kn extends vu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new AR,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||j1(this),this._firestoreClient.terminate()}}function DR(t,e){const n=typeof t=="object"?t:Gd(),r=typeof t=="string"?t:e||"(default)",i=ql(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=R0("firestore");s&&SR(i,...s)}return i}function wu(t){return t._firestoreClient||j1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function j1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new ux(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new IR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ii(qe.fromBase64String(e))}catch(n){throw new N(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ii(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=/^__.*__$/;class OR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new _o(e,this.data,n,this.fieldTransforms)}}function V1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Hf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Hf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return gl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(V1(this.sa)&&PR.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class LR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||pu(e)}da(e,n,r,i=!1){return new Hf({sa:e,methodName:n,fa:r,path:je.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function qf(t){const e=t._freezeSettings(),n=pu(t._databaseId);return new LR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function B1(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);q1("Data must be an object, but it was:",o,r);const a=z1(r,o);let l,u;if(s.merge)l=new jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=$R(e,h,n);if(!o.contains(d))throw new N(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);UR(c,d)||c.push(d)}l=new jt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new OR(new pt(a),l,u)}class Wf extends Bf{_toFieldTransform(e){return new Ax(e.path,new Ys)}isEqual(e){return e instanceof Wf}}function MR(t,e,n,r=!1){return Kf(n,t.da(r?4:3,e))}function Kf(t,e){if(H1(t=ue(t)))return q1("Unsupported field value:",e,t),z1(t,e);if(t instanceof Bf)return function(n,r){if(!V1(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Kf(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xx(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ee.fromDate(n);return{timestampValue:fl(r.yt,i)}}if(n instanceof Ee){const i=new Ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fl(r.yt,i)}}if(n instanceof zf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ii)return{bytesValue:m1(r.yt,n._byteString)};if(n instanceof Qe){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${yu(n)}`)}(t,e)}function z1(t,e){const n={};return Vw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oi(t,(r,i)=>{const s=Kf(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function H1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof zf||t instanceof Ii||t instanceof Qe||t instanceof Bf)}function q1(t,e,n){if(!H1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=yu(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function $R(t,e,n){if((e=ue(e))instanceof Vf)return e._internalPath;if(typeof e=="string")return W1(t,e);throw gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const bR=new RegExp("[~\\*/\\[\\]]");function W1(t,e,n){if(e.search(bR)>=0)throw gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vf(...e.split("."))._internalPath}catch{throw gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(_.INVALID_ARGUMENT,a+t+l)}function UR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Eu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FR extends K1{data(){return super.data()}}function Eu(t,e){return typeof e=="string"?W1(t,e):e instanceof Vf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gf{}class Qf extends Gf{}function yl(t,e,...n){let r=[];e instanceof Gf&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Yf).length,o=i.filter(a=>a instanceof _u).length;if(s>1||s>0&&o>0)throw new N(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class _u extends Qf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _u(e,n,r)}_apply(e){const n=this._parse(e);return Q1(e._query,n),new mn(e.firestore,e.converter,jh(e._query,n))}_parse(e){const n=qf(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new N(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Pg(c,u);const d=[];for(const p of c)d.push(Dg(a,i,p));h={arrayValue:{values:d}}}else h=Dg(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Pg(c,u),h=MR(o,s,c,u==="in"||u==="not-in");return ge.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function vl(t,e,n){const r=e,i=Eu("where",t);return _u._create(i,r,n)}class Yf extends Gf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Yf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Q1(s,a),s=jh(s,a)}(e._query,n),new mn(e.firestore,e.converter,jh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xf extends Qf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Xf(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new N(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new N(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ii(i,s);return function(a,l){if(Sf(a)===null){const u=uu(a);u!==null&&Y1(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new mn(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Li(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function jR(t,e="asc"){const n=e,r=Eu("orderBy",t);return Xf._create(r,n)}class Jf extends Qf{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Jf(e,n,r)}_apply(e){return new mn(e.firestore,e.converter,hl(e._query,this._limit,this._limitType))}}function Ag(t){return _R("limit",t),Jf._create("limit",t,"F")}function Dg(t,e,n){if(typeof(n=ue(n))=="string"){if(n==="")throw new N(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xw(e)&&n.indexOf("/")!==-1)throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(te.fromString(n));if(!M.isDocumentKey(r))throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ng(t,new M(r))}if(n instanceof Qe)return ng(t,n._key);throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yu(n)}.`)}function Pg(t,e){if(!Array.isArray(t)||t.length===0)throw new N(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new N(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Q1(t,e){if(e.isInequality()){const r=uu(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new N(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Sf(t);s!==null&&Y1(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Y1(t,e,n){if(!n.isEqual(e))throw new N(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class VR{convertValue(e,n="none"){switch(kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){const r={};return Oi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new zf(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gs(e));default:return null}}convertTimestamp(e){const n=qn(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);J(E1(r));const i=new Ks(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class J1 extends K1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Eu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wa extends J1{data(e={}){return super.data(e)}}class Z1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new as(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wa(this._firestore,this._userDataWriter,r.key,r,new as(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new wa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new as(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new wa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new as(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:BR(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){t=yt(t,Qe);const e=yt(t.firestore,Kn);return NR(wu(e),t._key).then(n=>nE(e,t,n))}class Zf extends VR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function wl(t){t=yt(t,mn);const e=yt(t.firestore,Kn),n=wu(e),r=new Zf(e);return G1(t._query),RR(n,t._query).then(i=>new Z1(e,r,t,i))}function Og(t,e,n){t=yt(t,Qe);const r=yt(t.firestore,Kn),i=X1(t.converter,e,n);return ep(r,[B1(qf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,At.none())])}function eE(t){return ep(yt(t.firestore,Kn),[new Tf(t._key,At.none())])}function tE(t,e){const n=yt(t.firestore,Kn),r=mr(t),i=X1(t.converter,e);return ep(n,[B1(qf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,At.exists(!1))]).then(()=>r)}function zR(t,...e){var n,r,i;t=ue(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Rg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Rg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Qe)u=yt(t.firestore,Kn),c=lu(t._key.path),l={next:h=>{e[o]&&e[o](nE(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=yt(t,mn);u=yt(h.firestore,Kn),c=h._query;const d=new Zf(u);l={next:p=>{e[o]&&e[o](new Z1(u,d,h,p))},error:e[o+1],complete:e[o+2]},G1(t._query)}return function(h,d,p,y){const v=new jf(y),k=new Uf(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>Mf(await ml(h),k)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>$f(await ml(h),k))}}(wu(u),c,a,l)}function ep(t,e){return function(n,r){const i=new rn;return n.asyncQueue.enqueueAndForget(async()=>uR(await xR(n),r,i)),i.promise}(wu(t),e)}function nE(t,e,n){const r=n.docs.get(e._key),i=new Zf(t);return new J1(t,i,e._key,r,new as(n.hasPendingWrites,n.fromCache),e.converter)}function HR(){return new Wf("serverTimestamp")}(function(t,e=!0){(function(n){Pi=n})(Ri),Ir(new zn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Kn(new XC(n.getProvider("auth-internal")),new tx(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ks(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ft(Jm,"3.8.0",t),Ft(Jm,"3.8.0","esm2017")})();function tp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qR=rE,iE=new ao("auth","Firebase",rE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=new Wd("@firebase/auth");function _a(t,...e){Lg.logLevel<=G.ERROR&&Lg.error(`Auth (${Ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,...e){throw np(t,...e)}function Bt(t,...e){return np(t,...e)}function sE(t,e,n){const r=Object.assign(Object.assign({},qR()),{[e]:n});return new ao("auth","Firebase",r).create(e,{appName:t.name})}function WR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),sE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function np(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iE.create(t,...e)}function $(t,e,...n){if(!t)throw np(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _a(e),new Error(e)}function fn(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Map;function tn(t){fn(t instanceof Function,"Expected a class definition");let e=Mg.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t,e){const n=ql(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Za(s,e??{}))return i;Et(i,"already-initialized")}return n.initialize({options:e})}function GR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QR(){return $g()==="http:"||$g()==="https:"}function $g(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QR()||TT()||"connection"in navigator)?navigator.onLine:!0}function XR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=IT()||kT()}get(){return YR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=new ko(3e4,6e4);function bi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ui(t,e,n,r,i={}){return aE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=lo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),oE.fetch()(lE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function aE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JR),e);try{const i=new eA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ea(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ea(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw sE(t,c,u);Et(t,c)}}catch(i){if(i instanceof qt)throw i;Et(t,"network-request-failed")}}async function Co(t,e,n,r,i={}){const s=await Ui(t,e,n,r,i);return"mfaPendingCredential"in s&&Et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function lE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rp(t.config,i):`${t.config.apiScheme}://${i}`}class eA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),ZR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){return Ui(t,"POST","/v1/accounts:delete",e)}async function nA(t,e){return Ui(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rA(t,e=!1){const n=ue(t),r=await n.getIdToken(e),i=ip(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_s(yc(i.auth_time)),issuedAtTime:_s(yc(i.iat)),expirationTime:_s(yc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yc(t){return Number(t)*1e3}function ip(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const i=x0(n);return i?JSON.parse(i):(_a("Failed to decode base64 JWT payload"),null)}catch(i){return _a("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function iA(t){const e=ip(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qt&&sA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ti(t,nA(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uA(s.providerUserInfo):[],a=lA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new uE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function aA(t){const e=ue(t);await El(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uA(t){return t.map(e=>{var{providerId:n}=e,r=tp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t,e){const n=await aE(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=lE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",oE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zs;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new uE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ti(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rA(this,e)}reload(){return aA(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await El(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ti(this,tA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:C,providerData:x,stsTokenManager:A}=n;$(g&&A,e,"internal-error");const O=Zs.fromJSON(this.name,A);$(typeof g=="string",e,"internal-error"),yn(h,e.name),yn(d,e.name),$(typeof w=="boolean",e,"internal-error"),$(typeof C=="boolean",e,"internal-error"),yn(p,e.name),yn(y,e.name),yn(v,e.name),yn(k,e.name),yn(m,e.name),yn(f,e.name);const Z=new gr({uid:g,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:C,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:O,createdAt:m,lastLoginAt:f});return x&&Array.isArray(x)&&(Z.providerData=x.map(z=>Object.assign({},z))),k&&(Z._redirectEventId=k),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zs;i.updateFromServerResponse(n);const s=new gr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await El(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cE.type="NONE";const bg=cE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ai(tn(bg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||tn(bg);const o=Sa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=gr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ai(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ai(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mE(e))return"Blackberry";if(gE(e))return"Webos";if(sp(e))return"Safari";if((e.includes("chrome/")||dE(e))&&!e.includes("edge/"))return"Chrome";if(pE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hE(t=He()){return/firefox\//i.test(t)}function sp(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dE(t=He()){return/crios\//i.test(t)}function fE(t=He()){return/iemobile/i.test(t)}function pE(t=He()){return/android/i.test(t)}function mE(t=He()){return/blackberry/i.test(t)}function gE(t=He()){return/webos/i.test(t)}function Su(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hA(t=He()){var e;return Su(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dA(){return CT()&&document.documentMode===10}function yE(t=He()){return Su(t)||pE(t)||gE(t)||mE(t)||/windows phone/i.test(t)||fE(t)}function fA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t,e=[]){let n;switch(t){case"Browser":n=Ug(He());break;case"Worker":n=`${Ug(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fg(this),this.idTokenSubscription=new Fg(this),this.beforeStateQueue=new pA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await El(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ue(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Fi(t){return ue(t)}class Fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=FT(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function gA(t,e,n){const r=Fi(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=wE(e),{host:o,port:a}=yA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vA()}function wE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yA(t){const e=wE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jg(o)}}}function jg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function EE(t,e){return Ui(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(t,e){return Co(t,"POST","/v1/accounts:signInWithPassword",bi(t,e))}async function _E(t,e){return Ui(t,"POST","/v1/accounts:sendOobCode",bi(t,e))}async function EA(t,e){return _E(t,e)}async function _A(t,e){return _E(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}async function IA(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends op{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new eo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new eo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return SA(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return EE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return IA(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e){return Co(t,"POST","/v1/accounts:signInWithIdp",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="http://localhost";class xr extends op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=tp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:TA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CA(t){const e=ns(rs(t)).link,n=e?ns(rs(e)).deep_link_id:null,r=ns(rs(t)).deep_link_id;return(r?ns(rs(r)).link:null)||r||n||e||t}class ap{constructor(e){var n,r,i,s,o,a;const l=ns(rs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=kA((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=CA(e);try{return new ap(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.providerId=ji.PROVIDER_ID}static credential(e,n){return eo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ap.parseLink(n);return $(r,"argument-error"),eo._fromEmailAndCode(e,r.code,r.tenantId)}}ji.PROVIDER_ID="password";ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends lp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends xo{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends xo{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends xo{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t,e){return Co(t,"POST","/v1/accounts:signUp",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gr._fromIdTokenResponse(e,r,i),o=Vg(r);return new Nr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vg(r);return new Nr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_l.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _l(e,n,r,i)}}function SE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_l._fromErrorAndOperation(t,s,e,r):s})}async function NA(t,e,n=!1){const r=await Ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ti(t,SE(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=ip(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Nr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(t,e,n=!1){const r="signIn",i=await SE(t,r,e),s=await Nr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function AA(t,e){return IE(Fi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t,e,n){var r;$(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e,n){const r=ue(t),i={requestType:"PASSWORD_RESET",email:e};n&&TE(r,i,n),await _A(r,i)}async function PA(t,e,n){const r=Fi(t),i=await xA(r,{returnSecureToken:!0,email:e,password:n}),s=await Nr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function OA(t,e,n){return AA(ue(t),ji.credential(e,n))}async function LA(t,e){const n=ue(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&TE(n.auth,i,e);const{email:s}=await EA(n.auth,i);s!==t.email&&await t.reload()}function MA(t,e){return kE(ue(t),e,null)}function $A(t,e){return kE(ue(t),null,e)}async function kE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ti(t,EE(r,s));await t._updateTokensIfNecessary(o,!0)}function bA(t,e,n,r){return ue(t).onIdTokenChanged(e,n,r)}function UA(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}function FA(t,e,n,r){return ue(t).onAuthStateChanged(e,n,r)}function Bg(t){return ue(t).signOut()}async function jA(t){return ue(t).delete()}const Sl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sl,"1"),this.storage.removeItem(Sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(){const t=He();return sp(t)||Su(t)}const BA=1e3,zA=10;class xE extends CE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VA()&&fA(),this.fallbackToPolling=yE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xE.type="LOCAL";const HA=xE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE extends CE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}NE.type="SESSION";const RE=NE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await qA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Iu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=up("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function KA(t){zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function GA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YA(){return AE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="firebaseLocalStorageDb",XA=1,Il="firebaseLocalStorage",PE="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tu(t,e){return t.transaction([Il],e?"readwrite":"readonly").objectStore(Il)}function JA(){const t=indexedDB.deleteDatabase(DE);return new No(t).toPromise()}function Gh(){const t=indexedDB.open(DE,XA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Il,{keyPath:PE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Il)?e(r):(r.close(),await JA(),e(await Gh()))})})}async function zg(t,e,n){const r=Tu(t,!0).put({[PE]:e,value:n});return new No(r).toPromise()}async function ZA(t,e){const n=Tu(t,!1).get(e),r=await new No(n).toPromise();return r===void 0?null:r.value}function Hg(t,e){const n=Tu(t,!0).delete(e);return new No(n).toPromise()}const eD=800,tD=3;class OE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Iu._getInstance(YA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GA(),!this.activeServiceWorker)return;this.sender=new WA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gh();return await zg(e,Sl,"1"),await Hg(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tu(i,!1).getAll();return new No(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OE.type="LOCAL";const nD=OE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iD(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rD().appendChild(r)})}function sD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e){return e?tn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp extends op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oD(t){return IE(t.auth,new cp(t),t.bypassAuthState)}function aD(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),RA(n,new cp(t),t.bypassAuthState)}async function lD(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),NA(n,new cp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oD;case"linkViaPopup":case"linkViaRedirect":return lD;case"reauthViaPopup":case"reauthViaRedirect":return aD;default:Et(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=new ko(2e3,1e4);async function cD(t,e,n){const r=Fi(t);WR(t,e,lp);const i=LE(r,n);return new cr(r,"signInViaPopup",e,i).executeNotNull()}class cr extends ME{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uD.get())};e()}}cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD="pendingRedirect",Ia=new Map;class dD extends ME{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ia.get(this.auth._key());if(!e){try{const r=await fD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ia.set(this.auth._key(),e)}return this.bypassAuthState||Ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fD(t,e){const n=gD(e),r=mD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pD(t,e){Ia.set(t._key(),e)}function mD(t){return tn(t._redirectPersistence)}function gD(t){return Sa(hD,t.config.apiKey,t.name)}async function yD(t,e,n=!1){const r=Fi(t),i=LE(r,e),o=await new dD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=10*60*1e3;class wD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ED(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$E(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vD&&this.cachedEventUids.clear(),this.cachedEventUids.has(qg(e))}saveEventToCache(e){this.cachedEventUids.add(qg(e)),this.lastProcessedEventTime=Date.now()}}function qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $E({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ED(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $E(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(t,e={}){return Ui(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ID=/^https?/;async function TD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _D(t);for(const n of e)try{if(kD(n))return}catch{}Et(t,"unauthorized-domain")}function kD(t){const e=Kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ID.test(n))return!1;if(SD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=new ko(3e4,6e4);function Wg(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xD(t){return new Promise((e,n)=>{var r,i,s;function o(){Wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wg(),n(Bt(t,"network-request-failed"))},timeout:CD.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)o();else{const a=sD("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},iD(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ta=null,e})}let Ta=null;function ND(t){return Ta=Ta||xD(t),Ta}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=new ko(5e3,15e3),AD="__/auth/iframe",DD="emulator/auth/iframe",PD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LD(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rp(e,DD):`https://${t.config.authDomain}/${AD}`,r={apiKey:e.apiKey,appName:t.name,v:Ri},i=OD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lo(r).slice(1)}`}async function MD(t){const e=await ND(t),n=zt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:LD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=zt().setTimeout(()=>{s(o)},RD.get());function l(){zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bD=500,UD=600,FD="_blank",jD="http://localhost";class Kg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VD(t,e,n,r=bD,i=UD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$D),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=dE(u)?FD:n),hE(u)&&(e=e||jD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(hA(u)&&a!=="_self")return BD(e||"",a),new Kg(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Kg(h)}function BD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD="__/auth/handler",HD="emulator/auth/handler";function Gg(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ri,eventId:i};if(e instanceof lp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",UT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof xo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${qD(t)}?${lo(a).slice(1)}`}function qD({config:t}){return t.emulator?rp(t,HD):`https://${t.authDomain}/${zD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="webStorageSupport";class WD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RE,this._completeRedirectFn=yD,this._overrideRedirectResult=pD}async _openPopup(e,n,r,i){var s;fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Gg(e,n,r,Kh(),i);return VD(e,o,up())}async _openRedirect(e,n,r,i){return await this._originValidation(e),KA(Gg(e,n,r,Kh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MD(e),r=new wD(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vc,{type:vc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vc];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yE()||sp()||Su()}}const KD=WD;var Qg="@firebase/auth",Yg="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YD(t){Ir(new zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{$(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vE(t)},c=new mA(a,l,u);return GR(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ir(new zn("auth-internal",e=>{const n=Fi(e.getProvider("auth").getImmediate());return(r=>new GD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Qg,Yg,QD(t)),Ft(Qg,Yg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=5*60,JD=A0("authIdTokenMaxAge")||XD;let Xg=null;const ZD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JD)return;const i=n==null?void 0:n.token;Xg!==i&&(Xg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eP(t=Gd()){const e=ql(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KR(t,{popupRedirectResolver:KD,persistence:[nD,HA,RE]}),r=A0("authTokenSyncURL");if(r){const s=ZD(r);UA(n,s,()=>s(n.currentUser)),bA(n,o=>s(o))}const i=N0("auth");return i&&gA(n,`http://${i}`),n}YD("Browser");var tP="firebase",nP="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(tP,nP,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="firebasestorage.googleapis.com",rP="storageBucket",iP=2*60*1e3,sP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends qt{constructor(e,n,r=0){super(wc(e),`Firebase Storage: ${n} (${wc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function wc(t){return"storage/"+t}function oP(){const t="An unknown error occurred, please check the error payload for server response.";return new Wt("unknown",t)}function aP(){return new Wt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function lP(){return new Wt("canceled","User canceled the upload/download.")}function uP(t){return new Wt("invalid-url","Invalid URL '"+t+"'.")}function cP(t){return new Wt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Jg(t){return new Wt("invalid-argument",t)}function UE(){return new Wt("app-deleted","The Firebase app was deleted.")}function hP(t){return new Wt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(r.path==="")return r;throw cP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===bE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${k}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<g.length;w++){const C=g[w],x=C.regex.exec(e);if(x){const A=x[C.indices.bucket];let O=x[C.indices.path];O||(O=""),r=new xt(A,O),C.postModify(r);break}}if(r==null)throw uP(e);return r}}class dP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...k){u||(u=!0,e.apply(null,k))}function h(k){i=setTimeout(()=>{i=null,t(p,l())},k)}function d(){s&&clearTimeout(s)}function p(k,...m){if(u){d();return}if(k){d(),c.call(null,k,...m);return}if(l()||o){d(),c.call(null,k,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(k){y||(y=!0,d(),!u&&(i!==null?(k||(a=2),clearTimeout(i),h(0)):k||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function pP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){return t!==void 0}function Zg(t,e,n,r){if(r<e)throw Jg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jg(`Invalid value for '${t}'. Expected ${n} or less.`)}function gP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Tl||(Tl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ta(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Tl.NO_ERROR,l=s.getStatus();if((!a||yP(l,this.additionalRetryCodes_))&&this.retry){const c=s.getErrorCode()===Tl.ABORT;r(!1,new ta(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ta(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());mP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=oP();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?UE():lP();o(l)}else{const l=aP();o(l)}};this.canceled_?n(!1,new ta(!1,null,!0)):this.backoffId_=fP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ta{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function wP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function EP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _P(t,e){e&&(t["X-Firebase-GMPID"]=e)}function SP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function IP(t,e,n,r,i,s,o=!0){const a=gP(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return _P(u,e),wP(u,n),EP(u,s),SP(u,r),new vP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new kl(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kP(this._location.path)}get storage(){return this._service}get parent(){const e=TP(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new kl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hP(e)}}function ey(t,e){const n=e==null?void 0:e[rP];return n==null?null:xt.makeFromBucketSpec(n,t)}function CP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:D0(i,t.app.options.projectId))}class xP{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=bE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iP,this._maxUploadRetryTime=sP,this._requests=new Set,i!=null?this._bucket=xt.makeFromBucketSpec(i,this._host):this._bucket=ey(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=ey(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new kl(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new dP(UE());{const o=IP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ty="@firebase/storage",ny="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="storage";function NP(t=Gd(),e){t=ue(t);const r=ql(t,FE).getImmediate({identifier:e}),i=R0("storage");return i&&RP(r,...i),r}function RP(t,e,n,r={}){CP(t,e,n,r)}function AP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new xP(n,r,i,e,Ri)}function DP(){Ir(new zn(FE,AP,"PUBLIC").setMultipleInstances(!0)),Ft(ty,ny,""),Ft(ty,ny,"esm2017")}DP();const hp=L0({apiKey:"AIzaSyCxWrrAUwQ5i2NSPq3PweddKTcpZT7PU5Y",authDomain:"banter-5ea15.firebaseapp.com",projectId:"banter-5ea15",storageBucket:"banter-5ea15.appspot.com",messagingSenderId:"1080105380533",appId:"1:1080105380533:web:5d3290e81ccac75b93ecfc",measurementId:"G-WE3B3FHHFB"}),at=DR(hp),Je=eP(hp);NP(hp);const Ec=Cr(at,"users"),Kt=S.createContext(),PP=({children:t})=>{const e=oo(),[n,r]=S.useState(null),[i,s]=S.useState(1),[o,a]=S.useState(null);let l=!0;S.useEffect(()=>{FA(Je,c=>{s(h=>h+1),c?(r(c),(location.pathname==="/login"||location.pathname==="/signup")&&e("/")):(r(null),location.pathname!=="/login"&&location.pathname!=="/signup"&&e("/login")),s(h=>h-1),l&&(l=!1,s(h=>h-1))})},[]);let u={async signUp(c,h){s(p=>p+1);const{user:d}=await PA(Je,c,h);await tE(Ec,{email:d.email,uid:d.uid}),r(d),s(p=>p-1)},async signIn(c,h){s(d=>d+1);try{await OA(Je,c,h),r(n)}catch{const p=await wl(yl(Ec,vl("email","==",c)))[0];if(a("Error signing in"),p){console.log(p),a(),s(y=>y+1);try{googleSignIn(c,h),r(n)}catch{a("Error linking existing account")}finally{s(y=>y-1)}}}finally{s(d=>d-1)}},async signOut(){a(),s(c=>c+1);try{await Bg(Je),r(null)}catch{a("Error signing out")}finally{s(c=>c-1)}},async resetPassword(c){s(h=>h+1),await DA(Je,c),s(h=>h-1)},async updatePassword(c){s(h=>h+1),await $A(Je.currentUser,c),s(h=>h-1)},async updateEmail(c){s(h=>h+1),await MA(Je.currentUser,c),s(h=>h-1)},async sendEmailVerification(){s(c=>c+1),await LA(Je.currentUser),s(c=>c-1)},async googleSignIn(c,h){s(d=>d+1);try{const{user:d}=await cD(Je,new Yt,c&&h?{email:c,password:h}:void 0),p=mr(at,"users",d.uid);(await Ea(p)).exists()||await Og(p,{email:d.email,displayName:d.displayName}),r(d)}catch(d){await Bg(),console.log(d),a("Google Sign-in Failed")}finally{s(d=>d-1)}},async removeUser(){s(c=>c+1),await jA(Je.currentUser),await eE(Ec,Je.currentUser.uid),s(c=>c-1)},async getUserDetails(){console.log(),s(c=>c+1);try{const c=mr(at,"users",Je.currentUser.uid),h=await Ea(c);if(!h.exists())throw new Error("User does not exist");return h.data()}catch(c){a("Error getting user details"),console.log(c)}finally{s(c=>c-1)}},async updateUserDetails(c){console.log();const h=mr(at,"users",Je.currentUser.uid),d=await Ea(h),p=[];for(const[y,v]of Object.entries(c))d.data()[y]!==v&&p.push({key:y,value:v});Og(h,{...d.data(),...p.reduce((y,v)=>({...y,[v.key]:v.value}),{})})}};return E.jsx(Kt.Provider,{value:{...u,user:n,auth:Je,loading:i,setLoading:s,error:o,setError:a},children:t})};function OP({children:t,content:e,position:n}){const[r,i]=S.useState("opacity-0");if(!t)throw new Error("Wrap the element you want to add a tooltip to with the Tooltip component.");let s;return n==="top"?s="left-0 right-0 bottom":n==="left"?s="top-0 bottom-0 right":n==="right"?s="top-0 bottom-0 left":s="left-0 right-0 top",s=s+"-[120%]",E.jsxs("div",{className:"relative w-fit h-fit",children:[Ct.cloneElement(t,{onMouseEnter:()=>i("opacity-100"),onMouseLeave:()=>i("opacity-0"),onFocus:()=>i("opacity-100"),onBlur:()=>i("opacity-0")}),E.jsx("div",{className:`tooltip absolute m-auto ${s} pointer-events-none w-fit h-fit p-2 text-center text-sm text-white bg-primary-200 rounded-md border-primary-700 border-[1px] ${r} transition-opacity duration-300`,children:e})]})}function ry({userInfo:t}){const{signOut:e,updateUserDetails:n,user:r}=S.useContext(Kt),[i,s]=S.useState();document.querySelector(".color-1").style.fill="lightgrey",document.querySelectorAll(".color-2").forEach(a=>a.style.fill="white"),S.useEffect(()=>{(async()=>t?t.photoURL?t.photoURL:o():null)().then(a=>s(a))},[]);const o=async()=>{let a=t.defaultPhotoColor;a||(a=(()=>{const u=(v,k)=>Math.floor(Math.random()*(k-v+1)+v),c=u(0,360),h=100,d=u(20,80)/100,p=h*Math.min(d,1-d)/100,y=v=>{const k=(v+c/30)%12,m=d-p*Math.max(Math.min(k-3,9-k,1),-1);return Math.round(255*m).toString(16).padStart(2,"0")};return y(0)+y(8)+y(4)})()),n({defaultPhotoColor:a});const l=(u=>.2126*u[1].toString(10)+.7152*u[3].toString(10)+.0722*u[5].toString(10)>.5?"000":"fff")(a);document.querySelector(".color-1").style.fill=`#${a}`,document.querySelectorAll(".color-2").forEach(u=>u.style.fill=`#${l}`)};return E.jsxs("header",{className:"sticky flex justify-between px-4 pt-4 w-full",children:[E.jsx(OP,{content:t!=null&&t.displayName?t.displayName:"Loading name...",children:E.jsx(T0,{className:"relative h-fit",to:"my-profile",children:i&&E.jsx("img",{src:i,alt:"Profile",referrerPolicy:"no-referrer",className:"cursor-pointer w-20 aspect-square rounded-xl overflow-hidden"})||E.jsx("svg",{className:"cursor-pointer w-20 aspect-square",children:E.jsx("use",{href:"#default-profile-image"})})})}),E.jsx("svg",{children:E.jsx("use",{href:"#banter-logo-full"})}),E.jsx("button",{onClick:async()=>await e(),children:"Sign Out"})]})}function LP(t){if(!t)return null;const e=new Date-t.toDate();return(e<1e3?"Just now":e<6e4?`${Math.floor(e/15e3)} seconds`:e<36e5?`${Math.floor(e/6e4)} minutes`:e<864e5?`${Math.floor(e/36e5)} hours`:e<6048e5?`${Math.floor(e/864e5)} days`:e<24192e5?`${Math.floor(e/6048e5)} weeks`:e<290304e5?`${Math.floor(e/24192e5)} months`:`${Math.floor(e/290304e5)} years`)+" ago"}function MP(t,e){let n=t.filter(({id:r})=>r!==e).map(({displayName:r})=>r);return n.length>2?(n=n.slice(0,2),n.join(", ")+(t.length-2>1?`, and ${t.length-2} others`:", and 1 other")):n.length===1?n[0]:n[0]+" and "+n[1]}function $P({chat:t,user:e,updateChats:n}){var h;const r=oo();S.useState(t.lastMessage);const[i,s]=S.useState(LP((h=t.lastMessage)==null?void 0:h.timestamp));let o,a;t.lastMessage?(a=t.lastMessage.sender.id===e.uid?"You":t.lastMessage.sender.displayName,o=t.lastMessage.content,o.length>25&&(o=o.slice(0,25)+"...")):o="No messages yet. Tap to start a conversation!";const l=t.title||"Chat with "+MP(t.users,e.uid);async function u(){await eE(mr(at,"conversations",t.id)),await n()}function c(){r(`/chat/${t.id}`)}return E.jsxs("li",{onClick:c,className:"relative flex flex-col justify-between h-24 bg-primary-200 border-2 rounded-md p-2 cursor-pointer hover:brightness-125 transition-all duration-200",children:[E.jsx("h2",{className:"font-bold",children:l}),E.jsx("span",{onClick:u,className:"absolute top-2 right-2",children:"Trash"}),E.jsxs("div",{className:"flex relative",children:[E.jsx("h3",{className:"font-bold opacity-70 pr-1",children:a?a+":":""}),E.jsx("p",{className:"opacity-70",children:o})]}),E.jsx("span",{className:"self-end text-xs opacity-70",children:i})]})}function iy({chats:t,user:e,updateChats:n}){return E.jsx("ul",{className:"w-full px-8 max-w-xl",children:t&&t.map(r=>E.jsx($P,{chat:r,user:e,updateChats:n},r.id))})}function bP({updateChats:t}){const{user:e}=Ct.useContext(Kt),n=Ct.useRef(),[r,i]=Ct.useState(),s=c=>i({error:c}),o=c=>i({pending:c}),a=c=>i({success:c}),l=()=>{let c,h,d;const{error:p,pending:y,success:v}=r,k=p?"Error: ":v?"Success: ":"",m=p||y||v;return p?(c="border-red-500",h="bg-red-100",d="text-red-500"):(c="border-green-500",h="bg-green-100",d="text-green-500"),E.jsxs("div",{className:`${h} border-4 ${c} ${d} px-4 py-3 rounded relative`,role:"alert",children:[E.jsx("strong",{className:"font-bold",children:k}),E.jsx("span",{className:"block sm:inline",children:m})]})};async function u(c){if(c.preventDefault(),!n.current.value)return s("Please enter a friend code.");if(n.current.value.length!==28)return s("Please enter a valid friend code.");if(n.current.value===e.uid)return s("Try making friends before talking to yourself.");o("Searching for user...");const h=mr(at,"users",n.current.value),d=await Ea(h);if(!d.exists())return s("User not found. Please check your friend code and try again.");const p={...d.data(),id:d.id};o("Checking if you already have a conversation...");const y=await wl(yl(Cr(at,"conversations"),vl("users","array-contains",{displayName:e.displayName,id:e.uid})));for await(const v of y.docs){const k=v.data().users;for(const m of k)if(m.id===p.id)return s("You already have a conversation with this user.")}o("Adding friend..."),await tE(Cr(at,"conversations"),{users:[{displayName:e.displayName,id:e.uid},{displayName:p.displayName,id:p.id}]}),await t(),a("Conversation created!")}return E.jsxs("div",{className:"w-full max-w-xl",children:[r&&E.jsx(l,{}),E.jsx("form",{onSubmit:u,children:E.jsxs("div",{className:"flex items-center border-b-2 border-primary-300 py-2",children:[E.jsx("input",{className:"appearance-none bg-transparent border-none w-full text-accent mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search","aria-label":"Search",ref:n}),E.jsx("button",{className:"flex-shrink-0 bg-primary-700 hover:brightness-150 transition-all duration-200 border-accent-100 text-md text-accent-100 border-2 py-1 px-2 rounded",type:"submit",children:"Friend Code"})]})})]})}const UP=()=>{const{signOut:t,getUserDetails:e,user:n}=S.useContext(Kt),[r,i]=S.useState(),[s,o]=Ct.useState(),[a,l]=S.useState({chats:!0,userInfo:!0});async function u(){l({...a,chats:!0});const c=yl(Cr(at,"conversations"),vl("users","array-contains",{displayName:n.displayName,id:n.uid}),Ag(25)),d=(await wl(c)).docs.map(p=>({id:p.id,...p.data()}));i(d),l({...a,chats:!1})}return S.useEffect(()=>{(async()=>{l(h=>({chats:h.chats,userInfo:!0}));const c=await e();o({displayName:n.displayName,email:n.email,photoURL:n.photoURL,...c}),l(h=>({chats:h.chats,userInfo:!1}))})(),(async()=>{l(p=>({userInfo:p.userInfo,chats:!0})),mr(at,"users",n.uid);const c=yl(Cr(at,"conversations"),vl("users","array-contains",{displayName:n.displayName,id:n.uid}),Ag(25)),d=(await wl(c)).docs.map(p=>({id:p.id,...p.data()}));i(d),l(p=>({userInfo:p.userInfo,chats:!1}))})()},[]),E.jsxs("div",{className:"w-full h-full flex flex-col items-center",children:[!a.userInfo&&E.jsx(ry,{userInfo:s}),a.userInfo&&E.jsx(ry,{}),!a.chats&&E.jsx(iy,{chats:r,user:n,updateChats:u}),a.chats&&E.jsx(iy,{}),E.jsx(bP,{updateChats:u})]})},FP=()=>{const{user:t}=S.useContext(Kt),[e,n]=S.useState(!0),{id:r}=_0(),i=oo();return S.useEffect(()=>{t.uid===r&&i("/my-profile",{replace:!0})},[]),E.jsxs("div",{className:"profile",children:[E.jsx("h1",{children:"Profile"}),e&&E.jsx("p",{children:"Loading..."})||E.jsx("div",{children:"hey"})]})};function jP({user:t}){const{conversationId:e}=_0(),[n,r]=S.useState([]),[i,s]=S.useState(""),[o,a]=S.useState(!0);S.useEffect(()=>{let u;return e&&(u=zR(Cr(at,"conversations",e,"messages"),jR("timestamp","asc"),{limit:25},c=>{r(c.docs.map(h=>({id:h.id,...h.data()}))),a(!1)})),()=>u&&u()},[e]);const l=()=>{e&&addDoc(Cr(at,"conversations",e,"messages"),{sender:t.displayName,content:i,timestamp:HR()})};return E.jsxs("div",{className:"chatroom",children:[E.jsxs("div",{className:"header",children:[E.jsx("button",{className:"back-button",children:"Back"}),E.jsx("button",{className:"settings-button",children:"Settings"})]}),E.jsxs("div",{className:"message-stream",children:[o&&E.jsx("p",{children:"Loading messages..."}),n.map(u=>E.jsxs("div",{className:"message",children:[E.jsx("p",{className:"sender",children:u.sender}),E.jsx("p",{className:"content",children:u.content}),E.jsx("p",{className:"timestamp",children:u.timestamp})]},u.id))]}),E.jsxs("div",{className:"message-input",children:[E.jsx("input",{type:"text",value:i,onChange:u=>s(u.target.value)}),E.jsx("button",{onClick:l,children:"Send"})]})]})}const VP=({children:t})=>{const e=Ct.Children.map(t,n);function n(r){if(Ct.isValidElement(r)){let i="";switch(r.type){case"h1":i="text-2xl font-medium text-3xl mb-5";break;case"button":i="bg-primary-200 rounded-md px-4 py-2 hover:bg-primary-300 transition-colors duration-300";break;case"input":i="bg-transparent border-[.5px] border-white p-2 rounded-md w-full focus:outline-none focus:border-primary-300 focus:shadow-inner focus:shadow-black transition-colors duration-200";break;case"form":i="flex flex-col gap-5 w-full justify-center items-center mb-5";break}const s=Ct.Children.map(r.props.children,n);return Ct.cloneElement(r,{className:r.props.className?i+" "+r.props.className:i,children:s})}return r}return E.jsx("div",{className:"flex flex-col gap-5 w-[30em] max-w-[90%] border-[.5px] shadow-[#efefef6d] shadow-md p-8 rounded-2xl justify-center items-center",children:e})},BP=()=>{const{googleSignIn:t,setLoading:e}=S.useContext(Kt),n=async r=>{r.preventDefault(),e(i=>i+1),await t(),e(i=>i-1)};return E.jsxs("button",{className:"flex gap-2 bg-blue-500 hover:bg-blue-700 py-2 px-2 rounded-lg transition-colors duration-200",onClick:n,children:[E.jsx("svg",{className:"h-full w-14 aspect-square",children:E.jsx("use",{href:"#google-icon"})}),E.jsx("span",{className:"font-bold whitespace-nowrap flex justify-center items-center",children:"Sign in with Google"})]})},zP=()=>{const t=S.useRef(""),e=S.useRef(""),{user:n,googleSignUp:r,googleSignIn:i,signIn:s,setLoading:o,error:a,setError:l}=S.useContext(Kt),u=async c=>{if(c.preventDefault(),l(),t.current.value.trim()===""||e.current.value.trim()==="")return l("Please fill in all fields");o(h=>h+1),await s(t.current.value,e.current.value),o(h=>h-1)};return E.jsxs(VP,{className:"login",children:[E.jsx("h1",{children:"Login"}),a&&E.jsx("p",{className:"bg-error-200 text-error-500 p-4 rounded-sm border-error-100 border-2 shadow w-full",children:a}),E.jsxs("form",{onSubmit:u,action:"login",children:[E.jsx("input",{type:"text",name:"username",ref:t,placeholder:"Username/Email"}),E.jsx("input",{type:"password",name:"password",ref:e,placeholder:"Password"}),E.jsx("button",{type:"submit",value:"Login",children:"Login"})]}),E.jsx(T0,{to:"/signup",children:"Need an account?"}),E.jsx(BP,{})]})},HP=()=>E.jsx("div",{className:"signup",children:E.jsx("h1",{children:"Signup"})}),qP=()=>E.jsx("div",{className:"not-found",children:E.jsx("h1",{children:"Not Found"})});let na;const WP=new Uint8Array(16);function KP(){if(!na&&(na=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!na))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return na(WP)}const Ne=[];for(let t=0;t<256;++t)Ne.push((t+256).toString(16).slice(1));function GP(t,e=0){return(Ne[t[e+0]]+Ne[t[e+1]]+Ne[t[e+2]]+Ne[t[e+3]]+"-"+Ne[t[e+4]]+Ne[t[e+5]]+"-"+Ne[t[e+6]]+Ne[t[e+7]]+"-"+Ne[t[e+8]]+Ne[t[e+9]]+"-"+Ne[t[e+10]]+Ne[t[e+11]]+Ne[t[e+12]]+Ne[t[e+13]]+Ne[t[e+14]]+Ne[t[e+15]]).toLowerCase()}const QP=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),sy={randomUUID:QP};function YP(t,e,n){if(sy.randomUUID&&!e&&!t)return sy.randomUUID();t=t||{};const r=t.random||(t.rng||KP)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return GP(r)}const dp=Ct.createContext(),XP=({children:t})=>{const[e,n]=S.useState([]),r={toasts:e,addToast(i){const s={id:YP(),message:i};n(o=>[...o,s])}};return E.jsx(dp.Provider,{value:r,children:t})};function JP(){const{addToast:t}=S.useContext(dp),{user:e}=S.useContext(Kt);return E.jsxs("div",{className:"profile",children:[E.jsx("h1",{children:"My Profile"}),E.jsx("button",{onClick:async()=>{await navigator.clipboard.writeText(e.uid),t("Copied to clipboard!")},className:"flex-shrink-0 bg-primary-700 hover:brightness-150 transition-all duration-200 border-accent-100 text-md text-accent-100 border-2 py-1 px-2 rounded",children:"Copy Your Code!"})]})}const ra=t=>{const{user:e,loading:n}=S.useContext(Kt);return e?t.element:n?E.jsx("p",{children:"Loading"}):E.jsx(I0,{to:"/login"})};function ZP(){const{loading:t,user:e}=S.useContext(Kt);return E.jsx("div",{className:"App",children:E.jsxs(pT,{children:[E.jsx(vn,{exact:!0,path:"/",element:E.jsx(ra,{element:E.jsx(UP,{})})}),E.jsx(vn,{path:"/profile/:id",element:E.jsx(ra,{element:E.jsx(FP,{})})}),E.jsx(vn,{path:"/my-profile",element:E.jsx(ra,{element:E.jsx(JP,{})})}),E.jsx(vn,{path:"/chat/:id",element:E.jsx(ra,{element:E.jsx(jP,{})})}),E.jsx(vn,{path:"/login",element:t?E.jsx("p",{children:"Loading..."}):e?E.jsx(I0,{to:"/"}):E.jsx(zP,{})}),E.jsx(vn,{path:"/signup",element:E.jsx(HP,{})}),E.jsx(vn,{path:"*",element:E.jsx(qP,{})})]})})}function eO({message:t}){return E.jsx("div",{onAnimationEnd:e=>e.target.remove(),className:"fade-in-out border-primary-700 border-2 p-3",children:E.jsx("p",{children:t})})}const tO=()=>{let{toasts:t}=S.useContext(dp);return mI.createPortal(E.jsx("div",{className:"flex flex-col-reverse absolute bottom-0 right-0 gap-3",children:t.map(({id:e,message:n})=>E.jsx(eO,{message:n},e))}),document.getElementById("toast-root"))},nO=()=>E.jsx(ZP,{}),rO=({children:t})=>E.jsx(PP,{children:E.jsxs(XP,{children:[E.jsx(tO,{}),t]})});Sc.createRoot(document.getElementById("root")).render(E.jsx(rO,{children:E.jsx(wT,{children:E.jsx(nO,{})})}));
