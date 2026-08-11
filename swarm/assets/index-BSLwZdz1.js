(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function i(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(d){if(d.ep)return;d.ep=!0;const h=i(d);fetch(d.href,h)}})();function kc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vl={exports:{}},_r={},ql={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu;function jf(){if(Zu)return fe;Zu=1;var r=Symbol.for("react.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),m=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=m&&P[m]||P["@@iterator"],typeof P=="function"?P:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function z(P,I,ce){this.props=P,this.context=I,this.refs=b,this.updater=ce||k}z.prototype.isReactComponent={},z.prototype.setState=function(P,I){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,I,"setState")},z.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function L(){}L.prototype=z.prototype;function O(P,I,ce){this.props=P,this.context=I,this.refs=b,this.updater=ce||k}var $=O.prototype=new L;$.constructor=O,E($,z.prototype),$.isPureReactComponent=!0;var R=Array.isArray,q=Object.prototype.hasOwnProperty,B={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function Q(P,I,ce){var W,ee={},de=null,pe=null;if(I!=null)for(W in I.ref!==void 0&&(pe=I.ref),I.key!==void 0&&(de=""+I.key),I)q.call(I,W)&&!j.hasOwnProperty(W)&&(ee[W]=I[W]);var ye=arguments.length-2;if(ye===1)ee.children=ce;else if(1<ye){for(var Me=Array(ye),tn=0;tn<ye;tn++)Me[tn]=arguments[tn+2];ee.children=Me}if(P&&P.defaultProps)for(W in ye=P.defaultProps,ye)ee[W]===void 0&&(ee[W]=ye[W]);return{$$typeof:r,type:P,key:de,ref:pe,props:ee,_owner:B.current}}function X(P,I){return{$$typeof:r,type:P.type,key:I,ref:P.ref,props:P.props,_owner:P._owner}}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function Z(P){var I={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ce){return I[ce]})}var ve=/\/+/g;function xe(P,I){return typeof P=="object"&&P!==null&&P.key!=null?Z(""+P.key):I.toString(36)}function Se(P,I,ce,W,ee){var de=typeof P;(de==="undefined"||de==="boolean")&&(P=null);var pe=!1;if(P===null)pe=!0;else switch(de){case"string":case"number":pe=!0;break;case"object":switch(P.$$typeof){case r:case l:pe=!0}}if(pe)return pe=P,ee=ee(pe),P=W===""?"."+xe(pe,0):W,R(ee)?(ce="",P!=null&&(ce=P.replace(ve,"$&/")+"/"),Se(ee,I,ce,"",function(tn){return tn})):ee!=null&&(V(ee)&&(ee=X(ee,ce+(!ee.key||pe&&pe.key===ee.key?"":(""+ee.key).replace(ve,"$&/")+"/")+P)),I.push(ee)),1;if(pe=0,W=W===""?".":W+":",R(P))for(var ye=0;ye<P.length;ye++){de=P[ye];var Me=W+xe(de,ye);pe+=Se(de,I,ce,Me,ee)}else if(Me=y(P),typeof Me=="function")for(P=Me.call(P),ye=0;!(de=P.next()).done;)de=de.value,Me=W+xe(de,ye++),pe+=Se(de,I,ce,Me,ee);else if(de==="object")throw I=String(P),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return pe}function me(P,I,ce){if(P==null)return P;var W=[],ee=0;return Se(P,W,"","",function(de){return I.call(ce,de,ee++)}),W}function Re(P){if(P._status===-1){var I=P._result;I=I(),I.then(function(ce){(P._status===0||P._status===-1)&&(P._status=1,P._result=ce)},function(ce){(P._status===0||P._status===-1)&&(P._status=2,P._result=ce)}),P._status===-1&&(P._status=0,P._result=I)}if(P._status===1)return P._result.default;throw P._result}var we={current:null},H={transition:null},oe={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:H,ReactCurrentOwner:B};function Y(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:me,forEach:function(P,I,ce){me(P,function(){I.apply(this,arguments)},ce)},count:function(P){var I=0;return me(P,function(){I++}),I},toArray:function(P){return me(P,function(I){return I})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},fe.Component=z,fe.Fragment=i,fe.Profiler=d,fe.PureComponent=O,fe.StrictMode=u,fe.Suspense=p,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,fe.act=Y,fe.cloneElement=function(P,I,ce){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var W=E({},P.props),ee=P.key,de=P.ref,pe=P._owner;if(I!=null){if(I.ref!==void 0&&(de=I.ref,pe=B.current),I.key!==void 0&&(ee=""+I.key),P.type&&P.type.defaultProps)var ye=P.type.defaultProps;for(Me in I)q.call(I,Me)&&!j.hasOwnProperty(Me)&&(W[Me]=I[Me]===void 0&&ye!==void 0?ye[Me]:I[Me])}var Me=arguments.length-2;if(Me===1)W.children=ce;else if(1<Me){ye=Array(Me);for(var tn=0;tn<Me;tn++)ye[tn]=arguments[tn+2];W.children=ye}return{$$typeof:r,type:P.type,key:ee,ref:de,props:W,_owner:pe}},fe.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:h,_context:P},P.Consumer=P},fe.createElement=Q,fe.createFactory=function(P){var I=Q.bind(null,P);return I.type=P,I},fe.createRef=function(){return{current:null}},fe.forwardRef=function(P){return{$$typeof:g,render:P}},fe.isValidElement=V,fe.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:Re}},fe.memo=function(P,I){return{$$typeof:v,type:P,compare:I===void 0?null:I}},fe.startTransition=function(P){var I=H.transition;H.transition={};try{P()}finally{H.transition=I}},fe.unstable_act=Y,fe.useCallback=function(P,I){return we.current.useCallback(P,I)},fe.useContext=function(P){return we.current.useContext(P)},fe.useDebugValue=function(){},fe.useDeferredValue=function(P){return we.current.useDeferredValue(P)},fe.useEffect=function(P,I){return we.current.useEffect(P,I)},fe.useId=function(){return we.current.useId()},fe.useImperativeHandle=function(P,I,ce){return we.current.useImperativeHandle(P,I,ce)},fe.useInsertionEffect=function(P,I){return we.current.useInsertionEffect(P,I)},fe.useLayoutEffect=function(P,I){return we.current.useLayoutEffect(P,I)},fe.useMemo=function(P,I){return we.current.useMemo(P,I)},fe.useReducer=function(P,I,ce){return we.current.useReducer(P,I,ce)},fe.useRef=function(P){return we.current.useRef(P)},fe.useState=function(P){return we.current.useState(P)},fe.useSyncExternalStore=function(P,I,ce){return we.current.useSyncExternalStore(P,I,ce)},fe.useTransition=function(){return we.current.useTransition()},fe.version="18.3.1",fe}var Ju;function Jl(){return Ju||(Ju=1,ql.exports=jf()),ql.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ec;function Rf(){if(ec)return _r;ec=1;var r=Jl(),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function f(g,p,v){var x,m={},y=null,k=null;v!==void 0&&(y=""+v),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(k=p.ref);for(x in p)u.call(p,x)&&!h.hasOwnProperty(x)&&(m[x]=p[x]);if(g&&g.defaultProps)for(x in p=g.defaultProps,p)m[x]===void 0&&(m[x]=p[x]);return{$$typeof:l,type:g,key:y,ref:k,props:m,_owner:d.current}}return _r.Fragment=i,_r.jsx=f,_r.jsxs=f,_r}var nc;function zf(){return nc||(nc=1,Vl.exports=Rf()),Vl.exports}var _=zf(),re=Jl();const Of=kc(re);var Bo={},Ql={exports:{}},en={},Yl={exports:{}},Kl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc;function If(){return tc||(tc=1,(function(r){function l(H,oe){var Y=H.length;H.push(oe);e:for(;0<Y;){var P=Y-1>>>1,I=H[P];if(0<d(I,oe))H[P]=oe,H[Y]=I,Y=P;else break e}}function i(H){return H.length===0?null:H[0]}function u(H){if(H.length===0)return null;var oe=H[0],Y=H.pop();if(Y!==oe){H[0]=Y;e:for(var P=0,I=H.length,ce=I>>>1;P<ce;){var W=2*(P+1)-1,ee=H[W],de=W+1,pe=H[de];if(0>d(ee,Y))de<I&&0>d(pe,ee)?(H[P]=pe,H[de]=Y,P=de):(H[P]=ee,H[W]=Y,P=W);else if(de<I&&0>d(pe,Y))H[P]=pe,H[de]=Y,P=de;else break e}}return oe}function d(H,oe){var Y=H.sortIndex-oe.sortIndex;return Y!==0?Y:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var p=[],v=[],x=1,m=null,y=3,k=!1,E=!1,b=!1,z=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(H){for(var oe=i(v);oe!==null;){if(oe.callback===null)u(v);else if(oe.startTime<=H)u(v),oe.sortIndex=oe.expirationTime,l(p,oe);else break;oe=i(v)}}function R(H){if(b=!1,$(H),!E)if(i(p)!==null)E=!0,Re(q);else{var oe=i(v);oe!==null&&we(R,oe.startTime-H)}}function q(H,oe){E=!1,b&&(b=!1,L(Q),Q=-1),k=!0;var Y=y;try{for($(oe),m=i(p);m!==null&&(!(m.expirationTime>oe)||H&&!Z());){var P=m.callback;if(typeof P=="function"){m.callback=null,y=m.priorityLevel;var I=P(m.expirationTime<=oe);oe=r.unstable_now(),typeof I=="function"?m.callback=I:m===i(p)&&u(p),$(oe)}else u(p);m=i(p)}if(m!==null)var ce=!0;else{var W=i(v);W!==null&&we(R,W.startTime-oe),ce=!1}return ce}finally{m=null,y=Y,k=!1}}var B=!1,j=null,Q=-1,X=5,V=-1;function Z(){return!(r.unstable_now()-V<X)}function ve(){if(j!==null){var H=r.unstable_now();V=H;var oe=!0;try{oe=j(!0,H)}finally{oe?xe():(B=!1,j=null)}}else B=!1}var xe;if(typeof O=="function")xe=function(){O(ve)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,me=Se.port2;Se.port1.onmessage=ve,xe=function(){me.postMessage(null)}}else xe=function(){z(ve,0)};function Re(H){j=H,B||(B=!0,xe())}function we(H,oe){Q=z(function(){H(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){E||k||(E=!0,Re(q))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return i(p)},r.unstable_next=function(H){switch(y){case 1:case 2:case 3:var oe=3;break;default:oe=y}var Y=y;y=oe;try{return H()}finally{y=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Y=y;y=H;try{return oe()}finally{y=Y}},r.unstable_scheduleCallback=function(H,oe,Y){var P=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?P+Y:P):Y=P,H){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=Y+I,H={id:x++,callback:oe,priorityLevel:H,startTime:Y,expirationTime:I,sortIndex:-1},Y>P?(H.sortIndex=Y,l(v,H),i(p)===null&&H===i(v)&&(b?(L(Q),Q=-1):b=!0,we(R,Y-P))):(H.sortIndex=I,l(p,H),E||k||(E=!0,Re(q))),H},r.unstable_shouldYield=Z,r.unstable_wrapCallback=function(H){var oe=y;return function(){var Y=y;y=oe;try{return H.apply(this,arguments)}finally{y=Y}}}})(Kl)),Kl}var rc;function Ff(){return rc||(rc=1,Yl.exports=If()),Yl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oc;function Df(){if(oc)return en;oc=1;var r=Jl(),l=Ff();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function h(e,n){f(e,n),f(e+"Capture",n)}function f(e,n){for(d[e]=n,e=0;e<n.length;e++)u.add(n[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},m={};function y(e){return p.call(m,e)?!0:p.call(x,e)?!1:v.test(e)?m[e]=!0:(x[e]=!0,!1)}function k(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,n,t,o){if(n===null||typeof n>"u"||k(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function b(e,n,t,o,s,a,c){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=c}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];z[n]=new b(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(L,O);z[n]=new b(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(L,O);z[n]=new b(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(L,O);z[n]=new b(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function $(e,n,t,o){var s=z.hasOwnProperty(n)?z[n]:null;(s!==null?s.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(E(n,t,s,o)&&(t=null),o||s===null?y(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,o=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),B=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),Z=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),H=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,P;function I(e){if(P===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);P=n&&n[1]||""}return`
`+P+e}var ce=!1;function W(e,n){if(!e||ce)return"";ce=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(N){var o=N}Reflect.construct(e,[],n)}else{try{n.call()}catch(N){o=N}e.call(n.prototype)}else{try{throw Error()}catch(N){o=N}e()}}catch(N){if(N&&o&&typeof N.stack=="string"){for(var s=N.stack.split(`
`),a=o.stack.split(`
`),c=s.length-1,w=a.length-1;1<=c&&0<=w&&s[c]!==a[w];)w--;for(;1<=c&&0<=w;c--,w--)if(s[c]!==a[w]){if(c!==1||w!==1)do if(c--,w--,0>w||s[c]!==a[w]){var S=`
`+s[c].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=c&&0<=w);break}}}finally{ce=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?I(e):""}function ee(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1),e;case 11:return e=W(e.type.render,!1),e;case 1:return e=W(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case B:return"Portal";case X:return"Profiler";case Q:return"StrictMode";case xe:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Z:return(e.displayName||"Context")+".Consumer";case V:return(e._context.displayName||"Context")+".Provider";case ve:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case me:return n=e.displayName||null,n!==null?n:de(e.type)||"Memo";case Re:n=e._payload,e=e._init;try{return de(e(n))}catch{}}return null}function pe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(n);case 8:return n===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tn(e){var n=Me(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(c){o=""+c,a.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(c){o=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Nr(e){e._valueTracker||(e._valueTracker=tn(e))}function oi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=Me(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zo(e,n){var t=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function si(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=ye(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function li(e,n){n=n.checked,n!=null&&$(e,"checked",n,!1)}function Jo(e,n){li(e,n);var t=ye(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?es(e,n.type,t):n.hasOwnProperty("defaultValue")&&es(e,n.type,ye(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ii(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function es(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Bt=Array.isArray;function ht(e,n,t,o){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&o&&(e[t].defaultSelected=!0)}else{for(t=""+ye(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function ns(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ai(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(i(92));if(Bt(t)){if(1<t.length)throw Error(i(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ye(t)}}function ui(e,n){var t=ye(n.value),o=ye(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function ci(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function di(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ts(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?di(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,fi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,s)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ut(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(Ht).forEach(function(e){Oc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ht[n]=Ht[e]})});function pi(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ht.hasOwnProperty(e)&&Ht[e]?(""+n).trim():n+"px"}function hi(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,s=pi(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,s):e[t]=s}}var Ic=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rs(e,n){if(n){if(Ic[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function os(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ss=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var is=null,mt=null,yt=null;function mi(e){if(e=dr(e)){if(typeof is!="function")throw Error(i(280));var n=e.stateNode;n&&(n=no(n),is(e.stateNode,e.type,n))}}function yi(e){mt?yt?yt.push(e):yt=[e]:mt=e}function gi(){if(mt){var e=mt,n=yt;if(yt=mt=null,mi(e),n)for(e=0;e<n.length;e++)mi(n[e])}}function vi(e,n){return e(n)}function xi(){}var as=!1;function wi(e,n,t){if(as)return e(n,t);as=!0;try{return vi(e,n,t)}finally{as=!1,(mt!==null||yt!==null)&&(xi(),gi())}}function Wt(e,n){var t=e.stateNode;if(t===null)return null;var o=no(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(i(231,n,typeof t));return t}var us=!1;if(g)try{var Vt={};Object.defineProperty(Vt,"passive",{get:function(){us=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch{us=!1}function Fc(e,n,t,o,s,a,c,w,S){var N=Array.prototype.slice.call(arguments,3);try{n.apply(t,N)}catch(D){this.onError(D)}}var qt=!1,Rr=null,zr=!1,cs=null,Dc={onError:function(e){qt=!0,Rr=e}};function Ac(e,n,t,o,s,a,c,w,S){qt=!1,Rr=null,Fc.apply(Dc,arguments)}function $c(e,n,t,o,s,a,c,w,S){if(Ac.apply(this,arguments),qt){if(qt){var N=Rr;qt=!1,Rr=null}else throw Error(i(198));zr||(zr=!0,cs=N)}}function nt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ki(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Si(e){if(nt(e)!==e)throw Error(i(188))}function Bc(e){var n=e.alternate;if(!n){if(n=nt(e),n===null)throw Error(i(188));return n!==e?null:e}for(var t=e,o=n;;){var s=t.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){t=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===t)return Si(s),e;if(a===o)return Si(s),n;a=a.sibling}throw Error(i(188))}if(t.return!==o.return)t=s,o=a;else{for(var c=!1,w=s.child;w;){if(w===t){c=!0,t=s,o=a;break}if(w===o){c=!0,o=s,t=a;break}w=w.sibling}if(!c){for(w=a.child;w;){if(w===t){c=!0,t=a,o=s;break}if(w===o){c=!0,o=a,t=s;break}w=w.sibling}if(!c)throw Error(i(189))}}if(t.alternate!==o)throw Error(i(190))}if(t.tag!==3)throw Error(i(188));return t.stateNode.current===t?e:n}function Mi(e){return e=Bc(e),e!==null?bi(e):null}function bi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=bi(e);if(n!==null)return n;e=e.sibling}return null}var Pi=l.unstable_scheduleCallback,_i=l.unstable_cancelCallback,Uc=l.unstable_shouldYield,Hc=l.unstable_requestPaint,Le=l.unstable_now,Wc=l.unstable_getCurrentPriorityLevel,ds=l.unstable_ImmediatePriority,Ci=l.unstable_UserBlockingPriority,Or=l.unstable_NormalPriority,Vc=l.unstable_LowPriority,Ei=l.unstable_IdlePriority,Ir=null,Sn=null;function qc(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Ir,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:Kc,Qc=Math.log,Yc=Math.LN2;function Kc(e){return e>>>=0,e===0?32:31-(Qc(e)/Yc|0)|0}var Fr=64,Dr=4194304;function Qt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,c=t&268435455;if(c!==0){var w=c&~s;w!==0?o=Qt(w):(a&=c,a!==0&&(o=Qt(a)))}else c=t&~s,c!==0?o=Qt(c):a!==0&&(o=Qt(a));if(o===0)return 0;if(n!==0&&n!==o&&(n&s)===0&&(s=o&-o,a=n&-n,s>=a||s===16&&(a&4194240)!==0))return n;if((o&4)!==0&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-mn(n),s=1<<t,o|=e[t],n&=~s;return o}function Xc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gc(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-mn(a),w=1<<c,S=s[c];S===-1?((w&t)===0||(w&o)!==0)&&(s[c]=Xc(w,n)):S<=n&&(e.expiredLanes|=w),a&=~w}}function fs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ti(){var e=Fr;return Fr<<=1,(Fr&4194240)===0&&(Fr=64),e}function ps(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-mn(n),e[n]=t}function Zc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-mn(t),a=1<<s;n[s]=0,o[s]=-1,e[s]=-1,t&=~a}}function hs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-mn(t),s=1<<o;s&n|e[o]&n&&(e[o]|=n),t&=~s}}var ke=0;function Ni(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Li,ms,ji,Ri,zi,ys=!1,$r=[],In=null,Fn=null,Dn=null,Kt=new Map,Xt=new Map,An=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oi(e,n){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Kt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xt.delete(n.pointerId)}}function Gt(e,n,t,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},n!==null&&(n=dr(n),n!==null&&ms(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function ed(e,n,t,o,s){switch(n){case"focusin":return In=Gt(In,e,n,t,o,s),!0;case"dragenter":return Fn=Gt(Fn,e,n,t,o,s),!0;case"mouseover":return Dn=Gt(Dn,e,n,t,o,s),!0;case"pointerover":var a=s.pointerId;return Kt.set(a,Gt(Kt.get(a)||null,e,n,t,o,s)),!0;case"gotpointercapture":return a=s.pointerId,Xt.set(a,Gt(Xt.get(a)||null,e,n,t,o,s)),!0}return!1}function Ii(e){var n=tt(e.target);if(n!==null){var t=nt(n);if(t!==null){if(n=t.tag,n===13){if(n=ki(t),n!==null){e.blockedOn=n,zi(e.priority,function(){ji(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=vs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);ss=o,t.target.dispatchEvent(o),ss=null}else return n=dr(t),n!==null&&ms(n),e.blockedOn=t,!1;n.shift()}return!0}function Fi(e,n,t){Br(e)&&t.delete(n)}function nd(){ys=!1,In!==null&&Br(In)&&(In=null),Fn!==null&&Br(Fn)&&(Fn=null),Dn!==null&&Br(Dn)&&(Dn=null),Kt.forEach(Fi),Xt.forEach(Fi)}function Zt(e,n){e.blockedOn===n&&(e.blockedOn=null,ys||(ys=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,nd)))}function Jt(e){function n(s){return Zt(s,e)}if(0<$r.length){Zt($r[0],e);for(var t=1;t<$r.length;t++){var o=$r[t];o.blockedOn===e&&(o.blockedOn=null)}}for(In!==null&&Zt(In,e),Fn!==null&&Zt(Fn,e),Dn!==null&&Zt(Dn,e),Kt.forEach(n),Xt.forEach(n),t=0;t<An.length;t++)o=An[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<An.length&&(t=An[0],t.blockedOn===null);)Ii(t),t.blockedOn===null&&An.shift()}var gt=R.ReactCurrentBatchConfig,Ur=!0;function td(e,n,t,o){var s=ke,a=gt.transition;gt.transition=null;try{ke=1,gs(e,n,t,o)}finally{ke=s,gt.transition=a}}function rd(e,n,t,o){var s=ke,a=gt.transition;gt.transition=null;try{ke=4,gs(e,n,t,o)}finally{ke=s,gt.transition=a}}function gs(e,n,t,o){if(Ur){var s=vs(e,n,t,o);if(s===null)Os(e,n,o,Hr,t),Oi(e,o);else if(ed(s,e,n,t,o))o.stopPropagation();else if(Oi(e,o),n&4&&-1<Jc.indexOf(e)){for(;s!==null;){var a=dr(s);if(a!==null&&Li(a),a=vs(e,n,t,o),a===null&&Os(e,n,o,Hr,t),a===s)break;s=a}s!==null&&o.stopPropagation()}else Os(e,n,o,null,t)}}var Hr=null;function vs(e,n,t,o){if(Hr=null,e=ls(o),e=tt(e),e!==null)if(n=nt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ki(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Hr=e,null}function Di(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wc()){case ds:return 1;case Ci:return 4;case Or:case Vc:return 16;case Ei:return 536870912;default:return 16}default:return 16}}var $n=null,xs=null,Wr=null;function Ai(){if(Wr)return Wr;var e,n=xs,t=n.length,o,s="value"in $n?$n.value:$n.textContent,a=s.length;for(e=0;e<t&&n[e]===s[e];e++);var c=t-e;for(o=1;o<=c&&n[t-o]===s[a-o];o++);return Wr=s.slice(e,1<o?1-o:void 0)}function Vr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function $i(){return!1}function rn(e){function n(t,o,s,a,c){this._reactName=t,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(t=e[w],this[w]=t?t(a):a[w]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qr:$i,this.isPropagationStopped=$i,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),n}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=rn(vt),er=Y({},vt,{view:0,detail:0}),od=rn(er),ks,Ss,nr,Qr=Y({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(ks=e.screenX-nr.screenX,Ss=e.screenY-nr.screenY):Ss=ks=0,nr=e),ks)},movementY:function(e){return"movementY"in e?e.movementY:Ss}}),Bi=rn(Qr),sd=Y({},Qr,{dataTransfer:0}),ld=rn(sd),id=Y({},er,{relatedTarget:0}),Ms=rn(id),ad=Y({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),ud=rn(ad),cd=Y({},vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=rn(cd),fd=Y({},vt,{data:0}),Ui=rn(fd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=md[e])?!!n[e]:!1}function bs(){return yd}var gd=Y({},er,{key:function(e){if(e.key){var n=pd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vd=rn(gd),xd=Y({},Qr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hi=rn(xd),wd=Y({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),kd=rn(wd),Sd=Y({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=rn(Sd),bd=Y({},Qr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=rn(bd),_d=[9,13,27,32],Ps=g&&"CompositionEvent"in window,tr=null;g&&"documentMode"in document&&(tr=document.documentMode);var Cd=g&&"TextEvent"in window&&!tr,Wi=g&&(!Ps||tr&&8<tr&&11>=tr),Vi=" ",qi=!1;function Qi(e,n){switch(e){case"keyup":return _d.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xt=!1;function Ed(e,n){switch(e){case"compositionend":return Yi(n);case"keypress":return n.which!==32?null:(qi=!0,Vi);case"textInput":return e=n.data,e===Vi&&qi?null:e;default:return null}}function Td(e,n){if(xt)return e==="compositionend"||!Ps&&Qi(e,n)?(e=Ai(),Wr=xs=$n=null,xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wi&&n.locale!=="ko"?null:n.data;default:return null}}var Nd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ki(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Nd[e.type]:n==="textarea"}function Xi(e,n,t,o){yi(o),n=Zr(n,"onChange"),0<n.length&&(t=new ws("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var rr=null,or=null;function Ld(e){ha(e,0)}function Yr(e){var n=bt(e);if(oi(n))return e}function jd(e,n){if(e==="change")return n}var Gi=!1;if(g){var _s;if(g){var Cs="oninput"in document;if(!Cs){var Zi=document.createElement("div");Zi.setAttribute("oninput","return;"),Cs=typeof Zi.oninput=="function"}_s=Cs}else _s=!1;Gi=_s&&(!document.documentMode||9<document.documentMode)}function Ji(){rr&&(rr.detachEvent("onpropertychange",ea),or=rr=null)}function ea(e){if(e.propertyName==="value"&&Yr(or)){var n=[];Xi(n,or,e,ls(e)),wi(Ld,n)}}function Rd(e,n,t){e==="focusin"?(Ji(),rr=n,or=t,rr.attachEvent("onpropertychange",ea)):e==="focusout"&&Ji()}function zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yr(or)}function Od(e,n){if(e==="click")return Yr(n)}function Id(e,n){if(e==="input"||e==="change")return Yr(n)}function Fd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yn=typeof Object.is=="function"?Object.is:Fd;function sr(e,n){if(yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var s=t[o];if(!p.call(n,s)||!yn(e[s],n[s]))return!1}return!0}function na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ta(e,n){var t=na(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=na(t)}}function ra(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ra(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function oa(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function Es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Dd(e){var n=oa(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ra(t.ownerDocument.documentElement,t)){if(o!==null&&Es(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=ta(t,a);var c=ta(t,o);s&&c&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(n),e.extend(c.node,c.offset)):(n.setEnd(c.node,c.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ad=g&&"documentMode"in document&&11>=document.documentMode,wt=null,Ts=null,lr=null,Ns=!1;function sa(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ns||wt==null||wt!==Lr(o)||(o=wt,"selectionStart"in o&&Es(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lr&&sr(lr,o)||(lr=o,o=Zr(Ts,"onSelect"),0<o.length&&(n=new ws("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=wt)))}function Kr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var kt={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},Ls={},la={};g&&(la=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);function Xr(e){if(Ls[e])return Ls[e];if(!kt[e])return e;var n=kt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in la)return Ls[e]=n[t];return e}var ia=Xr("animationend"),aa=Xr("animationiteration"),ua=Xr("animationstart"),ca=Xr("transitionend"),da=new Map,fa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,n){da.set(e,n),h(n,[e])}for(var js=0;js<fa.length;js++){var Rs=fa[js],$d=Rs.toLowerCase(),Bd=Rs[0].toUpperCase()+Rs.slice(1);Bn($d,"on"+Bd)}Bn(ia,"onAnimationEnd"),Bn(aa,"onAnimationIteration"),Bn(ua,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(ca,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));function pa(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,$c(o,n,void 0,e),e.currentTarget=null}function ha(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],s=o.event;o=o.listeners;e:{var a=void 0;if(n)for(var c=o.length-1;0<=c;c--){var w=o[c],S=w.instance,N=w.currentTarget;if(w=w.listener,S!==a&&s.isPropagationStopped())break e;pa(s,w,N),a=S}else for(c=0;c<o.length;c++){if(w=o[c],S=w.instance,N=w.currentTarget,w=w.listener,S!==a&&s.isPropagationStopped())break e;pa(s,w,N),a=S}}}if(zr)throw e=cs,zr=!1,cs=null,e}function Pe(e,n){var t=n[Bs];t===void 0&&(t=n[Bs]=new Set);var o=e+"__bubble";t.has(o)||(ma(n,e,2,!1),t.add(o))}function zs(e,n,t){var o=0;n&&(o|=4),ma(t,e,o,n)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Gr]){e[Gr]=!0,u.forEach(function(t){t!=="selectionchange"&&(Ud.has(t)||zs(t,!1,e),zs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gr]||(n[Gr]=!0,zs("selectionchange",!1,n))}}function ma(e,n,t,o){switch(Di(n)){case 1:var s=td;break;case 4:s=rd;break;default:s=gs}t=s.bind(null,n,t,e),s=void 0,!us||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function Os(e,n,t,o,s){var a=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var c=o.tag;if(c===3||c===4){var w=o.stateNode.containerInfo;if(w===s||w.nodeType===8&&w.parentNode===s)break;if(c===4)for(c=o.return;c!==null;){var S=c.tag;if((S===3||S===4)&&(S=c.stateNode.containerInfo,S===s||S.nodeType===8&&S.parentNode===s))return;c=c.return}for(;w!==null;){if(c=tt(w),c===null)return;if(S=c.tag,S===5||S===6){o=a=c;continue e}w=w.parentNode}}o=o.return}wi(function(){var N=a,D=ls(t),A=[];e:{var F=da.get(e);if(F!==void 0){var K=ws,J=e;switch(e){case"keypress":if(Vr(t)===0)break e;case"keydown":case"keyup":K=vd;break;case"focusin":J="focus",K=Ms;break;case"focusout":J="blur",K=Ms;break;case"beforeblur":case"afterblur":K=Ms;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Bi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=kd;break;case ia:case aa:case ua:K=ud;break;case ca:K=Md;break;case"scroll":K=od;break;case"wheel":K=Pd;break;case"copy":case"cut":case"paste":K=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Hi}var ne=(n&4)!==0,je=!ne&&e==="scroll",C=ne?F!==null?F+"Capture":null:F;ne=[];for(var M=N,T;M!==null;){T=M;var U=T.stateNode;if(T.tag===5&&U!==null&&(T=U,C!==null&&(U=Wt(M,C),U!=null&&ne.push(ur(M,U,T)))),je)break;M=M.return}0<ne.length&&(F=new K(F,J,null,t,D),A.push({event:F,listeners:ne}))}}if((n&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",F&&t!==ss&&(J=t.relatedTarget||t.fromElement)&&(tt(J)||J[En]))break e;if((K||F)&&(F=D.window===D?D:(F=D.ownerDocument)?F.defaultView||F.parentWindow:window,K?(J=t.relatedTarget||t.toElement,K=N,J=J?tt(J):null,J!==null&&(je=nt(J),J!==je||J.tag!==5&&J.tag!==6)&&(J=null)):(K=null,J=N),K!==J)){if(ne=Bi,U="onMouseLeave",C="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Hi,U="onPointerLeave",C="onPointerEnter",M="pointer"),je=K==null?F:bt(K),T=J==null?F:bt(J),F=new ne(U,M+"leave",K,t,D),F.target=je,F.relatedTarget=T,U=null,tt(D)===N&&(ne=new ne(C,M+"enter",J,t,D),ne.target=T,ne.relatedTarget=je,U=ne),je=U,K&&J)n:{for(ne=K,C=J,M=0,T=ne;T;T=St(T))M++;for(T=0,U=C;U;U=St(U))T++;for(;0<M-T;)ne=St(ne),M--;for(;0<T-M;)C=St(C),T--;for(;M--;){if(ne===C||C!==null&&ne===C.alternate)break n;ne=St(ne),C=St(C)}ne=null}else ne=null;K!==null&&ya(A,F,K,ne,!1),J!==null&&je!==null&&ya(A,je,J,ne,!0)}}e:{if(F=N?bt(N):window,K=F.nodeName&&F.nodeName.toLowerCase(),K==="select"||K==="input"&&F.type==="file")var te=jd;else if(Ki(F))if(Gi)te=Id;else{te=zd;var se=Rd}else(K=F.nodeName)&&K.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(te=Od);if(te&&(te=te(e,N))){Xi(A,te,t,D);break e}se&&se(e,F,N),e==="focusout"&&(se=F._wrapperState)&&se.controlled&&F.type==="number"&&es(F,"number",F.value)}switch(se=N?bt(N):window,e){case"focusin":(Ki(se)||se.contentEditable==="true")&&(wt=se,Ts=N,lr=null);break;case"focusout":lr=Ts=wt=null;break;case"mousedown":Ns=!0;break;case"contextmenu":case"mouseup":case"dragend":Ns=!1,sa(A,t,D);break;case"selectionchange":if(Ad)break;case"keydown":case"keyup":sa(A,t,D)}var le;if(Ps)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else xt?Qi(e,t)&&(ue="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ue="onCompositionStart");ue&&(Wi&&t.locale!=="ko"&&(xt||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&xt&&(le=Ai()):($n=D,xs="value"in $n?$n.value:$n.textContent,xt=!0)),se=Zr(N,ue),0<se.length&&(ue=new Ui(ue,e,null,t,D),A.push({event:ue,listeners:se}),le?ue.data=le:(le=Yi(t),le!==null&&(ue.data=le)))),(le=Cd?Ed(e,t):Td(e,t))&&(N=Zr(N,"onBeforeInput"),0<N.length&&(D=new Ui("onBeforeInput","beforeinput",null,t,D),A.push({event:D,listeners:N}),D.data=le))}ha(A,n)})}function ur(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Zr(e,n){for(var t=n+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Wt(e,t),a!=null&&o.unshift(ur(e,a,s)),a=Wt(e,n),a!=null&&o.push(ur(e,a,s))),e=e.return}return o}function St(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ya(e,n,t,o,s){for(var a=n._reactName,c=[];t!==null&&t!==o;){var w=t,S=w.alternate,N=w.stateNode;if(S!==null&&S===o)break;w.tag===5&&N!==null&&(w=N,s?(S=Wt(t,a),S!=null&&c.unshift(ur(t,S,w))):s||(S=Wt(t,a),S!=null&&c.push(ur(t,S,w)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var Hd=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function ga(e){return(typeof e=="string"?e:""+e).replace(Hd,`
`).replace(Wd,"")}function Jr(e,n,t){if(n=ga(n),ga(e)!==n&&t)throw Error(i(425))}function eo(){}var Is=null,Fs=null;function Ds(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var As=typeof setTimeout=="function"?setTimeout:void 0,Vd=typeof clearTimeout=="function"?clearTimeout:void 0,va=typeof Promise=="function"?Promise:void 0,qd=typeof queueMicrotask=="function"?queueMicrotask:typeof va<"u"?function(e){return va.resolve(null).then(e).catch(Qd)}:As;function Qd(e){setTimeout(function(){throw e})}function $s(e,n){var t=n,o=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(o===0){e.removeChild(s),Jt(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=s}while(t);Jt(n)}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function xa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Mt=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Mt,cr="__reactProps$"+Mt,En="__reactContainer$"+Mt,Bs="__reactEvents$"+Mt,Yd="__reactListeners$"+Mt,Kd="__reactHandles$"+Mt;function tt(e){var n=e[Mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[En]||t[Mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=xa(e);e!==null;){if(t=e[Mn])return t;e=xa(e)}return n}e=t,t=e.parentNode}return null}function dr(e){return e=e[Mn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function no(e){return e[cr]||null}var Us=[],Pt=-1;function Hn(e){return{current:e}}function _e(e){0>Pt||(e.current=Us[Pt],Us[Pt]=null,Pt--)}function be(e,n){Pt++,Us[Pt]=e.current,e.current=n}var Wn={},He=Hn(Wn),Ke=Hn(!1),rt=Wn;function _t(e,n){var t=e.type.contextTypes;if(!t)return Wn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in t)s[a]=n[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function Xe(e){return e=e.childContextTypes,e!=null}function to(){_e(Ke),_e(He)}function wa(e,n,t){if(He.current!==Wn)throw Error(i(168));be(He,n),be(Ke,t)}function ka(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var s in o)if(!(s in n))throw Error(i(108,pe(e)||"Unknown",s));return Y({},t,o)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,rt=He.current,be(He,e),be(Ke,Ke.current),!0}function Sa(e,n,t){var o=e.stateNode;if(!o)throw Error(i(169));t?(e=ka(e,n,rt),o.__reactInternalMemoizedMergedChildContext=e,_e(Ke),_e(He),be(He,e)):_e(Ke),be(Ke,t)}var Tn=null,oo=!1,Hs=!1;function Ma(e){Tn===null?Tn=[e]:Tn.push(e)}function Xd(e){oo=!0,Ma(e)}function Vn(){if(!Hs&&Tn!==null){Hs=!0;var e=0,n=ke;try{var t=Tn;for(ke=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Tn=null,oo=!1}catch(s){throw Tn!==null&&(Tn=Tn.slice(e+1)),Pi(ds,Vn),s}finally{ke=n,Hs=!1}}return null}var Ct=[],Et=0,so=null,lo=0,un=[],cn=0,ot=null,Nn=1,Ln="";function st(e,n){Ct[Et++]=lo,Ct[Et++]=so,so=e,lo=n}function ba(e,n,t){un[cn++]=Nn,un[cn++]=Ln,un[cn++]=ot,ot=e;var o=Nn;e=Ln;var s=32-mn(o)-1;o&=~(1<<s),t+=1;var a=32-mn(n)+s;if(30<a){var c=s-s%5;a=(o&(1<<c)-1).toString(32),o>>=c,s-=c,Nn=1<<32-mn(n)+s|t<<s|o,Ln=a+e}else Nn=1<<a|t<<s|o,Ln=e}function Ws(e){e.return!==null&&(st(e,1),ba(e,1,0))}function Vs(e){for(;e===so;)so=Ct[--Et],Ct[Et]=null,lo=Ct[--Et],Ct[Et]=null;for(;e===ot;)ot=un[--cn],un[cn]=null,Ln=un[--cn],un[cn]=null,Nn=un[--cn],un[cn]=null}var on=null,sn=null,Ce=!1,gn=null;function Pa(e,n){var t=hn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function _a(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,on=e,sn=Un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,on=e,sn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ot!==null?{id:Nn,overflow:Ln}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=hn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,on=e,sn=null,!0):!1;default:return!1}}function qs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qs(e){if(Ce){var n=sn;if(n){var t=n;if(!_a(e,n)){if(qs(e))throw Error(i(418));n=Un(t.nextSibling);var o=on;n&&_a(e,n)?Pa(o,t):(e.flags=e.flags&-4097|2,Ce=!1,on=e)}}else{if(qs(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ce=!1,on=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function io(e){if(e!==on)return!1;if(!Ce)return Ca(e),Ce=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ds(e.type,e.memoizedProps)),n&&(n=sn)){if(qs(e))throw Ea(),Error(i(418));for(;n;)Pa(e,n),n=Un(n.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){sn=Un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}sn=null}}else sn=on?Un(e.stateNode.nextSibling):null;return!0}function Ea(){for(var e=sn;e;)e=Un(e.nextSibling)}function Tt(){sn=on=null,Ce=!1}function Ys(e){gn===null?gn=[e]:gn.push(e)}var Gd=R.ReactCurrentBatchConfig;function fr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(i(309));var o=t.stateNode}if(!o)throw Error(i(147,e));var s=o,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(c){var w=s.refs;c===null?delete w[a]:w[a]=c},n._stringRef=a,n)}if(typeof e!="string")throw Error(i(284));if(!t._owner)throw Error(i(290,e))}return e}function ao(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ta(e){var n=e._init;return n(e._payload)}function Na(e){function n(C,M){if(e){var T=C.deletions;T===null?(C.deletions=[M],C.flags|=16):T.push(M)}}function t(C,M){if(!e)return null;for(;M!==null;)n(C,M),M=M.sibling;return null}function o(C,M){for(C=new Map;M!==null;)M.key!==null?C.set(M.key,M):C.set(M.index,M),M=M.sibling;return C}function s(C,M){return C=Jn(C,M),C.index=0,C.sibling=null,C}function a(C,M,T){return C.index=T,e?(T=C.alternate,T!==null?(T=T.index,T<M?(C.flags|=2,M):T):(C.flags|=2,M)):(C.flags|=1048576,M)}function c(C){return e&&C.alternate===null&&(C.flags|=2),C}function w(C,M,T,U){return M===null||M.tag!==6?(M=Al(T,C.mode,U),M.return=C,M):(M=s(M,T),M.return=C,M)}function S(C,M,T,U){var te=T.type;return te===j?D(C,M,T.props.children,U,T.key):M!==null&&(M.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Re&&Ta(te)===M.type)?(U=s(M,T.props),U.ref=fr(C,M,T),U.return=C,U):(U=Ro(T.type,T.key,T.props,null,C.mode,U),U.ref=fr(C,M,T),U.return=C,U)}function N(C,M,T,U){return M===null||M.tag!==4||M.stateNode.containerInfo!==T.containerInfo||M.stateNode.implementation!==T.implementation?(M=$l(T,C.mode,U),M.return=C,M):(M=s(M,T.children||[]),M.return=C,M)}function D(C,M,T,U,te){return M===null||M.tag!==7?(M=pt(T,C.mode,U,te),M.return=C,M):(M=s(M,T),M.return=C,M)}function A(C,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Al(""+M,C.mode,T),M.return=C,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case q:return T=Ro(M.type,M.key,M.props,null,C.mode,T),T.ref=fr(C,null,M),T.return=C,T;case B:return M=$l(M,C.mode,T),M.return=C,M;case Re:var U=M._init;return A(C,U(M._payload),T)}if(Bt(M)||oe(M))return M=pt(M,C.mode,T,null),M.return=C,M;ao(C,M)}return null}function F(C,M,T,U){var te=M!==null?M.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return te!==null?null:w(C,M,""+T,U);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case q:return T.key===te?S(C,M,T,U):null;case B:return T.key===te?N(C,M,T,U):null;case Re:return te=T._init,F(C,M,te(T._payload),U)}if(Bt(T)||oe(T))return te!==null?null:D(C,M,T,U,null);ao(C,T)}return null}function K(C,M,T,U,te){if(typeof U=="string"&&U!==""||typeof U=="number")return C=C.get(T)||null,w(M,C,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case q:return C=C.get(U.key===null?T:U.key)||null,S(M,C,U,te);case B:return C=C.get(U.key===null?T:U.key)||null,N(M,C,U,te);case Re:var se=U._init;return K(C,M,T,se(U._payload),te)}if(Bt(U)||oe(U))return C=C.get(T)||null,D(M,C,U,te,null);ao(M,U)}return null}function J(C,M,T,U){for(var te=null,se=null,le=M,ue=M=0,Ae=null;le!==null&&ue<T.length;ue++){le.index>ue?(Ae=le,le=null):Ae=le.sibling;var ge=F(C,le,T[ue],U);if(ge===null){le===null&&(le=Ae);break}e&&le&&ge.alternate===null&&n(C,le),M=a(ge,M,ue),se===null?te=ge:se.sibling=ge,se=ge,le=Ae}if(ue===T.length)return t(C,le),Ce&&st(C,ue),te;if(le===null){for(;ue<T.length;ue++)le=A(C,T[ue],U),le!==null&&(M=a(le,M,ue),se===null?te=le:se.sibling=le,se=le);return Ce&&st(C,ue),te}for(le=o(C,le);ue<T.length;ue++)Ae=K(le,C,ue,T[ue],U),Ae!==null&&(e&&Ae.alternate!==null&&le.delete(Ae.key===null?ue:Ae.key),M=a(Ae,M,ue),se===null?te=Ae:se.sibling=Ae,se=Ae);return e&&le.forEach(function(et){return n(C,et)}),Ce&&st(C,ue),te}function ne(C,M,T,U){var te=oe(T);if(typeof te!="function")throw Error(i(150));if(T=te.call(T),T==null)throw Error(i(151));for(var se=te=null,le=M,ue=M=0,Ae=null,ge=T.next();le!==null&&!ge.done;ue++,ge=T.next()){le.index>ue?(Ae=le,le=null):Ae=le.sibling;var et=F(C,le,ge.value,U);if(et===null){le===null&&(le=Ae);break}e&&le&&et.alternate===null&&n(C,le),M=a(et,M,ue),se===null?te=et:se.sibling=et,se=et,le=Ae}if(ge.done)return t(C,le),Ce&&st(C,ue),te;if(le===null){for(;!ge.done;ue++,ge=T.next())ge=A(C,ge.value,U),ge!==null&&(M=a(ge,M,ue),se===null?te=ge:se.sibling=ge,se=ge);return Ce&&st(C,ue),te}for(le=o(C,le);!ge.done;ue++,ge=T.next())ge=K(le,C,ue,ge.value,U),ge!==null&&(e&&ge.alternate!==null&&le.delete(ge.key===null?ue:ge.key),M=a(ge,M,ue),se===null?te=ge:se.sibling=ge,se=ge);return e&&le.forEach(function(Lf){return n(C,Lf)}),Ce&&st(C,ue),te}function je(C,M,T,U){if(typeof T=="object"&&T!==null&&T.type===j&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case q:e:{for(var te=T.key,se=M;se!==null;){if(se.key===te){if(te=T.type,te===j){if(se.tag===7){t(C,se.sibling),M=s(se,T.props.children),M.return=C,C=M;break e}}else if(se.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Re&&Ta(te)===se.type){t(C,se.sibling),M=s(se,T.props),M.ref=fr(C,se,T),M.return=C,C=M;break e}t(C,se);break}else n(C,se);se=se.sibling}T.type===j?(M=pt(T.props.children,C.mode,U,T.key),M.return=C,C=M):(U=Ro(T.type,T.key,T.props,null,C.mode,U),U.ref=fr(C,M,T),U.return=C,C=U)}return c(C);case B:e:{for(se=T.key;M!==null;){if(M.key===se)if(M.tag===4&&M.stateNode.containerInfo===T.containerInfo&&M.stateNode.implementation===T.implementation){t(C,M.sibling),M=s(M,T.children||[]),M.return=C,C=M;break e}else{t(C,M);break}else n(C,M);M=M.sibling}M=$l(T,C.mode,U),M.return=C,C=M}return c(C);case Re:return se=T._init,je(C,M,se(T._payload),U)}if(Bt(T))return J(C,M,T,U);if(oe(T))return ne(C,M,T,U);ao(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,M!==null&&M.tag===6?(t(C,M.sibling),M=s(M,T),M.return=C,C=M):(t(C,M),M=Al(T,C.mode,U),M.return=C,C=M),c(C)):t(C,M)}return je}var Nt=Na(!0),La=Na(!1),uo=Hn(null),co=null,Lt=null,Ks=null;function Xs(){Ks=Lt=co=null}function Gs(e){var n=uo.current;_e(uo),e._currentValue=n}function Zs(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){co=e,Ks=Lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ge=!0),e.firstContext=null)}function dn(e){var n=e._currentValue;if(Ks!==e)if(e={context:e,memoizedValue:n,next:null},Lt===null){if(co===null)throw Error(i(308));Lt=e,co.dependencies={lanes:0,firstContext:e}}else Lt=Lt.next=e;return n}var lt=null;function Js(e){lt===null?lt=[e]:lt.push(e)}function ja(e,n,t,o){var s=n.interleaved;return s===null?(t.next=t,Js(n)):(t.next=s.next,s.next=t),n.interleaved=t,jn(e,o)}function jn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var qn=!1;function el(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ra(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Qn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(he&2)!==0){var s=o.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),o.pending=n,jn(e,t)}return s=o.interleaved,s===null?(n.next=n,Js(o)):(n.next=s.next,s.next=n),o.interleaved=n,jn(e,t)}function fo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,hs(e,t)}}function za(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var s=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?s=a=c:a=a.next=c,t=t.next}while(t!==null);a===null?s=a=n:a=a.next=n}else s=a=n;t={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function po(e,n,t,o){var s=e.updateQueue;qn=!1;var a=s.firstBaseUpdate,c=s.lastBaseUpdate,w=s.shared.pending;if(w!==null){s.shared.pending=null;var S=w,N=S.next;S.next=null,c===null?a=N:c.next=N,c=S;var D=e.alternate;D!==null&&(D=D.updateQueue,w=D.lastBaseUpdate,w!==c&&(w===null?D.firstBaseUpdate=N:w.next=N,D.lastBaseUpdate=S))}if(a!==null){var A=s.baseState;c=0,D=N=S=null,w=a;do{var F=w.lane,K=w.eventTime;if((o&F)===F){D!==null&&(D=D.next={eventTime:K,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var J=e,ne=w;switch(F=n,K=t,ne.tag){case 1:if(J=ne.payload,typeof J=="function"){A=J.call(K,A,F);break e}A=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ne.payload,F=typeof J=="function"?J.call(K,A,F):J,F==null)break e;A=Y({},A,F);break e;case 2:qn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,F=s.effects,F===null?s.effects=[w]:F.push(w))}else K={eventTime:K,lane:F,tag:w.tag,payload:w.payload,callback:w.callback,next:null},D===null?(N=D=K,S=A):D=D.next=K,c|=F;if(w=w.next,w===null){if(w=s.shared.pending,w===null)break;F=w,w=F.next,F.next=null,s.lastBaseUpdate=F,s.shared.pending=null}}while(!0);if(D===null&&(S=A),s.baseState=S,s.firstBaseUpdate=N,s.lastBaseUpdate=D,n=s.shared.interleaved,n!==null){s=n;do c|=s.lane,s=s.next;while(s!==n)}else a===null&&(s.shared.lanes=0);ut|=c,e.lanes=c,e.memoizedState=A}}function Oa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],s=o.callback;if(s!==null){if(o.callback=null,o=t,typeof s!="function")throw Error(i(191,s));s.call(o)}}}var pr={},bn=Hn(pr),hr=Hn(pr),mr=Hn(pr);function it(e){if(e===pr)throw Error(i(174));return e}function nl(e,n){switch(be(mr,n),be(hr,e),be(bn,pr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ts(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ts(n,e)}_e(bn),be(bn,n)}function Rt(){_e(bn),_e(hr),_e(mr)}function Ia(e){it(mr.current);var n=it(bn.current),t=ts(n,e.type);n!==t&&(be(hr,e),be(bn,t))}function tl(e){hr.current===e&&(_e(bn),_e(hr))}var Ee=Hn(0);function ho(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var rl=[];function ol(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var mo=R.ReactCurrentDispatcher,sl=R.ReactCurrentBatchConfig,at=0,Te=null,Oe=null,Fe=null,yo=!1,yr=!1,gr=0,Zd=0;function We(){throw Error(i(321))}function ll(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!yn(e[t],n[t]))return!1;return!0}function il(e,n,t,o,s,a){if(at=a,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mo.current=e===null||e.memoizedState===null?tf:rf,e=t(o,s),yr){a=0;do{if(yr=!1,gr=0,25<=a)throw Error(i(301));a+=1,Fe=Oe=null,n.updateQueue=null,mo.current=of,e=t(o,s)}while(yr)}if(mo.current=xo,n=Oe!==null&&Oe.next!==null,at=0,Fe=Oe=Te=null,yo=!1,n)throw Error(i(300));return e}function al(){var e=gr!==0;return gr=0,e}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Te.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function fn(){if(Oe===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=Fe===null?Te.memoizedState:Fe.next;if(n!==null)Fe=n,Oe=e;else{if(e===null)throw Error(i(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Te.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function vr(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=fn(),t=n.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var o=Oe,s=o.baseQueue,a=t.pending;if(a!==null){if(s!==null){var c=s.next;s.next=a.next,a.next=c}o.baseQueue=s=a,t.pending=null}if(s!==null){a=s.next,o=o.baseState;var w=c=null,S=null,N=a;do{var D=N.lane;if((at&D)===D)S!==null&&(S=S.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),o=N.hasEagerState?N.eagerState:e(o,N.action);else{var A={lane:D,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};S===null?(w=S=A,c=o):S=S.next=A,Te.lanes|=D,ut|=D}N=N.next}while(N!==null&&N!==a);S===null?c=o:S.next=w,yn(o,n.memoizedState)||(Ge=!0),n.memoizedState=o,n.baseState=c,n.baseQueue=S,t.lastRenderedState=o}if(e=t.interleaved,e!==null){s=e;do a=s.lane,Te.lanes|=a,ut|=a,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function cl(e){var n=fn(),t=n.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var o=t.dispatch,s=t.pending,a=n.memoizedState;if(s!==null){t.pending=null;var c=s=s.next;do a=e(a,c.action),c=c.next;while(c!==s);yn(a,n.memoizedState)||(Ge=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,o]}function Fa(){}function Da(e,n){var t=Te,o=fn(),s=n(),a=!yn(o.memoizedState,s);if(a&&(o.memoizedState=s,Ge=!0),o=o.queue,dl(Ba.bind(null,t,o,e),[e]),o.getSnapshot!==n||a||Fe!==null&&Fe.memoizedState.tag&1){if(t.flags|=2048,xr(9,$a.bind(null,t,o,s,n),void 0,null),De===null)throw Error(i(349));(at&30)!==0||Aa(t,n,s)}return s}function Aa(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function $a(e,n,t,o){n.value=t,n.getSnapshot=o,Ua(n)&&Ha(e)}function Ba(e,n,t){return t(function(){Ua(n)&&Ha(e)})}function Ua(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!yn(e,t)}catch{return!0}}function Ha(e){var n=jn(e,1);n!==null&&kn(n,e,1,-1)}function Wa(e){var n=Pn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},n.queue=e,e=e.dispatch=nf.bind(null,Te,e),[n.memoizedState,e]}function xr(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function Va(){return fn().memoizedState}function go(e,n,t,o){var s=Pn();Te.flags|=e,s.memoizedState=xr(1|n,t,void 0,o===void 0?null:o)}function vo(e,n,t,o){var s=fn();o=o===void 0?null:o;var a=void 0;if(Oe!==null){var c=Oe.memoizedState;if(a=c.destroy,o!==null&&ll(o,c.deps)){s.memoizedState=xr(n,t,a,o);return}}Te.flags|=e,s.memoizedState=xr(1|n,t,a,o)}function qa(e,n){return go(8390656,8,e,n)}function dl(e,n){return vo(2048,8,e,n)}function Qa(e,n){return vo(4,2,e,n)}function Ya(e,n){return vo(4,4,e,n)}function Ka(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xa(e,n,t){return t=t!=null?t.concat([e]):null,vo(4,4,Ka.bind(null,n,e),t)}function fl(){}function Ga(e,n){var t=fn();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ll(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function Za(e,n){var t=fn();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ll(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function Ja(e,n,t){return(at&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=t):(yn(t,n)||(t=Ti(),Te.lanes|=t,ut|=t,e.baseState=!0),n)}function Jd(e,n){var t=ke;ke=t!==0&&4>t?t:4,e(!0);var o=sl.transition;sl.transition={};try{e(!1),n()}finally{ke=t,sl.transition=o}}function eu(){return fn().memoizedState}function ef(e,n,t){var o=Gn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},nu(e))tu(n,t);else if(t=ja(e,n,t,o),t!==null){var s=Ye();kn(t,e,o,s),ru(t,n,o)}}function nf(e,n,t){var o=Gn(e),s={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(nu(e))tu(n,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var c=n.lastRenderedState,w=a(c,t);if(s.hasEagerState=!0,s.eagerState=w,yn(w,c)){var S=n.interleaved;S===null?(s.next=s,Js(n)):(s.next=S.next,S.next=s),n.interleaved=s;return}}catch{}finally{}t=ja(e,n,s,o),t!==null&&(s=Ye(),kn(t,e,o,s),ru(t,n,o))}}function nu(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function tu(e,n){yr=yo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ru(e,n,t){if((t&4194240)!==0){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,hs(e,t)}}var xo={readContext:dn,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},tf={readContext:dn,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:qa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,go(4194308,4,Ka.bind(null,n,e),t)},useLayoutEffect:function(e,n){return go(4194308,4,e,n)},useInsertionEffect:function(e,n){return go(4,2,e,n)},useMemo:function(e,n){var t=Pn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=Pn();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=ef.bind(null,Te,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:Wa,useDebugValue:fl,useDeferredValue:function(e){return Pn().memoizedState=e},useTransition:function(){var e=Wa(!1),n=e[0];return e=Jd.bind(null,e[1]),Pn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=Te,s=Pn();if(Ce){if(t===void 0)throw Error(i(407));t=t()}else{if(t=n(),De===null)throw Error(i(349));(at&30)!==0||Aa(o,n,t)}s.memoizedState=t;var a={value:t,getSnapshot:n};return s.queue=a,qa(Ba.bind(null,o,a,e),[e]),o.flags|=2048,xr(9,$a.bind(null,o,a,t,n),void 0,null),t},useId:function(){var e=Pn(),n=De.identifierPrefix;if(Ce){var t=Ln,o=Nn;t=(o&~(1<<32-mn(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=gr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rf={readContext:dn,useCallback:Ga,useContext:dn,useEffect:dl,useImperativeHandle:Xa,useInsertionEffect:Qa,useLayoutEffect:Ya,useMemo:Za,useReducer:ul,useRef:Va,useState:function(){return ul(vr)},useDebugValue:fl,useDeferredValue:function(e){var n=fn();return Ja(n,Oe.memoizedState,e)},useTransition:function(){var e=ul(vr)[0],n=fn().memoizedState;return[e,n]},useMutableSource:Fa,useSyncExternalStore:Da,useId:eu,unstable_isNewReconciler:!1},of={readContext:dn,useCallback:Ga,useContext:dn,useEffect:dl,useImperativeHandle:Xa,useInsertionEffect:Qa,useLayoutEffect:Ya,useMemo:Za,useReducer:cl,useRef:Va,useState:function(){return cl(vr)},useDebugValue:fl,useDeferredValue:function(e){var n=fn();return Oe===null?n.memoizedState=e:Ja(n,Oe.memoizedState,e)},useTransition:function(){var e=cl(vr)[0],n=fn().memoizedState;return[e,n]},useMutableSource:Fa,useSyncExternalStore:Da,useId:eu,unstable_isNewReconciler:!1};function vn(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function pl(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:Y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var wo={isMounted:function(e){return(e=e._reactInternals)?nt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=Ye(),s=Gn(e),a=Rn(o,s);a.payload=n,t!=null&&(a.callback=t),n=Qn(e,a,s),n!==null&&(kn(n,e,s,o),fo(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=Ye(),s=Gn(e),a=Rn(o,s);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=Qn(e,a,s),n!==null&&(kn(n,e,s,o),fo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ye(),o=Gn(e),s=Rn(t,o);s.tag=2,n!=null&&(s.callback=n),n=Qn(e,s,o),n!==null&&(kn(n,e,o,t),fo(n,e,o))}};function ou(e,n,t,o,s,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,c):n.prototype&&n.prototype.isPureReactComponent?!sr(t,o)||!sr(s,a):!0}function su(e,n,t){var o=!1,s=Wn,a=n.contextType;return typeof a=="object"&&a!==null?a=dn(a):(s=Xe(n)?rt:He.current,o=n.contextTypes,a=(o=o!=null)?_t(e,s):Wn),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=wo,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),n}function lu(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&wo.enqueueReplaceState(n,n.state,null)}function hl(e,n,t,o){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},el(e);var a=n.contextType;typeof a=="object"&&a!==null?s.context=dn(a):(a=Xe(n)?rt:He.current,s.context=_t(e,a)),s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(pl(e,n,a,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&wo.enqueueReplaceState(s,s.state,null),po(e,t,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function zt(e,n){try{var t="",o=n;do t+=ee(o),o=o.return;while(o);var s=t}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:s,digest:null}}function ml(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function yl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sf=typeof WeakMap=="function"?WeakMap:Map;function iu(e,n,t){t=Rn(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){Co||(Co=!0,Ll=o),yl(e,n)},t}function au(e,n,t){t=Rn(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=n.value;t.payload=function(){return o(s)},t.callback=function(){yl(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){yl(e,n),typeof o!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})}),t}function uu(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new sf;var s=new Set;o.set(n,s)}else s=o.get(n),s===void 0&&(s=new Set,o.set(n,s));s.has(t)||(s.add(t),e=wf.bind(null,e,n,t),n.then(e,e))}function cu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function du(e,n,t,o,s){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Rn(-1,1),n.tag=2,Qn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var lf=R.ReactCurrentOwner,Ge=!1;function Qe(e,n,t,o){n.child=e===null?La(n,null,t,o):Nt(n,e.child,t,o)}function fu(e,n,t,o,s){t=t.render;var a=n.ref;return jt(n,s),o=il(e,n,t,o,a,s),t=al(),e!==null&&!Ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,zn(e,n,s)):(Ce&&t&&Ws(n),n.flags|=1,Qe(e,n,o,s),n.child)}function pu(e,n,t,o,s){if(e===null){var a=t.type;return typeof a=="function"&&!Dl(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,hu(e,n,a,o,s)):(e=Ro(t.type,null,o,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,(e.lanes&s)===0){var c=a.memoizedProps;if(t=t.compare,t=t!==null?t:sr,t(c,o)&&e.ref===n.ref)return zn(e,n,s)}return n.flags|=1,e=Jn(a,o),e.ref=n.ref,e.return=n,n.child=e}function hu(e,n,t,o,s){if(e!==null){var a=e.memoizedProps;if(sr(a,o)&&e.ref===n.ref)if(Ge=!1,n.pendingProps=o=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(Ge=!0);else return n.lanes=e.lanes,zn(e,n,s)}return gl(e,n,t,o,s)}function mu(e,n,t){var o=n.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(It,ln),ln|=t;else{if((t&1073741824)===0)return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,be(It,ln),ln|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:t,be(It,ln),ln|=o}else a!==null?(o=a.baseLanes|t,n.memoizedState=null):o=t,be(It,ln),ln|=o;return Qe(e,n,s,t),n.child}function yu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function gl(e,n,t,o,s){var a=Xe(t)?rt:He.current;return a=_t(n,a),jt(n,s),t=il(e,n,t,o,a,s),o=al(),e!==null&&!Ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,zn(e,n,s)):(Ce&&o&&Ws(n),n.flags|=1,Qe(e,n,t,s),n.child)}function gu(e,n,t,o,s){if(Xe(t)){var a=!0;ro(n)}else a=!1;if(jt(n,s),n.stateNode===null)So(e,n),su(n,t,o),hl(n,t,o,s),o=!0;else if(e===null){var c=n.stateNode,w=n.memoizedProps;c.props=w;var S=c.context,N=t.contextType;typeof N=="object"&&N!==null?N=dn(N):(N=Xe(t)?rt:He.current,N=_t(n,N));var D=t.getDerivedStateFromProps,A=typeof D=="function"||typeof c.getSnapshotBeforeUpdate=="function";A||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(w!==o||S!==N)&&lu(n,c,o,N),qn=!1;var F=n.memoizedState;c.state=F,po(n,o,c,s),S=n.memoizedState,w!==o||F!==S||Ke.current||qn?(typeof D=="function"&&(pl(n,t,D,o),S=n.memoizedState),(w=qn||ou(n,t,w,o,F,S,N))?(A||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=S),c.props=o,c.state=S,c.context=N,o=w):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{c=n.stateNode,Ra(e,n),w=n.memoizedProps,N=n.type===n.elementType?w:vn(n.type,w),c.props=N,A=n.pendingProps,F=c.context,S=t.contextType,typeof S=="object"&&S!==null?S=dn(S):(S=Xe(t)?rt:He.current,S=_t(n,S));var K=t.getDerivedStateFromProps;(D=typeof K=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(w!==A||F!==S)&&lu(n,c,o,S),qn=!1,F=n.memoizedState,c.state=F,po(n,o,c,s);var J=n.memoizedState;w!==A||F!==J||Ke.current||qn?(typeof K=="function"&&(pl(n,t,K,o),J=n.memoizedState),(N=qn||ou(n,t,N,o,F,J,S)||!1)?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,J,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,J,S)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||w===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=J),c.props=o,c.state=J,c.context=S,o=N):(typeof c.componentDidUpdate!="function"||w===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),o=!1)}return vl(e,n,t,o,a,s)}function vl(e,n,t,o,s,a){yu(e,n);var c=(n.flags&128)!==0;if(!o&&!c)return s&&Sa(n,t,!1),zn(e,n,a);o=n.stateNode,lf.current=n;var w=c&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&c?(n.child=Nt(n,e.child,null,a),n.child=Nt(n,null,w,a)):Qe(e,n,w,a),n.memoizedState=o.state,s&&Sa(n,t,!0),n.child}function vu(e){var n=e.stateNode;n.pendingContext?wa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&wa(e,n.context,!1),nl(e,n.containerInfo)}function xu(e,n,t,o,s){return Tt(),Ys(s),n.flags|=256,Qe(e,n,t,o),n.child}var xl={dehydrated:null,treeContext:null,retryLane:0};function wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function wu(e,n,t){var o=n.pendingProps,s=Ee.current,a=!1,c=(n.flags&128)!==0,w;if((w=c)||(w=e!==null&&e.memoizedState===null?!1:(s&2)!==0),w?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),be(Ee,s&1),e===null)return Qs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(c=o.children,e=o.fallback,a?(o=n.mode,a=n.child,c={mode:"hidden",children:c},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=zo(c,o,0,null),e=pt(e,o,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=wl(t),n.memoizedState=xl,e):kl(n,c));if(s=e.memoizedState,s!==null&&(w=s.dehydrated,w!==null))return af(e,n,c,o,w,s,t);if(a){a=o.fallback,c=n.mode,s=e.child,w=s.sibling;var S={mode:"hidden",children:o.children};return(c&1)===0&&n.child!==s?(o=n.child,o.childLanes=0,o.pendingProps=S,n.deletions=null):(o=Jn(s,S),o.subtreeFlags=s.subtreeFlags&14680064),w!==null?a=Jn(w,a):(a=pt(a,c,t,null),a.flags|=2),a.return=n,o.return=n,o.sibling=a,n.child=o,o=a,a=n.child,c=e.child.memoizedState,c=c===null?wl(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~t,n.memoizedState=xl,o}return a=e.child,e=a.sibling,o=Jn(a,{mode:"visible",children:o.children}),(n.mode&1)===0&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function kl(e,n){return n=zo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ko(e,n,t,o){return o!==null&&Ys(o),Nt(n,e.child,null,t),e=kl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function af(e,n,t,o,s,a,c){if(t)return n.flags&256?(n.flags&=-257,o=ml(Error(i(422))),ko(e,n,c,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=o.fallback,s=n.mode,o=zo({mode:"visible",children:o.children},s,0,null),a=pt(a,s,c,null),a.flags|=2,o.return=n,a.return=n,o.sibling=a,n.child=o,(n.mode&1)!==0&&Nt(n,e.child,null,c),n.child.memoizedState=wl(c),n.memoizedState=xl,a);if((n.mode&1)===0)return ko(e,n,c,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var w=o.dgst;return o=w,a=Error(i(419)),o=ml(a,o,void 0),ko(e,n,c,o)}if(w=(c&e.childLanes)!==0,Ge||w){if(o=De,o!==null){switch(c&-c){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|c))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,jn(e,s),kn(o,e,s,-1))}return Fl(),o=ml(Error(i(421))),ko(e,n,c,o)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=kf.bind(null,e),s._reactRetry=n,null):(e=a.treeContext,sn=Un(s.nextSibling),on=n,Ce=!0,gn=null,e!==null&&(un[cn++]=Nn,un[cn++]=Ln,un[cn++]=ot,Nn=e.id,Ln=e.overflow,ot=n),n=kl(n,o.children),n.flags|=4096,n)}function ku(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Zs(e.return,n,t)}function Sl(e,n,t,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:s}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=t,a.tailMode=s)}function Su(e,n,t){var o=n.pendingProps,s=o.revealOrder,a=o.tail;if(Qe(e,n,o.children,t),o=Ee.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,t,n);else if(e.tag===19)ku(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(be(Ee,o),(n.mode&1)===0)n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&ho(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),Sl(n,!1,s,t,a);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&ho(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}Sl(n,!0,t,null,a);break;case"together":Sl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function So(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function zn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ut|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,t=Jn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Jn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function uf(e,n,t){switch(n.tag){case 3:vu(n),Tt();break;case 5:Ia(n);break;case 1:Xe(n.type)&&ro(n);break;case 4:nl(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,s=n.memoizedProps.value;be(uo,o._currentValue),o._currentValue=s;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(be(Ee,Ee.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?wu(e,n,t):(be(Ee,Ee.current&1),e=zn(e,n,t),e!==null?e.sibling:null);be(Ee,Ee.current&1);break;case 19:if(o=(t&n.childLanes)!==0,(e.flags&128)!==0){if(o)return Su(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),be(Ee,Ee.current),o)break;return null;case 22:case 23:return n.lanes=0,mu(e,n,t)}return zn(e,n,t)}var Mu,Ml,bu,Pu;Mu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Ml=function(){},bu=function(e,n,t,o){var s=e.memoizedProps;if(s!==o){e=n.stateNode,it(bn.current);var a=null;switch(t){case"input":s=Zo(e,s),o=Zo(e,o),a=[];break;case"select":s=Y({},s,{value:void 0}),o=Y({},o,{value:void 0}),a=[];break;case"textarea":s=ns(e,s),o=ns(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=eo)}rs(t,o);var c;t=null;for(N in s)if(!o.hasOwnProperty(N)&&s.hasOwnProperty(N)&&s[N]!=null)if(N==="style"){var w=s[N];for(c in w)w.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(d.hasOwnProperty(N)?a||(a=[]):(a=a||[]).push(N,null));for(N in o){var S=o[N];if(w=s!=null?s[N]:void 0,o.hasOwnProperty(N)&&S!==w&&(S!=null||w!=null))if(N==="style")if(w){for(c in w)!w.hasOwnProperty(c)||S&&S.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in S)S.hasOwnProperty(c)&&w[c]!==S[c]&&(t||(t={}),t[c]=S[c])}else t||(a||(a=[]),a.push(N,t)),t=S;else N==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,w=w?w.__html:void 0,S!=null&&w!==S&&(a=a||[]).push(N,S)):N==="children"?typeof S!="string"&&typeof S!="number"||(a=a||[]).push(N,""+S):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(d.hasOwnProperty(N)?(S!=null&&N==="onScroll"&&Pe("scroll",e),a||w===S||(a=[])):(a=a||[]).push(N,S))}t&&(a=a||[]).push("style",t);var N=a;(n.updateQueue=N)&&(n.flags|=4)}},Pu=function(e,n,t,o){t!==o&&(n.flags|=4)};function wr(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function cf(e,n,t){var o=n.pendingProps;switch(Vs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Xe(n.type)&&to(),Ve(n),null;case 3:return o=n.stateNode,Rt(),_e(Ke),_e(He),ol(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(io(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gn!==null&&(zl(gn),gn=null))),Ml(e,n),Ve(n),null;case 5:tl(n);var s=it(mr.current);if(t=n.type,e!==null&&n.stateNode!=null)bu(e,n,t,o,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(i(166));return Ve(n),null}if(e=it(bn.current),io(n)){o=n.stateNode,t=n.type;var a=n.memoizedProps;switch(o[Mn]=n,o[cr]=a,e=(n.mode&1)!==0,t){case"dialog":Pe("cancel",o),Pe("close",o);break;case"iframe":case"object":case"embed":Pe("load",o);break;case"video":case"audio":for(s=0;s<ir.length;s++)Pe(ir[s],o);break;case"source":Pe("error",o);break;case"img":case"image":case"link":Pe("error",o),Pe("load",o);break;case"details":Pe("toggle",o);break;case"input":si(o,a),Pe("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Pe("invalid",o);break;case"textarea":ai(o,a),Pe("invalid",o)}rs(t,a),s=null;for(var c in a)if(a.hasOwnProperty(c)){var w=a[c];c==="children"?typeof w=="string"?o.textContent!==w&&(a.suppressHydrationWarning!==!0&&Jr(o.textContent,w,e),s=["children",w]):typeof w=="number"&&o.textContent!==""+w&&(a.suppressHydrationWarning!==!0&&Jr(o.textContent,w,e),s=["children",""+w]):d.hasOwnProperty(c)&&w!=null&&c==="onScroll"&&Pe("scroll",o)}switch(t){case"input":Nr(o),ii(o,a,!0);break;case"textarea":Nr(o),ci(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=eo)}o=s,n.updateQueue=o,o!==null&&(n.flags|=4)}else{c=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=di(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=c.createElement(t,{is:o.is}):(e=c.createElement(t),t==="select"&&(c=e,o.multiple?c.multiple=!0:o.size&&(c.size=o.size))):e=c.createElementNS(e,t),e[Mn]=n,e[cr]=o,Mu(e,n,!1,!1),n.stateNode=e;e:{switch(c=os(t,o),t){case"dialog":Pe("cancel",e),Pe("close",e),s=o;break;case"iframe":case"object":case"embed":Pe("load",e),s=o;break;case"video":case"audio":for(s=0;s<ir.length;s++)Pe(ir[s],e);s=o;break;case"source":Pe("error",e),s=o;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),s=o;break;case"details":Pe("toggle",e),s=o;break;case"input":si(e,o),s=Zo(e,o),Pe("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=Y({},o,{value:void 0}),Pe("invalid",e);break;case"textarea":ai(e,o),s=ns(e,o),Pe("invalid",e);break;default:s=o}rs(t,s),w=s;for(a in w)if(w.hasOwnProperty(a)){var S=w[a];a==="style"?hi(e,S):a==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&fi(e,S)):a==="children"?typeof S=="string"?(t!=="textarea"||S!=="")&&Ut(e,S):typeof S=="number"&&Ut(e,""+S):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(d.hasOwnProperty(a)?S!=null&&a==="onScroll"&&Pe("scroll",e):S!=null&&$(e,a,S,c))}switch(t){case"input":Nr(e),ii(e,o,!1);break;case"textarea":Nr(e),ci(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ye(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?ht(e,!!o.multiple,a,!1):o.defaultValue!=null&&ht(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=eo)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ve(n),null;case 6:if(e&&n.stateNode!=null)Pu(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(i(166));if(t=it(mr.current),it(bn.current),io(n)){if(o=n.stateNode,t=n.memoizedProps,o[Mn]=n,(a=o.nodeValue!==t)&&(e=on,e!==null))switch(e.tag){case 3:Jr(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(o.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Mn]=n,n.stateNode=o}return Ve(n),null;case 13:if(_e(Ee),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&sn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Ea(),Tt(),n.flags|=98560,a=!1;else if(a=io(n),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[Mn]=n}else Tt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),a=!1}else gn!==null&&(zl(gn),gn=null),a=!0;if(!a)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Ie===0&&(Ie=3):Fl())),n.updateQueue!==null&&(n.flags|=4),Ve(n),null);case 4:return Rt(),Ml(e,n),e===null&&ar(n.stateNode.containerInfo),Ve(n),null;case 10:return Gs(n.type._context),Ve(n),null;case 17:return Xe(n.type)&&to(),Ve(n),null;case 19:if(_e(Ee),a=n.memoizedState,a===null)return Ve(n),null;if(o=(n.flags&128)!==0,c=a.rendering,c===null)if(o)wr(a,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=ho(e),c!==null){for(n.flags|=128,wr(a,!1),o=c.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)a=t,e=o,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return be(Ee,Ee.current&1|2),n.child}e=e.sibling}a.tail!==null&&Le()>Ft&&(n.flags|=128,o=!0,wr(a,!1),n.lanes=4194304)}else{if(!o)if(e=ho(c),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!Ce)return Ve(n),null}else 2*Le()-a.renderingStartTime>Ft&&t!==1073741824&&(n.flags|=128,o=!0,wr(a,!1),n.lanes=4194304);a.isBackwards?(c.sibling=n.child,n.child=c):(t=a.last,t!==null?t.sibling=c:n.child=c,a.last=c)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Le(),n.sibling=null,t=Ee.current,be(Ee,o?t&1|2:t&1),n):(Ve(n),null);case 22:case 23:return Il(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&(n.mode&1)!==0?(ln&1073741824)!==0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function df(e,n){switch(Vs(n),n.tag){case 1:return Xe(n.type)&&to(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Rt(),_e(Ke),_e(He),ol(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return tl(n),null;case 13:if(_e(Ee),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Tt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _e(Ee),null;case 4:return Rt(),null;case 10:return Gs(n.type._context),null;case 22:case 23:return Il(),null;case 24:return null;default:return null}}var Mo=!1,qe=!1,ff=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ot(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Ne(e,n,o)}else t.current=null}function bl(e,n,t){try{t()}catch(o){Ne(e,n,o)}}var _u=!1;function pf(e,n){if(Is=Ur,e=oa(),Es(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var c=0,w=-1,S=-1,N=0,D=0,A=e,F=null;n:for(;;){for(var K;A!==t||s!==0&&A.nodeType!==3||(w=c+s),A!==a||o!==0&&A.nodeType!==3||(S=c+o),A.nodeType===3&&(c+=A.nodeValue.length),(K=A.firstChild)!==null;)F=A,A=K;for(;;){if(A===e)break n;if(F===t&&++N===s&&(w=c),F===a&&++D===o&&(S=c),(K=A.nextSibling)!==null)break;A=F,F=A.parentNode}A=K}t=w===-1||S===-1?null:{start:w,end:S}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fs={focusedElem:e,selectionRange:t},Ur=!1,G=n;G!==null;)if(n=G,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,G=e;else for(;G!==null;){n=G;try{var J=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var ne=J.memoizedProps,je=J.memoizedState,C=n.stateNode,M=C.getSnapshotBeforeUpdate(n.elementType===n.type?ne:vn(n.type,ne),je);C.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var T=n.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(U){Ne(n,n.return,U)}if(e=n.sibling,e!==null){e.return=n.return,G=e;break}G=n.return}return J=_u,_u=!1,J}function kr(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&bl(n,t,a)}s=s.next}while(s!==o)}}function bo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function Pl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Cu(e){var n=e.alternate;n!==null&&(e.alternate=null,Cu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mn],delete n[cr],delete n[Bs],delete n[Yd],delete n[Kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Eu(e){return e.tag===5||e.tag===3||e.tag===4}function Tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _l(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=eo));else if(o!==4&&(e=e.child,e!==null))for(_l(e,n,t),e=e.sibling;e!==null;)_l(e,n,t),e=e.sibling}function Cl(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Cl(e,n,t),e=e.sibling;e!==null;)Cl(e,n,t),e=e.sibling}var $e=null,xn=!1;function Yn(e,n,t){for(t=t.child;t!==null;)Nu(e,n,t),t=t.sibling}function Nu(e,n,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Ir,t)}catch{}switch(t.tag){case 5:qe||Ot(t,n);case 6:var o=$e,s=xn;$e=null,Yn(e,n,t),$e=o,xn=s,$e!==null&&(xn?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(xn?(e=$e,t=t.stateNode,e.nodeType===8?$s(e.parentNode,t):e.nodeType===1&&$s(e,t),Jt(e)):$s($e,t.stateNode));break;case 4:o=$e,s=xn,$e=t.stateNode.containerInfo,xn=!0,Yn(e,n,t),$e=o,xn=s;break;case 0:case 11:case 14:case 15:if(!qe&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&bl(t,n,c),s=s.next}while(s!==o)}Yn(e,n,t);break;case 1:if(!qe&&(Ot(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(w){Ne(t,n,w)}Yn(e,n,t);break;case 21:Yn(e,n,t);break;case 22:t.mode&1?(qe=(o=qe)||t.memoizedState!==null,Yn(e,n,t),qe=o):Yn(e,n,t);break;default:Yn(e,n,t)}}function Lu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ff),n.forEach(function(o){var s=Sf.bind(null,e,o);t.has(o)||(t.add(o),o.then(s,s))})}}function wn(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var s=t[o];try{var a=e,c=n,w=c;e:for(;w!==null;){switch(w.tag){case 5:$e=w.stateNode,xn=!1;break e;case 3:$e=w.stateNode.containerInfo,xn=!0;break e;case 4:$e=w.stateNode.containerInfo,xn=!0;break e}w=w.return}if($e===null)throw Error(i(160));Nu(a,c,s),$e=null,xn=!1;var S=s.alternate;S!==null&&(S.return=null),s.return=null}catch(N){Ne(s,n,N)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ju(n,e),n=n.sibling}function ju(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wn(n,e),_n(e),o&4){try{kr(3,e,e.return),bo(3,e)}catch(ne){Ne(e,e.return,ne)}try{kr(5,e,e.return)}catch(ne){Ne(e,e.return,ne)}}break;case 1:wn(n,e),_n(e),o&512&&t!==null&&Ot(t,t.return);break;case 5:if(wn(n,e),_n(e),o&512&&t!==null&&Ot(t,t.return),e.flags&32){var s=e.stateNode;try{Ut(s,"")}catch(ne){Ne(e,e.return,ne)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,c=t!==null?t.memoizedProps:a,w=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{w==="input"&&a.type==="radio"&&a.name!=null&&li(s,a),os(w,c);var N=os(w,a);for(c=0;c<S.length;c+=2){var D=S[c],A=S[c+1];D==="style"?hi(s,A):D==="dangerouslySetInnerHTML"?fi(s,A):D==="children"?Ut(s,A):$(s,D,A,N)}switch(w){case"input":Jo(s,a);break;case"textarea":ui(s,a);break;case"select":var F=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var K=a.value;K!=null?ht(s,!!a.multiple,K,!1):F!==!!a.multiple&&(a.defaultValue!=null?ht(s,!!a.multiple,a.defaultValue,!0):ht(s,!!a.multiple,a.multiple?[]:"",!1))}s[cr]=a}catch(ne){Ne(e,e.return,ne)}}break;case 6:if(wn(n,e),_n(e),o&4){if(e.stateNode===null)throw Error(i(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(ne){Ne(e,e.return,ne)}}break;case 3:if(wn(n,e),_n(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Jt(n.containerInfo)}catch(ne){Ne(e,e.return,ne)}break;case 4:wn(n,e),_n(e);break;case 13:wn(n,e),_n(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Nl=Le())),o&4&&Lu(e);break;case 22:if(D=t!==null&&t.memoizedState!==null,e.mode&1?(qe=(N=qe)||D,wn(n,e),qe=N):wn(n,e),_n(e),o&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!D&&(e.mode&1)!==0)for(G=e,D=e.child;D!==null;){for(A=G=D;G!==null;){switch(F=G,K=F.child,F.tag){case 0:case 11:case 14:case 15:kr(4,F,F.return);break;case 1:Ot(F,F.return);var J=F.stateNode;if(typeof J.componentWillUnmount=="function"){o=F,t=F.return;try{n=o,J.props=n.memoizedProps,J.state=n.memoizedState,J.componentWillUnmount()}catch(ne){Ne(o,t,ne)}}break;case 5:Ot(F,F.return);break;case 22:if(F.memoizedState!==null){Ou(A);continue}}K!==null?(K.return=F,G=K):Ou(A)}D=D.sibling}e:for(D=null,A=e;;){if(A.tag===5){if(D===null){D=A;try{s=A.stateNode,N?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(w=A.stateNode,S=A.memoizedProps.style,c=S!=null&&S.hasOwnProperty("display")?S.display:null,w.style.display=pi("display",c))}catch(ne){Ne(e,e.return,ne)}}}else if(A.tag===6){if(D===null)try{A.stateNode.nodeValue=N?"":A.memoizedProps}catch(ne){Ne(e,e.return,ne)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;D===A&&(D=null),A=A.return}D===A&&(D=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:wn(n,e),_n(e),o&4&&Lu(e);break;case 21:break;default:wn(n,e),_n(e)}}function _n(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Eu(t)){var o=t;break e}t=t.return}throw Error(i(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Ut(s,""),o.flags&=-33);var a=Tu(e);Cl(e,a,s);break;case 3:case 4:var c=o.stateNode.containerInfo,w=Tu(e);_l(e,w,c);break;default:throw Error(i(161))}}catch(S){Ne(e,e.return,S)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hf(e,n,t){G=e,Ru(e)}function Ru(e,n,t){for(var o=(e.mode&1)!==0;G!==null;){var s=G,a=s.child;if(s.tag===22&&o){var c=s.memoizedState!==null||Mo;if(!c){var w=s.alternate,S=w!==null&&w.memoizedState!==null||qe;w=Mo;var N=qe;if(Mo=c,(qe=S)&&!N)for(G=s;G!==null;)c=G,S=c.child,c.tag===22&&c.memoizedState!==null?Iu(s):S!==null?(S.return=c,G=S):Iu(s);for(;a!==null;)G=a,Ru(a),a=a.sibling;G=s,Mo=w,qe=N}zu(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,G=a):zu(e)}}function zu(e){for(;G!==null;){var n=G;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:qe||bo(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!qe)if(t===null)o.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:vn(n.type,t.memoizedProps);o.componentDidUpdate(s,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Oa(n,a,o);break;case 3:var c=n.updateQueue;if(c!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Oa(n,c,t)}break;case 5:var w=n.stateNode;if(t===null&&n.flags&4){t=w;var S=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&t.focus();break;case"img":S.src&&(t.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var N=n.alternate;if(N!==null){var D=N.memoizedState;if(D!==null){var A=D.dehydrated;A!==null&&Jt(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}qe||n.flags&512&&Pl(n)}catch(F){Ne(n,n.return,F)}}if(n===e){G=null;break}if(t=n.sibling,t!==null){t.return=n.return,G=t;break}G=n.return}}function Ou(e){for(;G!==null;){var n=G;if(n===e){G=null;break}var t=n.sibling;if(t!==null){t.return=n.return,G=t;break}G=n.return}}function Iu(e){for(;G!==null;){var n=G;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{bo(4,n)}catch(S){Ne(n,t,S)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var s=n.return;try{o.componentDidMount()}catch(S){Ne(n,s,S)}}var a=n.return;try{Pl(n)}catch(S){Ne(n,a,S)}break;case 5:var c=n.return;try{Pl(n)}catch(S){Ne(n,c,S)}}}catch(S){Ne(n,n.return,S)}if(n===e){G=null;break}var w=n.sibling;if(w!==null){w.return=n.return,G=w;break}G=n.return}}var mf=Math.ceil,Po=R.ReactCurrentDispatcher,El=R.ReactCurrentOwner,pn=R.ReactCurrentBatchConfig,he=0,De=null,ze=null,Be=0,ln=0,It=Hn(0),Ie=0,Sr=null,ut=0,_o=0,Tl=0,Mr=null,Ze=null,Nl=0,Ft=1/0,On=null,Co=!1,Ll=null,Kn=null,Eo=!1,Xn=null,To=0,br=0,jl=null,No=-1,Lo=0;function Ye(){return(he&6)!==0?Le():No!==-1?No:No=Le()}function Gn(e){return(e.mode&1)===0?1:(he&2)!==0&&Be!==0?Be&-Be:Gd.transition!==null?(Lo===0&&(Lo=Ti()),Lo):(e=ke,e!==0||(e=window.event,e=e===void 0?16:Di(e.type)),e)}function kn(e,n,t,o){if(50<br)throw br=0,jl=null,Error(i(185));Yt(e,t,o),((he&2)===0||e!==De)&&(e===De&&((he&2)===0&&(_o|=t),Ie===4&&Zn(e,Be)),Je(e,o),t===1&&he===0&&(n.mode&1)===0&&(Ft=Le()+500,oo&&Vn()))}function Je(e,n){var t=e.callbackNode;Gc(e,n);var o=Ar(e,e===De?Be:0);if(o===0)t!==null&&_i(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&_i(t),n===1)e.tag===0?Xd(Du.bind(null,e)):Ma(Du.bind(null,e)),qd(function(){(he&6)===0&&Vn()}),t=null;else{switch(Ni(o)){case 1:t=ds;break;case 4:t=Ci;break;case 16:t=Or;break;case 536870912:t=Ei;break;default:t=Or}t=qu(t,Fu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Fu(e,n){if(No=-1,Lo=0,(he&6)!==0)throw Error(i(327));var t=e.callbackNode;if(Dt()&&e.callbackNode!==t)return null;var o=Ar(e,e===De?Be:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||n)n=jo(e,o);else{n=o;var s=he;he|=2;var a=$u();(De!==e||Be!==n)&&(On=null,Ft=Le()+500,dt(e,n));do try{vf();break}catch(w){Au(e,w)}while(!0);Xs(),Po.current=a,he=s,ze!==null?n=0:(De=null,Be=0,n=Ie)}if(n!==0){if(n===2&&(s=fs(e),s!==0&&(o=s,n=Rl(e,s))),n===1)throw t=Sr,dt(e,0),Zn(e,o),Je(e,Le()),t;if(n===6)Zn(e,o);else{if(s=e.current.alternate,(o&30)===0&&!yf(s)&&(n=jo(e,o),n===2&&(a=fs(e),a!==0&&(o=a,n=Rl(e,a))),n===1))throw t=Sr,dt(e,0),Zn(e,o),Je(e,Le()),t;switch(e.finishedWork=s,e.finishedLanes=o,n){case 0:case 1:throw Error(i(345));case 2:ft(e,Ze,On);break;case 3:if(Zn(e,o),(o&130023424)===o&&(n=Nl+500-Le(),10<n)){if(Ar(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){Ye(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=As(ft.bind(null,e,Ze,On),n);break}ft(e,Ze,On);break;case 4:if(Zn(e,o),(o&4194240)===o)break;for(n=e.eventTimes,s=-1;0<o;){var c=31-mn(o);a=1<<c,c=n[c],c>s&&(s=c),o&=~a}if(o=s,o=Le()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*mf(o/1960))-o,10<o){e.timeoutHandle=As(ft.bind(null,e,Ze,On),o);break}ft(e,Ze,On);break;case 5:ft(e,Ze,On);break;default:throw Error(i(329))}}}return Je(e,Le()),e.callbackNode===t?Fu.bind(null,e):null}function Rl(e,n){var t=Mr;return e.current.memoizedState.isDehydrated&&(dt(e,n).flags|=256),e=jo(e,n),e!==2&&(n=Ze,Ze=t,n!==null&&zl(n)),e}function zl(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function yf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var s=t[o],a=s.getSnapshot;s=s.value;try{if(!yn(a(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n){for(n&=~Tl,n&=~_o,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-mn(n),o=1<<t;e[t]=-1,n&=~o}}function Du(e){if((he&6)!==0)throw Error(i(327));Dt();var n=Ar(e,0);if((n&1)===0)return Je(e,Le()),null;var t=jo(e,n);if(e.tag!==0&&t===2){var o=fs(e);o!==0&&(n=o,t=Rl(e,o))}if(t===1)throw t=Sr,dt(e,0),Zn(e,n),Je(e,Le()),t;if(t===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ft(e,Ze,On),Je(e,Le()),null}function Ol(e,n){var t=he;he|=1;try{return e(n)}finally{he=t,he===0&&(Ft=Le()+500,oo&&Vn())}}function ct(e){Xn!==null&&Xn.tag===0&&(he&6)===0&&Dt();var n=he;he|=1;var t=pn.transition,o=ke;try{if(pn.transition=null,ke=1,e)return e()}finally{ke=o,pn.transition=t,he=n,(he&6)===0&&Vn()}}function Il(){ln=It.current,_e(It)}function dt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Vd(t)),ze!==null)for(t=ze.return;t!==null;){var o=t;switch(Vs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&to();break;case 3:Rt(),_e(Ke),_e(He),ol();break;case 5:tl(o);break;case 4:Rt();break;case 13:_e(Ee);break;case 19:_e(Ee);break;case 10:Gs(o.type._context);break;case 22:case 23:Il()}t=t.return}if(De=e,ze=e=Jn(e.current,null),Be=ln=n,Ie=0,Sr=null,Tl=_o=ut=0,Ze=Mr=null,lt!==null){for(n=0;n<lt.length;n++)if(t=lt[n],o=t.interleaved,o!==null){t.interleaved=null;var s=o.next,a=t.pending;if(a!==null){var c=a.next;a.next=s,o.next=c}t.pending=o}lt=null}return e}function Au(e,n){do{var t=ze;try{if(Xs(),mo.current=xo,yo){for(var o=Te.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}yo=!1}if(at=0,Fe=Oe=Te=null,yr=!1,gr=0,El.current=null,t===null||t.return===null){Ie=1,Sr=n,ze=null;break}e:{var a=e,c=t.return,w=t,S=n;if(n=Be,w.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var N=S,D=w,A=D.tag;if((D.mode&1)===0&&(A===0||A===11||A===15)){var F=D.alternate;F?(D.updateQueue=F.updateQueue,D.memoizedState=F.memoizedState,D.lanes=F.lanes):(D.updateQueue=null,D.memoizedState=null)}var K=cu(c);if(K!==null){K.flags&=-257,du(K,c,w,a,n),K.mode&1&&uu(a,N,n),n=K,S=N;var J=n.updateQueue;if(J===null){var ne=new Set;ne.add(S),n.updateQueue=ne}else J.add(S);break e}else{if((n&1)===0){uu(a,N,n),Fl();break e}S=Error(i(426))}}else if(Ce&&w.mode&1){var je=cu(c);if(je!==null){(je.flags&65536)===0&&(je.flags|=256),du(je,c,w,a,n),Ys(zt(S,w));break e}}a=S=zt(S,w),Ie!==4&&(Ie=2),Mr===null?Mr=[a]:Mr.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var C=iu(a,S,n);za(a,C);break e;case 1:w=S;var M=a.type,T=a.stateNode;if((a.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Kn===null||!Kn.has(T)))){a.flags|=65536,n&=-n,a.lanes|=n;var U=au(a,w,n);za(a,U);break e}}a=a.return}while(a!==null)}Uu(t)}catch(te){n=te,ze===t&&t!==null&&(ze=t=t.return);continue}break}while(!0)}function $u(){var e=Po.current;return Po.current=xo,e===null?xo:e}function Fl(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),De===null||(ut&268435455)===0&&(_o&268435455)===0||Zn(De,Be)}function jo(e,n){var t=he;he|=2;var o=$u();(De!==e||Be!==n)&&(On=null,dt(e,n));do try{gf();break}catch(s){Au(e,s)}while(!0);if(Xs(),he=t,Po.current=o,ze!==null)throw Error(i(261));return De=null,Be=0,Ie}function gf(){for(;ze!==null;)Bu(ze)}function vf(){for(;ze!==null&&!Uc();)Bu(ze)}function Bu(e){var n=Vu(e.alternate,e,ln);e.memoizedProps=e.pendingProps,n===null?Uu(e):ze=n,El.current=null}function Uu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=cf(t,n,ln),t!==null){ze=t;return}}else{if(t=df(t,n),t!==null){t.flags&=32767,ze=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,ze=null;return}}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);Ie===0&&(Ie=5)}function ft(e,n,t){var o=ke,s=pn.transition;try{pn.transition=null,ke=1,xf(e,n,t,o)}finally{pn.transition=s,ke=o}return null}function xf(e,n,t,o){do Dt();while(Xn!==null);if((he&6)!==0)throw Error(i(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Zc(e,a),e===De&&(ze=De=null,Be=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Eo||(Eo=!0,qu(Or,function(){return Dt(),null})),a=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||a){a=pn.transition,pn.transition=null;var c=ke;ke=1;var w=he;he|=4,El.current=null,pf(e,t),ju(t,e),Dd(Fs),Ur=!!Is,Fs=Is=null,e.current=t,hf(t),Hc(),he=w,ke=c,pn.transition=a}else e.current=t;if(Eo&&(Eo=!1,Xn=e,To=s),a=e.pendingLanes,a===0&&(Kn=null),qc(t.stateNode),Je(e,Le()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],o(s.value,{componentStack:s.stack,digest:s.digest});if(Co)throw Co=!1,e=Ll,Ll=null,e;return(To&1)!==0&&e.tag!==0&&Dt(),a=e.pendingLanes,(a&1)!==0?e===jl?br++:(br=0,jl=e):br=0,Vn(),null}function Dt(){if(Xn!==null){var e=Ni(To),n=pn.transition,t=ke;try{if(pn.transition=null,ke=16>e?16:e,Xn===null)var o=!1;else{if(e=Xn,Xn=null,To=0,(he&6)!==0)throw Error(i(331));var s=he;for(he|=4,G=e.current;G!==null;){var a=G,c=a.child;if((G.flags&16)!==0){var w=a.deletions;if(w!==null){for(var S=0;S<w.length;S++){var N=w[S];for(G=N;G!==null;){var D=G;switch(D.tag){case 0:case 11:case 15:kr(8,D,a)}var A=D.child;if(A!==null)A.return=D,G=A;else for(;G!==null;){D=G;var F=D.sibling,K=D.return;if(Cu(D),D===N){G=null;break}if(F!==null){F.return=K,G=F;break}G=K}}}var J=a.alternate;if(J!==null){var ne=J.child;if(ne!==null){J.child=null;do{var je=ne.sibling;ne.sibling=null,ne=je}while(ne!==null)}}G=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,G=c;else e:for(;G!==null;){if(a=G,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:kr(9,a,a.return)}var C=a.sibling;if(C!==null){C.return=a.return,G=C;break e}G=a.return}}var M=e.current;for(G=M;G!==null;){c=G;var T=c.child;if((c.subtreeFlags&2064)!==0&&T!==null)T.return=c,G=T;else e:for(c=M;G!==null;){if(w=G,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:bo(9,w)}}catch(te){Ne(w,w.return,te)}if(w===c){G=null;break e}var U=w.sibling;if(U!==null){U.return=w.return,G=U;break e}G=w.return}}if(he=s,Vn(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Ir,e)}catch{}o=!0}return o}finally{ke=t,pn.transition=n}}return!1}function Hu(e,n,t){n=zt(t,n),n=iu(e,n,1),e=Qn(e,n,1),n=Ye(),e!==null&&(Yt(e,1,n),Je(e,n))}function Ne(e,n,t){if(e.tag===3)Hu(e,e,t);else for(;n!==null;){if(n.tag===3){Hu(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Kn===null||!Kn.has(o))){e=zt(t,e),e=au(n,e,1),n=Qn(n,e,1),e=Ye(),n!==null&&(Yt(n,1,e),Je(n,e));break}}n=n.return}}function wf(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=Ye(),e.pingedLanes|=e.suspendedLanes&t,De===e&&(Be&t)===t&&(Ie===4||Ie===3&&(Be&130023424)===Be&&500>Le()-Nl?dt(e,0):Tl|=t),Je(e,n)}function Wu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Dr,Dr<<=1,(Dr&130023424)===0&&(Dr=4194304)));var t=Ye();e=jn(e,n),e!==null&&(Yt(e,n,t),Je(e,t))}function kf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Wu(e,t)}function Sf(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(i(314))}o!==null&&o.delete(n),Wu(e,t)}var Vu;Vu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ke.current)Ge=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Ge=!1,uf(e,n,t);Ge=(e.flags&131072)!==0}else Ge=!1,Ce&&(n.flags&1048576)!==0&&ba(n,lo,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;So(e,n),e=n.pendingProps;var s=_t(n,He.current);jt(n,t),s=il(null,n,o,e,s,t);var a=al();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(o)?(a=!0,ro(n)):a=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,el(n),s.updater=wo,n.stateNode=s,s._reactInternals=n,hl(n,o,e,t),n=vl(null,n,o,!0,a,t)):(n.tag=0,Ce&&a&&Ws(n),Qe(null,n,s,t),n=n.child),n;case 16:o=n.elementType;e:{switch(So(e,n),e=n.pendingProps,s=o._init,o=s(o._payload),n.type=o,s=n.tag=bf(o),e=vn(o,e),s){case 0:n=gl(null,n,o,e,t);break e;case 1:n=gu(null,n,o,e,t);break e;case 11:n=fu(null,n,o,e,t);break e;case 14:n=pu(null,n,o,vn(o.type,e),t);break e}throw Error(i(306,o,""))}return n;case 0:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:vn(o,s),gl(e,n,o,s,t);case 1:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:vn(o,s),gu(e,n,o,s,t);case 3:e:{if(vu(n),e===null)throw Error(i(387));o=n.pendingProps,a=n.memoizedState,s=a.element,Ra(e,n),po(n,o,null,t);var c=n.memoizedState;if(o=c.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){s=zt(Error(i(423)),n),n=xu(e,n,o,t,s);break e}else if(o!==s){s=zt(Error(i(424)),n),n=xu(e,n,o,t,s);break e}else for(sn=Un(n.stateNode.containerInfo.firstChild),on=n,Ce=!0,gn=null,t=La(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Tt(),o===s){n=zn(e,n,t);break e}Qe(e,n,o,t)}n=n.child}return n;case 5:return Ia(n),e===null&&Qs(n),o=n.type,s=n.pendingProps,a=e!==null?e.memoizedProps:null,c=s.children,Ds(o,s)?c=null:a!==null&&Ds(o,a)&&(n.flags|=32),yu(e,n),Qe(e,n,c,t),n.child;case 6:return e===null&&Qs(n),null;case 13:return wu(e,n,t);case 4:return nl(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Nt(n,null,o,t):Qe(e,n,o,t),n.child;case 11:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:vn(o,s),fu(e,n,o,s,t);case 7:return Qe(e,n,n.pendingProps,t),n.child;case 8:return Qe(e,n,n.pendingProps.children,t),n.child;case 12:return Qe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,s=n.pendingProps,a=n.memoizedProps,c=s.value,be(uo,o._currentValue),o._currentValue=c,a!==null)if(yn(a.value,c)){if(a.children===s.children&&!Ke.current){n=zn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var w=a.dependencies;if(w!==null){c=a.child;for(var S=w.firstContext;S!==null;){if(S.context===o){if(a.tag===1){S=Rn(-1,t&-t),S.tag=2;var N=a.updateQueue;if(N!==null){N=N.shared;var D=N.pending;D===null?S.next=S:(S.next=D.next,D.next=S),N.pending=S}}a.lanes|=t,S=a.alternate,S!==null&&(S.lanes|=t),Zs(a.return,t,n),w.lanes|=t;break}S=S.next}}else if(a.tag===10)c=a.type===n.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(i(341));c.lanes|=t,w=c.alternate,w!==null&&(w.lanes|=t),Zs(c,t,n),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===n){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}Qe(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,o=n.pendingProps.children,jt(n,t),s=dn(s),o=o(s),n.flags|=1,Qe(e,n,o,t),n.child;case 14:return o=n.type,s=vn(o,n.pendingProps),s=vn(o.type,s),pu(e,n,o,s,t);case 15:return hu(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:vn(o,s),So(e,n),n.tag=1,Xe(o)?(e=!0,ro(n)):e=!1,jt(n,t),su(n,o,s),hl(n,o,s,t),vl(null,n,o,!0,e,t);case 19:return Su(e,n,t);case 22:return mu(e,n,t)}throw Error(i(156,n.tag))};function qu(e,n){return Pi(e,n)}function Mf(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,t,o){return new Mf(e,n,t,o)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bf(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ve)return 11;if(e===me)return 14}return 2}function Jn(e,n){var t=e.alternate;return t===null?(t=hn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ro(e,n,t,o,s,a){var c=2;if(o=e,typeof e=="function")Dl(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case j:return pt(t.children,s,a,n);case Q:c=8,s|=8;break;case X:return e=hn(12,t,n,s|2),e.elementType=X,e.lanes=a,e;case xe:return e=hn(13,t,n,s),e.elementType=xe,e.lanes=a,e;case Se:return e=hn(19,t,n,s),e.elementType=Se,e.lanes=a,e;case we:return zo(t,s,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:c=10;break e;case Z:c=9;break e;case ve:c=11;break e;case me:c=14;break e;case Re:c=16,o=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=hn(c,t,n,s),n.elementType=e,n.type=o,n.lanes=a,n}function pt(e,n,t,o){return e=hn(7,e,o,n),e.lanes=t,e}function zo(e,n,t,o){return e=hn(22,e,o,n),e.elementType=we,e.lanes=t,e.stateNode={isHidden:!1},e}function Al(e,n,t){return e=hn(6,e,null,n),e.lanes=t,e}function $l(e,n,t){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pf(e,n,t,o,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ps(0),this.expirationTimes=ps(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Bl(e,n,t,o,s,a,c,w,S){return e=new Pf(e,n,t,w,S),n===1?(n=1,a===!0&&(n|=8)):n=0,a=hn(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},el(a),e}function _f(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function Qu(e){if(!e)return Wn;e=e._reactInternals;e:{if(nt(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var t=e.type;if(Xe(t))return ka(e,t,n)}return n}function Yu(e,n,t,o,s,a,c,w,S){return e=Bl(t,o,!0,e,s,a,c,w,S),e.context=Qu(null),t=e.current,o=Ye(),s=Gn(t),a=Rn(o,s),a.callback=n??null,Qn(t,a,s),e.current.lanes=s,Yt(e,s,o),Je(e,o),e}function Oo(e,n,t,o){var s=n.current,a=Ye(),c=Gn(s);return t=Qu(t),n.context===null?n.context=t:n.pendingContext=t,n=Rn(a,c),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=Qn(s,n,c),e!==null&&(kn(e,s,c,a),fo(e,s,c)),c}function Io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ku(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ul(e,n){Ku(e,n),(e=e.alternate)&&Ku(e,n)}function Cf(){return null}var Xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}Fo.prototype.render=Hl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));Oo(e,n,null,null)},Fo.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ct(function(){Oo(null,e,null,null)}),n[En]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ri();e={blockedOn:null,target:e,priority:n};for(var t=0;t<An.length&&n!==0&&n<An[t].priority;t++);An.splice(t,0,e),t===0&&Ii(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gu(){}function Ef(e,n,t,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var N=Io(c);a.call(N)}}var c=Yu(n,o,e,0,null,!1,!1,"",Gu);return e._reactRootContainer=c,e[En]=c.current,ar(e.nodeType===8?e.parentNode:e),ct(),c}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var w=o;o=function(){var N=Io(S);w.call(N)}}var S=Bl(e,0,!1,null,null,!1,!1,"",Gu);return e._reactRootContainer=S,e[En]=S.current,ar(e.nodeType===8?e.parentNode:e),ct(function(){Oo(n,S,t,o)}),S}function Ao(e,n,t,o,s){var a=t._reactRootContainer;if(a){var c=a;if(typeof s=="function"){var w=s;s=function(){var S=Io(c);w.call(S)}}Oo(n,c,e,s)}else c=Ef(t,n,e,s,o);return Io(c)}Li=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Qt(n.pendingLanes);t!==0&&(hs(n,t|1),Je(n,Le()),(he&6)===0&&(Ft=Le()+500,Vn()))}break;case 13:ct(function(){var o=jn(e,1);if(o!==null){var s=Ye();kn(o,e,1,s)}}),Ul(e,1)}},ms=function(e){if(e.tag===13){var n=jn(e,134217728);if(n!==null){var t=Ye();kn(n,e,134217728,t)}Ul(e,134217728)}},ji=function(e){if(e.tag===13){var n=Gn(e),t=jn(e,n);if(t!==null){var o=Ye();kn(t,e,n,o)}Ul(e,n)}},Ri=function(){return ke},zi=function(e,n){var t=ke;try{return ke=e,n()}finally{ke=t}},is=function(e,n,t){switch(n){case"input":if(Jo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var s=no(o);if(!s)throw Error(i(90));oi(o),Jo(o,s)}}}break;case"textarea":ui(e,t);break;case"select":n=t.value,n!=null&&ht(e,!!t.multiple,n,!1)}},vi=Ol,xi=ct;var Tf={usingClientEntryPoint:!1,Events:[dr,bt,no,yi,gi,Ol]},Pr={findFiberByHostInstance:tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nf={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mi(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||Cf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Ir=$o.inject(Nf),Sn=$o}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf,en.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(n))throw Error(i(200));return _f(e,n,null,t)},en.createRoot=function(e,n){if(!Wl(e))throw Error(i(299));var t=!1,o="",s=Xu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Bl(e,1,!1,null,null,t,!1,o,s),e[En]=n.current,ar(e.nodeType===8?e.parentNode:e),new Hl(n)},en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Mi(n),e=e===null?null:e.stateNode,e},en.flushSync=function(e){return ct(e)},en.hydrate=function(e,n,t){if(!Do(n))throw Error(i(200));return Ao(null,e,n,!0,t)},en.hydrateRoot=function(e,n,t){if(!Wl(e))throw Error(i(405));var o=t!=null&&t.hydratedSources||null,s=!1,a="",c=Xu;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),n=Yu(n,null,e,1,t??null,s,!1,a,c),e[En]=n.current,ar(e),o)for(e=0;e<o.length;e++)t=o[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new Fo(n)},en.render=function(e,n,t){if(!Do(n))throw Error(i(200));return Ao(null,e,n,!1,t)},en.unmountComponentAtNode=function(e){if(!Do(e))throw Error(i(40));return e._reactRootContainer?(ct(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1},en.unstable_batchedUpdates=Ol,en.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!Do(t))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Ao(e,n,t,!1,o)},en.version="18.3.1-next-f1338f8080-20240426",en}var sc;function Af(){if(sc)return Ql.exports;sc=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),Ql.exports=Df(),Ql.exports}var lc;function $f(){if(lc)return Bo;lc=1;var r=Af();return Bo.createRoot=r.createRoot,Bo.hydrateRoot=r.hydrateRoot,Bo}var Bf=$f();const Uf=kc(Bf),ie=(r,l,i,u,d={})=>({key:r,label:l,def:i,type:u,...d}),ei={course:{label:"Course (generate)",knobs:[ie("seed","Seed",1337,"number",{step:1}),ie("vertices","Vertices",7,"range",{min:5,max:12,step:1}),ie("radius","Track size (m)",45,"range",{min:25,max:70,step:1,unit:"m"}),ie("radius_noise","Radius noise",.6,"range",{min:0,max:1,step:.05}),ie("trackWidth","Half-lane (m)",5,"range",{min:3,max:8,step:.25,unit:"m"}),ie("fillet_radius_min","Min turn radius (m)",4,"range",{min:2,max:12,step:.5,unit:"m"}),ie("fillet_radius_max","Max turn radius (m)",12,"range",{min:4,max:20,step:.5,unit:"m"})]},obstacles:{label:"Obstacles",knobs:[ie("seed","Seed",7331,"number",{step:1}),ie("count","Obstacle count",8,"range",{min:0,max:20,step:1}),ie("lateral","Lateral spread (m)",1.6,"range",{min:0,max:6,step:.25,unit:"m"}),ie("kinds","Kinds",["tunnel","block"],"multiselect",{options:["tunnel","block"]})]},perception:{label:"Perception",knobs:[ie("mode","Option","opencv","select",{options:[{v:"ground_truth",l:"Ground truth (no error)"},{v:"opencv",l:"Classical OpenCV"},{v:"ai",l:"Lightweight AI"}]}),ie("range_m","Range ahead (m)",18,"range",{min:5,max:40,step:.5,unit:"m"}),ie("lateral_noise","Centreline noise (m)",0,"range",{min:0,max:1.5,step:.05,unit:"m"}),ie("obstacle_noise","Obstacle noise (m)",0,"range",{min:0,max:1.5,step:.05,unit:"m"}),ie("miss_prob","Miss chance",.05,"range",{min:0,max:.6,step:.02}),ie("freq","Frames / sec",30,"range",{min:5,max:60,step:5})]},trackModel:{label:"Local track model",knobs:[ie("lookahead","Model lookahead (m)",14,"range",{min:3,max:30,step:.5,unit:"m"}),ie("tape_trust","Tape vs waypoint trust",.7,"range",{min:0,max:1,step:.05}),ie("obstacle_hysteresis","Obstacle persistence (s)",1.5,"range",{min:0,max:8,step:.2,unit:"s"}),ie("max_obstacles","Max kept obstacles",20,"range",{min:1,max:40,step:1})]},planner:{label:"Path planner",knobs:[ie("lookahead","PP lookahead (m)",7,"range",{min:2,max:25,step:.5,unit:"m"}),ie("cruise","Cruise speed (m/s)",8,"range",{min:1,max:16,step:.5,unit:"m/s"}),ie("detour_width","Detour width (m)",2.5,"range",{min:1,max:8,step:.25,unit:"m"}),ie("slow_zone","Corner slow radius",.55,"range",{min:0,max:1,step:.05}),ie("slack","Keep-out (m)",.4,"range",{min:0,max:2,step:.1,unit:"m"}),ie("rl_residual","RL residual",0,"range",{min:-2,max:2,step:.1}),ie("rl_bounds","Residual bound (m/s)",2,"range",{min:0,max:5,step:.25,unit:"m/s"})]},formation:{label:"Formation manager",knobs:[ie("spacing","Box slot spacing (m)",1.1,"range",{min:.4,max:3,step:.1,unit:"m"}),ie("diamond","Diamond depth (m)",1.8,"range",{min:.5,max:4,step:.1,unit:"m"}),ie("reform_time","Reform time (s)",.4,"range",{min:.2,max:4,step:.1,unit:"s"}),ie("trigger","Mode trigger ahead (m)",6,"range",{min:2,max:20,step:1,unit:"m"}),ie("axis","Slot frame","track","select",{options:[{v:"track",l:"Track heading"},{v:"centroid",l:"Centroid heading"}]}),ie("mode","Mode override","auto","select",{options:[{v:"auto",l:"Auto (planner)"},{v:"box",l:"Box"},{v:"line",l:"Line (single file)"},{v:"diamond",l:"Diamond"}]})]},comms:{label:"Inter-drone comms",knobs:[ie("hz","Broadcast rate (Hz)",40,"range",{min:5,max:60,step:5}),ie("loss","Packet loss",0,"range",{min:0,max:.5,step:.02}),ie("jitter","Latency jitter (ms)",60,"range",{min:0,max:200,step:5,unit:"ms"}),ie("uwb_noise","UWB sd (m)",.05,"range",{min:0,max:.5,step:.02,unit:"m"})]},swarm:{label:"Swarm controller",knobs:[ie("slot_gain","Slot-hold gain",2.5,"range",{min:.2,max:4,step:.1}),ie("damping","Velocity damping",.9,"range",{min:0,max:2,step:.05}),ie("separation","Separation radius (m)",.5,"range",{min:.3,max:3,step:.1,unit:"m"})]},safety:{label:"Combiners + safety filter",knobs:[ie("vmax","Velocity clip (m/s)",12,"range",{min:1,max:24,step:.5,unit:"m/s"}),ie("sep","Min inter-drone (m)",.4,"range",{min:.3,max:2.5,step:.1,unit:"m"}),ie("clearance","Obstacle clearance (m)",.4,"range",{min:.1,max:2,step:.1,unit:"m"}),ie("hard_gate","Obeys gates",!0,"bool")]},autopilot:{label:"Classical autopilot",knobs:[ie("tau","Response tau (s)",.08,"range",{min:.02,max:2,step:.02,unit:"s"}),ie("accel","Accel limit (m/s²)",30,"range",{min:2,max:40,step:1,unit:"m/s²"}),ie("lag","Processing lag (ms)",20,"range",{min:0,max:150,step:5,unit:"ms"})]},sim:{label:"Simulation",knobs:[ie("drones","Drone count",4,"range",{min:1,max:8,step:1})]}};function Sc(){const r={};for(const[l,i]of Object.entries(ei)){r[l]={};for(const u of i.knobs)r[l][u.key]=u.type==="number"||u.type==="range"?Number(u.def):u.type==="bool"?!!u.def:u.def}return r}const Hf=Object.keys(ei);function Xo(r){let l=r>>>0;return function(){l|=0,l=l+1831565813|0;let u=Math.imul(l^l>>>15,1|l);return u=u+Math.imul(u^u>>>7,61|u)^u,((u^u>>>14)>>>0)/4294967296}}function Yo(r,l=0,i=1){const u=Math.max(r(),1e-12),d=r();return l+i*Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*d)}function Wf(r){const l=Xo(r.seed),i=Vf(r,l),{segments:u,straights:d}=qf(i,r,l),h=Yf(u),f=u.reduce((g,p)=>g+(p.type==="straight"?Er(p.from,p.to):Math.abs(p.radius*p.angle)),0);return{config:r,seed:r.seed,bounds:Kf(i),centerline:h,poly:i,segments:u,straights:d,length:f}}function Vf(r,l){const i=r.vertices??6+Math.floor(l()*3),u=[],d={x:0,y:0};for(let h=0;h<i;h++){const f=h/i*Math.PI*2,g=r.radius*(1+(l()-.5)*(r.radius_noise??.9)),p={x:Math.cos(f)*g,y:Math.sin(f)*g};u.push(p),d.x+=p.x,d.y+=p.y}return d.x/=i,d.y/=i,u.sort((h,f)=>ic(h,d)-ic(f,d))}function ic(r,l){return Math.atan2(r.y-l.y,r.x-l.x)}function qf(r,l,i){const u=r.length,d=[];for(let g=0;g<u;g++){const p=r[g],v=r[(g+u-1)%u],x=r[(g+1)%u],m=Er(v,p),y=Er(p,x),k=(p.x-v.x)/(m||1e-6),E=(p.y-v.y)/(m||1e-6),b=(x.x-p.x)/(y||1e-6),z=(x.y-p.y)/(y||1e-6),L=Qf(Math.atan2(z,b)-Math.atan2(E,k)),O=Math.sign(L)||1,$=Math.tan(Math.abs(L)/2)||1e-6;let R=l.fillet_radius_min+i()*(l.fillet_radius_max-l.fillet_radius_min);const q=Math.min(R*$,m*.5,y*.5);R=q/$;const B=-E*O,j=k*O;d.push({entry:{x:p.x-k*q,y:p.y-E*q},exit:{x:p.x+b*q,y:p.y+z*q},center:{x:p.x-k*q+B*R,y:p.y-E*q+j*R},r:R,dAng:L})}const h=[],f=[];for(let g=0;g<u;g++){h.push({type:"turn",center:d[g].center,radius:d[g].r,angle:d[g].dAng,from:d[g].entry,to:d[g].exit});const p=d[g].exit,v=d[(g+1)%u].entry;h.push({type:"straight",from:p,to:v}),f.push(Er(p,v))}return{segments:h,straights:f}}function Qf(r){for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r}function Yf(r){const l=[];let i=0;for(const u of r)if(u.type==="straight"){const d=Er(u.from,u.to),h=Math.atan2(u.to.y-u.from.y,u.to.x-u.from.x),f=Math.max(2,Math.round(d/.5));for(let g=0;g<f;g++){const p=g/(f-1);l.push({x:u.from.x+(u.to.x-u.from.x)*p,y:u.from.y+(u.to.y-u.from.y)*p,s:i+p*d,heading:h,curvature:0})}i+=d}else{const d=u.radius,h=Math.atan2(u.from.y-u.center.y,u.from.x-u.center.x),f=Math.abs(d*u.angle),g=Math.sign(u.angle)||1,p=Math.max(2,Math.round(f/.5));for(let v=0;v<p;v++){const x=v/(p-1),m=h+u.angle*x;l.push({x:u.center.x+d*Math.cos(m),y:u.center.y+d*Math.sin(m),s:i+x*f,heading:m+g*(Math.PI/2),curvature:g/d})}i+=f}return l}function Er(r,l){return Math.hypot(r.x-l.x,r.y-l.y)}function Kf(r){let l=1/0,i=1/0,u=-1/0,d=-1/0;for(const f of r)l=Math.min(l,f.x),u=Math.max(u,f.x),i=Math.min(i,f.y),d=Math.max(d,f.y);const h=5;return{minX:l-h,minY:i-h,maxX:u+h,maxY:d+h}}function Xf(r){const l=r.centerline,i=l.length,u=r.length;function d(p,v={}){const x=r.length,m=(p%x+x)%x,y=g(m),k=l[y],E=l[(y+1)%i];let b=E.s;b<=k.s&&(b+=x);const z=Math.min(1,Math.max(0,(m-k.s)/Math.max(1e-9,b-k.s)));return v.x=k.x+(E.x-k.x)*z,v.y=k.y+(E.y-k.y)*z,v.heading=k.heading+Gf(E.heading-k.heading)*z,v.s=m,v.curvature=k.curvature,v}function h(p,v,x={}){return d(p,x),x.x+=Math.cos(x.heading+Math.PI/2)*v,x.y+=Math.sin(x.heading+Math.PI/2)*v,x}function f(p,v){let x=null,m=1/0;for(let $=0;$<i;$+=4){const R=l[$],q=(R.x-p)**2+(R.y-v)**2;q<m&&(m=q,x=$)}let y=Math.max(0,x-8),k=Math.min(i-1,x+8),E=0,b=0,z=l[x].x,L=l[x].y,O=l[x].heading;for(let $=y;$<=k;$++){const R=l[$],q=l[($+1)%i],B=q.x-R.x,j=q.y-R.y,Q=B*B+j*j||1e-9;let X=((p-R.x)*B+(v-R.y)*j)/Q;X=Math.min(1,Math.max(0,X));const V=R.x+B*X,Z=R.y+j*X,ve=(V-p)**2+(Z-v)**2;if(ve<m){m=ve,E=R.s+X*(q.s-R.s);const xe=Math.atan2(j,B);b=((p-V)*-j+(v-Z)*B)/Math.sqrt(Q),z=V,L=Z,O=xe}}return{s:E,off:b,x:z,y:L,heading:O,dist:Math.sqrt(m)}}function g(p){const v=(p%u+u)%u;let x=0,m=i-1;for(;x<m;){const y=x+m>>1;l[y].s<v?x=y+1:m=y}return Math.max(0,x-1)}return{L:u,N:i,samples:l,pointAt:d,lateral:h,nearest:f,indexAt:g}}function Gf(r){for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r}const Mc={tunnel:{label:"Tunnel (forces single-file line)",params:{length:[5,8],width:[1.05,1.35]},color:"#0ca678"},block:{label:"Block (on tape, must go around)",params:{len:[2,3],width:[1.3,1.8]},color:"#e03131"}};Object.fromEntries(Object.entries(Mc).map(([r,l])=>[r,r]));function Zf(r,l,i){const u=Xo(i),d=r.L,h=l.count??8,f=l.min_spacing??15,g=l.lateral??l.trackWidth/2-.8,p=[];let v=0;for(let x=0;x<h;x++){v+=f+u()*(d/h-f),v%=d;const m=Jf(u,l.kinds);for(let y=0;y<10;y++){const k=ep(m,u,v,g,r),E=ac(k);if(p.every(z=>{let L=Math.abs(k.s-z.s);return L>d/2&&(L=d-L),L>=ac(z)/2+E/2+8})){p.push(k);break}v=(v+4+u()*8)%d}}return p}function ac(r){return r.type==="tunnel"?r.length:r.type==="block"||r.type==="wall"?r.len:1}function Jf(r,l){const i=l&&l.length?l:Object.keys(Mc);return i[Math.floor(r()*i.length)]}function ep(r,l,i,u,d){const h=r==="tunnel"||r==="block"?(l()-.5)*.4:(l()-.5)*2*u,f=d.lateral(i,h),g={id:`${r}-${i.toFixed(1)}`,type:r,s:i,off:h,x:f.x,y:f.y,heading:f.heading};return r==="tunnel"?{...g,length:5+l()*3,width:1.05+l()*.3}:r==="block"?{...g,len:2+l()*1,width:1.3+l()*.5}:g}const bc=.25;function Pc(r){for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r}function ni(r,l,i){let u=(r-l)%i;return u<0&&(u+=i),u}function Xl(r,l,i){const u=Math.round((r-l)/i);return r-l-u*i}function $t(r,l,i){return Math.min(i,Math.max(l,r))}function _c(r){let l=0;for(let i=0;i<r.length;i++)l=l*31+r.charCodeAt(i)|0;return(l%1e3+1e3)%1e3/1e3}function At(r,l){if(r.length===0)return{x:0,y:0,s:l};if(l<=r[0].s){const f=r[0];return{x:f.x,y:f.y,s:l}}if(l>=r[r.length-1].s){const f=r[r.length-1];return{x:f.x,y:f.y,s:l}}let i=r[0],u=r[r.length-1];for(let f=0;f<r.length-1;f++)if(r[f].s<=l&&r[f+1].s>=l){i=r[f],u=r[f+1];break}const d=u.s-i.s||1,h=Math.min(1,Math.max(0,(l-i.s)/d));return{x:i.x+(u.x-i.x)*h,y:i.y+(u.y-i.y)*h,s:l}}function np(r,l){const i=At(r,l-2),u=At(r,l),d=At(r,l+2),h=Math.atan2(u.y-i.y,u.x-i.x),f=Math.atan2(d.y-u.y,d.x-u.x);return Pc(f-h)/4}function tp({scene:r,prevObstacles:l,params:i,time:u,waypoint:d,seen:h,log:f}){const g=i.trackModel.tape_trust,p=r.centreline.map(m=>{const y=d(m.s);return{x:y.x*(1-g)+m.x*g,y:y.y*(1-g)+m.y*g,s:m.s}});for(let m=1;m<p.length-1;m++){const y=Math.atan2(p[m].y-p[m-1].y,p[m].x-p[m-1].x),k=Math.atan2(p[m+1].y-p[m].y,p[m+1].x-p[m].x),E=(p[m+1].s-p[m-1].s)/2;p[m].curvature=E>1e-8?Pc(k-y)/E:0}p.length>0&&(p[0].curvature=0,p[p.length-1].curvature=0);const v=r.obstacles.map(m=>({...m,lastSeen:u})),x=new Set(r.obstacles.map(m=>m.id));for(const m of l)!x.has(m.id)&&u-m.lastSeen<=i.trackModel.obstacle_hysteresis&&v.push(m);if(f)for(const m of v)h.has(m.id)||(h.add(m.id),f("trackModel",`tracking ${m.type} @ ${m.s.toFixed(0)} m ahead (conf ${(m.confidence??0).toFixed(2)})`));for(v.sort((m,y)=>m.s-y.s);v.length>i.trackModel.max_obstacles;)v.pop();return{s0:r.s0,line:p,obstacles:v}}function rp({model:r,params:l,arc:i,prevPose:u,prevDetourOn:d,obstacleSide:h,trackLength:f,dt:g,log:p,curvature:v}){const x=l.planner,m=i;if(!r.line||r.line.length<2)return null;const y=lp(r,m,x.lookahead,f),k=v??np(r.line,m),E=$t(1-x.slow_zone*Math.min(Math.abs(k)*5,1.1),.45,1);let b=x.cruise*E+x.rl_residual*x.rl_bounds;y&&(b*=y.tunnel?.7:.55),b=$t(b,.5,x.cruise+x.rl_bounds+4);const z=m+b*g,L=op(r,m,f);let O=Cc(r,m,x,l.formation.spacing,f,h);if(L){const V=Xl(m,L.s,f);V<L.length/2+1.5&&V>-(L.length/2+8)&&(O={off:0,side:1,id:null})}const $=O.off>.05;p&&($&&!d?p("planner",`detour ${O.side>0?"LEFT":"RIGHT"} around ${O.id??"obstacle"}`):!$&&d&&p("planner","detour cleared — back to centreline"));const R=At(r.line,z),q=At(r.line,z+.5),B=At(r.line,Math.max(0,z-.5)),j=Math.atan2(q.y-B.y,q.x-B.x);if(O.off!==0){const V=Math.cos(j+Math.PI/2)*O.off*O.side,Z=Math.sin(j+Math.PI/2)*O.off*O.side;R.x+=V,R.y+=Z}if(L){const V=Math.cos(L.heading),Z=Math.sin(L.heading),ve=-(R.x-L.x)*Z+(R.y-L.y)*V,xe=(R.x-L.x)*V+(R.y-L.y)*Z,Se=L.length/2+8,me=L.length/2+1.5;if(xe<me&&xe>-Se){const Re=Math.min(1,1-Math.exp(-g*7)),we=-Z,H=V;R.x-=we*ve*Re,R.y-=H*ve*Re}}const Q=(R.x-u.x)/g,X=(R.y-u.y)/g;return u.x=R.x,u.y=R.y,{h:j,speed:b,arc:z,detourOn:$,detour:y?{x:y.x,y:y.y}:null,vx:Q,vy:X,pose:{x:R.x,y:R.y,s:z,heading:j}}}function op(r,l,i){let u=null,d=1/0;for(const h of r.obstacles){if(h.type!=="tunnel")continue;const f=ni(h.s,l,i);f<d&&f<h.length/2+10&&(d=f,u=h)}return u}function Cc(r,l,i,u,d,h,f){const g=f??10;let p=null,v=1/0;for(const L of r.obstacles){if(L.type!=="block")continue;const O=uc(L),$=Xl(l,L.s-O/2,d);$<-(i.lookahead+O/2+g+4)||$>O+g+2||Math.abs($)<v&&(v=Math.abs($),p=L)}if(!p)return{off:0,side:1,id:null};const x=h[p.id]!==void 0?h[p.id]:h[p.id]=_c(p.id)<.5?-1:1,m=uc(p),y=Xl(l,p.s-m/2,d),k=$t((y+g)/g,0,1),E=$t((m+g-y)/g,0,1),b=u/2+.8;return{off:Math.max(i.detour_width,sp(p)+b)*Math.min(k,E),side:x,id:p.id}}function uc(r){const l=(r.angle??r.heading)-r.heading;return Math.abs(r.len*Math.cos(l))+Math.abs(r.width*Math.sin(l))+1}function sp(r){const l=(r.angle??r.heading)-r.heading;return Math.abs(r.len*Math.sin(l))/2+Math.abs(r.width*Math.cos(l))/2}function lp(r,l,i,u){let d=null,h=1/0;for(const f of r.obstacles){const g=ni(f.s,l,u);g<h&&g<i&&(h=g,d=f)}return d?{x:d.x,y:d.y,tunnel:d.type==="tunnel"}:null}function ip({model:r,centroid:l,params:i,fm:u,time:d,dt:h,drones:f,trackLength:g,log:p}){const v=i.planner.lookahead,x=i.formation,m=x.trigger??8;let y=null,k=1/0,E=0;for(const R of r.obstacles){const q=ni(R.s,l.s,g);if(q>v+m)continue;const B=Math.hypot(R.x-l.x,R.y-l.y),j=R.type==="tunnel"?B:B*.75;j<k&&(k=j,y=R,E=q)}let b,z;if(y)b="line",z=`${b} ← ${y.type} @${E.toFixed(0)}m ahead`;else if(u.lastMode==="box")b="box",z="box (clear ahead)";else{const R=d-(u.lastModeChange??0);R>x.reform_time*1.5?(b="box",z="box (clear for "+R.toFixed(1)+"s)"):(b=u.lastMode,z=`${u.lastMode} (holding ${R.toFixed(1)}s after trigger)`)}const L=u.lastMode!==b;L&&(u.lastModeChange=d,u.modeSince=d,p&&p("formation",`mode ${u.lastMode} → ${b} · ${z}`)),u.lastMode=b,u.mode=b,u.reason=z;const O=ap(b,x,f.length);u.slots=O;const $=L?1:1-Math.exp(-h/(x.reform_time/3));for(let R=0;R<f.length;R++){const q=O[R];f[R].slotCur.f+=(q.f-f[R].slotCur.f)*$,f[R].slotCur.l+=(q.l-f[R].slotCur.l)*$}return{mode:b,reason:z,changed:L}}function ap(r,l,i){const u=l.spacing,d=l.diamond,h=[{f:-u/2,l:u/2},{f:-u/2,l:-u/2},{f:u/2,l:u/2},{f:u/2,l:-u/2}],f=[{f:d,l:0},{f:0,l:-d},{f:-d,l:0},{f:0,l:d}],g=[];for(let p=0;p<i;p++){let v={f:0,l:0};if(r==="box")v={...h[p%h.length]};else if(r==="line"){const x=Math.max(.65,u*.8);v={f:-p*x,l:0}}else r==="diamond"&&(v={...f[p%f.length]});g.push(v)}return g}function up({drone:r,centroid:l,plan:i,params:u,model:d,neighbours:h,trackLength:f,obstacleSide:g}){const p=u.swarm,v=cp(u,l),x=r.slotCur;r.slotPos={x:l.x+Math.cos(v)*x.f+Math.cos(v+Math.PI/2)*x.l,y:l.y+Math.sin(v)*x.f+Math.sin(v+Math.PI/2)*x.l};const m=Cc(d,r.s,u.planner,u.formation.spacing,f,g,5);m.off!==0&&(r.slotPos.x+=Math.cos(v+Math.PI/2)*m.off*m.side,r.slotPos.y+=Math.sin(v+Math.PI/2)*m.off*m.side);let y=i.vx,k=i.vy;const E={vx:p.slot_gain*(r.slotPos.x-r.x),vy:p.slot_gain*(r.slotPos.y-r.y)};y+=E.vx,k+=E.vy;const b={vx:0,vy:0};for(const L of h){const O=r.x-L.x,$=r.y-L.y,R=O*O+$*$,q=p.separation*2.2;if(R>1e-8&&R<q*q){const B=Math.sqrt(R),j=(q-B)/q*1.6;b.vx+=O/B*j,b.vy+=$/B*j}}y+=b.vx,k+=b.vy;const z={vx:(l.vx-r.vx)*p.damping,vy:(l.vy-r.vy)*p.damping};y+=z.vx,k+=z.vy,r.terms={slot:E,sep:b,damp:z},r.swarm={vx:y,vy:k}}function cp(r,l){return r.formation.axis==="track"?l.heading:Math.atan2(l.vy,l.vx)}function dp({drone:r,drones:l,prims:i,params:u,time:d,sepLog:h,log:f}){var y;const g=u.safety,p={vx:r.swarm.vx,vy:r.swarm.vy};let v=p.vx,x=p.vy;const m=()=>{const k=Math.hypot(v,x);if(k>g.vmax){const E=g.vmax/k;v*=E,x*=E}};m();for(const k of i){if(((y=k.src)==null?void 0:y.type)==="tunnel"){const L=k.src,O=r.x-L.x,$=r.y-L.y,R=Math.cos(L.heading),q=Math.sin(L.heading),B=O*R+$*q,j=-O*q+$*R,Q=L.length/2+2;if(Math.abs(B)<Q&&Math.abs(j)<L.width/2+2){const X=Math.max(.1,L.width/2-.45);if(Math.abs(j)>X){const V=-Math.sign(j)*Math.min((Math.abs(j)-X)*6,6);v+=-q*V,x+=R*V}}continue}const E=Ec(r.x,r.y,k),b=k.r??0,z=g.clearance+bc;if(E<b+z){const L=(b+z-E)*5,O=r.x-k.x,$=r.y-k.y,R=Math.hypot(O,$)||1e-6;v+=O/R*L,x+=$/R*L}}for(const k of l){if(k===r)continue;const E=r.x-k.x,b=r.y-k.y,z=E*E+b*b;if(z>1e-9&&z<g.sep**2){const L=Math.sqrt(z),O=(g.sep-L)/L;v+=E/L*O*7,x+=b/L*O*7,f&&d-(h[r.id]??-1)>.8&&(h[r.id]=d,f("safety",`hard separation vs #${k.id} (${L.toFixed(2)} m)`))}}m(),r.terms.safety={vx:v-p.vx,vy:x-p.vy},r.cut={vx:v,vy:x}}function Ec(r,l,i){if(i.kind==="circle")return Math.hypot(r-i.x,l-i.y)-i.r;const u=r-i.x,d=l-i.y,h=Math.cos(i.angle),f=Math.sin(i.angle),g=u*h+d*f,p=-u*f+d*h,v=Math.max(Math.abs(g)-i.w/2,0),x=Math.max(Math.abs(p)-i.h/2,0);return Math.hypot(v,x)}function fp({drone:r,params:l,dt:i,simStep:u}){const d=l.autopilot,h=Math.max(1,Math.round(d.lag/1e3/u));r._lagBuf.push({vx:r.cut.vx,vy:r.cut.vy}),r._lagBuf.length>h&&r._lagBuf.shift();const f=r._lagBuf[r._lagBuf.length-h]||{vx:r.cut.vx,vy:r.cut.vy},g=1-Math.exp(-i/d.tau);let p=r.vx+(f.vx-r.vx)*g,v=r.vy+(f.vy-r.vy)*g;const x=p-r.vx,m=v-r.vy,y=Math.hypot(x,m)/i;if(y>d.accel){const k=d.accel/y;p=r.vx+x*k,v=r.vy+m*k}r.vx=p,r.vy=v}const qo=1/240;function Cr(r={}){var x;const l=ti(Sc(),r),i=Wf(l.course),u=Xf(i),d=Zf(u,l.obstacles,l.obstacles.seed),h=u.pointAt(0),f=((x=l.sim)==null?void 0:x.drones)??4,g=[],p=l.formation.spacing,v=[{f:-p/2,l:p/2},{f:-p/2,l:-p/2},{f:p/2,l:p/2},{f:p/2,l:-p/2}];for(let m=0;m<f;m++){const y=v[m%v.length]??{f:-m,l:0},k=h.x+Math.cos(h.heading)*y.f+Math.cos(h.heading+Math.PI/2)*y.l,E=h.y+Math.sin(h.heading)*y.f+Math.sin(h.heading+Math.PI/2)*y.l,b=pp(m,{x:k,y:E},h.heading);b.slotCur={...y},b.slotPos={x:k,y:E},g.push(b)}return{params:l,course:i,query:u,obstacles:d,obstaclePrims:hp(d),drones:g,centroid:{x:h.x,y:h.y,vx:0,vy:0,s:0,heading:h.heading},plan:{vx:0,vy:0,h:h.heading,speed:0,detour:null,detourOn:!1},scene:{s0:0,centreline:[],obstacles:[]},model:{line:[],obstacles:[]},scenarioBias:new Array(2e5).fill(void 0),perceptAt:null,perceptPeriod:1/(l.perception.freq||30),comms:{buffer:[],dropped:new Set,lastBroadcast:null,period:1/(l.comms.hz||40)},modelObstaclesList:[],decisions:[],_detourActive:!1,_prevPose:{x:h.x,y:h.y},_railLog:{},_sepLog:{},_modelSeen:new Set,_obSide:{},centroidArc:0,fm:{mode:"box",lastMode:null,reason:"box (start)",modeSince:0},rng:Xo(l.course.seed^2654435769),time:0,acc:0,stats:{events:[],samples:[],lapTimes:[],logT:0,conf:null,collisionCount:0,collisions:[],nearEvents:[],nearDrone:0,nearObs:0,modeTime:{box:0,line:0}}}}function pp(r,l,i){return{id:r,x:l.x,y:l.y,vx:Math.cos(i)*.5,vy:Math.sin(i)*.5,s:0,off:0,lap:0,ds:0,_prevS:null,_lapStart:null,slotCur:{f:0,l:0},slotPos:{x:l.x,y:l.y},swarm:{vx:0,vy:0},terms:{slot:{vx:0,vy:0},sep:{vx:0,vy:0},damp:{vx:0,vy:0},safety:{vx:0,vy:0}},cut:{vx:0,vy:0},_lagBuf:[],speedAt:0,mode:"box"}}function Tc(r,l,i){r.decisions.push({t:r.time,stage:l,msg:i}),r.decisions.length>200&&r.decisions.shift()}const Uo=r=>(l,i)=>Tc(r,l,i);function hp(r){const l=[];for(const i of r)if(i.type==="block")l.push({kind:"rect",x:i.x,y:i.y,w:i.len,h:i.width,angle:i.heading,r:0,src:i});else if(i.type==="tunnel"){const u=i.heading,d=i.width/2+.25;for(const h of[1,-1])l.push({kind:"rect",x:i.x+Math.cos(u+Math.PI/2)*d*h,y:i.y+Math.sin(u+Math.PI/2)*d*h,w:i.length,h:.5,angle:u,r:0,src:i})}return l}function Nc(r,l){for(r.acc+=Math.min(l,.05);r.acc>=qo;)r.acc-=qo,mp(r,qo)}function mp(r,l){r.time+=l;const i=r.time;(r.perceptAt===null||i>=r.perceptAt)&&(r.scene=gp(r),r.perceptAt=i+r.perceptPeriod),r.model=tp({scene:r.scene,prevObstacles:r.modelObstaclesList,params:r.params,time:i,waypoint:f=>r.query.pointAt(f),seen:r._modelSeen,log:Uo(r)}),r.modelObstaclesList=r.model.obstacles;const u=rp({model:r.model,params:r.params,arc:r.centroidArc,prevPose:r._prevPose,prevDetourOn:r._detourActive,obstacleSide:r._obSide,trackLength:r.query.L,dt:l,log:Uo(r),curvature:r.query.pointAt(r.centroidArc).curvature});if(u===null){const f=r.centroid;r.plan={h:f.heading,speed:0,detourOn:!1,detour:null,vx:0,vy:0,pose:{x:f.x,y:f.y,s:r.centroidArc,heading:f.heading}}}else r.plan=u,r.centroidArc=u.arc,r._detourActive=u.detourOn;const d=r.centroid;d.vx=r.plan.vx,d.vy=r.plan.vy,d.x=r.plan.pose.x,d.y=r.plan.pose.y,d.s=r.plan.pose.s,d.heading=r.plan.pose.heading,xp(r);const h=ip({model:r.model,centroid:r.centroid,params:r.params,fm:r.fm,time:i,dt:l,drones:r.drones,trackLength:r.query.L,log:Uo(r)});r.stats.modeTime[h.mode]=(r.stats.modeTime[h.mode]??0)+l;for(const f of r.drones)up({drone:f,centroid:r.centroid,plan:r.plan,params:r.params,model:r.model,neighbours:yp(r,f),trackLength:r.query.L,obstacleSide:r._obSide});for(const f of r.drones)dp({drone:f,drones:r.drones,prims:r.obstaclePrims,params:r.params,time:i,sepLog:r._sepLog,log:Uo(r)});for(const f of r.drones){fp({drone:f,params:r.params,dt:l,simStep:qo}),f.x+=f.vx*l,f.y+=f.vy*l,f.speedAt=Math.hypot(f.vx,f.vy);const g=r.query.nearest(f.x,f.y);f.s=g.s,f.off=g.off,f._prevS!==null&&f._prevS>r.query.L-5&&g.s<5&&(f.lap++,f._lapStart&&r.stats.lapTimes.push(i-f._lapStart),f._lapStart=i),f._prevS=g.s}kp(r),i-r.stats.logT>=.2&&(r.stats.logT=i,Mp(r))}function yp(r,l){const i=[];for(const u of r.drones){if(u===l||r.comms.dropped.has(u.id))continue;const d=wp(r,u.id);d&&i.push(d)}return i}function gp(r){const l=r.params.perception,i=r.query,u=r.centroid,d=l.range_m,h=l.freq>22?2:3,f=[];for(let p=u.s;p<u.s+d;p+=h){const v=i.pointAt(p),x=vp(r,p)*l.lateral_noise,m=Math.sin(p*.13+r.time*1.2)*.22*l.lateral_noise;f.push({x:v.x+Math.cos(v.heading+Math.PI/2)*(x+m),y:v.y+Math.sin(v.heading+Math.PI/2)*(x+m),s:p})}const g=[];for(const p of r.obstacles){let v=p.s-u.s;v<0&&(v+=i.L),!(v>d+2)&&(r.rng()<l.miss_prob||g.push({...p,confidence:.45+.5*_c(p.id),x:p.x+Yo(r.rng,0,l.obstacle_noise),y:p.y+Yo(r.rng,0,l.obstacle_noise)}))}return{s0:u.s,range:d,obstacles:g,centreline:f}}function vp(r,l){const i=Math.floor(l)%r.scenarioBias.length;return r.scenarioBias[i]===void 0&&(r.scenarioBias[i]=r.rng()*2-1),r.scenarioBias[i]}function xp(r,l){const i=r.comms,u=r.params.comms;(i.lastBroadcast===null||r.time-i.lastBroadcast>=i.period)&&(i.lastBroadcast=r.time,i.buffer=r.drones.map(d=>({id:d.id,x:d.x,y:d.y,tBroadcast:r.time,deliverAt:r.time+u.jitter/1e3}))),i.dropped=new Set;for(const d of r.drones)r.rng()<u.loss&&i.dropped.add(d.id)}function wp(r,l){const i=r.params.comms,u=r.comms.buffer.find(d=>d.id===l);return!u||r.time<u.deliverAt?null:{id:l,x:u.x+Yo(r.rng,0,i.uwb_noise),y:u.y+Yo(r.rng,0,i.uwb_noise)}}function kp(r){var f,g,p,v;const l=bc,i=r.drones.length,u=[],d=.65,h=.55;for(let x=0;x<i;x++)for(let m=x+1;m<i;m++){const y=r.drones[x],k=r.drones[m],E=k.x-y.x,b=k.y-y.y,z=Math.hypot(E,b);if(z>=d)continue;const L=E/(z||1e-9),O=b/(z||1e-9),$=(d-z)/2+1e-4;y.x-=L*$,y.y-=O*$,k.x+=L*$,k.y+=O*$;const R=(y.vx-k.vx)*L+(y.vy-k.vy)*O;if(R<0){const q=R*.6;y.vx-=q*L,y.vy-=q*O,k.vx+=q*L,k.vy+=q*O}z<2*l&&u.push({t:r.time,type:"drone",ids:[y.id,k.id],x:(y.x+k.x)/2,y:(y.y+k.y)/2})}for(const x of r.drones)for(const m of r.obstaclePrims){const y=Sp(m,x.x,x.y),E=((f=m.src)==null?void 0:f.type)==="tunnel"?.3:(m.r??0)+h;if(y.d<E){const b=(x.x-y.x)/(y.d||1e-9),z=(x.y-y.y)/(y.d||1e-9),L=E-y.d+1e-4;x.x+=b*L,x.y+=z*L;const O=x.vx*b+x.vy*z;O<0&&(x.vx-=O*.7*b,x.vy-=O*.7*z),r.stats.nearEvents.length>60&&r.stats.nearEvents.shift(),r.stats.nearEvents.push({t:r.time,kind:((g=m.src)==null?void 0:g.type)??"obstacle",x:x.x,y:x.y});const $=((p=m.src)==null?void 0:p.id)??m.kind;r.time-(r._railLog[$]??-1)>.8&&(r._railLog[$]=r.time,Tc(r,"collisions",`safety rail on ${((v=m.src)==null?void 0:v.type)??"obstacle"} (clear ${y.d.toFixed(2)} m)`))}}u.length&&(r.stats.collisionCount+=u.length,r.stats.collisions.push(...u),r.stats.collisions.length>60&&r.stats.collisions.splice(0,r.stats.collisions.length-60))}function Sp(r,l,i){if(r.kind==="circle"){const E=Math.hypot(l-r.x,i-r.y);return{x:r.x,y:r.y,d:E}}const u=l-r.x,d=i-r.y,h=Math.cos(r.angle),f=Math.sin(r.angle),g=u*h+d*f,p=-u*f+d*h,v=$t(g,-r.w/2,r.w/2),x=$t(p,-r.h/2,r.h/2),m=g-v,y=p-x,k=Math.hypot(m,y)||1e-9;return{x:r.x+v*h-x*f,y:r.y+v*f+x*h,d:k}}function Mp(r){let l=0,i=0,u=1/0,d=1/0,h=0;const f=r.drones.length;for(const p of r.drones){const v=Math.hypot(p.slotPos.x-p.x,p.slotPos.y-p.y);l=Math.max(l,v),i=Math.max(i,Math.abs(p.off)),h+=p.speedAt;for(const x of r.drones)x!==p&&(u=Math.min(u,Math.hypot(p.x-x.x,p.y-x.y)));for(const x of r.obstaclePrims)d=Math.min(d,Ec(p.x,p.y,x)-(x.r??0))}const g={t:r.time,maxForm:l,maxOff:i,minSep:u,minClear:d,avgSpeed:h/f,laps:r.drones.reduce((p,v)=>p+v.lap,0),collisions:r.stats.collisionCount};r.stats.conf=g,r.stats.samples.push(g),r.stats.samples.length>2400&&r.stats.samples.shift(),u<.9&&r.stats.nearDrone++,d<.9&&r.stats.nearObs++}function ti(r,l){const i={...r};for(const u in l)l[u]&&typeof l[u]=="object"&&!Array.isArray(l[u])?i[u]=ti(r[u]||{},l[u]):i[u]=l[u];return i}const Ko=["#61affe","#f78c6c","#c3e88d","#ffcb6b","#ff5370","#bb9af7","#7fdbca","#f07178"],bp="#0d1117",Pp="#3f4a5c",_p="rgba(240,160,32,0.8)",Gl="#ff5c5c",Cp="#ffb020",Zl="#7fdbca",Ep="#33cc99",Tp=Cp,Go={slot:"#33cc99",sep:"#ff5370",damp:"#8892a0",safety:"#ffcb6b"};function Np(r,l,i={}){var $,R,q,B;const u=i.w,d=i.h;r.fillStyle=bp,r.fillRect(0,0,u,d);const h=l.course.bounds,f=34,g=(u-f*2)/(h.maxX-h.minX),p=(d-f*2)/(h.maxY-h.minY),v=Math.min(g,p),x=!!i.follow;let m,y,k;if(x){m=v*5.5;const j=l.centroid;y=u/2-j.x*m,k=d/2-j.y*m}else m=v,y=(u-(h.maxX-h.minX)*m)/2-h.minX*m,k=(d-(h.maxY-h.minY)*m)/2-h.minY*m;const E=j=>y+j*m,b=j=>k+j*m;r.strokeStyle=Pp,r.lineWidth=3,r.lineCap="round",r.lineJoin="round",cc(r,l.query.samples,E,b),r.strokeStyle="rgba(96,108,128,0.35)",r.lineWidth=1,dc(r,l.query,E,b,l.params.course.trackWidth),dc(r,l.query,E,b,-l.params.course.trackWidth),r.fillStyle="rgba(170,185,210,0.55)",l.query.samples.forEach((j,Q)=>{Q%20===0&&(r.beginPath(),r.arc(E(j.x),b(j.y),2,0,Math.PI*2),r.fill())});for(const j of l.obstacles)Lc(r,j,E,b,m,Gl);l.scene&&l.scene.centreline.length&&(r.strokeStyle=_p,r.lineWidth=2,r.setLineDash([7,5]),cc(r,l.scene.centreline,E,b),r.setLineDash([]));for(const j of(($=l.model)==null?void 0:$.obstacles)??[])Rp(r,j,E,b,m,Tp);const z=l.centroid;if(r.strokeStyle=Zl,r.lineWidth=2,fc(r,E(z.x),b(z.y),5),l.plan&&Math.abs(l.plan.vx)+Math.abs(l.plan.vy)>.05){const j=l.plan,Q=Math.hypot(j.vx,j.vy),X=Math.min(64,Math.max(7,Q*9));pc(r,E(z.x),b(z.y),j.vx/Q*X,j.vy/Q*X,Zl)}(R=l.plan)!=null&&R.detour&&(r.strokeStyle="#ff9f43",fc(r,E(l.plan.detour.x),b(l.plan.detour.y),6));for(const j of l.drones){const Q=E(j.x),X=b(j.y),V=Ko[j.id%Ko.length];r.beginPath(),r.arc(Q,X,6,0,Math.PI*2),r.fillStyle=V,r.fill(),r.lineWidth=2,r.strokeStyle="#ffffff",r.stroke()}const L=i.terms;if(L)for(const j of l.drones){const Q=j.terms;if(Q)for(const[X,V]of Object.entries(Go)){if(!L[X])continue;const Z=Q[X],ve=Math.hypot((Z==null?void 0:Z.vx)??0,(Z==null?void 0:Z.vy)??0);if(ve<.08)continue;const xe=Math.min(64,Math.max(7,ve*9)),Se=Z.vx/ve*xe,me=Z.vy/ve*xe;pc(r,E(j.x),b(j.y),Se,me,V)}}i.showFormation!==!1&&jp(r,l,E,b,m),x&&Lp(r,l,u,d,h,m);const O=l.time;for(const j of((q=l.stats)==null?void 0:q.collisions)??[]){const Q=O-j.t;if(Q<0||Q>1)continue;const X=1-Q;r.strokeStyle=`rgba(255,83,112,${(.35+.65*X).toFixed(2)})`,r.lineWidth=2,r.beginPath(),r.arc(E(j.x),b(j.y),10+(1-X)*8,0,Math.PI*2),r.stroke(),r.strokeStyle=`rgba(255,83,112,${(.2+.5*X).toFixed(2)})`,r.beginPath(),r.moveTo(E(j.x)-6,b(j.y)-6),r.lineTo(E(j.x)+6,b(j.y)+6),r.moveTo(E(j.x)+6,b(j.y)-6),r.lineTo(E(j.x)-6,b(j.y)+6),r.stroke()}for(const j of((B=l.stats)==null?void 0:B.nearEvents)??[]){const Q=O-j.t;if(Q<0||Q>.6)continue;const X=1-Q/.6;r.strokeStyle=`rgba(255,176,32,${(.25+.6*X).toFixed(2)})`,r.lineWidth=1.5,r.beginPath(),r.arc(E(j.x),b(j.y),8+(1-X)*6,0,Math.PI*2),r.stroke()}}function Lp(r,l,i,u,d,h){const g=Math.round(150*(d.maxY-d.minY)/(d.maxX-d.minX))+10,p=i-150-12,v=u-g-12,x=b=>p+(b-d.minX)/(d.maxX-d.minX)*140,m=b=>v+8+(b-d.minY)/(d.maxY-d.minY)*(g-18);r.fillStyle="rgba(13,17,23,0.82)",r.strokeStyle="rgba(42,50,61,0.9)",r.lineWidth=1,r.beginPath(),r.rect(p,v,150,g),r.fill(),r.stroke(),r.strokeStyle="rgba(95,110,135,0.5)",r.beginPath();for(let b=0;b<l.query.samples.length;b++){const z=l.query.samples[b];b===0?r.moveTo(x(z.x),m(z.y)):r.lineTo(x(z.x),m(z.y))}r.closePath(),r.stroke();const y=i/h*.6,k=u/h*.6,E=l.centroid;r.strokeStyle="rgba(97,175,254,0.8)",r.strokeRect(x(E.x-y/2),m(E.y-k/2),y/(d.maxX-d.minX)*140,k/(d.maxY-d.minY)*(g-18));for(const b of l.drones)r.fillStyle=Ko[b.id%Ko.length],r.fillRect(x(b.x)-2,m(b.y)-2,4,4);r.fillStyle=Zl,r.beginPath(),r.arc(x(E.x),m(E.y),3,0,Math.PI*2),r.fill()}function jp(r,l,i,u,d){const h=l.drones,f=h.length,g=l.params.safety.sep,p=Ep,v="rgba(214,224,240,0.55)",x=m=>m<.5?"#33cc99":m<2?"#ffb020":"#ff5370";r.strokeStyle=p,r.lineWidth=1.2,r.setLineDash([5,4]),r.beginPath();for(let m=0;m<f;m++){const y=h[m].slotPos;m===0?r.moveTo(i(y.x),u(y.y)):r.lineTo(i(y.x),u(y.y))}f>2&&r.closePath(),r.stroke(),r.setLineDash([]);for(const m of h){const y=i(m.slotPos.x),k=u(m.slotPos.y);r.strokeStyle=p,r.lineWidth=1.2,r.beginPath(),r.moveTo(y-5,k),r.lineTo(y+5,k),r.moveTo(y,k-5),r.lineTo(y,k+5),r.stroke(),r.fillStyle="rgba(51,204,153,0.9)",r.font="9px ui-monospace, Menlo, monospace",r.textAlign="left",r.fillText(`#${m.id}`,y+7,k+4)}if(f>2){r.strokeStyle=v,r.lineWidth=1,r.beginPath();for(let m=0;m<f;m++){const y=h[m];m===0?r.moveTo(i(y.x),u(y.y)):r.lineTo(i(y.x),u(y.y))}r.closePath(),r.stroke()}for(const m of h){const y=Math.hypot(m.slotPos.x-m.x,m.slotPos.y-m.y);r.strokeStyle=x(y),r.lineWidth=1.5,r.setLineDash([3,3]),r.beginPath(),r.moveTo(i(m.x),u(m.y)),r.lineTo(i(m.slotPos.x),u(m.slotPos.y)),r.stroke()}r.setLineDash([]);for(const m of h){let y=!1;for(const k of h)if(k!==m&&Math.hypot(m.x-k.x,m.y-k.y)<g){y=!0;break}if(r.strokeStyle=y?"#ff5370":"rgba(125,145,170,0.7)",r.lineWidth=y?2:1,r.setLineDash([3,3]),r.beginPath(),r.arc(i(m.x),u(m.y),Math.max(3,g*d),0,Math.PI*2),r.stroke(),y){r.setLineDash([2,2]);for(const k of h){if(k===m)continue;Math.hypot(m.x-k.x,m.y-k.y)<g&&(r.strokeStyle="#ff5370",r.beginPath(),r.moveTo(i(m.x),u(m.y)),r.lineTo(i(k.x),u(k.y)),r.stroke())}}}r.setLineDash([])}function cc(r,l,i,u){r.beginPath();let d=!0;for(const h of l)d?(r.moveTo(i(h.x),u(h.y)),d=!1):r.lineTo(i(h.x),u(h.y));r.stroke()}function dc(r,l,i,u,d){r.beginPath();let h=!0;const f=l.samples;for(let g=0;g<f.length;g+=2){const p=l.lateral(f[g].s,d);h?(r.moveTo(i(p.x),u(p.y)),h=!1):r.lineTo(i(p.x),u(p.y))}r.stroke()}function Lc(r,l,i,u,d,h){const f=i(l.x),g=u(l.y),p=h===Gl;if(r.strokeStyle=h,r.lineWidth=1.5,l.type==="block"){const v=l.len*d,x=l.width*d;if(r.save(),r.translate(f,g),r.rotate(l.heading),r.fillStyle=p?"#a4161a":"rgba(255,176,32,0.55)",r.fillRect(-v/2,-x/2,v,x),r.strokeRect(-v/2,-x/2,v,x),p){r.lineWidth=1,r.strokeStyle="rgba(255,190,90,0.55)",r.beginPath();const m=Math.max(2,Math.round(x/10));for(let y=-m;y<=m;y++)r.moveTo(-v/2,y*10),r.lineTo(v/2,y*10);r.stroke()}r.restore()}else if(l.type==="tunnel"){const v=l.heading,x=l.width/2+.25,m=h===Gl,y=l.length*d,k=Math.max(3,x*d);r.save(),r.translate(i(l.x),u(l.y)),r.rotate(v),r.fillStyle=m?"#0a7a56":"rgba(255,176,32,0.55)",r.strokeStyle=m?"#0ca678":"#ffb020",r.lineWidth=1.5,r.beginPath(),r.moveTo(-y/2,-k),r.arc(-y/2,0,k,-Math.PI/2,Math.PI/2),r.lineTo(y/2,k),r.arc(y/2,0,k,Math.PI/2,-Math.PI/2),r.closePath(),r.fill(),r.stroke();for(const E of[-1,1])r.fillStyle=m?"#064e38":"rgba(120,65,0,0.65)",r.beginPath(),r.ellipse(E*y/2,0,Math.max(1.5,k*.24),k*.92,0,0,Math.PI*2),r.fill(),r.strokeStyle=m?"rgba(12,166,120,0.95)":"#ffb020",r.lineWidth=1,r.stroke();r.restore()}}function Rp(r,l,i,u,d,h){Lc(r,l,i,u,d,h)}function fc(r,l,i,u){r.beginPath(),r.arc(l,i,u,0,Math.PI*2),r.stroke()}function pc(r,l,i,u,d,h){r.strokeStyle=h,r.lineWidth=1.6,r.beginPath(),r.moveTo(l,i),r.lineTo(l+u,i+d),r.stroke();const f=Math.atan2(d,u),g=5;r.fillStyle=h,r.beginPath(),r.moveTo(l+u,i+d),r.lineTo(l+u-g*Math.cos(f-.45),i+d-g*Math.sin(f-.45)),r.lineTo(l+u-g*Math.cos(f+.45),i+d-g*Math.sin(f+.45)),r.closePath(),r.fill()}function zp({getWorld:r,overlay:l=!0,follow:i=!1,terms:u=null}){const d=re.useRef(null),h=re.useRef(r);h.current=r;const f=re.useRef(l);f.current=l;const g=re.useRef(i);g.current=i;const p=re.useRef(u);return p.current=u,re.useEffect(()=>{const v=d.current,x=v.getContext("2d");let m=0;const y=()=>{const E=window.devicePixelRatio||1,b=v.getBoundingClientRect();v.width=b.width*E,v.height=b.height*E};y(),window.addEventListener("resize",y);const k=()=>{const E=h.current(),b=v.getBoundingClientRect(),z=window.devicePixelRatio||1,L=Math.max(1,Math.round(b.width*z)),O=Math.max(1,Math.round(b.height*z));(v.width!==L||v.height!==O)&&(v.width=L,v.height=O),E&&(x.setTransform(v.width/b.width,0,0,v.height/b.height,0,0),Np(x,E,{w:b.width,h:b.height,showFormation:f.current,follow:g.current,terms:p.current}),Op(x,E,b.width,b.height,p.current)),m=requestAnimationFrame(k)};return m=requestAnimationFrame(k),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",y)}},[]),_.jsx("canvas",{ref:d,className:"sim-canvas","aria-label":"race view"})}function Op(r,l,i,u,d){var v,x,m,y,k;r.font="11px ui-monospace, Menlo, monospace",r.fillStyle="rgba(13,17,23,0.75)";const h=d?Object.entries(Go).filter(([E])=>d[E]):[];r.fillRect(i-210,0,210,h.length?118:82),r.fillStyle="#8899a8",r.textAlign="left";const f=16;r.fillText(`mode ${((v=l.fm)==null?void 0:v.mode)??"-"}   speed ${(((x=l.plan)==null?void 0:x.speed)??0).toFixed(1)}m/s`,i-198,f),r.fillText(`centroid lap ${l.centroidArc!=null&&l.course?(l.centroidArc/l.course.length).toFixed(2):0}`,i-198,f+15),r.fillText(`centroid s ${((m=l.centroid)==null?void 0:m.s)!=null?l.centroid.s.toFixed(0):"-"}`,i-198,f+30);const g=(y=l.params)==null?void 0:y.perception;r.fillText(`perception ${(g==null?void 0:g.mode)??"-"}`,i-198,f+45);const p=((k=l.drones)==null?void 0:k.filter(E=>E.lap>0).length)??0;r.fillText(`drones landed ${p}`,i-198,f+60),h.length&&(r.fillText("command arrows:",i-198,f+82),h.forEach(([E,b],z)=>{const L=i-198+z*40;r.strokeStyle=b,r.lineWidth=2,r.beginPath(),r.moveTo(L,f+96),r.lineTo(L+12,f+96),r.stroke(),r.fillStyle="#8899a8",r.fillText(E,L+15,f+99)}))}const jc=Math.PI/180,Ip=.6,Rc=-8*jc,Fp=75*jc,an={sky:["#0a0f17","#18233a"],grid:"rgba(120,140,165,0.14)",track:"rgba(58,70,92,0.9)",perceived:"#ffb020",model:"#3db9ff",trueObs:"rgba(255,92,92,0.55)",seenObs:"#ffb020",drone:"#61affe",centroid:"#7fdbca"},Dp=Rc;function Ap(r,l,i,u={}){const d=u.yaw??Math.atan2(r.vy,r.vx),h=u.pitch??Rc,f=u.zoom??1,g=Math.cos(d),p=Math.sin(d),v=Math.cos(h),x=Math.sin(h),m={x:v*g,y:v*p,z:x},y={x:p,y:-g,z:0},k={x:y.y*m.z-y.z*m.y,y:y.z*m.x-y.x*m.z,z:y.x*m.y-y.y*m.x},E=i/2/Math.tan(Fp/2)*f;return{x:r.x,y:r.y,z:Ip,yaw:d,F:m,R:y,U:k,f:E,W:l,H:i}}function Ue(r,l,i,u){const d=l-r.x,h=i-r.y,f=u-r.z,g=d*r.F.x+h*r.F.y+f*r.F.z;if(g<.12)return null;const p=d*r.R.x+h*r.R.y+f*r.R.z,v=d*r.U.x+h*r.U.y+f*r.U.z;return{sx:r.W/2+p/g*r.f,sy:r.H/2-v/g*r.f,d:g}}function $p(r){const l=1/Math.hypot(r.F.x,r.F.y),i=r.F.x*l,u=r.F.y*l,d=i*r.F.x+u*r.F.y,h=i*r.U.x+u*r.U.y;return r.H/2-r.f*(h/d)}function Bp(r,l,i,u={}){r.save(),r.clearRect(0,0,i.W,i.H);const d=Math.min(i.H-1,Math.max(0,$p(i))),h=r.createLinearGradient(0,0,0,d);h.addColorStop(0,an.sky[0]),h.addColorStop(1,an.sky[1]),r.fillStyle=h,r.fillRect(0,0,i.W,d),r.fillStyle="#10161f",r.fillRect(0,d,i.W,i.H-d);const f=[],g=[];Up(r,i),Wp(r,l,i,g);for(let v=0;v<l.scene.centreline.length;v+=1){const x=l.scene.centreline[v],m=Ue(i,x.x,x.y,0);m&&f.push({z:m.d,draw:y=>{y.fillStyle=an.perceived,y.globalAlpha=.95;const k=Math.min(6,Math.max(3,i.f*.06/Math.max(m.d,1)));Zp(y,m.sx,m.sy,k),y.globalAlpha=1}})}const p=l.model.line.map(v=>Ue(i,v.x,v.y,0)).filter(Boolean);if(p.length>1){const v=p.reduce((x,m)=>x+m.d,0)/p.length;f.push({z:v,draw:x=>Gp(x,p,an.model,1.6)})}for(const v of l.obstacles)yc(f,v,i,!0);for(const v of l.model.obstacles)yc(f,v,i,!1);u.showFormation!==!1&&Kp(f,l,i,u.selfId);for(const v of l.drones)u.selfId!==void 0&&v.id===u.selfId||Qp(f,v,i);Xp(f,l,i),u.terms&&Object.values(u.terms).some(Boolean)&&Yp(f,l,i,u.terms),g.sort((v,x)=>x.z-v.z);for(const v of g)v.draw(r);f.sort((v,x)=>x.z-v.z);for(const v of f)v.draw(r);r.restore()}function Up(r,l,i){r.strokeStyle=an.grid,r.lineWidth=1;const d=5,h=Math.floor((l.x-46)/d)*d;for(let g=h;g<=l.x+46;g+=d)hc(r,l,mc(l,g,l.y-46,g,l.y+46));const f=Math.floor((l.y-46)/d)*d;for(let g=f;g<=l.y+46;g+=d)hc(r,l,mc(l,l.x-46,g,l.x+46,g))}function hc(r,l,i){if(!i)return;const u=Hp(i,l),d=Math.max(0,Math.min(1,(u-1)/1.5));if(d<=0)return;const h=Ue(l,i.x1,i.y1,0),f=Ue(l,i.x2,i.y2,0);!h||!f||(r.globalAlpha=d,r.beginPath(),r.moveTo(h.sx,h.sy),r.lineTo(f.sx,f.sy),r.stroke(),r.globalAlpha=1)}function Hp(r,l){const i=r.x2-r.x1,u=r.y2-r.y1,d=i*i+u*u||1e-9;let h=((l.x-r.x1)*i+(l.y-r.y1)*u)/d;return h=Math.max(0,Math.min(1,h)),Math.hypot(l.x-(r.x1+i*h),l.y-(r.y1+u*h))}function mc(r,l,i,u,d){const h=(y,k)=>(y-r.x)*r.F.x+(k-r.y)*r.F.y-r.z*r.F.z,f=h(l,i),g=h(u,d),p=.12;if(f>=p&&g>=p)return{x1:l,y1:i,x2:u,y2:d};if(f<p&&g<p)return null;const v=(p-f)/(g-f),x=l+(u-l)*v,m=i+(d-i)*v;return f<p?{x1:x,y1:m,x2:u,y2:d}:{x1:l,y1:i,x2:x,y2:m}}function Tr(r,l){const u=f=>(f.x-l.x)*l.F.x+(f.y-l.y)*l.F.y+(f.z-l.z)*l.F.z,d=[],h=r.length;for(let f=0;f<h;f++){const g=r[f],p=r[(f+1)%h],v=u(g),x=u(p),m=v>=.12;if(m&&d.push(g),m!==x>=.12){const y=(.12-v)/(x-v);d.push({x:g.x+(p.x-g.x)*y,y:g.y+(p.y-g.y)*y,z:g.z+(p.z-g.z)*y})}}return d}function Wp(r,l,i,u){var m,y;const d=(((y=(m=l.params)==null?void 0:m.course)==null?void 0:y.trackWidth)??5)/2-.1,h=l.course.centerline,f=Math.min(h.length,720);let g=0,p=1/0;for(let k=0;k<f;k++){const E=h[k],b=(E.x-i.x)**2+(E.y-i.y)**2;b<p&&(p=b,g=k)}const v=Math.max(0,g-20),x=Math.min(f-1,g+16);if(x-v>=2){const k=L=>{const O=h[L],$=h[Math.min(L+1,f-1)],R=$.x-O.x,q=$.y-O.y,B=Math.hypot(R,q)||1e-6;return{x:-q/B*d,y:R/B*d}},E=[];for(let L=v;L<=x;L++){const O=k(L);E.push({x:h[L].x+O.x,y:h[L].y+O.y,z:0})}for(let L=x;L>=v;L--){const O=k(L);E.push({x:h[L].x-O.x,y:h[L].y-O.y,z:0})}const z=Tr(E,i).map(L=>Ue(i,L.x,L.y,L.z)).filter(Boolean);if(z.length>=3){const L=z.reduce((O,$)=>O+$.d,0)/z.length;u.push({z:L,draw:O=>{O.globalAlpha=1,O.fillStyle=an.track,O.beginPath(),O.moveTo(Ho(z[0].sx,i.W),Ho(z[0].sy,i.H));for(let $=1;$<z.length;$++)O.lineTo(Ho(z[$].sx,i.W),Ho(z[$].sy,i.H));O.closePath(),O.fill(),O.globalAlpha=1}})}}for(let k=x;k+1<f;k++){const E=h[k],b=h[k+1],z=b.x-E.x,L=b.y-E.y,O=Math.hypot(z,L)||1e-6,$=-L/O*d,R=z/O*d,q=[{x:E.x+$,y:E.y+R,z:0},{x:E.x-$,y:E.y-R,z:0},{x:b.x-$,y:b.y-R,z:0},{x:b.x+$,y:b.y+R,z:0}];let B=0,j=!0;const Q=[];for(const V of q){const Z=Ue(i,V.x,V.y,V.z);if(!Z){j=!1;break}B+=Z.d,Q.push(Z)}if(!j)continue;const X=B/4;X>160||X<2||u.push({z:X,draw:V=>{V.globalAlpha=Math.max(0,Math.min(1,(160-X)/90)),V.fillStyle=an.track,V.beginPath(),V.moveTo(Q[0].sx,Q[0].sy);for(let Z=1;Z<Q.length;Z++)V.lineTo(Q[Z].sx,Q[Z].sy);V.closePath(),V.fill(),V.globalAlpha=1}})}}function Ho(r,l){return Math.max(0,Math.min(l,r))}function yc(r,l,i,u){const d=u?an.trueObs:an.seenObs;if(l.type==="tunnel"){Vp(r,l,i,u);return}l.type==="block"&&qp(r,l.x,l.y,l.heading,l.len,l.width,.9,i,u?"#a4161a":d)}function Vp(r,l,i,u){const d=Math.cos(l.heading),h=Math.sin(l.heading),f=-h,g=d,p=l.width/2+.25,v=l.length,x=14,m=Math.max(4,Math.round(v/.8)),y=u?162:32,k=u?38:46,E=O=>{const $=[];for(let R=0;R<x;R++){const q=R/x*Math.PI*2;$.push({x:l.x+d*O+f*Math.cos(q)*p,y:l.y+h*O+g*Math.cos(q)*p,z:Math.sin(q)*p,a:q})}return $},b=[];for(let O=0;O<=m;O++)b.push(E(-v/2+v/m*O));const L=(i.x-l.x)*f+(i.y-l.y)*g>=0?1:-1;for(let O=0;O<m;O++)for(let $=0;$<x;$++){const R=($+1)%x,B=Tr([b[O][$],b[O][R],b[O+1][R],b[O+1][$]],i).map(V=>Ue(i,V.x,V.y,V.z)).filter(Boolean);if(B.length<3)continue;let j=1/0;for(const V of B)j=Math.min(j,V.d);if(j>95)continue;const Q=(b[O][$].a+b[O][R].a)/2,X=.5+.5*Math.max(0,Math.cos(Q)*L);r.push({z:j,draw:V=>{V.globalAlpha=u?1:.8,V.fillStyle=`hsl(${y}, 70%, ${(k+24*X).toFixed(0)}%)`,V.beginPath(),V.moveTo(B[0].sx,B[0].sy);for(let Z=1;Z<B.length;Z++)V.lineTo(B[Z].sx,B[Z].sy);V.closePath(),V.fill(),V.globalAlpha=1}})}for(const O of[0,m]){const R=Tr(b[O],i).map(B=>Ue(i,B.x,B.y,B.z)).filter(Boolean);if(R.length<3)continue;const q=R.reduce((B,j)=>B+j.d,0)/R.length;q>95||r.push({z:q,draw:B=>{B.strokeStyle=`hsl(${y}, 75%, ${u?55:60}%)`,B.lineWidth=u?2:1.5,B.beginPath(),B.moveTo(R[0].sx,R[0].sy);for(let j=1;j<R.length;j++)B.lineTo(R[j].sx,R[j].sy);B.closePath(),B.stroke()}})}}function qp(r,l,i,u,d,h,f,g,p,v){const x=Math.cos(u),m=Math.sin(u),y=(L,O,$)=>({x:l+L*x-O*m,y:i+L*m+O*x,z:$}),k=[y(-d/2,-h/2,0),y(d/2,-h/2,0),y(d/2,h/2,0),y(-d/2,h/2,0)],E=1,b=(L,O)=>{const R=Tr(L,g).map(B=>Ue(g,B.x,B.y,B.z)).filter(Boolean);if(R.length<3)return;let q=1/0;for(const B of R)q=Math.min(q,B.d);r.push({z:q,draw:B=>{B.globalAlpha=E,B.fillStyle=O,B.beginPath(),B.moveTo(R[0].sx,R[0].sy);for(let j=1;j<R.length;j++)B.lineTo(R[j].sx,R[j].sy);B.closePath(),B.fill(),B.globalAlpha=1}})};b(k,p);const z=gc(p,.72);for(let L=0;L<4;L++){const O=(L+1)%4;b([k[L],k[O],{...k[O],z:f},{...k[L],z:f}],z)}b(k.map(L=>({...L,z:f})),gc(p,1.18))}function gc(r,l){const i=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(r);if(!i)return r;const u=[0,1,2].map(d=>Math.round(Math.min(255,parseInt(i[d+1],16)*l)));return`rgb(${u[0]},${u[1]},${u[2]})`}function Qp(r,l,i){const u=Ue(i,l.x,l.y,.35);if(!u)return;const d=Math.max(0,Math.min(1,(u.d-.15)/.55)),h=Math.max(4,Math.min(i.W-4,u.sx)),f=Math.max(4,Math.min(i.H-4,u.sy));r.push({z:u.d,draw:g=>{const p=Math.max(2,Math.min(10,i.f*.3/Math.max(u.d,.4)));g.globalAlpha=d,g.fillStyle=an.drone,g.beginPath(),g.arc(h,f,p,0,Math.PI*2),g.fill(),g.fillStyle="#0d1117",g.font="bold 10px ui-monospace, Menlo, monospace",g.textAlign="center",g.fillText(`#${l.id}`,h,f-p-3),g.textAlign="left",g.globalAlpha=1}})}function Yp(r,l,i,u){for(const d of l.drones){const h=d.terms;if(h)for(const[f,g]of Object.entries(Go)){if(!u[f])continue;const p=h[f],v=Math.hypot((p==null?void 0:p.vx)??0,(p==null?void 0:p.vy)??0);if(v<.08)continue;const x=Math.min(3.5,Math.max(.5,v*.9));zc(r,i,d.x,d.y,.35,d.x+p.vx/v*x,d.y+p.vy/v*x,.35,g)}}}function zc(r,l,i,u,d,h,f,g,p){const v=Ue(l,i,u,d),x=Ue(l,h,f,g);!v||!x||r.push({z:Math.min(v.d,x.d),draw:m=>{m.strokeStyle=p,m.lineWidth=2,m.beginPath(),m.moveTo(v.sx,v.sy),m.lineTo(x.sx,x.sy),m.stroke();const y=Math.atan2(x.sy-v.sy,x.sx-v.sx),k=6;m.fillStyle=p,m.beginPath(),m.moveTo(x.sx,x.sy),m.lineTo(x.sx-k*Math.cos(y-.45),x.sy-k*Math.sin(y-.45)),m.lineTo(x.sx-k*Math.cos(y+.45),x.sy-k*Math.sin(y+.45)),m.closePath(),m.fill()}})}function Kp(r,l,i,u){const d=l.drones,h=l.params.safety.sep,f=v=>Ue(i,v.slotPos.x,v.slotPos.y,0),g=v=>Ue(i,v.x,v.y,0);for(const v of d){if(v.id===u)continue;const x=f(v);if(!x)continue;r.push({z:x.d,draw:y=>{const k=Math.max(2,Math.min(8,i.f*.12/x.d)),E=Ue(i,v.slotPos.x,v.slotPos.y,.7);y.strokeStyle="rgba(51,204,153,0.9)",y.lineWidth=1.5,y.beginPath(),y.moveTo(x.sx-k,x.sy),y.lineTo(x.sx+k,x.sy),y.moveTo(x.sx,x.sy-k),y.lineTo(x.sx,x.sy+k),E&&(y.moveTo(x.sx,x.sy),y.lineTo(E.sx,E.sy)),y.stroke(),y.fillStyle="rgba(51,204,153,0.9)",y.font="10px ui-monospace, Menlo, monospace",y.fillText(`slot ${v.id}`,x.sx+k+4,x.sy+3)}});const m=g(v);if(m){const y=Math.hypot(v.slotPos.x-v.x,v.slotPos.y-v.y),k=y<.5?"rgba(51,204,153,0.8)":y<2?"rgba(255,176,32,0.85)":"rgba(255,83,112,0.9)";r.push({z:Math.min(m.d,x.d),draw:E=>{E.strokeStyle=k,E.lineWidth=1,E.setLineDash([3,3]),E.beginPath(),E.moveTo(m.sx,m.sy),E.lineTo(x.sx,x.sy),E.stroke(),E.setLineDash([])}})}}const p=(v,x,m)=>{const y=[];for(let b=0;b<16;b++){const z=b/16*Math.PI*2;y.push({x:v+Math.cos(z)*m,y:x+Math.sin(z)*m,z:0})}const k=Tr(y,i),E=[];for(const b of k){const z=Ue(i,b.x,b.y,b.z);z&&E.push(z)}return E};for(const v of d){if(v.id===u)continue;const x=p(v.x,v.y,h);if(x.length<3)continue;let m=!1;for(const y of d)if(y!==v&&Math.hypot(v.x-y.x,v.y-y.y)<h){m=!0;break}r.push({z:x.reduce((y,k)=>y+k.d,0)/x.length,draw:y=>{y.strokeStyle=m?"rgba(255,83,112,0.95)":"rgba(125,145,170,0.65)",y.lineWidth=m?2:1,y.beginPath(),y.moveTo(x[0].sx,x[0].sy);for(let k=1;k<x.length;k++)y.lineTo(x[k].sx,x[k].sy);y.closePath(),y.stroke()}})}}function Xp(r,l,i){const u=l.centroid,d=Ue(i,u.x,u.y,0);d&&r.push({z:d.d,draw:f=>{f.strokeStyle=an.centroid,f.lineWidth=2;const g=Math.max(3,Math.min(12,i.f*.28/d.d));f.beginPath(),f.arc(d.sx,d.sy,g,0,Math.PI*2),f.stroke(),f.fillStyle=an.centroid,f.font="10px ui-monospace, Menlo, monospace",f.fillText("centroid",d.sx+g+4,d.sy+3)}});const h=l.plan;if(h&&Math.abs(h.vx)+Math.abs(h.vy)>.05){const f=Math.hypot(h.vx,h.vy),g=Math.min(6,Math.max(.5,f*.35));zc(r,i,u.x,u.y,.35,u.x+h.vx/f*g,u.y+h.vy/f*g,.35,an.centroid)}}function Gp(r,l,i,u){r.strokeStyle=i,r.lineWidth=u,r.beginPath(),r.moveTo(l[0].sx,l[0].sy);for(let d=1;d<l.length;d++)r.lineTo(l[d].sx,l[d].sy);r.stroke()}function Zp(r,l,i,u){r.beginPath(),r.moveTo(l,i-u),r.lineTo(l+u,i),r.lineTo(l,i+u),r.lineTo(l-u,i),r.closePath(),r.fill()}function Jp(r,l,i){var f;let d=16;r.font="12px ui-monospace, Menlo, monospace",r.textAlign="left";const h=[`FPV  drone #${i.id}  mode ${((f=l.fm)==null?void 0:f.mode)??"-"}`,`speed ${i.speedAt.toFixed(1)} m/s   s ${i.s.toFixed(0)} m   lap ${i.lap}`,`perception ${(l.params.perception.freq??30).toFixed(0)} Hz  range ${l.params.perception.range_m.toFixed(0)} m  σ ${l.params.perception.lateral_noise.toFixed(1)}`,`track-model tape trust ${l.params.trackModel.tape_trust.toFixed(2)}  obstacles tracked ${l.model.obstacles.length}`,`planner ${l.plan.speed.toFixed(1)} m/s  lookahead ${l.params.planner.lookahead.toFixed(1)}  detour ${l.plan.detour?"ON":"off"}`,`comms ${l.comms.dropped.size?`drop ${[...l.comms.dropped].join(",")}`:"ok"}`];for(const g of h){r.fillStyle="rgba(13,17,23,0.78)";const p=r.measureText(g).width;r.fillRect(6,d-11,p+10,15),r.fillStyle="#d7e0ec",r.fillText(g,12,d),d+=17}}const Wo=(r,l,i)=>Math.max(l,Math.min(i,r));function eh({getWorld:r,droneId:l,overlay:i=!0,terms:u=null}){const d=re.useRef(null),h=re.useRef(r);h.current=r;const f=re.useRef(l);f.current=l;const g=re.useRef(i);g.current=i;const p=re.useRef(u);p.current=u;const v=re.useRef({yaw:null,t:0,panYaw:0,panPitch:0,zoom:1}),x=re.useRef(null),m=re.useRef(new Map),y=re.useRef(null);return re.useEffect(()=>{const k=d.current,E=k.getContext("2d");let b=0;const z=()=>{const j=window.devicePixelRatio||1,Q=k.getBoundingClientRect();k.width=Math.max(1,Math.round(Q.width*j)),k.height=Math.max(1,Math.round(Q.height*j))};z(),window.addEventListener("resize",z);const L=j=>{j.preventDefault();const Q=v.current;Q.zoom=Wo(Q.zoom*Math.exp(-j.deltaY*.0012),.4,6)},O=j=>{var X;const Q=m.current;if(Q.set(j.pointerId,{x:j.clientX,y:j.clientY}),Q.size===2){const[V,Z]=[...Q.values()];y.current={dist:Math.hypot(V.x-Z.x,V.y-Z.y),mx:(V.x+Z.x)/2,my:(V.y+Z.y)/2},x.current=null}else Q.size===1&&(x.current={x:j.clientX,y:j.clientY});try{(X=k.setPointerCapture)==null||X.call(k,j.pointerId)}catch{}k.classList.add("panning")},$=j=>{const Q=m.current;if(!Q.has(j.pointerId))return;Q.set(j.pointerId,{x:j.clientX,y:j.clientY});const X=v.current;if(Q.size===2){const[V,Z]=[...Q.values()],ve=Math.hypot(V.x-Z.x,V.y-Z.y),xe=(V.x+Z.x)/2,Se=(V.y+Z.y)/2,me=y.current;me&&me.dist>0&&(X.zoom=Wo(X.zoom*(ve/me.dist),.4,6),X.panYaw+=(xe-me.mx)*.006,X.panPitch=Wo(X.panPitch+(Se-me.my)*.006,-1.15,1.15)),y.current={dist:ve,mx:xe,my:Se}}else if(Q.size===1){const V=x.current;V&&(X.panYaw+=(j.clientX-V.x)*.006,X.panPitch=Wo(X.panPitch+(j.clientY-V.y)*.006,-1.15,1.15),V.x=j.clientX,V.y=j.clientY)}},R=j=>{if(m.current.delete(j.pointerId),y.current=null,m.current.size===1){const[Q]=[...m.current.values()];x.current={x:Q.x,y:Q.y}}else x.current=null;k.classList.remove("panning")},q=()=>{const j=v.current;j.panYaw=0,j.panPitch=0,j.zoom=1};k.addEventListener("wheel",L,{passive:!1}),k.addEventListener("pointerdown",O),k.addEventListener("pointermove",$),k.addEventListener("pointerup",R),k.addEventListener("pointercancel",R),k.addEventListener("dblclick",q);const B=j=>{var xe,Se;const Q=h.current(),X=k.getBoundingClientRect(),V=window.devicePixelRatio||1,Z=Math.max(1,Math.round(X.width*V)),ve=Math.max(1,Math.round(X.height*V));if((k.width!==Z||k.height!==ve)&&(k.width=Z,k.height=ve),Q&&X.width>0&&X.height>0){const me=((xe=Q.drones)==null?void 0:xe[f.current])??((Se=Q.drones)==null?void 0:Se[0]);if(me){const we=Math.hypot(me.vy,me.vx)>1.2?Math.atan2(me.vy,me.vx):Q.query.pointAt(me.s).heading,H=v.current;if(H.yaw===null)H.yaw=we;else{let Y=we-H.yaw;for(;Y>Math.PI;)Y-=Math.PI*2;for(;Y<-Math.PI;)Y+=Math.PI*2;const P=Math.max(.004,Math.min(.05,(j-H.t)/1e3));H.yaw+=Y*(1-Math.exp(-P/.22))}H.t=j;const oe=Ap(me,X.width,X.height,{yaw:H.yaw+H.panYaw,pitch:Dp+H.panPitch,zoom:H.zoom});E.setTransform(k.width/X.width,0,0,k.height/X.height,0,0),Bp(E,Q,oe,{selfId:me.id,showFormation:g.current,terms:p.current}),Jp(E,Q,me)}}b=requestAnimationFrame(B)};return b=requestAnimationFrame(B),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",z),k.removeEventListener("wheel",L),k.removeEventListener("pointerdown",O),k.removeEventListener("pointermove",$),k.removeEventListener("pointerup",R),k.removeEventListener("pointercancel",R),k.removeEventListener("dblclick",q)}},[]),_.jsxs(_.Fragment,{children:[_.jsx("canvas",{ref:d,className:"sim-canvas fpv-canvas interactive","aria-label":"FPV view"}),_.jsx("div",{className:"fpv-hint",children:"drag or pinch to pan · pinch/wheel to zoom · double-tap to reset"})]})}const vc=["#61affe","#f78c6c","#c3e88d","#ffcb6b","#ff5370","#bb9af7","#7fdbca","#f07178"];function nh({getWorld:r,droneId:l}){const i=re.useRef(null),u=re.useRef(null),d=re.useRef(r);d.current=r;const h=re.useRef(l);return h.current=l,re.useEffect(()=>{const f=i.current,g=f.getContext("2d");let p=0;const v=()=>{const m=window.devicePixelRatio||1,y=f.getBoundingClientRect();f.width=Math.max(1,Math.round(y.width*m)),f.height=Math.max(1,Math.round(y.height*m))};v(),window.addEventListener("resize",v);const x=()=>{const m=d.current();if(m){const y=f.getBoundingClientRect(),k=window.devicePixelRatio||1,E=Math.max(1,Math.round(y.width*k)),b=Math.max(1,Math.round(y.height*k));(f.width!==E||f.height!==b)&&(f.width=E,f.height=b),g.setTransform(f.width/y.width,0,0,f.height/y.height,0,0),th(g,m,y.width,y.height,h.current)}u.current&&(u.current.textContent=rh(d.current())),p=requestAnimationFrame(x)};return p=requestAnimationFrame(x),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",v)}},[]),_.jsxs("div",{className:"fpv-debug",children:[_.jsx("div",{className:"fpv-debug-head",children:"Perception · local model builder · comms — live"}),_.jsx("canvas",{ref:i,className:"fpv-map"}),_.jsx("pre",{ref:u,className:"fpv-stats"})]})}function th(r,l,i,u,d){r.clearRect(0,0,i,u),r.fillStyle="rgba(13,17,23,0.6)",r.fillRect(0,0,i,u);const h=l.course.bounds,f=2,g=y=>f+(y-h.minX)/(h.maxX-h.minX)*(i-f*2),p=y=>u-f-(y-h.minY)/(h.maxY-h.minY)*(u-f*2);r.strokeStyle="rgba(95,110,135,0.4)",r.lineWidth=1,r.beginPath();for(let y=0;y<l.course.centerline.length;y++){const k=l.course.centerline[y];y===0?r.moveTo(g(k.x),p(k.y)):r.lineTo(g(k.x),p(k.y))}r.closePath(),r.stroke();for(const y of l.obstacles)r.strokeStyle="rgba(255,92,92,0.5)",r.strokeRect(g(y.x)-2,p(y.y)-2,4,4);const v=l.drones[d]??l.drones[0];if(v){const k=Math.hypot(v.vy,v.vx)>.5?Math.atan2(v.vy,v.vx):l.query.pointAt(v.s).heading,E=l.params.perception.range_m,b=75*Math.PI/180/2,z=28;r.fillStyle="rgba(255,176,32,0.12)",r.strokeStyle="rgba(255,176,32,0.35)",r.beginPath(),r.moveTo(g(v.x),p(v.y));for(let L=0;L<=z;L++){const O=k-b+L/z*2*b;r.lineTo(g(v.x+Math.cos(O)*E),p(v.y+Math.sin(O)*E))}r.closePath(),r.fill(),r.stroke()}r.fillStyle="#ffb020";for(const y of l.scene.centreline)r.fillRect(g(y.x)-1.5,p(y.y)-1.5,3,3);r.strokeStyle="#3db9ff",r.lineWidth=1.5,r.beginPath();for(let y=0;y<l.model.line.length;y++){const k=l.model.line[y];y===0?r.moveTo(g(k.x),p(k.y)):r.lineTo(g(k.x),p(k.y))}r.stroke();for(const y of l.model.obstacles)r.strokeStyle="#ffb020",r.lineWidth=1.5,r.strokeRect(g(y.x)-3,p(y.y)-3,6,6),r.fillStyle="rgba(255,176,32,0.9)",r.font="9px ui-monospace, Menlo, monospace",r.fillText(`${y.type} ${(y.confidence??0).toFixed(2)}`,g(y.x)+4,p(y.y)-3);r.fillStyle="rgba(51,204,153,0.6)";for(const y of l.drones)r.strokeStyle="rgba(51,204,153,0.5)",r.strokeRect(g(y.slotPos.x)-2,p(y.slotPos.y)-2,4,4);r.strokeStyle="#7fdbca",r.lineWidth=1.5;const x=g(l.centroid.x),m=p(l.centroid.y);if(r.beginPath(),r.moveTo(x-4,m),r.lineTo(x+4,m),r.moveTo(x,m-4),r.lineTo(x,m+4),r.stroke(),l.plan.detour){r.strokeStyle="#ff5370";const y=g(l.plan.detour.x),k=p(l.plan.detour.y);r.beginPath(),r.moveTo(y-4,k-4),r.lineTo(y+4,k+4),r.moveTo(y+4,k-4),r.lineTo(y-4,k+4),r.stroke()}for(const y of l.drones){const k=y.id===d;r.fillStyle=vc[y.id%vc.length],r.beginPath(),r.arc(g(y.x),p(y.y),k?3.5:2.5,0,Math.PI*2),r.fill(),k&&(r.strokeStyle="#ffffff",r.lineWidth=1,r.beginPath(),r.arc(g(y.x),p(y.y),6,0,Math.PI*2),r.stroke())}}function rh(r){if(!r)return"";const l=r.drones[0],i=r.scene,u=r.model,d=r.comms,h=r.params.perception,f=r.course.centerline,g=f.length?f[0].s:0;return f.length&&f[f.length-1].s,[`perception   frame s0=${i.s0.toFixed(0)}  pts=${i.centreline.length}  range=${i.range.toFixed(0)}m`,`             cadence=${(1/r.perceptPeriod).toFixed(0)}Hz  noise=${h.lateral_noise.toFixed(2)}m  miss=${(h.miss_prob*100).toFixed(0)}%`,`track model  line=${u.line.length}pts (${u.s0!==void 0?u.s0.toFixed(0):g}..${(u.s0!==void 0?u.s0:g)+(i.range||0)}m)`,`             obstacles=${u.obstacles.length}  lastSeen ages=${u.obstacles.map(v=>`${v.type}${(r.time-v.lastSeen).toFixed(0)}s`).join(" ")||"-"}`,`comms        buffer age=${(r.time-(d.lastBroadcast??r.time)).toFixed(3)}s  dropped=[${[...d.dropped].join(",")||"-"}]`,`             uwb σ=${r.params.comms.uwb_noise.toFixed(2)}m  loss=${(r.params.comms.loss*100).toFixed(0)}%`,`planner      speed=${r.plan.speed.toFixed(1)}m/s  detour=${r.plan.detour?"ON":"off"}`,`formation    mode=${r.fm.mode}  why: ${r.fm.reason??"-"}`,`drone #${l.id}  v=${l.speedAt.toFixed(1)}m/s  s=${l.s.toFixed(0)}m  off=${l.off.toFixed(2)}m  lap=${l.lap}`].join(`
`)}function oh({stage:r,params:l,onPatch:i}){const u=ei[r];if(!u)return null;const d=l[r]||{},h=re.useCallback((f,g)=>{i({[r]:{[f]:g}})},[r,i]);return _.jsxs("details",{className:"acc",children:[_.jsx("summary",{children:u.label}),_.jsx("div",{className:"knoblist",children:u.knobs.map(f=>{const g=d[f.key];return f.type==="select"?_.jsxs("div",{className:"knob",children:[_.jsx("label",{children:f.label}),_.jsx("select",{value:g,onChange:p=>h(f.key,p.target.value),children:f.options.map(p=>_.jsx("option",{value:p.v,children:p.l},p.v))})]},f.key):f.type==="multiselect"?_.jsxs("div",{className:"knob",children:[_.jsx("label",{children:f.label}),_.jsx("div",{className:"chip-row",children:f.options.map(p=>{const v=Array.isArray(d[f.key])&&d[f.key].includes(p);return _.jsx("span",{className:"chip"+(v?" on":""),onClick:()=>{const x=Array.isArray(d[f.key])?d[f.key]:[];x.length===1&&x[0]===p||h(f.key,v?x.filter(m=>m!==p):[...x,p])},children:p},p)})})]},f.key):f.type==="bool"?_.jsx("div",{className:"knob",children:_.jsxs("label",{children:[f.label,_.jsx("input",{type:"checkbox",checked:!!g,onChange:p=>h(f.key,p.target.checked)})]})},f.key):f.type==="number"?_.jsxs("div",{className:"knob",children:[_.jsxs("label",{children:[f.label,"(seed)"]}),_.jsxs("div",{style:{display:"flex",gap:6},children:[_.jsx("input",{type:"number",value:g,step:f.step??1,onChange:p=>h(f.key,Number(p.target.value))}),_.jsx("button",{className:"btn",style:{padding:"3px 8px"},onClick:()=>h(f.key,Math.floor(Math.random()*1e5)),children:"🎲"})]})]},f.key):_.jsxs("div",{className:"knob",children:[_.jsxs("label",{children:[_.jsx("span",{children:f.label}),_.jsxs("b",{children:[Number(g).toFixed(2),f.unit??""]})]}),_.jsx("input",{type:"range",min:f.min,max:f.max,step:f.step??.05,value:g,onChange:p=>h(f.key,Number(p.target.value))})]},f.key)})})]})}const sh=[{name:"Camera + sensors",live:()=>null},{name:"Localisation & estimation",live:()=>null},{name:"Perception",live:r=>{var l;return((l=r.scene)==null?void 0:l.mode)??""},color:"#f0a020"},{name:"Local track model",live:r=>{var l,i;return(((i=(l=r.params)==null?void 0:l.trackModel)==null?void 0:i.tape_trust)??0)>=.5?"tape-leaning":"waypoint-leaning"},color:"#3db9ff"},{name:"Path planner",live:r=>{var l,i;return`${(((l=r.plan)==null?void 0:l.speed)??0).toFixed(1)} m/s${(i=r.plan)!=null&&i.detour?" !":""}`},color:"#61affe"},{name:"Formation manager",live:r=>r.fm?`${r.fm.mode} · ${r.fm.reason??""}`:"–",color:"#bb9af7"},{name:"Swarm controller",live:r=>{var l;return`${((l=r.drones)==null?void 0:l.length)??0} drones`},color:"#c3e88d"},{name:"Combiners + safety filter",live:r=>{var l,i;return`v≤${((i=(l=r.params)==null?void 0:l.safety)==null?void 0:i.vmax)??"-"}`},color:"#ffcb6b"},{name:"Classical autopilot",live:r=>{var l,i,u;return`τ ${(u=(i=(l=r.params)==null?void 0:l.autopilot)==null?void 0:i.tau)==null?void 0:u.toFixed(2)}s`},color:"#7fdbca"}];function lh({n:r,w:l}){const i=r.live?r.live(l):null;return _.jsxs("div",{children:[_.jsxs("div",{className:"pnode",children:[_.jsx("span",{className:"pnode dot",style:{background:r.color??"var(--muted)"}}),_.jsx("span",{className:"name",children:r.name}),i!=null&&_.jsx("span",{className:"live",children:String(i)})]}),_.jsx("div",{className:"arrow",children:"↓"})]})}function ih({world:r}){var f,g,p,v,x;const l=r||{},i=l.centroidArc!=null&&l.course?(l.centroidArc/l.course.length).toFixed(2):"–",u=(f=l.stats)==null?void 0:f.modeTime,d=u?u.box+u.line:0,h=m=>d>0?(u[m]/d*100).toFixed(0)+"%":"–";return _.jsxs("div",{className:"panel pipeline",children:[_.jsx("h3",{children:"Control pipeline"}),sh.map((m,y)=>_.jsx(lh,{n:m,w:l},y)),_.jsxs("div",{className:"arrow side",children:["⟷ comms ",((p=(g=l.params)==null?void 0:g.comms)==null?void 0:p.hz)??0,"Hz · loss ",(((x=(v=l.params)==null?void 0:v.comms)==null?void 0:x.loss)??0)*100,"%"]}),_.jsxs("div",{className:"hint",children:["Time-in-mode: box ",h("box")," · line ",h("line")," — laps ",i]})]})}function ah({values:r,color:l}){const i=Math.max(.01,...r);return _.jsx("div",{className:"bars",children:r.slice(-48).map((u,d)=>_.jsx("div",{className:"bar",style:{height:`${Math.max(5,u/i*100)}%`,background:l}},d))})}function uh({world:r}){var g,p,v,x,m,y;const l=r||{},i=(g=l.stats)==null?void 0:g.conf,u=((p=l.stats)==null?void 0:p.samples)??[],d=(x=(v=l.params)==null?void 0:v.safety)==null?void 0:x.sep,h=(y=(m=l.params)==null?void 0:m.safety)==null?void 0:y.clearance,f=(k,E,b)=>_.jsxs("div",{className:"mrow"+(b===void 0?"":b?" good":" bad"),children:[_.jsx("span",{children:k}),_.jsx("span",{children:E})]});return _.jsxs("div",{className:"panel metrics",children:[_.jsx("h3",{children:"Race telemetry"}),f("Time",`${(l.time??0).toFixed(1)}s`),f("Laps (centroid)",l.centroidArc!=null&&l.course?(l.centroidArc/l.course.length).toFixed(2):"–"),f("Swarm avg speed",i?`${i.avgSpeed.toFixed(2)} m/s`:"–"),f("Formation error (max)",i?`${i.maxForm.toFixed(2)} m`:"–",i?i.maxForm<3:void 0),f("Min inter-drone",i?`${i.minSep.toFixed(2)} m`:"–",i&&d?i.minSep>=d:void 0),f("Min obstacle clear",i?`${i.minClear.toFixed(2)} m`:"–",i&&h?i.minClear>=h:void 0),f("Collisions",i?i.collisions??0:"–",i?(i.collisions??0)===0:void 0),f("Near-misses",l.stats?(l.stats.nearDrone??0)+(l.stats.nearObs??0):"–"),_.jsx("div",{className:"hint",children:"Formation error trace"}),_.jsx(ah,{values:u.map(k=>k.maxForm),color:"var(--accent)"})]})}const ri=[{key:"swarm.slot_gain",base:2,min:1,max:4,label:"slot gain"},{key:"swarm.damping",base:.9,min:.4,max:1.6,label:"damping"},{key:"safety.sep",base:.7,min:.55,max:1.3,label:"sep"},{key:"formation.spacing",base:1,min:.8,max:1.8,label:"spacing"},{key:"planner.cruise",base:8,min:4,max:10,label:"cruise"},{key:"autopilot.tau",base:.08,min:.03,max:.2,label:"AP τ"}];function ch(r,l){const[i,u]=l.key.split(".");return r[i][u]}function dh(r,l,i){const[u,d]=l.key.split(".");return{...r,[u]:{...r[u],[d]:i}}}function fh(r,l){let i={...r};for(const u of ri){const d=u.min+l()*(u.max-u.min);i=dh(i,u,Math.round(d*1e3)/1e3)}return i}function xc(r,l=60){const i=Cr(r),u=Math.round(l/(1/240));for(let p=0;p<u;p++)Nc(i,1/240);const d=i.stats.conf,h=Math.max(1,i.drones.reduce((p,v)=>p+v.lap,0)),f=i.stats.collisionCount,g=(i.stats.nearDrone??0)+(i.stats.nearObs??0);return{collisions:f,collPerLap:f/h,nearMisses:g,nearPerLap:g/h,laps:h,avgSpeed:(d==null?void 0:d.avgSpeed)??0,maxForm:(d==null?void 0:d.maxForm)??99,minSep:(d==null?void 0:d.minSep)??0,centroidLaps:i.centroidArc/i.course.length}}function wc(r){return r.collPerLap*80+r.nearPerLap*3+r.maxForm*.5+Math.max(0,4.5-r.avgSpeed)*6+(Number.isFinite(r.avgSpeed)&&r.avgSpeed<.5?500:0)}function ph(r,l=ri){const i={};for(const u of l)i[u.label]=ch(r,u);return i}function hh({getParams:r,onApply:l}){const[i,u]=re.useState("idle"),[d,h]=re.useState({done:0,total:0}),[f,g]=re.useState(null),[p,v]=re.useState(40),x=re.useRef(!1),m=async()=>{x.current=!1,u("running"),g(null),h({done:0,total:p+1});const b=r(),z=Xo((Date.now()^1597463007)>>>0),L=[],O={...b},$=xc(O);L.push({params:O,metrics:$,score:wc($),isBaseline:!0});for(let R=0;R<p&&!x.current;R++){const q=fh(O,z),B=xc(q);L.push({params:q,metrics:B,score:wc(B),isBaseline:!1}),h({done:R+2,total:p+1}),R%4===3&&await new Promise(j=>setTimeout(j,0))}L.sort((R,q)=>R.score-q.score),g(L),u("done")},y=()=>{x.current=!0},k=f==null?void 0:f[0],E=f?f.slice(0,6):[];return _.jsxs("div",{className:"panel tune",children:[_.jsx("h3",{children:"Auto-tune (current track)"}),_.jsxs("div",{className:"tune-row",children:[_.jsxs("select",{className:"drone-sel",value:p,onChange:b=>v(Number(b.target.value)),disabled:i==="running","aria-label":"trials",children:[_.jsx("option",{value:20,children:"20 trials"}),_.jsx("option",{value:40,children:"40 trials"}),_.jsx("option",{value:80,children:"80 trials"}),_.jsx("option",{value:160,children:"160 trials"})]}),i==="running"?_.jsx("button",{className:"btn",onClick:y,children:"Cancel"}):_.jsx("button",{className:"btn primary",onClick:m,disabled:i==="running",children:i==="done"?"Re-run":"Tune"})]}),i==="running"&&_.jsxs("div",{className:"tune-progress",children:[_.jsx("div",{className:"tune-bar",children:_.jsx("div",{className:"tune-fill",style:{width:`${d.done/d.total*100}%`}})}),_.jsxs("span",{className:"hint",children:[d.done,"/",d.total," races (",ri.length," knobs sampled)"]})]}),i==="done"&&f&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"tune-best",children:[_.jsxs("div",{children:[_.jsx("span",{className:"tune-label",children:"Best (vs baseline)"}),_.jsxs("span",{className:"tune-num",children:[k.metrics.collisions," coll · ",k.metrics.nearPerLap.toFixed(0),"/lap near"]}),_.jsxs("span",{className:"hint",children:[k.metrics.avgSpeed.toFixed(1)," m/s · form ",k.metrics.maxForm.toFixed(1)," m · ",k.metrics.laps," laps"]})]}),_.jsx("button",{className:"btn primary",onClick:()=>l(k.params),children:"Apply best"})]}),_.jsxs("table",{className:"tune-table",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{children:"#"}),_.jsx("th",{children:"coll"}),_.jsx("th",{children:"near/lap"}),_.jsx("th",{children:"m/s"}),_.jsx("th",{children:"form"}),_.jsx("th",{children:"knobs"})]})}),_.jsx("tbody",{children:E.map((b,z)=>_.jsxs("tr",{className:b.isBaseline?"baseline":"",children:[_.jsxs("td",{children:[z===0?"★":z,b.isBaseline?" base":""]}),_.jsx("td",{children:b.metrics.collisions}),_.jsx("td",{children:b.metrics.nearPerLap.toFixed(0)}),_.jsx("td",{children:b.metrics.avgSpeed.toFixed(1)}),_.jsx("td",{children:b.metrics.maxForm.toFixed(1)}),_.jsx("td",{className:"knob-cell",children:Object.entries(ph(b.params)).map(([L,O])=>`${L} ${O}`).join(" · ")})]},z))})]}),_.jsx("button",{className:"btn",onClick:()=>l(base),children:"Reset to baseline"})]})]})}const Vo=`// The simulation HARNESS: builds a course world + N drones and steps the
// pipeline from the architecture deck. The deployable control logic lives
// in src/core/pipeline.js (pure functions over explicit interfaces); this
// file provides the SIMULATION side: synthetic sensors (perception noise),
// the comms driver model, physics integration, collisions, metrics — and
// feeds the core the inputs a real system would receive.
//
//   1. Perception        sensor model (sim)              [perception]
//   2. Local track model core                            [trackModel]
//   3. Path planner      core                             [planner]
//   4. Formation manager core                             [formation]
//   5. Swarm controller  core + comms model               [swarm, comms]
//   6. Combiner+safety   core                             [safety]
//   7. Classical AP      core                             [autopilot]
//
// The centroid is the shared "virtual structure" target moved by the planner;
// drones chase slot positions defined in its frame.

import { mulberry32, gaussian } from './rand.js'
import { generateCourse } from './track/generate.js'
import { makeTrackQuery } from './track/track.js'
import { placeObstacles } from './obstacles.js'
import { DEFAULTS } from './params.js'
import {
  DRONE_RADIUS,
  clamp,
  hashId,
  distPrim,
  trackModelStep,
  plannerStep,
  formationStep,
  swarmStep,
  safetyStep,
  autopilotStep,
} from '../core/pipeline.js'

const SIM_STEP = 1 / 240

// ------------------------------------------------------------------ world
export function makeWorld(userParams = {}) {
  const params = deepMerge(DEFAULTS(), userParams)
  const course = generateCourse(params.course)
  const query = makeTrackQuery(course)
  const obstacles = placeObstacles(query, params.obstacles, params.obstacles.seed)
  const start = query.pointAt(0)
  const n = params.sim?.drones ?? 4

  const drones = []
  const s = params.formation.spacing
  const boxSlots = [
    { f: -s / 2, l: s / 2 },
    { f: -s / 2, l: -s / 2 },
    { f: s / 2, l: s / 2 },
    { f: s / 2, l: -s / 2 },
  ]
  // spawn each drone directly at its formation slot (no initial scramble)
  for (let i = 0; i < n; i++) {
    const slot = boxSlots[i % boxSlots.length] ?? { f: -i, l: 0 }
    const px = start.x + Math.cos(start.heading) * slot.f + Math.cos(start.heading + Math.PI / 2) * slot.l
    const py = start.y + Math.sin(start.heading) * slot.f + Math.sin(start.heading + Math.PI / 2) * slot.l
    const d = makeDrone(i, { x: px, y: py }, start.heading)
    d.slotCur = { ...slot }
    d.slotPos = { x: px, y: py }
    drones.push(d)
  }

  return {
    params,
    course,
    query,
    obstacles,
    obstaclePrims: buildPrims(obstacles),
    drones,
    centroid: { x: start.x, y: start.y, vx: 0, vy: 0, s: 0, heading: start.heading },
    plan: { vx: 0, vy: 0, h: start.heading, speed: 0, detour: null, detourOn: false },
    scene: { s0: 0, centreline: [], obstacles: [] },
    model: { line: [], obstacles: [] },
    scenarioBias: new Array(200000).fill(undefined),
    perceptAt: null,
    perceptPeriod: 1 / (params.perception.freq || 30),
    comms: { buffer: [], dropped: new Set(), lastBroadcast: null, period: 1 / (params.comms.hz || 40) },
    modelObstaclesList: [],
    decisions: [],
    _detourActive: false,
    _prevPose: { x: start.x, y: start.y },
    _railLog: {},
    _sepLog: {},
    _modelSeen: new Set(),
    _obSide: {},
    centroidArc: 0,
    fm: { mode: 'box', lastMode: null, reason: 'box (start)', modeSince: 0 },
    rng: mulberry32(params.course.seed ^ 0x9e3779b9),
    time: 0,
    acc: 0,
    stats: { events: [], samples: [], lapTimes: [], logT: 0, conf: null, collisionCount: 0, collisions: [], nearEvents: [], nearDrone: 0, nearObs: 0, modeTime: { box: 0, line: 0 } },
  }
}

function makeDrone(i, pt, heading) {
  return {
    id: i,
    x: pt.x,
    y: pt.y,
    vx: Math.cos(heading) * 0.5,
    vy: Math.sin(heading) * 0.5,
    s: 0,
    off: 0,
    lap: 0,
    ds: 0,
    _prevS: null,
    _lapStart: null,
    slotCur: { f: 0, l: 0 },
    slotPos: { x: pt.x, y: pt.y },
    swarm: { vx: 0, vy: 0 },
    terms: { slot: { vx: 0, vy: 0 }, sep: { vx: 0, vy: 0 }, damp: { vx: 0, vy: 0 }, safety: { vx: 0, vy: 0 } },
    cut: { vx: 0, vy: 0 },
    _lagBuf: [],
    speedAt: 0,
    mode: 'box',
  }
}

// append a human-readable decision to the explainability log (capped)
function logDecision(world, stage, msg) {
  world.decisions.push({ t: world.time, stage, msg })
  if (world.decisions.length > 200) world.decisions.shift()
}

// telemetry callback handed to the deployable core
const logger = (world) => (stage, msg) => logDecision(world, stage, msg)

function buildPrims(obstacles) {
  const prims = []
  for (const ob of obstacles) {
    if (ob.type === 'block') {
      // solid box on the tape, aligned with the track: a planned detour is
      // required (see the planner), and the safety filter enforces clearance
      prims.push({ kind: 'rect', x: ob.x, y: ob.y, w: ob.len, h: ob.width, angle: ob.heading, r: 0, src: ob })
    } else if (ob.type === 'tunnel') {
      // two parallel walls forming a narrow chute; threaded in line formation
      // (no clearance push, hard contact only — like gate posts)
      const a = ob.heading
      const half = ob.width / 2 + 0.25
      for (const sgn of [1, -1]) {
        prims.push({
          kind: 'rect',
          x: ob.x + Math.cos(a + Math.PI / 2) * half * sgn,
          y: ob.y + Math.sin(a + Math.PI / 2) * half * sgn,
          w: ob.length,
          h: 0.5,
          angle: a,
          r: 0,
          src: ob,
        })
      }
    }
  }
  return prims
}

// ------------------------------------------------------------------ step
export function stepWorld(world, dt) {
  world.acc += Math.min(dt, 0.05)
  while (world.acc >= SIM_STEP) {
    world.acc -= SIM_STEP
    tick(world, SIM_STEP)
  }
}

function tick(world, dt) {
  world.time += dt
  const t = world.time

  // 1) perception — SENSOR MODEL (sim-side; a real drone replaces this with
  //    camera + detector, keeping the same scene contract)
  if (world.perceptAt === null || t >= world.perceptAt) {
    world.scene = runPerception(world)
    world.perceptAt = t + world.perceptPeriod
  }

  // 2) local track model — deployable core
  world.model = trackModelStep({
    scene: world.scene,
    prevObstacles: world.modelObstaclesList,
    params: world.params,
    time: t,
    waypoint: (s) => world.query.pointAt(s),
    seen: world._modelSeen,
    log: logger(world),
  })
  world.modelObstaclesList = world.model.obstacles

  // 3) planner -> centroid motion — deployable core
  const plan = plannerStep({
    model: world.model,
    params: world.params,
    arc: world.centroidArc,
    prevPose: world._prevPose,
    prevDetourOn: world._detourActive,
    obstacleSide: world._obSide,
    trackLength: world.query.L,
    dt,
    log: logger(world),
    curvature: world.query.pointAt(world.centroidArc).curvature,
  })
  if (plan === null) {
    // no model line yet: hold position
    const c = world.centroid
    world.plan = {
      h: c.heading, speed: 0, detourOn: false, detour: null, vx: 0, vy: 0,
      pose: { x: c.x, y: c.y, s: world.centroidArc, heading: c.heading },
    }
  } else {
    world.plan = plan
    world.centroidArc = plan.arc
    world._detourActive = plan.detourOn
  }
  const c = world.centroid
  c.vx = world.plan.vx
  c.vy = world.plan.vy
  c.x = world.plan.pose.x
  c.y = world.plan.pose.y
  c.s = world.plan.pose.s
  c.heading = world.plan.pose.heading

  // 4) comms — DRIVER MODEL (sim-side; a real radio/UWB driver replaces this)
  maybeBroadcast(world, dt)

  // 5) formation manager — deployable core
  const fmOut = formationStep({
    model: world.model,
    centroid: world.centroid,
    params: world.params,
    fm: world.fm,
    time: t,
    dt,
    drones: world.drones,
    trackLength: world.query.L,
    log: logger(world),
  })
  world.stats.modeTime[fmOut.mode] = (world.stats.modeTime[fmOut.mode] ?? 0) + dt

  // 6) swarm controller — deployable core
  for (const d of world.drones) {
    swarmStep({
      drone: d,
      centroid: world.centroid,
      plan: world.plan,
      params: world.params,
      model: world.model,
      neighbours: commsNeighbours(world, d),
      trackLength: world.query.L,
      obstacleSide: world._obSide,
    })
  }

  // 7) combiner + safety filter — deployable core
  for (const d of world.drones) {
    safetyStep({
      drone: d,
      drones: world.drones,
      prims: world.obstaclePrims,
      params: world.params,
      time: t,
      sepLog: world._sepLog,
      log: logger(world),
    })
  }

  // 8) autopilot — deployable core — then integrate (sim physics)
  for (const d of world.drones) {
    autopilotStep({ drone: d, params: world.params, dt, simStep: SIM_STEP })
    d.x += d.vx * dt
    d.y += d.vy * dt
    d.speedAt = Math.hypot(d.vx, d.vy)
    const nx = world.query.nearest(d.x, d.y)
    d.s = nx.s
    d.off = nx.off
    if (d._prevS !== null && d._prevS > world.query.L - 5 && nx.s < 5) {
      d.lap++
      if (d._lapStart) world.stats.lapTimes.push(t - d._lapStart)
      d._lapStart = t
    }
    d._prevS = nx.s
  }

  // 9) hard collisions: resolve overlap, log events (sim physics)
  resolveCollisions(world)

  if (t - world.stats.logT >= 0.2) {
    world.stats.logT = t
    updateMetrics(world)
  }
}

// what this drone currently believes about the others (comms model output)
function commsNeighbours(world, d) {
  const out = []
  for (const other of world.drones) {
    if (other === d) continue
    if (world.comms.dropped.has(other.id)) continue
    const obs = readComms(world, other.id)
    if (obs) out.push(obs)
  }
  return out
}

// --------------------------------------------------- 1: perception
// SENSOR MODEL: stands in for camera + detector. The true track becomes
// noisy centreline measurements; obstacles are detected with a miss
// probability and position noise. The output contract (centreline points +
// obstacle list) is what a real detector would produce.
function runPerception(world) {
  const perf = world.params.perception
  const q = world.query
  const c = world.centroid
  const range = perf.range_m
  const step = perf.freq > 22 ? 2 : 3
  const centreline = []

  for (let s = c.s; s < c.s + range; s += step) {
    const base = q.pointAt(s)
    const wobble = stableBias(world, s) * perf.lateral_noise
    const lively = Math.sin(s * 0.13 + world.time * 1.2) * 0.22 * perf.lateral_noise
    centreline.push({
      x: base.x + Math.cos(base.heading + Math.PI / 2) * (wobble + lively),
      y: base.y + Math.sin(base.heading + Math.PI / 2) * (wobble + lively),
      s,
    })
  }

  const seen = []
  for (const ob of world.obstacles) {
    let ds = ob.s - c.s
    if (ds < 0) ds += q.L
    if (ds > range + 2) continue
    if (world.rng() < perf.miss_prob) continue
    seen.push({
      ...ob,
      confidence: 0.45 + 0.5 * hashId(ob.id),
      x: ob.x + gaussian(world.rng, 0, perf.obstacle_noise),
      y: ob.y + gaussian(world.rng, 0, perf.obstacle_noise),
    })
  }

  return { s0: c.s, range, obstacles: seen, centreline }
}

function stableBias(world, s) {
  const idx = Math.floor(s) % world.scenarioBias.length
  if (world.scenarioBias[idx] === undefined) world.scenarioBias[idx] = world.rng() * 2 - 1
  return world.scenarioBias[idx]
}

// ----------------------------------------- 4: comms (driver model)
function maybeBroadcast(world, dt) {
  const cs = world.comms
  const cfg = world.params.comms
  if (cs.lastBroadcast === null || world.time - cs.lastBroadcast >= cs.period) {
    cs.lastBroadcast = world.time
    cs.buffer = world.drones.map((d) => ({
      id: d.id,
      x: d.x,
      y: d.y,
      tBroadcast: world.time,
      deliverAt: world.time + cfg.jitter / 1000,
    }))
  }
  cs.dropped = new Set()
  for (const d of world.drones) if (world.rng() < cfg.loss) cs.dropped.add(d.id)
}

function readComms(world, id) {
  const cfg = world.params.comms
  const st = world.comms.buffer.find((s) => s.id === id)
  if (!st || world.time < st.deliverAt) return null
  return {
    id,
    x: st.x + gaussian(world.rng, 0, cfg.uwb_noise),
    y: st.y + gaussian(world.rng, 0, cfg.uwb_noise),
  }
}

// ------------------------------------------------------------ collisions
// Hard collision handling (SIM PHYSICS): drones are 0.25m-radius disks. A
// guaranteed clearance is enforced positionally every tick — drone-drone
// >= 0.6m and drone-obstacle >= r+0.55m — so overlap is structurally
// impossible for solids. Gate posts and tunnel walls are threadable:
// physical contact (r+0.25) is allowed there and logged as an event.
// (A real system has no positional resolver — the deployable safety filter
// in the core is what prevents contact on hardware.)
function resolveCollisions(world) {
  const R = DRONE_RADIUS
  const n = world.drones.length
  const events = []
  const MIN_DRONE = 0.65
  const MIN_SOLID = 0.55

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = world.drones[i], b = world.drones[j]
      const dx = b.x - a.x, dy = b.y - a.y
      const d = Math.hypot(dx, dy)
      if (d >= MIN_DRONE) continue
      const ux = dx / (d || 1e-9), uy = dy / (d || 1e-9)
      const push = (MIN_DRONE - d) / 2 + 1e-4
      a.x -= ux * push; a.y -= uy * push
      b.x += ux * push; b.y += uy * push
      const rel = (a.vx - b.vx) * ux + (a.vy - b.vy) * uy
      if (rel < 0) {
        const imp = rel * 0.6
        a.vx -= imp * ux; a.vy -= imp * uy
        b.vx += imp * ux; b.vy += imp * uy
      }
      // log only actual physical contact (disk overlap) — with the 0.6m
      // positional guarantee this can no longer happen for drone pairs
      if (d < 2 * R) {
        events.push({
          t: world.time,
          type: 'drone',
          ids: [a.id, b.id],
          x: (a.x + b.x) / 2,
          y: (a.y + b.y) / 2,
        })
      }
    }
  }

  for (const d of world.drones) {
    for (const prim of world.obstaclePrims) {
      const cp = closestPoint(prim, d.x, d.y)
      const isTunnel = prim.src?.type === 'tunnel'
      // tunnel walls keep the drone on a rail: >= 0.3m from the wall face
      // (corridor rail). Solids enforce 0.55m. Both make contact impossible.
      const minD = isTunnel ? 0.3 : (prim.r ?? 0) + MIN_SOLID
      if (cp.d < minD) {
        const nx = (d.x - cp.x) / (cp.d || 1e-9)
        const ny = (d.y - cp.y) / (cp.d || 1e-9)
        const push = minD - cp.d + 1e-4
        d.x += nx * push; d.y += ny * push
        const rel = d.vx * nx + d.vy * ny
        if (rel < 0) { d.vx -= rel * 0.7 * nx; d.vy -= rel * 0.7 * ny }
        // rail engagements are near-miss events, never collisions
        if (world.stats.nearEvents.length > 60) world.stats.nearEvents.shift()
        world.stats.nearEvents.push({ t: world.time, kind: prim.src?.type ?? 'obstacle', x: d.x, y: d.y })
        // explainability: log rail engagements (rate-limited per obstacle)
        const rk = prim.src?.id ?? prim.kind
        if (world.time - (world._railLog[rk] ?? -1) > 0.8) {
          world._railLog[rk] = world.time
          logDecision(world, 'collisions', \`safety rail on \${prim.src?.type ?? 'obstacle'} (clear \${cp.d.toFixed(2)} m)\`)
        }
      }
    }
  }

  if (events.length) {
    world.stats.collisionCount += events.length
    world.stats.collisions.push(...events)
    if (world.stats.collisions.length > 60) {
      world.stats.collisions.splice(0, world.stats.collisions.length - 60)
    }
  }
}

// closest point on a primitive + distance, for collision normals
function closestPoint(prim, x, y) {
  if (prim.kind === 'circle') {
    const d = Math.hypot(x - prim.x, y - prim.y)
    return { x: prim.x, y: prim.y, d }
  }
  const dx = x - prim.x, dy = y - prim.y
  const c = Math.cos(prim.angle), sn = Math.sin(prim.angle)
  const lx = dx * c + dy * sn
  const ly = -dx * sn + dy * c
  const qx = clamp(lx, -prim.w / 2, prim.w / 2)
  const qy = clamp(ly, -prim.h / 2, prim.h / 2)
  const wx = lx - qx, wy = ly - qy
  const d = Math.hypot(wx, wy) || 1e-9
  return { x: prim.x + qx * c - qy * sn, y: prim.y + qx * sn + qy * c, d }
}

// ------------------------------------------------------------ metrics
function updateMetrics(world) {
  let maxForm = 0
  let maxOff = 0
  let minSep = Infinity
  let minClear = Infinity
  let sumSpeed = 0
  const n = world.drones.length

  for (const d of world.drones) {
    const fe = Math.hypot(d.slotPos.x - d.x, d.slotPos.y - d.y)
    maxForm = Math.max(maxForm, fe)
    maxOff = Math.max(maxOff, Math.abs(d.off))
    sumSpeed += d.speedAt
    for (const other of world.drones) {
      if (other === d) continue
      minSep = Math.min(minSep, Math.hypot(d.x - other.x, d.y - other.y))
    }
    for (const prim of world.obstaclePrims) {
      minClear = Math.min(minClear, distPrim(d.x, d.y, prim) - (prim.r ?? 0))
    }
  }

  const conf = {
    t: world.time,
    maxForm,
    maxOff,
    minSep,
    minClear,
    avgSpeed: sumSpeed / n,
    laps: world.drones.reduce((a, d) => a + d.lap, 0),
    collisions: world.stats.collisionCount,
  }
  world.stats.conf = conf
  world.stats.samples.push(conf)
  if (world.stats.samples.length > 2400) world.stats.samples.shift()

  // near-miss windows: safety margin was squeezed without a hard contact
  if (minSep < 0.9) world.stats.nearDrone++
  if (minClear < 0.9) world.stats.nearObs++
}

// ------------------------------------------------------------ helpers
export function deepMerge(base, patch) {
  const out = { ...base }
  for (const k in patch) {
    if (patch[k] && typeof patch[k] === 'object' && !Array.isArray(patch[k])) {
      out[k] = deepMerge(base[k] || {}, patch[k])
    } else {
      out[k] = patch[k]
    }
  }
  return out
}
`,mh=`// Procedural track generation in the spirit of an RL racing environment.
//
// A course is a closed loop built as a *sequence of segments*:
//   - straights, each of a "length"
//   - turns, each with a "radius" and "angle" (arc fillets rounding the corners)
// The centreline is parameterised by arc length s in [0, L]; helpers let any
// subsystem sample a point/heading/curvature at a distance along the course.
//
// Obstacles are drawn from a *known finite set* and placed at random arc
// positions (see obstacles.js).

import { mulberry32 } from '../rand.js'

export const SEGMENT_TYPES = ['straight', 'turn']

export function generateCourse(config) {
  const rand = mulberry32(config.seed)
  const poly = buildPolygon(config, rand)
  const { segments, straights } = filletSegments(poly, config, rand)
  const centerline = sampleCenterline(segments)
  const length = segments.reduce((sum, s) => sum + (s.type === 'straight' ? dist(s.from, s.to) : Math.abs(s.radius * s.angle)), 0)
  return {
    config,
    seed: config.seed,
    bounds: trackBounds(poly),
    centerline,        // [{x, y, s, heading, curvature}] dense sampled centreline
    poly,              // raw polygon corners
    segments,          // [{type:'straight'|'turn', ...}]
    straights,         // lengths of straight segments (for display)
    length,
  }
}

// ---- polygon ---------------------------------------------------------------

function buildPolygon(config, rand) {
  const n = config.vertices ?? (6 + Math.floor(rand() * 3))
  const pts = []
  const centroid = { x: 0, y: 0 }
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2
    const rad = config.radius * (1 + (rand() - 0.5) * (config.radius_noise ?? 0.9))
    const p = { x: Math.cos(a) * rad, y: Math.sin(a) * rad }
    pts.push(p)
    centroid.x += p.x
    centroid.y += p.y
  }
  centroid.x /= n
  centroid.y /= n
  // Guarantee a simple convex-ish ring by sorting around the centroid.
  return pts.sort((p, q) => angle(p, centroid) - angle(q, centroid))
}

function angle(p, c) {
  return Math.atan2(p.y - c.y, p.x - c.x)
}

// Convert the polygon corners into track segments: straights between
// consecutive fillet touch points plus the arc itself. For a corner at vertex
// b with incoming unit direction u (from a) and outgoing v (to c), the fillet
// arc of radius r is tangent to both edges; the tangent points sit at distance
// t = r*tan(|d|/2) from the vertex (d = signed turn angle), so
//   entry = b - u*t,  exit = b + v*t,  center = entry + r*n_u
// with n_u the inward normal of the incoming edge.
function filletSegments(poly, config, rand) {
  const n = poly.length
  const corners = []
  for (let i = 0; i < n; i++) {
    const b = poly[i]
    const a = poly[(i + n - 1) % n]
    const c = poly[(i + 1) % n]
    const Lprev = dist(a, b)
    const Lnext = dist(b, c)
    const ux = (b.x - a.x) / (Lprev || 1e-6)
    const uy = (b.y - a.y) / (Lprev || 1e-6)
    const vx = (c.x - b.x) / (Lnext || 1e-6)
    const vy = (c.y - b.y) / (Lnext || 1e-6)
    const dAng = wrapPi(Math.atan2(vy, vx) - Math.atan2(uy, ux))
    const sgn = Math.sign(dAng) || 1
    const tanHalf = Math.tan(Math.abs(dAng) / 2) || 1e-6

    let r = config.fillet_radius_min + rand() * (config.fillet_radius_max - config.fillet_radius_min)
    const t = Math.min(r * tanHalf, Lprev * 0.5, Lnext * 0.5)
    r = t / tanHalf            // effective arc radius (smaller on sharp corners)

    const nux = -uy * sgn      // inward normal of the incoming edge
    const nuy = ux * sgn
    corners.push({
      entry: { x: b.x - ux * t, y: b.y - uy * t },
      exit: { x: b.x + vx * t, y: b.y + vy * t },
      center: { x: b.x - ux * t + nux * r, y: b.y - uy * t + nuy * r },
      r,
      dAng,
    })
  }

  const segments = []
  const straights = []
  for (let i = 0; i < n; i++) {
    segments.push({ type: 'turn', center: corners[i].center, radius: corners[i].r, angle: corners[i].dAng, from: corners[i].entry, to: corners[i].exit })
    const from = corners[i].exit
    const to = corners[(i + 1) % n].entry
    segments.push({ type: 'straight', from, to })
    straights.push(dist(from, to))
  }
  return { segments, straights }
}

function wrapPi(a) {
  while (a > Math.PI) a -= 2 * Math.PI
  while (a < -Math.PI) a += 2 * Math.PI
  return a
}

// Build the sampled centreline: arcs are sampled at ~1m spacing, straights at
// ~0.5m. Each sample stores x, y, s, heading; s is the exact arc length from
// the course start (no overshoot at segment boundaries).
function sampleCenterline(segments) {
  const samples = []
  let s = 0
  for (const seg of segments) {
    if (seg.type === 'straight') {
      const L = dist(seg.from, seg.to)
      const heading = Math.atan2(seg.to.y - seg.from.y, seg.to.x - seg.from.x)
      const n = Math.max(2, Math.round(L / 0.5))
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1)
        samples.push({
          x: seg.from.x + (seg.to.x - seg.from.x) * t,
          y: seg.from.y + (seg.to.y - seg.from.y) * t,
          s: s + t * L,
          heading,
          curvature: 0,
        })
      }
      s += L
    } else {
      // arc from seg.from (entry tangent point) sweeping \`angle\` about center
      const r = seg.radius
      const th0 = Math.atan2(seg.from.y - seg.center.y, seg.from.x - seg.center.x)
      const arcLen = Math.abs(r * seg.angle)
      const sgn = Math.sign(seg.angle) || 1
      const n = Math.max(2, Math.round(arcLen / 0.5))
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1)
        const th = th0 + seg.angle * t
        samples.push({
          x: seg.center.x + r * Math.cos(th),
          y: seg.center.y + r * Math.sin(th),
          s: s + t * arcLen,
          heading: th + sgn * (Math.PI / 2),
          curvature: sgn / r,
        })
      }
      s += arcLen
    }
  }
  return samples
}

function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y) }
function pointAlong(a, b, d) {
  const dx = b.x - a.x, dy = b.y - a.y
  const L = Math.hypot(dx, dy) || 1e-6
  return { x: a.x + (dx / L) * d, y: a.y + (dy / L) * d }
}

function trackBounds(samples) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const p of samples) {
    minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x)
    minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y)
  }
  const pad = 5
  return { minX: minX - pad, minY: minY - pad, maxX: maxX + pad, maxY: maxY + pad }
}`,yh=`// Obstacles are drawn from a *known finite set* of types. Each type has a
// parameter domain (its "size"), and placement picks a random arc position and
// lateral offset relative to the centreline. This mirrors "a finite known set
// of obstacles placed at random along the track" from the RL-env style gen.

import { mulberry32 } from './rand.js'

export const OBSTACLE_TYPES = {
  tunnel: {
    label: 'Tunnel (forces single-file line)',
    params: { length: [5, 8], width: [1.05, 1.35] },
    color: '#0ca678',
  },
  block: {
    label: 'Block (on tape, must go around)',
    params: { len: [2.0, 3.0], width: [1.3, 1.8] },
    color: '#e03131',
  },
}

export const OBSTACLE_KINDS = Object.fromEntries(
  Object.entries(OBSTACLE_TYPES).map(([k, v]) => [k, k]),
)

export function placeObstacles(query, config, seed) {
  const rand = mulberry32(seed)
  const L = query.L
  const count = config.count ?? 8
  const minSpacing = config.min_spacing ?? 15
  const laneHalf = config.lateral ?? (config.trackWidth / 2 - 0.8)

  const out = []
  let s = 0
  for (let i = 0; i < count; i++) {
    s += minSpacing + rand() * (L / count - minSpacing)
    s %= L
    // keep long obstacles (tunnels/blocks) clear of neighbours: try a few
    // candidates until the arc distance to every placed obstacle is safe
    const kind = pickKind(rand, config.kinds)
    for (let attempt = 0; attempt < 10; attempt++) {
      const ob = buildObstacle(kind, rand, s, laneHalf, query)
      const span = spanOf(ob)
      const ok = out.every((o) => {
        let ds = Math.abs(ob.s - o.s)
        if (ds > L / 2) ds = L - ds
        return ds >= spanOf(o) / 2 + span / 2 + 8
      })
      if (ok) {
        out.push(ob)
        break
      }
      s = (s + 4 + rand() * 8) % L
    }
  }
  return out
}

function spanOf(ob) {
  if (ob.type === 'tunnel') return ob.length
  if (ob.type === 'block' || ob.type === 'wall') return ob.len
  return 1
}

function pickKind(rand, kinds) {
  const allowed = kinds && kinds.length ? kinds : Object.keys(OBSTACLE_TYPES)
  return allowed[Math.floor(rand() * allowed.length)]
}

function buildObstacle(kind, rand, s, laneHalf, query) {
  const off = (kind === 'tunnel' || kind === 'block') ? (rand() - 0.5) * 0.4
    : (rand() - 0.5) * 2 * laneHalf
  const l = query.lateral(s, off)
  const base = {
    id: \`\${kind}-\${s.toFixed(1)}\`,
    type: kind,
    s,
    off,
    x: l.x,
    y: l.y,
    heading: l.heading,
  }
  if (kind === 'tunnel') return { ...base, length: 5 + rand() * 3, width: 1.05 + rand() * 0.3 }
  if (kind === 'block') return { ...base, len: 2.0 + rand() * 1.0, width: 1.3 + rand() * 0.5 }
  return base
}`,Cn=`// Deployable control core — the code that would run on a real swarm's
// companion computers.
//
// Every function here is pure over explicit interfaces:
//   - it never touches a simulation world, an RNG, or ground truth
//   - sensors, physics, comms drivers and the fixed-step loop live OUTSIDE
//     (see src/sim/world.js, which feeds these functions real inputs)
//   - config arrives as a plain \`params\` object (the knobs)
//   - telemetry is an optional \`log(stage, msg)\` callback
//
// The same functions are what the "How it works" window shows, and what you
// would port to C for the companion computer unchanged.
//
// Interfaces:
//   Model       = { line: [{x,y,s,curvature}], obstacles: [{id,type,s,x,y,heading,
//                   len,width,length,confidence,lastSeen}] }  the local model
//   WaypointMap = { length, pointAt(s) -> {x,y,heading} }     a-priori course
//   Drone       = { id, x, y, vx, vy, s, slotCur, slotPos, terms, cut, _lagBuf }
//   Params      = the configuration object (the knobs), plain data

export const DRONE_RADIUS = 0.25

// ------------------------------------------------------------- helpers
export function wrapPi(a) {
  while (a > Math.PI) a -= 2 * Math.PI
  while (a < -Math.PI) a += 2 * Math.PI
  return a
}

// signed arc distance from \`b\` to \`a\` on a loop of length L, in (-L/2, L/2]:
// positive = a is ahead of b, negative = behind. Works across multiple laps.
export function wrapDs(a, b, L) {
  let d = (a - b) % L
  if (d < 0) d += L
  return d
}

// signed version of wrapDs: how far past \`b\` the point \`a\` is, choosing the
// short way around the loop
export function signedDs(a, b, L) {
  const k = Math.round((a - b) / L)
  return a - b - k * L
}

export function clamp(v, lo, hi) {
  return Math.min(hi, Math.max(lo, v))
}

// deterministic per-id hash in [0,1) — used for detour side selection
export function hashId(id) {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0
  return ((h % 1000) + 1000) % 1000 / 1000
}

// point on the model line at arc distance s (linear interpolation between
// the two nearest samples — the line is the local track, sampled 2-3 m apart)
export function linePointAt(line, s) {
  if (line.length === 0) return { x: 0, y: 0, s }
  if (s <= line[0].s) { const p = line[0]; return { x: p.x, y: p.y, s } }
  if (s >= line[line.length - 1].s) { const p = line[line.length - 1]; return { x: p.x, y: p.y, s } }
  let a = line[0], b = line[line.length - 1]
  for (let i = 0; i < line.length - 1; i++) {
    if (line[i].s <= s && line[i + 1].s >= s) { a = line[i]; b = line[i + 1]; break }
  }
  const seg = (b.s - a.s) || 1
  const t = Math.min(1, Math.max(0, (s - a.s) / seg))
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, s }
}

// perceived curvature: heading change of the model line over a 4 m window
// (chord directions at s-2, s, s+2).  Exact for constant curvature, and the
// deployed planner has no ground-truth query — curvature comes from the
// perceived track it is actually following.
function modelCurvature(line, s) {
  const p0 = linePointAt(line, s - 2)
  const p1 = linePointAt(line, s)
  const p2 = linePointAt(line, s + 2)
  const h1 = Math.atan2(p1.y - p0.y, p1.x - p0.x)
  const h2 = Math.atan2(p2.y - p1.y, p2.x - p1.x)
  return wrapPi(h2 - h1) / 4
}

// -------------------------------------------------- 2: local track model
// Blend the perceived tape with the a-priori waypoint map by \`tape_trust\`,
// and keep a persistent obstacle list with a hysteresis window (a briefly
// missed obstacle stays in the model instead of blinking out).
// \`seen\` is a Set memo of obstacle ids already reported (telemetry dedupe).
export function trackModelStep({ scene, prevObstacles, params, time, waypoint, seen, log }) {
  const trust = params.trackModel.tape_trust

  const line = scene.centreline.map((p) => {
    const wp = waypoint(p.s)
    return {
      x: wp.x * (1 - trust) + p.x * trust,
      y: wp.y * (1 - trust) + p.y * trust,
      s: p.s,
    }
  })
  // per-sample curvature: heading change across each sample divided by the
  // half-span (midpoint of prev→this to midpoint of this→next).  Matches the
  // analytical curvature of a circular arc (κ=1/r) when the line follows one.
  for (let i = 1; i < line.length - 1; i++) {
    const hPrev = Math.atan2(line[i].y - line[i - 1].y, line[i].x - line[i - 1].x)
    const hNext = Math.atan2(line[i + 1].y - line[i].y, line[i + 1].x - line[i].x)
    const ds = (line[i + 1].s - line[i - 1].s) / 2
    line[i].curvature = ds > 1e-8 ? wrapPi(hNext - hPrev) / ds : 0
  }
  if (line.length > 0) { line[0].curvature = 0; line[line.length - 1].curvature = 0 }

  const fresh = scene.obstacles.map((o) => ({ ...o, lastSeen: time }))
  const ids = new Set(scene.obstacles.map((o) => o.id))
  for (const ob of prevObstacles) {
    if (!ids.has(ob.id) && time - ob.lastSeen <= params.trackModel.obstacle_hysteresis) fresh.push(ob)
  }
  // telemetry: log when a NEW obstacle enters the model (first sighting or
  // re-acquisition after the hysteresis window)
  if (log) {
    for (const ob of fresh) {
      if (!seen.has(ob.id)) {
        seen.add(ob.id)
        log('trackModel', \`tracking \${ob.type} @ \${ob.s.toFixed(0)} m ahead (conf \${(ob.confidence ?? 0).toFixed(2)})\`)
      }
    }
  }
  fresh.sort((a, b) => a.s - b.s)
  while (fresh.length > params.trackModel.max_obstacles) fresh.pop()

  return { s0: scene.s0, line, obstacles: fresh }
}

// --------------------------------------------- 3: path planner
// The planner advances the centroid's arc progress along the perceived
// (model) line every tick and moves it along the line's local tangent.
// Keeping progress in memory removes the point-pursuit instability where
// \`nearest()\` is ambiguous and the steering flips frame to frame.
//
// \`prevPose\` is a mutable memo \`{x, y}\` of the last pose: the velocity is
// course made good — how far the pose actually moved this tick — so the
// detour and tunnel-axis lateral drift are real parts of the command.
//
// Returns null until the model line exists (caller holds position then).
export function plannerStep({ model, params, arc, prevPose, prevDetourOn, obstacleSide, trackLength, dt, log, curvature }) {
  const pp = params.planner
  const sCent = arc

  // no model line yet — caller falls back to holding position
  if (!model.line || model.line.length < 2) return null

  // obstacle caution ahead (slows the centroid near obstacles)
  const threat = nearObstacle(model, sCent, pp.lookahead, trackLength)

  // speed shaping on perceived track curvature underneath the centroid
  // (the harness may pass ground-truth curvature; the core falls back to
  // the model-line estimate when not provided — the error between the two
  // is usually small on a well-sampled line, but the analytical value is
  // exact on circular arcs and avoids premature formation-mode switches
  // from a finite-window approximation)
  const curv = curvature ?? modelCurvature(model.line, sCent)
  const slow = clamp(1 - pp.slow_zone * Math.min(Math.abs(curv) * 5, 1.1), 0.45, 1)
  let speed = pp.cruise * slow + pp.rl_residual * pp.rl_bounds
  if (threat) speed *= threat.tunnel ? 0.7 : 0.55
  speed = clamp(speed, 0.5, pp.cruise + pp.rl_bounds + 4)

  // advance the centroid's progress along the modelled line
  const nextArc = sCent + speed * dt

  // planned detour around blocks/walls: the centroid's line shifts laterally
  // around them (ramped, deterministic side) — but never inside a tunnel
  // zone: the chute is a known corridor and detours there would fight the
  // axis-centring below
  const tun = nearestTunnel(model, sCent, trackLength)
  let det = detourOffset(model, sCent, pp, params.formation.spacing, trackLength, obstacleSide)
  if (tun) {
    // suppress detours while the centroid is inside the tunnel's zone (approach
    // lead + a short tail for the axis-centring), direction-aware so the
    // suppression doesn't itself snap on/off when crossing the centre
    const sdT = signedDs(sCent, tun.s, trackLength)
    if (sdT < tun.length / 2 + 1.5 && sdT > -(tun.length / 2 + 8)) det = { off: 0, side: 1, id: null }
  }

  // telemetry: log detour start/end
  const detOn = det.off > 0.05
  if (log) {
    if (detOn && !prevDetourOn) {
      log('planner', \`detour \${det.side > 0 ? 'LEFT' : 'RIGHT'} around \${det.id ?? 'obstacle'}\`)
    } else if (!detOn && prevDetourOn) {
      log('planner', 'detour cleared — back to centreline')
    }
  }

  // physical pose of the centroid = the point on the perceived line at progress
  const cPt = linePointAt(model.line, nextArc)
  const cNext = linePointAt(model.line, nextArc + 0.5)
  const cPrev = linePointAt(model.line, Math.max(0, nextArc - 0.5))
  const cHeading = Math.atan2(cNext.y - cPrev.y, cNext.x - cPrev.x)
  if (det.off !== 0) {
    const px = Math.cos(cHeading + Math.PI / 2) * det.off * det.side
    const py = Math.sin(cHeading + Math.PI / 2) * det.off * det.side
    cPt.x += px; cPt.y += py
  }

  // tunnel axis correction: pull the centroid onto the perceived tunnel axis
  // while approaching and passing the chute (long lead so the column is
  // centred before the entrance; short tail so it re-joins the line quickly)
  if (tun) {
    const tc = Math.cos(tun.heading), tsn = Math.sin(tun.heading)
    const lat = -(cPt.x - tun.x) * tsn + (cPt.y - tun.y) * tc
    const along = (cPt.x - tun.x) * tc + (cPt.y - tun.y) * tsn
    const lead = tun.length / 2 + 8
    const tail = tun.length / 2 + 1.5
    if (along < tail && along > -lead) {
      const k = Math.min(1, 1 - Math.exp(-dt * 7))
      const lx = -tsn, ly = tc
      cPt.x -= lx * lat * k
      cPt.y -= ly * lat * k
    }
  }

  // velocity = course made good: how far the pose actually moved this tick
  const vx = (cPt.x - prevPose.x) / dt
  const vy = (cPt.y - prevPose.y) / dt
  prevPose.x = cPt.x
  prevPose.y = cPt.y

  return {
    h: cHeading,
    speed,
    arc: nextArc,
    detourOn: detOn,
    detour: threat ? { x: threat.x, y: threat.y } : null,
    vx,
    vy,
    pose: { x: cPt.x, y: cPt.y, s: nextArc, heading: cHeading },
  }
}

// nearest tunnel in the model ahead of the centroid (within its zone)
function nearestTunnel(model, sCent, L) {
  let best = null
  let bestDs = Infinity
  for (const ob of model.obstacles) {
    if (ob.type !== 'tunnel') continue
    const ds = wrapDs(ob.s, sCent, L)
    if (ds < bestDs && ds < ob.length / 2 + 10) { bestDs = ds; best = ob }
  }
  return best
}

// Lateral offset of the centroid's path around solid obstacles on the tape
// (blocks). The offset ramps up over \`RAMP\` metres before the obstacle, holds
// while passing it, and ramps back to zero after. The side is deterministic
// per obstacle id so the swarm doesn't oscillate between sides frame to frame
// (\`obstacleSide\` is a cache memo of chosen sides). The window is
// DIRECTION-AWARE: the block stays active while the reference is within
// [front - lead, rear + RAMP] (signed distance), so the ramp-out actually
// fades the offset after passing instead of snapping to zero the instant the
// reference crosses the block's front edge.
export function detourOffset(model, sCent, pp, spacing, L, obstacleSide, rampOverride) {
  const RAMP = rampOverride ?? 10
  let best = null
  let bestAbs = Infinity
  for (const ob of model.obstacles) {
    if (ob.type !== 'block') continue
    const span = obsSpan(ob)
    const sd = signedDs(sCent, ob.s - span / 2, L)
    if (sd < -(pp.lookahead + span / 2 + RAMP + 4)) continue
    if (sd > span + RAMP + 2) continue
    if (Math.abs(sd) < bestAbs) { bestAbs = Math.abs(sd); best = ob }
  }
  if (!best) return { off: 0, side: 1, id: null }
  const side = obstacleSide[best.id] !== undefined
    ? obstacleSide[best.id]
    : (obstacleSide[best.id] = hashId(best.id) < 0.5 ? -1 : 1)
  const span = obsSpan(best)
  // sd = signed distance from the reference to the obstacle start (negative
  // while approaching, positive after passing it)
  const sd = signedDs(sCent, best.s - span / 2, L)
  // full offset while passing the obstacle (start..end), ramping up over
  // RAMP before and back down over RAMP after
  const rampIn = clamp((sd + RAMP) / RAMP, 0, 1)
  const rampOut = clamp((span + RAMP - sd) / RAMP, 0, 1)
  // the offset must clear the whole formation width, not just the obstacle:
  // lateral half of the obstacle + half the box + a safety margin
  const halfForm = (spacing / 2) + 0.8
  const off = Math.max(pp.detour_width, obsLateralHalf(best) + halfForm) * Math.min(rampIn, rampOut)
  return { off, side, id: best.id }
}

// along-track extent of a box obstacle (arc length it blocks)
function obsSpan(ob) {
  const da = (ob.angle ?? ob.heading) - ob.heading
  return Math.abs(ob.len * Math.cos(da)) + Math.abs(ob.width * Math.sin(da)) + 1
}

// lateral half-extent of a box obstacle relative to the track direction
function obsLateralHalf(ob) {
  const da = (ob.angle ?? ob.heading) - ob.heading
  return Math.abs(ob.len * Math.sin(da)) / 2 + Math.abs(ob.width * Math.cos(da)) / 2
}

function nearObstacle(model, sCent, lookahead, L) {
  let best = null
  let bestDs = Infinity
  for (const ob of model.obstacles) {
    const ds = wrapDs(ob.s, sCent, L)
    if (ds < bestDs && ds < lookahead) { bestDs = ds; best = ob }
  }
  if (best) {
    return {
      x: best.x, y: best.y,
      tunnel: best.type === 'tunnel',
    }
  }
  return null
}

// -------------------------------------------------- 4: formation manager
// Mode decision with hysteresis: switch to a threaded mode when an obstacle
// is close, but only revert to box once it has been clear for a while, so
// the formation doesn't flap at the window boundary. The reason is recorded
// for the debug UI (what triggered the current mode). \`fm\` is the manager's
// mutable state; slot transitions are smoothed over reform_time so the box
// morphs instead of snapping.
export function formationStep({ model, centroid, params, fm, time, dt, drones, trackLength, log }) {
  const lookahead = params.planner.lookahead
  const fmt = params.formation
  const trigger = fmt.trigger ?? 8
  let best = null
  let bd = Infinity
  let bestDs = 0
  for (const ob of model.obstacles) {
    const ds = wrapDs(ob.s, centroid.s, trackLength)
    if (ds > lookahead + trigger) continue
    const d = Math.hypot(ob.x - centroid.x, ob.y - centroid.y)
    const mark = ob.type === 'tunnel' ? d : d * 0.75
    if (mark < bd) { bd = mark; best = ob; bestDs = ds }
  }
  let mode
  let reason
  if (!best) {
    if (fm.lastMode === 'box') {
      mode = 'box'
      reason = 'box (clear ahead)'
    } else {
      const clearFor = time - (fm.lastModeChange ?? 0)
      if (clearFor > fmt.reform_time * 1.5) {
        mode = 'box'
        reason = 'box (clear for ' + clearFor.toFixed(1) + 's)'
      } else {
        mode = fm.lastMode
        reason = \`\${fm.lastMode} (holding \${clearFor.toFixed(1)}s after trigger)\`
      }
    }
  } else {
    mode = 'line'
    reason = \`\${mode} ← \${best.type} @\${bestDs.toFixed(0)}m ahead\`
  }

  const changed = fm.lastMode !== mode
  if (changed) {
    fm.lastModeChange = time
    fm.modeSince = time
    if (log) log('formation', \`mode \${fm.lastMode} → \${mode} · \${reason}\`)
  }
  fm.lastMode = mode
  fm.mode = mode
  fm.reason = reason

  const slots = slotDef(mode, fmt, drones.length)
  fm.slots = slots
  const k = changed ? 1 : 1 - Math.exp(-dt / (fmt.reform_time / 3))
  for (let i = 0; i < drones.length; i++) {
    const want = slots[i]
    drones[i].slotCur.f += (want.f - drones[i].slotCur.f) * k
    drones[i].slotCur.l += (want.l - drones[i].slotCur.l) * k
  }

  return { mode, reason, changed }
}

export function slotDef(mode, fmt, n) {
  const s = fmt.spacing
  const d = fmt.diamond
  const boxes = [
    { f: -s / 2, l: s / 2 },
    { f: -s / 2, l: -s / 2 },
    { f: s / 2, l: s / 2 },
    { f: s / 2, l: -s / 2 },
  ]
  const dia = [{ f: d, l: 0 }, { f: 0, l: -d }, { f: -d, l: 0 }, { f: 0, l: d }]
  const slots = []
  for (let i = 0; i < n; i++) {
    let slot = { f: 0, l: 0 }
    if (mode === 'box') slot = { ...boxes[i % boxes.length] }
    else if (mode === 'line') {
      // single-file convoy: trailing column, gaps > physical drone diameter
      const gap = Math.max(0.65, s * 0.8)
      slot = { f: -i * gap, l: 0 }
    }
    else if (mode === 'diamond') slot = { ...dia[i % dia.length] }
    slots.push(slot)
  }
  return slots
}

// -------------------------------------------------- 5: swarm controller
// The formation keeper: hold the slot around the moving centroid (the
// feedforward \`plan.v\` is the carrot that keeps the formation moving), keep
// apart from neighbours using their communicated states, and match the
// centroid's motion (damping). Fully decentralised — \`neighbours\` is what
// this drone currently believes about the others (noisy, delayed).
export function swarmStep({ drone, centroid, plan, params, model, neighbours, trackLength, obstacleSide }) {
  const sw = params.swarm
  const frame = formationFrame(params, centroid)
  const slot = drone.slotCur

  drone.slotPos = {
    x: centroid.x + Math.cos(frame) * slot.f + Math.cos(frame + Math.PI / 2) * slot.l,
    y: centroid.y + Math.sin(frame) * slot.f + Math.sin(frame + Math.PI / 2) * slot.l,
  }

  // per-drone detour: evaluate the obstacle detour at THIS drone's actual
  // arc position so stragglers (drones that fell behind the centroid) still
  // route around blocks instead of pinning against their faces, and so a
  // drone's slot only returns to the centreline after the drone itself has
  // cleared the block. Shorter ramp than the centroid's.
  const det = detourOffset(model, drone.s, params.planner, params.formation.spacing, trackLength, obstacleSide, 5)
  if (det.off !== 0) {
    drone.slotPos.x += Math.cos(frame + Math.PI / 2) * det.off * det.side
    drone.slotPos.y += Math.sin(frame + Math.PI / 2) * det.off * det.side
  }

  let ux = plan.vx, uy = plan.vy
  const slotT = { vx: sw.slot_gain * (drone.slotPos.x - drone.x), vy: sw.slot_gain * (drone.slotPos.y - drone.y) }
  ux += slotT.vx
  uy += slotT.vy

  // neighbour separation from communicated states (anticipatory: repels well
  // before contact so the hard safety filter rarely engages)
  const sepT = { vx: 0, vy: 0 }
  for (const obs of neighbours) {
    const rx = drone.x - obs.x, ry = drone.y - obs.y
    const r2 = rx * rx + ry * ry
    const range = sw.separation * 2.2
    if (r2 > 1e-8 && r2 < range * range) {
      const r = Math.sqrt(r2)
      const rep = ((range - r) / range) * 1.6
      sepT.vx += (rx / r) * rep
      sepT.vy += (ry / r) * rep
    }
  }
  ux += sepT.vx
  uy += sepT.vy

  // NOTE: no separate lane-keeping term. The slots are anchored to the
  // centroid, which follows the track, so slot-hold already centres the
  // formation — a lane term would fight the planner's detour offsets.

  const dampT = { vx: (centroid.vx - drone.vx) * sw.damping, vy: (centroid.vy - drone.vy) * sw.damping }
  ux += dampT.vx
  uy += dampT.vy

  drone.terms = { slot: slotT, sep: sepT, damp: dampT }
  drone.swarm = { vx: ux, vy: uy }
}

function formationFrame(params, centroid) {
  const fmt = params.formation
  if (fmt.axis === 'track') return centroid.heading
  return Math.atan2(centroid.vy, centroid.vx)
}

// ------------------------------------------- 6: combiner + safety filter
// The referee: clip the swarm command to the velocity limit, then enforce
// obstacle clearance (push out of solids, rail along tunnel walls) and
// inter-drone separation. \`prims\` is the obstacle geometry (solid rectangles
// and tunnel-wall rails); \`sepLog\` is a rate-limit memo for telemetry.
export function safetyStep({ drone, drones, prims, params, time, sepLog, log }) {
  const s = params.safety
  const swarmCmd = { vx: drone.swarm.vx, vy: drone.swarm.vy }
  let vx = swarmCmd.vx, vy = swarmCmd.vy

  const clipSpeed = () => {
    const sp = Math.hypot(vx, vy)
    if (sp > s.vmax) { const k = s.vmax / sp; vx *= k; vy *= k }
  }
  clipSpeed()

  for (const prim of prims) {
    // tunnel: axis-centring force — keeps the drone on the tunnel centreline
    // (including the entrance/exit ramp zone) so it threads the chute cleanly
    if (prim.src?.type === 'tunnel') {
      const t = prim.src
      const dx = drone.x - t.x, dy = drone.y - t.y
      const c = Math.cos(t.heading), sn = Math.sin(t.heading)
      const along = dx * c + dy * sn
      const lat = -dx * sn + dy * c
      const halfLen = t.length / 2 + 2
      // only guide drones that are actually at the chute — a far-off drone
      // must not be slingshotted sideways, and the force is capped
      if (Math.abs(along) < halfLen && Math.abs(lat) < t.width / 2 + 2) {
        const margin = Math.max(0.1, t.width / 2 - 0.45)
        if (Math.abs(lat) > margin) {
          const pushLat = -Math.sign(lat) * Math.min((Math.abs(lat) - margin) * 6, 6)
          vx += -sn * pushLat
          vy += c * pushLat
        }
      }
      continue
    }
    const dTo = distPrim(drone.x, drone.y, prim)
    const r = prim.r ?? 0
    const margin = s.clearance + DRONE_RADIUS
    if (dTo < r + margin) {
      const push = (r + margin - dTo) * 5
      const nx = drone.x - prim.x, ny = drone.y - prim.y
      const nn = Math.hypot(nx, ny) || 1e-6
      vx += (nx / nn) * push
      vy += (ny / nn) * push
    }
  }

  // hard inter-drone separation
  for (const other of drones) {
    if (other === drone) continue
    const rx = drone.x - other.x, ry = drone.y - other.y
    const r2 = rx * rx + ry * ry
    if (r2 > 1e-9 && r2 < s.sep ** 2) {
      const r = Math.sqrt(r2)
      const push = (s.sep - r) / r
      vx += (rx / r) * push * 7
      vy += (ry / r) * push * 7
      // telemetry: log when the hard guarantee actually engages
      // (rate-limited — it holds for many ticks while pressed)
      if (log && time - (sepLog[drone.id] ?? -1) > 0.8) {
        sepLog[drone.id] = time
        log('safety', \`hard separation vs #\${other.id} (\${r.toFixed(2)} m)\`)
      }
    }
  }

  clipSpeed()
  drone.terms.safety = { vx: vx - swarmCmd.vx, vy: vy - swarmCmd.vy }
  drone.cut = { vx, vy }
}

export function distPrim(x, y, prim) {
  if (prim.kind === 'circle') return Math.hypot(x - prim.x, y - prim.y) - prim.r
  const dx = x - prim.x, dy = y - prim.y
  const c = Math.cos(prim.angle), sn = Math.sin(prim.angle)
  const lx = dx * c + dy * sn
  const ly = -dx * sn + dy * c
  const qx = Math.max(Math.abs(lx) - prim.w / 2, 0)
  const qy = Math.max(Math.abs(ly) - prim.h / 2, 0)
  return Math.hypot(qx, qy)
}

// --------------------------------------------------- 7: classical autopilot
// Converts the final velocity command into motion the way a real flight
// controller would: a first-order lag (tau), an acceleration limit, and a
// processing lag. \`simStep\` is the control period.
export function autopilotStep({ drone, params, dt, simStep }) {
  const ap = params.autopilot
  // processing lag: the safety-filtered command is delayed before it reaches
  // the first-order lag filter. Delaying the COMMAND (not the velocity state)
  // keeps the control loop free of an extra delay line — otherwise the
  // effective time constant multiplies by the lag depth and the drones
  // converge to commands ~5x too slowly (visible as lingering off-line drift).
  const delayN = Math.max(1, Math.round((ap.lag / 1000) / simStep))
  drone._lagBuf.push({ vx: drone.cut.vx, vy: drone.cut.vy })
  if (drone._lagBuf.length > delayN) drone._lagBuf.shift()
  const cmd = drone._lagBuf[drone._lagBuf.length - delayN] || { vx: drone.cut.vx, vy: drone.cut.vy }

  const rig = 1 - Math.exp(-dt / ap.tau)
  let nvx = drone.vx + (cmd.vx - drone.vx) * rig
  let nvy = drone.vy + (cmd.vy - drone.vy) * rig

  const dvx = nvx - drone.vx, dvy = nvy - drone.vy
  const aMag = Math.hypot(dvx, dvy) / dt
  if (aMag > ap.accel) {
    const k = ap.accel / aMag
    nvx = drone.vx + dvx * k
    nvy = drone.vy + dvy * k
  }
  drone.vx = nvx
  drone.vy = nvy
}
`;function nn(r,l){const i=`function ${l}`,u=r.indexOf(i);if(u<0)return`// ${l} not found in source`;const d=r.indexOf(")",r.indexOf("(",u)),h=r.indexOf("{",d);if(h<0)return`// ${l} has no body`;let f=0,g=h;for(;g<r.length;g++){const p=r[g];if(p==="{")f++;else if(p==="}"&&(f--,f===0))break}return r.slice(u,g+1)}const ae=(r,l)=>({label:r,get:l}),Qo=[{id:"intro",name:"The big picture",color:"#d7e0ec",role:`A drone swarm is not four drones flying on their own — it is ONE control
      architecture making group decisions, with per-drone execution at the bottom.
      The whole pipeline is a chain of responsibilities:
      <b>perception</b> (eyes) → <b>local track model</b> (memory) → <b>path planner</b>
      (the group decision) → <b>formation manager</b> (the choreography) →
      <b>swarm controller</b> (holding position) → <b>combiner + safety</b> (the
      referee) → <b>autopilot</b> (the muscles). Two things run alongside: the
      formation manager choreographs drones, and inter-drone comms lets them feel
      each other.
      <br/><br/>
      The key idea is the <b>virtual structure</b>: the planner moves a single
      virtual point (the <b>centroid</b>) along the track, and each drone
      simply holds a fixed slot offset around it. If the centroid slows for a
      corner, the whole box slows. If it detours around a block, the whole box
      detours. That one design decision is what makes swarm coordination simple.
      <br/><br/>
      The motion cascade is: <b>model line → centroid → slots → drones</b>.
      The planner advances the centroid's arc progress along the model line
      every tick and its output <i>is</i> the centroid's pose — there is no
      separate "ghost" entity, that was just a nickname for the centroid's
      planned pose. Each drone's slot is a fixed offset around the centroid,
      and each drone flies to hold its slot. The drones never decide where the
      group goes — they only decide how to get back into position.`,code:{file:"src/core/pipeline.js",code:nn(Cn,"plannerStep").split(`
`).slice(0,40).join(`
`)+`
    // … (see the path planner entry for the full function)`},live:[ae("Pipeline stages",r=>"7 + comms + formation"),ae("Drone count",r=>{var l;return`${((l=r.drones)==null?void 0:l.length)??0}`}),ae("Centroid speed",r=>{var l,i;return`${((i=(l=r.plan)==null?void 0:l.speed)==null?void 0:i.toFixed(1))??0} m/s`}),ae("Formation mode",r=>{var l;return((l=r.fm)==null?void 0:l.mode)??"-"})],try:"Press <b>New track</b> to regenerate the world, watch the pipeline strip on the left, then open each system below in order."},{id:"contract",name:"The contract (interfaces)",color:"#d7e0ec",role:`Every stage in the deployable core consumes and produces plain-data
      interfaces — no objects, no sim state. That is what makes the modules
      swappable between simulation, the Python reference implementation and
      real hardware: <b>the interfaces never change</b>, only the drivers
      behind them do.
      <br/><br/>
      The same contract exists in Python in
      <code>engineering/themis/interfaces.py</code> — typed messages like
      <code>TrackModelOutput</code>, <code>PathPlannerOutput</code>,
      <code>FormationCommand</code>, <code>SwarmCommand</code> and
      <code>FinalCommand</code> — and the sim harness feeds the core through
      the very same shapes. Port the core to C and the interfaces carry over
      unchanged.`,code:{file:"src/core/pipeline.js",code:Cn.slice(0,Cn.indexOf("export const"))},live:[ae("Core stages",()=>"6 deployable functions"),ae("Harness stages",()=>"perception · comms · physics"),ae("Python mirror",()=>"themis/interfaces.py")]},{id:"perception",name:"1 · Perception",color:"#f0a020",role:`The drone's eyes. A camera feed is turned into a small geometric sketch:
      a handful of points along the track centreline ahead, plus a list of detected
      obstacles. Everything downstream works from this sketch — the pipeline never
      sees raw images, which is why you can swap the camera processor (classical
      OpenCV or lightweight AI) without changing anything else.
      <br/><br/>
      Perception runs on a <b>cadence</b> like a camera shutter (the "freq" knob),
      and every measurement is noisy: centreline points wobble (lateral_noise),
      obstacles jitter and can be missed entirely (miss_prob). The "mode" knob
      picks the sensing option — ground truth means no error, OpenCV/AI are
      represented by the noise model.`,badge:{kind:"harness",note:"sensor model — a real drone replaces this with a camera + OpenCV/AI detector producing the same scene contract"},code:{file:"src/sim/world.js",code:nn(Vo,"runPerception")},live:[ae("Mode",r=>{var l,i;return((i=(l=r.params)==null?void 0:l.perception)==null?void 0:i.mode)??"-"}),ae("Points ahead",r=>{var l,i;return`${((i=(l=r.scene)==null?void 0:l.centreline)==null?void 0:i.length)??0}`}),ae("Range",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.perception)==null?void 0:i.range_m)??0} m`}),ae("Cadence",r=>`${(1/(r.perceptPeriod??.033)).toFixed(0)} Hz`),ae("Obstacles seen",r=>{var l,i;return`${((i=(l=r.scene)==null?void 0:l.obstacles)==null?void 0:i.length)??0}`})],try:"Set <b>lateral_noise</b> to 1.5 to see how noisy eyes hurt the whole pipeline, then set it back to 0. Turn <b>miss_prob</b> up and watch obstacles appear/disappear in the model."},{id:"trackModel",name:"2 · Local track model",color:"#3db9ff",badge:{kind:"core",note:"runs on the companion computer as-is"},role:`Short-term memory of the track ahead. The course is waypoint-based, but
      tape (the perceived centreline) supplements the waypoints when visible — the
      <b>tape_trust</b> knob decides how much to believe the tape vs the map.
      <br/><br/>
      It also keeps a persistent list of obstacles with a <b>hysteresis window</b>:
      if the camera misses an obstacle for a moment (see perception's miss_prob),
      the model keeps it around for "obstacle_hysteresis" seconds instead of
      forgetting it instantly — real systems can't have the world blinking out.`,code:{file:"src/core/pipeline.js",code:nn(Cn,"trackModelStep")},live:[ae("Model line points",r=>{var l,i;return`${((i=(l=r.model)==null?void 0:l.line)==null?void 0:i.length)??0}`}),ae("Tape trust",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.trackModel)==null?void 0:i.tape_trust)??0}`}),ae("Obstacles tracked",r=>{var l,i;return`${((i=(l=r.model)==null?void 0:l.obstacles)==null?void 0:i.length)??0}`}),ae("Lookahead",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.trackModel)==null?void 0:i.lookahead)??0} m`})],try:"Set <b>tape_trust</b> to 1 (pure tape) then 0 (pure waypoints) and watch the model line in the FPV debug panel change."},{id:"planner",name:"3 · Path planner",color:"#61affe",badge:{kind:"core",note:"runs on the companion computer as-is"},role:`The group's decision-maker. It drives the <b>centroid</b> — the virtual
      point at the middle of the formation — along the perceived track. This is
      implemented as a <b>centroid follower</b>: the centroid remembers its
      progress along the track, so the steering never flips around when two
      track legs pass close.
      <br/><br/>
      <b>Exactly how the centroid moves:</b> the centroid holds an arc distance
      s along the model line. Every tick it advances <code>s += speed · dt</code>
      and re-samples its position <i>on the line at that arc distance</i>
      (<code>linePointAt</code> linearly interpolates between the two nearest
      centreline samples — so the centroid follows the line's local direction,
      never a straight shot toward a point). The planner's output <i>is</i> the
      centroid's pose; the world state is simply set to it. Crucially, the
      centroid lives only on the model line: it never retraces the path the
      physical drones flew, and the drones' trajectories never feed back into
      it.
      <br/><br/>
      It shapes speed by curvature (slow_zone), slows for obstacles, plans smooth
      <b>detours</b> around solid blocks (deterministic side per obstacle, so the
      swarm never oscillates left/right), and rails the centroid through
      <b>tunnels</b> along their axis. Output: ONE velocity command for the
      whole group — if every drone pursued the track independently, the formation
      would stretch apart.`,code:{file:"src/core/pipeline.js",code:nn(Cn,"plannerStep")},live:[ae("Centroid speed",r=>{var l,i;return`${((i=(l=r.plan)==null?void 0:l.speed)==null?void 0:i.toFixed(1))??0} m/s`}),ae("Lookahead",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.planner)==null?void 0:i.lookahead)??0} m`}),ae("Detour active",r=>{var l;return(l=r.plan)!=null&&l.detour?"ON":"off"}),ae("Centroid progress",r=>r.course?`${(r.centroidArc/r.course.length).toFixed(2)} laps`:"-")],try:"Turn <b>cruise</b> way up (16) and watch the centroid out-run the drones into the corners. Turn <b>detour_width</b> up and watch the whole box swing wide around blocks."},{id:"formation",name:"4 · Formation manager",color:"#bb9af7",badge:{kind:"core",note:"runs on the companion computer as-is"},role:`The choreographer. Decides which shape the swarm holds and assigns each
      drone a <b>slot offset</b> in the centroid's frame: the home shape is a flat
      <b>box</b>; when an obstacle forces single-file threading, the swarm switches
      to a <b>line</b> convoy. The mode switch has <b>hysteresis</b> — it only
      reverts to box after the obstacle has been clear for a while, so the formation
      doesn't flap at the boundary.
      <br/><br/>
      Slot transitions are smoothed over "reform_time" so the box morphs instead of
      snapping. The architecture target: reform to box within 2 seconds.`,code:{file:"src/core/pipeline.js",code:nn(Cn,"formationStep")+`

`+nn(Cn,"slotDef")},live:[ae("Mode",r=>{var l;return((l=r.fm)==null?void 0:l.mode)??"-"}),ae("Reason",r=>{var l;return((l=r.fm)==null?void 0:l.reason)??"-"}),ae("Reform time",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.formation)==null?void 0:i.reform_time)??0} s`}),ae("Spacing",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.formation)==null?void 0:i.spacing)??0} m`})],try:"Pause the sim just before a tunnel, then resume — watch the box contract into a line and reform. Toggle <b>reform_time</b> up to 4s to see the morph in slow motion."},{id:"comms",name:"· Inter-drone comms",color:"#7fdbca",badge:{kind:"harness",note:"driver model — a real drone replaces this with a radio/UWB driver; the broadcast/receive pattern carries over"},role:`The gossip channel. Every drone broadcasts its position on a schedule
      (40 Hz by default) over a radio link with realistic imperfections: packets
      drop (loss), deliveries are delayed with jitter, and the received positions
      carry UWB ranging noise (uwb_noise). The swarm controller uses these
      <b>neighbour states</b> to keep drones apart <i>before</i> they touch —
      anticipatory separation instead of reactive panic.`,code:{file:"src/sim/world.js",code:nn(Vo,"maybeBroadcast")+`

`+nn(Vo,"readComms")},live:[ae("Rate",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.comms)==null?void 0:i.hz)??0} Hz`}),ae("Dropped now",r=>{var l;return[...((l=r.comms)==null?void 0:l.dropped)??[]].join(",")||"none"}),ae("Buffer age",r=>{var l;return`${(r.time-(((l=r.comms)==null?void 0:l.lastBroadcast)??r.time)).toFixed(2)} s`}),ae("UWB noise",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.comms)==null?void 0:i.uwb_noise)??0} m`})],try:"Set <b>loss</b> to 0.5 — drones can no longer see each other reliably and the formation loosens. Set <b>jitter</b> to 200ms for stale neighbours."},{id:"swarm",name:"5 · Swarm controller",color:"#c3e88d",badge:{kind:"core",note:"runs on the companion computer as-is, fed by the comms driver"},role:`The formation keeper. Every drone computes its own velocity command:
      hold its slot position around the moving centroid (slot_gain), keep apart
      from neighbours using comms states (anticipatory separation), and match
      the centroid's motion (damping). It is fully decentralised — each drone
      only knows the centroid command and the neighbours' broadcasts.
      <br/><br/>
      <b>No lane-keeping term, deliberately.</b> Classic formation controllers
      add a term that pulls drones back to the track centreline when they drift
      — but here the slots are anchored to the centroid, which follows the
      track, so slot-hold already centres the formation. A lane term would only
      fight the planner's detour offsets (pulling drones out of the avoidance
      lane), so it was removed.
      <br/><br/>
      <b>What keeps the swarm moving (the carrot on a stick):</b> the command
      is always <code>u = v_centroid + K·(slot − x)</code> — centroid velocity
      fed forward, plus a proportional correction to the slot. The slot
      targets are recomputed every tick around the <i>advancing</i> centroid,
      whose speed depends on the planner's speed shaping, never on tracking
      error: the carrot moves whether or not anyone is on it. So even a drone
      sitting <i>exactly</i> on its slot gets commanded at the centroid's
      velocity — the command never goes to zero at perfect tracking. The
      proportional term only handles deviations from the slot; the feedforward
      is what keeps the formation moving.`,code:{file:"src/core/pipeline.js",code:nn(Cn,"swarmStep")},live:[ae("Drone",r=>{var l,i;return`#${((i=(l=r.drones)==null?void 0:l[0])==null?void 0:i.id)??"-"}`}),ae("Slot error",r=>{var i;const l=(i=r.drones)==null?void 0:i[0];return l?`${Math.hypot(l.slotPos.x-l.x,l.slotPos.y-l.y).toFixed(2)} m`:"-"}),ae("Lateral offset",r=>{var l,i;return`${(((i=(l=r.drones)==null?void 0:l[0])==null?void 0:i.off)??0).toFixed(2)} m`})],try:"Turn <b>slot_gain</b> down to 0.2 and the box drifts apart behind the centroid. Turn <b>damping</b> to 0 and watch the drones overshoot their slots."},{id:"safety",name:"6 · Combiner + safety filter",color:"#ffcb6b",badge:{kind:"core",note:"the deployable velocity-space filter — on real hardware this, not the sim's positional resolver, prevents contact"},role:`The referee. Takes each drone's swarm command, clips it to a velocity
      limit (vmax), then enforces hard guarantees every simulation tick:
      <b>obstacle clearance</b> (push out of solids, rail along tunnel walls) and
      <b>inter-drone separation</b> (never closer than "sep"). The result is that
      hard collisions are <b>structurally impossible</b> — near-misses (rail
      engagements) are the real safety signal, shown as amber flashes.`,code:{file:"src/core/pipeline.js",code:nn(Cn,"safetyStep")},live:[ae("Velocity clip",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.safety)==null?void 0:i.vmax)??0} m/s`}),ae("Min separation",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.safety)==null?void 0:i.sep)??0} m`}),ae("Clearance",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.safety)==null?void 0:i.clearance)??0} m`}),ae("Collisions",r=>{var l;return`${((l=r.stats)==null?void 0:l.collisionCount)??0}`}),ae("Near-misses",r=>{var l,i;return`${(((l=r.stats)==null?void 0:l.nearDrone)??0)+(((i=r.stats)==null?void 0:i.nearObs)??0)}`})],try:"Set <b>sep</b> to 2.5 — the formation has to stretch to obey the separation guarantee. Set <b>vmax</b> to 6 and watch the swarm cruise slower."},{id:"autopilot",name:"7 · Classical autopilot",color:"#7fdbca",badge:{kind:"core",note:"a faithful velocity-mode model — on hardware the inner attitude/motor loops live in the flight controller"},role:`The muscles. Converts the final velocity command into actual motion the
      way a real flight controller would: a <b>first-order lag</b> (tau) models the
      response time of the attitude controller, an <b>acceleration limit</b> models
      the motors, and a <b>processing lag</b> models the compute delay between
      sensing and actuation. This is deliberately classical — stability is never
      left to AI.`,code:{file:"src/core/pipeline.js",code:nn(Cn,"autopilotStep")},live:[ae("Response τ",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.autopilot)==null?void 0:i.tau)??0} s`}),ae("Accel limit",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.autopilot)==null?void 0:i.accel)??0} m/s²`}),ae("Processing lag",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.autopilot)==null?void 0:i.lag)??0} ms`})],try:"Set <b>tau</b> to 2 — the drones visibly lag every command. Set <b>lag</b> to 150ms and watch commands arrive late at the motors."},{id:"course",name:"· Course generator",color:"#8892a0",badge:{kind:"harness",note:"sim-only — a real system gets the course from the a-priori waypoint map, not a generator"},role:`The track designer. A seed creates a random closed polygon (vertices,
      radius, radius_noise), then every corner is <b>filleted</b> — replaced by an
      arc with a random turn radius — and the result is sampled into a centreline
      parameterised by arc length s. Everything downstream (perception, planner,
      metrics) speaks in arc length, which is what makes swapping track sources
      trivial.`,code:{file:"src/sim/track/generate.js",code:nn(mh,"filletSegments")},live:[ae("Seed",r=>{var l;return`${((l=r.course)==null?void 0:l.seed)??"-"}`}),ae("Track length",r=>{var l;return`${(((l=r.course)==null?void 0:l.length)??0).toFixed(0)} m`}),ae("Vertices",r=>{var l,i;return`${((i=(l=r.course)==null?void 0:l.poly)==null?void 0:i.length)??0}`}),ae("Centreline samples",r=>{var l,i;return`${((i=(l=r.course)==null?void 0:l.centerline)==null?void 0:i.length)??0}`})],try:"Click <b>New track</b> a few times — same seeds, same tracks: it is fully deterministic. Change <b>vertices</b> to 12 for a long track."},{id:"obstacles",name:"· Obstacle placement",color:"#ff5c5c",badge:{kind:"harness",note:"sim-only — on a real system obstacles arrive through perception, not placement"},role:`The hazards. Two kinds drawn from a known finite set: <b>blocks</b> sit
      on the tape and force a planned detour; <b>tunnels</b> force the formation
      into a single-file line to thread the chute. Placement picks random arc
      positions with enforced minimum spacing and type mixing from the "kinds"
      knob.`,code:{file:"src/sim/obstacles.js",code:nn(yh,"placeObstacles")},live:[ae("Count",r=>{var l;return`${((l=r.obstacles)==null?void 0:l.length)??0}`}),ae("Kinds",r=>{var l,i;return(((i=(l=r.params)==null?void 0:l.obstacles)==null?void 0:i.kinds)??[]).join(", ")||"-"}),ae("Ahead of drone",r=>{var u,d;const l=((d=(u=r.drones)==null?void 0:u[0])==null?void 0:d.s)??0,i=(r.obstacles??[]).map(h=>h.s).filter(h=>h>=l);return i.length?`${(Math.min(...i)-l).toFixed(0)} m`:"none this lap"})],try:'Uncheck "block" in <b>kinds</b> to race a tunnel-only track, or set <b>count</b> to 0 for a clean speed run.'},{id:"collisions",name:"· Collision handling",color:"#ff5370",badge:{kind:"harness",note:"sim physics — the positional resolver exists because the sim has no motors; on hardware the deployable safety filter prevents contact"},role:`The hard guarantee underneath everything. Every tick, positions are
      resolved so that drones stay ≥ 0.65 m apart, drone-to-solid stays ≥ radius
      + 0.55 m, and tunnel walls keep a 0.3 m rail — physical contact is
      structurally impossible. When a rail engages, it is logged as a
      <b>near-miss</b> (amber flash) rather than a collision — near-misses are the
      meaningful safety metric for tuning.`,code:{file:"src/sim/world.js",code:nn(Vo,"resolveCollisions")},live:[ae("Collisions",r=>{var l;return`${((l=r.stats)==null?void 0:l.collisionCount)??0}`}),ae("Near-miss drone",r=>{var l;return`${((l=r.stats)==null?void 0:l.nearDrone)??0}`}),ae("Near-miss obstacle",r=>{var l;return`${((l=r.stats)==null?void 0:l.nearObs)??0}`})],try:"Watch the amber flashes in 2D view when the swarm squeezes through tunnels — those are rail engagements, by design."}];function gh({world:r,initialId:l="intro",onClose:i}){var f;const[u,d]=re.useState(l);re.useEffect(()=>{const g=p=>{p.key==="Escape"&&i()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[i]);const h=re.useMemo(()=>Qo.find(g=>g.id===u)??Qo[0],[u]);return _.jsx("div",{className:"code-overlay",onClick:i,children:_.jsxs("div",{className:"code-sheet",onClick:g=>g.stopPropagation(),children:[_.jsxs("div",{className:"code-head",children:[_.jsx("h2",{children:"How the swarm works — system by system"}),_.jsx("span",{className:"hint",children:"every stage · the live code behind it · what to try"}),_.jsx("div",{className:"spacer"}),_.jsx("button",{className:"btn",onClick:i,children:"Close ✕"})]}),_.jsxs("div",{className:"code-body",children:[_.jsx("nav",{className:"code-menu",children:Qo.map(g=>_.jsxs("button",{className:g.id===u?"active":"",onClick:()=>d(g.id),children:[_.jsx("span",{className:"dot",style:{background:g.color}}),g.name]},g.id))}),_.jsxs("div",{className:"code-detail",children:[_.jsx("h3",{style:{color:h.color},children:h.name}),h.badge&&_.jsx("span",{className:"badge "+h.badge.kind,children:h.badge.kind==="core"?"deployable core":"sim harness"}),((f=h.badge)==null?void 0:f.note)&&_.jsx("div",{className:"badge-note",children:h.badge.note}),_.jsx("div",{className:"role",dangerouslySetInnerHTML:{__html:h.role}}),_.jsx("div",{className:"live-grid",children:(h.live??[]).map(g=>_.jsxs("div",{className:"live-cell",children:[_.jsx("b",{children:g.label}),_.jsx("span",{children:g.get(r)??"-"})]},g.label))}),h.try&&_.jsx("div",{className:"try",dangerouslySetInnerHTML:{__html:`🧪 Try this: ${h.try}`}}),_.jsxs("div",{className:"code-block",children:[_.jsxs("div",{className:"code-file",children:[_.jsx("span",{children:h.code.file}),_.jsx("span",{children:"the real engine source"})]}),_.jsx("pre",{children:h.code.code})]})]})]})]})})}const vh=Object.fromEntries(Qo.map(r=>[r.id,r.color]));function xh({world:r,onOpenSystem:l}){const i=((r==null?void 0:r.decisions)??[]).slice(-14).reverse();return i.length?_.jsxs("div",{className:"panel decisions",children:[_.jsx("h3",{children:"Decisions — what happened & why"}),i.map((u,d)=>_.jsxs("button",{className:"dec",onClick:()=>l(u.stage),title:"open this system in How it works",children:[_.jsxs("span",{className:"dec-t",children:[u.t.toFixed(1),"s"]}),_.jsx("span",{className:"dec-dot",style:{background:vh[u.stage]??"#8892a0"}}),_.jsx("span",{className:"dec-msg",children:u.msg})]},i.length-d))]}):null}function wh(r){var f,g,p,v,x,m;if(!r||!((f=r.drones)!=null&&f.length))return"waiting for the world…";const l=[],i=r.fm;if(i){const y=i.mode==="box"?"clear track ahead":i.reason??"obstacle ahead";l.push(`holding a ${i.mode} formation (${y})`)}const u=r.plan;u&&(u.detour&&l.push("the centroid is routing around a solid obstacle"),u.speed!=null&&(u.speed<2.5?l.push(`slowing to ${u.speed.toFixed(1)} m/s — corner or obstacle ahead`):l.push(`cruising at ${u.speed.toFixed(1)} m/s`)));const d=(g=r.stats)==null?void 0:g.nearEvents;if(d&&d.length){const y=d[d.length-1];r.time-y.t<.4&&l.push(y.kind==="tunnel"?"threading the tunnel — walls railing the drone onto the axis":"pressed against an obstacle — safety rail holding clearance")}const h=(v=(p=r.stats)==null?void 0:p.conf)==null?void 0:v.minSep;return h!=null&&h<(((m=(x=r.params)==null?void 0:x.safety)==null?void 0:m.sep)??.9)+.05&&l.push("safety filter actively keeping drones apart"),l.join(" · ")}function kh(){const[r,l]=re.useState(()=>Sc()),[i,u]=re.useState(null),[d,h]=re.useState(!0),[f,g]=re.useState(1),[p,v]=re.useState("top"),[x,m]=re.useState(0),[y,k]=re.useState(!0),[E,b]=re.useState(!0),[z,L]=re.useState(!1),[O,$]=re.useState("intro"),[R,q]=re.useState({slot:!1,sep:!1,damp:!1,safety:!1}),[B,j]=re.useState(null),Q=re.useRef(null),X=re.useRef(null),V=re.useRef(r);V.current=r;const Z=re.useRef(null),ve=re.useRef(d);ve.current=d;const xe=re.useRef(f);xe.current=f,Z.current===null&&(Z.current=Cr(r)),re.useEffect(()=>{let W=0,ee=performance.now(),de=0;const pe=ye=>{const Me=Math.min((ye-ee)/1e3,.1);ee=ye,ve.current&&Nc(Z.current,Me*xe.current),de+=Me,de>.12&&(de=0,u({...Z.current,_tick:performance.now()})),W=requestAnimationFrame(pe)};return W=requestAnimationFrame(pe),()=>cancelAnimationFrame(W)},[]);const Se=re.useCallback(W=>{const ee=ti(V.current,W);V.current=ee,l(ee),Object.keys(W).some(pe=>pe==="course"||pe==="obstacles"||pe==="sim")?Z.current=Cr(ee):Z.current.params=ee},[]),me=re.useCallback(()=>{Z.current=Cr(V.current)},[]),Re=re.useCallback(()=>{Se({course:{seed:Math.floor(Math.random()*1e5)},obstacles:{seed:Math.floor(Math.random()*1e5)}})},[Se]),we=re.useCallback(W=>{Se(W),Z.current=Cr(V.current)},[Se]),H=re.useCallback(W=>{var de,pe;const ee=Q.current;X.current={y:W.clientY,h:(ee==null?void 0:ee.getBoundingClientRect().height)??400},(pe=(de=W.currentTarget).setPointerCapture)==null||pe.call(de,W.pointerId)},[]),oe=re.useCallback(W=>{const ee=X.current;ee&&j(Math.max(160,Math.min(window.innerHeight-80,ee.h+(W.clientY-ee.y))))},[]),Y=re.useCallback(()=>{X.current=null},[]),P=re.useCallback(()=>{var ee;const W=Q.current;W&&(document.fullscreenElement?document.exitFullscreen():(ee=W.requestFullscreen)==null||ee.call(W))},[]),I=re.useCallback(W=>{$(W),L(!0)},[]),ce=re.useCallback(W=>{q(ee=>({...ee,[W]:!ee[W]}))},[]);return _.jsxs("div",{className:"app",children:[_.jsxs("div",{className:"topbar",children:[_.jsx("h1",{children:"Drone Swarm Racing · control architecture bench"}),_.jsx("div",{className:"spacer"}),_.jsx("button",{className:"btn primary",onClick:()=>h(W=>!W),children:d?"Pause":"Run"}),_.jsx("button",{className:"btn",onClick:me,children:"Reset race"}),_.jsx("button",{className:"btn",onClick:Re,children:"New track"}),_.jsx("button",{className:"btn",onClick:P,children:"Fullscreen"}),_.jsx("button",{className:"btn"+(y?" primary":""),onClick:()=>k(W=>!W),children:"Formation"}),p==="top"&&_.jsx("button",{className:"btn"+(E?" primary":""),onClick:()=>b(W=>!W),children:"Follow swarm"}),_.jsx("button",{className:"btn learn",onClick:()=>L(!0),children:"How it works"}),_.jsxs("div",{className:"view-group",children:[_.jsx("button",{className:"btn"+(p==="top"?" primary":""),onClick:()=>v("top"),children:"2D"}),_.jsx("button",{className:"btn"+(p==="fpv"?" primary":""),onClick:()=>v("fpv"),children:"FPV"}),p==="fpv"&&_.jsx("select",{className:"drone-sel",value:x,onChange:W=>m(Number(W.target.value)),"aria-label":"FPV drone",children:Array.from({length:V.current.sim.drones},(W,ee)=>_.jsxs("option",{value:ee,children:["cam ",ee]},ee))})]}),_.jsxs("div",{className:"speed-group",children:["Speed",[1,2,4].map(W=>_.jsxs("button",{className:"btn"+(f===W?" primary":""),onClick:()=>g(W),children:["×",W]},W))]})]}),_.jsxs("div",{className:"main",children:[_.jsxs("div",{className:"canvas-wrap",ref:Q,style:B?{height:B}:void 0,children:[p==="top"?_.jsx(zp,{getWorld:()=>Z.current,overlay:y,follow:E,terms:R}):_.jsx(eh,{getWorld:()=>Z.current,droneId:x,overlay:y,terms:R}),_.jsxs("div",{className:"term-toggles",title:"velocity command arrows",children:[_.jsx("span",{className:"term-label",children:"arrows"}),Object.entries(Go).map(([W,ee])=>_.jsxs("button",{className:"chip"+(R[W]?" on":""),style:R[W]?{borderColor:ee,color:ee}:void 0,onClick:()=>ce(W),children:[_.jsx("span",{className:"term-dot",style:{background:ee}}),W]},W))]})]}),_.jsx("div",{className:"canvas-resize",onPointerDown:H,onPointerMove:oe,onPointerUp:Y,onPointerCancel:Y,title:"Drag to resize"}),_.jsx("div",{className:"whyline",children:wh(i)}),p==="fpv"&&_.jsx(nh,{getWorld:()=>Z.current,droneId:x})]}),_.jsxs("div",{className:"side",children:[_.jsx(ih,{world:i}),_.jsx(xh,{world:i,onOpenSystem:I}),_.jsx(uh,{world:i}),_.jsx(hh,{getParams:()=>V.current,onApply:we}),_.jsxs("div",{className:"panel",children:[_.jsx("h3",{children:"System knobs"}),Hf.map(W=>_.jsx(oh,{stage:W,params:r,onPatch:Se},W))]})]}),z&&_.jsx(gh,{world:i,initialId:O,onClose:()=>L(!1)},O)]})}Uf.createRoot(document.getElementById("root")).render(_.jsx(Of.StrictMode,{children:_.jsx(kh,{})}));
