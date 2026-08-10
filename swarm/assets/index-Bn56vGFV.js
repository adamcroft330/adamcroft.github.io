(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function i(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(f){if(f.ep)return;f.ep=!0;const h=i(f);fetch(f.href,h)}})();function kc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vl={exports:{}},_r={},ql={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu;function Lf(){if(Zu)return fe;Zu=1;var r=Symbol.for("react.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),d=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function m(b){return b===null||typeof b!="object"?null:(b=y&&b[y]||b["@@iterator"],typeof b=="function"?b:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,P={};function j(b,F,ce){this.props=b,this.context=F,this.refs=P,this.updater=ce||k}j.prototype.isReactComponent={},j.prototype.setState=function(b,F){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,F,"setState")},j.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function L(){}L.prototype=j.prototype;function O(b,F,ce){this.props=b,this.context=F,this.refs=P,this.updater=ce||k}var I=O.prototype=new L;I.constructor=O,E(I,j.prototype),I.isPureReactComponent=!0;var z=Array.isArray,q=Object.prototype.hasOwnProperty,B={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function Q(b,F,ce){var W,ee={},de=null,pe=null;if(F!=null)for(W in F.ref!==void 0&&(pe=F.ref),F.key!==void 0&&(de=""+F.key),F)q.call(F,W)&&!R.hasOwnProperty(W)&&(ee[W]=F[W]);var ye=arguments.length-2;if(ye===1)ee.children=ce;else if(1<ye){for(var Me=Array(ye),tn=0;tn<ye;tn++)Me[tn]=arguments[tn+2];ee.children=Me}if(b&&b.defaultProps)for(W in ye=b.defaultProps,ye)ee[W]===void 0&&(ee[W]=ye[W]);return{$$typeof:r,type:b,key:de,ref:pe,props:ee,_owner:B.current}}function K(b,F){return{$$typeof:r,type:b.type,key:F,ref:b.ref,props:b.props,_owner:b._owner}}function V(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function J(b){var F={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ce){return F[ce]})}var ve=/\/+/g;function xe(b,F){return typeof b=="object"&&b!==null&&b.key!=null?J(""+b.key):F.toString(36)}function Se(b,F,ce,W,ee){var de=typeof b;(de==="undefined"||de==="boolean")&&(b=null);var pe=!1;if(b===null)pe=!0;else switch(de){case"string":case"number":pe=!0;break;case"object":switch(b.$$typeof){case r:case l:pe=!0}}if(pe)return pe=b,ee=ee(pe),b=W===""?"."+xe(pe,0):W,z(ee)?(ce="",b!=null&&(ce=b.replace(ve,"$&/")+"/"),Se(ee,F,ce,"",function(tn){return tn})):ee!=null&&(V(ee)&&(ee=K(ee,ce+(!ee.key||pe&&pe.key===ee.key?"":(""+ee.key).replace(ve,"$&/")+"/")+b)),F.push(ee)),1;if(pe=0,W=W===""?".":W+":",z(b))for(var ye=0;ye<b.length;ye++){de=b[ye];var Me=W+xe(de,ye);pe+=Se(de,F,ce,Me,ee)}else if(Me=m(b),typeof Me=="function")for(b=Me.call(b),ye=0;!(de=b.next()).done;)de=de.value,Me=W+xe(de,ye++),pe+=Se(de,F,ce,Me,ee);else if(de==="object")throw F=String(b),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return pe}function he(b,F,ce){if(b==null)return b;var W=[],ee=0;return Se(b,W,"","",function(de){return F.call(ce,de,ee++)}),W}function ze(b){if(b._status===-1){var F=b._result;F=F(),F.then(function(ce){(b._status===0||b._status===-1)&&(b._status=1,b._result=ce)},function(ce){(b._status===0||b._status===-1)&&(b._status=2,b._result=ce)}),b._status===-1&&(b._status=0,b._result=F)}if(b._status===1)return b._result.default;throw b._result}var we={current:null},H={transition:null},oe={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:H,ReactCurrentOwner:B};function Y(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:he,forEach:function(b,F,ce){he(b,function(){F.apply(this,arguments)},ce)},count:function(b){var F=0;return he(b,function(){F++}),F},toArray:function(b){return he(b,function(F){return F})||[]},only:function(b){if(!V(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},fe.Component=j,fe.Fragment=i,fe.Profiler=f,fe.PureComponent=O,fe.StrictMode=u,fe.Suspense=p,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,fe.act=Y,fe.cloneElement=function(b,F,ce){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var W=E({},b.props),ee=b.key,de=b.ref,pe=b._owner;if(F!=null){if(F.ref!==void 0&&(de=F.ref,pe=B.current),F.key!==void 0&&(ee=""+F.key),b.type&&b.type.defaultProps)var ye=b.type.defaultProps;for(Me in F)q.call(F,Me)&&!R.hasOwnProperty(Me)&&(W[Me]=F[Me]===void 0&&ye!==void 0?ye[Me]:F[Me])}var Me=arguments.length-2;if(Me===1)W.children=ce;else if(1<Me){ye=Array(Me);for(var tn=0;tn<Me;tn++)ye[tn]=arguments[tn+2];W.children=ye}return{$$typeof:r,type:b.type,key:ee,ref:de,props:W,_owner:pe}},fe.createContext=function(b){return b={$$typeof:d,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:h,_context:b},b.Consumer=b},fe.createElement=Q,fe.createFactory=function(b){var F=Q.bind(null,b);return F.type=b,F},fe.createRef=function(){return{current:null}},fe.forwardRef=function(b){return{$$typeof:v,render:b}},fe.isValidElement=V,fe.lazy=function(b){return{$$typeof:x,_payload:{_status:-1,_result:b},_init:ze}},fe.memo=function(b,F){return{$$typeof:g,type:b,compare:F===void 0?null:F}},fe.startTransition=function(b){var F=H.transition;H.transition={};try{b()}finally{H.transition=F}},fe.unstable_act=Y,fe.useCallback=function(b,F){return we.current.useCallback(b,F)},fe.useContext=function(b){return we.current.useContext(b)},fe.useDebugValue=function(){},fe.useDeferredValue=function(b){return we.current.useDeferredValue(b)},fe.useEffect=function(b,F){return we.current.useEffect(b,F)},fe.useId=function(){return we.current.useId()},fe.useImperativeHandle=function(b,F,ce){return we.current.useImperativeHandle(b,F,ce)},fe.useInsertionEffect=function(b,F){return we.current.useInsertionEffect(b,F)},fe.useLayoutEffect=function(b,F){return we.current.useLayoutEffect(b,F)},fe.useMemo=function(b,F){return we.current.useMemo(b,F)},fe.useReducer=function(b,F,ce){return we.current.useReducer(b,F,ce)},fe.useRef=function(b){return we.current.useRef(b)},fe.useState=function(b){return we.current.useState(b)},fe.useSyncExternalStore=function(b,F,ce){return we.current.useSyncExternalStore(b,F,ce)},fe.useTransition=function(){return we.current.useTransition()},fe.version="18.3.1",fe}var Ju;function Jl(){return Ju||(Ju=1,ql.exports=Lf()),ql.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ec;function jf(){if(ec)return _r;ec=1;var r=Jl(),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,f=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(v,p,g){var x,y={},m=null,k=null;g!==void 0&&(m=""+g),p.key!==void 0&&(m=""+p.key),p.ref!==void 0&&(k=p.ref);for(x in p)u.call(p,x)&&!h.hasOwnProperty(x)&&(y[x]=p[x]);if(v&&v.defaultProps)for(x in p=v.defaultProps,p)y[x]===void 0&&(y[x]=p[x]);return{$$typeof:l,type:v,key:m,ref:k,props:y,_owner:f.current}}return _r.Fragment=i,_r.jsx=d,_r.jsxs=d,_r}var nc;function Rf(){return nc||(nc=1,Vl.exports=jf()),Vl.exports}var C=Rf(),re=Jl();const zf=kc(re);var Bo={},Ql={exports:{}},en={},Yl={exports:{}},Kl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc;function Of(){return tc||(tc=1,(function(r){function l(H,oe){var Y=H.length;H.push(oe);e:for(;0<Y;){var b=Y-1>>>1,F=H[b];if(0<f(F,oe))H[b]=oe,H[Y]=F,Y=b;else break e}}function i(H){return H.length===0?null:H[0]}function u(H){if(H.length===0)return null;var oe=H[0],Y=H.pop();if(Y!==oe){H[0]=Y;e:for(var b=0,F=H.length,ce=F>>>1;b<ce;){var W=2*(b+1)-1,ee=H[W],de=W+1,pe=H[de];if(0>f(ee,Y))de<F&&0>f(pe,ee)?(H[b]=pe,H[de]=Y,b=de):(H[b]=ee,H[W]=Y,b=W);else if(de<F&&0>f(pe,Y))H[b]=pe,H[de]=Y,b=de;else break e}}return oe}function f(H,oe){var Y=H.sortIndex-oe.sortIndex;return Y!==0?Y:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var d=Date,v=d.now();r.unstable_now=function(){return d.now()-v}}var p=[],g=[],x=1,y=null,m=3,k=!1,E=!1,P=!1,j=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(H){for(var oe=i(g);oe!==null;){if(oe.callback===null)u(g);else if(oe.startTime<=H)u(g),oe.sortIndex=oe.expirationTime,l(p,oe);else break;oe=i(g)}}function z(H){if(P=!1,I(H),!E)if(i(p)!==null)E=!0,ze(q);else{var oe=i(g);oe!==null&&we(z,oe.startTime-H)}}function q(H,oe){E=!1,P&&(P=!1,L(Q),Q=-1),k=!0;var Y=m;try{for(I(oe),y=i(p);y!==null&&(!(y.expirationTime>oe)||H&&!J());){var b=y.callback;if(typeof b=="function"){y.callback=null,m=y.priorityLevel;var F=b(y.expirationTime<=oe);oe=r.unstable_now(),typeof F=="function"?y.callback=F:y===i(p)&&u(p),I(oe)}else u(p);y=i(p)}if(y!==null)var ce=!0;else{var W=i(g);W!==null&&we(z,W.startTime-oe),ce=!1}return ce}finally{y=null,m=Y,k=!1}}var B=!1,R=null,Q=-1,K=5,V=-1;function J(){return!(r.unstable_now()-V<K)}function ve(){if(R!==null){var H=r.unstable_now();V=H;var oe=!0;try{oe=R(!0,H)}finally{oe?xe():(B=!1,R=null)}}else B=!1}var xe;if(typeof O=="function")xe=function(){O(ve)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,he=Se.port2;Se.port1.onmessage=ve,xe=function(){he.postMessage(null)}}else xe=function(){j(ve,0)};function ze(H){R=H,B||(B=!0,xe())}function we(H,oe){Q=j(function(){H(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){E||k||(E=!0,ze(q))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return i(p)},r.unstable_next=function(H){switch(m){case 1:case 2:case 3:var oe=3;break;default:oe=m}var Y=m;m=oe;try{return H()}finally{m=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Y=m;m=H;try{return oe()}finally{m=Y}},r.unstable_scheduleCallback=function(H,oe,Y){var b=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?b+Y:b):Y=b,H){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Y+F,H={id:x++,callback:oe,priorityLevel:H,startTime:Y,expirationTime:F,sortIndex:-1},Y>b?(H.sortIndex=Y,l(g,H),i(p)===null&&H===i(g)&&(P?(L(Q),Q=-1):P=!0,we(z,Y-b))):(H.sortIndex=F,l(p,H),E||k||(E=!0,ze(q))),H},r.unstable_shouldYield=J,r.unstable_wrapCallback=function(H){var oe=m;return function(){var Y=m;m=oe;try{return H.apply(this,arguments)}finally{m=Y}}}})(Kl)),Kl}var rc;function If(){return rc||(rc=1,Yl.exports=Of()),Yl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oc;function Ff(){if(oc)return en;oc=1;var r=Jl(),l=If();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,f={};function h(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(f[e]=n,e=0;e<n.length;e++)u.add(n[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function m(e){return p.call(y,e)?!0:p.call(x,e)?!1:g.test(e)?y[e]=!0:(x[e]=!0,!1)}function k(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,n,t,o){if(n===null||typeof n>"u"||k(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function P(e,n,t,o,s,a,c){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=c}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){j[e]=new P(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];j[n]=new P(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){j[e]=new P(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){j[e]=new P(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){j[e]=new P(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){j[e]=new P(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){j[e]=new P(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){j[e]=new P(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){j[e]=new P(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(L,O);j[n]=new P(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(L,O);j[n]=new P(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(L,O);j[n]=new P(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){j[e]=new P(e,1,!1,e.toLowerCase(),null,!1,!1)}),j.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){j[e]=new P(e,1,!1,e.toLowerCase(),null,!0,!0)});function I(e,n,t,o){var s=j.hasOwnProperty(n)?j[n]:null;(s!==null?s.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(E(n,t,s,o)&&(t=null),o||s===null?m(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,o=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var z=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),B=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),J=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),H=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,b;function F(e){if(b===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);b=n&&n[1]||""}return`
`+b+e}var ce=!1;function W(e,n){if(!e||ce)return"";ce=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(N){var o=N}Reflect.construct(e,[],n)}else{try{n.call()}catch(N){o=N}e.call(n.prototype)}else{try{throw Error()}catch(N){o=N}e()}}catch(N){if(N&&o&&typeof N.stack=="string"){for(var s=N.stack.split(`
`),a=o.stack.split(`
`),c=s.length-1,w=a.length-1;1<=c&&0<=w&&s[c]!==a[w];)w--;for(;1<=c&&0<=w;c--,w--)if(s[c]!==a[w]){if(c!==1||w!==1)do if(c--,w--,0>w||s[c]!==a[w]){var S=`
`+s[c].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=c&&0<=w);break}}}finally{ce=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?F(e):""}function ee(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1),e;case 11:return e=W(e.type.render,!1),e;case 1:return e=W(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case B:return"Portal";case K:return"Profiler";case Q:return"StrictMode";case xe:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case J:return(e.displayName||"Context")+".Consumer";case V:return(e._context.displayName||"Context")+".Provider";case ve:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case he:return n=e.displayName||null,n!==null?n:de(e.type)||"Memo";case ze:n=e._payload,e=e._init;try{return de(e(n))}catch{}}return null}function pe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(n);case 8:return n===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tn(e){var n=Me(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(c){o=""+c,a.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(c){o=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Nr(e){e._valueTracker||(e._valueTracker=tn(e))}function oi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=Me(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zo(e,n){var t=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function si(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=ye(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function li(e,n){n=n.checked,n!=null&&I(e,"checked",n,!1)}function Jo(e,n){li(e,n);var t=ye(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?es(e,n.type,t):n.hasOwnProperty("defaultValue")&&es(e,n.type,ye(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ii(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function es(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Bt=Array.isArray;function ht(e,n,t,o){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&o&&(e[t].defaultSelected=!0)}else{for(t=""+ye(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function ns(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ai(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(i(92));if(Bt(t)){if(1<t.length)throw Error(i(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ye(t)}}function ui(e,n){var t=ye(n.value),o=ye(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function ci(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function di(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ts(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?di(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,fi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,s)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ut(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zc=["Webkit","ms","Moz","O"];Object.keys(Ht).forEach(function(e){zc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ht[n]=Ht[e]})});function pi(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ht.hasOwnProperty(e)&&Ht[e]?(""+n).trim():n+"px"}function hi(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,s=pi(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,s):e[t]=s}}var Oc=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rs(e,n){if(n){if(Oc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function os(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ss=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var is=null,mt=null,yt=null;function mi(e){if(e=dr(e)){if(typeof is!="function")throw Error(i(280));var n=e.stateNode;n&&(n=no(n),is(e.stateNode,e.type,n))}}function yi(e){mt?yt?yt.push(e):yt=[e]:mt=e}function gi(){if(mt){var e=mt,n=yt;if(yt=mt=null,mi(e),n)for(e=0;e<n.length;e++)mi(n[e])}}function vi(e,n){return e(n)}function xi(){}var as=!1;function wi(e,n,t){if(as)return e(n,t);as=!0;try{return vi(e,n,t)}finally{as=!1,(mt!==null||yt!==null)&&(xi(),gi())}}function Wt(e,n){var t=e.stateNode;if(t===null)return null;var o=no(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(i(231,n,typeof t));return t}var us=!1;if(v)try{var Vt={};Object.defineProperty(Vt,"passive",{get:function(){us=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch{us=!1}function Ic(e,n,t,o,s,a,c,w,S){var N=Array.prototype.slice.call(arguments,3);try{n.apply(t,N)}catch(A){this.onError(A)}}var qt=!1,Rr=null,zr=!1,cs=null,Fc={onError:function(e){qt=!0,Rr=e}};function Dc(e,n,t,o,s,a,c,w,S){qt=!1,Rr=null,Ic.apply(Fc,arguments)}function Ac(e,n,t,o,s,a,c,w,S){if(Dc.apply(this,arguments),qt){if(qt){var N=Rr;qt=!1,Rr=null}else throw Error(i(198));zr||(zr=!0,cs=N)}}function nt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ki(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Si(e){if(nt(e)!==e)throw Error(i(188))}function $c(e){var n=e.alternate;if(!n){if(n=nt(e),n===null)throw Error(i(188));return n!==e?null:e}for(var t=e,o=n;;){var s=t.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){t=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===t)return Si(s),e;if(a===o)return Si(s),n;a=a.sibling}throw Error(i(188))}if(t.return!==o.return)t=s,o=a;else{for(var c=!1,w=s.child;w;){if(w===t){c=!0,t=s,o=a;break}if(w===o){c=!0,o=s,t=a;break}w=w.sibling}if(!c){for(w=a.child;w;){if(w===t){c=!0,t=a,o=s;break}if(w===o){c=!0,o=a,t=s;break}w=w.sibling}if(!c)throw Error(i(189))}}if(t.alternate!==o)throw Error(i(190))}if(t.tag!==3)throw Error(i(188));return t.stateNode.current===t?e:n}function Mi(e){return e=$c(e),e!==null?Pi(e):null}function Pi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Pi(e);if(n!==null)return n;e=e.sibling}return null}var bi=l.unstable_scheduleCallback,_i=l.unstable_cancelCallback,Bc=l.unstable_shouldYield,Uc=l.unstable_requestPaint,Le=l.unstable_now,Hc=l.unstable_getCurrentPriorityLevel,ds=l.unstable_ImmediatePriority,Ci=l.unstable_UserBlockingPriority,Or=l.unstable_NormalPriority,Wc=l.unstable_LowPriority,Ei=l.unstable_IdlePriority,Ir=null,Sn=null;function Vc(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Ir,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:Yc,qc=Math.log,Qc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(qc(e)/Qc|0)|0}var Fr=64,Dr=4194304;function Qt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,c=t&268435455;if(c!==0){var w=c&~s;w!==0?o=Qt(w):(a&=c,a!==0&&(o=Qt(a)))}else c=t&~s,c!==0?o=Qt(c):a!==0&&(o=Qt(a));if(o===0)return 0;if(n!==0&&n!==o&&(n&s)===0&&(s=o&-o,a=n&-n,s>=a||s===16&&(a&4194240)!==0))return n;if((o&4)!==0&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-mn(n),s=1<<t,o|=e[t],n&=~s;return o}function Kc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xc(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-mn(a),w=1<<c,S=s[c];S===-1?((w&t)===0||(w&o)!==0)&&(s[c]=Kc(w,n)):S<=n&&(e.expiredLanes|=w),a&=~w}}function fs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ti(){var e=Fr;return Fr<<=1,(Fr&4194240)===0&&(Fr=64),e}function ps(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-mn(n),e[n]=t}function Gc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-mn(t),a=1<<s;n[s]=0,o[s]=-1,e[s]=-1,t&=~a}}function hs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-mn(t),s=1<<o;s&n|e[o]&n&&(e[o]|=n),t&=~s}}var ke=0;function Ni(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Li,ms,ji,Ri,zi,ys=!1,$r=[],On=null,In=null,Fn=null,Kt=new Map,Xt=new Map,Dn=[],Zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oi(e,n){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Kt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xt.delete(n.pointerId)}}function Gt(e,n,t,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},n!==null&&(n=dr(n),n!==null&&ms(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Jc(e,n,t,o,s){switch(n){case"focusin":return On=Gt(On,e,n,t,o,s),!0;case"dragenter":return In=Gt(In,e,n,t,o,s),!0;case"mouseover":return Fn=Gt(Fn,e,n,t,o,s),!0;case"pointerover":var a=s.pointerId;return Kt.set(a,Gt(Kt.get(a)||null,e,n,t,o,s)),!0;case"gotpointercapture":return a=s.pointerId,Xt.set(a,Gt(Xt.get(a)||null,e,n,t,o,s)),!0}return!1}function Ii(e){var n=tt(e.target);if(n!==null){var t=nt(n);if(t!==null){if(n=t.tag,n===13){if(n=ki(t),n!==null){e.blockedOn=n,zi(e.priority,function(){ji(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=vs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);ss=o,t.target.dispatchEvent(o),ss=null}else return n=dr(t),n!==null&&ms(n),e.blockedOn=t,!1;n.shift()}return!0}function Fi(e,n,t){Br(e)&&t.delete(n)}function ed(){ys=!1,On!==null&&Br(On)&&(On=null),In!==null&&Br(In)&&(In=null),Fn!==null&&Br(Fn)&&(Fn=null),Kt.forEach(Fi),Xt.forEach(Fi)}function Zt(e,n){e.blockedOn===n&&(e.blockedOn=null,ys||(ys=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ed)))}function Jt(e){function n(s){return Zt(s,e)}if(0<$r.length){Zt($r[0],e);for(var t=1;t<$r.length;t++){var o=$r[t];o.blockedOn===e&&(o.blockedOn=null)}}for(On!==null&&Zt(On,e),In!==null&&Zt(In,e),Fn!==null&&Zt(Fn,e),Kt.forEach(n),Xt.forEach(n),t=0;t<Dn.length;t++)o=Dn[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<Dn.length&&(t=Dn[0],t.blockedOn===null);)Ii(t),t.blockedOn===null&&Dn.shift()}var gt=z.ReactCurrentBatchConfig,Ur=!0;function nd(e,n,t,o){var s=ke,a=gt.transition;gt.transition=null;try{ke=1,gs(e,n,t,o)}finally{ke=s,gt.transition=a}}function td(e,n,t,o){var s=ke,a=gt.transition;gt.transition=null;try{ke=4,gs(e,n,t,o)}finally{ke=s,gt.transition=a}}function gs(e,n,t,o){if(Ur){var s=vs(e,n,t,o);if(s===null)Os(e,n,o,Hr,t),Oi(e,o);else if(Jc(s,e,n,t,o))o.stopPropagation();else if(Oi(e,o),n&4&&-1<Zc.indexOf(e)){for(;s!==null;){var a=dr(s);if(a!==null&&Li(a),a=vs(e,n,t,o),a===null&&Os(e,n,o,Hr,t),a===s)break;s=a}s!==null&&o.stopPropagation()}else Os(e,n,o,null,t)}}var Hr=null;function vs(e,n,t,o){if(Hr=null,e=ls(o),e=tt(e),e!==null)if(n=nt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ki(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Hr=e,null}function Di(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hc()){case ds:return 1;case Ci:return 4;case Or:case Wc:return 16;case Ei:return 536870912;default:return 16}default:return 16}}var An=null,xs=null,Wr=null;function Ai(){if(Wr)return Wr;var e,n=xs,t=n.length,o,s="value"in An?An.value:An.textContent,a=s.length;for(e=0;e<t&&n[e]===s[e];e++);var c=t-e;for(o=1;o<=c&&n[t-o]===s[a-o];o++);return Wr=s.slice(e,1<o?1-o:void 0)}function Vr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function $i(){return!1}function rn(e){function n(t,o,s,a,c){this._reactName=t,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(t=e[w],this[w]=t?t(a):a[w]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qr:$i,this.isPropagationStopped=$i,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),n}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=rn(vt),er=Y({},vt,{view:0,detail:0}),rd=rn(er),ks,Ss,nr,Qr=Y({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(ks=e.screenX-nr.screenX,Ss=e.screenY-nr.screenY):Ss=ks=0,nr=e),ks)},movementY:function(e){return"movementY"in e?e.movementY:Ss}}),Bi=rn(Qr),od=Y({},Qr,{dataTransfer:0}),sd=rn(od),ld=Y({},er,{relatedTarget:0}),Ms=rn(ld),id=Y({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=rn(id),ud=Y({},vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=rn(ud),dd=Y({},vt,{data:0}),Ui=rn(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hd[e])?!!n[e]:!1}function Ps(){return md}var yd=Y({},er,{key:function(e){if(e.key){var n=fd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=rn(yd),vd=Y({},Qr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hi=rn(vd),xd=Y({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),wd=rn(xd),kd=Y({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=rn(kd),Md=Y({},Qr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=rn(Md),bd=[9,13,27,32],bs=v&&"CompositionEvent"in window,tr=null;v&&"documentMode"in document&&(tr=document.documentMode);var _d=v&&"TextEvent"in window&&!tr,Wi=v&&(!bs||tr&&8<tr&&11>=tr),Vi=" ",qi=!1;function Qi(e,n){switch(e){case"keyup":return bd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xt=!1;function Cd(e,n){switch(e){case"compositionend":return Yi(n);case"keypress":return n.which!==32?null:(qi=!0,Vi);case"textInput":return e=n.data,e===Vi&&qi?null:e;default:return null}}function Ed(e,n){if(xt)return e==="compositionend"||!bs&&Qi(e,n)?(e=Ai(),Wr=xs=An=null,xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wi&&n.locale!=="ko"?null:n.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ki(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Td[e.type]:n==="textarea"}function Xi(e,n,t,o){yi(o),n=Zr(n,"onChange"),0<n.length&&(t=new ws("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var rr=null,or=null;function Nd(e){ha(e,0)}function Yr(e){var n=Pt(e);if(oi(n))return e}function Ld(e,n){if(e==="change")return n}var Gi=!1;if(v){var _s;if(v){var Cs="oninput"in document;if(!Cs){var Zi=document.createElement("div");Zi.setAttribute("oninput","return;"),Cs=typeof Zi.oninput=="function"}_s=Cs}else _s=!1;Gi=_s&&(!document.documentMode||9<document.documentMode)}function Ji(){rr&&(rr.detachEvent("onpropertychange",ea),or=rr=null)}function ea(e){if(e.propertyName==="value"&&Yr(or)){var n=[];Xi(n,or,e,ls(e)),wi(Nd,n)}}function jd(e,n,t){e==="focusin"?(Ji(),rr=n,or=t,rr.attachEvent("onpropertychange",ea)):e==="focusout"&&Ji()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yr(or)}function zd(e,n){if(e==="click")return Yr(n)}function Od(e,n){if(e==="input"||e==="change")return Yr(n)}function Id(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yn=typeof Object.is=="function"?Object.is:Id;function sr(e,n){if(yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var s=t[o];if(!p.call(n,s)||!yn(e[s],n[s]))return!1}return!0}function na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ta(e,n){var t=na(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=na(t)}}function ra(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ra(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function oa(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function Es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Fd(e){var n=oa(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ra(t.ownerDocument.documentElement,t)){if(o!==null&&Es(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=ta(t,a);var c=ta(t,o);s&&c&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(n),e.extend(c.node,c.offset)):(n.setEnd(c.node,c.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dd=v&&"documentMode"in document&&11>=document.documentMode,wt=null,Ts=null,lr=null,Ns=!1;function sa(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ns||wt==null||wt!==Lr(o)||(o=wt,"selectionStart"in o&&Es(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lr&&sr(lr,o)||(lr=o,o=Zr(Ts,"onSelect"),0<o.length&&(n=new ws("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=wt)))}function Kr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var kt={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},Ls={},la={};v&&(la=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);function Xr(e){if(Ls[e])return Ls[e];if(!kt[e])return e;var n=kt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in la)return Ls[e]=n[t];return e}var ia=Xr("animationend"),aa=Xr("animationiteration"),ua=Xr("animationstart"),ca=Xr("transitionend"),da=new Map,fa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){da.set(e,n),h(n,[e])}for(var js=0;js<fa.length;js++){var Rs=fa[js],Ad=Rs.toLowerCase(),$d=Rs[0].toUpperCase()+Rs.slice(1);$n(Ad,"on"+$d)}$n(ia,"onAnimationEnd"),$n(aa,"onAnimationIteration"),$n(ua,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(ca,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bd=new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));function pa(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,Ac(o,n,void 0,e),e.currentTarget=null}function ha(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],s=o.event;o=o.listeners;e:{var a=void 0;if(n)for(var c=o.length-1;0<=c;c--){var w=o[c],S=w.instance,N=w.currentTarget;if(w=w.listener,S!==a&&s.isPropagationStopped())break e;pa(s,w,N),a=S}else for(c=0;c<o.length;c++){if(w=o[c],S=w.instance,N=w.currentTarget,w=w.listener,S!==a&&s.isPropagationStopped())break e;pa(s,w,N),a=S}}}if(zr)throw e=cs,zr=!1,cs=null,e}function be(e,n){var t=n[Bs];t===void 0&&(t=n[Bs]=new Set);var o=e+"__bubble";t.has(o)||(ma(n,e,2,!1),t.add(o))}function zs(e,n,t){var o=0;n&&(o|=4),ma(t,e,o,n)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Gr]){e[Gr]=!0,u.forEach(function(t){t!=="selectionchange"&&(Bd.has(t)||zs(t,!1,e),zs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gr]||(n[Gr]=!0,zs("selectionchange",!1,n))}}function ma(e,n,t,o){switch(Di(n)){case 1:var s=nd;break;case 4:s=td;break;default:s=gs}t=s.bind(null,n,t,e),s=void 0,!us||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function Os(e,n,t,o,s){var a=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var c=o.tag;if(c===3||c===4){var w=o.stateNode.containerInfo;if(w===s||w.nodeType===8&&w.parentNode===s)break;if(c===4)for(c=o.return;c!==null;){var S=c.tag;if((S===3||S===4)&&(S=c.stateNode.containerInfo,S===s||S.nodeType===8&&S.parentNode===s))return;c=c.return}for(;w!==null;){if(c=tt(w),c===null)return;if(S=c.tag,S===5||S===6){o=a=c;continue e}w=w.parentNode}}o=o.return}wi(function(){var N=a,A=ls(t),$=[];e:{var D=da.get(e);if(D!==void 0){var X=ws,Z=e;switch(e){case"keypress":if(Vr(t)===0)break e;case"keydown":case"keyup":X=gd;break;case"focusin":Z="focus",X=Ms;break;case"focusout":Z="blur",X=Ms;break;case"beforeblur":case"afterblur":X=Ms;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Bi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=wd;break;case ia:case aa:case ua:X=ad;break;case ca:X=Sd;break;case"scroll":X=rd;break;case"wheel":X=Pd;break;case"copy":case"cut":case"paste":X=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Hi}var ne=(n&4)!==0,je=!ne&&e==="scroll",_=ne?D!==null?D+"Capture":null:D;ne=[];for(var M=N,T;M!==null;){T=M;var U=T.stateNode;if(T.tag===5&&U!==null&&(T=U,_!==null&&(U=Wt(M,_),U!=null&&ne.push(ur(M,U,T)))),je)break;M=M.return}0<ne.length&&(D=new X(D,Z,null,t,A),$.push({event:D,listeners:ne}))}}if((n&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",D&&t!==ss&&(Z=t.relatedTarget||t.fromElement)&&(tt(Z)||Z[Cn]))break e;if((X||D)&&(D=A.window===A?A:(D=A.ownerDocument)?D.defaultView||D.parentWindow:window,X?(Z=t.relatedTarget||t.toElement,X=N,Z=Z?tt(Z):null,Z!==null&&(je=nt(Z),Z!==je||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(X=null,Z=N),X!==Z)){if(ne=Bi,U="onMouseLeave",_="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Hi,U="onPointerLeave",_="onPointerEnter",M="pointer"),je=X==null?D:Pt(X),T=Z==null?D:Pt(Z),D=new ne(U,M+"leave",X,t,A),D.target=je,D.relatedTarget=T,U=null,tt(A)===N&&(ne=new ne(_,M+"enter",Z,t,A),ne.target=T,ne.relatedTarget=je,U=ne),je=U,X&&Z)n:{for(ne=X,_=Z,M=0,T=ne;T;T=St(T))M++;for(T=0,U=_;U;U=St(U))T++;for(;0<M-T;)ne=St(ne),M--;for(;0<T-M;)_=St(_),T--;for(;M--;){if(ne===_||_!==null&&ne===_.alternate)break n;ne=St(ne),_=St(_)}ne=null}else ne=null;X!==null&&ya($,D,X,ne,!1),Z!==null&&je!==null&&ya($,je,Z,ne,!0)}}e:{if(D=N?Pt(N):window,X=D.nodeName&&D.nodeName.toLowerCase(),X==="select"||X==="input"&&D.type==="file")var te=Ld;else if(Ki(D))if(Gi)te=Od;else{te=Rd;var se=jd}else(X=D.nodeName)&&X.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(te=zd);if(te&&(te=te(e,N))){Xi($,te,t,A);break e}se&&se(e,D,N),e==="focusout"&&(se=D._wrapperState)&&se.controlled&&D.type==="number"&&es(D,"number",D.value)}switch(se=N?Pt(N):window,e){case"focusin":(Ki(se)||se.contentEditable==="true")&&(wt=se,Ts=N,lr=null);break;case"focusout":lr=Ts=wt=null;break;case"mousedown":Ns=!0;break;case"contextmenu":case"mouseup":case"dragend":Ns=!1,sa($,t,A);break;case"selectionchange":if(Dd)break;case"keydown":case"keyup":sa($,t,A)}var le;if(bs)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else xt?Qi(e,t)&&(ae="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ae="onCompositionStart");ae&&(Wi&&t.locale!=="ko"&&(xt||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&xt&&(le=Ai()):(An=A,xs="value"in An?An.value:An.textContent,xt=!0)),se=Zr(N,ae),0<se.length&&(ae=new Ui(ae,e,null,t,A),$.push({event:ae,listeners:se}),le?ae.data=le:(le=Yi(t),le!==null&&(ae.data=le)))),(le=_d?Cd(e,t):Ed(e,t))&&(N=Zr(N,"onBeforeInput"),0<N.length&&(A=new Ui("onBeforeInput","beforeinput",null,t,A),$.push({event:A,listeners:N}),A.data=le))}ha($,n)})}function ur(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Zr(e,n){for(var t=n+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Wt(e,t),a!=null&&o.unshift(ur(e,a,s)),a=Wt(e,n),a!=null&&o.push(ur(e,a,s))),e=e.return}return o}function St(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ya(e,n,t,o,s){for(var a=n._reactName,c=[];t!==null&&t!==o;){var w=t,S=w.alternate,N=w.stateNode;if(S!==null&&S===o)break;w.tag===5&&N!==null&&(w=N,s?(S=Wt(t,a),S!=null&&c.unshift(ur(t,S,w))):s||(S=Wt(t,a),S!=null&&c.push(ur(t,S,w)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var Ud=/\r\n?/g,Hd=/\u0000|\uFFFD/g;function ga(e){return(typeof e=="string"?e:""+e).replace(Ud,`
`).replace(Hd,"")}function Jr(e,n,t){if(n=ga(n),ga(e)!==n&&t)throw Error(i(425))}function eo(){}var Is=null,Fs=null;function Ds(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var As=typeof setTimeout=="function"?setTimeout:void 0,Wd=typeof clearTimeout=="function"?clearTimeout:void 0,va=typeof Promise=="function"?Promise:void 0,Vd=typeof queueMicrotask=="function"?queueMicrotask:typeof va<"u"?function(e){return va.resolve(null).then(e).catch(qd)}:As;function qd(e){setTimeout(function(){throw e})}function $s(e,n){var t=n,o=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(o===0){e.removeChild(s),Jt(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=s}while(t);Jt(n)}function Bn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function xa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Mt=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Mt,cr="__reactProps$"+Mt,Cn="__reactContainer$"+Mt,Bs="__reactEvents$"+Mt,Qd="__reactListeners$"+Mt,Yd="__reactHandles$"+Mt;function tt(e){var n=e[Mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Cn]||t[Mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=xa(e);e!==null;){if(t=e[Mn])return t;e=xa(e)}return n}e=t,t=e.parentNode}return null}function dr(e){return e=e[Mn]||e[Cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function no(e){return e[cr]||null}var Us=[],bt=-1;function Un(e){return{current:e}}function _e(e){0>bt||(e.current=Us[bt],Us[bt]=null,bt--)}function Pe(e,n){bt++,Us[bt]=e.current,e.current=n}var Hn={},He=Un(Hn),Ke=Un(!1),rt=Hn;function _t(e,n){var t=e.type.contextTypes;if(!t)return Hn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in t)s[a]=n[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function Xe(e){return e=e.childContextTypes,e!=null}function to(){_e(Ke),_e(He)}function wa(e,n,t){if(He.current!==Hn)throw Error(i(168));Pe(He,n),Pe(Ke,t)}function ka(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var s in o)if(!(s in n))throw Error(i(108,pe(e)||"Unknown",s));return Y({},t,o)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,rt=He.current,Pe(He,e),Pe(Ke,Ke.current),!0}function Sa(e,n,t){var o=e.stateNode;if(!o)throw Error(i(169));t?(e=ka(e,n,rt),o.__reactInternalMemoizedMergedChildContext=e,_e(Ke),_e(He),Pe(He,e)):_e(Ke),Pe(Ke,t)}var En=null,oo=!1,Hs=!1;function Ma(e){En===null?En=[e]:En.push(e)}function Kd(e){oo=!0,Ma(e)}function Wn(){if(!Hs&&En!==null){Hs=!0;var e=0,n=ke;try{var t=En;for(ke=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}En=null,oo=!1}catch(s){throw En!==null&&(En=En.slice(e+1)),bi(ds,Wn),s}finally{ke=n,Hs=!1}}return null}var Ct=[],Et=0,so=null,lo=0,un=[],cn=0,ot=null,Tn=1,Nn="";function st(e,n){Ct[Et++]=lo,Ct[Et++]=so,so=e,lo=n}function Pa(e,n,t){un[cn++]=Tn,un[cn++]=Nn,un[cn++]=ot,ot=e;var o=Tn;e=Nn;var s=32-mn(o)-1;o&=~(1<<s),t+=1;var a=32-mn(n)+s;if(30<a){var c=s-s%5;a=(o&(1<<c)-1).toString(32),o>>=c,s-=c,Tn=1<<32-mn(n)+s|t<<s|o,Nn=a+e}else Tn=1<<a|t<<s|o,Nn=e}function Ws(e){e.return!==null&&(st(e,1),Pa(e,1,0))}function Vs(e){for(;e===so;)so=Ct[--Et],Ct[Et]=null,lo=Ct[--Et],Ct[Et]=null;for(;e===ot;)ot=un[--cn],un[cn]=null,Nn=un[--cn],un[cn]=null,Tn=un[--cn],un[cn]=null}var on=null,sn=null,Ce=!1,gn=null;function ba(e,n){var t=hn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function _a(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,on=e,sn=Bn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,on=e,sn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ot!==null?{id:Tn,overflow:Nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=hn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,on=e,sn=null,!0):!1;default:return!1}}function qs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qs(e){if(Ce){var n=sn;if(n){var t=n;if(!_a(e,n)){if(qs(e))throw Error(i(418));n=Bn(t.nextSibling);var o=on;n&&_a(e,n)?ba(o,t):(e.flags=e.flags&-4097|2,Ce=!1,on=e)}}else{if(qs(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ce=!1,on=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function io(e){if(e!==on)return!1;if(!Ce)return Ca(e),Ce=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ds(e.type,e.memoizedProps)),n&&(n=sn)){if(qs(e))throw Ea(),Error(i(418));for(;n;)ba(e,n),n=Bn(n.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){sn=Bn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}sn=null}}else sn=on?Bn(e.stateNode.nextSibling):null;return!0}function Ea(){for(var e=sn;e;)e=Bn(e.nextSibling)}function Tt(){sn=on=null,Ce=!1}function Ys(e){gn===null?gn=[e]:gn.push(e)}var Xd=z.ReactCurrentBatchConfig;function fr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(i(309));var o=t.stateNode}if(!o)throw Error(i(147,e));var s=o,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(c){var w=s.refs;c===null?delete w[a]:w[a]=c},n._stringRef=a,n)}if(typeof e!="string")throw Error(i(284));if(!t._owner)throw Error(i(290,e))}return e}function ao(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ta(e){var n=e._init;return n(e._payload)}function Na(e){function n(_,M){if(e){var T=_.deletions;T===null?(_.deletions=[M],_.flags|=16):T.push(M)}}function t(_,M){if(!e)return null;for(;M!==null;)n(_,M),M=M.sibling;return null}function o(_,M){for(_=new Map;M!==null;)M.key!==null?_.set(M.key,M):_.set(M.index,M),M=M.sibling;return _}function s(_,M){return _=Zn(_,M),_.index=0,_.sibling=null,_}function a(_,M,T){return _.index=T,e?(T=_.alternate,T!==null?(T=T.index,T<M?(_.flags|=2,M):T):(_.flags|=2,M)):(_.flags|=1048576,M)}function c(_){return e&&_.alternate===null&&(_.flags|=2),_}function w(_,M,T,U){return M===null||M.tag!==6?(M=Al(T,_.mode,U),M.return=_,M):(M=s(M,T),M.return=_,M)}function S(_,M,T,U){var te=T.type;return te===R?A(_,M,T.props.children,U,T.key):M!==null&&(M.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ze&&Ta(te)===M.type)?(U=s(M,T.props),U.ref=fr(_,M,T),U.return=_,U):(U=Ro(T.type,T.key,T.props,null,_.mode,U),U.ref=fr(_,M,T),U.return=_,U)}function N(_,M,T,U){return M===null||M.tag!==4||M.stateNode.containerInfo!==T.containerInfo||M.stateNode.implementation!==T.implementation?(M=$l(T,_.mode,U),M.return=_,M):(M=s(M,T.children||[]),M.return=_,M)}function A(_,M,T,U,te){return M===null||M.tag!==7?(M=pt(T,_.mode,U,te),M.return=_,M):(M=s(M,T),M.return=_,M)}function $(_,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Al(""+M,_.mode,T),M.return=_,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case q:return T=Ro(M.type,M.key,M.props,null,_.mode,T),T.ref=fr(_,null,M),T.return=_,T;case B:return M=$l(M,_.mode,T),M.return=_,M;case ze:var U=M._init;return $(_,U(M._payload),T)}if(Bt(M)||oe(M))return M=pt(M,_.mode,T,null),M.return=_,M;ao(_,M)}return null}function D(_,M,T,U){var te=M!==null?M.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return te!==null?null:w(_,M,""+T,U);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case q:return T.key===te?S(_,M,T,U):null;case B:return T.key===te?N(_,M,T,U):null;case ze:return te=T._init,D(_,M,te(T._payload),U)}if(Bt(T)||oe(T))return te!==null?null:A(_,M,T,U,null);ao(_,T)}return null}function X(_,M,T,U,te){if(typeof U=="string"&&U!==""||typeof U=="number")return _=_.get(T)||null,w(M,_,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case q:return _=_.get(U.key===null?T:U.key)||null,S(M,_,U,te);case B:return _=_.get(U.key===null?T:U.key)||null,N(M,_,U,te);case ze:var se=U._init;return X(_,M,T,se(U._payload),te)}if(Bt(U)||oe(U))return _=_.get(T)||null,A(M,_,U,te,null);ao(M,U)}return null}function Z(_,M,T,U){for(var te=null,se=null,le=M,ae=M=0,Ae=null;le!==null&&ae<T.length;ae++){le.index>ae?(Ae=le,le=null):Ae=le.sibling;var ge=D(_,le,T[ae],U);if(ge===null){le===null&&(le=Ae);break}e&&le&&ge.alternate===null&&n(_,le),M=a(ge,M,ae),se===null?te=ge:se.sibling=ge,se=ge,le=Ae}if(ae===T.length)return t(_,le),Ce&&st(_,ae),te;if(le===null){for(;ae<T.length;ae++)le=$(_,T[ae],U),le!==null&&(M=a(le,M,ae),se===null?te=le:se.sibling=le,se=le);return Ce&&st(_,ae),te}for(le=o(_,le);ae<T.length;ae++)Ae=X(le,_,ae,T[ae],U),Ae!==null&&(e&&Ae.alternate!==null&&le.delete(Ae.key===null?ae:Ae.key),M=a(Ae,M,ae),se===null?te=Ae:se.sibling=Ae,se=Ae);return e&&le.forEach(function(Jn){return n(_,Jn)}),Ce&&st(_,ae),te}function ne(_,M,T,U){var te=oe(T);if(typeof te!="function")throw Error(i(150));if(T=te.call(T),T==null)throw Error(i(151));for(var se=te=null,le=M,ae=M=0,Ae=null,ge=T.next();le!==null&&!ge.done;ae++,ge=T.next()){le.index>ae?(Ae=le,le=null):Ae=le.sibling;var Jn=D(_,le,ge.value,U);if(Jn===null){le===null&&(le=Ae);break}e&&le&&Jn.alternate===null&&n(_,le),M=a(Jn,M,ae),se===null?te=Jn:se.sibling=Jn,se=Jn,le=Ae}if(ge.done)return t(_,le),Ce&&st(_,ae),te;if(le===null){for(;!ge.done;ae++,ge=T.next())ge=$(_,ge.value,U),ge!==null&&(M=a(ge,M,ae),se===null?te=ge:se.sibling=ge,se=ge);return Ce&&st(_,ae),te}for(le=o(_,le);!ge.done;ae++,ge=T.next())ge=X(le,_,ae,ge.value,U),ge!==null&&(e&&ge.alternate!==null&&le.delete(ge.key===null?ae:ge.key),M=a(ge,M,ae),se===null?te=ge:se.sibling=ge,se=ge);return e&&le.forEach(function(Nf){return n(_,Nf)}),Ce&&st(_,ae),te}function je(_,M,T,U){if(typeof T=="object"&&T!==null&&T.type===R&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case q:e:{for(var te=T.key,se=M;se!==null;){if(se.key===te){if(te=T.type,te===R){if(se.tag===7){t(_,se.sibling),M=s(se,T.props.children),M.return=_,_=M;break e}}else if(se.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ze&&Ta(te)===se.type){t(_,se.sibling),M=s(se,T.props),M.ref=fr(_,se,T),M.return=_,_=M;break e}t(_,se);break}else n(_,se);se=se.sibling}T.type===R?(M=pt(T.props.children,_.mode,U,T.key),M.return=_,_=M):(U=Ro(T.type,T.key,T.props,null,_.mode,U),U.ref=fr(_,M,T),U.return=_,_=U)}return c(_);case B:e:{for(se=T.key;M!==null;){if(M.key===se)if(M.tag===4&&M.stateNode.containerInfo===T.containerInfo&&M.stateNode.implementation===T.implementation){t(_,M.sibling),M=s(M,T.children||[]),M.return=_,_=M;break e}else{t(_,M);break}else n(_,M);M=M.sibling}M=$l(T,_.mode,U),M.return=_,_=M}return c(_);case ze:return se=T._init,je(_,M,se(T._payload),U)}if(Bt(T))return Z(_,M,T,U);if(oe(T))return ne(_,M,T,U);ao(_,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,M!==null&&M.tag===6?(t(_,M.sibling),M=s(M,T),M.return=_,_=M):(t(_,M),M=Al(T,_.mode,U),M.return=_,_=M),c(_)):t(_,M)}return je}var Nt=Na(!0),La=Na(!1),uo=Un(null),co=null,Lt=null,Ks=null;function Xs(){Ks=Lt=co=null}function Gs(e){var n=uo.current;_e(uo),e._currentValue=n}function Zs(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){co=e,Ks=Lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ge=!0),e.firstContext=null)}function dn(e){var n=e._currentValue;if(Ks!==e)if(e={context:e,memoizedValue:n,next:null},Lt===null){if(co===null)throw Error(i(308));Lt=e,co.dependencies={lanes:0,firstContext:e}}else Lt=Lt.next=e;return n}var lt=null;function Js(e){lt===null?lt=[e]:lt.push(e)}function ja(e,n,t,o){var s=n.interleaved;return s===null?(t.next=t,Js(n)):(t.next=s.next,s.next=t),n.interleaved=t,Ln(e,o)}function Ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Vn=!1;function el(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ra(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function qn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(me&2)!==0){var s=o.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),o.pending=n,Ln(e,t)}return s=o.interleaved,s===null?(n.next=n,Js(o)):(n.next=s.next,s.next=n),o.interleaved=n,Ln(e,t)}function fo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,hs(e,t)}}function za(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var s=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?s=a=c:a=a.next=c,t=t.next}while(t!==null);a===null?s=a=n:a=a.next=n}else s=a=n;t={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function po(e,n,t,o){var s=e.updateQueue;Vn=!1;var a=s.firstBaseUpdate,c=s.lastBaseUpdate,w=s.shared.pending;if(w!==null){s.shared.pending=null;var S=w,N=S.next;S.next=null,c===null?a=N:c.next=N,c=S;var A=e.alternate;A!==null&&(A=A.updateQueue,w=A.lastBaseUpdate,w!==c&&(w===null?A.firstBaseUpdate=N:w.next=N,A.lastBaseUpdate=S))}if(a!==null){var $=s.baseState;c=0,A=N=S=null,w=a;do{var D=w.lane,X=w.eventTime;if((o&D)===D){A!==null&&(A=A.next={eventTime:X,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var Z=e,ne=w;switch(D=n,X=t,ne.tag){case 1:if(Z=ne.payload,typeof Z=="function"){$=Z.call(X,$,D);break e}$=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ne.payload,D=typeof Z=="function"?Z.call(X,$,D):Z,D==null)break e;$=Y({},$,D);break e;case 2:Vn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,D=s.effects,D===null?s.effects=[w]:D.push(w))}else X={eventTime:X,lane:D,tag:w.tag,payload:w.payload,callback:w.callback,next:null},A===null?(N=A=X,S=$):A=A.next=X,c|=D;if(w=w.next,w===null){if(w=s.shared.pending,w===null)break;D=w,w=D.next,D.next=null,s.lastBaseUpdate=D,s.shared.pending=null}}while(!0);if(A===null&&(S=$),s.baseState=S,s.firstBaseUpdate=N,s.lastBaseUpdate=A,n=s.shared.interleaved,n!==null){s=n;do c|=s.lane,s=s.next;while(s!==n)}else a===null&&(s.shared.lanes=0);ut|=c,e.lanes=c,e.memoizedState=$}}function Oa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],s=o.callback;if(s!==null){if(o.callback=null,o=t,typeof s!="function")throw Error(i(191,s));s.call(o)}}}var pr={},Pn=Un(pr),hr=Un(pr),mr=Un(pr);function it(e){if(e===pr)throw Error(i(174));return e}function nl(e,n){switch(Pe(mr,n),Pe(hr,e),Pe(Pn,pr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ts(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ts(n,e)}_e(Pn),Pe(Pn,n)}function Rt(){_e(Pn),_e(hr),_e(mr)}function Ia(e){it(mr.current);var n=it(Pn.current),t=ts(n,e.type);n!==t&&(Pe(hr,e),Pe(Pn,t))}function tl(e){hr.current===e&&(_e(Pn),_e(hr))}var Ee=Un(0);function ho(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var rl=[];function ol(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var mo=z.ReactCurrentDispatcher,sl=z.ReactCurrentBatchConfig,at=0,Te=null,Oe=null,Fe=null,yo=!1,yr=!1,gr=0,Gd=0;function We(){throw Error(i(321))}function ll(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!yn(e[t],n[t]))return!1;return!0}function il(e,n,t,o,s,a){if(at=a,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mo.current=e===null||e.memoizedState===null?nf:tf,e=t(o,s),yr){a=0;do{if(yr=!1,gr=0,25<=a)throw Error(i(301));a+=1,Fe=Oe=null,n.updateQueue=null,mo.current=rf,e=t(o,s)}while(yr)}if(mo.current=xo,n=Oe!==null&&Oe.next!==null,at=0,Fe=Oe=Te=null,yo=!1,n)throw Error(i(300));return e}function al(){var e=gr!==0;return gr=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Te.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function fn(){if(Oe===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=Fe===null?Te.memoizedState:Fe.next;if(n!==null)Fe=n,Oe=e;else{if(e===null)throw Error(i(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Te.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function vr(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=fn(),t=n.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var o=Oe,s=o.baseQueue,a=t.pending;if(a!==null){if(s!==null){var c=s.next;s.next=a.next,a.next=c}o.baseQueue=s=a,t.pending=null}if(s!==null){a=s.next,o=o.baseState;var w=c=null,S=null,N=a;do{var A=N.lane;if((at&A)===A)S!==null&&(S=S.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),o=N.hasEagerState?N.eagerState:e(o,N.action);else{var $={lane:A,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};S===null?(w=S=$,c=o):S=S.next=$,Te.lanes|=A,ut|=A}N=N.next}while(N!==null&&N!==a);S===null?c=o:S.next=w,yn(o,n.memoizedState)||(Ge=!0),n.memoizedState=o,n.baseState=c,n.baseQueue=S,t.lastRenderedState=o}if(e=t.interleaved,e!==null){s=e;do a=s.lane,Te.lanes|=a,ut|=a,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function cl(e){var n=fn(),t=n.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var o=t.dispatch,s=t.pending,a=n.memoizedState;if(s!==null){t.pending=null;var c=s=s.next;do a=e(a,c.action),c=c.next;while(c!==s);yn(a,n.memoizedState)||(Ge=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,o]}function Fa(){}function Da(e,n){var t=Te,o=fn(),s=n(),a=!yn(o.memoizedState,s);if(a&&(o.memoizedState=s,Ge=!0),o=o.queue,dl(Ba.bind(null,t,o,e),[e]),o.getSnapshot!==n||a||Fe!==null&&Fe.memoizedState.tag&1){if(t.flags|=2048,xr(9,$a.bind(null,t,o,s,n),void 0,null),De===null)throw Error(i(349));(at&30)!==0||Aa(t,n,s)}return s}function Aa(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function $a(e,n,t,o){n.value=t,n.getSnapshot=o,Ua(n)&&Ha(e)}function Ba(e,n,t){return t(function(){Ua(n)&&Ha(e)})}function Ua(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!yn(e,t)}catch{return!0}}function Ha(e){var n=Ln(e,1);n!==null&&kn(n,e,1,-1)}function Wa(e){var n=bn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},n.queue=e,e=e.dispatch=ef.bind(null,Te,e),[n.memoizedState,e]}function xr(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function Va(){return fn().memoizedState}function go(e,n,t,o){var s=bn();Te.flags|=e,s.memoizedState=xr(1|n,t,void 0,o===void 0?null:o)}function vo(e,n,t,o){var s=fn();o=o===void 0?null:o;var a=void 0;if(Oe!==null){var c=Oe.memoizedState;if(a=c.destroy,o!==null&&ll(o,c.deps)){s.memoizedState=xr(n,t,a,o);return}}Te.flags|=e,s.memoizedState=xr(1|n,t,a,o)}function qa(e,n){return go(8390656,8,e,n)}function dl(e,n){return vo(2048,8,e,n)}function Qa(e,n){return vo(4,2,e,n)}function Ya(e,n){return vo(4,4,e,n)}function Ka(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xa(e,n,t){return t=t!=null?t.concat([e]):null,vo(4,4,Ka.bind(null,n,e),t)}function fl(){}function Ga(e,n){var t=fn();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ll(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function Za(e,n){var t=fn();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ll(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function Ja(e,n,t){return(at&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=t):(yn(t,n)||(t=Ti(),Te.lanes|=t,ut|=t,e.baseState=!0),n)}function Zd(e,n){var t=ke;ke=t!==0&&4>t?t:4,e(!0);var o=sl.transition;sl.transition={};try{e(!1),n()}finally{ke=t,sl.transition=o}}function eu(){return fn().memoizedState}function Jd(e,n,t){var o=Xn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},nu(e))tu(n,t);else if(t=ja(e,n,t,o),t!==null){var s=Ye();kn(t,e,o,s),ru(t,n,o)}}function ef(e,n,t){var o=Xn(e),s={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(nu(e))tu(n,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var c=n.lastRenderedState,w=a(c,t);if(s.hasEagerState=!0,s.eagerState=w,yn(w,c)){var S=n.interleaved;S===null?(s.next=s,Js(n)):(s.next=S.next,S.next=s),n.interleaved=s;return}}catch{}finally{}t=ja(e,n,s,o),t!==null&&(s=Ye(),kn(t,e,o,s),ru(t,n,o))}}function nu(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function tu(e,n){yr=yo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ru(e,n,t){if((t&4194240)!==0){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,hs(e,t)}}var xo={readContext:dn,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},nf={readContext:dn,useCallback:function(e,n){return bn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:qa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,go(4194308,4,Ka.bind(null,n,e),t)},useLayoutEffect:function(e,n){return go(4194308,4,e,n)},useInsertionEffect:function(e,n){return go(4,2,e,n)},useMemo:function(e,n){var t=bn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=bn();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=Jd.bind(null,Te,e),[o.memoizedState,e]},useRef:function(e){var n=bn();return e={current:e},n.memoizedState=e},useState:Wa,useDebugValue:fl,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=Wa(!1),n=e[0];return e=Zd.bind(null,e[1]),bn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=Te,s=bn();if(Ce){if(t===void 0)throw Error(i(407));t=t()}else{if(t=n(),De===null)throw Error(i(349));(at&30)!==0||Aa(o,n,t)}s.memoizedState=t;var a={value:t,getSnapshot:n};return s.queue=a,qa(Ba.bind(null,o,a,e),[e]),o.flags|=2048,xr(9,$a.bind(null,o,a,t,n),void 0,null),t},useId:function(){var e=bn(),n=De.identifierPrefix;if(Ce){var t=Nn,o=Tn;t=(o&~(1<<32-mn(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=gr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Gd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tf={readContext:dn,useCallback:Ga,useContext:dn,useEffect:dl,useImperativeHandle:Xa,useInsertionEffect:Qa,useLayoutEffect:Ya,useMemo:Za,useReducer:ul,useRef:Va,useState:function(){return ul(vr)},useDebugValue:fl,useDeferredValue:function(e){var n=fn();return Ja(n,Oe.memoizedState,e)},useTransition:function(){var e=ul(vr)[0],n=fn().memoizedState;return[e,n]},useMutableSource:Fa,useSyncExternalStore:Da,useId:eu,unstable_isNewReconciler:!1},rf={readContext:dn,useCallback:Ga,useContext:dn,useEffect:dl,useImperativeHandle:Xa,useInsertionEffect:Qa,useLayoutEffect:Ya,useMemo:Za,useReducer:cl,useRef:Va,useState:function(){return cl(vr)},useDebugValue:fl,useDeferredValue:function(e){var n=fn();return Oe===null?n.memoizedState=e:Ja(n,Oe.memoizedState,e)},useTransition:function(){var e=cl(vr)[0],n=fn().memoizedState;return[e,n]},useMutableSource:Fa,useSyncExternalStore:Da,useId:eu,unstable_isNewReconciler:!1};function vn(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function pl(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:Y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var wo={isMounted:function(e){return(e=e._reactInternals)?nt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=Ye(),s=Xn(e),a=jn(o,s);a.payload=n,t!=null&&(a.callback=t),n=qn(e,a,s),n!==null&&(kn(n,e,s,o),fo(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=Ye(),s=Xn(e),a=jn(o,s);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=qn(e,a,s),n!==null&&(kn(n,e,s,o),fo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ye(),o=Xn(e),s=jn(t,o);s.tag=2,n!=null&&(s.callback=n),n=qn(e,s,o),n!==null&&(kn(n,e,o,t),fo(n,e,o))}};function ou(e,n,t,o,s,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,c):n.prototype&&n.prototype.isPureReactComponent?!sr(t,o)||!sr(s,a):!0}function su(e,n,t){var o=!1,s=Hn,a=n.contextType;return typeof a=="object"&&a!==null?a=dn(a):(s=Xe(n)?rt:He.current,o=n.contextTypes,a=(o=o!=null)?_t(e,s):Hn),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=wo,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),n}function lu(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&wo.enqueueReplaceState(n,n.state,null)}function hl(e,n,t,o){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},el(e);var a=n.contextType;typeof a=="object"&&a!==null?s.context=dn(a):(a=Xe(n)?rt:He.current,s.context=_t(e,a)),s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(pl(e,n,a,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&wo.enqueueReplaceState(s,s.state,null),po(e,t,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function zt(e,n){try{var t="",o=n;do t+=ee(o),o=o.return;while(o);var s=t}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:s,digest:null}}function ml(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function yl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var of=typeof WeakMap=="function"?WeakMap:Map;function iu(e,n,t){t=jn(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){Co||(Co=!0,Ll=o),yl(e,n)},t}function au(e,n,t){t=jn(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=n.value;t.payload=function(){return o(s)},t.callback=function(){yl(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){yl(e,n),typeof o!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})}),t}function uu(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new of;var s=new Set;o.set(n,s)}else s=o.get(n),s===void 0&&(s=new Set,o.set(n,s));s.has(t)||(s.add(t),e=xf.bind(null,e,n,t),n.then(e,e))}function cu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function du(e,n,t,o,s){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=jn(-1,1),n.tag=2,qn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var sf=z.ReactCurrentOwner,Ge=!1;function Qe(e,n,t,o){n.child=e===null?La(n,null,t,o):Nt(n,e.child,t,o)}function fu(e,n,t,o,s){t=t.render;var a=n.ref;return jt(n,s),o=il(e,n,t,o,a,s),t=al(),e!==null&&!Ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Rn(e,n,s)):(Ce&&t&&Ws(n),n.flags|=1,Qe(e,n,o,s),n.child)}function pu(e,n,t,o,s){if(e===null){var a=t.type;return typeof a=="function"&&!Dl(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,hu(e,n,a,o,s)):(e=Ro(t.type,null,o,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,(e.lanes&s)===0){var c=a.memoizedProps;if(t=t.compare,t=t!==null?t:sr,t(c,o)&&e.ref===n.ref)return Rn(e,n,s)}return n.flags|=1,e=Zn(a,o),e.ref=n.ref,e.return=n,n.child=e}function hu(e,n,t,o,s){if(e!==null){var a=e.memoizedProps;if(sr(a,o)&&e.ref===n.ref)if(Ge=!1,n.pendingProps=o=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(Ge=!0);else return n.lanes=e.lanes,Rn(e,n,s)}return gl(e,n,t,o,s)}function mu(e,n,t){var o=n.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(It,ln),ln|=t;else{if((t&1073741824)===0)return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Pe(It,ln),ln|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:t,Pe(It,ln),ln|=o}else a!==null?(o=a.baseLanes|t,n.memoizedState=null):o=t,Pe(It,ln),ln|=o;return Qe(e,n,s,t),n.child}function yu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function gl(e,n,t,o,s){var a=Xe(t)?rt:He.current;return a=_t(n,a),jt(n,s),t=il(e,n,t,o,a,s),o=al(),e!==null&&!Ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Rn(e,n,s)):(Ce&&o&&Ws(n),n.flags|=1,Qe(e,n,t,s),n.child)}function gu(e,n,t,o,s){if(Xe(t)){var a=!0;ro(n)}else a=!1;if(jt(n,s),n.stateNode===null)So(e,n),su(n,t,o),hl(n,t,o,s),o=!0;else if(e===null){var c=n.stateNode,w=n.memoizedProps;c.props=w;var S=c.context,N=t.contextType;typeof N=="object"&&N!==null?N=dn(N):(N=Xe(t)?rt:He.current,N=_t(n,N));var A=t.getDerivedStateFromProps,$=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function";$||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(w!==o||S!==N)&&lu(n,c,o,N),Vn=!1;var D=n.memoizedState;c.state=D,po(n,o,c,s),S=n.memoizedState,w!==o||D!==S||Ke.current||Vn?(typeof A=="function"&&(pl(n,t,A,o),S=n.memoizedState),(w=Vn||ou(n,t,w,o,D,S,N))?($||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=S),c.props=o,c.state=S,c.context=N,o=w):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{c=n.stateNode,Ra(e,n),w=n.memoizedProps,N=n.type===n.elementType?w:vn(n.type,w),c.props=N,$=n.pendingProps,D=c.context,S=t.contextType,typeof S=="object"&&S!==null?S=dn(S):(S=Xe(t)?rt:He.current,S=_t(n,S));var X=t.getDerivedStateFromProps;(A=typeof X=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(w!==$||D!==S)&&lu(n,c,o,S),Vn=!1,D=n.memoizedState,c.state=D,po(n,o,c,s);var Z=n.memoizedState;w!==$||D!==Z||Ke.current||Vn?(typeof X=="function"&&(pl(n,t,X,o),Z=n.memoizedState),(N=Vn||ou(n,t,N,o,D,Z,S)||!1)?(A||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,Z,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,Z,S)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=Z),c.props=o,c.state=Z,c.context=S,o=N):(typeof c.componentDidUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),o=!1)}return vl(e,n,t,o,a,s)}function vl(e,n,t,o,s,a){yu(e,n);var c=(n.flags&128)!==0;if(!o&&!c)return s&&Sa(n,t,!1),Rn(e,n,a);o=n.stateNode,sf.current=n;var w=c&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&c?(n.child=Nt(n,e.child,null,a),n.child=Nt(n,null,w,a)):Qe(e,n,w,a),n.memoizedState=o.state,s&&Sa(n,t,!0),n.child}function vu(e){var n=e.stateNode;n.pendingContext?wa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&wa(e,n.context,!1),nl(e,n.containerInfo)}function xu(e,n,t,o,s){return Tt(),Ys(s),n.flags|=256,Qe(e,n,t,o),n.child}var xl={dehydrated:null,treeContext:null,retryLane:0};function wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function wu(e,n,t){var o=n.pendingProps,s=Ee.current,a=!1,c=(n.flags&128)!==0,w;if((w=c)||(w=e!==null&&e.memoizedState===null?!1:(s&2)!==0),w?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Pe(Ee,s&1),e===null)return Qs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(c=o.children,e=o.fallback,a?(o=n.mode,a=n.child,c={mode:"hidden",children:c},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=zo(c,o,0,null),e=pt(e,o,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=wl(t),n.memoizedState=xl,e):kl(n,c));if(s=e.memoizedState,s!==null&&(w=s.dehydrated,w!==null))return lf(e,n,c,o,w,s,t);if(a){a=o.fallback,c=n.mode,s=e.child,w=s.sibling;var S={mode:"hidden",children:o.children};return(c&1)===0&&n.child!==s?(o=n.child,o.childLanes=0,o.pendingProps=S,n.deletions=null):(o=Zn(s,S),o.subtreeFlags=s.subtreeFlags&14680064),w!==null?a=Zn(w,a):(a=pt(a,c,t,null),a.flags|=2),a.return=n,o.return=n,o.sibling=a,n.child=o,o=a,a=n.child,c=e.child.memoizedState,c=c===null?wl(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~t,n.memoizedState=xl,o}return a=e.child,e=a.sibling,o=Zn(a,{mode:"visible",children:o.children}),(n.mode&1)===0&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function kl(e,n){return n=zo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ko(e,n,t,o){return o!==null&&Ys(o),Nt(n,e.child,null,t),e=kl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lf(e,n,t,o,s,a,c){if(t)return n.flags&256?(n.flags&=-257,o=ml(Error(i(422))),ko(e,n,c,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=o.fallback,s=n.mode,o=zo({mode:"visible",children:o.children},s,0,null),a=pt(a,s,c,null),a.flags|=2,o.return=n,a.return=n,o.sibling=a,n.child=o,(n.mode&1)!==0&&Nt(n,e.child,null,c),n.child.memoizedState=wl(c),n.memoizedState=xl,a);if((n.mode&1)===0)return ko(e,n,c,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var w=o.dgst;return o=w,a=Error(i(419)),o=ml(a,o,void 0),ko(e,n,c,o)}if(w=(c&e.childLanes)!==0,Ge||w){if(o=De,o!==null){switch(c&-c){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|c))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Ln(e,s),kn(o,e,s,-1))}return Fl(),o=ml(Error(i(421))),ko(e,n,c,o)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=wf.bind(null,e),s._reactRetry=n,null):(e=a.treeContext,sn=Bn(s.nextSibling),on=n,Ce=!0,gn=null,e!==null&&(un[cn++]=Tn,un[cn++]=Nn,un[cn++]=ot,Tn=e.id,Nn=e.overflow,ot=n),n=kl(n,o.children),n.flags|=4096,n)}function ku(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Zs(e.return,n,t)}function Sl(e,n,t,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:s}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=t,a.tailMode=s)}function Su(e,n,t){var o=n.pendingProps,s=o.revealOrder,a=o.tail;if(Qe(e,n,o.children,t),o=Ee.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,t,n);else if(e.tag===19)ku(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Pe(Ee,o),(n.mode&1)===0)n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&ho(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),Sl(n,!1,s,t,a);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&ho(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}Sl(n,!0,t,null,a);break;case"together":Sl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function So(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ut|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,t=Zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function af(e,n,t){switch(n.tag){case 3:vu(n),Tt();break;case 5:Ia(n);break;case 1:Xe(n.type)&&ro(n);break;case 4:nl(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,s=n.memoizedProps.value;Pe(uo,o._currentValue),o._currentValue=s;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(Pe(Ee,Ee.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?wu(e,n,t):(Pe(Ee,Ee.current&1),e=Rn(e,n,t),e!==null?e.sibling:null);Pe(Ee,Ee.current&1);break;case 19:if(o=(t&n.childLanes)!==0,(e.flags&128)!==0){if(o)return Su(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Pe(Ee,Ee.current),o)break;return null;case 22:case 23:return n.lanes=0,mu(e,n,t)}return Rn(e,n,t)}var Mu,Ml,Pu,bu;Mu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Ml=function(){},Pu=function(e,n,t,o){var s=e.memoizedProps;if(s!==o){e=n.stateNode,it(Pn.current);var a=null;switch(t){case"input":s=Zo(e,s),o=Zo(e,o),a=[];break;case"select":s=Y({},s,{value:void 0}),o=Y({},o,{value:void 0}),a=[];break;case"textarea":s=ns(e,s),o=ns(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=eo)}rs(t,o);var c;t=null;for(N in s)if(!o.hasOwnProperty(N)&&s.hasOwnProperty(N)&&s[N]!=null)if(N==="style"){var w=s[N];for(c in w)w.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(f.hasOwnProperty(N)?a||(a=[]):(a=a||[]).push(N,null));for(N in o){var S=o[N];if(w=s!=null?s[N]:void 0,o.hasOwnProperty(N)&&S!==w&&(S!=null||w!=null))if(N==="style")if(w){for(c in w)!w.hasOwnProperty(c)||S&&S.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in S)S.hasOwnProperty(c)&&w[c]!==S[c]&&(t||(t={}),t[c]=S[c])}else t||(a||(a=[]),a.push(N,t)),t=S;else N==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,w=w?w.__html:void 0,S!=null&&w!==S&&(a=a||[]).push(N,S)):N==="children"?typeof S!="string"&&typeof S!="number"||(a=a||[]).push(N,""+S):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(f.hasOwnProperty(N)?(S!=null&&N==="onScroll"&&be("scroll",e),a||w===S||(a=[])):(a=a||[]).push(N,S))}t&&(a=a||[]).push("style",t);var N=a;(n.updateQueue=N)&&(n.flags|=4)}},bu=function(e,n,t,o){t!==o&&(n.flags|=4)};function wr(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function uf(e,n,t){var o=n.pendingProps;switch(Vs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Xe(n.type)&&to(),Ve(n),null;case 3:return o=n.stateNode,Rt(),_e(Ke),_e(He),ol(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(io(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gn!==null&&(zl(gn),gn=null))),Ml(e,n),Ve(n),null;case 5:tl(n);var s=it(mr.current);if(t=n.type,e!==null&&n.stateNode!=null)Pu(e,n,t,o,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(i(166));return Ve(n),null}if(e=it(Pn.current),io(n)){o=n.stateNode,t=n.type;var a=n.memoizedProps;switch(o[Mn]=n,o[cr]=a,e=(n.mode&1)!==0,t){case"dialog":be("cancel",o),be("close",o);break;case"iframe":case"object":case"embed":be("load",o);break;case"video":case"audio":for(s=0;s<ir.length;s++)be(ir[s],o);break;case"source":be("error",o);break;case"img":case"image":case"link":be("error",o),be("load",o);break;case"details":be("toggle",o);break;case"input":si(o,a),be("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},be("invalid",o);break;case"textarea":ai(o,a),be("invalid",o)}rs(t,a),s=null;for(var c in a)if(a.hasOwnProperty(c)){var w=a[c];c==="children"?typeof w=="string"?o.textContent!==w&&(a.suppressHydrationWarning!==!0&&Jr(o.textContent,w,e),s=["children",w]):typeof w=="number"&&o.textContent!==""+w&&(a.suppressHydrationWarning!==!0&&Jr(o.textContent,w,e),s=["children",""+w]):f.hasOwnProperty(c)&&w!=null&&c==="onScroll"&&be("scroll",o)}switch(t){case"input":Nr(o),ii(o,a,!0);break;case"textarea":Nr(o),ci(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=eo)}o=s,n.updateQueue=o,o!==null&&(n.flags|=4)}else{c=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=di(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=c.createElement(t,{is:o.is}):(e=c.createElement(t),t==="select"&&(c=e,o.multiple?c.multiple=!0:o.size&&(c.size=o.size))):e=c.createElementNS(e,t),e[Mn]=n,e[cr]=o,Mu(e,n,!1,!1),n.stateNode=e;e:{switch(c=os(t,o),t){case"dialog":be("cancel",e),be("close",e),s=o;break;case"iframe":case"object":case"embed":be("load",e),s=o;break;case"video":case"audio":for(s=0;s<ir.length;s++)be(ir[s],e);s=o;break;case"source":be("error",e),s=o;break;case"img":case"image":case"link":be("error",e),be("load",e),s=o;break;case"details":be("toggle",e),s=o;break;case"input":si(e,o),s=Zo(e,o),be("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=Y({},o,{value:void 0}),be("invalid",e);break;case"textarea":ai(e,o),s=ns(e,o),be("invalid",e);break;default:s=o}rs(t,s),w=s;for(a in w)if(w.hasOwnProperty(a)){var S=w[a];a==="style"?hi(e,S):a==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&fi(e,S)):a==="children"?typeof S=="string"?(t!=="textarea"||S!=="")&&Ut(e,S):typeof S=="number"&&Ut(e,""+S):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(f.hasOwnProperty(a)?S!=null&&a==="onScroll"&&be("scroll",e):S!=null&&I(e,a,S,c))}switch(t){case"input":Nr(e),ii(e,o,!1);break;case"textarea":Nr(e),ci(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ye(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?ht(e,!!o.multiple,a,!1):o.defaultValue!=null&&ht(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=eo)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ve(n),null;case 6:if(e&&n.stateNode!=null)bu(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(i(166));if(t=it(mr.current),it(Pn.current),io(n)){if(o=n.stateNode,t=n.memoizedProps,o[Mn]=n,(a=o.nodeValue!==t)&&(e=on,e!==null))switch(e.tag){case 3:Jr(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(o.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Mn]=n,n.stateNode=o}return Ve(n),null;case 13:if(_e(Ee),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&sn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Ea(),Tt(),n.flags|=98560,a=!1;else if(a=io(n),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[Mn]=n}else Tt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),a=!1}else gn!==null&&(zl(gn),gn=null),a=!0;if(!a)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Ie===0&&(Ie=3):Fl())),n.updateQueue!==null&&(n.flags|=4),Ve(n),null);case 4:return Rt(),Ml(e,n),e===null&&ar(n.stateNode.containerInfo),Ve(n),null;case 10:return Gs(n.type._context),Ve(n),null;case 17:return Xe(n.type)&&to(),Ve(n),null;case 19:if(_e(Ee),a=n.memoizedState,a===null)return Ve(n),null;if(o=(n.flags&128)!==0,c=a.rendering,c===null)if(o)wr(a,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=ho(e),c!==null){for(n.flags|=128,wr(a,!1),o=c.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)a=t,e=o,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Pe(Ee,Ee.current&1|2),n.child}e=e.sibling}a.tail!==null&&Le()>Ft&&(n.flags|=128,o=!0,wr(a,!1),n.lanes=4194304)}else{if(!o)if(e=ho(c),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!Ce)return Ve(n),null}else 2*Le()-a.renderingStartTime>Ft&&t!==1073741824&&(n.flags|=128,o=!0,wr(a,!1),n.lanes=4194304);a.isBackwards?(c.sibling=n.child,n.child=c):(t=a.last,t!==null?t.sibling=c:n.child=c,a.last=c)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Le(),n.sibling=null,t=Ee.current,Pe(Ee,o?t&1|2:t&1),n):(Ve(n),null);case 22:case 23:return Il(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&(n.mode&1)!==0?(ln&1073741824)!==0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function cf(e,n){switch(Vs(n),n.tag){case 1:return Xe(n.type)&&to(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Rt(),_e(Ke),_e(He),ol(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return tl(n),null;case 13:if(_e(Ee),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Tt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _e(Ee),null;case 4:return Rt(),null;case 10:return Gs(n.type._context),null;case 22:case 23:return Il(),null;case 24:return null;default:return null}}var Mo=!1,qe=!1,df=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ot(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Ne(e,n,o)}else t.current=null}function Pl(e,n,t){try{t()}catch(o){Ne(e,n,o)}}var _u=!1;function ff(e,n){if(Is=Ur,e=oa(),Es(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var c=0,w=-1,S=-1,N=0,A=0,$=e,D=null;n:for(;;){for(var X;$!==t||s!==0&&$.nodeType!==3||(w=c+s),$!==a||o!==0&&$.nodeType!==3||(S=c+o),$.nodeType===3&&(c+=$.nodeValue.length),(X=$.firstChild)!==null;)D=$,$=X;for(;;){if($===e)break n;if(D===t&&++N===s&&(w=c),D===a&&++A===o&&(S=c),(X=$.nextSibling)!==null)break;$=D,D=$.parentNode}$=X}t=w===-1||S===-1?null:{start:w,end:S}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fs={focusedElem:e,selectionRange:t},Ur=!1,G=n;G!==null;)if(n=G,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,G=e;else for(;G!==null;){n=G;try{var Z=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ne=Z.memoizedProps,je=Z.memoizedState,_=n.stateNode,M=_.getSnapshotBeforeUpdate(n.elementType===n.type?ne:vn(n.type,ne),je);_.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var T=n.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(U){Ne(n,n.return,U)}if(e=n.sibling,e!==null){e.return=n.return,G=e;break}G=n.return}return Z=_u,_u=!1,Z}function kr(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Pl(n,t,a)}s=s.next}while(s!==o)}}function Po(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function bl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Cu(e){var n=e.alternate;n!==null&&(e.alternate=null,Cu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mn],delete n[cr],delete n[Bs],delete n[Qd],delete n[Yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Eu(e){return e.tag===5||e.tag===3||e.tag===4}function Tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _l(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=eo));else if(o!==4&&(e=e.child,e!==null))for(_l(e,n,t),e=e.sibling;e!==null;)_l(e,n,t),e=e.sibling}function Cl(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Cl(e,n,t),e=e.sibling;e!==null;)Cl(e,n,t),e=e.sibling}var $e=null,xn=!1;function Qn(e,n,t){for(t=t.child;t!==null;)Nu(e,n,t),t=t.sibling}function Nu(e,n,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Ir,t)}catch{}switch(t.tag){case 5:qe||Ot(t,n);case 6:var o=$e,s=xn;$e=null,Qn(e,n,t),$e=o,xn=s,$e!==null&&(xn?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(xn?(e=$e,t=t.stateNode,e.nodeType===8?$s(e.parentNode,t):e.nodeType===1&&$s(e,t),Jt(e)):$s($e,t.stateNode));break;case 4:o=$e,s=xn,$e=t.stateNode.containerInfo,xn=!0,Qn(e,n,t),$e=o,xn=s;break;case 0:case 11:case 14:case 15:if(!qe&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&Pl(t,n,c),s=s.next}while(s!==o)}Qn(e,n,t);break;case 1:if(!qe&&(Ot(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(w){Ne(t,n,w)}Qn(e,n,t);break;case 21:Qn(e,n,t);break;case 22:t.mode&1?(qe=(o=qe)||t.memoizedState!==null,Qn(e,n,t),qe=o):Qn(e,n,t);break;default:Qn(e,n,t)}}function Lu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new df),n.forEach(function(o){var s=kf.bind(null,e,o);t.has(o)||(t.add(o),o.then(s,s))})}}function wn(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var s=t[o];try{var a=e,c=n,w=c;e:for(;w!==null;){switch(w.tag){case 5:$e=w.stateNode,xn=!1;break e;case 3:$e=w.stateNode.containerInfo,xn=!0;break e;case 4:$e=w.stateNode.containerInfo,xn=!0;break e}w=w.return}if($e===null)throw Error(i(160));Nu(a,c,s),$e=null,xn=!1;var S=s.alternate;S!==null&&(S.return=null),s.return=null}catch(N){Ne(s,n,N)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ju(n,e),n=n.sibling}function ju(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wn(n,e),_n(e),o&4){try{kr(3,e,e.return),Po(3,e)}catch(ne){Ne(e,e.return,ne)}try{kr(5,e,e.return)}catch(ne){Ne(e,e.return,ne)}}break;case 1:wn(n,e),_n(e),o&512&&t!==null&&Ot(t,t.return);break;case 5:if(wn(n,e),_n(e),o&512&&t!==null&&Ot(t,t.return),e.flags&32){var s=e.stateNode;try{Ut(s,"")}catch(ne){Ne(e,e.return,ne)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,c=t!==null?t.memoizedProps:a,w=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{w==="input"&&a.type==="radio"&&a.name!=null&&li(s,a),os(w,c);var N=os(w,a);for(c=0;c<S.length;c+=2){var A=S[c],$=S[c+1];A==="style"?hi(s,$):A==="dangerouslySetInnerHTML"?fi(s,$):A==="children"?Ut(s,$):I(s,A,$,N)}switch(w){case"input":Jo(s,a);break;case"textarea":ui(s,a);break;case"select":var D=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var X=a.value;X!=null?ht(s,!!a.multiple,X,!1):D!==!!a.multiple&&(a.defaultValue!=null?ht(s,!!a.multiple,a.defaultValue,!0):ht(s,!!a.multiple,a.multiple?[]:"",!1))}s[cr]=a}catch(ne){Ne(e,e.return,ne)}}break;case 6:if(wn(n,e),_n(e),o&4){if(e.stateNode===null)throw Error(i(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(ne){Ne(e,e.return,ne)}}break;case 3:if(wn(n,e),_n(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Jt(n.containerInfo)}catch(ne){Ne(e,e.return,ne)}break;case 4:wn(n,e),_n(e);break;case 13:wn(n,e),_n(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Nl=Le())),o&4&&Lu(e);break;case 22:if(A=t!==null&&t.memoizedState!==null,e.mode&1?(qe=(N=qe)||A,wn(n,e),qe=N):wn(n,e),_n(e),o&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!A&&(e.mode&1)!==0)for(G=e,A=e.child;A!==null;){for($=G=A;G!==null;){switch(D=G,X=D.child,D.tag){case 0:case 11:case 14:case 15:kr(4,D,D.return);break;case 1:Ot(D,D.return);var Z=D.stateNode;if(typeof Z.componentWillUnmount=="function"){o=D,t=D.return;try{n=o,Z.props=n.memoizedProps,Z.state=n.memoizedState,Z.componentWillUnmount()}catch(ne){Ne(o,t,ne)}}break;case 5:Ot(D,D.return);break;case 22:if(D.memoizedState!==null){Ou($);continue}}X!==null?(X.return=D,G=X):Ou($)}A=A.sibling}e:for(A=null,$=e;;){if($.tag===5){if(A===null){A=$;try{s=$.stateNode,N?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(w=$.stateNode,S=$.memoizedProps.style,c=S!=null&&S.hasOwnProperty("display")?S.display:null,w.style.display=pi("display",c))}catch(ne){Ne(e,e.return,ne)}}}else if($.tag===6){if(A===null)try{$.stateNode.nodeValue=N?"":$.memoizedProps}catch(ne){Ne(e,e.return,ne)}}else if(($.tag!==22&&$.tag!==23||$.memoizedState===null||$===e)&&$.child!==null){$.child.return=$,$=$.child;continue}if($===e)break e;for(;$.sibling===null;){if($.return===null||$.return===e)break e;A===$&&(A=null),$=$.return}A===$&&(A=null),$.sibling.return=$.return,$=$.sibling}}break;case 19:wn(n,e),_n(e),o&4&&Lu(e);break;case 21:break;default:wn(n,e),_n(e)}}function _n(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Eu(t)){var o=t;break e}t=t.return}throw Error(i(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Ut(s,""),o.flags&=-33);var a=Tu(e);Cl(e,a,s);break;case 3:case 4:var c=o.stateNode.containerInfo,w=Tu(e);_l(e,w,c);break;default:throw Error(i(161))}}catch(S){Ne(e,e.return,S)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pf(e,n,t){G=e,Ru(e)}function Ru(e,n,t){for(var o=(e.mode&1)!==0;G!==null;){var s=G,a=s.child;if(s.tag===22&&o){var c=s.memoizedState!==null||Mo;if(!c){var w=s.alternate,S=w!==null&&w.memoizedState!==null||qe;w=Mo;var N=qe;if(Mo=c,(qe=S)&&!N)for(G=s;G!==null;)c=G,S=c.child,c.tag===22&&c.memoizedState!==null?Iu(s):S!==null?(S.return=c,G=S):Iu(s);for(;a!==null;)G=a,Ru(a),a=a.sibling;G=s,Mo=w,qe=N}zu(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,G=a):zu(e)}}function zu(e){for(;G!==null;){var n=G;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:qe||Po(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!qe)if(t===null)o.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:vn(n.type,t.memoizedProps);o.componentDidUpdate(s,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Oa(n,a,o);break;case 3:var c=n.updateQueue;if(c!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Oa(n,c,t)}break;case 5:var w=n.stateNode;if(t===null&&n.flags&4){t=w;var S=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&t.focus();break;case"img":S.src&&(t.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var N=n.alternate;if(N!==null){var A=N.memoizedState;if(A!==null){var $=A.dehydrated;$!==null&&Jt($)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}qe||n.flags&512&&bl(n)}catch(D){Ne(n,n.return,D)}}if(n===e){G=null;break}if(t=n.sibling,t!==null){t.return=n.return,G=t;break}G=n.return}}function Ou(e){for(;G!==null;){var n=G;if(n===e){G=null;break}var t=n.sibling;if(t!==null){t.return=n.return,G=t;break}G=n.return}}function Iu(e){for(;G!==null;){var n=G;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Po(4,n)}catch(S){Ne(n,t,S)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var s=n.return;try{o.componentDidMount()}catch(S){Ne(n,s,S)}}var a=n.return;try{bl(n)}catch(S){Ne(n,a,S)}break;case 5:var c=n.return;try{bl(n)}catch(S){Ne(n,c,S)}}}catch(S){Ne(n,n.return,S)}if(n===e){G=null;break}var w=n.sibling;if(w!==null){w.return=n.return,G=w;break}G=n.return}}var hf=Math.ceil,bo=z.ReactCurrentDispatcher,El=z.ReactCurrentOwner,pn=z.ReactCurrentBatchConfig,me=0,De=null,Re=null,Be=0,ln=0,It=Un(0),Ie=0,Sr=null,ut=0,_o=0,Tl=0,Mr=null,Ze=null,Nl=0,Ft=1/0,zn=null,Co=!1,Ll=null,Yn=null,Eo=!1,Kn=null,To=0,Pr=0,jl=null,No=-1,Lo=0;function Ye(){return(me&6)!==0?Le():No!==-1?No:No=Le()}function Xn(e){return(e.mode&1)===0?1:(me&2)!==0&&Be!==0?Be&-Be:Xd.transition!==null?(Lo===0&&(Lo=Ti()),Lo):(e=ke,e!==0||(e=window.event,e=e===void 0?16:Di(e.type)),e)}function kn(e,n,t,o){if(50<Pr)throw Pr=0,jl=null,Error(i(185));Yt(e,t,o),((me&2)===0||e!==De)&&(e===De&&((me&2)===0&&(_o|=t),Ie===4&&Gn(e,Be)),Je(e,o),t===1&&me===0&&(n.mode&1)===0&&(Ft=Le()+500,oo&&Wn()))}function Je(e,n){var t=e.callbackNode;Xc(e,n);var o=Ar(e,e===De?Be:0);if(o===0)t!==null&&_i(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&_i(t),n===1)e.tag===0?Kd(Du.bind(null,e)):Ma(Du.bind(null,e)),Vd(function(){(me&6)===0&&Wn()}),t=null;else{switch(Ni(o)){case 1:t=ds;break;case 4:t=Ci;break;case 16:t=Or;break;case 536870912:t=Ei;break;default:t=Or}t=qu(t,Fu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Fu(e,n){if(No=-1,Lo=0,(me&6)!==0)throw Error(i(327));var t=e.callbackNode;if(Dt()&&e.callbackNode!==t)return null;var o=Ar(e,e===De?Be:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||n)n=jo(e,o);else{n=o;var s=me;me|=2;var a=$u();(De!==e||Be!==n)&&(zn=null,Ft=Le()+500,dt(e,n));do try{gf();break}catch(w){Au(e,w)}while(!0);Xs(),bo.current=a,me=s,Re!==null?n=0:(De=null,Be=0,n=Ie)}if(n!==0){if(n===2&&(s=fs(e),s!==0&&(o=s,n=Rl(e,s))),n===1)throw t=Sr,dt(e,0),Gn(e,o),Je(e,Le()),t;if(n===6)Gn(e,o);else{if(s=e.current.alternate,(o&30)===0&&!mf(s)&&(n=jo(e,o),n===2&&(a=fs(e),a!==0&&(o=a,n=Rl(e,a))),n===1))throw t=Sr,dt(e,0),Gn(e,o),Je(e,Le()),t;switch(e.finishedWork=s,e.finishedLanes=o,n){case 0:case 1:throw Error(i(345));case 2:ft(e,Ze,zn);break;case 3:if(Gn(e,o),(o&130023424)===o&&(n=Nl+500-Le(),10<n)){if(Ar(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){Ye(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=As(ft.bind(null,e,Ze,zn),n);break}ft(e,Ze,zn);break;case 4:if(Gn(e,o),(o&4194240)===o)break;for(n=e.eventTimes,s=-1;0<o;){var c=31-mn(o);a=1<<c,c=n[c],c>s&&(s=c),o&=~a}if(o=s,o=Le()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*hf(o/1960))-o,10<o){e.timeoutHandle=As(ft.bind(null,e,Ze,zn),o);break}ft(e,Ze,zn);break;case 5:ft(e,Ze,zn);break;default:throw Error(i(329))}}}return Je(e,Le()),e.callbackNode===t?Fu.bind(null,e):null}function Rl(e,n){var t=Mr;return e.current.memoizedState.isDehydrated&&(dt(e,n).flags|=256),e=jo(e,n),e!==2&&(n=Ze,Ze=t,n!==null&&zl(n)),e}function zl(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function mf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var s=t[o],a=s.getSnapshot;s=s.value;try{if(!yn(a(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Gn(e,n){for(n&=~Tl,n&=~_o,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-mn(n),o=1<<t;e[t]=-1,n&=~o}}function Du(e){if((me&6)!==0)throw Error(i(327));Dt();var n=Ar(e,0);if((n&1)===0)return Je(e,Le()),null;var t=jo(e,n);if(e.tag!==0&&t===2){var o=fs(e);o!==0&&(n=o,t=Rl(e,o))}if(t===1)throw t=Sr,dt(e,0),Gn(e,n),Je(e,Le()),t;if(t===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ft(e,Ze,zn),Je(e,Le()),null}function Ol(e,n){var t=me;me|=1;try{return e(n)}finally{me=t,me===0&&(Ft=Le()+500,oo&&Wn())}}function ct(e){Kn!==null&&Kn.tag===0&&(me&6)===0&&Dt();var n=me;me|=1;var t=pn.transition,o=ke;try{if(pn.transition=null,ke=1,e)return e()}finally{ke=o,pn.transition=t,me=n,(me&6)===0&&Wn()}}function Il(){ln=It.current,_e(It)}function dt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Wd(t)),Re!==null)for(t=Re.return;t!==null;){var o=t;switch(Vs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&to();break;case 3:Rt(),_e(Ke),_e(He),ol();break;case 5:tl(o);break;case 4:Rt();break;case 13:_e(Ee);break;case 19:_e(Ee);break;case 10:Gs(o.type._context);break;case 22:case 23:Il()}t=t.return}if(De=e,Re=e=Zn(e.current,null),Be=ln=n,Ie=0,Sr=null,Tl=_o=ut=0,Ze=Mr=null,lt!==null){for(n=0;n<lt.length;n++)if(t=lt[n],o=t.interleaved,o!==null){t.interleaved=null;var s=o.next,a=t.pending;if(a!==null){var c=a.next;a.next=s,o.next=c}t.pending=o}lt=null}return e}function Au(e,n){do{var t=Re;try{if(Xs(),mo.current=xo,yo){for(var o=Te.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}yo=!1}if(at=0,Fe=Oe=Te=null,yr=!1,gr=0,El.current=null,t===null||t.return===null){Ie=1,Sr=n,Re=null;break}e:{var a=e,c=t.return,w=t,S=n;if(n=Be,w.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var N=S,A=w,$=A.tag;if((A.mode&1)===0&&($===0||$===11||$===15)){var D=A.alternate;D?(A.updateQueue=D.updateQueue,A.memoizedState=D.memoizedState,A.lanes=D.lanes):(A.updateQueue=null,A.memoizedState=null)}var X=cu(c);if(X!==null){X.flags&=-257,du(X,c,w,a,n),X.mode&1&&uu(a,N,n),n=X,S=N;var Z=n.updateQueue;if(Z===null){var ne=new Set;ne.add(S),n.updateQueue=ne}else Z.add(S);break e}else{if((n&1)===0){uu(a,N,n),Fl();break e}S=Error(i(426))}}else if(Ce&&w.mode&1){var je=cu(c);if(je!==null){(je.flags&65536)===0&&(je.flags|=256),du(je,c,w,a,n),Ys(zt(S,w));break e}}a=S=zt(S,w),Ie!==4&&(Ie=2),Mr===null?Mr=[a]:Mr.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var _=iu(a,S,n);za(a,_);break e;case 1:w=S;var M=a.type,T=a.stateNode;if((a.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Yn===null||!Yn.has(T)))){a.flags|=65536,n&=-n,a.lanes|=n;var U=au(a,w,n);za(a,U);break e}}a=a.return}while(a!==null)}Uu(t)}catch(te){n=te,Re===t&&t!==null&&(Re=t=t.return);continue}break}while(!0)}function $u(){var e=bo.current;return bo.current=xo,e===null?xo:e}function Fl(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),De===null||(ut&268435455)===0&&(_o&268435455)===0||Gn(De,Be)}function jo(e,n){var t=me;me|=2;var o=$u();(De!==e||Be!==n)&&(zn=null,dt(e,n));do try{yf();break}catch(s){Au(e,s)}while(!0);if(Xs(),me=t,bo.current=o,Re!==null)throw Error(i(261));return De=null,Be=0,Ie}function yf(){for(;Re!==null;)Bu(Re)}function gf(){for(;Re!==null&&!Bc();)Bu(Re)}function Bu(e){var n=Vu(e.alternate,e,ln);e.memoizedProps=e.pendingProps,n===null?Uu(e):Re=n,El.current=null}function Uu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=uf(t,n,ln),t!==null){Re=t;return}}else{if(t=cf(t,n),t!==null){t.flags&=32767,Re=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Re=null;return}}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);Ie===0&&(Ie=5)}function ft(e,n,t){var o=ke,s=pn.transition;try{pn.transition=null,ke=1,vf(e,n,t,o)}finally{pn.transition=s,ke=o}return null}function vf(e,n,t,o){do Dt();while(Kn!==null);if((me&6)!==0)throw Error(i(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Gc(e,a),e===De&&(Re=De=null,Be=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Eo||(Eo=!0,qu(Or,function(){return Dt(),null})),a=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||a){a=pn.transition,pn.transition=null;var c=ke;ke=1;var w=me;me|=4,El.current=null,ff(e,t),ju(t,e),Fd(Fs),Ur=!!Is,Fs=Is=null,e.current=t,pf(t),Uc(),me=w,ke=c,pn.transition=a}else e.current=t;if(Eo&&(Eo=!1,Kn=e,To=s),a=e.pendingLanes,a===0&&(Yn=null),Vc(t.stateNode),Je(e,Le()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],o(s.value,{componentStack:s.stack,digest:s.digest});if(Co)throw Co=!1,e=Ll,Ll=null,e;return(To&1)!==0&&e.tag!==0&&Dt(),a=e.pendingLanes,(a&1)!==0?e===jl?Pr++:(Pr=0,jl=e):Pr=0,Wn(),null}function Dt(){if(Kn!==null){var e=Ni(To),n=pn.transition,t=ke;try{if(pn.transition=null,ke=16>e?16:e,Kn===null)var o=!1;else{if(e=Kn,Kn=null,To=0,(me&6)!==0)throw Error(i(331));var s=me;for(me|=4,G=e.current;G!==null;){var a=G,c=a.child;if((G.flags&16)!==0){var w=a.deletions;if(w!==null){for(var S=0;S<w.length;S++){var N=w[S];for(G=N;G!==null;){var A=G;switch(A.tag){case 0:case 11:case 15:kr(8,A,a)}var $=A.child;if($!==null)$.return=A,G=$;else for(;G!==null;){A=G;var D=A.sibling,X=A.return;if(Cu(A),A===N){G=null;break}if(D!==null){D.return=X,G=D;break}G=X}}}var Z=a.alternate;if(Z!==null){var ne=Z.child;if(ne!==null){Z.child=null;do{var je=ne.sibling;ne.sibling=null,ne=je}while(ne!==null)}}G=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,G=c;else e:for(;G!==null;){if(a=G,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:kr(9,a,a.return)}var _=a.sibling;if(_!==null){_.return=a.return,G=_;break e}G=a.return}}var M=e.current;for(G=M;G!==null;){c=G;var T=c.child;if((c.subtreeFlags&2064)!==0&&T!==null)T.return=c,G=T;else e:for(c=M;G!==null;){if(w=G,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Po(9,w)}}catch(te){Ne(w,w.return,te)}if(w===c){G=null;break e}var U=w.sibling;if(U!==null){U.return=w.return,G=U;break e}G=w.return}}if(me=s,Wn(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Ir,e)}catch{}o=!0}return o}finally{ke=t,pn.transition=n}}return!1}function Hu(e,n,t){n=zt(t,n),n=iu(e,n,1),e=qn(e,n,1),n=Ye(),e!==null&&(Yt(e,1,n),Je(e,n))}function Ne(e,n,t){if(e.tag===3)Hu(e,e,t);else for(;n!==null;){if(n.tag===3){Hu(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Yn===null||!Yn.has(o))){e=zt(t,e),e=au(n,e,1),n=qn(n,e,1),e=Ye(),n!==null&&(Yt(n,1,e),Je(n,e));break}}n=n.return}}function xf(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=Ye(),e.pingedLanes|=e.suspendedLanes&t,De===e&&(Be&t)===t&&(Ie===4||Ie===3&&(Be&130023424)===Be&&500>Le()-Nl?dt(e,0):Tl|=t),Je(e,n)}function Wu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Dr,Dr<<=1,(Dr&130023424)===0&&(Dr=4194304)));var t=Ye();e=Ln(e,n),e!==null&&(Yt(e,n,t),Je(e,t))}function wf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Wu(e,t)}function kf(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(i(314))}o!==null&&o.delete(n),Wu(e,t)}var Vu;Vu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ke.current)Ge=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Ge=!1,af(e,n,t);Ge=(e.flags&131072)!==0}else Ge=!1,Ce&&(n.flags&1048576)!==0&&Pa(n,lo,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;So(e,n),e=n.pendingProps;var s=_t(n,He.current);jt(n,t),s=il(null,n,o,e,s,t);var a=al();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(o)?(a=!0,ro(n)):a=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,el(n),s.updater=wo,n.stateNode=s,s._reactInternals=n,hl(n,o,e,t),n=vl(null,n,o,!0,a,t)):(n.tag=0,Ce&&a&&Ws(n),Qe(null,n,s,t),n=n.child),n;case 16:o=n.elementType;e:{switch(So(e,n),e=n.pendingProps,s=o._init,o=s(o._payload),n.type=o,s=n.tag=Mf(o),e=vn(o,e),s){case 0:n=gl(null,n,o,e,t);break e;case 1:n=gu(null,n,o,e,t);break e;case 11:n=fu(null,n,o,e,t);break e;case 14:n=pu(null,n,o,vn(o.type,e),t);break e}throw Error(i(306,o,""))}return n;case 0:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:vn(o,s),gl(e,n,o,s,t);case 1:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:vn(o,s),gu(e,n,o,s,t);case 3:e:{if(vu(n),e===null)throw Error(i(387));o=n.pendingProps,a=n.memoizedState,s=a.element,Ra(e,n),po(n,o,null,t);var c=n.memoizedState;if(o=c.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){s=zt(Error(i(423)),n),n=xu(e,n,o,t,s);break e}else if(o!==s){s=zt(Error(i(424)),n),n=xu(e,n,o,t,s);break e}else for(sn=Bn(n.stateNode.containerInfo.firstChild),on=n,Ce=!0,gn=null,t=La(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Tt(),o===s){n=Rn(e,n,t);break e}Qe(e,n,o,t)}n=n.child}return n;case 5:return Ia(n),e===null&&Qs(n),o=n.type,s=n.pendingProps,a=e!==null?e.memoizedProps:null,c=s.children,Ds(o,s)?c=null:a!==null&&Ds(o,a)&&(n.flags|=32),yu(e,n),Qe(e,n,c,t),n.child;case 6:return e===null&&Qs(n),null;case 13:return wu(e,n,t);case 4:return nl(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Nt(n,null,o,t):Qe(e,n,o,t),n.child;case 11:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:vn(o,s),fu(e,n,o,s,t);case 7:return Qe(e,n,n.pendingProps,t),n.child;case 8:return Qe(e,n,n.pendingProps.children,t),n.child;case 12:return Qe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,s=n.pendingProps,a=n.memoizedProps,c=s.value,Pe(uo,o._currentValue),o._currentValue=c,a!==null)if(yn(a.value,c)){if(a.children===s.children&&!Ke.current){n=Rn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var w=a.dependencies;if(w!==null){c=a.child;for(var S=w.firstContext;S!==null;){if(S.context===o){if(a.tag===1){S=jn(-1,t&-t),S.tag=2;var N=a.updateQueue;if(N!==null){N=N.shared;var A=N.pending;A===null?S.next=S:(S.next=A.next,A.next=S),N.pending=S}}a.lanes|=t,S=a.alternate,S!==null&&(S.lanes|=t),Zs(a.return,t,n),w.lanes|=t;break}S=S.next}}else if(a.tag===10)c=a.type===n.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(i(341));c.lanes|=t,w=c.alternate,w!==null&&(w.lanes|=t),Zs(c,t,n),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===n){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}Qe(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,o=n.pendingProps.children,jt(n,t),s=dn(s),o=o(s),n.flags|=1,Qe(e,n,o,t),n.child;case 14:return o=n.type,s=vn(o,n.pendingProps),s=vn(o.type,s),pu(e,n,o,s,t);case 15:return hu(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,s=n.pendingProps,s=n.elementType===o?s:vn(o,s),So(e,n),n.tag=1,Xe(o)?(e=!0,ro(n)):e=!1,jt(n,t),su(n,o,s),hl(n,o,s,t),vl(null,n,o,!0,e,t);case 19:return Su(e,n,t);case 22:return mu(e,n,t)}throw Error(i(156,n.tag))};function qu(e,n){return bi(e,n)}function Sf(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,t,o){return new Sf(e,n,t,o)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mf(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ve)return 11;if(e===he)return 14}return 2}function Zn(e,n){var t=e.alternate;return t===null?(t=hn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ro(e,n,t,o,s,a){var c=2;if(o=e,typeof e=="function")Dl(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case R:return pt(t.children,s,a,n);case Q:c=8,s|=8;break;case K:return e=hn(12,t,n,s|2),e.elementType=K,e.lanes=a,e;case xe:return e=hn(13,t,n,s),e.elementType=xe,e.lanes=a,e;case Se:return e=hn(19,t,n,s),e.elementType=Se,e.lanes=a,e;case we:return zo(t,s,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:c=10;break e;case J:c=9;break e;case ve:c=11;break e;case he:c=14;break e;case ze:c=16,o=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=hn(c,t,n,s),n.elementType=e,n.type=o,n.lanes=a,n}function pt(e,n,t,o){return e=hn(7,e,o,n),e.lanes=t,e}function zo(e,n,t,o){return e=hn(22,e,o,n),e.elementType=we,e.lanes=t,e.stateNode={isHidden:!1},e}function Al(e,n,t){return e=hn(6,e,null,n),e.lanes=t,e}function $l(e,n,t){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pf(e,n,t,o,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ps(0),this.expirationTimes=ps(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Bl(e,n,t,o,s,a,c,w,S){return e=new Pf(e,n,t,w,S),n===1?(n=1,a===!0&&(n|=8)):n=0,a=hn(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},el(a),e}function bf(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function Qu(e){if(!e)return Hn;e=e._reactInternals;e:{if(nt(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var t=e.type;if(Xe(t))return ka(e,t,n)}return n}function Yu(e,n,t,o,s,a,c,w,S){return e=Bl(t,o,!0,e,s,a,c,w,S),e.context=Qu(null),t=e.current,o=Ye(),s=Xn(t),a=jn(o,s),a.callback=n??null,qn(t,a,s),e.current.lanes=s,Yt(e,s,o),Je(e,o),e}function Oo(e,n,t,o){var s=n.current,a=Ye(),c=Xn(s);return t=Qu(t),n.context===null?n.context=t:n.pendingContext=t,n=jn(a,c),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=qn(s,n,c),e!==null&&(kn(e,s,c,a),fo(e,s,c)),c}function Io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ku(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ul(e,n){Ku(e,n),(e=e.alternate)&&Ku(e,n)}function _f(){return null}var Xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}Fo.prototype.render=Hl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));Oo(e,n,null,null)},Fo.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ct(function(){Oo(null,e,null,null)}),n[Cn]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ri();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Dn.length&&n!==0&&n<Dn[t].priority;t++);Dn.splice(t,0,e),t===0&&Ii(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gu(){}function Cf(e,n,t,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var N=Io(c);a.call(N)}}var c=Yu(n,o,e,0,null,!1,!1,"",Gu);return e._reactRootContainer=c,e[Cn]=c.current,ar(e.nodeType===8?e.parentNode:e),ct(),c}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var w=o;o=function(){var N=Io(S);w.call(N)}}var S=Bl(e,0,!1,null,null,!1,!1,"",Gu);return e._reactRootContainer=S,e[Cn]=S.current,ar(e.nodeType===8?e.parentNode:e),ct(function(){Oo(n,S,t,o)}),S}function Ao(e,n,t,o,s){var a=t._reactRootContainer;if(a){var c=a;if(typeof s=="function"){var w=s;s=function(){var S=Io(c);w.call(S)}}Oo(n,c,e,s)}else c=Cf(t,n,e,s,o);return Io(c)}Li=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Qt(n.pendingLanes);t!==0&&(hs(n,t|1),Je(n,Le()),(me&6)===0&&(Ft=Le()+500,Wn()))}break;case 13:ct(function(){var o=Ln(e,1);if(o!==null){var s=Ye();kn(o,e,1,s)}}),Ul(e,1)}},ms=function(e){if(e.tag===13){var n=Ln(e,134217728);if(n!==null){var t=Ye();kn(n,e,134217728,t)}Ul(e,134217728)}},ji=function(e){if(e.tag===13){var n=Xn(e),t=Ln(e,n);if(t!==null){var o=Ye();kn(t,e,n,o)}Ul(e,n)}},Ri=function(){return ke},zi=function(e,n){var t=ke;try{return ke=e,n()}finally{ke=t}},is=function(e,n,t){switch(n){case"input":if(Jo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var s=no(o);if(!s)throw Error(i(90));oi(o),Jo(o,s)}}}break;case"textarea":ui(e,t);break;case"select":n=t.value,n!=null&&ht(e,!!t.multiple,n,!1)}},vi=Ol,xi=ct;var Ef={usingClientEntryPoint:!1,Events:[dr,Pt,no,yi,gi,Ol]},br={findFiberByHostInstance:tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tf={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mi(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||_f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Ir=$o.inject(Tf),Sn=$o}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ef,en.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(n))throw Error(i(200));return bf(e,n,null,t)},en.createRoot=function(e,n){if(!Wl(e))throw Error(i(299));var t=!1,o="",s=Xu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Bl(e,1,!1,null,null,t,!1,o,s),e[Cn]=n.current,ar(e.nodeType===8?e.parentNode:e),new Hl(n)},en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Mi(n),e=e===null?null:e.stateNode,e},en.flushSync=function(e){return ct(e)},en.hydrate=function(e,n,t){if(!Do(n))throw Error(i(200));return Ao(null,e,n,!0,t)},en.hydrateRoot=function(e,n,t){if(!Wl(e))throw Error(i(405));var o=t!=null&&t.hydratedSources||null,s=!1,a="",c=Xu;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),n=Yu(n,null,e,1,t??null,s,!1,a,c),e[Cn]=n.current,ar(e),o)for(e=0;e<o.length;e++)t=o[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new Fo(n)},en.render=function(e,n,t){if(!Do(n))throw Error(i(200));return Ao(null,e,n,!1,t)},en.unmountComponentAtNode=function(e){if(!Do(e))throw Error(i(40));return e._reactRootContainer?(ct(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[Cn]=null})}),!0):!1},en.unstable_batchedUpdates=Ol,en.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!Do(t))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Ao(e,n,t,!1,o)},en.version="18.3.1-next-f1338f8080-20240426",en}var sc;function Df(){if(sc)return Ql.exports;sc=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),Ql.exports=Ff(),Ql.exports}var lc;function Af(){if(lc)return Bo;lc=1;var r=Df();return Bo.createRoot=r.createRoot,Bo.hydrateRoot=r.hydrateRoot,Bo}var $f=Af();const Bf=kc($f),ie=(r,l,i,u,f={})=>({key:r,label:l,def:i,type:u,...f}),ei={course:{label:"Course (generate)",knobs:[ie("seed","Seed",1337,"number",{step:1}),ie("vertices","Vertices",7,"range",{min:5,max:12,step:1}),ie("radius","Track size (m)",45,"range",{min:25,max:70,step:1,unit:"m"}),ie("radius_noise","Radius noise",.6,"range",{min:0,max:1,step:.05}),ie("trackWidth","Half-lane (m)",5,"range",{min:3,max:8,step:.25,unit:"m"}),ie("fillet_radius_min","Min turn radius (m)",4,"range",{min:2,max:12,step:.5,unit:"m"}),ie("fillet_radius_max","Max turn radius (m)",12,"range",{min:4,max:20,step:.5,unit:"m"})]},obstacles:{label:"Obstacles",knobs:[ie("seed","Seed",7331,"number",{step:1}),ie("count","Obstacle count",8,"range",{min:0,max:20,step:1}),ie("lateral","Lateral spread (m)",1.6,"range",{min:0,max:6,step:.25,unit:"m"}),ie("kinds","Kinds",["tunnel","block"],"multiselect",{options:["tunnel","block"]})]},perception:{label:"Perception",knobs:[ie("mode","Option","opencv","select",{options:[{v:"ground_truth",l:"Ground truth (no error)"},{v:"opencv",l:"Classical OpenCV"},{v:"ai",l:"Lightweight AI"}]}),ie("range_m","Range ahead (m)",18,"range",{min:5,max:40,step:.5,unit:"m"}),ie("lateral_noise","Centreline noise (m)",0,"range",{min:0,max:1.5,step:.05,unit:"m"}),ie("obstacle_noise","Obstacle noise (m)",0,"range",{min:0,max:1.5,step:.05,unit:"m"}),ie("miss_prob","Miss chance",.05,"range",{min:0,max:.6,step:.02}),ie("freq","Frames / sec",30,"range",{min:5,max:60,step:5})]},trackModel:{label:"Local track model",knobs:[ie("lookahead","Model lookahead (m)",14,"range",{min:3,max:30,step:.5,unit:"m"}),ie("tape_trust","Tape vs waypoint trust",.7,"range",{min:0,max:1,step:.05}),ie("obstacle_hysteresis","Obstacle persistence (s)",1.5,"range",{min:0,max:8,step:.2,unit:"s"}),ie("max_obstacles","Max kept obstacles",20,"range",{min:1,max:40,step:1})]},planner:{label:"Path planner",knobs:[ie("lookahead","PP lookahead (m)",7,"range",{min:2,max:25,step:.5,unit:"m"}),ie("cruise","Cruise speed (m/s)",8,"range",{min:1,max:16,step:.5,unit:"m/s"}),ie("detour_width","Detour width (m)",2.5,"range",{min:1,max:8,step:.25,unit:"m"}),ie("slow_zone","Corner slow radius",.55,"range",{min:0,max:1,step:.05}),ie("slack","Keep-out (m)",.4,"range",{min:0,max:2,step:.1,unit:"m"}),ie("rl_residual","RL residual",0,"range",{min:-2,max:2,step:.1}),ie("rl_bounds","Residual bound (m/s)",2,"range",{min:0,max:5,step:.25,unit:"m/s"})]},formation:{label:"Formation manager",knobs:[ie("spacing","Box slot spacing (m)",1.1,"range",{min:.4,max:3,step:.1,unit:"m"}),ie("diamond","Diamond depth (m)",1.8,"range",{min:.5,max:4,step:.1,unit:"m"}),ie("reform_time","Reform time (s)",.4,"range",{min:.2,max:4,step:.1,unit:"s"}),ie("trigger","Mode trigger ahead (m)",6,"range",{min:2,max:20,step:1,unit:"m"}),ie("axis","Slot frame","track","select",{options:[{v:"track",l:"Track heading"},{v:"centroid",l:"Centroid heading"}]}),ie("mode","Mode override","auto","select",{options:[{v:"auto",l:"Auto (planner)"},{v:"box",l:"Box"},{v:"line",l:"Line (single file)"},{v:"diamond",l:"Diamond"}]})]},comms:{label:"Inter-drone comms",knobs:[ie("hz","Broadcast rate (Hz)",40,"range",{min:5,max:60,step:5}),ie("loss","Packet loss",0,"range",{min:0,max:.5,step:.02}),ie("jitter","Latency jitter (ms)",60,"range",{min:0,max:200,step:5,unit:"ms"}),ie("uwb_noise","UWB sd (m)",.05,"range",{min:0,max:.5,step:.02,unit:"m"})]},swarm:{label:"Swarm controller",knobs:[ie("slot_gain","Slot-hold gain",2.5,"range",{min:.2,max:4,step:.1}),ie("damping","Velocity damping",.9,"range",{min:0,max:2,step:.05}),ie("separation","Separation radius (m)",.5,"range",{min:.3,max:3,step:.1,unit:"m"})]},safety:{label:"Combiners + safety filter",knobs:[ie("vmax","Velocity clip (m/s)",12,"range",{min:1,max:24,step:.5,unit:"m/s"}),ie("sep","Min inter-drone (m)",.4,"range",{min:.3,max:2.5,step:.1,unit:"m"}),ie("clearance","Obstacle clearance (m)",.4,"range",{min:.1,max:2,step:.1,unit:"m"}),ie("hard_gate","Obeys gates",!0,"bool")]},autopilot:{label:"Classical autopilot",knobs:[ie("tau","Response tau (s)",.08,"range",{min:.02,max:2,step:.02,unit:"s"}),ie("accel","Accel limit (m/s²)",30,"range",{min:2,max:40,step:1,unit:"m/s²"}),ie("lag","Processing lag (ms)",20,"range",{min:0,max:150,step:5,unit:"ms"})]},sim:{label:"Simulation",knobs:[ie("drones","Drone count",4,"range",{min:1,max:8,step:1})]}};function Sc(){const r={};for(const[l,i]of Object.entries(ei)){r[l]={};for(const u of i.knobs)r[l][u.key]=u.type==="number"||u.type==="range"?Number(u.def):u.type==="bool"?!!u.def:u.def}return r}const Uf=Object.keys(ei);function Xo(r){let l=r>>>0;return function(){l|=0,l=l+1831565813|0;let u=Math.imul(l^l>>>15,1|l);return u=u+Math.imul(u^u>>>7,61|u)^u,((u^u>>>14)>>>0)/4294967296}}function Yo(r,l=0,i=1){const u=Math.max(r(),1e-12),f=r();return l+i*Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*f)}function Hf(r){const l=Xo(r.seed),i=Wf(r,l),{segments:u,straights:f}=Vf(i,r,l),h=Qf(u),d=u.reduce((v,p)=>v+(p.type==="straight"?Er(p.from,p.to):Math.abs(p.radius*p.angle)),0);return{config:r,seed:r.seed,bounds:Yf(i),centerline:h,poly:i,segments:u,straights:f,length:d}}function Wf(r,l){const i=r.vertices??6+Math.floor(l()*3),u=[],f={x:0,y:0};for(let h=0;h<i;h++){const d=h/i*Math.PI*2,v=r.radius*(1+(l()-.5)*(r.radius_noise??.9)),p={x:Math.cos(d)*v,y:Math.sin(d)*v};u.push(p),f.x+=p.x,f.y+=p.y}return f.x/=i,f.y/=i,u.sort((h,d)=>ic(h,f)-ic(d,f))}function ic(r,l){return Math.atan2(r.y-l.y,r.x-l.x)}function Vf(r,l,i){const u=r.length,f=[];for(let v=0;v<u;v++){const p=r[v],g=r[(v+u-1)%u],x=r[(v+1)%u],y=Er(g,p),m=Er(p,x),k=(p.x-g.x)/(y||1e-6),E=(p.y-g.y)/(y||1e-6),P=(x.x-p.x)/(m||1e-6),j=(x.y-p.y)/(m||1e-6),L=qf(Math.atan2(j,P)-Math.atan2(E,k)),O=Math.sign(L)||1,I=Math.tan(Math.abs(L)/2)||1e-6;let z=l.fillet_radius_min+i()*(l.fillet_radius_max-l.fillet_radius_min);const q=Math.min(z*I,y*.5,m*.5);z=q/I;const B=-E*O,R=k*O;f.push({entry:{x:p.x-k*q,y:p.y-E*q},exit:{x:p.x+P*q,y:p.y+j*q},center:{x:p.x-k*q+B*z,y:p.y-E*q+R*z},r:z,dAng:L})}const h=[],d=[];for(let v=0;v<u;v++){h.push({type:"turn",center:f[v].center,radius:f[v].r,angle:f[v].dAng,from:f[v].entry,to:f[v].exit});const p=f[v].exit,g=f[(v+1)%u].entry;h.push({type:"straight",from:p,to:g}),d.push(Er(p,g))}return{segments:h,straights:d}}function qf(r){for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r}function Qf(r){const l=[];let i=0;for(const u of r)if(u.type==="straight"){const f=Er(u.from,u.to),h=Math.atan2(u.to.y-u.from.y,u.to.x-u.from.x),d=Math.max(2,Math.round(f/.5));for(let v=0;v<d;v++){const p=v/(d-1);l.push({x:u.from.x+(u.to.x-u.from.x)*p,y:u.from.y+(u.to.y-u.from.y)*p,s:i+p*f,heading:h,curvature:0})}i+=f}else{const f=u.radius,h=Math.atan2(u.from.y-u.center.y,u.from.x-u.center.x),d=Math.abs(f*u.angle),v=Math.sign(u.angle)||1,p=Math.max(2,Math.round(d/.5));for(let g=0;g<p;g++){const x=g/(p-1),y=h+u.angle*x;l.push({x:u.center.x+f*Math.cos(y),y:u.center.y+f*Math.sin(y),s:i+x*d,heading:y+v*(Math.PI/2),curvature:v/f})}i+=d}return l}function Er(r,l){return Math.hypot(r.x-l.x,r.y-l.y)}function Yf(r){let l=1/0,i=1/0,u=-1/0,f=-1/0;for(const d of r)l=Math.min(l,d.x),u=Math.max(u,d.x),i=Math.min(i,d.y),f=Math.max(f,d.y);const h=5;return{minX:l-h,minY:i-h,maxX:u+h,maxY:f+h}}function Kf(r){const l=r.centerline,i=l.length,u=r.length;function f(p,g={}){const x=r.length,y=(p%x+x)%x,m=v(y),k=l[m],E=l[(m+1)%i];let P=E.s;P<=k.s&&(P+=x);const j=Math.min(1,Math.max(0,(y-k.s)/Math.max(1e-9,P-k.s)));return g.x=k.x+(E.x-k.x)*j,g.y=k.y+(E.y-k.y)*j,g.heading=k.heading+Xf(E.heading-k.heading)*j,g.s=y,g.curvature=k.curvature,g}function h(p,g,x={}){return f(p,x),x.x+=Math.cos(x.heading+Math.PI/2)*g,x.y+=Math.sin(x.heading+Math.PI/2)*g,x}function d(p,g){let x=null,y=1/0;for(let I=0;I<i;I+=4){const z=l[I],q=(z.x-p)**2+(z.y-g)**2;q<y&&(y=q,x=I)}let m=Math.max(0,x-8),k=Math.min(i-1,x+8),E=0,P=0,j=l[x].x,L=l[x].y,O=l[x].heading;for(let I=m;I<=k;I++){const z=l[I],q=l[(I+1)%i],B=q.x-z.x,R=q.y-z.y,Q=B*B+R*R||1e-9;let K=((p-z.x)*B+(g-z.y)*R)/Q;K=Math.min(1,Math.max(0,K));const V=z.x+B*K,J=z.y+R*K,ve=(V-p)**2+(J-g)**2;if(ve<y){y=ve,E=z.s+K*(q.s-z.s);const xe=Math.atan2(R,B);P=((p-V)*-R+(g-J)*B)/Math.sqrt(Q),j=V,L=J,O=xe}}return{s:E,off:P,x:j,y:L,heading:O,dist:Math.sqrt(y)}}function v(p){const g=(p%u+u)%u;let x=0,y=i-1;for(;x<y;){const m=x+y>>1;l[m].s<g?x=m+1:y=m}return Math.max(0,x-1)}return{L:u,N:i,samples:l,pointAt:f,lateral:h,nearest:d,indexAt:v}}function Xf(r){for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r}const Mc={tunnel:{label:"Tunnel (forces single-file line)",params:{length:[5,8],width:[1.05,1.35]},color:"#0ca678"},block:{label:"Block (on tape, must go around)",params:{len:[2,3],width:[1.3,1.8]},color:"#e03131"}};Object.fromEntries(Object.entries(Mc).map(([r,l])=>[r,r]));function Gf(r,l,i){const u=Xo(i),f=r.L,h=l.count??8,d=l.min_spacing??15,v=l.lateral??l.trackWidth/2-.8,p=[];let g=0;for(let x=0;x<h;x++){g+=d+u()*(f/h-d),g%=f;const y=Zf(u,l.kinds);for(let m=0;m<10;m++){const k=Jf(y,u,g,v,r),E=ac(k);if(p.every(j=>{let L=Math.abs(k.s-j.s);return L>f/2&&(L=f-L),L>=ac(j)/2+E/2+8})){p.push(k);break}g=(g+4+u()*8)%f}}return p}function ac(r){return r.type==="tunnel"?r.length:r.type==="block"||r.type==="wall"?r.len:1}function Zf(r,l){const i=l&&l.length?l:Object.keys(Mc);return i[Math.floor(r()*i.length)]}function Jf(r,l,i,u,f){const h=r==="tunnel"||r==="block"?(l()-.5)*.4:(l()-.5)*2*u,d=f.lateral(i,h),v={id:`${r}-${i.toFixed(1)}`,type:r,s:i,off:h,x:d.x,y:d.y,heading:d.heading};return r==="tunnel"?{...v,length:5+l()*3,width:1.05+l()*.3}:r==="block"?{...v,len:2+l()*1,width:1.3+l()*.5}:v}const Pc=.25;function ep(r){for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r}function ni(r,l,i){let u=(r-l)%i;return u<0&&(u+=i),u}function Xl(r,l,i){const u=Math.round((r-l)/i);return r-l-u*i}function $t(r,l,i){return Math.min(i,Math.max(l,r))}function bc(r){let l=0;for(let i=0;i<r.length;i++)l=l*31+r.charCodeAt(i)|0;return(l%1e3+1e3)%1e3/1e3}function At(r,l){let i=r[0],u=r[r.length-1];for(let d=0;d<r.length-1;d++)if(r[d].s<=l&&r[d+1].s>=l){i=r[d],u=r[d+1];break}const f=u.s-i.s||1,h=Math.min(1,Math.max(0,(l-i.s)/f));return{x:i.x+(u.x-i.x)*h,y:i.y+(u.y-i.y)*h,s:l}}function np(r,l){const i=At(r,l-2),u=At(r,l),f=At(r,l+2),h=Math.atan2(u.y-i.y,u.x-i.x),d=Math.atan2(f.y-u.y,f.x-u.x);return ep(d-h)/4}function tp({scene:r,prevObstacles:l,params:i,time:u,waypoint:f,seen:h,log:d}){const v=i.trackModel.tape_trust,p=r.centreline.map(y=>{const m=f(y.s);return{x:m.x*(1-v)+y.x*v,y:m.y*(1-v)+y.y*v,s:y.s}}),g=r.obstacles.map(y=>({...y,lastSeen:u})),x=new Set(r.obstacles.map(y=>y.id));for(const y of l)!x.has(y.id)&&u-y.lastSeen<=i.trackModel.obstacle_hysteresis&&g.push(y);if(d)for(const y of g)h.has(y.id)||(h.add(y.id),d("trackModel",`tracking ${y.type} @ ${y.s.toFixed(0)} m ahead (conf ${(y.confidence??0).toFixed(2)})`));for(g.sort((y,m)=>y.s-m.s);g.length>i.trackModel.max_obstacles;)g.pop();return{s0:r.s0,line:p,obstacles:g}}function rp({model:r,params:l,arc:i,prevPose:u,prevDetourOn:f,obstacleSide:h,trackLength:d,dt:v,log:p}){const g=l.planner,x=i;if(!r.line||r.line.length<2)return null;const y=lp(r,x,g.lookahead,d),m=np(r.line,x),k=$t(1-g.slow_zone*Math.min(Math.abs(m)*5,1.1),.45,1);let E=g.cruise*k+g.rl_residual*g.rl_bounds;y&&(E*=y.tunnel?.7:.55),E=$t(E,.5,g.cruise+g.rl_bounds+4);const P=x+E*v,j=op(r,x,d);let L=_c(r,x,g,l.formation.spacing,d,h);if(j){const K=Xl(x,j.s,d);K<j.length/2+1.5&&K>-(j.length/2+8)&&(L={off:0,side:1,id:null})}const O=L.off>.05;p&&(O&&!f?p("planner",`detour ${L.side>0?"LEFT":"RIGHT"} around ${L.id??"obstacle"}`):!O&&f&&p("planner","detour cleared — back to centreline"));const I=At(r.line,P),z=At(r.line,P+.5),q=At(r.line,Math.max(0,P-.5)),B=Math.atan2(z.y-q.y,z.x-q.x);if(L.off!==0){const K=Math.cos(B+Math.PI/2)*L.off*L.side,V=Math.sin(B+Math.PI/2)*L.off*L.side;I.x+=K,I.y+=V}if(j){const K=Math.cos(j.heading),V=Math.sin(j.heading),J=-(I.x-j.x)*V+(I.y-j.y)*K,ve=(I.x-j.x)*K+(I.y-j.y)*V,xe=j.length/2+8,Se=j.length/2+1.5;if(ve<Se&&ve>-xe){const he=Math.min(1,1-Math.exp(-v*7)),ze=-V,we=K;I.x-=ze*J*he,I.y-=we*J*he}}const R=(I.x-u.x)/v,Q=(I.y-u.y)/v;return u.x=I.x,u.y=I.y,{h:B,speed:E,arc:P,detourOn:O,detour:y?{x:y.x,y:y.y}:null,vx:R,vy:Q,pose:{x:I.x,y:I.y,s:P,heading:B}}}function op(r,l,i){let u=null,f=1/0;for(const h of r.obstacles){if(h.type!=="tunnel")continue;const d=ni(h.s,l,i);d<f&&d<h.length/2+10&&(f=d,u=h)}return u}function _c(r,l,i,u,f,h,d){const v=d??10;let p=null,g=1/0;for(const L of r.obstacles){if(L.type!=="block")continue;const O=uc(L),I=Xl(l,L.s-O/2,f);I<-(i.lookahead+O/2+v+4)||I>O+v+2||Math.abs(I)<g&&(g=Math.abs(I),p=L)}if(!p)return{off:0,side:1,id:null};const x=h[p.id]!==void 0?h[p.id]:h[p.id]=bc(p.id)<.5?-1:1,y=uc(p),m=Xl(l,p.s-y/2,f),k=$t((m+v)/v,0,1),E=$t((y+v-m)/v,0,1),P=u/2+.8;return{off:Math.max(i.detour_width,sp(p)+P)*Math.min(k,E),side:x,id:p.id}}function uc(r){const l=(r.angle??r.heading)-r.heading;return Math.abs(r.len*Math.cos(l))+Math.abs(r.width*Math.sin(l))+1}function sp(r){const l=(r.angle??r.heading)-r.heading;return Math.abs(r.len*Math.sin(l))/2+Math.abs(r.width*Math.cos(l))/2}function lp(r,l,i,u){let f=null,h=1/0;for(const d of r.obstacles){const v=ni(d.s,l,u);v<h&&v<i&&(h=v,f=d)}return f?{x:f.x,y:f.y,tunnel:f.type==="tunnel"}:null}function ip({model:r,centroid:l,params:i,fm:u,time:f,dt:h,drones:d,trackLength:v,log:p}){const g=i.planner.lookahead,x=i.formation,y=x.trigger??8;let m=null,k=1/0,E=0;for(const z of r.obstacles){const q=ni(z.s,l.s,v);if(q>g+y)continue;const B=Math.hypot(z.x-l.x,z.y-l.y),R=z.type==="tunnel"?B:B*.75;R<k&&(k=R,m=z,E=q)}let P,j;if(m)P="line",j=`${P} ← ${m.type} @${E.toFixed(0)}m ahead`;else if(u.lastMode==="box")P="box",j="box (clear ahead)";else{const z=f-(u.lastModeChange??0);z>x.reform_time*1.5?(P="box",j="box (clear for "+z.toFixed(1)+"s)"):(P=u.lastMode,j=`${u.lastMode} (holding ${z.toFixed(1)}s after trigger)`)}const L=u.lastMode!==P;L&&(u.lastModeChange=f,u.modeSince=f,p&&p("formation",`mode ${u.lastMode} → ${P} · ${j}`)),u.lastMode=P,u.mode=P,u.reason=j;const O=ap(P,x,d.length);u.slots=O;const I=L?1:1-Math.exp(-h/(x.reform_time/3));for(let z=0;z<d.length;z++){const q=O[z];d[z].slotCur.f+=(q.f-d[z].slotCur.f)*I,d[z].slotCur.l+=(q.l-d[z].slotCur.l)*I}return{mode:P,reason:j,changed:L}}function ap(r,l,i){const u=l.spacing,f=l.diamond,h=[{f:-u/2,l:u/2},{f:-u/2,l:-u/2},{f:u/2,l:u/2},{f:u/2,l:-u/2}],d=[{f,l:0},{f:0,l:-f},{f:-f,l:0},{f:0,l:f}],v=[];for(let p=0;p<i;p++){let g={f:0,l:0};if(r==="box")g={...h[p%h.length]};else if(r==="line"){const x=Math.max(.65,u*.8);g={f:-p*x,l:0}}else r==="diamond"&&(g={...d[p%d.length]});v.push(g)}return v}function up({drone:r,centroid:l,plan:i,params:u,model:f,neighbours:h,trackLength:d,obstacleSide:v}){const p=u.swarm,g=cp(u,l),x=r.slotCur;r.slotPos={x:l.x+Math.cos(g)*x.f+Math.cos(g+Math.PI/2)*x.l,y:l.y+Math.sin(g)*x.f+Math.sin(g+Math.PI/2)*x.l};const y=_c(f,r.s,u.planner,u.formation.spacing,d,v,5);y.off!==0&&(r.slotPos.x+=Math.cos(g+Math.PI/2)*y.off*y.side,r.slotPos.y+=Math.sin(g+Math.PI/2)*y.off*y.side);let m=i.vx,k=i.vy;const E={vx:p.slot_gain*(r.slotPos.x-r.x),vy:p.slot_gain*(r.slotPos.y-r.y)};m+=E.vx,k+=E.vy;const P={vx:0,vy:0};for(const L of h){const O=r.x-L.x,I=r.y-L.y,z=O*O+I*I,q=p.separation*2.2;if(z>1e-8&&z<q*q){const B=Math.sqrt(z),R=(q-B)/q*1.6;P.vx+=O/B*R,P.vy+=I/B*R}}m+=P.vx,k+=P.vy;const j={vx:(l.vx-r.vx)*p.damping,vy:(l.vy-r.vy)*p.damping};m+=j.vx,k+=j.vy,r.terms={slot:E,sep:P,damp:j},r.swarm={vx:m,vy:k}}function cp(r,l){return r.formation.axis==="track"?l.heading:Math.atan2(l.vy,l.vx)}function dp({drone:r,drones:l,prims:i,params:u,time:f,sepLog:h,log:d}){var m;const v=u.safety,p={vx:r.swarm.vx,vy:r.swarm.vy};let g=p.vx,x=p.vy;const y=()=>{const k=Math.hypot(g,x);if(k>v.vmax){const E=v.vmax/k;g*=E,x*=E}};y();for(const k of i){if(((m=k.src)==null?void 0:m.type)==="tunnel"){const L=k.src,O=r.x-L.x,I=r.y-L.y,z=Math.cos(L.heading),q=Math.sin(L.heading),B=O*z+I*q,R=-O*q+I*z,Q=L.length/2+2;if(Math.abs(B)<Q&&Math.abs(R)<L.width/2+2){const K=Math.max(.1,L.width/2-.45);if(Math.abs(R)>K){const V=-Math.sign(R)*Math.min((Math.abs(R)-K)*6,6);g+=-q*V,x+=z*V}}continue}const E=Cc(r.x,r.y,k),P=k.r??0,j=v.clearance+Pc;if(E<P+j){const L=(P+j-E)*5,O=r.x-k.x,I=r.y-k.y,z=Math.hypot(O,I)||1e-6;g+=O/z*L,x+=I/z*L}}for(const k of l){if(k===r)continue;const E=r.x-k.x,P=r.y-k.y,j=E*E+P*P;if(j>1e-9&&j<v.sep**2){const L=Math.sqrt(j),O=(v.sep-L)/L;g+=E/L*O*7,x+=P/L*O*7,d&&f-(h[r.id]??-1)>.8&&(h[r.id]=f,d("safety",`hard separation vs #${k.id} (${L.toFixed(2)} m)`))}}y(),r.terms.safety={vx:g-p.vx,vy:x-p.vy},r.cut={vx:g,vy:x}}function Cc(r,l,i){if(i.kind==="circle")return Math.hypot(r-i.x,l-i.y)-i.r;const u=r-i.x,f=l-i.y,h=Math.cos(i.angle),d=Math.sin(i.angle),v=u*h+f*d,p=-u*d+f*h,g=Math.max(Math.abs(v)-i.w/2,0),x=Math.max(Math.abs(p)-i.h/2,0);return Math.hypot(g,x)}function fp({drone:r,params:l,dt:i,simStep:u}){const f=l.autopilot,h=Math.max(1,Math.round(f.lag/1e3/u));r._lagBuf.push({vx:r.cut.vx,vy:r.cut.vy}),r._lagBuf.length>h&&r._lagBuf.shift();const d=r._lagBuf[r._lagBuf.length-h]||{vx:r.cut.vx,vy:r.cut.vy},v=1-Math.exp(-i/f.tau);let p=r.vx+(d.vx-r.vx)*v,g=r.vy+(d.vy-r.vy)*v;const x=p-r.vx,y=g-r.vy,m=Math.hypot(x,y)/i;if(m>f.accel){const k=f.accel/m;p=r.vx+x*k,g=r.vy+y*k}r.vx=p,r.vy=g}const qo=1/240;function Cr(r={}){var x;const l=ti(Sc(),r),i=Hf(l.course),u=Kf(i),f=Gf(u,l.obstacles,l.obstacles.seed),h=u.pointAt(0),d=((x=l.sim)==null?void 0:x.drones)??4,v=[],p=l.formation.spacing,g=[{f:-p/2,l:p/2},{f:-p/2,l:-p/2},{f:p/2,l:p/2},{f:p/2,l:-p/2}];for(let y=0;y<d;y++){const m=g[y%g.length]??{f:-y,l:0},k=h.x+Math.cos(h.heading)*m.f+Math.cos(h.heading+Math.PI/2)*m.l,E=h.y+Math.sin(h.heading)*m.f+Math.sin(h.heading+Math.PI/2)*m.l,P=pp(y,{x:k,y:E},h.heading);P.slotCur={...m},P.slotPos={x:k,y:E},v.push(P)}return{params:l,course:i,query:u,obstacles:f,obstaclePrims:hp(f),drones:v,centroid:{x:h.x,y:h.y,vx:0,vy:0,s:0,heading:h.heading},plan:{vx:0,vy:0,h:h.heading,speed:0,detour:null,detourOn:!1},scene:{s0:0,centreline:[],obstacles:[]},model:{line:[],obstacles:[]},scenarioBias:new Array(2e5).fill(void 0),perceptAt:null,perceptPeriod:1/(l.perception.freq||30),comms:{buffer:[],dropped:new Set,lastBroadcast:null,period:1/(l.comms.hz||40)},modelObstaclesList:[],decisions:[],_detourActive:!1,_prevPose:{x:h.x,y:h.y},_railLog:{},_sepLog:{},_modelSeen:new Set,_obSide:{},centroidArc:0,fm:{mode:"box",lastMode:null,reason:"box (start)",modeSince:0},rng:Xo(l.course.seed^2654435769),time:0,acc:0,stats:{events:[],samples:[],lapTimes:[],logT:0,conf:null,collisionCount:0,collisions:[],nearEvents:[],nearDrone:0,nearObs:0,modeTime:{box:0,line:0}}}}function pp(r,l,i){return{id:r,x:l.x,y:l.y,vx:Math.cos(i)*.5,vy:Math.sin(i)*.5,s:0,off:0,lap:0,ds:0,_prevS:null,_lapStart:null,slotCur:{f:0,l:0},slotPos:{x:l.x,y:l.y},swarm:{vx:0,vy:0},terms:{slot:{vx:0,vy:0},sep:{vx:0,vy:0},damp:{vx:0,vy:0},safety:{vx:0,vy:0}},cut:{vx:0,vy:0},_lagBuf:[],speedAt:0,mode:"box"}}function Ec(r,l,i){r.decisions.push({t:r.time,stage:l,msg:i}),r.decisions.length>200&&r.decisions.shift()}const Uo=r=>(l,i)=>Ec(r,l,i);function hp(r){const l=[];for(const i of r)if(i.type==="block")l.push({kind:"rect",x:i.x,y:i.y,w:i.len,h:i.width,angle:i.heading,r:0,src:i});else if(i.type==="tunnel"){const u=i.heading,f=i.width/2+.25;for(const h of[1,-1])l.push({kind:"rect",x:i.x+Math.cos(u+Math.PI/2)*f*h,y:i.y+Math.sin(u+Math.PI/2)*f*h,w:i.length,h:.5,angle:u,r:0,src:i})}return l}function Tc(r,l){for(r.acc+=Math.min(l,.05);r.acc>=qo;)r.acc-=qo,mp(r,qo)}function mp(r,l){r.time+=l;const i=r.time;(r.perceptAt===null||i>=r.perceptAt)&&(r.scene=gp(r),r.perceptAt=i+r.perceptPeriod),r.model=tp({scene:r.scene,prevObstacles:r.modelObstaclesList,params:r.params,time:i,waypoint:d=>r.query.pointAt(d),seen:r._modelSeen,log:Uo(r)}),r.modelObstaclesList=r.model.obstacles;const u=rp({model:r.model,params:r.params,arc:r.centroidArc,prevPose:r._prevPose,prevDetourOn:r._detourActive,obstacleSide:r._obSide,trackLength:r.query.L,dt:l,log:Uo(r)});if(u===null){const d=r.centroid;r.plan={h:d.heading,speed:0,detourOn:!1,detour:null,vx:0,vy:0,pose:{x:d.x,y:d.y,s:r.centroidArc,heading:d.heading}}}else r.plan=u,r.centroidArc=u.arc,r._detourActive=u.detourOn;const f=r.centroid;f.vx=r.plan.vx,f.vy=r.plan.vy,f.x=r.plan.pose.x,f.y=r.plan.pose.y,f.s=r.plan.pose.s,f.heading=r.plan.pose.heading,xp(r);const h=ip({model:r.model,centroid:r.centroid,params:r.params,fm:r.fm,time:i,dt:l,drones:r.drones,trackLength:r.query.L,log:Uo(r)});r.stats.modeTime[h.mode]=(r.stats.modeTime[h.mode]??0)+l;for(const d of r.drones)up({drone:d,centroid:r.centroid,plan:r.plan,params:r.params,model:r.model,neighbours:yp(r,d),trackLength:r.query.L,obstacleSide:r._obSide});for(const d of r.drones)dp({drone:d,drones:r.drones,prims:r.obstaclePrims,params:r.params,time:i,sepLog:r._sepLog,log:Uo(r)});for(const d of r.drones){fp({drone:d,params:r.params,dt:l,simStep:qo}),d.x+=d.vx*l,d.y+=d.vy*l,d.speedAt=Math.hypot(d.vx,d.vy);const v=r.query.nearest(d.x,d.y);d.s=v.s,d.off=v.off,d._prevS!==null&&d._prevS>r.query.L-5&&v.s<5&&(d.lap++,d._lapStart&&r.stats.lapTimes.push(i-d._lapStart),d._lapStart=i),d._prevS=v.s}kp(r),i-r.stats.logT>=.2&&(r.stats.logT=i,Mp(r))}function yp(r,l){const i=[];for(const u of r.drones){if(u===l||r.comms.dropped.has(u.id))continue;const f=wp(r,u.id);f&&i.push(f)}return i}function gp(r){const l=r.params.perception,i=r.query,u=r.centroid,f=l.range_m,h=l.freq>22?2:3,d=[];for(let p=u.s;p<u.s+f;p+=h){const g=i.pointAt(p),x=vp(r,p)*l.lateral_noise,y=Math.sin(p*.13+r.time*1.2)*.22*l.lateral_noise;d.push({x:g.x+Math.cos(g.heading+Math.PI/2)*(x+y),y:g.y+Math.sin(g.heading+Math.PI/2)*(x+y),s:p})}const v=[];for(const p of r.obstacles){let g=p.s-u.s;g<0&&(g+=i.L),!(g>f+2)&&(r.rng()<l.miss_prob||v.push({...p,confidence:.45+.5*bc(p.id),x:p.x+Yo(r.rng,0,l.obstacle_noise),y:p.y+Yo(r.rng,0,l.obstacle_noise)}))}return{s0:u.s,range:f,obstacles:v,centreline:d}}function vp(r,l){const i=Math.floor(l)%r.scenarioBias.length;return r.scenarioBias[i]===void 0&&(r.scenarioBias[i]=r.rng()*2-1),r.scenarioBias[i]}function xp(r,l){const i=r.comms,u=r.params.comms;(i.lastBroadcast===null||r.time-i.lastBroadcast>=i.period)&&(i.lastBroadcast=r.time,i.buffer=r.drones.map(f=>({id:f.id,x:f.x,y:f.y,tBroadcast:r.time,deliverAt:r.time+u.jitter/1e3}))),i.dropped=new Set;for(const f of r.drones)r.rng()<u.loss&&i.dropped.add(f.id)}function wp(r,l){const i=r.params.comms,u=r.comms.buffer.find(f=>f.id===l);return!u||r.time<u.deliverAt?null:{id:l,x:u.x+Yo(r.rng,0,i.uwb_noise),y:u.y+Yo(r.rng,0,i.uwb_noise)}}function kp(r){var d,v,p,g;const l=Pc,i=r.drones.length,u=[],f=.65,h=.55;for(let x=0;x<i;x++)for(let y=x+1;y<i;y++){const m=r.drones[x],k=r.drones[y],E=k.x-m.x,P=k.y-m.y,j=Math.hypot(E,P);if(j>=f)continue;const L=E/(j||1e-9),O=P/(j||1e-9),I=(f-j)/2+1e-4;m.x-=L*I,m.y-=O*I,k.x+=L*I,k.y+=O*I;const z=(m.vx-k.vx)*L+(m.vy-k.vy)*O;if(z<0){const q=z*.6;m.vx-=q*L,m.vy-=q*O,k.vx+=q*L,k.vy+=q*O}j<2*l&&u.push({t:r.time,type:"drone",ids:[m.id,k.id],x:(m.x+k.x)/2,y:(m.y+k.y)/2})}for(const x of r.drones)for(const y of r.obstaclePrims){const m=Sp(y,x.x,x.y),E=((d=y.src)==null?void 0:d.type)==="tunnel"?.3:(y.r??0)+h;if(m.d<E){const P=(x.x-m.x)/(m.d||1e-9),j=(x.y-m.y)/(m.d||1e-9),L=E-m.d+1e-4;x.x+=P*L,x.y+=j*L;const O=x.vx*P+x.vy*j;O<0&&(x.vx-=O*.7*P,x.vy-=O*.7*j),r.stats.nearEvents.length>60&&r.stats.nearEvents.shift(),r.stats.nearEvents.push({t:r.time,kind:((v=y.src)==null?void 0:v.type)??"obstacle",x:x.x,y:x.y});const I=((p=y.src)==null?void 0:p.id)??y.kind;r.time-(r._railLog[I]??-1)>.8&&(r._railLog[I]=r.time,Ec(r,"collisions",`safety rail on ${((g=y.src)==null?void 0:g.type)??"obstacle"} (clear ${m.d.toFixed(2)} m)`))}}u.length&&(r.stats.collisionCount+=u.length,r.stats.collisions.push(...u),r.stats.collisions.length>60&&r.stats.collisions.splice(0,r.stats.collisions.length-60))}function Sp(r,l,i){if(r.kind==="circle"){const E=Math.hypot(l-r.x,i-r.y);return{x:r.x,y:r.y,d:E}}const u=l-r.x,f=i-r.y,h=Math.cos(r.angle),d=Math.sin(r.angle),v=u*h+f*d,p=-u*d+f*h,g=$t(v,-r.w/2,r.w/2),x=$t(p,-r.h/2,r.h/2),y=v-g,m=p-x,k=Math.hypot(y,m)||1e-9;return{x:r.x+g*h-x*d,y:r.y+g*d+x*h,d:k}}function Mp(r){let l=0,i=0,u=1/0,f=1/0,h=0;const d=r.drones.length;for(const p of r.drones){const g=Math.hypot(p.slotPos.x-p.x,p.slotPos.y-p.y);l=Math.max(l,g),i=Math.max(i,Math.abs(p.off)),h+=p.speedAt;for(const x of r.drones)x!==p&&(u=Math.min(u,Math.hypot(p.x-x.x,p.y-x.y)));for(const x of r.obstaclePrims)f=Math.min(f,Cc(p.x,p.y,x)-(x.r??0))}const v={t:r.time,maxForm:l,maxOff:i,minSep:u,minClear:f,avgSpeed:h/d,laps:r.drones.reduce((p,g)=>p+g.lap,0),collisions:r.stats.collisionCount};r.stats.conf=v,r.stats.samples.push(v),r.stats.samples.length>2400&&r.stats.samples.shift(),u<.9&&r.stats.nearDrone++,f<.9&&r.stats.nearObs++}function ti(r,l){const i={...r};for(const u in l)l[u]&&typeof l[u]=="object"&&!Array.isArray(l[u])?i[u]=ti(r[u]||{},l[u]):i[u]=l[u];return i}const Ko=["#61affe","#f78c6c","#c3e88d","#ffcb6b","#ff5370","#bb9af7","#7fdbca","#f07178"],Pp="#0d1117",bp="#3f4a5c",_p="rgba(240,160,32,0.8)",Gl="#ff5c5c",Cp="#ffb020",Zl="#7fdbca",Ep="#33cc99",Tp=Cp,Go={slot:"#33cc99",sep:"#ff5370",damp:"#8892a0",safety:"#ffcb6b"};function Np(r,l,i={}){var I,z,q,B;const u=i.w,f=i.h;r.fillStyle=Pp,r.fillRect(0,0,u,f);const h=l.course.bounds,d=34,v=(u-d*2)/(h.maxX-h.minX),p=(f-d*2)/(h.maxY-h.minY),g=Math.min(v,p),x=!!i.follow;let y,m,k;if(x){y=g*5.5;const R=l.centroid;m=u/2-R.x*y,k=f/2-R.y*y}else y=g,m=(u-(h.maxX-h.minX)*y)/2-h.minX*y,k=(f-(h.maxY-h.minY)*y)/2-h.minY*y;const E=R=>m+R*y,P=R=>k+R*y;r.strokeStyle=bp,r.lineWidth=3,r.lineCap="round",r.lineJoin="round",cc(r,l.query.samples,E,P),r.strokeStyle="rgba(96,108,128,0.35)",r.lineWidth=1,dc(r,l.query,E,P,l.params.course.trackWidth),dc(r,l.query,E,P,-l.params.course.trackWidth),r.fillStyle="rgba(170,185,210,0.55)",l.query.samples.forEach((R,Q)=>{Q%20===0&&(r.beginPath(),r.arc(E(R.x),P(R.y),2,0,Math.PI*2),r.fill())});for(const R of l.obstacles)Nc(r,R,E,P,y,Gl);l.scene&&l.scene.centreline.length&&(r.strokeStyle=_p,r.lineWidth=2,r.setLineDash([7,5]),cc(r,l.scene.centreline,E,P),r.setLineDash([]));for(const R of((I=l.model)==null?void 0:I.obstacles)??[])Rp(r,R,E,P,y,Tp);const j=l.centroid;if(r.strokeStyle=Zl,r.lineWidth=2,fc(r,E(j.x),P(j.y),5),l.plan&&Math.abs(l.plan.vx)+Math.abs(l.plan.vy)>.05){const R=l.plan,Q=Math.hypot(R.vx,R.vy),K=Math.min(64,Math.max(7,Q*9));pc(r,E(j.x),P(j.y),R.vx/Q*K,R.vy/Q*K,Zl)}(z=l.plan)!=null&&z.detour&&(r.strokeStyle="#ff9f43",fc(r,E(l.plan.detour.x),P(l.plan.detour.y),6));for(const R of l.drones){const Q=E(R.x),K=P(R.y),V=Ko[R.id%Ko.length];r.beginPath(),r.arc(Q,K,6,0,Math.PI*2),r.fillStyle=V,r.fill(),r.lineWidth=2,r.strokeStyle="#ffffff",r.stroke()}const L=i.terms;if(L)for(const R of l.drones){const Q=R.terms;if(Q)for(const[K,V]of Object.entries(Go)){if(!L[K])continue;const J=Q[K],ve=Math.hypot((J==null?void 0:J.vx)??0,(J==null?void 0:J.vy)??0);if(ve<.08)continue;const xe=Math.min(64,Math.max(7,ve*9)),Se=J.vx/ve*xe,he=J.vy/ve*xe;pc(r,E(R.x),P(R.y),Se,he,V)}}i.showFormation!==!1&&jp(r,l,E,P,y),x&&Lp(r,l,u,f,h,y);const O=l.time;for(const R of((q=l.stats)==null?void 0:q.collisions)??[]){const Q=O-R.t;if(Q<0||Q>1)continue;const K=1-Q;r.strokeStyle=`rgba(255,83,112,${(.35+.65*K).toFixed(2)})`,r.lineWidth=2,r.beginPath(),r.arc(E(R.x),P(R.y),10+(1-K)*8,0,Math.PI*2),r.stroke(),r.strokeStyle=`rgba(255,83,112,${(.2+.5*K).toFixed(2)})`,r.beginPath(),r.moveTo(E(R.x)-6,P(R.y)-6),r.lineTo(E(R.x)+6,P(R.y)+6),r.moveTo(E(R.x)+6,P(R.y)-6),r.lineTo(E(R.x)-6,P(R.y)+6),r.stroke()}for(const R of((B=l.stats)==null?void 0:B.nearEvents)??[]){const Q=O-R.t;if(Q<0||Q>.6)continue;const K=1-Q/.6;r.strokeStyle=`rgba(255,176,32,${(.25+.6*K).toFixed(2)})`,r.lineWidth=1.5,r.beginPath(),r.arc(E(R.x),P(R.y),8+(1-K)*6,0,Math.PI*2),r.stroke()}}function Lp(r,l,i,u,f,h){const v=Math.round(150*(f.maxY-f.minY)/(f.maxX-f.minX))+10,p=i-150-12,g=u-v-12,x=P=>p+(P-f.minX)/(f.maxX-f.minX)*140,y=P=>g+8+(P-f.minY)/(f.maxY-f.minY)*(v-18);r.fillStyle="rgba(13,17,23,0.82)",r.strokeStyle="rgba(42,50,61,0.9)",r.lineWidth=1,r.beginPath(),r.rect(p,g,150,v),r.fill(),r.stroke(),r.strokeStyle="rgba(95,110,135,0.5)",r.beginPath();for(let P=0;P<l.query.samples.length;P++){const j=l.query.samples[P];P===0?r.moveTo(x(j.x),y(j.y)):r.lineTo(x(j.x),y(j.y))}r.closePath(),r.stroke();const m=i/h*.6,k=u/h*.6,E=l.centroid;r.strokeStyle="rgba(97,175,254,0.8)",r.strokeRect(x(E.x-m/2),y(E.y-k/2),m/(f.maxX-f.minX)*140,k/(f.maxY-f.minY)*(v-18));for(const P of l.drones)r.fillStyle=Ko[P.id%Ko.length],r.fillRect(x(P.x)-2,y(P.y)-2,4,4);r.fillStyle=Zl,r.beginPath(),r.arc(x(E.x),y(E.y),3,0,Math.PI*2),r.fill()}function jp(r,l,i,u,f){const h=l.drones,d=h.length,v=l.params.safety.sep,p=Ep,g="rgba(214,224,240,0.55)",x=y=>y<.5?"#33cc99":y<2?"#ffb020":"#ff5370";r.strokeStyle=p,r.lineWidth=1.2,r.setLineDash([5,4]),r.beginPath();for(let y=0;y<d;y++){const m=h[y].slotPos;y===0?r.moveTo(i(m.x),u(m.y)):r.lineTo(i(m.x),u(m.y))}d>2&&r.closePath(),r.stroke(),r.setLineDash([]);for(const y of h){const m=i(y.slotPos.x),k=u(y.slotPos.y);r.strokeStyle=p,r.lineWidth=1.2,r.beginPath(),r.moveTo(m-5,k),r.lineTo(m+5,k),r.moveTo(m,k-5),r.lineTo(m,k+5),r.stroke(),r.fillStyle="rgba(51,204,153,0.9)",r.font="9px ui-monospace, Menlo, monospace",r.textAlign="left",r.fillText(`#${y.id}`,m+7,k+4)}if(d>2){r.strokeStyle=g,r.lineWidth=1,r.beginPath();for(let y=0;y<d;y++){const m=h[y];y===0?r.moveTo(i(m.x),u(m.y)):r.lineTo(i(m.x),u(m.y))}r.closePath(),r.stroke()}for(const y of h){const m=Math.hypot(y.slotPos.x-y.x,y.slotPos.y-y.y);r.strokeStyle=x(m),r.lineWidth=1.5,r.setLineDash([3,3]),r.beginPath(),r.moveTo(i(y.x),u(y.y)),r.lineTo(i(y.slotPos.x),u(y.slotPos.y)),r.stroke()}r.setLineDash([]);for(const y of h){let m=!1;for(const k of h)if(k!==y&&Math.hypot(y.x-k.x,y.y-k.y)<v){m=!0;break}if(r.strokeStyle=m?"#ff5370":"rgba(125,145,170,0.7)",r.lineWidth=m?2:1,r.setLineDash([3,3]),r.beginPath(),r.arc(i(y.x),u(y.y),Math.max(3,v*f),0,Math.PI*2),r.stroke(),m){r.setLineDash([2,2]);for(const k of h){if(k===y)continue;Math.hypot(y.x-k.x,y.y-k.y)<v&&(r.strokeStyle="#ff5370",r.beginPath(),r.moveTo(i(y.x),u(y.y)),r.lineTo(i(k.x),u(k.y)),r.stroke())}}}r.setLineDash([])}function cc(r,l,i,u){r.beginPath();let f=!0;for(const h of l)f?(r.moveTo(i(h.x),u(h.y)),f=!1):r.lineTo(i(h.x),u(h.y));r.stroke()}function dc(r,l,i,u,f){r.beginPath();let h=!0;const d=l.samples;for(let v=0;v<d.length;v+=2){const p=l.lateral(d[v].s,f);h?(r.moveTo(i(p.x),u(p.y)),h=!1):r.lineTo(i(p.x),u(p.y))}r.stroke()}function Nc(r,l,i,u,f,h){const d=i(l.x),v=u(l.y),p=h===Gl;if(r.strokeStyle=h,r.lineWidth=1.5,l.type==="block"){const g=l.len*f,x=l.width*f;if(r.save(),r.translate(d,v),r.rotate(l.heading),r.fillStyle=p?"#a4161a":"rgba(255,176,32,0.55)",r.fillRect(-g/2,-x/2,g,x),r.strokeRect(-g/2,-x/2,g,x),p){r.lineWidth=1,r.strokeStyle="rgba(255,190,90,0.55)",r.beginPath();const y=Math.max(2,Math.round(x/10));for(let m=-y;m<=y;m++)r.moveTo(-g/2,m*10),r.lineTo(g/2,m*10);r.stroke()}r.restore()}else if(l.type==="tunnel"){const g=l.heading,x=l.width/2+.25,y=h===Gl,m=l.length*f,k=Math.max(3,x*f);r.save(),r.translate(i(l.x),u(l.y)),r.rotate(g),r.fillStyle=y?"#0a7a56":"rgba(255,176,32,0.55)",r.strokeStyle=y?"#0ca678":"#ffb020",r.lineWidth=1.5,r.beginPath(),r.moveTo(-m/2,-k),r.arc(-m/2,0,k,-Math.PI/2,Math.PI/2),r.lineTo(m/2,k),r.arc(m/2,0,k,Math.PI/2,-Math.PI/2),r.closePath(),r.fill(),r.stroke();for(const E of[-1,1])r.fillStyle=y?"#064e38":"rgba(120,65,0,0.65)",r.beginPath(),r.ellipse(E*m/2,0,Math.max(1.5,k*.24),k*.92,0,0,Math.PI*2),r.fill(),r.strokeStyle=y?"rgba(12,166,120,0.95)":"#ffb020",r.lineWidth=1,r.stroke();r.restore()}}function Rp(r,l,i,u,f,h){Nc(r,l,i,u,f,h)}function fc(r,l,i,u){r.beginPath(),r.arc(l,i,u,0,Math.PI*2),r.stroke()}function pc(r,l,i,u,f,h){r.strokeStyle=h,r.lineWidth=1.6,r.beginPath(),r.moveTo(l,i),r.lineTo(l+u,i+f),r.stroke();const d=Math.atan2(f,u),v=5;r.fillStyle=h,r.beginPath(),r.moveTo(l+u,i+f),r.lineTo(l+u-v*Math.cos(d-.45),i+f-v*Math.sin(d-.45)),r.lineTo(l+u-v*Math.cos(d+.45),i+f-v*Math.sin(d+.45)),r.closePath(),r.fill()}function zp({getWorld:r,overlay:l=!0,follow:i=!1,terms:u=null}){const f=re.useRef(null),h=re.useRef(r);h.current=r;const d=re.useRef(l);d.current=l;const v=re.useRef(i);v.current=i;const p=re.useRef(u);return p.current=u,re.useEffect(()=>{const g=f.current,x=g.getContext("2d");let y=0;const m=()=>{const E=window.devicePixelRatio||1,P=g.getBoundingClientRect();g.width=P.width*E,g.height=P.height*E};m(),window.addEventListener("resize",m);const k=()=>{const E=h.current(),P=g.getBoundingClientRect(),j=window.devicePixelRatio||1,L=Math.max(1,Math.round(P.width*j)),O=Math.max(1,Math.round(P.height*j));(g.width!==L||g.height!==O)&&(g.width=L,g.height=O),E&&(x.setTransform(g.width/P.width,0,0,g.height/P.height,0,0),Np(x,E,{w:P.width,h:P.height,showFormation:d.current,follow:v.current,terms:p.current}),Op(x,E,P.width,P.height,p.current)),y=requestAnimationFrame(k)};return y=requestAnimationFrame(k),()=>{cancelAnimationFrame(y),window.removeEventListener("resize",m)}},[]),C.jsx("canvas",{ref:f,className:"sim-canvas","aria-label":"race view"})}function Op(r,l,i,u,f){var g,x,y,m,k;r.font="11px ui-monospace, Menlo, monospace",r.fillStyle="rgba(13,17,23,0.75)";const h=f?Object.entries(Go).filter(([E])=>f[E]):[];r.fillRect(i-210,0,210,h.length?118:82),r.fillStyle="#8899a8",r.textAlign="left";const d=16;r.fillText(`mode ${((g=l.fm)==null?void 0:g.mode)??"-"}   speed ${(((x=l.plan)==null?void 0:x.speed)??0).toFixed(1)}m/s`,i-198,d),r.fillText(`centroid lap ${l.centroidArc!=null&&l.course?(l.centroidArc/l.course.length).toFixed(2):0}`,i-198,d+15),r.fillText(`centroid s ${((y=l.centroid)==null?void 0:y.s)!=null?l.centroid.s.toFixed(0):"-"}`,i-198,d+30);const v=(m=l.params)==null?void 0:m.perception;r.fillText(`perception ${(v==null?void 0:v.mode)??"-"}`,i-198,d+45);const p=((k=l.drones)==null?void 0:k.filter(E=>E.lap>0).length)??0;r.fillText(`drones landed ${p}`,i-198,d+60),h.length&&(r.fillText("command arrows:",i-198,d+82),h.forEach(([E,P],j)=>{const L=i-198+j*40;r.strokeStyle=P,r.lineWidth=2,r.beginPath(),r.moveTo(L,d+96),r.lineTo(L+12,d+96),r.stroke(),r.fillStyle="#8899a8",r.fillText(E,L+15,d+99)}))}const Lc=Math.PI/180,Ip=.6,jc=-8*Lc,Fp=75*Lc,an={sky:["#0a0f17","#18233a"],grid:"rgba(120,140,165,0.14)",track:"rgba(58,70,92,0.9)",perceived:"#ffb020",model:"#3db9ff",trueObs:"rgba(255,92,92,0.55)",seenObs:"#ffb020",drone:"#61affe",centroid:"#7fdbca"},Dp=jc;function Ap(r,l,i,u={}){const f=u.yaw??Math.atan2(r.vy,r.vx),h=u.pitch??jc,d=u.zoom??1,v=Math.cos(f),p=Math.sin(f),g=Math.cos(h),x=Math.sin(h),y={x:g*v,y:g*p,z:x},m={x:p,y:-v,z:0},k={x:m.y*y.z-m.z*y.y,y:m.z*y.x-m.x*y.z,z:m.x*y.y-m.y*y.x},E=i/2/Math.tan(Fp/2)*d;return{x:r.x,y:r.y,z:Ip,yaw:f,F:y,R:m,U:k,f:E,W:l,H:i}}function Ue(r,l,i,u){const f=l-r.x,h=i-r.y,d=u-r.z,v=f*r.F.x+h*r.F.y+d*r.F.z;if(v<.12)return null;const p=f*r.R.x+h*r.R.y+d*r.R.z,g=f*r.U.x+h*r.U.y+d*r.U.z;return{sx:r.W/2+p/v*r.f,sy:r.H/2-g/v*r.f,d:v}}function $p(r){const l=1/Math.hypot(r.F.x,r.F.y),i=r.F.x*l,u=r.F.y*l,f=i*r.F.x+u*r.F.y,h=i*r.U.x+u*r.U.y;return r.H/2-r.f*(h/f)}function Bp(r,l,i,u={}){r.save(),r.clearRect(0,0,i.W,i.H);const f=Math.min(i.H-1,Math.max(0,$p(i))),h=r.createLinearGradient(0,0,0,f);h.addColorStop(0,an.sky[0]),h.addColorStop(1,an.sky[1]),r.fillStyle=h,r.fillRect(0,0,i.W,f),r.fillStyle="#10161f",r.fillRect(0,f,i.W,i.H-f);const d=[],v=[];Up(r,i),Wp(r,l,i,v);for(let g=0;g<l.scene.centreline.length;g+=1){const x=l.scene.centreline[g],y=Ue(i,x.x,x.y,0);y&&d.push({z:y.d,draw:m=>{m.fillStyle=an.perceived,m.globalAlpha=.95;const k=Math.min(6,Math.max(3,i.f*.06/Math.max(y.d,1)));Zp(m,y.sx,y.sy,k),m.globalAlpha=1}})}const p=l.model.line.map(g=>Ue(i,g.x,g.y,0)).filter(Boolean);if(p.length>1){const g=p.reduce((x,y)=>x+y.d,0)/p.length;d.push({z:g,draw:x=>Gp(x,p,an.model,1.6)})}for(const g of l.obstacles)yc(d,g,i,!0);for(const g of l.model.obstacles)yc(d,g,i,!1);u.showFormation!==!1&&Kp(d,l,i,u.selfId);for(const g of l.drones)u.selfId!==void 0&&g.id===u.selfId||Qp(d,g,i);Xp(d,l,i),u.terms&&Object.values(u.terms).some(Boolean)&&Yp(d,l,i,u.terms),v.sort((g,x)=>x.z-g.z);for(const g of v)g.draw(r);d.sort((g,x)=>x.z-g.z);for(const g of d)g.draw(r);r.restore()}function Up(r,l,i){r.strokeStyle=an.grid,r.lineWidth=1;const f=5,h=Math.floor((l.x-46)/f)*f;for(let v=h;v<=l.x+46;v+=f)hc(r,l,mc(l,v,l.y-46,v,l.y+46));const d=Math.floor((l.y-46)/f)*f;for(let v=d;v<=l.y+46;v+=f)hc(r,l,mc(l,l.x-46,v,l.x+46,v))}function hc(r,l,i){if(!i)return;const u=Hp(i,l),f=Math.max(0,Math.min(1,(u-1)/1.5));if(f<=0)return;const h=Ue(l,i.x1,i.y1,0),d=Ue(l,i.x2,i.y2,0);!h||!d||(r.globalAlpha=f,r.beginPath(),r.moveTo(h.sx,h.sy),r.lineTo(d.sx,d.sy),r.stroke(),r.globalAlpha=1)}function Hp(r,l){const i=r.x2-r.x1,u=r.y2-r.y1,f=i*i+u*u||1e-9;let h=((l.x-r.x1)*i+(l.y-r.y1)*u)/f;return h=Math.max(0,Math.min(1,h)),Math.hypot(l.x-(r.x1+i*h),l.y-(r.y1+u*h))}function mc(r,l,i,u,f){const h=(m,k)=>(m-r.x)*r.F.x+(k-r.y)*r.F.y-r.z*r.F.z,d=h(l,i),v=h(u,f),p=.12;if(d>=p&&v>=p)return{x1:l,y1:i,x2:u,y2:f};if(d<p&&v<p)return null;const g=(p-d)/(v-d),x=l+(u-l)*g,y=i+(f-i)*g;return d<p?{x1:x,y1:y,x2:u,y2:f}:{x1:l,y1:i,x2:x,y2:y}}function Tr(r,l){const u=d=>(d.x-l.x)*l.F.x+(d.y-l.y)*l.F.y+(d.z-l.z)*l.F.z,f=[],h=r.length;for(let d=0;d<h;d++){const v=r[d],p=r[(d+1)%h],g=u(v),x=u(p),y=g>=.12;if(y&&f.push(v),y!==x>=.12){const m=(.12-g)/(x-g);f.push({x:v.x+(p.x-v.x)*m,y:v.y+(p.y-v.y)*m,z:v.z+(p.z-v.z)*m})}}return f}function Wp(r,l,i,u){var y,m;const f=(((m=(y=l.params)==null?void 0:y.course)==null?void 0:m.trackWidth)??5)/2-.1,h=l.course.centerline,d=Math.min(h.length,720);let v=0,p=1/0;for(let k=0;k<d;k++){const E=h[k],P=(E.x-i.x)**2+(E.y-i.y)**2;P<p&&(p=P,v=k)}const g=Math.max(0,v-20),x=Math.min(d-1,v+16);if(x-g>=2){const k=L=>{const O=h[L],I=h[Math.min(L+1,d-1)],z=I.x-O.x,q=I.y-O.y,B=Math.hypot(z,q)||1e-6;return{x:-q/B*f,y:z/B*f}},E=[];for(let L=g;L<=x;L++){const O=k(L);E.push({x:h[L].x+O.x,y:h[L].y+O.y,z:0})}for(let L=x;L>=g;L--){const O=k(L);E.push({x:h[L].x-O.x,y:h[L].y-O.y,z:0})}const j=Tr(E,i).map(L=>Ue(i,L.x,L.y,L.z)).filter(Boolean);if(j.length>=3){const L=j.reduce((O,I)=>O+I.d,0)/j.length;u.push({z:L,draw:O=>{O.globalAlpha=1,O.fillStyle=an.track,O.beginPath(),O.moveTo(Ho(j[0].sx,i.W),Ho(j[0].sy,i.H));for(let I=1;I<j.length;I++)O.lineTo(Ho(j[I].sx,i.W),Ho(j[I].sy,i.H));O.closePath(),O.fill(),O.globalAlpha=1}})}}for(let k=x;k+1<d;k++){const E=h[k],P=h[k+1],j=P.x-E.x,L=P.y-E.y,O=Math.hypot(j,L)||1e-6,I=-L/O*f,z=j/O*f,q=[{x:E.x+I,y:E.y+z,z:0},{x:E.x-I,y:E.y-z,z:0},{x:P.x-I,y:P.y-z,z:0},{x:P.x+I,y:P.y+z,z:0}];let B=0,R=!0;const Q=[];for(const V of q){const J=Ue(i,V.x,V.y,V.z);if(!J){R=!1;break}B+=J.d,Q.push(J)}if(!R)continue;const K=B/4;K>160||K<2||u.push({z:K,draw:V=>{V.globalAlpha=Math.max(0,Math.min(1,(160-K)/90)),V.fillStyle=an.track,V.beginPath(),V.moveTo(Q[0].sx,Q[0].sy);for(let J=1;J<Q.length;J++)V.lineTo(Q[J].sx,Q[J].sy);V.closePath(),V.fill(),V.globalAlpha=1}})}}function Ho(r,l){return Math.max(0,Math.min(l,r))}function yc(r,l,i,u){const f=u?an.trueObs:an.seenObs;if(l.type==="tunnel"){Vp(r,l,i,u);return}l.type==="block"&&qp(r,l.x,l.y,l.heading,l.len,l.width,.9,i,u?"#a4161a":f)}function Vp(r,l,i,u){const f=Math.cos(l.heading),h=Math.sin(l.heading),d=-h,v=f,p=l.width/2+.25,g=l.length,x=14,y=Math.max(4,Math.round(g/.8)),m=u?162:32,k=u?38:46,E=O=>{const I=[];for(let z=0;z<x;z++){const q=z/x*Math.PI*2;I.push({x:l.x+f*O+d*Math.cos(q)*p,y:l.y+h*O+v*Math.cos(q)*p,z:Math.sin(q)*p,a:q})}return I},P=[];for(let O=0;O<=y;O++)P.push(E(-g/2+g/y*O));const L=(i.x-l.x)*d+(i.y-l.y)*v>=0?1:-1;for(let O=0;O<y;O++)for(let I=0;I<x;I++){const z=(I+1)%x,B=Tr([P[O][I],P[O][z],P[O+1][z],P[O+1][I]],i).map(V=>Ue(i,V.x,V.y,V.z)).filter(Boolean);if(B.length<3)continue;let R=1/0;for(const V of B)R=Math.min(R,V.d);if(R>95)continue;const Q=(P[O][I].a+P[O][z].a)/2,K=.5+.5*Math.max(0,Math.cos(Q)*L);r.push({z:R,draw:V=>{V.globalAlpha=u?1:.8,V.fillStyle=`hsl(${m}, 70%, ${(k+24*K).toFixed(0)}%)`,V.beginPath(),V.moveTo(B[0].sx,B[0].sy);for(let J=1;J<B.length;J++)V.lineTo(B[J].sx,B[J].sy);V.closePath(),V.fill(),V.globalAlpha=1}})}for(const O of[0,y]){const z=Tr(P[O],i).map(B=>Ue(i,B.x,B.y,B.z)).filter(Boolean);if(z.length<3)continue;const q=z.reduce((B,R)=>B+R.d,0)/z.length;q>95||r.push({z:q,draw:B=>{B.strokeStyle=`hsl(${m}, 75%, ${u?55:60}%)`,B.lineWidth=u?2:1.5,B.beginPath(),B.moveTo(z[0].sx,z[0].sy);for(let R=1;R<z.length;R++)B.lineTo(z[R].sx,z[R].sy);B.closePath(),B.stroke()}})}}function qp(r,l,i,u,f,h,d,v,p,g){const x=Math.cos(u),y=Math.sin(u),m=(L,O,I)=>({x:l+L*x-O*y,y:i+L*y+O*x,z:I}),k=[m(-f/2,-h/2,0),m(f/2,-h/2,0),m(f/2,h/2,0),m(-f/2,h/2,0)],E=1,P=(L,O)=>{const z=Tr(L,v).map(B=>Ue(v,B.x,B.y,B.z)).filter(Boolean);if(z.length<3)return;let q=1/0;for(const B of z)q=Math.min(q,B.d);r.push({z:q,draw:B=>{B.globalAlpha=E,B.fillStyle=O,B.beginPath(),B.moveTo(z[0].sx,z[0].sy);for(let R=1;R<z.length;R++)B.lineTo(z[R].sx,z[R].sy);B.closePath(),B.fill(),B.globalAlpha=1}})};P(k,p);const j=gc(p,.72);for(let L=0;L<4;L++){const O=(L+1)%4;P([k[L],k[O],{...k[O],z:d},{...k[L],z:d}],j)}P(k.map(L=>({...L,z:d})),gc(p,1.18))}function gc(r,l){const i=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(r);if(!i)return r;const u=[0,1,2].map(f=>Math.round(Math.min(255,parseInt(i[f+1],16)*l)));return`rgb(${u[0]},${u[1]},${u[2]})`}function Qp(r,l,i){const u=Ue(i,l.x,l.y,.35);if(!u)return;const f=Math.max(0,Math.min(1,(u.d-.15)/.55)),h=Math.max(4,Math.min(i.W-4,u.sx)),d=Math.max(4,Math.min(i.H-4,u.sy));r.push({z:u.d,draw:v=>{const p=Math.max(2,Math.min(10,i.f*.3/Math.max(u.d,.4)));v.globalAlpha=f,v.fillStyle=an.drone,v.beginPath(),v.arc(h,d,p,0,Math.PI*2),v.fill(),v.fillStyle="#0d1117",v.font="bold 10px ui-monospace, Menlo, monospace",v.textAlign="center",v.fillText(`#${l.id}`,h,d-p-3),v.textAlign="left",v.globalAlpha=1}})}function Yp(r,l,i,u){for(const f of l.drones){const h=f.terms;if(h)for(const[d,v]of Object.entries(Go)){if(!u[d])continue;const p=h[d],g=Math.hypot((p==null?void 0:p.vx)??0,(p==null?void 0:p.vy)??0);if(g<.08)continue;const x=Math.min(3.5,Math.max(.5,g*.9));Rc(r,i,f.x,f.y,.35,f.x+p.vx/g*x,f.y+p.vy/g*x,.35,v)}}}function Rc(r,l,i,u,f,h,d,v,p){const g=Ue(l,i,u,f),x=Ue(l,h,d,v);!g||!x||r.push({z:Math.min(g.d,x.d),draw:y=>{y.strokeStyle=p,y.lineWidth=2,y.beginPath(),y.moveTo(g.sx,g.sy),y.lineTo(x.sx,x.sy),y.stroke();const m=Math.atan2(x.sy-g.sy,x.sx-g.sx),k=6;y.fillStyle=p,y.beginPath(),y.moveTo(x.sx,x.sy),y.lineTo(x.sx-k*Math.cos(m-.45),x.sy-k*Math.sin(m-.45)),y.lineTo(x.sx-k*Math.cos(m+.45),x.sy-k*Math.sin(m+.45)),y.closePath(),y.fill()}})}function Kp(r,l,i,u){const f=l.drones,h=l.params.safety.sep,d=g=>Ue(i,g.slotPos.x,g.slotPos.y,0),v=g=>Ue(i,g.x,g.y,0);for(const g of f){if(g.id===u)continue;const x=d(g);if(!x)continue;r.push({z:x.d,draw:m=>{const k=Math.max(2,Math.min(8,i.f*.12/x.d)),E=Ue(i,g.slotPos.x,g.slotPos.y,.7);m.strokeStyle="rgba(51,204,153,0.9)",m.lineWidth=1.5,m.beginPath(),m.moveTo(x.sx-k,x.sy),m.lineTo(x.sx+k,x.sy),m.moveTo(x.sx,x.sy-k),m.lineTo(x.sx,x.sy+k),E&&(m.moveTo(x.sx,x.sy),m.lineTo(E.sx,E.sy)),m.stroke(),m.fillStyle="rgba(51,204,153,0.9)",m.font="10px ui-monospace, Menlo, monospace",m.fillText(`slot ${g.id}`,x.sx+k+4,x.sy+3)}});const y=v(g);if(y){const m=Math.hypot(g.slotPos.x-g.x,g.slotPos.y-g.y),k=m<.5?"rgba(51,204,153,0.8)":m<2?"rgba(255,176,32,0.85)":"rgba(255,83,112,0.9)";r.push({z:Math.min(y.d,x.d),draw:E=>{E.strokeStyle=k,E.lineWidth=1,E.setLineDash([3,3]),E.beginPath(),E.moveTo(y.sx,y.sy),E.lineTo(x.sx,x.sy),E.stroke(),E.setLineDash([])}})}}const p=(g,x,y)=>{const m=[];for(let P=0;P<16;P++){const j=P/16*Math.PI*2;m.push({x:g+Math.cos(j)*y,y:x+Math.sin(j)*y,z:0})}const k=Tr(m,i),E=[];for(const P of k){const j=Ue(i,P.x,P.y,P.z);j&&E.push(j)}return E};for(const g of f){if(g.id===u)continue;const x=p(g.x,g.y,h);if(x.length<3)continue;let y=!1;for(const m of f)if(m!==g&&Math.hypot(g.x-m.x,g.y-m.y)<h){y=!0;break}r.push({z:x.reduce((m,k)=>m+k.d,0)/x.length,draw:m=>{m.strokeStyle=y?"rgba(255,83,112,0.95)":"rgba(125,145,170,0.65)",m.lineWidth=y?2:1,m.beginPath(),m.moveTo(x[0].sx,x[0].sy);for(let k=1;k<x.length;k++)m.lineTo(x[k].sx,x[k].sy);m.closePath(),m.stroke()}})}}function Xp(r,l,i){const u=l.centroid,f=Ue(i,u.x,u.y,0);f&&r.push({z:f.d,draw:d=>{d.strokeStyle=an.centroid,d.lineWidth=2;const v=Math.max(3,Math.min(12,i.f*.28/f.d));d.beginPath(),d.arc(f.sx,f.sy,v,0,Math.PI*2),d.stroke(),d.fillStyle=an.centroid,d.font="10px ui-monospace, Menlo, monospace",d.fillText("centroid",f.sx+v+4,f.sy+3)}});const h=l.plan;if(h&&Math.abs(h.vx)+Math.abs(h.vy)>.05){const d=Math.hypot(h.vx,h.vy),v=Math.min(6,Math.max(.5,d*.35));Rc(r,i,u.x,u.y,.35,u.x+h.vx/d*v,u.y+h.vy/d*v,.35,an.centroid)}}function Gp(r,l,i,u){r.strokeStyle=i,r.lineWidth=u,r.beginPath(),r.moveTo(l[0].sx,l[0].sy);for(let f=1;f<l.length;f++)r.lineTo(l[f].sx,l[f].sy);r.stroke()}function Zp(r,l,i,u){r.beginPath(),r.moveTo(l,i-u),r.lineTo(l+u,i),r.lineTo(l,i+u),r.lineTo(l-u,i),r.closePath(),r.fill()}function Jp(r,l,i){var d;let f=16;r.font="12px ui-monospace, Menlo, monospace",r.textAlign="left";const h=[`FPV  drone #${i.id}  mode ${((d=l.fm)==null?void 0:d.mode)??"-"}`,`speed ${i.speedAt.toFixed(1)} m/s   s ${i.s.toFixed(0)} m   lap ${i.lap}`,`perception ${(l.params.perception.freq??30).toFixed(0)} Hz  range ${l.params.perception.range_m.toFixed(0)} m  σ ${l.params.perception.lateral_noise.toFixed(1)}`,`track-model tape trust ${l.params.trackModel.tape_trust.toFixed(2)}  obstacles tracked ${l.model.obstacles.length}`,`planner ${l.plan.speed.toFixed(1)} m/s  lookahead ${l.params.planner.lookahead.toFixed(1)}  detour ${l.plan.detour?"ON":"off"}`,`comms ${l.comms.dropped.size?`drop ${[...l.comms.dropped].join(",")}`:"ok"}`];for(const v of h){r.fillStyle="rgba(13,17,23,0.78)";const p=r.measureText(v).width;r.fillRect(6,f-11,p+10,15),r.fillStyle="#d7e0ec",r.fillText(v,12,f),f+=17}}const Wo=(r,l,i)=>Math.max(l,Math.min(i,r));function eh({getWorld:r,droneId:l,overlay:i=!0,terms:u=null}){const f=re.useRef(null),h=re.useRef(r);h.current=r;const d=re.useRef(l);d.current=l;const v=re.useRef(i);v.current=i;const p=re.useRef(u);p.current=u;const g=re.useRef({yaw:null,t:0,panYaw:0,panPitch:0,zoom:1}),x=re.useRef(null),y=re.useRef(new Map),m=re.useRef(null);return re.useEffect(()=>{const k=f.current,E=k.getContext("2d");let P=0;const j=()=>{const R=window.devicePixelRatio||1,Q=k.getBoundingClientRect();k.width=Math.max(1,Math.round(Q.width*R)),k.height=Math.max(1,Math.round(Q.height*R))};j(),window.addEventListener("resize",j);const L=R=>{R.preventDefault();const Q=g.current;Q.zoom=Wo(Q.zoom*Math.exp(-R.deltaY*.0012),.4,6)},O=R=>{var K;const Q=y.current;if(Q.set(R.pointerId,{x:R.clientX,y:R.clientY}),Q.size===2){const[V,J]=[...Q.values()];m.current={dist:Math.hypot(V.x-J.x,V.y-J.y),mx:(V.x+J.x)/2,my:(V.y+J.y)/2},x.current=null}else Q.size===1&&(x.current={x:R.clientX,y:R.clientY});try{(K=k.setPointerCapture)==null||K.call(k,R.pointerId)}catch{}k.classList.add("panning")},I=R=>{const Q=y.current;if(!Q.has(R.pointerId))return;Q.set(R.pointerId,{x:R.clientX,y:R.clientY});const K=g.current;if(Q.size===2){const[V,J]=[...Q.values()],ve=Math.hypot(V.x-J.x,V.y-J.y),xe=(V.x+J.x)/2,Se=(V.y+J.y)/2,he=m.current;he&&he.dist>0&&(K.zoom=Wo(K.zoom*(ve/he.dist),.4,6),K.panYaw+=(xe-he.mx)*.006,K.panPitch=Wo(K.panPitch+(Se-he.my)*.006,-1.15,1.15)),m.current={dist:ve,mx:xe,my:Se}}else if(Q.size===1){const V=x.current;V&&(K.panYaw+=(R.clientX-V.x)*.006,K.panPitch=Wo(K.panPitch+(R.clientY-V.y)*.006,-1.15,1.15),V.x=R.clientX,V.y=R.clientY)}},z=R=>{if(y.current.delete(R.pointerId),m.current=null,y.current.size===1){const[Q]=[...y.current.values()];x.current={x:Q.x,y:Q.y}}else x.current=null;k.classList.remove("panning")},q=()=>{const R=g.current;R.panYaw=0,R.panPitch=0,R.zoom=1};k.addEventListener("wheel",L,{passive:!1}),k.addEventListener("pointerdown",O),k.addEventListener("pointermove",I),k.addEventListener("pointerup",z),k.addEventListener("pointercancel",z),k.addEventListener("dblclick",q);const B=R=>{var xe,Se;const Q=h.current(),K=k.getBoundingClientRect(),V=window.devicePixelRatio||1,J=Math.max(1,Math.round(K.width*V)),ve=Math.max(1,Math.round(K.height*V));if((k.width!==J||k.height!==ve)&&(k.width=J,k.height=ve),Q&&K.width>0&&K.height>0){const he=((xe=Q.drones)==null?void 0:xe[d.current])??((Se=Q.drones)==null?void 0:Se[0]);if(he){const we=Math.hypot(he.vy,he.vx)>1.2?Math.atan2(he.vy,he.vx):Q.query.pointAt(he.s).heading,H=g.current;if(H.yaw===null)H.yaw=we;else{let Y=we-H.yaw;for(;Y>Math.PI;)Y-=Math.PI*2;for(;Y<-Math.PI;)Y+=Math.PI*2;const b=Math.max(.004,Math.min(.05,(R-H.t)/1e3));H.yaw+=Y*(1-Math.exp(-b/.22))}H.t=R;const oe=Ap(he,K.width,K.height,{yaw:H.yaw+H.panYaw,pitch:Dp+H.panPitch,zoom:H.zoom});E.setTransform(k.width/K.width,0,0,k.height/K.height,0,0),Bp(E,Q,oe,{selfId:he.id,showFormation:v.current,terms:p.current}),Jp(E,Q,he)}}P=requestAnimationFrame(B)};return P=requestAnimationFrame(B),()=>{cancelAnimationFrame(P),window.removeEventListener("resize",j),k.removeEventListener("wheel",L),k.removeEventListener("pointerdown",O),k.removeEventListener("pointermove",I),k.removeEventListener("pointerup",z),k.removeEventListener("pointercancel",z),k.removeEventListener("dblclick",q)}},[]),C.jsxs(C.Fragment,{children:[C.jsx("canvas",{ref:f,className:"sim-canvas fpv-canvas interactive","aria-label":"FPV view"}),C.jsx("div",{className:"fpv-hint",children:"drag or pinch to pan · pinch/wheel to zoom · double-tap to reset"})]})}const vc=["#61affe","#f78c6c","#c3e88d","#ffcb6b","#ff5370","#bb9af7","#7fdbca","#f07178"];function nh({getWorld:r,droneId:l}){const i=re.useRef(null),u=re.useRef(null),f=re.useRef(r);f.current=r;const h=re.useRef(l);return h.current=l,re.useEffect(()=>{const d=i.current,v=d.getContext("2d");let p=0;const g=()=>{const y=window.devicePixelRatio||1,m=d.getBoundingClientRect();d.width=Math.max(1,Math.round(m.width*y)),d.height=Math.max(1,Math.round(m.height*y))};g(),window.addEventListener("resize",g);const x=()=>{const y=f.current();if(y){const m=d.getBoundingClientRect(),k=window.devicePixelRatio||1,E=Math.max(1,Math.round(m.width*k)),P=Math.max(1,Math.round(m.height*k));(d.width!==E||d.height!==P)&&(d.width=E,d.height=P),v.setTransform(d.width/m.width,0,0,d.height/m.height,0,0),th(v,y,m.width,m.height,h.current)}u.current&&(u.current.textContent=rh(f.current())),p=requestAnimationFrame(x)};return p=requestAnimationFrame(x),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",g)}},[]),C.jsxs("div",{className:"fpv-debug",children:[C.jsx("div",{className:"fpv-debug-head",children:"Perception · local model builder · comms — live"}),C.jsx("canvas",{ref:i,className:"fpv-map"}),C.jsx("pre",{ref:u,className:"fpv-stats"})]})}function th(r,l,i,u,f){r.clearRect(0,0,i,u),r.fillStyle="rgba(13,17,23,0.6)",r.fillRect(0,0,i,u);const h=l.course.bounds,d=2,v=m=>d+(m-h.minX)/(h.maxX-h.minX)*(i-d*2),p=m=>u-d-(m-h.minY)/(h.maxY-h.minY)*(u-d*2);r.strokeStyle="rgba(95,110,135,0.4)",r.lineWidth=1,r.beginPath();for(let m=0;m<l.course.centerline.length;m++){const k=l.course.centerline[m];m===0?r.moveTo(v(k.x),p(k.y)):r.lineTo(v(k.x),p(k.y))}r.closePath(),r.stroke();for(const m of l.obstacles)r.strokeStyle="rgba(255,92,92,0.5)",r.strokeRect(v(m.x)-2,p(m.y)-2,4,4);const g=l.drones[f]??l.drones[0];if(g){const k=Math.hypot(g.vy,g.vx)>.5?Math.atan2(g.vy,g.vx):l.query.pointAt(g.s).heading,E=l.params.perception.range_m,P=75*Math.PI/180/2,j=28;r.fillStyle="rgba(255,176,32,0.12)",r.strokeStyle="rgba(255,176,32,0.35)",r.beginPath(),r.moveTo(v(g.x),p(g.y));for(let L=0;L<=j;L++){const O=k-P+L/j*2*P;r.lineTo(v(g.x+Math.cos(O)*E),p(g.y+Math.sin(O)*E))}r.closePath(),r.fill(),r.stroke()}r.fillStyle="#ffb020";for(const m of l.scene.centreline)r.fillRect(v(m.x)-1.5,p(m.y)-1.5,3,3);r.strokeStyle="#3db9ff",r.lineWidth=1.5,r.beginPath();for(let m=0;m<l.model.line.length;m++){const k=l.model.line[m];m===0?r.moveTo(v(k.x),p(k.y)):r.lineTo(v(k.x),p(k.y))}r.stroke();for(const m of l.model.obstacles)r.strokeStyle="#ffb020",r.lineWidth=1.5,r.strokeRect(v(m.x)-3,p(m.y)-3,6,6),r.fillStyle="rgba(255,176,32,0.9)",r.font="9px ui-monospace, Menlo, monospace",r.fillText(`${m.type} ${(m.confidence??0).toFixed(2)}`,v(m.x)+4,p(m.y)-3);r.fillStyle="rgba(51,204,153,0.6)";for(const m of l.drones)r.strokeStyle="rgba(51,204,153,0.5)",r.strokeRect(v(m.slotPos.x)-2,p(m.slotPos.y)-2,4,4);r.strokeStyle="#7fdbca",r.lineWidth=1.5;const x=v(l.centroid.x),y=p(l.centroid.y);if(r.beginPath(),r.moveTo(x-4,y),r.lineTo(x+4,y),r.moveTo(x,y-4),r.lineTo(x,y+4),r.stroke(),l.plan.detour){r.strokeStyle="#ff5370";const m=v(l.plan.detour.x),k=p(l.plan.detour.y);r.beginPath(),r.moveTo(m-4,k-4),r.lineTo(m+4,k+4),r.moveTo(m+4,k-4),r.lineTo(m-4,k+4),r.stroke()}for(const m of l.drones){const k=m.id===f;r.fillStyle=vc[m.id%vc.length],r.beginPath(),r.arc(v(m.x),p(m.y),k?3.5:2.5,0,Math.PI*2),r.fill(),k&&(r.strokeStyle="#ffffff",r.lineWidth=1,r.beginPath(),r.arc(v(m.x),p(m.y),6,0,Math.PI*2),r.stroke())}}function rh(r){if(!r)return"";const l=r.drones[0],i=r.scene,u=r.model,f=r.comms,h=r.params.perception,d=r.course.centerline,v=d.length?d[0].s:0;return d.length&&d[d.length-1].s,[`perception   frame s0=${i.s0.toFixed(0)}  pts=${i.centreline.length}  range=${i.range.toFixed(0)}m`,`             cadence=${(1/r.perceptPeriod).toFixed(0)}Hz  noise=${h.lateral_noise.toFixed(2)}m  miss=${(h.miss_prob*100).toFixed(0)}%`,`track model  line=${u.line.length}pts (${u.s0!==void 0?u.s0.toFixed(0):v}..${(u.s0!==void 0?u.s0:v)+(i.range||0)}m)`,`             obstacles=${u.obstacles.length}  lastSeen ages=${u.obstacles.map(g=>`${g.type}${(r.time-g.lastSeen).toFixed(0)}s`).join(" ")||"-"}`,`comms        buffer age=${(r.time-(f.lastBroadcast??r.time)).toFixed(3)}s  dropped=[${[...f.dropped].join(",")||"-"}]`,`             uwb σ=${r.params.comms.uwb_noise.toFixed(2)}m  loss=${(r.params.comms.loss*100).toFixed(0)}%`,`planner      speed=${r.plan.speed.toFixed(1)}m/s  detour=${r.plan.detour?"ON":"off"}`,`formation    mode=${r.fm.mode}  why: ${r.fm.reason??"-"}`,`drone #${l.id}  v=${l.speedAt.toFixed(1)}m/s  s=${l.s.toFixed(0)}m  off=${l.off.toFixed(2)}m  lap=${l.lap}`].join(`
`)}function oh({stage:r,params:l,onPatch:i}){const u=ei[r];if(!u)return null;const f=l[r]||{},h=re.useCallback((d,v)=>{i({[r]:{[d]:v}})},[r,i]);return C.jsxs("details",{className:"acc",children:[C.jsx("summary",{children:u.label}),C.jsx("div",{className:"knoblist",children:u.knobs.map(d=>{const v=f[d.key];return d.type==="select"?C.jsxs("div",{className:"knob",children:[C.jsx("label",{children:d.label}),C.jsx("select",{value:v,onChange:p=>h(d.key,p.target.value),children:d.options.map(p=>C.jsx("option",{value:p.v,children:p.l},p.v))})]},d.key):d.type==="multiselect"?C.jsxs("div",{className:"knob",children:[C.jsx("label",{children:d.label}),C.jsx("div",{className:"chip-row",children:d.options.map(p=>{const g=Array.isArray(f[d.key])&&f[d.key].includes(p);return C.jsx("span",{className:"chip"+(g?" on":""),onClick:()=>{const x=Array.isArray(f[d.key])?f[d.key]:[];x.length===1&&x[0]===p||h(d.key,g?x.filter(y=>y!==p):[...x,p])},children:p},p)})})]},d.key):d.type==="bool"?C.jsx("div",{className:"knob",children:C.jsxs("label",{children:[d.label,C.jsx("input",{type:"checkbox",checked:!!v,onChange:p=>h(d.key,p.target.checked)})]})},d.key):d.type==="number"?C.jsxs("div",{className:"knob",children:[C.jsxs("label",{children:[d.label,"(seed)"]}),C.jsxs("div",{style:{display:"flex",gap:6},children:[C.jsx("input",{type:"number",value:v,step:d.step??1,onChange:p=>h(d.key,Number(p.target.value))}),C.jsx("button",{className:"btn",style:{padding:"3px 8px"},onClick:()=>h(d.key,Math.floor(Math.random()*1e5)),children:"🎲"})]})]},d.key):C.jsxs("div",{className:"knob",children:[C.jsxs("label",{children:[C.jsx("span",{children:d.label}),C.jsxs("b",{children:[Number(v).toFixed(2),d.unit??""]})]}),C.jsx("input",{type:"range",min:d.min,max:d.max,step:d.step??.05,value:v,onChange:p=>h(d.key,Number(p.target.value))})]},d.key)})})]})}const sh=[{name:"Camera + sensors",live:()=>null},{name:"Localisation & estimation",live:()=>null},{name:"Perception",live:r=>{var l;return((l=r.scene)==null?void 0:l.mode)??""},color:"#f0a020"},{name:"Local track model",live:r=>{var l,i;return(((i=(l=r.params)==null?void 0:l.trackModel)==null?void 0:i.tape_trust)??0)>=.5?"tape-leaning":"waypoint-leaning"},color:"#3db9ff"},{name:"Path planner",live:r=>{var l,i;return`${(((l=r.plan)==null?void 0:l.speed)??0).toFixed(1)} m/s${(i=r.plan)!=null&&i.detour?" !":""}`},color:"#61affe"},{name:"Formation manager",live:r=>r.fm?`${r.fm.mode} · ${r.fm.reason??""}`:"–",color:"#bb9af7"},{name:"Swarm controller",live:r=>{var l;return`${((l=r.drones)==null?void 0:l.length)??0} drones`},color:"#c3e88d"},{name:"Combiners + safety filter",live:r=>{var l,i;return`v≤${((i=(l=r.params)==null?void 0:l.safety)==null?void 0:i.vmax)??"-"}`},color:"#ffcb6b"},{name:"Classical autopilot",live:r=>{var l,i,u;return`τ ${(u=(i=(l=r.params)==null?void 0:l.autopilot)==null?void 0:i.tau)==null?void 0:u.toFixed(2)}s`},color:"#7fdbca"}];function lh({n:r,w:l}){const i=r.live?r.live(l):null;return C.jsxs("div",{children:[C.jsxs("div",{className:"pnode",children:[C.jsx("span",{className:"pnode dot",style:{background:r.color??"var(--muted)"}}),C.jsx("span",{className:"name",children:r.name}),i!=null&&C.jsx("span",{className:"live",children:String(i)})]}),C.jsx("div",{className:"arrow",children:"↓"})]})}function ih({world:r}){var d,v,p,g,x;const l=r||{},i=l.centroidArc!=null&&l.course?(l.centroidArc/l.course.length).toFixed(2):"–",u=(d=l.stats)==null?void 0:d.modeTime,f=u?u.box+u.line:0,h=y=>f>0?(u[y]/f*100).toFixed(0)+"%":"–";return C.jsxs("div",{className:"panel pipeline",children:[C.jsx("h3",{children:"Control pipeline"}),sh.map((y,m)=>C.jsx(lh,{n:y,w:l},m)),C.jsxs("div",{className:"arrow side",children:["⟷ comms ",((p=(v=l.params)==null?void 0:v.comms)==null?void 0:p.hz)??0,"Hz · loss ",(((x=(g=l.params)==null?void 0:g.comms)==null?void 0:x.loss)??0)*100,"%"]}),C.jsxs("div",{className:"hint",children:["Time-in-mode: box ",h("box")," · line ",h("line")," — laps ",i]})]})}function ah({values:r,color:l}){const i=Math.max(.01,...r);return C.jsx("div",{className:"bars",children:r.slice(-48).map((u,f)=>C.jsx("div",{className:"bar",style:{height:`${Math.max(5,u/i*100)}%`,background:l}},f))})}function uh({world:r}){var v,p,g,x,y,m;const l=r||{},i=(v=l.stats)==null?void 0:v.conf,u=((p=l.stats)==null?void 0:p.samples)??[],f=(x=(g=l.params)==null?void 0:g.safety)==null?void 0:x.sep,h=(m=(y=l.params)==null?void 0:y.safety)==null?void 0:m.clearance,d=(k,E,P)=>C.jsxs("div",{className:"mrow"+(P===void 0?"":P?" good":" bad"),children:[C.jsx("span",{children:k}),C.jsx("span",{children:E})]});return C.jsxs("div",{className:"panel metrics",children:[C.jsx("h3",{children:"Race telemetry"}),d("Time",`${(l.time??0).toFixed(1)}s`),d("Laps (centroid)",l.centroidArc!=null&&l.course?(l.centroidArc/l.course.length).toFixed(2):"–"),d("Swarm avg speed",i?`${i.avgSpeed.toFixed(2)} m/s`:"–"),d("Formation error (max)",i?`${i.maxForm.toFixed(2)} m`:"–",i?i.maxForm<3:void 0),d("Min inter-drone",i?`${i.minSep.toFixed(2)} m`:"–",i&&f?i.minSep>=f:void 0),d("Min obstacle clear",i?`${i.minClear.toFixed(2)} m`:"–",i&&h?i.minClear>=h:void 0),d("Collisions",i?i.collisions??0:"–",i?(i.collisions??0)===0:void 0),d("Near-misses",l.stats?(l.stats.nearDrone??0)+(l.stats.nearObs??0):"–"),C.jsx("div",{className:"hint",children:"Formation error trace"}),C.jsx(ah,{values:u.map(k=>k.maxForm),color:"var(--accent)"})]})}const ri=[{key:"swarm.slot_gain",base:2,min:1,max:4,label:"slot gain"},{key:"swarm.damping",base:.9,min:.4,max:1.6,label:"damping"},{key:"safety.sep",base:.7,min:.55,max:1.3,label:"sep"},{key:"formation.spacing",base:1,min:.8,max:1.8,label:"spacing"},{key:"planner.cruise",base:8,min:4,max:10,label:"cruise"},{key:"autopilot.tau",base:.08,min:.03,max:.2,label:"AP τ"}];function ch(r,l){const[i,u]=l.key.split(".");return r[i][u]}function dh(r,l,i){const[u,f]=l.key.split(".");return{...r,[u]:{...r[u],[f]:i}}}function fh(r,l){let i={...r};for(const u of ri){const f=u.min+l()*(u.max-u.min);i=dh(i,u,Math.round(f*1e3)/1e3)}return i}function xc(r,l=60){const i=Cr(r),u=Math.round(l/(1/240));for(let p=0;p<u;p++)Tc(i,1/240);const f=i.stats.conf,h=Math.max(1,i.drones.reduce((p,g)=>p+g.lap,0)),d=i.stats.collisionCount,v=(i.stats.nearDrone??0)+(i.stats.nearObs??0);return{collisions:d,collPerLap:d/h,nearMisses:v,nearPerLap:v/h,laps:h,avgSpeed:(f==null?void 0:f.avgSpeed)??0,maxForm:(f==null?void 0:f.maxForm)??99,minSep:(f==null?void 0:f.minSep)??0,centroidLaps:i.centroidArc/i.course.length}}function wc(r){return r.collPerLap*80+r.nearPerLap*3+r.maxForm*.5+Math.max(0,4.5-r.avgSpeed)*6+(Number.isFinite(r.avgSpeed)&&r.avgSpeed<.5?500:0)}function ph(r,l=ri){const i={};for(const u of l)i[u.label]=ch(r,u);return i}function hh({getParams:r,onApply:l}){const[i,u]=re.useState("idle"),[f,h]=re.useState({done:0,total:0}),[d,v]=re.useState(null),[p,g]=re.useState(40),x=re.useRef(!1),y=async()=>{x.current=!1,u("running"),v(null),h({done:0,total:p+1});const P=r(),j=Xo((Date.now()^1597463007)>>>0),L=[],O={...P},I=xc(O);L.push({params:O,metrics:I,score:wc(I),isBaseline:!0});for(let z=0;z<p&&!x.current;z++){const q=fh(O,j),B=xc(q);L.push({params:q,metrics:B,score:wc(B),isBaseline:!1}),h({done:z+2,total:p+1}),z%4===3&&await new Promise(R=>setTimeout(R,0))}L.sort((z,q)=>z.score-q.score),v(L),u("done")},m=()=>{x.current=!0},k=d==null?void 0:d[0],E=d?d.slice(0,6):[];return C.jsxs("div",{className:"panel tune",children:[C.jsx("h3",{children:"Auto-tune (current track)"}),C.jsxs("div",{className:"tune-row",children:[C.jsxs("select",{className:"drone-sel",value:p,onChange:P=>g(Number(P.target.value)),disabled:i==="running","aria-label":"trials",children:[C.jsx("option",{value:20,children:"20 trials"}),C.jsx("option",{value:40,children:"40 trials"}),C.jsx("option",{value:80,children:"80 trials"}),C.jsx("option",{value:160,children:"160 trials"})]}),i==="running"?C.jsx("button",{className:"btn",onClick:m,children:"Cancel"}):C.jsx("button",{className:"btn primary",onClick:y,disabled:i==="running",children:i==="done"?"Re-run":"Tune"})]}),i==="running"&&C.jsxs("div",{className:"tune-progress",children:[C.jsx("div",{className:"tune-bar",children:C.jsx("div",{className:"tune-fill",style:{width:`${f.done/f.total*100}%`}})}),C.jsxs("span",{className:"hint",children:[f.done,"/",f.total," races (",ri.length," knobs sampled)"]})]}),i==="done"&&d&&C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"tune-best",children:[C.jsxs("div",{children:[C.jsx("span",{className:"tune-label",children:"Best (vs baseline)"}),C.jsxs("span",{className:"tune-num",children:[k.metrics.collisions," coll · ",k.metrics.nearPerLap.toFixed(0),"/lap near"]}),C.jsxs("span",{className:"hint",children:[k.metrics.avgSpeed.toFixed(1)," m/s · form ",k.metrics.maxForm.toFixed(1)," m · ",k.metrics.laps," laps"]})]}),C.jsx("button",{className:"btn primary",onClick:()=>l(k.params),children:"Apply best"})]}),C.jsxs("table",{className:"tune-table",children:[C.jsx("thead",{children:C.jsxs("tr",{children:[C.jsx("th",{children:"#"}),C.jsx("th",{children:"coll"}),C.jsx("th",{children:"near/lap"}),C.jsx("th",{children:"m/s"}),C.jsx("th",{children:"form"}),C.jsx("th",{children:"knobs"})]})}),C.jsx("tbody",{children:E.map((P,j)=>C.jsxs("tr",{className:P.isBaseline?"baseline":"",children:[C.jsxs("td",{children:[j===0?"★":j,P.isBaseline?" base":""]}),C.jsx("td",{children:P.metrics.collisions}),C.jsx("td",{children:P.metrics.nearPerLap.toFixed(0)}),C.jsx("td",{children:P.metrics.avgSpeed.toFixed(1)}),C.jsx("td",{children:P.metrics.maxForm.toFixed(1)}),C.jsx("td",{className:"knob-cell",children:Object.entries(ph(P.params)).map(([L,O])=>`${L} ${O}`).join(" · ")})]},j))})]}),C.jsx("button",{className:"btn",onClick:()=>l(base),children:"Reset to baseline"})]})]})}const Vo=`// The simulation HARNESS: builds a course world + N drones and steps the
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
}`,et=`// Deployable control core — the code that would run on a real swarm's
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
//   Model       = { line: [{x,y,s}], obstacles: [{id,type,s,x,y,heading,
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
  let a = line[0]
  let b = line[line.length - 1]
  for (let i = 0; i < line.length - 1; i++) {
    if (line[i].s <= s && line[i + 1].s >= s) { a = line[i]; b = line[i + 1]; break }
  }
  const seg = (b.s - a.s) || 1
  const t = Math.min(1, Math.max(0, (s - a.s) / seg))
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, s }
}

// perceived curvature: heading change of the model line over a 4 m window
// (chord directions at s-2, s, s+2). Exact for constant curvature, and the
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
export function plannerStep({ model, params, arc, prevPose, prevDetourOn, obstacleSide, trackLength, dt, log }) {
  const pp = params.planner
  const sCent = arc

  // no model line yet — caller falls back to holding position
  if (!model.line || model.line.length < 2) return null

  // obstacle caution ahead (slows the centroid near obstacles)
  const threat = nearObstacle(model, sCent, pp.lookahead, trackLength)

  // speed shaping on perceived track curvature underneath the centroid
  const curv = modelCurvature(model.line, sCent)
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
`;function nn(r,l){const i=`function ${l}(`,u=r.indexOf(i);if(u<0)return`// ${l} not found in source`;const f=r.indexOf("{",u);let h=0,d=f;for(;d<r.length;d++){const v=r[d];if(v==="{")h++;else if(v==="}"&&(h--,h===0))break}return r.slice(u,d+1)}const ue=(r,l)=>({label:r,get:l}),Qo=[{id:"intro",name:"The big picture",color:"#d7e0ec",role:`A drone swarm is not four drones flying on their own — it is ONE control
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
      group goes — they only decide how to get back into position.`,code:{file:"src/core/pipeline.js",code:nn(et,"plannerStep").split(`
`).slice(0,40).join(`
`)+`
    // … (see the path planner entry for the full function)`},live:[ue("Pipeline stages",r=>"7 + comms + formation"),ue("Drone count",r=>{var l;return`${((l=r.drones)==null?void 0:l.length)??0}`}),ue("Centroid speed",r=>{var l,i;return`${((i=(l=r.plan)==null?void 0:l.speed)==null?void 0:i.toFixed(1))??0} m/s`}),ue("Formation mode",r=>{var l;return((l=r.fm)==null?void 0:l.mode)??"-"})],try:"Press <b>New track</b> to regenerate the world, watch the pipeline strip on the left, then open each system below in order."},{id:"perception",name:"1 · Perception",color:"#f0a020",role:`The drone's eyes. A camera feed is turned into a small geometric sketch:
      a handful of points along the track centreline ahead, plus a list of detected
      obstacles. Everything downstream works from this sketch — the pipeline never
      sees raw images, which is why you can swap the camera processor (classical
      OpenCV or lightweight AI) without changing anything else.
      <br/><br/>
      Perception runs on a <b>cadence</b> like a camera shutter (the "freq" knob),
      and every measurement is noisy: centreline points wobble (lateral_noise),
      obstacles jitter and can be missed entirely (miss_prob). The "mode" knob
      picks the sensing option — ground truth means no error, OpenCV/AI are
      represented by the noise model.`,code:{file:"src/sim/world.js",code:nn(Vo,"runPerception")},live:[ue("Mode",r=>{var l,i;return((i=(l=r.params)==null?void 0:l.perception)==null?void 0:i.mode)??"-"}),ue("Points ahead",r=>{var l,i;return`${((i=(l=r.scene)==null?void 0:l.centreline)==null?void 0:i.length)??0}`}),ue("Range",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.perception)==null?void 0:i.range_m)??0} m`}),ue("Cadence",r=>`${(1/(r.perceptPeriod??.033)).toFixed(0)} Hz`),ue("Obstacles seen",r=>{var l,i;return`${((i=(l=r.scene)==null?void 0:l.obstacles)==null?void 0:i.length)??0}`})],try:"Set <b>lateral_noise</b> to 1.5 to see how noisy eyes hurt the whole pipeline, then set it back to 0. Turn <b>miss_prob</b> up and watch obstacles appear/disappear in the model."},{id:"trackModel",name:"2 · Local track model",color:"#3db9ff",role:`Short-term memory of the track ahead. The course is waypoint-based, but
      tape (the perceived centreline) supplements the waypoints when visible — the
      <b>tape_trust</b> knob decides how much to believe the tape vs the map.
      <br/><br/>
      It also keeps a persistent list of obstacles with a <b>hysteresis window</b>:
      if the camera misses an obstacle for a moment (see perception's miss_prob),
      the model keeps it around for "obstacle_hysteresis" seconds instead of
      forgetting it instantly — real systems can't have the world blinking out.`,code:{file:"src/core/pipeline.js",code:nn(et,"trackModelStep")},live:[ue("Model line points",r=>{var l,i;return`${((i=(l=r.model)==null?void 0:l.line)==null?void 0:i.length)??0}`}),ue("Tape trust",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.trackModel)==null?void 0:i.tape_trust)??0}`}),ue("Obstacles tracked",r=>{var l,i;return`${((i=(l=r.model)==null?void 0:l.obstacles)==null?void 0:i.length)??0}`}),ue("Lookahead",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.trackModel)==null?void 0:i.lookahead)??0} m`})],try:"Set <b>tape_trust</b> to 1 (pure tape) then 0 (pure waypoints) and watch the model line in the FPV debug panel change."},{id:"planner",name:"3 · Path planner",color:"#61affe",role:`The group's decision-maker. It drives the <b>centroid</b> — the virtual
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
      would stretch apart.`,code:{file:"src/core/pipeline.js",code:nn(et,"plannerStep")},live:[ue("Centroid speed",r=>{var l,i;return`${((i=(l=r.plan)==null?void 0:l.speed)==null?void 0:i.toFixed(1))??0} m/s`}),ue("Lookahead",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.planner)==null?void 0:i.lookahead)??0} m`}),ue("Detour active",r=>{var l;return(l=r.plan)!=null&&l.detour?"ON":"off"}),ue("Centroid progress",r=>r.course?`${(r.centroidArc/r.course.length).toFixed(2)} laps`:"-")],try:"Turn <b>cruise</b> way up (16) and watch the centroid out-run the drones into the corners. Turn <b>detour_width</b> up and watch the whole box swing wide around blocks."},{id:"formation",name:"4 · Formation manager",color:"#bb9af7",role:`The choreographer. Decides which shape the swarm holds and assigns each
      drone a <b>slot offset</b> in the centroid's frame: the home shape is a flat
      <b>box</b>; when an obstacle forces single-file threading, the swarm switches
      to a <b>line</b> convoy. The mode switch has <b>hysteresis</b> — it only
      reverts to box after the obstacle has been clear for a while, so the formation
      doesn't flap at the boundary.
      <br/><br/>
      Slot transitions are smoothed over "reform_time" so the box morphs instead of
      snapping. The architecture target: reform to box within 2 seconds.`,code:{file:"src/core/pipeline.js",code:nn(et,"formationStep")+`

`+nn(et,"slotDef")},live:[ue("Mode",r=>{var l;return((l=r.fm)==null?void 0:l.mode)??"-"}),ue("Reason",r=>{var l;return((l=r.fm)==null?void 0:l.reason)??"-"}),ue("Reform time",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.formation)==null?void 0:i.reform_time)??0} s`}),ue("Spacing",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.formation)==null?void 0:i.spacing)??0} m`})],try:"Pause the sim just before a tunnel, then resume — watch the box contract into a line and reform. Toggle <b>reform_time</b> up to 4s to see the morph in slow motion."},{id:"comms",name:"· Inter-drone comms",color:"#7fdbca",role:`The gossip channel. Every drone broadcasts its position on a schedule
      (40 Hz by default) over a radio link with realistic imperfections: packets
      drop (loss), deliveries are delayed with jitter, and the received positions
      carry UWB ranging noise (uwb_noise). The swarm controller uses these
      <b>neighbour states</b> to keep drones apart <i>before</i> they touch —
      anticipatory separation instead of reactive panic.`,code:{file:"src/sim/world.js",code:nn(Vo,"maybeBroadcast")+`

`+nn(Vo,"readComms")},live:[ue("Rate",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.comms)==null?void 0:i.hz)??0} Hz`}),ue("Dropped now",r=>{var l;return[...((l=r.comms)==null?void 0:l.dropped)??[]].join(",")||"none"}),ue("Buffer age",r=>{var l;return`${(r.time-(((l=r.comms)==null?void 0:l.lastBroadcast)??r.time)).toFixed(2)} s`}),ue("UWB noise",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.comms)==null?void 0:i.uwb_noise)??0} m`})],try:"Set <b>loss</b> to 0.5 — drones can no longer see each other reliably and the formation loosens. Set <b>jitter</b> to 200ms for stale neighbours."},{id:"swarm",name:"5 · Swarm controller",color:"#c3e88d",role:`The formation keeper. Every drone computes its own velocity command:
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
      is what keeps the formation moving.`,code:{file:"src/core/pipeline.js",code:nn(et,"swarmStep")},live:[ue("Drone",r=>{var l,i;return`#${((i=(l=r.drones)==null?void 0:l[0])==null?void 0:i.id)??"-"}`}),ue("Slot error",r=>{var i;const l=(i=r.drones)==null?void 0:i[0];return l?`${Math.hypot(l.slotPos.x-l.x,l.slotPos.y-l.y).toFixed(2)} m`:"-"}),ue("Lateral offset",r=>{var l,i;return`${(((i=(l=r.drones)==null?void 0:l[0])==null?void 0:i.off)??0).toFixed(2)} m`})],try:"Turn <b>slot_gain</b> down to 0.2 and the box drifts apart behind the centroid. Turn <b>damping</b> to 0 and watch the drones overshoot their slots."},{id:"safety",name:"6 · Combiner + safety filter",color:"#ffcb6b",role:`The referee. Takes each drone's swarm command, clips it to a velocity
      limit (vmax), then enforces hard guarantees every simulation tick:
      <b>obstacle clearance</b> (push out of solids, rail along tunnel walls) and
      <b>inter-drone separation</b> (never closer than "sep"). The result is that
      hard collisions are <b>structurally impossible</b> — near-misses (rail
      engagements) are the real safety signal, shown as amber flashes.`,code:{file:"src/core/pipeline.js",code:nn(et,"safetyStep")},live:[ue("Velocity clip",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.safety)==null?void 0:i.vmax)??0} m/s`}),ue("Min separation",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.safety)==null?void 0:i.sep)??0} m`}),ue("Clearance",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.safety)==null?void 0:i.clearance)??0} m`}),ue("Collisions",r=>{var l;return`${((l=r.stats)==null?void 0:l.collisionCount)??0}`}),ue("Near-misses",r=>{var l,i;return`${(((l=r.stats)==null?void 0:l.nearDrone)??0)+(((i=r.stats)==null?void 0:i.nearObs)??0)}`})],try:"Set <b>sep</b> to 2.5 — the formation has to stretch to obey the separation guarantee. Set <b>vmax</b> to 6 and watch the swarm cruise slower."},{id:"autopilot",name:"7 · Classical autopilot",color:"#7fdbca",role:`The muscles. Converts the final velocity command into actual motion the
      way a real flight controller would: a <b>first-order lag</b> (tau) models the
      response time of the attitude controller, an <b>acceleration limit</b> models
      the motors, and a <b>processing lag</b> models the compute delay between
      sensing and actuation. This is deliberately classical — stability is never
      left to AI.`,code:{file:"src/core/pipeline.js",code:nn(et,"autopilotStep")},live:[ue("Response τ",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.autopilot)==null?void 0:i.tau)??0} s`}),ue("Accel limit",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.autopilot)==null?void 0:i.accel)??0} m/s²`}),ue("Processing lag",r=>{var l,i;return`${((i=(l=r.params)==null?void 0:l.autopilot)==null?void 0:i.lag)??0} ms`})],try:"Set <b>tau</b> to 2 — the drones visibly lag every command. Set <b>lag</b> to 150ms and watch commands arrive late at the motors."},{id:"course",name:"· Course generator",color:"#8892a0",role:`The track designer. A seed creates a random closed polygon (vertices,
      radius, radius_noise), then every corner is <b>filleted</b> — replaced by an
      arc with a random turn radius — and the result is sampled into a centreline
      parameterised by arc length s. Everything downstream (perception, planner,
      metrics) speaks in arc length, which is what makes swapping track sources
      trivial.`,code:{file:"src/sim/track/generate.js",code:nn(mh,"filletSegments")},live:[ue("Seed",r=>{var l;return`${((l=r.course)==null?void 0:l.seed)??"-"}`}),ue("Track length",r=>{var l;return`${(((l=r.course)==null?void 0:l.length)??0).toFixed(0)} m`}),ue("Vertices",r=>{var l,i;return`${((i=(l=r.course)==null?void 0:l.poly)==null?void 0:i.length)??0}`}),ue("Centreline samples",r=>{var l,i;return`${((i=(l=r.course)==null?void 0:l.centerline)==null?void 0:i.length)??0}`})],try:"Click <b>New track</b> a few times — same seeds, same tracks: it is fully deterministic. Change <b>vertices</b> to 12 for a long track."},{id:"obstacles",name:"· Obstacle placement",color:"#ff5c5c",role:`The hazards. Two kinds drawn from a known finite set: <b>blocks</b> sit
      on the tape and force a planned detour; <b>tunnels</b> force the formation
      into a single-file line to thread the chute. Placement picks random arc
      positions with enforced minimum spacing and type mixing from the "kinds"
      knob.`,code:{file:"src/sim/obstacles.js",code:nn(yh,"placeObstacles")},live:[ue("Count",r=>{var l;return`${((l=r.obstacles)==null?void 0:l.length)??0}`}),ue("Kinds",r=>{var l,i;return(((i=(l=r.params)==null?void 0:l.obstacles)==null?void 0:i.kinds)??[]).join(", ")||"-"}),ue("Ahead of drone",r=>{var u,f;const l=((f=(u=r.drones)==null?void 0:u[0])==null?void 0:f.s)??0,i=(r.obstacles??[]).map(h=>h.s).filter(h=>h>=l);return i.length?`${(Math.min(...i)-l).toFixed(0)} m`:"none this lap"})],try:'Uncheck "block" in <b>kinds</b> to race a tunnel-only track, or set <b>count</b> to 0 for a clean speed run.'},{id:"collisions",name:"· Collision handling",color:"#ff5370",role:`The hard guarantee underneath everything. Every tick, positions are
      resolved so that drones stay ≥ 0.65 m apart, drone-to-solid stays ≥ radius
      + 0.55 m, and tunnel walls keep a 0.3 m rail — physical contact is
      structurally impossible. When a rail engages, it is logged as a
      <b>near-miss</b> (amber flash) rather than a collision — near-misses are the
      meaningful safety metric for tuning.`,code:{file:"src/sim/world.js",code:nn(Vo,"resolveCollisions")},live:[ue("Collisions",r=>{var l;return`${((l=r.stats)==null?void 0:l.collisionCount)??0}`}),ue("Near-miss drone",r=>{var l;return`${((l=r.stats)==null?void 0:l.nearDrone)??0}`}),ue("Near-miss obstacle",r=>{var l;return`${((l=r.stats)==null?void 0:l.nearObs)??0}`})],try:"Watch the amber flashes in 2D view when the swarm squeezes through tunnels — those are rail engagements, by design."}];function gh({world:r,initialId:l="intro",onClose:i}){const[u,f]=re.useState(l);re.useEffect(()=>{const d=v=>{v.key==="Escape"&&i()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[i]);const h=re.useMemo(()=>Qo.find(d=>d.id===u)??Qo[0],[u]);return C.jsx("div",{className:"code-overlay",onClick:i,children:C.jsxs("div",{className:"code-sheet",onClick:d=>d.stopPropagation(),children:[C.jsxs("div",{className:"code-head",children:[C.jsx("h2",{children:"How the swarm works — system by system"}),C.jsx("span",{className:"hint",children:"every stage · the live code behind it · what to try"}),C.jsx("div",{className:"spacer"}),C.jsx("button",{className:"btn",onClick:i,children:"Close ✕"})]}),C.jsxs("div",{className:"code-body",children:[C.jsx("nav",{className:"code-menu",children:Qo.map(d=>C.jsxs("button",{className:d.id===u?"active":"",onClick:()=>f(d.id),children:[C.jsx("span",{className:"dot",style:{background:d.color}}),d.name]},d.id))}),C.jsxs("div",{className:"code-detail",children:[C.jsx("h3",{style:{color:h.color},children:h.name}),C.jsx("div",{className:"role",dangerouslySetInnerHTML:{__html:h.role}}),C.jsx("div",{className:"live-grid",children:(h.live??[]).map(d=>C.jsxs("div",{className:"live-cell",children:[C.jsx("b",{children:d.label}),C.jsx("span",{children:d.get(r)??"-"})]},d.label))}),h.try&&C.jsx("div",{className:"try",dangerouslySetInnerHTML:{__html:`🧪 Try this: ${h.try}`}}),C.jsxs("div",{className:"code-block",children:[C.jsxs("div",{className:"code-file",children:[C.jsx("span",{children:h.code.file}),C.jsx("span",{children:"the real engine source"})]}),C.jsx("pre",{children:h.code.code})]})]})]})]})})}const vh=Object.fromEntries(Qo.map(r=>[r.id,r.color]));function xh({world:r,onOpenSystem:l}){const i=((r==null?void 0:r.decisions)??[]).slice(-14).reverse();return i.length?C.jsxs("div",{className:"panel decisions",children:[C.jsx("h3",{children:"Decisions — what happened & why"}),i.map((u,f)=>C.jsxs("button",{className:"dec",onClick:()=>l(u.stage),title:"open this system in How it works",children:[C.jsxs("span",{className:"dec-t",children:[u.t.toFixed(1),"s"]}),C.jsx("span",{className:"dec-dot",style:{background:vh[u.stage]??"#8892a0"}}),C.jsx("span",{className:"dec-msg",children:u.msg})]},i.length-f))]}):null}function wh(r){var d,v,p,g,x,y;if(!r||!((d=r.drones)!=null&&d.length))return"waiting for the world…";const l=[],i=r.fm;if(i){const m=i.mode==="box"?"clear track ahead":i.reason??"obstacle ahead";l.push(`holding a ${i.mode} formation (${m})`)}const u=r.plan;u&&(u.detour&&l.push("the centroid is routing around a solid obstacle"),u.speed!=null&&(u.speed<2.5?l.push(`slowing to ${u.speed.toFixed(1)} m/s — corner or obstacle ahead`):l.push(`cruising at ${u.speed.toFixed(1)} m/s`)));const f=(v=r.stats)==null?void 0:v.nearEvents;if(f&&f.length){const m=f[f.length-1];r.time-m.t<.4&&l.push(m.kind==="tunnel"?"threading the tunnel — walls railing the drone onto the axis":"pressed against an obstacle — safety rail holding clearance")}const h=(g=(p=r.stats)==null?void 0:p.conf)==null?void 0:g.minSep;return h!=null&&h<(((y=(x=r.params)==null?void 0:x.safety)==null?void 0:y.sep)??.9)+.05&&l.push("safety filter actively keeping drones apart"),l.join(" · ")}function kh(){const[r,l]=re.useState(()=>Sc()),[i,u]=re.useState(null),[f,h]=re.useState(!0),[d,v]=re.useState(1),[p,g]=re.useState("top"),[x,y]=re.useState(0),[m,k]=re.useState(!0),[E,P]=re.useState(!0),[j,L]=re.useState(!1),[O,I]=re.useState("intro"),[z,q]=re.useState({slot:!1,sep:!1,damp:!1,safety:!1}),[B,R]=re.useState(null),Q=re.useRef(null),K=re.useRef(null),V=re.useRef(r);V.current=r;const J=re.useRef(null),ve=re.useRef(f);ve.current=f;const xe=re.useRef(d);xe.current=d,J.current===null&&(J.current=Cr(r)),re.useEffect(()=>{let W=0,ee=performance.now(),de=0;const pe=ye=>{const Me=Math.min((ye-ee)/1e3,.1);ee=ye,ve.current&&Tc(J.current,Me*xe.current),de+=Me,de>.12&&(de=0,u({...J.current,_tick:performance.now()})),W=requestAnimationFrame(pe)};return W=requestAnimationFrame(pe),()=>cancelAnimationFrame(W)},[]);const Se=re.useCallback(W=>{const ee=ti(V.current,W);V.current=ee,l(ee),Object.keys(W).some(pe=>pe==="course"||pe==="obstacles"||pe==="sim")?J.current=Cr(ee):J.current.params=ee},[]),he=re.useCallback(()=>{J.current=Cr(V.current)},[]),ze=re.useCallback(()=>{Se({course:{seed:Math.floor(Math.random()*1e5)},obstacles:{seed:Math.floor(Math.random()*1e5)}})},[Se]),we=re.useCallback(W=>{Se(W),J.current=Cr(V.current)},[Se]),H=re.useCallback(W=>{var de,pe;const ee=Q.current;K.current={y:W.clientY,h:(ee==null?void 0:ee.getBoundingClientRect().height)??400},(pe=(de=W.currentTarget).setPointerCapture)==null||pe.call(de,W.pointerId)},[]),oe=re.useCallback(W=>{const ee=K.current;ee&&R(Math.max(160,Math.min(window.innerHeight-80,ee.h+(W.clientY-ee.y))))},[]),Y=re.useCallback(()=>{K.current=null},[]),b=re.useCallback(()=>{var ee;const W=Q.current;W&&(document.fullscreenElement?document.exitFullscreen():(ee=W.requestFullscreen)==null||ee.call(W))},[]),F=re.useCallback(W=>{I(W),L(!0)},[]),ce=re.useCallback(W=>{q(ee=>({...ee,[W]:!ee[W]}))},[]);return C.jsxs("div",{className:"app",children:[C.jsxs("div",{className:"topbar",children:[C.jsx("h1",{children:"Drone Swarm Racing · control architecture bench"}),C.jsx("div",{className:"spacer"}),C.jsx("button",{className:"btn primary",onClick:()=>h(W=>!W),children:f?"Pause":"Run"}),C.jsx("button",{className:"btn",onClick:he,children:"Reset race"}),C.jsx("button",{className:"btn",onClick:ze,children:"New track"}),C.jsx("button",{className:"btn",onClick:b,children:"Fullscreen"}),C.jsx("button",{className:"btn"+(m?" primary":""),onClick:()=>k(W=>!W),children:"Formation"}),p==="top"&&C.jsx("button",{className:"btn"+(E?" primary":""),onClick:()=>P(W=>!W),children:"Follow swarm"}),C.jsx("button",{className:"btn learn",onClick:()=>L(!0),children:"How it works"}),C.jsxs("div",{className:"view-group",children:[C.jsx("button",{className:"btn"+(p==="top"?" primary":""),onClick:()=>g("top"),children:"2D"}),C.jsx("button",{className:"btn"+(p==="fpv"?" primary":""),onClick:()=>g("fpv"),children:"FPV"}),p==="fpv"&&C.jsx("select",{className:"drone-sel",value:x,onChange:W=>y(Number(W.target.value)),"aria-label":"FPV drone",children:Array.from({length:V.current.sim.drones},(W,ee)=>C.jsxs("option",{value:ee,children:["cam ",ee]},ee))})]}),C.jsxs("div",{className:"speed-group",children:["Speed",[1,2,4].map(W=>C.jsxs("button",{className:"btn"+(d===W?" primary":""),onClick:()=>v(W),children:["×",W]},W))]})]}),C.jsxs("div",{className:"main",children:[C.jsxs("div",{className:"canvas-wrap",ref:Q,style:B?{height:B}:void 0,children:[p==="top"?C.jsx(zp,{getWorld:()=>J.current,overlay:m,follow:E,terms:z}):C.jsx(eh,{getWorld:()=>J.current,droneId:x,overlay:m,terms:z}),C.jsxs("div",{className:"term-toggles",title:"velocity command arrows",children:[C.jsx("span",{className:"term-label",children:"arrows"}),Object.entries(Go).map(([W,ee])=>C.jsxs("button",{className:"chip"+(z[W]?" on":""),style:z[W]?{borderColor:ee,color:ee}:void 0,onClick:()=>ce(W),children:[C.jsx("span",{className:"term-dot",style:{background:ee}}),W]},W))]})]}),C.jsx("div",{className:"canvas-resize",onPointerDown:H,onPointerMove:oe,onPointerUp:Y,onPointerCancel:Y,title:"Drag to resize"}),C.jsx("div",{className:"whyline",children:wh(i)}),p==="fpv"&&C.jsx(nh,{getWorld:()=>J.current,droneId:x})]}),C.jsxs("div",{className:"side",children:[C.jsx(ih,{world:i}),C.jsx(xh,{world:i,onOpenSystem:F}),C.jsx(uh,{world:i}),C.jsx(hh,{getParams:()=>V.current,onApply:we}),C.jsxs("div",{className:"panel",children:[C.jsx("h3",{children:"System knobs"}),Uf.map(W=>C.jsx(oh,{stage:W,params:r,onPatch:Se},W))]})]}),j&&C.jsx(gh,{world:i,initialId:O,onClose:()=>L(!1)},O)]})}Bf.createRoot(document.getElementById("root")).render(C.jsx(zf.StrictMode,{children:C.jsx(kh,{})}));
