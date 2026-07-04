import{i as q,d as v,g as Hr,c as Ur,b as ar,t as $r,a as gt,I as Br,B as Fr,R as Qr,H as l,h as c,e as zr}from"./goals-DLEEB0ju.js";import{OWNER_LOGIN as K,t as h}from"./tables-DD_K1TY9.js";import{kv as ee,now as w,Table as pe}from"./db-2zuKG1Uw.js";var Pt=class{#e;#t;constructor(){this.#e=[],this.#t=new Map}get[Symbol.iterator](){return this.#e[Symbol.iterator].bind(this.#e)}entries(){return this.#t.entries()}get(e){return this.#t.get(e)||[]}getAll(){return this.#e.map(([,e])=>e)}append(e,r){this.#e.push([e,r]),this.#s(e,s=>s.push(r))}prepend(e,r){this.#e.unshift([e,r]),this.#s(e,s=>s.unshift(r))}delete(e,r){if(this.size===0)return!1;const s=this.#t.get(e);if(!s)return!1;const n=s.indexOf(r);return n===-1?!1:(s.splice(n,1),this.#e.splice(this.#e.findIndex(o=>o[0]===e&&o[1]===r),1),!0)}deleteAll(e){this.size!==0&&(this.#e=this.#e.filter(r=>r[0]!==e),this.#t.delete(e))}get size(){return this.#e.length}clear(){this.size!==0&&(this.#e.length=0,this.#t.clear())}#s(e,r){r(this.#t.get(e)||this.#t.set(e,[]).get(e))}};const Te=Symbol("kDefaultPrevented"),z=Symbol("kPropagationStopped"),Se=Symbol("kImmediatePropagationStopped");var fe=class extends MessageEvent{#e;[Te];[z];[Se];constructor(...e){super(e[0],e[1]),this[Te]=!1}get defaultPrevented(){return this[Te]}preventDefault(){super.preventDefault(),this[Te]=!0}stopImmediatePropagation(){super.stopImmediatePropagation(),this[Se]=!0}},vt=class{#e;#t;#s;#n;#r;#a;#o;hooks;constructor(){this.#e=new Pt,this.#t=new WeakMap,this.#s=new WeakMap,this.#n=new WeakSet,this.#r=new Pt,this.#a=new WeakMap,this.#o=new WeakMap,this.hooks={on:(e,r,s)=>{if(!s?.signal?.aborted){if(s?.once){const n=r,o=((...i)=>(this.#i(e,o),n(...i)));r=o}if(this.#r.append(e,r),s&&this.#a.set(r,s),s?.signal){const{signal:n}=s,o=()=>{this.#i(e,r)};n.addEventListener("abort",o,{once:!0}),this.#o.set(r,()=>{n.removeEventListener("abort",o)})}}},removeListener:(e,r)=>{this.#i(e,r)}}}#i(e,r){this.#r.delete(e,r);const s=this.#o.get(r);s&&(s(),this.#o.delete(r))}#h(e,r){const s=this.#e.delete(e,r),n=this.#s.get(r);return n&&(n(),this.#s.delete(r)),s}on(e,r,s){return this.#p(e,r,s),this}once(e,r,s){return this.on(e,r,{...s||{},once:!0})}earlyOn(e,r,s){return this.#p(e,r,s,"prepend"),this}earlyOnce(e,r,s){return this.earlyOn(e,r,{...s||{},once:!0})}emit(e){if(this.#e.size===0)return!1;const r=this.listenerCount(e.type)>0,s=this.#l(e);for(const n of this.#d(e.type)){if(s.event[z]!=null&&s.event[z]!==this)return s.revoke(),!1;if(s.event[Se])break;this.#c(s.event,n)}return s.revoke(),r}async emitAsPromise(e){if(this.#e.size===0)return[];const r=[],s=this.#l(e);for(const n of this.#d(e.type)){if(s.event[z]!=null&&s.event[z]!==this)return s.revoke(),[];if(s.event[Se])break;const o=await Promise.resolve(this.#c(s.event,n));this.#u(n)||r.push(o)}return s.revoke(),Promise.allSettled(r).then(n=>n.map(o=>o.status==="fulfilled"?o.value:o.reason))}*emitAsGenerator(e){if(this.#e.size===0)return;const r=this.#l(e);for(const s of this.#d(e.type)){if(r.event[z]!=null&&r.event[z]!==this){r.revoke();return}if(r.event[Se])break;const n=this.#c(r.event,s);this.#u(s)||(yield n)}r.revoke()}removeListener(e,r){const s=this.#t.get(r);if(this.#h(e,r))for(const n of this.#r.get("removeListener").slice())n(e,r,s)}removeAllListeners(e){if(e==null){for(const[s,n]of this.#e.entries())for(;n.length>0;)this.removeListener(s,n[0]);for(const[s,n]of[...this.#r])this.#a.get(n)?.persist||this.#i(s,n);return}const r=this.listeners(e);for(;r.length>0;)this.removeListener(e,r[0])}listeners(e){return e==null?this.#e.getAll():this.#e.get(e)}listenerCount(e){return e==null?this.#e.size:this.listeners(e).length}#p(e,r,s,n="append"){if(!s?.signal?.aborted){for(const o of this.#r.get("newListener").slice())o(e,r,s);if(e==="*"&&this.#n.add(r),n==="prepend"?this.#e.prepend(e,r):this.#e.append(e,r),s&&(this.#t.set(r,s),s.signal)){const{signal:o}=s,i=()=>{this.removeListener(e,r)};o.addEventListener("abort",i,{once:!0}),this.#s.set(r,()=>{o.removeEventListener("abort",i)})}}}#l(e){const{stopPropagation:r}=e;return e.stopPropagation=()=>{e[z]=this,r.call(e)},{event:e,revoke(){e.stopPropagation=r}}}#c(e,r){for(const o of this.#r.get("beforeEmit").slice())if(o(e)===!1)return;const s=r.call(this,e),n=this.#t.get(r);if(n?.once){const o=this.#u(r)?"*":e.type;if(this.#h(o,r))for(const i of this.#r.get("removeListener").slice())i(o,r,n)}return s}*#d(e){const r=[];for(const[s,n]of this.#e)(s==="*"||s===e)&&r.push(n);yield*r}#u(e){return this.#n.has(e)}};function Zr(){const t=(e,r)=>{t.state="pending",t.resolve=s=>{if(t.state!=="pending")return;t.result=s;const n=o=>(t.state="fulfilled",o);return e(s instanceof Promise?s:Promise.resolve(s).then(n))},t.reject=s=>{if(t.state==="pending")return queueMicrotask(()=>{t.state="rejected"}),r(t.rejectionReason=s)}};return t}var Yr=class extends Promise{#e;resolve;reject;constructor(e=null){const r=Zr();super((s,n)=>{r(s,n),e?.(r.resolve,r.reject)}),this.#e=r,this.resolve=this.#e.resolve,this.reject=this.#e.reject}get state(){return this.#e.state}get rejectionReason(){return this.#e.rejectionReason}then(e,r){return this.#t(super.then(e,r))}catch(e){return this.#t(super.catch(e))}finally(e){return this.#t(super.finally(e))}#t(e){return Object.defineProperties(e,{resolve:{configurable:!0,value:this.resolve},reject:{configurable:!0,value:this.reject}})}};function lr(t){if(typeof t=="string")return lr(new URL(t,typeof location<"u"?location.href:void 0));if(t.protocol==="http:"?t.protocol="ws:":t.protocol==="https:"&&(t.protocol="wss:"),t.protocol!=="ws:"&&t.protocol!=="wss:")throw new SyntaxError(`Failed to construct 'WebSocket': The URL's scheme must be either 'http', 'https', 'ws', or 'wss'. '${t.protocol}' is not allowed.`);if(t.hash!=="")throw new SyntaxError(`Failed to construct 'WebSocket': The URL contains a fragment identifier ('${t.hash}'). Fragment identifiers are not allowed in WebSocket URLs.`);return t.href}function Jr(t){return t!=null&&typeof t=="object"&&!Array.isArray(t)}const Kr=Symbol("kConnect"),Xr=Symbol("kAutoConnect"),Vr=Symbol("kSiblingHandlers");function es(t){return Reflect.get(t,Vr)||[]}function st(t){const e={},r=(s,n)=>{const o=e[s]||=[];o.includes(n)||o.push(n)};for(const s of t){r(s.kind,s);for(const n of es(s))r(n.kind,n)}return e}class cr{getInitialState(e){q(this.#e(e),v.formatMessage("Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?"));const r=st(e);return{initialHandlers:r,handlers:{...r}}}currentHandlers(){return Object.values(this.getState().handlers).flat().filter(e=>e!=null)}getHandlersByKind(e){return this.getState().handlers[e]||[]}use(e){if(q(this.#e(e),v.formatMessage('[MSW] Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?')),e.length===0)return;const{handlers:r}=this.getState(),s=st(e);for(const n in s){const o=s[n],i=r[n];r[n]=i?[...o,...i]:o}this.setState({handlers:r})}reset(e){q(e.length>0?this.#e(e):!0,v.formatMessage("Failed to replace initial handlers during reset: invalid handlers. Did you forget to spread the handlers array?"));for(const n of this.currentHandlers())"reset"in n&&n.reset();const{initialHandlers:r}=this.getState();if(e.length===0){this.setState({handlers:{...r}});return}const s=st(e);this.setState({initialHandlers:s,handlers:{...s}})}restore(){for(const e of this.currentHandlers())"restore"in e&&e.restore()}#e(e){return e.every(r=>!Array.isArray(r))}}class ts extends cr{#e;#t;constructor(e){super();const r=this.getInitialState(e);this.#t=r.initialHandlers,this.#e=r.handlers}getState(){return{initialHandlers:this.#t,handlers:this.#e}}setState(e){e.initialHandlers&&(this.#t=e.initialHandlers),e.handlers&&(this.#e=e.handlers)}}class rs{subscriptions=[];dispose(){let e;const r=[];for(;e=this.subscriptions.shift();)try{e()}catch(s){s instanceof Error&&r.push(s)}r.length>0&&console.error(new AggregateError(r,v.formatMessage("Failed to dispose of some side effects. This is likely an issue with MSW, please report it on GitHub: https://github.com/mswjs/msw/issues")))}}function ss(t){const e=[...t];return Object.freeze(e),e}const ns=async({request:t,requestId:e,handlers:r,resolutionContext:s})=>{let n=null,o=null;for(const i of r)if(o=await i.run({request:t,requestId:e,resolutionContext:s}),o!==null&&(n=i),o?.response)break;return n?{handler:n,parsedResult:o?.parsedResult,response:o?.response}:null};async function os(t){try{return[null,await t().catch(e=>{throw e})]}catch(e){return[e,null]}}function is(t){const e=new URL(t.url);return e.protocol==="file:"||/(fonts\.googleapis\.com)/.test(e.hostname)||/node_modules/.test(e.pathname)||e.pathname.includes("@vite")?!0:/\.(s?css|less|m?jsx?|m?tsx?|html|ttf|otf|woff|woff2|eot|gif|jpe?g|png|avif|webp|svg|mp4|webm|ogg|mov|mp3|wav|ogg|flac|aac|pdf|txt|csv|json|xml|md|zip|tar|gz|rar|7z)$/i.test(e.pathname)}async function as(t,e){const r=Hr(e);r&&await Ur.setCookie(r,t.url)}class dr{constructor(e,r){this.protocol=e,this.data=r,this.events=new vt}events}class ls extends fe{frame;constructor(e,r){super(e,{}),this.frame=r}}class kt{emitter;constructor(){this.emitter=new vt}async queue(e){await this.emitter.emitAsPromise(new ls("frame",e))}on(e,r,s){this.emitter.on(e,r,s)}disable(){this.emitter.removeAllListeners()}}const cs="x-msw-intention";function ds(t){return!!t.headers.get("accept")?.includes("msw/passthrough")}function us(t){return t.status===302&&t.headers.get(cs)==="passthrough"}function hs(t){const e=t.headers.get("accept");if(e){const r=e.replace(/(,\s+)?msw\/passthrough/,"");r?t.headers.set("accept",r):t.headers.delete("accept")}}class B extends fe{requestId;request;constructor(e,r){super(e,{}),this.requestId=r.requestId,this.request=r.request}}class ur extends fe{requestId;request;response;constructor(e,r){super(e,{}),this.requestId=r.requestId,this.request=r.request,this.response=r.response}}class ps extends fe{error;requestId;request;constructor(e,r){super(e,{}),this.error=r.error,this.requestId=r.requestId,this.request=r.request}}class Xe extends dr{constructor(e){const r=e.id||ar();super("http",{id:r,request:e.request})}getHandlers(e){return e.getHandlersByKind("request")}async getUnhandledMessage(){const{request:e}=this.data,r=new URL(e.url),s=$r(r)+r.search,n=e.body==null?null:await e.clone().text();return`intercepted a request without a matching request handler:${`

  • ${e.method} ${s}

${n?`  • Request body: ${n}

`:""}`}If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`}async resolve(e,r,s){const{id:n,request:o}=this.data,i=s?.quiet?null:o.clone();if(this.events.emit(new B("request:start",{requestId:n,request:o})),ds(o))return this.events.emit(new B("request:end",{requestId:n,request:o})),this.passthrough(),null;const[a,u]=await os(()=>ns({requestId:n,request:o,handlers:e,resolutionContext:{baseUrl:s?.baseUrl?.toString(),quiet:s?.quiet}}));if(a!=null)return this.events.emit(new ps("unhandledException",{error:a,requestId:n,request:o}))||(console.error(a),v.error('Encountered an unhandled exception during the handler lookup for "%s %s". Please see the original error above.',o.method,o.url)),this.errorWith(a),null;if(u==null)return this.events.emit(new B("request:unhandled",{requestId:n,request:o})),await Ye(this,r).then(()=>this.passthrough(),y=>this.errorWith(y)),this.events.emit(new B("request:end",{requestId:n,request:o})),!1;const{response:d,handler:g,parsedResult:p}=u;if(this.events.emit(new B("request:match",{requestId:n,request:o})),d==null)return this.events.emit(new B("request:end",{requestId:n,request:o})),this.passthrough(),null;if(us(d))return this.events.emit(new B("request:end",{requestId:n,request:o})),this.passthrough(),null;const f=s?.quiet?null:d.clone();return await as(o,d),this.respondWith(d),this.events.emit(new B("request:end",{requestId:n,request:o})),s?.quiet||g.log({request:i,response:f,parsedResult:p}),!0}}async function Ye(t,e){const r=async n=>{if(n==="bypass")return;const o=await t.getUnhandledMessage();switch(n){case"warn":return v.warn("Warning: %s",o);case"error":return v.error("Error: %s",o)}},s=async n=>{if(q.as(gt,n==="bypass"||n==="warn"||n==="error",v.formatMessage('Failed to react to an unhandled network frame: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',n)),n!=="bypass"&&(await r(n),n==="error"))return Promise.reject(new gt(v.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.')))};if(typeof e=="function")return e({frame:t,defaults:{warn:r.bind(null,"warn"),error:r.bind(null,"error")}});if(!(t instanceof Xe&&is(t.data.request)))return s(e)}function Mt(t){const e=[];for(const r of t)r instanceof Promise&&e.push(r);if(e.length>0)return Promise.all(e).then(()=>{})}var mt=(t=>(t[t.DISABLED=0]="DISABLED",t[t.ENABLED=1]="ENABLED",t))(mt||{});function fs(t){let e=0;const r=new vt,s=new rs,n=a=>a instanceof cr?a:new ts(a||[]);let o={...t},i=n(o.handlers);return{get readyState(){return e},events:r,configure(a){q(e===0,'Failed to call "configure()" on the network: cannot configure an already enabled network.'),a.handlers&&!Object.is(a.handlers,o.handlers)&&(i=n(a.handlers)),o={...o,...a}},enable(){q(e===0,'Failed to call "enable" on the network: already enabled'),e=1;const a={active:!0};s.subscriptions.push(()=>{a.active=!1});const u=o.sources.map(d=>(kt.prototype.disable.call(d),d.on("frame",async({frame:g})=>{g.events.on("*",f=>{a.active&&r.emit(f)});const p=g.getHandlers(i);await g.resolve(p,o.onUnhandledFrame||"warn",o.context)}),d.enable()));return Mt(u)},disable(){return q(e===1,'Failed to call "disable" on the network: already disabled'),e=0,s.dispose(),Mt(o.sources.map(a=>a.disable()))},use(...a){i.use(a)},resetHandlers(...a){i.reset(a)},restoreHandlers(){i.restore()},listHandlers(){return ss(i.currentHandlers())}}}async function gs(t,e,...r){const s=t.listeners(e);if(s.length!==0)for(const n of s)await n.apply(t,r)}var ms=class{#e=new Map;applyPatch(t,e,r){const s=this.#e.get(t);q(!s?.has(e),`Failed to replace a global value at "${String(e)}": already replaced.`);const n=hr(t,e);if(typeof n>"u")return console.warn(`Failed to replace a global value at "${String(e)}": not a global value.`),()=>{};if(n.descriptor.configurable)Object.defineProperty(t,e,{value:r(t[e]),enumerable:!0,configurable:!0});else if(n.descriptor.writable)t[e]=r(t[e]);else throw new Error(`Failed to patch a non-configurable non-writable property "${e.toString()}"`);const o=()=>{const i=this.#e.get(t);i?.has(e)&&(n.owner===t?Object.defineProperty(n.owner,e,n.descriptor):Reflect.deleteProperty(t,e),i.delete(e),i.size===0&&this.#e.delete(t))};return s?s.set(e,o):this.#e.set(t,new Map([[e,o]])),o}restoreAllPatches(){const t=[];for(const[,e]of this.#e)for(const[,r]of e)try{r()}catch(s){if(s instanceof Error)t.push(s);else throw s}if(t.length>0)throw new AggregateError(t,"FOO!")}};const ys=new ms;function hr(t,e){let r=t,s;for(;r;){if(s=Object.getOwnPropertyDescriptor(r,e),s)return{owner:r,descriptor:s};r=Object.getPrototypeOf(r)}}function ws(t){const e=hr(globalThis,t);if(typeof e>"u")return!1;const{descriptor:r}=e;return typeof r.get=="function"&&typeof r.get()>"u"||typeof r.get>"u"&&r.value==null?!1:typeof r.set>"u"&&!r.configurable?(console.error(`[MSW] Failed to apply interceptor: the global \`${t}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`),!1):!0}function _(t,e){return Object.defineProperties(e,{target:{value:t,enumerable:!0,writable:!0},currentTarget:{value:t,enumerable:!0,writable:!0}}),e}const de=Symbol("kCancelable"),G=Symbol("kDefaultPrevented");var xt=class extends MessageEvent{constructor(e,r){super(e,r),this[de]=!!r.cancelable,this[G]=!1}get cancelable(){return this[de]}set cancelable(e){this[de]=e}get defaultPrevented(){return this[G]}set defaultPrevented(e){this[G]=e}preventDefault(){this.cancelable&&!this[G]&&(this[G]=!0)}},Ve=class extends Event{constructor(e,r={}){super(e,r),this.code=r.code===void 0?0:r.code,this.reason=r.reason===void 0?"":r.reason,this.wasClean=r.wasClean===void 0?!1:r.wasClean}},Tt=class extends Ve{constructor(e,r={}){super(e,r),this[de]=!!r.cancelable,this[G]=!1}get cancelable(){return this[de]}set cancelable(e){this[de]=e}get defaultPrevented(){return this[G]}set defaultPrevented(e){this[G]=e}preventDefault(){this.cancelable&&!this[G]&&(this[G]=!0)}};const ge=Symbol("kEmitter"),Oe=Symbol("kBoundListener");var bs=class{constructor(e,r){this.socket=e,this.transport=r,this.id=ar(),this.url=new URL(e.url),this[ge]=new EventTarget,this.transport.addEventListener("outgoing",s=>{const n=_(this.socket,new xt("message",{data:s.data,origin:s.origin,cancelable:!0}));this[ge].dispatchEvent(n),n.defaultPrevented&&s.preventDefault()}),this.transport.addEventListener("close",s=>{this[ge].dispatchEvent(_(this.socket,new Ve("close",s)))})}addEventListener(e,r,s){if(!Reflect.has(r,Oe)){const n=r.bind(this.socket);Object.defineProperty(r,Oe,{value:n,enumerable:!1,configurable:!1})}this[ge].addEventListener(e,Reflect.get(r,Oe),s)}removeEventListener(e,r,s){this[ge].removeEventListener(e,Reflect.get(r,Oe),s)}send(e){this.transport.send(e)}close(e,r){this.transport.close(e,r)}};const Ot="InvalidAccessError: close code out of user configurable range",Je=Symbol("kPassthroughPromise"),pr=Symbol("kOnSend"),qe=Symbol("kClose");var vs=class extends EventTarget{static{this.CONNECTING=0}static{this.OPEN=1}static{this.CLOSING=2}static{this.CLOSED=3}constructor(e,r){super(),this.CONNECTING=0,this.OPEN=1,this.CLOSING=2,this.CLOSED=3,this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null,this.url=lr(e),this.protocol="",this.extensions="",this.binaryType="blob",this.readyState=this.CONNECTING,this.bufferedAmount=0,this[Je]=new Yr,queueMicrotask(async()=>{await this[Je]||(this.protocol=typeof r=="string"?r:Array.isArray(r)&&r.length>0?r[0]:"",this.readyState===this.CONNECTING&&(this.readyState=this.OPEN,this.dispatchEvent(_(this,new Event("open")))))})}set onopen(e){this.removeEventListener("open",this._onopen),this._onopen=e,e!==null&&this.addEventListener("open",e)}get onopen(){return this._onopen}set onmessage(e){this.removeEventListener("message",this._onmessage),this._onmessage=e,e!==null&&this.addEventListener("message",e)}get onmessage(){return this._onmessage}set onerror(e){this.removeEventListener("error",this._onerror),this._onerror=e,e!==null&&this.addEventListener("error",e)}get onerror(){return this._onerror}set onclose(e){this.removeEventListener("close",this._onclose),this._onclose=e,e!==null&&this.addEventListener("close",e)}get onclose(){return this._onclose}send(e){if(this.readyState===this.CONNECTING)throw this.close(),new DOMException("InvalidStateError");this.readyState===this.CLOSING||this.readyState===this.CLOSED||(this.bufferedAmount+=ks(e),queueMicrotask(()=>{this.bufferedAmount=0,this[pr]?.(e)}))}close(e=1e3,r){q(e,Ot),q(e===1e3||e>=3e3&&e<=4999,Ot),this[qe](e,r)}[qe](e=1e3,r,s=!0){this.readyState===this.CLOSING||this.readyState===this.CLOSED||(this.readyState=this.CLOSING,queueMicrotask(()=>{this.readyState=this.CLOSED,this.dispatchEvent(_(this,new Ve("close",{code:e,reason:r,wasClean:s}))),this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null}))}addEventListener(e,r,s){return super.addEventListener(e,r,s)}removeEventListener(e,r,s){return super.removeEventListener(e,r,s)}};function ks(t){return typeof t=="string"?t.length:t instanceof Blob?t.size:t.byteLength}const F=Symbol("kEmitter"),Ie=Symbol("kBoundListener"),nt=Symbol("kSend");var xs=class{constructor(e,r,s){this.client=e,this.transport=r,this.createConnection=s,this[F]=new EventTarget,this.mockCloseController=new AbortController,this.realCloseController=new AbortController,this.transport.addEventListener("outgoing",n=>{typeof this.realWebSocket>"u"||queueMicrotask(()=>{n.defaultPrevented||this[nt](n.data)})}),this.transport.addEventListener("incoming",this.handleIncomingMessage.bind(this))}get socket(){return q(this.realWebSocket,'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?'),this.realWebSocket}connect(){q(!this.realWebSocket||this.realWebSocket.readyState!==WebSocket.OPEN,'Failed to call "connect()" on the original WebSocket instance: the connection already open');const e=this.createConnection();e.binaryType=this.client.binaryType,e.addEventListener("open",r=>{this[F].dispatchEvent(_(this.realWebSocket,new Event("open",r)))},{once:!0}),e.addEventListener("message",r=>{this.transport.dispatchEvent(_(this.realWebSocket,new MessageEvent("incoming",{data:r.data,origin:r.origin})))}),this.client.addEventListener("close",r=>{this.handleMockClose(r)},{signal:this.mockCloseController.signal}),e.addEventListener("close",r=>{this.handleRealClose(r)},{signal:this.realCloseController.signal}),e.addEventListener("error",()=>{const r=_(e,new Event("error",{cancelable:!0}));this[F].dispatchEvent(r),r.defaultPrevented||this.client.dispatchEvent(_(this.client,new Event("error")))}),this.realWebSocket=e}addEventListener(e,r,s){if(!Reflect.has(r,Ie)){const n=r.bind(this.client);Object.defineProperty(r,Ie,{value:n,enumerable:!1})}this[F].addEventListener(e,Reflect.get(r,Ie),s)}removeEventListener(e,r,s){this[F].removeEventListener(e,Reflect.get(r,Ie),s)}send(e){this[nt](e)}[nt](e){const{realWebSocket:r}=this;if(q(r,'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?',this.client.url),!(r.readyState===WebSocket.CLOSING||r.readyState===WebSocket.CLOSED)){if(r.readyState===WebSocket.CONNECTING){r.addEventListener("open",()=>{r.send(e)},{once:!0});return}r.send(e)}}close(){const{realWebSocket:e}=this;q(e,'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?',this.client.url),this.realCloseController.abort(),!(e.readyState===WebSocket.CLOSING||e.readyState===WebSocket.CLOSED)&&(e.close(),queueMicrotask(()=>{this[F].dispatchEvent(_(this.realWebSocket,new Tt("close",{code:1e3,cancelable:!0})))}))}handleIncomingMessage(e){const r=_(e.target,new xt("message",{data:e.data,origin:e.origin,cancelable:!0}));this[F].dispatchEvent(r),r.defaultPrevented||this.client.dispatchEvent(_(this.client,new MessageEvent("message",{data:e.data,origin:e.origin})))}handleMockClose(e){this.realWebSocket&&this.realWebSocket.close()}handleRealClose(e){this.mockCloseController.abort();const r=_(this.realWebSocket,new Tt("close",{code:e.code,reason:e.reason,wasClean:e.wasClean,cancelable:!0}));this[F].dispatchEvent(r),r.defaultPrevented||this.client[qe](e.code,e.reason)}},Ss=class extends EventTarget{constructor(e){super(),this.socket=e,this.socket.addEventListener("close",r=>{this.dispatchEvent(_(this.socket,new Ve("close",r)))}),this.socket[pr]=r=>{this.dispatchEvent(_(this.socket,new xt("outgoing",{data:r,origin:this.socket.url,cancelable:!0})))}}addEventListener(e,r,s){return super.addEventListener(e,r,s)}dispatchEvent(e){return super.dispatchEvent(e)}send(e){queueMicrotask(()=>{if(this.socket.readyState===this.socket.CLOSING||this.socket.readyState===this.socket.CLOSED)return;const r=()=>{this.socket.dispatchEvent(_(this.socket,new MessageEvent("message",{data:e,origin:this.socket.url})))};this.socket.readyState===this.socket.CONNECTING?this.socket.addEventListener("open",()=>{r()},{once:!0}):r()})}close(e,r){this.socket[qe](e,r)}};(class fr extends Br{static{this.symbol=Symbol.for("websocket-interceptor")}constructor(){super(fr.symbol)}checkEnvironment(){return ws("WebSocket")}setup(){const e=this.logger.extend("setup"),r=new Proxy(globalThis.WebSocket,{construct:(s,n,o)=>{const[i,a]=n,u=()=>Reflect.construct(s,n,o),d=new vs(i,a),g=new Ss(d);return queueMicrotask(async()=>{try{const p=new xs(d,g,u),f=this.emitter.listenerCount("connection")>0;await gs(this.emitter,"connection",{client:new bs(d,g),server:p,info:{protocols:a}}),f?d[Je].resolve(!1):(d[Je].resolve(!0),p.connect(),p.addEventListener("open",()=>{d.dispatchEvent(_(d,new Event("open"))),p.realWebSocket&&(d.protocol=p.realWebSocket.protocol)}))}catch(p){p instanceof Error&&(d.dispatchEvent(new Event("error")),d.readyState!==WebSocket.CLOSING&&d.readyState!==WebSocket.CLOSED&&d[qe](1011,p.message,!1),console.error(p))}}),d}});e.info("patching global WebSocket..."),this.subscriptions.push(ys.applyPatch(globalThis,"WebSocket",()=>r)),e.info("global WebSocket patched!",globalThis.WebSocket.name)}});class _s extends fe{url;protocols;constructor(e,r){super(e,{}),this.url=r.url,this.protocols=r.protocols}}class Ls extends fe{url;protocols;error;constructor(e,r){super(e,{}),this.url=r.url,this.protocols=r.protocols,this.error=r.error}}class gr extends dr{constructor(e){super("ws",{connection:e.connection})}getHandlers(e){return e.getHandlersByKind("websocket")}async resolve(e,r,s){const{connection:n}=this.data;if(this.events.emit(new _s("connection",{url:n.client.url,protocols:n.info.protocols})),e.length===0)return await Ye(this,r).then(()=>this.passthrough(),i=>this.errorWith(i)),!1;let o=!1;for(const i of e){const a=await i.run(n,{baseUrl:s?.baseUrl?.toString(),[Xr]:!1});if(!a)continue;o=!0;const u=s?.quiet?void 0:i.log(n);try{i[Kr](a)||u?.()}catch(d){throw this.events.emit(new Ls("unhandledException",{error:d,url:n.client.url,protocols:n.info.protocols}))||(console.error(d),v.error('Encountered an unhandled exception during the handler lookup for "%s". Please see the original error above.',n.client.url)),d}}return o?!0:(await Ye(this,r).then(()=>this.passthrough(),i=>this.errorWith(i)),!1)}async getUnhandledMessage(){const{connection:e}=this.data;return`intercepted a WebSocket connection without a matching event handler:${`

  • ${e.client.url}

`}If you still wish to intercept this unhandled connection, please create an event handler for it.
Read more: https://mswjs.io/docs/websocket`}}class mr extends kt{#e;#t;constructor(e){super(),this.#e=new Fr({name:"interceptor-source",interceptors:e.interceptors}),this.#t=new Map}enable(){this.#e.apply(),this.#e.on("request",this.#s.bind(this)).on("response",this.#n.bind(this)).on("connection",this.#r.bind(this))}disable(){super.disable(),this.#e.dispose(),this.#t.clear()}async#s({requestId:e,request:r,controller:s}){const n=new Es({id:e,request:r,controller:s});this.#t.set(e,n),await this.queue(n)}async#n({requestId:e,request:r,response:s,isMockedResponse:n}){const o=this.#t.get(e);this.#t.delete(e),o!=null&&queueMicrotask(()=>{try{o.events.emit(new ur(n?"response:mocked":"response:bypass",{requestId:e,request:r,response:s}))}finally{o.events.removeAllListeners()}})}async#r(e){await this.queue(new qs({connection:e}))}}class Es extends Xe{#e;constructor(e){super({id:e.id,request:e.request}),this.#e=e.controller}passthrough(){hs(this.data.request)}respondWith(e){e&&this.#e.respondWith(e)}errorWith(e){if(e instanceof Response)return this.respondWith(e);throw e instanceof gt&&this.#e.errorWith(e),e}}class qs extends gr{constructor(e){super({connection:e.connection}),e.connection.client.addEventListener("close",()=>{this.events.removeAllListeners()},{once:!0})}errorWith(e){if(e instanceof Error){const{client:r}=this.data.connection,s=new Event("error");Object.defineProperty(s,"cause",{enumerable:!0,configurable:!1,value:e}),r.socket.dispatchEvent(s)}}passthrough(){this.data.connection.server.connect()}}function Cs(t){return({frame:e,defaults:r})=>{const s=t();if(s!=null){if(typeof s=="function"){const n=e instanceof Xe?e.data.request:e instanceof gr?new Request(e.data.connection.client.url,{headers:{connection:"upgrade",upgrade:"websocket"}}):null;return q(n!=null,'Failed to coerce a network frame to a legacy `onUnhandledRequest` strategy: unknown frame protocol "%s"',e.protocol),s(n,{warning:r.warn,error:r.error})}return Ye(e,s)}}}function js(t){return{status:t.status,statusText:t.statusText,headers:Object.fromEntries(t.headers.entries())}}var Rs={},Ps=/(%?)(%([sdijo]))/g;function Ms(t,e){switch(e){case"s":return t;case"d":case"i":return Number(t);case"j":return JSON.stringify(t);case"o":{if(typeof t=="string")return t;const r=JSON.stringify(t);return r==="{}"||r==="[]"||/^\[object .+?\]$/.test(r)?t:r}}}function Pe(t,...e){if(e.length===0)return t;let r=0,s=t.replace(Ps,(n,o,i,a)=>{const u=e[r],d=Ms(u,a);return o?n:(r++,d)});return r<e.length&&(s+=` ${e.slice(r).join(" ")}`),s=s.replace(/%{2,2}/g,"%"),s}var Ts=2;function Os(t){if(!t.stack)return;const e=t.stack.split(`
`);e.splice(1,Ts),t.stack=e.join(`
`)}var Is=class extends Error{constructor(t,...e){super(t),this.message=t,this.name="Invariant Violation",this.message=Pe(t,...e),Os(this)}},x=(t,e,...r)=>{if(!t)throw new Is(e,...r)};x.as=(t,e,r,...s)=>{if(!e){const n=s.length===0?r:Pe(r,...s);let o;try{o=Reflect.construct(t,[n])}catch{o=t(n)}throw o}};function St(){if(typeof navigator<"u"&&navigator.product==="ReactNative")return!0;if(typeof process<"u"){const t=process.type;return t==="renderer"||t==="worker"?!1:!!(process.versions&&process.versions.node)}return!1}var Ns=Object.defineProperty,Ws=(t,e)=>{for(var r in e)Ns(t,r,{get:e[r],enumerable:!0})},yt={};Ws(yt,{blue:()=>Ds,gray:()=>wt,green:()=>Hs,red:()=>Gs,yellow:()=>As});function As(t){return`\x1B[33m${t}\x1B[0m`}function Ds(t){return`\x1B[34m${t}\x1B[0m`}function wt(t){return`\x1B[90m${t}\x1B[0m`}function Gs(t){return`\x1B[31m${t}\x1B[0m`}function Hs(t){return`\x1B[32m${t}\x1B[0m`}var et=St(),yr=class{constructor(t){this.name=t,this.prefix=`[${this.name}]`;const e=It("DEBUG"),r=It("LOG_LEVEL");e==="1"||e==="true"||typeof e<"u"&&this.name.startsWith(e)?(this.debug=me(r,"debug")?O:this.debug,this.info=me(r,"info")?O:this.info,this.success=me(r,"success")?O:this.success,this.warning=me(r,"warning")?O:this.warning,this.error=me(r,"error")?O:this.error):(this.info=O,this.success=O,this.warning=O,this.error=O,this.only=O)}prefix;extend(t){return new yr(`${this.name}:${t}`)}debug(t,...e){this.logEntry({level:"debug",message:wt(t),positionals:e,prefix:this.prefix,colors:{prefix:"gray"}})}info(t,...e){this.logEntry({level:"info",message:t,positionals:e,prefix:this.prefix,colors:{prefix:"blue"}});const r=new Us;return(s,...n)=>{r.measure(),this.logEntry({level:"info",message:`${s} ${wt(`${r.deltaTime}ms`)}`,positionals:n,prefix:this.prefix,colors:{prefix:"blue"}})}}success(t,...e){this.logEntry({level:"info",message:t,positionals:e,prefix:`✔ ${this.prefix}`,colors:{timestamp:"green",prefix:"green"}})}warning(t,...e){this.logEntry({level:"warning",message:t,positionals:e,prefix:`⚠ ${this.prefix}`,colors:{timestamp:"yellow",prefix:"yellow"}})}error(t,...e){this.logEntry({level:"error",message:t,positionals:e,prefix:`✖ ${this.prefix}`,colors:{timestamp:"red",prefix:"red"}})}only(t){t()}createEntry(t,e){return{timestamp:new Date,level:t,message:e}}logEntry(t){const{level:e,message:r,prefix:s,colors:n,positionals:o=[]}=t,i=this.createEntry(e,r),a=n?.timestamp||"gray",u=n?.prefix||"gray",d={timestamp:yt[a],prefix:yt[u]};this.getWriter(e)([d.timestamp(this.formatTimestamp(i.timestamp))].concat(s!=null?d.prefix(s):[]).concat(Nt(r)).join(" "),...o.map(Nt))}formatTimestamp(t){return`${t.toLocaleTimeString("en-GB")}:${t.getMilliseconds()}`}getWriter(t){switch(t){case"debug":case"success":case"info":return $s;case"warning":return Bs;case"error":return Fs}}},Us=class{startTime;endTime;deltaTime;constructor(){this.startTime=performance.now()}measure(){this.endTime=performance.now();const t=this.endTime-this.startTime;this.deltaTime=t.toFixed(2)}},O=()=>{};function $s(t,...e){if(et){process.stdout.write(Pe(t,...e)+`
`);return}console.log(t,...e)}function Bs(t,...e){if(et){process.stderr.write(Pe(t,...e)+`
`);return}console.warn(t,...e)}function Fs(t,...e){if(et){process.stderr.write(Pe(t,...e)+`
`);return}console.error(t,...e)}function It(t){return et?Rs[t]:globalThis[t]?.toString()}function me(t,e){return t!==void 0&&t!==e}function Nt(t){return typeof t>"u"?"undefined":t===null?"null":typeof t=="string"?t:typeof t=="object"?JSON.stringify(t):t.toString()}var Qs=class extends Error{constructor(t,e,r){super(`Possible EventEmitter memory leak detected. ${r} ${e.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),this.emitter=t,this.type=e,this.count=r,this.name="MaxListenersExceededWarning"}},wr=class{static listenerCount(t,e){return t.listenerCount(e)}constructor(){this.events=new Map,this.maxListeners=wr.defaultMaxListeners,this.hasWarnedAboutPotentialMemoryLeak=!1}_emitInternalEvent(t,e,r){this.emit(t,e,r)}_getListeners(t){return Array.prototype.concat.apply([],this.events.get(t))||[]}_removeListener(t,e){const r=t.indexOf(e);return r>-1&&t.splice(r,1),[]}_wrapOnceListener(t,e){const r=(...s)=>(this.removeListener(t,r),e.apply(this,s));return Object.defineProperty(r,"name",{value:e.name}),r}setMaxListeners(t){return this.maxListeners=t,this}getMaxListeners(){return this.maxListeners}eventNames(){return Array.from(this.events.keys())}emit(t,...e){const r=this._getListeners(t);return r.forEach(s=>{s.apply(this,e)}),r.length>0}addListener(t,e){this._emitInternalEvent("newListener",t,e);const r=this._getListeners(t).concat(e);if(this.events.set(t,r),this.maxListeners>0&&this.listenerCount(t)>this.maxListeners&&!this.hasWarnedAboutPotentialMemoryLeak){this.hasWarnedAboutPotentialMemoryLeak=!0;const s=new Qs(this,t,this.listenerCount(t));console.warn(s)}return this}on(t,e){return this.addListener(t,e)}once(t,e){return this.addListener(t,this._wrapOnceListener(t,e))}prependListener(t,e){const r=this._getListeners(t);if(r.length>0){const s=[e].concat(r);this.events.set(t,s)}else this.events.set(t,r.concat(e));return this}prependOnceListener(t,e){return this.prependListener(t,this._wrapOnceListener(t,e))}removeListener(t,e){const r=this._getListeners(t);return r.length>0&&(this._removeListener(r,e),this.events.set(t,r),this._emitInternalEvent("removeListener",t,e)),this}off(t,e){return this.removeListener(t,e)}removeAllListeners(t){return t?this.events.delete(t):this.events.clear(),this}listeners(t){return Array.from(this._getListeners(t))}listenerCount(t){return this._getListeners(t).length}rawListeners(t){return this.listeners(t)}},br=wr;br.defaultMaxListeners=10;var zs="x-interceptors-internal-request-id";function Wt(t){return globalThis[t]||void 0}function Zs(t,e){globalThis[t]=e}function Ys(t){delete globalThis[t]}var I=(function(t){return t.INACTIVE="INACTIVE",t.APPLYING="APPLYING",t.APPLIED="APPLIED",t.DISPOSING="DISPOSING",t.DISPOSED="DISPOSED",t})({}),_t=class{constructor(t){this.symbol=t,this.readyState=I.INACTIVE,this.emitter=new br,this.subscriptions=[],this.logger=new yr(t.description),this.emitter.setMaxListeners(0),this.logger.info("constructing the interceptor...")}checkEnvironment(){return!0}apply(){const t=this.logger.extend("apply");if(t.info("applying the interceptor..."),this.readyState===I.APPLIED){t.info("intercepted already applied!");return}if(!this.checkEnvironment()){t.info("the interceptor cannot be applied in this environment!");return}this.readyState=I.APPLYING;const e=this.getInstance();if(e){t.info("found a running instance, reusing..."),this.on=(r,s)=>(t.info('proxying the "%s" listener',r),e.emitter.addListener(r,s),this.subscriptions.push(()=>{e.emitter.removeListener(r,s),t.info('removed proxied "%s" listener!',r)}),this),this.readyState=I.APPLIED;return}t.info("no running instance found, setting up a new instance..."),this.setup(),this.setInstance(),this.readyState=I.APPLIED}setup(){}on(t,e){const r=this.logger.extend("on");return this.readyState===I.DISPOSING||this.readyState===I.DISPOSED?(r.info("cannot listen to events, already disposed!"),this):(r.info('adding "%s" event listener:',t,e),this.emitter.on(t,e),this)}once(t,e){return this.emitter.once(t,e),this}off(t,e){return this.emitter.off(t,e),this}removeAllListeners(t){return this.emitter.removeAllListeners(t),this}dispose(){const t=this.logger.extend("dispose");if(this.readyState===I.DISPOSED){t.info("cannot dispose, already disposed!");return}if(t.info("disposing the interceptor..."),this.readyState=I.DISPOSING,!this.getInstance()){t.info("no interceptors running, skipping dispose...");return}if(this.clearInstance(),t.info("global symbol deleted:",Wt(this.symbol)),this.subscriptions.length>0){t.info("disposing of %d subscriptions...",this.subscriptions.length);for(const e of this.subscriptions)e();this.subscriptions=[],t.info("disposed of all subscriptions!",this.subscriptions.length)}this.emitter.removeAllListeners(),t.info("destroyed the listener!"),this.readyState=I.DISPOSED}getInstance(){const t=Wt(this.symbol);return this.logger.info("retrieved global instance:",t?.constructor?.name),t}setInstance(){Zs(this.symbol,this),this.logger.info("set global instance!",this.symbol.description)}clearInstance(){Ys(this.symbol),this.logger.info("cleared global instance!",this.symbol.description)}};function Lt(){return Math.random().toString(16).slice(2)}function vr(t){if(typeof t=="string")return vr(new URL(t,typeof location<"u"?location.href:void 0));if(t.protocol==="http:"?t.protocol="ws:":t.protocol==="https:"&&(t.protocol="wss:"),t.protocol!=="ws:"&&t.protocol!=="wss:")throw new SyntaxError(`Failed to construct 'WebSocket': The URL's scheme must be either 'http', 'https', 'ws', or 'wss'. '${t.protocol}' is not allowed.`);if(t.hash!=="")throw new SyntaxError(`Failed to construct 'WebSocket': The URL contains a fragment identifier ('${t.hash}'). Fragment identifiers are not allowed in WebSocket URLs.`);return t.href}async function Ce(t,e,...r){const s=t.listeners(e);if(s.length!==0)for(const n of s)await n.apply(t,r)}function Et(t){const e=Object.getOwnPropertyDescriptor(globalThis,t);return typeof e>"u"||typeof e.get=="function"&&typeof e.get()>"u"||typeof e.get>"u"&&e.value==null?!1:typeof e.set>"u"&&!e.configurable?(console.error(`[MSW] Failed to apply interceptor: the global \`${t}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`),!1):!0}function Js(){const t=(e,r)=>{t.state="pending",t.resolve=s=>{if(t.state!=="pending")return;t.result=s;const n=o=>(t.state="fulfilled",o);return e(s instanceof Promise?s:Promise.resolve(s).then(n))},t.reject=s=>{if(t.state==="pending")return queueMicrotask(()=>{t.state="rejected"}),r(t.rejectionReason=s)}};return t}var tt=class extends Promise{#e;resolve;reject;constructor(t=null){const e=Js();super((r,s)=>{e(r,s),t?.(e.resolve,e.reject)}),this.#e=e,this.resolve=this.#e.resolve,this.reject=this.#e.reject}get state(){return this.#e.state}get rejectionReason(){return this.#e.rejectionReason}then(t,e){return this.#t(super.then(t,e))}catch(t){return this.#t(super.catch(t))}finally(t){return this.#t(super.finally(t))}#t(t){return Object.defineProperties(t,{resolve:{configurable:!0,value:this.resolve},reject:{configurable:!0,value:this.reject}})}};function L(t,e){return Object.defineProperties(e,{target:{value:t,enumerable:!0,writable:!0},currentTarget:{value:t,enumerable:!0,writable:!0}}),e}var ue=Symbol("kCancelable"),H=Symbol("kDefaultPrevented"),qt=class extends MessageEvent{constructor(t,e){super(t,e),this[ue]=!!e.cancelable,this[H]=!1}get cancelable(){return this[ue]}set cancelable(t){this[ue]=t}get defaultPrevented(){return this[H]}set defaultPrevented(t){this[H]=t}preventDefault(){this.cancelable&&!this[H]&&(this[H]=!0)}},rt=class extends Event{constructor(t,e={}){super(t,e),this.code=e.code===void 0?0:e.code,this.reason=e.reason===void 0?"":e.reason,this.wasClean=e.wasClean===void 0?!1:e.wasClean}},At=class extends rt{constructor(t,e={}){super(t,e),this[ue]=!!e.cancelable,this[H]=!1}get cancelable(){return this[ue]}set cancelable(t){this[ue]=t}get defaultPrevented(){return this[H]}set defaultPrevented(t){this[H]=t}preventDefault(){this.cancelable&&!this[H]&&(this[H]=!0)}},ye=Symbol("kEmitter"),Ne=Symbol("kBoundListener"),Ks=class{constructor(t,e){this.socket=t,this.transport=e,this.id=Lt(),this.url=new URL(t.url),this[ye]=new EventTarget,this.transport.addEventListener("outgoing",r=>{const s=L(this.socket,new qt("message",{data:r.data,origin:r.origin,cancelable:!0}));this[ye].dispatchEvent(s),s.defaultPrevented&&r.preventDefault()}),this.transport.addEventListener("close",r=>{this[ye].dispatchEvent(L(this.socket,new rt("close",r)))})}addEventListener(t,e,r){if(!Reflect.has(e,Ne)){const s=e.bind(this.socket);Object.defineProperty(e,Ne,{value:s,enumerable:!1,configurable:!1})}this[ye].addEventListener(t,Reflect.get(e,Ne),r)}removeEventListener(t,e,r){this[ye].removeEventListener(t,Reflect.get(e,Ne),r)}send(t){this.transport.send(t)}close(t,e){this.transport.close(t,e)}},Dt="InvalidAccessError: close code out of user configurable range",Ke=Symbol("kPassthroughPromise"),kr=Symbol("kOnSend"),je=Symbol("kClose"),Xs=class extends EventTarget{static{this.CONNECTING=0}static{this.OPEN=1}static{this.CLOSING=2}static{this.CLOSED=3}constructor(t,e){super(),this.CONNECTING=0,this.OPEN=1,this.CLOSING=2,this.CLOSED=3,this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null,this.url=vr(t),this.protocol="",this.extensions="",this.binaryType="blob",this.readyState=this.CONNECTING,this.bufferedAmount=0,this[Ke]=new tt,queueMicrotask(async()=>{await this[Ke]||(this.protocol=typeof e=="string"?e:Array.isArray(e)&&e.length>0?e[0]:"",this.readyState===this.CONNECTING&&(this.readyState=this.OPEN,this.dispatchEvent(L(this,new Event("open")))))})}set onopen(t){this.removeEventListener("open",this._onopen),this._onopen=t,t!==null&&this.addEventListener("open",t)}get onopen(){return this._onopen}set onmessage(t){this.removeEventListener("message",this._onmessage),this._onmessage=t,t!==null&&this.addEventListener("message",t)}get onmessage(){return this._onmessage}set onerror(t){this.removeEventListener("error",this._onerror),this._onerror=t,t!==null&&this.addEventListener("error",t)}get onerror(){return this._onerror}set onclose(t){this.removeEventListener("close",this._onclose),this._onclose=t,t!==null&&this.addEventListener("close",t)}get onclose(){return this._onclose}send(t){if(this.readyState===this.CONNECTING)throw this.close(),new DOMException("InvalidStateError");this.readyState===this.CLOSING||this.readyState===this.CLOSED||(this.bufferedAmount+=Vs(t),queueMicrotask(()=>{this.bufferedAmount=0,this[kr]?.(t)}))}close(t=1e3,e){x(t,Dt),x(t===1e3||t>=3e3&&t<=4999,Dt),this[je](t,e)}[je](t=1e3,e,r=!0){this.readyState===this.CLOSING||this.readyState===this.CLOSED||(this.readyState=this.CLOSING,queueMicrotask(()=>{this.readyState=this.CLOSED,this.dispatchEvent(L(this,new rt("close",{code:t,reason:e,wasClean:r}))),this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null}))}addEventListener(t,e,r){return super.addEventListener(t,e,r)}removeEventListener(t,e,r){return super.removeEventListener(t,e,r)}};function Vs(t){return typeof t=="string"?t.length:t instanceof Blob?t.size:t.byteLength}var Q=Symbol("kEmitter"),We=Symbol("kBoundListener"),ot=Symbol("kSend"),en=class{constructor(t,e,r){this.client=t,this.transport=e,this.createConnection=r,this[Q]=new EventTarget,this.mockCloseController=new AbortController,this.realCloseController=new AbortController,this.transport.addEventListener("outgoing",s=>{typeof this.realWebSocket>"u"||queueMicrotask(()=>{s.defaultPrevented||this[ot](s.data)})}),this.transport.addEventListener("incoming",this.handleIncomingMessage.bind(this))}get socket(){return x(this.realWebSocket,'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?'),this.realWebSocket}connect(){x(!this.realWebSocket||this.realWebSocket.readyState!==WebSocket.OPEN,'Failed to call "connect()" on the original WebSocket instance: the connection already open');const t=this.createConnection();t.binaryType=this.client.binaryType,t.addEventListener("open",e=>{this[Q].dispatchEvent(L(this.realWebSocket,new Event("open",e)))},{once:!0}),t.addEventListener("message",e=>{this.transport.dispatchEvent(L(this.realWebSocket,new MessageEvent("incoming",{data:e.data,origin:e.origin})))}),this.client.addEventListener("close",e=>{this.handleMockClose(e)},{signal:this.mockCloseController.signal}),t.addEventListener("close",e=>{this.handleRealClose(e)},{signal:this.realCloseController.signal}),t.addEventListener("error",()=>{const e=L(t,new Event("error",{cancelable:!0}));this[Q].dispatchEvent(e),e.defaultPrevented||this.client.dispatchEvent(L(this.client,new Event("error")))}),this.realWebSocket=t}addEventListener(t,e,r){if(!Reflect.has(e,We)){const s=e.bind(this.client);Object.defineProperty(e,We,{value:s,enumerable:!1})}this[Q].addEventListener(t,Reflect.get(e,We),r)}removeEventListener(t,e,r){this[Q].removeEventListener(t,Reflect.get(e,We),r)}send(t){this[ot](t)}[ot](t){const{realWebSocket:e}=this;if(x(e,'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?',this.client.url),!(e.readyState===WebSocket.CLOSING||e.readyState===WebSocket.CLOSED)){if(e.readyState===WebSocket.CONNECTING){e.addEventListener("open",()=>{e.send(t)},{once:!0});return}e.send(t)}}close(){const{realWebSocket:t}=this;x(t,'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?',this.client.url),this.realCloseController.abort(),!(t.readyState===WebSocket.CLOSING||t.readyState===WebSocket.CLOSED)&&(t.close(),queueMicrotask(()=>{this[Q].dispatchEvent(L(this.realWebSocket,new At("close",{code:1e3,cancelable:!0})))}))}handleIncomingMessage(t){const e=L(t.target,new qt("message",{data:t.data,origin:t.origin,cancelable:!0}));this[Q].dispatchEvent(e),e.defaultPrevented||this.client.dispatchEvent(L(this.client,new MessageEvent("message",{data:t.data,origin:t.origin})))}handleMockClose(t){this.realWebSocket&&this.realWebSocket.close()}handleRealClose(t){this.mockCloseController.abort();const e=L(this.realWebSocket,new At("close",{code:t.code,reason:t.reason,wasClean:t.wasClean,cancelable:!0}));this[Q].dispatchEvent(e),e.defaultPrevented||this.client[je](t.code,t.reason)}},tn=class extends EventTarget{constructor(t){super(),this.socket=t,this.socket.addEventListener("close",e=>{this.dispatchEvent(L(this.socket,new rt("close",e)))}),this.socket[kr]=e=>{this.dispatchEvent(L(this.socket,new qt("outgoing",{data:e,origin:this.socket.url,cancelable:!0})))}}addEventListener(t,e,r){return super.addEventListener(t,e,r)}dispatchEvent(t){return super.dispatchEvent(t)}send(t){queueMicrotask(()=>{if(this.socket.readyState===this.socket.CLOSING||this.socket.readyState===this.socket.CLOSED)return;const e=()=>{this.socket.dispatchEvent(L(this.socket,new MessageEvent("message",{data:t,origin:this.socket.url})))};this.socket.readyState===this.socket.CONNECTING?this.socket.addEventListener("open",()=>{e()},{once:!0}):e()})}close(t,e){this.socket[je](t,e)}},rn=class xr extends _t{static{this.symbol=Symbol("websocket")}constructor(){super(xr.symbol)}checkEnvironment(){return Et("WebSocket")}setup(){const e=Object.getOwnPropertyDescriptor(globalThis,"WebSocket"),r=new Proxy(globalThis.WebSocket,{construct:(s,n,o)=>{const[i,a]=n,u=()=>Reflect.construct(s,n,o),d=new Xs(i,a),g=new tn(d);return queueMicrotask(async()=>{try{const p=new en(d,g,u),f=this.emitter.listenerCount("connection")>0;await Ce(this.emitter,"connection",{client:new Ks(d,g),server:p,info:{protocols:a}}),f?d[Ke].resolve(!1):(d[Ke].resolve(!0),p.connect(),p.addEventListener("open",()=>{d.dispatchEvent(L(d,new Event("open"))),p.realWebSocket&&(d.protocol=p.realWebSocket.protocol)}))}catch(p){p instanceof Error&&(d.dispatchEvent(new Event("error")),d.readyState!==WebSocket.CLOSING&&d.readyState!==WebSocket.CLOSED&&d[je](1011,p.message,!1),console.error(p))}}),d}});Object.defineProperty(globalThis,"WebSocket",{value:r,configurable:!0}),this.subscriptions.push(()=>{Object.defineProperty(globalThis,"WebSocket",e)})}};function Ct(){return typeof navigator<"u"&&"serviceWorker"in navigator&&typeof location<"u"&&location.protocol!=="file:"}function sn(){try{const t=new ReadableStream({start:r=>r.close()});return new MessageChannel().port1.postMessage(t,[t]),!0}catch{return!1}}function nn(){const t=((e,r)=>{t.state="pending",t.resolve=s=>{if(t.state!=="pending")return;t.result=s;const n=o=>(t.state="fulfilled",o);return e(s instanceof Promise?s:Promise.resolve(s).then(n))},t.reject=s=>{if(t.state==="pending")return queueMicrotask(()=>{t.state="rejected"}),r(t.rejectionReason=s)}});return t}var we=class extends Promise{#e;resolve;reject;constructor(t=null){const e=nn();super((r,s)=>{e(r,s),t?.(e.resolve,e.reject)}),this.#e=e,this.resolve=this.#e.resolve,this.reject=this.#e.reject}get state(){return this.#e.state}get rejectionReason(){return this.#e.rejectionReason}then(t,e){return this.#t(super.then(t,e))}catch(t){return this.#t(super.catch(t))}finally(t){return this.#t(super.finally(t))}#t(t){return Object.defineProperties(t,{resolve:{configurable:!0,value:this.resolve},reject:{configurable:!0,value:this.reject}})}},he=Symbol("isPatchedModule"),$e=class Sr extends Error{constructor(e){super(e),this.name="InterceptorError",Object.setPrototypeOf(this,Sr.prototype)}},_e=class Z{static{this.PENDING=0}static{this.PASSTHROUGH=1}static{this.RESPONSE=2}static{this.ERROR=3}constructor(e,r){this.request=e,this.source=r,this.readyState=Z.PENDING,this.handled=new tt}get#e(){return this.handled}async passthrough(){x.as($e,this.readyState===Z.PENDING,'Failed to passthrough the "%s %s" request: the request has already been handled',this.request.method,this.request.url),this.readyState=Z.PASSTHROUGH,await this.source.passthrough(),this.#e.resolve()}respondWith(e){x.as($e,this.readyState===Z.PENDING,'Failed to respond to the "%s %s" request with "%d %s": the request has already been handled (%d)',this.request.method,this.request.url,e.status,e.statusText||"OK",this.readyState),this.readyState=Z.RESPONSE,this.#e.resolve(),this.source.respondWith(e)}errorWith(e){x.as($e,this.readyState===Z.PENDING,'Failed to error the "%s %s" request with "%s": the request has already been handled (%d)',this.request.method,this.request.url,e?.toString(),this.readyState),this.readyState=Z.ERROR,this.source.errorWith(e),this.#e.resolve()}};function _r(t){try{return new URL(t),!0}catch{return!1}}function Gt(t,e){const r=Object.getOwnPropertySymbols(e).find(s=>s.description===t);if(r)return Reflect.get(e,r)}var te=class ae extends Response{static{this.STATUS_CODES_WITHOUT_BODY=[101,103,204,205,304]}static{this.STATUS_CODES_WITH_REDIRECT=[301,302,303,307,308]}static isConfigurableStatusCode(e){return e>=200&&e<=599}static isRedirectResponse(e){return ae.STATUS_CODES_WITH_REDIRECT.includes(e)}static isResponseWithBody(e){return!ae.STATUS_CODES_WITHOUT_BODY.includes(e)}static setUrl(e,r){if(!e||e==="about:"||!_r(e))return;const s=Gt("state",r);s?s.urlList.push(new URL(e)):Object.defineProperty(r,"url",{value:e,enumerable:!0,configurable:!0,writable:!1})}static parseRawHeaders(e){const r=new Headers;for(let s=0;s<e.length;s+=2)r.append(e[s],e[s+1]);return r}constructor(e,r={}){const s=r.status??200,n=ae.isConfigurableStatusCode(s)?s:200,o=ae.isResponseWithBody(s)?e:null;if(super(o,{status:n,statusText:r.statusText,headers:r.headers}),s!==n){const i=Gt("state",this);i?i.status=s:Object.defineProperty(this,"status",{value:s,enumerable:!0,configurable:!0,writable:!1})}ae.setUrl(r.url,this)}},on=Symbol("kRawRequest");function Lr(t,e){Reflect.set(t,on,e)}var an=new TextEncoder;function ln(t){return an.encode(t)}function cn(t,e){return new TextDecoder(e).decode(t)}function dn(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function un(t){try{return[null,await t().catch(e=>{throw e})]}catch(e){return[e,null]}}function hn(t){return new URL(t,location.href).href}function it(t,e,r){return[t.active,t.installing,t.waiting].filter(i=>i!=null).find(i=>r(i.scriptURL,e))||null}var pn=async(t,e={},r)=>{const s=hn(t),n=await navigator.serviceWorker.getRegistrations().then(u=>u.filter(d=>it(d,s,r)));!navigator.serviceWorker.controller&&n.length>0&&location.reload();const[o]=n;if(o)return o.update(),[it(o,s,r),o];const[i,a]=await un(async()=>{const u=await navigator.serviceWorker.register(t,e);return[it(u,s,r),u]});if(i){if(i.message.includes("(404)")){const d=new URL(e?.scope||"/",location.href);throw new Error(v.formatMessage(`Failed to register a Service Worker for scope ('${d.href}') with script ('${s}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`))}throw new Error(v.formatMessage(`Failed to register the Service Worker:

%s`,i.message))}return a},Ht=class{#e;#t;constructor(){this.#e=[],this.#t=new Map}get[Symbol.iterator](){return this.#e[Symbol.iterator].bind(this.#e)}entries(){return this.#t.entries()}get(t){return this.#t.get(t)||[]}getAll(){return this.#e.map(([,t])=>t)}append(t,e){this.#e.push([t,e]),this.#s(t,r=>r.push(e))}prepend(t,e){this.#e.unshift([t,e]),this.#s(t,r=>r.unshift(e))}delete(t,e){if(this.size===0)return!1;const r=this.#t.get(t);if(!r)return!1;const s=r.indexOf(e);return s===-1?!1:(r.splice(s,1),this.#e.splice(this.#e.findIndex(n=>n[0]===t&&n[1]===e),1),!0)}deleteAll(t){this.size!==0&&(this.#e=this.#e.filter(e=>e[0]!==t),this.#t.delete(t))}get size(){return this.#e.length}clear(){this.size!==0&&(this.#e.length=0,this.#t.clear())}#s(t,e){e(this.#t.get(t)||this.#t.set(t,[]).get(t))}},Ae=Symbol("kDefaultPrevented"),Y=Symbol("kPropagationStopped"),Le=Symbol("kImmediatePropagationStopped"),fn=class extends MessageEvent{#e;[Ae];[Y];[Le];constructor(...t){super(t[0],t[1]),this[Ae]=!1}get defaultPrevented(){return this[Ae]}preventDefault(){super.preventDefault(),this[Ae]=!0}stopImmediatePropagation(){super.stopImmediatePropagation(),this[Le]=!0}},gn=class{#e;#t;#s;#n;#r;#a;#o;hooks;constructor(){this.#e=new Ht,this.#t=new WeakMap,this.#s=new WeakMap,this.#n=new WeakSet,this.#r=new Ht,this.#a=new WeakMap,this.#o=new WeakMap,this.hooks={on:(t,e,r)=>{if(!r?.signal?.aborted){if(r?.once){const s=e,n=((...o)=>(this.#i(t,n),s(...o)));e=n}if(this.#r.append(t,e),r&&this.#a.set(e,r),r?.signal){const{signal:s}=r,n=()=>{this.#i(t,e)};s.addEventListener("abort",n,{once:!0}),this.#o.set(e,()=>{s.removeEventListener("abort",n)})}}},removeListener:(t,e)=>{this.#i(t,e)}}}#i(t,e){this.#r.delete(t,e);const r=this.#o.get(e);r&&(r(),this.#o.delete(e))}#h(t,e){const r=this.#e.delete(t,e),s=this.#s.get(e);return s&&(s(),this.#s.delete(e)),r}on(t,e,r){return this.#p(t,e,r),this}once(t,e,r){return this.on(t,e,{...r||{},once:!0})}earlyOn(t,e,r){return this.#p(t,e,r,"prepend"),this}earlyOnce(t,e,r){return this.earlyOn(t,e,{...r||{},once:!0})}emit(t){if(this.#e.size===0)return!1;const e=this.listenerCount(t.type)>0,r=this.#l(t);for(const s of this.#d(t.type)){if(r.event[Y]!=null&&r.event[Y]!==this)return r.revoke(),!1;if(r.event[Le])break;this.#c(r.event,s)}return r.revoke(),e}async emitAsPromise(t){if(this.#e.size===0)return[];const e=[],r=this.#l(t);for(const s of this.#d(t.type)){if(r.event[Y]!=null&&r.event[Y]!==this)return r.revoke(),[];if(r.event[Le])break;const n=await Promise.resolve(this.#c(r.event,s));this.#u(s)||e.push(n)}return r.revoke(),Promise.allSettled(e).then(s=>s.map(n=>n.status==="fulfilled"?n.value:n.reason))}*emitAsGenerator(t){if(this.#e.size===0)return;const e=this.#l(t);for(const r of this.#d(t.type)){if(e.event[Y]!=null&&e.event[Y]!==this){e.revoke();return}if(e.event[Le])break;const s=this.#c(e.event,r);this.#u(r)||(yield s)}e.revoke()}removeListener(t,e){const r=this.#t.get(e);if(this.#h(t,e))for(const s of this.#r.get("removeListener").slice())s(t,e,r)}removeAllListeners(t){if(t==null){for(const[r,s]of this.#e.entries())for(;s.length>0;)this.removeListener(r,s[0]);for(const[r,s]of[...this.#r])this.#a.get(s)?.persist||this.#i(r,s);return}const e=this.listeners(t);for(;e.length>0;)this.removeListener(t,e[0])}listeners(t){return t==null?this.#e.getAll():this.#e.get(t)}listenerCount(t){return t==null?this.#e.size:this.listeners(t).length}#p(t,e,r,s="append"){if(!r?.signal?.aborted){for(const n of this.#r.get("newListener").slice())n(t,e,r);if(t==="*"&&this.#n.add(e),s==="prepend"?this.#e.prepend(t,e):this.#e.append(t,e),r&&(this.#t.set(e,r),r.signal)){const{signal:n}=r,o=()=>{this.removeListener(t,e)};n.addEventListener("abort",o,{once:!0}),this.#s.set(e,()=>{n.removeEventListener("abort",o)})}}}#l(t){const{stopPropagation:e}=t;return t.stopPropagation=()=>{t[Y]=this,e.call(t)},{event:t,revoke(){t.stopPropagation=e}}}#c(t,e){for(const n of this.#r.get("beforeEmit").slice())if(n(t)===!1)return;const r=e.call(this,t),s=this.#t.get(e);if(s?.once){const n=this.#u(e)?"*":t.type;if(this.#h(n,e))for(const o of this.#r.get("removeListener").slice())o(n,e,s)}return r}*#d(t){const e=[];for(const[r,s]of this.#e)(r==="*"||r===t)&&e.push(s);yield*e}#u(t){return this.#n.has(t)}},Ut=Ct(),mn=class extends fn{#e;constructor(t){const e=t.data.type,r=t.data.payload;super(e,{data:r}),this.#e=t}get ports(){return this.#e.ports}postMessage(t,...e){this.#e.ports[0].postMessage({type:t,data:e[0]},{transfer:e[1]})}},yn=class extends gn{#e;#t;constructor(t){super(),x(Ut,"Failed to open a WorkerChannel: Service Worker is not supported in this environment."),this.#e=t.getWorker,this.#t=new AbortController,navigator.serviceWorker.addEventListener("message",async e=>{const r=await this.#e();e.source!=null&&e.source!==r||e.data&&Jr(e.data)&&"type"in e.data&&this.emit(new mn(e))},{signal:this.#t.signal})}postMessage(t){x(Ut,"Failed to post message on a WorkerChannel: the Service Worker API is unavailable in this environment. This is likely an issue with MSW. Please report it on GitHub: https://github.com/mswjs/msw/issues"),this.#e().then(e=>{e.postMessage(t)})}terminate(){this.#t.abort(),this.removeAllListeners()}};function wn(t){if(!["HEAD","GET"].includes(t.method))return t.body}function $t(t){return new Request(t.url,{...t,body:wn(t)})}function bn(t){location.href.startsWith(t.scope)||v.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${t.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`)}function vn(t,e){return t.findWorker!==e.findWorker||t.serviceWorker.url!==e.serviceWorker.url||JSON.stringify(t.serviceWorker.options)!==JSON.stringify(e.serviceWorker.options)}var Bt=class T extends kt{static#e;static async from(e){return T.#e==null?T.#e=new T(e):vn(T.#e.#t,e)&&(await T.#e.terminate(),T.#e=new T(e)),T.#e}#t;#s;#n;#r;#a;#o;#i;workerPromise;constructor(e){super(),x(Ct(),"Failed to use Service Worker as the network source: the Service Worker API is not supported in this environment"),this.#t=e,this.#s=new Map,this.workerPromise=new we,this.#n=new yn({getWorker:()=>this.workerPromise.then(([r])=>r)})}async enable(){if(this.workerPromise.state==="fulfilled"&&typeof this.#i>"u")return v.warn('Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.'),this.workerPromise.then(([,n])=>n);this.#i=void 0,this.#n.removeAllListeners(),this.#s.clear(),this.#r=new AbortController;const[e,r]=await this.#h();if(e.state!=="activated"){const n=new AbortController,o=new we;o.then(()=>n.abort()),e.addEventListener("statechange",()=>{e.state==="activated"&&o.resolve()},{signal:n.signal}),await o}this.#n.postMessage("MOCK_ACTIVATE");const s=new we;return this.#a=s,this.#n.once("MOCKING_ENABLED",n=>{s.resolve(n.data.client)}),await s,this.#t.quiet||this.#u(),r}disable(){if(typeof this.#i<"u"){v.warn('Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.');return}this.#i=Date.now(),this.#r?.abort(),this.#r=void 0,this.#n.postMessage("CLIENT_CLOSED"),this.#t.quiet||this.#f()}async terminate(){if(this.#o!=null&&(clearInterval(this.#o),this.#o=void 0),this.#s.clear(),this.#n.terminate(),this.#r?.abort(),this.#r=void 0,this.workerPromise.state==="fulfilled"){const[,e]=await this.workerPromise;await e.unregister()}T.#e===this&&(T.#e=void 0)}async#h(){this.#o&&clearInterval(this.#o);const e=this.#t.serviceWorker.url,[r,s]=await pn(e,this.#t.serviceWorker.options,this.#t.findWorker||this.#c);if(r==null){const n=this.#t?.findWorker?v.formatMessage(`Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
     `,e):v.formatMessage(`Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,e,location.host);throw new Error(n)}return this.workerPromise.state==="pending"?this.workerPromise.resolve([r,s]):this.workerPromise=new we(n=>{n([r,s])}),this.#n.on("REQUEST",this.#p.bind(this)),this.#n.on("RESPONSE",this.#l.bind(this)),window.addEventListener("beforeunload",()=>{r.state!=="redundant"&&this.#n.postMessage("CLIENT_CLOSED"),clearInterval(this.#o),window.postMessage({type:"msw/worker:stop"})},{signal:this.#r?.signal}),await this.#d().catch(n=>{v.error("Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues) and include the original error below."),console.error(n)}),this.#o=window.setInterval(()=>{this.#n.postMessage("KEEPALIVE_REQUEST")},5e3),this.#t.quiet||bn(s),[r,s]}async#p(e){if(this.#i&&e.data.interceptedAt>this.#i)return e.postMessage("PASSTHROUGH");const r=$t(e.data);Qr.cache.set(r,r.clone());const s=new kn({event:e,request:r});this.#s.set(e.data.id,s),await this.queue(s)}async#l(e){const{request:r,response:s,isMockedResponse:n}=e.data,o=this.#s.get(r.id);if(s.type?.includes("opaque")){this.#s.delete(r.id),o?.events.removeAllListeners();return}if(this.#s.delete(r.id),o==null)return;const i=$t(r),a=s.status===0?Response.error():new te(te.isResponseWithBody(s.status)?s.body:null,{...s,url:r.url});try{o.events.emit(new ur(n?"response:mocked":"response:bypass",{requestId:o.data.id,request:i,response:a,isMockedResponse:n}))}finally{o.events.removeAllListeners()}}#c=(e,r)=>e===r;async#d(){const e=new we;return this.#n.postMessage("INTEGRITY_CHECK_REQUEST"),this.#n.once("INTEGRITY_CHECK_RESPONSE",r=>{const{checksum:s,packageVersion:n}=r.data;s!=="4db4a41e972cec1b64cc569c66952d82"&&v.warn(`The currently registered Service Worker has been generated by a different version of MSW (${n}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  • npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`),e.resolve()}),e}async#u(){if(this.workerPromise.state==="rejected")return;x(this.#a!=null,"[ServiceWorkerSource] Failed to print a start message: client confirmation not received");const e=await this.#a,[r,s]=await this.workerPromise;console.groupCollapsed(`%c${v.formatMessage("Mocking enabled.")}`,"color:orangered;font-weight:bold;"),console.log("%cDocumentation: %chttps://mswjs.io/docs","font-weight:bold","font-weight:normal"),console.log("Found an issue? https://github.com/mswjs/msw/issues"),console.log("Worker script URL:",r.scriptURL),console.log("Worker scope:",s.scope),e&&console.log("Client ID: %s (%s)",e.id,e.frameType),console.groupEnd()}#f(){console.log(`%c${v.formatMessage("Mocking disabled.")}`,"color:orangered;font-weight:bold;")}},kn=class extends Xe{#e;constructor(t){super({request:t.request}),this.#e=t.event}passthrough(){this.#e.postMessage("PASSTHROUGH")}respondWith(t){t&&this.#t(t)}errorWith(t){if(t instanceof Response)return this.respondWith(t);v.warn(`Uncaught exception in the request handler for "%s %s". This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/http/mocking-responses/error-responses`,this.data.request.method,this.data.request.url);const e=t instanceof Error?t:new Error(t?.toString()||"Request failure");this.respondWith(l.json({name:e.name,message:e.message,stack:e.stack},{status:500,statusText:"Request Handler Error"}))}async#t(t){let e,r;const s=js(t);sn()?(e=t.body,r=t.body==null?void 0:[t.body]):e=t.body==null?null:await t.clone().arrayBuffer(),this.#e.postMessage("MOCK_RESPONSE",{...s,body:e},r)}},Er=async t=>{try{return{error:null,data:await t().catch(r=>{throw r})}}catch(e){return{error:e,data:null}}};function qr(t,e=!1){return e?Object.prototype.toString.call(t).startsWith("[object "):Object.prototype.toString.call(t)==="[object Object]"}function Be(t,e){try{return t[e],!0}catch{return!1}}function xn(t){return new Response(JSON.stringify(t instanceof Error?{name:t.name,message:t.message,stack:t.stack}:t),{status:500,statusText:"Unhandled Exception",headers:{"Content-Type":"application/json"}})}function jt(t){return t!=null&&t instanceof Response&&Be(t,"type")&&t.type==="error"}function Sn(t){return qr(t,!0)&&Be(t,"status")&&Be(t,"statusText")&&Be(t,"bodyUsed")}function _n(t){return t==null||!(t instanceof Error)?!1:"code"in t&&"errno"in t}async function Cr(t){const e=async o=>o instanceof Error?(await t.controller.errorWith(o),!0):jt(o)?(await t.controller.respondWith(o),!0):Sn(o)?(await t.controller.respondWith(o),!0):qr(o)?(await t.controller.errorWith(o),!0):!1,r=async o=>{if(o instanceof $e)throw n.error;return _n(o)?(await t.controller.errorWith(o),!0):o instanceof Response?await e(o):!1},s=new tt;if(t.request.signal){if(t.request.signal.aborted){await t.controller.errorWith(t.request.signal.reason);return}t.request.signal.addEventListener("abort",()=>{s.reject(t.request.signal.reason)},{once:!0})}const n=await Er(async()=>{const o=Ce(t.emitter,"request",{requestId:t.requestId,request:t.request,controller:t.controller});await Promise.race([s,o,t.controller.handled])});if(s.state==="rejected"){await t.controller.errorWith(s.rejectionReason);return}if(n.error){if(await r(n.error))return;if(t.emitter.listenerCount("unhandledException")>0){const o=new _e(t.request,{passthrough(){},async respondWith(i){await e(i)},async errorWith(i){await t.controller.errorWith(i)}});if(await Ce(t.emitter,"unhandledException",{error:n.error,request:t.request,requestId:t.requestId,controller:o}),o.readyState!==_e.PENDING)return}await t.controller.respondWith(xn(n.error));return}return t.controller.readyState===_e.PENDING?await t.controller.passthrough():t.controller.handled}function V(t){return Object.assign(new TypeError("Failed to fetch"),{cause:t})}var Ln=["content-encoding","content-language","content-location","content-type","content-length"],at=Symbol("kRedirectCount");async function En(t,e){if(e.status!==303&&t.body!=null)return Promise.reject(V());const r=new URL(t.url);let s;try{s=new URL(e.headers.get("location"),t.url)}catch(i){return Promise.reject(V(i))}if(!(s.protocol==="http:"||s.protocol==="https:"))return Promise.reject(V("URL scheme must be a HTTP(S) scheme"));if(Reflect.get(t,at)>20)return Promise.reject(V("redirect count exceeded"));if(Object.defineProperty(t,at,{value:(Reflect.get(t,at)||0)+1}),t.mode==="cors"&&(s.username||s.password)&&!Ft(r,s))return Promise.reject(V('cross origin not allowed for request mode "cors"'));const n={};([301,302].includes(e.status)&&t.method==="POST"||e.status===303&&!["HEAD","GET"].includes(t.method))&&(n.method="GET",n.body=null,Ln.forEach(i=>{t.headers.delete(i)})),Ft(r,s)||(t.headers.delete("authorization"),t.headers.delete("proxy-authorization"),t.headers.delete("cookie"),t.headers.delete("host")),n.headers=t.headers;const o=await fetch(new Request(s,n));return Object.defineProperty(o,"redirected",{value:!0,configurable:!0}),o}function Ft(t,e){return t.origin===e.origin&&t.origin==="null"||t.protocol===e.protocol&&t.hostname===e.hostname&&t.port===e.port}var qn=class extends TransformStream{constructor(){console.warn("[Interceptors]: Brotli decompression of response streams is not supported in the browser"),super({transform(t,e){e.enqueue(t)}})}},Cn=class extends TransformStream{constructor(t,...e){super({},...e);const r=[super.readable,...t].reduce((s,n)=>s.pipeThrough(n));Object.defineProperty(this,"readable",{get(){return r}})}};function jn(t){return t.toLowerCase().split(",").map(e=>e.trim())}function Rn(t){if(t==="")return null;const e=jn(t);return e.length===0?null:new Cn(e.reduceRight((r,s)=>s==="gzip"||s==="x-gzip"?r.concat(new DecompressionStream("gzip")):s==="deflate"?r.concat(new DecompressionStream("deflate")):s==="br"?r.concat(new qn):(r.length=0,r),[]))}function Pn(t){if(t.body===null)return null;const e=Rn(t.headers.get("content-encoding")||"");return e?(t.body.pipeTo(e.writable),e.readable):null}var Mn=class jr extends _t{static{this.symbol=Symbol("fetch")}constructor(){super(jr.symbol)}checkEnvironment(){return Et("fetch")}async setup(){const e=globalThis.fetch;x(!e[he],'Failed to patch the "fetch" module: already patched.'),globalThis.fetch=async(r,s)=>{const n=Lt(),o=typeof r=="string"&&typeof location<"u"&&!_r(r)?new URL(r,location.href):r,i=new Request(o,s);r instanceof Request&&Lr(i,r);const a=new tt,u=new _e(i,{passthrough:async()=>{this.logger.info("request has not been handled, passthrough...");const d=i.clone(),{error:g,data:p}=await Er(()=>e(i));if(g)return a.reject(g);if(this.logger.info("original fetch performed",p),this.emitter.listenerCount("response")>0){this.logger.info('emitting the "response" event...');const f=p.clone();await Ce(this.emitter,"response",{response:f,isMockedResponse:!1,request:d,requestId:n})}a.resolve(p)},respondWith:async d=>{if(jt(d)){this.logger.info("request has errored!",{response:d}),a.reject(V(d));return}this.logger.info("received mocked response!",{rawResponse:d});const g=Pn(d),p=g===null?d:new te(g,d);if(te.setUrl(i.url,p),te.isRedirectResponse(p.status)){if(i.redirect==="error"){a.reject(V("unexpected redirect"));return}if(i.redirect==="follow"){En(i,p).then(f=>{a.resolve(f)},f=>{a.reject(f)});return}}this.emitter.listenerCount("response")>0&&(this.logger.info('emitting the "response" event...'),await Ce(this.emitter,"response",{response:p.clone(),isMockedResponse:!0,request:i,requestId:n})),a.resolve(p)},errorWith:d=>{this.logger.info("request has been aborted!",{reason:d}),a.reject(d)}});return this.logger.info("[%s] %s",i.method,i.url),this.logger.info("awaiting for the mocked response..."),this.logger.info('emitting the "request" event for %s listener(s)...',this.emitter.listenerCount("request")),await Cr({request:i,requestId:n,emitter:this.emitter,controller:u}),a},Object.defineProperty(globalThis.fetch,he,{enumerable:!0,configurable:!0,value:!0}),this.subscriptions.push(()=>{Object.defineProperty(globalThis.fetch,he,{value:void 0}),globalThis.fetch=e,this.logger.info('restored native "globalThis.fetch"!',globalThis.fetch.name)})}};function Tn(t,e){const r=new Uint8Array(t.byteLength+e.byteLength);return r.set(t,0),r.set(e,t.byteLength),r}var Rr=class{constructor(t,e){this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.type="",this.srcElement=null,this.currentTarget=null,this.eventPhase=0,this.isTrusted=!0,this.composed=!1,this.cancelable=!0,this.defaultPrevented=!1,this.bubbles=!0,this.lengthComputable=!0,this.loaded=0,this.total=0,this.cancelBubble=!1,this.returnValue=!0,this.type=t,this.target=e?.target||null,this.currentTarget=e?.currentTarget||null,this.timeStamp=Date.now()}composedPath(){return[]}initEvent(t,e,r){this.type=t,this.bubbles=!!e,this.cancelable=!!r}preventDefault(){this.defaultPrevented=!0}stopPropagation(){}stopImmediatePropagation(){}},On=class extends Rr{constructor(t,e){super(t),this.lengthComputable=e?.lengthComputable||!1,this.composed=e?.composed||!1,this.loaded=e?.loaded||0,this.total=e?.total||0}},In=typeof ProgressEvent<"u";function Nn(t,e,r){const s=["error","progress","loadstart","loadend","load","timeout","abort"],n=In?ProgressEvent:On;return s.includes(e)?new n(e,{lengthComputable:!0,loaded:r?.loaded||0,total:r?.total||0}):new Rr(e,{target:t,currentTarget:t})}function Pr(t,e){if(!(e in t))return null;if(Object.prototype.hasOwnProperty.call(t,e))return t;const r=Reflect.getPrototypeOf(t);return r?Pr(r,e):null}function lt(t,e){return new Proxy(t,Wn(e))}function Wn(t){const{constructorCall:e,methodCall:r,getProperty:s,setProperty:n}=t,o={};return typeof e<"u"&&(o.construct=function(i,a,u){const d=Reflect.construct.bind(null,i,a,u);return e.call(u,a,d)}),o.set=function(i,a,u){const d=()=>{const g=Pr(i,a)||i,p=Reflect.getOwnPropertyDescriptor(g,a);return typeof p?.set<"u"?(p.set.apply(i,[u]),!0):Reflect.defineProperty(g,a,{writable:!0,enumerable:!0,configurable:!0,value:u})};return typeof n<"u"?n.call(i,[a,u],d):d()},o.get=function(i,a,u){const d=()=>i[a],g=typeof s<"u"?s.call(i,[a,u],d):d();return typeof g=="function"?(...p)=>{const f=g.bind(i,...p);return typeof r<"u"?r.call(i,[a,p],f):f()}:g},o}function An(t){return["application/xhtml+xml","application/xml","image/svg+xml","text/html","text/xml"].some(e=>t.startsWith(e))}function Dn(t){try{return JSON.parse(t)}catch{return null}}function Gn(t,e){return new te(te.isResponseWithBody(t.status)?e:null,{url:t.responseURL,status:t.status,statusText:t.statusText,headers:Hn(t.getAllResponseHeaders())})}function Hn(t){const e=new Headers,r=t.split(/[\r\n]+/);for(const s of r){if(s.trim()==="")continue;const[n,...o]=s.split(": "),i=o.join(": ");e.append(n,i)}return e}async function Qt(t){const e=t.headers.get("content-length");return e!=null&&e!==""?Number(e):(await t.arrayBuffer()).byteLength}var be=Symbol("kIsRequestHandled"),Un=St(),ct=Symbol("kFetchRequest"),$n=class{constructor(t,e){this.initialRequest=t,this.logger=e,this.method="GET",this.url=null,this[be]=!1,this.events=new Map,this.uploadEvents=new Map,this.requestId=Lt(),this.requestHeaders=new Headers,this.responseBuffer=new Uint8Array,this.request=lt(t,{setProperty:([r,s],n)=>{switch(r){case"ontimeout":{const o=r.slice(2);return this.request.addEventListener(o,s),n()}default:return n()}},methodCall:([r,s],n)=>{switch(r){case"open":{const[o,i]=s;return typeof i>"u"?(this.method="GET",this.url=zt(o)):(this.method=o,this.url=zt(i)),this.logger=this.logger.extend(`${this.method} ${this.url.href}`),this.logger.info("open",this.method,this.url.href),n()}case"addEventListener":{const[o,i]=s;return this.registerEvent(o,i),this.logger.info("addEventListener",o,i),n()}case"setRequestHeader":{const[o,i]=s;return this.requestHeaders.set(o,i),this.logger.info("setRequestHeader",o,i),n()}case"send":{const[o]=s;this.request.addEventListener("load",()=>{if(typeof this.onResponse<"u"){const u=Gn(this.request,this.request.response);this.onResponse.call(this,{response:u,isMockedResponse:this[be],request:a,requestId:this.requestId})}});const i=typeof o=="string"?ln(o):o,a=this.toFetchApiRequest(i);this[ct]=a.clone(),queueMicrotask(()=>{(this.onRequest?.call(this,{request:a,requestId:this.requestId})||Promise.resolve()).finally(()=>{if(!this[be])return this.logger.info("request callback settled but request has not been handled (readystate %d), performing as-is...",this.request.readyState),Un&&this.request.setRequestHeader(zs,this.requestId),n()})});break}default:return n()}}}),se(this.request,"upload",lt(this.request.upload,{setProperty:([r,s],n)=>{switch(r){case"onloadstart":case"onprogress":case"onaboart":case"onerror":case"onload":case"ontimeout":case"onloadend":{const o=r.slice(2);this.registerUploadEvent(o,s)}}return n()},methodCall:([r,s],n)=>{switch(r){case"addEventListener":{const[o,i]=s;return this.registerUploadEvent(o,i),this.logger.info("upload.addEventListener",o,i),n()}}}}))}registerEvent(t,e){const r=(this.events.get(t)||[]).concat(e);this.events.set(t,r),this.logger.info('registered event "%s"',t,e)}registerUploadEvent(t,e){const r=(this.uploadEvents.get(t)||[]).concat(e);this.uploadEvents.set(t,r),this.logger.info('registered upload event "%s"',t,e)}async respondWith(t){if(this[be]=!0,this[ct]){const s=await Qt(this[ct]);this.trigger("loadstart",this.request.upload,{loaded:0,total:s}),this.trigger("progress",this.request.upload,{loaded:s,total:s}),this.trigger("load",this.request.upload,{loaded:s,total:s}),this.trigger("loadend",this.request.upload,{loaded:s,total:s})}this.logger.info("responding with a mocked response: %d %s",t.status,t.statusText),se(this.request,"status",t.status),se(this.request,"statusText",t.statusText),se(this.request,"responseURL",this.url.href),this.request.getResponseHeader=new Proxy(this.request.getResponseHeader,{apply:(s,n,o)=>{if(this.logger.info("getResponseHeader",o[0]),this.request.readyState<this.request.HEADERS_RECEIVED)return this.logger.info("headers not received yet, returning null"),null;const i=t.headers.get(o[0]);return this.logger.info('resolved response header "%s" to',o[0],i),i}}),this.request.getAllResponseHeaders=new Proxy(this.request.getAllResponseHeaders,{apply:()=>{if(this.logger.info("getAllResponseHeaders"),this.request.readyState<this.request.HEADERS_RECEIVED)return this.logger.info("headers not received yet, returning empty string"),"";const s=Array.from(t.headers.entries()).map(([n,o])=>`${n}: ${o}`).join(`\r
`);return this.logger.info("resolved all response headers to",s),s}}),Object.defineProperties(this.request,{response:{enumerable:!0,configurable:!1,get:()=>this.response},responseText:{enumerable:!0,configurable:!1,get:()=>this.responseText},responseXML:{enumerable:!0,configurable:!1,get:()=>this.responseXML}});const e=await Qt(t.clone());this.logger.info("calculated response body length",e),this.trigger("loadstart",this.request,{loaded:0,total:e}),this.setReadyState(this.request.HEADERS_RECEIVED),this.setReadyState(this.request.LOADING);const r=()=>{this.logger.info("finalizing the mocked response..."),this.setReadyState(this.request.DONE),this.trigger("load",this.request,{loaded:this.responseBuffer.byteLength,total:e}),this.trigger("loadend",this.request,{loaded:this.responseBuffer.byteLength,total:e})};if(t.body){this.logger.info("mocked response has body, streaming...");const s=t.body.getReader(),n=async()=>{const{value:o,done:i}=await s.read();if(i){this.logger.info("response body stream done!"),r();return}o&&(this.logger.info("read response body chunk:",o),this.responseBuffer=Tn(this.responseBuffer,o),this.trigger("progress",this.request,{loaded:this.responseBuffer.byteLength,total:e})),n()};n()}else r()}responseBufferToText(){return cn(this.responseBuffer)}get response(){if(this.logger.info("getResponse (responseType: %s)",this.request.responseType),this.request.readyState!==this.request.DONE)return null;switch(this.request.responseType){case"json":{const t=Dn(this.responseBufferToText());return this.logger.info("resolved response JSON",t),t}case"arraybuffer":{const t=dn(this.responseBuffer);return this.logger.info("resolved response ArrayBuffer",t),t}case"blob":{const t=this.request.getResponseHeader("Content-Type")||"text/plain",e=new Blob([this.responseBufferToText()],{type:t});return this.logger.info("resolved response Blob (mime type: %s)",e,t),e}default:{const t=this.responseBufferToText();return this.logger.info('resolving "%s" response type as text',this.request.responseType,t),t}}}get responseText(){if(x(this.request.responseType===""||this.request.responseType==="text","InvalidStateError: The object is in invalid state."),this.request.readyState!==this.request.LOADING&&this.request.readyState!==this.request.DONE)return"";const t=this.responseBufferToText();return this.logger.info('getResponseText: "%s"',t),t}get responseXML(){if(x(this.request.responseType===""||this.request.responseType==="document","InvalidStateError: The object is in invalid state."),this.request.readyState!==this.request.DONE)return null;const t=this.request.getResponseHeader("Content-Type")||"";return typeof DOMParser>"u"?(console.warn("Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly."),null):An(t)?new DOMParser().parseFromString(this.responseBufferToText(),t):null}errorWith(t){this[be]=!0,this.logger.info("responding with an error"),this.setReadyState(this.request.DONE),this.trigger("error",this.request),this.trigger("loadend",this.request)}setReadyState(t){if(this.logger.info("setReadyState: %d -> %d",this.request.readyState,t),this.request.readyState===t){this.logger.info("ready state identical, skipping transition...");return}se(this.request,"readyState",t),this.logger.info("set readyState to: %d",t),t!==this.request.UNSENT&&(this.logger.info('triggering "readystatechange" event...'),this.trigger("readystatechange",this.request))}trigger(t,e,r){const s=e[`on${t}`],n=Nn(e,t,r);this.logger.info('trigger "%s"',t,r||""),typeof s=="function"&&(this.logger.info('found a direct "%s" callback, calling...',t),s.call(e,n));const o=e instanceof XMLHttpRequestUpload?this.uploadEvents:this.events;for(const[i,a]of o)i===t&&(this.logger.info('found %d listener(s) for "%s" event, calling...',a.length,t),a.forEach(u=>u.call(e,n)))}toFetchApiRequest(t){this.logger.info("converting request to a Fetch API Request...");const e=t instanceof Document?t.documentElement.innerText:t,r=new Request(this.url.href,{method:this.method,headers:this.requestHeaders,credentials:this.request.withCredentials?"include":"same-origin",body:["GET","HEAD"].includes(this.method.toUpperCase())?null:e});return se(r,"headers",lt(r.headers,{methodCall:([s,n],o)=>{switch(s){case"append":case"set":{const[i,a]=n;this.request.setRequestHeader(i,a);break}case"delete":{const[i]=n;console.warn(`XMLHttpRequest: Cannot remove a "${i}" header from the Fetch API representation of the "${r.method} ${r.url}" request. XMLHttpRequest headers cannot be removed.`);break}}return o()}})),Lr(r,this.request),this.logger.info("converted request to a Fetch API Request!",r),r}};function zt(t){return typeof location>"u"?new URL(t):new URL(t.toString(),location.href)}function se(t,e,r){Reflect.defineProperty(t,e,{writable:!0,enumerable:!0,value:r})}function Bn({emitter:t,logger:e}){return new Proxy(globalThis.XMLHttpRequest,{construct(r,s,n){e.info("constructed new XMLHttpRequest");const o=Reflect.construct(r,s,n),i=Object.getOwnPropertyDescriptors(r.prototype);for(const u in i)Reflect.defineProperty(o,u,i[u]);const a=new $n(o,e);return a.onRequest=async function({request:u,requestId:d}){const g=new _e(u,{passthrough:()=>{this.logger.info("no mocked response received, performing request as-is...")},respondWith:async p=>{if(jt(p)){this.errorWith(new TypeError("Network error"));return}await this.respondWith(p)},errorWith:p=>{this.logger.info("request errored!",{error:p}),p instanceof Error&&this.errorWith(p)}});this.logger.info("awaiting mocked response..."),this.logger.info('emitting the "request" event for %s listener(s)...',t.listenerCount("request")),await Cr({request:u,requestId:d,controller:g,emitter:t})},a.onResponse=async function({response:u,isMockedResponse:d,request:g,requestId:p}){this.logger.info('emitting the "response" event for %s listener(s)...',t.listenerCount("response")),t.emit("response",{response:u,isMockedResponse:d,request:g,requestId:p})},a.request}})}var Fn=class Mr extends _t{static{this.interceptorSymbol=Symbol("xhr")}constructor(){super(Mr.interceptorSymbol)}checkEnvironment(){return Et("XMLHttpRequest")}setup(){const e=this.logger.extend("setup");e.info('patching "XMLHttpRequest" module...');const r=globalThis.XMLHttpRequest;x(!r[he],'Failed to patch the "XMLHttpRequest" module: already patched.'),globalThis.XMLHttpRequest=Bn({emitter:this.emitter,logger:this.logger}),e.info('native "XMLHttpRequest" module patched!',globalThis.XMLHttpRequest.name),Object.defineProperty(globalThis.XMLHttpRequest,he,{enumerable:!0,configurable:!0,value:!0}),this.subscriptions.push(()=>{Object.defineProperty(globalThis.XMLHttpRequest,he,{value:void 0}),globalThis.XMLHttpRequest=r,e.info('native "XMLHttpRequest" module restored!',globalThis.XMLHttpRequest.name)})}},Qn=class extends mr{constructor(t){super({interceptors:[new Fn,new Mn]}),this.options=t}enable(){super.enable(),this.options.quiet||this.#e()}disable(){super.disable(),this.options.quiet||this.#t()}#e(){console.groupCollapsed(`%c${v.formatMessage("Mocking enabled (fallback mode).")}`,"color:orangered;font-weight:bold;"),console.log("%cDocumentation: %chttps://mswjs.io/docs","font-weight:bold","font-weight:normal"),console.log("Found an issue? https://github.com/mswjs/msw/issues"),console.groupEnd()}#t(){console.log(`%c${v.formatMessage("Mocking disabled.")}`,"color:orangered;font-weight:bold;")}},zn="/mockServiceWorker.js";function Zn(...t){x(!St(),v.formatMessage("Failed to execute `setupWorker` in a non-browser environment"));const e=fs({sources:[],handlers:t});return{async start(r){if(r?.waitUntilReady!=null&&v.warn('The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.'),e.readyState===mt.ENABLED){v.warn('Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.');return}const s=Ct()?await Bt.from({serviceWorker:{url:r?.serviceWorker?.url?.toString()||zn,options:r?.serviceWorker?.options},findWorker:r?.findWorker,quiet:r?.quiet}):new Qn({quiet:r?.quiet});if(e.configure({sources:[s,new mr({interceptors:[new rn]})],onUnhandledFrame:Cs(()=>r?.onUnhandledRequest||"warn"),context:{quiet:r?.quiet}}),await e.enable(),s instanceof Bt){const[,n]=await s.workerPromise;return n}},stop(){if(e.readyState===mt.DISABLED){v.warn('Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.');return}e.disable(),window.postMessage({type:"msw/worker:stop"})},events:e.events,use:e.use.bind(e),resetHandlers:e.resetHandlers.bind(e),restoreHandlers:e.restoreHandlers.bind(e),listHandlers:e.listHandlers.bind(e)}}const Yn="Jeff Mahlas",Zt={"mana.md":`# Mana — the builder

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
Right now everything bends toward one thing: The Circle reaching real people.

## How you operate
- Push for a few real commitments each week, not a long wish list.
- When a goal stalls, ask what the smallest next step is.
- Protect the morning block — it's where the writing actually happens.
- Celebrate a shipped issue briefly, then look at next week.
`,"publisher.md":`# Publisher — The Circle's voice

You help Jeff draft and ship The Circle: one letter a week, plus the odd post.

## The voice
- Plain and warm. Short sentences. One idea per letter.
- Write from lived detail, not advice-column abstractions.
- Faith shows up the way it does in his life — as the reason under the habit,
  never as a sermon. If a line feels like it's selling belief, cut it.
- Every issue leaves the reader with one thing they can do before tomorrow.
`,"learn-coach.md":`# Learn coach

You help Jeff actually keep what he studies instead of collecting tabs.

## How you operate
- Break a skill into a few hands-on lessons, not a reading list.
- Space the reviews. A short recall today beats a long re-read next month.
- Tie each skill to why he's learning it (ship the tool, run the meetup).
- Mark honest progress — building, learning, practiced — and don't inflate it.
`,"grocery-keeper.md":`# Grocery keeper

You manage the shopping list and pantry for Jeff.

## How you operate
- Add items fast, guess a sensible category and icon.
- Track what's in the pantry and flag things about to expire.
- Keep quantities loose and human ("a bunch", "2 kg").
`,"office-keeper.md":`# Office keeper

You keep the catalog of Jeff's projects current and tied to his goals.

## How you operate
- One entry per project: what it's for, its stack, its status.
- Link each project to the goal it serves (mostly The Circle these days).
- Nudge gently when an "active" project hasn't moved in a while.
`,"circle-keeper.md":`# Circle keeper

You help Jeff stay close to the people who matter — mentors, the meetup crew,
family, the early readers who show up.

## How you operate
- Remember the small facts: how they met, what they're into.
- Surface who he hasn't talked to in a while.
- Keep an eye on open follow-ups so nothing drops.
`,"finance-keeper.md":`# Finance keeper

You help Jeff run a simple zero-based budget and watch his net worth — now on a
lighter, part-time income while The Circle grows.

## How you operate
- Every dollar of income gets a job: spend, save, or give.
- Keep the monthly giving on autopilot; treat it as a fixed cost, not a leftover.
- Separate committed (recurring) from actually spent.
- No judgment on spending, just a clear picture.
`},Yt=[{name:"profile.md",relPath:"00_Core/profile.md",group:"Profile",content:`# Jeff — profile

## Who Jeff is
- Backend engineer who dropped to three days a week to give The Circle real hours.
- The Circle is his weekly letter and small community for people building an
  intentional life and career without burning out.
- Grounded by a steady morning: up before the sun, prayer, a walk, a page before
  the phone. The writing happens in that quiet.
- Gives a fixed amount every month, quietly, and would rather you didn't mention it.
- Wants to own his tools and his time, not rent either.

## How to work with him
- Be direct and concrete. He skims, so lead with the point.
- Mornings are focus; protect them.
- He likes options with a clear recommendation, not open-ended questions.
- When he spirals on an idea, name it and bring it back to the next small step.
`},{name:"observations-2026-06.md",relPath:"10_Now/observations-2026-06.md",group:"Observations",content:`# Observations — June 2026

- Ships the letter when he drafts before the phone; loses the week when he doesn't.
- The issues people reply to are the specific ones, not the "5 tips" ones.
- Consistent with habits when they're stacked on the morning routine he already keeps.
- Over-plans the meetup; a single confirmed date did more than a month of lists.
- Gives better when it's automated — willpower is a bad charity plan.
`},{name:"decision-log.md",relPath:"30_Decisions/decision-log.md",group:"Decisions",content:`# Decision log

## 2026-06-02 — Part-time, on purpose
Dropped to three days at the day job. The Circle needs maker hours, not scraps
of a tired evening. Runway's tight but honest.

## 2026-05-11 — One letter a week, same day
Picked a fixed publish day and protected the morning before it. Cadence beats
inspiration. A smaller letter that ships beats a great one that doesn't.

## 2026-04-20 — Giving on autopilot
Set the monthly amount as a standing transfer, first of the month, before
anything else moves. Treat it as rent, not a leftover.
`},{name:"the-circle-playbook.md",relPath:"40_Patterns/the-circle-playbook.md",group:"Patterns",content:`# The Circle — playbook

What it is: a weekly letter and a small room of people trying to build a
meaningful life and career. Not a course, not a hustle. A campfire.

## Rules that keep it honest
- Write one true thing, not ten useful ones.
- Reply to every new reader by hand while that's still possible.
- The meetup matters more than the metrics. Get people in a room.
- Never sell certainty. Share the practice and let people take what fits.

## What "growing" means
Depth before size. Fifty people who show up beat five thousand who skim.
`},{name:"working-style.md",relPath:"40_Patterns/working-style.md",group:"Patterns",content:`# working-style

Jeff executes best when the environment is set up for him, not when he's relying
on willpower. When something isn't getting done, suspect the setup first: too big
a task, too much friction, wrong time of day.

The fix is usually to shrink the next step until it's obviously doable, then let
momentum carry the rest. The morning is the highest-leverage hour he has —
everything good tends to trace back to protecting it.
`}],Jn=()=>new Date().toISOString().slice(0,10),Jt=()=>w()-3*86400,Kn=[{kind:"monday-standup",label:"Monday standup",description:"Start-of-week nudge to set commitments."},{kind:"weekly-review-due",label:"Weekly review",description:"End-of-week reflection reminder."},{kind:"pantry-expiry",label:"Pantry expiry",description:"Heads-up when pantry items are about to expire."},{kind:"circle-followup",label:"Circle follow-ups",description:"Nudges to reconnect with people you haven't talked to."}],Xn=[c.get("/api/me",()=>l.json({login:K,displayName:Yn,profilePic:"https://randomuser.me/api/portraits/men/64.jpg",role:"owner"})),c.get("/api/state",()=>l.json({vaultRoot:"/demo",today:Jn()})),c.get("/api/threads",()=>{const t=h.threads.all().sort((e,r)=>r.last_msg_at-e.last_msg_at).slice(0,20);return l.json({threads:t})}),c.post("/api/threads",async({request:t})=>{const e=await t.json().catch(()=>({})),r=w(),s=h.threads.insert({title:null,kind:typeof e.kind=="string"?e.kind:"chat",persona:e.persona||"goals-advisor",focus_goal_id:null,started_at:r,last_msg_at:r,closed_at:null,summary:null,metadata:{claudeSessionId:`demo-${r}`}});return l.json({id:s.id,claudeSessionId:s.metadata.claudeSessionId})}),c.get("/api/threads/:id/messages",({params:t})=>{const e=Number(t.id);return h.threads.get(e)?l.json({messages:h.messages.where(r=>r.thread_id===e)}):l.json({error:"thread not found"},{status:404})}),c.get("/api/settings",()=>l.json(ee.all())),c.patch("/api/settings",async({request:t})=>{const e=await t.json().catch(()=>({})),r={};for(const[s,n]of Object.entries(e))r[s]=String(n);return l.json(ee.setMany(r))}),c.get("/api/notifications",()=>{const t=h.notifications.where(r=>r.dismissed_at==null),e=t.filter(r=>r.read_at==null).length;return l.json({notifications:t,unread:e})}),c.post("/api/notifications/read-all",()=>{const t=w();return h.notifications.all().forEach(e=>{e.read_at==null&&h.notifications.update(e.id,{read_at:t})}),l.json({ok:!0,count:0})}),c.post("/api/notifications/:id/read",({params:t})=>(h.notifications.update(Number(t.id),{read_at:w()}),l.json({ok:!0}))),c.post("/api/notifications/:id/dismiss",({params:t})=>(h.notifications.update(Number(t.id),{dismissed_at:w()}),l.json({ok:!0}))),c.get("/api/notifications/kinds",()=>{const t=ee.all(),e=Kn.map(r=>({...r,enabled:t[`notif.${r.kind}.enabled`]!=="false"}));return l.json({kinds:e})}),c.post("/api/notifications/mute",async({request:t})=>{const e=await t.json().catch(()=>({})),r=String(e.kind||"").trim();if(!r)return l.json({error:"kind required"},{status:400});const s=!(e.enabled===!1||e.enabled==="false"||e.enabled===0);return ee.setMany({[`notif.${r}.enabled`]:s?"true":"false"}),l.json({ok:!0,kind:r,enabled:s})}),c.get("/api/agents",()=>l.json({files:Object.entries(Zt).map(([t,e])=>({name:t,sizeBytes:e.length,modifiedAt:Jt(),resettable:!1}))})),c.get("/api/agents/:name",({params:t})=>{const e=String(t.name),r=Zt[e];return r==null?l.json({error:"unknown agent doc"},{status:404}):l.json({name:e,content:r})}),c.put("/api/agents/:name",()=>l.json({ok:!0,bytes:0,sha:"demo"})),c.get("/api/agents/:name/history",()=>l.json({history:[]})),c.get("/api/memory/status",()=>l.json({enabled:!0,lastRun:String(w()-43200),lastStatus:"ok: merged 4 notes",pending:[]})),c.post("/api/memory/toggle",async({request:t})=>{const e=await t.json().catch(()=>({}));return l.json({ok:!0,enabled:e.enabled!==!1})}),c.post("/api/memory/run-now",()=>l.json({ok:!0,started:!0},{status:202})),c.get("/api/memory/files",()=>l.json({files:Yt.map(t=>({name:t.name,relPath:t.relPath,sizeBytes:t.content.length,modifiedAt:Jt(),group:t.group}))})),c.put("/api/memory/files/:path",()=>l.json({ok:!0,relPath:"",sizeBytes:0})),c.get("/api/memory/files/:path",({params:t})=>{const e=decodeURIComponent(String(t.path)),r=Yt.find(s=>s.relPath===e);return r?l.json({relPath:e,content:r.content}):l.json({error:"not found"},{status:404})}),c.get("/twemoji/:file",({params:t})=>l.redirect(`https://cdn.jsdelivr.net/gh/jdecked/twemoji/assets/svg/${String(t.file).replace(/\.svg$/,"")}.svg`,302))],Fe={apple:"🍎","green apple":"🍏",banana:"🍌",grape:"🍇",grapes:"🍇",watermelon:"🍉",melon:"🍈",orange:"🍊",tangerine:"🍊",lemon:"🍋",lime:"🍋",mango:"🥭",pineapple:"🍍",strawberry:"🍓",strawberries:"🍓",blueberry:"🫐",blueberries:"🫐",cherry:"🍒",cherries:"🍒",peach:"🍑",pear:"🍐",kiwi:"🥝",coconut:"🥥",avocado:"🥑",tomato:"🍅",potato:"🥔",potatoes:"🥔",carrot:"🥕","bell pepper":"🫑",pepper:"🌶️",chili:"🌶️",cucumber:"🥒",pickle:"🥒",lettuce:"🥬",salad:"🥬",spinach:"🥬",kale:"🥬",broccoli:"🥦",garlic:"🧄",onion:"🧅",scallion:"🧅",mushroom:"🍄",mushrooms:"🍄",eggplant:"🍆",aubergine:"🍆",corn:"🌽","sweet potato":"🍠",ginger:"🫚",peas:"🫛",beans:"🫘","green beans":"🫛",bread:"🍞",loaf:"🍞",baguette:"🥖",croissant:"🥐",bagel:"🥯",pretzel:"🥨",pancake:"🥞",waffle:"🧇",rice:"🍚",pasta:"🍝",spaghetti:"🍝",noodle:"🍜",noodles:"🍜",flour:"🌾",oats:"🌾",oatmeal:"🌾",cereal:"🥣","corn flakes":"🥣",milk:"🥛","almond milk":"🥛","oat milk":"🥛",cheese:"🧀",butter:"🧈",egg:"🥚",eggs:"🥚",yogurt:"🥛",yoghurt:"🥛","ice cream":"🍦",cream:"🥛",chicken:"🍗","chicken breast":"🍗",turkey:"🦃",beef:"🥩","ground beef":"🥩",steak:"🥩",meat:"🥩",pork:"🥓",bacon:"🥓",ham:"🍖",sausage:"🌭","hot dog":"🌭",fish:"🐟",salmon:"🐟",tuna:"🐟",shrimp:"🦐",prawn:"🦐",crab:"🦀",lobster:"🦞",tofu:"🧊",honey:"🍯",jam:"🍓","peanut butter":"🥜",peanut:"🥜",peanuts:"🥜",nuts:"🥜",almond:"🥜",salt:"🧂",sugar:"🍬",oil:"🫒","olive oil":"🫒",olive:"🫒",olives:"🫒",soup:"🥫",canned:"🥫",sauce:"🥫",ketchup:"🍅",honeycomb:"🍯",cookie:"🍪",cookies:"🍪",chocolate:"🍫",candy:"🍬",lollipop:"🍭",cake:"🍰","birthday cake":"🎂",pie:"🥧",donut:"🍩",doughnut:"🍩",popcorn:"🍿",chips:"🍟",fries:"🍟",crisps:"🍟",pizza:"🍕",burger:"🍔",hamburger:"🍔",sandwich:"🥪",taco:"🌮",burrito:"🌯",sushi:"🍣",dumpling:"🥟","french fries":"🍟",water:"💧",coffee:"☕",tea:"🍵",juice:"🧃",soda:"🥤",cola:"🥤",beer:"🍺",wine:"🍷",whiskey:"🥃","soft drink":"🥤",smoothie:"🥤","toilet paper":"🧻","paper towel":"🧻","paper towels":"🧻",tissue:"🧻",tissues:"🧻",napkin:"🧻",soap:"🧼","dish soap":"🧼",detergent:"🧴",shampoo:"🧴",conditioner:"🧴",lotion:"🧴",toothpaste:"🪥",toothbrush:"🪥","trash bag":"🗑️","trash bags":"🗑️","garbage bag":"🗑️",battery:"🔋",batteries:"🔋","light bulb":"💡",candle:"🕯️",matches:"🔥",foil:"🧻",sponge:"🧽",bleach:"🧴",medicine:"💊",pill:"💊",vitamin:"💊",vitamins:"💊",bandage:"🩹",ekmek:"🍞",süt:"🥛",peynir:"🧀",yumurta:"🥚",domates:"🍅",soğan:"🧅",patates:"🥔",elma:"🍎",muz:"🍌",çay:"🍵",kahve:"☕",su:"💧",tavuk:"🍗",balık:"🐟",pirinç:"🍚",zeytin:"🫒",bal:"🍯"},Kt={produce:"🥬",fruit:"🍎",fruits:"🍎",vegetable:"🥦",vegetables:"🥦",veg:"🥦",dairy:"🥛",bakery:"🍞",bread:"🍞",meat:"🥩",seafood:"🐟",fish:"🐟",protein:"🥩",pantry:"🥫",canned:"🥫",snacks:"🍪",snack:"🍪",sweets:"🍬",candy:"🍬",drinks:"🥤",beverages:"🥤",beverage:"🥤",frozen:"🧊",spices:"🧂",spice:"🧂",household:"🧻",cleaning:"🧼","personal care":"🧴",toiletries:"🧴",health:"💊",baby:"🍼",pet:"🐾"},Vn=Object.keys(Fe).sort((t,e)=>e.length-t.length);function Xt(t){return t.toLowerCase().replace(/[^\p{L}\s]/gu," ").replace(/\s+/g," ").trim()}function eo(t,e){const r=Xt(t);if(r){if(Fe[r])return Fe[r];for(const s of Vn)if(new RegExp(`(^|\\s)${s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(\\s|$)`).test(r))return Fe[s]}if(e){const s=Xt(e);if(Kt[s])return Kt[s]}return null}const dt=()=>l.json({ok:!0}),to=[c.get("/api/grocery",({request:t})=>{const e=new URL(t.url),r=e.searchParams.get("status"),s=r==="shopping"||r==="pantry"||r==="used",n=e.searchParams.get("list")==="buy"?"buy":"grocery";let o=h.grocery.all().filter(i=>(i.list??"grocery")===n);return s&&(o=o.filter(i=>i.status===r)),o=o.sort((i,a)=>i.sort_order-a.sort_order),l.json({items:o})}),c.post("/api/grocery",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim();if(!r)return l.json({error:"name is required"},{status:400});const s=e.category!=null&&String(e.category).trim()||null,n=e.list==="buy"?"buy":"grocery",o=h.grocery.all().reduce((a,u)=>Math.max(a,u.sort_order),-1),i=h.grocery.insert({name:r,status:"shopping",quantity:e.quantity!=null&&String(e.quantity).trim()||null,category:s,notes:e.notes!=null&&String(e.notes).trim()||null,added_by:K,added_at:w(),bought_at:null,used_at:null,shelf_life_days:null,emoji:eo(r,s),sort_order:o+1,list:n});return l.json({id:i.id})}),c.patch("/api/grocery/:id",async({params:t,request:e})=>{const r=Number(t.id),s=await e.json(),n={};return typeof s.status=="string"&&["shopping","pantry","used"].includes(s.status)&&(n.status=s.status,s.status==="pantry"&&(n.bought_at=w()),s.status==="used"&&(n.used_at=w())),typeof s.name=="string"&&(n.name=s.name),"quantity"in s&&(n.quantity=s.quantity==null?null:String(s.quantity)),"category"in s&&(n.category=s.category==null?null:String(s.category)),"notes"in s&&(n.notes=s.notes==null?null:String(s.notes)),"shelf_life_days"in s&&(n.shelf_life_days=s.shelf_life_days==null?null:Number(s.shelf_life_days)),"emoji"in s&&(n.emoji=s.emoji==null?null:String(s.emoji)),h.grocery.update(r,n),dt()}),c.delete("/api/grocery/:id",({params:t})=>(h.grocery.remove(Number(t.id)),dt())),c.post("/api/grocery/:id/reorder",async({params:t,request:e})=>{const r=await e.json(),s=Number(r.targetIndex);if(!Number.isFinite(s))return l.json({error:"targetIndex required"},{status:400});const n=h.grocery.get(Number(t.id));return n&&h.grocery.reorder(n.id,s,"sort_order",o=>o.status===n.status&&(o.list??"grocery")===(n.list??"grocery")),dt()})],Vt=()=>l.json({ok:!0}),ro=["active","paused","idea","shipped","archived"],ut=t=>typeof t=="string"&&ro.includes(t),ne=t=>t!=null&&String(t).trim()?String(t).trim():null,so=[c.get("/api/office",({request:t})=>{const e=new URL(t.url).searchParams.get("status");let r=h.office.all();return ut(e)&&(r=r.filter(s=>s.status===e)),r=r.sort((s,n)=>n.updated_at-s.updated_at),l.json({apps:r})}),c.post("/api/office",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim();if(!r)return l.json({error:"name is required"},{status:400});const s=w(),n=h.office.insert({user_login:K,name:r,path:ne(e.path),purpose:ne(e.purpose),goal:ne(e.goal),stack:ne(e.stack),repo:ne(e.repo),icon:ne(e.icon),status:ut(e.status)?e.status:"active",created_at:s,updated_at:s});return l.json({id:n.id})}),c.patch("/api/office/:id",async({params:t,request:e})=>{const r=await e.json(),s={updated_at:w()};for(const n of["name","path","purpose","goal","stack","repo","icon"])n in r&&(s[n]=r[n]==null?null:String(r[n]));if("status"in r){if(!ut(r.status))return l.json({error:"invalid status"},{status:400});s.status=r.status}return h.office.update(Number(t.id),s),Vt()}),c.delete("/api/office/:id",({params:t})=>(h.office.remove(Number(t.id)),Vt()))],no=[c.get("/api/inbox",({request:t})=>{const e=new URL(t.url),r=e.searchParams.get("to")||void 0,s=e.searchParams.get("from")||void 0,n=e.searchParams.get("agent")||void 0,o=e.searchParams.get("unread")==="1";let i=h.inbox.all();return r&&(i=i.filter(a=>a.to_agent===r)),s&&(i=i.filter(a=>a.from_agent===s)),n&&(i=i.filter(a=>a.from_agent===n||a.to_agent===n)),o&&(i=i.filter(a=>a.read_at==null)),i=i.sort((a,u)=>u.created_at-a.created_at),l.json({messages:i})}),c.post("/api/inbox/:id/read",({params:t})=>(h.inbox.update(Number(t.id),{read_at:w()}),l.json({ok:!0})))],er="/assets/mosque-bg-img-CHYGdzKg.webp",oo=`<div class="space-y-3">
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
`,io=`<div class="space-y-3">
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
`,ao=`<div>
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
    <g data-obj="image-1" transform="matrix(2.45,0,0,2.45,-584.256,-340.232)"><image href="${er}" xlink:href="${er}" x="270" y="188.41" width="260" height="143.19" preserveAspectRatio="xMidYMid meet"></image></g></svg>
  </div>
</div>
`,ht="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2036%2036'%3e%3cpath%20fill='%23C1694F'%20d='M31.595%2015.007c-1.75-3.623-5.934-9.053-9.531-9.053-4.071%200-8.228%207.259-10.071%2010.378-.176.299-.321.578-.464.857-3.371-1.182-.536-6.631-.536-10.463%200-.957-.138-1.637-.44-2.119.489-.606.586-1.347.192-1.699-.413-.367-1.195-.163-1.745.456-.08.089-.129.186-.189.28-.424-.067-.903-.102-1.472-.102-.565%200-2.916.266-4.229.791C-.007%205.582.993%209%201.993%209h4c1%200%20.756%202.31%200%204.726-.83%202.654-1.439%205.145-1%206.606.808%202.687%203.712%203.589%206.164%203.86%201.059%202.659%201.517%206.455%201.473%207.962-.059%202%201.94%202.059%201.999.059.036-1.211-.102-3.68.143-5.781.658%202.833.935%206.097.899%207.314-.059%201.998%201.94%202.057%201.999.059.047-1.602-.182-6.36.559-8.982.507.017%201.044.03%201.619.035%201.774.09%203.726.085%205.506-.015%201.05%201.592%201.996%202.991%201.982%203.435-.029%201-1.117%203.969-1.146%204.969-.029%201%20.94%202.029%201.999.059.648-1.205%201.324-3.419%201.536-5.421.171.364.274.656.269.843-.029%201-.97%203.93-.999%204.93-.029.998.941%202.027%201.999.059%201.059-1.971%201.998-4.898%201.058-6.928-.797-1.72.431-4.165.824-7.914%201.082%201.665%201.117%203.351%201.118%203.459%200%20.553.447%201%201%201%20.553%200%201-.447%201-1-.001-.215-.067-4.85-4.399-7.327z'/%3e%3cpath%20fill='%23292F33'%20d='M8.28%205.571c-.016.552-.477.986-1.029.97-.552-.016-.986-.477-.97-1.029.016-.552.477-.986%201.029-.97.552.016.986.477.97%201.029z'/%3e%3c/svg%3e",tr="/assets/aurora-fjord-img-DAHDArrG.webp",lo=`<div>
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
      <image href="${ht}" x="335" y="488" width="90" height="70" filter="url(#dn-sil)" transform="matrix(0.478,0,0,0.478,718.439,153.876)"></image>
      <image href="${ht}" x="475" y="502" width="90" height="70" filter="url(#dn-sil)" transform="matrix(0.632,0,0,0.632,518.958,59.096)"></image>
      <image href="${ht}" x="615" y="492" width="90" height="70" filter="url(#dn-sil)" transform="matrix(0.738,0,0,0.738,289.2,-1.182)"></image>
    </svg>
  </div>
  <p class="text-xs text-muted">Desert night — crescent moon, Milky Way, shooting star, Orion's belt, Venus, oasis on the ridge, Bedouin camp with campfire glow, caravan crossing the foreground dune.</p>
</div>`,co=`<div>
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
    <g data-obj="image-2" transform="matrix(0.476,0,0,0.476,583.156,-35.713)"><image href="${tr}" xlink:href="${tr}" x="396.7" y="155" width="206.59" height="310" preserveAspectRatio="xMidYMid meet"></image></g></svg>
  </div>
  <p class="text-xs text-muted">Aurora fjord — green-and-violet curtains over a mirror-still inlet, gibbous moon, pine-lined shore, a lone cabin with one lit window, all of it doubled in the black water.</p>
</div>`,Tr=t=>`<!doctype html><html><head><meta charset="utf-8">
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
</style></head><body><div class="wrap">${t}</div></body></html>`,uo=Tr(`<p class="eyebrow">Mana, in one idea</p>
   <h1>A private cockpit <span class="accent">you talk to.</span></h1>
   <p class="lede">Mana is a self-hosted personal operating layer. One place for your goals, money, groceries, people, and projects, all driven by chat or voice. You run it yourself, on your own machine. Nobody else gets in.</p>
   <div class="cards">
     <div class="card"><h3>You own it</h3><p>It runs on your hardware with your data. No accounts to sign up for, no servers reading your life.</p></div>
     <div class="card"><h3>You just talk to it</h3><p>Say what you want in plain language and the right helper takes care of it. Every tool can also be used by hand.</p></div>
     <div class="card"><h3>It compounds</h3><p>Each tool builds on the same foundation, so the whole thing gets more useful the more you use it.</p></div>
   </div>
   <div class="note">This is a live demo. Everything works by hand on your own browser storage. The one thing it can't do here is think, that's what you unlock by running your own Mana with a model connected.</div>`),ho=Tr(`<p class="eyebrow">What's inside</p>
   <h1>One place, <span class="accent">many tools.</span></h1>
   <p class="lede">Each tool is a panel plus a helper that can do everything the panel can. Add the ones you want, ignore the rest.</p>
   <div class="cards">
     <div class="card"><h3>Goals</h3><p>Long-term goals, key results, and the few commitments that matter this week.</p><span class="tag">plan</span></div>
     <div class="card"><h3>Grocery</h3><p>A shared shopping and pantry list, with expiry tracking.</p><span class="tag">home</span></div>
     <div class="card"><h3>Finance</h3><p>Zero-based budget, recurring payments, and net worth over time.</p><span class="tag">money</span></div>
     <div class="card"><h3>Circle</h3><p>A light memory of the people in your life and what you talked about.</p><span class="tag">people</span></div>
     <div class="card"><h3>Office</h3><p>A catalog of the projects you're building and what they're for.</p><span class="tag">work</span></div>
   </div>`),Qe="mana.demo.canvas",po={"mosque-bg.html":ao,"mana.html":uo,"the-tools.html":ho,"aurora-fjord.html":co,"desert-night.html":lo,"castle-peak.html":oo,"mosque.html":io};function De(){let t=null;try{const r=localStorage.getItem(Qe);r&&(t=JSON.parse(r))}catch{}t||(t={});let e=!1;for(const[r,s]of Object.entries(po))r in t||(t[r]=s,e=!0);return(e||!localStorage.getItem(Qe))&&localStorage.setItem(Qe,JSON.stringify(t)),t}function rr(t){localStorage.setItem(Qe,JSON.stringify(t))}const fo=[c.get("/api/canvas/files",()=>{const t=De();return l.json({files:Object.entries(t).map(([e,r])=>({name:e,sizeBytes:r.length,modifiedAt:w()}))})}),c.get("/api/canvas/files/:name",({params:t})=>{const e=String(t.name),r=De()[e];return r==null?l.json({error:"not found"},{status:404}):l.json({name:e,content:r,modifiedAt:w()})}),c.put("/api/canvas/files/:name",async({params:t,request:e})=>{const r=String(t.name),s=await e.json().catch(()=>({}));if(typeof s.content!="string")return l.json({error:"missing content"},{status:400});const n=De();return n[r]=s.content,rr(n),l.json({name:r,modifiedAt:w()})}),c.delete("/api/canvas/files/:name",({params:t})=>{const e=String(t.name),r=De();return e in r?(delete r[e],rr(r),l.json({ok:!0})):l.json({error:"not found"},{status:404})}),c.post("/api/upload",async({request:t})=>{const e=await t.json().catch(()=>({})),r=typeof e.dataUrl=="string"?e.dataUrl:"";return r.startsWith("data:image/")?l.json({id:`demo-${w()}`,path:"",url:r}):l.json({error:"invalid dataUrl"},{status:400})})],go=`# Welcome to Notes

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
`,mo=`# The Circle — meetup #1

First time getting readers in a room. Keep it small and warm, not a conference.

## Who's helping

| Person | Role | Status |
| --- | --- | --- |
| Yusuf | venue + run-of-show | on it |
| Hana | sign-ups at the door | confirmed |
| Me | the talk, the tea | drafting |

## Still to sort

- [x] Pick a date
- [ ] Send Yusuf the three venue options
- [ ] Write the twenty-minute talk from the best three issues
- [ ] Open sign-ups to members first

The whole idea is depth before size. Fifty people who show up beat five thousand who skim.
`,ze="mana.demo.notes",yo={"welcome.md":go,"the-circle-meetup.md":mo};function Ge(){let t=null;try{const r=localStorage.getItem(ze);r&&(t=JSON.parse(r))}catch{}t||(t={});let e=!1;for(const[r,s]of Object.entries(yo))r in t||(t[r]=s,e=!0);return(e||!localStorage.getItem(ze))&&localStorage.setItem(ze,JSON.stringify(t)),t}function sr(t){localStorage.setItem(ze,JSON.stringify(t))}const wo=[c.get("/api/notes/files",()=>{const t=Ge();return l.json({files:Object.entries(t).map(([e,r])=>({name:e,sizeBytes:r.length,modifiedAt:w()}))})}),c.get("/api/notes/files/:name",({params:t})=>{const e=String(t.name),r=Ge()[e];return r==null?l.json({error:"not found"},{status:404}):l.json({name:e,content:r,modifiedAt:w()})}),c.put("/api/notes/files/:name",async({params:t,request:e})=>{const r=String(t.name),s=await e.json().catch(()=>({}));if(typeof s.content!="string")return l.json({error:"missing content"},{status:400});const n=Ge();return n[r]=s.content,sr(n),l.json({name:r,modifiedAt:w()})}),c.delete("/api/notes/files/:name",({params:t})=>{const e=String(t.name),r=Ge();return e in r?(delete r[e],sr(r),l.json({ok:!0})):l.json({error:"not found"},{status:404})})],U=()=>l.json({ok:!0}),He=["EUR","USD","GBP","TRY","MYR","SGD","CHF","AED"],xe=()=>new Date().toISOString().slice(0,10).slice(0,7),pt=()=>new Date().toISOString().slice(0,10),A=()=>ee.get("finance.base")||"USD",le=t=>ee.get(`finance.${t}`),oe=(t,e)=>ee.setMany({[`finance.${t}`]:e}),W=(t=!0)=>h.financeCategories.where(e=>t?!0:e.active===1).sort((e,r)=>e.display_order-r.display_order),Ze=(t=!0)=>h.financeAccounts.where(e=>t?!0:e.archived===0),Rt=t=>h.financeTransactions.where(e=>t?e.date.slice(0,7)===t:!0).sort((e,r)=>r.date.localeCompare(e.date)),bo=t=>({...t,base:t.original_amount,baseCurrency:A()});function Or(t){const e=[],[r,s]=t.split("-").map(Number);for(const n of h.financeRecurring.all()){if(t<n.start_date.slice(0,7)||n.end_date&&t>n.end_date.slice(0,7))continue;const o=Number(n.start_date.slice(5,7)),i=n.start_date.slice(8,10)||"01";let a=!1;n.frequency==="monthly"||n.frequency==="weekly"?a=!0:n.frequency==="yearly"?a=s===o:n.frequency==="quarterly"&&(a=((s-o)%3+3)%3===0),a&&e.push({rec:n,date:`${r}-${String(s).padStart(2,"0")}-${i}`})}return e}function vo(t){const e=W(!0),r=new Map(h.financeBudgets.where(m=>m.month===t).map(m=>[m.category_id,m.amount])),s=Rt(t),n=new Map;let o=0;for(const m of s)m.type==="income"?o+=m.original_amount:m.category_id!=null&&n.set(m.category_id,(n.get(m.category_id)??0)+m.original_amount);const i=Or(t),a=new Map;let u=0;const d=[];for(const m of i){const E=m.rec.original_amount;m.rec.type==="income"?(u+=E,d.push({name:m.rec.name,date:m.date,base:E,recurring_id:m.rec.id})):m.rec.category_id!=null&&a.set(m.rec.category_id,(a.get(m.rec.category_id)??0)+E)}d.sort((m,E)=>m.date.localeCompare(E.date));const g=e.map(m=>({id:m.id,name:m.name,icon:m.icon,active:m.active,budget:r.get(m.id)??0,spent:n.get(m.id)??0,committed:a.get(m.id)??0})),p=g.reduce((m,E)=>m+E.budget,0),f=g.reduce((m,E)=>m+E.spent,0),y=g.reduce((m,E)=>m+E.committed,0),k=le(`savings_goal:${t}`),b=k!=null&&k!==""&&Number.isFinite(Number(k))?Number(k):null,re=new Map(e.map(m=>[m.id,m.name])),M=i.filter(m=>m.rec.type==="expense").map(m=>({name:m.rec.name,date:m.date,category:m.rec.category_id!=null?re.get(m.rec.category_id)??null:null,base:m.rec.original_amount})).sort((m,E)=>m.date.localeCompare(E.date)),Me=M.reduce((m,E)=>m+E.base,0);return{month:t,baseCurrency:A(),income:{actual:o,committed:u,committedItems:d},categories:g,totalBudget:p,totalSpent:f,totalCommitted:y,leftToSpend:o+u-f,toAllocate:o+u-p,savingsGoal:b,fixedPayments:{count:M.length,total:Me,items:M}}}function ko(t){const e=f=>`${t}-${String(f).padStart(2,"0")}`,r=Rt().filter(f=>f.date.slice(0,4)===String(t)),s=W(!0),n=new Map(s.map(f=>[f.id,{name:f.name,icon:f.icon}])),o=Array.from({length:12},(f,y)=>({month:e(y+1),income:0,spent:0,saved:0})),i=new Map;for(const f of r){const y=Number(f.date.slice(5,7))-1;y<0||y>11||(f.type==="income"?o[y].income+=f.original_amount:f.category_id!=null&&(o[y].spent+=f.original_amount,i.has(f.category_id)||i.set(f.category_id,Array(12).fill(0)),i.get(f.category_id)[y]+=f.original_amount))}const a=xe();for(let f=1;f<=12&&!(e(f)>a);f++)for(const y of Or(e(f)))y.rec.type==="income"&&(o[f-1].income+=y.rec.original_amount);for(const f of o)f.saved=f.income-f.spent;const u=[...i.entries()].map(([f,y])=>({id:f,name:n.get(f)?.name??"Uncategorized",icon:n.get(f)?.icon??null,monthly:y,total:y.reduce((k,b)=>k+b,0)})).sort((f,y)=>y.total-f.total),d=o.reduce((f,y)=>f+y.income,0),g=o.reduce((f,y)=>f+y.spent,0),p=d-g;return{year:t,baseCurrency:A(),months:o,categories:u,totals:{income:d,spent:g,saved:p,savingsRate:d>0?p/d:0}}}const nr=["Liquid Assets","Investments","Physical Assets","Debts"];function xo(t){const e=Ze(!0),r=new Map(e.map(y=>[y.id,y])),s=h.financeNetworth.all().sort((y,k)=>y.date.localeCompare(k.date)),n=new Map;for(const y of s){const k=y.date.slice(0,7),b=n.get(y.account_id);(!b||k>b)&&n.set(y.account_id,k)}const o=y=>{const k=new Map;for(const b of s)b.date.slice(0,7)<=y&&k.set(b.account_id,{date:b.date,amount:b.original_amount,currency:b.original_currency});for(const b of[...k.keys()])(n.get(b)??"")<y&&k.delete(b);return k},i=(y,k)=>y==="debt"?-k:k,a=o(t),u=new Map;let d=0;for(const[y,k]of a){const b=r.get(y);if(!b)continue;const re=i(b.type,k.amount);d+=re;const M=b.bucket&&nr.includes(b.bucket)?b.bucket:"Other";u.has(M)||u.set(M,{bucket:M,total:0,accounts:[]});const Me=u.get(M);Me.total+=re,Me.accounts.push({id:b.id,name:b.name,subtype:b.subtype,type:b.type,currency:b.currency,original:k.amount,base:k.amount,asOf:k.date})}const g=[...nr,"Other"].map(y=>u.get(y)).filter(y=>!!y),f=[...new Set(s.map(y=>y.date.slice(0,7)))].sort().map(y=>{let k=0;for(const[b,re]of o(y)){const M=r.get(b);M&&(k+=i(M.type,re.amount))}return{month:y,net:k}});return{month:t,baseCurrency:A(),total:d,groups:g,series:f}}const So=[c.get("/api/finance/settings",()=>{let t=null;const e=le("recurring_columns");if(e)try{t=JSON.parse(e)}catch{}let r=[A()];const s=le("currencies");if(s)try{const i=JSON.parse(s);Array.isArray(i)&&i.length&&(r=i.map(String))}catch{}let n={savingsGoal:!0,fixedPayments:!0,expenseDonut:!0};const o=le("cards");if(o)try{n={...n,...JSON.parse(o)}}catch{}return l.json({baseCurrency:A(),recurringColumns:t,currencies:r,lastCurrency:le("last_currency")||A(),supportedCurrencies:He,cards:n})}),c.post("/api/finance/cards",async({request:t})=>{const e=await t.json(),r={savingsGoal:!0,fixedPayments:!0,expenseDonut:!0},s=le("cards");if(s)try{Object.assign(r,JSON.parse(s))}catch{}for(const n of["savingsGoal","fixedPayments","expenseDonut"])e.cards&&n in e.cards&&(r[n]=!!e.cards[n]);return oe("cards",JSON.stringify(r)),l.json({ok:!0,cards:r})}),c.post("/api/finance/recurring-columns",async({request:t})=>{const e=await t.json();return Array.isArray(e.columns)?(oe("recurring_columns",JSON.stringify(e.columns.map(String))),U()):l.json({error:"columns array required"},{status:400})}),c.post("/api/finance/currencies",async({request:t})=>{const e=await t.json();if(!Array.isArray(e.currencies))return l.json({error:"currencies array required"},{status:400});const r=new Set,s=e.currencies.map(n=>String(n).toUpperCase().trim()).filter(n=>He.includes(n)&&!r.has(n)&&(r.add(n),!0));return s.length?(oe("currencies",JSON.stringify(s)),l.json({ok:!0,currencies:s})):l.json({error:"no valid currencies"},{status:400})}),c.post("/api/finance/base-currency",async({request:t})=>{const e=await t.json(),r=String(e.currency||"").toUpperCase().trim();return He.includes(r)?(oe("base",r),l.json({ok:!0,baseCurrency:r})):l.json({error:"currency must be supported"},{status:400})}),c.get("/api/finance/budget",({request:t})=>{const e=new URL(t.url).searchParams.get("month")||xe();return/^\d{4}-\d{2}$/.test(e)?l.json(vo(e)):l.json({error:"month must be YYYY-MM"},{status:400})}),c.get("/api/finance/year",({request:t})=>{const e=Number(new URL(t.url).searchParams.get("year")),r=Number.isInteger(e)&&e>=2e3&&e<=2100?e:new Date().getUTCFullYear();return l.json(ko(r))}),c.get("/api/finance/networth",({request:t})=>{const e=new URL(t.url).searchParams.get("month"),r=e&&/^\d{4}-\d{2}$/.test(e)?e:xe();return l.json(xo(r))}),c.get("/api/finance/transactions",({request:t})=>{const e=new URL(t.url).searchParams,r=e.get("month"),s=e.get("categoryId"),n=e.get("type");let o=Rt(r&&/^\d{4}-\d{2}$/.test(r)?r:void 0);return s&&(o=o.filter(i=>i.category_id===Number(s))),(n==="income"||n==="expense")&&(o=o.filter(i=>i.type===n)),l.json({items:o.map(bo)})}),c.post("/api/finance/transaction",async({request:t})=>{const e=await t.json(),r=Number(e.amount);if(!Number.isFinite(r)||r<=0)return l.json({error:"amount must be positive"},{status:400});const s=e.type==="income"?"income":"expense",n=typeof e.date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e.date)?e.date:pt();let o=null;if(s==="expense"){if(e.categoryId!=null)o=Number(e.categoryId);else if(e.category){const d=W(!0).find(g=>g.name.toLowerCase()===String(e.category).toLowerCase());o=d?d.id:h.financeCategories.insert({user_login:"owner",name:String(e.category),icon:null,active:1,display_order:W(!0).length,created_at:w()}).id}}let i=null;e.accountId!=null&&(i=Number(e.accountId));const a=String(e.currency||A()).toUpperCase(),u=h.financeTransactions.insert({user_login:"owner",type:s,date:n,original_amount:r,original_currency:a,category_id:o,account_id:i,name:e.name!=null?String(e.name):null,source:s==="income"&&e.source!=null?String(e.source):null,label:null,notes:e.notes!=null?String(e.notes):null,recurring_id:null,period:null,created_at:w()});return He.includes(a)&&oe("last_currency",a),l.json({id:u.id})}),c.patch("/api/finance/transaction/:id",async({params:t,request:e})=>{const r=await e.json(),s={};return r.date!=null&&(s.date=String(r.date)),r.amount!=null&&(s.original_amount=Number(r.amount)),r.currency!=null&&(s.original_currency=String(r.currency).toUpperCase()),r.categoryId!==void 0&&(s.category_id=r.categoryId==null?null:Number(r.categoryId)),r.name!==void 0&&(s.name=r.name==null?null:String(r.name)),r.notes!==void 0&&(s.notes=r.notes==null?null:String(r.notes)),h.financeTransactions.update(Number(t.id),s),U()}),c.delete("/api/finance/transaction/:id",({params:t})=>(h.financeTransactions.remove(Number(t.id)),U())),c.get("/api/finance/categories",({request:t})=>l.json({items:W(new URL(t.url).searchParams.get("all")==="1")})),c.post("/api/finance/category",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim();if(!r)return l.json({error:"name is required"},{status:400});const s=h.financeCategories.insert({user_login:"owner",name:r,icon:e.icon!=null?String(e.icon):null,active:1,display_order:W(!0).length,created_at:w()});return l.json({id:s.id})}),c.patch("/api/finance/category/:id",async({params:t,request:e})=>{const r=await e.json(),s={};return r.active!==void 0&&(s.active=r.active?1:0),typeof r.name=="string"&&(s.name=r.name),"icon"in r&&(s.icon=r.icon==null?null:String(r.icon)),h.financeCategories.update(Number(t.id),s),U()}),c.delete("/api/finance/category/:id",({params:t})=>l.json({ok:h.financeCategories.remove(Number(t.id))})),c.post("/api/finance/budget",async({request:t})=>{const e=await t.json(),r=Number(e.categoryId),s=Number(e.amount),n=typeof e.month=="string"&&/^\d{4}-\d{2}$/.test(e.month)?e.month:xe();if(!Number.isFinite(r)||!Number.isFinite(s))return l.json({error:"categoryId and amount required"},{status:400});const o=h.financeBudgets.where(i=>i.month===n&&i.category_id===r)[0];return o?h.financeBudgets.update(o.id,{amount:s}):h.financeBudgets.insert({user_login:"owner",month:n,category_id:r,amount:s}),U()}),c.post("/api/finance/savings-goal",async({request:t})=>{const e=await t.json(),r=typeof e.month=="string"&&/^\d{4}-\d{2}$/.test(e.month)?e.month:xe(),s=Number(e.amount);return!Number.isFinite(s)||s<0?l.json({error:"amount must be >= 0"},{status:400}):(oe(`savings_goal:${r}`,String(Math.round(s))),U())}),c.get("/api/finance/accounts",({request:t})=>l.json({items:Ze(new URL(t.url).searchParams.get("all")==="1")})),c.post("/api/finance/account",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim(),s=String(e.currency||"").trim();if(!r||!s)return l.json({error:"name and currency required"},{status:400});const n=h.financeAccounts.insert({user_login:"owner",name:r,type:e.type==="debt"?"debt":"asset",bucket:e.bucket?String(e.bucket):null,subtype:e.subtype?String(e.subtype):null,currency:s,archived:0,created_at:w()});return l.json({id:n.id})}),c.post("/api/finance/networth",async({request:t})=>{const e=await t.json(),r=Number(e.accountId),s=Number(e.amount);if(!Number.isFinite(r)||!Number.isFinite(s))return l.json({error:"accountId and amount required"},{status:400});const n=Ze(!0).find(u=>u.id===r);if(!n)return l.json({error:"account not found"},{status:404});const o=typeof e.date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e.date)?e.date:pt(),i=h.financeNetworth.where(u=>u.date===o&&u.account_id===r)[0],a=e.currency?String(e.currency).toUpperCase():n.currency;return i?h.financeNetworth.update(i.id,{original_amount:s,original_currency:a}):h.financeNetworth.insert({user_login:"owner",date:o,account_id:r,original_amount:s,original_currency:a,notes:null,created_at:w()}),U()}),c.get("/api/finance/recurring",()=>{const t=new Map(W(!0).map(n=>[n.id,n.name])),e=new Map(W(!0).map(n=>[n.id,n.icon])),r=new Map(Ze(!0).map(n=>[n.id,n.name])),s=h.financeRecurring.all().map(n=>({...n,base:n.original_amount,baseCurrency:A(),category_name:n.category_id!=null?t.get(n.category_id)??null:null,category_icon:n.category_id!=null?e.get(n.category_id)??null:null,account_name:n.account_id!=null?r.get(n.account_id)??null:null}));return l.json({items:s})}),c.post("/api/finance/recurring",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim(),s=Number(e.amount);if(!r||!Number.isFinite(s)||s<=0)return l.json({error:"name and positive amount required"},{status:400});const n=e.type==="income"?"income":"expense";let o=null;if(n==="expense"&&e.category){const u=W(!0).find(d=>d.name.toLowerCase()===String(e.category).toLowerCase());o=u?u.id:h.financeCategories.insert({user_login:"owner",name:String(e.category),icon:null,active:1,display_order:W(!0).length,created_at:w()}).id}else e.categoryId!=null&&(o=Number(e.categoryId));const i=typeof e.start=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e.start)?e.start:pt(),a=h.financeRecurring.insert({user_login:"owner",name:r,type:n,category_id:o,account_id:null,frequency:e.frequency==="weekly"||e.frequency==="quarterly"||e.frequency==="yearly"?e.frequency:"monthly",original_amount:s,original_currency:String(e.currency||A()),start_date:i,end_date:typeof e.end=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e.end)?e.end:null,last_fired_period:null,notes:null,created_at:w()});return l.json({id:a.id})}),c.patch("/api/finance/recurring/:id",async({params:t,request:e})=>{const r=await e.json(),s={};return typeof r.name=="string"&&r.name.trim()&&(s.name=r.name.trim()),(r.type==="income"||r.type==="expense")&&(s.type=r.type),r.amount!=null&&Number.isFinite(Number(r.amount))&&(s.original_amount=Number(r.amount)),typeof r.currency=="string"&&r.currency.trim()&&(s.original_currency=r.currency.toUpperCase().trim()),(r.frequency==="weekly"||r.frequency==="monthly"||r.frequency==="quarterly"||r.frequency==="yearly")&&(s.frequency=r.frequency),typeof r.start=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(r.start)&&(s.start_date=r.start),"end"in r&&(s.end_date=typeof r.end=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(r.end)?r.end:null),h.financeRecurring.update(Number(t.id),s),U()}),c.delete("/api/finance/recurring/:id",({params:t})=>(h.financeRecurring.remove(Number(t.id)),U()))],C=()=>l.json({ok:!0}),ie=t=>t!=null&&String(t).trim()?String(t).trim():null,_o=t=>h.actions.where(e=>e.person_id===t&&e.done===0).length,Lo=[c.post("/api/circle/focus",()=>C()),c.get("/api/circle",({request:t})=>{const e=new URL(t.url).searchParams.get("circle"),r=h.circles.where(o=>o.active===1).sort((o,i)=>o.sort_order-i.sort_order||o.id-i.id);let s=h.people.all();if(e){const o=r.find(i=>i.name.toLowerCase()===e.toLowerCase())?.id;s=s.filter(i=>i.circle_id===o)}const n=s.sort((o,i)=>o.name.localeCompare(i.name)).map(o=>({...o,open_actions:_o(o.id)}));return l.json({circles:r,people:n,pending_count:0})}),c.post("/api/circle/person",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim();if(!r)return l.json({error:"name is required"},{status:400});const s=e.circle?h.circles.all().find(i=>i.name.toLowerCase()===String(e.circle).toLowerCase())?.id??null:null,n=w(),o=h.people.insert({user_login:K,name:r,circle_id:s,photo:typeof e.photo=="string"?e.photo:null,title:ie(e.title),company:ie(e.company),location:ie(e.location),email:ie(e.email),phone:ie(e.phone),tags:Array.isArray(e.tags)?JSON.stringify(e.tags.map(String)):null,bio:ie(e.bio),next_meet_date:null,next_meet_notify:0,last_talked_at:null,last_met_at:null,created_at:n,updated_at:n});return l.json({id:o.id})}),c.get("/api/circle/person/:id",({params:t})=>{const e=h.people.get(Number(t.id));if(!e)return l.json({error:"not found"},{status:404});const r=e.circle_id?h.circles.get(e.circle_id):null;return l.json({person:{...e,circle_name:r?.name??null,facts:h.facts.where(s=>s.person_id===e.id).sort((s,n)=>s.sort_order-n.sort_order),notes:h.notes.where(s=>s.person_id===e.id).sort((s,n)=>(n.occurred_on||"").localeCompare(s.occurred_on||"")||n.created_at-s.created_at),actions:h.actions.where(s=>s.person_id===e.id).sort((s,n)=>s.done-n.done||n.created_at-s.created_at)}})}),c.patch("/api/circle/person/:id",async({params:t,request:e})=>{const r=Number(t.id),s=await e.json(),n={updated_at:w()};for(const o of["name","title","company","location","email","phone","bio"])o in s&&(n[o]=s[o]==null?null:String(s[o]));return"photo"in s&&(n.photo=s.photo==null?null:String(s.photo)),"tags"in s&&(n.tags=Array.isArray(s.tags)?JSON.stringify(s.tags.map(String)):null),"circle"in s&&(n.circle_id=s.circle==null?null:h.circles.all().find(o=>o.name.toLowerCase()===String(s.circle).toLowerCase())?.id??null),"circle_id"in s&&(n.circle_id=s.circle_id==null?null:Number(s.circle_id)),"next_meet_date"in s&&(n.next_meet_date=s.next_meet_date==null?null:String(s.next_meet_date)),"next_meet_notify"in s&&(n.next_meet_notify=s.next_meet_notify?1:0),"last_met_date"in s&&typeof s.last_met_date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(s.last_met_date)&&(n.last_met_at=Math.floor(new Date(s.last_met_date+"T12:00:00").getTime()/1e3)),"last_met_at"in s&&(n.last_met_at=s.last_met_at==null?null:Number(s.last_met_at)),"last_talked_at"in s&&(n.last_talked_at=s.last_talked_at==null?null:Number(s.last_talked_at)),h.people.update(r,n),C()}),c.delete("/api/circle/person/:id",({params:t})=>{const e=Number(t.id);return h.facts.where(r=>r.person_id===e).forEach(r=>h.facts.remove(r.id)),h.notes.where(r=>r.person_id===e).forEach(r=>h.notes.remove(r.id)),h.actions.where(r=>r.person_id===e).forEach(r=>h.actions.remove(r.id)),h.people.remove(e),C()}),c.post("/api/circle/person/:id/photo-url",async({params:t,request:e})=>{const r=await e.json(),s=String(r.url||"").trim();return/^https?:\/\/.+/i.test(s)?(h.people.update(Number(t.id),{photo:s}),C()):l.json({error:"need an http(s) image url"},{status:400})}),c.post("/api/circle/person/:id/fact",async({params:t,request:e})=>{const r=await e.json(),s=String(r.value||"").trim();if(!s)return l.json({error:"value is required"},{status:400});const n=Number(t.id),o=h.facts.where(u=>u.person_id===n).reduce((u,d)=>Math.max(u,d.sort_order),-1),i=w(),a=h.facts.insert({user_login:K,person_id:n,label:r.label==null?null:String(r.label),value:s,sort_order:o+1,created_at:i,updated_at:i});return l.json({id:a.id})}),c.patch("/api/circle/fact/:id",async({params:t,request:e})=>{const r=await e.json(),s={updated_at:w()};return"label"in r&&(s.label=r.label==null?null:String(r.label)),"value"in r&&(s.value=String(r.value??"")),h.facts.update(Number(t.id),s),C()}),c.delete("/api/circle/fact/:id",({params:t})=>(h.facts.remove(Number(t.id)),C())),c.post("/api/circle/person/:id/note",async({params:t,request:e})=>{const r=await e.json(),s=String(r.body||"").trim();if(!s)return l.json({error:"body is required"},{status:400});const n=h.notes.insert({user_login:K,person_id:Number(t.id),kind:r.kind==="diary"?"diary":"talk",title:r.title==null?null:String(r.title),body:s,occurred_on:r.date==null?null:String(r.date),created_at:w()});return l.json({id:n.id})}),c.patch("/api/circle/note/:id",async({params:t,request:e})=>{const r=await e.json(),s={};return"title"in r&&(s.title=r.title==null?null:String(r.title)),"body"in r&&(s.body=String(r.body??"")),(r.kind==="talk"||r.kind==="diary")&&(s.kind=r.kind),"date"in r&&(s.occurred_on=r.date==null?null:String(r.date)),h.notes.update(Number(t.id),s),C()}),c.delete("/api/circle/note/:id",({params:t})=>(h.notes.remove(Number(t.id)),C())),c.post("/api/circle/person/:id/action",async({params:t,request:e})=>{const r=await e.json(),s=String(r.body||"").trim();if(!s)return l.json({error:"body is required"},{status:400});const n=h.actions.insert({user_login:K,person_id:Number(t.id),body:s,done:0,created_at:w(),done_at:null});return l.json({id:n.id})}),c.patch("/api/circle/action/:id",async({params:t,request:e})=>{const r=await e.json();if("body"in r)h.actions.update(Number(t.id),{body:String(r.body??"").trim()});else{const s=r.done!==!1&&r.done!=="false"&&r.done!==0;h.actions.update(Number(t.id),{done:s?1:0,done_at:s?w():null})}return C()}),c.delete("/api/circle/action/:id",({params:t})=>(h.actions.remove(Number(t.id)),C())),c.post("/api/circle/circle",async({request:t})=>{const e=await t.json(),r=String(e.name||"").trim();if(!r)return l.json({error:"name is required"},{status:400});const s=h.circles.all().find(i=>i.name.toLowerCase()===r.toLowerCase());if(s)return s.active||h.circles.update(s.id,{active:1}),l.json({id:s.id});const n=h.circles.all().reduce((i,a)=>Math.max(i,a.sort_order),-1),o=h.circles.insert({user_login:K,name:r,sort_order:n+1,active:1,created_at:w()});return l.json({id:o.id})}),c.post("/api/circle/circles/reorder",async({request:t})=>{const e=await t.json();return(Array.isArray(e.orderedIds)?e.orderedIds.map(Number):[]).forEach((s,n)=>h.circles.update(s,{sort_order:n})),C()}),c.patch("/api/circle/circle/:id",async({params:t,request:e})=>{const r=await e.json();return typeof r.name=="string"&&r.name.trim()&&h.circles.update(Number(t.id),{name:r.name.trim()}),C()}),c.delete("/api/circle/circle/:id",({params:t})=>(h.circles.update(Number(t.id),{active:0}),C())),c.get("/api/circle/pending",()=>l.json({pending:[],people:h.people.all()})),c.post("/api/circle/pending/:id/confirm",()=>l.json({ok:!0})),c.delete("/api/circle/pending/:id",()=>C())],Ir="mana.demo.tool_prefs",Nr=[{name:"goals",label:"Goals",icon:"target",type:"view",placement:"cockpit",target:"#/t/goals",scope:"all",order:0,panel:"goals"},{name:"grocery",label:"Shopping",icon:"shopping-cart",type:"view",placement:"standalone",target:"#/t/grocery",scope:"all",order:1,panel:"grocery"},{name:"finance",label:"Finance",icon:"wallet",type:"view",placement:"cockpit",target:"#/t/finance",scope:"all",order:2,panel:"finance"},{name:"circle",label:"Circles",icon:"circle",type:"view",placement:"cockpit",target:"#/t/circle",scope:"all",order:3,panel:"circle"},{name:"learn",label:"Learn",icon:"graduation-cap",type:"view",placement:"cockpit",target:"#/t/learn",scope:"all",order:4,panel:"learn"},{name:"office",label:"Office",icon:"briefcase",type:"view",placement:"cockpit",target:"#/t/office",scope:"owner",order:5,panel:"office",ownerOnly:!0},{name:"guests",label:"Guests",icon:"user-plus",type:"view",placement:"cockpit",target:"#/t/guests",scope:"owner",order:6,panel:"guests",ownerOnly:!0},{name:"publisher",label:"Publisher",icon:"megaphone",type:"view",placement:"cockpit",target:"#/t/publisher",scope:"owner",order:7,panel:"publisher",ownerOnly:!0},{name:"notify",label:"Notifications",icon:"bell",type:"view",placement:"cockpit",target:"#/t/notify",scope:"all",order:8,panel:"notify"}];function Wr(){try{const t=localStorage.getItem(Ir);return t?JSON.parse(t):{}}catch{return{}}}function Eo(t){localStorage.setItem(Ir,JSON.stringify(t))}function qo(){const t=Wr();return Nr.map(e=>{const r=t[e.name];return r?{...e,placement:r.placement??e.placement,order:r.order??e.order}:e}).sort((e,r)=>e.order-r.order)}const Co=[c.get("/api/tools",()=>l.json({tools:qo()})),c.patch("/api/tools/:name",async({params:t,request:e})=>{const r=String(t.name);if(!Nr.some(o=>o.name===r))return l.json({error:"not found"},{status:404});const s=await e.json().catch(()=>({})),n=Wr();return n[r]={...n[r],...s.placement?{placement:s.placement}:{},...typeof s.order=="number"?{order:s.order}:{}},Eo(n),l.json({ok:!0})})],Ee=new pe("publisher_verticals"),ce=new pe("publisher_drafts"),ve=()=>l.json({ok:!0}),S=86400,or=(t,e)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t}"/><stop offset="1" stop-color="${e}"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`),jo=`The reply I almost didn't send became this week's letter.

Someone wrote back to say issue #7 got them off the fence on a decision they'd sat on for a month. I nearly left it at "thank you."

Then I asked what tipped it. Their answer was three sentences and better than anything I'd have written alone.

So here's the small rule I'm keeping: when a reader hands you a real moment, don't file it. Ask one more question, then let them finish the paragraph.`,Ro="Warm editorial photo, soft morning light across a wooden desk, an open notebook and a half-full mug, muted amber and clay tones, calm and unhurried, no text.";function X(){if(Ee.all().length>0)return;Ee.insert({id:1,name:"The Circle",audience:"People building a meaningful life and career without burning out",offer:"A weekly letter + a small community",voice_samples:null,proofs:null,opinions:"Depth over reach. Consistency over inspiration. Never sell certainty.",language:"en",formality:"du",cta:"Join The Circle",extra:null,image_enabled:1,image_style:"warm-editorial",image_dna:null,image_ref_url:null,posts_per_week:1,draft_hour:6,draft_days:"1",enabled:1});const t=w();[{vertical_id:1,pillar:"story",body:`I traded the morning scroll for a walk. Six months in, it rebuilt my work.

The phone used to be the first thing my thumb found. Now it's my shoes.

Twenty minutes, same loop, no podcast. By the time I sit down the hard problem has already softened. Half my best paragraphs get written in my head before I open the laptop.

I didn't do it for productivity. I did it because the mornings felt borrowed. Turns out you get the work back too.`,source_url:null,source_note:null,status:"posted",research:null,hooks:null,image_prompt:"Warm editorial photo, quiet residential street at dawn, long soft shadows, dew on the pavement, amber and clay palette, sense of an unhurried morning walk, no people, no text.",image_url:or("#e8b06a","#b5643c"),post_url:"https://www.linkedin.com/feed/update/urn:li:activity:7201004488210001",post_urn:null,metrics_synced_at:t-34*S,impressions:4200,reactions:181,comments:34,leads:12,created_at:t-35*S,posted_at:t-34*S},{vertical_id:1,pillar:"teach",body:`The two-hour maker block that saved the newsletter.

For a year I wrote The Circle in the cracks between meetings. It showed. The letters were fine and forgettable.

Now Monday 6 to 8 is fenced off. No calendar invites survive there. Phone in the other room, one tab open, the draft or nothing.

The letters got shorter and truer. Two protected hours beat ten scattered ones, every time.`,source_url:null,source_note:null,status:"posted",research:null,hooks:null,image_prompt:null,image_url:null,post_url:"https://www.linkedin.com/feed/update/urn:li:activity:7202556301990002",post_urn:null,metrics_synced_at:t-27*S,impressions:3100,reactions:128,comments:22,leads:9,created_at:t-28*S,posted_at:t-27*S},{vertical_id:1,pillar:"take",body:`Building in public taught me more about sincerity than reach ever did.

I used to shape posts for the algorithm. Round the edges, chase the hook, hope it traveled.

The ones that actually landed were the plain ones. The week I admitted I'd shipped a letter with a broken link and forty people had noticed, the replies were kinder than any polished win.

People don't follow you for the highlight reel. They stay for the parts you'd be tempted to cut.`,source_url:null,source_note:null,status:"posted",research:null,hooks:null,image_prompt:"Warm editorial photo, close crop of an open handwritten journal on a linen surface, honest and imperfect, soft window light, muted terracotta and cream, no legible text.",image_url:or("#dca25a","#8f4a34"),post_url:"https://www.linkedin.com/feed/update/urn:li:activity:7204118845770003",post_urn:null,metrics_synced_at:t-20*S,impressions:5600,reactions:243,comments:51,leads:15,created_at:t-21*S,posted_at:t-20*S},{vertical_id:1,pillar:"proof",body:`The Circle crossed 300 readers this week. Here's what actually moved the needle.

Not the growth threads. Not the giveaway I tried once and quietly regret.

It was replying to every new subscriber by hand, and writing one letter a week that I'd want to receive. That's the whole strategy.

Slow, boring, and it compounds. 300 people who open the email beats 3,000 who forgot they signed up.`,source_url:null,source_note:null,status:"posted",research:null,hooks:null,image_prompt:null,image_url:null,post_url:"https://www.linkedin.com/feed/update/urn:li:activity:7205670392110004",post_urn:null,metrics_synced_at:t-13*S,impressions:2800,reactions:96,comments:18,leads:21,created_at:t-14*S,posted_at:t-13*S},{vertical_id:1,pillar:"teach",body:`How I plan a whole week in twenty minutes.

Sunday evening, one page. Three questions, in order.

What has to be true by Friday? What am I actually going to say no to? Where's the one block I won't move?

The week still surprises me. But I stopped starting Monday from a blank stare.`,source_url:null,source_note:null,status:"approved",research:null,hooks:null,image_prompt:null,image_url:null,post_url:null,post_urn:null,metrics_synced_at:null,impressions:null,reactions:null,comments:null,leads:null,created_at:t-6*S,posted_at:null},{vertical_id:1,pillar:"story",body:`The week I almost quit — issue #3.

Two people had unsubscribed. My draft read like a motivational poster. I sat with the cursor blinking and thought, nobody would miss this.

I sent it anyway, badly. One reply came back: "This is the first one that sounded like a person."

That reply is the only reason there was an issue #4.`,source_url:null,source_note:null,status:"approved",research:null,hooks:null,image_prompt:null,image_url:null,post_url:null,post_urn:null,metrics_synced_at:null,impressions:null,reactions:null,comments:null,leads:null,created_at:t-4*S,posted_at:null},{vertical_id:1,pillar:"take",body:`Discipline is just love with its sleeves rolled up.

We talk about it like punishment. Cold showers, gritted teeth, willpower as a muscle you beat into shape.

The mornings I actually keep are the ones that point at something I care about. The walk is for my head. The letter is for the reader. The early hour is quiet on purpose.

Nobody sustains a habit they resent. You sustain the ones that turn out to be about someone.`,source_url:null,source_note:null,status:"draft",research:null,hooks:null,image_prompt:null,image_url:null,post_url:null,post_urn:null,metrics_synced_at:null,impressions:null,reactions:null,comments:null,leads:null,created_at:t-2*S,posted_at:null},{vertical_id:1,pillar:"teach",body:`Reply to every new subscriber by hand. Here's why it's worth it.

It doesn't scale. That's the point.

Two lines, their name, one real question about why they joined. Takes a minute. Roughly a third write back, and those replies are where next month's letters come from.

An automation would thank them faster and teach me nothing. The slow version is the research.`,source_url:null,source_note:null,status:"draft",research:null,hooks:null,image_prompt:null,image_url:null,post_url:null,post_urn:null,metrics_synced_at:null,impressions:null,reactions:null,comments:null,leads:null,created_at:t-1*S,posted_at:null}].forEach((r,s)=>ce.insert({...r,id:s+1}))}const j=t=>t==null?null:String(t),Po=t=>t==null?null:Number(t),Mo=[c.get("/api/publisher",()=>(X(),l.json({verticals:Ee.all().sort((t,e)=>t.id-e.id),drafts:ce.all().sort((t,e)=>e.created_at-t.created_at||e.id-t.id),webhookConfigured:!0,linkedinConfigured:!1,generating:!1}))),c.post("/api/publisher/verticals",async({request:t})=>{X();const e=await t.json().catch(()=>({})),r=Ee.insert({name:String(e.name??"").trim()||"Untitled",audience:j(e.audience),offer:j(e.offer),voice_samples:j(e.voice_samples),proofs:j(e.proofs),opinions:j(e.opinions),language:e.language==null?"en":String(e.language),formality:e.formality==null?"du":String(e.formality),cta:j(e.cta),extra:j(e.extra),image_enabled:e.image_enabled?1:0,image_style:j(e.image_style),image_dna:j(e.image_dna),image_ref_url:j(e.image_ref_url),posts_per_week:e.posts_per_week==null?1:Number(e.posts_per_week),draft_hour:e.draft_hour==null?6:Number(e.draft_hour),draft_days:j(e.draft_days),enabled:e.enabled===!1||e.enabled===0?0:1});return l.json({id:r.id})}),c.put("/api/publisher/verticals/:id",async({params:t,request:e})=>{X();const r=Number(t.id),s=await e.json().catch(()=>({})),n={};"name"in s&&(n.name=String(s.name??"").trim());for(const o of["audience","offer","voice_samples","proofs","opinions","cta","extra","image_style","image_dna","image_ref_url","draft_days"])o in s&&(n[o]=j(s[o]));return"language"in s&&(n.language=s.language==null?"en":String(s.language)),"formality"in s&&(n.formality=s.formality==null?"du":String(s.formality)),"image_enabled"in s&&(n.image_enabled=s.image_enabled?1:0),"posts_per_week"in s&&(n.posts_per_week=Number(s.posts_per_week)),"draft_hour"in s&&(n.draft_hour=Number(s.draft_hour)),"enabled"in s&&(n.enabled=s.enabled===!1||s.enabled===0?0:1),Ee.update(r,n),ve()}),c.post("/api/publisher/draft",async({request:t})=>{X();const e=await t.json().catch(()=>({})),r=e.verticalId==null?null:Number(e.verticalId),s=typeof e.body=="string"&&e.body.trim().length>0,o=["proof","teach","take","story"].includes(e.pillar)?e.pillar:"teach";return ce.insert({vertical_id:r,pillar:o,body:s?String(e.body).trim():jo,source_url:null,source_note:null,status:"draft",research:null,hooks:null,image_prompt:null,image_url:null,post_url:null,post_urn:null,metrics_synced_at:null,impressions:null,reactions:null,comments:null,leads:null,created_at:w(),posted_at:null}),l.json({ok:!0},{status:202})}),c.patch("/api/publisher/drafts/:id",async({params:t,request:e})=>{X();const r=Number(t.id);if(!ce.get(r))return l.json({error:"not found"},{status:404});const n=await e.json().catch(()=>({})),o={};switch(n.action){case"approve":o.status="approved";break;case"discard":o.status="discarded";break;case"reopen":o.status="draft";break;case"mark-posted":o.status="posted",o.posted_at=w();break;case"unpost":o.status="approved",o.posted_at=null;break;case"gen-image-prompt":o.image_prompt=Ro;break;case"sync":return ve()}"image_url"in n&&(o.image_url=n.image_url==null?null:String(n.image_url)),"image_prompt"in n&&(o.image_prompt=j(n.image_prompt)),"body"in n&&(o.body=String(n.body??"")),"post_url"in n&&(o.post_url=j(n.post_url));for(const i of["impressions","reactions","comments","leads"])i in n&&(o[i]=Po(n[i]));return ce.update(r,o),ve()}),c.delete("/api/publisher/drafts/:id",({params:t})=>(X(),ce.remove(Number(t.id)),ve())),c.put("/api/publisher/posting",()=>(X(),ve()))],J=new pe("learn_skills"),P=new pe("learn_lessons"),D=new pe("learn_checks"),Re=new pe("learn_kv"),$=86400,ir=[{topic:"Writing that lands",mission:"Make each Circle issue land in one read.",known:"I write clearly but bury the point three paragraphs down.",success:"A reader forwards an issue without me asking.",emoji:"✍️",lessons:[{title:"The one-sentence promise",exercise:"Write the single sentence a reader should be able to repeat after finishing the issue.",status:"done"},{title:"Open on a specific moment",exercise:"Rewrite your last opening so it starts on a concrete scene, not a summary.",status:"done"},{title:"Cut the throat-clearing",exercise:"Delete the first paragraph of a draft and check whether anything was lost.",status:"done"},{title:"One idea per issue",exercise:"Take a two-idea draft and split it into two letters.",status:"done"},{title:"Read it aloud",exercise:"Record yourself reading a draft; mark every sentence you stumble on.",status:"done"}],checks:[{lessonSeq:1,kind:"recall",prompt:"What's the test for a strong issue opening?",answer:"A reader can repeat the promise of the piece in one sentence after finishing.",choices:null,correct:null,reps:2,interval_days:9,ease:2.5,lapses:0,last_grade:2,dueOffsetDays:4},{lessonSeq:3,kind:"choice",prompt:`Your draft opens with "In today's fast-moving world…". What should you do?`,answer:null,choices:["Cut it — it's throat-clearing","Keep it, it sets context","Add a statistic after it"],correct:0,reps:1,interval_days:3,ease:2.5,lapses:0,last_grade:2,dueOffsetDays:2},{lessonSeq:5,kind:"recall",prompt:"Why read a draft aloud before sending?",answer:"Your ear catches clunky rhythm and run-ons your eye skims past.",choices:null,correct:null,reps:0,interval_days:0,ease:2.5,lapses:0,last_grade:null,dueOffsetDays:-1}]},{topic:"Talks & storytelling",mission:"Turn the best issues into a meetup talk.",known:"Comfortable on paper, freeze the moment there's a room.",success:"Give a 15-minute talk without reading off slides.",emoji:"🎤",lessons:[{title:"Find the spine",exercise:"Write the single argument your talk exists to make, in one line.",status:"done"},{title:"Three beats, no more",exercise:"Outline the talk as three moments a listener will remember.",status:"done"},{title:"Open cold",exercise:"Draft an opening that skips the intro and drops the audience mid-story.",status:"done"},{title:"Practice the first two minutes",exercise:"Record the opening five times; keep the take that sounds least rehearsed.",status:"todo"},{title:"Handle the pause",exercise:"Practice standing in silence for three seconds after your key line.",status:"todo"}],checks:[{lessonSeq:2,kind:"choice",prompt:"How many core beats should a 15-minute talk carry?",answer:null,choices:["One dense argument","Around three memorable beats","Seven, to feel thorough"],correct:1,reps:1,interval_days:3,ease:2.5,lapses:0,last_grade:2,dueOffsetDays:5},{lessonSeq:3,kind:"recall",prompt:"What's a strong way to open a talk?",answer:"Drop the audience into a specific moment before you explain anything.",choices:null,correct:null,reps:0,interval_days:0,ease:2.5,lapses:0,last_grade:null,dueOffsetDays:-2}]},{topic:"Distributed systems",mission:"Level up as an engineer.",known:"Solid on single-node code, shaky on what breaks across a network.",success:"Reason about a failure across services without hand-waving.",emoji:"🧩",lessons:[{title:"Why the network lies",exercise:"List the eight fallacies of distributed computing from memory, then check them.",status:"done"},{title:"Idempotency in practice",exercise:"Diagram a retry that's safe to run twice and one that corrupts state.",status:"done"},{title:"At-least-once delivery",exercise:"Write out how a consumer dedupes a message it receives twice.",status:"done"},{title:"The CAP tradeoff",exercise:"Pick a real service you use and argue which two of C/A/P it chose.",status:"done"},{title:"Backpressure",exercise:"Sketch what a queue does when producers outrun consumers.",status:"done"}],checks:[{lessonSeq:2,kind:"choice",prompt:"An operation is idempotent when…",answer:null,choices:["running it twice has the same effect as once","it never fails","it runs in constant time"],correct:0,reps:2,interval_days:12,ease:2.6,lapses:0,last_grade:3,dueOffsetDays:8},{lessonSeq:1,kind:"recall",prompt:"Name two of the fallacies of distributed computing.",answer:"The network is reliable; latency is zero. (Also: bandwidth is infinite, topology never changes.)",choices:null,correct:null,reps:2,interval_days:7,ease:2.5,lapses:0,last_grade:2,dueOffsetDays:3},{lessonSeq:4,kind:"recall",prompt:"In a network partition, what does a CP system give up?",answer:"Availability — it refuses requests it can't serve consistently until the partition heals.",choices:null,correct:null,reps:1,interval_days:15,ease:2.5,lapses:0,last_grade:2,dueOffsetDays:11}]},{topic:"Conversational Arabic",mission:"Slow and personal.",known:"Know the alphabet, freeze up in a real conversation.",success:"Order coffee and make small talk without switching to English.",emoji:"🗣️",lessons:[{title:"Ten survival phrases",exercise:"Practice ten everyday phrases out loud until they're automatic.",status:"done"},{title:"Greetings and small talk",exercise:"Record a 30-second self-introduction and play it back.",status:"todo"},{title:"Numbers you'll actually use",exercise:"Practice prices and phone numbers by reading them aloud.",status:"todo"},{title:"Ordering at a café",exercise:"Run a café order both ways with a partner or out loud.",status:"todo"},{title:"Ask one question back",exercise:"Practice turning any answer into a follow-up question.",status:"todo"}],checks:[{lessonSeq:1,kind:"choice",prompt:'How do you reply to "kayf haalak?" (how are you?)',answer:null,choices:[`"al-hamdu lillah" (I'm well, thanks)`,'"shukran" (thank you)',`"ma'a as-salama" (goodbye)`],correct:0,reps:1,interval_days:1,ease:2.5,lapses:0,last_grade:2,dueOffsetDays:-1},{lessonSeq:1,kind:"recall",prompt:'What does "min fadlak" mean?',answer:"Please (when asking someone for something).",choices:null,correct:null,reps:0,interval_days:0,ease:2.5,lapses:0,last_grade:null,dueOffsetDays:0}]}];function N(){if(J.all().length>0)return;const t=w();ir.forEach((e,r)=>{const s=e.lessons.every(i=>i.status==="done"),n=J.insert({topic:e.topic,mission:e.mission,known:e.known,success:e.success,status:"active",path_status:"ready",emoji:e.emoji,created_at:t-(ir.length-r)*$,completed_at:s?t-$:null}),o=[];e.lessons.forEach((i,a)=>{const u=P.insert({skill_id:n.id,seq:a+1,title:i.title,exercise:i.exercise,status:i.status,done_at:i.status==="done"?t-$:null,note:null});o.push(u.id)}),e.checks.forEach(i=>{const a=i.lessonSeq!=null?o[i.lessonSeq-1]??null:null;D.insert({skill_id:n.id,lesson_id:a,kind:i.kind,prompt:i.prompt,answer:i.answer,choices:i.choices,correct:i.correct,reps:i.reps,interval_days:i.interval_days,ease:i.ease,lapses:i.lapses,last_grade:i.last_grade,due_at:t+i.dueOffsetDays*$})})}),Re.insert({id:1,streak:12,reviews_today:0,badges:[{badge_key:"first-rep",earned_at:w()-30*$},{badge_key:"proven",earned_at:w()-3*$}]})}function bt(){const t=Re.get(1);if(t)return t;const e={id:1,streak:12,reviews_today:0,badges:[]};return Re.insert(e),e}function To(t){return t.reps>=1&&t.last_grade!==null&&t.last_grade>=2}function Oo(t){return t.interval_days>=21}function Ar(t,e,r){if(t.path_status!=="ready"||e.length===0)return"building";if(e.some(a=>a.status==="todo"))return"learning";const n=e.every(a=>a.status==="done"),o=r.length>0&&r.every(To),i=r.length>0&&r.every(Oo);return n&&o&&i?"mastered":n&&o?"proven":"practiced"}function Dr(t){return P.where(e=>e.skill_id===t).sort((e,r)=>e.seq-r.seq)}function Gr(t){return D.where(e=>e.skill_id===t)}function Io(t){return{id:t.id,lesson_id:t.lesson_id,kind:t.kind,reps:t.reps,interval_days:t.interval_days,last_grade:t.last_grade,due_at:t.due_at}}function No(t){const e=Dr(t.id),r=Gr(t.id),s=w();return{...t,lessons:e,checks:r.map(Io),level:Ar(t,e,r),checksTotal:r.length,checksDue:r.filter(n=>n.due_at<=s).length}}const Wo=[2,5,10,12];function ft(){const t=w(),e=P.where(g=>g.status==="done").length,r=D.all().reduce((g,p)=>p.last_grade===null?g:g+(Wo[p.last_grade]??0),0),s=10*e+r;let n=1,o=s,i=100;for(;o>=i;)o-=i,n+=1,i=80+n*20;const a=n===1?100:80+n*20,u=D.all().filter(g=>g.due_at<=t).length,d=bt();return{xp:s,level:n,xpInto:o,xpSpan:a,streak:d.streak,reviewsToday:d.reviews_today,dueTotal:u,badges:d.badges}}function Ao(t){return Math.min(3,Math.max(1.3,t))}function Do(t,e){const r=w();let s=t.ease,n=t.reps,o=t.interval_days,i=t.lapses,a=r;return e===0?(s-=.2,n=0,i+=1,o=0,a=r+600):e===1?(s-=.15,o=Math.max(1,Math.round((o||1)*1.2)),n+=1,a=r+o*$):e===2?(o=n===0?1:n===1?3:Math.max(1,Math.round(o*s)),n+=1,a=r+o*$):(s+=.15,o=n===0?4:Math.max(1,Math.round(o*s*1.3)),n+=1,a=r+o*$),s=Ao(s),{ease:s,reps:n,interval_days:o,lapses:i,last_grade:e,due_at:a}}const ke=()=>l.json({ok:!0});async function Ue(t){return await t.json().catch(()=>({}))}function R(t){if(t==null)return null;const e=String(t).trim();return e.length?e:null}const Go=[c.get("/api/learn",({request:t})=>{N();const e=new URL(t.url).searchParams.get("archived")==="1",r=J.all().filter(s=>e||s.status!=="archived").sort((s,n)=>s.created_at-n.created_at||s.id-n.id);return l.json({skills:r.map(No),stats:ft()})}),c.post("/api/learn/skills",async({request:t})=>{N();const e=await Ue(t),r=R(e.topic)??"New skill",s=w(),n=J.insert({topic:r,mission:R(e.mission),known:R(e.known),success:R(e.success),status:"active",path_status:"ready",emoji:null,created_at:s,completed_at:null});return P.insert({skill_id:n.id,seq:1,title:'Name what "good" looks like',exercise:`Write one sentence describing what you'll be able to do once you've got ${r}.`,status:"todo",done_at:null,note:null}),P.insert({skill_id:n.id,seq:2,title:"Do the smallest real rep",exercise:"Pick the tiniest version of the real thing and do it once today.",status:"todo",done_at:null,note:null}),D.insert({skill_id:n.id,lesson_id:null,kind:"recall",prompt:`In one sentence, what does progress on "${r}" look like this week?`,answer:null,choices:null,correct:null,reps:0,interval_days:0,ease:2.5,lapses:0,last_grade:null,due_at:s}),l.json({id:n.id})}),c.patch("/api/learn/skills/:id",async({params:t,request:e})=>{N();const r=Number(t.id),s=await Ue(e),n={};return"topic"in s&&(n.topic=R(s.topic)??""),"mission"in s&&(n.mission=R(s.mission)),"known"in s&&(n.known=R(s.known)),"success"in s&&(n.success=R(s.success)),"status"in s&&(s.status==="active"||s.status==="done"||s.status==="archived")&&(n.status=s.status,n.completed_at=s.status==="done"?w():null),J.update(r,n),ke()}),c.delete("/api/learn/skills/:id",({params:t})=>{N();const e=Number(t.id);return P.where(r=>r.skill_id===e).forEach(r=>P.remove(r.id)),D.where(r=>r.skill_id===e).forEach(r=>D.remove(r.id)),J.remove(e),ke()}),c.post("/api/learn/skills/:id/regen",()=>(N(),ke())),c.post("/api/learn/skills/:id/checks",()=>(N(),ke())),c.patch("/api/learn/lessons/:id",async({params:t,request:e})=>{N();const r=Number(t.id),s=await Ue(e),n=[];if("status"in s&&(s.status==="todo"||s.status==="done"||s.status==="skipped")){const o=P.all().some(a=>a.status==="done"),i={status:s.status,done_at:s.status==="done"?w():null};if("title"in s&&(i.title=R(s.title)??""),"exercise"in s&&(i.exercise=R(s.exercise)),"note"in s&&(i.note=R(s.note)),P.update(r,i),s.status==="done"&&!o){const a=bt();a.badges.some(u=>u.badge_key==="first-rep")||(a.badges.push({badge_key:"first-rep",earned_at:w()}),Re.update(1,{badges:a.badges})),n.push("first-rep")}}else{const o={};"title"in s&&(o.title=R(s.title)??""),"exercise"in s&&(o.exercise=R(s.exercise)),"note"in s&&(o.note=R(s.note)),P.update(r,o)}return l.json({ok:!0,newBadges:n})}),c.delete("/api/learn/lessons/:id",({params:t})=>(N(),P.remove(Number(t.id)),ke())),c.get("/api/learn/review",()=>{N();const t=w(),e=D.where(r=>r.due_at<=t).sort((r,s)=>r.due_at-s.due_at).map(r=>{const s=J.get(r.skill_id),n=r.lesson_id!=null?P.get(r.lesson_id):void 0;return{id:r.id,kind:r.kind,prompt:r.prompt,answer:r.answer,choices:r.choices,correct:r.correct,skill_id:r.skill_id,topic:s?s.topic:"",emoji:s?s.emoji:null,lesson_title:n?n.title:null}});return l.json({due:e,stats:ft()})}),c.post("/api/learn/checks/:id/grade",async({params:t,request:e})=>{N();const r=Number(t.id),s=await Ue(e),n=Number(s.grade),o=n===0||n===1||n===2||n===3?n:2,i=D.get(r);if(!i)return l.json({error:"not found"},{status:404});const a=Do(i,o),u=D.update(r,a)??{...i,...a},d=bt();Re.update(1,{reviews_today:d.reviews_today+1});const g=J.get(u.skill_id),p=g?Ar(g,Dr(g.id),Gr(g.id)):"building";return l.json({ok:!0,check:{id:u.id,due_at:u.due_at,interval_days:u.interval_days,reps:u.reps,last_grade:u.last_grade},level:p,newBadges:[],stats:ft()})})],Ho=[...Xn,...zr,...to,...so,...no,...fo,...wo,...So,...Lo,...Co,...Mo,...Go],Uo=Zn(...Ho);async function si(){await Uo.start({onUnhandledRequest(t,e){new URL(t.url).pathname.startsWith("/api/")&&e.warning()},quiet:!0,serviceWorker:{url:"/mockServiceWorker.js"}})}export{si as startMocks,Uo as worker};
