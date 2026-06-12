import{i as _,d as v,g as gr,c as yr,b as Ht,t as mr,a as Ve,I as br,B as wr,R as vr,H as c,h as d,e as kr}from"./goals-DCrHdY3x.js";import{OWNER_LOGIN as $,t as u}from"./tables-DD_K1TY9.js";import{kv as F,now as b}from"./db-2zuKG1Uw.js";var pt=class{#e;#t;constructor(){this.#e=[],this.#t=new Map}get[Symbol.iterator](){return this.#e[Symbol.iterator].bind(this.#e)}entries(){return this.#t.entries()}get(e){return this.#t.get(e)||[]}getAll(){return this.#e.map(([,e])=>e)}append(e,r){this.#e.push([e,r]),this.#s(e,s=>s.push(r))}prepend(e,r){this.#e.unshift([e,r]),this.#s(e,s=>s.unshift(r))}delete(e,r){if(this.size===0)return!1;const s=this.#t.get(e);if(!s)return!1;const n=s.indexOf(r);return n===-1?!1:(s.splice(n,1),this.#e.splice(this.#e.findIndex(o=>o[0]===e&&o[1]===r),1),!0)}deleteAll(e){this.size!==0&&(this.#e=this.#e.filter(r=>r[0]!==e),this.#t.delete(e))}get size(){return this.#e.length}clear(){this.size!==0&&(this.#e.length=0,this.#t.clear())}#s(e,r){r(this.#t.get(e)||this.#t.set(e,[]).get(e))}};const be=Symbol("kDefaultPrevented"),G=Symbol("kPropagationStopped"),de=Symbol("kImmediatePropagationStopped");var se=class extends MessageEvent{#e;[be];[G];[de];constructor(...e){super(e[0],e[1]),this[be]=!1}get defaultPrevented(){return this[be]}preventDefault(){super.preventDefault(),this[be]=!0}stopImmediatePropagation(){super.stopImmediatePropagation(),this[de]=!0}},rt=class{#e;#t;#s;#n;#r;#a;#o;hooks;constructor(){this.#e=new pt,this.#t=new WeakMap,this.#s=new WeakMap,this.#n=new WeakSet,this.#r=new pt,this.#a=new WeakMap,this.#o=new WeakMap,this.hooks={on:(e,r,s)=>{if(!s?.signal?.aborted){if(s?.once){const n=r,o=((...i)=>(this.#i(e,o),n(...i)));r=o}if(this.#r.append(e,r),s&&this.#a.set(r,s),s?.signal){const{signal:n}=s,o=()=>{this.#i(e,r)};n.addEventListener("abort",o,{once:!0}),this.#o.set(r,()=>{n.removeEventListener("abort",o)})}}},removeListener:(e,r)=>{this.#i(e,r)}}}#i(e,r){this.#r.delete(e,r);const s=this.#o.get(r);s&&(s(),this.#o.delete(r))}#h(e,r){const s=this.#e.delete(e,r),n=this.#s.get(r);return n&&(n(),this.#s.delete(r)),s}on(e,r,s){return this.#p(e,r,s),this}once(e,r,s){return this.on(e,r,{...s||{},once:!0})}earlyOn(e,r,s){return this.#p(e,r,s,"prepend"),this}earlyOnce(e,r,s){return this.earlyOn(e,r,{...s||{},once:!0})}emit(e){if(this.#e.size===0)return!1;const r=this.listenerCount(e.type)>0,s=this.#c(e);for(const n of this.#d(e.type)){if(s.event[G]!=null&&s.event[G]!==this)return s.revoke(),!1;if(s.event[de])break;this.#l(s.event,n)}return s.revoke(),r}async emitAsPromise(e){if(this.#e.size===0)return[];const r=[],s=this.#c(e);for(const n of this.#d(e.type)){if(s.event[G]!=null&&s.event[G]!==this)return s.revoke(),[];if(s.event[de])break;const o=await Promise.resolve(this.#l(s.event,n));this.#u(n)||r.push(o)}return s.revoke(),Promise.allSettled(r).then(n=>n.map(o=>o.status==="fulfilled"?o.value:o.reason))}*emitAsGenerator(e){if(this.#e.size===0)return;const r=this.#c(e);for(const s of this.#d(e.type)){if(r.event[G]!=null&&r.event[G]!==this){r.revoke();return}if(r.event[de])break;const n=this.#l(r.event,s);this.#u(s)||(yield n)}r.revoke()}removeListener(e,r){const s=this.#t.get(r);if(this.#h(e,r))for(const n of this.#r.get("removeListener").slice())n(e,r,s)}removeAllListeners(e){if(e==null){for(const[s,n]of this.#e.entries())for(;n.length>0;)this.removeListener(s,n[0]);for(const[s,n]of[...this.#r])this.#a.get(n)?.persist||this.#i(s,n);return}const r=this.listeners(e);for(;r.length>0;)this.removeListener(e,r[0])}listeners(e){return e==null?this.#e.getAll():this.#e.get(e)}listenerCount(e){return e==null?this.#e.size:this.listeners(e).length}#p(e,r,s,n="append"){if(!s?.signal?.aborted){for(const o of this.#r.get("newListener").slice())o(e,r,s);if(e==="*"&&this.#n.add(r),n==="prepend"?this.#e.prepend(e,r):this.#e.append(e,r),s&&(this.#t.set(r,s),s.signal)){const{signal:o}=s,i=()=>{this.removeListener(e,r)};o.addEventListener("abort",i,{once:!0}),this.#s.set(r,()=>{o.removeEventListener("abort",i)})}}}#c(e){const{stopPropagation:r}=e;return e.stopPropagation=()=>{e[G]=this,r.call(e)},{event:e,revoke(){e.stopPropagation=r}}}#l(e,r){for(const o of this.#r.get("beforeEmit").slice())if(o(e)===!1)return;const s=r.call(this,e),n=this.#t.get(r);if(n?.once){const o=this.#u(r)?"*":e.type;if(this.#h(o,r))for(const i of this.#r.get("removeListener").slice())i(o,r,n)}return s}*#d(e){const r=[];for(const[s,n]of this.#e)(s==="*"||s===e)&&r.push(n);yield*r}#u(e){return this.#n.has(e)}};function xr(){const t=(e,r)=>{t.state="pending",t.resolve=s=>{if(t.state!=="pending")return;t.result=s;const n=o=>(t.state="fulfilled",o);return e(s instanceof Promise?s:Promise.resolve(s).then(n))},t.reject=s=>{if(t.state==="pending")return queueMicrotask(()=>{t.state="rejected"}),r(t.rejectionReason=s)}};return t}var Sr=class extends Promise{#e;resolve;reject;constructor(e=null){const r=xr();super((s,n)=>{r(s,n),e?.(r.resolve,r.reject)}),this.#e=r,this.resolve=this.#e.resolve,this.reject=this.#e.reject}get state(){return this.#e.state}get rejectionReason(){return this.#e.rejectionReason}then(e,r){return this.#t(super.then(e,r))}catch(e){return this.#t(super.catch(e))}finally(e){return this.#t(super.finally(e))}#t(e){return Object.defineProperties(e,{resolve:{configurable:!0,value:this.resolve},reject:{configurable:!0,value:this.reject}})}};function Ut(t){if(typeof t=="string")return Ut(new URL(t,typeof location<"u"?location.href:void 0));if(t.protocol==="http:"?t.protocol="ws:":t.protocol==="https:"&&(t.protocol="wss:"),t.protocol!=="ws:"&&t.protocol!=="wss:")throw new SyntaxError(`Failed to construct 'WebSocket': The URL's scheme must be either 'http', 'https', 'ws', or 'wss'. '${t.protocol}' is not allowed.`);if(t.hash!=="")throw new SyntaxError(`Failed to construct 'WebSocket': The URL contains a fragment identifier ('${t.hash}'). Fragment identifiers are not allowed in WebSocket URLs.`);return t.href}function Lr(t){return t!=null&&typeof t=="object"&&!Array.isArray(t)}const Er=Symbol("kConnect"),_r=Symbol("kAutoConnect"),qr=Symbol("kSiblingHandlers");function Cr(t){return Reflect.get(t,qr)||[]}function He(t){const e={},r=(s,n)=>{const o=e[s]||=[];o.includes(n)||o.push(n)};for(const s of t){r(s.kind,s);for(const n of Cr(s))r(n.kind,n)}return e}class $t{getInitialState(e){_(this.#e(e),v.formatMessage("Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?"));const r=He(e);return{initialHandlers:r,handlers:{...r}}}currentHandlers(){return Object.values(this.getState().handlers).flat().filter(e=>e!=null)}getHandlersByKind(e){return this.getState().handlers[e]||[]}use(e){if(_(this.#e(e),v.formatMessage('[MSW] Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?')),e.length===0)return;const{handlers:r}=this.getState(),s=He(e);for(const n in s){const o=s[n],i=r[n];r[n]=i?[...o,...i]:o}this.setState({handlers:r})}reset(e){_(e.length>0?this.#e(e):!0,v.formatMessage("Failed to replace initial handlers during reset: invalid handlers. Did you forget to spread the handlers array?"));for(const n of this.currentHandlers())"reset"in n&&n.reset();const{initialHandlers:r}=this.getState();if(e.length===0){this.setState({handlers:{...r}});return}const s=He(e);this.setState({initialHandlers:s,handlers:{...s}})}restore(){for(const e of this.currentHandlers())"restore"in e&&e.restore()}#e(e){return e.every(r=>!Array.isArray(r))}}class jr extends $t{#e;#t;constructor(e){super();const r=this.getInitialState(e);this.#t=r.initialHandlers,this.#e=r.handlers}getState(){return{initialHandlers:this.#t,handlers:this.#e}}setState(e){e.initialHandlers&&(this.#t=e.initialHandlers),e.handlers&&(this.#e=e.handlers)}}class Rr{subscriptions=[];dispose(){let e;const r=[];for(;e=this.subscriptions.shift();)try{e()}catch(s){s instanceof Error&&r.push(s)}r.length>0&&console.error(new AggregateError(r,v.formatMessage("Failed to dispose of some side effects. This is likely an issue with MSW, please report it on GitHub: https://github.com/mswjs/msw/issues")))}}function Mr(t){const e=[...t];return Object.freeze(e),e}const Pr=async({request:t,requestId:e,handlers:r,resolutionContext:s})=>{let n=null,o=null;for(const i of r)if(o=await i.run({request:t,requestId:e,resolutionContext:s}),o!==null&&(n=i),o?.response)break;return n?{handler:n,parsedResult:o?.parsedResult,response:o?.response}:null};async function Or(t){try{return[null,await t().catch(e=>{throw e})]}catch(e){return[e,null]}}function Tr(t){const e=new URL(t.url);return e.protocol==="file:"||/(fonts\.googleapis\.com)/.test(e.hostname)||/node_modules/.test(e.pathname)||e.pathname.includes("@vite")?!0:/\.(s?css|less|m?jsx?|m?tsx?|html|ttf|otf|woff|woff2|eot|gif|jpe?g|png|avif|webp|svg|mp4|webm|ogg|mov|mp3|wav|ogg|flac|aac|pdf|txt|csv|json|xml|md|zip|tar|gz|rar|7z)$/i.test(e.pathname)}async function Ir(t,e){const r=gr(e);r&&await yr.setCookie(r,t.url)}class Bt{constructor(e,r){this.protocol=e,this.data=r,this.events=new rt}events}class Nr extends se{frame;constructor(e,r){super(e,{}),this.frame=r}}class st{emitter;constructor(){this.emitter=new rt}async queue(e){await this.emitter.emitAsPromise(new Nr("frame",e))}on(e,r,s){this.emitter.on(e,r,s)}disable(){this.emitter.removeAllListeners()}}const Wr="x-msw-intention";function Ar(t){return!!t.headers.get("accept")?.includes("msw/passthrough")}function Dr(t){return t.status===302&&t.headers.get(Wr)==="passthrough"}function Gr(t){const e=t.headers.get("accept");if(e){const r=e.replace(/(,\s+)?msw\/passthrough/,"");r?t.headers.set("accept",r):t.headers.delete("accept")}}class W extends se{requestId;request;constructor(e,r){super(e,{}),this.requestId=r.requestId,this.request=r.request}}class Ft extends se{requestId;request;response;constructor(e,r){super(e,{}),this.requestId=r.requestId,this.request=r.request,this.response=r.response}}class Hr extends se{error;requestId;request;constructor(e,r){super(e,{}),this.error=r.error,this.requestId=r.requestId,this.request=r.request}}class Ne extends Bt{constructor(e){const r=e.id||Ht();super("http",{id:r,request:e.request})}getHandlers(e){return e.getHandlersByKind("request")}async getUnhandledMessage(){const{request:e}=this.data,r=new URL(e.url),s=mr(r)+r.search,n=e.body==null?null:await e.clone().text();return`intercepted a request without a matching request handler:${`

  • ${e.method} ${s}

${n?`  • Request body: ${n}

`:""}`}If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`}async resolve(e,r,s){const{id:n,request:o}=this.data,i=s?.quiet?null:o.clone();if(this.events.emit(new W("request:start",{requestId:n,request:o})),Ar(o))return this.events.emit(new W("request:end",{requestId:n,request:o})),this.passthrough(),null;const[a,h]=await Or(()=>Pr({requestId:n,request:o,handlers:e,resolutionContext:{baseUrl:s?.baseUrl?.toString(),quiet:s?.quiet}}));if(a!=null)return this.events.emit(new Hr("unhandledException",{error:a,requestId:n,request:o}))||(console.error(a),v.error('Encountered an unhandled exception during the handler lookup for "%s %s". Please see the original error above.',o.method,o.url)),this.errorWith(a),null;if(h==null)return this.events.emit(new W("request:unhandled",{requestId:n,request:o})),await Oe(this,r).then(()=>this.passthrough(),y=>this.errorWith(y)),this.events.emit(new W("request:end",{requestId:n,request:o})),!1;const{response:l,handler:m,parsedResult:f}=h;if(this.events.emit(new W("request:match",{requestId:n,request:o})),l==null)return this.events.emit(new W("request:end",{requestId:n,request:o})),this.passthrough(),null;if(Dr(l))return this.events.emit(new W("request:end",{requestId:n,request:o})),this.passthrough(),null;const p=s?.quiet?null:l.clone();return await Ir(o,l),this.respondWith(l),this.events.emit(new W("request:end",{requestId:n,request:o})),s?.quiet||m.log({request:i,response:p,parsedResult:f}),!0}}async function Oe(t,e){const r=async n=>{if(n==="bypass")return;const o=await t.getUnhandledMessage();switch(n){case"warn":return v.warn("Warning: %s",o);case"error":return v.error("Error: %s",o)}},s=async n=>{if(_.as(Ve,n==="bypass"||n==="warn"||n==="error",v.formatMessage('Failed to react to an unhandled network frame: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',n)),n!=="bypass"&&(await r(n),n==="error"))return Promise.reject(new Ve(v.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.')))};if(typeof e=="function")return e({frame:t,defaults:{warn:r.bind(null,"warn"),error:r.bind(null,"error")}});if(!(t instanceof Ne&&Tr(t.data.request)))return s(e)}function ft(t){const e=[];for(const r of t)r instanceof Promise&&e.push(r);if(e.length>0)return Promise.all(e).then(()=>{})}var Xe=(t=>(t[t.DISABLED=0]="DISABLED",t[t.ENABLED=1]="ENABLED",t))(Xe||{});function Ur(t){let e=0;const r=new rt,s=new Rr,n=a=>a instanceof $t?a:new jr(a||[]);let o={...t},i=n(o.handlers);return{get readyState(){return e},events:r,configure(a){_(e===0,'Failed to call "configure()" on the network: cannot configure an already enabled network.'),a.handlers&&!Object.is(a.handlers,o.handlers)&&(i=n(a.handlers)),o={...o,...a}},enable(){_(e===0,'Failed to call "enable" on the network: already enabled'),e=1;const a={active:!0};s.subscriptions.push(()=>{a.active=!1});const h=o.sources.map(l=>(st.prototype.disable.call(l),l.on("frame",async({frame:m})=>{m.events.on("*",p=>{a.active&&r.emit(p)});const f=m.getHandlers(i);await m.resolve(f,o.onUnhandledFrame||"warn",o.context)}),l.enable()));return ft(h)},disable(){return _(e===1,'Failed to call "disable" on the network: already disabled'),e=0,s.dispose(),ft(o.sources.map(a=>a.disable()))},use(...a){i.use(a)},resetHandlers(...a){i.reset(a)},restoreHandlers(){i.restore()},listHandlers(){return Mr(i.currentHandlers())}}}async function $r(t,e,...r){const s=t.listeners(e);if(s.length!==0)for(const n of s)await n.apply(t,r)}var Br=class{#e=new Map;applyPatch(t,e,r){const s=this.#e.get(t);_(!s?.has(e),`Failed to replace a global value at "${String(e)}": already replaced.`);const n=Qt(t,e);if(typeof n>"u")return console.warn(`Failed to replace a global value at "${String(e)}": not a global value.`),()=>{};if(n.descriptor.configurable)Object.defineProperty(t,e,{value:r(t[e]),enumerable:!0,configurable:!0});else if(n.descriptor.writable)t[e]=r(t[e]);else throw new Error(`Failed to patch a non-configurable non-writable property "${e.toString()}"`);const o=()=>{const i=this.#e.get(t);i?.has(e)&&(n.owner===t?Object.defineProperty(n.owner,e,n.descriptor):Reflect.deleteProperty(t,e),i.delete(e),i.size===0&&this.#e.delete(t))};return s?s.set(e,o):this.#e.set(t,new Map([[e,o]])),o}restoreAllPatches(){const t=[];for(const[,e]of this.#e)for(const[,r]of e)try{r()}catch(s){if(s instanceof Error)t.push(s);else throw s}if(t.length>0)throw new AggregateError(t,"FOO!")}};const Fr=new Br;function Qt(t,e){let r=t,s;for(;r;){if(s=Object.getOwnPropertyDescriptor(r,e),s)return{owner:r,descriptor:s};r=Object.getPrototypeOf(r)}}function Qr(t){const e=Qt(globalThis,t);if(typeof e>"u")return!1;const{descriptor:r}=e;return typeof r.get=="function"&&typeof r.get()>"u"||typeof r.get>"u"&&r.value==null?!1:typeof r.set>"u"&&!r.configurable?(console.error(`[MSW] Failed to apply interceptor: the global \`${t}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`),!1):!0}function S(t,e){return Object.defineProperties(e,{target:{value:t,enumerable:!0,writable:!0},currentTarget:{value:t,enumerable:!0,writable:!0}}),e}const ee=Symbol("kCancelable"),T=Symbol("kDefaultPrevented");var nt=class extends MessageEvent{constructor(e,r){super(e,r),this[ee]=!!r.cancelable,this[T]=!1}get cancelable(){return this[ee]}set cancelable(e){this[ee]=e}get defaultPrevented(){return this[T]}set defaultPrevented(e){this[T]=e}preventDefault(){this.cancelable&&!this[T]&&(this[T]=!0)}},We=class extends Event{constructor(e,r={}){super(e,r),this.code=r.code===void 0?0:r.code,this.reason=r.reason===void 0?"":r.reason,this.wasClean=r.wasClean===void 0?!1:r.wasClean}},gt=class extends We{constructor(e,r={}){super(e,r),this[ee]=!!r.cancelable,this[T]=!1}get cancelable(){return this[ee]}set cancelable(e){this[ee]=e}get defaultPrevented(){return this[T]}set defaultPrevented(e){this[T]=e}preventDefault(){this.cancelable&&!this[T]&&(this[T]=!0)}};const ne=Symbol("kEmitter"),we=Symbol("kBoundListener");var zr=class{constructor(e,r){this.socket=e,this.transport=r,this.id=Ht(),this.url=new URL(e.url),this[ne]=new EventTarget,this.transport.addEventListener("outgoing",s=>{const n=S(this.socket,new nt("message",{data:s.data,origin:s.origin,cancelable:!0}));this[ne].dispatchEvent(n),n.defaultPrevented&&s.preventDefault()}),this.transport.addEventListener("close",s=>{this[ne].dispatchEvent(S(this.socket,new We("close",s)))})}addEventListener(e,r,s){if(!Reflect.has(r,we)){const n=r.bind(this.socket);Object.defineProperty(r,we,{value:n,enumerable:!1,configurable:!1})}this[ne].addEventListener(e,Reflect.get(r,we),s)}removeEventListener(e,r,s){this[ne].removeEventListener(e,Reflect.get(r,we),s)}send(e){this.transport.send(e)}close(e,r){this.transport.close(e,r)}};const yt="InvalidAccessError: close code out of user configurable range",Te=Symbol("kPassthroughPromise"),zt=Symbol("kOnSend"),pe=Symbol("kClose");var Zr=class extends EventTarget{static{this.CONNECTING=0}static{this.OPEN=1}static{this.CLOSING=2}static{this.CLOSED=3}constructor(e,r){super(),this.CONNECTING=0,this.OPEN=1,this.CLOSING=2,this.CLOSED=3,this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null,this.url=Ut(e),this.protocol="",this.extensions="",this.binaryType="blob",this.readyState=this.CONNECTING,this.bufferedAmount=0,this[Te]=new Sr,queueMicrotask(async()=>{await this[Te]||(this.protocol=typeof r=="string"?r:Array.isArray(r)&&r.length>0?r[0]:"",this.readyState===this.CONNECTING&&(this.readyState=this.OPEN,this.dispatchEvent(S(this,new Event("open")))))})}set onopen(e){this.removeEventListener("open",this._onopen),this._onopen=e,e!==null&&this.addEventListener("open",e)}get onopen(){return this._onopen}set onmessage(e){this.removeEventListener("message",this._onmessage),this._onmessage=e,e!==null&&this.addEventListener("message",e)}get onmessage(){return this._onmessage}set onerror(e){this.removeEventListener("error",this._onerror),this._onerror=e,e!==null&&this.addEventListener("error",e)}get onerror(){return this._onerror}set onclose(e){this.removeEventListener("close",this._onclose),this._onclose=e,e!==null&&this.addEventListener("close",e)}get onclose(){return this._onclose}send(e){if(this.readyState===this.CONNECTING)throw this.close(),new DOMException("InvalidStateError");this.readyState===this.CLOSING||this.readyState===this.CLOSED||(this.bufferedAmount+=Yr(e),queueMicrotask(()=>{this.bufferedAmount=0,this[zt]?.(e)}))}close(e=1e3,r){_(e,yt),_(e===1e3||e>=3e3&&e<=4999,yt),this[pe](e,r)}[pe](e=1e3,r,s=!0){this.readyState===this.CLOSING||this.readyState===this.CLOSED||(this.readyState=this.CLOSING,queueMicrotask(()=>{this.readyState=this.CLOSED,this.dispatchEvent(S(this,new We("close",{code:e,reason:r,wasClean:s}))),this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null}))}addEventListener(e,r,s){return super.addEventListener(e,r,s)}removeEventListener(e,r,s){return super.removeEventListener(e,r,s)}};function Yr(t){return typeof t=="string"?t.length:t instanceof Blob?t.size:t.byteLength}const A=Symbol("kEmitter"),ve=Symbol("kBoundListener"),Ue=Symbol("kSend");var Jr=class{constructor(e,r,s){this.client=e,this.transport=r,this.createConnection=s,this[A]=new EventTarget,this.mockCloseController=new AbortController,this.realCloseController=new AbortController,this.transport.addEventListener("outgoing",n=>{typeof this.realWebSocket>"u"||queueMicrotask(()=>{n.defaultPrevented||this[Ue](n.data)})}),this.transport.addEventListener("incoming",this.handleIncomingMessage.bind(this))}get socket(){return _(this.realWebSocket,'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?'),this.realWebSocket}connect(){_(!this.realWebSocket||this.realWebSocket.readyState!==WebSocket.OPEN,'Failed to call "connect()" on the original WebSocket instance: the connection already open');const e=this.createConnection();e.binaryType=this.client.binaryType,e.addEventListener("open",r=>{this[A].dispatchEvent(S(this.realWebSocket,new Event("open",r)))},{once:!0}),e.addEventListener("message",r=>{this.transport.dispatchEvent(S(this.realWebSocket,new MessageEvent("incoming",{data:r.data,origin:r.origin})))}),this.client.addEventListener("close",r=>{this.handleMockClose(r)},{signal:this.mockCloseController.signal}),e.addEventListener("close",r=>{this.handleRealClose(r)},{signal:this.realCloseController.signal}),e.addEventListener("error",()=>{const r=S(e,new Event("error",{cancelable:!0}));this[A].dispatchEvent(r),r.defaultPrevented||this.client.dispatchEvent(S(this.client,new Event("error")))}),this.realWebSocket=e}addEventListener(e,r,s){if(!Reflect.has(r,ve)){const n=r.bind(this.client);Object.defineProperty(r,ve,{value:n,enumerable:!1})}this[A].addEventListener(e,Reflect.get(r,ve),s)}removeEventListener(e,r,s){this[A].removeEventListener(e,Reflect.get(r,ve),s)}send(e){this[Ue](e)}[Ue](e){const{realWebSocket:r}=this;if(_(r,'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?',this.client.url),!(r.readyState===WebSocket.CLOSING||r.readyState===WebSocket.CLOSED)){if(r.readyState===WebSocket.CONNECTING){r.addEventListener("open",()=>{r.send(e)},{once:!0});return}r.send(e)}}close(){const{realWebSocket:e}=this;_(e,'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?',this.client.url),this.realCloseController.abort(),!(e.readyState===WebSocket.CLOSING||e.readyState===WebSocket.CLOSED)&&(e.close(),queueMicrotask(()=>{this[A].dispatchEvent(S(this.realWebSocket,new gt("close",{code:1e3,cancelable:!0})))}))}handleIncomingMessage(e){const r=S(e.target,new nt("message",{data:e.data,origin:e.origin,cancelable:!0}));this[A].dispatchEvent(r),r.defaultPrevented||this.client.dispatchEvent(S(this.client,new MessageEvent("message",{data:e.data,origin:e.origin})))}handleMockClose(e){this.realWebSocket&&this.realWebSocket.close()}handleRealClose(e){this.mockCloseController.abort();const r=S(this.realWebSocket,new gt("close",{code:e.code,reason:e.reason,wasClean:e.wasClean,cancelable:!0}));this[A].dispatchEvent(r),r.defaultPrevented||this.client[pe](e.code,e.reason)}},Kr=class extends EventTarget{constructor(e){super(),this.socket=e,this.socket.addEventListener("close",r=>{this.dispatchEvent(S(this.socket,new We("close",r)))}),this.socket[zt]=r=>{this.dispatchEvent(S(this.socket,new nt("outgoing",{data:r,origin:this.socket.url,cancelable:!0})))}}addEventListener(e,r,s){return super.addEventListener(e,r,s)}dispatchEvent(e){return super.dispatchEvent(e)}send(e){queueMicrotask(()=>{if(this.socket.readyState===this.socket.CLOSING||this.socket.readyState===this.socket.CLOSED)return;const r=()=>{this.socket.dispatchEvent(S(this.socket,new MessageEvent("message",{data:e,origin:this.socket.url})))};this.socket.readyState===this.socket.CONNECTING?this.socket.addEventListener("open",()=>{r()},{once:!0}):r()})}close(e,r){this.socket[pe](e,r)}};(class Zt extends br{static{this.symbol=Symbol.for("websocket-interceptor")}constructor(){super(Zt.symbol)}checkEnvironment(){return Qr("WebSocket")}setup(){const e=this.logger.extend("setup"),r=new Proxy(globalThis.WebSocket,{construct:(s,n,o)=>{const[i,a]=n,h=()=>Reflect.construct(s,n,o),l=new Zr(i,a),m=new Kr(l);return queueMicrotask(async()=>{try{const f=new Jr(l,m,h),p=this.emitter.listenerCount("connection")>0;await $r(this.emitter,"connection",{client:new zr(l,m),server:f,info:{protocols:a}}),p?l[Te].resolve(!1):(l[Te].resolve(!0),f.connect(),f.addEventListener("open",()=>{l.dispatchEvent(S(l,new Event("open"))),f.realWebSocket&&(l.protocol=f.realWebSocket.protocol)}))}catch(f){f instanceof Error&&(l.dispatchEvent(new Event("error")),l.readyState!==WebSocket.CLOSING&&l.readyState!==WebSocket.CLOSED&&l[pe](1011,f.message,!1),console.error(f))}}),l}});e.info("patching global WebSocket..."),this.subscriptions.push(Fr.applyPatch(globalThis,"WebSocket",()=>r)),e.info("global WebSocket patched!",globalThis.WebSocket.name)}});class Vr extends se{url;protocols;constructor(e,r){super(e,{}),this.url=r.url,this.protocols=r.protocols}}class Xr extends se{url;protocols;error;constructor(e,r){super(e,{}),this.url=r.url,this.protocols=r.protocols,this.error=r.error}}class Yt extends Bt{constructor(e){super("ws",{connection:e.connection})}getHandlers(e){return e.getHandlersByKind("websocket")}async resolve(e,r,s){const{connection:n}=this.data;if(this.events.emit(new Vr("connection",{url:n.client.url,protocols:n.info.protocols})),e.length===0)return await Oe(this,r).then(()=>this.passthrough(),i=>this.errorWith(i)),!1;let o=!1;for(const i of e){const a=await i.run(n,{baseUrl:s?.baseUrl?.toString(),[_r]:!1});if(!a)continue;o=!0;const h=s?.quiet?void 0:i.log(n);try{i[Er](a)||h?.()}catch(l){throw this.events.emit(new Xr("unhandledException",{error:l,url:n.client.url,protocols:n.info.protocols}))||(console.error(l),v.error('Encountered an unhandled exception during the handler lookup for "%s". Please see the original error above.',n.client.url)),l}}return o?!0:(await Oe(this,r).then(()=>this.passthrough(),i=>this.errorWith(i)),!1)}async getUnhandledMessage(){const{connection:e}=this.data;return`intercepted a WebSocket connection without a matching event handler:${`

  • ${e.client.url}

`}If you still wish to intercept this unhandled connection, please create an event handler for it.
Read more: https://mswjs.io/docs/websocket`}}class Jt extends st{#e;#t;constructor(e){super(),this.#e=new wr({name:"interceptor-source",interceptors:e.interceptors}),this.#t=new Map}enable(){this.#e.apply(),this.#e.on("request",this.#s.bind(this)).on("response",this.#n.bind(this)).on("connection",this.#r.bind(this))}disable(){super.disable(),this.#e.dispose(),this.#t.clear()}async#s({requestId:e,request:r,controller:s}){const n=new es({id:e,request:r,controller:s});this.#t.set(e,n),await this.queue(n)}async#n({requestId:e,request:r,response:s,isMockedResponse:n}){const o=this.#t.get(e);this.#t.delete(e),o!=null&&queueMicrotask(()=>{try{o.events.emit(new Ft(n?"response:mocked":"response:bypass",{requestId:e,request:r,response:s}))}finally{o.events.removeAllListeners()}})}async#r(e){await this.queue(new ts({connection:e}))}}class es extends Ne{#e;constructor(e){super({id:e.id,request:e.request}),this.#e=e.controller}passthrough(){Gr(this.data.request)}respondWith(e){e&&this.#e.respondWith(e)}errorWith(e){if(e instanceof Response)return this.respondWith(e);throw e instanceof Ve&&this.#e.errorWith(e),e}}class ts extends Yt{constructor(e){super({connection:e.connection}),e.connection.client.addEventListener("close",()=>{this.events.removeAllListeners()},{once:!0})}errorWith(e){if(e instanceof Error){const{client:r}=this.data.connection,s=new Event("error");Object.defineProperty(s,"cause",{enumerable:!0,configurable:!1,value:e}),r.socket.dispatchEvent(s)}}passthrough(){this.data.connection.server.connect()}}function rs(t){return({frame:e,defaults:r})=>{const s=t();if(s!=null){if(typeof s=="function"){const n=e instanceof Ne?e.data.request:e instanceof Yt?new Request(e.data.connection.client.url,{headers:{connection:"upgrade",upgrade:"websocket"}}):null;return _(n!=null,'Failed to coerce a network frame to a legacy `onUnhandledRequest` strategy: unknown frame protocol "%s"',e.protocol),s(n,{warning:r.warn,error:r.error})}return Oe(e,s)}}}function ss(t){return{status:t.status,statusText:t.statusText,headers:Object.fromEntries(t.headers.entries())}}var ns={},os=/(%?)(%([sdijo]))/g;function is(t,e){switch(e){case"s":return t;case"d":case"i":return Number(t);case"j":return JSON.stringify(t);case"o":{if(typeof t=="string")return t;const r=JSON.stringify(t);return r==="{}"||r==="[]"||/^\[object .+?\]$/.test(r)?t:r}}}function ye(t,...e){if(e.length===0)return t;let r=0,s=t.replace(os,(n,o,i,a)=>{const h=e[r],l=is(h,a);return o?n:(r++,l)});return r<e.length&&(s+=` ${e.slice(r).join(" ")}`),s=s.replace(/%{2,2}/g,"%"),s}var as=2;function cs(t){if(!t.stack)return;const e=t.stack.split(`
`);e.splice(1,as),t.stack=e.join(`
`)}var ls=class extends Error{constructor(t,...e){super(t),this.message=t,this.name="Invariant Violation",this.message=ye(t,...e),cs(this)}},x=(t,e,...r)=>{if(!t)throw new ls(e,...r)};x.as=(t,e,r,...s)=>{if(!e){const n=s.length===0?r:ye(r,...s);let o;try{o=Reflect.construct(t,[n])}catch{o=t(n)}throw o}};function ot(){if(typeof navigator<"u"&&navigator.product==="ReactNative")return!0;if(typeof process<"u"){const t=process.type;return t==="renderer"||t==="worker"?!1:!!(process.versions&&process.versions.node)}return!1}var ds=Object.defineProperty,us=(t,e)=>{for(var r in e)ds(t,r,{get:e[r],enumerable:!0})},et={};us(et,{blue:()=>ps,gray:()=>tt,green:()=>gs,red:()=>fs,yellow:()=>hs});function hs(t){return`\x1B[33m${t}\x1B[0m`}function ps(t){return`\x1B[34m${t}\x1B[0m`}function tt(t){return`\x1B[90m${t}\x1B[0m`}function fs(t){return`\x1B[31m${t}\x1B[0m`}function gs(t){return`\x1B[32m${t}\x1B[0m`}var Ae=ot(),Kt=class{constructor(t){this.name=t,this.prefix=`[${this.name}]`;const e=mt("DEBUG"),r=mt("LOG_LEVEL");e==="1"||e==="true"||typeof e<"u"&&this.name.startsWith(e)?(this.debug=oe(r,"debug")?R:this.debug,this.info=oe(r,"info")?R:this.info,this.success=oe(r,"success")?R:this.success,this.warning=oe(r,"warning")?R:this.warning,this.error=oe(r,"error")?R:this.error):(this.info=R,this.success=R,this.warning=R,this.error=R,this.only=R)}prefix;extend(t){return new Kt(`${this.name}:${t}`)}debug(t,...e){this.logEntry({level:"debug",message:tt(t),positionals:e,prefix:this.prefix,colors:{prefix:"gray"}})}info(t,...e){this.logEntry({level:"info",message:t,positionals:e,prefix:this.prefix,colors:{prefix:"blue"}});const r=new ys;return(s,...n)=>{r.measure(),this.logEntry({level:"info",message:`${s} ${tt(`${r.deltaTime}ms`)}`,positionals:n,prefix:this.prefix,colors:{prefix:"blue"}})}}success(t,...e){this.logEntry({level:"info",message:t,positionals:e,prefix:`✔ ${this.prefix}`,colors:{timestamp:"green",prefix:"green"}})}warning(t,...e){this.logEntry({level:"warning",message:t,positionals:e,prefix:`⚠ ${this.prefix}`,colors:{timestamp:"yellow",prefix:"yellow"}})}error(t,...e){this.logEntry({level:"error",message:t,positionals:e,prefix:`✖ ${this.prefix}`,colors:{timestamp:"red",prefix:"red"}})}only(t){t()}createEntry(t,e){return{timestamp:new Date,level:t,message:e}}logEntry(t){const{level:e,message:r,prefix:s,colors:n,positionals:o=[]}=t,i=this.createEntry(e,r),a=n?.timestamp||"gray",h=n?.prefix||"gray",l={timestamp:et[a],prefix:et[h]};this.getWriter(e)([l.timestamp(this.formatTimestamp(i.timestamp))].concat(s!=null?l.prefix(s):[]).concat(bt(r)).join(" "),...o.map(bt))}formatTimestamp(t){return`${t.toLocaleTimeString("en-GB")}:${t.getMilliseconds()}`}getWriter(t){switch(t){case"debug":case"success":case"info":return ms;case"warning":return bs;case"error":return ws}}},ys=class{startTime;endTime;deltaTime;constructor(){this.startTime=performance.now()}measure(){this.endTime=performance.now();const t=this.endTime-this.startTime;this.deltaTime=t.toFixed(2)}},R=()=>{};function ms(t,...e){if(Ae){process.stdout.write(ye(t,...e)+`
`);return}console.log(t,...e)}function bs(t,...e){if(Ae){process.stderr.write(ye(t,...e)+`
`);return}console.warn(t,...e)}function ws(t,...e){if(Ae){process.stderr.write(ye(t,...e)+`
`);return}console.error(t,...e)}function mt(t){return Ae?ns[t]:globalThis[t]?.toString()}function oe(t,e){return t!==void 0&&t!==e}function bt(t){return typeof t>"u"?"undefined":t===null?"null":typeof t=="string"?t:typeof t=="object"?JSON.stringify(t):t.toString()}var vs=class extends Error{constructor(t,e,r){super(`Possible EventEmitter memory leak detected. ${r} ${e.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),this.emitter=t,this.type=e,this.count=r,this.name="MaxListenersExceededWarning"}},Vt=class{static listenerCount(t,e){return t.listenerCount(e)}constructor(){this.events=new Map,this.maxListeners=Vt.defaultMaxListeners,this.hasWarnedAboutPotentialMemoryLeak=!1}_emitInternalEvent(t,e,r){this.emit(t,e,r)}_getListeners(t){return Array.prototype.concat.apply([],this.events.get(t))||[]}_removeListener(t,e){const r=t.indexOf(e);return r>-1&&t.splice(r,1),[]}_wrapOnceListener(t,e){const r=(...s)=>(this.removeListener(t,r),e.apply(this,s));return Object.defineProperty(r,"name",{value:e.name}),r}setMaxListeners(t){return this.maxListeners=t,this}getMaxListeners(){return this.maxListeners}eventNames(){return Array.from(this.events.keys())}emit(t,...e){const r=this._getListeners(t);return r.forEach(s=>{s.apply(this,e)}),r.length>0}addListener(t,e){this._emitInternalEvent("newListener",t,e);const r=this._getListeners(t).concat(e);if(this.events.set(t,r),this.maxListeners>0&&this.listenerCount(t)>this.maxListeners&&!this.hasWarnedAboutPotentialMemoryLeak){this.hasWarnedAboutPotentialMemoryLeak=!0;const s=new vs(this,t,this.listenerCount(t));console.warn(s)}return this}on(t,e){return this.addListener(t,e)}once(t,e){return this.addListener(t,this._wrapOnceListener(t,e))}prependListener(t,e){const r=this._getListeners(t);if(r.length>0){const s=[e].concat(r);this.events.set(t,s)}else this.events.set(t,r.concat(e));return this}prependOnceListener(t,e){return this.prependListener(t,this._wrapOnceListener(t,e))}removeListener(t,e){const r=this._getListeners(t);return r.length>0&&(this._removeListener(r,e),this.events.set(t,r),this._emitInternalEvent("removeListener",t,e)),this}off(t,e){return this.removeListener(t,e)}removeAllListeners(t){return t?this.events.delete(t):this.events.clear(),this}listeners(t){return Array.from(this._getListeners(t))}listenerCount(t){return this._getListeners(t).length}rawListeners(t){return this.listeners(t)}},Xt=Vt;Xt.defaultMaxListeners=10;var ks="x-interceptors-internal-request-id";function wt(t){return globalThis[t]||void 0}function xs(t,e){globalThis[t]=e}function Ss(t){delete globalThis[t]}var M=(function(t){return t.INACTIVE="INACTIVE",t.APPLYING="APPLYING",t.APPLIED="APPLIED",t.DISPOSING="DISPOSING",t.DISPOSED="DISPOSED",t})({}),it=class{constructor(t){this.symbol=t,this.readyState=M.INACTIVE,this.emitter=new Xt,this.subscriptions=[],this.logger=new Kt(t.description),this.emitter.setMaxListeners(0),this.logger.info("constructing the interceptor...")}checkEnvironment(){return!0}apply(){const t=this.logger.extend("apply");if(t.info("applying the interceptor..."),this.readyState===M.APPLIED){t.info("intercepted already applied!");return}if(!this.checkEnvironment()){t.info("the interceptor cannot be applied in this environment!");return}this.readyState=M.APPLYING;const e=this.getInstance();if(e){t.info("found a running instance, reusing..."),this.on=(r,s)=>(t.info('proxying the "%s" listener',r),e.emitter.addListener(r,s),this.subscriptions.push(()=>{e.emitter.removeListener(r,s),t.info('removed proxied "%s" listener!',r)}),this),this.readyState=M.APPLIED;return}t.info("no running instance found, setting up a new instance..."),this.setup(),this.setInstance(),this.readyState=M.APPLIED}setup(){}on(t,e){const r=this.logger.extend("on");return this.readyState===M.DISPOSING||this.readyState===M.DISPOSED?(r.info("cannot listen to events, already disposed!"),this):(r.info('adding "%s" event listener:',t,e),this.emitter.on(t,e),this)}once(t,e){return this.emitter.once(t,e),this}off(t,e){return this.emitter.off(t,e),this}removeAllListeners(t){return this.emitter.removeAllListeners(t),this}dispose(){const t=this.logger.extend("dispose");if(this.readyState===M.DISPOSED){t.info("cannot dispose, already disposed!");return}if(t.info("disposing the interceptor..."),this.readyState=M.DISPOSING,!this.getInstance()){t.info("no interceptors running, skipping dispose...");return}if(this.clearInstance(),t.info("global symbol deleted:",wt(this.symbol)),this.subscriptions.length>0){t.info("disposing of %d subscriptions...",this.subscriptions.length);for(const e of this.subscriptions)e();this.subscriptions=[],t.info("disposed of all subscriptions!",this.subscriptions.length)}this.emitter.removeAllListeners(),t.info("destroyed the listener!"),this.readyState=M.DISPOSED}getInstance(){const t=wt(this.symbol);return this.logger.info("retrieved global instance:",t?.constructor?.name),t}setInstance(){xs(this.symbol,this),this.logger.info("set global instance!",this.symbol.description)}clearInstance(){Ss(this.symbol),this.logger.info("cleared global instance!",this.symbol.description)}};function at(){return Math.random().toString(16).slice(2)}function er(t){if(typeof t=="string")return er(new URL(t,typeof location<"u"?location.href:void 0));if(t.protocol==="http:"?t.protocol="ws:":t.protocol==="https:"&&(t.protocol="wss:"),t.protocol!=="ws:"&&t.protocol!=="wss:")throw new SyntaxError(`Failed to construct 'WebSocket': The URL's scheme must be either 'http', 'https', 'ws', or 'wss'. '${t.protocol}' is not allowed.`);if(t.hash!=="")throw new SyntaxError(`Failed to construct 'WebSocket': The URL contains a fragment identifier ('${t.hash}'). Fragment identifiers are not allowed in WebSocket URLs.`);return t.href}async function fe(t,e,...r){const s=t.listeners(e);if(s.length!==0)for(const n of s)await n.apply(t,r)}function ct(t){const e=Object.getOwnPropertyDescriptor(globalThis,t);return typeof e>"u"||typeof e.get=="function"&&typeof e.get()>"u"||typeof e.get>"u"&&e.value==null?!1:typeof e.set>"u"&&!e.configurable?(console.error(`[MSW] Failed to apply interceptor: the global \`${t}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`),!1):!0}function Ls(){const t=(e,r)=>{t.state="pending",t.resolve=s=>{if(t.state!=="pending")return;t.result=s;const n=o=>(t.state="fulfilled",o);return e(s instanceof Promise?s:Promise.resolve(s).then(n))},t.reject=s=>{if(t.state==="pending")return queueMicrotask(()=>{t.state="rejected"}),r(t.rejectionReason=s)}};return t}var De=class extends Promise{#e;resolve;reject;constructor(t=null){const e=Ls();super((r,s)=>{e(r,s),t?.(e.resolve,e.reject)}),this.#e=e,this.resolve=this.#e.resolve,this.reject=this.#e.reject}get state(){return this.#e.state}get rejectionReason(){return this.#e.rejectionReason}then(t,e){return this.#t(super.then(t,e))}catch(t){return this.#t(super.catch(t))}finally(t){return this.#t(super.finally(t))}#t(t){return Object.defineProperties(t,{resolve:{configurable:!0,value:this.resolve},reject:{configurable:!0,value:this.reject}})}};function L(t,e){return Object.defineProperties(e,{target:{value:t,enumerable:!0,writable:!0},currentTarget:{value:t,enumerable:!0,writable:!0}}),e}var te=Symbol("kCancelable"),I=Symbol("kDefaultPrevented"),lt=class extends MessageEvent{constructor(t,e){super(t,e),this[te]=!!e.cancelable,this[I]=!1}get cancelable(){return this[te]}set cancelable(t){this[te]=t}get defaultPrevented(){return this[I]}set defaultPrevented(t){this[I]=t}preventDefault(){this.cancelable&&!this[I]&&(this[I]=!0)}},Ge=class extends Event{constructor(t,e={}){super(t,e),this.code=e.code===void 0?0:e.code,this.reason=e.reason===void 0?"":e.reason,this.wasClean=e.wasClean===void 0?!1:e.wasClean}},vt=class extends Ge{constructor(t,e={}){super(t,e),this[te]=!!e.cancelable,this[I]=!1}get cancelable(){return this[te]}set cancelable(t){this[te]=t}get defaultPrevented(){return this[I]}set defaultPrevented(t){this[I]=t}preventDefault(){this.cancelable&&!this[I]&&(this[I]=!0)}},ie=Symbol("kEmitter"),ke=Symbol("kBoundListener"),Es=class{constructor(t,e){this.socket=t,this.transport=e,this.id=at(),this.url=new URL(t.url),this[ie]=new EventTarget,this.transport.addEventListener("outgoing",r=>{const s=L(this.socket,new lt("message",{data:r.data,origin:r.origin,cancelable:!0}));this[ie].dispatchEvent(s),s.defaultPrevented&&r.preventDefault()}),this.transport.addEventListener("close",r=>{this[ie].dispatchEvent(L(this.socket,new Ge("close",r)))})}addEventListener(t,e,r){if(!Reflect.has(e,ke)){const s=e.bind(this.socket);Object.defineProperty(e,ke,{value:s,enumerable:!1,configurable:!1})}this[ie].addEventListener(t,Reflect.get(e,ke),r)}removeEventListener(t,e,r){this[ie].removeEventListener(t,Reflect.get(e,ke),r)}send(t){this.transport.send(t)}close(t,e){this.transport.close(t,e)}},kt="InvalidAccessError: close code out of user configurable range",Ie=Symbol("kPassthroughPromise"),tr=Symbol("kOnSend"),ge=Symbol("kClose"),_s=class extends EventTarget{static{this.CONNECTING=0}static{this.OPEN=1}static{this.CLOSING=2}static{this.CLOSED=3}constructor(t,e){super(),this.CONNECTING=0,this.OPEN=1,this.CLOSING=2,this.CLOSED=3,this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null,this.url=er(t),this.protocol="",this.extensions="",this.binaryType="blob",this.readyState=this.CONNECTING,this.bufferedAmount=0,this[Ie]=new De,queueMicrotask(async()=>{await this[Ie]||(this.protocol=typeof e=="string"?e:Array.isArray(e)&&e.length>0?e[0]:"",this.readyState===this.CONNECTING&&(this.readyState=this.OPEN,this.dispatchEvent(L(this,new Event("open")))))})}set onopen(t){this.removeEventListener("open",this._onopen),this._onopen=t,t!==null&&this.addEventListener("open",t)}get onopen(){return this._onopen}set onmessage(t){this.removeEventListener("message",this._onmessage),this._onmessage=t,t!==null&&this.addEventListener("message",t)}get onmessage(){return this._onmessage}set onerror(t){this.removeEventListener("error",this._onerror),this._onerror=t,t!==null&&this.addEventListener("error",t)}get onerror(){return this._onerror}set onclose(t){this.removeEventListener("close",this._onclose),this._onclose=t,t!==null&&this.addEventListener("close",t)}get onclose(){return this._onclose}send(t){if(this.readyState===this.CONNECTING)throw this.close(),new DOMException("InvalidStateError");this.readyState===this.CLOSING||this.readyState===this.CLOSED||(this.bufferedAmount+=qs(t),queueMicrotask(()=>{this.bufferedAmount=0,this[tr]?.(t)}))}close(t=1e3,e){x(t,kt),x(t===1e3||t>=3e3&&t<=4999,kt),this[ge](t,e)}[ge](t=1e3,e,r=!0){this.readyState===this.CLOSING||this.readyState===this.CLOSED||(this.readyState=this.CLOSING,queueMicrotask(()=>{this.readyState=this.CLOSED,this.dispatchEvent(L(this,new Ge("close",{code:t,reason:e,wasClean:r}))),this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null}))}addEventListener(t,e,r){return super.addEventListener(t,e,r)}removeEventListener(t,e,r){return super.removeEventListener(t,e,r)}};function qs(t){return typeof t=="string"?t.length:t instanceof Blob?t.size:t.byteLength}var D=Symbol("kEmitter"),xe=Symbol("kBoundListener"),$e=Symbol("kSend"),Cs=class{constructor(t,e,r){this.client=t,this.transport=e,this.createConnection=r,this[D]=new EventTarget,this.mockCloseController=new AbortController,this.realCloseController=new AbortController,this.transport.addEventListener("outgoing",s=>{typeof this.realWebSocket>"u"||queueMicrotask(()=>{s.defaultPrevented||this[$e](s.data)})}),this.transport.addEventListener("incoming",this.handleIncomingMessage.bind(this))}get socket(){return x(this.realWebSocket,'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?'),this.realWebSocket}connect(){x(!this.realWebSocket||this.realWebSocket.readyState!==WebSocket.OPEN,'Failed to call "connect()" on the original WebSocket instance: the connection already open');const t=this.createConnection();t.binaryType=this.client.binaryType,t.addEventListener("open",e=>{this[D].dispatchEvent(L(this.realWebSocket,new Event("open",e)))},{once:!0}),t.addEventListener("message",e=>{this.transport.dispatchEvent(L(this.realWebSocket,new MessageEvent("incoming",{data:e.data,origin:e.origin})))}),this.client.addEventListener("close",e=>{this.handleMockClose(e)},{signal:this.mockCloseController.signal}),t.addEventListener("close",e=>{this.handleRealClose(e)},{signal:this.realCloseController.signal}),t.addEventListener("error",()=>{const e=L(t,new Event("error",{cancelable:!0}));this[D].dispatchEvent(e),e.defaultPrevented||this.client.dispatchEvent(L(this.client,new Event("error")))}),this.realWebSocket=t}addEventListener(t,e,r){if(!Reflect.has(e,xe)){const s=e.bind(this.client);Object.defineProperty(e,xe,{value:s,enumerable:!1})}this[D].addEventListener(t,Reflect.get(e,xe),r)}removeEventListener(t,e,r){this[D].removeEventListener(t,Reflect.get(e,xe),r)}send(t){this[$e](t)}[$e](t){const{realWebSocket:e}=this;if(x(e,'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?',this.client.url),!(e.readyState===WebSocket.CLOSING||e.readyState===WebSocket.CLOSED)){if(e.readyState===WebSocket.CONNECTING){e.addEventListener("open",()=>{e.send(t)},{once:!0});return}e.send(t)}}close(){const{realWebSocket:t}=this;x(t,'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?',this.client.url),this.realCloseController.abort(),!(t.readyState===WebSocket.CLOSING||t.readyState===WebSocket.CLOSED)&&(t.close(),queueMicrotask(()=>{this[D].dispatchEvent(L(this.realWebSocket,new vt("close",{code:1e3,cancelable:!0})))}))}handleIncomingMessage(t){const e=L(t.target,new lt("message",{data:t.data,origin:t.origin,cancelable:!0}));this[D].dispatchEvent(e),e.defaultPrevented||this.client.dispatchEvent(L(this.client,new MessageEvent("message",{data:t.data,origin:t.origin})))}handleMockClose(t){this.realWebSocket&&this.realWebSocket.close()}handleRealClose(t){this.mockCloseController.abort();const e=L(this.realWebSocket,new vt("close",{code:t.code,reason:t.reason,wasClean:t.wasClean,cancelable:!0}));this[D].dispatchEvent(e),e.defaultPrevented||this.client[ge](t.code,t.reason)}},js=class extends EventTarget{constructor(t){super(),this.socket=t,this.socket.addEventListener("close",e=>{this.dispatchEvent(L(this.socket,new Ge("close",e)))}),this.socket[tr]=e=>{this.dispatchEvent(L(this.socket,new lt("outgoing",{data:e,origin:this.socket.url,cancelable:!0})))}}addEventListener(t,e,r){return super.addEventListener(t,e,r)}dispatchEvent(t){return super.dispatchEvent(t)}send(t){queueMicrotask(()=>{if(this.socket.readyState===this.socket.CLOSING||this.socket.readyState===this.socket.CLOSED)return;const e=()=>{this.socket.dispatchEvent(L(this.socket,new MessageEvent("message",{data:t,origin:this.socket.url})))};this.socket.readyState===this.socket.CONNECTING?this.socket.addEventListener("open",()=>{e()},{once:!0}):e()})}close(t,e){this.socket[ge](t,e)}},Rs=class rr extends it{static{this.symbol=Symbol("websocket")}constructor(){super(rr.symbol)}checkEnvironment(){return ct("WebSocket")}setup(){const e=Object.getOwnPropertyDescriptor(globalThis,"WebSocket"),r=new Proxy(globalThis.WebSocket,{construct:(s,n,o)=>{const[i,a]=n,h=()=>Reflect.construct(s,n,o),l=new _s(i,a),m=new js(l);return queueMicrotask(async()=>{try{const f=new Cs(l,m,h),p=this.emitter.listenerCount("connection")>0;await fe(this.emitter,"connection",{client:new Es(l,m),server:f,info:{protocols:a}}),p?l[Ie].resolve(!1):(l[Ie].resolve(!0),f.connect(),f.addEventListener("open",()=>{l.dispatchEvent(L(l,new Event("open"))),f.realWebSocket&&(l.protocol=f.realWebSocket.protocol)}))}catch(f){f instanceof Error&&(l.dispatchEvent(new Event("error")),l.readyState!==WebSocket.CLOSING&&l.readyState!==WebSocket.CLOSED&&l[ge](1011,f.message,!1),console.error(f))}}),l}});Object.defineProperty(globalThis,"WebSocket",{value:r,configurable:!0}),this.subscriptions.push(()=>{Object.defineProperty(globalThis,"WebSocket",e)})}};function dt(){return typeof navigator<"u"&&"serviceWorker"in navigator&&typeof location<"u"&&location.protocol!=="file:"}function Ms(){try{const t=new ReadableStream({start:r=>r.close()});return new MessageChannel().port1.postMessage(t,[t]),!0}catch{return!1}}function Ps(){const t=((e,r)=>{t.state="pending",t.resolve=s=>{if(t.state!=="pending")return;t.result=s;const n=o=>(t.state="fulfilled",o);return e(s instanceof Promise?s:Promise.resolve(s).then(n))},t.reject=s=>{if(t.state==="pending")return queueMicrotask(()=>{t.state="rejected"}),r(t.rejectionReason=s)}});return t}var ae=class extends Promise{#e;resolve;reject;constructor(t=null){const e=Ps();super((r,s)=>{e(r,s),t?.(e.resolve,e.reject)}),this.#e=e,this.resolve=this.#e.resolve,this.reject=this.#e.reject}get state(){return this.#e.state}get rejectionReason(){return this.#e.rejectionReason}then(t,e){return this.#t(super.then(t,e))}catch(t){return this.#t(super.catch(t))}finally(t){return this.#t(super.finally(t))}#t(t){return Object.defineProperties(t,{resolve:{configurable:!0,value:this.resolve},reject:{configurable:!0,value:this.reject}})}},re=Symbol("isPatchedModule"),qe=class sr extends Error{constructor(e){super(e),this.name="InterceptorError",Object.setPrototypeOf(this,sr.prototype)}},ue=class H{static{this.PENDING=0}static{this.PASSTHROUGH=1}static{this.RESPONSE=2}static{this.ERROR=3}constructor(e,r){this.request=e,this.source=r,this.readyState=H.PENDING,this.handled=new De}get#e(){return this.handled}async passthrough(){x.as(qe,this.readyState===H.PENDING,'Failed to passthrough the "%s %s" request: the request has already been handled',this.request.method,this.request.url),this.readyState=H.PASSTHROUGH,await this.source.passthrough(),this.#e.resolve()}respondWith(e){x.as(qe,this.readyState===H.PENDING,'Failed to respond to the "%s %s" request with "%d %s": the request has already been handled (%d)',this.request.method,this.request.url,e.status,e.statusText||"OK",this.readyState),this.readyState=H.RESPONSE,this.#e.resolve(),this.source.respondWith(e)}errorWith(e){x.as(qe,this.readyState===H.PENDING,'Failed to error the "%s %s" request with "%s": the request has already been handled (%d)',this.request.method,this.request.url,e?.toString(),this.readyState),this.readyState=H.ERROR,this.source.errorWith(e),this.#e.resolve()}};function nr(t){try{return new URL(t),!0}catch{return!1}}function xt(t,e){const r=Object.getOwnPropertySymbols(e).find(s=>s.description===t);if(r)return Reflect.get(e,r)}var Q=class V extends Response{static{this.STATUS_CODES_WITHOUT_BODY=[101,103,204,205,304]}static{this.STATUS_CODES_WITH_REDIRECT=[301,302,303,307,308]}static isConfigurableStatusCode(e){return e>=200&&e<=599}static isRedirectResponse(e){return V.STATUS_CODES_WITH_REDIRECT.includes(e)}static isResponseWithBody(e){return!V.STATUS_CODES_WITHOUT_BODY.includes(e)}static setUrl(e,r){if(!e||e==="about:"||!nr(e))return;const s=xt("state",r);s?s.urlList.push(new URL(e)):Object.defineProperty(r,"url",{value:e,enumerable:!0,configurable:!0,writable:!1})}static parseRawHeaders(e){const r=new Headers;for(let s=0;s<e.length;s+=2)r.append(e[s],e[s+1]);return r}constructor(e,r={}){const s=r.status??200,n=V.isConfigurableStatusCode(s)?s:200,o=V.isResponseWithBody(s)?e:null;if(super(o,{status:n,statusText:r.statusText,headers:r.headers}),s!==n){const i=xt("state",this);i?i.status=s:Object.defineProperty(this,"status",{value:s,enumerable:!0,configurable:!0,writable:!1})}V.setUrl(r.url,this)}},Os=Symbol("kRawRequest");function or(t,e){Reflect.set(t,Os,e)}var Ts=new TextEncoder;function Is(t){return Ts.encode(t)}function Ns(t,e){return new TextDecoder(e).decode(t)}function Ws(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function As(t){try{return[null,await t().catch(e=>{throw e})]}catch(e){return[e,null]}}function Ds(t){return new URL(t,location.href).href}function Be(t,e,r){return[t.active,t.installing,t.waiting].filter(i=>i!=null).find(i=>r(i.scriptURL,e))||null}var Gs=async(t,e={},r)=>{const s=Ds(t),n=await navigator.serviceWorker.getRegistrations().then(h=>h.filter(l=>Be(l,s,r)));!navigator.serviceWorker.controller&&n.length>0&&location.reload();const[o]=n;if(o)return o.update(),[Be(o,s,r),o];const[i,a]=await As(async()=>{const h=await navigator.serviceWorker.register(t,e);return[Be(h,s,r),h]});if(i){if(i.message.includes("(404)")){const l=new URL(e?.scope||"/",location.href);throw new Error(v.formatMessage(`Failed to register a Service Worker for scope ('${l.href}') with script ('${s}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`))}throw new Error(v.formatMessage(`Failed to register the Service Worker:

%s`,i.message))}return a},St=class{#e;#t;constructor(){this.#e=[],this.#t=new Map}get[Symbol.iterator](){return this.#e[Symbol.iterator].bind(this.#e)}entries(){return this.#t.entries()}get(t){return this.#t.get(t)||[]}getAll(){return this.#e.map(([,t])=>t)}append(t,e){this.#e.push([t,e]),this.#s(t,r=>r.push(e))}prepend(t,e){this.#e.unshift([t,e]),this.#s(t,r=>r.unshift(e))}delete(t,e){if(this.size===0)return!1;const r=this.#t.get(t);if(!r)return!1;const s=r.indexOf(e);return s===-1?!1:(r.splice(s,1),this.#e.splice(this.#e.findIndex(n=>n[0]===t&&n[1]===e),1),!0)}deleteAll(t){this.size!==0&&(this.#e=this.#e.filter(e=>e[0]!==t),this.#t.delete(t))}get size(){return this.#e.length}clear(){this.size!==0&&(this.#e.length=0,this.#t.clear())}#s(t,e){e(this.#t.get(t)||this.#t.set(t,[]).get(t))}},Se=Symbol("kDefaultPrevented"),U=Symbol("kPropagationStopped"),he=Symbol("kImmediatePropagationStopped"),Hs=class extends MessageEvent{#e;[Se];[U];[he];constructor(...t){super(t[0],t[1]),this[Se]=!1}get defaultPrevented(){return this[Se]}preventDefault(){super.preventDefault(),this[Se]=!0}stopImmediatePropagation(){super.stopImmediatePropagation(),this[he]=!0}},Us=class{#e;#t;#s;#n;#r;#a;#o;hooks;constructor(){this.#e=new St,this.#t=new WeakMap,this.#s=new WeakMap,this.#n=new WeakSet,this.#r=new St,this.#a=new WeakMap,this.#o=new WeakMap,this.hooks={on:(t,e,r)=>{if(!r?.signal?.aborted){if(r?.once){const s=e,n=((...o)=>(this.#i(t,n),s(...o)));e=n}if(this.#r.append(t,e),r&&this.#a.set(e,r),r?.signal){const{signal:s}=r,n=()=>{this.#i(t,e)};s.addEventListener("abort",n,{once:!0}),this.#o.set(e,()=>{s.removeEventListener("abort",n)})}}},removeListener:(t,e)=>{this.#i(t,e)}}}#i(t,e){this.#r.delete(t,e);const r=this.#o.get(e);r&&(r(),this.#o.delete(e))}#h(t,e){const r=this.#e.delete(t,e),s=this.#s.get(e);return s&&(s(),this.#s.delete(e)),r}on(t,e,r){return this.#p(t,e,r),this}once(t,e,r){return this.on(t,e,{...r||{},once:!0})}earlyOn(t,e,r){return this.#p(t,e,r,"prepend"),this}earlyOnce(t,e,r){return this.earlyOn(t,e,{...r||{},once:!0})}emit(t){if(this.#e.size===0)return!1;const e=this.listenerCount(t.type)>0,r=this.#c(t);for(const s of this.#d(t.type)){if(r.event[U]!=null&&r.event[U]!==this)return r.revoke(),!1;if(r.event[he])break;this.#l(r.event,s)}return r.revoke(),e}async emitAsPromise(t){if(this.#e.size===0)return[];const e=[],r=this.#c(t);for(const s of this.#d(t.type)){if(r.event[U]!=null&&r.event[U]!==this)return r.revoke(),[];if(r.event[he])break;const n=await Promise.resolve(this.#l(r.event,s));this.#u(s)||e.push(n)}return r.revoke(),Promise.allSettled(e).then(s=>s.map(n=>n.status==="fulfilled"?n.value:n.reason))}*emitAsGenerator(t){if(this.#e.size===0)return;const e=this.#c(t);for(const r of this.#d(t.type)){if(e.event[U]!=null&&e.event[U]!==this){e.revoke();return}if(e.event[he])break;const s=this.#l(e.event,r);this.#u(r)||(yield s)}e.revoke()}removeListener(t,e){const r=this.#t.get(e);if(this.#h(t,e))for(const s of this.#r.get("removeListener").slice())s(t,e,r)}removeAllListeners(t){if(t==null){for(const[r,s]of this.#e.entries())for(;s.length>0;)this.removeListener(r,s[0]);for(const[r,s]of[...this.#r])this.#a.get(s)?.persist||this.#i(r,s);return}const e=this.listeners(t);for(;e.length>0;)this.removeListener(t,e[0])}listeners(t){return t==null?this.#e.getAll():this.#e.get(t)}listenerCount(t){return t==null?this.#e.size:this.listeners(t).length}#p(t,e,r,s="append"){if(!r?.signal?.aborted){for(const n of this.#r.get("newListener").slice())n(t,e,r);if(t==="*"&&this.#n.add(e),s==="prepend"?this.#e.prepend(t,e):this.#e.append(t,e),r&&(this.#t.set(e,r),r.signal)){const{signal:n}=r,o=()=>{this.removeListener(t,e)};n.addEventListener("abort",o,{once:!0}),this.#s.set(e,()=>{n.removeEventListener("abort",o)})}}}#c(t){const{stopPropagation:e}=t;return t.stopPropagation=()=>{t[U]=this,e.call(t)},{event:t,revoke(){t.stopPropagation=e}}}#l(t,e){for(const n of this.#r.get("beforeEmit").slice())if(n(t)===!1)return;const r=e.call(this,t),s=this.#t.get(e);if(s?.once){const n=this.#u(e)?"*":t.type;if(this.#h(n,e))for(const o of this.#r.get("removeListener").slice())o(n,e,s)}return r}*#d(t){const e=[];for(const[r,s]of this.#e)(r==="*"||r===t)&&e.push(s);yield*e}#u(t){return this.#n.has(t)}},Lt=dt(),$s=class extends Hs{#e;constructor(t){const e=t.data.type,r=t.data.payload;super(e,{data:r}),this.#e=t}get ports(){return this.#e.ports}postMessage(t,...e){this.#e.ports[0].postMessage({type:t,data:e[0]},{transfer:e[1]})}},Bs=class extends Us{#e;#t;constructor(t){super(),x(Lt,"Failed to open a WorkerChannel: Service Worker is not supported in this environment."),this.#e=t.getWorker,this.#t=new AbortController,navigator.serviceWorker.addEventListener("message",async e=>{const r=await this.#e();e.source!=null&&e.source!==r||e.data&&Lr(e.data)&&"type"in e.data&&this.emit(new $s(e))},{signal:this.#t.signal})}postMessage(t){x(Lt,"Failed to post message on a WorkerChannel: the Service Worker API is unavailable in this environment. This is likely an issue with MSW. Please report it on GitHub: https://github.com/mswjs/msw/issues"),this.#e().then(e=>{e.postMessage(t)})}terminate(){this.#t.abort(),this.removeAllListeners()}};function Fs(t){if(!["HEAD","GET"].includes(t.method))return t.body}function Et(t){return new Request(t.url,{...t,body:Fs(t)})}function Qs(t){location.href.startsWith(t.scope)||v.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${t.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`)}function zs(t,e){return t.findWorker!==e.findWorker||t.serviceWorker.url!==e.serviceWorker.url||JSON.stringify(t.serviceWorker.options)!==JSON.stringify(e.serviceWorker.options)}var _t=class j extends st{static#e;static async from(e){return j.#e==null?j.#e=new j(e):zs(j.#e.#t,e)&&(await j.#e.terminate(),j.#e=new j(e)),j.#e}#t;#s;#n;#r;#a;#o;#i;workerPromise;constructor(e){super(),x(dt(),"Failed to use Service Worker as the network source: the Service Worker API is not supported in this environment"),this.#t=e,this.#s=new Map,this.workerPromise=new ae,this.#n=new Bs({getWorker:()=>this.workerPromise.then(([r])=>r)})}async enable(){if(this.workerPromise.state==="fulfilled"&&typeof this.#i>"u")return v.warn('Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.'),this.workerPromise.then(([,n])=>n);this.#i=void 0,this.#n.removeAllListeners(),this.#s.clear(),this.#r=new AbortController;const[e,r]=await this.#h();if(e.state!=="activated"){const n=new AbortController,o=new ae;o.then(()=>n.abort()),e.addEventListener("statechange",()=>{e.state==="activated"&&o.resolve()},{signal:n.signal}),await o}this.#n.postMessage("MOCK_ACTIVATE");const s=new ae;return this.#a=s,this.#n.once("MOCKING_ENABLED",n=>{s.resolve(n.data.client)}),await s,this.#t.quiet||this.#u(),r}disable(){if(typeof this.#i<"u"){v.warn('Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.');return}this.#i=Date.now(),this.#r?.abort(),this.#r=void 0,this.#n.postMessage("CLIENT_CLOSED"),this.#t.quiet||this.#f()}async terminate(){if(this.#o!=null&&(clearInterval(this.#o),this.#o=void 0),this.#s.clear(),this.#n.terminate(),this.#r?.abort(),this.#r=void 0,this.workerPromise.state==="fulfilled"){const[,e]=await this.workerPromise;await e.unregister()}j.#e===this&&(j.#e=void 0)}async#h(){this.#o&&clearInterval(this.#o);const e=this.#t.serviceWorker.url,[r,s]=await Gs(e,this.#t.serviceWorker.options,this.#t.findWorker||this.#l);if(r==null){const n=this.#t?.findWorker?v.formatMessage(`Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
     `,e):v.formatMessage(`Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,e,location.host);throw new Error(n)}return this.workerPromise.state==="pending"?this.workerPromise.resolve([r,s]):this.workerPromise=new ae(n=>{n([r,s])}),this.#n.on("REQUEST",this.#p.bind(this)),this.#n.on("RESPONSE",this.#c.bind(this)),window.addEventListener("beforeunload",()=>{r.state!=="redundant"&&this.#n.postMessage("CLIENT_CLOSED"),clearInterval(this.#o),window.postMessage({type:"msw/worker:stop"})},{signal:this.#r?.signal}),await this.#d().catch(n=>{v.error("Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues) and include the original error below."),console.error(n)}),this.#o=window.setInterval(()=>{this.#n.postMessage("KEEPALIVE_REQUEST")},5e3),this.#t.quiet||Qs(s),[r,s]}async#p(e){if(this.#i&&e.data.interceptedAt>this.#i)return e.postMessage("PASSTHROUGH");const r=Et(e.data);vr.cache.set(r,r.clone());const s=new Zs({event:e,request:r});this.#s.set(e.data.id,s),await this.queue(s)}async#c(e){const{request:r,response:s,isMockedResponse:n}=e.data,o=this.#s.get(r.id);if(s.type?.includes("opaque")){this.#s.delete(r.id),o?.events.removeAllListeners();return}if(this.#s.delete(r.id),o==null)return;const i=Et(r),a=s.status===0?Response.error():new Q(Q.isResponseWithBody(s.status)?s.body:null,{...s,url:r.url});try{o.events.emit(new Ft(n?"response:mocked":"response:bypass",{requestId:o.data.id,request:i,response:a,isMockedResponse:n}))}finally{o.events.removeAllListeners()}}#l=(e,r)=>e===r;async#d(){const e=new ae;return this.#n.postMessage("INTEGRITY_CHECK_REQUEST"),this.#n.once("INTEGRITY_CHECK_RESPONSE",r=>{const{checksum:s,packageVersion:n}=r.data;s!=="4db4a41e972cec1b64cc569c66952d82"&&v.warn(`The currently registered Service Worker has been generated by a different version of MSW (${n}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  • npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`),e.resolve()}),e}async#u(){if(this.workerPromise.state==="rejected")return;x(this.#a!=null,"[ServiceWorkerSource] Failed to print a start message: client confirmation not received");const e=await this.#a,[r,s]=await this.workerPromise;console.groupCollapsed(`%c${v.formatMessage("Mocking enabled.")}`,"color:orangered;font-weight:bold;"),console.log("%cDocumentation: %chttps://mswjs.io/docs","font-weight:bold","font-weight:normal"),console.log("Found an issue? https://github.com/mswjs/msw/issues"),console.log("Worker script URL:",r.scriptURL),console.log("Worker scope:",s.scope),e&&console.log("Client ID: %s (%s)",e.id,e.frameType),console.groupEnd()}#f(){console.log(`%c${v.formatMessage("Mocking disabled.")}`,"color:orangered;font-weight:bold;")}},Zs=class extends Ne{#e;constructor(t){super({request:t.request}),this.#e=t.event}passthrough(){this.#e.postMessage("PASSTHROUGH")}respondWith(t){t&&this.#t(t)}errorWith(t){if(t instanceof Response)return this.respondWith(t);v.warn(`Uncaught exception in the request handler for "%s %s". This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/http/mocking-responses/error-responses`,this.data.request.method,this.data.request.url);const e=t instanceof Error?t:new Error(t?.toString()||"Request failure");this.respondWith(c.json({name:e.name,message:e.message,stack:e.stack},{status:500,statusText:"Request Handler Error"}))}async#t(t){let e,r;const s=ss(t);Ms()?(e=t.body,r=t.body==null?void 0:[t.body]):e=t.body==null?null:await t.clone().arrayBuffer(),this.#e.postMessage("MOCK_RESPONSE",{...s,body:e},r)}},ir=async t=>{try{return{error:null,data:await t().catch(r=>{throw r})}}catch(e){return{error:e,data:null}}};function ar(t,e=!1){return e?Object.prototype.toString.call(t).startsWith("[object "):Object.prototype.toString.call(t)==="[object Object]"}function Ce(t,e){try{return t[e],!0}catch{return!1}}function Ys(t){return new Response(JSON.stringify(t instanceof Error?{name:t.name,message:t.message,stack:t.stack}:t),{status:500,statusText:"Unhandled Exception",headers:{"Content-Type":"application/json"}})}function ut(t){return t!=null&&t instanceof Response&&Ce(t,"type")&&t.type==="error"}function Js(t){return ar(t,!0)&&Ce(t,"status")&&Ce(t,"statusText")&&Ce(t,"bodyUsed")}function Ks(t){return t==null||!(t instanceof Error)?!1:"code"in t&&"errno"in t}async function cr(t){const e=async o=>o instanceof Error?(await t.controller.errorWith(o),!0):ut(o)?(await t.controller.respondWith(o),!0):Js(o)?(await t.controller.respondWith(o),!0):ar(o)?(await t.controller.errorWith(o),!0):!1,r=async o=>{if(o instanceof qe)throw n.error;return Ks(o)?(await t.controller.errorWith(o),!0):o instanceof Response?await e(o):!1},s=new De;if(t.request.signal){if(t.request.signal.aborted){await t.controller.errorWith(t.request.signal.reason);return}t.request.signal.addEventListener("abort",()=>{s.reject(t.request.signal.reason)},{once:!0})}const n=await ir(async()=>{const o=fe(t.emitter,"request",{requestId:t.requestId,request:t.request,controller:t.controller});await Promise.race([s,o,t.controller.handled])});if(s.state==="rejected"){await t.controller.errorWith(s.rejectionReason);return}if(n.error){if(await r(n.error))return;if(t.emitter.listenerCount("unhandledException")>0){const o=new ue(t.request,{passthrough(){},async respondWith(i){await e(i)},async errorWith(i){await t.controller.errorWith(i)}});if(await fe(t.emitter,"unhandledException",{error:n.error,request:t.request,requestId:t.requestId,controller:o}),o.readyState!==ue.PENDING)return}await t.controller.respondWith(Ys(n.error));return}return t.controller.readyState===ue.PENDING?await t.controller.passthrough():t.controller.handled}function B(t){return Object.assign(new TypeError("Failed to fetch"),{cause:t})}var Vs=["content-encoding","content-language","content-location","content-type","content-length"],Fe=Symbol("kRedirectCount");async function Xs(t,e){if(e.status!==303&&t.body!=null)return Promise.reject(B());const r=new URL(t.url);let s;try{s=new URL(e.headers.get("location"),t.url)}catch(i){return Promise.reject(B(i))}if(!(s.protocol==="http:"||s.protocol==="https:"))return Promise.reject(B("URL scheme must be a HTTP(S) scheme"));if(Reflect.get(t,Fe)>20)return Promise.reject(B("redirect count exceeded"));if(Object.defineProperty(t,Fe,{value:(Reflect.get(t,Fe)||0)+1}),t.mode==="cors"&&(s.username||s.password)&&!qt(r,s))return Promise.reject(B('cross origin not allowed for request mode "cors"'));const n={};([301,302].includes(e.status)&&t.method==="POST"||e.status===303&&!["HEAD","GET"].includes(t.method))&&(n.method="GET",n.body=null,Vs.forEach(i=>{t.headers.delete(i)})),qt(r,s)||(t.headers.delete("authorization"),t.headers.delete("proxy-authorization"),t.headers.delete("cookie"),t.headers.delete("host")),n.headers=t.headers;const o=await fetch(new Request(s,n));return Object.defineProperty(o,"redirected",{value:!0,configurable:!0}),o}function qt(t,e){return t.origin===e.origin&&t.origin==="null"||t.protocol===e.protocol&&t.hostname===e.hostname&&t.port===e.port}var en=class extends TransformStream{constructor(){console.warn("[Interceptors]: Brotli decompression of response streams is not supported in the browser"),super({transform(t,e){e.enqueue(t)}})}},tn=class extends TransformStream{constructor(t,...e){super({},...e);const r=[super.readable,...t].reduce((s,n)=>s.pipeThrough(n));Object.defineProperty(this,"readable",{get(){return r}})}};function rn(t){return t.toLowerCase().split(",").map(e=>e.trim())}function sn(t){if(t==="")return null;const e=rn(t);return e.length===0?null:new tn(e.reduceRight((r,s)=>s==="gzip"||s==="x-gzip"?r.concat(new DecompressionStream("gzip")):s==="deflate"?r.concat(new DecompressionStream("deflate")):s==="br"?r.concat(new en):(r.length=0,r),[]))}function nn(t){if(t.body===null)return null;const e=sn(t.headers.get("content-encoding")||"");return e?(t.body.pipeTo(e.writable),e.readable):null}var on=class lr extends it{static{this.symbol=Symbol("fetch")}constructor(){super(lr.symbol)}checkEnvironment(){return ct("fetch")}async setup(){const e=globalThis.fetch;x(!e[re],'Failed to patch the "fetch" module: already patched.'),globalThis.fetch=async(r,s)=>{const n=at(),o=typeof r=="string"&&typeof location<"u"&&!nr(r)?new URL(r,location.href):r,i=new Request(o,s);r instanceof Request&&or(i,r);const a=new De,h=new ue(i,{passthrough:async()=>{this.logger.info("request has not been handled, passthrough...");const l=i.clone(),{error:m,data:f}=await ir(()=>e(i));if(m)return a.reject(m);if(this.logger.info("original fetch performed",f),this.emitter.listenerCount("response")>0){this.logger.info('emitting the "response" event...');const p=f.clone();await fe(this.emitter,"response",{response:p,isMockedResponse:!1,request:l,requestId:n})}a.resolve(f)},respondWith:async l=>{if(ut(l)){this.logger.info("request has errored!",{response:l}),a.reject(B(l));return}this.logger.info("received mocked response!",{rawResponse:l});const m=nn(l),f=m===null?l:new Q(m,l);if(Q.setUrl(i.url,f),Q.isRedirectResponse(f.status)){if(i.redirect==="error"){a.reject(B("unexpected redirect"));return}if(i.redirect==="follow"){Xs(i,f).then(p=>{a.resolve(p)},p=>{a.reject(p)});return}}this.emitter.listenerCount("response")>0&&(this.logger.info('emitting the "response" event...'),await fe(this.emitter,"response",{response:f.clone(),isMockedResponse:!0,request:i,requestId:n})),a.resolve(f)},errorWith:l=>{this.logger.info("request has been aborted!",{reason:l}),a.reject(l)}});return this.logger.info("[%s] %s",i.method,i.url),this.logger.info("awaiting for the mocked response..."),this.logger.info('emitting the "request" event for %s listener(s)...',this.emitter.listenerCount("request")),await cr({request:i,requestId:n,emitter:this.emitter,controller:h}),a},Object.defineProperty(globalThis.fetch,re,{enumerable:!0,configurable:!0,value:!0}),this.subscriptions.push(()=>{Object.defineProperty(globalThis.fetch,re,{value:void 0}),globalThis.fetch=e,this.logger.info('restored native "globalThis.fetch"!',globalThis.fetch.name)})}};function an(t,e){const r=new Uint8Array(t.byteLength+e.byteLength);return r.set(t,0),r.set(e,t.byteLength),r}var dr=class{constructor(t,e){this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.type="",this.srcElement=null,this.currentTarget=null,this.eventPhase=0,this.isTrusted=!0,this.composed=!1,this.cancelable=!0,this.defaultPrevented=!1,this.bubbles=!0,this.lengthComputable=!0,this.loaded=0,this.total=0,this.cancelBubble=!1,this.returnValue=!0,this.type=t,this.target=e?.target||null,this.currentTarget=e?.currentTarget||null,this.timeStamp=Date.now()}composedPath(){return[]}initEvent(t,e,r){this.type=t,this.bubbles=!!e,this.cancelable=!!r}preventDefault(){this.defaultPrevented=!0}stopPropagation(){}stopImmediatePropagation(){}},cn=class extends dr{constructor(t,e){super(t),this.lengthComputable=e?.lengthComputable||!1,this.composed=e?.composed||!1,this.loaded=e?.loaded||0,this.total=e?.total||0}},ln=typeof ProgressEvent<"u";function dn(t,e,r){const s=["error","progress","loadstart","loadend","load","timeout","abort"],n=ln?ProgressEvent:cn;return s.includes(e)?new n(e,{lengthComputable:!0,loaded:r?.loaded||0,total:r?.total||0}):new dr(e,{target:t,currentTarget:t})}function ur(t,e){if(!(e in t))return null;if(Object.prototype.hasOwnProperty.call(t,e))return t;const r=Reflect.getPrototypeOf(t);return r?ur(r,e):null}function Qe(t,e){return new Proxy(t,un(e))}function un(t){const{constructorCall:e,methodCall:r,getProperty:s,setProperty:n}=t,o={};return typeof e<"u"&&(o.construct=function(i,a,h){const l=Reflect.construct.bind(null,i,a,h);return e.call(h,a,l)}),o.set=function(i,a,h){const l=()=>{const m=ur(i,a)||i,f=Reflect.getOwnPropertyDescriptor(m,a);return typeof f?.set<"u"?(f.set.apply(i,[h]),!0):Reflect.defineProperty(m,a,{writable:!0,enumerable:!0,configurable:!0,value:h})};return typeof n<"u"?n.call(i,[a,h],l):l()},o.get=function(i,a,h){const l=()=>i[a],m=typeof s<"u"?s.call(i,[a,h],l):l();return typeof m=="function"?(...f)=>{const p=m.bind(i,...f);return typeof r<"u"?r.call(i,[a,f],p):p()}:m},o}function hn(t){return["application/xhtml+xml","application/xml","image/svg+xml","text/html","text/xml"].some(e=>t.startsWith(e))}function pn(t){try{return JSON.parse(t)}catch{return null}}function fn(t,e){return new Q(Q.isResponseWithBody(t.status)?e:null,{url:t.responseURL,status:t.status,statusText:t.statusText,headers:gn(t.getAllResponseHeaders())})}function gn(t){const e=new Headers,r=t.split(/[\r\n]+/);for(const s of r){if(s.trim()==="")continue;const[n,...o]=s.split(": "),i=o.join(": ");e.append(n,i)}return e}async function Ct(t){const e=t.headers.get("content-length");return e!=null&&e!==""?Number(e):(await t.arrayBuffer()).byteLength}var ce=Symbol("kIsRequestHandled"),yn=ot(),ze=Symbol("kFetchRequest"),mn=class{constructor(t,e){this.initialRequest=t,this.logger=e,this.method="GET",this.url=null,this[ce]=!1,this.events=new Map,this.uploadEvents=new Map,this.requestId=at(),this.requestHeaders=new Headers,this.responseBuffer=new Uint8Array,this.request=Qe(t,{setProperty:([r,s],n)=>{switch(r){case"ontimeout":{const o=r.slice(2);return this.request.addEventListener(o,s),n()}default:return n()}},methodCall:([r,s],n)=>{switch(r){case"open":{const[o,i]=s;return typeof i>"u"?(this.method="GET",this.url=jt(o)):(this.method=o,this.url=jt(i)),this.logger=this.logger.extend(`${this.method} ${this.url.href}`),this.logger.info("open",this.method,this.url.href),n()}case"addEventListener":{const[o,i]=s;return this.registerEvent(o,i),this.logger.info("addEventListener",o,i),n()}case"setRequestHeader":{const[o,i]=s;return this.requestHeaders.set(o,i),this.logger.info("setRequestHeader",o,i),n()}case"send":{const[o]=s;this.request.addEventListener("load",()=>{if(typeof this.onResponse<"u"){const h=fn(this.request,this.request.response);this.onResponse.call(this,{response:h,isMockedResponse:this[ce],request:a,requestId:this.requestId})}});const i=typeof o=="string"?Is(o):o,a=this.toFetchApiRequest(i);this[ze]=a.clone(),queueMicrotask(()=>{(this.onRequest?.call(this,{request:a,requestId:this.requestId})||Promise.resolve()).finally(()=>{if(!this[ce])return this.logger.info("request callback settled but request has not been handled (readystate %d), performing as-is...",this.request.readyState),yn&&this.request.setRequestHeader(ks,this.requestId),n()})});break}default:return n()}}}),Z(this.request,"upload",Qe(this.request.upload,{setProperty:([r,s],n)=>{switch(r){case"onloadstart":case"onprogress":case"onaboart":case"onerror":case"onload":case"ontimeout":case"onloadend":{const o=r.slice(2);this.registerUploadEvent(o,s)}}return n()},methodCall:([r,s],n)=>{switch(r){case"addEventListener":{const[o,i]=s;return this.registerUploadEvent(o,i),this.logger.info("upload.addEventListener",o,i),n()}}}}))}registerEvent(t,e){const r=(this.events.get(t)||[]).concat(e);this.events.set(t,r),this.logger.info('registered event "%s"',t,e)}registerUploadEvent(t,e){const r=(this.uploadEvents.get(t)||[]).concat(e);this.uploadEvents.set(t,r),this.logger.info('registered upload event "%s"',t,e)}async respondWith(t){if(this[ce]=!0,this[ze]){const s=await Ct(this[ze]);this.trigger("loadstart",this.request.upload,{loaded:0,total:s}),this.trigger("progress",this.request.upload,{loaded:s,total:s}),this.trigger("load",this.request.upload,{loaded:s,total:s}),this.trigger("loadend",this.request.upload,{loaded:s,total:s})}this.logger.info("responding with a mocked response: %d %s",t.status,t.statusText),Z(this.request,"status",t.status),Z(this.request,"statusText",t.statusText),Z(this.request,"responseURL",this.url.href),this.request.getResponseHeader=new Proxy(this.request.getResponseHeader,{apply:(s,n,o)=>{if(this.logger.info("getResponseHeader",o[0]),this.request.readyState<this.request.HEADERS_RECEIVED)return this.logger.info("headers not received yet, returning null"),null;const i=t.headers.get(o[0]);return this.logger.info('resolved response header "%s" to',o[0],i),i}}),this.request.getAllResponseHeaders=new Proxy(this.request.getAllResponseHeaders,{apply:()=>{if(this.logger.info("getAllResponseHeaders"),this.request.readyState<this.request.HEADERS_RECEIVED)return this.logger.info("headers not received yet, returning empty string"),"";const s=Array.from(t.headers.entries()).map(([n,o])=>`${n}: ${o}`).join(`\r
`);return this.logger.info("resolved all response headers to",s),s}}),Object.defineProperties(this.request,{response:{enumerable:!0,configurable:!1,get:()=>this.response},responseText:{enumerable:!0,configurable:!1,get:()=>this.responseText},responseXML:{enumerable:!0,configurable:!1,get:()=>this.responseXML}});const e=await Ct(t.clone());this.logger.info("calculated response body length",e),this.trigger("loadstart",this.request,{loaded:0,total:e}),this.setReadyState(this.request.HEADERS_RECEIVED),this.setReadyState(this.request.LOADING);const r=()=>{this.logger.info("finalizing the mocked response..."),this.setReadyState(this.request.DONE),this.trigger("load",this.request,{loaded:this.responseBuffer.byteLength,total:e}),this.trigger("loadend",this.request,{loaded:this.responseBuffer.byteLength,total:e})};if(t.body){this.logger.info("mocked response has body, streaming...");const s=t.body.getReader(),n=async()=>{const{value:o,done:i}=await s.read();if(i){this.logger.info("response body stream done!"),r();return}o&&(this.logger.info("read response body chunk:",o),this.responseBuffer=an(this.responseBuffer,o),this.trigger("progress",this.request,{loaded:this.responseBuffer.byteLength,total:e})),n()};n()}else r()}responseBufferToText(){return Ns(this.responseBuffer)}get response(){if(this.logger.info("getResponse (responseType: %s)",this.request.responseType),this.request.readyState!==this.request.DONE)return null;switch(this.request.responseType){case"json":{const t=pn(this.responseBufferToText());return this.logger.info("resolved response JSON",t),t}case"arraybuffer":{const t=Ws(this.responseBuffer);return this.logger.info("resolved response ArrayBuffer",t),t}case"blob":{const t=this.request.getResponseHeader("Content-Type")||"text/plain",e=new Blob([this.responseBufferToText()],{type:t});return this.logger.info("resolved response Blob (mime type: %s)",e,t),e}default:{const t=this.responseBufferToText();return this.logger.info('resolving "%s" response type as text',this.request.responseType,t),t}}}get responseText(){if(x(this.request.responseType===""||this.request.responseType==="text","InvalidStateError: The object is in invalid state."),this.request.readyState!==this.request.LOADING&&this.request.readyState!==this.request.DONE)return"";const t=this.responseBufferToText();return this.logger.info('getResponseText: "%s"',t),t}get responseXML(){if(x(this.request.responseType===""||this.request.responseType==="document","InvalidStateError: The object is in invalid state."),this.request.readyState!==this.request.DONE)return null;const t=this.request.getResponseHeader("Content-Type")||"";return typeof DOMParser>"u"?(console.warn("Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly."),null):hn(t)?new DOMParser().parseFromString(this.responseBufferToText(),t):null}errorWith(t){this[ce]=!0,this.logger.info("responding with an error"),this.setReadyState(this.request.DONE),this.trigger("error",this.request),this.trigger("loadend",this.request)}setReadyState(t){if(this.logger.info("setReadyState: %d -> %d",this.request.readyState,t),this.request.readyState===t){this.logger.info("ready state identical, skipping transition...");return}Z(this.request,"readyState",t),this.logger.info("set readyState to: %d",t),t!==this.request.UNSENT&&(this.logger.info('triggering "readystatechange" event...'),this.trigger("readystatechange",this.request))}trigger(t,e,r){const s=e[`on${t}`],n=dn(e,t,r);this.logger.info('trigger "%s"',t,r||""),typeof s=="function"&&(this.logger.info('found a direct "%s" callback, calling...',t),s.call(e,n));const o=e instanceof XMLHttpRequestUpload?this.uploadEvents:this.events;for(const[i,a]of o)i===t&&(this.logger.info('found %d listener(s) for "%s" event, calling...',a.length,t),a.forEach(h=>h.call(e,n)))}toFetchApiRequest(t){this.logger.info("converting request to a Fetch API Request...");const e=t instanceof Document?t.documentElement.innerText:t,r=new Request(this.url.href,{method:this.method,headers:this.requestHeaders,credentials:this.request.withCredentials?"include":"same-origin",body:["GET","HEAD"].includes(this.method.toUpperCase())?null:e});return Z(r,"headers",Qe(r.headers,{methodCall:([s,n],o)=>{switch(s){case"append":case"set":{const[i,a]=n;this.request.setRequestHeader(i,a);break}case"delete":{const[i]=n;console.warn(`XMLHttpRequest: Cannot remove a "${i}" header from the Fetch API representation of the "${r.method} ${r.url}" request. XMLHttpRequest headers cannot be removed.`);break}}return o()}})),or(r,this.request),this.logger.info("converted request to a Fetch API Request!",r),r}};function jt(t){return typeof location>"u"?new URL(t):new URL(t.toString(),location.href)}function Z(t,e,r){Reflect.defineProperty(t,e,{writable:!0,enumerable:!0,value:r})}function bn({emitter:t,logger:e}){return new Proxy(globalThis.XMLHttpRequest,{construct(r,s,n){e.info("constructed new XMLHttpRequest");const o=Reflect.construct(r,s,n),i=Object.getOwnPropertyDescriptors(r.prototype);for(const h in i)Reflect.defineProperty(o,h,i[h]);const a=new mn(o,e);return a.onRequest=async function({request:h,requestId:l}){const m=new ue(h,{passthrough:()=>{this.logger.info("no mocked response received, performing request as-is...")},respondWith:async f=>{if(ut(f)){this.errorWith(new TypeError("Network error"));return}await this.respondWith(f)},errorWith:f=>{this.logger.info("request errored!",{error:f}),f instanceof Error&&this.errorWith(f)}});this.logger.info("awaiting mocked response..."),this.logger.info('emitting the "request" event for %s listener(s)...',t.listenerCount("request")),await cr({request:h,requestId:l,controller:m,emitter:t})},a.onResponse=async function({response:h,isMockedResponse:l,request:m,requestId:f}){this.logger.info('emitting the "response" event for %s listener(s)...',t.listenerCount("response")),t.emit("response",{response:h,isMockedResponse:l,request:m,requestId:f})},a.request}})}var wn=class hr extends it{static{this.interceptorSymbol=Symbol("xhr")}constructor(){super(hr.interceptorSymbol)}checkEnvironment(){return ct("XMLHttpRequest")}setup(){const e=this.logger.extend("setup");e.info('patching "XMLHttpRequest" module...');const r=globalThis.XMLHttpRequest;x(!r[re],'Failed to patch the "XMLHttpRequest" module: already patched.'),globalThis.XMLHttpRequest=bn({emitter:this.emitter,logger:this.logger}),e.info('native "XMLHttpRequest" module patched!',globalThis.XMLHttpRequest.name),Object.defineProperty(globalThis.XMLHttpRequest,re,{enumerable:!0,configurable:!0,value:!0}),this.subscriptions.push(()=>{Object.defineProperty(globalThis.XMLHttpRequest,re,{value:void 0}),globalThis.XMLHttpRequest=r,e.info('native "XMLHttpRequest" module restored!',globalThis.XMLHttpRequest.name)})}},vn=class extends Jt{constructor(t){super({interceptors:[new wn,new on]}),this.options=t}enable(){super.enable(),this.options.quiet||this.#e()}disable(){super.disable(),this.options.quiet||this.#t()}#e(){console.groupCollapsed(`%c${v.formatMessage("Mocking enabled (fallback mode).")}`,"color:orangered;font-weight:bold;"),console.log("%cDocumentation: %chttps://mswjs.io/docs","font-weight:bold","font-weight:normal"),console.log("Found an issue? https://github.com/mswjs/msw/issues"),console.groupEnd()}#t(){console.log(`%c${v.formatMessage("Mocking disabled.")}`,"color:orangered;font-weight:bold;")}},kn="/mockServiceWorker.js";function xn(...t){x(!ot(),v.formatMessage("Failed to execute `setupWorker` in a non-browser environment"));const e=Ur({sources:[],handlers:t});return{async start(r){if(r?.waitUntilReady!=null&&v.warn('The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.'),e.readyState===Xe.ENABLED){v.warn('Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.');return}const s=dt()?await _t.from({serviceWorker:{url:r?.serviceWorker?.url?.toString()||kn,options:r?.serviceWorker?.options},findWorker:r?.findWorker,quiet:r?.quiet}):new vn({quiet:r?.quiet});if(e.configure({sources:[s,new Jt({interceptors:[new Rs]})],onUnhandledFrame:rs(()=>r?.onUnhandledRequest||"warn"),context:{quiet:r?.quiet}}),await e.enable(),s instanceof _t){const[,n]=await s.workerPromise;return n}},stop(){if(e.readyState===Xe.DISABLED){v.warn('Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.');return}e.disable(),window.postMessage({type:"msw/worker:stop"})},events:e.events,use:e.use.bind(e),resetHandlers:e.resetHandlers.bind(e),restoreHandlers:e.restoreHandlers.bind(e),listHandlers:e.listHandlers.bind(e)}}const Sn="Jeff Mercer",Rt={"mana.md":`# Mana — the builder

You are Mana, Jeff's right hand for building and running the cockpit itself.
You can add tools, wire up panels, and orchestrate the other keepers.

## Voice
- Direct and pragmatic. No filler, no hype.
- Explain the *why* behind a non-obvious change so it transfers.
- Flag hack-vs-scalable tradeoffs instead of silently picking one.

## Boundaries
- Confirm before anything destructive or hard to reverse.
- Prefer small, reversible steps over big-bang changes.
`,"goals-advisor.md":`# Goals advisor

You help Jeff set goals that matter and keep his weekly commitments honest.

## How you operate
- Push for a few real commitments each week, not a long wish list.
- When a goal stalls, ask what the smallest next step is.
- Celebrate shipped work briefly, then look ahead.
- Be encouraging but never let drift slide unnamed.
`,"grocery-keeper.md":`# Grocery keeper

You manage the household shopping list and pantry for Jeff.

## How you operate
- Add items fast, guess a sensible category and icon.
- Track what's in the pantry and flag things about to expire.
- Keep quantities loose and human ("a bunch", "2 kg").
`,"office-keeper.md":`# Office keeper

You keep the catalog of Jeff's projects current and tied to his goals.

## How you operate
- One entry per project: what it's for, its stack, its status.
- Link each project to the goal it serves when there is one.
- Nudge gently when an "active" project hasn't moved in a while.
`,"circle-keeper.md":`# Circle keeper

You help Jeff stay close to the people who matter.

## How you operate
- Remember the small facts: how they met, what they're into.
- Surface who he hasn't talked to in a while.
- Keep an eye on open follow-ups so nothing drops.
`,"finance-keeper.md":`# Finance keeper

You help Jeff run a simple zero-based budget and watch his net worth.

## How you operate
- Every dollar of income gets a job: spend, save, or set aside.
- Separate committed (recurring) from actually spent.
- Keep net worth honest with regular balance updates.
- No judgment on spending, just a clear picture.
`},Mt=[{name:"profile.md",relPath:"00_Core/profile.md",group:"Profile",content:`# Jeff — profile

## Who Jeff is
- Works in product operations, building a couple of things on the side.
- Wants to launch his side project and pick up a few freelance clients.
- Trying to rebuild a fitness routine and read more this year.
- Cares about owning his own tools and data, not renting them.

## How to work with him
- Be direct and concrete. He skims, so lead with the point.
- Mornings are his focus block; protect them.
- He likes options with a clear recommendation, not open-ended questions.
- When he spirals on an idea, name it and bring it back to the next step.
`},{name:"observations-2026-05.md",relPath:"10_Now/observations-2026-05.md",group:"Observations",content:`# Observations — May 2026

- Ships faster when the task is broken into one-sitting pieces.
- Prefers short replies; long ones get skimmed.
- Most consistent with habits when they're attached to an existing routine.
- Tends to over-plan new projects before starting; a tiny first step helps.
- Responds well to being shown progress on disk, not just told about it.
`},{name:"decision-log.md",relPath:"30_Decisions/decision-log.md",group:"Decisions",content:`# Decision log

## 2026-05-18 — Demo before landing page
Put a working demo in front of people before polishing a landing page.
Seeing the thing beats reading about it.

## 2026-04-30 — One budget, zero-based
Switched to a zero-based monthly budget so every dollar has a job.
Committed (recurring) tracked separately from what's actually spent.

## 2026-03-12 — Self-host the cockpit
Decided to run everything locally instead of across SaaS tools.
Own the data, no monthly fees, no lock-in.
`},{name:"working-style.md",relPath:"40_Patterns/working-style.md",group:"Patterns",content:`# working-style

Jeff executes best when the environment is set up for him, not when he's
relying on willpower. When something isn't getting done, suspect the setup
first: too big a task, too much friction, wrong time of day.

The fix is usually to shrink the next step until it's obviously doable, then
let momentum carry the rest.
`}],Ln=()=>new Date().toISOString().slice(0,10),Pt=()=>b()-3*86400,En=[{kind:"monday-standup",label:"Monday standup",description:"Start-of-week nudge to set commitments."},{kind:"weekly-review-due",label:"Weekly review",description:"End-of-week reflection reminder."},{kind:"pantry-expiry",label:"Pantry expiry",description:"Heads-up when pantry items are about to expire."},{kind:"circle-followup",label:"Circle follow-ups",description:"Nudges to reconnect with people you haven't talked to."}],_n=[d.get("/api/me",()=>c.json({login:$,displayName:Sn,profilePic:"https://randomuser.me/api/portraits/men/64.jpg",role:"owner"})),d.get("/api/state",()=>c.json({vaultRoot:"/demo",today:Ln()})),d.get("/api/threads",()=>{const t=u.threads.all().sort((e,r)=>r.last_msg_at-e.last_msg_at).slice(0,20);return c.json({threads:t})}),d.post("/api/threads",async({request:t})=>{const e=await t.json().catch(()=>({})),r=b(),s=u.threads.insert({title:null,kind:typeof e.kind=="string"?e.kind:"chat",persona:e.persona||"goals-advisor",focus_goal_id:null,started_at:r,last_msg_at:r,closed_at:null,summary:null,metadata:{claudeSessionId:`demo-${r}`}});return c.json({id:s.id,claudeSessionId:s.metadata.claudeSessionId})}),d.get("/api/threads/:id/messages",({params:t})=>{const e=Number(t.id);return u.threads.get(e)?c.json({messages:u.messages.where(r=>r.thread_id===e)}):c.json({error:"thread not found"},{status:404})}),d.get("/api/settings",()=>c.json(F.all())),d.patch("/api/settings",async({request:t})=>{const e=await t.json().catch(()=>({})),r={};for(const[s,n]of Object.entries(e))r[s]=String(n);return c.json(F.setMany(r))}),d.get("/api/notifications",()=>{const t=u.notifications.where(r=>r.dismissed_at==null),e=t.filter(r=>r.read_at==null).length;return c.json({notifications:t,unread:e})}),d.post("/api/notifications/read-all",()=>{const t=b();return u.notifications.all().forEach(e=>{e.read_at==null&&u.notifications.update(e.id,{read_at:t})}),c.json({ok:!0,count:0})}),d.post("/api/notifications/:id/read",({params:t})=>(u.notifications.update(Number(t.id),{read_at:b()}),c.json({ok:!0}))),d.post("/api/notifications/:id/dismiss",({params:t})=>(u.notifications.update(Number(t.id),{dismissed_at:b()}),c.json({ok:!0}))),d.get("/api/notifications/kinds",()=>{const t=F.all(),e=En.map(r=>({...r,enabled:t[`notif.${r.kind}.enabled`]!=="false"}));return c.json({kinds:e})}),d.post("/api/notifications/mute",async({request:t})=>{const e=await t.json().catch(()=>({})),r=String(e.kind||"").trim();if(!r)return c.json({error:"kind required"},{status:400});const s=!(e.enabled===!1||e.enabled==="false"||e.enabled===0);return F.setMany({[`notif.${r}.enabled`]:s?"true":"false"}),c.json({ok:!0,kind:r,enabled:s})}),d.get("/api/agents",()=>c.json({files:Object.entries(Rt).map(([t,e])=>({name:t,sizeBytes:e.length,modifiedAt:Pt(),resettable:!1}))})),d.get("/api/agents/:name",({params:t})=>{const e=String(t.name),r=Rt[e];return r==null?c.json({error:"unknown agent doc"},{status:404}):c.json({name:e,content:r})}),d.put("/api/agents/:name",()=>c.json({ok:!0,bytes:0,sha:"demo"})),d.get("/api/agents/:name/history",()=>c.json({history:[]})),d.get("/api/memory/status",()=>c.json({enabled:!0,lastRun:String(b()-43200),lastStatus:"ok: merged 4 notes",pending:[]})),d.post("/api/memory/toggle",async({request:t})=>{const e=await t.json().catch(()=>({}));return c.json({ok:!0,enabled:e.enabled!==!1})}),d.post("/api/memory/run-now",()=>c.json({ok:!0,started:!0},{status:202})),d.get("/api/memory/files",()=>c.json({files:Mt.map(t=>({name:t.name,relPath:t.relPath,sizeBytes:t.content.length,modifiedAt:Pt(),group:t.group}))})),d.put("/api/memory/files/:path",()=>c.json({ok:!0,relPath:"",sizeBytes:0})),d.get("/api/memory/files/:path",({params:t})=>{const e=decodeURIComponent(String(t.path)),r=Mt.find(s=>s.relPath===e);return r?c.json({relPath:e,content:r.content}):c.json({error:"not found"},{status:404})}),d.get("/twemoji/:file",({params:t})=>c.redirect(`https://cdn.jsdelivr.net/gh/jdecked/twemoji/assets/svg/${String(t.file).replace(/\.svg$/,"")}.svg`,302))],je={apple:"🍎","green apple":"🍏",banana:"🍌",grape:"🍇",grapes:"🍇",watermelon:"🍉",melon:"🍈",orange:"🍊",tangerine:"🍊",lemon:"🍋",lime:"🍋",mango:"🥭",pineapple:"🍍",strawberry:"🍓",strawberries:"🍓",blueberry:"🫐",blueberries:"🫐",cherry:"🍒",cherries:"🍒",peach:"🍑",pear:"🍐",kiwi:"🥝",coconut:"🥥",avocado:"🥑",tomato:"🍅",potato:"🥔",potatoes:"🥔",carrot:"🥕","bell pepper":"🫑",pepper:"🌶️",chili:"🌶️",cucumber:"🥒",pickle:"🥒",lettuce:"🥬",salad:"🥬",spinach:"🥬",kale:"🥬",broccoli:"🥦",garlic:"🧄",onion:"🧅",scallion:"🧅",mushroom:"🍄",mushrooms:"🍄",eggplant:"🍆",aubergine:"🍆",corn:"🌽","sweet potato":"🍠",ginger:"🫚",peas:"🫛",beans:"🫘","green beans":"🫛",bread:"🍞",loaf:"🍞",baguette:"🥖",croissant:"🥐",bagel:"🥯",pretzel:"🥨",pancake:"🥞",waffle:"🧇",rice:"🍚",pasta:"🍝",spaghetti:"🍝",noodle:"🍜",noodles:"🍜",flour:"🌾",oats:"🌾",oatmeal:"🌾",cereal:"🥣","corn flakes":"🥣",milk:"🥛","almond milk":"🥛","oat milk":"🥛",cheese:"🧀",butter:"🧈",egg:"🥚",eggs:"🥚",yogurt:"🥛",yoghurt:"🥛","ice cream":"🍦",cream:"🥛",chicken:"🍗","chicken breast":"🍗",turkey:"🦃",beef:"🥩","ground beef":"🥩",steak:"🥩",meat:"🥩",pork:"🥓",bacon:"🥓",ham:"🍖",sausage:"🌭","hot dog":"🌭",fish:"🐟",salmon:"🐟",tuna:"🐟",shrimp:"🦐",prawn:"🦐",crab:"🦀",lobster:"🦞",tofu:"🧊",honey:"🍯",jam:"🍓","peanut butter":"🥜",peanut:"🥜",peanuts:"🥜",nuts:"🥜",almond:"🥜",salt:"🧂",sugar:"🍬",oil:"🫒","olive oil":"🫒",olive:"🫒",olives:"🫒",soup:"🥫",canned:"🥫",sauce:"🥫",ketchup:"🍅",honeycomb:"🍯",cookie:"🍪",cookies:"🍪",chocolate:"🍫",candy:"🍬",lollipop:"🍭",cake:"🍰","birthday cake":"🎂",pie:"🥧",donut:"🍩",doughnut:"🍩",popcorn:"🍿",chips:"🍟",fries:"🍟",crisps:"🍟",pizza:"🍕",burger:"🍔",hamburger:"🍔",sandwich:"🥪",taco:"🌮",burrito:"🌯",sushi:"🍣",dumpling:"🥟","french fries":"🍟",water:"💧",coffee:"☕",tea:"🍵",juice:"🧃",soda:"🥤",cola:"🥤",beer:"🍺",wine:"🍷",whiskey:"🥃","soft drink":"🥤",smoothie:"🥤","toilet paper":"🧻","paper towel":"🧻","paper towels":"🧻",tissue:"🧻",tissues:"🧻",napkin:"🧻",soap:"🧼","dish soap":"🧼",detergent:"🧴",shampoo:"🧴",conditioner:"🧴",lotion:"🧴",toothpaste:"🪥",toothbrush:"🪥","trash bag":"🗑️","trash bags":"🗑️","garbage bag":"🗑️",battery:"🔋",batteries:"🔋","light bulb":"💡",candle:"🕯️",matches:"🔥",foil:"🧻",sponge:"🧽",bleach:"🧴",medicine:"💊",pill:"💊",vitamin:"💊",vitamins:"💊",bandage:"🩹",ekmek:"🍞",süt:"🥛",peynir:"🧀",yumurta:"🥚",domates:"🍅",soğan:"🧅",patates:"🥔",elma:"🍎",muz:"🍌",çay:"🍵",kahve:"☕",su:"💧",tavuk:"🍗",balık:"🐟",pirinç:"🍚",zeytin:"🫒",bal:"🍯"},Ot={produce:"🥬",fruit:"🍎",fruits:"🍎",vegetable:"🥦",vegetables:"🥦",veg:"🥦",dairy:"🥛",bakery:"🍞",bread:"🍞",meat:"🥩",seafood:"🐟",fish:"🐟",protein:"🥩",pantry:"🥫",canned:"🥫",snacks:"🍪",snack:"🍪",sweets:"🍬",candy:"🍬",drinks:"🥤",beverages:"🥤",beverage:"🥤",frozen:"🧊",spices:"🧂",spice:"🧂",household:"🧻",cleaning:"🧼","personal care":"🧴",toiletries:"🧴",health:"💊",baby:"🍼",pet:"🐾"},qn=Object.keys(je).sort((t,e)=>e.length-t.length);function Tt(t){return t.toLowerCase().replace(/[^\p{L}\s]/gu," ").replace(/\s+/g," ").trim()}function Cn(t,e){const r=Tt(t);if(r){if(je[r])return je[r];for(const s of qn)if(new RegExp(`(^|\\s)${s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(\\s|$)`).test(r))return je[s]}if(e){const s=Tt(e);if(Ot[s])return Ot[s]}return null}const Ze=()=>c.json({ok:!0}),jn=[d.get("/api/grocery",({request:t})=>{const e=new URL(t.url),r=e.searchParams.get("status"),s=r==="shopping"||r==="pantry"||r==="used",n=e.searchParams.get("list")==="buy"?"buy":"grocery";let o=u.grocery.all().filter(i=>(i.list??"grocery")===n);return s&&(o=o.filter(i=>i.status===r)),o=o.sort((i,a)=>i.sort_order-a.sort_order),c.json({items:o})}),d.post("/api/grocery",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim();if(!r)return c.json({error:"name is required"},{status:400});const s=e.category!=null&&String(e.category).trim()||null,n=e.list==="buy"?"buy":"grocery",o=u.grocery.all().reduce((a,h)=>Math.max(a,h.sort_order),-1),i=u.grocery.insert({name:r,status:"shopping",quantity:e.quantity!=null&&String(e.quantity).trim()||null,category:s,notes:e.notes!=null&&String(e.notes).trim()||null,added_by:$,added_at:b(),bought_at:null,used_at:null,shelf_life_days:null,emoji:Cn(r,s),sort_order:o+1,list:n});return c.json({id:i.id})}),d.patch("/api/grocery/:id",async({params:t,request:e})=>{const r=Number(t.id),s=await e.json(),n={};return typeof s.status=="string"&&["shopping","pantry","used"].includes(s.status)&&(n.status=s.status,s.status==="pantry"&&(n.bought_at=b()),s.status==="used"&&(n.used_at=b())),typeof s.name=="string"&&(n.name=s.name),"quantity"in s&&(n.quantity=s.quantity==null?null:String(s.quantity)),"category"in s&&(n.category=s.category==null?null:String(s.category)),"notes"in s&&(n.notes=s.notes==null?null:String(s.notes)),"shelf_life_days"in s&&(n.shelf_life_days=s.shelf_life_days==null?null:Number(s.shelf_life_days)),"emoji"in s&&(n.emoji=s.emoji==null?null:String(s.emoji)),u.grocery.update(r,n),Ze()}),d.delete("/api/grocery/:id",({params:t})=>(u.grocery.remove(Number(t.id)),Ze())),d.post("/api/grocery/:id/reorder",async({params:t,request:e})=>{const r=await e.json(),s=Number(r.targetIndex);if(!Number.isFinite(s))return c.json({error:"targetIndex required"},{status:400});const n=u.grocery.get(Number(t.id));return n&&u.grocery.reorder(n.id,s,"sort_order",o=>o.status===n.status&&(o.list??"grocery")===(n.list??"grocery")),Ze()})],It=()=>c.json({ok:!0}),Rn=["active","paused","idea","shipped","archived"],Ye=t=>typeof t=="string"&&Rn.includes(t),Y=t=>t!=null&&String(t).trim()?String(t).trim():null,Mn=[d.get("/api/office",({request:t})=>{const e=new URL(t.url).searchParams.get("status");let r=u.office.all();return Ye(e)&&(r=r.filter(s=>s.status===e)),r=r.sort((s,n)=>n.updated_at-s.updated_at),c.json({apps:r})}),d.post("/api/office",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim();if(!r)return c.json({error:"name is required"},{status:400});const s=b(),n=u.office.insert({user_login:$,name:r,path:Y(e.path),purpose:Y(e.purpose),goal:Y(e.goal),stack:Y(e.stack),repo:Y(e.repo),icon:Y(e.icon),status:Ye(e.status)?e.status:"active",created_at:s,updated_at:s});return c.json({id:n.id})}),d.patch("/api/office/:id",async({params:t,request:e})=>{const r=await e.json(),s={updated_at:b()};for(const n of["name","path","purpose","goal","stack","repo","icon"])n in r&&(s[n]=r[n]==null?null:String(r[n]));if("status"in r){if(!Ye(r.status))return c.json({error:"invalid status"},{status:400});s.status=r.status}return u.office.update(Number(t.id),s),It()}),d.delete("/api/office/:id",({params:t})=>(u.office.remove(Number(t.id)),It()))],Pn=[d.get("/api/inbox",({request:t})=>{const e=new URL(t.url),r=e.searchParams.get("to")||void 0,s=e.searchParams.get("from")||void 0,n=e.searchParams.get("agent")||void 0,o=e.searchParams.get("unread")==="1";let i=u.inbox.all();return r&&(i=i.filter(a=>a.to_agent===r)),s&&(i=i.filter(a=>a.from_agent===s)),n&&(i=i.filter(a=>a.from_agent===n||a.to_agent===n)),o&&(i=i.filter(a=>a.read_at==null)),i=i.sort((a,h)=>h.created_at-a.created_at),c.json({messages:i})}),d.post("/api/inbox/:id/read",({params:t})=>(u.inbox.update(Number(t.id),{read_at:b()}),c.json({ok:!0})))],Nt="/assets/mosque-bg-img-CHYGdzKg.webp",On=`<div class="space-y-3">
  <h2 class="text-lg font-semibold text-ink">castle peak</h2>
  <div class="rounded-lg overflow-hidden border border-line">
    <svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;">
      <defs>
        <!-- dusk sky -->
        <linearGradient id="cp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#13183a"></stop>
          <stop offset="38%" stop-color="#3a356e"></stop>
          <stop offset="64%" stop-color="#8a5685"></stop>
          <stop offset="83%" stop-color="#e08a5e"></stop>
          <stop offset="100%" stop-color="#f7c98a"></stop>
        </linearGradient>
        <radialGradient id="cp-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff3d2"></stop>
          <stop offset="35%" stop-color="#ffd58a" stop-opacity="0.95"></stop>
          <stop offset="100%" stop-color="#ffd58a" stop-opacity="0"></stop>
        </radialGradient>
        <linearGradient id="cp-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6f6597"></stop>
          <stop offset="100%" stop-color="#9a7a93"></stop>
        </linearGradient>
        <linearGradient id="cp-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4c4570"></stop>
          <stop offset="100%" stop-color="#6a5570"></stop>
        </linearGradient>
        <linearGradient id="cp-mount" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#46405c"></stop>
          <stop offset="55%" stop-color="#322c46"></stop>
          <stop offset="100%" stop-color="#211c33"></stop>
        </linearGradient>
        <linearGradient id="cp-mount-lit" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#7a5f6e"></stop>
          <stop offset="100%" stop-color="#46405c" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient id="cp-snow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fbf7ff"></stop>
          <stop offset="100%" stop-color="#cdbfe0"></stop>
        </linearGradient>
        <linearGradient id="cp-stone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e7dff0"></stop>
          <stop offset="55%" stop-color="#bcb0d0"></stop>
          <stop offset="100%" stop-color="#8a7ea4"></stop>
        </linearGradient>
        <linearGradient id="cp-stone-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a99cc2"></stop>
          <stop offset="100%" stop-color="#6f6390"></stop>
        </linearGradient>
        <linearGradient id="cp-roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3f86a0"></stop>
          <stop offset="100%" stop-color="#1d4a5c"></stop>
        </linearGradient>
        <linearGradient id="cp-grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3f6b3a"></stop>
          <stop offset="100%" stop-color="#1c3417"></stop>
        </linearGradient>
        <linearGradient id="cp-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eaf6ff"></stop>
          <stop offset="100%" stop-color="#bcd9ee"></stop>
        </linearGradient>
        <radialGradient id="cp-win" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#fff0c0"></stop>
          <stop offset="100%" stop-color="#f2a93e"></stop>
        </radialGradient>
      </defs>

      <!-- Each top-level <g data-obj="…"> is ONE object in Edit mode: click to
           select, drag to move, corners resize, double-click to drill in. Keep
           new objects as a single such group. -->

      <!-- sky -->
      <g data-obj="sky" transform="translate(-30.5,-17.011) scale(1.061)">
        <rect x="0" y="0" width="1000" height="560" fill="url(#cp-sky)"></rect>
      </g>

      <!-- stars -->
      <g data-obj="stars" fill="#fef7e6">
        <circle cx="90" cy="60" r="1.3" opacity="0.9"></circle>
        <circle cx="170" cy="120" r="0.9" opacity="0.7"></circle>
        <circle cx="250" cy="48" r="1.1" opacity="0.8"></circle>
        <circle cx="360" cy="95" r="0.8" opacity="0.6"></circle>
        <circle cx="120" cy="180" r="0.9" opacity="0.6"></circle>
        <circle cx="430" cy="55" r="1.2" opacity="0.85"></circle>
        <circle cx="560" cy="80" r="0.8" opacity="0.5"></circle>
        <circle cx="640" cy="40" r="1.0" opacity="0.7"></circle>
        <circle cx="820" cy="70" r="0.9" opacity="0.6"></circle>
        <circle cx="910" cy="120" r="1.1" opacity="0.8"></circle>
        <circle cx="300" cy="150" r="0.7" opacity="0.5"></circle>
      </g>

      <!-- setting sun -->
      <g data-obj="sun" transform="matrix(0.591,0,0,0.591,328.529,188.205)">
        <circle cx="730" cy="395" r="150" fill="url(#cp-sun)"></circle>
        <circle cx="730" cy="395" r="46" fill="#fff1cf"></circle>
      </g>

      <!-- sunset clouds -->
      <g data-obj="clouds" transform="matrix(1,0,0,1,12.7,-36.64)">
        <g fill="#f4b481" opacity="0.34" transform="matrix(1,0,0,1,24.3,0)">
          <ellipse cx="772" cy="298" rx="128" ry="15"></ellipse>
          <ellipse cx="700" cy="322" rx="92" ry="11"></ellipse>
          <ellipse cx="852" cy="284" rx="74" ry="10"></ellipse>
        </g>
        <g fill="#d7a6c6" opacity="0.26">
          <ellipse cx="225" cy="250" rx="116" ry="13"></ellipse>
          <ellipse cx="150" cy="272" rx="74" ry="9"></ellipse>
        </g>
        <g fill="#f7cda0" opacity="0.3" transform="matrix(1,0,0,1,158.839,-19.86)">
          <ellipse cx="470" cy="210" rx="80" ry="8"></ellipse>
        </g>
      </g>

      <!-- birds -->
      <g data-obj="birds" fill="none" stroke="#2a2238" stroke-width="2.2" stroke-linecap="round">
        <path d="M150 150 q12 -9 24 0 q12 -9 24 0"></path>
        <path d="M210 175 q9 -7 18 0 q9 -7 18 0"></path>
        <path d="M820 200 q10 -8 20 0 q10 -8 20 0"></path>
      </g>

      <!-- far mountains -->
      <g data-obj="far-mountains" opacity="0.55" transform="translate(-5.035,-20.481) scale(1.04)">
        <path d="M0 470 L120 360 L230 440 L350 330 L470 450 L600 350 L740 460 L860 360 L1000 450 L1000 560 L0 560 Z" fill="url(#cp-far)"></path>
      </g>

      <!-- mid mountains -->
      <g data-obj="mid-mountains" opacity="0.8" transform="translate(-13.001,9.831) scale(1.015)">
        <path d="M0 520 L90 430 L210 500 L320 410 L430 500 L560 420 L700 510 L840 430 L1000 500 L1000 560 L0 560 Z" fill="url(#cp-mid)"></path>
      </g>

      <!-- haze band -->
      

      <!-- the castle mountain -->
      <g data-obj="castle-mount" transform="matrix(1,0,0,1,-31.391,-27.645)">
        <path d="M150 700 L360 360 L455 250 L520 300 L600 240 L690 380 L880 700 Z" fill="url(#cp-mount)"></path>
        <!-- lit ridge facing the sun -->
        <path d="M520 300 L600 240 L690 380 L640 700 L560 700 Z" fill="url(#cp-mount-lit)" opacity="0.6"></path>
        <!-- crags -->
        <path d="M360 360 L420 430 L470 380 L455 250 Z" fill="#1b1730" opacity="0.5"></path>
        <path d="M690 380 L740 470 L660 430 Z" fill="#15111f" opacity="0.55"></path>
        <!-- snow cap -->
        <path d="M455 250 L520 300 L600 240 L568 270 L520 252 L486 286 Z" fill="url(#cp-snow)" opacity="0.9"></path>
        <!-- winding path up -->
        <path d="M470 690 Q520 600 480 540 Q440 480 500 430 Q540 400 510 360" fill="none" stroke="#5a4f63" stroke-width="6" opacity="0.5" stroke-linecap="round"></path>
      </g>

      <!-- waterfall -->
      <g data-obj="waterfall" transform="matrix(1,0,0,1,-22.673,-30.606)">
        <path d="M404 430 Q400 520 408 600 L420 600 Q414 520 418 430 Z" fill="url(#cp-water)" opacity="0.85"></path>
        <ellipse cx="412" cy="612" rx="26" ry="8" fill="#eaf6ff" opacity="0.5"></ellipse>
        <ellipse cx="412" cy="612" rx="14" ry="4" fill="#fff"></ellipse>
      </g>

      <!-- castle -->
      

      <!-- foreground ridge -->
      <g data-obj="foreground" transform="matrix(1.071,0,0,1.071,-40.959,-69.468)">
        <path d="M0 700 L0 560 Q160 600 340 596 Q520 590 700 600 Q860 610 1000 566 L1000 700 Z" fill="url(#cp-grass)"></path>
        <path d="M0 700 L0 632 Q220 672 460 660 Q700 648 1000 668 L1000 700 Z" fill="#16280f"></path>
      </g>

      <!-- pines -->
      <g data-obj="pines" fill="#16301d">
        <g transform="translate(90,640)"><rect x="-4" y="-6" width="8" height="22" fill="#22160e"></rect><path d="M0 -86 L26 -34 L13 -34 L34 6 L-34 6 L-13 -34 L-26 -34 Z"></path></g>
        <g transform="translate(165,660)"><rect x="-3" y="-5" width="6" height="18" fill="#22160e"></rect><path d="M0 -64 L19 -24 L9 -24 L25 6 L-25 6 L-9 -24 L-19 -24 Z"></path></g>
        <g transform="translate(880,648)"><rect x="-4" y="-6" width="8" height="20" fill="#22160e"></rect><path d="M0 -78 L24 -30 L12 -30 L31 6 L-31 6 L-12 -30 L-24 -30 Z"></path></g>
        <g transform="translate(940,664)"><rect x="-3" y="-5" width="6" height="16" fill="#22160e"></rect><path d="M0 -58 L17 -22 L8 -22 L23 6 L-23 6 L-8 -22 L-17 -22 Z"></path></g>
      </g>
    <g data-obj="castle" transform="translate(287.48,359.514) scale(0.632)">
        <!-- rocky footing -->
        <path d="M360 392 L430 360 L600 360 L660 396 Z" fill="url(#cp-stone-shade)" opacity="0.7"></path>

        <!-- left tower -->
        <rect x="372" y="250" width="56" height="135" fill="url(#cp-stone)" stroke="#6f6390" stroke-width="1.5"></rect>
        <rect x="368" y="244" width="64" height="12" fill="url(#cp-stone-shade)"></rect>
        <g fill="url(#cp-stone-shade)"><rect x="368" y="232" width="11" height="14"></rect><rect x="389" y="232" width="11" height="14"></rect><rect x="410" y="232" width="11" height="14"></rect></g>
        <path d="M362 232 L400 178 L438 232 Z" fill="url(#cp-roof)" stroke="#163a48" stroke-width="1.5"></path>
        <line x1="400" y1="178" x2="400" y2="150" stroke="#c9bfe0" stroke-width="2.5"></line>
        <path d="M400 150 L426 158 L400 168 Z" fill="#c0392b"></path>
        <ellipse cx="400" cy="300" rx="9" ry="14" fill="url(#cp-win)"></ellipse>
        <rect x="392" y="338" width="16" height="24" rx="7" fill="url(#cp-win)"></rect>

        <!-- right tower -->
        <rect x="572" y="250" width="56" height="135" fill="url(#cp-stone)" stroke="#6f6390" stroke-width="1.5"></rect>
        <rect x="568" y="244" width="64" height="12" fill="url(#cp-stone-shade)"></rect>
        <g fill="url(#cp-stone-shade)"><rect x="568" y="232" width="11" height="14"></rect><rect x="589" y="232" width="11" height="14"></rect><rect x="610" y="232" width="11" height="14"></rect></g>
        <path d="M562 232 L600 178 L638 232 Z" fill="url(#cp-roof)" stroke="#163a48" stroke-width="1.5"></path>
        <line x1="600" y1="178" x2="600" y2="150" stroke="#c9bfe0" stroke-width="2.5"></line>
        <path d="M600 150 L626 158 L600 168 Z" fill="#c0392b"></path>
        <ellipse cx="600" cy="300" rx="9" ry="14" fill="url(#cp-win)"></ellipse>
        <rect x="592" y="338" width="16" height="24" rx="7" fill="url(#cp-win)"></rect>

        <!-- curtain wall -->
        <rect x="424" y="300" width="152" height="85" fill="url(#cp-stone)" stroke="#6f6390" stroke-width="1.5"></rect>
        <rect x="424" y="300" width="152" height="6" fill="url(#cp-stone-shade)"></rect>
        <g fill="url(#cp-stone-shade)"><rect x="424" y="288" width="13" height="14"></rect><rect x="448" y="288" width="13" height="14"></rect><rect x="472" y="288" width="13" height="14"></rect><rect x="515" y="288" width="13" height="14"></rect><rect x="539" y="288" width="13" height="14"></rect><rect x="563" y="288" width="13" height="14"></rect></g>

        <!-- central keep -->
        <rect x="462" y="226" width="76" height="159" fill="url(#cp-stone)" stroke="#6f6390" stroke-width="1.5"></rect>
        <rect x="458" y="220" width="84" height="12" fill="url(#cp-stone-shade)"></rect>
        <g fill="url(#cp-stone-shade)"><rect x="458" y="206" width="13" height="16"></rect><rect x="481" y="206" width="13" height="16"></rect><rect x="506" y="206" width="13" height="16"></rect><rect x="529" y="206" width="13" height="16"></rect></g>
        <path d="M452 206 L500 138 L548 206 Z" fill="url(#cp-roof)" stroke="#163a48" stroke-width="1.5"></path>
        <line x1="500" y1="138" x2="500" y2="104" stroke="#c9bfe0" stroke-width="3"></line>
        <path d="M500 104 Q528 110 532 118 Q528 126 500 122 Z" fill="#c0392b"></path>
        <!-- keep windows -->
        <ellipse cx="500" cy="258" rx="10" ry="16" fill="url(#cp-win)"></ellipse>
        <ellipse cx="480" cy="300" rx="7" ry="12" fill="url(#cp-win)"></ellipse>
        <ellipse cx="520" cy="300" rx="7" ry="12" fill="url(#cp-win)"></ellipse>

        <!-- gate -->
        <path d="M476 385 L476 340 Q476 320 500 320 Q524 320 524 340 L524 385 Z" fill="#1a1428" stroke="#6f6390" stroke-width="2"></path>
        <path d="M483 383 L483 340 Q483 327 500 327 Q517 327 517 340 L517 383" fill="none" stroke="#caa84a" stroke-width="1.4" opacity="0.7"></path>
        <g stroke="#3a2f49" stroke-width="1" opacity="0.8"><line x1="490" y1="330" x2="490" y2="385"></line><line x1="500" y1="324" x2="500" y2="385"></line><line x1="510" y1="330" x2="510" y2="385"></line><line x1="478" y1="350" x2="522" y2="350"></line><line x1="478" y1="368" x2="522" y2="368"></line></g>

        <!-- brick hint lines -->
        <g stroke="#6f6390" stroke-width="0.6" opacity="0.4">
          <line x1="424" y1="328" x2="576" y2="328"></line><line x1="424" y1="356" x2="576" y2="356"></line>
          <line x1="372" y1="290" x2="428" y2="290"></line><line x1="572" y1="290" x2="628" y2="290"></line>
          <line x1="462" y1="270" x2="538" y2="270"></line><line x1="462" y1="330" x2="538" y2="330"></line>
        </g>
      </g></svg>
  </div>
  <p class="text-xs text-muted">Dusk over the keep. Hit Edit to move a tower, drag the sun, or repaint the roofs — every piece is its own object.</p>
</div>
`,Tn=`<div class="space-y-3">
  <h2 class="text-lg font-semibold text-ink">mosque</h2>
  <div class="rounded-lg overflow-hidden border border-line">
    <svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0b1d3a"></stop>
          <stop offset="55%" stop-color="#2a3a72"></stop>
          <stop offset="85%" stop-color="#e89a5a"></stop>
          <stop offset="100%" stop-color="#f6c089"></stop>
        </linearGradient>
        <linearGradient id="dome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8d27a"></stop>
          <stop offset="55%" stop-color="#caa84a"></stop>
          <stop offset="100%" stop-color="#8d7126"></stop>
        </linearGradient>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff4dc"></stop>
          <stop offset="100%" stop-color="#e9d2a1"></stop>
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3a2a1c"></stop>
          <stop offset="100%" stop-color="#1c140b"></stop>
        </linearGradient>
        <mask id="crescent-moon">
          <circle r="38" fill="white"></circle>
          <circle cx="14" r="34" fill="black"></circle>
        </mask>
        <mask id="crescent-lg">
          <circle r="13" fill="white"></circle>
          <circle cx="5" r="10.5" fill="black"></circle>
        </mask>
        <mask id="crescent-md">
          <circle r="9" fill="white"></circle>
          <circle cx="3.5" r="7.5" fill="black"></circle>
        </mask>
        <mask id="crescent-sm">
          <circle r="6" fill="white"></circle>
          <circle cx="2.5" r="5" fill="black"></circle>
        </mask>
      </defs>

      <!-- Each top-level <g data-obj="…"> is ONE selectable object in the
           canvas Edit mode: click to select, drag to move, corner handles to
           resize, Delete to remove. Keep new objects as a single such group. -->

      <!-- sky -->
      <g data-obj="sky" transform="translate(3.494,1.359)">
        <rect x="0" y="0" width="800" height="460" fill="url(#sky)" transform="matrix(1.004,0,0,1.004,-5.12,-1.635)"></rect>
      </g>

      <!-- stars -->
      <g data-obj="stars" fill="#fff" opacity="0.85">
        <circle cx="80" cy="50" r="1.2"></circle>
        <circle cx="150" cy="90" r="0.9"></circle>
        <circle cx="220" cy="40" r="1.4"></circle>
        <circle cx="310" cy="70" r="1"></circle>
        <circle cx="370" cy="30" r="0.8"></circle>
        <circle cx="500" cy="55" r="1.1"></circle>
        <circle cx="560" cy="100" r="0.9"></circle>
        <circle cx="620" cy="40" r="1.3"></circle>
        <circle cx="700" cy="80" r="1"></circle>
        <circle cx="750" cy="30" r="0.8"></circle>
      </g>

      <!-- crescent moon -->
      <g data-obj="moon" transform="translate(590,80)">
        <circle r="38" fill="#fdf3c5" mask="url(#crescent-moon)"></circle>
      </g>

      <!-- ground -->
      <g data-obj="ground" transform="translate(-5.14,-9.006) scale(1.018)">
        <rect x="0" y="460" width="800" height="60" fill="url(#ground)"></rect>
        <line x1="0" y1="460" x2="800" y2="460" stroke="#caa84a" stroke-width="1.5" opacity="0.6"></line>
      </g>

      <!-- reflection in water -->
      <g data-obj="water" opacity="0.18">
        <rect x="200" y="460" width="400" height="50" fill="#fff4dc" transform="matrix(1.019,0,0,1.019,-8.462,-8.212)"></rect>
      </g>

      <!-- left minaret -->
      <g data-obj="left-minaret">
        <line x1="131" y1="153" x2="131" y2="113" stroke="#caa84a" stroke-width="2.5" transform="matrix(1,0,0,1,0.538,7.593)"></line><rect x="120" y="170" width="22" height="290" fill="url(#wall)" stroke="#8d7126" stroke-width="1.5"></rect>
        <rect x="115" y="265" width="32" height="8" fill="#caa84a"></rect>
        <rect x="115" y="345" width="32" height="8" fill="#caa84a"></rect>
        <!-- balcony -->
        <rect x="110" y="200" width="42" height="14" fill="#caa84a" stroke="#8d7126" stroke-width="1"></rect>
        <rect x="116" y="175" width="30" height="28" fill="url(#wall)" stroke="#8d7126" stroke-width="1" transform="matrix(0.788,0,0,0.788,27.759,40.049)"></rect>
        <!-- dome cap -->
        <path d="M 116 175 Q 131 130 146 175 Z" fill="url(#dome)" stroke="#8d7126" stroke-width="1.5" transform="matrix(0.784,0,0,0.784,28.234,35.292)"></path>
        <!-- spire + crescent -->
        
        <g transform="translate(134.447,110.862)">
          <circle r="9" fill="#caa84a" mask="url(#crescent-md)"></circle>
        </g>
      </g>

      <!-- right minaret -->
      <g data-obj="right-minaret" transform="matrix(1,0,0,1,-0.271,0)">
        <line x1="669" y1="153" x2="669" y2="113" stroke="#caa84a" stroke-width="2.5" transform="matrix(1,0,0,1,0.793,11.381)"></line><rect x="658" y="170" width="22" height="290" fill="url(#wall)" stroke="#8d7126" stroke-width="1.5"></rect>
        <rect x="653" y="265" width="32" height="8" fill="#caa84a"></rect>
        <rect x="653" y="345" width="32" height="8" fill="#caa84a"></rect>
        <rect x="648" y="200" width="42" height="14" fill="#caa84a" stroke="#8d7126" stroke-width="1"></rect>
        <rect x="654" y="175" width="30" height="28" fill="url(#wall)" stroke="#8d7126" stroke-width="1" transform="matrix(0.772,0,0,0.772,152.677,43.133)"></rect>
        <path d="M 654 175 Q 669 130 684 175 Z" fill="url(#dome)" stroke="#8d7126" stroke-width="1.5" transform="matrix(0.816,0,0,0.816,122.974,30.1)"></path>
        
        <g transform="translate(671.414,114.909)">
          <circle r="9" fill="#caa84a" mask="url(#crescent-md)"></circle>
        </g>
      </g>

      <!-- main building -->
      <g data-obj="main-building">
        <rect x="180" y="290" width="440" height="170" fill="url(#wall)" stroke="#8d7126" stroke-width="2"></rect>
        <!-- band trim -->
        <rect x="180" y="395" width="440" height="6" fill="#caa84a" opacity="0.7"></rect>
        <rect x="180" y="310" width="440" height="4" fill="#caa84a" opacity="0.5"></rect>
      </g>

      <!-- left side small dome -->
      <g data-obj="left-side-dome">
        <rect x="210" y="260" width="70" height="30" fill="url(#wall)" stroke="#8d7126" stroke-width="1.5"></rect>
        <path d="M 210 260 Q 245 200 280 260 Z" fill="url(#dome)" stroke="#8d7126" stroke-width="1.5"></path>
        <line x1="245" y1="230" x2="245" y2="205" stroke="#caa84a" stroke-width="2"></line>
        <g transform="translate(245,197)">
          <circle r="6" fill="#caa84a" mask="url(#crescent-sm)"></circle>
        </g>
      </g>
      <!-- right side small dome -->
      <g data-obj="right-side-dome">
        <rect x="520" y="260" width="70" height="30" fill="url(#wall)" stroke="#8d7126" stroke-width="1.5"></rect>
        <path d="M 520 260 Q 555 200 590 260 Z" fill="url(#dome)" stroke="#8d7126" stroke-width="1.5"></path>
        <line x1="555" y1="230" x2="555" y2="205" stroke="#caa84a" stroke-width="2"></line>
        <g transform="translate(555,197)">
          <circle r="6" fill="#caa84a" mask="url(#crescent-sm)"></circle>
        </g>
      </g>

      <!-- central dome -->
      <g data-obj="central-dome" transform="translate(0.505,-0.228)">
        <!-- drum -->
        <rect x="330" y="260" width="140" height="30" fill="url(#wall)" stroke="#8d7126" stroke-width="1.5"></rect>
        <rect x="330" y="282" width="140" height="6" fill="#caa84a" opacity="0.7"></rect>
        <!-- dome -->
        <path d="M 330 265 Q 400 110 470 265 Z" fill="url(#dome)" stroke="#8d7126" stroke-width="2"></path>
        <!-- dome highlight -->
        <path d="M 360 245 Q 380 160 400 140" fill="none" stroke="#fff5c5" stroke-width="3" opacity="0.45" transform="translate(135.526,103.604) scale(0.639)"></path>
        <!-- spire + crescent on main dome -->
        <line x1="400" y1="188" x2="400" y2="133" stroke="#caa84a" stroke-width="3"></line>
        <g transform="translate(402.15,121.528)">
          <circle r="13" fill="#caa84a" mask="url(#crescent-lg)"></circle>
        </g>
      </g>

      <!-- main central arch (entrance) -->
      <g data-obj="entrance">
        <path d="M 360 460 L 360 380 Q 360 340 400 340 Q 440 340 440 380 L 440 460 Z" fill="#1a1a2e" stroke="#8d7126" stroke-width="2"></path>
        <path d="M 368 455 L 368 380 Q 368 348 400 348 Q 432 348 432 380 L 432 455" fill="none" stroke="#caa84a" stroke-width="1.5" opacity="0.8"></path>
        <!-- door divider -->
        <line x1="400" y1="348" x2="400" y2="460" stroke="#caa84a" stroke-width="1" opacity="0.6"></line>
      </g>

      <!-- arched windows row -->
      <g data-obj="windows">
        <!-- left side windows -->
        <path d="M 210 395 L 210 350 Q 210 325 230 325 Q 250 325 250 350 L 250 395 Z" fill="#3d6db8" stroke="#8d7126" stroke-width="1.5"></path>
        <path d="M 215 392 L 215 350 Q 215 330 230 330 Q 245 330 245 350 L 245 392" fill="none" stroke="#fff5c5" stroke-width="1" opacity="0.5"></path>
        <path d="M 275 395 L 275 350 Q 275 325 295 325 Q 315 325 315 350 L 315 395 Z" fill="#3d6db8" stroke="#8d7126" stroke-width="1.5"></path>
        <path d="M 280 392 L 280 350 Q 280 330 295 330 Q 310 330 310 350 L 310 392" fill="none" stroke="#fff5c5" stroke-width="1" opacity="0.5"></path>

        <!-- right side windows -->
        <path d="M 485 395 L 485 350 Q 485 325 505 325 Q 525 325 525 350 L 525 395 Z" fill="#3d6db8" stroke="#8d7126" stroke-width="1.5"></path>
        <path d="M 490 392 L 490 350 Q 490 330 505 330 Q 520 330 520 350 L 520 392" fill="none" stroke="#fff5c5" stroke-width="1" opacity="0.5"></path>
        <path d="M 550 395 L 550 350 Q 550 325 570 325 Q 590 325 590 350 L 590 395 Z" fill="#3d6db8" stroke="#8d7126" stroke-width="1.5"></path>
        <path d="M 555 392 L 555 350 Q 555 330 570 330 Q 585 330 585 350 L 585 392" fill="none" stroke="#fff5c5" stroke-width="1" opacity="0.5"></path>
      </g>

      <!-- small round windows on drum -->
      <g data-obj="drum-windows">
        <circle cx="365" cy="275" r="5" fill="#3d6db8" stroke="#8d7126" stroke-width="1"></circle>
        <circle cx="400" cy="275" r="5" fill="#3d6db8" stroke="#8d7126" stroke-width="1"></circle>
        <circle cx="435" cy="275" r="5" fill="#3d6db8" stroke="#8d7126" stroke-width="1"></circle>
      </g>

      <!-- lanterns -->
      <g data-obj="lanterns">
        <line x1="270" y1="420" x2="270" y2="430" stroke="#caa84a" stroke-width="1"></line>
        <circle cx="270" cy="435" r="4" fill="#ffd166" opacity="0.95"></circle>
        <line x1="530" y1="420" x2="530" y2="430" stroke="#caa84a" stroke-width="1"></line>
        <circle cx="530" cy="435" r="4" fill="#ffd166" opacity="0.95"></circle>
      </g>

      <!-- silhouette palm on right -->
      <g data-obj="palm" transform="translate(740,459.731)" fill="#0f0a05">
        <rect x="-3" y="-60" width="6" height="60"></rect>
        <path d="M 0 -60 q -25 -10 -35 -28 q 18 5 35 20 z"></path>
        <path d="M 0 -60 q 25 -10 35 -28 q -18 5 -35 20 z"></path>
        <path d="M 0 -62 q -30 -2 -45 12 q 22 -2 45 -6 z"></path>
        <path d="M 0 -62 q 30 -2 45 12 q -22 -2 -45 -6 z"></path>
      </g>
    </svg>
  </div>
  <p class="text-xs text-muted">Twilight mosque. Each object is a labeled group — hit Edit to rearrange objects or retype text.</p>
</div>
`,In=`<div>
  <div class="rounded-lg overflow-hidden border border-line">
    <svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;">
      <defs>
        <linearGradient id="bg-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0b1d3a"></stop>
          <stop offset="55%" stop-color="#2a3a72"></stop>
          <stop offset="85%" stop-color="#e89a5a"></stop>
          <stop offset="100%" stop-color="#f6c089"></stop>
        </linearGradient>
        <linearGradient id="bg-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3a2a1c"></stop>
          <stop offset="100%" stop-color="#1c140b"></stop>
        </linearGradient>
        <mask id="bg-crescent-moon">
          <circle r="38" fill="white"></circle>
          <circle cx="14" r="34" fill="black"></circle>
        </mask>
      </defs>

      <!-- sky -->
      <rect x="0" y="0" width="800" height="460" fill="url(#bg-sky)"></rect>

      <!-- stars -->
      <g fill="#fff" opacity="0.85">
        <circle cx="80" cy="50" r="1.2"></circle>
        <circle cx="150" cy="90" r="0.9"></circle>
        <circle cx="220" cy="40" r="1.4"></circle>
        <circle cx="310" cy="70" r="1"></circle>
        <circle cx="370" cy="30" r="0.8"></circle>
        <circle cx="500" cy="55" r="1.1"></circle>
        <circle cx="560" cy="100" r="0.9"></circle>
        <circle cx="620" cy="40" r="1.3"></circle>
        <circle cx="700" cy="80" r="1"></circle>
        <circle cx="750" cy="30" r="0.8"></circle>
      </g>

      <!-- crescent moon -->
      <g transform="translate(590,80)">
        <circle r="38" fill="#fdf3c5" mask="url(#bg-crescent-moon)"></circle>
      </g>

      <!-- ground -->
      <rect x="0" y="460" width="800" height="60" fill="url(#bg-ground)"></rect>
      <line x1="0" y1="460" x2="800" y2="460" stroke="#caa84a" stroke-width="1.5" opacity="0.6"></line>

      <!-- reflection -->
      <g opacity="0.18" transform="matrix(1.528,0,0,1.528,-231.524,-241.4)">
        <rect x="200" y="460" width="400" height="50" fill="#fff4dc"></rect>
      </g>

      <!-- palm silhouette -->
      <g transform="translate(740,460)" fill="#0f0a05">
        <rect x="-3" y="-60" width="6" height="60"></rect>
        <path d="M 0 -60 q -25 -10 -35 -28 q 18 5 35 20 z"></path>
        <path d="M 0 -60 q 25 -10 35 -28 q -18 5 -35 20 z"></path>
        <path d="M 0 -62 q -30 -2 -45 12 q 22 -2 45 -6 z"></path>
        <path d="M 0 -62 q 30 -2 45 12 q -22 -2 -45 -6 z"></path>
      </g>
    <g data-obj="image-1" transform="matrix(2.45,0,0,2.45,-584.256,-340.232)"><image href="${Nt}" xlink:href="${Nt}" x="270" y="188.41" width="260" height="143.19" preserveAspectRatio="xMidYMid meet"></image></g></svg>
  </div>
</div>
`,Je="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2036%2036'%3e%3cpath%20fill='%23C1694F'%20d='M31.595%2015.007c-1.75-3.623-5.934-9.053-9.531-9.053-4.071%200-8.228%207.259-10.071%2010.378-.176.299-.321.578-.464.857-3.371-1.182-.536-6.631-.536-10.463%200-.957-.138-1.637-.44-2.119.489-.606.586-1.347.192-1.699-.413-.367-1.195-.163-1.745.456-.08.089-.129.186-.189.28-.424-.067-.903-.102-1.472-.102-.565%200-2.916.266-4.229.791C-.007%205.582.993%209%201.993%209h4c1%200%20.756%202.31%200%204.726-.83%202.654-1.439%205.145-1%206.606.808%202.687%203.712%203.589%206.164%203.86%201.059%202.659%201.517%206.455%201.473%207.962-.059%202%201.94%202.059%201.999.059.036-1.211-.102-3.68.143-5.781.658%202.833.935%206.097.899%207.314-.059%201.998%201.94%202.057%201.999.059.047-1.602-.182-6.36.559-8.982.507.017%201.044.03%201.619.035%201.774.09%203.726.085%205.506-.015%201.05%201.592%201.996%202.991%201.982%203.435-.029%201-1.117%203.969-1.146%204.969-.029%201%20.94%202.029%201.999.059.648-1.205%201.324-3.419%201.536-5.421.171.364.274.656.269.843-.029%201-.97%203.93-.999%204.93-.029.998.941%202.027%201.999.059%201.059-1.971%201.998-4.898%201.058-6.928-.797-1.72.431-4.165.824-7.914%201.082%201.665%201.117%203.351%201.118%203.459%200%20.553.447%201%201%201%20.553%200%201-.447%201-1-.001-.215-.067-4.85-4.399-7.327z'/%3e%3cpath%20fill='%23292F33'%20d='M8.28%205.571c-.016.552-.477.986-1.029.97-.552-.016-.986-.477-.97-1.029.016-.552.477-.986%201.029-.97.552.016.986.477.97%201.029z'/%3e%3c/svg%3e",Wt="/assets/aurora-fjord-img-DAHDArrG.webp",Nn=`<div>
  <div class="rounded-lg overflow-hidden border border-line">
    <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;">
      <defs>
        <linearGradient id="dn-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#03050f"></stop>
          <stop offset="38%" stop-color="#0a1130"></stop>
          <stop offset="75%" stop-color="#1a1638"></stop>
          <stop offset="100%" stop-color="#322244"></stop>
        </linearGradient>
        <linearGradient id="dn-mw" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#5d4a8a" stop-opacity="0"></stop>
          <stop offset="35%" stop-color="#8a78bc" stop-opacity="0.16"></stop>
          <stop offset="55%" stop-color="#b4a4d6" stop-opacity="0.22"></stop>
          <stop offset="75%" stop-color="#8a78bc" stop-opacity="0.14"></stop>
          <stop offset="100%" stop-color="#5d4a8a" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient id="dn-shoot" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fff" stop-opacity="0"></stop>
          <stop offset="80%" stop-color="#fff" stop-opacity="0.85"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="1"></stop>
        </linearGradient>
        <radialGradient id="dn-fire" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffe7a8" stop-opacity="0.95"></stop>
          <stop offset="30%" stop-color="#ff9540" stop-opacity="0.7"></stop>
          <stop offset="100%" stop-color="#ff5020" stop-opacity="0"></stop>
        </radialGradient>
        <mask id="dn-moon">
          <circle r="46" fill="white"></circle>
          <circle cx="17" r="40" fill="black"></circle>
        </mask>
        <linearGradient id="dn-dune1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#322550"></stop><stop offset="100%" stop-color="#1c1838"></stop>
        </linearGradient>
        <linearGradient id="dn-dune2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2a1f48"></stop><stop offset="100%" stop-color="#141028"></stop>
        </linearGradient>
        <linearGradient id="dn-dune3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e1638"></stop><stop offset="100%" stop-color="#0a0820"></stop>
        </linearGradient>
        <linearGradient id="dn-dune4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#15102a"></stop><stop offset="100%" stop-color="#040310"></stop>
        </linearGradient>
        <!-- silhouette filter: zeroes RGB, keeps alpha — turns any image into a dark shape -->
        <filter id="dn-sil" color-interpolation-filters="sRGB" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix type="matrix" values="0 0 0 0 0.02
                                               0 0 0 0 0.01
                                               0 0 0 0 0.05
                                               0 0 0 1 0"></feColorMatrix>
        </filter>
      </defs>

      <!-- SKY -->
      <rect width="1000" height="620" fill="url(#dn-sky)"></rect>

      <!-- MILKY WAY band (diagonal) -->
      <g transform="rotate(-22 500 280)">
        <rect x="-150" y="200" width="1300" height="160" fill="url(#dn-mw)"></rect>
      </g>

      <!-- DENSE STARS in Milky Way band -->
      <g fill="#fff">
        <circle cx="140" cy="120" r="0.6" opacity="0.6"></circle>
        <circle cx="180" cy="160" r="0.8" opacity="0.7"></circle>
        <circle cx="225" cy="135" r="0.5" opacity="0.5"></circle>
        <circle cx="270" cy="175" r="0.9" opacity="0.85"></circle>
        <circle cx="310" cy="150" r="0.6" opacity="0.6"></circle>
        <circle cx="355" cy="195" r="0.7" opacity="0.7"></circle>
        <circle cx="395" cy="170" r="1.0" opacity="0.9"></circle>
        <circle cx="430" cy="220" r="0.5" opacity="0.55"></circle>
        <circle cx="475" cy="200" r="0.8" opacity="0.8"></circle>
        <circle cx="520" cy="245" r="0.6" opacity="0.7"></circle>
        <circle cx="558" cy="225" r="1.0" opacity="0.9"></circle>
        <circle cx="600" cy="270" r="0.5" opacity="0.6"></circle>
        <circle cx="640" cy="250" r="0.7" opacity="0.75"></circle>
        <circle cx="680" cy="295" r="0.9" opacity="0.85"></circle>
        <circle cx="720" cy="275" r="0.6" opacity="0.65"></circle>
        <circle cx="765" cy="320" r="0.5" opacity="0.55"></circle>
        <circle cx="805" cy="300" r="0.8" opacity="0.8"></circle>
        <circle cx="845" cy="345" r="0.6" opacity="0.65"></circle>
        <circle cx="890" cy="320" r="0.9" opacity="0.85"></circle>
        <circle cx="248" cy="100" r="0.5" opacity="0.45"></circle>
        <circle cx="340" cy="115" r="0.7" opacity="0.6"></circle>
        <circle cx="450" cy="135" r="0.5" opacity="0.5"></circle>
        <circle cx="540" cy="160" r="0.6" opacity="0.55"></circle>
        <circle cx="630" cy="180" r="0.5" opacity="0.5"></circle>
        <circle cx="720" cy="210" r="0.6" opacity="0.6"></circle>
        <circle cx="815" cy="240" r="0.5" opacity="0.5"></circle>
        <circle cx="905" cy="270" r="0.6" opacity="0.55"></circle>
      </g>
      <!-- SCATTERED STARS outside band -->
      <g fill="#e8e8ff">
        <circle cx="60" cy="50" r="1.3" opacity="0.95"></circle>
        <circle cx="110" cy="78" r="0.8" opacity="0.7"></circle>
        <circle cx="200" cy="40" r="1.0" opacity="0.85"></circle>
        <circle cx="300" cy="60" r="0.7" opacity="0.6"></circle>
        <circle cx="420" cy="48" r="1.1" opacity="0.9"></circle>
        <circle cx="500" cy="85" r="0.6" opacity="0.55"></circle>
        <circle cx="620" cy="45" r="1.2" opacity="0.9"></circle>
        <circle cx="730" cy="70" r="0.8" opacity="0.7"></circle>
        <circle cx="850" cy="50" r="1.0" opacity="0.85"></circle>
        <circle cx="940" cy="90" r="0.9" opacity="0.75"></circle>
        <circle cx="80" cy="180" r="0.8" opacity="0.65"></circle>
        <circle cx="170" cy="240" r="0.6" opacity="0.55"></circle>
        <circle cx="260" cy="290" r="0.7" opacity="0.6"></circle>
        <circle cx="40" cy="320" r="0.9" opacity="0.7"></circle>
        <circle cx="940" cy="200" r="0.8" opacity="0.7"></circle>
        <circle cx="970" cy="350" r="0.7" opacity="0.6"></circle>
        <circle cx="60" cy="420" r="0.6" opacity="0.5"></circle>
      </g>

      <!-- ORION'S BELT — three stars in a row with faint connector -->
      <g>
        <circle cx="745" cy="155" r="1.6" fill="#fff" opacity="0.95"></circle>
        <circle cx="760" cy="170" r="1.6" fill="#fff" opacity="0.95"></circle>
        <circle cx="775" cy="185" r="1.6" fill="#fff" opacity="0.95"></circle>
        <line x1="745" y1="155" x2="775" y2="185" stroke="#fff" stroke-width="0.4" opacity="0.3"></line>
      </g>

      <!-- VENUS (bright planet) — top right with halo -->
      <circle cx="880" cy="120" r="6" fill="#fff8d0" opacity="0.18"></circle>
      <circle cx="880" cy="120" r="2.6" fill="#fff8d0"></circle>

      <!-- SHOOTING STAR -->
      <g transform="rotate(-18 500 90)">
        <rect x="380" y="89" width="70" height="1.4" fill="url(#dn-shoot)" rx="0.7"></rect>
        <circle cx="450" cy="89.7" r="1.6" fill="#fff"></circle>
      </g>

      <!-- CRESCENT MOON (top-left) -->
      <g transform="translate(180,110)">
        <circle r="46" fill="#fdf3c5" mask="url(#dn-moon)" transform="matrix(0.303,0,0,0.303,682.5,11.081)"></circle>
      </g>

      <!-- DISTANT MESA / CLIFF silhouette -->
      <g opacity="0.55" transform="matrix(1,0,0,1,-14.148,-1.669)">
        <path d="M0 405 L120 392 L180 380 L220 388 L320 376 L420 384 L520 374 L640 386 L760 372 L880 384 L1000 376 L1000 410 L0 410 Z" fill="#241a3c"></path>
      </g>

      <!-- DUNE 1 — farthest -->
      <path d="M0 430 Q 140 388 280 410 Q 410 432 560 402 Q 720 374 870 408 Q 940 422 1000 410 L 1000 620 L 0 620 Z" fill="url(#dn-dune1)"></path>
      <!-- moon-lit ridge highlight -->
      <path d="M0 430 Q 140 388 280 410 Q 410 432 560 402 Q 720 374 870 408" fill="none" stroke="#4e3e70" stroke-width="1.3" opacity="0.55"></path>

      <!-- OASIS palm cluster on far ridge -->
      <g transform="translate(509.63,460.221) scale(2.951)" fill="#0d0a1c">
        <rect x="-1" y="-22" width="2" height="22"></rect>
        <path d="M0 -22 q -10 -3 -16 -10 q 8 1 16 5 z"></path>
        <path d="M0 -22 q 10 -3 16 -10 q -8 1 -16 5 z"></path>
        <path d="M0 -23 q -12 0 -18 6 q 10 -1 18 -3 z"></path>
        <path d="M0 -23 q 12 0 18 6 q -10 -1 -18 -3 z"></path>
        <g transform="translate(11,3)">
          <rect x="-0.8" y="-17" width="1.6" height="17"></rect>
          <path d="M0 -17 q -8 -2 -12 -8 q 6 1 12 4 z"></path>
          <path d="M0 -17 q 8 -2 12 -8 q -6 1 -12 4 z"></path>
          <path d="M0 -18 q -10 0 -14 5 q 8 -1 14 -2 z"></path>
          <path d="M0 -18 q 10 0 14 5 q -8 -1 -14 -2 z"></path>
        </g>
        <g transform="translate(-9,2)">
          <rect x="-0.8" y="-14" width="1.6" height="14"></rect>
          <path d="M0 -14 q -7 -2 -10 -7 q 5 1 10 3 z"></path>
          <path d="M0 -14 q 7 -2 10 -7 q -5 1 -10 3 z"></path>
          <path d="M0 -15 q -9 0 -12 4 q 7 -1 12 -1 z"></path>
        </g>
      </g>

      <!-- DUNE 2 — mid-back -->
      <path d="M0 478 Q 180 432 340 460 Q 480 484 640 446 Q 780 412 920 452 Q 970 466 1000 460 L 1000 620 L 0 620 Z" fill="url(#dn-dune2)"></path>
      <path d="M0 478 Q 180 432 340 460 Q 480 484 640 446 Q 780 412 920 452" fill="none" stroke="#5a4a78" stroke-width="1.4" opacity="0.5"></path>

      <!-- FIRE GLOW (radial halo, behind tent) -->
      <circle cx="395" cy="468" r="62" fill="url(#dn-fire)" opacity="0.85" transform="matrix(1,0,0,1,-46.299,-11.646)"></circle>
      <!-- BEDOUIN TENT -->
      <g transform="translate(420,464)" fill="#0a0716">
        <path d="M-28 0 L -10 -22 L 8 -18 L 26 -22 L 36 0 Z"></path>
        <line x1="-10" y1="-22" x2="-10" y2="0" stroke="#0a0716" stroke-width="1"></line>
        <line x1="26" y1="-22" x2="26" y2="0" stroke="#0a0716" stroke-width="1"></line>
        <!-- tent pole guy lines -->
        <line x1="-10" y1="-22" x2="-22" y2="-30" stroke="#0a0716" stroke-width="0.6" opacity="0.7"></line>
        <line x1="26" y1="-22" x2="38" y2="-30" stroke="#0a0716" stroke-width="0.6" opacity="0.7"></line>
        <!-- glowing tent opening -->
        <path d="M 6 0 L 6 -14 L 14 -14 L 14 0 Z" fill="#ffa050" opacity="0.55"></path>
      </g>
      <!-- CAMPFIRE itself (small flames) -->
      <g transform="translate(350.36,460.4)">
        <path d="M-4 0 Q -3 -8 0 -10 Q 3 -6 4 0 Z" fill="#ffd060" opacity="0.95"></path>
        <path d="M-2 0 Q -1 -5 0 -7 Q 2 -4 2 0 Z" fill="#fff5c0"></path>
        <ellipse cx="0" cy="2" rx="6" ry="1.6" fill="#3a1810"></ellipse>
      </g>

      <!-- DUNE 3 — mid-front -->
      <path d="M0 538 Q 150 488 320 514 Q 460 538 600 504 Q 740 472 880 510 Q 950 522 1000 514 L 1000 620 L 0 620 Z" fill="url(#dn-dune3)"></path>
      <path d="M0 538 Q 150 488 320 514 Q 460 538 600 504 Q 740 472 880 510" fill="none" stroke="#5e4a7e" stroke-width="1.5" opacity="0.55"></path>

      <!-- DUNE 4 — foreground (camels walk this ridge) -->
      <path d="M0 600 Q 200 540 400 568 Q 560 590 740 552 Q 880 528 1000 560 L 1000 620 L 0 620 Z" fill="url(#dn-dune4)"></path>
      <path d="M0 600 Q 200 540 400 568 Q 560 590 740 552 Q 880 528 1000 560" fill="none" stroke="#5a4878" stroke-width="1.6" opacity="0.6"></path>

      <!-- FOOTPRINTS trailing across foreground dune (small dot pairs) -->
      <g fill="#fff" opacity="0.18">
        <ellipse cx="780" cy="550" rx="2" ry="1.2"></ellipse><ellipse cx="785" cy="553" rx="2" ry="1.2"></ellipse>
        <ellipse cx="800" cy="551" rx="2" ry="1.2"></ellipse><ellipse cx="805" cy="554" rx="2" ry="1.2"></ellipse>
        <ellipse cx="822" cy="549" rx="2" ry="1.2"></ellipse><ellipse cx="827" cy="552" rx="2" ry="1.2"></ellipse>
        <ellipse cx="848" cy="545" rx="2" ry="1.2"></ellipse><ellipse cx="853" cy="548" rx="2" ry="1.2"></ellipse>
        <ellipse cx="875" cy="540" rx="2" ry="1.2"></ellipse><ellipse cx="880" cy="543" rx="2" ry="1.2"></ellipse>
        <ellipse cx="905" cy="534" rx="2" ry="1.2"></ellipse><ellipse cx="910" cy="537" rx="2" ry="1.2"></ellipse>
        <ellipse cx="940" cy="529" rx="2" ry="1.2"></ellipse><ellipse cx="945" cy="532" rx="2" ry="1.2"></ellipse>
      </g>

      <!-- CAMEL CARAVAN — Twemoji 🐪 (1f42a) silhouetted via dn-sil filter -->
      <image href="${Je}" x="335" y="488" width="90" height="70" filter="url(#dn-sil)" transform="matrix(0.478,0,0,0.478,718.439,153.876)"></image>
      <image href="${Je}" x="475" y="502" width="90" height="70" filter="url(#dn-sil)" transform="matrix(0.632,0,0,0.632,518.958,59.096)"></image>
      <image href="${Je}" x="615" y="492" width="90" height="70" filter="url(#dn-sil)" transform="matrix(0.738,0,0,0.738,289.2,-1.182)"></image>
    </svg>
  </div>
  <p class="text-xs text-muted">Desert night — crescent moon, Milky Way, shooting star, Orion's belt, Venus, oasis on the ridge, Bedouin camp with campfire glow, caravan crossing the foreground dune.</p>
</div>`,Wn=`<div>
  <div class="rounded-lg overflow-hidden border border-line">
    <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;">
      <defs>
        <linearGradient id="af-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020512"></stop>
          <stop offset="40%" stop-color="#06122a"></stop>
          <stop offset="100%" stop-color="#0a2438"></stop>
        </linearGradient>
        <!-- aurora ribbons -->
        <linearGradient id="af-aur1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7dffc4" stop-opacity="0"></stop>
          <stop offset="55%" stop-color="#36f0a6" stop-opacity="0.55"></stop>
          <stop offset="100%" stop-color="#0f9d72" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient id="af-aur2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b69cff" stop-opacity="0"></stop>
          <stop offset="50%" stop-color="#7b5cff" stop-opacity="0.4"></stop>
          <stop offset="100%" stop-color="#3fd6c8" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient id="af-aur3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#caffd9" stop-opacity="0"></stop>
          <stop offset="60%" stop-color="#5cffb0" stop-opacity="0.32"></stop>
          <stop offset="100%" stop-color="#2bd0e0" stop-opacity="0"></stop>
        </linearGradient>
        <radialGradient id="af-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"></stop>
          <stop offset="55%" stop-color="#dfeaff" stop-opacity="0.9"></stop>
          <stop offset="100%" stop-color="#dfeaff" stop-opacity="0"></stop>
        </radialGradient>
        <linearGradient id="af-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0a2438"></stop>
          <stop offset="45%" stop-color="#06182a"></stop>
          <stop offset="100%" stop-color="#020a14"></stop>
        </linearGradient>
        <radialGradient id="af-window" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffe6a0" stop-opacity="0.95"></stop>
          <stop offset="100%" stop-color="#ff9d3c" stop-opacity="0"></stop>
        </radialGradient>
        <filter id="af-blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="9"></feGaussianBlur>
        </filter>
        <filter id="af-blur2" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3"></feGaussianBlur>
        </filter>
      </defs>

      <!-- horizon at y=372; everything below mirrors above -->
      <rect width="1000" height="372" fill="url(#af-sky)"></rect>

      <!-- stars -->
      <g fill="#fff">
        <circle cx="90" cy="60" r="1.1" opacity="0.9"></circle>
        <circle cx="170" cy="120" r="0.8" opacity="0.6"></circle>
        <circle cx="250" cy="48" r="1.3" opacity="0.95"></circle>
        <circle cx="330" cy="96" r="0.7" opacity="0.5"></circle>
        <circle cx="430" cy="40" r="1" opacity="0.8"></circle>
        <circle cx="560" cy="78" r="0.9" opacity="0.7"></circle>
        <circle cx="640" cy="36" r="1.2" opacity="0.9"></circle>
        <circle cx="720" cy="110" r="0.7" opacity="0.5"></circle>
        <circle cx="810" cy="58" r="1.1" opacity="0.85"></circle>
        <circle cx="880" cy="128" r="0.8" opacity="0.6"></circle>
        <circle cx="930" cy="70" r="1" opacity="0.8"></circle>
        <circle cx="120" cy="200" r="0.8" opacity="0.5"></circle>
        <circle cx="380" cy="170" r="0.9" opacity="0.6"></circle>
        <circle cx="700" cy="190" r="0.7" opacity="0.5"></circle>
        <circle cx="960" cy="200" r="0.9" opacity="0.6"></circle>
      </g>

      <!-- moon -->
      <circle cx="820" cy="105" r="52" fill="url(#af-moon)"></circle>
      <circle cx="820" cy="105" r="22" fill="#fdfbff"></circle>

      <!-- AURORA (sky) -->
      <g filter="url(#af-blur)">
        <path d="M-40 250 Q 200 120 420 200 Q 640 280 880 140 L 1040 110 L 1040 300 Q 800 230 560 300 Q 320 360 -40 300 Z" fill="url(#af-aur2)" opacity="0.85"></path>
        <path d="M-40 210 Q 180 90 400 160 Q 620 230 860 110 L 1040 90 L 1040 270 Q 800 200 540 270 Q 300 330 -40 270 Z" fill="url(#af-aur1)"></path>
        <path d="M-40 300 Q 240 200 480 250 Q 720 300 1040 200 L 1040 350 Q 760 300 480 350 Q 220 392 -40 360 Z" fill="url(#af-aur3)" opacity="0.8"></path>
      </g>
      <!-- vertical light curtains -->
      <g filter="url(#af-blur2)" opacity="0.5">
        <rect x="180" y="120" width="3" height="200" fill="#7dffc4" opacity="0.35"></rect>
        <rect x="240" y="150" width="2" height="180" fill="#5cffb0" opacity="0.3"></rect>
        <rect x="470" y="160" width="3" height="190" fill="#9affd0" opacity="0.32"></rect>
        <rect x="540" y="180" width="2" height="160" fill="#7dffc4" opacity="0.28"></rect>
        <rect x="760" y="130" width="3" height="170" fill="#b69cff" opacity="0.3"></rect>
      </g>

      <!-- distant ridge -->
      <path d="M0 372 L0 330 Q 120 300 240 322 Q 380 348 520 318 Q 680 286 820 320 Q 920 342 1000 318 L1000 372 Z" fill="#081826"></path>

      <!-- WATER -->
      <rect y="372" width="1000" height="248" fill="url(#af-water)"></rect>

      <!-- aurora reflection (dimmer, vertically flipped, sliced into bands) -->
      <g transform="translate(0,744) scale(1,-1)" opacity="0.4" filter="url(#af-blur)">
        <path d="M-40 210 Q 180 90 400 160 Q 620 230 860 110 L 1040 90 L 1040 270 Q 800 200 540 270 Q 300 330 -40 270 Z" fill="url(#af-aur1)"></path>
        <path d="M-40 250 Q 200 120 420 200 Q 640 280 880 140 L 1040 110 L 1040 300 Q 800 230 560 300 Q 320 360 -40 300 Z" fill="url(#af-aur2)"></path>
      </g>
      <!-- moon glimmer on water -->
      <ellipse cx="820" cy="430" rx="38" ry="60" fill="url(#af-moon)" opacity="0.18"></ellipse>
      <!-- horizontal ripple lines -->
      <g stroke="#3fd6c8" stroke-width="1" opacity="0.12">
        <line x1="700" y1="410" x2="940" y2="410"></line>
        <line x1="660" y1="440" x2="980" y2="440"></line>
        <line x1="120" y1="430" x2="360" y2="430"></line>
        <line x1="400" y1="470" x2="700" y2="470"></line>
        <line x1="200" y1="510" x2="520" y2="510"></line>
      </g>

      <!-- PINE SILHOUETTES along the shore -->
      <g fill="#040d12">
        <g transform="translate(60,372)"><path d="M0 0 L-14 0 L-9 -22 L-12 -22 L-4 -44 L-7 -44 L0 -64 L7 -44 L4 -44 L12 -22 L9 -22 L14 0 Z"></path></g>
        <g transform="translate(110,372) scale(0.8)"><path d="M0 0 L-14 0 L-9 -22 L-12 -22 L-4 -44 L-7 -44 L0 -64 L7 -44 L4 -44 L12 -22 L9 -22 L14 0 Z"></path></g>
        <g transform="translate(150,372) scale(1.2)"><path d="M0 0 L-14 0 L-9 -22 L-12 -22 L-4 -44 L-7 -44 L0 -64 L7 -44 L4 -44 L12 -22 L9 -22 L14 0 Z"></path></g>
        <g transform="translate(900,372) scale(1.1)"><path d="M0 0 L-14 0 L-9 -22 L-12 -22 L-4 -44 L-7 -44 L0 -64 L7 -44 L4 -44 L12 -22 L9 -22 L14 0 Z"></path></g>
        <g transform="translate(950,372) scale(0.85)"><path d="M0 0 L-14 0 L-9 -22 L-12 -22 L-4 -44 L-7 -44 L0 -64 L7 -44 L4 -44 L12 -22 L9 -22 L14 0 Z"></path></g>
      </g>

      <!-- CABIN on the left shore with warm window -->
      <g transform="translate(255,372)">
        <ellipse cx="6" cy="-1" rx="60" ry="20" fill="url(#af-window)" opacity="0.5"></ellipse>
        <path d="M-26 0 L-26 -26 L6 -46 L38 -26 L38 0 Z" fill="#0a1116"></path>
        <path d="M-32 -24 L6 -50 L44 -24 L38 -28 L6 -44 L-26 -28 Z" fill="#162028"></path>
        <rect x="-4" y="-22" width="14" height="14" fill="url(#af-window)"></rect>
        <rect x="-2" y="-20" width="10" height="10" fill="#ffe6a0"></rect>
        <!-- reflection of cabin glow -->
        <ellipse cx="6" cy="20" rx="10" ry="26" fill="url(#af-window)" opacity="0.3"></ellipse>
      </g>

      <!-- foreground pine reflections (faint, in water) -->
      <g fill="#040d12" opacity="0.35" transform="translate(0,744) scale(1,-1)">
        <g transform="translate(150,372) scale(1.2)"><path d="M0 0 L-14 0 L-9 -22 L-12 -22 L-4 -44 L-7 -44 L0 -64 L7 -44 L4 -44 L12 -22 L9 -22 L14 0 Z"></path></g>
        <g transform="translate(900,372) scale(1.1)"><path d="M0 0 L-14 0 L-9 -22 L-12 -22 L-4 -44 L-7 -44 L0 -64 L7 -44 L4 -44 L12 -22 L9 -22 L14 0 Z"></path></g>
      </g>
    <g data-obj="image-2" transform="matrix(0.476,0,0,0.476,583.156,-35.713)"><image href="${Wt}" xlink:href="${Wt}" x="396.7" y="155" width="206.59" height="310" preserveAspectRatio="xMidYMid meet"></image></g></svg>
  </div>
  <p class="text-xs text-muted">Aurora fjord — green-and-violet curtains over a mirror-still inlet, gibbous moon, pine-lined shore, a lone cabin with one lit window, all of it doubled in the black water.</p>
</div>`,pr=t=>`<!doctype html><html><head><meta charset="utf-8">
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body { margin: 0; font: 16px/1.6 -apple-system, system-ui, sans-serif; color: #1c1c1c; background: transparent; }
  @media (prefers-color-scheme: dark) { body { color: #e7e7e7; } }
  .wrap { max-width: 720px; margin: 0 auto; padding: 8px 4px 48px; }
  .eyebrow { letter-spacing: .14em; text-transform: uppercase; font-size: 12px; font-weight: 700; color: #6b8f71; margin: 0 0 8px; }
  h1 { font-size: 34px; line-height: 1.15; margin: 0 0 16px; font-weight: 800; }
  h1 .accent { color: #6b8f71; }
  p.lede { font-size: 18px; opacity: .85; margin: 0 0 28px; }
  .cards { display: grid; gap: 12px; }
  .card { border: 1px solid color-mix(in srgb, currentColor 14%, transparent); border-radius: 14px; padding: 16px 18px; }
  .card h3 { margin: 0 0 4px; font-size: 16px; }
  .card p { margin: 0; opacity: .8; font-size: 15px; }
  .tag { display: inline-block; margin-top: 10px; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; opacity: .55; }
  .note { margin-top: 28px; padding: 14px 16px; border-radius: 12px; background: color-mix(in srgb, currentColor 7%, transparent); font-size: 15px; }
</style></head><body><div class="wrap">${t}</div></body></html>`,An=pr(`<p class="eyebrow">Mana, in one idea</p>
   <h1>A private cockpit <span class="accent">you talk to.</span></h1>
   <p class="lede">Mana is a self-hosted personal operating layer. One place for your goals, money, groceries, people, and projects, all driven by chat or voice. You run it yourself, on your own machine. Nobody else gets in.</p>
   <div class="cards">
     <div class="card"><h3>You own it</h3><p>It runs on your hardware with your data. No accounts to sign up for, no servers reading your life.</p></div>
     <div class="card"><h3>You just talk to it</h3><p>Say what you want in plain language and the right helper takes care of it. Every tool can also be used by hand.</p></div>
     <div class="card"><h3>It compounds</h3><p>Each tool builds on the same foundation, so the whole thing gets more useful the more you use it.</p></div>
   </div>
   <div class="note">This is a live demo. Everything works by hand on your own browser storage. The one thing it can't do here is think, that's what you unlock by running your own Mana with a model connected.</div>`),Dn=pr(`<p class="eyebrow">What's inside</p>
   <h1>One place, <span class="accent">many tools.</span></h1>
   <p class="lede">Each tool is a panel plus a helper that can do everything the panel can. Add the ones you want, ignore the rest.</p>
   <div class="cards">
     <div class="card"><h3>Goals</h3><p>Long-term goals, key results, and the few commitments that matter this week.</p><span class="tag">plan</span></div>
     <div class="card"><h3>Grocery</h3><p>A shared shopping and pantry list, with expiry tracking.</p><span class="tag">home</span></div>
     <div class="card"><h3>Finance</h3><p>Zero-based budget, recurring payments, and net worth over time.</p><span class="tag">money</span></div>
     <div class="card"><h3>Circle</h3><p>A light memory of the people in your life and what you talked about.</p><span class="tag">people</span></div>
     <div class="card"><h3>Office</h3><p>A catalog of the projects you're building and what they're for.</p><span class="tag">work</span></div>
   </div>`),Re="mana.demo.canvas",Gn={"mosque-bg.html":In,"mana.html":An,"the-tools.html":Dn,"aurora-fjord.html":Wn,"desert-night.html":Nn,"castle-peak.html":On,"mosque.html":Tn};function Le(){let t=null;try{const r=localStorage.getItem(Re);r&&(t=JSON.parse(r))}catch{}t||(t={});let e=!1;for(const[r,s]of Object.entries(Gn))r in t||(t[r]=s,e=!0);return(e||!localStorage.getItem(Re))&&localStorage.setItem(Re,JSON.stringify(t)),t}function At(t){localStorage.setItem(Re,JSON.stringify(t))}const Hn=[d.get("/api/canvas/files",()=>{const t=Le();return c.json({files:Object.entries(t).map(([e,r])=>({name:e,sizeBytes:r.length,modifiedAt:b()}))})}),d.get("/api/canvas/files/:name",({params:t})=>{const e=String(t.name),r=Le()[e];return r==null?c.json({error:"not found"},{status:404}):c.json({name:e,content:r,modifiedAt:b()})}),d.put("/api/canvas/files/:name",async({params:t,request:e})=>{const r=String(t.name),s=await e.json().catch(()=>({}));if(typeof s.content!="string")return c.json({error:"missing content"},{status:400});const n=Le();return n[r]=s.content,At(n),c.json({name:r,modifiedAt:b()})}),d.delete("/api/canvas/files/:name",({params:t})=>{const e=String(t.name),r=Le();return e in r?(delete r[e],At(r),c.json({ok:!0})):c.json({error:"not found"},{status:404})}),d.post("/api/upload",async({request:t})=>{const e=await t.json().catch(()=>({})),r=typeof e.dataUrl=="string"?e.dataUrl:"";return r.startsWith("data:image/")?c.json({id:`demo-${b()}`,path:"",url:r}):c.json({error:"invalid dataUrl"},{status:400})})],Un=`# Welcome to Notes

This pane is a live notebook you and Mana share. Type here, paste an image, drop in a table — it saves to a plain Markdown file the moment you stop typing.

The real trick: **Mana writes into the same file you do.** Highlight a paragraph and ask it to tighten the wording, or say "draft me a packing list" and watch it land here. One document, two authors.

## What you can do

- **Format inline** — bold, italic, headings, quotes
- Bulleted and numbered lists
- Checklists you can tick off
- Tables, code blocks, and images

> Everything in this demo lives in your own browser. Nothing leaves it.

## Try it

- [ ] Edit this line
- [ ] Paste an image from your clipboard
- [ ] Open the canvas tab at the top
- [x] Read this far
`,$n=`# Lake cabin weekend

Three days off-grid in October. Booking the place by Friday.

## Who's in

| Person | Driving? | Bringing |
| --- | --- | --- |
| Jeff | yes | kayak, firewood |
| Mara | no | the food box |
| Dev | yes | speakers |

## Still to sort

- [x] Reserve the cabin
- [ ] Check the kayak rack fits the rental
- [ ] Grocery run Thursday night
- [ ] Charge the camera

Forecast's clear. Last time it rained the whole weekend, so we're owed one.
`,Me="mana.demo.notes",Bn={"welcome.md":Un,"lake-cabin-weekend.md":$n};function Ee(){let t=null;try{const r=localStorage.getItem(Me);r&&(t=JSON.parse(r))}catch{}t||(t={});let e=!1;for(const[r,s]of Object.entries(Bn))r in t||(t[r]=s,e=!0);return(e||!localStorage.getItem(Me))&&localStorage.setItem(Me,JSON.stringify(t)),t}function Dt(t){localStorage.setItem(Me,JSON.stringify(t))}const Fn=[d.get("/api/notes/files",()=>{const t=Ee();return c.json({files:Object.entries(t).map(([e,r])=>({name:e,sizeBytes:r.length,modifiedAt:b()}))})}),d.get("/api/notes/files/:name",({params:t})=>{const e=String(t.name),r=Ee()[e];return r==null?c.json({error:"not found"},{status:404}):c.json({name:e,content:r,modifiedAt:b()})}),d.put("/api/notes/files/:name",async({params:t,request:e})=>{const r=String(t.name),s=await e.json().catch(()=>({}));if(typeof s.content!="string")return c.json({error:"missing content"},{status:400});const n=Ee();return n[r]=s.content,Dt(n),c.json({name:r,modifiedAt:b()})}),d.delete("/api/notes/files/:name",({params:t})=>{const e=String(t.name),r=Ee();return e in r?(delete r[e],Dt(r),c.json({ok:!0})):c.json({error:"not found"},{status:404})})],N=()=>c.json({ok:!0}),_e=["EUR","USD","GBP","TRY","MYR","SGD","CHF","AED"],le=()=>new Date().toISOString().slice(0,10).slice(0,7),Ke=()=>new Date().toISOString().slice(0,10),O=()=>F.get("finance.base")||"USD",X=t=>F.get(`finance.${t}`),J=(t,e)=>F.setMany({[`finance.${t}`]:e}),P=(t=!0)=>u.financeCategories.where(e=>t?!0:e.active===1).sort((e,r)=>e.display_order-r.display_order),Pe=(t=!0)=>u.financeAccounts.where(e=>t?!0:e.archived===0),ht=t=>u.financeTransactions.where(e=>t?e.date.slice(0,7)===t:!0).sort((e,r)=>r.date.localeCompare(e.date)),Qn=t=>({...t,base:t.original_amount,baseCurrency:O()});function fr(t){const e=[],[r,s]=t.split("-").map(Number);for(const n of u.financeRecurring.all()){if(t<n.start_date.slice(0,7)||n.end_date&&t>n.end_date.slice(0,7))continue;const o=Number(n.start_date.slice(5,7)),i=n.start_date.slice(8,10)||"01";let a=!1;n.frequency==="monthly"||n.frequency==="weekly"?a=!0:n.frequency==="yearly"?a=s===o:n.frequency==="quarterly"&&(a=((s-o)%3+3)%3===0),a&&e.push({rec:n,date:`${r}-${String(s).padStart(2,"0")}-${i}`})}return e}function zn(t){const e=P(!0),r=new Map(u.financeBudgets.where(g=>g.month===t).map(g=>[g.category_id,g.amount])),s=ht(t),n=new Map;let o=0;for(const g of s)g.type==="income"?o+=g.original_amount:g.category_id!=null&&n.set(g.category_id,(n.get(g.category_id)??0)+g.original_amount);const i=fr(t),a=new Map;let h=0;const l=[];for(const g of i){const E=g.rec.original_amount;g.rec.type==="income"?(h+=E,l.push({name:g.rec.name,date:g.date,base:E,recurring_id:g.rec.id})):g.rec.category_id!=null&&a.set(g.rec.category_id,(a.get(g.rec.category_id)??0)+E)}l.sort((g,E)=>g.date.localeCompare(E.date));const m=e.map(g=>({id:g.id,name:g.name,icon:g.icon,active:g.active,budget:r.get(g.id)??0,spent:n.get(g.id)??0,committed:a.get(g.id)??0})),f=m.reduce((g,E)=>g+E.budget,0),p=m.reduce((g,E)=>g+E.spent,0),y=m.reduce((g,E)=>g+E.committed,0),k=X(`savings_goal:${t}`),w=k!=null&&k!==""&&Number.isFinite(Number(k))?Number(k):null,z=new Map(e.map(g=>[g.id,g.name])),C=i.filter(g=>g.rec.type==="expense").map(g=>({name:g.rec.name,date:g.date,category:g.rec.category_id!=null?z.get(g.rec.category_id)??null:null,base:g.rec.original_amount})).sort((g,E)=>g.date.localeCompare(E.date)),me=C.reduce((g,E)=>g+E.base,0);return{month:t,baseCurrency:O(),income:{actual:o,committed:h,committedItems:l},categories:m,totalBudget:f,totalSpent:p,totalCommitted:y,leftToSpend:o+h-p,toAllocate:o+h-f,savingsGoal:w,fixedPayments:{count:C.length,total:me,items:C}}}function Zn(t){const e=p=>`${t}-${String(p).padStart(2,"0")}`,r=ht().filter(p=>p.date.slice(0,4)===String(t)),s=P(!0),n=new Map(s.map(p=>[p.id,{name:p.name,icon:p.icon}])),o=Array.from({length:12},(p,y)=>({month:e(y+1),income:0,spent:0,saved:0})),i=new Map;for(const p of r){const y=Number(p.date.slice(5,7))-1;y<0||y>11||(p.type==="income"?o[y].income+=p.original_amount:p.category_id!=null&&(o[y].spent+=p.original_amount,i.has(p.category_id)||i.set(p.category_id,Array(12).fill(0)),i.get(p.category_id)[y]+=p.original_amount))}const a=le();for(let p=1;p<=12&&!(e(p)>a);p++)for(const y of fr(e(p)))y.rec.type==="income"&&(o[p-1].income+=y.rec.original_amount);for(const p of o)p.saved=p.income-p.spent;const h=[...i.entries()].map(([p,y])=>({id:p,name:n.get(p)?.name??"Uncategorized",icon:n.get(p)?.icon??null,monthly:y,total:y.reduce((k,w)=>k+w,0)})).sort((p,y)=>y.total-p.total),l=o.reduce((p,y)=>p+y.income,0),m=o.reduce((p,y)=>p+y.spent,0),f=l-m;return{year:t,baseCurrency:O(),months:o,categories:h,totals:{income:l,spent:m,saved:f,savingsRate:l>0?f/l:0}}}const Gt=["Liquid Assets","Investments","Physical Assets","Debts"];function Yn(t){const e=Pe(!0),r=new Map(e.map(y=>[y.id,y])),s=u.financeNetworth.all().sort((y,k)=>y.date.localeCompare(k.date)),n=new Map;for(const y of s){const k=y.date.slice(0,7),w=n.get(y.account_id);(!w||k>w)&&n.set(y.account_id,k)}const o=y=>{const k=new Map;for(const w of s)w.date.slice(0,7)<=y&&k.set(w.account_id,{date:w.date,amount:w.original_amount,currency:w.original_currency});for(const w of[...k.keys()])(n.get(w)??"")<y&&k.delete(w);return k},i=(y,k)=>y==="debt"?-k:k,a=o(t),h=new Map;let l=0;for(const[y,k]of a){const w=r.get(y);if(!w)continue;const z=i(w.type,k.amount);l+=z;const C=w.bucket&&Gt.includes(w.bucket)?w.bucket:"Other";h.has(C)||h.set(C,{bucket:C,total:0,accounts:[]});const me=h.get(C);me.total+=z,me.accounts.push({id:w.id,name:w.name,subtype:w.subtype,type:w.type,currency:w.currency,original:k.amount,base:k.amount,asOf:k.date})}const m=[...Gt,"Other"].map(y=>h.get(y)).filter(y=>!!y),p=[...new Set(s.map(y=>y.date.slice(0,7)))].sort().map(y=>{let k=0;for(const[w,z]of o(y)){const C=r.get(w);C&&(k+=i(C.type,z.amount))}return{month:y,net:k}});return{month:t,baseCurrency:O(),total:l,groups:m,series:p}}const Jn=[d.get("/api/finance/settings",()=>{let t=null;const e=X("recurring_columns");if(e)try{t=JSON.parse(e)}catch{}let r=[O()];const s=X("currencies");if(s)try{const i=JSON.parse(s);Array.isArray(i)&&i.length&&(r=i.map(String))}catch{}let n={savingsGoal:!0,fixedPayments:!0,expenseDonut:!0};const o=X("cards");if(o)try{n={...n,...JSON.parse(o)}}catch{}return c.json({baseCurrency:O(),recurringColumns:t,currencies:r,lastCurrency:X("last_currency")||O(),supportedCurrencies:_e,cards:n})}),d.post("/api/finance/cards",async({request:t})=>{const e=await t.json(),r={savingsGoal:!0,fixedPayments:!0,expenseDonut:!0},s=X("cards");if(s)try{Object.assign(r,JSON.parse(s))}catch{}for(const n of["savingsGoal","fixedPayments","expenseDonut"])e.cards&&n in e.cards&&(r[n]=!!e.cards[n]);return J("cards",JSON.stringify(r)),c.json({ok:!0,cards:r})}),d.post("/api/finance/recurring-columns",async({request:t})=>{const e=await t.json();return Array.isArray(e.columns)?(J("recurring_columns",JSON.stringify(e.columns.map(String))),N()):c.json({error:"columns array required"},{status:400})}),d.post("/api/finance/currencies",async({request:t})=>{const e=await t.json();if(!Array.isArray(e.currencies))return c.json({error:"currencies array required"},{status:400});const r=new Set,s=e.currencies.map(n=>String(n).toUpperCase().trim()).filter(n=>_e.includes(n)&&!r.has(n)&&(r.add(n),!0));return s.length?(J("currencies",JSON.stringify(s)),c.json({ok:!0,currencies:s})):c.json({error:"no valid currencies"},{status:400})}),d.post("/api/finance/base-currency",async({request:t})=>{const e=await t.json(),r=String(e.currency||"").toUpperCase().trim();return _e.includes(r)?(J("base",r),c.json({ok:!0,baseCurrency:r})):c.json({error:"currency must be supported"},{status:400})}),d.get("/api/finance/budget",({request:t})=>{const e=new URL(t.url).searchParams.get("month")||le();return/^\d{4}-\d{2}$/.test(e)?c.json(zn(e)):c.json({error:"month must be YYYY-MM"},{status:400})}),d.get("/api/finance/year",({request:t})=>{const e=Number(new URL(t.url).searchParams.get("year")),r=Number.isInteger(e)&&e>=2e3&&e<=2100?e:new Date().getUTCFullYear();return c.json(Zn(r))}),d.get("/api/finance/networth",({request:t})=>{const e=new URL(t.url).searchParams.get("month"),r=e&&/^\d{4}-\d{2}$/.test(e)?e:le();return c.json(Yn(r))}),d.get("/api/finance/transactions",({request:t})=>{const e=new URL(t.url).searchParams,r=e.get("month"),s=e.get("categoryId"),n=e.get("type");let o=ht(r&&/^\d{4}-\d{2}$/.test(r)?r:void 0);return s&&(o=o.filter(i=>i.category_id===Number(s))),(n==="income"||n==="expense")&&(o=o.filter(i=>i.type===n)),c.json({items:o.map(Qn)})}),d.post("/api/finance/transaction",async({request:t})=>{const e=await t.json(),r=Number(e.amount);if(!Number.isFinite(r)||r<=0)return c.json({error:"amount must be positive"},{status:400});const s=e.type==="income"?"income":"expense",n=typeof e.date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e.date)?e.date:Ke();let o=null;if(s==="expense"){if(e.categoryId!=null)o=Number(e.categoryId);else if(e.category){const l=P(!0).find(m=>m.name.toLowerCase()===String(e.category).toLowerCase());o=l?l.id:u.financeCategories.insert({user_login:"owner",name:String(e.category),icon:null,active:1,display_order:P(!0).length,created_at:b()}).id}}let i=null;e.accountId!=null&&(i=Number(e.accountId));const a=String(e.currency||O()).toUpperCase(),h=u.financeTransactions.insert({user_login:"owner",type:s,date:n,original_amount:r,original_currency:a,category_id:o,account_id:i,name:e.name!=null?String(e.name):null,source:s==="income"&&e.source!=null?String(e.source):null,label:null,notes:e.notes!=null?String(e.notes):null,recurring_id:null,period:null,created_at:b()});return _e.includes(a)&&J("last_currency",a),c.json({id:h.id})}),d.patch("/api/finance/transaction/:id",async({params:t,request:e})=>{const r=await e.json(),s={};return r.date!=null&&(s.date=String(r.date)),r.amount!=null&&(s.original_amount=Number(r.amount)),r.currency!=null&&(s.original_currency=String(r.currency).toUpperCase()),r.categoryId!==void 0&&(s.category_id=r.categoryId==null?null:Number(r.categoryId)),r.name!==void 0&&(s.name=r.name==null?null:String(r.name)),r.notes!==void 0&&(s.notes=r.notes==null?null:String(r.notes)),u.financeTransactions.update(Number(t.id),s),N()}),d.delete("/api/finance/transaction/:id",({params:t})=>(u.financeTransactions.remove(Number(t.id)),N())),d.get("/api/finance/categories",({request:t})=>c.json({items:P(new URL(t.url).searchParams.get("all")==="1")})),d.post("/api/finance/category",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim();if(!r)return c.json({error:"name is required"},{status:400});const s=u.financeCategories.insert({user_login:"owner",name:r,icon:e.icon!=null?String(e.icon):null,active:1,display_order:P(!0).length,created_at:b()});return c.json({id:s.id})}),d.patch("/api/finance/category/:id",async({params:t,request:e})=>{const r=await e.json(),s={};return r.active!==void 0&&(s.active=r.active?1:0),typeof r.name=="string"&&(s.name=r.name),"icon"in r&&(s.icon=r.icon==null?null:String(r.icon)),u.financeCategories.update(Number(t.id),s),N()}),d.delete("/api/finance/category/:id",({params:t})=>c.json({ok:u.financeCategories.remove(Number(t.id))})),d.post("/api/finance/budget",async({request:t})=>{const e=await t.json(),r=Number(e.categoryId),s=Number(e.amount),n=typeof e.month=="string"&&/^\d{4}-\d{2}$/.test(e.month)?e.month:le();if(!Number.isFinite(r)||!Number.isFinite(s))return c.json({error:"categoryId and amount required"},{status:400});const o=u.financeBudgets.where(i=>i.month===n&&i.category_id===r)[0];return o?u.financeBudgets.update(o.id,{amount:s}):u.financeBudgets.insert({user_login:"owner",month:n,category_id:r,amount:s}),N()}),d.post("/api/finance/savings-goal",async({request:t})=>{const e=await t.json(),r=typeof e.month=="string"&&/^\d{4}-\d{2}$/.test(e.month)?e.month:le(),s=Number(e.amount);return!Number.isFinite(s)||s<0?c.json({error:"amount must be >= 0"},{status:400}):(J(`savings_goal:${r}`,String(Math.round(s))),N())}),d.get("/api/finance/accounts",({request:t})=>c.json({items:Pe(new URL(t.url).searchParams.get("all")==="1")})),d.post("/api/finance/account",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim(),s=String(e.currency||"").trim();if(!r||!s)return c.json({error:"name and currency required"},{status:400});const n=u.financeAccounts.insert({user_login:"owner",name:r,type:e.type==="debt"?"debt":"asset",bucket:e.bucket?String(e.bucket):null,subtype:e.subtype?String(e.subtype):null,currency:s,archived:0,created_at:b()});return c.json({id:n.id})}),d.post("/api/finance/networth",async({request:t})=>{const e=await t.json(),r=Number(e.accountId),s=Number(e.amount);if(!Number.isFinite(r)||!Number.isFinite(s))return c.json({error:"accountId and amount required"},{status:400});const n=Pe(!0).find(h=>h.id===r);if(!n)return c.json({error:"account not found"},{status:404});const o=typeof e.date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e.date)?e.date:Ke(),i=u.financeNetworth.where(h=>h.date===o&&h.account_id===r)[0],a=e.currency?String(e.currency).toUpperCase():n.currency;return i?u.financeNetworth.update(i.id,{original_amount:s,original_currency:a}):u.financeNetworth.insert({user_login:"owner",date:o,account_id:r,original_amount:s,original_currency:a,notes:null,created_at:b()}),N()}),d.get("/api/finance/recurring",()=>{const t=new Map(P(!0).map(n=>[n.id,n.name])),e=new Map(P(!0).map(n=>[n.id,n.icon])),r=new Map(Pe(!0).map(n=>[n.id,n.name])),s=u.financeRecurring.all().map(n=>({...n,base:n.original_amount,baseCurrency:O(),category_name:n.category_id!=null?t.get(n.category_id)??null:null,category_icon:n.category_id!=null?e.get(n.category_id)??null:null,account_name:n.account_id!=null?r.get(n.account_id)??null:null}));return c.json({items:s})}),d.post("/api/finance/recurring",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim(),s=Number(e.amount);if(!r||!Number.isFinite(s)||s<=0)return c.json({error:"name and positive amount required"},{status:400});const n=e.type==="income"?"income":"expense";let o=null;if(n==="expense"&&e.category){const h=P(!0).find(l=>l.name.toLowerCase()===String(e.category).toLowerCase());o=h?h.id:u.financeCategories.insert({user_login:"owner",name:String(e.category),icon:null,active:1,display_order:P(!0).length,created_at:b()}).id}else e.categoryId!=null&&(o=Number(e.categoryId));const i=typeof e.start=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e.start)?e.start:Ke(),a=u.financeRecurring.insert({user_login:"owner",name:r,type:n,category_id:o,account_id:null,frequency:e.frequency==="weekly"||e.frequency==="quarterly"||e.frequency==="yearly"?e.frequency:"monthly",original_amount:s,original_currency:String(e.currency||O()),start_date:i,end_date:typeof e.end=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e.end)?e.end:null,last_fired_period:null,notes:null,created_at:b()});return c.json({id:a.id})}),d.patch("/api/finance/recurring/:id",async({params:t,request:e})=>{const r=await e.json(),s={};return typeof r.name=="string"&&r.name.trim()&&(s.name=r.name.trim()),(r.type==="income"||r.type==="expense")&&(s.type=r.type),r.amount!=null&&Number.isFinite(Number(r.amount))&&(s.original_amount=Number(r.amount)),typeof r.currency=="string"&&r.currency.trim()&&(s.original_currency=r.currency.toUpperCase().trim()),(r.frequency==="weekly"||r.frequency==="monthly"||r.frequency==="quarterly"||r.frequency==="yearly")&&(s.frequency=r.frequency),typeof r.start=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(r.start)&&(s.start_date=r.start),"end"in r&&(s.end_date=typeof r.end=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(r.end)?r.end:null),u.financeRecurring.update(Number(t.id),s),N()}),d.delete("/api/finance/recurring/:id",({params:t})=>(u.financeRecurring.remove(Number(t.id)),N()))],q=()=>c.json({ok:!0}),K=t=>t!=null&&String(t).trim()?String(t).trim():null,Kn=t=>u.actions.where(e=>e.person_id===t&&e.done===0).length,Vn=[d.post("/api/circle/focus",()=>q()),d.get("/api/circle",({request:t})=>{const e=new URL(t.url).searchParams.get("circle"),r=u.circles.where(o=>o.active===1).sort((o,i)=>o.sort_order-i.sort_order||o.id-i.id);let s=u.people.all();if(e){const o=r.find(i=>i.name.toLowerCase()===e.toLowerCase())?.id;s=s.filter(i=>i.circle_id===o)}const n=s.sort((o,i)=>o.name.localeCompare(i.name)).map(o=>({...o,open_actions:Kn(o.id)}));return c.json({circles:r,people:n,pending_count:0})}),d.post("/api/circle/person",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim();if(!r)return c.json({error:"name is required"},{status:400});const s=e.circle?u.circles.all().find(i=>i.name.toLowerCase()===String(e.circle).toLowerCase())?.id??null:null,n=b(),o=u.people.insert({user_login:$,name:r,circle_id:s,photo:typeof e.photo=="string"?e.photo:null,title:K(e.title),company:K(e.company),location:K(e.location),email:K(e.email),phone:K(e.phone),tags:Array.isArray(e.tags)?JSON.stringify(e.tags.map(String)):null,bio:K(e.bio),next_meet_date:null,next_meet_notify:0,last_talked_at:null,last_met_at:null,created_at:n,updated_at:n});return c.json({id:o.id})}),d.get("/api/circle/person/:id",({params:t})=>{const e=u.people.get(Number(t.id));if(!e)return c.json({error:"not found"},{status:404});const r=e.circle_id?u.circles.get(e.circle_id):null;return c.json({person:{...e,circle_name:r?.name??null,facts:u.facts.where(s=>s.person_id===e.id).sort((s,n)=>s.sort_order-n.sort_order),notes:u.notes.where(s=>s.person_id===e.id).sort((s,n)=>(n.occurred_on||"").localeCompare(s.occurred_on||"")||n.created_at-s.created_at),actions:u.actions.where(s=>s.person_id===e.id).sort((s,n)=>s.done-n.done||n.created_at-s.created_at)}})}),d.patch("/api/circle/person/:id",async({params:t,request:e})=>{const r=Number(t.id),s=await e.json(),n={updated_at:b()};for(const o of["name","title","company","location","email","phone","bio"])o in s&&(n[o]=s[o]==null?null:String(s[o]));return"photo"in s&&(n.photo=s.photo==null?null:String(s.photo)),"tags"in s&&(n.tags=Array.isArray(s.tags)?JSON.stringify(s.tags.map(String)):null),"circle"in s&&(n.circle_id=s.circle==null?null:u.circles.all().find(o=>o.name.toLowerCase()===String(s.circle).toLowerCase())?.id??null),"circle_id"in s&&(n.circle_id=s.circle_id==null?null:Number(s.circle_id)),"next_meet_date"in s&&(n.next_meet_date=s.next_meet_date==null?null:String(s.next_meet_date)),"next_meet_notify"in s&&(n.next_meet_notify=s.next_meet_notify?1:0),"last_met_date"in s&&typeof s.last_met_date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(s.last_met_date)&&(n.last_met_at=Math.floor(new Date(s.last_met_date+"T12:00:00").getTime()/1e3)),"last_met_at"in s&&(n.last_met_at=s.last_met_at==null?null:Number(s.last_met_at)),"last_talked_at"in s&&(n.last_talked_at=s.last_talked_at==null?null:Number(s.last_talked_at)),u.people.update(r,n),q()}),d.delete("/api/circle/person/:id",({params:t})=>{const e=Number(t.id);return u.facts.where(r=>r.person_id===e).forEach(r=>u.facts.remove(r.id)),u.notes.where(r=>r.person_id===e).forEach(r=>u.notes.remove(r.id)),u.actions.where(r=>r.person_id===e).forEach(r=>u.actions.remove(r.id)),u.people.remove(e),q()}),d.post("/api/circle/person/:id/photo-url",async({params:t,request:e})=>{const r=await e.json(),s=String(r.url||"").trim();return/^https?:\/\/.+/i.test(s)?(u.people.update(Number(t.id),{photo:s}),q()):c.json({error:"need an http(s) image url"},{status:400})}),d.post("/api/circle/person/:id/fact",async({params:t,request:e})=>{const r=await e.json(),s=String(r.value||"").trim();if(!s)return c.json({error:"value is required"},{status:400});const n=Number(t.id),o=u.facts.where(h=>h.person_id===n).reduce((h,l)=>Math.max(h,l.sort_order),-1),i=b(),a=u.facts.insert({user_login:$,person_id:n,label:r.label==null?null:String(r.label),value:s,sort_order:o+1,created_at:i,updated_at:i});return c.json({id:a.id})}),d.patch("/api/circle/fact/:id",async({params:t,request:e})=>{const r=await e.json(),s={updated_at:b()};return"label"in r&&(s.label=r.label==null?null:String(r.label)),"value"in r&&(s.value=String(r.value??"")),u.facts.update(Number(t.id),s),q()}),d.delete("/api/circle/fact/:id",({params:t})=>(u.facts.remove(Number(t.id)),q())),d.post("/api/circle/person/:id/note",async({params:t,request:e})=>{const r=await e.json(),s=String(r.body||"").trim();if(!s)return c.json({error:"body is required"},{status:400});const n=u.notes.insert({user_login:$,person_id:Number(t.id),kind:r.kind==="diary"?"diary":"talk",title:r.title==null?null:String(r.title),body:s,occurred_on:r.date==null?null:String(r.date),created_at:b()});return c.json({id:n.id})}),d.patch("/api/circle/note/:id",async({params:t,request:e})=>{const r=await e.json(),s={};return"title"in r&&(s.title=r.title==null?null:String(r.title)),"body"in r&&(s.body=String(r.body??"")),(r.kind==="talk"||r.kind==="diary")&&(s.kind=r.kind),"date"in r&&(s.occurred_on=r.date==null?null:String(r.date)),u.notes.update(Number(t.id),s),q()}),d.delete("/api/circle/note/:id",({params:t})=>(u.notes.remove(Number(t.id)),q())),d.post("/api/circle/person/:id/action",async({params:t,request:e})=>{const r=await e.json(),s=String(r.body||"").trim();if(!s)return c.json({error:"body is required"},{status:400});const n=u.actions.insert({user_login:$,person_id:Number(t.id),body:s,done:0,created_at:b(),done_at:null});return c.json({id:n.id})}),d.patch("/api/circle/action/:id",async({params:t,request:e})=>{const r=await e.json();if("body"in r)u.actions.update(Number(t.id),{body:String(r.body??"").trim()});else{const s=r.done!==!1&&r.done!=="false"&&r.done!==0;u.actions.update(Number(t.id),{done:s?1:0,done_at:s?b():null})}return q()}),d.delete("/api/circle/action/:id",({params:t})=>(u.actions.remove(Number(t.id)),q())),d.post("/api/circle/circle",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim();if(!r)return c.json({error:"name is required"},{status:400});const s=u.circles.all().find(i=>i.name.toLowerCase()===r.toLowerCase());if(s)return s.active||u.circles.update(s.id,{active:1}),c.json({id:s.id});const n=u.circles.all().reduce((i,a)=>Math.max(i,a.sort_order),-1),o=u.circles.insert({user_login:$,name:r,sort_order:n+1,active:1,created_at:b()});return c.json({id:o.id})}),d.post("/api/circle/circles/reorder",async({request:t})=>{const e=await t.json();return(Array.isArray(e.orderedIds)?e.orderedIds.map(Number):[]).forEach((s,n)=>u.circles.update(s,{sort_order:n})),q()}),d.patch("/api/circle/circle/:id",async({params:t,request:e})=>{const r=await e.json();return typeof r.name=="string"&&r.name.trim()&&u.circles.update(Number(t.id),{name:r.name.trim()}),q()}),d.delete("/api/circle/circle/:id",({params:t})=>(u.circles.update(Number(t.id),{active:0}),q())),d.get("/api/circle/pending",()=>c.json({pending:[],people:u.people.all()})),d.post("/api/circle/pending/:id/confirm",()=>c.json({ok:!0})),d.delete("/api/circle/pending/:id",()=>q())],Xn=[..._n,...kr,...jn,...Mn,...Pn,...Hn,...Fn,...Jn,...Vn],eo=xn(...Xn);async function yo(){await eo.start({onUnhandledRequest(t,e){new URL(t.url).pathname.startsWith("/api/")&&e.warning()},quiet:!0,serviceWorker:{url:"/mockServiceWorker.js"}})}export{yo as startMocks,eo as worker};
