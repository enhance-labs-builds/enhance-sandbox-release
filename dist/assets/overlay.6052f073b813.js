var Pf=Object.create;var au=Object.defineProperty;var Tf=Object.getOwnPropertyDescriptor;var Nf=Object.getOwnPropertyNames;var _f=Object.getPrototypeOf,Lf=Object.prototype.hasOwnProperty;var kt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Rf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Nf(t))!Lf.call(e,o)&&o!==n&&au(e,o,{get:()=>t[o],enumerable:!(r=Tf(t,o))||r.enumerable});return e};var N=(e,t,n)=>(n=e!=null?Pf(_f(e)):{},Rf(au(n,"default",{value:e,enumerable:true}),e));var pi=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var be=(e,t,n)=>(pi(e,t,"read from private field"),t.get(e)),ut=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n);},ze=(e,t,n,r)=>(pi(e,t,"write to private field"),t.set(e,n),n);var jt=(e,t,n)=>(pi(e,t,"access private method"),n);var xu=kt(M=>{var br=Symbol.for("react.element"),Mf=Symbol.for("react.portal"),If=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),Ff=Symbol.for("react.provider"),Of=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),Hf=Symbol.for("react.suspense"),jf=Symbol.for("react.memo"),Af=Symbol.for("react.lazy"),su=Symbol.iterator;function Uf(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var du={isMounted:function(){return  false},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pu=Object.assign,fu={};function jn(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||du;}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState");};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate");};function mu(){}mu.prototype=jn.prototype;function mi(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||du;}var gi=mi.prototype=new mu;gi.constructor=mi;pu(gi,jn.prototype);gi.isPureReactComponent=true;var uu=Array.isArray,gu=Object.prototype.hasOwnProperty,hi={current:null},hu={key:true,ref:true,__self:true,__source:true};function yu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)gu.call(t,r)&&!hu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s;}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return {$$typeof:br,type:e,key:l,ref:i,props:o,_owner:hi.current}}function Bf(e,t){return {$$typeof:br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yi(e){return typeof e=="object"&&e!==null&&e.$$typeof===br}function Wf(e){var t={"=":"=0",":":"=2"};return "$"+e.replace(/[=:]/g,function(n){return t[n]})}var cu=/\/+/g;function fi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wf(""+e.key):t.toString(36)}function Lo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=false;if(e===null)i=true;else switch(l){case "string":case "number":i=true;break;case "object":switch(e.$$typeof){case br:case Mf:i=true;}}if(i)return i=e,o=o(i),e=r===""?"."+fi(i,0):r,uu(o)?(n="",e!=null&&(n=e.replace(cu,"$&/")+"/"),Lo(o,t,n,"",function(u){return u})):o!=null&&(yi(o)&&(o=Bf(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(cu,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",uu(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+fi(l,a);i+=Lo(l,t,n,s,o);}else if(s=Uf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+fi(l,a++),i+=Lo(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function _o(e,t,n){if(e==null)return e;var r=[],o=0;return Lo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Vf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n);},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n);}),e._status===-1&&(e._status=0,e._result=t);}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Ro={transition:null},Qf={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:hi};function vu(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:_o,forEach:function(e,t,n){_o(e,function(){t.apply(this,arguments);},n);},count:function(e){var t=0;return _o(e,function(){t++;}),t},toArray:function(e){return _o(e,function(t){return t})||[]},only:function(e){if(!yi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=jn;M.Fragment=If;M.Profiler=zf;M.PureComponent=mi;M.StrictMode=Df;M.Suspense=Hf;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qf;M.act=vu;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=hi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)gu.call(t,s)&&!hu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s]);}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a;}return {$$typeof:br,type:e.type,key:o,ref:l,props:r,_owner:i}};M.createContext=function(e){return e={$$typeof:Of,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ff,_context:e},e.Consumer=e};M.createElement=yu;M.createFactory=function(e){var t=yu.bind(null,e);return t.type=e,t};M.createRef=function(){return {current:null}};M.forwardRef=function(e){return {$$typeof:$f,render:e}};M.isValidElement=yi;M.lazy=function(e){return {$$typeof:Af,_payload:{_status:-1,_result:e},_init:Vf}};M.memo=function(e,t){return {$$typeof:jf,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Ro.transition;Ro.transition={};try{e();}finally{Ro.transition=t;}};M.unstable_act=vu;M.useCallback=function(e,t){return ve.current.useCallback(e,t)};M.useContext=function(e){return ve.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};M.useEffect=function(e,t){return ve.current.useEffect(e,t)};M.useId=function(){return ve.current.useId()};M.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ve.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};M.useRef=function(e){return ve.current.useRef(e)};M.useState=function(e){return ve.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ve.current.useTransition()};M.version="18.3.1";});var ct=kt((Oh,wu)=>{wu.exports=xu();});var Lu=kt(H=>{function Si(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Mo(o,t))e[r]=t,e[n]=o,n=r;else break e}}function qe(e){return e.length===0?null:e[0]}function Do(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,l=o>>>1;r<l;){var i=2*(r+1)-1,a=e[i],s=i+1,u=e[s];if(0>Mo(a,n))s<o&&0>Mo(u,a)?(e[r]=u,e[s]=n,r=s):(e[r]=a,e[i]=n,r=i);else if(s<o&&0>Mo(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function Mo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Su=performance,H.unstable_now=function(){return Su.now()}):(vi=Date,ku=vi.now(),H.unstable_now=function(){return vi.now()-ku});var Su,vi,ku,dt=[],At=[],Yf=1,Be=null,ce=3,zo=false,vn=false,Tr=false,bu=typeof setTimeout=="function"?setTimeout:null,Pu=typeof clearTimeout=="function"?clearTimeout:null,Cu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ki(e){for(var t=qe(At);t!==null;){if(t.callback===null)Do(At);else if(t.startTime<=e)Do(At),t.sortIndex=t.expirationTime,Si(dt,t);else break;t=qe(At);}}function Ci(e){if(Tr=false,ki(e),!vn)if(qe(dt)!==null)vn=true,bi(Ei);else {var t=qe(At);t!==null&&Pi(Ci,t.startTime-e);}}function Ei(e,t){vn=false,Tr&&(Tr=false,Pu(Nr),Nr=-1),zo=true;var n=ce;try{for(ki(t),Be=qe(dt);Be!==null&&(!(Be.expirationTime>t)||e&&!_u());){var r=Be.callback;if(typeof r=="function"){Be.callback=null,ce=Be.priorityLevel;var o=r(Be.expirationTime<=t);t=H.unstable_now(),typeof o=="function"?Be.callback=o:Be===qe(dt)&&Do(dt),ki(t);}else Do(dt);Be=qe(dt);}if(Be!==null)var l=!0;else {var i=qe(At);i!==null&&Pi(Ci,i.startTime-t),l=!1;}return l}finally{Be=null,ce=n,zo=false;}}var Fo=false,Io=null,Nr=-1,Tu=5,Nu=-1;function _u(){return !(H.unstable_now()-Nu<Tu)}function xi(){if(Io!==null){var e=H.unstable_now();Nu=e;var t=true;try{t=Io(!0,e);}finally{t?Pr():(Fo=false,Io=null);}}else Fo=false;}var Pr;typeof Cu=="function"?Pr=function(){Cu(xi);}:typeof MessageChannel<"u"?(wi=new MessageChannel,Eu=wi.port2,wi.port1.onmessage=xi,Pr=function(){Eu.postMessage(null);}):Pr=function(){bu(xi,0);};var wi,Eu;function bi(e){Io=e,Fo||(Fo=true,Pr());}function Pi(e,t){Nr=bu(function(){e(H.unstable_now());},t);}H.unstable_IdlePriority=5;H.unstable_ImmediatePriority=1;H.unstable_LowPriority=4;H.unstable_NormalPriority=3;H.unstable_Profiling=null;H.unstable_UserBlockingPriority=2;H.unstable_cancelCallback=function(e){e.callback=null;};H.unstable_continueExecution=function(){vn||zo||(vn=true,bi(Ei));};H.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tu=0<e?Math.floor(1e3/e):5;};H.unstable_getCurrentPriorityLevel=function(){return ce};H.unstable_getFirstCallbackNode=function(){return qe(dt)};H.unstable_next=function(e){switch(ce){case 1:case 2:case 3:var t=3;break;default:t=ce;}var n=ce;ce=t;try{return e()}finally{ce=n;}};H.unstable_pauseExecution=function(){};H.unstable_requestPaint=function(){};H.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3;}var n=ce;ce=e;try{return t()}finally{ce=n;}};H.unstable_scheduleCallback=function(e,t,n){var r=H.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3;}return o=n+o,e={id:Yf++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Si(At,e),qe(dt)===null&&e===qe(At)&&(Tr?(Pu(Nr),Nr=-1):Tr=true,Pi(Ci,n-r))):(e.sortIndex=o,Si(dt,e),vn||zo||(vn=true,bi(Ei))),e};H.unstable_shouldYield=_u;H.unstable_wrapCallback=function(e){var t=ce;return function(){var n=ce;ce=t;try{return e.apply(this,arguments)}finally{ce=n;}}};});var Mu=kt((Hh,Ru)=>{Ru.exports=Lu();});var Fp=kt(Ae=>{var Gf=ct(),He=Mu();function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return "Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hc=new Set,Kr={};function Rn(e,t){ar(e,t),ar(e+"Capture",t);}function ar(e,t){for(Kr[e]=t,e=0;e<t.length;e++)Hc.add(t[e]);}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xi=Object.prototype.hasOwnProperty,Xf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Iu={},Du={};function Kf(e){return Xi.call(Du,e)?true:Xi.call(Iu,e)?false:Xf.test(e)?Du[e]=true:(Iu[e]=true,false)}function Zf(e,t,n,r){if(n!==null&&n.type===0)return  false;switch(typeof t){case "function":case "symbol":return  true;case "boolean":return r?false:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return  false}}function Jf(e,t,n,r){if(t===null||typeof t>"u"||Zf(e,t,n,r))return  true;if(r)return  false;if(n!==null)switch(n.type){case 3:return !t;case 4:return t===false;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return  false}function Se(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i;}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new Se(e,0,false,e,null,false,false);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new Se(t,1,false,e[1],null,false,false);});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new Se(e,2,false,e.toLowerCase(),null,false,false);});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new Se(e,2,false,e,null,false,false);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new Se(e,3,false,e.toLowerCase(),null,false,false);});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new Se(e,3,true,e,null,false,false);});["capture","download"].forEach(function(e){ae[e]=new Se(e,4,false,e,null,false,false);});["cols","rows","size","span"].forEach(function(e){ae[e]=new Se(e,6,false,e,null,false,false);});["rowSpan","start"].forEach(function(e){ae[e]=new Se(e,5,false,e.toLowerCase(),null,false,false);});var Aa=/[\-:]([a-z])/g;function Ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Aa,Ua);ae[t]=new Se(t,1,false,e,null,false,false);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Aa,Ua);ae[t]=new Se(t,1,false,e,"http://www.w3.org/1999/xlink",false,false);});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Aa,Ua);ae[t]=new Se(t,1,false,e,"http://www.w3.org/XML/1998/namespace",false,false);});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new Se(e,1,false,e.toLowerCase(),null,false,false);});ae.xlinkHref=new Se("xlinkHref",1,false,"xlink:href","http://www.w3.org/1999/xlink",true,false);["src","href","action","formAction"].forEach(function(e){ae[e]=new Se(e,1,false,e.toLowerCase(),null,true,true);});function Ba(e,t,n,r){var o=ae.hasOwnProperty(t)?ae[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jf(t,n,o,r)&&(n=null),r||o===null?Kf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?false:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===true?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))));}var Mt=Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),Wa=Symbol.for("react.strict_mode"),Ki=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),Ac=Symbol.for("react.context"),Va=Symbol.for("react.forward_ref"),Zi=Symbol.for("react.suspense"),Ji=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy");var Uc=Symbol.for("react.offscreen");var zu=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Ti;function Or(e){if(Ti===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ti=t&&t[1]||"";}return `
`+Ti+e}var Ni=false;function _i(e,t){if(!e||Ni)return "";Ni=true;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[]);}catch(u){var r=u;}Reflect.construct(e,[],t);}else {try{t.call();}catch(u){r=u;}e.call(t.prototype);}else {try{throw Error()}catch(u){r=u;}e();}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Ni=false,Error.prepareStackTrace=n;}return (e=e?e.displayName||e.name:"")?Or(e):""}function qf(e){switch(e.tag){case 5:return Or(e.type);case 16:return Or("Lazy");case 13:return Or("Suspense");case 19:return Or("SuspenseList");case 0:case 2:case 15:return e=_i(e.type,false),e;case 11:return e=_i(e.type.render,false),e;case 1:return e=_i(e.type,true),e;default:return ""}}function qi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return "Fragment";case Bn:return "Portal";case Ki:return "Profiler";case Wa:return "StrictMode";case Zi:return "Suspense";case Ji:return "SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ac:return (e.displayName||"Context")+".Consumer";case jc:return (e._context.displayName||"Context")+".Provider";case Va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qa:return t=e.displayName||null,t!==null?t:qi(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return qi(e(t))}catch{}}return null}function em(e){var t=e.type;switch(e.tag){case 24:return "Cache";case 9:return (t.displayName||"Context")+".Consumer";case 10:return (t._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return "Fragment";case 5:return t;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return qi(t);case 8:return t===Wa?"StrictMode":"Mode";case 22:return "Offscreen";case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rn(e){switch(typeof e){case "boolean":case "number":case "string":case "undefined":return e;case "object":return e;default:return ""}}function Bc(e){var t=e.type;return (e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tm(e){var t=Bc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:true,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i);}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i;},stopTracking:function(){e._valueTracker=null,delete e[t];}}}}function $o(e){e._valueTracker||(e._valueTracker=tm(e));}function Wc(e){if(!e)return  false;var t=e._valueTracker;if(!t)return  true;var n=t.getValue(),r="";return e&&(r=Bc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),true):false}function pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null};}function Vc(e,t){t=t.checked,t!=null&&Ba(e,"checked",t,false);}function ta(e,t){Vc(e,t);var n=rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?na(e,t.type,n):t.hasOwnProperty("defaultValue")&&na(e,t.type,rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked);}function Ou(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t;}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n);}function na(e,t,n){(t!=="number"||pl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n));}var $r=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=true;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=true);}else {for(n=""+rn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=true,r&&(e[o].defaultSelected=true);return}t!==null||e[o].disabled||(t=e[o]);}t!==null&&(t.selected=true);}}function ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $u(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if($r(n)){if(1<n.length)throw Error(w(93));n=n[0];}t=n;}t==null&&(t=""),n=t;}e._wrapperState={initialValue:rn(n)};}function Qc(e,t){var n=rn(t.value),r=rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r);}function Hu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t);}function Yc(e){switch(e){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ho,Gc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)});}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else {for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild);}});function Zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t;}var Ar={animationIterationCount:true,aspectRatio:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true},nm=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){nm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e];});});function Xc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Kc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Xc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o;}}var rm=Y({menuitem:true},{area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true});function la(e,t){if(t){if(rm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function ia(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return  false;default:return  true}}var aa=null;function Ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,nr=null,rr=null;function ju(e){if(e=ho(e)){if(typeof sa!="function")throw Error(w(280));var t=e.stateNode;t&&(t=jl(t),sa(e.stateNode,e.type,t));}}function Zc(e){nr?rr?rr.push(e):rr=[e]:nr=e;}function Jc(){if(nr){var e=nr,t=rr;if(rr=nr=null,ju(e),t)for(e=0;e<t.length;e++)ju(t[e]);}}function qc(e,t){return e(t)}function ed(){}var Li=false;function td(e,t,n){if(Li)return e(t,n);Li=true;try{return qc(e,t,n)}finally{Li=false,(nr!==null||rr!==null)&&(ed(),Jc());}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=false;}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var ua=false;if(Nt)try{An={},Object.defineProperty(An,"passive",{get:function(){ua=!0;}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An);}catch{ua=false;}var An;function om(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u);}catch(f){this.onError(f);}}var Ur=false,fl=null,ml=false,ca=null,lm={onError:function(e){Ur=true,fl=e;}};function im(e,t,n,r,o,l,i,a,s){Ur=false,fl=null,om.apply(lm,arguments);}function am(e,t,n,r,o,l,i,a,s){if(im.apply(this,arguments),Ur){if(Ur){var u=fl;Ur=false,fl=null;}else throw Error(w(198));ml||(ml=true,ca=u);}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else {e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Au(e){if(Mn(e)!==e)throw Error(w(188))}function sm(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Au(o),e;if(l===r)return Au(o),t;l=l.sibling;}throw Error(w(188))}if(n.return!==r.return)n=o,r=l;else {for(var i=false,a=o.child;a;){if(a===n){i=true,n=o,r=l;break}if(a===r){i=true,r=o,n=l;break}a=a.sibling;}if(!i){for(a=l.child;a;){if(a===n){i=true,n=l,r=o;break}if(a===r){i=true,r=l,n=o;break}a=a.sibling;}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function rd(e){return e=sm(e),e!==null?od(e):null}function od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=od(e);if(t!==null)return t;e=e.sibling;}return null}var ld=He.unstable_scheduleCallback,Uu=He.unstable_cancelCallback,um=He.unstable_shouldYield,cm=He.unstable_requestPaint,J=He.unstable_now,dm=He.unstable_getCurrentPriorityLevel,Ga=He.unstable_ImmediatePriority,id=He.unstable_UserBlockingPriority,gl=He.unstable_NormalPriority,pm=He.unstable_LowPriority,ad=He.unstable_IdlePriority,Fl=null,gt=null;function fm(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Fl,e,void 0,(e.current.flags&128)===128);}catch{}}var ot=Math.clz32?Math.clz32:hm,mm=Math.log,gm=Math.LN2;function hm(e){return e>>>=0,e===0?32:31-(mm(e)/gm|0)|0}var jo=64,Ao=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Hr(a):(l&=i,l!==0&&(r=Hr(l)));}else i=n&~o,i!==0?r=Hr(i):l!==0&&(r=Hr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),o=1<<n,r|=e[n],t&=~o;return r}function ym(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return  -1;case 134217728:case 268435456:case 536870912:case 1073741824:return  -1;default:return  -1}}function vm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-ot(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=ym(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a;}}function da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sd(){var e=jo;return jo<<=1,!(jo&4194240)&&(jo=64),e}function Ri(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n;}function xm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ot(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l;}}function Xa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o;}}var O=0;function ud(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cd,Ka,dd,pd,fd,pa=false,Uo=[],Xt=null,Kt=null,Zt=null,qr=new Map,eo=new Map,Vt=[],wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bu(e,t){switch(e){case "focusin":case "focusout":Xt=null;break;case "dragenter":case "dragleave":Kt=null;break;case "mouseover":case "mouseout":Zt=null;break;case "pointerover":case "pointerout":qr.delete(t.pointerId);break;case "gotpointercapture":case "lostpointercapture":eo.delete(t.pointerId);}}function Lr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=ho(t),t!==null&&Ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sm(e,t,n,r,o){switch(t){case "focusin":return Xt=Lr(Xt,e,t,n,r,o),true;case "dragenter":return Kt=Lr(Kt,e,t,n,r,o),true;case "mouseover":return Zt=Lr(Zt,e,t,n,r,o),true;case "pointerover":var l=o.pointerId;return qr.set(l,Lr(qr.get(l)||null,e,t,n,r,o)),true;case "gotpointercapture":return l=o.pointerId,eo.set(l,Lr(eo.get(l)||null,e,t,n,r,o)),true}return  false}function md(e){var t=Sn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=nd(n),t!==null){e.blockedOn=t,fd(e.priority,function(){dd(n);});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null;}function nl(e){if(e.blockedOn!==null)return  false;for(var t=e.targetContainers;0<t.length;){var n=fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);aa=r,n.target.dispatchEvent(r),aa=null;}else return t=ho(n),t!==null&&Ka(t),e.blockedOn=n,false;t.shift();}return  true}function Wu(e,t,n){nl(e)&&n.delete(t);}function km(){pa=false,Xt!==null&&nl(Xt)&&(Xt=null),Kt!==null&&nl(Kt)&&(Kt=null),Zt!==null&&nl(Zt)&&(Zt=null),qr.forEach(Wu),eo.forEach(Wu);}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,pa||(pa=true,He.unstable_scheduleCallback(He.unstable_NormalPriority,km)));}function to(e){function t(o){return Rr(o,e)}if(0<Uo.length){Rr(Uo[0],e);for(var n=1;n<Uo.length;n++){var r=Uo[n];r.blockedOn===e&&(r.blockedOn=null);}}for(Xt!==null&&Rr(Xt,e),Kt!==null&&Rr(Kt,e),Zt!==null&&Rr(Zt,e),qr.forEach(t),eo.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)md(n),n.blockedOn===null&&Vt.shift();}var or=Mt.ReactCurrentBatchConfig,yl=true;function Cm(e,t,n,r){var o=O,l=or.transition;or.transition=null;try{O=1,Za(e,t,n,r);}finally{O=o,or.transition=l;}}function Em(e,t,n,r){var o=O,l=or.transition;or.transition=null;try{O=4,Za(e,t,n,r);}finally{O=o,or.transition=l;}}function Za(e,t,n,r){if(yl){var o=fa(e,t,n,r);if(o===null)$i(e,t,r,vl,n),Bu(e,r);else if(Sm(o,e,t,n,r))r.stopPropagation();else if(Bu(e,r),t&4&&-1<wm.indexOf(e)){for(;o!==null;){var l=ho(o);if(l!==null&&cd(l),l=fa(e,t,n,r),l===null&&$i(e,t,r,vl,n),l===o)break;o=l;}o!==null&&r.stopPropagation();}else $i(e,t,r,null,n);}}var vl=null;function fa(e,t,n,r){if(vl=null,e=Ya(r),e=Sn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nd(t),e!==null)return e;e=null;}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null;}else t!==e&&(e=null);return vl=e,null}function gd(e){switch(e){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;case "message":switch(dm()){case Ga:return 1;case id:return 4;case gl:case pm:return 16;case ad:return 536870912;default:return 16}default:return 16}}var Yt=null,Ja=null,rl=null;function hd(){if(rl)return rl;var e,t=Ja,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return rl=o.slice(e,1<r?1-r:void 0)}function ol(e){var t=e.keyCode;return "charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return  true}function Vu(){return  false}function je(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===false)?Bo:Vu,this.isPropagationStopped=Vu,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=true;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=false),this.isDefaultPrevented=Bo);},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=true),this.isPropagationStopped=Bo);},persist:function(){},isPersistent:Bo}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qa=je(mr),go=Y({},mr,{view:0,detail:0}),bm=je(go),Mi,Ii,Mr,Ol=Y({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return "movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(Mi=e.screenX-Mr.screenX,Ii=e.screenY-Mr.screenY):Ii=Mi=0,Mr=e),Mi)},movementY:function(e){return "movementY"in e?e.movementY:Ii}}),Qu=je(Ol),Pm=Y({},Ol,{dataTransfer:0}),Tm=je(Pm),Nm=Y({},go,{relatedTarget:0}),Di=je(Nm),_m=Y({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lm=je(_m),Rm=Y({},mr,{clipboardData:function(e){return "clipboardData"in e?e.clipboardData:window.clipboardData}}),Mm=je(Rm),Im=Y({},mr,{data:0}),Yu=je(Im),Dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Om(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fm[e])?!!t[e]:false}function es(){return Om}var $m=Y({},go,{key:function(e){if(e.key){var t=Dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hm=je($m),jm=Y({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=je(jm),Am=Y({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),Um=je(Am),Bm=Y({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=je(Bm),Vm=Y({},Ol,{deltaX:function(e){return "deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return "deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qm=je(Vm),Ym=[9,13,27,32],ts=Nt&&"CompositionEvent"in window,Br=null;Nt&&"documentMode"in document&&(Br=document.documentMode);var Gm=Nt&&"TextEvent"in window&&!Br,yd=Nt&&(!ts||Br&&8<Br&&11>=Br),Xu=" ",Ku=false;function vd(e,t){switch(e){case "keyup":return Ym.indexOf(t.keyCode)!==-1;case "keydown":return t.keyCode!==229;case "keypress":case "mousedown":case "focusout":return  true;default:return  false}}function xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=false;function Xm(e,t){switch(e){case "compositionend":return xd(t);case "keypress":return t.which!==32?null:(Ku=true,Xu);case "textInput":return e=t.data,e===Xu&&Ku?null:e;default:return null}}function Km(e,t){if(Vn)return e==="compositionend"||!ts&&vd(e,t)?(e=hd(),rl=Ja=Yt=null,Vn=false,e):null;switch(e){case "paste":return null;case "keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case "compositionend":return yd&&t.locale!=="ko"?null:t.data;default:return null}}var Zm={color:true,date:true,datetime:true,"datetime-local":true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zm[e.type]:t==="textarea"}function wd(e,t,n,r){Zc(r),t=xl(t,"onChange"),0<t.length&&(n=new qa("onChange","change",null,n,r),e.push({event:n,listeners:t}));}var Wr=null,no=null;function Jm(e){Rd(e,0);}function $l(e){var t=Gn(e);if(Wc(t))return e}function qm(e,t){if(e==="change")return t}var Sd=false;Nt&&(Nt?(Vo="oninput"in document,Vo||(zi=document.createElement("div"),zi.setAttribute("oninput","return;"),Vo=typeof zi.oninput=="function"),Wo=Vo):Wo=false,Sd=Wo&&(!document.documentMode||9<document.documentMode));var Wo,Vo,zi;function Ju(){Wr&&(Wr.detachEvent("onpropertychange",kd),no=Wr=null);}function kd(e){if(e.propertyName==="value"&&$l(no)){var t=[];wd(t,no,e,Ya(e)),td(Jm,t);}}function eg(e,t,n){e==="focusin"?(Ju(),Wr=t,no=n,Wr.attachEvent("onpropertychange",kd)):e==="focusout"&&Ju();}function tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(no)}function ng(e,t){if(e==="click")return $l(t)}function rg(e,t){if(e==="input"||e==="change")return $l(t)}function og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:og;function ro(e,t){if(it(e,t))return  true;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return  false;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return  false;for(r=0;r<n.length;r++){var o=n[r];if(!Xi.call(t,o)||!it(e[o],t[o]))return  false}return  true}function qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var n=qu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return {node:n,offset:t-e};e=r;}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode;}n=void 0;}n=qu(n);}}function Cd(e,t){return e&&t?e===t?true:e&&e.nodeType===3?false:t&&t.nodeType===3?Cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):false:false}function Ed(){for(var e=window,t=pl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string";}catch{n=false;}if(n)e=t.contentWindow;else break;t=pl(e.document);}return t}function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lg(e){var t=Ed(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cd(n.ownerDocument.documentElement,n)){if(r!==null&&ns(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ec(n,l);var i=ec(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)));}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top;}}var ig=Nt&&"documentMode"in document&&11>=document.documentMode,Qn=null,ma=null,Vr=null,ga=false;function tc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ga||Qn==null||Qn!==pl(r)||(r=Qn,"selectionStart"in r&&ns(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&ro(Vr,r)||(Vr=r,r=xl(ma,"onSelect"),0<r.length&&(t=new qa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)));}function Qo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},Fi={},bd={};Nt&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Hl(e){if(Fi[e])return Fi[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bd)return Fi[e]=t[n];return e}var Pd=Hl("animationend"),Td=Hl("animationiteration"),Nd=Hl("animationstart"),_d=Hl("transitionend"),Ld=new Map,nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){Ld.set(e,t),Rn(t,[e]);}for(Yo=0;Yo<nc.length;Yo++)Go=nc[Yo],rc=Go.toLowerCase(),oc=Go[0].toUpperCase()+Go.slice(1),ln(rc,"on"+oc);var Go,rc,oc,Yo;ln(Pd,"onAnimationEnd");ln(Td,"onAnimationIteration");ln(Nd,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(_d,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ag=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function lc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,am(r,t,void 0,e),e.currentTarget=null;}function Rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;lc(o,a,u),l=s;}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;lc(o,a,u),l=s;}}}if(ml)throw e=ca,ml=false,ca=null,e}function U(e,t){var n=t[wa];n===void 0&&(n=t[wa]=new Set);var r=e+"__bubble";n.has(r)||(Md(t,e,2,false),n.add(r));}function Oi(e,t,n){var r=0;t&&(r|=4),Md(n,e,r,t);}var Xo="_reactListening"+Math.random().toString(36).slice(2);function oo(e){if(!e[Xo]){e[Xo]=true,Hc.forEach(function(n){n!=="selectionchange"&&(ag.has(n)||Oi(n,false,e),Oi(n,true,e));});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xo]||(t[Xo]=true,Oi("selectionchange",false,t));}}function Md(e,t,n,r){switch(gd(t)){case 1:var o=Cm;break;case 4:o=Em;break;default:o=Za;}n=o.bind(null,t,n,e),o=void 0,!ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=true),r?o!==void 0?e.addEventListener(t,n,{capture:true,passive:o}):e.addEventListener(t,n,true):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,false);}function $i(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return;}for(;a!==null;){if(i=Sn(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode;}}r=r.return;}td(function(){var u=l,f=Ya(n),m=[];e:{var g=Ld.get(e);if(g!==void 0){var v=qa,k=e;switch(e){case "keypress":if(ol(n)===0)break e;case "keydown":case "keyup":v=Hm;break;case "focusin":k="focus",v=Di;break;case "focusout":k="blur",v=Di;break;case "beforeblur":case "afterblur":v=Di;break;case "click":if(n.button===2)break e;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":v=Qu;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":v=Tm;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":v=Um;break;case Pd:case Td:case Nd:v=Lm;break;case _d:v=Wm;break;case "scroll":v=bm;break;case "wheel":v=Qm;break;case "copy":case "cut":case "paste":v=Mm;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":v=Gu;}var x=(t&4)!==0,_=!x&&e==="scroll",d=x?g!==null?g+"Capture":null:g;x=[];for(var c=u,p;c!==null;){p=c;var h=p.stateNode;if(p.tag===5&&h!==null&&(p=h,d!==null&&(h=Jr(c,d),h!=null&&x.push(lo(c,h,p)))),_)break;c=c.return;}0<x.length&&(g=new v(g,k,null,n,f),m.push({event:g,listeners:x}));}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==aa&&(k=n.relatedTarget||n.fromElement)&&(Sn(k)||k[_t]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=u,k=k?Sn(k):null,k!==null&&(_=Mn(k),k!==_||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=u),v!==k)){if(x=Qu,h="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=Gu,h="onPointerLeave",d="onPointerEnter",c="pointer"),_=v==null?g:Gn(v),p=k==null?g:Gn(k),g=new x(h,c+"leave",v,n,f),g.target=_,g.relatedTarget=p,h=null,Sn(f)===u&&(x=new x(d,c+"enter",k,n,f),x.target=p,x.relatedTarget=_,h=x),_=h,v&&k)t:{for(x=v,d=k,c=0,p=x;p;p=Un(p))c++;for(p=0,h=d;h;h=Un(h))p++;for(;0<c-p;)x=Un(x),c--;for(;0<p-c;)d=Un(d),p--;for(;c--;){if(x===d||d!==null&&x===d.alternate)break t;x=Un(x),d=Un(d);}x=null;}else x=null;v!==null&&ic(m,g,v,x,false),k!==null&&_!==null&&ic(m,_,k,x,true);}}e:{if(g=u?Gn(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var E=qm;else if(Zu(g))if(Sd)E=rg;else {E=tg;var S=eg;}else (v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=ng);if(E&&(E=E(e,u))){wd(m,E,n,f);break e}S&&S(e,g,u),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&na(g,"number",g.value);}switch(S=u?Gn(u):window,e){case "focusin":(Zu(S)||S.contentEditable==="true")&&(Qn=S,ma=u,Vr=null);break;case "focusout":Vr=ma=Qn=null;break;case "mousedown":ga=true;break;case "contextmenu":case "mouseup":case "dragend":ga=false,tc(m,n,f);break;case "selectionchange":if(ig)break;case "keydown":case "keyup":tc(m,n,f);}var C;if(ts)e:{switch(e){case "compositionstart":var b="onCompositionStart";break e;case "compositionend":b="onCompositionEnd";break e;case "compositionupdate":b="onCompositionUpdate";break e}b=void 0;}else Vn?vd(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(yd&&n.locale!=="ko"&&(Vn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Vn&&(C=hd()):(Yt=f,Ja="value"in Yt?Yt.value:Yt.textContent,Vn=true)),S=xl(u,b),0<S.length&&(b=new Yu(b,e,null,n,f),m.push({event:b,listeners:S}),C?b.data=C:(C=xd(n),C!==null&&(b.data=C)))),(C=Gm?Xm(e,n):Km(e,n))&&(u=xl(u,"onBeforeInput"),0<u.length&&(f=new Yu("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=C));}Rd(m,t);});}function lo(e,t,n){return {instance:e,listener:t,currentTarget:n}}function xl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Jr(e,n),l!=null&&r.unshift(lo(e,l,o)),l=Jr(e,t),l!=null&&r.push(lo(e,l,o))),e=e.return;}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ic(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Jr(n,l),s!=null&&i.unshift(lo(n,s,a))):o||(s=Jr(n,l),s!=null&&i.push(lo(n,s,a)))),n=n.return;}i.length!==0&&e.push({event:t,listeners:i});}var sg=/\r\n?/g,ug=/\u0000|\uFFFD/g;function ac(e){return (typeof e=="string"?e:""+e).replace(sg,`
`).replace(ug,"")}function Ko(e,t,n){if(t=ac(t),ac(e)!==t&&n)throw Error(w(425))}function wl(){}var ha=null,ya=null;function va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xa=typeof setTimeout=="function"?setTimeout:void 0,cg=typeof clearTimeout=="function"?clearTimeout:void 0,sc=typeof Promise=="function"?Promise:void 0,dg=typeof queueMicrotask=="function"?queueMicrotask:typeof sc<"u"?function(e){return sc.resolve(null).then(e).catch(pg)}:xa;function pg(e){setTimeout(function(){throw e});}function Hi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),to(t);return}r--;}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o;}while(n);to(t);}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--;}else n==="/$"&&t++;}e=e.previousSibling;}return null}var gr=Math.random().toString(36).slice(2),mt="__reactFiber$"+gr,io="__reactProps$"+gr,_t="__reactContainer$"+gr,wa="__reactEvents$"+gr,fg="__reactListeners$"+gr,mg="__reactHandles$"+gr;function Sn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uc(e);e!==null;){if(n=e[mt])return n;e=uc(e);}return t}e=n,n=e.parentNode;}return null}function ho(e){return e=e[mt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function jl(e){return e[io]||null}var Sa=[],Xn=-1;function an(e){return {current:e}}function B(e){0>Xn||(e.current=Sa[Xn],Sa[Xn]=null,Xn--);}function j(e,t){Xn++,Sa[Xn]=e.current,e.current=t;}var on={},me=an(on),Ne=an(false),Pn=on;function sr(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _e(e){return e=e.childContextTypes,e!=null}function Sl(){B(Ne),B(me);}function cc(e,t,n){if(me.current!==on)throw Error(w(168));j(me,t),j(Ne,n);}function Id(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,em(e)||"Unknown",o));return Y({},n,r)}function kl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,Pn=me.current,j(me,e),j(Ne,Ne.current),true}function dc(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Id(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,B(Ne),B(me),j(me,e)):B(Ne),j(Ne,n);}var Et=null,Al=false,ji=false;function Dd(e){Et===null?Et=[e]:Et.push(e);}function gg(e){Al=true,Dd(e);}function sn(){if(!ji&&Et!==null){ji=true;var e=0,t=O;try{var n=Et;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,Al=!1;}catch(o){throw Et!==null&&(Et=Et.slice(e+1)),ld(Ga,sn),o}finally{O=t,ji=false;}}return null}var Kn=[],Zn=0,Cl=null,El=0,We=[],Ve=0,Tn=null,bt=1,Pt="";function xn(e,t){Kn[Zn++]=El,Kn[Zn++]=Cl,Cl=e,El=t;}function zd(e,t,n){We[Ve++]=bt,We[Ve++]=Pt,We[Ve++]=Tn,Tn=e;var r=bt;e=Pt;var o=32-ot(r)-1;r&=~(1<<o),n+=1;var l=32-ot(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,bt=1<<32-ot(t)+o|n<<o|r,Pt=l+e;}else bt=1<<l|n<<o|r,Pt=e;}function rs(e){e.return!==null&&(xn(e,1),zd(e,1,0));}function os(e){for(;e===Cl;)Cl=Kn[--Zn],Kn[Zn]=null,El=Kn[--Zn],Kn[Zn]=null;for(;e===Tn;)Tn=We[--Ve],We[Ve]=null,Pt=We[--Ve],We[Ve]=null,bt=We[--Ve],We[Ve]=null;}var $e=null,Oe=null,W=false,rt=null;function Fd(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n);}function pc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Oe=Jt(t.firstChild),true):false;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Oe=null,true):false;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:bt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Oe=null,true):false;default:return  false}}function ka(e){return (e.mode&1)!==0&&(e.flags&128)===0}function Ca(e){if(W){var t=Oe;if(t){var n=t;if(!pc(e,t)){if(ka(e))throw Error(w(418));t=Jt(n.nextSibling);var r=$e;t&&pc(e,t)?Fd(r,n):(e.flags=e.flags&-4097|2,W=false,$e=e);}}else {if(ka(e))throw Error(w(418));e.flags=e.flags&-4097|2,W=false,$e=e;}}}function fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e;}function Zo(e){if(e!==$e)return  false;if(!W)return fc(e),W=true,false;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!va(e.type,e.memoizedProps)),t&&(t=Oe)){if(ka(e))throw Od(),Error(w(418));for(;t;)Fd(e,t),t=Jt(t.nextSibling);}if(fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Jt(e.nextSibling);break e}t--;}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;}e=e.nextSibling;}Oe=null;}}else Oe=$e?Jt(e.stateNode.nextSibling):null;return  true}function Od(){for(var e=Oe;e;)e=Jt(e.nextSibling);}function ur(){Oe=$e=null,W=false;}function ls(e){rt===null?rt=[e]:rt.push(e);}var hg=Mt.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode;}if(!r)throw Error(w(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i;},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Jo(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mc(e){var t=e._init;return t(e._payload)}function $d(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c);}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=nn(d,c),d.index=0,d.sibling=null,d}function l(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,h){return c===null||c.tag!==6?(c=Yi(p,d.mode,h),c.return=d,c):(c=o(c,p),c.return=d,c)}function s(d,c,p,h){var E=p.type;return E===Wn?f(d,c,p.props.children,h,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bt&&mc(E)===c.type)?(h=o(c,p.props),h.ref=Ir(d,c,p),h.return=d,h):(h=dl(p.type,p.key,p.props,null,d.mode,h),h.ref=Ir(d,c,p),h.return=d,h)}function u(d,c,p,h){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Gi(p,d.mode,h),c.return=d,c):(c=o(c,p.children||[]),c.return=d,c)}function f(d,c,p,h,E){return c===null||c.tag!==7?(c=bn(p,d.mode,h,E),c.return=d,c):(c=o(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Yi(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Oo:return p=dl(c.type,c.key,c.props,null,d.mode,p),p.ref=Ir(d,null,c),p.return=d,p;case Bn:return c=Gi(c,d.mode,p),c.return=d,c;case Bt:var h=c._init;return m(d,h(c._payload),p)}if($r(c)||_r(c))return c=bn(c,d.mode,p,null),c.return=d,c;Jo(d,c);}return null}function g(d,c,p,h){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(d,c,""+p,h);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oo:return p.key===E?s(d,c,p,h):null;case Bn:return p.key===E?u(d,c,p,h):null;case Bt:return E=p._init,g(d,c,E(p._payload),h)}if($r(p)||_r(p))return E!==null?null:f(d,c,p,h,null);Jo(d,p);}return null}function v(d,c,p,h,E){if(typeof h=="string"&&h!==""||typeof h=="number")return d=d.get(p)||null,a(c,d,""+h,E);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Oo:return d=d.get(h.key===null?p:h.key)||null,s(c,d,h,E);case Bn:return d=d.get(h.key===null?p:h.key)||null,u(c,d,h,E);case Bt:var S=h._init;return v(d,c,p,S(h._payload),E)}if($r(h)||_r(h))return d=d.get(p)||null,f(c,d,h,E,null);Jo(c,h);}return null}function k(d,c,p,h){for(var E=null,S=null,C=c,b=c=0,R=null;C!==null&&b<p.length;b++){C.index>b?(R=C,C=null):R=C.sibling;var y=g(d,C,p[b],h);if(y===null){C===null&&(C=R);break}e&&C&&y.alternate===null&&t(d,C),c=l(y,c,b),S===null?E=y:S.sibling=y,S=y,C=R;}if(b===p.length)return n(d,C),W&&xn(d,b),E;if(C===null){for(;b<p.length;b++)C=m(d,p[b],h),C!==null&&(c=l(C,c,b),S===null?E=C:S.sibling=C,S=C);return W&&xn(d,b),E}for(C=r(d,C);b<p.length;b++)R=v(C,d,b,p[b],h),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?b:R.key),c=l(R,c,b),S===null?E=R:S.sibling=R,S=R);return e&&C.forEach(function(P){return t(d,P)}),W&&xn(d,b),E}function x(d,c,p,h){var E=_r(p);if(typeof E!="function")throw Error(w(150));if(p=E.call(p),p==null)throw Error(w(151));for(var S=E=null,C=c,b=c=0,R=null,y=p.next();C!==null&&!y.done;b++,y=p.next()){C.index>b?(R=C,C=null):R=C.sibling;var P=g(d,C,y.value,h);if(P===null){C===null&&(C=R);break}e&&C&&P.alternate===null&&t(d,C),c=l(P,c,b),S===null?E=P:S.sibling=P,S=P,C=R;}if(y.done)return n(d,C),W&&xn(d,b),E;if(C===null){for(;!y.done;b++,y=p.next())y=m(d,y.value,h),y!==null&&(c=l(y,c,b),S===null?E=y:S.sibling=y,S=y);return W&&xn(d,b),E}for(C=r(d,C);!y.done;b++,y=p.next())y=v(C,d,b,y.value,h),y!==null&&(e&&y.alternate!==null&&C.delete(y.key===null?b:y.key),c=l(y,c,b),S===null?E=y:S.sibling=y,S=y);return e&&C.forEach(function(A){return t(d,A)}),W&&xn(d,b),E}function _(d,c,p,h){if(typeof p=="object"&&p!==null&&p.type===Wn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Oo:e:{for(var E=p.key,S=c;S!==null;){if(S.key===E){if(E=p.type,E===Wn){if(S.tag===7){n(d,S.sibling),c=o(S,p.props.children),c.return=d,d=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bt&&mc(E)===S.type){n(d,S.sibling),c=o(S,p.props),c.ref=Ir(d,S,p),c.return=d,d=c;break e}n(d,S);break}else t(d,S);S=S.sibling;}p.type===Wn?(c=bn(p.props.children,d.mode,h,p.key),c.return=d,d=c):(h=dl(p.type,p.key,p.props,null,d.mode,h),h.ref=Ir(d,c,p),h.return=d,d=h);}return i(d);case Bn:e:{for(S=p.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=o(c,p.children||[]),c.return=d,d=c;break e}else {n(d,c);break}else t(d,c);c=c.sibling;}c=Gi(p,d.mode,h),c.return=d,d=c;}return i(d);case Bt:return S=p._init,_(d,c,S(p._payload),h)}if($r(p))return k(d,c,p,h);if(_r(p))return x(d,c,p,h);Jo(d,p);}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,p),c.return=d,d=c):(n(d,c),c=Yi(p,d.mode,h),c.return=d,d=c),i(d)):n(d,c)}return _}var cr=$d(true),Hd=$d(false),bl=an(null),Pl=null,Jn=null,is=null;function as(){is=Jn=Pl=null;}function ss(e){var t=bl.current;B(bl),e._currentValue=t;}function Ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return;}}function lr(e,t){Pl=e,is=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=true),e.firstContext=null);}function Ge(e){var t=e._currentValue;if(is!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(Pl===null)throw Error(w(308));Jn=e,Pl.dependencies={lanes:0,firstContext:e};}else Jn=Jn.next=e;return t}var kn=null;function us(e){kn===null?kn=[e]:kn.push(e);}function jd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,us(t)):(n.next=o.next,o.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=false;function cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}function Ad(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects});}function Tt(e,t){return {eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Lt(e,n)}return o=r.interleaved,o===null?(t.next=t,us(r)):(t.next=o.next,o.next=t),r.interleaved=t,Lt(e,n)}function ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n);}}function gc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next;}while(n!==null);l===null?o=l=t:l=l.next=t;}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t;}function Tl(e,t,n,r){var o=e.updateQueue;Wt=false;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==i&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s));}if(l!==null){var m=o.baseState;i=0,f=u=s=null,a=l;do{var g=a.lane,v=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,x=a;switch(g=t,v=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){m=k.call(v,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,g=typeof k=="function"?k.call(v,m,g):k,g==null)break e;m=Y({},m,g);break e;case 2:Wt=true;}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a));}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,s=m):f=f.next=v,i|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null;}}while(true);if(f===null&&(s=m),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);_n|=i,e.lanes=i,e.memoizedState=m;}}function hc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r);}}}var yo={},ht=an(yo),ao=an(yo),so=an(yo);function Cn(e){if(e===yo)throw Error(w(174));return e}function ds(e,t){switch(j(so,t),j(ao,e),j(ht,yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oa(t,e);}B(ht),j(ht,t);}function dr(){B(ht),B(ao),B(so);}function Ud(e){Cn(so.current);var t=Cn(ht.current),n=oa(t,e.type);t!==n&&(j(ao,e),j(ht,n));}function ps(e){ao.current===e&&(B(ht),B(ao));}var V=an(0);function Nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return;}t.sibling.return=t.return,t=t.sibling;}return null}var Ai=[];function fs(){for(var e=0;e<Ai.length;e++)Ai[e]._workInProgressVersionPrimary=null;Ai.length=0;}var il=Mt.ReactCurrentDispatcher,Ui=Mt.ReactCurrentBatchConfig,Nn=0,Q=null,te=null,re=null,_l=false,Qr=false,uo=0,yg=0;function de(){throw Error(w(321))}function ms(e,t){if(t===null)return  false;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return  false;return  true}function gs(e,t,n,r,o,l){if(Nn=l,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,il.current=e===null||e.memoizedState===null?Sg:kg,e=n(r,o),Qr){l=0;do{if(Qr=false,uo=0,25<=l)throw Error(w(301));l+=1,re=te=null,t.updateQueue=null,il.current=Cg,e=n(r,o);}while(Qr)}if(il.current=Ll,t=te!==null&&te.next!==null,Nn=0,re=te=Q=null,_l=false,t)throw Error(w(300));return e}function hs(){var e=uo!==0;return uo=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=e:re=re.next=e,re}function Xe(){if(te===null){var e=Q.alternate;e=e!==null?e.memoizedState:null;}else e=te.next;var t=re===null?Q.memoizedState:re.next;if(t!==null)re=t,te=e;else {if(e===null)throw Error(w(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Q.memoizedState=re=e:re=re.next=e;}return re}function co(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Xe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i;}r.baseQueue=o=l,n.pending=null;}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var f=u.lane;if((Nn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else {var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,i=r):s=s.next=m,Q.lanes|=f,_n|=f;}u=u.next;}while(u!==null&&u!==l);s===null?i=r:s.next=a,it(r,t.memoizedState)||(Te=true),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r;}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Q.lanes|=l,_n|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return [t.memoizedState,n.dispatch]}function Wi(e){var t=Xe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);it(l,t.memoizedState)||(Te=true),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l;}return [l,r]}function Bd(){}function Wd(e,t){var n=Q,r=Xe(),o=t(),l=!it(r.memoizedState,o);if(l&&(r.memoizedState=o,Te=true),r=r.queue,ys(Yd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,po(9,Qd.bind(null,n,r,o,t),void 0,null),oe===null)throw Error(w(349));Nn&30||Vd(n,t,o);}return o}function Vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e));}function Qd(e,t,n,r){t.value=n,t.getSnapshot=r,Gd(t)&&Xd(e);}function Yd(e,t,n){return n(function(){Gd(t)&&Xd(e);})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return !it(e,n)}catch{return  true}}function Xd(e){var t=Lt(e,1);t!==null&&lt(t,e,1,-1);}function yc(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:e},t.queue=e,e=e.dispatch=wg.bind(null,Q,e),[t.memoizedState,e]}function po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kd(){return Xe().memoizedState}function al(e,t,n,r){var o=ft();Q.flags|=e,o.memoizedState=po(1|t,n,void 0,r===void 0?null:r);}function Ul(e,t,n,r){var o=Xe();r=r===void 0?null:r;var l=void 0;if(te!==null){var i=te.memoizedState;if(l=i.destroy,r!==null&&ms(r,i.deps)){o.memoizedState=po(t,n,l,r);return}}Q.flags|=e,o.memoizedState=po(1|t,n,l,r);}function vc(e,t){return al(8390656,8,e,t)}function ys(e,t){return Ul(2048,8,e,t)}function Zd(e,t){return Ul(4,2,e,t)}function Jd(e,t){return Ul(4,4,e,t)}function qd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null);};if(t!=null)return e=e(),t.current=e,function(){t.current=null;}}function ep(e,t,n){return n=n!=null?n.concat([e]):null,Ul(4,4,qd.bind(null,t,e),n)}function vs(){}function tp(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ms(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function np(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ms(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rp(e,t,n){return Nn&21?(it(n,t)||(n=sd(),Q.lanes|=n,_n|=n,e.baseState=true),t):(e.baseState&&(e.baseState=false,Te=true),e.memoizedState=n)}function vg(e,t){var n=O;O=n!==0&&4>n?n:4,e(true);var r=Ui.transition;Ui.transition={};try{e(!1),t();}finally{O=n,Ui.transition=r;}}function op(){return Xe().memoizedState}function xg(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:false,eagerState:null,next:null},lp(e))ip(t,n);else if(n=jd(e,t,n,r),n!==null){var o=we();lt(n,e,r,o),ap(n,t,r);}}function wg(e,t,n){var r=tn(e),o={lane:r,action:n,hasEagerState:false,eagerState:null,next:null};if(lp(e))ip(t,o);else {var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,it(a,i)){var s=t.interleaved;s===null?(o.next=o,us(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=jd(e,t,o,r),n!==null&&(o=we(),lt(n,e,r,o),ap(n,t,r));}}function lp(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function ip(e,t){Qr=_l=true;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t;}function ap(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n);}}var Ll={readContext:Ge,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:false},Sg={readContext:Ge,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:vc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,al(4194308,4,qd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xg.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:yc,useDebugValue:vs,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=yc(false),t=e[0];return e=vg.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=ft();if(W){if(n===void 0)throw Error(w(407));n=n();}else {if(n=t(),oe===null)throw Error(w(349));Nn&30||Vd(r,t,n);}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,vc(Yd.bind(null,r,l,e),[e]),r.flags|=2048,po(9,Qd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=ft(),t=oe.identifierPrefix;if(W){var n=Pt,r=bt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=uo++,0<n&&(t+="H"+n.toString(32)),t+=":";}else n=yg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:false},kg={readContext:Ge,useCallback:tp,useContext:Ge,useEffect:ys,useImperativeHandle:ep,useInsertionEffect:Zd,useLayoutEffect:Jd,useMemo:np,useReducer:Bi,useRef:Kd,useState:function(){return Bi(co)},useDebugValue:vs,useDeferredValue:function(e){var t=Xe();return rp(t,te.memoizedState,e)},useTransition:function(){var e=Bi(co)[0],t=Xe().memoizedState;return [e,t]},useMutableSource:Bd,useSyncExternalStore:Wd,useId:op,unstable_isNewReconciler:false},Cg={readContext:Ge,useCallback:tp,useContext:Ge,useEffect:ys,useImperativeHandle:ep,useInsertionEffect:Zd,useLayoutEffect:Jd,useMemo:np,useReducer:Wi,useRef:Kd,useState:function(){return Wi(co)},useDebugValue:vs,useDeferredValue:function(e){var t=Xe();return te===null?t.memoizedState=e:rp(t,te.memoizedState,e)},useTransition:function(){var e=Wi(co)[0],t=Xe().memoizedState;return [e,t]},useMutableSource:Bd,useSyncExternalStore:Wd,useId:op,unstable_isNewReconciler:false};function tt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ba(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n);}var Bl={isMounted:function(e){return (e=e._reactInternals)?Mn(e)===e:false},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=tn(e),l=Tt(r,o);l.payload=t,n!=null&&(l.callback=n),t=qt(e,l,o),t!==null&&(lt(t,e,o,r),ll(t,e,o));},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=tn(e),l=Tt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=qt(e,l,o),t!==null&&(lt(t,e,o,r),ll(t,e,o));},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=tn(e),o=Tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=qt(e,o,r),t!==null&&(lt(t,e,r,n),ll(t,e,r));}};function xc(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ro(n,r)||!ro(o,l):true}function sp(e,t,n){var r=false,o=on,l=t.contextType;return typeof l=="object"&&l!==null?l=Ge(l):(o=_e(t)?Pn:me.current,r=t.contextTypes,l=(r=r!=null)?sr(e,o):on),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function wc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bl.enqueueReplaceState(t,t.state,null);}function Pa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},cs(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ge(l):(l=_e(t)?Pn:me.current,o.context=sr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ba(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Bl.enqueueReplaceState(o,o.state,null),Tl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308);}function pr(e,t){try{var n="",r=t;do n+=qf(r),r=r.return;while(r);var o=n;}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack;}return {value:e,source:t,stack:o,digest:null}}function Vi(e,t,n){return {value:e,source:null,stack:n??null,digest:t??null}}function Ta(e,t){try{console.error(t.value);}catch(n){setTimeout(function(){throw n});}}var Eg=typeof WeakMap=="function"?WeakMap:Map;function up(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ml||(Ml=true,Oa=r),Ta(e,t);},n}function cp(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ta(e,t);};}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ta(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""});}),n}function Sc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Eg;var o=new Set;r.set(t,o);}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=$g.bind(null,e,t,n),t.then(e,e));}function kc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:true),t)return e;e=e.return;}while(e!==null);return null}function Cc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e)}var bg=Mt.ReactCurrentOwner,Te=false;function xe(e,t,n,r){t.child=e===null?Hd(t,null,n,r):cr(t,e.child,n,r);}function Ec(e,t,n,r,o){n=n.render;var l=t.ref;return lr(t,o),r=gs(e,t,n,r,l,o),n=hs(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(W&&n&&rs(t),t.flags|=1,xe(e,t,r,o),t.child)}function bc(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ps(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,dp(e,t,l,r,o)):(e=dl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(i,r)&&e.ref===t.ref)return Rt(e,t,o)}return t.flags|=1,e=nn(l,r),e.ref=t.ref,e.return=t,t.child=e}function dp(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ro(l,r)&&e.ref===t.ref)if(Te=false,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Te=true);else return t.lanes=e.lanes,Rt(e,t,o)}return Na(e,t,n,r,o)}function pp(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(er,Fe),Fe|=n;else {if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j(er,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,j(er,Fe),Fe|=r;}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,j(er,Fe),Fe|=r;return xe(e,t,o,n),t.child}function fp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152);}function Na(e,t,n,r,o){var l=_e(n)?Pn:me.current;return l=sr(t,l),lr(t,o),n=gs(e,t,n,r,l,o),r=hs(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(W&&r&&rs(t),t.flags|=1,xe(e,t,n,o),t.child)}function Pc(e,t,n,r,o){if(_e(n)){var l=true;kl(t);}else l=false;if(lr(t,o),t.stateNode===null)sl(e,t),sp(t,n,r),Pa(t,n,r,o),r=true;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=_e(n)?Pn:me.current,u=sr(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&wc(t,i,r,u),Wt=false;var g=t.memoizedState;i.state=g,Tl(t,r,i,o),s=t.memoizedState,a!==r||g!==s||Ne.current||Wt?(typeof f=="function"&&(ba(t,n,f,r),s=t.memoizedState),(a=Wt||xc(t,n,a,r,g,s,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=false);}else {i=t.stateNode,Ad(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:tt(t.type,a),i.props=u,m=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ge(s):(s=_e(n)?Pn:me.current,s=sr(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||g!==s)&&wc(t,i,r,s),Wt=false,g=t.memoizedState,i.state=g,Tl(t,r,i,o);var k=t.memoizedState;a!==m||g!==k||Ne.current||Wt?(typeof v=="function"&&(ba(t,n,v,r),k=t.memoizedState),(u=Wt||xc(t,n,u,r,g,k,s)||false)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=false);}return _a(e,t,n,r,l,o)}function _a(e,t,n,r,o,l){fp(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&dc(t,n,false),Rt(e,t,l);r=t.stateNode,bg.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=cr(t,e.child,null,l),t.child=cr(t,null,a,l)):xe(e,t,a,l),t.memoizedState=r.state,o&&dc(t,n,true),t.child}function mp(e){var t=e.stateNode;t.pendingContext?cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cc(e,t.context,false),ds(e,t.containerInfo);}function Tc(e,t,n,r,o){return ur(),ls(o),t.flags|=256,xe(e,t,n,r),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return {baseLanes:e,cachePool:null,transitions:null}}function gp(e,t,n){var r=t.pendingProps,o=V.current,l=false,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?false:(o&2)!==0),a?(l=true,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),j(V,o&1),e===null)return Ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ql(i,r,0,null),e=bn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ra(n),t.memoizedState=La,e):xs(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Pg(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return !(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=nn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=nn(a,l):(l=bn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ra(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=La,r}return l=e.child,e=l.sibling,r=nn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xs(e,t){return t=Ql({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qo(e,t,n,r){return r!==null&&ls(r),cr(t,e.child,null,n),e=xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pg(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Vi(Error(w(422))),qo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ql({mode:"visible",children:r.children},o,0,null),l=bn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&cr(t,e.child,null,i),t.child.memoizedState=Ra(i),t.memoizedState=La,l);if(!(t.mode&1))return qo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(w(419)),r=Vi(l,r,void 0),qo(e,t,i,r)}if(a=(i&e.childLanes)!==0,Te||a){if(r=oe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0;}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Lt(e,o),lt(r,e,o,-1));}return bs(),r=Vi(Error(w(421))),qo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hg.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Oe=Jt(o.nextSibling),$e=t,W=true,rt=null,e!==null&&(We[Ve++]=bt,We[Ve++]=Pt,We[Ve++]=Tn,bt=e.id,Pt=e.overflow,Tn=t),t=xs(t,r.children),t.flags|=4096,t)}function Nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ea(e.return,t,n);}function Qi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o);}function hp(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(xe(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else {if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nc(e,n,t);else if(e.tag===19)Nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return;}e.sibling.return=e.return,e=e.sibling;}r&=1;}if(j(V,r),!(t.mode&1))t.memoizedState=null;else switch(o){case "forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Nl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Qi(t,false,o,n,l);break;case "backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Nl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e;}Qi(t,true,n,null,l);break;case "together":Qi(t,false,null,null,void 0);break;default:t.memoizedState=null;}return t.child}function sl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2);}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null;}return t.child}function Tg(e,t,n){switch(t.tag){case 3:mp(t),ur();break;case 5:Ud(t);break;case 1:_e(t.type)&&kl(t);break;case 4:ds(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;j(bl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?gp(e,t,n):(j(V,V.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);j(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hp(e,t,n);t.flags|=128;}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),j(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,pp(e,t,n)}return Rt(e,t,n)}var yp,Ma,vp,xp;yp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return;}n.sibling.return=n.return,n=n.sibling;}};Ma=function(){};vp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Cn(ht.current);var l=null;switch(n){case "input":o=ea(e,o),r=ea(e,r),l=[];break;case "select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case "textarea":o=ra(e,o),r=ra(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wl);}la(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="");}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o?.[u],r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i]);}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&U("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s));}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4);}};xp=function(e,t,n,r){n!==r&&(t.flags|=4);};function Dr(e,t){if(!W)switch(e.tailMode){case "hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case "collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ng(e,t,n){var r=t.pendingProps;switch(os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return _e(t.type)&&Sl(),pe(t),null;case 3:return r=t.stateNode,dr(),B(Ne),B(me),fs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(ja(rt),rt=null))),Ma(e,t),pe(t),null;case 5:ps(t);var o=Cn(so.current);if(n=t.type,e!==null&&t.stateNode!=null)vp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else {if(!r){if(t.stateNode===null)throw Error(w(166));return pe(t),null}if(e=Cn(ht.current),Zo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[mt]=t,r[io]=l,e=(t.mode&1)!==0,n){case "dialog":U("cancel",r),U("close",r);break;case "iframe":case "object":case "embed":U("load",r);break;case "video":case "audio":for(o=0;o<jr.length;o++)U(jr[o],r);break;case "source":U("error",r);break;case "img":case "image":case "link":U("error",r),U("load",r);break;case "details":U("toggle",r);break;case "input":Fu(r,l),U("invalid",r);break;case "select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case "textarea":$u(r,l),U("invalid",r);}la(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==true&&Ko(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==true&&Ko(r.textContent,a,e),o=["children",""+a]):Kr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&U("scroll",r);}switch(n){case "input":$o(r),Ou(r,l,true);break;case "textarea":$o(r),Hu(r);break;case "select":case "option":break;default:typeof l.onClick=="function"&&(r.onclick=wl);}r=o,t.updateQueue=r,r!==null&&(t.flags|=4);}else {i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=true:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[mt]=t,e[io]=r,yp(e,t,false,false),t.stateNode=e;e:{switch(i=ia(n,r),n){case "dialog":U("cancel",e),U("close",e),o=r;break;case "iframe":case "object":case "embed":U("load",e),o=r;break;case "video":case "audio":for(o=0;o<jr.length;o++)U(jr[o],e);o=r;break;case "source":U("error",e),o=r;break;case "img":case "image":case "link":U("error",e),U("load",e),o=r;break;case "details":U("toggle",e),o=r;break;case "input":Fu(e,r),o=ea(e,r),U("invalid",e);break;case "option":o=r;break;case "select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),U("invalid",e);break;case "textarea":$u(e,r),o=ra(e,r),U("invalid",e);break;default:o=r;}la(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Kc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zr(e,s):typeof s=="number"&&Zr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Kr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&U("scroll",e):s!=null&&Ba(e,l,s,i));}switch(n){case "input":$o(e),Ou(e,r,false);break;case "textarea":$o(e),Hu(e);break;case "option":r.value!=null&&e.setAttribute("value",""+rn(r.value));break;case "select":e.multiple=!!r.multiple,l=r.value,l!=null?tr(e,!!r.multiple,l,false):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,true);break;default:typeof o.onClick=="function"&&(e.onclick=wl);}switch(n){case "button":case "input":case "select":case "textarea":r=!!r.autoFocus;break e;case "img":r=true;break e;default:r=false;}}r&&(t.flags|=4);}t.ref!==null&&(t.flags|=512,t.flags|=2097152);}return pe(t),null;case 6:if(e&&t.stateNode!=null)xp(e,t,e.memoizedProps,r);else {if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Cn(so.current),Cn(ht.current),Zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(l=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Ko(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==true&&Ko(r.nodeValue,n,(e.mode&1)!==0);}l&&(t.flags|=4);}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r;}return pe(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Oe!==null&&t.mode&1&&!(t.flags&128))Od(),ur(),t.flags|=98560,l=false;else if(l=Zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[mt]=t;}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),l=false;}else rt!==null&&(ja(rt),rt=null),l=true;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?ne===0&&(ne=3):bs())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return dr(),Ma(e,t),e===null&&oo(t.stateNode.containerInfo),pe(t),null;case 10:return ss(t.type._context),pe(t),null;case 17:return _e(t.type)&&Sl(),pe(t),null;case 19:if(B(V),l=t.memoizedState,l===null)return pe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Dr(l,false);else {if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Nl(e),i!==null){for(t.flags|=128,Dr(l,false),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j(V,V.current&1|2),t.child}e=e.sibling;}l.tail!==null&&J()>fr&&(t.flags|=128,r=true,Dr(l,false),t.lanes=4194304);}else {if(!r)if(e=Nl(i),e!==null){if(t.flags|=128,r=true,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dr(l,true),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return pe(t),null}else 2*J()-l.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,r=true,Dr(l,false),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i);}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=V.current,j(V,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function _g(e,t){switch(os(t),t.tag){case 1:return _e(t.type)&&Sl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),B(Ne),B(me),fs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ps(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));ur();}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return dr(),null;case 10:return ss(t.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var el=false,fe=false,Lg=typeof WeakSet=="function"?WeakSet:Set,T=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null);}catch(r){K(e,t,r);}else n.current=null;}function Ia(e,t,n){try{n();}catch(r){K(e,t,r);}}var _c=false;function Rg(e,t){if(ha=yl,e=Ed(),ns(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType;}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,f=0,m=e,g=null;t:for(;;){for(var v;m!==n||o!==0&&m.nodeType!==3||(a=i+o),m!==l||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break t;if(g===n&&++u===o&&(a=i),g===l&&++f===r&&(s=i),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode;}m=v;}n=a===-1||s===-1?null:{start:a,end:s};}else n=null;}n=n||{start:0,end:0};}else n=null;for(ya={focusedElem:e,selectionRange:n},yl=false,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,_=k.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:tt(t.type,x),_);d.__reactInternalSnapshotBeforeUpdate=c;}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(h){K(t,t.return,h);}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return;}return k=_c,_c=false,k}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ia(t,n,l);}o=o.next;}while(o!==r)}}function Wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r();}n=n.next;}while(n!==t)}}function Da(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n;}typeof t=="function"?t(e):t.current=e;}}function wp(e){var t=e.alternate;t!==null&&(e.alternate=null,wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[io],delete t[wa],delete t[fg],delete t[mg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null;}function Sp(e){return e.tag===5||e.tag===3||e.tag===4}function Lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sp(e.return))return null;e=e.return;}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child;}if(!(e.flags&2))return e.stateNode}}function za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wl));else if(r!==4&&(e=e.child,e!==null))for(za(e,t,n),e=e.sibling;e!==null;)za(e,t,n),e=e.sibling;}function Fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fa(e,t,n),e=e.sibling;e!==null;)Fa(e,t,n),e=e.sibling;}var le=null,nt=false;function Ut(e,t,n){for(n=n.child;n!==null;)kp(e,t,n),n=n.sibling;}function kp(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Fl,n);}catch{}switch(n.tag){case 5:fe||qn(n,t);case 6:var r=le,o=nt;le=null,Ut(e,t,n),le=r,nt=o,le!==null&&(nt?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(nt?(e=le,n=n.stateNode,e.nodeType===8?Hi(e.parentNode,n):e.nodeType===1&&Hi(e,n),to(e)):Hi(le,n.stateNode));break;case 4:r=le,o=nt,le=n.stateNode.containerInfo,nt=true,Ut(e,t,n),le=r,nt=o;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ia(n,t,i),o=o.next;}while(o!==r)}Ut(e,t,n);break;case 1:if(!fe&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount();}catch(a){K(n,t,a);}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,Ut(e,t,n),fe=r):Ut(e,t,n);break;default:Ut(e,t,n);}}function Rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lg),t.forEach(function(r){var o=jg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o));});}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,nt=!1;break e;case 3:le=a.stateNode.containerInfo,nt=!0;break e;case 4:le=a.stateNode.containerInfo,nt=!0;break e}a=a.return;}if(le===null)throw Error(w(160));kp(l,i,o),le=null,nt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null;}catch(u){K(o,t,u);}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cp(t,e),t=t.sibling;}function Cp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),pt(e),r&4){try{Yr(3,e,e.return),Wl(3,e);}catch(x){K(e,e.return,x);}try{Yr(5,e,e.return);}catch(x){K(e,e.return,x);}}break;case 1:et(t,e),pt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(et(t,e),pt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var o=e.stateNode;try{Zr(o,"");}catch(x){K(e,e.return,x);}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Vc(o,l),ia(a,i);var u=ia(a,l);for(i=0;i<s.length;i+=2){var f=s[i],m=s[i+1];f==="style"?Kc(o,m):f==="dangerouslySetInnerHTML"?Gc(o,m):f==="children"?Zr(o,m):Ba(o,f,m,u);}switch(a){case "input":ta(o,l);break;case "textarea":Qc(o,l);break;case "select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?tr(o,!!l.multiple,v,!1):g!==!!l.multiple&&(l.defaultValue!=null?tr(o,!!l.multiple,l.defaultValue,!0):tr(o,!!l.multiple,l.multiple?[]:"",!1));}o[io]=l;}catch(x){K(e,e.return,x);}}break;case 6:if(et(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l;}catch(x){K(e,e.return,x);}}break;case 3:if(et(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{to(t.containerInfo);}catch(x){K(e,e.return,x);}break;case 4:et(t,e),pt(e);break;case 13:et(t,e),pt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ks=J())),r&4&&Rc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(u=fe)||f,et(t,e),fe=u):et(t,e),pt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(m=T=f;T!==null;){switch(g=T,v=g.child,g.tag){case 0:case 11:case 14:case 15:Yr(4,g,g.return);break;case 1:qn(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount();}catch(x){K(r,n,x);}}break;case 5:qn(g,g.return);break;case 22:if(g.memoizedState!==null){Ic(m);continue}}v!==null?(v.return=g,T=v):Ic(m);}f=f.sibling;}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Xc("display",i));}catch(x){K(e,e.return,x);}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps;}catch(x){K(e,e.return,x);}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return;}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling;}}break;case 19:et(t,e),pt(e),r&4&&Rc(e);break;case 21:break;default:et(t,e),pt(e);}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sp(n)){var r=n;break e}n=n.return;}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zr(o,""),r.flags&=-33);var l=Lc(e);Fa(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Lc(e);za(e,a,i);break;default:throw Error(w(161))}}catch(s){K(e,e.return,s);}e.flags&=-3;}t&4096&&(e.flags&=-4097);}function Mg(e,t,n){T=e,Ep(e);}function Ep(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||el;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||fe;a=el;var u=fe;if(el=i,(fe=s)&&!u)for(T=o;T!==null;)i=T,s=i.child,i.tag===22&&i.memoizedState!==null?Dc(o):s!==null?(s.return=i,T=s):Dc(o);for(;l!==null;)T=l,Ep(l),l=l.sibling;T=o,el=a,fe=u;}Mc(e);}else o.subtreeFlags&8772&&l!==null?(l.return=o,T=l):Mc(e);}}function Mc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||Wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else {var o=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate);}var l=t.updateQueue;l!==null&&hc(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode;}hc(t,i,n);}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case "button":case "input":case "select":case "textarea":s.autoFocus&&n.focus();break;case "img":s.src&&(n.src=s.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&to(m);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}fe||t.flags&512&&Da(t);}catch(g){K(t,t.return,g);}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return;}}function Ic(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return;}}function Dc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wl(4,t);}catch(s){K(t,n,s);}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount();}catch(s){K(t,o,s);}}var l=t.return;try{Da(t);}catch(s){K(t,l,s);}break;case 5:var i=t.return;try{Da(t);}catch(s){K(t,i,s);}}}catch(s){K(t,t.return,s);}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return;}}var Ig=Math.ceil,Rl=Mt.ReactCurrentDispatcher,ws=Mt.ReactCurrentOwner,Ye=Mt.ReactCurrentBatchConfig,z=0,oe=null,ee=null,ie=0,Fe=0,er=an(0),ne=0,fo=null,_n=0,Vl=0,Ss=0,Gr=null,Pe=null,ks=0,fr=1/0,Ct=null,Ml=false,Oa=null,en=null,tl=false,Gt=null,Il=0,Xr=0,$a=null,ul=-1,cl=0;function we(){return z&6?J():ul!==-1?ul:ul=J()}function tn(e){return e.mode&1?z&2&&ie!==0?ie&-ie:hg.transition!==null?(cl===0&&(cl=sd()),cl):(e=O,e!==0||(e=window.event,e=e===void 0?16:gd(e.type)),e):1}function lt(e,t,n,r){if(50<Xr)throw Xr=0,$a=null,Error(w(185));mo(e,n,r),(!(z&2)||e!==oe)&&(e===oe&&(!(z&2)&&(Vl|=n),ne===4&&Qt(e,ie)),Le(e,r),n===1&&z===0&&!(t.mode&1)&&(fr=J()+500,Al&&sn()));}function Le(e,t){var n=e.callbackNode;vm(e,t);var r=hl(e,e===oe?ie:0);if(r===0)n!==null&&Uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uu(n),t===1)e.tag===0?gg(zc.bind(null,e)):Dd(zc.bind(null,e)),dg(function(){!(z&6)&&sn();}),n=null;else {switch(ud(r)){case 1:n=Ga;break;case 4:n=id;break;case 16:n=gl;break;case 536870912:n=ad;break;default:n=gl;}n=Mp(n,bp.bind(null,e));}e.callbackPriority=t,e.callbackNode=n;}}function bp(e,t){if(ul=-1,cl=0,z&6)throw Error(w(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=hl(e,e===oe?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Dl(e,r);else {t=r;var o=z;z|=2;var l=Tp();(oe!==e||ie!==t)&&(Ct=null,fr=J()+500,En(e,t));do try{Fg();break}catch(a){Pp(e,a);}while(true);as(),Rl.current=l,z=o,ee!==null?t=0:(oe=null,ie=0,t=ne);}if(t!==0){if(t===2&&(o=da(e),o!==0&&(r=o,t=Ha(e,o))),t===1)throw n=fo,En(e,0),Qt(e,r),Le(e,J()),n;if(t===6)Qt(e,r);else {if(o=e.current.alternate,!(r&30)&&!Dg(o)&&(t=Dl(e,r),t===2&&(l=da(e),l!==0&&(r=l,t=Ha(e,l))),t===1))throw n=fo,En(e,0),Qt(e,r),Le(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:wn(e,Pe,Ct);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=ks+500-J(),10<t)){if(hl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=xa(wn.bind(null,e,Pe,Ct),t);break}wn(e,Pe,Ct);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-ot(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l;}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ig(r/1960))-r,10<r){e.timeoutHandle=xa(wn.bind(null,e,Pe,Ct),r);break}wn(e,Pe,Ct);break;case 5:wn(e,Pe,Ct);break;default:throw Error(w(329))}}}return Le(e,J()),e.callbackNode===n?bp.bind(null,e):null}function Ha(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=Dl(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&ja(t)),e}function ja(e){Pe===null?Pe=e:Pe.push.apply(Pe,e);}function Dg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!it(l(),o))return !1}catch{return  false}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else {if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return  true;t=t.return;}t.sibling.return=t.return,t=t.sibling;}}return  true}function Qt(e,t){for(t&=~Ss,t&=~Vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r;}}function zc(e){if(z&6)throw Error(w(327));ir();var t=hl(e,0);if(!(t&1))return Le(e,J()),null;var n=Dl(e,t);if(e.tag!==0&&n===2){var r=da(e);r!==0&&(t=r,n=Ha(e,r));}if(n===1)throw n=fo,En(e,0),Qt(e,t),Le(e,J()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Pe,Ct),Le(e,J()),null}function Cs(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(fr=J()+500,Al&&sn());}}function Ln(e){Gt!==null&&Gt.tag===0&&!(z&6)&&ir();var t=z;z|=1;var n=Ye.transition,r=O;try{if(Ye.transition=null,O=1,e)return e()}finally{O=r,Ye.transition=n,z=t,!(z&6)&&sn();}}function Es(){Fe=er.current,B(er);}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cg(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(os(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:dr(),B(Ne),B(me),fs();break;case 5:ps(r);break;case 4:dr();break;case 13:B(V);break;case 19:B(V);break;case 10:ss(r.type._context);break;case 22:case 23:Es();}n=n.return;}if(oe=e,ee=e=nn(e.current,null),ie=Fe=t,ne=0,fo=null,Ss=Vl=_n=0,Pe=Gr=null,kn!==null){for(t=0;t<kn.length;t++)if(n=kn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i;}n.pending=r;}kn=null;}return e}function Pp(e,t){do{var n=ee;try{if(as(),il.current=Ll,_l){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next;}_l=!1;}if(Nn=0,re=te=Q=null,Qr=!1,uo=0,ws.current=null,n===null||n.return===null){ne=1,fo=t,ee=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null);}var v=kc(i);if(v!==null){v.flags&=-257,Cc(v,i,a,l,t),v.mode&1&&Sc(l,u,t),t=v,s=u;var k=t.updateQueue;if(k===null){var x=new Set;x.add(s),t.updateQueue=x;}else k.add(s);break e}else {if(!(t&1)){Sc(l,u,t),bs();break e}s=Error(w(426));}}else if(W&&a.mode&1){var _=kc(i);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Cc(_,i,a,l,t),ls(pr(s,a));break e}}l=s=pr(s,a),ne!==4&&(ne=2),Gr===null?Gr=[l]:Gr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=up(l,s,t);gc(l,d);break e;case 1:a=s;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(en===null||!en.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var h=cp(l,a,t);gc(l,h);break e}}l=l.return;}while(l!==null)}_p(n);}catch(E){t=E,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(true)}function Tp(){var e=Rl.current;return Rl.current=Ll,e===null?Ll:e}function bs(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(_n&268435455)&&!(Vl&268435455)||Qt(oe,ie);}function Dl(e,t){var n=z;z|=2;var r=Tp();(oe!==e||ie!==t)&&(Ct=null,En(e,t));do try{zg();break}catch(o){Pp(e,o);}while(true);if(as(),z=n,Rl.current=r,ee!==null)throw Error(w(261));return oe=null,ie=0,ne}function zg(){for(;ee!==null;)Np(ee);}function Fg(){for(;ee!==null&&!um();)Np(ee);}function Np(e){var t=Rp(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?_p(e):ee=t,ws.current=null;}function _p(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_g(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else {ne=6,ee=null;return}}else if(n=Ng(n,t,Fe),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e;}while(t!==null);ne===0&&(ne=5);}function wn(e,t,n){var r=O,o=Ye.transition;try{Ye.transition=null,O=1,Og(e,t,n,r);}finally{Ye.transition=o,O=r;}return null}function Og(e,t,n,r){do ir();while(Gt!==null);if(z&6)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(xm(e,l),e===oe&&(ee=oe=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=true,Mp(gl,function(){return ir(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ye.transition,Ye.transition=null;var i=O;O=1;var a=z;z|=4,ws.current=null,Rg(e,n),Cp(n,e),lg(ya),yl=!!ha,ya=ha=null,e.current=n,Mg(n),cm(),z=a,O=i,Ye.transition=l;}else e.current=n;if(tl&&(tl=false,Gt=e,Il=o),l=e.pendingLanes,l===0&&(en=null),fm(n.stateNode),Le(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ml)throw Ml=false,e=Oa,Oa=null,e;return Il&1&&e.tag!==0&&ir(),l=e.pendingLanes,l&1?e===$a?Xr++:(Xr=0,$a=e):Xr=0,sn(),null}function ir(){if(Gt!==null){var e=ud(Il),t=Ye.transition,n=O;try{if(Ye.transition=null,O=16>e?16:e,Gt===null)var r=!1;else {if(e=Gt,Gt=null,Il=0,z&6)throw Error(w(331));var o=z;for(z|=4,T=e.current;T!==null;){var l=T,i=l.child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:Yr(8,f,l);}var m=f.child;if(m!==null)m.return=f,T=m;else for(;T!==null;){f=T;var g=f.sibling,v=f.return;if(wp(f),f===u){T=null;break}if(g!==null){g.return=v,T=g;break}T=v;}}}var k=l.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var _=x.sibling;x.sibling=null,x=_;}while(x!==null)}}T=l;}}if(l.subtreeFlags&2064&&i!==null)i.return=l,T=i;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Yr(9,l,l.return);}var d=l.sibling;if(d!==null){d.return=l.return,T=d;break e}T=l.return;}}var c=e.current;for(T=c;T!==null;){i=T;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,T=p;else e:for(i=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wl(9,a);}}catch(E){K(a,a.return,E);}if(a===i){T=null;break e}var h=a.sibling;if(h!==null){h.return=a.return,T=h;break e}T=a.return;}}if(z=o,sn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Fl,e);}catch{}r=!0;}return r}finally{O=n,Ye.transition=t;}}return  false}function Fc(e,t,n){t=pr(n,t),t=up(e,t,1),e=qt(e,t,1),t=we(),e!==null&&(mo(e,1,t),Le(e,t));}function K(e,t,n){if(e.tag===3)Fc(e,e,n);else for(;t!==null;){if(t.tag===3){Fc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=pr(n,e),e=cp(t,e,1),t=qt(t,e,1),e=we(),t!==null&&(mo(t,1,e),Le(t,e));break}}t=t.return;}}function $g(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ie&n)===n&&(ne===4||ne===3&&(ie&130023424)===ie&&500>J()-ks?En(e,0):Ss|=n),Le(e,t);}function Lp(e,t){t===0&&(e.mode&1?(t=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):t=1);var n=we();e=Lt(e,t),e!==null&&(mo(e,t,n),Le(e,n));}function Hg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lp(e,n);}function jg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Lp(e,n);}var Rp;Rp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Te=true;else {if(!(e.lanes&n)&&!(t.flags&128))return Te=false,Tg(e,t,n);Te=!!(e.flags&131072);}else Te=false,W&&t.flags&1048576&&zd(t,El,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;sl(e,t),e=t.pendingProps;var o=sr(t,me.current);lr(t,n),o=gs(null,t,r,e,o,n);var l=hs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(l=true,kl(t)):l=false,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,cs(t),o.updater=Bl,t.stateNode=o,o._reactInternals=t,Pa(t,r,e,n),t=_a(null,t,r,true,l,n)):(t.tag=0,W&&l&&rs(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(sl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ug(r),e=tt(r,e),o){case 0:t=Na(null,t,r,e,n);break e;case 1:t=Pc(null,t,r,e,n);break e;case 11:t=Ec(null,t,r,e,n);break e;case 14:t=bc(null,t,r,tt(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Na(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Pc(e,t,r,o,n);case 3:e:{if(mp(t),e===null)throw Error(w(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Ad(e,t),Tl(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:false,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=pr(Error(w(423)),t),t=Tc(e,t,r,n,o);break e}else if(r!==o){o=pr(Error(w(424)),t),t=Tc(e,t,r,n,o);break e}else for(Oe=Jt(t.stateNode.containerInfo.firstChild),$e=t,W=true,rt=null,n=Hd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else {if(ur(),r===o){t=Rt(e,t,n);break e}xe(e,t,r,n);}t=t.child;}return t;case 5:return Ud(t),e===null&&Ca(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,va(r,o)?i=null:l!==null&&va(r,l)&&(t.flags|=32),fp(e,t),xe(e,t,i,n),t.child;case 6:return e===null&&Ca(t),null;case 13:return gp(e,t,n);case 4:return ds(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Ec(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,j(bl,r._currentValue),r._currentValue=i,l!==null)if(it(l.value,i)){if(l.children===o.children&&!Ne.current){t=Rt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Tt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s;}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ea(l.return,n,t),a.lanes|=n;break}s=s.next;}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(w(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ea(i,n,t),i=l.sibling;}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return;}l=i;}xe(e,t,o.children,n),t=t.child;}return t;case 9:return o=t.type,r=t.pendingProps.children,lr(t,n),o=Ge(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=tt(r,t.pendingProps),o=tt(r.type,o),bc(e,t,r,o,n);case 15:return dp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),sl(e,t),t.tag=1,_e(r)?(e=true,kl(t)):e=false,lr(t,n),sp(t,r,o),Pa(t,r,o,n),_a(null,t,r,true,e,n);case 19:return hp(e,t,n);case 22:return pp(e,t,n)}throw Error(w(156,t.tag))};function Mp(e,t){return ld(e,t)}function Ag(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null;}function Qe(e,t,n,r){return new Ag(e,t,n,r)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ug(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Va)return 11;if(e===Qa)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function dl(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Ps(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Wn:return bn(n.children,o,l,t);case Wa:i=8,o|=8;break;case Ki:return e=Qe(12,n,t,o|2),e.elementType=Ki,e.lanes=l,e;case Zi:return e=Qe(13,n,t,o),e.elementType=Zi,e.lanes=l,e;case Ji:return e=Qe(19,n,t,o),e.elementType=Ji,e.lanes=l,e;case Uc:return Ql(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jc:i=10;break e;case Ac:i=9;break e;case Va:i=11;break e;case Qa:i=14;break e;case Bt:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Qe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function bn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=Uc,e.lanes=n,e.stateNode={isHidden:false},e}function Yi(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function Gi(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ri(0),this.expirationTimes=Ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null;}function Ts(e,t,n,r,o,l,i,a,s){return e=new Bg(e,t,n,a,s),t===1?(t=1,l===true&&(t|=8)):t=0,l=Qe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cs(l),e}function Wg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return {$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ip(e){if(!e)return on;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return;}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(_e(n))return Id(e,n,t)}return t}function Dp(e,t,n,r,o,l,i,a,s){return e=Ts(n,r,true,e,o,l,i,a,s),e.context=Ip(null),n=e.current,r=we(),o=tn(n),l=Tt(r,o),l.callback=t??null,qt(n,l,o),e.current.lanes=o,mo(e,o,r),Le(e,r),e}function Yl(e,t,n,r){var o=t.current,l=we(),i=tn(o);return n=Ip(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(o,t,i),e!==null&&(lt(e,o,i,l),ll(e,o,i)),i}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t;}}function Ns(e,t){Oc(e,t),(e=e.alternate)&&Oc(e,t);}function Vg(){return null}var zp=typeof reportError=="function"?reportError:function(e){console.error(e);};function _s(e){this._internalRoot=e;}Gl.prototype.render=_s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Yl(e,t,null,null);};Gl.prototype.unmount=_s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Yl(null,e,null,null);}),t[_t]=null;}};function Gl(e){this._internalRoot=e;}Gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=pd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&md(e);}};function Ls(e){return !(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xl(e){return !(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function Qg(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=zl(i);l.call(u);};}var i=Dp(t,r,e,0,null,false,false,"",$c);return e._reactRootContainer=i,e[_t]=i.current,oo(e.nodeType===8?e.parentNode:e),Ln(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=zl(s);a.call(u);};}var s=Ts(e,0,false,null,null,false,false,"",$c);return e._reactRootContainer=s,e[_t]=s.current,oo(e.nodeType===8?e.parentNode:e),Ln(function(){Yl(t,s,n,r);}),s}function Kl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=zl(i);a.call(s);};}Yl(t,i,e,o);}else i=Qg(n,t,e,o,r);return zl(i)}cd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hr(t.pendingLanes);n!==0&&(Xa(t,n|1),Le(t,J()),!(z&6)&&(fr=J()+500,sn()));}break;case 13:Ln(function(){var r=Lt(e,1);if(r!==null){var o=we();lt(r,e,1,o);}}),Ns(e,1);}};Ka=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=we();lt(t,e,134217728,n);}Ns(e,134217728);}};dd=function(e){if(e.tag===13){var t=tn(e),n=Lt(e,t);if(n!==null){var r=we();lt(n,e,t,r);}Ns(e,t);}};pd=function(){return O};fd=function(e,t){var n=O;try{return O=e,t()}finally{O=n;}};sa=function(e,t,n){switch(t){case "input":if(ta(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=jl(r);if(!o)throw Error(w(90));Wc(r),ta(r,o);}}}break;case "textarea":Qc(e,n);break;case "select":t=n.value,t!=null&&tr(e,!!n.multiple,t,false);}};qc=Cs;ed=Ln;var Yg={usingClientEntryPoint:false,Events:[ho,Gn,jl,Zc,Jc,Cs]},zr={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gg={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rd(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||Vg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Fr.isDisabled&&Fr.supportsFiber))try{Fl=Fr.inject(Gg),gt=Fr;}catch{}var Fr;Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yg;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(w(200));return Wg(e,t,null,n)};Ae.createRoot=function(e,t){if(!Ls(e))throw Error(w(299));var n=false,r="",o=zp;return t!=null&&(t.unstable_strictMode===true&&(n=true),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ts(e,1,false,null,null,n,false,r,o),e[_t]=t.current,oo(e.nodeType===8?e.parentNode:e),new _s(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=rd(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Ln(e)};Ae.hydrate=function(e,t,n){if(!Xl(t))throw Error(w(200));return Kl(null,e,t,true,n)};Ae.hydrateRoot=function(e,t,n){if(!Ls(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=false,l="",i=zp;if(n!=null&&(n.unstable_strictMode===true&&(o=true),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Dp(t,null,e,1,n??null,o,false,l,i),e[_t]=t.current,oo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Gl(t)};Ae.render=function(e,t,n){if(!Xl(t))throw Error(w(200));return Kl(null,e,t,false,n)};Ae.unmountComponentAtNode=function(e){if(!Xl(e))throw Error(w(40));return e._reactRootContainer?(Ln(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null;});}),true):false};Ae.unstable_batchedUpdates=Cs;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Kl(e,t,n,false,r)};Ae.version="18.3.1-next-f1338f8080-20240426";});var Rs=kt((Ah,$p)=>{function Op(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Op);}catch(e){console.error(e);}}Op(),$p.exports=Fp();});var jp=kt(Ms=>{var Hp=Rs();Ms.createRoot=Hp.createRoot,Ms.hydrateRoot=Hp.hydrateRoot;});var Up=kt(Zl=>{var Xg=ct(),Kg=Symbol.for("react.element"),Zg=Symbol.for("react.fragment"),Jg=Object.prototype.hasOwnProperty,qg=Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eh={key:true,ref:true,__self:true,__source:true};function Ap(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Jg.call(t,r)&&!eh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return {$$typeof:Kg,type:e,key:l,ref:i,props:o,_owner:qg.current}}Zl.Fragment=Zg;Zl.jsx=Ap;Zl.jsxs=Ap;});var L=kt((Vh,Bp)=>{Bp.exports=Up();});var df=N(jp());var D=N(ct());var Is=N(L());function Wp({size:e=16}){return (0, Is.jsx)("svg",{viewBox:"0 0 16 16",width:e,height:e,"aria-hidden":"true",fill:"currentColor",children:(0, Is.jsx)("path",{d:"M8 3.5 L8 12.5 M8 3.5 L4.5 7 M8 3.5 L11.5 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"})})}var vo=N(L());function xo({size:e=20}){return (0, vo.jsxs)("svg",{viewBox:"0 0 20 20",width:e,height:e,"aria-hidden":"true",children:[(0, vo.jsx)("circle",{cx:"10",cy:"10",r:"4",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),(0, vo.jsx)("path",{d:"M10 2v3M10 15v3M2 10h3M15 10h3",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}var It=N(ct());var Ds=`
  .tooltip-wrapper {
    position: relative;
    display: flex;
  }
  .tooltip {
    position: absolute;
    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%) translateY(-4px);
    background: #333333;
    color: rgba(255, 255, 255, 0.92);
    padding: 0 12px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 400;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    transition: opacity 140ms ease, transform 140ms ease;
    z-index: 1000;
  }
  .tooltip.above {
    top: auto;
    bottom: calc(100% + 4px);
    transform: translateX(-50%) translateY(4px);
  }
  .tooltip.below {
    top: calc(100% + 4px);
    bottom: auto;
    transform: translateX(-50%) translateY(-4px);
  }
  .tooltip.visible {
    opacity: 1;
  }
  .tooltip.visible.above {
    transform: translateX(-50%) translateY(0);
  }
  .tooltip.visible.below {
    transform: translateX(-50%) translateY(0);
  }
`;var Jl=N(L());function wo({text:e,children:t,position:n,disabled:r=false}){let o=(0, It.useRef)(null),l=(0, It.useRef)(null),[i,a]=(0, It.useState)(false),[s,u]=(0, It.useState)(""),[f,m]=(0, It.useState)(void 0);return (0, It.useEffect)(()=>{if(!i||r){let S=setTimeout(()=>{u(""),m(void 0);},140);return ()=>clearTimeout(S)}if(!o.current||!l.current)return;let g=o.current,v=g.getBoundingClientRect(),k=window.innerHeight,x=4,_=4,d=24,c=v.top,p=k-v.bottom,h;n?n==="below"?h=p>=d+_+x?"below":"above":h=c>=d+_+x?"above":"below":h=p>=d+_+x?"below":"above",u(h);let E=setTimeout(()=>{if(!o.current||!l.current)return;let S=l.current.getBoundingClientRect(),C=o.current.getBoundingClientRect(),b=window.innerWidth,R=S.width,y=C.left+C.width/2,P=y-R/2,A=y+R/2;if(P<x){let he=g.offsetLeft+C.width/2-R/2;if(he<x){let se=x-he;m({left:`calc(50% + ${se}px)`});}else {let se=x-P;m({left:`calc(50% + ${se}px)`});}}else if(A>b-x){let he=g.offsetLeft+C.width/2+R/2,se=g.closest(".chat-widget");if(se&&he>se.offsetWidth-x){let X=he-(se.offsetWidth-x);m({left:`calc(50% - ${X}px)`});}else {let X=A-(b-x);m({left:`calc(50% - ${X}px)`});}}else m(void 0);},10);return ()=>clearTimeout(E)},[i,n,r]),(0, Jl.jsxs)("div",{ref:o,className:"tooltip-wrapper",onMouseEnter:()=>!r&&a(true),onMouseLeave:()=>a(false),children:[t,(0, Jl.jsx)("span",{ref:l,className:`tooltip ${s} ${i&&!r?"visible":""}`,role:"tooltip",style:f,children:e})]})}var Ke=N(L());function zs({draft:e,textareaRef:t,onDraftChange:n,onSubmit:r,onKeyDown:o,disableSend:l,isSending:i,isInspecting:a,inspectButtonTitle:s,onToggleInspect:u}){return (0, Ke.jsxs)("form",{className:"chat-composer",onSubmit:r,children:[(0, Ke.jsx)("label",{className:"sr-only",htmlFor:"enhance-chat-input",children:"Message the Enhance assistant"}),(0, Ke.jsxs)("div",{className:"chat-input-wrapper",children:[(0, Ke.jsx)("textarea",{id:"enhance-chat-input",ref:t,placeholder:"Message...",rows:1,value:e,onChange:f=>n(f.target.value),onKeyDown:o,maxLength:2e3}),(0, Ke.jsxs)("button",{type:"submit",className:"chat-send",disabled:l,"data-sending":i?"true":"false","aria-label":"Send message",children:[(0, Ke.jsx)("span",{className:"chat-send-ring","aria-hidden":"true"}),(0, Ke.jsx)(Wp,{size:16})]})]}),(0, Ke.jsx)(wo,{text:"Inspect Elements",children:(0, Ke.jsx)("button",{type:"button",className:`inspect-toggle ${a?"active":""}`,"aria-pressed":a,onClick:u,title:s,"aria-label":s,children:(0, Ke.jsx)(xo,{size:16})})})]})}var Dt=N(L());function Vp({segmentId:e,value:t,isCopied:n,onCopy:r}){return (0, Dt.jsxs)("div",{className:"chat-code-block",children:[(0, Dt.jsx)("pre",{children:(0, Dt.jsx)("code",{children:t})}),(0, Dt.jsxs)("button",{type:"button",className:"copy-button",onClick:()=>r(e,t),children:[(0, Dt.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:(0, Dt.jsx)("path",{d:"M5 1h8a2 2 0 0 1 2 2v8h-2V3H5V1zm-2 4h8a2 2 0 0 1 2 2v8H5a2 2 0 0 1-2-2V5zm8 2H5v8h8V7z"})}),(0, Dt.jsx)("span",{children:n?"Copied":"Copy"})]})]})}var un=N(L());function Qp({message:e,segments:t,isGrouped:n,copiedCodeId:r,onCopyCode:o}){return (0, un.jsx)("div",{className:"chat-message","data-role":e.role,"data-grouped":n?"true":"false",children:(0, un.jsx)("div",{className:"chat-bubble",children:t.map((l,i)=>{if(l.type==="code"){let s=`${e.id}-code-${i}`;return (0, un.jsx)(Vp,{segmentId:s,value:l.value,isCopied:r===s,onCopy:o},s)}return l.value.split(/\n{2,}/).map((s,u)=>(0, un.jsx)("p",{children:s.split(`
`).map((f,m,g)=>(0, un.jsxs)("span",{children:[f,m<g.length-1?(0, un.jsx)("br",{}):null]},`${e.id}-line-${i}-${u}-${m}`))},`${e.id}-text-${i}-${u}`))})})})}var ql="assistant-intro",Fs=[{id:"status",label:"Preview status",prompt:"What is the current sandbox status!"},{id:"hits",label:"Sandbox hits",prompt:"How many sandbox hits have we handled?"},{id:"fallbacks",label:"Fallbacks",prompt:"Anything falling back to production?"}];function Os(e,t,n){return {id:`${e}-${Date.now()}-${Math.random().toString(16).slice(2,8)}`,role:e,content:t,variant:n,createdAt:Date.now()}}function ei(e){let t=e.enabled?"Preview is on":"Preview is off",n=e.branchId?`branch ${e.branchId}`:"this branch",r=e.projectId?e.projectId:"your project";return {id:ql,role:"assistant",variant:"intro",content:`Enhance is watching ${n} in ${r}. ${t}. Ask anything to stay oriented.`,createdAt:Date.now()}}function Yp(e,t){let n=e.trim().toLowerCase(),r=t.enabled?"Disable preview":"Enable preview",o=t.enabled?"enabled":"disabled",l=t.branchId||"unknown branch",i=t.projectId||"unknown project",a=t.sandboxHits,s=t.sandboxFallbacks,u;return n?n.includes("status")||n.includes("state")?u=`The sandbox preview is currently ${o}. Use "${r}" to switch.`:n.includes("branch")||n.includes("project")?u=`You're previewing ${l} for ${i}.`:n.includes("hit")?u=`Sandbox has served ${a} request${a===1?"":"s"} in this session.`:n.includes("fallback")?u=`We've seen ${s} fallback${s===1?"":"s"} to production so far.`:n.includes("token")?u=t.sandboxToken?`Current sandbox token starts with ${t.sandboxToken.slice(0,6)}...`:"This preview session is not using a token.":n.includes("help")?u="Ask about status, branch details, hits, fallbacks, or how to toggle preview.":u=`Noted. I'll keep "${e}" in context for this session.`:u="I'm here whenever you need to check in on the sandbox.",Os("assistant",u)}function Gp(e){if(!e.includes("```"))return [{type:"text",value:e}];let t=e.split(/```/),n=[];for(let r=0;r<t.length;r+=1){let o=t[r];if(o!==void 0)if(r%2===1){let l=o,i=l.indexOf(`
`);if(i>-1){let s=l.slice(0,i).trim();s&&!s.includes(" ")&&(l=l.slice(i+1));}let a=l.replace(/^\n+/,"").replace(/\s+$/,"");n.push({type:"code",value:a});}else o.trim()&&n.push({type:"text",value:o});}return n.length>0?n:[{type:"text",value:e}]}function ti(e){if(!e)return;e.style.height="auto";let t=getComputedStyle(e),r=parseFloat(t.lineHeight||"16")*3+24,o=Math.min(e.scrollHeight,r);e.style.height=`${o}px`;}var So=N(L());function Xp({messages:e,copiedCodeId:t,onCopyCode:n}){return (0, So.jsx)(So.Fragment,{children:e.map((r,o)=>{let l=o>0?e[o-1]:void 0,i=l?l.role===r.role:false,a=Gp(r.content);return (0, So.jsx)(Qp,{message:r,segments:a,isGrouped:i,copiedCodeId:t,onCopyCode:n},r.id)})})}var $s=N(L());function Hs({onPromptSelect:e}){return (0, $s.jsx)("div",{className:"chat-prompts",children:Fs.map(t=>(0, $s.jsx)("button",{type:"button",className:"prompt",onClick:()=>e(t.prompt),children:t.label},t.id))})}var zt=N(L());function js({messages:e,copiedCodeId:t,showEmptyState:n,onPromptClick:r,onCopyCode:o,messageEndRef:l}){return (0, zt.jsxs)("div",{className:"chat-pane",children:[(0, zt.jsxs)("div",{className:"chat-stream",role:"log","aria-live":"polite",children:[(0, zt.jsx)(Xp,{messages:e,copiedCodeId:t,onCopyCode:o}),(0, zt.jsx)("div",{ref:l,"aria-hidden":"true"})]}),n?(0, zt.jsxs)("div",{className:"chat-empty",children:[(0, zt.jsx)("p",{children:"Ask the assistant about the sandbox or pick a quick prompt."}),(0, zt.jsx)(Hs,{onPromptSelect:r})]}):null]})}var ni=`
  .chat-pane {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 0 8px;
    background: transparent;
    min-height: 0;
  }
  .chat-stream {
    flex: 1 1 auto;
    overflow-y: auto;
    padding-right: 4px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 0;
  }
  .chat-stream::-webkit-scrollbar {
    width: 6px;
  }
  .chat-stream::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
  }
  .chat-message {
    display: flex;
    justify-content: flex-start;
  }
  .chat-message:first-child {
    margin-top: 0;
  }
  .chat-message + .chat-message[data-grouped='true'] {
    margin-top: 10px;
  }
  .chat-message + .chat-message[data-grouped='false'] {
    margin-top: 20px;
  }
  .chat-message[data-role='user'] {
    justify-content: flex-end;
  }
  .chat-bubble {
    max-width: calc(100% - 32px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(25, 25, 25, 0.78);
    padding: 12px 16px;
    border-radius: 16px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 16px 36px -28px rgba(5, 5, 5, 0.8);
    white-space: pre-wrap;
    word-break: break-word;
  }
  .chat-bubble p {
    margin: 0;
  }
  .chat-bubble p + p {
    margin-top: 6px;
  }
  .chat-message[data-role='user'] .chat-bubble {
    background: rgba(60, 60, 60, 0.5);
    border-color: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.9);
  }
  .chat-code-block {
    position: relative;
    margin-top: 14px;
    background: rgba(20, 20, 20, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    overflow: hidden;
  }
  .chat-code-block pre {
    margin: 0;
    padding: 16px;
    overflow: auto;
    font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
    font-size: 13px;
    line-height: 1.5;
  }
  .copy-button {
    position: absolute;
    top: 12px;
    right: 12px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(15, 15, 15, 0.78);
    color: rgba(203, 217, 237, 0.78);
    padding: 6px 12px;
    border-radius: 999px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 140ms ease, color 140ms ease, border-color 140ms ease;
  }
  .chat-code-block:hover .copy-button {
    opacity: 1;
  }
  .copy-button:hover {
    color: rgba(234, 240, 255, 0.95);
    border-color: rgba(255, 255, 255, 0.3);
  }
  .copy-button svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
  }
  .chat-empty {
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    padding: 16px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.88);
    background: rgba(20, 20, 20, 0.7);
  }
  .chat-empty p {
    margin-top: 0;
  }
  .chat-prompts {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .chat-prompts .prompt {
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    padding: 6px 16px;
    border-radius: 999px;
    cursor: pointer;
    transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
  }
  .chat-prompts .prompt:hover {
    color: rgba(234, 240, 255, 0.95);
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }
  .chat-composer {
    position: relative;
    width: 100%;
    min-height: 48px;
    display: flex;
    align-items: flex-end;
    gap: var(--spacing-sm);
  }
  .chat-composer .inspect-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border: none;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
    flex-shrink: 0;
    margin-bottom: 10px;
    transition: background 140ms ease, color 140ms ease;
  }
  .chat-composer .inspect-toggle:hover {
    background: rgba(255, 144, 40, 0.1);
    color: #FF9028;
  }
  .chat-composer .inspect-toggle.active {
    background: rgba(255, 144, 40, 0.16);
    color: #FF9028;
  }
  .chat-composer .inspect-toggle svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
  }
  .chat-input-wrapper {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
  }
  .chat-composer textarea {
    flex: 1;
    border: none;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.9);
    padding: 14px 48px 14px 20px;
    resize: none;
    font: inherit;
    font-size: 14px;
    line-height: 1.5;
    min-height: 48px;
    max-height: 120px;
    border-radius: 24px;
    position: relative;
  }
  .chat-composer textarea:focus {
    outline: none;
  }
  .chat-send {
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    border: none;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: background 140ms ease;
  }
  .chat-send:hover:enabled {
    background: rgba(255, 255, 255, 0.16);
  }
  .chat-send:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .chat-send-ring {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #292929;
    border-right-color: #292929;
    display: none;
    animation: spin 0.8s linear infinite;
  }
  .chat-send[data-sending='true'] .chat-send-ring {
    display: inline-flex;
  }
  .chat-send[data-sending='true'] svg {
    display: none;
  }
`;var G=N(ct());function As({state:e,isOpen:t,isActive:n,onActivateChat:r}){let[o,l]=(0, G.useState)(()=>e?[ei(e)]:[]),[i,a]=(0, G.useState)(""),[s,u]=(0, G.useState)(false),[f,m]=(0, G.useState)(null),g=(0, G.useRef)(null),v=(0, G.useRef)(null),k=(0, G.useRef)(null),x=(0, G.useRef)(null);(0, G.useEffect)(()=>{if(!e){l([]);return}l(S=>{if(S.length===0)return [ei(e)];let[C,...b]=S;if(C.id!==ql)return S;let R=ei(e);return C.content===R.content?S:[R,...b]});},[e]),(0, G.useEffect)(()=>{t&&g.current?.scrollIntoView({behavior:"smooth",block:"end"});},[o,t]),(0, G.useEffect)(()=>{if(!t||!n)return;let S=requestAnimationFrame(()=>{v.current?.focus(),ti(v.current);});return ()=>cancelAnimationFrame(S)},[t,n]),(0, G.useEffect)(()=>{!t||!n||ti(v.current);},[i,t,n]),(0, G.useEffect)(()=>()=>{k.current&&window.clearTimeout(k.current),x.current&&window.clearTimeout(x.current);},[]);let _=(0, G.useMemo)(()=>o.length===0||o.length===1&&o[0]?.variant==="intro",[o]),d=(0, G.useCallback)(S=>{if(S.preventDefault(),!e)return;let C=i.trim();if(!C||s)return;let b=Os("user",C),R=Yp(C,e);l(P=>[...P,b]),a(""),u(true),k.current&&window.clearTimeout(k.current);let y=240+Math.floor(Math.random()*160);k.current=window.setTimeout(()=>{l(P=>[...P,R]),u(false),k.current=null;},y);},[i,s,e]),c=(0, G.useCallback)(S=>{if(S.key==="Enter"&&!S.shiftKey){if(S.preventDefault(),i.trim().length===0||s)return;let C=S.currentTarget.form;C&&C.requestSubmit();}},[i,s]),p=(0, G.useCallback)(S=>{a(S),requestAnimationFrame(()=>{v.current?.focus(),ti(v.current);});},[r]),h=(0, G.useCallback)(async(S,C)=>{x.current&&(window.clearTimeout(x.current),x.current=null);try{if(navigator.clipboard&&typeof navigator.clipboard.writeText=="function")await navigator.clipboard.writeText(C);else throw new Error("Clipboard API unavailable")}catch{let b=document.createElement("textarea");b.value=C,b.style.position="fixed",b.style.opacity="0",b.style.pointerEvents="none",document.body.appendChild(b),b.focus(),b.select();try{document.execCommand("copy");}finally{document.body.removeChild(b);}}m(S),x.current=window.setTimeout(()=>{m(null),x.current=null;},1e3);},[]),E=!e||i.trim().length===0||s;return {messages:o,draft:i,isSending:s,disableSend:E,copiedCodeId:f,showEmptyState:_,messageEndRef:g,textareaRef:v,handleSubmit:d,handleDraftChange:a,handleTextareaKeyDown:c,handlePromptClick:p,handleCopyCode:h}}var Gs=N(ct());var ko=N(L());function Us(){return (0, ko.jsxs)("div",{className:"palette-empty",children:[(0, ko.jsx)("strong",{children:"No selection"}),(0, ko.jsx)("p",{children:"Enable inspect mode and click an element to see its details."})]})}var In=N(L());function Bs({id:e,title:t,isOpen:n,onToggle:r,children:o}){return (0, In.jsxs)("section",{className:"palette-section","data-open":n?"true":"false",children:[(0, In.jsxs)("button",{type:"button",className:"section-toggle","aria-expanded":n,onClick:r,children:[(0, In.jsx)("span",{children:t}),(0, In.jsx)("span",{"aria-hidden":"true",children:n?"-":"+"})]}),(0, In.jsx)("div",{className:"section-body",id:`palette-section-${e}`,children:o})]})}var Co=N(L());function Ft({label:e,value:t,variant:n,valueClassName:r}){return (0, Co.jsxs)("div",{className:"data-pair",children:[(0, Co.jsx)("span",{className:"data-label",children:e}),(0, Co.jsx)("span",{className:["data-value",n||"",r||""].filter(Boolean).join(" "),children:t})]})}var Dn=N(L());function ri({label:e,color:t}){let n=t==="transparent";return (0, Dn.jsx)(Ft,{label:e,value:(0, Dn.jsxs)(Dn.Fragment,{children:[(0, Dn.jsx)("span",{className:`color-chip ${n?"is-transparent":""}`,style:{background:n?void 0:t}}),t]}),valueClassName:"color",variant:"mono"})}var Ws=N(L());function cn({items:e}){return (0, Ws.jsx)("div",{className:"palette-data",children:e.map(t=>(0, Ws.jsx)(Ft,{label:t.label,value:t.value,variant:t.variant,valueClassName:t.valueClassName},t.label))})}var yt=N(L());function Kp({title:e,values:t}){return (0, yt.jsxs)("div",{className:"spacing-group",children:[(0, yt.jsx)("span",{className:"spacing-title",children:e}),["top","right","bottom","left"].map(n=>(0, yt.jsxs)("div",{className:"spacing-row",children:[(0, yt.jsx)("span",{children:n.toUpperCase()}),(0, yt.jsx)("span",{className:"spacing-value",children:t[n]})]},n))]})}function Vs({margin:e,padding:t}){return (0, yt.jsxs)("div",{className:"spacing-grid",children:[(0, yt.jsx)(Kp,{title:"Margin",values:e}),(0, yt.jsx)(Kp,{title:"Padding",values:t})]})}var Ot=N(L());function Qs({sample:e,meta:t}){let n={fontFamily:t.fontFamily,fontSize:t.fontSize,fontWeight:t.fontWeight,lineHeight:t.lineHeight,letterSpacing:t.letterSpacing,textTransform:t.textTransform},r=[{label:"Font",value:t.fontFamily,variant:"mono"},{label:"Weight",value:t.fontWeight},{label:"Size",value:t.fontSize},{label:"Line height",value:t.lineHeight},{label:"Letter spacing",value:t.letterSpacing},{label:"Transform",value:t.textTransform},{label:"Alignment",value:t.textAlign}];return (0, Ot.jsxs)("div",{className:"palette-typography",children:[(0, Ot.jsx)("div",{className:"type-preview",style:n,children:e}),(0, Ot.jsx)(cn,{items:r}),(0, Ot.jsxs)("div",{className:"data-pair",children:[(0, Ot.jsx)("span",{className:"data-label",children:"Color"}),(0, Ot.jsxs)("span",{className:"data-value color",children:[(0, Ot.jsx)("span",{className:`color-chip ${t.color==="transparent"?"is-transparent":""}`,style:{background:t.color==="transparent"?void 0:t.color}}),t.color]})]})]})}var vt=N(ct());function th(e){return e.replace(/^webpack-internal:\/\/\/?/,"").replace(/^file:\/\//,"")}function Eo(e){if(!e?.fileName)return "\u2014";let t=th(e.fileName);if(e.lineNumber==null)return t;let n=e.columnNumber!=null?`:${e.columnNumber}`:"";return `${t}:${e.lineNumber}${n}`}var ge=N(L());function nh(e){return typeof navigator<"u"&&navigator.clipboard&&typeof navigator.clipboard.writeText=="function"?navigator.clipboard.writeText(e).then(()=>true).catch(()=>false):new Promise(t=>{if(typeof document>"u"){t(false);return}let n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.focus(),n.select();try{let r=document.execCommand("copy");t(r);}catch{t(false);}finally{document.body.removeChild(n);}})}function rh({source:e}){let[t,n]=(0, vt.useState)(false),r=(0, vt.useRef)(null);(0, vt.useEffect)(()=>()=>{r.current!==null&&(window.clearTimeout(r.current),r.current=null);},[]);let o=(0, vt.useCallback)(async()=>{await nh(e.snippet)&&(n(true),r.current!==null&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{n(false),r.current=null;},1600));},[e.snippet]),l=t?"Copied":e.language==="utility"?"Copy classes":"Copy CSS",i=e.sourceLocation?Eo(e.sourceLocation):null;return (0, ge.jsxs)("article",{className:"style-source","data-language":e.language,children:[(0, ge.jsxs)("header",{className:"style-source-header",children:[(0, ge.jsxs)("div",{className:"style-source-meta",children:[(0, ge.jsx)("span",{className:"style-source-label",children:e.label}),e.componentName?(0, ge.jsx)("span",{className:"style-source-component",children:e.componentName}):null,i&&i!=="\u2014"?(0, ge.jsx)("span",{className:"style-source-location",children:i}):null]}),(0, ge.jsx)("button",{type:"button",className:"copy-button",onClick:o,"data-copied":t?"true":"false",children:l})]}),(0, ge.jsx)("pre",{className:`style-code ${e.language==="utility"?"is-utility":"is-css"}`,children:(0, ge.jsx)("code",{children:e.snippet})})]})}function Zp({sources:e,hasFramework:t}){let n=(0, vt.useMemo)(()=>e?.filter(r=>!!r.snippet.trim())??[],[e]);return n.length===0?(0, ge.jsxs)("div",{className:"style-empty",children:[(0, ge.jsx)("strong",{children:"No authored styles detected"}),(0, ge.jsx)("p",{children:t?"Select a component that uses a supported CSS-in-JS library or ensure you are running a development build.":"Switch to a development build or select a framework-backed component to surface author styles."})]}):(0, ge.jsx)("div",{className:"style-sources",children:n.map(r=>(0, ge.jsx)(rh,{source:r},r.id))})}var $=N(L()),oh={summary:null,code:null,styles:null,layout:null,spacing:null,typography:null,appearance:null,image:null};function lh(e){return e?[{label:"Component",value:e.name,variant:"mono"},{label:"Source",value:Eo(e.location),variant:"mono"}]:[{label:"Component",value:"\u2014"},{label:"Source",value:"\u2014",variant:"mono"}]}function ih(e){if(!e||e.components.length===0)return null;let t=e.components.find(o=>o.isPrimary)??e.components[0],n=[{label:"Framework",value:e.version?`${e.frameworkName} ${e.version}`:e.frameworkName},...lh(t)],r=e.components.length>1?(0, $.jsxs)("div",{className:"code-stack",children:[(0, $.jsx)("div",{className:"code-stack-header",children:"Component stack"}),(0, $.jsx)("ol",{children:e.components.map((o,l)=>(0, $.jsxs)("li",{children:[(0, $.jsx)("span",{className:"stack-component",children:o.name}),(0, $.jsx)("span",{className:"stack-location",children:Eo(o.location)})]},`${o.name}-${l}`))})]}):null;return (0, $.jsxs)("div",{className:"palette-data",children:[(0, $.jsx)(cn,{items:n}),r]})}function ah(e,t=80){return e.length<=t?e:`${e.slice(0,t)}\u2026`}function Jp(e){if(!e)return oh;let t=[{label:"Element",value:e.tagName.toUpperCase()},{label:"Identifier",value:e.id?`#${e.id}`:"\u2014"},{label:"Classes",value:e.classes.length>0?e.classes.map(m=>`.${m}`).join(" "):"\u2014",variant:e.classes.length>0?"mono":void 0},{label:"Role",value:e.role??"\u2014"},{label:"Coordinates",value:`${Math.round(e.rect.x)} px, ${Math.round(e.rect.y)} px`},{label:"Dimensions",value:`${Math.round(e.rect.width)} \xD7 ${Math.round(e.rect.height)} px`}],n=(0, $.jsxs)("div",{className:"palette-data",children:[(0, $.jsx)(cn,{items:t}),e.textPreview?(0, $.jsx)("p",{className:"text-preview",children:e.textPreview}):null]}),r=ih(e.framework),o=(0, $.jsx)(Zp,{sources:e.styleSources,hasFramework:!!e.framework}),l=[{label:"Display",value:e.layout.display||"\u2014"},{label:"Positioning",value:e.layout.position||"static"},{label:"Z-index",value:e.layout.zIndex&&e.layout.zIndex!=="auto"?e.layout.zIndex:"auto"},{label:"Opacity",value:e.layout.opacity||"1"}];e.layout.gap&&e.layout.gap!=="0px"&&e.layout.gap!=="normal"&&l.push({label:"Gap",value:e.layout.gap}),e.layout.alignSelf&&e.layout.alignSelf!=="auto"&&l.push({label:"Align self",value:e.layout.alignSelf}),e.layout.display.includes("flex")&&l.push({label:"Direction",value:e.layout.flexDirection||"row"},{label:"Justify",value:e.layout.justifyContent||"flex-start"},{label:"Align items",value:e.layout.alignItems||"stretch"}),e.layout.display.includes("grid")&&(e.layout.gridTemplateColumns&&e.layout.gridTemplateColumns!=="none"&&l.push({label:"Columns",value:e.layout.gridTemplateColumns,variant:"mono"}),e.layout.gridTemplateRows&&e.layout.gridTemplateRows!=="none"&&l.push({label:"Rows",value:e.layout.gridTemplateRows,variant:"mono"}));let i=(0, $.jsx)(cn,{items:l}),a=(0, $.jsx)(Vs,{margin:e.spacing.margin,padding:e.spacing.padding}),s=(0, $.jsxs)("div",{className:"palette-data",children:[(0, $.jsx)(ri,{label:"Background",color:e.appearance.backgroundColor}),(0, $.jsx)(ri,{label:"Text",color:e.appearance.color}),(0, $.jsx)(Ft,{label:"Border",value:e.appearance.borderWidth&&e.appearance.borderWidth!=="0px"?(0, $.jsxs)($.Fragment,{children:[(0, $.jsx)("span",{className:`color-chip ${e.appearance.borderColor==="transparent"?"is-transparent":""}`,style:{background:e.appearance.borderColor&&e.appearance.borderColor!=="transparent"?e.appearance.borderColor:void 0}}),e.appearance.borderWidth," ",e.appearance.borderColor&&e.appearance.borderColor!=="transparent"?e.appearance.borderColor:""]}):"None",valueClassName:"color"}),(0, $.jsx)(Ft,{label:"Radius",value:e.appearance.borderRadius||"0"}),(0, $.jsx)(Ft,{label:"Box shadow",value:e.appearance.boxShadow==="none"?"None":e.appearance.boxShadow,variant:"mono"})]}),u=e.typography?(0, $.jsx)(Qs,{sample:e.textPreview||"Aa",meta:{fontFamily:e.typography.fontFamily,fontSize:e.typography.fontSize,fontWeight:e.typography.fontWeight,lineHeight:e.typography.lineHeight,letterSpacing:e.typography.letterSpacing,textTransform:e.typography.textTransform,textAlign:e.typography.textAlign,color:e.typography.color}}):null,f=e.image?(0, $.jsx)(cn,{items:[{label:"Source",value:e.image.src?ah(e.image.src):"\u2014",variant:"mono"},{label:"Alt text",value:e.image.alt||"\u2014"},{label:"Intrinsic size",value:`${e.image.naturalWidth||0} \xD7 ${e.image.naturalHeight||0} px`}]}):null;return {summary:n,code:r,styles:o,layout:i,spacing:a,typography:u,appearance:s,image:f}}var bo=["summary","code","styles","layout","spacing","typography","appearance","image"],Ys={summary:"Summary",code:"Code",styles:"Styles",layout:"Layout",spacing:"Spacing",typography:"Typography",appearance:"Appearance",image:"Image"};var hr=N(L());function Xs({snapshot:e,openSections:t,onToggleSection:n}){let r=(0, Gs.useMemo)(()=>Jp(e),[e]),o=(0, Gs.useMemo)(()=>bo.filter(l=>r[l]),[r]);return (0, hr.jsx)("div",{className:"palette-pane",children:(0, hr.jsx)("div",{className:"palette-scroll",children:(0, hr.jsx)("div",{className:"palette-sections",children:o.length>0?o.map(l=>(0, hr.jsx)(Bs,{id:l,title:Ys[l],isOpen:!!t[l],onToggle:()=>n(l),children:r[l]},l)):(0, hr.jsx)(Us,{})})})})}var yr=`
  .palette-pane {
    background: transparent;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
  }
  .palette-scroll {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 18px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: transparent;
  }
  .palette-scroll::-webkit-scrollbar {
    width: 6px;
  }
  .palette-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
  }
  .palette-sections {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .palette-section {
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(20, 28, 40, 0.82);
    border-radius: 14px;
    box-shadow: 0 18px 45px -35px rgba(4, 10, 18, 0.9);
    overflow: hidden;
    backdrop-filter: blur(18px);
  }
  .section-toggle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    border: none;
    color: var(--text-primary);
    padding: 16px 18px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: color 140ms ease, background 140ms ease;
  }
  .section-toggle:hover {
    color: var(--accent);
    background: rgba(90, 140, 220, 0.08);
  }
  .section-body {
    padding: 16px 18px 18px 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: rgba(10, 14, 22, 0.45);
  }
  .palette-section[data-open='false'] .section-body {
    display: none;
  }
  .palette-data {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .style-sources {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .style-source {
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    background: rgba(16, 24, 38, 0.72);
    padding: 16px 18px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
  }
  .style-source-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .style-source-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }
  .style-source-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--accent);
  }
  .style-source-component {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-primary);
  }
  .style-source-location {
    font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
    font-size: 11px;
    color: rgba(179, 197, 223, 0.7);
  }
  .copy-button {
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    background: rgba(84, 120, 196, 0.18);
    color: var(--text-primary);
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 140ms ease, color 140ms ease, border-color 140ms ease;
  }
  .copy-button:hover {
    border-color: rgba(123, 162, 240, 0.6);
    background: rgba(123, 162, 240, 0.28);
  }
  .copy-button[data-copied='true'] {
    color: var(--accent);
    border-color: rgba(123, 162, 240, 0.9);
  }
  .style-code {
    margin: 0;
    padding: 14px 16px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(8, 12, 22, 0.75);
    font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
    font-size: 12px;
    line-height: 1.55;
    color: var(--text-primary);
    max-height: 220px;
    overflow: auto;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .style-code.is-utility {
    white-space: normal;
  }
  .style-code code {
    display: block;
    white-space: inherit;
  }
  .style-empty {
    border: 1px dashed rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    background: rgba(16, 24, 36, 0.5);
    padding: 20px 18px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
    color: var(--text-secondary);
  }
  .style-empty strong {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: 0.02em;
  }
  .code-stack {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    background: rgba(16, 24, 36, 0.6);
    padding: 14px 16px;
  }
  .code-stack-header {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: rgba(179, 197, 223, 0.75);
    text-transform: uppercase;
  }
  .code-stack ol {
    list-style: decimal inside;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0;
    padding: 0;
  }
  .code-stack li {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
    color: var(--text-secondary);
    word-break: break-word;
  }
  .stack-component {
    font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
    font-size: 12px;
    color: var(--text-primary);
  }
  .stack-location {
    font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
    font-size: 11px;
    color: rgba(179, 197, 223, 0.7);
    word-break: break-word;
  }
  .data-pair {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 11px 14px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    background: rgba(18, 26, 38, 0.6);
  }
  .data-label {
    font-size: 12px;
    font-weight: 500;
    color: rgba(179, 197, 223, 0.75);
  }
  .data-value {
    margin-left: auto;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    text-align: right;
    word-break: break-word;
  }
  .data-value.mono {
    font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
    font-size: 12px;
    letter-spacing: 0.02em;
  }
  .data-value.color {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
    font-size: 12px;
    letter-spacing: 0.02em;
  }
  .color-chip {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
  }
  .color-chip.is-transparent {
    background-image:
      linear-gradient(45deg, rgba(255, 255, 255, 0.12) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(255, 255, 255, 0.12) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.12) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.12) 75%);
    background-size: 8px 8px;
    background-position: 0 0, 0 4px, 4px -4px, -4px 0;
  }
  .text-preview {
    margin: 4px 0 0;
    padding: 14px 16px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    background: rgba(22, 32, 48, 0.7);
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.5;
  }
  .spacing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
  }
  .spacing-group {
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    background: rgba(20, 28, 40, 0.55);
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .spacing-title {
    font-size: 12px;
    font-weight: 600;
    color: rgba(179, 197, 223, 0.75);
  }
  .spacing-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--text-secondary);
  }
  .spacing-value {
    font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
    color: var(--text-primary);
  }
  .palette-typography {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .type-preview {
    padding: 18px 20px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    background: radial-gradient(140% 140% at 30% 10%, rgba(88, 122, 188, 0.18), rgba(16, 24, 38, 0.78));
    color: var(--text-primary);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
  }
  .palette-empty {
    margin: 60px auto;
    max-width: 240px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    padding: 28px 22px;
    color: var(--text-secondary);
    background: rgba(18, 26, 38, 0.65);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .palette-empty strong {
    color: var(--text-primary);
    font-size: 14px;
    letter-spacing: 0.04em;
  }
  .control-stack {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .control-grid.two {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
  .control-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
  }
  .control-stacked {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .control {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 13px;
    color: var(--text-secondary);
  }
  .control-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }
  .control-input {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--hairline-soft);
    background: var(--surface-panel-soft);
    color: var(--text-primary);
    padding: 6px 10px;
    height: 32px;
    border-radius: 10px;
  }
  .control-input input,
  .control-input select {
    flex: 1;
    background: transparent;
    border: none;
    color: inherit;
    height: 100%;
  }
  .control-input select {
    appearance: none;
  }
  .control-input input:focus,
  .control-input select:focus,
  .palette-selection input:focus {
    outline: 1px solid var(--accent);
    outline-offset: 2px;
  }
  .control-suffix {
    color: var(--text-muted);
    font-size: 12px;
  }
  .linked-inputs {
    display: flex;
    gap: 8px;
  }
  .linked-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .linked-field input {
    width: 52px;
    border: 1px solid var(--hairline-soft);
    background: var(--surface-panel-soft);
    color: var(--text-primary);
    padding: 4px 6px;
    border-radius: 8px;
  }
  .segmented.small {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--hairline-soft);
    border-radius: 999px;
    padding: 4px;
    background: rgba(22, 33, 48, 0.7);
  }
  .segmented.small .segment {
    border: none;
    background: transparent;
    color: var(--text-muted);
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 12px;
    cursor: pointer;
    transition: color 140ms ease, background 140ms ease;
  }
  .segmented.small .segment.active {
    background: var(--accent-muted);
    color: var(--text-primary);
    box-shadow: 0 0 0 1px rgba(106, 180, 255, 0.2);
  }
  .link-button {
    border: 1px solid var(--hairline-soft);
    background: var(--surface-panel-soft);
    color: var(--text-secondary);
    padding: 8px 14px;
    border-radius: 999px;
    cursor: pointer;
    transition: color 140ms ease, border-color 140ms ease;
  }
  .link-button:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
  .anchor-widget {
    display: grid;
    grid-template-columns: repeat(3, 30px);
    gap: 6px;
    padding: 10px;
    border: 1px solid var(--hairline-soft);
    border-radius: 12px;
    background: rgba(27, 41, 58, 0.75);
  }
  .anchor-cell {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid var(--hairline-soft);
    background: var(--surface-panel-soft);
    cursor: pointer;
    transition: border-color 140ms ease, background 140ms ease;
  }
  .anchor-cell:hover {
    border-color: var(--accent);
  }
  .anchor-cell.active {
    border-color: var(--accent);
    background: var(--accent-muted);
  }
  label.control.toggle {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  label.control.toggle input {
    appearance: none;
    width: 38px;
    height: 20px;
    border-radius: 999px;
    border: 1px solid var(--hairline-soft);
    background: var(--surface-panel-soft);
    position: relative;
    cursor: pointer;
    transition: background 140ms ease, border-color 140ms ease;
  }
  label.control.toggle input::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--text-muted);
    transition: transform 140ms ease, background 140ms ease;
  }
  label.control.toggle input:checked {
    background: var(--accent-muted);
    border-color: var(--accent);
  }
  label.control.toggle input:checked::after {
    transform: translateX(16px);
    background: var(--accent);
  }
  .toggle-label {
    color: var(--text-secondary);
    font-size: 13px;
  }
  label.control.toggle.standalone {
    gap: 12px;
    padding: 10px 14px;
    border: 1px solid var(--hairline-soft);
    border-radius: 12px;
    background: rgba(27, 41, 58, 0.6);
    align-self: flex-start;
  }
  label.control.checkbox {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  label.control.checkbox input {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid var(--hairline-soft);
    background: var(--surface-panel);
    position: relative;
    cursor: pointer;
    transition: background 140ms ease, border-color 140ms ease;
  }
  label.control.checkbox input:checked {
    background: var(--accent);
    border-color: var(--accent);
  }
  .checkbox-box {
    display: none;
  }
  .fill-row {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .swatch {
    width: 32px;
    height: 32px;
    border: 1px solid var(--hairline-soft);
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(106, 180, 255, 0.65), rgba(76, 158, 240, 0.65));
    cursor: pointer;
  }
  .fill-actions button,
  .button.tertiary {
    border: 1px solid var(--hairline-soft);
    background: var(--surface-panel);
    color: var(--text-secondary);
    padding: 6px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: color 140ms ease, border-color 140ms ease;
  }
  .fill-actions button:hover,
  .button.tertiary:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
  .effects .effect-row {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid var(--hairline-soft);
    background: rgba(27, 41, 58, 0.7);
    padding: 10px 14px;
    border-radius: 12px;
  }
  .effect-labels {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .effect-title {
    font-size: 13px;
  }
  .effect-meta {
    font-size: 12px;
    color: var(--text-muted);
  }
  .effect-edit {
    border: 1px solid var(--hairline-soft);
    background: var(--surface-panel);
    color: var(--text-secondary);
    padding: 6px 12px;
    border-radius: 8px;
    cursor: pointer;
  }
  .effect-edit:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
  .palette-apply-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: rgba(203, 217, 237, 0.78);
  }
  .apply-actions {
    display: flex;
    gap: 12px;
  }
  .button.primary {
    border: 1px solid rgba(150, 184, 255, 0.5);
    background: rgba(126, 168, 255, 0.24);
    color: rgba(236, 242, 255, 0.96);
    padding: 9px 20px;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 600;
  }
  .button.primary:hover {
    background: rgba(150, 190, 255, 0.32);
    border-color: rgba(160, 198, 255, 0.6);
  }
  .button.secondary {
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(214, 227, 247, 0.82);
    padding: 9px 20px;
    border-radius: 999px;
    cursor: pointer;
    transition: color 140ms ease, border-color 140ms ease;
  }
  .button.secondary:hover {
    color: rgba(234, 240, 255, 0.95);
    border-color: rgba(150, 184, 255, 0.4);
  }
`;var ai=N(ct());var qp=new Set([0,1,2,10,11,14,15,22,23,24,27]);function sh(e){if(!e)return null;if(typeof e=="string")return e;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="object"){let t=e;if(t.displayName)return t.displayName;if(t.name)return t.name;if(typeof t.render=="function")return t.render.displayName||t.render.name||null}return null}function uh(e){if(e?.fileName)return {fileName:e.fileName,lineNumber:e.lineNumber,columnNumber:e.columnNumber}}function ch(e){let t=e;for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&(n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))){let r=t[n];if(r)return r}return null}function dh(e){let t=e;for(;t;){if(qp.has(t.tag))return t;t=t.return;}return null}function ph(e){let t=[],n=e;for(;n;)qp.has(n.tag)&&t.push(n),n=n.return;return t}function fh(e){let t=sh(e.type??e.elementType);if(!t)return null;let n=uh(e._debugSource);return {name:t,location:n,runtimeType:e.type??e.elementType,fiberTag:e.tag,props:e.memoizedProps}}function mh(){if(typeof window>"u")return;let e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(e?.renderers){if(e.renderers instanceof Map){for(let t of e.renderers.values()){if(t?.version)return t.version;if(t?.rendererPackageName)return t.rendererPackageName}return}if(Array.isArray(e.renderers))for(let t of e.renderers){if(t?.version)return t.version;if(t?.rendererPackageName)return t.rendererPackageName}}}var gh={id:"react",name:"React",detect(e){let t=ch(e);if(!t)return null;let n=dh(t);if(!n)return null;let r=ph(n),o=[];for(let[l,i]of r.entries()){let a=fh(i);a&&o.push({...a,isPrimary:l===0});}return o.length===0?null:{frameworkId:this.id,frameworkName:this.name,version:mh(),components:o,diagnostics:{fiberDepth:r.length}}}},hh=[gh];function ef(e){for(let t of hh)try{let n=t.detect(e);if(n)return n}catch(n){typeof console<"u"&&typeof console.debug=="function"&&console.debug(`[Enhance overlay] ${t.id} detector failed`,n);}return null}function li(e,t,n){if(Array.isArray(e)){for(let o of e)li(o,t,n);return}if(typeof e=="function"){try{let o=e(t);li(o,t,n);}catch{}return}if(e==null)return;let r=String(e);r.trim().length!==0&&n.push(r);}function yh(e){let n=e.runtimeType?.componentStyle;if(!n?.rules||!Array.isArray(n.rules))return null;let r=[],o=e.props??{};for(let l of n.rules)li(l,o,r);return r.length===0?null:r.join(`
`).trim()}function vh(e){let t=e.framework;if(!t||t.frameworkId!=="react"||t.components.length===0)return [];let n=[],r=new Set;for(let o of t.components){let l=yh(o);if(!l)continue;let a=o.runtimeType?.componentStyle?.componentId,s=a??`${o.name??"component"}:${n.length}`;r.has(s)||(r.add(s),n.push({id:`styled-components:${s}`,label:"styled-components",language:"css",snippet:l,componentName:o.name,sourceLocation:o.location,frameworkId:t.frameworkId,meta:{styledComponentId:a??null}}));}return n}function xh(e){let t=e.runtimeType;if(!t)return null;let n=t.__emotion_real??t;if(!n||!n.__emotion_styles)return null;let r=[],o=e.props??{};for(let i of n.__emotion_styles)li(i,o,r);if(r.length===0)return null;let l=n.displayName||t.displayName||e.name;return {snippet:r.join(`
`).trim(),label:l}}function wh(e){let t=e.framework;if(!t||t.frameworkId!=="react"||t.components.length===0)return [];let n=[],r=new Set;for(let o of t.components){let l=xh(o);if(!l)continue;let i=`${o.name??l.label??"emotion"}:${n.length}`;r.has(i)||(r.add(i),n.push({id:`emotion:${i}`,label:"Emotion",language:"css",snippet:l.snippet,componentName:l.label??o.name,sourceLocation:o.location,frameworkId:t.frameworkId}));}return n}var Sh=["bg-","text-","flex","grid","gap-","p-","px-","py-","pt-","pr-","pb-","pl-","m-","mx-","my-","mt-","mr-","mb-","ml-","border","rounded","shadow","font-","leading-","tracking-","w-","h-","min-","max-","sm:","md:","lg:","xl:","2xl:"];function kh(e){let t=e.snapshot.classes;if(!t||t.length===0)return [];let n=t.filter(o=>o?o.includes(":")?true:Sh.some(l=>o.startsWith(l)):false);return n.length===0?[]:[{id:"utility:classes",label:"Utility classes",language:"utility",snippet:n.join(" "),componentName:e.snapshot.tagName.toUpperCase(),frameworkId:e.framework?.frameworkId,meta:{classCount:n.length}}]}function Ch(e){try{let t=new URL(e,typeof document<"u"?document.baseURI:void 0),n=t.pathname.split("/").filter(Boolean);return n.length>0?n[n.length-1]:t.host||e}catch{let t=e.split(/[/\\]/).filter(Boolean);return t.length>0?t[t.length-1]:e}}function Eh(e){let t=e.ownerNode;if(t&&t instanceof Element){let n=t.tagName.toLowerCase(),r=t.id?`#${t.id}`:"",o="",l=t.getAttribute("class");l&&l.trim().length>0&&(o=`.${l.trim().replace(/\s+/g,".")}`);let i=`${n}${r}${o}`||"inline<style>";return {label:i,location:{fileName:i}}}return {label:"inline<style>",location:{fileName:"inline<style>"}}}function bh(e){return e.href?{label:Ch(e.href),location:{fileName:e.href}}:Eh(e)}function Ph(e,t=2){let n=" ".repeat(t);return e.split(`
`).map(r=>`${n}${r}`).join(`
`)}function oi(e,t,n,r,o,l,i){for(let a=0;a<n.length;a+=1){let s=n[a];if(typeof CSSStyleRule<"u"&&s instanceof CSSStyleRule){let f=s.selectorText||"",m=f.split(",").map(_=>_.trim()).filter(_=>_.length>0);if(m.length===0)continue;let g=false;for(let _ of m)try{if(e.matches(_)){g=!0;break}}catch{}if(!g)continue;let v=s.style,k=[];for(let _=0;_<v.length;_+=1){let d=v.item(_);if(!d)continue;let c=v.getPropertyValue(d),p=v.getPropertyPriority(d);k.push(`  ${d}: ${c}${p&&p.length>0?" !important":""};`);}if(k.length===0)continue;let x=`${f} {
${k.join(`
`)}
}`;r.length>0&&(x=r.slice().reverse().reduce((_,d)=>`${d} {
${Ph(_)}
}`,x)),l.push({snippet:x,label:o.label,location:o.location,order:i.value}),i.value+=1;continue}if(typeof CSSMediaRule<"u"&&s instanceof CSSMediaRule){let f=s.conditionText||s.media?.mediaText||"";if(f&&typeof window<"u"&&typeof window.matchMedia=="function")try{if(!window.matchMedia(f).matches)continue}catch{}let m=f?[...r,`@media ${f}`]:r;oi(e,t,s.cssRules,m,o,l,i);continue}if(typeof CSSSupportsRule<"u"&&s instanceof CSSSupportsRule){let f=s.conditionText||"";if(f&&typeof CSS<"u"&&typeof CSS.supports=="function")try{if(!CSS.supports(f))continue}catch{}let m=f?[...r,`@supports ${f}`]:r;oi(e,t,s.cssRules,m,o,l,i);continue}let u=s;if(u&&typeof u.cssRules<"u"){let f=u.cssRules;f&&oi(e,t,f,r,o,l,i);}}}function Th(e){let t=e.element,n=t.ownerDocument??document;if(!n)return [];let r=Array.from(n.styleSheets??[]),o=[],l={value:0};for(let s of r){if(!(s instanceof CSSStyleSheet))continue;let u;try{u=s.cssRules;}catch{continue}if(!u||u.length===0)continue;let f=bh(s);oi(t,s,u,[],f,o,l);}return o.length===0?[]:o.slice(-5).reverse().map((s,u)=>({id:`css-rule:${s.order}:${s.label}:${u}`,label:"Stylesheet",language:"css",snippet:s.snippet,componentName:s.label,sourceLocation:s.location,frameworkId:e.framework?.frameworkId,meta:{cascadeOrder:s.order}}))}var Nh=[vh,wh,Th,kh];function tf(e){let t=[],n=new Set;for(let r of Nh){let o=[];try{o=r(e);}catch(l){typeof console<"u"&&typeof console.debug=="function"&&console.debug("[Enhance overlay] style detector failed",l);}for(let l of o)!l||typeof l.id!="string"||n.has(l.id)||(n.add(l.id),t.push({...l,snippet:l.snippet.trim()}));}return t}var _h=new Set(["a","abbr","article","b","cite","code","dd","div","em","figcaption","h1","h2","h3","h4","h5","h6","label","li","mark","p","q","small","span","strong","sub","sup","td","th","time"]);function Lh(e){let t=e.tagName.toLowerCase(),n=e instanceof HTMLElement&&e.id?`#${e.id}`:"",r=e instanceof HTMLElement?Array.from(e.classList).filter(Boolean).slice(0,2):[],o=r.length>0?`.${r.join(".")}`:"";return `${t}${n}${o}`}function Rh(e,t,n){if(!t)return  false;let r=e.tagName.toLowerCase();return _h.has(r)||e.children.length===0?true:n.display.includes("inline")}function ii(e){return !e||e==="transparent"||e==="rgba(0, 0, 0, 0)"?"transparent":e}function nf(e){let t=window.getComputedStyle(e),n=e.getBoundingClientRect(),r=window.scrollX,o=window.scrollY,l=e.textContent?e.textContent.replace(/\s+/g," ").trim():"",i=l.length>0?l.length>140?`${l.slice(0,140)}\u2026`:l:null,a=Rh(e,l,t),s=e instanceof HTMLImageElement,u={element:e,label:Lh(e),tagName:e.tagName.toLowerCase(),id:e instanceof HTMLElement&&e.id?e.id:null,classes:e instanceof HTMLElement?Array.from(e.classList):[],role:e instanceof HTMLElement?e.getAttribute("role"):null,textPreview:i,rect:{x:n.left+r,y:n.top+o,width:n.width,height:n.height},layout:{display:t.display,position:t.position,zIndex:t.zIndex,opacity:t.opacity,flexDirection:t.flexDirection,justifyContent:t.justifyContent,alignItems:t.alignItems,alignSelf:t.alignSelf,gap:t.gap,gridTemplateColumns:t.gridTemplateColumns,gridTemplateRows:t.gridTemplateRows},spacing:{margin:{top:t.marginTop,right:t.marginRight,bottom:t.marginBottom,left:t.marginLeft},padding:{top:t.paddingTop,right:t.paddingRight,bottom:t.paddingBottom,left:t.paddingLeft}},appearance:{backgroundColor:ii(t.backgroundColor),borderColor:ii(t.borderColor),borderWidth:t.borderWidth,borderRadius:t.borderRadius,boxShadow:t.boxShadow,color:ii(t.color)}};a&&(u.typography={fontFamily:t.fontFamily,fontSize:t.fontSize,fontWeight:t.fontWeight,lineHeight:t.lineHeight,letterSpacing:t.letterSpacing,fontStyle:t.fontStyle,textTransform:t.textTransform,textAlign:t.textAlign,color:ii(t.color)}),s&&e instanceof HTMLImageElement&&(u.image={src:e.currentSrc||e.src,alt:e.alt,naturalWidth:e.naturalWidth,naturalHeight:e.naturalHeight});let f=ef(e);f&&(u.framework=f);let m=tf({element:e,snapshot:u,framework:f});return m.length>0&&(u.styleSources=m),u}function rf({isInspecting:e,setSnapshot:t,setSelectionLabel:n,onCancelInspect:r}){let o=(0, ai.useRef)({hover:null,selected:null,hoverTarget:null,selectedTarget:null,overlayHost:null,previousBodyCursor:null,previousDocCursor:null,previousUserSelect:null,snapshotCache:new WeakMap});(0, ai.useEffect)(()=>{let l=o.current,i=()=>{l.hover&&(l.hover.remove(),l.hover=null),l.selected&&(l.selected.remove(),l.selected=null),l.hoverTarget=null,l.selectedTarget=null,l.overlayHost=null,l.snapshotCache=new WeakMap,l.previousBodyCursor!==null?(document.body.style.cursor=l.previousBodyCursor,l.previousBodyCursor=null):document.body.style.removeProperty("cursor"),l.previousDocCursor!==null?(document.documentElement.style.cursor=l.previousDocCursor,l.previousDocCursor=null):document.documentElement.style.removeProperty("cursor"),l.previousUserSelect!==null?(document.body.style.userSelect=l.previousUserSelect,l.previousUserSelect=null):document.body.style.removeProperty("user-select");};if(!e){i(),n(null),t(null);return}if(typeof window>"u"||typeof document>"u"||!document.body||!document.documentElement)return;l.overlayHost=document.querySelector("enhance-overlay"),l.previousBodyCursor===null&&(l.previousBodyCursor=document.body.style.cursor||""),l.previousDocCursor===null&&(l.previousDocCursor=document.documentElement.style.cursor||""),l.previousUserSelect===null&&(l.previousUserSelect=document.body.style.userSelect||""),document.body.style.cursor="crosshair",document.documentElement.style.cursor="crosshair",document.body.style.userSelect="none";let a=y=>{let P=y==="hover"?l.hover:l.selected;return P||(P=document.createElement("div"),P.setAttribute("data-enhance-inspect",y),P.style.position="fixed",P.style.top="0",P.style.left="0",P.style.width="0",P.style.height="0",P.style.pointerEvents="none",P.style.zIndex="2147483645",P.style.boxSizing="border-box",P.style.display="none",P.style.transition="transform 80ms ease, width 80ms ease, height 80ms ease",y==="hover"?(P.style.border="1.5px solid rgba(106, 180, 255, 0.85)",P.style.background="rgba(106, 180, 255, 0.18)",P.style.boxShadow="0 0 0 1px rgba(10, 21, 36, 0.35)"):(P.style.border="2px solid rgba(106, 180, 255, 0.95)",P.style.background="rgba(106, 180, 255, 0.24)",P.style.boxShadow="0 0 0 1px rgba(10, 21, 36, 0.45)"),document.body.appendChild(P),y==="hover"?l.hover=P:l.selected=P),P},s=a("hover"),u=a("selected"),f=(y,P=false)=>{if(!y){t(null),n(null);return}if(P){let se=null;t(X=>{if(!X||X.element!==y)return se=X,X;let mn=y.getBoundingClientRect(),wt={x:mn.left+window.scrollX,y:mn.top+window.scrollY,width:mn.width,height:mn.height};if(Math.abs(X.rect.x-wt.x)<.5&&Math.abs(X.rect.y-wt.y)<.5&&Math.abs(X.rect.width-wt.width)<.5&&Math.abs(X.rect.height-wt.height)<.5)return se=X,X;let On={...X,rect:wt};return se=On,On}),se&&se.element===y&&l.snapshotCache.set(y,se);return}let A=l.snapshotCache.get(y);if(A){t(A),n(A.label);return}let he=nf(y);l.snapshotCache.set(y,he),t(he),n(he.label);},m=y=>{y&&(y.style.display="none");},g=(y,P)=>{let A=P.getBoundingClientRect();if(A.width<=0||A.height<=0){y.style.display="none";return}y.style.display="block",y.style.transform=`translate3d(${Math.round(A.left)}px, ${Math.round(A.top)}px, 0)`,y.style.width=`${Math.round(A.width)}px`,y.style.height=`${Math.round(A.height)}px`,y.style.borderRadius=window.getComputedStyle(P).borderRadius;},v=y=>{if(!y)return  false;if(y===s||y===u||y.closest("[data-enhance-overlay-region]"))return  true;let P=l.overlayHost;if(!P)return  false;if(y===P||P.contains(y))return  true;let A=y.getRootNode();return A instanceof ShadowRoot&&A.host===P},k=(y,P)=>{let A=document.elementFromPoint(y,P);return !A||v(A)?null:A},x=y=>{if(!y){m(s);return}g(s,y);},_=y=>{if(!y){m(u);return}g(u,y);};l.hoverTarget=null,l.selectedTarget=l.selectedTarget&&l.selectedTarget.isConnected?l.selectedTarget:null,l.selectedTarget?(_(l.selectedTarget),f(l.selectedTarget)):(_(null),f(null)),m(s);let d=y=>{if(y.pointerType==="touch")return;let P=k(y.clientX,y.clientY);P!==l.hoverTarget&&(l.hoverTarget=P,x(P));},c=y=>{if(y.button!==0)return;let P=k(y.clientX,y.clientY);P&&(window.getSelection()?.removeAllRanges(),l.selectedTarget=P,_(P),f(P),y.preventDefault(),y.stopPropagation(),y.stopImmediatePropagation());},p=y=>{let P=k(y.clientX,y.clientY);P&&l.selectedTarget&&P===l.selectedTarget&&(y.preventDefault(),y.stopPropagation(),y.stopImmediatePropagation());},h=y=>{y.key==="Escape"&&(y.preventDefault(),r());},E=()=>{l.hoverTarget&&l.hoverTarget.isConnected?x(l.hoverTarget):l.hoverTarget&&(l.hoverTarget=null,m(s)),l.selectedTarget&&l.selectedTarget.isConnected?(_(l.selectedTarget),f(l.selectedTarget,true)):l.selectedTarget&&(l.selectedTarget=null,m(u),f(null));},S=()=>{E();},C=()=>{E();};window.addEventListener("pointermove",d,true),window.addEventListener("pointerdown",c,true),window.addEventListener("click",p,true),window.addEventListener("keydown",h,true),window.addEventListener("scroll",S,true),window.addEventListener("resize",C);let b=0,R=()=>{E(),b=window.requestAnimationFrame(R);};return E(),b=window.requestAnimationFrame(R),()=>{window.removeEventListener("pointermove",d,true),window.removeEventListener("pointerdown",c,true),window.removeEventListener("click",p,true),window.removeEventListener("keydown",h,true),window.removeEventListener("scroll",S,true),window.removeEventListener("resize",C),window.cancelAnimationFrame(b),i();}},[e,r,n,t]);}var Ks=N(L());function si({size:e=16,...t}){return (0, Ks.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",...t,children:(0, Ks.jsx)("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}var zn=N(ct()),of=N(Rs());var xt=N(L()),Mh=`
  .floating-properties {
    pointer-events: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    font-family: "SF Pro Text", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #F0F3F8;
  }
  .floating-properties > * {
    pointer-events: auto;
  }
  .floating-properties .properties-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
    background: linear-gradient(135deg, #161616 0%, #1f1f1f 100%);
    color: rgba(240, 243, 248, 0.92);
    border-radius: 999px;
    padding: 6px 14px 6px 12px;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 160ms ease, color 160ms ease, box-shadow 160ms ease;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18), 0 8px 18px rgba(0, 0, 0, 0.4);
  }
  .floating-properties .properties-pill:hover {
    background: linear-gradient(135deg, #1f1f1f 0%, #242424 100%);
    color: #FFFFFF;
  }
  .floating-properties .properties-pill::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
  }
  .floating-properties .properties-pill[aria-expanded='true'] {
    background: linear-gradient(135deg, #2c2c2c 0%, #343434 100%);
    color: #FFFFFF;
  }
  .floating-properties .properties-panel {
    background: linear-gradient(180deg, rgba(22, 22, 22, 0.96) 0%, rgba(9, 9, 9, 0.96) 100%);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 28px 60px -32px rgba(0, 0, 0, 0.9);
    max-height: clamp(260px, 52vh, 480px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .floating-properties .properties-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 22px 12px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(245, 246, 248, 0.92);
  }
  .floating-properties .properties-panel :where(button, input, textarea, select) {
    font: inherit;
    color: inherit;
  }
  .floating-properties .widget-button {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.92);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 150ms ease;
  }
  .floating-properties .widget-button:hover {
    background: rgba(255, 255, 255, 0.22);
  }
  ${yr}
  .floating-properties .palette-pane {
    background: transparent;
  }
  .floating-properties .palette-scroll {
    padding: 4px 18px 20px;
    max-height: 320px;
  }
  .floating-properties .palette-section {
    background: linear-gradient(180deg, rgba(34, 34, 34, 0.92) 0%, rgba(20, 20, 20, 0.88) 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  }
  .floating-properties .palette-section .section-toggle {
    padding: 14px 18px;
    border-radius: 12px 12px 0 0;
    background: rgba(255, 255, 255, 0.05);
    color: rgba(240, 243, 248, 0.92);
  }
  .floating-properties .palette-section .section-toggle:hover {
    background: rgba(255, 255, 255, 0.08);
  }
  .floating-properties .palette-section .section-body {
    padding: 14px 18px 18px;
  }
  .floating-properties .palette-empty {
    padding: 20px;
    border-radius: 12px;
    border: 1px dashed rgba(255, 255, 255, 0.12);
    background: rgba(30, 30, 30, 0.65);
  }
  .floating-properties .palette-section-title {
    font-size: 12px;
    letter-spacing: 0.18em;
    color: rgba(220, 228, 236, 0.75);
  }
  .floating-properties .palette-section-content {
    font-size: 13px;
    color: rgba(235, 238, 242, 0.96);
  }
  .floating-properties .palette-section-content strong {
    color: #FFFFFF;
  }
  .floating-properties code {
    font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
  }
`;function lf({showPill:e,isOpen:t,onToggle:n,onClose:r,snapshot:o,openSections:l,onToggleSection:i}){let a=(0, zn.useRef)(null),[s,u]=(0, zn.useState)(null);return (0, zn.useEffect)(()=>{let f=document.querySelector('[data-floating-root="properties"]');f||(f=document.createElement("div"),f.setAttribute("data-floating-root","properties"),Object.assign(f.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"2147483646"}),document.body.appendChild(f)),u(f);let m=document.createElement("div");m.setAttribute("data-enhance-overlay-region","properties");let g=document.createElement("style");return g.textContent=Mh,m.appendChild(g),a.current=m,f.appendChild(m),()=>{m.parentNode&&m.parentNode.removeChild(m),a.current=null;}},[]),(0, zn.useEffect)(()=>{let f=a.current;if(!f)return;let m=()=>{if(!o){f.style.display="none";return}f.style.display="flex";let v=16,k=12,{x,y:_,width:d,height:c}=o.rect,p=x-window.scrollX,h=_-window.scrollY,E=Math.min(320,window.innerWidth-v*2),S=p+d/2-E/2;S=Math.max(v,Math.min(S,window.innerWidth-v-E));let C=h+c+k;Object.assign(f.style,{position:"fixed",left:`${S}px`,top:`${C}px`,maxWidth:`${E}px`,width:"max-content",pointerEvents:"auto"});let b=f.offsetHeight,R=C;C+b>window.innerHeight-v&&(R=Math.max(v,h-b-k)),f.style.top=`${R}px`;};m();let g=()=>m();return window.addEventListener("scroll",g,true),window.addEventListener("resize",g),()=>{window.removeEventListener("scroll",g,true),window.removeEventListener("resize",g);}},[o]),!s||!a.current||!o?null:(0, of.createPortal)((0, xt.jsxs)("div",{className:"floating-properties",children:[e&&(0, xt.jsx)("button",{type:"button",className:"properties-pill",onClick:n,"aria-expanded":t,children:"Properties"}),t&&o&&(0, xt.jsxs)("div",{className:"properties-panel",children:[(0, xt.jsxs)("div",{className:"properties-panel-header",children:[(0, xt.jsx)("span",{children:"Properties"}),(0, xt.jsx)("button",{type:"button",className:"widget-button",onClick:r,"aria-label":"Hide properties",children:(0, xt.jsx)(si,{size:12})})]}),(0, xt.jsx)(Xs,{snapshot:o,openSections:l,onToggleSection:i})]})]}),a.current)}var Zs=`
  :host {
    all: initial;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2147483647;
    font-family: "SF Pro Text", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #E6EAF2;
  }
  :host {
    --surface-base: #111a27;
    --surface-header: #172230;
    --surface-panel: #1b293a;
    --surface-panel-soft: #202f42;
    --surface-elevated: rgba(24, 37, 54, 0.72);
    --text-primary: #E6EAF2;
    --text-secondary: #AEB7C4;
    --text-muted: rgba(174, 183, 196, 0.72);
    --hairline: rgba(84, 106, 134, 0.55);
    --hairline-soft: rgba(84, 106, 134, 0.3);
    --accent: #6AB4FF;
    --accent-hover: #4C9EF0;
    --accent-muted: rgba(106, 180, 255, 0.14);
    --accent-strong: rgba(106, 180, 255, 0.28);
    --code-bg: #132133;
    --code-border: rgba(84, 106, 134, 0.45);
    --shadow-soft: 0 24px 60px -40px rgba(12, 20, 32, 0.65);
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 12px;
    --spacing-lg: 16px;
    --spacing-xl: 24px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  button,
  input,
  select,
  textarea {
    font: inherit;
    color: inherit;
  }
  input,
  select,
  textarea {
    background: none;
  }
  .overlay-root {
    height: 100vh;
    display: inline-flex;
    justify-content: flex-end;
    align-items: stretch;
    position: relative;
    width: max-content;
    pointer-events: none;
  }
  .drawer-launcher {
    pointer-events: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    background: linear-gradient(180deg, #202020 0%, #101010 100%);
    border: none;
    border-radius: 999px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.24), 0 1px 4px rgba(0, 0, 0, 0.12), inset 0 0 0 1.5px rgba(255, 255, 255, 0.12);
    opacity: 1;
    visibility: visible;
    transition: top 200ms cubic-bezier(0.4, 0, 0.2, 1), right 200ms cubic-bezier(0.4, 0, 0.2, 1), bottom 200ms cubic-bezier(0.4, 0, 0.2, 1), left 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1), flex-direction 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 160ms ease, visibility 160ms ease;
    z-index: 2;
    cursor: grab;
    user-select: none;
  }
  .drawer-launcher[data-horizontal='true'] {
    flex-direction: row;
  }
  .drawer-launcher[data-dragging='true'] {
    cursor: grabbing;
    transition: none !important;
  }
  .launcher-ghost {
    pointer-events: none;
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    background: linear-gradient(180deg, rgba(32, 32, 32, 0.4) 0%, rgba(16, 16, 16, 0.4) 100%);
    border: 1.5px dashed rgba(255, 255, 255, 0.3);
    border-radius: 999px;
    opacity: 1;
    z-index: 1;
    width: 52px;
    height: 88px;
    transition: width 120ms ease, height 120ms ease;
  }
  .launcher-ghost[data-horizontal='true'] {
    flex-direction: row;
    width: 88px;
    height: 52px;
  }
  .launcher-button {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 140ms ease;
    flex-shrink: 0;
  }
  .launcher-button:hover {
    background: rgba(255, 255, 255, 0.16);
  }
  .launcher-button svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
  }
  :host([data-open='true']) .drawer-launcher {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .chat-stage {
    pointer-events: none;
    position: absolute;
    bottom: 32px;
    right: 32px;
    width: min(420px, calc(100vw - 32px));
    display: flex;
    flex-direction: column;
    gap: 12px;
    opacity: 0;
    transform: translate(calc(var(--chat-offset-x, 0px)), calc(var(--chat-offset-y, 0px) + 20px));
    transition: opacity 160ms ease, transform 160ms ease;
  }
  :host([data-open='true']) .chat-stage {
    pointer-events: auto;
    opacity: 1;
    transform: translate(calc(var(--chat-offset-x, 0px)), calc(var(--chat-offset-y, 0px)));
  }
  .chat-stage[data-expanded='true'] {
    width: min(480px, calc(100vw - 32px));
  }
  .chat-widget {
    pointer-events: auto;
    background: linear-gradient(180deg, #202020 0%, #101010 100%);
    color: var(--text-primary);
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: column;
    padding: 8px 16px 16px;
    overflow: hidden;
    position: relative;
  }
.chat-grabber {
    position: relative;
    width: 72px;
    height: 28px;
    border: none;
    padding: 0;
    margin: 0;
    background: transparent;
    cursor: ns-resize;
    appearance: none;
    outline: none;
  }
  .chat-grabber::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 48px;
    height: 4px;
    background: #ffffff;
    border-radius: 999px;
    transform: translate(-50%, -50%);
    transition: opacity 140ms ease, background 140ms ease;
    opacity: 0.9;
  }
  .chat-grabber:hover::after,
  .chat-grabber:focus-visible::after {
    opacity: 1;
  }
  .chat-grabber:focus-visible {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
  }
  .chat-header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 12px;
  }
  .chat-header[data-draggable='true'] {
    cursor: grab;
  }
  .chat-header[data-draggable='true'][data-dragging='true'] {
    cursor: grabbing;
  }
  .chat-header-slot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    height: 36px;
    flex-shrink: 0;
  }
  .chat-header-center {
    position: relative;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 32px;
    padding: 8px 0;
  }
  .traffic-group {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .traffic-button {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: none;
    padding: 0;
    cursor: pointer;
    position: relative;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35);
  }
  .traffic-button:hover,
  .traffic-button:focus-visible {
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
  }
  .traffic-button:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px rgba(255, 255, 255, 0.4),
      inset 0 0 0 1px rgba(0, 0, 0, 0.35);
  }
  .traffic-button--red {
    background: #ff5f57;
  }
  .traffic-button--yellow {
    background: #ffbd2e;
  }
  .traffic-button--green {
    background: #28c840;
  }
  .traffic-spacer {
    width: 44px;
    height: 36px;
  }
  .chat-grabber[data-dragging='true']::after {
    opacity: 0.7;
  }
  .inspect-pill-row {
    display: flex;
    justify-content: flex-start;
  }
  .inspect-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(24, 24, 24, 0.72);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
    font-size: 12px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.9);
  }
  .inspect-pill-icon {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 144, 40, 0.16);
    color: #FF9028;
  }
  .inspect-pill-dismiss {
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
    transition: background 140ms ease, color 140ms ease;
  }
  .inspect-pill-dismiss:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
  }
  .widget-button {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 140ms ease, color 140ms ease;
  }
  .widget-button:hover {
    background: rgba(255, 255, 255, 0.18);
  }
  .widget-button svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
  }
  .chat-body {
    display: flex;
    flex-direction: column;
  }
  .chat-history {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 200ms ease, opacity 200ms ease;
    display: flex;
    flex-direction: column;
  }
  .chat-history[data-expanded='true'] {
    max-height: clamp(140px, 40vh, 420px);
    opacity: 1;
  }
  .chat-history[data-expanded='true'] .chat-stream {
    padding-bottom: 8px;
  }
  .chat-composer-wrapper {
    padding-top: 4px;
  }
`;var Js=`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var af="";var qs={surface:{base:"--surface-base",header:"--surface-header",panel:"--surface-panel",panelSoft:"--surface-panel-soft",elevated:"--surface-elevated"},text:{primary:"--text-primary",secondary:"--text-secondary",muted:"--text-muted"},border:{hairline:"--hairline",hairlineSoft:"--hairline-soft"},accent:{default:"--accent",hover:"--accent-hover",muted:"--accent-muted",strong:"--accent-strong"},code:{background:"--code-bg",border:"--code-border"},shadow:{soft:"--shadow-soft"},spacing:{xs:"--spacing-xs",sm:"--spacing-sm",md:"--spacing-md",lg:"--spacing-lg",xl:"--spacing-xl"}};Object.fromEntries(Object.entries(qs).map(([e,t])=>{let n=Object.fromEntries(Object.entries(t).map(([r,o])=>[r,`var(${o})`]));return [e,n]}));var uf=[Zs,af,ni,yr,Js,Ds].join(`
`);var I=N(L());function cf({state:e,isOpen:t,onOpen:n,onClose:r,onToggle:o}){let[l,i]=(0, D.useState)(false),[a,s]=(0, D.useState)(false),[u,f]=(0, D.useState)(false),[m,g]=(0, D.useState)(null),[v,k]=(0, D.useState)(null),[x,_]=(0, D.useState)(()=>bo.reduce((F,ke)=>(F[ke]=true,F),{})),[d,c]=(0, D.useState)({top:"50%",right:"8px"}),[p,h]=(0, D.useState)(false),[E,S]=(0, D.useState)(false),[C,b]=(0, D.useState)(null),[R,y]=(0, D.useState)(false),P=(0, D.useRef)(null),A=(0, D.useRef)(null),[he,se]=(0, D.useState)({x:0,y:0}),X=(0, D.useRef)(he),mn=(0, D.useRef)({left:0,top:0,width:0,height:0}),wt=(0, D.useRef)({x:0,y:0}),On=(0, D.useRef)({x:0,y:0}),[ff,ru]=(0, D.useState)(false),ou=(0, D.useCallback)(F=>{X.current=F,se(F);},[]),mf=(0, D.useCallback)(()=>f(false),[]);rf({isInspecting:u,setSnapshot:k,setSelectionLabel:g,onCancelInspect:mf});let Re=As({state:e,isOpen:t,isActive:true,onActivateChat:()=>{}}),gf=(0, D.useCallback)(F=>{_(ke=>({...ke,[F]:!ke[F]}));},[]);(0, D.useEffect)(()=>{v||y(false);},[v]),(0, D.useEffect)(()=>{t||(i(false),s(false));},[t]);let hf=(0, D.useCallback)(F=>{let ke=P.current;if(!ke)return;let Me=ke.getBoundingClientRect(),Ce=ke.offsetParent,at=Ce?Ce.getBoundingClientRect():{left:0,top:0},St=F.clientX-Me.left,st=F.clientY-Me.top,Ie=false,Sr=F.target.closest("button"),No=De=>{let Z=Math.abs(De.clientX-F.clientX),$n=Math.abs(De.clientY-F.clientY);if(!Ie&&(Z>3||$n>3)&&(Ie=true,h(true),Sr)){let q=Ee=>{Ee.preventDefault(),Ee.stopPropagation(),Sr.removeEventListener("click",q,true);};Sr.addEventListener("click",q,true);}if(Ie){let q=De.clientX-St,Ee=De.clientY-st,$t=window.innerWidth-Me.width,ue=window.innerHeight-Me.height;q=Math.max(0,Math.min(q,$t)),Ee=Math.max(0,Math.min(Ee,ue)),c({top:`${Ee-at.top}px`,left:`${q-at.left}px`,right:null,bottom:null});let gn=q+Me.width/2,hn=Ee+Me.height/2,ye=8,ci=hn,Hn=window.innerWidth-gn,Je=window.innerHeight-hn,Ue=Math.min(ci,Hn,Je,gn),Ht,kr,Cr;if(Ue===ci){let Er=Math.max(ye,Math.min(gn-44,window.innerWidth-88-ye));Ht=`${ye}px`,kr=`${Er}px`,Cr=true;}else if(Ue===Hn)Ht=`${Math.max(ye,Math.min(hn-44,window.innerHeight-88-ye))}px`,kr=`${window.innerWidth-ye-52}px`,Cr=false;else if(Ue===Je){let Er=Math.max(ye,Math.min(gn-44,window.innerWidth-88-ye));Ht=`${window.innerHeight-ye-52}px`,kr=`${Er}px`,Cr=true;}else Ht=`${Math.max(ye,Math.min(hn-44,window.innerHeight-88-ye))}px`,kr=`${ye}px`,Cr=false;b({top:Ht,left:kr,isHorizontal:Cr});}},Ze=()=>{if(window.removeEventListener("pointermove",No),window.removeEventListener("pointerup",Ze),window.removeEventListener("pointercancel",Ze),b(null),Ie){let De=P.current;if(!De)return;let Z=De.getBoundingClientRect(),$n=De.offsetParent,q=$n?$n.getBoundingClientRect():{left:0,top:0},Ee=Z.left+Z.width/2,$t=Z.top+Z.height/2,ue=8,gn=$t,hn=window.innerWidth-Ee,ye=window.innerHeight-$t,Hn=Math.min(gn,hn,ye,Ee),Je,yn;if(Hn===gn){let Ue=Math.max(ue,Math.min(Ee-Z.width/2,window.innerWidth-Z.width-ue));Je={top:`${ue-q.top}px`,left:`${Ue-q.left}px`,right:null,bottom:null},yn=Je,S(true);}else if(Hn===hn){let Ue=Math.max(ue,Math.min($t-Z.height/2,window.innerHeight-Z.height-ue)),Ht=window.innerWidth-ue-Z.width;Je={top:`${Ue-q.top}px`,left:`${Ht-q.left}px`,right:null,bottom:null},yn={top:`${Ue-q.top}px`,right:`${ue}px`,left:null,bottom:null},S(false);}else if(Hn===ye){let Ue=Math.max(ue,Math.min(Ee-Z.width/2,window.innerWidth-Z.width-ue));Je={top:`${window.innerHeight-ue-Z.height-q.top}px`,left:`${Ue-q.left}px`,right:null,bottom:null},yn={bottom:`${ue}px`,left:`${Ue-q.left}px`,right:null,top:null},S(true);}else Je={top:`${Math.max(ue,Math.min($t-Z.height/2,window.innerHeight-Z.height-ue))-q.top}px`,left:`${ue-q.left}px`,right:null,bottom:null},yn=Je,S(false);c(Je),h(false),Je!==yn&&setTimeout(()=>{c(yn);},200);}};window.addEventListener("pointermove",No),window.addEventListener("pointerup",Ze),window.addEventListener("pointercancel",Ze);},[]),yf=(0, D.useCallback)(F=>{F.preventDefault(),F.stopPropagation();let ke=F.clientY,Me=l,Ce=Me;s(true);let at=st=>{let Ie=ke-st.clientY;!Ce&&Ie>24&&(Ce=true,i(true)),Ce&&Ie<-36&&(Ce=false,i(false));},St=st=>{window.removeEventListener("pointermove",at),window.removeEventListener("pointerup",St),window.removeEventListener("pointercancel",St),s(false);let Ie=ke-st.clientY;!Ce&&!Me&&Ie>24?i(true):Ce&&Me&&Ie<-36&&i(false);};window.addEventListener("pointermove",at),window.addEventListener("pointerup",St),window.addEventListener("pointercancel",St);},[l]),vf=(0, D.useCallback)(F=>{if(F.button!==0)return;let ke=A.current;if(!ke)return;let Me=F.target;if(Me.closest(".traffic-group")||Me.closest(".chat-grabber"))return;F.preventDefault(),F.stopPropagation();let Ce=ke.getBoundingClientRect();mn.current={left:Ce.left-X.current.x,top:Ce.top-X.current.y,width:Ce.width,height:Ce.height},wt.current={x:F.clientX,y:F.clientY},On.current={...X.current};let at=16;ru(true);let St=Ie=>{let Sr=Ie.clientX-wt.current.x,No=Ie.clientY-wt.current.y,Ze=mn.current,De=On.current.x+Sr,Z=On.current.y+No,$n=at-Ze.left,q=window.innerWidth-Ze.width-at-Ze.left,Ee=at-Ze.top,$t=window.innerHeight-Ze.height-at-Ze.top;De=Math.min(Math.max(De,$n),q),Z=Math.min(Math.max(Z,Ee),$t),(Math.abs(De-X.current.x)>.5||Math.abs(Z-X.current.y)>.5)&&ou({x:De,y:Z});},st=()=>{ru(false),window.removeEventListener("pointermove",St),window.removeEventListener("pointerup",st),window.removeEventListener("pointercancel",st);};window.addEventListener("pointermove",St),window.addEventListener("pointerup",st),window.addEventListener("pointercancel",st);},[ou]),xf=e?.enabled?"Disable preview":"Enable preview",wf=u?m?`Inspecting ${m}`:"Inspect mode enabled":"Enter inspect mode",Sf=(0, D.useCallback)(()=>{i(false),r();},[r]),kf=(0, D.useCallback)(()=>{k(null),g(null),f(false);},[]),Cf=(0, D.useCallback)(()=>{i(true);},[]),Ef=!!m,lu=!!v,iu=Ef?(0, I.jsxs)("div",{className:"inspect-pill",children:[(0, I.jsx)("span",{className:"inspect-pill-icon",children:(0, I.jsx)(xo,{size:12})}),(0, I.jsx)("span",{className:"inspect-pill-label",children:m}),(0, I.jsx)("button",{type:"button",className:"inspect-pill-dismiss",onClick:kf,"aria-label":"Clear selection",children:(0, I.jsx)(si,{size:12})})]}):null,bf=(0, D.useMemo)(()=>({"--chat-offset-x":`${he.x}px`,"--chat-offset-y":`${he.y}px`}),[he.x,he.y]);return e?(0, I.jsxs)("div",{className:"overlay-root",children:[(0, I.jsxs)("div",{ref:P,className:"drawer-launcher","aria-hidden":t,"data-dragging":p,"data-horizontal":E,onPointerDown:hf,style:{...d.top!=null&&{top:d.top},...d.right!=null&&{right:d.right},...d.bottom!=null&&{bottom:d.bottom},...d.left!=null&&{left:d.left},transform:!p&&d.top==="50%"&&d.right==="8px"?"translateY(-50%)":"none"},children:[(0, I.jsx)(wo,{text:"Open Chat",position:"above",disabled:p,children:(0, I.jsx)("button",{type:"button",className:"launcher-button","aria-label":"Open Enhance chat",onClick:n,children:(0, I.jsx)("svg",{viewBox:"0 0 20 20",width:14,height:14,"aria-hidden":"true",fill:"none",style:{width:"14px",height:"14px"},children:(0, I.jsx)("path",{d:"M5.50977 17.8018C6.83126 18.5639 8.36453 19 9.99964 19C14.9702 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 11.6351 1.43604 13.1684 2.19819 14.4899L2.20114 14.495C2.27448 14.6221 2.31146 14.6863 2.32821 14.7469C2.34401 14.804 2.34842 14.8554 2.34437 14.9146C2.34003 14.9781 2.3186 15.044 2.27468 15.1758L1.50586 17.4823L1.50489 17.4853C1.34268 17.9719 1.26157 18.2152 1.31938 18.3774C1.36979 18.5187 1.48169 18.6303 1.62305 18.6807C1.78482 18.7384 2.02705 18.6577 2.51155 18.4962L2.51758 18.4939L4.82405 17.7251C4.95537 17.6813 5.02214 17.6591 5.08559 17.6548C5.14475 17.6507 5.19578 17.6561 5.25293 17.6719C5.31368 17.6887 5.37783 17.7257 5.50563 17.7994L5.50977 17.8018Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),(0, I.jsx)(wo,{text:"Inspect Element",position:"below",disabled:p,children:(0, I.jsx)("button",{type:"button",className:"launcher-button","aria-label":"Placeholder action",children:(0, I.jsx)(xo,{size:16})})})]}),C&&(0, I.jsx)("div",{className:"launcher-ghost","data-horizontal":C.isHorizontal,style:{top:C.top,left:C.left}}),(0, I.jsx)("section",{className:"chat-stage","aria-hidden":!t,"data-open":t?"true":"false","data-expanded":l?"true":"false",ref:F=>{A.current=F;},style:bf,children:(0, I.jsxs)("div",{className:"chat-widget",role:"dialog","aria-modal":"false",children:[(0, I.jsxs)("div",{className:"chat-header","data-draggable":"true","data-dragging":ff?"true":"false",onPointerDown:vf,children:[(0, I.jsx)("div",{className:"chat-header-slot chat-header-slot--left",children:(0, I.jsxs)("div",{className:"traffic-group",role:"group","aria-label":"Overlay controls",children:[(0, I.jsx)("button",{type:"button",className:"traffic-button traffic-button--red",onClick:o,"aria-label":xf,"aria-pressed":e.enabled}),(0, I.jsx)("button",{type:"button",className:"traffic-button traffic-button--yellow",onClick:Sf,"aria-label":"Collapse chat"}),(0, I.jsx)("button",{type:"button",className:"traffic-button traffic-button--green",onClick:Cf,"aria-label":"Expand chat"})]})}),(0, I.jsx)("div",{className:"chat-header-center",children:(0, I.jsx)("button",{type:"button",className:"chat-grabber",onPointerDown:yf,"data-dragging":a?"true":"false","aria-label":l?"Collapse chat history":"Expand chat history"})}),(0, I.jsx)("div",{className:"chat-header-slot chat-header-slot--right",children:(0, I.jsx)("div",{"aria-hidden":"true",className:"traffic-spacer"})})]}),iu&&(0, I.jsx)("div",{className:"inspect-pill-row",children:iu}),(lu||R)&&(0, I.jsx)(lf,{showPill:lu,isOpen:R,onToggle:()=>y(F=>!F),onClose:()=>y(false),snapshot:v,openSections:x,onToggleSection:gf}),(0, I.jsxs)("div",{className:"chat-body",children:[(0, I.jsx)("div",{className:"chat-history","data-expanded":l?"true":"false",children:(0, I.jsx)(js,{messages:Re.messages,copiedCodeId:Re.copiedCodeId,showEmptyState:Re.showEmptyState,onPromptClick:Re.handlePromptClick,onCopyCode:Re.handleCopyCode,messageEndRef:Re.messageEndRef})}),(0, I.jsx)("div",{className:"chat-composer-wrapper",children:(0, I.jsx)(zs,{draft:Re.draft,textareaRef:Re.textareaRef,onDraftChange:Re.handleDraftChange,onSubmit:Re.handleSubmit,onKeyDown:Re.handleTextareaKeyDown,disableSend:Re.disableSend,isSending:Re.isSending,isInspecting:u,inspectButtonTitle:wf,onToggleInspect:()=>f(F=>!F)})})]})]})})]}):null}var pf=N(L()),vr,xr,dn,pn,fn,Fn,wr,ui,Po,tu,To,nu,eu=class extends HTMLElement{constructor(){super(...arguments);ut(this,wr);ut(this,Po);ut(this,To);ut(this,vr,false);ut(this,xr,null);ut(this,dn,null);ut(this,pn,false);ut(this,fn,null);ut(this,Fn,null);}connectedCallback(){if(be(this,vr))return;let n=this.attachShadow({mode:"open"}),r=document.createElement("style");r.textContent=uf,ze(this,Fn,document.createElement("div")),n.append(r,be(this,Fn)),ze(this,fn,(0, df.createRoot)(be(this,Fn))),ze(this,vr,true),jt(this,To,nu).call(this),jt(this,wr,ui).call(this);}disconnectedCallback(){this.dispose();}setDisableHandler(n){ze(this,xr,n);}setState(n){ze(this,dn,n),this.setAttribute("data-position",n.overlayPosition),jt(this,wr,ui).call(this);}dispose(){be(this,fn)?.unmount(),ze(this,fn,null),ze(this,vr,false),ze(this,dn,null),ze(this,xr,null),ze(this,pn,false),this.shadowRoot&&(this.shadowRoot.innerHTML=""),this.removeAttribute("data-open"),this.removeAttribute("data-position"),ze(this,Fn,null);}};vr=new WeakMap,xr=new WeakMap,dn=new WeakMap,pn=new WeakMap,fn=new WeakMap,Fn=new WeakMap,wr=new WeakSet,ui=function(){be(this,fn)&&be(this,fn).render((0, pf.jsx)(cf,{state:be(this,dn),isOpen:be(this,pn),onOpen:()=>jt(this,Po,tu).call(this,true),onClose:()=>jt(this,Po,tu).call(this,false),onToggle:()=>{var n;(n=be(this,xr))==null||n.call(this);}}));},Po=new WeakSet,tu=function(n){be(this,pn)!==n&&(ze(this,pn,n),jt(this,To,nu).call(this),jt(this,wr,ui).call(this));},To=new WeakSet,nu=function(){this.setAttribute("data-open",be(this,pn)?"true":"false"),be(this,dn)&&this.setAttribute("data-position",be(this,dn).overlayPosition);};function Dh(){customElements.get("enhance-overlay")||customElements.define("enhance-overlay",eu);let e=document.querySelector("enhance-overlay");return e||(e=document.createElement("enhance-overlay"),document.body.appendChild(e)),e}function Jy(){let e=Dh();return {update(t){e.setState(t);},onToggle(t){e.setDisableHandler(t);},destroy(){e.dispose(),e.remove();}}}/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

export { Jy as createOverlay };
