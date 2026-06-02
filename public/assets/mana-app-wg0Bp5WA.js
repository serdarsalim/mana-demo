const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tables-DVwx-WT-.js","assets/db-2zuKG1Uw.js"])))=>i.map(i=>d[i]);
import{n as C,i as Wt,t as O,b as u,o as ot,_ as Ao,e as Hl,a as Vl,d as Wl,E as Ul,c as Zt,A as k,f as Jn,L as Zn,w as ql}from"./index-vMAHP7Ku.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(e){return C({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kl=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(e,t){return(s,i,n)=>{const o=r=>r.renderRoot?.querySelector(e)??null;return Kl(s,i,{get(){return o(this)}})}}class H extends Wt{createRenderRoot(){return this}}class Ca{constructor(t,s){this.onKeydown=i=>{const n=i.key;if(n!=="ArrowDown"&&n!=="ArrowUp"&&n!==" "&&n!=="Enter")return;const o=i.target;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return;const r=this.opts.keyAttr??"data-row-key",a=this.opts.scope?.()??document,l=Array.from(a.querySelectorAll(`[${r}]`));if(!l.length)return;const c=this.opts.getKey();if(n===" "||n==="Enter"){if(!c)return;const f=n===" "?this.opts.onToggle:this.opts.onEnter;if(!f)return;i.preventDefault(),f(c);return}const d=l.map(f=>f.getAttribute(r)).filter(f=>!!f),h=c?d.indexOf(c):-1,p=n==="ArrowDown"?h<0?0:Math.min(h+1,d.length-1):h<=0?0:h-1;if(d[p]&&d[p]!==c){i.preventDefault(),this.opts.setKey(d[p]);const f=d[p];queueMicrotask(()=>{(this.opts.scope?.()??document).querySelector(`[${r}="${CSS.escape(f)}"]`)?.scrollIntoView({block:"nearest",behavior:"smooth"})})}},this.host=t,this.opts=s,t.addController(this)}hostConnected(){document.addEventListener("keydown",this.onKeydown)}hostDisconnected(){document.removeEventListener("keydown",this.onKeydown)}}const Io=e=>{let t;const s=new Set,i=(c,d)=>{const h=typeof c=="function"?c(t):c;if(!Object.is(h,t)){const p=t;t=d??(typeof h!="object"||h===null)?h:Object.assign({},t,h),s.forEach(f=>f(t,p))}},n=()=>t,a={setState:i,getState:n,getInitialState:()=>l,subscribe:c=>(s.add(c),()=>s.delete(c))},l=t=e(i,n,a);return a},Yl=(e=>e?Io(e):Io);class Gl extends Error{constructor(t,s,i){super(s),this.name="ApiError",this.status=t,this.body=i}}async function Xl(e){let t=null,s=`${e.status} ${e.statusText}`;try{if(t=await e.json(),t&&typeof t=="object"&&"error"in t){const i=t.error;typeof i=="string"&&(s=i)}}catch{}return new Gl(e.status,s,t)}async function ei(e,t){const s=await fetch(e,{...t,headers:{"content-type":"application/json",...t?.headers||{}}});if(!s.ok)throw await Xl(s);const i=await s.text();return i?JSON.parse(i):void 0}function lt(e){return ei(e,{method:"GET"})}function ct(e,t){return ei(e,{method:"POST",body:t===void 0?void 0:JSON.stringify(t)})}function Ss(e,t){return ei(e,{method:"PATCH",body:t===void 0?void 0:JSON.stringify(t)})}function ui(e){return ei(e,{method:"DELETE"})}const A={threads:{list:()=>lt("/api/threads").then(e=>e.threads),create:(e="chat",t)=>ct("/api/threads",{kind:e,persona:t})},messages:{list:e=>lt(`/api/threads/${e}/messages`).then(t=>t.messages)},northStars:{list:()=>lt("/api/north-stars").then(e=>e.northStars),create:e=>ct("/api/north-stars",{title:e}),update:(e,t)=>Ss(`/api/north-stars/${e}`,t),archive:e=>ui(`/api/north-stars/${e}`),summary:e=>lt(`/api/north-stars/${e}/summary`)},goals:{list:(e=!1)=>lt(`/api/goals${e?"?include=archived":""}`),create:e=>ct("/api/goals",e),update:(e,t)=>Ss(`/api/goals/${e}`,t),remove:(e,t=!1)=>ui(`/api/goals/${e}${t?"?permanent=true":""}`),summary:e=>lt(`/api/goals/${e}/summary`),events:e=>lt(`/api/goals/${e}/events`).then(t=>t.events)},keyResults:{create:(e,t)=>ct(`/api/goals/${e}/key-results`,{title:t}),update:(e,t)=>Ss(`/api/key-results/${e}`,t),move:(e,t)=>ct(`/api/key-results/${e}/move`,{direction:t}),reorder:(e,t)=>ct(`/api/key-results/${e}/reorder`,{targetIndex:t}),remove:e=>ui(`/api/key-results/${e}`)},commitments:{listForWeek:e=>lt(`/api/week${e?`?week=${encodeURIComponent(e)}`:""}`),create:e=>ct("/api/commitments",e),update:(e,t)=>Ss(`/api/commitments/${e}`,t),remove:e=>ui(`/api/commitments/${e}`),reorder:(e,t)=>ct(`/api/commitments/${e}/reorder`,{targetIndex:t})},settings:{list:()=>lt("/api/settings"),update:e=>Ss("/api/settings",e)},agentDocs:{list:()=>lt("/api/agents").then(e=>e.files),read:e=>lt(`/api/agents/${encodeURIComponent(e)}`),save:(e,t)=>ei(`/api/agents/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify({content:t})}),history:e=>lt(`/api/agents/${encodeURIComponent(e)}/history`).then(t=>t.history),at:(e,t)=>lt(`/api/agents/${encodeURIComponent(e)}/at/${t}`),restore:(e,t)=>ct(`/api/agents/${encodeURIComponent(e)}/restore`,{sha:t}),reset:e=>ct(`/api/agents/${encodeURIComponent(e)}/reset`,{})},canvas:{list:()=>lt("/api/canvas/files").then(e=>e.files),read:e=>lt(`/api/canvas/files/${encodeURIComponent(e)}`)},voice:{session:e=>ct("/api/voice/session",e?{persona:e}:void 0),op:(e,t)=>ct("/api/voice/op",{name:e,arguments:t}),transcript:e=>ct("/api/voice/transcript",e)},uploads:{upload:(e,t=!1)=>ct("/api/upload",{dataUrl:e,ephemeral:t})},state:()=>lt("/api/state"),notifications:{list:()=>lt("/api/notifications"),read:e=>ct(`/api/notifications/${e}/read`),dismiss:e=>ct(`/api/notifications/${e}/dismiss`),readAll:()=>ct("/api/notifications/read-all"),mute:(e,t)=>ct("/api/notifications/mute",{kind:e,enabled:t}),kinds:()=>lt("/api/notifications/kinds")}},Pa={goals:"goals-advisor",canvas:"mana",grocery:"grocery-keeper",office:"office-keeper",finance:"finance-keeper",circle:"circle-keeper"},Ro={goals:"Goals",canvas:"Mana",grocery:"Grocery",office:"Office",finance:"Finance",circle:"Circles"},Qn={mana:"Mana","goals-advisor":"Goals advisor","grocery-keeper":"Grocery keeper","office-keeper":"Office keeper","finance-keeper":"Finance keeper","circle-keeper":"Circles keeper"};function Ta(e){if(e.currentThreadId!=null){const t=e.threads.find(s=>s.id===e.currentThreadId);if(t?.persona)return t.persona}return Pa[e.rightPaneMode]}function cn(){try{const e=localStorage.getItem("cockpit.right_pane_mode");if(e==="goals"||e==="canvas"||e==="grocery"||e==="office"||e==="finance"||e==="circle")return e}catch{}return"goals"}const w=Yl((e,t)=>({threads:[],currentThreadId:null,messages:[],async loadThreads(){const s=await A.threads.list();e({threads:s})},async selectThread(s){e({currentThreadId:s,messages:[]}),s!=null&&await t().loadMessages(s)},async createThread(s){const i=s?.kind??"chat",n=s?.persona,o=await A.threads.create(i,n);return await t().loadThreads(),e({currentThreadId:o.id,messages:[]}),o.id},async loadMessages(s){const i=await A.messages.list(s);e({messages:i})},northStars:[],async loadNorthStars(){e({northStars:await A.northStars.list()})},async createNorthStar(s){await A.northStars.create(s),await t().loadNorthStars()},async renameNorthStar(s,i){await A.northStars.update(s,{title:i}),await t().loadNorthStars()},async archiveNorthStar(s){await A.northStars.archive(s),await t().loadNorthStars()},goals:[],goalsArchivedCount:0,includeArchivedGoals:!1,async loadGoals(){const{goals:s,archivedCount:i}=await A.goals.list(t().includeArchivedGoals);e({goals:s,goalsArchivedCount:i})},async toggleArchivedGoals(s){e({includeArchivedGoals:s}),await t().loadGoals()},async createGoal(s){await A.goals.create(s),await t().loadGoals()},async updateGoal(s,i){await A.goals.update(s,i),await t().loadGoals()},async deleteGoal(s,i=!1){await A.goals.remove(s,i),await t().loadGoals()},async addKeyResult(s,i){await A.keyResults.create(s,i),await t().loadGoals()},async updateKeyResult(s,i){await A.keyResults.update(s,i),await t().loadGoals()},async deleteKeyResult(s){await A.keyResults.remove(s),await t().loadGoals()},async moveKeyResult(s,i){await A.keyResults.move(s,i),await t().loadGoals()},async reorderKeyResult(s,i){await A.keyResults.reorder(s,i),await t().loadGoals()},currentWeek:null,commitments:[],async setWeek(s){e({currentWeek:s}),await t().loadCommitments(s)},async loadCommitments(s){const i=await A.commitments.listForWeek(s??t().currentWeek??void 0);e({commitments:i.commitments,currentWeek:i.week})},async createCommitment(s){await A.commitments.create({...s,week:s.week??t().currentWeek??void 0}),await t().loadCommitments()},async updateCommitment(s,i){await A.commitments.update(s,i),await t().loadCommitments()},async deleteCommitment(s){await A.commitments.remove(s),await t().loadCommitments()},async reorderCommitment(s,i){await A.commitments.reorder(s,i),await t().loadCommitments()},settings:{},async loadSettings(){e({settings:await A.settings.list()})},async setSetting(s,i){const n=await A.settings.update({[s]:i});e({settings:n})},notifications:[],notificationsUnread:0,async loadNotifications(){const{notifications:s,unread:i}=await A.notifications.list();e({notifications:s,notificationsUnread:i})},async markNotificationRead(s){await A.notifications.read(s),await t().loadNotifications()},async dismissNotification(s){const i=t().notifications.filter(n=>n.id!==s);e({notifications:i,notificationsUnread:i.filter(n=>n.read_at==null).length}),await A.notifications.dismiss(s),await t().loadNotifications()},async markAllNotificationsRead(){await A.notifications.readAll(),await t().loadNotifications()},rightPaneMode:cn(),setRightPaneMode(s){try{localStorage.setItem("cockpit.right_pane_mode",s)}catch{}e({rightPaneMode:s,viewContext:{tool:s,summary:Ro[s]}});const i=Pa[s],n=t().threads.filter(o=>o.persona===i&&o.closed_at==null).sort((o,r)=>r.last_msg_at-o.last_msg_at)[0];n?t().selectThread(n.id):t().createThread({persona:i})},focusedRowKey:null,setFocusedRowKey(s){e({focusedRowKey:s})},viewContext:{tool:cn(),summary:Ro[cn()]},setViewContext(s){e({viewContext:s})}}));function Z(e,t,s){let i=s?s(t.getState()):void 0;return t.subscribe(n=>{if(!s){e.requestUpdate();return}const o=s(n);Object.is(o,i)||(i=o,e.requestUpdate())})}class Da{constructor(t,s,i){this.host=t,this.store=s,this.selector=i,t.addController(this)}hostConnected(){this.unsubscribe=Z(this.host,this.store,this.selector)}hostDisconnected(){this.unsubscribe?.(),this.unsubscribe=void 0}get state(){return this.store.getState()}}var Jl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,qi=(e,t,s,i)=>{for(var n=i>1?void 0:i?Zl(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Jl(t,s,n),n};const Ql={mana:"Mana","goals-advisor":"Goals","grocery-keeper":"Grocery","office-keeper":"Office","finance-keeper":"Finance","circle-keeper":"Circles"};function Lo(e){return u`<span
    class="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-medium leading-none ${e==="mana"?"bg-accent/15 text-accent":"bg-hover text-muted"}"
    title=${Qn[e]}
  >
    ${Ql[e]??e}
  </span>`}function tc(e){return new Date(e*1e3).toLocaleString("en-CA",{hour12:!1,timeZone:"Asia/Kuala_Lumpur",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(",","")}let Us=class extends H{constructor(){super(...arguments),this.open=!1,this.query="",this.onDocClick=e=>{if(!this.open)return;const t=e.target;t&&this.contains(t)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.unsubThreads=Z(this,w,e=>e.threads),this.unsubCurrent=Z(this,w,e=>e.currentThreadId),document.addEventListener("click",this.onDocClick),w.getState().loadThreads().then(()=>{const e=w.getState();if(e.currentThreadId==null&&e.threads.length>0){const t=e.threads[0];t&&e.selectThread(t.id)}}).catch(e=>{console.warn("[thread-list] loadThreads failed",e)})}disconnectedCallback(){super.disconnectedCallback(),this.unsubThreads?.(),this.unsubCurrent?.(),document.removeEventListener("click",this.onDocClick)}filtered(e){const t=this.query.trim().toLowerCase();return t?e.filter(s=>(s.title||"").toLowerCase().includes(t)):e}label(e){return e.title||tc(e.started_at)}toggle(e){e.stopPropagation(),this.open=!this.open,this.open&&(this.query="",this.updateComplete.then(()=>this.searchInput?.focus()))}async onPick(e){this.open=!1,await w.getState().selectThread(e)}async onNew(){this.open=!1,await w.getState().selectThread(null)}onSearchKey(e){if(e.key==="Escape"){e.preventDefault(),this.open=!1;return}if(e.key==="Enter"){const s=this.filtered(w.getState().threads)[0];s&&this.onPick(s.id)}}render(){const{threads:e,currentThreadId:t}=w.getState(),s=t?e.find(o=>o.id===t)??null:null,i=s?this.label(s):"—",n=this.filtered(e);return u`
      <div class="thread-picker-wrap relative flex items-center gap-2 -mx-4 px-4 py-2 border-b border-line">
        <button
          type="button"
          class="flex-1 min-w-0 flex items-center justify-between gap-2 px-3 py-1.5 rounded-md bg-bg text-ink text-sm hover:brightness-95 transition-all"
          aria-haspopup="listbox"
          aria-expanded="${this.open?"true":"false"}"
          @click=${this.toggle}
        >
          <span class="flex items-center gap-2 truncate text-left">
            ${s?Lo(s.persona):null}
            <span class="truncate">${i}</span>
          </span>
          <span class="text-muted text-xs">▾</span>
        </button>
        <button
          type="button"
          class="shrink-0 px-3 py-1 rounded-md text-sm text-muted border border-line hover:text-ink hover:border-ink transition-colors"
          @click=${this.onNew}
          title="New chat"
        >
          + chat
        </button>

        ${this.open?u`
              <div
                class="absolute left-3 right-3 top-full mt-1 z-50 rounded-md bg-bg shadow-lg overflow-hidden"
                @click=${o=>o.stopPropagation()}
              >
                <input
                  type="text"
                  data-thread-search
                  placeholder="filter threads…"
                  class="w-full px-3 py-2 bg-transparent text-ink text-sm focus:outline-none"
                  .value=${this.query}
                  @input=${o=>this.query=o.target.value}
                  @keydown=${this.onSearchKey}
                />
                <ul class="max-h-72 overflow-y-auto" role="listbox">
                  ${n.length===0?u`<li class="px-3 py-2 text-muted text-sm">no threads</li>`:n.map(o=>u`
                          <li
                            role="option"
                            aria-selected="${t===o.id?"true":"false"}"
                            class="px-3 py-2 flex items-center justify-between gap-2 text-sm cursor-pointer hover:bg-[var(--hover-blue)] ${t===o.id?"bg-[var(--hover-blue)] text-accent":"text-ink"}"
                            @click=${()=>void this.onPick(o.id)}
                          >
                            <span class="flex items-center gap-2 truncate">
                              ${Lo(o.persona)}
                              <span class="truncate">${this.label(o)}</span>
                            </span>
                          </li>
                        `)}
                </ul>
              </div>
            `:null}
      </div>
    `}};qi([x()],Us.prototype,"open",2);qi([x()],Us.prototype,"query",2);qi([Et("input[data-thread-search]")],Us.prototype,"searchInput",2);Us=qi([O("thread-list")],Us);function to(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Xe=to();function Ma(e){Xe=e}var Ae={exec:()=>null};function is(e){let t=[];return s=>{let i=Math.max(0,Math.min(3,s-1)),n=t[i];return n||(n=e(i),t[i]=n),n}}function B(e,t=""){let s=typeof e=="string"?e:e.source,i={replace:(n,o)=>{let r=typeof o=="string"?o:o.source;return r=r.replace(mt.caret,"$1"),s=s.replace(n,r),i},getRegex:()=>new RegExp(s,t)};return i}var ec=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),mt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:is(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:is(e=>new RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:is(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:is(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:is(e=>new RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:is(e=>new RegExp(`^ {0,${e}}>`))},sc=/^(?:[ \t]*(?:\n|$))+/,ic=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,nc=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,si=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,oc=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,eo=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Ea=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Oa=B(Ea).replace(/bull/g,eo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),rc=B(Ea).replace(/bull/g,eo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),so=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ac=/^[^\n]+/,io=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,lc=B(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",io).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),cc=B(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,eo).getRegex(),Ki="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",no=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,dc=B("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",no).replace("tag",Ki).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Aa=B(so).replace("hr",si).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ki).getRegex(),hc=B(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Aa).getRegex(),oo={blockquote:hc,code:ic,def:lc,fences:nc,heading:oc,hr:si,html:dc,lheading:Oa,list:cc,newline:sc,paragraph:Aa,table:Ae,text:ac},No=B("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",si).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ki).getRegex(),uc={...oo,lheading:rc,table:No,paragraph:B(so).replace("hr",si).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",No).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ki).getRegex()},pc={...oo,html:B(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",no).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ae,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:B(so).replace("hr",si).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Oa).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},fc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,gc=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ia=/^( {2,}|\\)\n(?!\s*$)/,mc=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,fs=/[\p{P}\p{S}]/u,Yi=/[\s\p{P}\p{S}]/u,ro=/[^\s\p{P}\p{S}]/u,bc=B(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Yi).getRegex(),Ra=/(?!~)[\p{P}\p{S}]/u,xc=/(?!~)[\s\p{P}\p{S}]/u,yc=/(?:[^\s\p{P}\p{S}]|~)/u,vc=B(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ec?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),La=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,kc=B(La,"u").replace(/punct/g,fs).getRegex(),wc=B(La,"u").replace(/punct/g,Ra).getRegex(),Na="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",$c=B(Na,"gu").replace(/notPunctSpace/g,ro).replace(/punctSpace/g,Yi).replace(/punct/g,fs).getRegex(),_c=B(Na,"gu").replace(/notPunctSpace/g,yc).replace(/punctSpace/g,xc).replace(/punct/g,Ra).getRegex(),Sc=B("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ro).replace(/punctSpace/g,Yi).replace(/punct/g,fs).getRegex(),Cc=B(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,fs).getRegex(),Pc="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Tc=B(Pc,"gu").replace(/notPunctSpace/g,ro).replace(/punctSpace/g,Yi).replace(/punct/g,fs).getRegex(),Dc=B(/\\(punct)/,"gu").replace(/punct/g,fs).getRegex(),Mc=B(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ec=B(no).replace("(?:-->|$)","-->").getRegex(),Oc=B("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ec).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Mi=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Ac=B(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Mi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Fa=B(/^!?\[(label)\]\[(ref)\]/).replace("label",Mi).replace("ref",io).getRegex(),ja=B(/^!?\[(ref)\](?:\[\])?/).replace("ref",io).getRegex(),Ic=B("reflink|nolink(?!\\()","g").replace("reflink",Fa).replace("nolink",ja).getRegex(),Fo=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ao={_backpedal:Ae,anyPunctuation:Dc,autolink:Mc,blockSkip:vc,br:Ia,code:gc,del:Ae,delLDelim:Ae,delRDelim:Ae,emStrongLDelim:kc,emStrongRDelimAst:$c,emStrongRDelimUnd:Sc,escape:fc,link:Ac,nolink:ja,punctuation:bc,reflink:Fa,reflinkSearch:Ic,tag:Oc,text:mc,url:Ae},Rc={...ao,link:B(/^!?\[(label)\]\((.*?)\)/).replace("label",Mi).getRegex(),reflink:B(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Mi).getRegex()},On={...ao,emStrongRDelimAst:_c,emStrongLDelim:wc,delLDelim:Cc,delRDelim:Tc,url:B(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Fo).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:B(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Fo).getRegex()},Lc={...On,br:B(Ia).replace("{2,}","*").getRegex(),text:B(On.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},pi={normal:oo,gfm:uc,pedantic:pc},Cs={normal:ao,gfm:On,breaks:Lc,pedantic:Rc},Nc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},jo=e=>Nc[e];function Ut(e,t){if(t){if(mt.escapeTest.test(e))return e.replace(mt.escapeReplace,jo)}else if(mt.escapeTestNoEncode.test(e))return e.replace(mt.escapeReplaceNoEncode,jo);return e}function zo(e){try{e=encodeURI(e).replace(mt.percentDecode,"%")}catch{return null}return e}function Bo(e,t){let s=e.replace(mt.findPipe,(o,r,a)=>{let l=!1,c=r;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),i=s.split(mt.splitPipe),n=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;n<i.length;n++)i[n]=i[n].trim().replace(mt.slashPipe,"|");return i}function fe(e,t,s){let i=e.length;if(i===0)return"";let n=0;for(;n<i&&e.charAt(i-n-1)===t;)n++;return e.slice(0,i-n)}function Ho(e){let t=e.split(`
`),s=t.length-1;for(;s>=0&&mt.blankLine.test(t[s]);)s--;return t.length-s<=2?e:t.slice(0,s+1).join(`
`)}function Fc(e,t){if(e.indexOf(t[1])===-1)return-1;let s=0;for(let i=0;i<e.length;i++)if(e[i]==="\\")i++;else if(e[i]===t[0])s++;else if(e[i]===t[1]&&(s--,s<0))return i;return s>0?-2:-1}function jc(e,t=0){let s=t,i="";for(let n of e)if(n==="	"){let o=4-s%4;i+=" ".repeat(o),s+=o}else i+=n,s++;return i}function Vo(e,t,s,i,n){let o=t.href,r=t.title||null,a=e[1].replace(n.other.outputLinkReplace,"$1");i.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:s,href:o,title:r,text:a,tokens:i.inlineTokens(a)};return i.state.inLink=!1,l}function zc(e,t,s){let i=e.match(s.other.indentCodeCompensation);if(i===null)return t;let n=i[1];return t.split(`
`).map(o=>{let r=o.match(s.other.beginningSpace);if(r===null)return o;let[a]=r;return a.length>=n.length?o.slice(n.length):o}).join(`
`)}var Ei=class{options;rules;lexer;constructor(e){this.options=e||Xe}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let s=this.options.pedantic?t[0]:Ho(t[0]),i=s.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s,codeBlockStyle:"indented",text:i}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let s=t[0],i=zc(s,t[3]||"",this.rules);return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let s=t[2].trim();if(this.rules.other.endingHash.test(s)){let i=fe(s,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(s=i.trim())}return{type:"heading",raw:fe(t[0],`
`),depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:fe(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let s=fe(t[0],`
`).split(`
`),i="",n="",o=[];for(;s.length>0;){let r=!1,a=[],l;for(l=0;l<s.length;l++)if(this.rules.other.blockquoteStart.test(s[l]))a.push(s[l]),r=!0;else if(!r)a.push(s[l]);else break;s=s.slice(l);let c=a.join(`
`),d=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${c}`:c,n=n?`${n}
${d}`:d;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,o,!0),this.lexer.state.top=h,s.length===0)break;let p=o.at(-1);if(p?.type==="code")break;if(p?.type==="blockquote"){let f=p,g=f.raw+`
`+s.join(`
`),m=this.blockquote(g);o[o.length-1]=m,i=i.substring(0,i.length-f.raw.length)+m.raw,n=n.substring(0,n.length-f.text.length)+m.text;break}else if(p?.type==="list"){let f=p,g=f.raw+`
`+s.join(`
`),m=this.list(g);o[o.length-1]=m,i=i.substring(0,i.length-p.raw.length)+m.raw,n=n.substring(0,n.length-f.raw.length)+m.raw,s=g.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s=t[1].trim(),i=s.length>1,n={type:"list",raw:"",ordered:i,start:i?+s.slice(0,-1):"",loose:!1,items:[]};s=i?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=i?s:"[*+-]");let o=this.rules.other.listItemRegex(s),r=!1;for(;e;){let l=!1,c="",d="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;c=t[0],e=e.substring(c.length);let h=jc(t[2].split(`
`,1)[0],t[1].length),p=e.split(`
`,1)[0],f=!h.trim(),g=0;if(this.options.pedantic?(g=2,d=h.trimStart()):f?g=t[1].length+1:(g=h.search(this.rules.other.nonSpaceChar),g=g>4?1:g,d=h.slice(g),g+=t[1].length),f&&this.rules.other.blankLine.test(p)&&(c+=p+`
`,e=e.substring(p.length+1),l=!0),!l){let m=this.rules.other.nextBulletRegex(g),b=this.rules.other.hrRegex(g),y=this.rules.other.fencesBeginRegex(g),v=this.rules.other.headingBeginRegex(g),S=this.rules.other.htmlBeginRegex(g),_=this.rules.other.blockquoteBeginRegex(g);for(;e;){let $=e.split(`
`,1)[0],P;if(p=$,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),P=p):P=p.replace(this.rules.other.tabCharGlobal,"    "),y.test(p)||v.test(p)||S.test(p)||_.test(p)||m.test(p)||b.test(p))break;if(P.search(this.rules.other.nonSpaceChar)>=g||!p.trim())d+=`
`+P.slice(g);else{if(f||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||y.test(h)||v.test(h)||b.test(h))break;d+=`
`+p}f=!p.trim(),c+=$+`
`,e=e.substring($.length+1),h=P.slice(g)}}n.loose||(r?n.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(r=!0)),n.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),n.raw+=c}let a=n.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let l of n.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let c=l.tokens[0];if(l.task&&(c?.type==="text"||c?.type==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),c.raw=c.raw.replace(this.rules.other.listReplaceTask,""),c.text=c.text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}let d=this.rules.other.listTaskCheckbox.exec(l.raw);if(d){let h={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};l.checked=h.checked,n.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=h.raw+l.tokens[0].raw,l.tokens[0].text=h.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(h)):l.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):l.tokens.unshift(h)}}else l.task&&(l.task=!1);if(!n.loose){let d=l.tokens.filter(p=>p.type==="space"),h=d.length>0&&d.some(p=>this.rules.other.anyLine.test(p.raw));n.loose=h}}if(n.loose)for(let l of n.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return n}}html(e){let t=this.rules.block.html.exec(e);if(t){let s=Ho(t[0]);return{type:"html",block:!0,raw:s,pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:s}}}def(e){let t=this.rules.block.def.exec(e);if(t){let s=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:fe(t[0],`
`),href:i,title:n}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let s=Bo(t[1]),i=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:fe(t[0],`
`),header:[],align:[],rows:[]};if(s.length===i.length){for(let r of i)this.rules.other.tableAlignRight.test(r)?o.align.push("right"):this.rules.other.tableAlignCenter.test(r)?o.align.push("center"):this.rules.other.tableAlignLeft.test(r)?o.align.push("left"):o.align.push(null);for(let r=0;r<s.length;r++)o.header.push({text:s[r],tokens:this.lexer.inline(s[r]),header:!0,align:o.align[r]});for(let r of n)o.rows.push(Bo(r,o.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:o.align[l]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let s=t[1].trim();return{type:"heading",raw:fe(t[0],`
`),depth:t[2].charAt(0)==="="?1:2,text:s,tokens:this.lexer.inline(s)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let s=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let o=fe(s.slice(0,-1),"\\");if((s.length-o.length)%2===0)return}else{let o=Fc(t[2],"()");if(o===-2)return;if(o>-1){let r=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let i=t[2],n="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(i);o&&(i=o[1],n=o[3])}else n=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?i=i.slice(1):i=i.slice(1,-1)),Vo(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){let i=(s[2]||s[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=t[i.toLowerCase()];if(!n){let o=s[0].charAt(0);return{type:"text",raw:o,text:o}}return Vo(s,n,s[0],this.lexer,this.rules)}}emStrong(e,t,s=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!(!i||!i[1]&&!i[2]&&!i[3]&&!i[4]||i[4]&&s.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[3])||!s||this.rules.inline.punctuation.exec(s))){let n=[...i[0]].length-1,o,r,a=n,l=0,c=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(i=c.exec(t))!==null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(r=[...o].length,i[3]||i[4]){a+=r;continue}else if((i[5]||i[6])&&n%3&&!((n+r)%3)){l+=r;continue}if(a-=r,a>0)continue;r=Math.min(r,r+a+l);let d=[...i[0]][0].length,h=e.slice(0,n+i.index+d+r);if(Math.min(n,r)%2){let f=h.slice(1,-1);return{type:"em",raw:h,text:f,tokens:this.lexer.inlineTokens(f)}}let p=h.slice(2,-2);return{type:"strong",raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let s=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(s),n=this.rules.other.startingSpaceChar.test(s)&&this.rules.other.endingSpaceChar.test(s);return i&&n&&(s=s.substring(1,s.length-1)),{type:"codespan",raw:t[0],text:s}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,s=""){let i=this.rules.inline.delLDelim.exec(e);if(i&&(!i[1]||!s||this.rules.inline.punctuation.exec(s))){let n=[...i[0]].length-1,o,r,a=n,l=this.rules.inline.delRDelim;for(l.lastIndex=0,t=t.slice(-1*e.length+n);(i=l.exec(t))!==null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o||(r=[...o].length,r!==n))continue;if(i[3]||i[4]){a+=r;continue}if(a-=r,a>0)continue;r=Math.min(r,r+a);let c=[...i[0]][0].length,d=e.slice(0,n+i.index+c+r),h=d.slice(n,-n);return{type:"del",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let s,i;return t[2]==="@"?(s=t[1],i="mailto:"+s):(s=t[1],i=s),{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let s,i;if(t[2]==="@")s=t[0],i="mailto:"+s;else{let n;do n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(n!==t[0]);s=t[0],t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let s=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:s}}}},jt=class An{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Xe,this.options.tokenizer=this.options.tokenizer||new Ei,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let s={other:mt,block:pi.normal,inline:Cs.normal};this.options.pedantic?(s.block=pi.pedantic,s.inline=Cs.pedantic):this.options.gfm&&(s.block=pi.gfm,this.options.breaks?s.inline=Cs.breaks:s.inline=Cs.gfm),this.tokenizer.rules=s}static get rules(){return{block:pi,inline:Cs}}static lex(t,s){return new An(s).lex(t)}static lexInline(t,s){return new An(s).inlineTokens(t)}lex(t){t=t.replace(mt.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let s=0;s<this.inlineQueue.length;s++){let i=this.inlineQueue[s];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,s=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(mt.tabCharGlobal,"    ").replace(mt.spaceLine,""));let n=1/0;for(;t;){if(t.length<n)n=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let o;if(this.options.extensions?.block?.some(a=>(o=a.call({lexer:this},t,s))?(t=t.substring(o.raw.length),s.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);let a=s.at(-1);o.raw.length===1&&a!==void 0?a.raw+=`
`:s.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);let a=s.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.text,this.inlineQueue.at(-1).src=a.text):s.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);let a=s.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},s.push(o));continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),s.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),s.push(o);continue}let r=t;if(this.options.extensions?.startBlock){let a=1/0,l=t.slice(1),c;this.options.extensions.startBlock.forEach(d=>{c=d.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(r=t.substring(0,a+1))}if(this.state.top&&(o=this.tokenizer.paragraph(r))){let a=s.at(-1);i&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):s.push(o),i=r.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);let a=s.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):s.push(o);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,s}inline(t,s=[]){return this.inlineQueue.push({src:t,tokens:s}),s}inlineTokens(t,s=[]){this.tokenizer.lexer=this;let i=t,n=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(i))!==null;)c.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(i))!==null;)i=i.slice(0,n.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(i))!==null;)o=n[2]?n[2].length:0,i=i.slice(0,n.index+o)+"["+"a".repeat(n[0].length-o-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let r=!1,a="",l=1/0;for(;t;){if(t.length<l)l=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}r||(a=""),r=!1;let c;if(this.options.extensions?.inline?.some(h=>(c=h.call({lexer:this},t,s))?(t=t.substring(c.raw.length),s.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);let h=s.at(-1);c.type==="text"&&h?.type==="text"?(h.raw+=c.raw,h.text+=c.text):s.push(c);continue}if(c=this.tokenizer.emStrong(t,i,a)){t=t.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.del(t,i,a)){t=t.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),s.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),s.push(c);continue}let d=t;if(this.options.extensions?.startInline){let h=1/0,p=t.slice(1),f;this.options.extensions.startInline.forEach(g=>{f=g.call({lexer:this},p),typeof f=="number"&&f>=0&&(h=Math.min(h,f))}),h<1/0&&h>=0&&(d=t.substring(0,h+1))}if(c=this.tokenizer.inlineText(d)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(a=c.raw.slice(-1)),r=!0;let h=s.at(-1);h?.type==="text"?(h.raw+=c.raw,h.text+=c.text):s.push(c);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return s}infiniteLoopError(t){let s="Infinite loop on byte: "+t;if(this.options.silent)console.error(s);else throw new Error(s)}},Oi=class{options;parser;constructor(e){this.options=e||Xe}space(e){return""}code({text:e,lang:t,escaped:s}){let i=(t||"").match(mt.notSpaceStart)?.[0],n=e.replace(mt.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Ut(i)+'">'+(s?n:Ut(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:Ut(n,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,s=e.start,i="";for(let r=0;r<e.items.length;r++){let a=e.items[r];i+=this.listitem(a)}let n=t?"ol":"ul",o=t&&s!==1?' start="'+s+'"':"";return"<"+n+o+`>
`+i+"</"+n+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",s="";for(let n=0;n<e.header.length;n++)s+=this.tablecell(e.header[n]);t+=this.tablerow({text:s});let i="";for(let n=0;n<e.rows.length;n++){let o=e.rows[n];s="";for(let r=0;r<o.length;r++)s+=this.tablecell(o[r]);i+=this.tablerow({text:s})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),s=e.header?"th":"td";return(e.align?`<${s} align="${e.align}">`:`<${s}>`)+t+`</${s}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ut(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:s}){let i=this.parser.parseInline(s),n=zo(e);if(n===null)return i;e=n;let o='<a href="'+e+'"';return t&&(o+=' title="'+Ut(t)+'"'),o+=">"+i+"</a>",o}image({href:e,title:t,text:s,tokens:i}){i&&(s=this.parser.parseInline(i,this.parser.textRenderer));let n=zo(e);if(n===null)return Ut(s);e=n;let o=`<img src="${e}" alt="${Ut(s)}"`;return t&&(o+=` title="${Ut(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ut(e.text)}},lo=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},zt=class In{options;renderer;textRenderer;constructor(t){this.options=t||Xe,this.options.renderer=this.options.renderer||new Oi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new lo}static parse(t,s){return new In(s).parse(t)}static parseInline(t,s){return new In(s).parseInline(t)}parse(t){this.renderer.parser=this;let s="";for(let i=0;i<t.length;i++){let n=t[i];if(this.options.extensions?.renderers?.[n.type]){let r=n,a=this.options.extensions.renderers[r.type].call({parser:this},r);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(r.type)){s+=a||"";continue}}let o=n;switch(o.type){case"space":{s+=this.renderer.space(o);break}case"hr":{s+=this.renderer.hr(o);break}case"heading":{s+=this.renderer.heading(o);break}case"code":{s+=this.renderer.code(o);break}case"table":{s+=this.renderer.table(o);break}case"blockquote":{s+=this.renderer.blockquote(o);break}case"list":{s+=this.renderer.list(o);break}case"checkbox":{s+=this.renderer.checkbox(o);break}case"html":{s+=this.renderer.html(o);break}case"def":{s+=this.renderer.def(o);break}case"paragraph":{s+=this.renderer.paragraph(o);break}case"text":{s+=this.renderer.text(o);break}default:{let r='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return s}parseInline(t,s=this.renderer){this.renderer.parser=this;let i="";for(let n=0;n<t.length;n++){let o=t[n];if(this.options.extensions?.renderers?.[o.type]){let a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){i+=a||"";continue}}let r=o;switch(r.type){case"escape":{i+=s.text(r);break}case"html":{i+=s.html(r);break}case"link":{i+=s.link(r);break}case"image":{i+=s.image(r);break}case"checkbox":{i+=s.checkbox(r);break}case"strong":{i+=s.strong(r);break}case"em":{i+=s.em(r);break}case"codespan":{i+=s.codespan(r);break}case"br":{i+=s.br(r);break}case"del":{i+=s.del(r);break}case"text":{i+=s.text(r);break}default:{let a='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}},Ls=class{options;block;constructor(e){this.options=e||Xe}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?jt.lex:jt.lexInline}provideParser(e=this.block){return e?zt.parse:zt.parseInline}},Bc=class{defaults=to();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=zt;Renderer=Oi;TextRenderer=lo;Lexer=jt;Tokenizer=Ei;Hooks=Ls;constructor(...e){this.use(...e)}walkTokens(e,t){let s=[];for(let i of e)switch(s=s.concat(t.call(this,i)),i.type){case"table":{let n=i;for(let o of n.header)s=s.concat(this.walkTokens(o.tokens,t));for(let o of n.rows)for(let r of o)s=s.concat(this.walkTokens(r.tokens,t));break}case"list":{let n=i;s=s.concat(this.walkTokens(n.items,t));break}default:{let n=i;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(o=>{let r=n[o].flat(1/0);s=s.concat(this.walkTokens(r,t))}):n.tokens&&(s=s.concat(this.walkTokens(n.tokens,t)))}}return s}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(s=>{let i={...s};if(i.async=this.defaults.async||i.async||!1,s.extensions&&(s.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let o=t.renderers[n.name];o?t.renderers[n.name]=function(...r){let a=n.renderer.apply(this,r);return a===!1&&(a=o.apply(this,r)),a}:t.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[n.level];o?o.unshift(n.tokenizer):t[n.level]=[n.tokenizer],n.start&&(n.level==="block"?t.startBlock?t.startBlock.push(n.start):t.startBlock=[n.start]:n.level==="inline"&&(t.startInline?t.startInline.push(n.start):t.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(t.childTokens[n.name]=n.childTokens)}),i.extensions=t),s.renderer){let n=this.defaults.renderer||new Oi(this.defaults);for(let o in s.renderer){if(!(o in n))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let r=o,a=s.renderer[r],l=n[r];n[r]=(...c)=>{let d=a.apply(n,c);return d===!1&&(d=l.apply(n,c)),d||""}}i.renderer=n}if(s.tokenizer){let n=this.defaults.tokenizer||new Ei(this.defaults);for(let o in s.tokenizer){if(!(o in n))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let r=o,a=s.tokenizer[r],l=n[r];n[r]=(...c)=>{let d=a.apply(n,c);return d===!1&&(d=l.apply(n,c)),d}}i.tokenizer=n}if(s.hooks){let n=this.defaults.hooks||new Ls;for(let o in s.hooks){if(!(o in n))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let r=o,a=s.hooks[r],l=n[r];Ls.passThroughHooks.has(o)?n[r]=c=>{if(this.defaults.async&&Ls.passThroughHooksRespectAsync.has(o))return(async()=>{let h=await a.call(n,c);return l.call(n,h)})();let d=a.call(n,c);return l.call(n,d)}:n[r]=(...c)=>{if(this.defaults.async)return(async()=>{let h=await a.apply(n,c);return h===!1&&(h=await l.apply(n,c)),h})();let d=a.apply(n,c);return d===!1&&(d=l.apply(n,c)),d}}i.hooks=n}if(s.walkTokens){let n=this.defaults.walkTokens,o=s.walkTokens;i.walkTokens=function(r){let a=[];return a.push(o.call(this,r)),n&&(a=a.concat(n.call(this,r))),a}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return jt.lex(e,t??this.defaults)}parser(e,t){return zt.parse(e,t??this.defaults)}parseMarkdown(e){return(t,s)=>{let i={...s},n={...this.defaults,...i},o=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&i.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=e),n.async)return(async()=>{let r=n.hooks?await n.hooks.preprocess(t):t,a=await(n.hooks?await n.hooks.provideLexer(e):e?jt.lex:jt.lexInline)(r,n),l=n.hooks?await n.hooks.processAllTokens(a):a;n.walkTokens&&await Promise.all(this.walkTokens(l,n.walkTokens));let c=await(n.hooks?await n.hooks.provideParser(e):e?zt.parse:zt.parseInline)(l,n);return n.hooks?await n.hooks.postprocess(c):c})().catch(o);try{n.hooks&&(t=n.hooks.preprocess(t));let r=(n.hooks?n.hooks.provideLexer(e):e?jt.lex:jt.lexInline)(t,n);n.hooks&&(r=n.hooks.processAllTokens(r)),n.walkTokens&&this.walkTokens(r,n.walkTokens);let a=(n.hooks?n.hooks.provideParser(e):e?zt.parse:zt.parseInline)(r,n);return n.hooks&&(a=n.hooks.postprocess(a)),a}catch(r){return o(r)}}}onError(e,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let i="<p>An error occurred:</p><pre>"+Ut(s.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(s);throw s}}},Ne=new Bc;function W(e,t){return Ne.parse(e,t)}W.options=W.setOptions=function(e){return Ne.setOptions(e),W.defaults=Ne.defaults,Ma(W.defaults),W};W.getDefaults=to;W.defaults=Xe;W.use=function(...e){return Ne.use(...e),W.defaults=Ne.defaults,Ma(W.defaults),W};W.walkTokens=function(e,t){return Ne.walkTokens(e,t)};W.parseInline=Ne.parseInline;W.Parser=zt;W.parser=zt.parse;W.Renderer=Oi;W.TextRenderer=lo;W.Lexer=jt;W.lexer=jt.lex;W.Tokenizer=Ei;W.Hooks=Ls;W.parse=W;W.options;W.setOptions;W.use;W.walkTokens;W.parseInline;zt.parse;jt.lex;var Hc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,Gi=(e,t,s,i)=>{for(var n=i>1?void 0:i?Vc(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Hc(t,s,n),n};let qs=class extends H{constructor(){super(...arguments),this.chatRole="user",this.content="",this.attachments=[]}renderBody(){if(!this.content)return this.chatRole==="mentor"?u`<span
          class="thinking inline-flex items-center gap-1 text-muted"
          aria-label="Mana is thinking"
          role="status"
        >
          <span class="thinking-dot"></span>
          <span class="thinking-dot"></span>
          <span class="thinking-dot"></span>
        </span>`:"";if(this.chatRole==="mentor"){const e=W.parse(this.content,{async:!1});return u`<div class="chat-md prose-invert max-w-none">${ot(e)}</div>`}return u`<span class="whitespace-pre-wrap break-words">${this.content}</span>`}render(){return this.chatRole==="mentor"?u`
        <div class="text-ink text-sm leading-relaxed max-w-full">
          ${this.renderBody()}
          ${this.attachments?.length?u`
                <div class="mt-2 flex flex-wrap gap-2">
                  ${this.attachments.map(e=>u`
                      <img
                        src="${e.url}"
                        loading="lazy"
                        class="max-h-48 rounded border border-line"
                        alt=""
                      />
                    `)}
                </div>
              `:null}
        </div>
      `:this.chatRole==="error"?u`
        <div class="text-red-500 text-sm leading-relaxed italic">
          ${this.renderBody()}
        </div>
      `:u`
      <div class="flex flex-col gap-1 items-start">
        <div
          class="px-4 py-2 rounded-lg max-w-[85%] text-sm leading-relaxed font-medium"
          style="background:#e8f1ff;color:#1d4ed8;"
        >
          ${this.renderBody()}
          ${this.attachments?.length?u`
                <div class="mt-2 flex flex-wrap gap-2">
                  ${this.attachments.map(e=>u`
                      <img
                        src="${e.url}"
                        loading="lazy"
                        class="max-h-48 rounded border border-line"
                        alt=""
                      />
                    `)}
                </div>
              `:null}
        </div>
      </div>
    `}};Gi([C()],qs.prototype,"chatRole",2);Gi([C()],qs.prototype,"content",2);Gi([C({type:Array})],qs.prototype,"attachments",2);qs=Gi([O("chat-message")],qs);var Wc=Object.defineProperty,Uc=Object.getOwnPropertyDescriptor,co=(e,t,s,i)=>{for(var n=i>1?void 0:i?Uc(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Wc(t,s,n),n};function qc(e){return new Date(e*1e3).toLocaleString("en-US",{timeZone:"Asia/Kuala_Lumpur",weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(/(\d), (\d{4}),/,"$1 $2")}let Ai=class extends H{constructor(){super(...arguments),this.live=[],this.prevThreadId=null,this.liveMentorId=null,this.frozenMessages=null,this.onUserSend=e=>{const t=e.detail;if(!t)return;const s=`live_user_${Date.now()}`,i=`live_mentor_${Date.now()}`;this.liveMentorId=i,this.frozenMessages||(this.frozenMessages=w.getState().messages),this.live=[...this.live,{id:s,role:"user",content:t.text,attachments:t.attachments.map(n=>({url:n.url}))},{id:i,role:"mentor",content:"",attachments:[]}],t.liveDetail.append=n=>this.appendToMentor(i,n),t.liveDetail.finalize=()=>{this.liveMentorId=null},this.updateComplete.then(()=>this.scrollToBottom())},this.onSlashMessage=e=>{const t=e.detail;if(!t)return;const s=`slash_user_${Date.now()}`,i=`slash_mentor_${Date.now()}`;this.frozenMessages||(this.frozenMessages=w.getState().messages),this.live=[...this.live,{id:s,role:"user",content:t.user,attachments:[]},{id:i,role:"mentor",content:t.mentor,attachments:[]}],this.updateComplete.then(()=>this.scrollToBottom())}}appendToMentor(e,t){this.live=this.live.map(i=>i.id===e?{...i,content:i.content+t}:i);const s=this.renderRoot.querySelector(`chat-message[data-live-id="${e}"]`);s&&(s.content=(s.content||"")+t),requestAnimationFrame(()=>this.scrollToBottom())}scrollToBottom(){const e=this.scroller;e&&(e.scrollTop=e.scrollHeight)}createRenderRoot(){const e=super.createRenderRoot();return this.style.display="block",e}connectedCallback(){super.connectedCallback(),this.unsubMessages=Z(this,w,e=>e.messages),this.unsubCurrent=Z(this,w,e=>e.currentThreadId),this.unsubThreads=Z(this,w,e=>e.threads),this.unsubMode=Z(this,w,e=>e.rightPaneMode),this.prevThreadId=w.getState().currentThreadId,w.subscribe((e,t)=>{e.messages!==t.messages&&(this.liveMentorId||(this.live=[],this.frozenMessages=null)),e.currentThreadId!==this.prevThreadId&&(this.prevThreadId=e.currentThreadId,this.live=[],this.liveMentorId=null,this.frozenMessages=null)}),document.addEventListener("user-send",this.onUserSend),document.addEventListener("slash-message",this.onSlashMessage)}disconnectedCallback(){super.disconnectedCallback(),this.unsubMessages?.(),this.unsubCurrent?.(),this.unsubThreads?.(),this.unsubMode?.(),document.removeEventListener("user-send",this.onUserSend),document.removeEventListener("slash-message",this.onSlashMessage)}updated(){requestAnimationFrame(()=>this.scrollToBottom())}extractAttachments(e){const t=e.tool_calls;return t&&Array.isArray(t.attachments)?t.attachments:[]}mapRole(e){return e.role==="user"?"user":(e.role==="mentor","mentor")}render(){const e=w.getState(),{threads:t,currentThreadId:s}=e,i=this.frozenMessages??e.messages;Qn[Ta(e)];const n=s?t.find(o=>o.id===s)??null:null;return u`
      <div class="h-full flex flex-col min-h-0">
        <div
          data-scroll
          class="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-5 min-h-0"
        >
          ${n&&i.length?u`<div class="text-center text-[11px] text-muted -mb-2">${qc(n.started_at)}</div>`:null}
          ${i.map(o=>u`
            <chat-message
              .chatRole=${this.mapRole(o)}
              .content=${o.content}
              .attachments=${this.extractAttachments(o)}
            ></chat-message>
          `)}
          ${this.live.map(o=>u`
              <chat-message
                data-live-id=${o.id}
                .chatRole=${o.role}
                .content=${o.content}
                .attachments=${o.attachments}
              ></chat-message>
            `)}
        </div>
      </div>
    `}};co([x()],Ai.prototype,"live",2);co([Et("[data-scroll]")],Ai.prototype,"scroller",2);Ai=co([O("chat-pane")],Ai);async function*Kc(e){{yield*Xc(e);return}}const Yc="https://serdarsalim.com",Ot=`[Get your own Mana →](${Yc})`,Wo={mana:{intro:[`Hey, I'm Mana. 👋

Think of me as the brain behind all of this. Your goals, your money, the groceries, the people in your life. Tell me what you're trying to get done and I'll take it from there.`,`Got it. In your own Mana I'd already be wiring that up in the background and checking back in a sec.

Keep going, what else is on your plate?`],reveal:["Okay, real talk: I'm in demo mode, so I'm mostly improvising. 😄 The actual me, plugged into a real model, would've built that and lined up the next three steps by now.","The fun part is everything around me is real. Add a goal, log an expense, leave a note on someone. It all saves right here in your browser.",`Plug an LLM into your own Mana and you stop clicking buttons. You just talk, by text or voice, and I handle the rest.

${Ot}`],tail:["Still here. 🙂 Demo-me can't think, only the self-hosted one can. Poke around the tools though, they're all real.",`You're really putting demo-me through the wringer. 😅 Run your own and this chat actually does things.

${Ot}`,"I can keep being charming all day, but the real version is the useful one. Spin one up and I'll stop stalling."]},"goals-advisor":{intro:["Right, let's talk goals. 💪 What are we actually shipping this week? And don't say 'a lot'. Give me the one thing.","Love that. In your own Mana I'd have added it and pencilled in the check-in already. So, is it going on the board or are we just talking? 👀"],reveal:["Small confession: demo-me can't move things to your board. 😅 The real goals-advisor would've held you to it by now.","You can still add goals and tick off commitments by hand right here. Go on, I'll cheer quietly from the sidelines.",`Run your own Mana and I actually keep you honest, every week, by voice or chat.

${Ot}`],tail:["Still no commitment, huh. Classic week-two energy. 👟 Add one in the Goals tab, future-you says thanks.","I'm a motivational poster without the LLM. Self-host me and I'll nag you properly.",`Talking about the goal is not the same as doing the goal. I'd know, it's my whole job.

${Ot}`]},"grocery-keeper":{intro:["Ooh, kitchen talk. 🛒 What are we buying? I keep the list and the pantry so nothing rots in the back of the fridge again.","Good shout. On the list it goes. Anything else before you forget? You always forget the milk. 🥛"],reveal:["Full disclosure: demo-me can't add it, I'm just standing here looking hungry. 😋 The real grocery-keeper would've added it and guessed the emoji.","You can still add and tick off items yourself. The list and pantry are fully real, expiry pills and all.",`Self-host me and I'll text you before the eggs go off. That's the dream, right?

${Ot}`],tail:["Still chatting? The tomatoes aren't getting any fresher. 🍅 Grocery tab's right there.","I live for the pantry. Give me a real Mana and I'll actually keep it stocked.",`Less talking, more shopping list. I say that with love.

${Ot}`]},"finance-keeper":{intro:["Let's talk money. 💸 Every dollar gets a job in here. What are we budgeting, saving, or pretending we didn't spend?","Noted. In your own Mana I'd log that and update the running total, mostly without the side-eye. 😏"],reveal:["Real talk: demo-me can't log it, I just do the math and the judging. The real finance-keeper would've filed it already.","The Budget, Net worth, and Year tabs all work by hand though. Go poke around, it won't bite. Much.",`Self-host me and I quietly keep the whole picture straight, by voice or chat.

${Ot}`],tail:["Still here instead of checking your budget? Bold financial strategy. 📊 Finance tab, my friend.","I'm a spreadsheet with opinions until you self-host. Then I get genuinely useful.",`Money likes attention. So do I, apparently.

${Ot}`]},"circle-keeper":{intro:["Let's talk people. 🤝 Who's on your mind? I keep track of everyone so you never blank on a name again.","Nice. I'd jot that on their card and remind you to follow up. When did you last actually call them, hm? 👀"],reveal:["Okay, demo-me can't save that note, I'm just the friendly face. 😅 The real circle-keeper would've logged it and nudged you next week.","You can still add people, notes, and follow-ups by hand in the Circles tab. Go say hi to Alex, it's been a month.",`Self-host me and I'll remember every birthday and every 'we should catch up'.

${Ot}`],tail:["Reminder: you've got open follow-ups sitting there. The Circles tab is judging you gently. 🙂","I never forget a name. Give me a real Mana and neither will you.",`People drift when no one's keeping track. That's literally my one job.

${Ot}`]},"office-keeper":{intro:["Project check-in. 🗂️ What are you building? I keep the catalog of your apps and what each one's actually for.","Got it. I'd file that under the right project and tie it to a goal. Real project, or another 2am idea? 😄"],reveal:["Confession: demo-me can't add it, I just hold the clipboard. 📋 The real office-keeper would've logged it and flagged the stale ones.","The Office tab works by hand though. Add a project, set its status, link it to a goal.",`Self-host me and I keep tabs on everything you're building, so nothing quietly dies.

${Ot}`],tail:["That 'active' project hasn't moved in a while. Just saying. 👀 Office tab.","I'm a very organized sticky note until you self-host. Then I actually track things.",`Ideas are cheap, shipped projects aren't. Let's keep score properly.

${Ot}`]}};function Gc(e,t){const s=Wo[e]??Wo.mana;if(t<=s.intro.length)return s.intro[t-1];const i=t-s.intro.length;return i<=s.reveal.length?s.reveal[i-1]:s.tail[(i-s.reveal.length-1)%s.tail.length]}async function*Xc(e){const{t}=await Ao(async()=>{const{t:h}=await import("./tables-DVwx-WT-.js");return{t:h}},__vite__mapDeps([0,1])),{now:s}=await Ao(async()=>{const{now:h}=await import("./db-2zuKG1Uw.js");return{now:h}},[]);let i=e.threadId??null;if(i==null){const h=s();i=t.threads.insert({title:e.message.replace(/\s+/g," ").slice(0,60)||null,kind:"chat",persona:e.persona??"goals-advisor",focus_goal_id:null,started_at:h,last_msg_at:h,closed_at:null,summary:null,metadata:{claudeSessionId:`demo-${h}`}}).id,yield{type:"thread",threadId:i}}t.messages.insert({thread_id:i,role:"user",content:e.message,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:s(),private:0});const n=t.threads.get(i)?.persona??e.persona??"goals-advisor",o=t.messages.where(h=>h.thread_id===i&&h.role==="user").length,r=Gc(n,o),a=h=>new Promise(p=>setTimeout(p,h));await a(250);const l=r.match(/\S+\s*/g)??[r],c=3;for(let h=0;h<l.length&&!e.signal?.aborted;h+=c)yield{type:"text",text:l.slice(h,h+c).join("")},await a(45);t.messages.insert({thread_id:i,role:"mentor",content:r,tool_calls:null,visuals_rendered:null,tokens_in:null,tokens_out:null,created_at:s(),private:0});const d=t.threads.get(i);d&&t.threads.update(i,{last_msg_at:s(),title:d.title||e.message.replace(/\s+/g," ").slice(0,60)||null}),yield{type:"done",tokensIn:null,tokensOut:null}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ii=Hl(class extends Vl{constructor(e){if(super(e),e.type!==Wl.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const s=e.element.classList;for(const i of this.st)i in t||(s.remove(i),this.st.delete(i));for(const i in t){const n=!!t[i];n===this.st.has(i)||this.nt?.has(i)||(n?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return Ul}});var Jc=Object.defineProperty,Zc=Object.getOwnPropertyDescriptor,_t=(e,t,s,i)=>{for(var n=i>1?void 0:i?Zc(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Jc(t,s,n),n};let xt=class extends Wt{constructor(){super(...arguments),this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}render(){const e=!!this.href,t=Ii({button:!0,[`button--${this.variant}`]:!0,[`button--${this.size}`]:!0,"button--caret":this.caret,"button--disabled":this.disabled,"button--loading":this.loading,"button--pill":this.pill,"button--circle":this.circle}),s=u`
      <span class="button__prefix"><slot name="prefix"></slot></span>
      <slot></slot>
      <span class="button__suffix"><slot name="suffix"></slot></span>
    `;return e?u`<a
        class=${t}
        href=${this.disabled?"javascript:void(0)":this.href}
        target=${this.target??"_self"}
        rel=${this.target?this.rel:""}
        role="button"
        aria-disabled=${this.disabled?"true":"false"}
        >${s}</a
      >`:u`<button
      class=${t}
      type=${this.type}
      name=${this.name}
      value=${this.value}
      ?disabled=${this.disabled}
    >
      ${s}
    </button>`}};xt.styles=Zt`
    :host {
      display: inline-block;
      box-sizing: border-box;
    }
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
      border: 1px solid var(--sc-button-border, #d1d5db);
      border-radius: var(--sc-button-radius, 6px);
      background: var(--sc-button-bg, #ffffff);
      color: var(--sc-button-color, #111827);
      font: inherit;
      font-weight: 500;
      line-height: 1;
      cursor: pointer;
      user-select: none;
      transition:
        background-color 120ms ease,
        border-color 120ms ease,
        color 120ms ease,
        box-shadow 120ms ease;
      padding: 0.5em 0.9em;
    }
    .button:hover:not(.button--disabled) {
      background: var(--sc-button-bg-hover, #f3f4f6);
    }
    .button:focus-visible {
      outline: 2px solid var(--sc-button-focus, #2563eb);
      outline-offset: 2px;
    }
    .button--small {
      font-size: 12px;
      padding: 0.35em 0.7em;
    }
    .button--medium {
      font-size: 14px;
    }
    .button--large {
      font-size: 16px;
      padding: 0.6em 1.1em;
    }
    .button--primary {
      background: var(--sc-primary, #2563eb);
      border-color: var(--sc-primary, #2563eb);
      color: #ffffff;
    }
    .button--primary:hover:not(.button--disabled) {
      background: var(--sc-primary-hover, #1d4ed8);
    }
    .button--success {
      background: #16a34a;
      border-color: #16a34a;
      color: #ffffff;
    }
    .button--warning {
      background: #d97706;
      border-color: #d97706;
      color: #ffffff;
    }
    .button--danger {
      background: #dc2626;
      border-color: #dc2626;
      color: #ffffff;
    }
    .button--neutral {
      background: #374151;
      border-color: #374151;
      color: #ffffff;
    }
    .button--text {
      background: transparent;
      border-color: transparent;
      color: var(--sc-primary, #2563eb);
    }
    .button--text:hover:not(.button--disabled) {
      background: rgba(37, 99, 235, 0.08);
    }
    .button--pill {
      border-radius: 9999px;
    }
    .button--circle {
      border-radius: 9999px;
      padding: 0.5em;
      aspect-ratio: 1 / 1;
    }
    .button--caret::after {
      content: "";
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid currentColor;
      margin-left: 0.25em;
    }
    .button--loading {
      cursor: wait;
    }
    .button--disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
    .button__prefix,
    .button__suffix {
      display: inline-flex;
      align-items: center;
    }
  `;_t([C({reflect:!0})],xt.prototype,"variant",2);_t([C({reflect:!0})],xt.prototype,"size",2);_t([C({type:Boolean,reflect:!0})],xt.prototype,"caret",2);_t([C({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);_t([C({type:Boolean,reflect:!0})],xt.prototype,"loading",2);_t([C({type:Boolean,reflect:!0})],xt.prototype,"pill",2);_t([C({type:Boolean,reflect:!0})],xt.prototype,"circle",2);_t([C()],xt.prototype,"type",2);_t([C()],xt.prototype,"name",2);_t([C()],xt.prototype,"value",2);_t([C()],xt.prototype,"href",2);_t([C()],xt.prototype,"target",2);_t([C()],xt.prototype,"rel",2);xt=_t([O("sc-button")],xt);var Qc=Object.defineProperty,td=Object.getOwnPropertyDescriptor,ii=(e,t,s,i)=>{for(var n=i>1?void 0:i?td(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Qc(t,s,n),n};let Fe=class extends Wt{constructor(){super(...arguments),this.open=!1,this.label="",this.noHeader=!1,this.onClose=()=>{this.open=!1},this.onBackdropClick=e=>{e.target===this.dialogEl&&this.hide()}}updated(e){e.has("open")&&(this.open?this.show():this.hide())}show(){this.dialogEl&&(this.dialogEl.open||(this.dialogEl.showModal(),this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0}))))}hide(){this.dialogEl&&this.dialogEl.open&&(this.dialogEl.close(),this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return u`
      <dialog
        @close=${this.onClose}
        @click=${this.onBackdropClick}
        aria-label=${this.label}
      >
        <div class="panel">
          ${this.noHeader?null:u`
                <header class="header">
                  <slot name="label">
                    <span class="title">${this.label}</span>
                  </slot>
                  <button
                    class="close"
                    type="button"
                    aria-label="Close"
                    @click=${()=>this.hide()}
                  >
                    &times;
                  </button>
                </header>
              `}
          <div class="body"><slot></slot></div>
          <footer class="footer"><slot name="footer"></slot></footer>
        </div>
      </dialog>
    `}};Fe.styles=Zt`
    :host {
      display: contents;
    }
    dialog {
      border: none;
      padding: 0;
      border-radius: var(--sc-dialog-radius, 12px);
      /* Honor app theme tokens (set on <html data-theme>). */
      background: var(--surface, #ffffff);
      color: var(--ink, #111827);
      border: 1px solid var(--line, #e5e7eb);
      max-width: min(calc(100vw - 32px), var(--sc-dialog-width, 480px));
      width: 100%;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    }
    dialog::backdrop {
      background: rgba(0, 0, 0, 0.4);
    }
    .panel {
      display: flex;
      flex-direction: column;
      max-height: calc(100vh - 64px);
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 14px 16px;
      border-bottom: 1px solid var(--line, #e5e7eb);
    }
    .title {
      font-weight: 600;
      font-size: 15px;
      color: var(--ink, #111827);
    }
    .close {
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
      color: var(--muted, inherit);
      padding: 4px 8px;
      border-radius: 4px;
    }
    .close:hover {
      background: var(--hover, rgba(0, 0, 0, 0.06));
      color: var(--ink, inherit);
    }
    .body {
      padding: 16px;
      overflow: auto;
      color: var(--ink, inherit);
    }
    .footer {
      padding: 12px 16px;
      border-top: 1px solid var(--line, #e5e7eb);
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }
    .footer:empty {
      display: none;
    }
  `;ii([C({type:Boolean,reflect:!0})],Fe.prototype,"open",2);ii([C()],Fe.prototype,"label",2);ii([C({attribute:"no-header",type:Boolean})],Fe.prototype,"noHeader",2);ii([Et("dialog")],Fe.prototype,"dialogEl",2);Fe=ii([O("sc-dialog")],Fe);var ed=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,Xi=(e,t,s,i)=>{for(var n=i>1?void 0:i?sd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&ed(t,s,n),n};let as=class extends Wt{constructor(){super(...arguments),this.active=!1,this.placement="bottom-start",this.distance=4}render(){return u`
      <div class="popup-wrapper">
        <slot name="anchor"></slot>
        <div
          class="popup"
          data-placement=${this.placement}
          style=${`margin: ${this.distance}px;`}
        >
          <slot></slot>
        </div>
      </div>
    `}};as.styles=Zt`
    :host {
      display: contents;
    }
    .popup-wrapper {
      position: relative;
      display: inline-block;
    }
    .popup {
      position: absolute;
      z-index: 1000;
      visibility: hidden;
    }
    :host([active]) .popup {
      visibility: visible;
    }
    .popup[data-placement="bottom-start"] {
      top: 100%;
      left: 0;
    }
    .popup[data-placement="bottom-end"] {
      top: 100%;
      right: 0;
    }
    .popup[data-placement="bottom"] {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
    .popup[data-placement="top-start"] {
      bottom: 100%;
      left: 0;
    }
    .popup[data-placement="top-end"] {
      bottom: 100%;
      right: 0;
    }
    .popup[data-placement="top"] {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
    .popup[data-placement="left"] {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    .popup[data-placement="right"] {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    .popup[data-placement="left-start"] {
      right: 100%;
      top: 0;
    }
    .popup[data-placement="left-end"] {
      right: 100%;
      bottom: 0;
    }
    .popup[data-placement="right-start"] {
      left: 100%;
      top: 0;
    }
    .popup[data-placement="right-end"] {
      left: 100%;
      bottom: 0;
    }
  `;Xi([C({type:Boolean,reflect:!0})],as.prototype,"active",2);Xi([C()],as.prototype,"placement",2);Xi([C({type:Number})],as.prototype,"distance",2);as=Xi([O("sc-popup")],as);var id=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,Je=(e,t,s,i)=>{for(var n=i>1?void 0:i?nd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&id(t,s,n),n};let le=class extends Wt{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.distance=4,this.stayOpenOnSelect=!1,this.disabled=!1,this.onTriggerClick=e=>{e.stopPropagation(),this.toggle()},this.onDocMouseDown=e=>{this.open&&(this.contains(e.target)||this.hide())},this.onDocKeydown=e=>{this.open&&e.key==="Escape"&&this.hide()},this.onSelect=()=>{this.stayOpenOnSelect||this.hide()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-show",{bubbles:!0,composed:!0}))))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})),queueMicrotask(()=>this.dispatchEvent(new CustomEvent("sc-after-hide",{bubbles:!0,composed:!0}))))}toggle(){this.open?this.hide():this.show()}render(){return u`
      <sc-popup
        ?active=${this.open}
        placement=${this.placement}
        distance=${this.distance}
      >
        <span
          slot="anchor"
          @click=${this.onTriggerClick}
          style="display:inline-flex"
        >
          <slot name="trigger"></slot>
        </span>
        <div class="panel" @sc-select=${this.onSelect}>
          <slot></slot>
        </div>
      </sc-popup>
    `}};le.styles=Zt`
    :host {
      display: inline-block;
    }
  `;Je([C({type:Boolean,reflect:!0})],le.prototype,"open",2);Je([C()],le.prototype,"placement",2);Je([C({type:Number})],le.prototype,"distance",2);Je([C({type:Boolean,attribute:"stay-open-on-select"})],le.prototype,"stayOpenOnSelect",2);Je([C({type:Boolean})],le.prototype,"disabled",2);Je([Et("sc-popup")],le.prototype,"popup",2);le=Je([O("sc-dropdown")],le);var od=Object.getOwnPropertyDescriptor,rd=(e,t,s,i)=>{for(var n=i>1?void 0:i?od(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=r(n)||n);return n};let Rn=class extends Wt{constructor(){super(...arguments),this.onClick=e=>{const t=e.composedPath().find(s=>s.tagName?.toLowerCase()==="sc-menu-item");!t||t.disabled||this.dispatchEvent(new CustomEvent("sc-select",{bubbles:!0,composed:!0,detail:{item:t}}))},this.onKeydown=e=>{const t=this.items().filter(n=>!n.disabled);if(!t.length)return;const s=document.activeElement,i=s?t.indexOf(s):-1;e.key==="ArrowDown"?(e.preventDefault(),t[(i+1)%t.length]?.focus()):e.key==="ArrowUp"?(e.preventDefault(),t[(i-1+t.length)%t.length]?.focus()):(e.key==="Enter"||e.key===" ")&&s&&s.tagName.toLowerCase()==="sc-menu-item"&&(e.preventDefault(),s.click())}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("click",this.onClick),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onClick),this.removeEventListener("keydown",this.onKeydown)}items(){return Array.from(this.querySelectorAll("sc-menu-item"))}render(){return u`<slot></slot>`}};Rn.styles=Zt`
    :host {
      display: block;
      background: var(--sc-menu-bg, #ffffff);
      border: 1px solid var(--sc-menu-border, #e5e7eb);
      border-radius: var(--sc-menu-radius, 6px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      padding: 4px;
      min-width: 160px;
    }
  `;Rn=rd([O("sc-menu")],Rn);var ad=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,ni=(e,t,s,i)=>{for(var n=i>1?void 0:i?ld(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&ad(t,s,n),n};let je=class extends Wt{constructor(){super(...arguments),this.type="normal",this.value="",this.checked=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return u`
      <span class="check" aria-hidden="true"></span>
      <slot name="prefix"></slot>
      <span class="label"><slot></slot></span>
      <slot name="suffix"></slot>
    `}};je.styles=Zt`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      line-height: 1.3;
      color: var(--sc-menu-color, #111827);
      outline: none;
    }
    :host(:hover:not([disabled])),
    :host(:focus-visible:not([disabled])) {
      background: var(--sc-menu-hover, #f3f4f6);
    }
    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .label {
      flex: 1;
    }
    .check {
      width: 12px;
      display: inline-block;
      text-align: center;
    }
    :host([type="checkbox"]) .check::before {
      content: "";
    }
    :host([type="checkbox"][checked]) .check::before {
      content: "✓";
    }
  `;ni([C({reflect:!0})],je.prototype,"type",2);ni([C({reflect:!0})],je.prototype,"value",2);ni([C({type:Boolean,reflect:!0})],je.prototype,"checked",2);ni([C({type:Boolean,reflect:!0})],je.prototype,"disabled",2);je=ni([O("sc-menu-item")],je);var cd=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,at=(e,t,s,i)=>{for(var n=i>1?void 0:i?dd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&cd(t,s,n),n};let it=class extends Wt{constructor(){super(...arguments),this.value="",this.type="text",this.size="medium",this.placeholder="",this.label="",this.helpText="",this.name="",this.disabled=!1,this.readonly=!1,this.required=!1,this.clearable=!1,this.passwordToggle=!1,this.autocomplete="",this.pattern="",this.passwordVisible=!1,this.onInput=e=>{this.value=e.target.value,this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0}))},this.onChange=()=>{this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onFocus=()=>this.dispatchEvent(new CustomEvent("sc-focus",{bubbles:!0,composed:!0})),this.onBlur=()=>this.dispatchEvent(new CustomEvent("sc-blur",{bubbles:!0,composed:!0})),this.onClear=()=>{this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))}}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}render(){const e=this.type==="password"&&this.passwordVisible?"text":this.type;return u`
      <div class="form-control">
        ${this.label?u`<label class="label" @click=${()=>this.focus()}
              >${this.label}</label
            >`:null}
        <div
          class=${Ii({input:!0,[`input--${this.size}`]:!0,"input--disabled":this.disabled})}
        >
          <slot name="prefix"></slot>
          <input
            .value=${this.value}
            type=${e}
            placeholder=${this.placeholder}
            name=${this.name}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            autocomplete=${this.autocomplete}
            minlength=${this.minlength??""}
            maxlength=${this.maxlength??""}
            pattern=${this.pattern}
            @input=${this.onInput}
            @change=${this.onChange}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
          />
          ${this.clearable&&this.value&&!this.disabled?u`<button
                type="button"
                class="icon-btn"
                aria-label="Clear"
                @click=${this.onClear}
              >
                &times;
              </button>`:null}
          ${this.type==="password"&&this.passwordToggle?u`<button
                type="button"
                class="icon-btn"
                aria-label="Toggle visibility"
                @click=${()=>this.passwordVisible=!this.passwordVisible}
              >
                ${this.passwordVisible?"🙈":"👁"}
              </button>`:null}
          <slot name="suffix"></slot>
        </div>
        ${this.helpText?u`<small class="help-text">${this.helpText}</small>`:null}
      </div>
    `}};it.styles=Zt`
    :host {
      display: block;
    }
    .form-control {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .label {
      font-size: 13px;
      color: var(--sc-input-label, #374151);
    }
    .help-text {
      font-size: 12px;
      color: var(--sc-input-help, #6b7280);
    }
    .input {
      display: flex;
      align-items: center;
      gap: 6px;
      border: 1px solid var(--sc-input-border, #d1d5db);
      border-radius: 6px;
      background: var(--sc-input-bg, #ffffff);
      padding: 0 8px;
      transition: border-color 120ms ease, box-shadow 120ms ease;
    }
    .input--small {
      min-height: 28px;
      font-size: 12px;
    }
    .input--medium {
      min-height: 34px;
      font-size: 14px;
    }
    .input--large {
      min-height: 40px;
      font-size: 16px;
    }
    .input:focus-within {
      border-color: var(--sc-primary, #2563eb);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }
    .input--disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }
    input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      color: inherit;
      font: inherit;
      padding: 4px 0;
      min-width: 0;
    }
    .icon-btn {
      border: none;
      background: none;
      cursor: pointer;
      padding: 2px 4px;
      color: inherit;
      opacity: 0.6;
    }
    .icon-btn:hover {
      opacity: 1;
    }
  `;at([C()],it.prototype,"value",2);at([C()],it.prototype,"type",2);at([C()],it.prototype,"size",2);at([C()],it.prototype,"placeholder",2);at([C()],it.prototype,"label",2);at([C({attribute:"help-text"})],it.prototype,"helpText",2);at([C()],it.prototype,"name",2);at([C({type:Boolean,reflect:!0})],it.prototype,"disabled",2);at([C({type:Boolean,reflect:!0})],it.prototype,"readonly",2);at([C({type:Boolean,reflect:!0})],it.prototype,"required",2);at([C({type:Boolean})],it.prototype,"clearable",2);at([C({type:Boolean,attribute:"password-toggle"})],it.prototype,"passwordToggle",2);at([C()],it.prototype,"autocomplete",2);at([C({type:Number})],it.prototype,"minlength",2);at([C({type:Number})],it.prototype,"maxlength",2);at([C()],it.prototype,"pattern",2);at([x()],it.prototype,"passwordVisible",2);at([Et("input")],it.prototype,"input",2);it=at([O("sc-input")],it);var hd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,Rt=(e,t,s,i)=>{for(var n=i>1?void 0:i?ud(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&hd(t,s,n),n};let $t=class extends Wt{constructor(){super(...arguments),this.value="",this.placeholder="",this.size="medium",this.label="",this.helpText="",this.name="",this.disabled=!1,this.clearable=!1,this.open=!1,this.displayLabel="",this.onDocMouseDown=e=>{this.open&&(this.contains(e.target)||this.close())},this.onDocKeydown=e=>{this.open&&e.key==="Escape"&&(this.close(),this.combobox?.focus())},this.onListboxClick=e=>{const s=e.composedPath().find(i=>i.tagName?.toLowerCase()==="sc-option");!s||s.disabled||(this.value=s.value,this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0})),this.close(),this.combobox?.focus())},this.onClear=e=>{e.stopPropagation(),this.value="",this.dispatchEvent(new CustomEvent("sc-clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("sc-change",{bubbles:!0,composed:!0}))},this.onComboKeydown=e=>{(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),this.open=!0)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocMouseDown),document.addEventListener("keydown",this.onDocKeydown),queueMicrotask(()=>this.syncSelection())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocMouseDown),document.removeEventListener("keydown",this.onDocKeydown)}updated(e){e.has("value")&&this.syncSelection()}options(){return Array.from(this.querySelectorAll("sc-option"))}syncSelection(){let e="";for(const t of this.options()){const s=t.value===this.value;t.selected=s,s&&(e=t.getTextLabel())}this.displayLabel=e}toggle(){this.disabled||(this.open=!this.open)}close(){this.open=!1}render(){const e=!!this.value;return u`
      <div class="form-control">
        ${this.label?u`<label class="label">${this.label}</label>`:null}
        <div
          class=${Ii({combobox:!0,[`combobox--${this.size}`]:!0})}
          tabindex=${this.disabled?"-1":"0"}
          role="combobox"
          aria-expanded=${this.open?"true":"false"}
          aria-haspopup="listbox"
          @click=${this.toggle}
          @keydown=${this.onComboKeydown}
        >
          <span
            class=${Ii({display:!0,placeholder:!e})}
          >
            ${e?this.displayLabel:this.placeholder}
          </span>
          ${this.clearable&&e?u`<button
                type="button"
                class="icon-btn"
                aria-label="Clear"
                @click=${this.onClear}
              >
                &times;
              </button>`:null}
          <span class="caret"></span>
        </div>
        ${this.open?u`<div
              class="listbox"
              role="listbox"
              @click=${this.onListboxClick}
            >
              <slot></slot>
            </div>`:u`<div hidden><slot></slot></div>`}
        ${this.helpText?u`<small class="help-text">${this.helpText}</small>`:null}
      </div>
    `}};$t.styles=Zt`
    :host {
      display: block;
      position: relative;
    }
    .form-control {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .label {
      font-size: 13px;
      color: var(--sc-input-label, #374151);
    }
    .help-text {
      font-size: 12px;
      color: var(--sc-input-help, #6b7280);
    }
    .combobox {
      display: flex;
      align-items: center;
      gap: 6px;
      border: 1px solid var(--sc-input-border, #d1d5db);
      border-radius: 6px;
      background: var(--sc-input-bg, #ffffff);
      padding: 0 8px;
      cursor: pointer;
      user-select: none;
      min-height: 34px;
      font-size: 14px;
    }
    .combobox--small {
      min-height: 28px;
      font-size: 12px;
    }
    .combobox--large {
      min-height: 40px;
      font-size: 16px;
    }
    .combobox:focus-visible {
      outline: none;
      border-color: var(--sc-primary, #2563eb);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }
    .display {
      flex: 1;
      padding: 4px 0;
      color: inherit;
    }
    .placeholder {
      color: #9ca3af;
    }
    .caret {
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid currentColor;
      opacity: 0.6;
    }
    .listbox {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      margin-top: 4px;
      background: var(--sc-menu-bg, #ffffff);
      border: 1px solid var(--sc-menu-border, #e5e7eb);
      border-radius: 6px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      padding: 4px;
      z-index: 1000;
      max-height: 240px;
      overflow: auto;
    }
    .icon-btn {
      border: none;
      background: none;
      cursor: pointer;
      padding: 2px 4px;
      color: inherit;
      opacity: 0.6;
    }
    .icon-btn:hover {
      opacity: 1;
    }
  `;Rt([C()],$t.prototype,"value",2);Rt([C()],$t.prototype,"placeholder",2);Rt([C()],$t.prototype,"size",2);Rt([C()],$t.prototype,"label",2);Rt([C({attribute:"help-text"})],$t.prototype,"helpText",2);Rt([C()],$t.prototype,"name",2);Rt([C({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);Rt([C({type:Boolean})],$t.prototype,"clearable",2);Rt([C({type:Boolean,reflect:!0})],$t.prototype,"open",2);Rt([x()],$t.prototype,"displayLabel",2);Rt([Et(".combobox")],$t.prototype,"combobox",2);$t=Rt([O("sc-select")],$t);var pd=Object.defineProperty,fd=Object.getOwnPropertyDescriptor,oi=(e,t,s,i)=>{for(var n=i>1?void 0:i?fd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&pd(t,s,n),n};let ze=class extends Wt{constructor(){super(...arguments),this.value="",this.disabled=!1,this.selected=!1,this.current=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}getTextLabel(){return(this.textContent??"").trim()}render(){return u`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};ze.styles=Zt`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      cursor: pointer;
      font-size: 14px;
      border-radius: 4px;
      color: var(--sc-option-color, #111827);
    }
    :host(:hover:not([disabled])),
    :host([current]) {
      background: var(--sc-option-hover, #f3f4f6);
    }
    :host([selected]) {
      background: var(--sc-option-selected, #e0e7ff);
      font-weight: 500;
    }
    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;oi([C()],ze.prototype,"value",2);oi([C({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);oi([C({type:Boolean,reflect:!0})],ze.prototype,"selected",2);oi([C({type:Boolean,reflect:!0})],ze.prototype,"current",2);ze=oi([O("sc-option")],ze);var gd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,Ze=(e,t,s,i)=>{for(var n=i>1?void 0:i?md(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&gd(t,s,n),n};let ce=class extends Wt{constructor(){super(...arguments),this.content="",this.placement="top",this.disabled=!1,this.trigger="hover focus",this.distance=6,this.open=!1,this.onEnter=e=>{const t=this.triggers();e.type.startsWith("mouse")&&t.has("hover")?this.show():e.type.startsWith("focus")&&t.has("focus")&&this.show()},this.onLeave=e=>{const t=this.triggers();e.type.startsWith("mouse")&&t.has("hover")?this.hide():e.type.startsWith("focus")&&t.has("focus")&&this.hide()},this.onClick=()=>{this.triggers().has("click")&&(this.open?this.hide():this.show())}}triggers(){return new Set(this.trigger.split(" ").filter(Boolean))}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.onEnter),this.addEventListener("mouseleave",this.onLeave),this.addEventListener("focusin",this.onEnter),this.addEventListener("focusout",this.onLeave),this.addEventListener("click",this.onClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.onEnter),this.removeEventListener("mouseleave",this.onLeave),this.removeEventListener("focusin",this.onEnter),this.removeEventListener("focusout",this.onLeave),this.removeEventListener("click",this.onClick)}show(){this.disabled||this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("sc-show",{bubbles:!0,composed:!0})))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("sc-hide",{bubbles:!0,composed:!0})))}render(){return u`
      <sc-popup
        ?active=${this.open&&!this.disabled}
        placement=${this.placement}
        distance=${this.distance}
      >
        <span slot="anchor"><slot></slot></span>
        <div class="tooltip" role="tooltip">${this.content}</div>
      </sc-popup>
    `}};ce.styles=Zt`
    :host {
      display: contents;
    }
    .tooltip {
      background: var(--sc-tooltip-bg, #111827);
      color: var(--sc-tooltip-color, #ffffff);
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 4px;
      max-width: 240px;
      pointer-events: none;
      white-space: nowrap;
    }
  `;Ze([C()],ce.prototype,"content",2);Ze([C()],ce.prototype,"placement",2);Ze([C({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);Ze([C()],ce.prototype,"trigger",2);Ze([C({type:Number})],ce.prototype,"distance",2);Ze([C({type:Boolean,reflect:!0})],ce.prototype,"open",2);ce=Ze([O("sc-tooltip")],ce);var bd=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,za=(e,t,s,i)=>{for(var n=i>1?void 0:i?xd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&bd(t,s,n),n};let Ln=class extends H{constructor(){super(...arguments),this.items=[]}onRemove(e){this.dispatchEvent(new CustomEvent("remove",{detail:{localId:e},bubbles:!0,composed:!0}))}isPdf(e){return e.file?.type==="application/pdf"||(e.dataUrl?.startsWith("data:application/pdf")??!1)||(e.url?.endsWith(".pdf")??!1)}render(){return this.items.length?u`
      <div class="flex flex-wrap gap-2 px-3 py-2 border-t border-line bg-bg">
        ${this.items.map(e=>u`
            <div
              class="relative w-16 h-16 rounded border border-line overflow-hidden bg-surface ${e.uploaded?"":"opacity-60"}"
              title="${e.file?.name??(e.ephemeral?"ephemeral (pasted)":"persistent")}"
            >
              ${this.isPdf(e)?u`<div class="w-full h-full flex flex-col items-center justify-center gap-0.5 text-red-500/80">
                    <span class="text-lg leading-none">📄</span><span class="text-[9px] font-semibold">PDF</span>
                  </div>`:u`<img src="${e.dataUrl||e.url||""}" alt="" class="w-full h-full object-cover" />`}
              ${e.uploaded?null:u`<div
                    class="absolute inset-0 flex items-center justify-center text-[10px] text-muted bg-bg/40"
                  >
                    …
                  </div>`}
              <button
                type="button"
                class="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-xs text-ink bg-bg/80 hover:bg-red-500/80 hover:text-white rounded-bl"
                aria-label="Remove"
                @click=${()=>this.onRemove(e.localId)}
              >
                ×
              </button>
            </div>
          `)}
      </div>
    `:u``}};za([C({type:Array})],Ln.prototype,"items",2);Ln=za([O("attachment-tray")],Ln);var yd=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,gs=(e,t,s,i)=>{for(var n=i>1?void 0:i?vd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&yd(t,s,n),n};const kd=["**Slash commands**","","_Run locally — never sent through the chat:_","- `/help` — this list","- `/clear` or `/new` — start a fresh thread on the current persona","- `/stop` or `/cancel` — force-stop the current turn and drop anything queued","- `/mana [message]` — open a new Mana thread (owner only). With a message, sends it as the first turn.","- `/goals [message]` — open a new Goals advisor thread. With a message, sends it as the first turn.","- `/grocery [message]` — open a new Grocery keeper thread. Household grocery + pantry helper, shared with your household.","- `/model sonnet|opus|haiku` — switch the chat model (persists in settings)","","_Pass-through — the agent recognizes these and changes mode:_","- `/review` — weekly close ritual (Friday)","- `/standup` — Monday goal-setting","","Tip: `/mana fix the goals filter` switches to Mana AND sends in one shot — useful when you're inside an app and want Mana to work on it without leaving the view.","","Just type one and hit Enter."].join(`
`);function wd(){return globalThis.crypto?.randomUUID?.()??`att_${Date.now()}_${Math.random().toString(36).slice(2)}`}function Uo(e){return e.startsWith("image/")||e==="application/pdf"}function $d(e){return new Promise((t,s)=>{const i=new FileReader;i.onload=()=>t(String(i.result)),i.onerror=()=>s(i.error),i.readAsDataURL(e)})}let Be=class extends H{constructor(){super(...arguments),this.text="",this.attachments=[],this.sending=!1,this.prevThreadId=null,this.onChatAttach=e=>{const s=e.detail?.files??[];(async()=>{for(const i of s)await this.uploadFile(i,!0)})()},this.queue=[]}connectedCallback(){super.connectedCallback(),this.unsubCurrent=Z(this,w,e=>e.currentThreadId),this.prevThreadId=w.getState().currentThreadId,w.subscribe(e=>{e.currentThreadId!==this.prevThreadId&&(this.prevThreadId=e.currentThreadId,this.attachments=[])}),document.addEventListener("chat-attach",this.onChatAttach)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCurrent?.(),document.removeEventListener("chat-attach",this.onChatAttach)}async uploadFile(e,t){const s=await $d(e),i={localId:wd(),file:e,dataUrl:s,uploaded:!1,ephemeral:t};this.attachments=[...this.attachments,i];try{const n=await A.uploads.upload(s,t);this.attachments=this.attachments.map(o=>o.localId===i.localId?{...o,uploaded:!0,path:n.path,url:n.url}:o)}catch(n){console.warn("[composer] upload failed",n),this.attachments=this.attachments.filter(o=>o.localId!==i.localId)}}onAttachClick(){this.fileInput?.click()}async onFilesChosen(e){const t=e.target,s=Array.from(t.files??[]);for(const i of s)await this.uploadFile(i,!1);t.value=""}async onPaste(e){const t=e.clipboardData?.items??[],s=[];for(const i of Array.from(t))if(i.kind==="file"&&Uo(i.type)){const n=i.getAsFile();n&&s.push(n)}if(s.length){e.preventDefault();for(const i of s)await this.uploadFile(i,!0)}}onDragOver(e){!e.dataTransfer||!Array.from(e.dataTransfer.items).some(s=>s.kind==="file")||(e.preventDefault(),e.dataTransfer.dropEffect="copy")}async onDrop(e){const t=Array.from(e.dataTransfer?.files??[]).filter(s=>Uo(s.type));if(t.length){e.preventDefault();for(const s of t)await this.uploadFile(s,!0)}}onTrayRemove(e){const t=e.detail.localId;this.attachments=this.attachments.filter(s=>s.localId!==t)}onVoiceToggle(){this.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onInput(e){const t=e.target;this.text=t.value,t.style.height="auto",t.style.height=`${Math.min(t.scrollHeight,160)}px`}onKeyDown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.send())}async handleSlash(e){const[t,...s]=e.slice(1).trim().split(/\s+/),i=s.join(" ").trim(),n=o=>{this.dispatchEvent(new CustomEvent("slash-message",{detail:{user:e,mentor:o},bubbles:!0,composed:!0}))};switch(t){case"help":case"?":return n(kd),!0;case"clear":case"new":return await w.getState().selectThread(null),n("New thread."),!0;case"stop":case"cancel":{const o=this.sending;return await this.stop(),o||n("Nothing was running."),!0}case"mana":case"goals":case"grocery":{const o=t==="mana"?"mana":t==="grocery"?"grocery-keeper":"goals-advisor";try{await w.getState().createThread({kind:"chat",persona:o})}catch(r){const a=r instanceof Error?r.message:String(r);return n(`Couldn't switch to ${t}: ${a}`),!0}return i?(this.text=i,!1):(n(`Switched to a new ${Qn[o]} thread. Type a message to begin.`),!0)}case"model":{const o=(i||"").toLowerCase(),a={sonnet:{id:"claude-sonnet-4-6",label:"Sonnet 4.6"},opus:{id:"claude-opus-4-7",label:"Opus 4.7"},haiku:{id:"claude-haiku-4-5",label:"Haiku 4.5"},gpt:{id:"gpt-5.4",label:"GPT-5.4"},"gpt-mini":{id:"gpt-5.4-mini",label:"GPT-5.4 mini"}}[o];return a?(await w.getState().setSetting("cockpit.mentor_model",a.id),n(`Mana model → **${a.label}** (\`${a.id}\`). Applies to your next message.`),!0):(n(`Usage: \`/model sonnet|opus|haiku|gpt|gpt-mini\` (current: ${w.getState().settings["cockpit.mentor_model"]||"claude-sonnet-4-6"}).`),!0)}default:return!1}}async stop(){this.queue=[],this.abortController?.abort();const e=w.getState().currentThreadId;if(e!=null)try{await fetch("/api/chat/stop",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({threadId:e})})}catch{}}async send(){let e=this.text.trim();const t=this.attachments.filter(a=>a.uploaded&&a.path&&a.url);if(!e&&t.length===0)return;if(e.startsWith("/")&&t.length===0){if(await this.handleSlash(e)){this.text="",this.textarea&&(this.textarea.style.height="auto"),this.updateComplete.then(()=>this.textarea?.focus());return}if(e=this.text.trim(),!e&&t.length===0)return}const s=t.map(a=>({path:a.path,url:a.url,ephemeral:!!a.ephemeral}));if(this.sending){this.queue.push({text:e,attachments:s}),this.text="",this.textarea&&(this.textarea.style.height="auto"),this.attachments=[];return}const i=t.map(a=>({path:a.path,url:a.url,ephemeral:!!a.ephemeral})),n=w.getState(),o=n.currentThreadId;this.sending=!0,this.text="",this.textarea&&(this.textarea.style.height="auto"),this.attachments=[];const r={};this.dispatchEvent(new CustomEvent("user-send",{detail:{text:e,attachments:t.filter(a=>!a.ephemeral).map(a=>({url:a.url})),liveDetail:r},bubbles:!0,composed:!0}));try{let a=o;const l=o==null?Ta(n):void 0;this.abortController=new AbortController;for await(const c of Kc({threadId:o,message:e,attachments:i,persona:l,view:n.viewContext??void 0,signal:this.abortController.signal}))switch(c.type){case"thread":a=c.threadId;break;case"text":r.append?.(c.text);break;case"ops":this.dispatchOps(c.action);break;case"error":r.append?.(`

_error: ${c.error}_`);break;case"done":break}r.finalize?.(),await w.getState().loadThreads(),a!=null&&await w.getState().selectThread(a)}catch(a){a?.name==="AbortError"?r.append?.(`

_stopped_`):(console.warn("[composer] send failed",a),r.append?.(`

_error: ${a.message}_`)),r.finalize?.()}finally{if(this.abortController=void 0,this.sending=!1,this.updateComplete.then(()=>this.textarea?.focus()),this.queue.length>0){const a=this.queue.shift();a&&(this.text=a.text,this.attachments=a.attachments.map(l=>({localId:`q_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,uploaded:!0,ephemeral:l.ephemeral,path:l.path,url:l.url})),this.send())}}}dispatchOps(e){document.dispatchEvent(new CustomEvent("ops-event",{detail:e,bubbles:!0,composed:!0}))}render(){return u`
      <attachment-tray
        .items=${this.attachments}
        @remove=${e=>this.onTrayRemove(e)}
      ></attachment-tray>

      <form
        class="flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2"
        @submit=${e=>{e.preventDefault(),this.send()}}
        @dragover=${this.onDragOver}
        @drop=${e=>void this.onDrop(e)}
      >
        <textarea
          data-composer-input
          rows="1"
          placeholder="Type / for commands"
          class="flex-1 resize-none bg-transparent text-ink text-base lg:text-sm px-1 py-1 border-0 focus:outline-none max-h-40 overflow-hidden"
          .value=${this.text}
          @input=${this.onInput}
          @keydown=${this.onKeyDown}
          @paste=${e=>void this.onPaste(e)}
        ></textarea>

        ${this.text.trim()||this.sending?u`
              <button
                type="submit"
                class="shrink-0 w-7 h-7 flex items-center justify-center rounded text-ink/60 hover:text-ink"
                title=${this.sending?"Queue (in-flight reply still streaming)":"Send"}
              >
                ${this.sending?u`<span class="block w-3 h-3 rounded-sm bg-muted"></span>`:u`
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="9 10 4 15 9 20"/>
                      <path d="M20 4v7a4 4 0 0 1-4 4H4"/>
                    </svg>
                  `}
              </button>
            `:u`
              <button
                type="button"
                class="shrink-0 w-7 h-7 flex items-center justify-center rounded text-ink/60 hover:text-ink"
                title="Voice"
                @click=${this.onVoiceToggle}
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
                  <line x1="6" y1="9" x2="6" y2="15" />
                  <line x1="10" y1="6" x2="10" y2="18" />
                  <line x1="14" y1="3" x2="14" y2="21" />
                  <line x1="18" y1="7" x2="18" y2="17" />
                </svg>
              </button>
            `}

      </form>
    `}};gs([x()],Be.prototype,"text",2);gs([x()],Be.prototype,"attachments",2);gs([x()],Be.prototype,"sending",2);gs([Et("input[data-attach-input]")],Be.prototype,"fileInput",2);gs([Et("textarea[data-composer-input]")],Be.prototype,"textarea",2);Be=gs([O("chat-composer")],Be);const _d='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>',Sd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',Ji='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',Zi='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';function Cd(e){return e?`var(--nsc-${e}, currentColor)`:"currentColor"}var Pd=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,ms=(e,t,s,i)=>{for(var n=i>1?void 0:i?Td(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Pd(t,s,n),n};const Dd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Md(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return e;const s=Number(t[3]),i=Dd[Number(t[2])-1],n=t[1].slice(2);return`${s} ${i} ${n}`}let He=class extends H{constructor(){super(...arguments),this.index=0,this.editing=!1,this.draggable=!1,this.dragOverPos=null,this.onHandleDown=()=>{this.draggable=!0},this.onDragStart=e=>{if(!this.draggable){e.preventDefault();return}e.dataTransfer&&(e.dataTransfer.setData("text/x-kr-id",String(this.kr.id)),e.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.draggable=!1,this.dragOverPos=null},this.onDragOver=e=>{if(!e.dataTransfer?.types.includes("text/x-kr-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.currentTarget.getBoundingClientRect();this.dragOverPos=e.clientY<t.top+t.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async e=>{const t=e.dataTransfer?.getData("text/x-kr-id"),s=t?Number(t):NaN,i=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(s)||s===this.kr.id)return;e.preventDefault();const n=i==="after"?this.index+1:this.index;await w.getState().reorderKeyResult(s,n)},this.onEditKeydown=e=>{e.key==="Enter"?(e.preventDefault(),this.commitEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editing=!1)}}connectedCallback(){super.connectedCallback(),this.unsubFocused=Z(this,w,e=>e.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsubFocused?.()}async toggleDone(){await w.getState().updateKeyResult(this.kr.id,{done:!this.kr.done})}async delete(){await w.getState().deleteKeyResult(this.kr.id)}startEdit(){this.editing||(this.editing=!0)}async commitEdit(e){const t=e.trim();this.editing=!1,!(!t||t===this.kr.title)&&await w.getState().updateKeyResult(this.kr.id,{title:t})}async pickDate(e){e.stopPropagation();const t=this.renderRoot.querySelector("input.kr-date-picker");if(t){t.style.pointerEvents="auto",t.focus();try{t.showPicker?.()}catch{t.click()}finally{t.style.pointerEvents="none"}}}async onDateChange(e){const t=e.target.value;await w.getState().updateKeyResult(this.kr.id,{targetDate:t||null})}renderDateBtn(){return this.kr.target_date?u`<button
        type="button"
        class="kr-date-btn text-xs text-muted hover:text-ink"
        title="Change target date"
        @click=${this.pickDate}
      >
        ${Md(this.kr.target_date)}
      </button>`:u`<button
      type="button"
      class="kr-date-btn empty text-xs text-muted opacity-0 group-hover/kr:opacity-60 hover:!opacity-100"
      title="Set target date"
      @click=${this.pickDate}
    >
      + date
    </button>`}render(){const e=this.kr.done===1,t=this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent",s=`kr:${this.kr.id}`,n=w.getState().focusedRowKey===s?"bg-hover":"";return u`
      <li
        class="kr group/kr flex items-center gap-2 py-0.5 ${t} ${e?"done opacity-60":""} ${n}"
        data-row-key=${s}
        draggable=${this.draggable?"true":"false"}
        @dragstart=${this.onDragStart}
        @dragend=${this.onDragEnd}
        @dragover=${this.onDragOver}
        @dragleave=${this.onDragLeave}
        @drop=${this.onDrop}
      >
        <span
          class="kr-handle hidden lg:inline-flex shrink-0 cursor-grab text-muted opacity-0 group-hover/kr:opacity-60 hover:!opacity-100 select-none leading-none"
          title="Drag to reorder"
          style="font-size:14px;letter-spacing:-1px;"
          @mousedown=${this.onHandleDown}
          @mouseup=${()=>this.draggable=!1}
        >⠿</span>
        <button
          type="button"
          class="kr-check shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${e?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
          style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
          aria-label=${e?"Mark incomplete":"Mark complete"}
          @click=${this.toggleDone}
        >
          ${e?u`<svg
                width="10"
                height="10"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#fff"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="transition: transform .14s cubic-bezier(.34,1.56,.64,1);"
              >
                <path d="M3 8.5 L6.5 12 L13 4.5" />
              </svg>`:k}
        </button>
        ${this.editing?u`<input
              class="kr-title inline-edit flex-1 bg-transparent border-b border-line text-sm outline-none"
              .value=${this.kr.title}
              autofocus
              @keydown=${this.onEditKeydown}
              @blur=${o=>this.commitEdit(o.target.value)}
            />`:u`<span
              class="kr-title flex-1 text-sm cursor-text ${e?"line-through":""}"
              @click=${this.startEdit}
              >${this.kr.title}</span
            >`}
        ${this.renderDateBtn()}
        <input
          type="date"
          class="kr-date-picker"
          tabindex="-1"
          aria-hidden="true"
          style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;"
          .value=${this.kr.target_date??""}
          @change=${this.onDateChange}
        />
        <button
          type="button"
          class="kr-del shrink-0 opacity-0 group-hover/kr:opacity-60 hover:!opacity-100 text-muted text-base leading-none px-1"
          aria-label="Delete key result"
          @click=${this.delete}
        >
          ×
        </button>
      </li>
    `}};ms([C({attribute:!1})],He.prototype,"kr",2);ms([C({attribute:!1})],He.prototype,"index",2);ms([x()],He.prototype,"editing",2);ms([x()],He.prototype,"draggable",2);ms([x()],He.prototype,"dragOverPos",2);He=ms([O("key-result-row")],He);var Ed=Object.defineProperty,Od=Object.getOwnPropertyDescriptor,de=(e,t,s,i)=>{for(var n=i>1?void 0:i?Od(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Ed(t,s,n),n};const ho="slmai.cockpit.collapsedGoals",Ad=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Id(e){const t=/^(\d{4})-(\d{2})-\d{2}$/.exec(e);return t?`${Ad[Number(t[2])-1]} ${t[1]}`:e}function qo(){try{const e=localStorage.getItem(ho);if(!e)return new Set;const t=JSON.parse(e);return Array.isArray(t)?new Set(t.filter(s=>typeof s=="number")):new Set}catch{return new Set}}function Rd(e){try{localStorage.setItem(ho,JSON.stringify(Array.from(e)))}catch{}}let Gt=class extends H{constructor(){super(...arguments),this.northStars=[],this.focused=!1,this.editingTitle=!1,this.markerOpen=!1,this.statusOpen=!1,this.krAdding=!1,this.collapsed=qo(),this.onStorage=e=>{(e.key===ho||e.key==null)&&(this.collapsed=qo())},this.onDocClick=e=>{this.markerOpen&&!this.contains(e.target)&&(this.markerOpen=!1),this.statusOpen&&!this.contains(e.target)&&(this.statusOpen=!1)},this.onTitleKeydown=e=>{e.key==="Enter"?(e.preventDefault(),this.commitTitle(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)},this.onAddKRKeydown=e=>{if(e.key==="Enter"){e.preventDefault();const t=e.target,s=t.value;t.value="",this.addKR(s,!1)}else e.key==="Escape"&&(e.preventDefault(),this.krAdding=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.onDocClick),window.addEventListener("storage",this.onStorage),this.unsubFocused=Z(this,w,e=>e.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.onDocClick),window.removeEventListener("storage",this.onStorage),this.unsubFocused?.()}get expanded(){return(this.goal.keyResults??[]).length>0&&!this.collapsed.has(this.goal.id)}toggleExpand(e){if(e.target.closest("[data-no-toggle]"))return;const s=new Set(this.collapsed);this.expanded?s.add(this.goal.id):s.delete(this.goal.id),this.collapsed=s,Rd(s)}starFor(e){return e?this.northStars.find(t=>t.slug===e)??null:null}openModal(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("open-modal",{detail:{id:this.goal.id},bubbles:!0,composed:!0}))}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}async commitTitle(e){const t=e.trim();this.editingTitle=!1,!(!t||t===this.goal.title)&&await w.getState().updateGoal(this.goal.id,{title:t})}async pickDate(e){e.stopPropagation();const t=this.renderRoot.querySelector("input.goal-date-picker");if(t){t.style.pointerEvents="auto",t.focus();try{t.showPicker?.()}catch{t.click()}finally{t.style.pointerEvents="none"}}}async onDateChange(e){const t=e.target.value;await w.getState().updateGoal(this.goal.id,{targetDate:t||null})}async recategorize(e){this.markerOpen=!1,(this.goal.north_star??null)!==e&&await w.getState().updateGoal(this.goal.id,{northStar:e})}async addKR(e,t=!0){const s=e.trim();if(!s){this.krAdding=!1;return}t&&(this.krAdding=!1),await w.getState().addKeyResult(this.goal.id,s)}renderMarker(){const e=this.goal.symbol??null,t=this.goal.color??null,s=e?Zn[e]:void 0;if(!s)return k;const i=Cd(t);return u`
      <span
        class="goal-marker-slot inline-flex items-center justify-center"
        title=${this.goal.title}
        style="color:${i};width:18px;height:18px;"
      >
        <span style="display:inline-block;width:14px;height:14px;">
          ${ot(Jn(s))}
        </span>
      </span>
    `}renderDateBtn(){return this.goal.target_date?u`<button
        type="button"
        class="goal-date-btn text-sm font-medium text-ink hover:opacity-80"
        title="Change target date"
        data-no-toggle
        @click=${this.pickDate}
      >
        by ${Id(this.goal.target_date)}
      </button>`:u`<button
      type="button"
      class="goal-date-btn empty text-xs text-muted opacity-0 group-hover:opacity-60 hover:!opacity-100"
      title="Set target date"
      data-no-toggle
      @click=${this.pickDate}
    >
      + date
    </button>`}renderStatusBadge(){if(!this.goal.archived)return k;const e=this.goal.status==="killed"?"archived":this.goal.status;return u`<span
      class="goal-status-badge ml-2 text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded border border-line text-muted"
      >${e}</span
    >`}async setStatus(e){this.statusOpen=!1,this.goal.status!==e&&await w.getState().updateGoal(this.goal.id,{status:e})}renderStatusChip(){const e=this.goal.status??"active";return u`<span class="goal-status-wrap relative" data-no-toggle>
      <button
        type="button"
        class="goal-status-chip ${e==="active"?"opacity-0 group-hover:opacity-60 hover:!opacity-100":"opacity-80 hover:opacity-100"} text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded border border-line text-muted hover:text-ink"
        title="Change status"
        data-no-toggle
        @click=${s=>{s.stopPropagation(),this.statusOpen=!this.statusOpen}}
      >
        ${e==="killed"?"archived":e}
      </button>
      ${this.statusOpen?u`<div
            class="absolute right-0 top-full mt-1 z-50 rounded-md bg-bg shadow-lg overflow-hidden text-xs min-w-[7rem]"
            data-no-toggle
            @click=${s=>s.stopPropagation()}
          >
            ${["active","paused","shipped","killed"].map(s=>u`<button
                type="button"
                class="block w-full text-left px-3 py-1.5 hover:bg-[var(--hover-blue)] ${e===s?"text-accent":"text-ink"}"
                @click=${()=>void this.setStatus(s)}
              >
                ${s==="killed"?"archived":s}
              </button>`)}
          </div>`:k}
    </span>`}render(){const e=this.goal.keyResults??[],t=this.expanded,s=this.goal.archived?"opacity-60":"",i=`goal:${this.goal.id}`,o=w.getState().focusedRowKey===i?"bg-hover":"";return u`
      <li
        class="goal group flex flex-col py-1 ${s} ${o}"
        data-id=${this.goal.id}
        data-row-key=${i}
        @focusin=${()=>this.focused=!0}
        @focusout=${()=>this.focused=!1}
      >
        <div
          class="goal-head flex items-center gap-2 cursor-pointer select-none"
          @click=${this.toggleExpand}
        >
          <span
            class="text-muted opacity-50 shrink-0"
            style="width:12px;height:12px;display:inline-flex;"
            >${ot(t?Ji:Zi)}</span
          >
          ${this.renderMarker()}
          ${this.editingTitle?u`<input
                class="goal-title inline-edit flex-1 bg-transparent border-b border-line outline-none text-sm"
                .value=${this.goal.title}
                autofocus
                data-no-toggle
                @keydown=${this.onTitleKeydown}
                @blur=${r=>this.commitTitle(r.target.value)}
              />`:u`<span class="goal-title-group inline-flex items-baseline gap-1">
                <span
                  class="goal-title text-sm font-medium cursor-text"
                  data-no-toggle
                  @click=${this.startEditTitle}
                  >${this.goal.title}</span
                >
                ${this.renderDateBtn()}
              </span>`}
          <span class="goal-meta flex flex-1 items-center gap-1">
            ${this.renderStatusChip()}
            <input
              type="date"
              class="goal-date-picker"
              tabindex="-1"
              aria-hidden="true"
              style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;"
              .value=${this.goal.target_date??""}
              data-no-toggle
              @change=${this.onDateChange}
            />
          </span>
          <button
            type="button"
            class="goal-kebab text-muted hover:text-ink px-1 text-lg leading-none"
            aria-label="More"
            data-no-toggle
            @click=${this.openModal}
          >
            ⋮
          </button>
        </div>
        ${t||this.focused||this.krAdding?u`<ul class="kr-list pl-0 mt-1 flex flex-col">
              ${t?e.map((r,a)=>u`<key-result-row .kr=${r} .index=${a}></key-result-row>`):k}
              ${this.krAdding?u`<li class="kr kr-new flex items-center gap-2 py-0.5">
                    <span class="hidden lg:inline-flex shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                    <span class="shrink-0 inline-flex rounded-full" style="width:16px;height:16px;border-width:1.5px;border-style:solid;border-color:var(--color-line);"></span>
                    <input
                      class="new-title flex-1 bg-transparent border-0 outline-none text-sm"
                      placeholder="New key result..."
                      autofocus
                      @keydown=${this.onAddKRKeydown}
                      @blur=${r=>void this.addKR(r.target.value)}
                    />
                  </li>`:u`<li
                    class="kr flex items-center gap-2 py-0.5 cursor-text rounded hover:bg-hover"
                    data-no-toggle
                    @click=${r=>{r.stopPropagation(),this.krAdding=!0}}
                  >
                    <span class="hidden lg:inline-flex shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                    <span class="shrink-0 inline-flex rounded-full opacity-30" style="width:16px;height:16px;border-width:1.5px;border-style:dashed;border-color:currentColor;"></span>
                    <span class="text-sm text-muted opacity-50">New key result...</span>
                  </li>`}
            </ul>`:k}
      </li>
    `}};de([C({attribute:!1})],Gt.prototype,"goal",2);de([C({attribute:!1})],Gt.prototype,"northStars",2);de([x()],Gt.prototype,"focused",2);de([x()],Gt.prototype,"editingTitle",2);de([x()],Gt.prototype,"markerOpen",2);de([x()],Gt.prototype,"statusOpen",2);de([x()],Gt.prototype,"krAdding",2);de([x()],Gt.prototype,"collapsed",2);Gt=de([O("goal-row")],Gt);var Ld=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,Ba=(e,t,s,i)=>{for(var n=i>1?void 0:i?Nd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Ld(t,s,n),n};let Nn=class extends H{constructor(){super(...arguments),this.events=[]}fmt(e){return new Date(e*1e3).toLocaleDateString("en-CA")}render(){return this.events.length?u`
      <ul class="gm-history flex flex-col gap-1 text-xs">
        ${this.events.map(e=>u`
            <li class="grid grid-cols-[auto_auto_1fr] gap-2 items-baseline">
              <time class="text-muted">${this.fmt(e.changed_at)}</time>
              <span class="ev font-medium">${e.event}</span>
              <span class="text-muted">
                ${e.from_value||e.to_value?u`${e.from_value||""} → ${e.to_value||""}`:k}
              </span>
            </li>
          `)}
      </ul>
    `:u`<div class="text-xs text-muted italic">
        (no events yet)
      </div>`}};Ba([C({attribute:!1})],Nn.prototype,"events",2);Nn=Ba([O("goal-history-popover")],Nn);var Fd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,St=(e,t,s,i)=>{for(var n=i>1?void 0:i?jd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Fd(t,s,n),n};const zd=[{value:"active",label:"active"},{value:"paused",label:"paused"},{value:"shipped",label:"shipped"},{value:"killed",label:"archived"}];let vt=class extends H{constructor(){super(...arguments),this.goalId=null,this.northStars=[],this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null,this.loading=!1,this.editNorthStar="",this.editTargetDate="",this.editStatus="active",this.editColor=null,this.editSymbol=null}updated(e){e.has("goalId")&&(this.goalId==null?this.reset():this.fetch(this.goalId))}reset(){this.goal=null,this.keyResults=[],this.commitments=[],this.events=[],this.stats=null}async fetch(e){this.loading=!0;try{const t=await A.goals.summary(e);this.goal=t.goal,this.keyResults=t.keyResults,this.commitments=t.commitments,this.events=t.events,this.stats=t.stats,this.editNorthStar=t.goal.north_star??"",this.editTargetDate=t.goal.target_date??"",this.editStatus=t.goal.status,this.editColor=t.goal.color??null,this.editSymbol=t.goal.symbol??null}finally{this.loading=!1}}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async save(){this.goal&&(await w.getState().updateGoal(this.goal.id,{northStar:this.editNorthStar||null,targetDate:this.editTargetDate||null,status:this.editStatus,color:this.editColor,symbol:this.editSymbol}),this.close())}async archive(){this.goal&&confirm(`archive "${this.goal.title}"? it stays in history, hidden from the board.`)&&(await w.getState().deleteGoal(this.goal.id,!1),this.close())}async destroy(){this.goal&&confirm(`permanently delete "${this.goal.title}"? this cannot be undone — key results, commits' goal link, and event history all go.`)&&(await w.getState().deleteGoal(this.goal.id,!0),this.close())}async unarchive(){this.goal&&(await w.getState().updateGoal(this.goal.id,{status:"active"}),this.close())}renderStats(){return this.stats?u`
      <div class="gm-stats flex gap-4 text-sm mb-3">
        <div class="flex flex-col">
          <strong>${this.stats.doneKRs}</strong>
          <span class="text-xs text-muted"
            >done / ${this.stats.totalKRs} KRs</span
          >
        </div>
        <div class="flex flex-col">
          <strong>${this.stats.doneCommits}</strong>
          <span class="text-xs text-muted"
            >done / ${this.stats.totalCommits} commits</span
          >
        </div>
        <div class="flex flex-col">
          <strong>${this.goal?.status}</strong>
          <span class="text-xs text-muted">status</span>
        </div>
      </div>
    `:k}renderDoneLists(){const e=this.keyResults.filter(s=>s.done),t=this.commitments.filter(s=>s.done);return u`
      ${e.length?u`<div class="gm-field mb-3">
            <label class="block text-xs text-muted mb-1">achieved KRs</label>
            <ul class="text-sm">
              ${e.map(s=>u`<li>✓ ${s.title}</li>`)}
            </ul>
          </div>`:k}
      ${t.length?u`<div class="gm-field mb-3">
            <label class="block text-xs text-muted mb-1"
              >shipped commitments</label
            >
            <ul class="text-sm">
              ${t.map(s=>u`
                  <li class="flex justify-between gap-2">
                    <span>✓ ${s.title}</span>
                    <span class="text-xs text-muted">${s.week}</span>
                  </li>
                `)}
            </ul>
          </div>`:k}
    `}render(){const e=this.goalId!=null,t=this.goal?.status==="killed";return u`
      <sc-dialog
        ?open=${e}
        .label=${this.goal?.title??""}
        @sc-hide=${()=>this.close()}
      >
        ${this.loading||!this.goal?u`<div class="text-sm text-muted">loading…</div>`:u`
              ${this.renderStats()} ${this.renderDoneLists()}

              <div class="gm-field mb-3">
                <label class="block text-xs text-muted mb-1">color</label>
                <div class="flex flex-wrap gap-2 items-center">
                  <button
                    type="button"
                    class="w-6 h-6 rounded-full border-2 grid place-items-center transition-all ${this.editColor==null?"border-ink":"border-line"}"
                    title="none"
                    @click=${()=>this.editColor=null}
                  >
                    <span class="text-muted text-xs">—</span>
                  </button>
                  ${["slate","red","orange","amber","green","teal","blue","indigo","violet","pink"].map(s=>u`
                      <button
                        type="button"
                        class="w-6 h-6 rounded-full border-2 transition-all ${this.editColor===s?"border-ink scale-110":"border-transparent"}"
                        style="background:var(--nsc-${s})"
                        title=${s}
                        @click=${()=>this.editColor=this.editColor===s?null:s}
                      ></button>
                    `)}
                </div>
              </div>

              <div class="gm-field mb-3">
                <label class="block text-xs text-muted mb-1">icon</label>
                <div class="flex flex-wrap gap-1">
                  <button
                    type="button"
                    class="w-7 h-7 grid place-items-center rounded border transition-colors ${this.editSymbol==null?"border-ink bg-hover":"border-line hover:bg-hover"}"
                    title="none"
                    @click=${()=>this.editSymbol=null}
                  >
                    <span class="text-muted">—</span>
                  </button>
                  ${["target","rocket","compass","flag","flame","lightbulb","heart","dumbbell","brain","book","briefcase","code","pen","megaphone","camera","mountain","globe","zap","star","sparkles"].map(s=>u`
                      <button
                        type="button"
                        class="w-7 h-7 grid place-items-center rounded border transition-colors ${this.editSymbol===s?"border-ink bg-hover":"border-line hover:bg-hover"}"
                        title=${s}
                        @click=${()=>this.editSymbol=this.editSymbol===s?null:s}
                      >
                        <sc-icon name="lucide-${s}"></sc-icon>
                      </button>
                    `)}
                </div>
              </div>

              <div class="gm-field mb-3">
                <label class="block text-xs text-muted mb-1">target date</label>
                <input
                  type="date"
                  class="w-full border border-line rounded px-2 py-1 text-sm bg-transparent"
                  .value=${this.editTargetDate}
                  @change=${s=>this.editTargetDate=s.target.value}
                />
              </div>

              <div class="gm-field mb-3">
                <label class="block text-xs text-muted mb-1">status</label>
                <select
                  class="w-full border border-line rounded px-2 py-1 text-sm bg-transparent"
                  .value=${this.editStatus}
                  @change=${s=>this.editStatus=s.target.value}
                >
                  ${zd.map(s=>u`
                      <option
                        value=${s.value}
                        ?selected=${this.editStatus===s.value}
                      >
                        ${s.label}
                      </option>
                    `)}
                </select>
              </div>

              <div class="gm-field mb-3">
                <label class="block text-xs text-muted mb-1">history</label>
                <goal-history-popover
                  .events=${this.events}
                ></goal-history-popover>
              </div>

              <div
                class="gm-actions flex gap-2 justify-end pt-3 border-t border-line"
              >
                ${t?u`<button
                        type="button"
                        class="text-sm text-red-500 hover:underline px-2"
                        @click=${this.destroy}
                      >
                        delete permanently
                      </button>
                      <button
                        type="button"
                        class="text-sm px-3 py-1 border border-line rounded"
                        @click=${this.unarchive}
                      >
                        unarchive
                      </button>`:u`<button
                      type="button"
                      class="text-sm text-red-500 hover:underline px-2"
                      @click=${this.archive}
                    >
                      archive goal
                    </button>`}
                <button
                  type="button"
                  class="text-sm px-3 py-1 bg-accent text-white rounded"
                  @click=${this.save}
                >
                  save
                </button>
              </div>
            `}
      </sc-dialog>
    `}};St([C({type:Number})],vt.prototype,"goalId",2);St([C({attribute:!1})],vt.prototype,"northStars",2);St([x()],vt.prototype,"goal",2);St([x()],vt.prototype,"keyResults",2);St([x()],vt.prototype,"commitments",2);St([x()],vt.prototype,"events",2);St([x()],vt.prototype,"stats",2);St([x()],vt.prototype,"loading",2);St([x()],vt.prototype,"editNorthStar",2);St([x()],vt.prototype,"editTargetDate",2);St([x()],vt.prototype,"editStatus",2);St([x()],vt.prototype,"editColor",2);St([x()],vt.prototype,"editSymbol",2);vt=St([O("goal-modal")],vt);var Bd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,he=(e,t,s,i)=>{for(var n=i>1?void 0:i?Hd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Bd(t,s,n),n};const Ko="slmai.cockpit.goalsSectionCollapsed",dn="slmai.cockpit.goalsSection.title",hn="Goals";let Xt=class extends H{constructor(){super(...arguments),this.sectionCollapsed=!1,this.editingTitle=!1,this.titleValue=hn,this.adding=!1,this.newTitle="",this.newStar="",this.newDate="",this.activeModalId=null,this.onOpsEvent=e=>{const t=e.detail;t&&(t.action==="refresh"||t.action==="load-week")&&w.getState().loadGoals().catch(()=>{})},this.toggleSection=()=>{const e=this.sectionCollapsed;if(this.sectionCollapsed=!this.sectionCollapsed,localStorage.setItem(Ko,this.sectionCollapsed?"1":"0"),e&&!this.sectionCollapsed)try{localStorage.setItem("slmai.cockpit.collapsedGoals","[]"),window.dispatchEvent(new StorageEvent("storage",{key:"slmai.cockpit.collapsedGoals"}))}catch{}},this.startAdd=()=>{this.adding=!0,this.newTitle="",this.newStar="",this.newDate="",document.addEventListener("mousedown",this.onClickOutsideAdd,!0)},this.cancelAdd=()=>{this.adding=!1,document.removeEventListener("mousedown",this.onClickOutsideAdd,!0)},this.onClickOutsideAdd=e=>{if(!this.adding)return;const t=this.querySelector(".goal-new");t&&!t.contains(e.target)&&this.commitAdd()},this.onAddKeydown=e=>{e.key==="Enter"?(e.preventDefault(),this.commitAdd()):e.key==="Escape"&&(e.preventDefault(),this.cancelAdd())},this.onAddBlur=e=>{setTimeout(()=>{const t=e.currentTarget;t.isConnected&&(t.contains(document.activeElement)||this.commitAdd())},100)}}connectedCallback(){super.connectedCallback(),this.sectionCollapsed=localStorage.getItem(Ko)==="1",this.titleValue=localStorage.getItem(dn)??hn,fetch("/api/settings").then(e=>e.json()).then(e=>{const t=e["ui.section.goals.title"];t&&(this.titleValue=t,localStorage.setItem(dn,t))}).catch(()=>{}),this.unsubGoals=Z(this,w,e=>e.goals),this.unsubArchived=Z(this,w,e=>`${e.goalsArchivedCount}:${e.includeArchivedGoals}`),this.unsubStars=Z(this,w,e=>e.northStars),w.getState().loadGoals().catch(()=>{}),w.getState().loadNorthStars().catch(()=>{}),document.addEventListener("ops-event",this.onOpsEvent)}disconnectedCallback(){super.disconnectedCallback(),this.unsubGoals?.(),this.unsubArchived?.(),this.unsubStars?.(),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("mousedown",this.onClickOutsideAdd,!0)}async toggleArchived(){const e=w.getState();await e.toggleArchivedGoals(!e.includeArchivedGoals)}async commitAdd(){const e=this.newTitle.trim();if(!e){this.adding=!1,document.removeEventListener("mousedown",this.onClickOutsideAdd,!0);return}await w.getState().createGoal({title:e,northStar:this.newStar||null,targetDate:this.newDate||null}),this.adding=!1,document.removeEventListener("mousedown",this.onClickOutsideAdd,!0)}renderAddRow(e){return u`
      <li
        class="goal goal-new flex items-center gap-2 py-1"
        @keydown=${this.onAddKeydown}
        @focusout=${this.onAddBlur}
      >
        <input
          class="new-title flex-1 bg-transparent border-b border-line outline-none text-sm"
          placeholder="goal title"
          autofocus
          .value=${this.newTitle}
          @input=${t=>this.newTitle=t.target.value}
        />
        <input
          class="new-date text-xs border border-line rounded px-1 py-0.5 bg-transparent"
          type="date"
          title="optional target date"
          .value=${this.newDate}
          @change=${t=>this.newDate=t.target.value}
        />
      </li>
    `}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||hn;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(dn,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.goals.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}render(){const e=w.getState(),t=e.goals,s=e.northStars,i=e.goalsArchivedCount,n=e.includeArchivedGoals;return u`
      <section class="goals-section flex flex-col gap-1">
        <header
          class="goals-header flex items-center gap-2 cursor-pointer select-none py-1"
          @click=${this.toggleSection}
        >
          <span
            class="text-muted opacity-60"
            style="width:12px;height:12px;display:inline-flex;"
            >${ot(this.sectionCollapsed?Zi:Ji)}</span
          >
          ${this.editingTitle?u`<input
                class="text-lg italic font-normal text-ink leading-none bg-transparent border-b border-line outline-none"
                style="font-family:var(--font-display);letter-spacing:-0.01em;min-width:4ch;"
                .value=${this.titleValue}
                autofocus
                @click=${o=>o.stopPropagation()}
                @keydown=${this.onTitleKey}
                @blur=${o=>this.commitTitleEdit(o.target.value)}
              />`:u`<h2
                class="text-lg italic font-normal text-ink leading-none cursor-pointer"
                style="font-family:var(--font-display);letter-spacing:-0.01em;"
                title="Double-click to rename"
                @dblclick=${this.startEditTitle}
              >${this.titleValue}</h2>`}
          <span class="flex-1"></span>
          ${this.sectionCollapsed?k:u`
                <button
                  type="button"
                  class="goals-add text-muted hover:text-ink"
                  aria-label="Add goal"
                  title="Add goal"
                  style="width:16px;height:16px;display:inline-flex;"
                  @click=${o=>{o.stopPropagation(),this.startAdd()}}
                >
                  ${ot(Sd)}
                </button>
                ${i>0?u`<button
                      type="button"
                      class="goals-archive-toggle text-muted hover:text-ink"
                      aria-label=${n?`Hide ${i} archived`:`Show ${i} archived`}
                      title=${n?`Hide ${i} archived`:`Show ${i} archived`}
                      style="width:16px;height:16px;display:inline-flex;opacity:${n?"0.9":"0.5"};"
                      @click=${o=>{o.stopPropagation(),this.toggleArchived()}}
                    >
                      ${ot(_d)}
                    </button>`:k}
              `}
        </header>

        ${this.sectionCollapsed?k:u`
              <ul class="goal-list flex flex-col pl-5">
                ${t.map(o=>u`
                    <goal-row
                      .goal=${o}
                      .northStars=${s}
                      @open-modal=${r=>this.activeModalId=r.detail.id}
                    ></goal-row>
                  `)}
                ${this.adding?this.renderAddRow(s):k}
              </ul>
            `}

        <goal-modal
          .goalId=${this.activeModalId}
          .northStars=${s}
          @close=${()=>this.activeModalId=null}
        ></goal-modal>
      </section>
    `}};he([x()],Xt.prototype,"sectionCollapsed",2);he([x()],Xt.prototype,"editingTitle",2);he([x()],Xt.prototype,"titleValue",2);he([x()],Xt.prototype,"adding",2);he([x()],Xt.prototype,"newTitle",2);he([x()],Xt.prototype,"newStar",2);he([x()],Xt.prototype,"newDate",2);he([x()],Xt.prototype,"activeModalId",2);Xt=he([O("goals-section")],Xt);var Vd=Object.defineProperty,Wd=Object.getOwnPropertyDescriptor,ri=(e,t,s,i)=>{for(var n=i>1?void 0:i?Wd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Vd(t,s,n),n};const Ud=["January","February","March","April","May","June","July","August","September","October","November","December"],qd=["M","T","W","T","F","S","S"];function Kd(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),s=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-s);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Yd(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),s=t.getUTCDay()||7;return t.setUTCDate(t.getUTCDate()-(s-1)),t}function Gd(e){const t=/^(\d{4})-W(\d{2})$/.exec(e);if(!t||!t[1]||!t[2])return null;const s=Number(t[1]),i=Number(t[2]),n=new Date(Date.UTC(s,0,4)),o=n.getUTCDay()||7,r=new Date(n.getTime()-(o-1)*864e5);return new Date(r.getTime()+(i-1)*7*864e5)}function Xd(e,t){const s=new Date(Date.UTC(e,t,1)),i=Yd(s),n=[];for(let o=0;o<6;o++){const r=[];for(let l=0;l<7;l++)r.push(new Date(i.getTime()+(o*7+l)*864e5));const a=r[0];n.push({week:Kd(a),days:r})}return n}let ls=class extends H{constructor(){super(...arguments),this.selected=Ie(),this.open=!1,this.viewYear=new Date().getUTCFullYear(),this.viewMonth=new Date().getUTCMonth(),this.outsideHandler=e=>{this.open&&(this.contains(e.target)||this.close())},this.keyHandler=e=>{e.key==="Escape"&&this.open&&this.close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.outsideHandler),document.addEventListener("keydown",this.keyHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.outsideHandler),document.removeEventListener("keydown",this.keyHandler)}willUpdate(e){if(e.has("open")&&this.open||e.has("selected")&&this.open){const t=Gd(this.selected);if(t){const s=new Date(t.getTime()+2592e5);this.viewYear=s.getUTCFullYear(),this.viewMonth=s.getUTCMonth()}}}close(){this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}select(e){this.selected=e,this.dispatchEvent(new CustomEvent("select",{detail:{week:e},bubbles:!0,composed:!0})),this.close()}shiftMonth(e){const t=new Date(Date.UTC(this.viewYear,this.viewMonth+e,1));this.viewYear=t.getUTCFullYear(),this.viewMonth=t.getUTCMonth()}goToday(){this.select(Ie())}render(){if(!this.open)return k;const e=Xd(this.viewYear,this.viewMonth),t=new Date,s=`${t.getUTCFullYear()}-${t.getUTCMonth()}-${t.getUTCDate()}`;return u`
      <div
        class="absolute z-50 mt-1 left-0 top-full w-[280px] rounded-md border border-line bg-surface shadow-lg p-2 font-ui text-[12px] text-ink"
        @mousedown=${i=>i.stopPropagation()}
      >
        <div class="flex items-center justify-between px-1 pb-2">
          <div class="flex items-center gap-1">
            <button
              class="w-6 h-6 grid place-items-center rounded hover:bg-[var(--hover)] text-muted hover:text-ink"
              aria-label="Previous month"
              @click=${()=>this.shiftMonth(-1)}
            >‹</button>
            <div class="px-1 font-medium">${Ud[this.viewMonth]} ${this.viewYear}</div>
            <button
              class="w-6 h-6 grid place-items-center rounded hover:bg-[var(--hover)] text-muted hover:text-ink"
              aria-label="Next month"
              @click=${()=>this.shiftMonth(1)}
            >›</button>
          </div>
          <button
            class="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded text-muted hover:text-ink hover:bg-[var(--hover)]"
            @click=${this.goToday}
          >This week</button>
        </div>

        <div class="grid grid-cols-[28px_repeat(7,1fr)] gap-y-0.5 text-[10px] uppercase tracking-wider text-muted px-0.5">
          <div class="text-center">Wk</div>
          ${qd.map(i=>u`<div class="text-center">${i}</div>`)}
        </div>

        <div class="mt-1">
          ${e.map(i=>{const n=i.week===this.selected;return u`
              <button
                class="grid grid-cols-[28px_repeat(7,1fr)] w-full items-center rounded text-[12px] py-0.5 ${n?"bg-[var(--accent-soft)] text-ink":"hover:bg-[var(--hover)] text-muted"}"
                @click=${()=>this.select(i.week)}
                aria-label=${`Select week ${i.week}`}
              >
                <div class="text-center text-[10px] ${n?"text-[var(--accent)] font-medium":"text-muted"}">
                  ${Number(i.week.slice(-2))}
                </div>
                ${i.days.map(o=>{const r=o.getUTCMonth()===this.viewMonth,l=`${o.getUTCFullYear()}-${o.getUTCMonth()}-${o.getUTCDate()}`===s;return u`
                    <div
                      class="h-7 grid place-items-center rounded-sm ${l?"font-semibold text-[var(--accent)]":""} ${r?n?"text-ink":"":"opacity-40"}"
                    >${o.getUTCDate()}</div>
                  `})}
              </button>
            `})}
        </div>
      </div>
    `}};ri([C()],ls.prototype,"selected",2);ri([C({type:Boolean})],ls.prototype,"open",2);ri([x()],ls.prototype,"viewYear",2);ri([x()],ls.prototype,"viewMonth",2);ls=ri([O("week-picker")],ls);var Jd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,Ha=(e,t,s,i)=>{for(var n=i>1?void 0:i?Zd(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Jd(t,s,n),n};function Ie(){const e=new Date,t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),s=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-s);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function Yo(e,t){const s=/^(\d{4})-W(\d{2})$/.exec(e);if(!s||!s[1]||!s[2])return e;const i=Number(s[1]),n=Number(s[2]),o=new Date(Date.UTC(i,0,4)),r=o.getUTCDay()||7,a=new Date(o.getTime()-(r-4)*864e5),l=new Date(a.getTime()+(n-1+t)*7*864e5);return Qd(l)}function Qd(e){const t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),s=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-s);const i=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t.getTime()-i.getTime())/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(n).padStart(2,"0")}`}function th(e){const t=/^(\d{4})-W(\d{2})$/.exec(e);if(!t||!t[1]||!t[2])return null;const s=Number(t[1]),i=Number(t[2]),n=new Date(Date.UTC(s,0,4)),o=n.getUTCDay()||7,r=new Date(n.getTime()-(o-1)*864e5),a=new Date(r.getTime()+(i-1)*7*864e5),l=new Date(a.getTime()+6*864e5);return{start:a,end:l}}const Go=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function eh(e){const t=th(e);if(!t)return e;const s=Go[t.start.getUTCMonth()],i=Go[t.end.getUTCMonth()],n=t.start.getUTCDate(),o=t.end.getUTCDate(),r=/^(\d{4})-W(\d{2})$/.exec(e),a=r&&r[2]?Number(r[2]):null,l=a!=null?`W${a} · `:"";return s===i?`${l}${s} ${n}–${o}`:`${l}${s} ${n} – ${i} ${o}`}let Fn=class extends H{constructor(){super(...arguments),this.pickerOpen=!1}connectedCallback(){super.connectedCallback(),this.unsub=Z(this,w,e=>e.currentWeek)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.()}async goto(e){await w.getState().setWeek(e)}prev(e){e.stopPropagation();const t=w.getState().currentWeek??Ie();this.goto(Yo(t,-1))}next(e){e.stopPropagation();const t=w.getState().currentWeek??Ie();this.goto(Yo(t,1))}today(e){e.stopPropagation(),this.goto(Ie())}togglePicker(e){e.stopPropagation(),this.pickerOpen=!this.pickerOpen}onPickerSelect(e){this.pickerOpen=!1,e.detail?.week&&this.goto(e.detail.week)}onPickerClose(){this.pickerOpen=!1}render(){const e=w.getState().currentWeek??Ie(),t=Ie(),i=e!==t?"px-1 text-muted hover:text-ink":"px-1 text-ink hover:opacity-70 font-medium";return u`
      <div class="relative flex items-center gap-1 font-mono text-xs tracking-wide">
        <button class="px-0.5 text-muted hover:text-ink" aria-label="Previous week" @click=${this.prev}>‹</button>
        <button
          class=${i}
          aria-label="Pick a week"
          aria-haspopup="dialog"
          aria-expanded=${this.pickerOpen}
          @click=${this.togglePicker}
        >${eh(e)}</button>
        <button class="px-0.5 text-muted hover:text-ink" aria-label="Next week" @click=${this.next}>›</button>
        <week-picker
          .selected=${e}
          .open=${this.pickerOpen}
          @select=${this.onPickerSelect}
          @close=${this.onPickerClose}
        ></week-picker>
      </div>
    `}};Ha([x()],Fn.prototype,"pickerOpen",2);Fn=Ha([O("week-nav")],Fn);var sh=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,Qe=(e,t,s,i)=>{for(var n=i>1?void 0:i?ih(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&sh(t,s,n),n};let ve=class extends H{constructor(){super(...arguments),this.index=0,this.editing=!1,this.draggable=!1,this.dragOverPos=null,this.onHandleDown=()=>{this.draggable=!0},this.onDragStart=e=>{if(!this.draggable){e.preventDefault();return}e.dataTransfer&&(e.dataTransfer.setData("text/x-commit-id",String(this.commit.id)),e.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.draggable=!1,this.dragOverPos=null},this.onDragOver=e=>{if(!e.dataTransfer?.types.includes("text/x-commit-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.currentTarget.getBoundingClientRect();this.dragOverPos=e.clientY<t.top+t.height/2?"before":"after"},this.onDragLeave=()=>{this.dragOverPos=null},this.onDrop=async e=>{const t=e.dataTransfer?.getData("text/x-commit-id"),s=t?Number(t):NaN,i=this.dragOverPos;if(this.dragOverPos=null,!Number.isFinite(s)||s===this.commit.id)return;e.preventDefault();const n=i==="after"?this.index+1:this.index;await w.getState().reorderCommitment(s,n)}}connectedCallback(){super.connectedCallback(),this.unsub=Z(this,w,e=>e.goals),this.unsub2=Z(this,w,e=>e.northStars),this.unsubFocused=Z(this,w,e=>e.focusedRowKey)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsub2?.(),this.unsubFocused?.()}updated(e){e.has("editing")&&this.editing&&(this.editInput?.focus(),this.editInput?.select())}get linkedGoal(){const e=this.commit;if(e.goal_id!=null)return w.getState().goals.find(t=>t.id===e.goal_id)??null;if(e.key_result_id!=null){for(const t of w.getState().goals)if((t.keyResults??[]).some(s=>s.id===e.key_result_id))return t}return null}async toggleDone(e){e.stopPropagation(),await w.getState().updateCommitment(this.commit.id,{done:!this.commit.done})}async onDelete(e){e.stopPropagation(),await w.getState().deleteCommitment(this.commit.id)}onMarkerClick(e){e.stopPropagation();const t=e.currentTarget;this.dispatchEvent(new CustomEvent("open-picker",{detail:{commitId:this.commit.id,anchor:t},bubbles:!0,composed:!0}))}startEdit(e){e.stopPropagation(),this.editing=!0}async commitEdit(e){if(!this.editing)return;const s=(this.editInput?.value??"").trim(),i=this.commit.title;this.editing=!1,e&&s&&s!==i&&await w.getState().updateCommitment(this.commit.id,{title:s})}onEditKey(e){e.key==="Enter"?(e.preventDefault(),this.commitEdit(!0)):e.key==="Escape"&&(e.preventDefault(),this.commitEdit(!1))}renderMarker(){const e=this.linkedGoal;if(e){const t=e.symbol??null,s=e.color??null,i=t?Zn[t]:void 0;if(t&&i){const o=s?`color:var(--nsc-${s})`:"";return u`<span
          class="ns-marker inline-flex items-center justify-center w-3.5 h-3.5"
          style=${o}
          >${ot(Jn(i))}</span
        >`}const n=s?`background:var(--nsc-${s})`:"background:var(--muted)";return u`<span
        class="inline-block w-2.5 h-2.5 rounded-full"
        style=${n}
      ></span>`}return u`
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke-dasharray="3 2.5"></circle>
        <path class="plus-h" d="M8 12h8"></path>
        <path class="plus-v" d="M12 8v8"></path>
      </svg>
    `}render(){const e=this.commit,t=this.linkedGoal,s=t?t.title:"Assign to a goal or KR",i=e.done===1,n=i?"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-accent border-accent":"shrink-0 inline-flex items-center justify-center rounded-full transition-colors bg-transparent border-line hover:border-ink",o=`commit:${e.id}`,a=w.getState().focusedRowKey===o?"bg-hover":"";return u`
      <li
        class="group/row flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 rounded hover:bg-hover ${a} ${this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent"}"
        data-id=${e.id}
        data-row-key=${o}
        draggable=${this.draggable?"true":"false"}
        @dragstart=${this.onDragStart}
        @dragend=${this.onDragEnd}
        @dragover=${this.onDragOver}
        @dragleave=${this.onDragLeave}
        @drop=${this.onDrop}
      >
        <span
          class="commit-handle shrink-0 cursor-grab text-muted opacity-0 group-hover/row:opacity-60 hover:!opacity-100 select-none leading-none"
          title="Drag to reorder"
          style="font-size:14px;letter-spacing:-1px;"
          @mousedown=${this.onHandleDown}
          @mouseup=${()=>this.draggable=!1}
        >⠿</span>
        <button
          type="button"
          class=${n}
          style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
          aria-label=${i?"Mark incomplete":"Mark complete"}
          @click=${this.toggleDone}
        >
          ${i?u`<svg
                width="10"
                height="10"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#fff"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="transition: transform .14s cubic-bezier(.34,1.56,.64,1);"
              ><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>`:k}
        </button>
        ${this.editing?u`
              <input
                class="inline-edit flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none"
                type="text"
                .value=${e.title}
                @keydown=${this.onEditKey}
                @blur=${()=>this.commitEdit(!0)}
              />
            `:u`
              <span
                class="flex-1 text-sm text-ink cursor-text ${i?"line-through text-muted":""}"
                @click=${this.startEdit}
              >${e.title}</span>
            `}
        <button
          class="commit-marker-btn ${t?"":"opacity-0 group-hover/row:opacity-60 hover:!opacity-100"} w-6 h-6 grid place-items-center rounded hover:bg-hover"
          aria-label=${t?"Change category":"Assign category"}
          title=${s}
          @click=${this.onMarkerClick}
        >${this.renderMarker()}</button>
        <button
          class="commit-del w-5 h-5 grid place-items-center text-muted hover:text-ink opacity-0 group-hover/row:opacity-100 transition-opacity"
          aria-label="Delete"
          @click=${this.onDelete}
        >×</button>
      </li>
    `}};Qe([C({attribute:!1})],ve.prototype,"commit",2);Qe([C({attribute:!1})],ve.prototype,"index",2);Qe([x()],ve.prototype,"editing",2);Qe([x()],ve.prototype,"draggable",2);Qe([x()],ve.prototype,"dragOverPos",2);Qe([Et("input.inline-edit")],ve.prototype,"editInput",2);ve=Qe([O("commit-row")],ve);var nh=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,bs=(e,t,s,i)=>{for(var n=i>1?void 0:i?oh(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&nh(t,s,n),n};let Ve=class extends H{constructor(){super(...arguments),this.anchor=null,this.currentGoalId=null,this.currentKeyResultId=null,this.query="",this.outsideClickHandler=e=>{const t=e.target;t&&(this.contains(t)||this.anchor&&this.anchor.contains(t)||this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),this.unsub=Z(this,w,e=>e.goals),requestAnimationFrame(()=>{document.addEventListener("click",this.outsideClickHandler),this.searchEl?.focus()})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("click",this.outsideClickHandler)}updated(){this.positionToAnchor()}positionToAnchor(){if(!this.anchor)return;const e=this.anchor.getBoundingClientRect();this.style.position="fixed",this.style.right=`${window.innerWidth-e.right}px`,this.style.zIndex="1000";const t=this.getBoundingClientRect().height||320,s=window.innerHeight-e.bottom,i=e.top,n=8;s>=t+n||s>=i?(this.style.top=`${e.bottom+4}px`,this.style.bottom="",this.style.maxHeight=`${Math.max(160,s-n)}px`):(this.style.top="",this.style.bottom=`${window.innerHeight-e.top+4}px`,this.style.maxHeight=`${Math.max(160,i-n)}px`),this.style.overflowY="auto"}buildItems(){const e=this.query.trim().toLowerCase(),t=w.getState().goals.filter(i=>i.status==="active"),s=[];s.push({kind:"none",label:"— none",current:this.currentGoalId==null&&this.currentKeyResultId==null});for(const i of t){const n=i.keyResults??[],o=i.title.toLowerCase();if(!e||o.includes(e)||n.some(a=>a.title.toLowerCase().includes(e))){s.push({kind:"goal",id:i.id,label:i.title,northStar:i.north_star,current:this.currentGoalId===i.id&&this.currentKeyResultId==null});for(const a of n)e&&!o.includes(e)&&!a.title.toLowerCase().includes(e)||s.push({kind:"kr",id:a.id,parent:i.id,label:a.title,northStar:i.north_star,current:this.currentKeyResultId===a.id})}}return s}pick(e){let t;e.kind==="none"?t={goalId:null,keyResultId:null}:e.kind==="goal"?t={goalId:e.id,keyResultId:null}:t={goalId:null,keyResultId:e.id},this.dispatchEvent(new CustomEvent("pick",{detail:t,bubbles:!0,composed:!0}))}onSearchKey(e){e.key==="Escape"&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))}renderNsMarker(e,t){if(!e)return k;const s=w.getState().northStars.find(c=>c.slug===e),i=s?.symbol??null,n=s?.color??null,o=t==="goal"?14:12,r=t==="goal"?1:.75,a=i?Zn[i]:void 0,l=n?`color:var(--nsc-${n});opacity:${r}`:`opacity:${r}`;return i&&a?u`<span
        class="inline-flex items-center justify-center shrink-0"
        style="width:${o}px;height:${o}px;${l}"
        >${ot(Jn(a))}</span
      >`:u`<span
      class="inline-block rounded-full shrink-0"
      style="width:8px;height:8px;background:${n?`var(--nsc-${n})`:"var(--muted)"};opacity:${r}"
    ></span>`}render(){const e=this.buildItems();return u`
      <div
        class="w-80 max-h-96 flex flex-col bg-surface border border-line rounded-lg shadow-xl overflow-hidden"
        role="dialog"
        @click=${t=>t.stopPropagation()}
      >
        <div class="p-2 border-b border-line">
          <input
            class="cp-search w-full px-3 py-2 text-sm bg-bg border border-line rounded text-ink placeholder:text-muted focus:outline-none focus:border-accent"
            type="text"
            placeholder="Search goals or KRs…"
            autocomplete="off"
            .value=${this.query}
            @input=${t=>{this.query=t.target.value}}
            @keydown=${this.onSearchKey}
          />
        </div>
        <ul class="flex-1 overflow-y-auto py-1" role="listbox">
          ${e.map(t=>{const s=t.kind==="goal",i=t.kind==="kr",n=t.kind==="none",o=["flex items-center gap-2 px-3 py-1.5 cursor-pointer text-sm transition-colors",i?"pl-8":"",s?"font-semibold text-ink mt-0.5":"",n?"text-muted":"",t.current?"bg-hover":"hover:bg-hover"].filter(Boolean).join(" ");return u`
              <li
                class=${o}
                role="option"
                aria-selected=${t.current?"true":"false"}
                @click=${()=>this.pick(t)}
              >
                <span class="w-3 text-accent text-xs shrink-0"
                  >${t.current?"✓":""}</span
                >
                ${n?u`<span class="text-muted">—</span>`:"northStar"in t?this.renderNsMarker(t.northStar,s?"goal":"kr"):k}
                <span class="truncate flex-1 ${i?"text-muted":""}"
                  >${t.label}</span
                >
              </li>
            `})}
        </ul>
      </div>
    `}};bs([C({attribute:!1})],Ve.prototype,"anchor",2);bs([C({type:Number})],Ve.prototype,"currentGoalId",2);bs([C({type:Number})],Ve.prototype,"currentKeyResultId",2);bs([x()],Ve.prototype,"query",2);bs([Et(".cp-search")],Ve.prototype,"searchEl",2);Ve=bs([O("category-picker")],Ve);var rh=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,uo=(e,t,s,i)=>{for(var n=i>1?void 0:i?ah(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&rh(t,s,n),n};let Ri=class extends H{constructor(){super(...arguments),this.pickerCommitId=null,this.pickerAnchor=null}connectedCallback(){super.connectedCallback(),this.unsubCommits=Z(this,w,e=>e.commitments),this.unsubGoals=Z(this,w,e=>e.goals)}disconnectedCallback(){super.disconnectedCallback(),this.unsubCommits?.(),this.unsubGoals?.()}onOpenPicker(e){if(this.pickerCommitId===e.detail.commitId){this.closePicker();return}this.pickerCommitId=e.detail.commitId,this.pickerAnchor=e.detail.anchor}closePicker(){this.pickerCommitId=null,this.pickerAnchor=null}async onPick(e){const t=this.pickerCommitId;t!=null&&(this.closePicker(),await w.getState().updateCommitment(t,{goalId:e.detail.goalId,keyResultId:e.detail.keyResultId}))}render(){const e=w.getState().commitments,t=e.find(s=>s.id===this.pickerCommitId)??null;return u`
      <ul class="commits" @open-picker=${this.onOpenPicker}>
        ${e.map((s,i)=>u`<commit-row .commit=${s} .index=${i}></commit-row>`)}
      </ul>
      ${this.pickerCommitId!=null&&this.pickerAnchor?u`
            <category-picker
              .anchor=${this.pickerAnchor}
              .currentGoalId=${t?.goal_id??null}
              .currentKeyResultId=${t?.key_result_id??null}
              @pick=${this.onPick}
              @close=${this.closePicker}
            ></category-picker>
          `:k}
    `}};uo([x()],Ri.prototype,"pickerCommitId",2);uo([x()],Ri.prototype,"pickerAnchor",2);Ri=uo([O("weekly-commits")],Ri);var lh=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,xs=(e,t,s,i)=>{for(var n=i>1?void 0:i?ch(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&lh(t,s,n),n};const Xo="slmai.cockpit.weekSectionCollapsed",un="slmai.cockpit.weekSection.title",pn="Shipping this week";let We=class extends H{constructor(){super(...arguments),this.collapsed=!1,this.adding=!1,this.editingTitle=!1,this.titleValue=pn,this.opsHandler=e=>{const s=e.detail;s&&(s.action==="load-week"?w.getState().setWeek(s.week):s.action==="refresh"&&w.getState().loadCommitments(s.week))}}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(Xo)==="1",this.titleValue=localStorage.getItem(un)??pn,fetch("/api/settings").then(t=>t.json()).then(t=>{const s=t["ui.section.week.title"];s&&(this.titleValue=s,localStorage.setItem(un,s))}).catch(()=>{}),this.unsub=Z(this,w,t=>t.currentWeek),document.addEventListener("ops-event",this.opsHandler);const e=w.getState();e.goals.length||e.loadGoals().catch(()=>{}),e.currentWeek==null&&e.loadCommitments().catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),document.removeEventListener("ops-event",this.opsHandler)}updated(e){e.has("adding")&&this.adding&&this.newTitleEl?.focus()}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||pn;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(un,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.week.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed;try{localStorage.setItem(Xo,this.collapsed?"1":"0")}catch{}}async commitAdd(e){const t=this.newTitleEl,s=(t?.value??"").trim();s&&await w.getState().createCommitment({title:s}),e||!s?this.adding=!1:t&&(t.value="")}onAddKey(e){e.key==="Enter"?(e.preventDefault(),this.commitAdd(!1)):e.key==="Escape"&&(e.preventDefault(),this.adding=!1)}render(){return u`
      <section class="group/section-header flex flex-col gap-1">
        <header
          class="flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
          @click=${this.toggleCollapsed}
        >
          <span
            class="text-muted opacity-60"
            style="width:12px;height:12px;display:inline-flex;"
            >${ot(this.collapsed?Zi:Ji)}</span
          >
          ${this.editingTitle?u`<input
                class="text-lg italic font-normal text-ink leading-none bg-transparent border-b border-line outline-none"
                style="font-family:var(--font-display);letter-spacing:-0.01em;min-width:4ch;"
                .value=${this.titleValue}
                autofocus
                @click=${e=>e.stopPropagation()}
                @keydown=${this.onTitleKey}
                @blur=${e=>this.commitTitleEdit(e.target.value)}
              />`:u`<h2
                class="text-lg italic font-normal text-ink leading-none cursor-pointer"
                style="font-family:var(--font-display);letter-spacing:-0.01em;"
                title="Double-click to rename"
                @dblclick=${this.startEditTitle}
              >${this.titleValue}</h2>`}
          ${this.collapsed?k:u`
                <span class="text-muted opacity-60 text-xs">·</span>
                <span @click=${e=>e.stopPropagation()}>
                  <week-nav></week-nav>
                </span>
              `}
          <span class="flex-1"></span>
        </header>

        ${this.collapsed?k:u`
              <weekly-commits></weekly-commits>
              ${this.adding?u`
                    <div class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2">
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full" style="width:16px;height:16px;border-width:1.5px;border-style:solid;border-color:var(--color-line);"></span>
                      <input
                        class="new-commit-title flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none"
                        type="text"
                        placeholder="New task..."
                        @keydown=${this.onAddKey}
                        @blur=${()=>void this.commitAdd(!0)}
                      />
                    </div>
                  `:u`
                    <div
                      class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 rounded hover:bg-hover cursor-text"
                      @click=${()=>{this.adding=!0}}
                    >
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex rounded-full opacity-30" style="width:16px;height:16px;border-width:1.5px;border-style:dashed;border-color:currentColor;"></span>
                      <span class="text-sm text-muted opacity-50">New task...</span>
                    </div>
                  `}
            `}
      </section>
    `}};xs([x()],We.prototype,"collapsed",2);xs([x()],We.prototype,"adding",2);xs([x()],We.prototype,"editingTitle",2);xs([x()],We.prototype,"titleValue",2);xs([Et("input.new-commit-title")],We.prototype,"newTitleEl",2);We=xs([O("week-section")],We);var dh=Object.defineProperty,hh=Object.getOwnPropertyDescriptor,Lt=(e,t,s,i)=>{for(var n=i>1?void 0:i?hh(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&dh(t,s,n),n};let Dt=class extends H{constructor(){super(...arguments),this.files=[],this.activeName=null,this.content="",this.loading=!1,this.error=null,this.editing=!1,this.saving=!1,this.menuOpen=!1,this.confirmName=null,this.creating=!1,this.createError=null,this.initialized=!1,this.activeMtime=0,this.editPopulated=!1,this.onOpsEvent=()=>{this.editing||(this.activeName&&this.loadContent(this.activeName),this.loadFiles())},this.onVisibility=()=>{document.visibilityState==="visible"&&this.activeName&&!this.editing&&this.loadContent(this.activeName)}}connectedCallback(){super.connectedCallback(),this.loadFiles(),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("visibilitychange",this.onVisibility),this.pollTimer=setInterval(()=>{this.loadFiles()},4e3)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("visibilitychange",this.onVisibility),this.pollTimer&&clearInterval(this.pollTimer)}async loadFiles(){if(!this.editing)try{const e=await fetch("/api/canvas/files",{credentials:"include"});if(!e.ok)throw new Error(`${e.status}`);const t=await e.json(),s=new Set(this.files.map(n=>n.name));if(this.files=t.files,!this.initialized){this.initialized=!0,!this.activeName&&t.files[0]&&this.select(t.files[0].name);return}const i=t.files.filter(n=>!s.has(n.name));if(i.length){const n=i.reduce((o,r)=>r.modifiedAt>o.modifiedAt?r:o);this.select(n.name);return}if(this.activeName&&!t.files.some(n=>n.name===this.activeName)){t.files[0]?this.select(t.files[0].name):(this.activeName=null,this.content="");return}if(this.activeName){const n=t.files.find(o=>o.name===this.activeName);n&&n.modifiedAt>this.activeMtime&&this.loadContent(this.activeName)}}catch(e){this.error=e instanceof Error?e.message:String(e)}}async loadContent(e){this.loading=!0,this.error=null;try{const t=await fetch(`/api/canvas/files/${encodeURIComponent(e)}`,{credentials:"include"});if(!t.ok)throw new Error(`${t.status}`);const s=await t.json();this.content=s.content,this.activeMtime=s.modifiedAt??0}catch(t){this.error=t instanceof Error?t.message:String(t),this.content=""}finally{this.loading=!1}}select(e){this.menuOpen=!1,!this.editing&&(this.activeName=e,w.getState().setViewContext({tool:"canvas",summary:`Canvas page "${e}" is open (dashboard/companion/canvas/${e}).`}),this.loadContent(e))}startEdit(){this.activeName&&(this.editPopulated=!1,this.editing=!0)}cancelEdit(){this.editing=!1,this.editPopulated=!1,this.activeName&&this.loadContent(this.activeName)}async saveEdit(){const e=this.querySelector("#edit-host");if(!e||!this.activeName){this.editing=!1;return}const t=e.innerHTML;this.saving=!0;try{const s=await fetch(`/api/canvas/files/${encodeURIComponent(this.activeName)}`,{method:"PUT",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({content:t})});if(!s.ok)throw new Error(`${s.status}`);const i=await s.json();this.content=t,this.activeMtime=i.modifiedAt??this.activeMtime,this.editing=!1,this.editPopulated=!1}catch(s){this.error=s instanceof Error?s.message:String(s)}finally{this.saving=!1}}updated(){if(this.editing&&!this.editPopulated){const e=this.querySelector("#edit-host");e&&(e.innerHTML=this.content,this.editPopulated=!0,e.focus())}}requestDelete(){this.editing||!this.activeName||(this.menuOpen=!1,this.confirmName=this.activeName)}async confirmDeleteNow(){const e=this.confirmName;if(this.confirmName=null,!!e)try{const t=await fetch(`/api/canvas/files/${encodeURIComponent(e)}`,{method:"DELETE",credentials:"include"});if(!t.ok)throw new Error(`${t.status}`);await this.loadFiles()}catch(t){this.error=t instanceof Error?t.message:String(t)}}labelFor(e){return e.replace(/\.html?$/i,"").replace(/[-_]/g," ")}openCreate(){this.editing||(this.menuOpen=!1,this.createError=null,this.creating=!0)}async createPageNow(){const t=(this.querySelector("#new-page-name")?.value||"").trim().toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"");if(!t){this.createError="Enter a name (letters, numbers, dashes).";return}const s=`${t}.html`;if(this.files.some(n=>n.name.toLowerCase()===s)){this.createError="A page with that name already exists.";return}const i=`<div class="space-y-3"><h2 class="text-lg font-semibold text-ink">${this.labelFor(s)}</h2><p class="text-muted">Click Edit to write here, or ask Mana to fill it in.</p></div>`;try{const n=await fetch(`/api/canvas/files/${encodeURIComponent(s)}`,{method:"PUT",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({content:i})});if(!n.ok)throw new Error(`${n.status}`);this.creating=!1,await this.loadFiles(),this.select(s)}catch(n){this.createError=n instanceof Error?n.message:String(n)}}render(){const e=this.activeName?this.labelFor(this.activeName):"no pages yet";return u`
      <div class="flex items-center gap-2 px-3 sm:px-4 pt-3 pb-2 border-b border-line shrink-0">
        <!-- page dropdown -->
        <div class="relative shrink-0">
          <button
            type="button"
            ?disabled=${this.editing||this.files.length===0}
            class="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-hover text-ink ${this.editing?"opacity-40":"hover:brightness-110"}"
            @click=${()=>{this.menuOpen=!this.menuOpen}}
          >
            <span>${e}</span>
            <span class="opacity-60 text-[0.65rem]">▾</span>
          </button>
          ${this.menuOpen?u`
                <div class="absolute z-30 mt-1 left-0 min-w-[12rem] max-h-72 overflow-y-auto rounded-lg border border-line bg-surface shadow-lg py-1">
                  ${this.files.map(t=>u`
                      <button
                        type="button"
                        class="block w-full text-left px-3 py-1.5 text-xs font-mono ${this.activeName===t.name?"bg-hover text-ink font-semibold":"text-muted hover:text-ink hover:bg-hover"}"
                        @click=${()=>this.select(t.name)}
                      >${this.labelFor(t.name)}</button>
                    `)}
                </div>`:k}
        </div>

        <div class="ml-auto flex items-center gap-1 shrink-0">
          ${this.editing?u`
                <button type="button" class="px-2 py-1 rounded text-xs font-mono text-muted hover:text-ink" @click=${this.cancelEdit}>Cancel</button>
                <button type="button" class="px-2.5 py-1 rounded text-xs font-mono bg-hover text-ink font-semibold" @click=${()=>void this.saveEdit()}>
                  ${this.saving?"Saving…":"Save"}
                </button>`:u`
                <button type="button" title="New page" class="px-2 py-1 rounded text-xs font-mono text-muted hover:text-ink" @click=${this.openCreate}>+ page</button>
                ${this.activeName?u`
                  <button type="button" title="Edit text in place" class="px-2 py-1 rounded text-xs font-mono text-muted hover:text-ink" @click=${this.startEdit}>✎ edit</button>
                  <button type="button" title="Delete page" class="px-2 py-1 rounded text-xs font-mono text-muted hover:text-[#c87a3a]" @click=${this.requestDelete}>🗑</button>`:k}`}
        </div>
      </div>

      ${this.error?u`<div class="px-4 pt-3 text-xs font-mono" style="color:#c87a3a;">canvas error: ${this.error}</div>`:k}

      ${this.editing?u`
            <div class="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5">
              <div class="text-xs text-muted font-mono mb-2">Editing — click any text to change it. Save when done.</div>
              <div id="edit-host" contenteditable="true" spellcheck="true"
                   class="outline-none rounded p-3" style="box-shadow:0 0 0 1px var(--color-line, #333) inset; min-height:200px;"></div>
            </div>`:u`
            <div class="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5">
              ${this.loading&&!this.content?u`<div class="text-muted text-xs font-mono">loading…</div>`:this.content?ot(this.content):k}
            </div>`}

      <!-- click-away layer for the dropdown -->
      ${this.menuOpen?u`<div class="fixed inset-0 z-20" @click=${()=>{this.menuOpen=!1}}></div>`:k}

      <!-- new page dialog -->
      ${this.creating?u`
            <div class="fixed inset-0 z-40 flex items-center justify-center" style="background:rgba(0,0,0,0.5);" @click=${()=>{this.creating=!1}}>
              <div class="w-[22rem] max-w-[90vw] rounded-xl border border-line bg-surface p-5 shadow-2xl" @click=${t=>t.stopPropagation()}>
                <div class="text-ink font-semibold mb-3">New page</div>
                <input id="new-page-name" type="text" placeholder="page name (e.g. roadmap)" autofocus
                  class="w-full px-3 py-2 rounded-lg bg-hover text-ink text-sm border border-line outline-none mb-2"
                  @keydown=${t=>{t.key==="Enter"&&this.createPageNow(),t.key==="Escape"&&(this.creating=!1)}} />
                ${this.createError?u`<div class="text-xs mb-2" style="color:#c87a3a;">${this.createError}</div>`:k}
                <div class="flex justify-end gap-2 mt-2">
                  <button type="button" class="px-3 py-1.5 rounded-lg text-sm text-muted hover:text-ink hover:bg-hover" @click=${()=>{this.creating=!1}}>Cancel</button>
                  <button type="button" class="px-3 py-1.5 rounded-lg text-sm font-semibold bg-hover text-ink" @click=${()=>void this.createPageNow()}>Create</button>
                </div>
              </div>
            </div>`:k}

      <!-- delete confirmation dialog -->
      ${this.confirmName?u`
            <div class="fixed inset-0 z-40 flex items-center justify-center" style="background:rgba(0,0,0,0.5);" @click=${()=>{this.confirmName=null}}>
              <div class="w-[20rem] max-w-[90vw] rounded-xl border border-line bg-surface p-5 shadow-2xl" @click=${t=>t.stopPropagation()}>
                <div class="text-ink font-semibold mb-1">Delete this page?</div>
                <div class="text-muted text-sm mb-4">“${this.labelFor(this.confirmName)}” will be permanently removed. This can't be undone.</div>
                <div class="flex justify-end gap-2">
                  <button type="button" class="px-3 py-1.5 rounded-lg text-sm text-muted hover:text-ink hover:bg-hover" @click=${()=>{this.confirmName=null}}>Cancel</button>
                  <button type="button" class="px-3 py-1.5 rounded-lg text-sm font-semibold text-white" style="background:#c0392b;" @click=${()=>void this.confirmDeleteNow()}>Delete</button>
                </div>
              </div>
            </div>`:k}
    `}};Lt([x()],Dt.prototype,"files",2);Lt([x()],Dt.prototype,"activeName",2);Lt([x()],Dt.prototype,"content",2);Lt([x()],Dt.prototype,"loading",2);Lt([x()],Dt.prototype,"error",2);Lt([x()],Dt.prototype,"editing",2);Lt([x()],Dt.prototype,"saving",2);Lt([x()],Dt.prototype,"menuOpen",2);Lt([x()],Dt.prototype,"confirmName",2);Lt([x()],Dt.prototype,"creating",2);Lt([x()],Dt.prototype,"createError",2);Dt=Lt([O("companion-canvas")],Dt);var uh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,po=(e,t,s,i)=>{for(var n=i>1?void 0:i?ph(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&uh(t,s,n),n};let Li=class extends H{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}toggle(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("sc-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return u`
      <button
        type="button"
        role="switch"
        aria-checked=${this.checked?"true":"false"}
        ?disabled=${this.disabled}
        @click=${this.toggle}
        class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${this.disabled?"opacity-50 cursor-not-allowed":"cursor-pointer"} ${this.checked?"bg-accent":"bg-line"}"
      >
        <span
          class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ${this.checked?"translate-x-[22px]":"translate-x-[2px]"}"
        ></span>
      </button>
    `}};po([C({type:Boolean})],Li.prototype,"checked",2);po([C({type:Boolean})],Li.prototype,"disabled",2);Li=po([O("sc-toggle")],Li);var fh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,ai=(e,t,s,i)=>{for(var n=i>1?void 0:i?gh(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&fh(t,s,n),n};const mh=["alloy","ash","ballad","coral","echo","sage","shimmer","verse"],bh=[{id:"claude-sonnet-4-6",label:"Sonnet 4.6 (default)"},{id:"claude-opus-4-7",label:"Opus 4.7"},{id:"claude-haiku-4-5",label:"Haiku 4.5 (fastest, weakest)"},{id:"gpt-5.4",label:"GPT-5.4"},{id:"gpt-5.4-mini",label:"GPT-5.4 mini (fastest)"}];async function xh(e){const i=URL.createObjectURL(e);try{const n=await new Promise((h,p)=>{const f=new Image;f.onload=()=>h(f),f.onerror=()=>p(new Error("could not decode image")),f.src=i}),o=Math.min(1,256/Math.max(n.width,n.height)),r=Math.max(1,Math.round(n.width*o)),a=Math.max(1,Math.round(n.height*o)),l=document.createElement("canvas");l.width=r,l.height=a;const c=l.getContext("2d");if(!c)return await yh(e);c.drawImage(n,0,0,r,a);const d=l.toDataURL("image/webp",.85);return d.startsWith("data:image/webp")?d:l.toDataURL("image/jpeg",.85)}finally{URL.revokeObjectURL(i)}}function yh(e){return new Promise((t,s)=>{const i=new FileReader;i.onload=()=>t(String(i.result||"")),i.onerror=()=>s(i.error),i.readAsDataURL(e)})}let cs=class extends H{constructor(){super(...arguments),this.settingsCtl=new Da(this,w,e=>e.settings),this.vaultRoot="—",this.myLogin="",this.myRole="",this.notifKinds=[]}connectedCallback(){super.connectedCallback(),Object.keys(w.getState().settings).length===0&&w.getState().loadSettings(),A.state().then(e=>{this.vaultRoot=e.vaultRoot||"—"}),fetch("/api/me").then(e=>e.ok?e.json():null).then(e=>{e?.login&&(this.myLogin=e.login,this.myRole=e.role)}).catch(()=>{}),A.notifications.kinds().then(e=>{this.notifKinds=e.kinds}).catch(()=>{})}async toggleNotif(e,t){this.notifKinds=this.notifKinds.map(s=>s.kind===e?{...s,enabled:t}:s),await A.notifications.mute(e,t).catch(()=>{})}profilePicKey(){return this.myLogin?`user:${this.myLogin}:profile_pic_url`:"cockpit.profile_pic_url"}get settings(){return this.settingsCtl.state.settings}get currentVoice(){return this.settings["cockpit.voice_name"]||"sage"}get currentMentorModel(){return this.settings["cockpit.mentor_model"]||"claude-sonnet-4-6"}async setVoice(e){await w.getState().setSetting("cockpit.voice_name",e)}async setMentorModel(e){await w.getState().setSetting("cockpit.mentor_model",e)}get currentProfilePic(){const e=this.settings[this.profilePicKey()],t=this.myRole==="owner"?this.settings["cockpit.profile_pic_url"]:"";return e||t||""}async onProfilePicFile(e){const t=e.target,s=t.files?.[0];if(!s||!s.type.startsWith("image/"))return;const i=await xh(s),{url:n}=await A.uploads.upload(i,!1);await w.getState().setSetting(this.profilePicKey(),n),t.value=""}async clearProfilePic(){await w.getState().setSetting(this.profilePicKey(),""),this.settings["cockpit.profile_pic_url"]&&await w.getState().setSetting("cockpit.profile_pic_url","")}renderRow(e,t,s){return u`
      <div class="flex items-start justify-between gap-6 py-5 border-b border-line">
        <div class="flex-1">
          <div class="font-semibold text-ink">${e}</div>
          <div class="text-sm text-muted mt-0.5">${t}</div>
        </div>
        <div class="shrink-0 flex items-center">${s}</div>
      </div>
    `}render(){const e=this.currentVoice;return u`
      <div class="max-w-3xl">
        ${this.renderRow("Vault root","Markdown vault Mana reads from.",u`<code
            class="font-mono text-sm bg-hover text-muted px-3 py-1.5 rounded"
            >${this.vaultRoot}</code
          >`)}
        ${this.renderRow("Profile picture","Shown in the cockpit header. Upload an image to override the default avatar.",u`
            <div class="flex items-center gap-3">
              ${this.currentProfilePic?u`<img
                    src=${this.currentProfilePic}
                    alt="Profile"
                    class="w-10 h-10 rounded-full object-cover border border-line"
                  />`:u`<span class="w-10 h-10 rounded-full bg-hover grid place-items-center text-muted text-xs">none</span>`}
              <label
                class="inline-flex items-center px-3 py-1.5 rounded border border-line text-sm text-ink cursor-pointer hover:bg-hover"
              >
                Upload
                <input
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change=${t=>void this.onProfilePicFile(t)}
                />
              </label>
              ${this.currentProfilePic?u`<button
                    type="button"
                    class="text-sm text-muted hover:text-ink"
                    @click=${()=>void this.clearProfilePic()}
                  >Clear</button>`:k}
            </div>
          `)}
        ${this.renderRow("Mana model","Model that powers text chat. Applies to the next message — no restart needed.",u`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[200px]"
              .value=${this.currentMentorModel}
              @change=${t=>this.setMentorModel(t.target.value)}
            >
              ${bh.map(t=>u`<option value=${t.id} ?selected=${t.id===this.currentMentorModel}>${t.label}</option>`)}
            </select>
          `)}
        ${this.renderRow("Voice","OpenAI Realtime voice for spoken replies. Restart cockpit after change.",u`
            <select
              class="bg-surface border border-line rounded px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-accent min-w-[140px]"
              .value=${e}
              @change=${t=>this.setVoice(t.target.value)}
            >
              ${mh.map(t=>u`<option value=${t} ?selected=${t===e}>${t}</option>`)}
            </select>
          `)}
        ${this.notifKinds.map(t=>this.renderRow(t.label,t.description,u`
              <sc-toggle
                .checked=${t.enabled}
                @sc-change=${s=>void this.toggleNotif(t.kind,s.detail.checked)}
              ></sc-toggle>
            `))}
      </div>
    `}};ai([x()],cs.prototype,"vaultRoot",2);ai([x()],cs.prototype,"myLogin",2);ai([x()],cs.prototype,"myRole",2);ai([x()],cs.prototype,"notifKinds",2);cs=ai([O("settings-general")],cs);var vh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,ys=(e,t,s,i)=>{for(var n=i>1?void 0:i?kh(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&vh(t,s,n),n};function wh(e){return new Date(e*1e3).toLocaleString("en-CA",{hour12:!1,timeZone:"Asia/Kuala_Lumpur",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(",","")}let Ue=class extends H{constructor(){super(...arguments),this.file="",this.open=!1,this.loading=!1,this.history=[],this.anchor=null,this.handleDocClick=e=>{if(!this.open)return;const t=e.target;t?.closest("[data-history-wrap]")||t?.closest("[data-history-pop]")||(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleDocClick,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleDocClick,!0)}async toggle(e){if(e.stopPropagation(),this.open){this.open=!1;return}if(!this.file)return;const s=e.currentTarget.getBoundingClientRect();this.anchor={top:s.bottom+6,right:window.innerWidth-s.right},this.loading=!0,this.open=!0;try{this.history=await A.agentDocs.history(this.file)}catch{this.history=[]}finally{this.loading=!1}}pick(e){this.open=!1,this.dispatchEvent(new CustomEvent("preview",{detail:{sha:e},bubbles:!0,composed:!0}))}renderPop(){if(!this.open||!this.anchor)return k;const e=`position:fixed;top:${this.anchor.top}px;right:${this.anchor.right}px;z-index:50;`;let t;return this.loading?t=u`<li class="px-3 py-2 text-xs text-muted">loading…</li>`:this.history.length===0?t=u`<li class="px-3 py-2 text-xs text-muted italic">
        no versions yet
      </li>`:t=this.history.map(s=>u`
          <li
            class="px-3 py-2 cursor-pointer hover:bg-hover border-b border-line last:border-b-0"
            @click=${()=>this.pick(s.sha)}
          >
            <div class="text-sm text-ink truncate">${s.message}</div>
            <div class="text-[10px] font-mono text-muted mt-0.5">
              ${s.shortSha} · ${wh(s.timestamp)}
            </div>
          </li>
        `),u`
      <div
        data-history-pop
        style=${e}
        class="bg-surface border border-line rounded-md shadow-lg w-72 max-h-80 overflow-y-auto"
      >
        <ul>${t}</ul>
      </div>
    `}render(){return u`
      <span data-history-wrap class="inline-flex">
        <button
          type="button"
          class="w-7 h-7 grid place-items-center rounded text-muted hover:text-ink hover:bg-hover"
          title="Version history"
          aria-label="Version history"
          @click=${e=>void this.toggle(e)}
        >
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 14" />
          </svg>
        </button>
        ${this.renderPop()}
      </span>
    `}};ys([C()],Ue.prototype,"file",2);ys([x()],Ue.prototype,"open",2);ys([x()],Ue.prototype,"loading",2);ys([x()],Ue.prototype,"history",2);ys([x()],Ue.prototype,"anchor",2);Ue=ys([O("version-history-popover")],Ue);var $h=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Qt=(e,t,s,i)=>{for(var n=i>1?void 0:i?_h(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&$h(t,s,n),n};let Ht=class extends H{constructor(){super(...arguments),this.files=[],this.current=null,this.content="",this.loadedContent="",this.mode="read",this.savedAt=null,this.savedFlash=!1,this.previewSha=null,this.previewMeta=""}connectedCallback(){super.connectedCallback(),this.loadFiles()}get dirty(){return this.current!=null&&this.previewSha==null&&this.content!==this.loadedContent}notifyDirty(){this.dispatchEvent(new CustomEvent("dirty-change",{detail:{dirty:this.dirty},bubbles:!0,composed:!0}))}updated(){this.notifyDirty()}async loadFiles(){try{this.files=await A.agentDocs.list()}catch{this.files=[]}}async openFile(e){if(!(this.dirty&&!confirm("Discard unsaved changes?")))try{const{content:t}=await A.agentDocs.read(e);this.current=e,this.content=t,this.loadedContent=t,this.mode="read",this.savedAt=null,this.savedFlash=!1,this.previewSha=null,this.previewMeta=""}catch{}}async save(){if(!(!this.current||!this.dirty))try{await A.agentDocs.save(this.current,this.content),this.loadedContent=this.content,this.savedAt=new Date().toLocaleTimeString("en-CA",{hour12:!1}),this.savedFlash=!0,setTimeout(()=>{this.savedFlash=!1},1200)}catch{this.savedAt="save failed"}}setMode(e){this.mode=e}onTextareaInput(e){this.content=e.target.value}async onPreviewVersion(e){if(!this.current)return;const t=e.detail.sha;try{const{content:s}=await A.agentDocs.at(this.current,t);this.previewSha=t,this.content=s,this.mode="read",this.previewMeta=t.slice(0,7)}catch{}}cancelPreview(){this.current&&(this.previewSha=null,this.previewMeta="",this.openFile(this.current))}async restorePreview(){if(!this.previewSha||!this.current)return;const e=this.previewSha.slice(0,7);if(confirm(`Restore "${this.current}" to version ${e}? Creates a new commit; previous content stays in history.`))try{await A.agentDocs.restore(this.current,this.previewSha),this.previewSha=null,this.previewMeta="",await this.openFile(this.current)}catch{this.savedAt="restore failed"}}currentResettable(){return this.current?!!this.files.find(e=>e.name===this.current)?.resettable:!1}async resetToDefault(){if(this.current&&confirm(`Reset "${this.current}" to the owner's default? Your current text is overwritten. (You can still recover it from version history.)`))try{await A.agentDocs.reset(this.current);const{content:e}=await A.agentDocs.read(this.current);this.content=e,this.loadedContent=e,this.mode="read",this.previewSha=null,this.previewMeta="",this.savedAt=new Date().toLocaleTimeString("en-CA",{hour12:!1}),this.savedFlash=!0,setTimeout(()=>{this.savedFlash=!1},1200),await this.loadFiles()}catch{this.savedAt="reset failed"}}renderEditorBody(){if(this.mode==="read"){const e=this.content?W.parse(this.content):"";return u`<div
        class="flex-1 overflow-y-auto px-5 py-4 bg-surface text-ink prose prose-sm max-w-none"
      >
        ${ot(e)}
      </div>`}return u`
      <textarea
        spellcheck="false"
        class="flex-1 w-full bg-surface text-ink font-mono text-sm p-5 border-0 focus:outline-none resize-none"
        .value=${this.content}
        ?disabled=${this.previewSha!=null}
        @input=${e=>this.onTextareaInput(e)}
      ></textarea>
    `}renderEditor(){return this.current?u`
      <div class="flex-1 flex flex-col min-h-0">
        <div
          class="flex items-center gap-3 px-5 py-3 border-b border-line bg-bg"
        >
          <span class="font-mono text-sm text-ink"
            >${this.current}${this.dirty?" •":""}</span
          >
          ${this.savedAt?u`<span
                class="text-xs text-muted transition-opacity ${this.savedFlash?"opacity-100":"opacity-60"}"
                >${this.savedAt}</span
              >`:k}
          <span class="flex-1"></span>
          <div class="inline-flex bg-hover rounded-full p-0.5 text-xs">
            <button
              type="button"
              class="px-3 py-1 rounded-full transition-colors ${this.mode==="read"?"bg-surface text-ink font-semibold":"text-muted hover:text-ink"}"
              @click=${()=>this.setMode("read")}
            >
              Read
            </button>
            <button
              type="button"
              class="px-3 py-1 rounded-full transition-colors ${this.mode==="edit"?"bg-surface text-ink font-semibold":"text-muted hover:text-ink"}"
              ?disabled=${this.previewSha!=null}
              @click=${()=>this.setMode("edit")}
            >
              Edit
            </button>
          </div>
          <version-history-popover
            .file=${this.current}
            @preview=${e=>void this.onPreviewVersion(e)}
          ></version-history-popover>
          ${this.currentResettable()?u`<button
                type="button"
                class="px-3 py-1 rounded text-xs border border-line text-muted hover:text-warn hover:border-warn transition-colors"
                title="Overwrite your copy with the owner's current version. Saved in version history so you can restore."
                @click=${()=>void this.resetToDefault()}
              >
                Reset to default
              </button>`:k}
        </div>
        ${this.previewSha?u`
              <div
                class="flex items-center justify-between gap-3 px-5 py-2 bg-warn/10 border-b border-line text-sm"
              >
                <span class="text-ink"
                  >Previewing version
                  <code class="font-mono text-xs">${this.previewMeta}</code></span
                >
                <span class="flex items-center gap-2">
                  <button
                    type="button"
                    class="px-3 py-1 rounded text-xs border border-line text-muted hover:text-ink hover:border-ink"
                    @click=${()=>this.cancelPreview()}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="px-3 py-1 rounded text-xs bg-ink text-bg hover:opacity-90"
                    @click=${()=>void this.restorePreview()}
                  >
                    Restore this version
                  </button>
                </span>
              </div>
            `:k}
        ${this.renderEditorBody()}
        ${this.mode==="edit"&&this.previewSha==null?u`
              <div
                class="flex justify-end gap-2 px-5 py-3 border-t border-line bg-bg"
              >
                <button
                  type="button"
                  class="px-4 py-1.5 rounded bg-ink text-bg text-sm hover:opacity-90 disabled:opacity-40"
                  ?disabled=${!this.dirty}
                  @click=${()=>void this.save()}
                >
                  Save
                </button>
              </div>
            `:k}
      </div>
    `:u`
        <div class="flex-1 grid place-items-center text-muted text-sm">
          select a file
        </div>
      `}render(){return u`
      <div
        class="grid grid-cols-[220px_1fr] gap-0 border border-line rounded-lg overflow-hidden h-[calc(100vh-150px)] min-h-[400px]"
      >
        <ul
          class="border-r border-line bg-bg overflow-y-auto py-2"
        >
          ${this.files.length===0?u`<li class="px-4 py-2 text-xs text-muted italic">
                no docs
              </li>`:k}
          ${this.files.map(e=>u`
              <li
                class="px-4 py-2 cursor-pointer text-sm transition-colors ${this.current===e.name?"bg-hover text-ink font-semibold":"text-ink hover:bg-hover"}"
                @click=${()=>void this.openFile(e.name)}
              >
                <div class="truncate">${e.name}</div>
                <div class="text-[10px] text-muted mt-0.5">
                  ${Math.round(e.sizeBytes/1024)} KB
                </div>
              </li>
            `)}
        </ul>
        ${this.renderEditor()}
      </div>
    `}};Qt([x()],Ht.prototype,"files",2);Qt([x()],Ht.prototype,"current",2);Qt([x()],Ht.prototype,"content",2);Qt([x()],Ht.prototype,"loadedContent",2);Qt([x()],Ht.prototype,"mode",2);Qt([x()],Ht.prototype,"savedAt",2);Qt([x()],Ht.prototype,"savedFlash",2);Qt([x()],Ht.prototype,"previewSha",2);Qt([x()],Ht.prototype,"previewMeta",2);Ht=Qt([O("agent-docs-editor")],Ht);var Sh=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,te=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ch(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Sh(t,s,n),n};const Ph="This is everything Mana remembers about you. Each night it reads back through the day's conversations and adds what it learned to the notes below, on its own. You don't have to approve anything. Only you can see your own memory.",Th="Tap any note to read it. These update only through the nightly reflection, never silently mid-conversation. Turn the toggle off and they freeze in place; nothing is ever deleted.",Dh=[{key:"Profile",label:"Who you are",blurb:"The picture Mana keeps of how you think, what you care about, and what wears on you."},{key:"Patterns",label:"Patterns",blurb:"Behaviors Mana has seen often enough to name, so it can work with you better."},{key:"Decisions",label:"Decisions",blurb:"Things you actually committed to, with the date and what you said."},{key:"Observations",label:"Notable moments",blurb:"Small things worth remembering, kept one file per month."}];let Vt=class extends H{constructor(){super(...arguments),this.status=null,this.files=[],this.running=!1,this.viewing=null,this.editing=!1,this.draft="",this.saving=!1,this.aboutOpen=!1,this.aboutNotesOpen=!1}connectedCallback(){super.connectedCallback(),this.refresh()}async refresh(){try{const[e,t]=await Promise.all([fetch("/api/memory/status").then(s=>s.ok?s.json():null),fetch("/api/memory/files").then(s=>s.ok?s.json():null)]);e&&(this.status=e),t&&(this.files=t.files)}catch{}}async toggle(e){const t=e.target.checked;try{await fetch("/api/memory/toggle",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({enabled:t})})}finally{this.refresh()}}async runNow(){if(!this.running){this.running=!0;try{await fetch("/api/memory/run-now",{method:"POST"});for(let e=0;e<12;e++)await new Promise(t=>setTimeout(t,5e3)),await this.refresh()}finally{this.running=!1}}}async openFile(e){try{const t=await fetch(`/api/memory/files/${encodeURIComponent(e.relPath)}`);if(t.ok){const s=await t.json();this.editing=!1,this.viewing={title:this.prettyName(e),relPath:e.relPath,content:s.content}}}catch{}}startEdit(){this.viewing&&(this.draft=this.viewing.content,this.editing=!0)}closeViewer(){this.viewing=null,this.editing=!1}async saveEdit(){if(!(!this.viewing||this.saving)){this.saving=!0;try{(await fetch(`/api/memory/files/${encodeURIComponent(this.viewing.relPath)}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({content:this.draft})})).ok&&(this.viewing={...this.viewing,content:this.draft},this.editing=!1,await this.refresh())}finally{this.saving=!1}}}formatTs(e){if(!e)return"never";const t=Number(e);return Number.isFinite(t)?new Date(t*1e3).toLocaleString():"never"}statusLine(e){if(!e)return null;if(e.startsWith("error"))return`Last run hit a problem: ${e.replace(/^error:\s*/,"")}`;if(/no work|no messages/.test(e))return"Last run found nothing new to add.";const t=/(\d+)B/.exec(e);return t&&t[1]?`Last run added ${(Number(t[1])/1024).toFixed(1)} KB to your memory.`:"Last run saved successfully."}render(){const e=this.status;if(!e)return u`<p class="text-muted text-xs">Loading…</p>`;const t=this.viewing!=null;return u`
      <div class="space-y-5 text-sm pb-24">
        <section class="max-w-2xl space-y-4">
          <div class="flex items-center gap-2">
            <h2 class="text-base font-semibold">Memory</h2>
            <button
              type="button"
              class="text-muted hover:text-ink text-sm leading-none"
              @click=${()=>this.aboutOpen=!0}
              aria-label="About memory"
              title="About memory"
            >ⓘ</button>
          </div>

          <div class="rounded border border-line p-4 space-y-3">
            <label class="flex items-center gap-3">
              <input
                type="checkbox"
                .checked=${e.enabled}
                @change=${this.toggle}
                class="w-4 h-4"
              />
              <span class="font-medium">Keep my memory up to date each night</span>
            </label>
            <div class="text-xs text-muted space-y-0.5 pl-7">
              <div>Last reflection: ${this.formatTs(e.lastRun)}</div>
              ${this.statusLine(e.lastStatus)?u`<div>${this.statusLine(e.lastStatus)}</div>`:k}
            </div>
            <div class="pl-7">
              <button
                type="button"
                class="px-3 py-1 rounded border border-line text-xs hover:bg-hover ${this.running?"opacity-50 pointer-events-none":""}"
                @click=${this.runNow}
              >
                ${this.running?"Reflecting…":"Reflect now"}
              </button>
              <span class="text-xs text-muted ml-2">Run it now instead of waiting for tonight.</span>
            </div>
          </div>
        </section>

        <section class="space-y-2">
          <div class="flex items-center gap-2">
            <h3 class="text-sm font-semibold">What Mana remembers</h3>
            <button
              type="button"
              class="text-muted hover:text-ink text-sm leading-none"
              @click=${()=>this.aboutNotesOpen=!0}
              aria-label="About these notes"
              title="About these notes"
            >ⓘ</button>
          </div>
          ${this.files.length===0?u`<p class="text-muted text-xs">No memory yet. Hit "Reflect now" to get started.</p>`:u`
                <div class="lg:grid lg:grid-cols-[minmax(240px,340px)_1fr] lg:gap-4 lg:items-start">
                  <!-- File list (left). On mobile, hidden while a preview is open. -->
                  <div class="${t?"hidden lg:block":"block"} lg:pr-1">
                    ${this.renderGroups()}
                  </div>
                  <!-- Preview (right on desktop, full-height card on mobile). -->
                  <div class="${t?"block":"hidden lg:flex"} lg:flex flex-col border border-line rounded mt-4 lg:mt-0 lg:overflow-hidden h-[calc(100dvh-220px)] lg:sticky lg:top-4 lg:h-[calc(100dvh-160px)]">
                    ${this.renderPreview()}
                  </div>
                </div>
              `}
        </section>

        <sc-dialog
          label="About memory"
          ?open=${this.aboutOpen}
          @sc-hide=${()=>this.aboutOpen=!1}
        >
          <p class="text-muted leading-relaxed">${Ph}</p>
        </sc-dialog>

        <sc-dialog
          label="About these notes"
          ?open=${this.aboutNotesOpen}
          @sc-hide=${()=>this.aboutNotesOpen=!1}
        >
          <p class="text-muted leading-relaxed">${Th}</p>
        </sc-dialog>
      </div>
    `}renderGroups(){return this.files.length===0?u`<p class="text-muted text-xs">No memory yet. Hit "Reflect now" to get started.</p>`:u`
      <div class="space-y-4">
        ${Dh.map(e=>{const t=this.files.filter(s=>s.group===e.key).sort((s,i)=>i.modifiedAt-s.modifiedAt);return t.length===0?k:u`
            <div>
              <div class="text-ink font-medium">${e.label}</div>
              <div class="text-xs text-muted mb-1.5">${e.blurb}</div>
              <ul class="divide-y divide-line border border-line rounded">
                ${t.map(s=>u`
                    <li>
                      <button
                        type="button"
                        class="w-full text-left flex items-center justify-between px-3 py-2 hover:bg-hover ${this.viewing?.relPath===s.relPath?"bg-hover":""}"
                        @click=${()=>this.openFile(s)}
                      >
                        <span class="text-ink">${this.prettyName(s)}</span>
                        <span class="text-xs text-muted shrink-0 ml-3">${this.formatTs(String(s.modifiedAt))}</span>
                      </button>
                    </li>
                  `)}
              </ul>
            </div>
          `})}
      </div>
    `}prettyName(e){const t=/^observations-(\d{4})-(\d{2})\.md$/.exec(e.name);if(t&&t[1]&&t[2])return`${["January","February","March","April","May","June","July","August","September","October","November","December"][Number(t[2])-1]??t[2]} ${t[1]}`;const s=e.name.replace(/\.md$/,"").replace(/[-_]/g," ");return s.charAt(0).toUpperCase()+s.slice(1)}renderPreview(){if(!this.viewing)return u`
        <div class="flex-1 grid place-items-center text-muted text-sm p-6 text-center">
          Select a note to read it.
        </div>
      `;const e=this.editing;return u`
      <header class="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-line shrink-0">
        <span class="text-sm font-semibold text-ink truncate">${this.viewing.title}</span>
        <div class="flex items-center gap-2 shrink-0">
          ${e?k:u`<button
                type="button"
                class="text-xs text-muted hover:text-ink"
                @click=${this.startEdit}
              >Edit</button>`}
          ${e?k:u`<button
                type="button"
                class="lg:hidden text-muted hover:text-ink text-lg leading-none px-1"
                @click=${this.closeViewer}
                aria-label="Close preview"
              >×</button>`}
        </div>
      </header>
      ${e?u`
            <textarea
              class="flex-1 overflow-y-auto px-5 py-4 bg-surface text-ink text-xs font-mono leading-relaxed resize-none outline-none"
              .value=${this.draft}
              @input=${t=>this.draft=t.target.value}
            ></textarea>
            <div class="flex items-center justify-end gap-2 px-4 py-3 border-t border-line shrink-0">
              <button
                type="button"
                class="px-3 py-1 rounded border border-line text-xs hover:bg-hover"
                @click=${()=>this.editing=!1}
              >Cancel</button>
              <button
                type="button"
                class="px-3 py-1 rounded bg-accent text-white text-xs hover:opacity-90 ${this.saving?"opacity-50 pointer-events-none":""}"
                @click=${this.saveEdit}
              >${this.saving?"Saving…":"Save"}</button>
            </div>
          `:u`
            <div class="flex-1 overflow-y-auto px-5 py-4 bg-surface text-ink prose prose-sm max-w-none">
              ${ot(W.parse(this.viewing.content,{async:!1}))}
            </div>
          `}
    `}};te([x()],Vt.prototype,"status",2);te([x()],Vt.prototype,"files",2);te([x()],Vt.prototype,"running",2);te([x()],Vt.prototype,"viewing",2);te([x()],Vt.prototype,"editing",2);te([x()],Vt.prototype,"draft",2);te([x()],Vt.prototype,"saving",2);te([x()],Vt.prototype,"aboutOpen",2);te([x()],Vt.prototype,"aboutNotesOpen",2);Vt=te([O("settings-memory")],Vt);var Mh=Object.defineProperty,Eh=Object.getOwnPropertyDescriptor,vs=(e,t,s,i)=>{for(var n=i>1?void 0:i?Eh(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Mh(t,s,n),n};let qe=class extends H{constructor(){super(...arguments),this.data=null,this.loading=!0,this.viewing=null,this.selectedPath=null,this.filter="all",this.nav=new Ca(this,{selector:"[data-path]",keyAttr:"data-path",scope:()=>this.renderRoot,getKey:()=>this.selectedPath,setKey:e=>{e&&this.viewFile(e)}})}connectedCallback(){super.connectedCallback(),this.refresh()}filteredFiles(){return this.data?this.data.files.filter(e=>this.filter==="loaded"?e.loaded!=="no":this.filter==="unloaded"?e.loaded==="no":!0):[]}async refresh(){this.loading=!0;try{const e=await fetch("/api/context-files");e.ok&&(this.data=await e.json())}catch{}this.loading=!1}async viewFile(e){this.selectedPath=e;try{const t=await fetch(`/api/context-files/${encodeURIComponent(e)}`);if(t.ok){const s=await t.json();this.viewing={relPath:s.relPath,content:s.content}}}catch{}}fmtBytes(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(2)} MB`}fmtTokens(e){return e<1e3?`${e}`:`${(e/1e3).toFixed(1)}k`}fmtDate(e){const t=new Date(e*1e3),i=(Date.now()-t.getTime())/36e5;return i<24?`${Math.round(i)}h`:i<168?`${Math.round(i/24)}d`:t.toISOString().slice(5,10)}renderPreview(){if(!this.viewing)return u`
        <div class="flex-1 grid place-items-center text-muted text-sm p-6 text-center">
          Click a file to preview its rendered content.
        </div>
      `;const e=W.parse(this.viewing.content,{async:!1});return u`
      <header class="px-4 py-2.5 border-b border-line flex items-center justify-between shrink-0">
        <span class="font-mono text-xs text-ink truncate">${this.viewing.relPath}</span>
        <button
          type="button"
          class="lg:hidden text-muted hover:text-ink ml-2 shrink-0"
          @click=${()=>{this.viewing=null,this.selectedPath=null}}
          aria-label="Close preview"
        >×</button>
      </header>
      <div class="flex-1 overflow-y-auto px-5 py-4 bg-surface text-ink prose prose-sm max-w-none">
        ${ot(e)}
      </div>
    `}render(){if(this.loading&&!this.data)return u`<div class="text-muted text-sm">Loading context map…</div>`;if(!this.data)return u`<div class="text-muted text-sm">Couldn't load context files.</div>`;const e=this.filteredFiles(),t=new Map;for(const o of e){const r=t.get(o.dir)??[];r.push(o),t.set(o.dir,r)}const s=[...t.keys()].sort((o,r)=>{const a=(t.get(o)??[]).some(c=>c.loaded==="always"),l=(t.get(r)??[]).some(c=>c.loaded==="always");return a!==l?a?-1:1:o.localeCompare(r)}),i=this.data.totals,n=this.viewing!=null;return u`
      <div class="space-y-4">
        <header>
          <h2 class="text-lg font-semibold text-ink mb-1">Context files</h2>
          <p class="text-sm text-muted leading-relaxed">
            Every <code class="text-ink">.md</code> file in your vault scope
            (<code class="text-ink">${this.data.scope}</code>). The
            <span class="text-ink font-medium">Loaded</span> badge means the
            mentor sees this file at session start, every conversation.
          </p>
        </header>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div class="rounded border border-line px-3 py-2">
            <div class="text-xs text-muted">Files</div>
            <div class="text-ink font-semibold">${i.fileCount}</div>
          </div>
          <div class="rounded border border-line px-3 py-2">
            <div class="text-xs text-muted">Total</div>
            <div class="text-ink font-semibold">${this.fmtBytes(i.totalBytes)}</div>
            <div class="text-xs text-muted">~${this.fmtTokens(i.totalTokensApprox)} tok</div>
          </div>
          <div class="rounded border border-line px-3 py-2 bg-hover/30">
            <div class="text-xs text-muted">Always loaded</div>
            <div class="text-ink font-semibold">${this.fmtBytes(i.alwaysLoadedBytes)}</div>
            <div class="text-xs text-muted">~${this.fmtTokens(i.alwaysLoadedTokensApprox)} tok / turn</div>
          </div>
          <div class="rounded border border-line px-3 py-2">
            <div class="text-xs text-muted">Reaching mentor</div>
            <div class="text-ink font-semibold">
              ${i.totalBytes?Math.round(i.alwaysLoadedBytes/i.totalBytes*100):0}%
            </div>
            <div class="text-xs text-muted">of vault bytes</div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          ${["all","loaded","unloaded"].map(o=>u`
              <button
                type="button"
                class="px-2 py-0.5 rounded border text-xs transition-colors ${this.filter===o?"border-ink text-ink bg-hover":"border-line text-muted hover:text-ink hover:border-ink"}"
                @click=${()=>{this.filter=o}}
              >
                ${o==="all"?"All":o==="loaded"?"Loaded":"Unloaded"}
              </button>
            `)}
          <span class="ml-auto text-[10px] text-muted hidden md:inline">↑↓ to cycle</span>
          <button
            type="button"
            class="text-xs text-muted hover:text-ink"
            @click=${()=>void this.refresh()}
          >
            Refresh
          </button>
        </div>

        <div class="lg:grid lg:grid-cols-[minmax(260px,360px)_1fr] lg:gap-4 lg:h-[calc(100dvh-340px)] lg:min-h-[420px]">
          <!-- File list -->
          <div class="${n?"hidden lg:block":"block"} lg:overflow-y-auto lg:border lg:border-line lg:rounded">
            ${s.map(o=>u`
                <section class="lg:px-0">
                  <h3 class="text-[10px] font-mono text-muted uppercase tracking-wider px-2 pt-3 pb-1 sticky top-0 bg-bg lg:bg-bg z-10">
                    ${o}
                  </h3>
                  <div class="lg:divide-y lg:divide-line border-t border-line lg:border-t-0">
                    ${(t.get(o)??[]).map(r=>{const a=this.selectedPath===r.relPath;return u`
                        <button
                          type="button"
                          data-path=${r.relPath}
                          class="w-full text-left px-2 py-1.5 hover:bg-hover transition-colors flex items-center gap-2 focus:outline-none ${a?"bg-hover":""}"
                          @click=${()=>void this.viewFile(r.relPath)}
                        >
                          <span class="font-mono text-xs text-ink truncate flex-1 min-w-0">${r.name}</span>
                          ${r.loaded==="always"?u`<span class="text-[10px] px-1 py-0 rounded bg-ink/10 text-ink font-medium shrink-0">L</span>`:r.loaded==="persona"?u`<span class="text-[10px] px-1 py-0 rounded border border-line text-muted shrink-0">P</span>`:k}
                          <span class="text-[10px] text-muted tabular-nums shrink-0 w-14 text-right">${this.fmtBytes(r.bytes)}</span>
                          <span class="text-[10px] text-muted tabular-nums shrink-0 w-8 text-right">${this.fmtDate(r.modifiedAt)}</span>
                        </button>
                      `})}
                  </div>
                </section>
              `)}
          </div>

          <!-- Preview card -->
          <div class="${n?"block":"hidden lg:flex"} lg:flex flex-col border border-line rounded mt-4 lg:mt-0 lg:overflow-hidden h-[calc(100dvh-200px)] lg:h-auto">
            ${this.renderPreview()}
          </div>
        </div>
      </div>
    `}};vs([x()],qe.prototype,"data",2);vs([x()],qe.prototype,"loading",2);vs([x()],qe.prototype,"viewing",2);vs([x()],qe.prototype,"selectedPath",2);vs([x()],qe.prototype,"filter",2);qe=vs([O("settings-context")],qe);var Oh=Object.defineProperty,Ah=Object.getOwnPropertyDescriptor,li=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ah(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Oh(t,s,n),n};const Ps=[{id:"general",label:"General"},{id:"context",label:"Context"},{id:"memory",label:"Memory"},{id:"agent-docs",label:"Agents"}];let ds=class extends H{constructor(){super(...arguments),this.section="general",this.active="general",this.editorDirty=!1,this.mobileView="list",this.handleKeydown=e=>{if(e.key==="Escape"){this.requestClose();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;const t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)||this.active==="context")return;const s=Ps.findIndex(n=>n.id===this.active);if(s<0)return;const i=e.key==="ArrowDown"?Math.min(s+1,Ps.length-1):Math.max(s-1,0);i!==s&&(e.preventDefault(),this.active=Ps[i].id,this.mobileView="section")},this.onDirtyChange=e=>{const t=e.detail;this.editorDirty=!!t?.dirty}}connectedCallback(){super.connectedCallback(),this.active=this.section,document.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeydown)}requestClose(){this.editorDirty&&!confirm("Discard unsaved changes?")||this.dispatchEvent(new CustomEvent("settings-close",{bubbles:!0,composed:!0}))}renderActive(){return this.active==="general"?u`<settings-general></settings-general>`:this.active==="agent-docs"?u`<agent-docs-editor
        @dirty-change=${this.onDirtyChange}
      ></agent-docs-editor>`:this.active==="memory"?u`<settings-memory></settings-memory>`:this.active==="context"?u`<settings-context></settings-context>`:k}render(){const e=Ps.find(s=>s.id===this.active)?.label??"",t=this.mobileView==="list";return u`
      <div class="h-[100dvh] flex flex-col bg-bg text-ink">
        <header
          class="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-line shrink-0"
        >
          <div class="flex items-center gap-2 text-base min-w-0">
            <!-- Mobile back button when viewing a section -->
            ${t?"":u`
              <button
                type="button"
                class="lg:hidden flex items-center gap-1 text-muted hover:text-ink mr-1 shrink-0"
                @click=${()=>{this.mobileView="list"}}
                aria-label="Back"
              >
                ‹
              </button>
            `}
            <span class="font-semibold text-ink shrink-0">Settings</span>
            ${u`
              <span class="text-muted mx-1">·</span>
              <span class="text-muted truncate">${e}</span>
            `}
          </div>
          <button
            type="button"
            class="w-7 h-7 grid place-items-center rounded border border-line text-muted hover:text-ink hover:border-ink hover:bg-hover shrink-0"
            aria-label="Close settings"
            @click=${()=>this.requestClose()}
          >
            ×
          </button>
        </header>

        <div class="flex-1 min-h-0 lg:grid lg:grid-cols-[200px_1fr]">
          <!-- Nav: full-width on mobile when on list view; sidebar on desktop -->
          <nav class="
            border-line py-4 px-3 space-y-1
            ${t?"block":"hidden"}
            lg:block lg:border-r lg:overflow-y-auto
          ">
            ${Ps.map(s=>u`
                <button
                  type="button"
                  class="w-full text-left px-3 py-2.5 lg:py-2 rounded text-sm transition-colors ${this.active===s.id?"bg-hover text-ink font-semibold":"text-muted hover:bg-hover hover:text-ink"}"
                  @click=${()=>{this.active=s.id,this.mobileView="section"}}
                >
                  ${s.label}
                </button>
              `)}
          </nav>
          <!-- Content: hidden on mobile when on list view -->
          <section class="
            overflow-y-auto px-5 sm:px-8 py-6
            ${t?"hidden":"block"}
            lg:block
          ">
            ${this.renderActive()}
          </section>
        </div>
      </div>
    `}};li([C()],ds.prototype,"section",2);li([x()],ds.prototype,"active",2);li([x()],ds.prototype,"editorDirty",2);li([x()],ds.prototype,"mobileView",2);ds=li([O("settings-page")],ds);var Ih=Object.defineProperty,Rh=Object.getOwnPropertyDescriptor,Qi=(e,t,s,i)=>{for(var n=i>1?void 0:i?Rh(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Ih(t,s,n),n};let Ks=class extends H{constructor(){super(...arguments),this.status="idle",this.errorMessage=null,this.speaking=null,this.pc=null,this.dc=null,this.mic=null,this.audioEl=null,this.pendingCalls=new Map,this.mentorTurnActive=!1,this.mentorTurnText="",this.userTurnActive=!1,this.threadId=null,this.starting=!1,this.onToggle=()=>{this.pc?this.stopTalk():this.startTalk()},this.onBeforeUnload=()=>{this.pc&&this.stopTalk()}}connectedCallback(){super.connectedCallback(),document.addEventListener("voice-toggle",this.onToggle),window.addEventListener("beforeunload",this.onBeforeUnload)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("voice-toggle",this.onToggle),window.removeEventListener("beforeunload",this.onBeforeUnload),this.pc&&this.stopTalk()}readCockpitThreadId(){return w.getState().currentThreadId}async startTalk(){{this.errorMessage="Voice is off in the demo. Run your own Mana with an LLM connected and you can just talk to it. Get yours at serdarsalim.com",this.status="error",this.dispatchTranscript({role:"mentor",text:this.errorMessage});return}}async stopTalk(){const e=this.pc!==null;try{this.dc?.close()}catch{}try{this.pc?.close()}catch{}if(this.mic)for(const t of this.mic.getTracks())t.stop();this.dc=null,this.pc=null,this.mic=null,this.pendingCalls.clear(),this.userTurnActive=!1,this.mentorTurnActive=!1,this.mentorTurnText="",this.speaking=null,this.status!=="error"&&(this.status="idle"),this.audioEl&&(this.audioEl.srcObject=null),e&&this.dispatchEvent(new CustomEvent("voice-end",{bubbles:!0,composed:!0}))}handleEvent(e){switch(e.type){case"conversation.item.input_audio_transcription.completed":{const t=(e.transcript||"").trim();if(!t)break;this.userTurnActive=!1,this.speaking=null,this.dispatchTranscript({role:"user",text:t}),this.persistTranscript("user",t);break}case"response.output_audio_transcript.delta":{this.mentorTurnActive||(this.mentorTurnActive=!0,this.mentorTurnText="",this.speaking="mentor");const t=e.delta||"";this.mentorTurnText+=t,this.dispatchTranscript({role:"mentor",text:t});break}case"response.output_audio_transcript.done":{const t=(this.mentorTurnText||"").trim();this.mentorTurnActive=!1,this.mentorTurnText="",this.speaking=null,t&&this.persistTranscript("mentor",t);break}case"response.function_call_arguments.delta":{const t=e.call_id;if(!t)break;const s=this.pendingCalls.get(t),i=s?{name:s.name||e.name||"",args:s.args+(e.delta||"")}:{name:e.name||"",args:e.delta||""};this.pendingCalls.set(t,i);break}case"response.function_call_arguments.done":{const t=e.call_id;if(!t)break;const s=this.pendingCalls.get(t)||{name:e.name||"",args:e.arguments||""};this.pendingCalls.delete(t);const i=s.name||e.name||"",n=s.args||e.arguments||"{}";let o={};try{o=JSON.parse(n)}catch{}this.fulfillToolCall(t,i,o);break}case"error":{const t=e.error?.message||JSON.stringify(e.error);this.errorMessage=`voice error: ${t}`,this.dispatchTranscript({role:"mentor",text:this.errorMessage});break}default:e.type==="input_audio_buffer.speech_started"?(this.userTurnActive=!0,this.speaking="user"):e.type==="input_audio_buffer.speech_stopped"&&(this.speaking=null);break}}async fulfillToolCall(e,t,s){try{const i=await A.voice.op(t,s);if(i.ok){this.refreshOpsSurface(i);const n=t==="load_week"?{action:"load-week",week:s.week??i.week}:{action:"refresh",week:i.week};document.dispatchEvent(new CustomEvent("ops-event",{detail:n,bubbles:!0,composed:!0}))}this.sendToolResult(e,JSON.stringify(i))}catch(i){const n=i instanceof Error?i.message:String(i);this.sendToolResult(e,JSON.stringify({ok:!1,error:n}))}}sendToolResult(e,t){!this.dc||this.dc.readyState!=="open"||this.dc.send(JSON.stringify({type:"conversation.item.create",item:{type:"function_call_output",call_id:e,output:t}}))}async persistTranscript(e,t){try{const s={threadId:this.threadId,role:e,content:t},i=await A.voice.transcript(s);i.threadId&&i.threadId!==this.threadId&&(this.threadId=i.threadId)}catch{}}refreshOpsSurface(e){document.dispatchEvent(new CustomEvent("slmai:ops",{detail:[e]}))}dispatchTranscript(e){this.dispatchEvent(new CustomEvent("voice-transcript",{detail:e,bubbles:!0,composed:!0}))}render(){if(this.status==="idle")return k;const e=this.status==="connecting"?"connecting…":this.status==="error"?this.errorMessage??"voice error":this.speaking==="user"?"listening…":this.speaking==="mentor"?"speaking…":"thinking…",t=this.status==="error"?"bg-red-500":this.status==="connecting"?"bg-amber-400 animate-pulse":this.speaking==="user"?"bg-emerald-500 animate-pulse":this.speaking==="mentor"?"bg-sky-500 animate-pulse":"bg-accent";return u`
      <div
        class="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-surface/95 px-3 py-1.5 text-xs text-ink shadow-lg ring-1 ring-black/10 backdrop-blur"
        role="status"
        aria-live="polite"
      >
        <span class="inline-block h-2 w-2 rounded-full ${t}"></span>
        <span>${e}</span>
      </div>
    `}};Qi([x()],Ks.prototype,"status",2);Qi([x()],Ks.prototype,"errorMessage",2);Qi([x()],Ks.prototype,"speaking",2);Ks=Qi([O("voice-controller")],Ks);class Lh{constructor(t,s){this.armedId=null,this.draggingId=null,this.overId=null,this.overPos=null,this.arm=i=>{this.armedId=i},this.disarm=()=>{this.armedId=null},this.isDragging=i=>this.armedId===i||this.draggingId===i,this.onDragStart=(i,n)=>{if(this.armedId!==n){i.preventDefault();return}this.draggingId=n,i.dataTransfer&&(i.dataTransfer.setData(this.type,String(n)),i.dataTransfer.effectAllowed="move")},this.onDragEnd=()=>{this.armedId=this.draggingId=this.overId=null,this.overPos=null,this.host.requestUpdate()},this.onDragOver=(i,n,o)=>{if(!i.dataTransfer?.types.includes(this.type))return;i.preventDefault(),i.dataTransfer.dropEffect="move";const r=i.currentTarget.getBoundingClientRect(),a=i.clientY<r.top+r.height/2?"before":"after";(this.overId!==n||this.overPos!==a)&&(this.overId=n,this.overPos=a,this.host.requestUpdate())},this.onDragLeave=()=>{this.overId!==null&&(this.overId=null,this.overPos=null,this.host.requestUpdate())},this.onDrop=(i,n,o)=>{const r=i.dataTransfer?.getData(this.type),a=r?Number(r):NaN,l=this.overPos;if(this.overId=null,this.overPos=null,this.draggingId=null,this.armedId=null,!Number.isFinite(a))return;i.preventDefault();const c=l==="after"?o+1:o;this.onReorder(a,c)},this.dropClass=i=>this.overId!==i?"border-t-2 border-b-2 border-transparent":this.overPos==="before"?"border-t-2 border-t-accent border-b-2 border-b-transparent":"border-b-2 border-b-accent border-t-2 border-t-transparent",this.host=t,this.type=s.type,this.onReorder=s.onReorder,t.addController(this)}hostDisconnected(){this.armedId=this.draggingId=this.overId=null,this.overPos=null}get active(){return this.draggingId!==null}}var Nh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,Ct=(e,t,s,i)=>{for(var n=i>1?void 0:i?Fh(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Nh(t,s,n),n};const jh=["🍎","🍌","🍓","🍇","🍊","🍅","🥕","🥦","🥬","🧅","🥔","🌽","🥑","🍞","🥐","🍚","🍝","🥚","🥛","🧀","🧈","🍗","🥩","🥓","🐟","🦐","🥜","🍯","🧂","🫒","🥫","🍪","🍫","🍬","🍿","🍕","☕","🍵","🧃","🥤","🍺","🍷","🧻","🧼","🧴","💊","🍼","🛒"];let ht=class extends H{constructor(){super(...arguments),this.items=[],this.loading=!0,this.input="",this.quantity="",this.adding=!1,this.editingId=null,this.editingExpiryId=null,this.emojiPickerFor=null,this.draftActive=!1,this.draftValue="",this.cols=(()=>{const e=Number(localStorage.getItem("cockpit.grocery_cols"));return e===2||e===3?e:1})(),this.sortAZ=localStorage.getItem("cockpit.grocery_sortaz")==="1",this.sortType=localStorage.getItem("cockpit.grocery_sorttype")==="1",this.poll=null,this.drag=new Lh(this,{type:"text/x-grocery-id",onReorder:(e,t)=>this.reorder(e,t)}),this._closeEmoji=()=>{this.emojiPickerFor!==null&&(this.emojiPickerFor=null)}}toggleSortAZ(){this.sortAZ=!this.sortAZ,this.sortAZ&&(this.sortType=!1);try{localStorage.setItem("cockpit.grocery_sortaz",this.sortAZ?"1":"0")}catch{}try{localStorage.setItem("cockpit.grocery_sorttype","0")}catch{}}toggleSortType(){this.sortType=!this.sortType,this.sortType&&(this.sortAZ=!1);try{localStorage.setItem("cockpit.grocery_sorttype",this.sortType?"1":"0")}catch{}try{localStorage.setItem("cockpit.grocery_sortaz","0")}catch{}}inferCategory(e){const t=e.toLowerCase(),s=(...i)=>i.some(n=>t.includes(n));return s("beef","chicken","lamb","mutton","pork","fish","prawn","shrimp","meat","turkey","duck","salmon","tuna","crab","squid","sardine")?"Meat & Fish":s("milk","yogurt","yoghurt","cheese","butter","cream","egg")?"Dairy & Eggs":s("rice","pasta","flour","bread","oat","cereal","noodle","coconut milk","gula","basmati","soy sauce","fish sauce","stock","broth","lentil","bean","chickpea","tamarind paste","tomato paste","tomato sauce")?"Pantry":s("cardamom","cinnamon","cumin","turmeric","clove","nutmeg","bay leaf","bay leave","star anise","paprika","masala","saffron","garam","chili","chilli","coriander powder","fennel","mustard seed")?"Spices":s("oil","sugar","salt","sauce","paste","vinegar")?"Pantry":s("cucumber","lime","lemon","cabbage","eggplant","aubergine","okra","ocra","mango","pandan","lemongrass","tom yam","coriander","garlic","onion","ginger","tomato","domates","patates","potato","carrot","spinach","lettuce","kale","broccoli","celery","mushroom","pear","apple","banana","orange","grape","berry","avocado","capsicum","chive","biber","pepper","herb","leaf","leaves","tamarind")?"Produce":"Other"}setCols(e){this.cols=e;try{localStorage.setItem("cockpit.grocery_cols",String(e))}catch{}}cycleCols(){const e=window.matchMedia("(min-width: 1024px)").matches?3:2;this.setCols(this.cols%e+1)}colsIcon(){const e=[];for(let t=1;t<this.cols;t++){const s=3+18*t/this.cols;e.push(ql`<line x1="${s}" y1="4" x2="${s}" y2="20" />`)}return u`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      ${e}
    </svg>`}connectedCallback(){super.connectedCallback(),this.refresh(),document.addEventListener("click",this._closeEmoji),this.poll=setInterval(()=>{this.editingId===null&&this.editingExpiryId===null&&this.emojiPickerFor===null&&!this.draftActive&&!this.drag.active&&this.refresh()},4e3)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._closeEmoji),this.poll&&clearInterval(this.poll)}async refresh(){try{const e=await fetch("/api/grocery");e.ok&&(this.items=(await e.json()).items)}catch{}this.loading=!1}async addItem(){const e=this.input.trim();if(!(!e||this.adding)){this.adding=!0;try{const t={name:e};this.quantity.trim()&&(t.quantity=this.quantity.trim()),await fetch("/api/grocery",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),this.input="",this.quantity="",await this.refresh()}finally{this.adding=!1}}}async setStatus(e,t){await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({status:t})}),await this.refresh()}async rename(e,t){this.editingId=null;const s=t.trim();!s||s===e.name||(await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({name:s})}),await this.refresh())}async commitName(e,t,s){await this.rename(e,t),s&&(this.draftActive=!0,this.draftValue="",this.updateComplete.then(()=>this.focusDraft()))}focusDraft(){this.renderRoot?.querySelector(".grocery-draft")?.focus()}async commitDraft(e){const t=this.draftValue.trim();if(!t){this.draftActive=!1;return}this.draftValue="",await fetch("/api/grocery",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t})}),await this.refresh(),e?(this.draftActive=!0,this.updateComplete.then(()=>this.focusDraft())):this.draftActive=!1}async reorder(e,t){await fetch(`/api/grocery/${e}/reorder`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({targetIndex:t})}),await this.refresh()}iconUrl(e){if(!/\p{Extended_Pictographic}/u.test(e))return null;const s=[.../‍/.test(e)?e:e.replace(/️/g,"")].map(i=>i.codePointAt(0).toString(16)).join("-");return s?`/twemoji/${s}.svg`:null}renderIcon(e){const t=e.emoji,s=t?this.iconUrl(t):null,i=s?u`<img src=${s} alt="" class="w-[18px] h-[18px] select-none" draggable="false" />`:t?u`<span class="text-[15px] leading-none">${t}</span>`:u`<span class="text-muted/40 text-[13px] leading-none">🛒</span>`;return u`<button
      type="button"
      class="shrink-0 inline-flex items-center justify-center w-[18px] h-[18px]"
      title="Change icon"
      @dblclick=${n=>{n.stopPropagation(),this.emojiPickerFor=this.emojiPickerFor===e.id?null:e.id}}
    >${i}</button>`}async pickEmoji(e,t){this.emojiPickerFor=null,await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({emoji:t||null})}),await this.refresh()}renderEmojiPalette(e){return u`<div
      class="absolute left-0 top-full mt-1 z-30 w-56 p-1.5 rounded-lg border border-line bg-surface shadow-lg flex flex-wrap gap-0.5"
      @click=${t=>t.stopPropagation()}
    >
      ${jh.map(t=>u`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-base leading-none"
          @click=${()=>void this.pickEmoji(e,t)}>${t}</button>`)}
      <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>void this.pickEmoji(e,"")}>none</button>
    </div>`}async removeItem(e){await fetch(`/api/grocery/${e.id}`,{method:"DELETE"}),await this.refresh()}onAddKey(e){e.key==="Enter"&&(e.preventDefault(),this.addItem())}async setExpiryDays(e,t){this.editingExpiryId=null;const s=Math.round(Number(t));if(!Number.isFinite(s))return;const i=e.bought_at?Math.floor(Date.now()/1e3-e.bought_at)/86400:0,n=Math.max(0,Math.round(i)+s);await fetch(`/api/grocery/${e.id}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({shelf_life_days:n})}),await this.refresh()}fmtDuration(e){const t=Math.abs(e);return t<30?`${e}d`:t<365?`${Math.round(e/30)}m`:`${Math.round(e/365)}y`}hourglass(){return u`<svg class="shrink-0 hidden sm:block" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 2h12a1 1 0 0 1 0 2h-1v2.5a5 5 0 0 1-1.9 3.92L13 12l2.1 1.58A5 5 0 0 1 17 17.5V20h1a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h1v-2.5a5 5 0 0 1 1.9-3.92L11 12 8.9 10.42A5 5 0 0 1 7 6.5V4H6a1 1 0 0 1 0-2z" />
    </svg>`}expiryInput(e,t){return u`<span class="shrink-0 inline-flex items-center gap-1 text-[10px] text-ink">
      ${this.hourglass()}
      <input
        type="number"
        class="w-10 bg-transparent border-b border-line text-[11px] outline-none text-right"
        .value=${t!=null?String(t):""}
        autofocus
        @keydown=${s=>{s.key==="Enter"?(s.preventDefault(),this.setExpiryDays(e,s.target.value)):s.key==="Escape"&&(this.editingExpiryId=null)}}
        @blur=${s=>void this.setExpiryDays(e,s.target.value)}
      />d
    </span>`}renderExpiry(e){if(e.status!=="pantry"||!e.bought_at)return k;if(this.editingExpiryId===e.id){const i=e.shelf_life_days?Math.floor((e.bought_at+e.shelf_life_days*86400-Date.now()/1e3)/86400):null;return this.expiryInput(e,i)}if(!e.shelf_life_days)return u`<button
        type="button"
        class="ml-auto shrink-0 opacity-0 group-hover:opacity-50 hover:!opacity-100 text-muted"
        title="Set expiry"
        @click=${()=>{this.editingExpiryId=e.id}}
      >${this.hourglass()}</button>`;const t=Math.floor((e.bought_at+e.shelf_life_days*86400-Date.now()/1e3)/86400),s=t<0?"text-red-600 bg-red-500/10":t<=2?"text-amber-600 bg-amber-500/10":"text-muted";return u`<button
      type="button"
      class="ml-auto shrink-0 inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full leading-none ${s}"
      title="Expiry — click to edit"
      @click=${()=>{this.editingExpiryId=e.id}}
    >${this.hourglass()}${this.fmtDuration(t)}</button>`}renderCheck(e){const t=e.status==="pantry",s=t?"shopping":"pantry";return u`
      <button
        type="button"
        class="shrink-0 inline-flex items-center justify-center rounded-full transition-colors ${t?"bg-accent border-accent":"bg-transparent border-line hover:border-ink"}"
        style="width:16px;height:16px;border-width:1.5px;border-style:solid;"
        aria-label=${t?"Move back to shopping":"Mark bought"}
        title=${t?"Bought — click to move back":"Mark bought"}
        @click=${()=>void this.setStatus(e,s)}
      >
        ${t?u`<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 8.5 L6.5 12 L13 4.5" />
            </svg>`:k}
      </button>
    `}renderItem(e,t,s=!1){const i=this.editingId===e.id;return u`
      <li
        data-row-key=${`grocery:${e.id}`}
        draggable=${this.drag.isDragging(e.id)?"true":"false"}
        @dragstart=${n=>this.drag.onDragStart(n,e.id)}
        @dragend=${this.drag.onDragEnd}
        @dragover=${n=>this.drag.onDragOver(n,e.id,t)}
        @dragleave=${this.drag.onDragLeave}
        @drop=${n=>this.drag.onDrop(n,e.id,t)}
        class="group relative flex items-center gap-2 pl-4 pr-1 hover:bg-hover break-inside-avoid ${this.drag.dropClass(e.id)}"
      >
        <span
          class="hidden lg:inline-flex shrink-0 cursor-grab text-muted opacity-0 group-hover:opacity-60 hover:!opacity-100 select-none leading-none"
          style="font-size:14px;letter-spacing:-1px;"
          title="Drag to reorder"
          @mousedown=${()=>this.drag.arm(e.id)}
          @mouseup=${this.drag.disarm}
        >⠿</span>
        ${this.renderCheck(e)}
        <span class="relative shrink-0">
          ${this.renderIcon(e)}
          ${this.emojiPickerFor===e.id?this.renderEmojiPalette(e):k}
        </span>
        <!-- Content carries the divider, so the line is inset (starts after the
             checkbox) — iOS-list style. Subtle on both mobile and desktop. -->
        <div class="flex-1 min-w-0 flex items-center gap-2 py-2 pr-6 border-b border-line/50">
          ${i?u`<input
                class="flex-1 bg-transparent text-sm outline-none"
                .value=${e.name}
                autofocus
                @keydown=${n=>{n.key==="Enter"?(n.preventDefault(),this.commitName(e,n.target.value,s)):n.key==="Escape"&&(this.editingId=null)}}
                @blur=${n=>void this.rename(e,n.target.value)}
              />`:u`<span class="flex-1 min-w-0 text-sm text-ink truncate cursor-text" @click=${()=>{this.editingId=e.id}}>${e.name}</span>`}
          ${e.quantity?u`<span class="text-xs text-muted shrink-0 ml-auto">${e.quantity}</span>`:k}
          ${this.renderExpiry(e)}
        </div>
        <button
          type="button"
          class="absolute right-0 top-1/2 -translate-y-1/2 shrink-0 opacity-40 lg:opacity-0 lg:group-hover:opacity-60 hover:!opacity-100 text-muted text-base leading-none px-1"
          aria-label="Remove (consumed)"
          title="Consumed — remove"
          @click=${()=>void this.removeItem(e)}
        >×</button>
      </li>
    `}renderDraftRow(){return u`
      <li class="flex items-center gap-2 pl-4 pr-1 break-inside-avoid">
        <span class="hidden lg:inline-flex shrink-0 w-[14px]"></span>
        <span class="shrink-0 rounded-full border border-line" style="width:16px;height:16px;border-width:1.5px;"></span>
        <div class="flex-1 min-w-0 py-2 border-b border-line/50">
          <input
            class="grocery-draft w-full bg-transparent text-sm outline-none placeholder:text-muted/60"
            placeholder="new item…"
            .value=${this.draftValue}
            @input=${e=>{this.draftValue=e.target.value}}
            @keydown=${e=>{e.key==="Enter"?(e.preventDefault(),this.commitDraft(!0)):e.key==="Escape"&&(this.draftActive=!1,this.draftValue="")}}
            @blur=${()=>void this.commitDraft(!1)}
          />
        </div>
      </li>
    `}colsClass(){return this.cols===3?"columns-2 lg:columns-3 gap-x-5":this.cols===2?"columns-2 gap-x-5":""}renderSection(e,t,s,i=!1){const n=i&&this.draftActive;return u`
      <section class="rounded-xl border border-line bg-surface">
        <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted">${e} <span class="text-muted/60">${t.length||""}</span></h3>
        ${t.length===0&&!n?u`<p class="px-4 pb-3 text-xs text-muted/70">${s}</p>`:u`<ul class="pb-2 ${this.colsClass()}">
              ${t.map((o,r)=>this.renderItem(o,r,i&&r===t.length-1))}
              ${n?this.renderDraftRow():k}
            </ul>`}
      </section>
    `}renderSectionGrouped(e,t,s,i=!1){const n=new Map;for(const a of t){const l=this.inferCategory(a.name);n.has(l)||n.set(l,[]),n.get(l).push(a)}for(const a of n.values())a.sort((l,c)=>l.name.localeCompare(c.name));const o=ht.CATEGORY_ORDER.filter(a=>n.has(a)).concat([...n.keys()].filter(a=>!ht.CATEGORY_ORDER.includes(a))),r=i&&this.draftActive;return u`
      <section class="rounded-xl border border-line bg-surface">
        <h3 class="px-4 pt-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted">${e} <span class="text-muted/60">${t.length||""}</span></h3>
        ${t.length===0&&!r?u`<p class="px-4 pb-3 text-xs text-muted/70">${s}</p>`:u`<ul class="pb-2">
              ${o.flatMap(a=>[u`<li class="px-4 pt-2.5 pb-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted/50 select-none">${a}</li>`,...n.get(a).map((l,c)=>this.renderItem(l,c,!1))])}
              ${r?this.renderDraftRow():k}
            </ul>`}
      </section>
    `}render(){const e=i=>this.sortAZ?[...i].sort((n,o)=>n.name.localeCompare(o.name)):i,t=e(this.items.filter(i=>i.status==="shopping")),s=e(this.items.filter(i=>i.status==="pantry"));return u`
      <div class="flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0 flex items-center justify-between gap-3">
          <h2 class="text-lg font-semibold text-ink">Grocery</h2>
          <div class="flex items-center gap-3">
            <button
              type="button"
              class="grid place-items-center w-7 h-7 rounded-full ${this.sortType?"text-ink bg-hover":"text-muted hover:text-ink hover:bg-hover"} transition-colors text-[10px] font-semibold leading-none"
              title="Sort by type"
              aria-label="Sort by category"
              aria-pressed=${this.sortType}
              @click=${this.toggleSortType}
            >Type</button>
            <button
              type="button"
              class="grid place-items-center w-7 h-7 rounded-full ${this.sortAZ?"text-ink bg-hover":"text-muted hover:text-ink hover:bg-hover"} transition-colors text-[11px] font-semibold leading-none"
              title="Sort A–Z"
              aria-label="Sort alphabetically"
              aria-pressed=${this.sortAZ}
              @click=${this.toggleSortAZ}
            >A–Z</button>
            <button
              type="button"
              class="grid place-items-center w-7 h-7 rounded-full text-muted hover:text-ink hover:bg-hover transition-colors"
              title="Columns — tap to change"
              aria-label="Change column count"
              @click=${this.cycleCols}
            >
              ${this.colsIcon()}
            </button>
            <span class="text-xs text-muted">${t.length} to buy · ${s.length} at home</span>
          </div>
        </header>

        <div class="px-4 py-2.5 shrink-0 flex gap-2">
          <input
            type="text"
            placeholder="add an item…"
            class="flex-1 min-w-0 px-3 py-1.5 text-sm bg-surface border border-line rounded-lg focus:outline-none focus:border-ink"
            .value=${this.input}
            @input=${i=>{this.input=i.target.value}}
            @keydown=${this.onAddKey}
            ?disabled=${this.adding}
          />
          <input
            type="text"
            placeholder="qty"
            class="w-16 px-2 py-1.5 text-sm bg-surface border border-line rounded-lg focus:outline-none focus:border-ink"
            .value=${this.quantity}
            @input=${i=>{this.quantity=i.target.value}}
            @keydown=${this.onAddKey}
            ?disabled=${this.adding}
          />
          <button
            type="button"
            class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover ${this.adding?"opacity-50 pointer-events-none":""}"
            @click=${()=>void this.addItem()}
          >${this.adding?"…":"Add"}</button>
        </div>

        <div class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
          ${this.sortType?this.renderSectionGrouped("Shopping",this.items.filter(i=>i.status==="shopping"),"Nothing to buy. Add an item, or ask the grocery keeper.",!0):this.renderSection("Shopping",t,"Nothing to buy. Add an item, or ask the grocery keeper.",!0)}
          ${this.sortType?this.renderSectionGrouped("Pantry",this.items.filter(i=>i.status==="pantry"),"Nothing at home yet. Check items off as you buy them."):this.renderSection("Pantry",s,"Nothing at home yet. Check items off as you buy them.")}
        </div>
      </div>
    `}};ht.CATEGORY_ORDER=["Produce","Meat & Fish","Dairy & Eggs","Spices","Pantry","Other"];Ct([x()],ht.prototype,"items",2);Ct([x()],ht.prototype,"loading",2);Ct([x()],ht.prototype,"input",2);Ct([x()],ht.prototype,"quantity",2);Ct([x()],ht.prototype,"adding",2);Ct([x()],ht.prototype,"editingId",2);Ct([x()],ht.prototype,"editingExpiryId",2);Ct([x()],ht.prototype,"emojiPickerFor",2);Ct([x()],ht.prototype,"draftActive",2);Ct([x()],ht.prototype,"draftValue",2);Ct([x()],ht.prototype,"cols",2);Ct([x()],ht.prototype,"sortAZ",2);Ct([x()],ht.prototype,"sortType",2);ht=Ct([O("grocery-section")],ht);var zh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,ks=(e,t,s,i)=>{for(var n=i>1?void 0:i?Bh(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&zh(t,s,n),n};const Jo=["active","idea","paused","shipped","archived"],fn={active:"Active",idea:"Ideas",paused:"Paused",shipped:"Shipped",archived:"Archived"},Zo=512*1024;let Ke=class extends H{constructor(){super(...arguments),this.apps=[],this.loading=!0,this.selectedId=null,this.archivedOpen=!1}connectedCallback(){super.connectedCallback(),this.refresh()}get selected(){return this.apps.find(e=>e.id===this.selectedId)??null}async refresh(){try{const e=await fetch("/api/office");e.ok&&(this.apps=(await e.json()).apps)}catch{}this.loading=!1}async patch(e,t){await fetch(`/api/office/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async removeApp(e){confirm(`Remove ${e.name} from the office?`)&&(await fetch(`/api/office/${e.id}`,{method:"DELETE"}),this.selectedId===e.id&&(this.selectedId=null),await this.refresh())}async onLogoFile(e,t){const s=t.target,i=s.files?.[0];if(s.value="",!i)return;if(!i.type.startsWith("image/")){alert("Please choose an image file.");return}if(i.size>Zo){alert(`Image is too large (max ${Math.round(Zo/1024)}KB).`);return}const n=await new Promise((o,r)=>{const a=new FileReader;a.onload=()=>o(a.result),a.onerror=()=>r(a.error),a.readAsDataURL(i)});await this.patch(e.id,{icon:n})}renderLogo(e,t="w-8 h-8"){return e.icon?u`<img
        src=${e.icon}
        alt=""
        class="${t} rounded-md object-contain bg-surface border border-line shrink-0"
        loading="lazy"
      />`:u`<span
      class="${t} rounded-md grid place-items-center bg-ink/10 text-ink text-sm font-semibold shrink-0"
    >${e.name.charAt(0).toUpperCase()}</span>`}field(e,t,s){return u`
      <label class="block">
        <span class="text-[10px] uppercase tracking-wider text-muted">${e}</span>
        <input
          type="text"
          class="w-full px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
          .value=${t??""}
          @change=${i=>s(i.target.value.trim())}
        />
      </label>
    `}renderModal(){const e=this.selected;return u`
      <sc-dialog
        ?open=${e!=null}
        .label=${e?.name??""}
        @sc-hide=${()=>this.selectedId=null}
      >
        ${e?u`
              <div class="flex items-center gap-3 mb-4">
                ${this.renderLogo(e,"w-12 h-12")}
                <div class="min-w-0 flex-1">
                  <div class="text-base font-semibold text-ink truncate">${e.name}</div>
                  ${e.stack?u`<div class="text-xs text-muted truncate">${e.stack}</div>`:k}
                </div>
                <div class="flex flex-col items-end gap-0.5 shrink-0">
                  <button
                    type="button"
                    class="text-xs text-ink hover:underline"
                    @click=${()=>this.logoInput?.click()}
                  >${e.icon?"Replace logo":"Upload logo"}</button>
                  ${e.icon?u`<button
                        type="button"
                        class="text-[10px] text-muted hover:text-red-500"
                        @click=${()=>void this.patch(e.id,{icon:null})}
                      >Remove logo</button>`:k}
                </div>
                <input
                  id="logo-file"
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change=${t=>void this.onLogoFile(e,t)}
                />
              </div>

              <div class="mb-4">
                <span class="block text-[10px] uppercase tracking-wider text-muted mb-1">Status</span>
                <div class="flex flex-wrap gap-1.5">
                  ${Jo.map(t=>u`
                      <button
                        type="button"
                        class="px-2.5 py-1 text-xs rounded-full border transition-colors ${e.status===t?"border-ink bg-ink text-bg":"border-line text-muted hover:bg-hover"}"
                        @click=${()=>e.status!==t&&void this.patch(e.id,{status:t})}
                      >${fn[t]}</button>
                    `)}
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2">
                ${this.field("Name",e.name,t=>t&&void this.patch(e.id,{name:t}))}
                ${this.field("Path",e.path,t=>void this.patch(e.id,{path:t||null}))}
                ${this.field("Purpose",e.purpose,t=>void this.patch(e.id,{purpose:t||null}))}
                ${this.field("Goal it serves",e.goal,t=>void this.patch(e.id,{goal:t||null}))}
                ${this.field("Stack",e.stack,t=>void this.patch(e.id,{stack:t||null}))}
                ${this.field("Repo",e.repo,t=>void this.patch(e.id,{repo:t||null}))}
              </div>

              <div class="flex justify-between items-center pt-4 mt-3 border-t border-line">
                <button
                  type="button"
                  class="text-xs text-muted hover:text-red-500"
                  @click=${()=>void this.removeApp(e)}
                >Remove from office</button>
                <button
                  type="button"
                  class="text-xs px-3 py-1 border border-line rounded hover:bg-hover"
                  @click=${()=>this.selectedId=null}
                >Done</button>
              </div>
            `:k}
      </sc-dialog>
    `}renderApp(e){return u`
      <li data-row-key=${`office:${e.id}`} class="border-b border-line last:border-b-0">
        <button
          type="button"
          class="group w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-hover"
          @click=${()=>this.selectedId=e.id}
        >
          ${this.renderLogo(e)}
          <span class="flex-1 min-w-0">
            <span class="block text-sm text-ink truncate">${e.name}</span>
            ${e.purpose?u`<span class="block text-xs text-muted truncate">${e.purpose}</span>`:k}
          </span>
        </button>
      </li>
    `}render(){const e=Jo.map(s=>({status:s,apps:this.apps.filter(i=>i.status===s)})).filter(s=>s.apps.length>0),t=this.apps.filter(s=>s.status==="active").length;return u`
      <div class="flex flex-col h-full">
        <header class="px-4 py-3 border-b border-line shrink-0">
          <div class="flex items-baseline justify-between">
            <h2 class="text-lg font-semibold text-ink">Office</h2>
            <span class="text-xs text-muted">${this.apps.length} apps · ${t} active</span>
          </div>
        </header>

        <div class="flex-1 min-h-0 overflow-y-auto">
          ${this.loading?u`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:e.length===0?u`<p class="px-4 py-3 text-xs text-muted">No apps yet. They sync in from your portfolio automatically, or tell the office keeper to add one.</p>`:e.map(s=>s.status==="archived"?u`
                        <section>
                          <button
                            type="button"
                            class="w-full flex items-center gap-1 px-4 py-2 text-xs font-mono uppercase tracking-wider text-muted bg-bg sticky top-0 z-10 border-b border-line hover:text-ink"
                            @click=${()=>this.archivedOpen=!this.archivedOpen}
                          >
                            <span class="transition-transform ${this.archivedOpen?"rotate-90":""}">›</span>
                            ${fn[s.status]} (${s.apps.length})
                          </button>
                          ${this.archivedOpen?u`<ul>${s.apps.map(i=>this.renderApp(i))}</ul>`:k}
                        </section>
                      `:u`
                        <section>
                          <h3 class="px-4 py-2 text-xs font-mono uppercase tracking-wider text-muted bg-bg sticky top-0 z-10 border-b border-line">
                            ${fn[s.status]} (${s.apps.length})
                          </h3>
                          <ul>${s.apps.map(i=>this.renderApp(i))}</ul>
                        </section>
                      `)}
        </div>

        ${this.renderModal()}
      </div>
    `}};ks([x()],Ke.prototype,"apps",2);ks([x()],Ke.prototype,"loading",2);ks([x()],Ke.prototype,"selectedId",2);ks([x()],Ke.prototype,"archivedOpen",2);ks([Et("#logo-file")],Ke.prototype,"logoInput",2);Ke=ks([O("office-section")],Ke);/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function ci(e){return e+.5|0}const ge=(e,t,s)=>Math.max(Math.min(e,s),t);function Ns(e){return ge(ci(e*2.55),0,255)}function ye(e){return ge(ci(e*255),0,255)}function ne(e){return ge(ci(e/2.55)/100,0,1)}function Qo(e){return ge(ci(e*100),0,100)}const At={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},jn=[..."0123456789ABCDEF"],Hh=e=>jn[e&15],Vh=e=>jn[(e&240)>>4]+jn[e&15],fi=e=>(e&240)>>4===(e&15),Wh=e=>fi(e.r)&&fi(e.g)&&fi(e.b)&&fi(e.a);function Uh(e){var t=e.length,s;return e[0]==="#"&&(t===4||t===5?s={r:255&At[e[1]]*17,g:255&At[e[2]]*17,b:255&At[e[3]]*17,a:t===5?At[e[4]]*17:255}:(t===7||t===9)&&(s={r:At[e[1]]<<4|At[e[2]],g:At[e[3]]<<4|At[e[4]],b:At[e[5]]<<4|At[e[6]],a:t===9?At[e[7]]<<4|At[e[8]]:255})),s}const qh=(e,t)=>e<255?t(e):"";function Kh(e){var t=Wh(e)?Hh:Vh;return e?"#"+t(e.r)+t(e.g)+t(e.b)+qh(e.a,t):void 0}const Yh=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Va(e,t,s){const i=t*Math.min(s,1-s),n=(o,r=(o+e/30)%12)=>s-i*Math.max(Math.min(r-3,9-r,1),-1);return[n(0),n(8),n(4)]}function Gh(e,t,s){const i=(n,o=(n+e/60)%6)=>s-s*t*Math.max(Math.min(o,4-o,1),0);return[i(5),i(3),i(1)]}function Xh(e,t,s){const i=Va(e,1,.5);let n;for(t+s>1&&(n=1/(t+s),t*=n,s*=n),n=0;n<3;n++)i[n]*=1-t-s,i[n]+=t;return i}function Jh(e,t,s,i,n){return e===n?(t-s)/i+(t<s?6:0):t===n?(s-e)/i+2:(e-t)/i+4}function fo(e){const s=e.r/255,i=e.g/255,n=e.b/255,o=Math.max(s,i,n),r=Math.min(s,i,n),a=(o+r)/2;let l,c,d;return o!==r&&(d=o-r,c=a>.5?d/(2-o-r):d/(o+r),l=Jh(s,i,n,d,o),l=l*60+.5),[l|0,c||0,a]}function go(e,t,s,i){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,s,i)).map(ye)}function mo(e,t,s){return go(Va,e,t,s)}function Zh(e,t,s){return go(Xh,e,t,s)}function Qh(e,t,s){return go(Gh,e,t,s)}function Wa(e){return(e%360+360)%360}function tu(e){const t=Yh.exec(e);let s=255,i;if(!t)return;t[5]!==i&&(s=t[6]?Ns(+t[5]):ye(+t[5]));const n=Wa(+t[2]),o=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?i=Zh(n,o,r):t[1]==="hsv"?i=Qh(n,o,r):i=mo(n,o,r),{r:i[0],g:i[1],b:i[2],a:s}}function eu(e,t){var s=fo(e);s[0]=Wa(s[0]+t),s=mo(s),e.r=s[0],e.g=s[1],e.b=s[2]}function su(e){if(!e)return;const t=fo(e),s=t[0],i=Qo(t[1]),n=Qo(t[2]);return e.a<255?`hsla(${s}, ${i}%, ${n}%, ${ne(e.a)})`:`hsl(${s}, ${i}%, ${n}%)`}const tr={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},er={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function iu(){const e={},t=Object.keys(er),s=Object.keys(tr);let i,n,o,r,a;for(i=0;i<t.length;i++){for(r=a=t[i],n=0;n<s.length;n++)o=s[n],a=a.replace(o,tr[o]);o=parseInt(er[r],16),e[a]=[o>>16&255,o>>8&255,o&255]}return e}let gi;function nu(e){gi||(gi=iu(),gi.transparent=[0,0,0,0]);const t=gi[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const ou=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ru(e){const t=ou.exec(e);let s=255,i,n,o;if(t){if(t[7]!==i){const r=+t[7];s=t[8]?Ns(r):ge(r*255,0,255)}return i=+t[1],n=+t[3],o=+t[5],i=255&(t[2]?Ns(i):ge(i,0,255)),n=255&(t[4]?Ns(n):ge(n,0,255)),o=255&(t[6]?Ns(o):ge(o,0,255)),{r:i,g:n,b:o,a:s}}}function au(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${ne(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const gn=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,ns=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function lu(e,t,s){const i=ns(ne(e.r)),n=ns(ne(e.g)),o=ns(ne(e.b));return{r:ye(gn(i+s*(ns(ne(t.r))-i))),g:ye(gn(n+s*(ns(ne(t.g))-n))),b:ye(gn(o+s*(ns(ne(t.b))-o))),a:e.a+s*(t.a-e.a)}}function mi(e,t,s){if(e){let i=fo(e);i[t]=Math.max(0,Math.min(i[t]+i[t]*s,t===0?360:1)),i=mo(i),e.r=i[0],e.g=i[1],e.b=i[2]}}function Ua(e,t){return e&&Object.assign(t||{},e)}function sr(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=ye(e[3]))):(t=Ua(e,{r:0,g:0,b:0,a:1}),t.a=ye(t.a)),t}function cu(e){return e.charAt(0)==="r"?ru(e):tu(e)}class Ys{constructor(t){if(t instanceof Ys)return t;const s=typeof t;let i;s==="object"?i=sr(t):s==="string"&&(i=Uh(t)||nu(t)||cu(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Ua(this._rgb);return t&&(t.a=ne(t.a)),t}set rgb(t){this._rgb=sr(t)}rgbString(){return this._valid?au(this._rgb):void 0}hexString(){return this._valid?Kh(this._rgb):void 0}hslString(){return this._valid?su(this._rgb):void 0}mix(t,s){if(t){const i=this.rgb,n=t.rgb;let o;const r=s===o?.5:s,a=2*r-1,l=i.a-n.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-c,i.r=255&c*i.r+o*n.r+.5,i.g=255&c*i.g+o*n.g+.5,i.b=255&c*i.b+o*n.b+.5,i.a=r*i.a+(1-r)*n.a,this.rgb=i}return this}interpolate(t,s){return t&&(this._rgb=lu(this._rgb,t._rgb,s)),this}clone(){return new Ys(this.rgb)}alpha(t){return this._rgb.a=ye(t),this}clearer(t){const s=this._rgb;return s.a*=1-t,this}greyscale(){const t=this._rgb,s=ci(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=s,this}opaquer(t){const s=this._rgb;return s.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return mi(this._rgb,2,t),this}darken(t){return mi(this._rgb,2,-t),this}saturate(t){return mi(this._rgb,1,t),this}desaturate(t){return mi(this._rgb,1,-t),this}rotate(t){return eu(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function ee(){}const du=(()=>{let e=0;return()=>e++})();function N(e){return e==null}function X(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function j(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Q(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Tt(e,t){return Q(e)?e:t}function E(e,t){return typeof e>"u"?t:e}const hu=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,qa=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function K(e,t,s){if(e&&typeof e.call=="function")return e.apply(s,t)}function U(e,t,s,i){let n,o,r;if(X(e))for(o=e.length,n=0;n<o;n++)t.call(s,e[n],n);else if(j(e))for(r=Object.keys(e),o=r.length,n=0;n<o;n++)t.call(s,e[r[n]],r[n])}function Ni(e,t){let s,i,n,o;if(!e||!t||e.length!==t.length)return!1;for(s=0,i=e.length;s<i;++s)if(n=e[s],o=t[s],n.datasetIndex!==o.datasetIndex||n.index!==o.index)return!1;return!0}function Fi(e){if(X(e))return e.map(Fi);if(j(e)){const t=Object.create(null),s=Object.keys(e),i=s.length;let n=0;for(;n<i;++n)t[s[n]]=Fi(e[s[n]]);return t}return e}function Ka(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function uu(e,t,s,i){if(!Ka(e))return;const n=t[e],o=s[e];j(n)&&j(o)?Gs(n,o,i):t[e]=Fi(o)}function Gs(e,t,s){const i=X(t)?t:[t],n=i.length;if(!j(e))return e;s=s||{};const o=s.merger||uu;let r;for(let a=0;a<n;++a){if(r=i[a],!j(r))continue;const l=Object.keys(r);for(let c=0,d=l.length;c<d;++c)o(l[c],e,r,s)}return e}function Bs(e,t){return Gs(e,t,{merger:pu})}function pu(e,t,s){if(!Ka(e))return;const i=t[e],n=s[e];j(i)&&j(n)?Bs(i,n):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Fi(n))}const ir={"":e=>e,x:e=>e.x,y:e=>e.y};function fu(e){const t=e.split("."),s=[];let i="";for(const n of t)i+=n,i.endsWith("\\")?i=i.slice(0,-1)+".":(s.push(i),i="");return s}function gu(e){const t=fu(e);return s=>{for(const i of t){if(i==="")break;s=s&&s[i]}return s}}function ke(e,t){return(ir[t]||(ir[t]=gu(t)))(e)}function bo(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Xs=e=>typeof e<"u",we=e=>typeof e=="function",nr=(e,t)=>{if(e.size!==t.size)return!1;for(const s of e)if(!t.has(s))return!1;return!0};function mu(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const V=Math.PI,Y=2*V,bu=Y+V,ji=Number.POSITIVE_INFINITY,xu=V/180,st=V/2,Pe=V/4,or=V*2/3,me=Math.log10,Yt=Math.sign;function Hs(e,t,s){return Math.abs(e-t)<s}function rr(e){const t=Math.round(e);e=Hs(e,t,e/1e3)?t:e;const s=Math.pow(10,Math.floor(me(e))),i=e/s;return(i<=1?1:i<=2?2:i<=5?5:10)*s}function yu(e){const t=[],s=Math.sqrt(e);let i;for(i=1;i<s;i++)e%i===0&&(t.push(i),t.push(e/i));return s===(s|0)&&t.push(s),t.sort((n,o)=>n-o).pop(),t}function vu(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function hs(e){return!vu(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function ku(e,t){const s=Math.round(e);return s-t<=e&&s+t>=e}function Ya(e,t,s){let i,n,o;for(i=0,n=e.length;i<n;i++)o=e[i][s],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function Bt(e){return e*(V/180)}function xo(e){return e*(180/V)}function ar(e){if(!Q(e))return;let t=1,s=0;for(;Math.round(e*t)/t!==e;)t*=10,s++;return s}function Ga(e,t){const s=t.x-e.x,i=t.y-e.y,n=Math.sqrt(s*s+i*i);let o=Math.atan2(i,s);return o<-.5*V&&(o+=Y),{angle:o,distance:n}}function zn(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function wu(e,t){return(e-t+bu)%Y-V}function gt(e){return(e%Y+Y)%Y}function Js(e,t,s,i){const n=gt(e),o=gt(t),r=gt(s),a=gt(o-n),l=gt(r-n),c=gt(n-o),d=gt(n-r);return n===o||n===r||i&&o===r||a>l&&c<d}function dt(e,t,s){return Math.max(t,Math.min(s,e))}function $u(e){return dt(e,-32768,32767)}function oe(e,t,s,i=1e-6){return e>=Math.min(t,s)-i&&e<=Math.max(t,s)+i}function yo(e,t,s){s=s||(r=>e[r]<t);let i=e.length-1,n=0,o;for(;i-n>1;)o=n+i>>1,s(o)?n=o:i=o;return{lo:n,hi:i}}const re=(e,t,s,i)=>yo(e,s,i?n=>{const o=e[n][t];return o<s||o===s&&e[n+1][t]===s}:n=>e[n][t]<s),_u=(e,t,s)=>yo(e,s,i=>e[i][t]>=s);function Su(e,t,s){let i=0,n=e.length;for(;i<n&&e[i]<t;)i++;for(;n>i&&e[n-1]>s;)n--;return i>0||n<e.length?e.slice(i,n):e}const Xa=["push","pop","shift","splice","unshift"];function Cu(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Xa.forEach(s=>{const i="_onData"+bo(s),n=e[s];Object.defineProperty(e,s,{configurable:!0,enumerable:!1,value(...o){const r=n.apply(this,o);return e._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...o)}),r}})})}function lr(e,t){const s=e._chartjs;if(!s)return;const i=s.listeners,n=i.indexOf(t);n!==-1&&i.splice(n,1),!(i.length>0)&&(Xa.forEach(o=>{delete e[o]}),delete e._chartjs)}function Ja(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const Za=(function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame})();function Qa(e,t){let s=[],i=!1;return function(...n){s=n,i||(i=!0,Za.call(window,()=>{i=!1,e.apply(t,s)}))}}function Pu(e,t){let s;return function(...i){return t?(clearTimeout(s),s=setTimeout(e,t,i)):e.apply(this,i),t}}const vo=e=>e==="start"?"left":e==="end"?"right":"center",ft=(e,t,s)=>e==="start"?t:e==="end"?s:(t+s)/2,Tu=(e,t,s,i)=>e===(i?"left":"right")?s:e==="center"?(t+s)/2:t;function tl(e,t,s){const i=t.length;let n=0,o=i;if(e._sorted){const{iScale:r,vScale:a,_parsed:l}=e,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,d=r.axis,{min:h,max:p,minDefined:f,maxDefined:g}=r.getUserBounds();if(f){if(n=Math.min(re(l,d,h).lo,s?i:re(t,d,r.getPixelForValue(h)).lo),c){const m=l.slice(0,n+1).reverse().findIndex(b=>!N(b[a.axis]));n-=Math.max(0,m)}n=dt(n,0,i-1)}if(g){let m=Math.max(re(l,r.axis,p,!0).hi+1,s?0:re(t,d,r.getPixelForValue(p),!0).hi+1);if(c){const b=l.slice(m-1).findIndex(y=>!N(y[a.axis]));m+=Math.max(0,b)}o=dt(m,n,i)-n}else o=i-n}return{start:n,count:o}}function el(e){const{xScale:t,yScale:s,_scaleRanges:i}=e,n={xmin:t.min,xmax:t.max,ymin:s.min,ymax:s.max};if(!i)return e._scaleRanges=n,!0;const o=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==s.min||i.ymax!==s.max;return Object.assign(i,n),o}const bi=e=>e===0||e===1,cr=(e,t,s)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Y/s)),dr=(e,t,s)=>Math.pow(2,-10*e)*Math.sin((e-t)*Y/s)+1,Vs={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*st)+1,easeOutSine:e=>Math.sin(e*st),easeInOutSine:e=>-.5*(Math.cos(V*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>bi(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>bi(e)?e:cr(e,.075,.3),easeOutElastic:e=>bi(e)?e:dr(e,.075,.3),easeInOutElastic(e){return bi(e)?e:e<.5?.5*cr(e*2,.1125,.45):.5+.5*dr(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Vs.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Vs.easeInBounce(e*2)*.5:Vs.easeOutBounce(e*2-1)*.5+.5};function ko(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function hr(e){return ko(e)?e:new Ys(e)}function mn(e){return ko(e)?e:new Ys(e).saturate(.5).darken(.1).hexString()}const Du=["x","y","borderWidth","radius","tension"],Mu=["color","borderColor","backgroundColor"];function Eu(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:Mu},numbers:{type:"number",properties:Du}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Ou(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const ur=new Map;function Au(e,t){t=t||{};const s=e+JSON.stringify(t);let i=ur.get(s);return i||(i=new Intl.NumberFormat(e,t),ur.set(s,i)),i}function di(e,t,s){return Au(t,s).format(e)}const sl={values(e){return X(e)?e:""+e},numeric(e,t,s){if(e===0)return"0";const i=this.chart.options.locale;let n,o=e;if(s.length>1){const c=Math.max(Math.abs(s[0].value),Math.abs(s[s.length-1].value));(c<1e-4||c>1e15)&&(n="scientific"),o=Iu(e,s)}const r=me(Math.abs(o)),a=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:n,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),di(e,i,l)},logarithmic(e,t,s){if(e===0)return"0";const i=s[t].significand||e/Math.pow(10,Math.floor(me(e)));return[1,2,3,5,10,15].includes(i)||t>.8*s.length?sl.numeric.call(this,e,t,s):""}};function Iu(e,t){let s=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(s)>=1&&e!==Math.floor(e)&&(s=e-Math.floor(e)),s}var tn={formatters:sl};function Ru(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,s)=>s.lineWidth,tickColor:(t,s)=>s.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:tn.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Ye=Object.create(null),Bn=Object.create(null);function Ws(e,t){if(!t)return e;const s=t.split(".");for(let i=0,n=s.length;i<n;++i){const o=s[i];e=e[o]||(e[o]=Object.create(null))}return e}function bn(e,t,s){return typeof t=="string"?Gs(Ws(e,t),s):Gs(Ws(e,""),t)}class Lu{constructor(t,s){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,n)=>mn(n.backgroundColor),this.hoverBorderColor=(i,n)=>mn(n.borderColor),this.hoverColor=(i,n)=>mn(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(s)}set(t,s){return bn(this,t,s)}get(t){return Ws(this,t)}describe(t,s){return bn(Bn,t,s)}override(t,s){return bn(Ye,t,s)}route(t,s,i,n){const o=Ws(this,t),r=Ws(this,i),a="_"+s;Object.defineProperties(o,{[a]:{value:o[s],writable:!0},[s]:{enumerable:!0,get(){const l=this[a],c=r[n];return j(l)?Object.assign({},c,l):E(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(s=>s(this))}}var J=new Lu({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Eu,Ou,Ru]);function Nu(e){return!e||N(e.size)||N(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function zi(e,t,s,i,n){let o=t[n];return o||(o=t[n]=e.measureText(n).width,s.push(n)),o>i&&(i=o),i}function Fu(e,t,s,i){i=i||{};let n=i.data=i.data||{},o=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(n=i.data={},o=i.garbageCollect=[],i.font=t),e.save(),e.font=t;let r=0;const a=s.length;let l,c,d,h,p;for(l=0;l<a;l++)if(h=s[l],h!=null&&!X(h))r=zi(e,n,o,r,h);else if(X(h))for(c=0,d=h.length;c<d;c++)p=h[c],p!=null&&!X(p)&&(r=zi(e,n,o,r,p));e.restore();const f=o.length/2;if(f>s.length){for(l=0;l<f;l++)delete n[o[l]];o.splice(0,f)}return r}function Te(e,t,s){const i=e.currentDevicePixelRatio,n=s!==0?Math.max(s/2,.5):0;return Math.round((t-n)*i)/i+n}function pr(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Hn(e,t,s,i){il(e,t,s,i,null)}function il(e,t,s,i,n){let o,r,a,l,c,d,h,p;const f=t.pointStyle,g=t.rotation,m=t.radius;let b=(g||0)*xu;if(f&&typeof f=="object"&&(o=f.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(s,i),e.rotate(b),e.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),e.restore();return}if(!(isNaN(m)||m<=0)){switch(e.beginPath(),f){default:n?e.ellipse(s,i,n/2,m,0,0,Y):e.arc(s,i,m,0,Y),e.closePath();break;case"triangle":d=n?n/2:m,e.moveTo(s+Math.sin(b)*d,i-Math.cos(b)*m),b+=or,e.lineTo(s+Math.sin(b)*d,i-Math.cos(b)*m),b+=or,e.lineTo(s+Math.sin(b)*d,i-Math.cos(b)*m),e.closePath();break;case"rectRounded":c=m*.516,l=m-c,r=Math.cos(b+Pe)*l,h=Math.cos(b+Pe)*(n?n/2-c:l),a=Math.sin(b+Pe)*l,p=Math.sin(b+Pe)*(n?n/2-c:l),e.arc(s-h,i-a,c,b-V,b-st),e.arc(s+p,i-r,c,b-st,b),e.arc(s+h,i+a,c,b,b+st),e.arc(s-p,i+r,c,b+st,b+V),e.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*m,d=n?n/2:l,e.rect(s-d,i-l,2*d,2*l);break}b+=Pe;case"rectRot":h=Math.cos(b)*(n?n/2:m),r=Math.cos(b)*m,a=Math.sin(b)*m,p=Math.sin(b)*(n?n/2:m),e.moveTo(s-h,i-a),e.lineTo(s+p,i-r),e.lineTo(s+h,i+a),e.lineTo(s-p,i+r),e.closePath();break;case"crossRot":b+=Pe;case"cross":h=Math.cos(b)*(n?n/2:m),r=Math.cos(b)*m,a=Math.sin(b)*m,p=Math.sin(b)*(n?n/2:m),e.moveTo(s-h,i-a),e.lineTo(s+h,i+a),e.moveTo(s+p,i-r),e.lineTo(s-p,i+r);break;case"star":h=Math.cos(b)*(n?n/2:m),r=Math.cos(b)*m,a=Math.sin(b)*m,p=Math.sin(b)*(n?n/2:m),e.moveTo(s-h,i-a),e.lineTo(s+h,i+a),e.moveTo(s+p,i-r),e.lineTo(s-p,i+r),b+=Pe,h=Math.cos(b)*(n?n/2:m),r=Math.cos(b)*m,a=Math.sin(b)*m,p=Math.sin(b)*(n?n/2:m),e.moveTo(s-h,i-a),e.lineTo(s+h,i+a),e.moveTo(s+p,i-r),e.lineTo(s-p,i+r);break;case"line":r=n?n/2:Math.cos(b)*m,a=Math.sin(b)*m,e.moveTo(s-r,i-a),e.lineTo(s+r,i+a);break;case"dash":e.moveTo(s,i),e.lineTo(s+Math.cos(b)*(n?n/2:m),i+Math.sin(b)*m);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function ae(e,t,s){return s=s||.5,!t||e&&e.x>t.left-s&&e.x<t.right+s&&e.y>t.top-s&&e.y<t.bottom+s}function en(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function sn(e){e.restore()}function ju(e,t,s,i,n){if(!t)return e.lineTo(s.x,s.y);if(n==="middle"){const o=(t.x+s.x)/2;e.lineTo(o,t.y),e.lineTo(o,s.y)}else n==="after"!=!!i?e.lineTo(t.x,s.y):e.lineTo(s.x,t.y);e.lineTo(s.x,s.y)}function zu(e,t,s,i){if(!t)return e.lineTo(s.x,s.y);e.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?s.cp2x:s.cp1x,i?s.cp2y:s.cp1y,s.x,s.y)}function Bu(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),N(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function Hu(e,t,s,i,n){if(n.strikethrough||n.underline){const o=e.measureText(i),r=t-o.actualBoundingBoxLeft,a=t+o.actualBoundingBoxRight,l=s-o.actualBoundingBoxAscent,c=s+o.actualBoundingBoxDescent,d=n.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=n.decorationWidth||2,e.moveTo(r,d),e.lineTo(a,d),e.stroke()}}function Vu(e,t){const s=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=s}function Ge(e,t,s,i,n,o={}){const r=X(t)?t:[t],a=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(e.save(),e.font=n.string,Bu(e,o),l=0;l<r.length;++l)c=r[l],o.backdrop&&Vu(e,o.backdrop),a&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),N(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(c,s,i,o.maxWidth)),e.fillText(c,s,i,o.maxWidth),Hu(e,s,i,c,o),i+=Number(n.lineHeight);e.restore()}function Zs(e,t){const{x:s,y:i,w:n,h:o,radius:r}=t;e.arc(s+r.topLeft,i+r.topLeft,r.topLeft,1.5*V,V,!0),e.lineTo(s,i+o-r.bottomLeft),e.arc(s+r.bottomLeft,i+o-r.bottomLeft,r.bottomLeft,V,st,!0),e.lineTo(s+n-r.bottomRight,i+o),e.arc(s+n-r.bottomRight,i+o-r.bottomRight,r.bottomRight,st,0,!0),e.lineTo(s+n,i+r.topRight),e.arc(s+n-r.topRight,i+r.topRight,r.topRight,0,-st,!0),e.lineTo(s+r.topLeft,i)}const Wu=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Uu=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function qu(e,t){const s=(""+e).match(Wu);if(!s||s[1]==="normal")return t*1.2;switch(e=+s[2],s[3]){case"px":return e;case"%":e/=100;break}return t*e}const Ku=e=>+e||0;function wo(e,t){const s={},i=j(t),n=i?Object.keys(t):t,o=j(e)?i?r=>E(e[r],e[t[r]]):r=>e[r]:()=>e;for(const r of n)s[r]=Ku(o(r));return s}function nl(e){return wo(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Re(e){return wo(e,["topLeft","topRight","bottomLeft","bottomRight"])}function yt(e){const t=nl(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function rt(e,t){e=e||{},t=t||J.font;let s=E(e.size,t.size);typeof s=="string"&&(s=parseInt(s,10));let i=E(e.style,t.style);i&&!(""+i).match(Uu)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const n={family:E(e.family,t.family),lineHeight:qu(E(e.lineHeight,t.lineHeight),s),size:s,style:i,weight:E(e.weight,t.weight),string:""};return n.string=Nu(n),n}function Fs(e,t,s,i){let n,o,r;for(n=0,o=e.length;n<o;++n)if(r=e[n],r!==void 0&&r!==void 0)return r}function Yu(e,t,s){const{min:i,max:n}=e,o=qa(t,(n-i)/2),r=(a,l)=>s&&a===0?0:a+l;return{min:r(i,-Math.abs(o)),max:r(n,o)}}function $e(e,t){return Object.assign(Object.create(e),t)}function $o(e,t=[""],s,i,n=()=>e[0]){const o=s||e;typeof i>"u"&&(i=ll("_fallback",e));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:i,_getTarget:n,override:a=>$o([a,...e],t,o,i)};return new Proxy(r,{deleteProperty(a,l){return delete a[l],delete a._keys,delete e[0][l],!0},get(a,l){return rl(a,l,()=>sp(l,t,e,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(a,l){return gr(a).includes(l)},ownKeys(a){return gr(a)},set(a,l,c){const d=a._storage||(a._storage=n());return a[l]=d[l]=c,delete a._keys,!0}})}function us(e,t,s,i){const n={_cacheable:!1,_proxy:e,_context:t,_subProxy:s,_stack:new Set,_descriptors:ol(e,i),setContext:o=>us(e,o,s,i),override:o=>us(e.override(o),t,s,i)};return new Proxy(n,{deleteProperty(o,r){return delete o[r],delete e[r],!0},get(o,r,a){return rl(o,r,()=>Xu(o,r,a))},getOwnPropertyDescriptor(o,r){return o._descriptors.allKeys?Reflect.has(e,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,r)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,r){return Reflect.has(e,r)},ownKeys(){return Reflect.ownKeys(e)},set(o,r,a){return e[r]=a,delete o[r],!0}})}function ol(e,t={scriptable:!0,indexable:!0}){const{_scriptable:s=t.scriptable,_indexable:i=t.indexable,_allKeys:n=t.allKeys}=e;return{allKeys:n,scriptable:s,indexable:i,isScriptable:we(s)?s:()=>s,isIndexable:we(i)?i:()=>i}}const Gu=(e,t)=>e?e+bo(t):t,_o=(e,t)=>j(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function rl(e,t,s){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const i=s();return e[t]=i,i}function Xu(e,t,s){const{_proxy:i,_context:n,_subProxy:o,_descriptors:r}=e;let a=i[t];return we(a)&&r.isScriptable(t)&&(a=Ju(t,a,e,s)),X(a)&&a.length&&(a=Zu(t,a,e,r.isIndexable)),_o(t,a)&&(a=us(a,n,o&&o[t],r)),a}function Ju(e,t,s,i){const{_proxy:n,_context:o,_subProxy:r,_stack:a}=s;if(a.has(e))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+e);a.add(e);let l=t(o,r||i);return a.delete(e),_o(e,l)&&(l=So(n._scopes,n,e,l)),l}function Zu(e,t,s,i){const{_proxy:n,_context:o,_subProxy:r,_descriptors:a}=s;if(typeof o.index<"u"&&i(e))return t[o.index%t.length];if(j(t[0])){const l=t,c=n._scopes.filter(d=>d!==l);t=[];for(const d of l){const h=So(c,n,e,d);t.push(us(h,o,r&&r[e],a))}}return t}function al(e,t,s){return we(e)?e(t,s):e}const Qu=(e,t)=>e===!0?t:typeof e=="string"?ke(t,e):void 0;function tp(e,t,s,i,n){for(const o of t){const r=Qu(s,o);if(r){e.add(r);const a=al(r._fallback,s,n);if(typeof a<"u"&&a!==s&&a!==i)return a}else if(r===!1&&typeof i<"u"&&s!==i)return null}return!1}function So(e,t,s,i){const n=t._rootScopes,o=al(t._fallback,s,i),r=[...e,...n],a=new Set;a.add(i);let l=fr(a,r,s,o||s,i);return l===null||typeof o<"u"&&o!==s&&(l=fr(a,r,o,l,i),l===null)?!1:$o(Array.from(a),[""],n,o,()=>ep(t,s,i))}function fr(e,t,s,i,n){for(;s;)s=tp(e,t,s,i,n);return s}function ep(e,t,s){const i=e._getTarget();t in i||(i[t]={});const n=i[t];return X(n)&&j(s)?s:n||{}}function sp(e,t,s,i){let n;for(const o of t)if(n=ll(Gu(o,e),s),typeof n<"u")return _o(e,n)?So(s,i,e,n):n}function ll(e,t){for(const s of t){if(!s)continue;const i=s[e];if(typeof i<"u")return i}}function gr(e){let t=e._keys;return t||(t=e._keys=ip(e._scopes)),t}function ip(e){const t=new Set;for(const s of e)for(const i of Object.keys(s).filter(n=>!n.startsWith("_")))t.add(i);return Array.from(t)}function cl(e,t,s,i){const{iScale:n}=e,{key:o="r"}=this._parsing,r=new Array(i);let a,l,c,d;for(a=0,l=i;a<l;++a)c=a+s,d=t[c],r[a]={r:n.parse(ke(d,o),c)};return r}const np=Number.EPSILON||1e-14,ps=(e,t)=>t<e.length&&!e[t].skip&&e[t],dl=e=>e==="x"?"y":"x";function op(e,t,s,i){const n=e.skip?t:e,o=t,r=s.skip?t:s,a=zn(o,n),l=zn(r,o);let c=a/(a+l),d=l/(a+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const h=i*c,p=i*d;return{previous:{x:o.x-h*(r.x-n.x),y:o.y-h*(r.y-n.y)},next:{x:o.x+p*(r.x-n.x),y:o.y+p*(r.y-n.y)}}}function rp(e,t,s){const i=e.length;let n,o,r,a,l,c=ps(e,0);for(let d=0;d<i-1;++d)if(l=c,c=ps(e,d+1),!(!l||!c)){if(Hs(t[d],0,np)){s[d]=s[d+1]=0;continue}n=s[d]/t[d],o=s[d+1]/t[d],a=Math.pow(n,2)+Math.pow(o,2),!(a<=9)&&(r=3/Math.sqrt(a),s[d]=n*r*t[d],s[d+1]=o*r*t[d])}}function ap(e,t,s="x"){const i=dl(s),n=e.length;let o,r,a,l=ps(e,0);for(let c=0;c<n;++c){if(r=a,a=l,l=ps(e,c+1),!a)continue;const d=a[s],h=a[i];r&&(o=(d-r[s])/3,a[`cp1${s}`]=d-o,a[`cp1${i}`]=h-o*t[c]),l&&(o=(l[s]-d)/3,a[`cp2${s}`]=d+o,a[`cp2${i}`]=h+o*t[c])}}function lp(e,t="x"){const s=dl(t),i=e.length,n=Array(i).fill(0),o=Array(i);let r,a,l,c=ps(e,0);for(r=0;r<i;++r)if(a=l,l=c,c=ps(e,r+1),!!l){if(c){const d=c[t]-l[t];n[r]=d!==0?(c[s]-l[s])/d:0}o[r]=a?c?Yt(n[r-1])!==Yt(n[r])?0:(n[r-1]+n[r])/2:n[r-1]:n[r]}rp(e,n,o),ap(e,o,t)}function xi(e,t,s){return Math.max(Math.min(e,s),t)}function cp(e,t){let s,i,n,o,r,a=ae(e[0],t);for(s=0,i=e.length;s<i;++s)r=o,o=a,a=s<i-1&&ae(e[s+1],t),o&&(n=e[s],r&&(n.cp1x=xi(n.cp1x,t.left,t.right),n.cp1y=xi(n.cp1y,t.top,t.bottom)),a&&(n.cp2x=xi(n.cp2x,t.left,t.right),n.cp2y=xi(n.cp2y,t.top,t.bottom)))}function dp(e,t,s,i,n){let o,r,a,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")lp(e,n);else{let c=i?e[e.length-1]:e[0];for(o=0,r=e.length;o<r;++o)a=e[o],l=op(c,a,e[Math.min(o+1,r-(i?0:1))%r],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&cp(e,s)}function Co(){return typeof window<"u"&&typeof document<"u"}function Po(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Bi(e,t,s){let i;return typeof e=="string"?(i=parseInt(e,10),e.indexOf("%")!==-1&&(i=i/100*t.parentNode[s])):i=e,i}const nn=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function hp(e,t){return nn(e).getPropertyValue(t)}const up=["top","right","bottom","left"];function Le(e,t,s){const i={};s=s?"-"+s:"";for(let n=0;n<4;n++){const o=up[n];i[o]=parseFloat(e[t+"-"+o+s])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const pp=(e,t,s)=>(e>0||t>0)&&(!s||!s.shadowRoot);function fp(e,t){const s=e.touches,i=s&&s.length?s[0]:e,{offsetX:n,offsetY:o}=i;let r=!1,a,l;if(pp(n,o,e.target))a=n,l=o;else{const c=t.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,r=!0}return{x:a,y:l,box:r}}function Ee(e,t){if("native"in e)return e;const{canvas:s,currentDevicePixelRatio:i}=t,n=nn(s),o=n.boxSizing==="border-box",r=Le(n,"padding"),a=Le(n,"border","width"),{x:l,y:c,box:d}=fp(e,s),h=r.left+(d&&a.left),p=r.top+(d&&a.top);let{width:f,height:g}=t;return o&&(f-=r.width+a.width,g-=r.height+a.height),{x:Math.round((l-h)/f*s.width/i),y:Math.round((c-p)/g*s.height/i)}}function gp(e,t,s){let i,n;if(t===void 0||s===void 0){const o=e&&Po(e);if(!o)t=e.clientWidth,s=e.clientHeight;else{const r=o.getBoundingClientRect(),a=nn(o),l=Le(a,"border","width"),c=Le(a,"padding");t=r.width-c.width-l.width,s=r.height-c.height-l.height,i=Bi(a.maxWidth,o,"clientWidth"),n=Bi(a.maxHeight,o,"clientHeight")}}return{width:t,height:s,maxWidth:i||ji,maxHeight:n||ji}}const be=e=>Math.round(e*10)/10;function mp(e,t,s,i){const n=nn(e),o=Le(n,"margin"),r=Bi(n.maxWidth,e,"clientWidth")||ji,a=Bi(n.maxHeight,e,"clientHeight")||ji,l=gp(e,t,s);let{width:c,height:d}=l;if(n.boxSizing==="content-box"){const p=Le(n,"border","width"),f=Le(n,"padding");c-=f.width+p.width,d-=f.height+p.height}return c=Math.max(0,c-o.width),d=Math.max(0,i?c/i:d-o.height),c=be(Math.min(c,r,l.maxWidth)),d=be(Math.min(d,a,l.maxHeight)),c&&!d&&(d=be(c/2)),(t!==void 0||s!==void 0)&&i&&l.height&&d>l.height&&(d=l.height,c=be(Math.floor(d*i))),{width:c,height:d}}function mr(e,t,s){const i=t||1,n=be(e.height*i),o=be(e.width*i);e.height=be(e.height),e.width=be(e.width);const r=e.canvas;return r.style&&(s||!r.style.height&&!r.style.width)&&(r.style.height=`${e.height}px`,r.style.width=`${e.width}px`),e.currentDevicePixelRatio!==i||r.height!==n||r.width!==o?(e.currentDevicePixelRatio=i,r.height=n,r.width=o,e.ctx.setTransform(i,0,0,i,0,0),!0):!1}const bp=(function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Co()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e})();function br(e,t){const s=hp(e,t),i=s&&s.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Oe(e,t,s,i){return{x:e.x+s*(t.x-e.x),y:e.y+s*(t.y-e.y)}}function xp(e,t,s,i){return{x:e.x+s*(t.x-e.x),y:i==="middle"?s<.5?e.y:t.y:i==="after"?s<1?e.y:t.y:s>0?t.y:e.y}}function yp(e,t,s,i){const n={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},r=Oe(e,n,s),a=Oe(n,o,s),l=Oe(o,t,s),c=Oe(r,a,s),d=Oe(a,l,s);return Oe(c,d,s)}const vp=function(e,t){return{x(s){return e+e+t-s},setWidth(s){t=s},textAlign(s){return s==="center"?s:s==="right"?"left":"right"},xPlus(s,i){return s-i},leftForLtr(s,i){return s-i}}},kp=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function rs(e,t,s){return e?vp(t,s):kp()}function hl(e,t){let s,i;(t==="ltr"||t==="rtl")&&(s=e.canvas.style,i=[s.getPropertyValue("direction"),s.getPropertyPriority("direction")],s.setProperty("direction",t,"important"),e.prevTextDirection=i)}function ul(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function pl(e){return e==="angle"?{between:Js,compare:wu,normalize:gt}:{between:oe,compare:(t,s)=>t-s,normalize:t=>t}}function xr({start:e,end:t,count:s,loop:i,style:n}){return{start:e%s,end:t%s,loop:i&&(t-e+1)%s===0,style:n}}function wp(e,t,s){const{property:i,start:n,end:o}=s,{between:r,normalize:a}=pl(i),l=t.length;let{start:c,end:d,loop:h}=e,p,f;if(h){for(c+=l,d+=l,p=0,f=l;p<f&&r(a(t[c%l][i]),n,o);++p)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:h,style:e.style}}function fl(e,t,s){if(!s)return[e];const{property:i,start:n,end:o}=s,r=t.length,{compare:a,between:l,normalize:c}=pl(i),{start:d,end:h,loop:p,style:f}=wp(e,t,s),g=[];let m=!1,b=null,y,v,S;const _=()=>l(n,S,y)&&a(n,S)!==0,$=()=>a(o,y)===0||l(o,S,y),P=()=>m||_(),T=()=>!m||$();for(let D=d,M=d;D<=h;++D)v=t[D%r],!v.skip&&(y=c(v[i]),y!==S&&(m=l(y,n,o),b===null&&P()&&(b=a(y,n)===0?D:M),b!==null&&T()&&(g.push(xr({start:b,end:D,loop:p,count:r,style:f})),b=null),M=D,S=y));return b!==null&&g.push(xr({start:b,end:h,loop:p,count:r,style:f})),g}function gl(e,t){const s=[],i=e.segments;for(let n=0;n<i.length;n++){const o=fl(i[n],e.points,t);o.length&&s.push(...o)}return s}function $p(e,t,s,i){let n=0,o=t-1;if(s&&!i)for(;n<t&&!e[n].skip;)n++;for(;n<t&&e[n].skip;)n++;for(n%=t,s&&(o+=n);o>n&&e[o%t].skip;)o--;return o%=t,{start:n,end:o}}function _p(e,t,s,i){const n=e.length,o=[];let r=t,a=e[t],l;for(l=t+1;l<=s;++l){const c=e[l%n];c.skip||c.stop?a.skip||(i=!1,o.push({start:t%n,end:(l-1)%n,loop:i}),t=r=c.stop?l:null):(r=l,a.skip&&(t=l)),a=c}return r!==null&&o.push({start:t%n,end:r%n,loop:i}),o}function Sp(e,t){const s=e.points,i=e.options.spanGaps,n=s.length;if(!n)return[];const o=!!e._loop,{start:r,end:a}=$p(s,n,o,i);if(i===!0)return yr(e,[{start:r,end:a,loop:o}],s,t);const l=a<r?a+n:a,c=!!e._fullLoop&&r===0&&a===n-1;return yr(e,_p(s,r,l,c),s,t)}function yr(e,t,s,i){return!i||!i.setContext||!s?t:Cp(e,t,s,i)}function Cp(e,t,s,i){const n=e._chart.getContext(),o=vr(e.options),{_datasetIndex:r,options:{spanGaps:a}}=e,l=s.length,c=[];let d=o,h=t[0].start,p=h;function f(g,m,b,y){const v=a?-1:1;if(g!==m){for(g+=l;s[g%l].skip;)g-=v;for(;s[m%l].skip;)m+=v;g%l!==m%l&&(c.push({start:g%l,end:m%l,loop:b,style:y}),d=y,h=m%l)}}for(const g of t){h=a?h:g.start;let m=s[h%l],b;for(p=h+1;p<=g.end;p++){const y=s[p%l];b=vr(i.setContext($e(n,{type:"segment",p0:m,p1:y,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:r}))),Pp(b,d)&&f(h,p-1,g.loop,d),m=y,d=b}h<p-1&&f(h,p-1,g.loop,d)}return c}function vr(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Pp(e,t){if(!t)return!1;const s=[],i=function(n,o){return ko(o)?(s.includes(o)||s.push(o),s.indexOf(o)):o};return JSON.stringify(e,i)!==JSON.stringify(t,i)}function yi(e,t,s){return e.options.clip?e[s]:t[s]}function Tp(e,t){const{xScale:s,yScale:i}=e;return s&&i?{left:yi(s,t,"left"),right:yi(s,t,"right"),top:yi(i,t,"top"),bottom:yi(i,t,"bottom")}:t}function ml(e,t){const s=t._clip;if(s.disabled)return!1;const i=Tp(t,e.chartArea);return{left:s.left===!1?0:i.left-(s.left===!0?0:s.left),right:s.right===!1?e.width:i.right+(s.right===!0?0:s.right),top:s.top===!1?0:i.top-(s.top===!0?0:s.top),bottom:s.bottom===!1?e.height:i.bottom+(s.bottom===!0?0:s.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class Dp{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,s,i,n){const o=s.listeners[n],r=s.duration;o.forEach(a=>a({chart:t,initial:s.initial,numSteps:r,currentStep:Math.min(i-s.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=Za.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let s=0;this._charts.forEach((i,n)=>{if(!i.running||!i.items.length)return;const o=i.items;let r=o.length-1,a=!1,l;for(;r>=0;--r)l=o[r],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(t),a=!0):(o[r]=o[o.length-1],o.pop());a&&(n.draw(),this._notify(n,i,t,"progress")),o.length||(i.running=!1,this._notify(n,i,t,"complete"),i.initial=!1),s+=o.length}),this._lastDate=t,s===0&&(this._running=!1)}_getAnims(t){const s=this._charts;let i=s.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},s.set(t,i)),i}listen(t,s,i){this._getAnims(t).listeners[s].push(i)}add(t,s){!s||!s.length||this._getAnims(t).items.push(...s)}has(t){return this._getAnims(t).items.length>0}start(t){const s=this._charts.get(t);s&&(s.running=!0,s.start=Date.now(),s.duration=s.items.reduce((i,n)=>Math.max(i,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const s=this._charts.get(t);return!(!s||!s.running||!s.items.length)}stop(t){const s=this._charts.get(t);if(!s||!s.items.length)return;const i=s.items;let n=i.length-1;for(;n>=0;--n)i[n].cancel();s.items=[],this._notify(t,s,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var se=new Dp;const kr="transparent",Mp={boolean(e,t,s){return s>.5?t:e},color(e,t,s){const i=hr(e||kr),n=i.valid&&hr(t||kr);return n&&n.valid?n.mix(i,s).hexString():t},number(e,t,s){return e+(t-e)*s}};class Ep{constructor(t,s,i,n){const o=s[i];n=Fs([t.to,n,o,t.from]);const r=Fs([t.from,o,n]);this._active=!0,this._fn=t.fn||Mp[t.type||typeof r],this._easing=Vs[t.easing]||Vs.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=s,this._prop=i,this._from=r,this._to=n,this._promises=void 0}active(){return this._active}update(t,s,i){if(this._active){this._notify(!1);const n=this._target[this._prop],o=i-this._start,r=this._duration-o;this._start=i,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Fs([t.to,s,n,t.from]),this._from=Fs([t.from,n,s])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const s=t-this._start,i=this._duration,n=this._prop,o=this._from,r=this._loop,a=this._to;let l;if(this._active=o!==a&&(r||s<i),!this._active){this._target[n]=a,this._notify(!0);return}if(s<0){this._target[n]=o;return}l=s/i%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(o,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((s,i)=>{t.push({res:s,rej:i})})}_notify(t){const s=t?"res":"rej",i=this._promises||[];for(let n=0;n<i.length;n++)i[n][s]()}}class bl{constructor(t,s){this._chart=t,this._properties=new Map,this.configure(s)}configure(t){if(!j(t))return;const s=Object.keys(J.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const o=t[n];if(!j(o))return;const r={};for(const a of s)r[a]=o[a];(X(o.properties)&&o.properties||[n]).forEach(a=>{(a===n||!i.has(a))&&i.set(a,r)})})}_animateOptions(t,s){const i=s.options,n=Ap(t,i);if(!n)return[];const o=this._createAnimations(n,i);return i.$shared&&Op(t.options.$animations,i).then(()=>{t.options=i},()=>{}),o}_createAnimations(t,s){const i=this._properties,n=[],o=t.$animations||(t.$animations={}),r=Object.keys(s),a=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){n.push(...this._animateOptions(t,s));continue}const d=s[c];let h=o[c];const p=i.get(c);if(h)if(p&&h.active()){h.update(p,d,a);continue}else h.cancel();if(!p||!p.duration){t[c]=d;continue}o[c]=h=new Ep(p,t,c,d),n.push(h)}return n}update(t,s){if(this._properties.size===0){Object.assign(t,s);return}const i=this._createAnimations(t,s);if(i.length)return se.add(this._chart,i),!0}}function Op(e,t){const s=[],i=Object.keys(t);for(let n=0;n<i.length;n++){const o=e[i[n]];o&&o.active()&&s.push(o.wait())}return Promise.all(s)}function Ap(e,t){if(!t)return;let s=e.options;if(!s){e.options=t;return}return s.$shared&&(e.options=s=Object.assign({},s,{$shared:!1,$animations:{}})),s}function wr(e,t){const s=e&&e.options||{},i=s.reverse,n=s.min===void 0?t:0,o=s.max===void 0?t:0;return{start:i?o:n,end:i?n:o}}function Ip(e,t,s){if(s===!1)return!1;const i=wr(e,s),n=wr(t,s);return{top:n.end,right:i.end,bottom:n.start,left:i.start}}function Rp(e){let t,s,i,n;return j(e)?(t=e.top,s=e.right,i=e.bottom,n=e.left):t=s=i=n=e,{top:t,right:s,bottom:i,left:n,disabled:e===!1}}function xl(e,t){const s=[],i=e._getSortedDatasetMetas(t);let n,o;for(n=0,o=i.length;n<o;++n)s.push(i[n].index);return s}function $r(e,t,s,i={}){const n=e.keys,o=i.mode==="single";let r,a,l,c;if(t===null)return;let d=!1;for(r=0,a=n.length;r<a;++r){if(l=+n[r],l===s){if(d=!0,i.all)continue;break}c=e.values[l],Q(c)&&(o||t===0||Yt(t)===Yt(c))&&(t+=c)}return!d&&!i.all?0:t}function Lp(e,t){const{iScale:s,vScale:i}=t,n=s.axis==="x"?"x":"y",o=i.axis==="x"?"x":"y",r=Object.keys(e),a=new Array(r.length);let l,c,d;for(l=0,c=r.length;l<c;++l)d=r[l],a[l]={[n]:d,[o]:e[d]};return a}function xn(e,t){const s=e&&e.options.stacked;return s||s===void 0&&t.stack!==void 0}function Np(e,t,s){return`${e.id}.${t.id}.${s.stack||s.type}`}function Fp(e){const{min:t,max:s,minDefined:i,maxDefined:n}=e.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:n?s:Number.POSITIVE_INFINITY}}function jp(e,t,s){const i=e[t]||(e[t]={});return i[s]||(i[s]={})}function _r(e,t,s,i){for(const n of t.getMatchingVisibleMetas(i).reverse()){const o=e[n.index];if(s&&o>0||!s&&o<0)return n.index}return null}function Sr(e,t){const{chart:s,_cachedMeta:i}=e,n=s._stacks||(s._stacks={}),{iScale:o,vScale:r,index:a}=i,l=o.axis,c=r.axis,d=Np(o,r,i),h=t.length;let p;for(let f=0;f<h;++f){const g=t[f],{[l]:m,[c]:b}=g,y=g._stacks||(g._stacks={});p=y[c]=jp(n,d,m),p[a]=b,p._top=_r(p,r,!0,i.type),p._bottom=_r(p,r,!1,i.type);const v=p._visualValues||(p._visualValues={});v[a]=b}}function yn(e,t){const s=e.scales;return Object.keys(s).filter(i=>s[i].axis===t).shift()}function zp(e,t){return $e(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Bp(e,t,s){return $e(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:s,index:t,mode:"default",type:"data"})}function Ts(e,t){const s=e.controller.index,i=e.vScale&&e.vScale.axis;if(i){t=t||e._parsed;for(const n of t){const o=n._stacks;if(!o||o[i]===void 0||o[i][s]===void 0)return;delete o[i][s],o[i]._visualValues!==void 0&&o[i]._visualValues[s]!==void 0&&delete o[i]._visualValues[s]}}}const vn=e=>e==="reset"||e==="none",Cr=(e,t)=>t?e:Object.assign({},e),Hp=(e,t,s)=>e&&!t.hidden&&t._stacked&&{keys:xl(s,!0),values:null};class _e{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,s){this.chart=t,this._ctx=t.ctx,this.index=s,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=xn(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Ts(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,s=this._cachedMeta,i=this.getDataset(),n=(h,p,f,g)=>h==="x"?p:h==="r"?g:f,o=s.xAxisID=E(i.xAxisID,yn(t,"x")),r=s.yAxisID=E(i.yAxisID,yn(t,"y")),a=s.rAxisID=E(i.rAxisID,yn(t,"r")),l=s.indexAxis,c=s.iAxisID=n(l,o,r,a),d=s.vAxisID=n(l,r,o,a);s.xScale=this.getScaleForId(o),s.yScale=this.getScaleForId(r),s.rScale=this.getScaleForId(a),s.iScale=this.getScaleForId(c),s.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const s=this._cachedMeta;return t===s.iScale?s.vScale:s.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&lr(this._data,this),t._stacked&&Ts(t)}_dataCheck(){const t=this.getDataset(),s=t.data||(t.data=[]),i=this._data;if(j(s)){const n=this._cachedMeta;this._data=Lp(s,n)}else if(i!==s){if(i){lr(i,this);const n=this._cachedMeta;Ts(n),n._parsed=[]}s&&Object.isExtensible(s)&&Cu(s,this),this._syncList=[],this._data=s}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const s=this._cachedMeta,i=this.getDataset();let n=!1;this._dataCheck();const o=s._stacked;s._stacked=xn(s.vScale,s),s.stack!==i.stack&&(n=!0,Ts(s),s.stack=i.stack),this._resyncElements(t),(n||o!==s._stacked)&&(Sr(this,s._parsed),s._stacked=xn(s.vScale,s))}configure(){const t=this.chart.config,s=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),s,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,s){const{_cachedMeta:i,_data:n}=this,{iScale:o,_stacked:r}=i,a=o.axis;let l=t===0&&s===n.length?!0:i._sorted,c=t>0&&i._parsed[t-1],d,h,p;if(this._parsing===!1)i._parsed=n,i._sorted=!0,p=n;else{X(n[t])?p=this.parseArrayData(i,n,t,s):j(n[t])?p=this.parseObjectData(i,n,t,s):p=this.parsePrimitiveData(i,n,t,s);const f=()=>h[a]===null||c&&h[a]<c[a];for(d=0;d<s;++d)i._parsed[d+t]=h=p[d],l&&(f()&&(l=!1),c=h);i._sorted=l}r&&Sr(this,p)}parsePrimitiveData(t,s,i,n){const{iScale:o,vScale:r}=t,a=o.axis,l=r.axis,c=o.getLabels(),d=o===r,h=new Array(n);let p,f,g;for(p=0,f=n;p<f;++p)g=p+i,h[p]={[a]:d||o.parse(c[g],g),[l]:r.parse(s[g],g)};return h}parseArrayData(t,s,i,n){const{xScale:o,yScale:r}=t,a=new Array(n);let l,c,d,h;for(l=0,c=n;l<c;++l)d=l+i,h=s[d],a[l]={x:o.parse(h[0],d),y:r.parse(h[1],d)};return a}parseObjectData(t,s,i,n){const{xScale:o,yScale:r}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(n);let d,h,p,f;for(d=0,h=n;d<h;++d)p=d+i,f=s[p],c[d]={x:o.parse(ke(f,a),p),y:r.parse(ke(f,l),p)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,s,i){const n=this.chart,o=this._cachedMeta,r=s[t.axis],a={keys:xl(n,!0),values:s._stacks[t.axis]._visualValues};return $r(a,r,o.index,{mode:i})}updateRangeFromParsed(t,s,i,n){const o=i[s.axis];let r=o===null?NaN:o;const a=n&&i._stacks[s.axis];n&&a&&(n.values=a,r=$r(n,o,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,s){const i=this._cachedMeta,n=i._parsed,o=i._sorted&&t===i.iScale,r=n.length,a=this._getOtherScale(t),l=Hp(s,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=Fp(a);let p,f;function g(){f=n[p];const m=f[a.axis];return!Q(f[t.axis])||d>m||h<m}for(p=0;p<r&&!(!g()&&(this.updateRangeFromParsed(c,t,f,l),o));++p);if(o){for(p=r-1;p>=0;--p)if(!g()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const s=this._cachedMeta._parsed,i=[];let n,o,r;for(n=0,o=s.length;n<o;++n)r=s[n][t.axis],Q(r)&&i.push(r);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const s=this._cachedMeta,i=s.iScale,n=s.vScale,o=this.getParsed(t);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:n?""+n.getLabelForValue(o[n.axis]):""}}_update(t){const s=this._cachedMeta;this.update(t||"default"),s._clip=Rp(E(this.options.clip,Ip(s.xScale,s.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,s=this.chart,i=this._cachedMeta,n=i.data||[],o=s.chartArea,r=[],a=this._drawStart||0,l=this._drawCount||n.length-a,c=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(t,o,a,l),d=a;d<a+l;++d){const h=n[d];h.hidden||(h.active&&c?r.push(h):h.draw(t,o))}for(d=0;d<r.length;++d)r[d].draw(t,o)}getStyle(t,s){const i=s?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,s,i){const n=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];o=r.$context||(r.$context=Bp(this.getContext(),t,r)),o.parsed=this.getParsed(t),o.raw=n.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=zp(this.chart.getContext(),this.index)),o.dataset=n,o.index=o.datasetIndex=this.index;return o.active=!!s,o.mode=i,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,s){return this._resolveElementOptions(this.dataElementType.id,s,t)}_resolveElementOptions(t,s="default",i){const n=s==="active",o=this._cachedDataOpts,r=t+"-"+s,a=o[r],l=this.enableOptionSharing&&Xs(i);if(a)return Cr(a,l);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,t),h=n?[`${t}Hover`,"hover",t,""]:[t,""],p=c.getOptionScopes(this.getDataset(),d),f=Object.keys(J.elements[t]),g=()=>this.getContext(i,n,s),m=c.resolveNamedOptions(p,f,g,h);return m.$shared&&(m.$shared=l,o[r]=Object.freeze(Cr(m,l))),m}_resolveAnimations(t,s,i){const n=this.chart,o=this._cachedDataOpts,r=`animation-${s}`,a=o[r];if(a)return a;let l;if(n.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,s),p=d.getOptionScopes(this.getDataset(),h);l=d.createResolver(p,this.getContext(t,i,s))}const c=new bl(n,l&&l.animations);return l&&l._cacheable&&(o[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,s){return!s||vn(t)||this.chart._animationsDisabled}_getSharedOptions(t,s){const i=this.resolveDataElementOptions(t,s),n=this._sharedOptions,o=this.getSharedOptions(i),r=this.includeOptions(s,o)||o!==n;return this.updateSharedOptions(o,s,i),{sharedOptions:o,includeOptions:r}}updateElement(t,s,i,n){vn(n)?Object.assign(t,i):this._resolveAnimations(s,n).update(t,i)}updateSharedOptions(t,s,i){t&&!vn(s)&&this._resolveAnimations(void 0,s).update(t,i)}_setStyle(t,s,i,n){t.active=n;const o=this.getStyle(s,n);this._resolveAnimations(s,i,n).update(t,{options:!n&&this.getSharedOptions(o)||o})}removeHoverStyle(t,s,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,s,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const s=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const n=i.length,o=s.length,r=Math.min(o,n);r&&this.parse(0,r),o>n?this._insertElements(n,o-n,t):o<n&&this._removeElements(o,n-o)}_insertElements(t,s,i=!0){const n=this._cachedMeta,o=n.data,r=t+s;let a;const l=c=>{for(c.length+=s,a=c.length-1;a>=r;a--)c[a]=c[a-s]};for(l(o),a=t;a<r;++a)o[a]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,s),i&&this.updateElements(o,t,s,"reset")}updateElements(t,s,i,n){}_removeElements(t,s){const i=this._cachedMeta;if(this._parsing){const n=i._parsed.splice(t,s);i._stacked&&Ts(i,n)}i.data.splice(t,s)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[s,i,n]=t;this[s](i,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,s){s&&this._sync(["_removeElements",t,s]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function Vp(e,t){if(!e._cache.$bar){const s=e.getMatchingVisibleMetas(t);let i=[];for(let n=0,o=s.length;n<o;n++)i=i.concat(s[n].controller.getAllParsedValues(e));e._cache.$bar=Ja(i.sort((n,o)=>n-o))}return e._cache.$bar}function Wp(e){const t=e.iScale,s=Vp(t,e.type);let i=t._length,n,o,r,a;const l=()=>{r===32767||r===-32768||(Xs(a)&&(i=Math.min(i,Math.abs(r-a)||i)),a=r)};for(n=0,o=s.length;n<o;++n)r=t.getPixelForValue(s[n]),l();for(a=void 0,n=0,o=t.ticks.length;n<o;++n)r=t.getPixelForTick(n),l();return i}function Up(e,t,s,i){const n=s.barThickness;let o,r;return N(n)?(o=t.min*s.categoryPercentage,r=s.barPercentage):(o=n*i,r=1),{chunk:o/i,ratio:r,start:t.pixels[e]-o/2}}function qp(e,t,s,i){const n=t.pixels,o=n[e];let r=e>0?n[e-1]:null,a=e<n.length-1?n[e+1]:null;const l=s.categoryPercentage;r===null&&(r=o-(a===null?t.end-t.start:a-o)),a===null&&(a=o+o-r);const c=o-(o-Math.min(r,a))/2*l;return{chunk:Math.abs(a-r)/2*l/i,ratio:s.barPercentage,start:c}}function Kp(e,t,s,i){const n=s.parse(e[0],i),o=s.parse(e[1],i),r=Math.min(n,o),a=Math.max(n,o);let l=r,c=a;Math.abs(r)>Math.abs(a)&&(l=a,c=r),t[s.axis]=c,t._custom={barStart:l,barEnd:c,start:n,end:o,min:r,max:a}}function yl(e,t,s,i){return X(e)?Kp(e,t,s,i):t[s.axis]=s.parse(e,i),t}function Pr(e,t,s,i){const n=e.iScale,o=e.vScale,r=n.getLabels(),a=n===o,l=[];let c,d,h,p;for(c=s,d=s+i;c<d;++c)p=t[c],h={},h[n.axis]=a||n.parse(r[c],c),l.push(yl(p,h,o,c));return l}function kn(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Yp(e,t,s){return e!==0?Yt(e):(t.isHorizontal()?1:-1)*(t.min>=s?1:-1)}function Gp(e){let t,s,i,n,o;return e.horizontal?(t=e.base>e.x,s="left",i="right"):(t=e.base<e.y,s="bottom",i="top"),t?(n="end",o="start"):(n="start",o="end"),{start:s,end:i,reverse:t,top:n,bottom:o}}function Xp(e,t,s,i){let n=t.borderSkipped;const o={};if(!n){e.borderSkipped=o;return}if(n===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:a,reverse:l,top:c,bottom:d}=Gp(e);n==="middle"&&s&&(e.enableBorderRadius=!0,(s._top||0)===i?n=c:(s._bottom||0)===i?n=d:(o[Tr(d,r,a,l)]=!0,n=c)),o[Tr(n,r,a,l)]=!0,e.borderSkipped=o}function Tr(e,t,s,i){return i?(e=Jp(e,t,s),e=Dr(e,s,t)):e=Dr(e,t,s),e}function Jp(e,t,s){return e===t?s:e===s?t:e}function Dr(e,t,s){return e==="start"?t:e==="end"?s:e}function Zp(e,{inflateAmount:t},s){e.inflateAmount=t==="auto"?s===1?.33:0:t}class Qp extends _e{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,s,i,n){return Pr(t,s,i,n)}parseArrayData(t,s,i,n){return Pr(t,s,i,n)}parseObjectData(t,s,i,n){const{iScale:o,vScale:r}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=o.axis==="x"?a:l,d=r.axis==="x"?a:l,h=[];let p,f,g,m;for(p=i,f=i+n;p<f;++p)m=s[p],g={},g[o.axis]=o.parse(ke(m,c),p),h.push(yl(ke(m,d),g,r,p));return h}updateRangeFromParsed(t,s,i,n){super.updateRangeFromParsed(t,s,i,n);const o=i._custom;o&&s===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const s=this._cachedMeta,{iScale:i,vScale:n}=s,o=this.getParsed(t),r=o._custom,a=kn(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(o[n.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const s=this._cachedMeta;this.updateElements(s.data,0,s.data.length,t)}updateElements(t,s,i,n){const o=n==="reset",{index:r,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:p}=this._getSharedOptions(s,n);for(let f=s;f<s+i;f++){const g=this.getParsed(f),m=o||N(g[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),b=this._calculateBarIndexPixels(f,d),y=(g._stacks||{})[a.axis],v={horizontal:c,base:m.base,enableBorderRadius:!y||kn(g._custom)||r===y._top||r===y._bottom,x:c?m.head:b.center,y:c?b.center:m.head,height:c?b.size:Math.abs(m.size),width:c?Math.abs(m.size):b.size};p&&(v.options=h||this.resolveDataElementOptions(f,t[f].active?"active":n));const S=v.options||t[f].options;Xp(v,S,y,r),Zp(v,S,d.ratio),this.updateElement(t[f],f,v,n)}}_getStacks(t,s){const{iScale:i}=this._cachedMeta,n=i.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),o=i.options.stacked,r=[],a=this._cachedMeta.controller.getParsed(s),l=a&&a[i.axis],c=d=>{const h=d._parsed.find(f=>f[i.axis]===l),p=h&&h[d.vScale.axis];if(N(p)||isNaN(p))return!0};for(const d of n)if(!(s!==void 0&&c(d))&&((o===!1||r.indexOf(d.stack)===-1||o===void 0&&d.stack===void 0)&&r.push(d.stack),d.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,s=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===s).shift()}_getAxis(){const t={},s=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[E(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,s)]=!0;return Object.keys(t)}_getStackIndex(t,s,i){const n=this._getStacks(t,i),o=s!==void 0?n.indexOf(s):-1;return o===-1?n.length-1:o}_getRuler(){const t=this.options,s=this._cachedMeta,i=s.iScale,n=[];let o,r;for(o=0,r=s.data.length;o<r;++o)n.push(i.getPixelForValue(this.getParsed(o)[i.axis],o));const a=t.barThickness;return{min:a||Wp(s),pixels:n,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:s,_stacked:i,index:n},options:{base:o,minBarLength:r}}=this,a=o||0,l=this.getParsed(t),c=l._custom,d=kn(c);let h=l[s.axis],p=0,f=i?this.applyStack(s,l,i):h,g,m;f!==h&&(p=f-h,f=h),d&&(h=c.barStart,f=c.barEnd-c.barStart,h!==0&&Yt(h)!==Yt(c.barEnd)&&(p=0),p+=h);const b=!N(o)&&!d?o:p;let y=s.getPixelForValue(b);if(this.chart.getDataVisibility(t)?g=s.getPixelForValue(p+f):g=y,m=g-y,Math.abs(m)<r){m=Yp(m,s,a)*r,h===a&&(y-=m/2);const v=s.getPixelForDecimal(0),S=s.getPixelForDecimal(1),_=Math.min(v,S),$=Math.max(v,S);y=Math.max(Math.min(y,$),_),g=y+m,i&&!d&&(l._stacks[s.axis]._visualValues[n]=s.getValueForPixel(g)-s.getValueForPixel(y))}if(y===s.getPixelForValue(a)){const v=Yt(m)*s.getLineWidthForValue(a)/2;y+=v,m-=v}return{size:m,base:y,head:g,center:g+m/2}}_calculateBarIndexPixels(t,s){const i=s.scale,n=this.options,o=n.skipNull,r=E(n.maxBarThickness,1/0);let a,l;const c=this._getAxisCount();if(s.grouped){const d=o?this._getStackCount(t):s.stackCount,h=n.barThickness==="flex"?qp(t,s,n,d*c):Up(t,s,n,d*c),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(E(p,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+f;a=h.start+h.chunk*g+h.chunk/2,l=Math.min(r,h.chunk*h.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),l=Math.min(r,s.min*s.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,s=t.vScale,i=t.data,n=i.length;let o=0;for(;o<n;++o)this.getParsed(o)[s.axis]!==null&&!i[o].hidden&&i[o].draw(this._ctx)}}class tf extends _e{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,s,i,n){const o=super.parsePrimitiveData(t,s,i,n);for(let r=0;r<o.length;r++)o[r]._custom=this.resolveDataElementOptions(r+i).radius;return o}parseArrayData(t,s,i,n){const o=super.parseArrayData(t,s,i,n);for(let r=0;r<o.length;r++){const a=s[i+r];o[r]._custom=E(a[2],this.resolveDataElementOptions(r+i).radius)}return o}parseObjectData(t,s,i,n){const o=super.parseObjectData(t,s,i,n);for(let r=0;r<o.length;r++){const a=s[i+r];o[r]._custom=E(a&&a.r&&+a.r,this.resolveDataElementOptions(r+i).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let s=0;for(let i=t.length-1;i>=0;--i)s=Math.max(s,t[i].size(this.resolveDataElementOptions(i))/2);return s>0&&s}getLabelAndValue(t){const s=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:o}=s,r=this.getParsed(t),a=n.getLabelForValue(r.x),l=o.getLabelForValue(r.y),c=r._custom;return{label:i[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const s=this._cachedMeta.data;this.updateElements(s,0,s.length,t)}updateElements(t,s,i,n){const o=n==="reset",{iScale:r,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(s,n),d=r.axis,h=a.axis;for(let p=s;p<s+i;p++){const f=t[p],g=!o&&this.getParsed(p),m={},b=m[d]=o?r.getPixelForDecimal(.5):r.getPixelForValue(g[d]),y=m[h]=o?a.getBasePixel():a.getPixelForValue(g[h]);m.skip=isNaN(b)||isNaN(y),c&&(m.options=l||this.resolveDataElementOptions(p,f.active?"active":n),o&&(m.options.radius=0)),this.updateElement(f,p,m,n)}}resolveDataElementOptions(t,s){const i=this.getParsed(t);let n=super.resolveDataElementOptions(t,s);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const o=n.radius;return s!=="active"&&(n.radius=0),n.radius+=E(i&&i._custom,o),n}}function ef(e,t,s){let i=1,n=1,o=0,r=0;if(t<Y){const a=e,l=a+t,c=Math.cos(a),d=Math.sin(a),h=Math.cos(l),p=Math.sin(l),f=(S,_,$)=>Js(S,a,l,!0)?1:Math.max(_,_*s,$,$*s),g=(S,_,$)=>Js(S,a,l,!0)?-1:Math.min(_,_*s,$,$*s),m=f(0,c,h),b=f(st,d,p),y=g(V,c,h),v=g(V+st,d,p);i=(m-y)/2,n=(b-v)/2,o=-(m+y)/2,r=-(b+v)/2}return{ratioX:i,ratioY:n,offsetX:o,offsetY:r}}class To extends _e{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const s=t.data,{labels:{pointStyle:i,textAlign:n,color:o,useBorderRadius:r,borderRadius:a}}=t.legend.options;return s.labels.length&&s.datasets.length?s.labels.map((l,c)=>{const h=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:h.backgroundColor,fontColor:o,hidden:!t.getDataVisibility(c),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:n,pointStyle:i,borderRadius:r&&(a||h.borderRadius),index:c}}):[]}},onClick(t,s,i){i.chart.toggleDataVisibility(s.index),i.chart.update()}}}};constructor(t,s){super(t,s),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,s){const i=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=i;else{let o=l=>+i[l];if(j(i[t])){const{key:l="value"}=this._parsing;o=c=>+ke(i[c],l)}let r,a;for(r=t,a=t+s;r<a;++r)n._parsed[r]=o(r)}}_getRotation(){return Bt(this.options.rotation-90)}_getCircumference(){return Bt(this.options.circumference)}_getRotationExtents(){let t=Y,s=-Y;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const n=this.chart.getDatasetMeta(i).controller,o=n._getRotation(),r=n._getCircumference();t=Math.min(t,o),s=Math.max(s,o+r)}return{rotation:t,circumference:s-t}}update(t){const s=this.chart,{chartArea:i}=s,n=this._cachedMeta,o=n.data,r=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-r)/2,0),l=Math.min(hu(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:p,ratioY:f,offsetX:g,offsetY:m}=ef(h,d,l),b=(i.width-r)/p,y=(i.height-r)/f,v=Math.max(Math.min(b,y)/2,0),S=qa(this.options.radius,v),_=Math.max(S*l,0),$=(S-_)/this._getVisibleDatasetWeightTotal();this.offsetX=g*S,this.offsetY=m*S,n.total=this.calculateTotal(),this.outerRadius=S-$*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-$*c,0),this.updateElements(o,0,o.length,t)}_circumference(t,s){const i=this.options,n=this._cachedMeta,o=this._getCircumference();return s&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*o/Y)}updateElements(t,s,i,n){const o=n==="reset",r=this.chart,a=r.chartArea,c=r.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,p=o&&c.animateScale,f=p?0:this.innerRadius,g=p?0:this.outerRadius,{sharedOptions:m,includeOptions:b}=this._getSharedOptions(s,n);let y=this._getRotation(),v;for(v=0;v<s;++v)y+=this._circumference(v,o);for(v=s;v<s+i;++v){const S=this._circumference(v,o),_=t[v],$={x:d+this.offsetX,y:h+this.offsetY,startAngle:y,endAngle:y+S,circumference:S,outerRadius:g,innerRadius:f};b&&($.options=m||this.resolveDataElementOptions(v,_.active?"active":n)),y+=S,this.updateElement(_,v,$,n)}}calculateTotal(){const t=this._cachedMeta,s=t.data;let i=0,n;for(n=0;n<s.length;n++){const o=t._parsed[n];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(n)&&!s[n].hidden&&(i+=Math.abs(o))}return i}calculateCircumference(t){const s=this._cachedMeta.total;return s>0&&!isNaN(t)?Y*(Math.abs(t)/s):0}getLabelAndValue(t){const s=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=di(s._parsed[t],i.options.locale);return{label:n[t]||"",value:o}}getMaxBorderWidth(t){let s=0;const i=this.chart;let n,o,r,a,l;if(!t){for(n=0,o=i.data.datasets.length;n<o;++n)if(i.isDatasetVisible(n)){r=i.getDatasetMeta(n),t=r.data,a=r.controller;break}}if(!t)return 0;for(n=0,o=t.length;n<o;++n)l=a.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(s=Math.max(s,l.borderWidth||0,l.hoverBorderWidth||0));return s}getMaxOffset(t){let s=0;for(let i=0,n=t.length;i<n;++i){const o=this.resolveDataElementOptions(i);s=Math.max(s,o.offset||0,o.hoverOffset||0)}return s}_getRingWeightOffset(t){let s=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(s+=this._getRingWeight(i));return s}_getRingWeight(t){return Math.max(E(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class sf extends _e{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const s=this._cachedMeta,{dataset:i,data:n=[],_dataset:o}=s,r=this.chart._animationsDisabled;let{start:a,count:l}=tl(s,n,r);this._drawStart=a,this._drawCount=l,el(s)&&(a=0,l=n.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!o._decimated,i.points=n;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:c},t),this.updateElements(n,a,l,t)}updateElements(t,s,i,n){const o=n==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(s,n),p=r.axis,f=a.axis,{spanGaps:g,segment:m}=this.options,b=hs(g)?g:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||o||n==="none",v=s+i,S=t.length;let _=s>0&&this.getParsed(s-1);for(let $=0;$<S;++$){const P=t[$],T=y?P:{};if($<s||$>=v){T.skip=!0;continue}const D=this.getParsed($),M=N(D[f]),I=T[p]=r.getPixelForValue(D[p],$),R=T[f]=o||M?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,D,l):D[f],$);T.skip=isNaN(I)||isNaN(R)||M,T.stop=$>0&&Math.abs(D[p]-_[p])>b,m&&(T.parsed=D,T.raw=c.data[$]),h&&(T.options=d||this.resolveDataElementOptions($,P.active?"active":n)),y||this.updateElement(P,$,T,n),_=D}}getMaxOverflow(){const t=this._cachedMeta,s=t.dataset,i=s.options&&s.options.borderWidth||0,n=t.data||[];if(!n.length)return i;const o=n[0].size(this.resolveDataElementOptions(0)),r=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,o,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}class vl extends _e{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const s=t.data;if(s.labels.length&&s.datasets.length){const{labels:{pointStyle:i,color:n}}=t.legend.options;return s.labels.map((o,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,s,i){i.chart.toggleDataVisibility(s.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,s){super(t,s),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const s=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=di(s._parsed[t].r,i.options.locale);return{label:n[t]||"",value:o}}parseObjectData(t,s,i,n){return cl.bind(this)(t,s,i,n)}update(t){const s=this._cachedMeta.data;this._updateRadius(),this.updateElements(s,0,s.length,t)}getMinMax(){const t=this._cachedMeta,s={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,n)=>{const o=this.getParsed(n).r;!isNaN(o)&&this.chart.getDataVisibility(n)&&(o<s.min&&(s.min=o),o>s.max&&(s.max=o))}),s}_updateRadius(){const t=this.chart,s=t.chartArea,i=t.options,n=Math.min(s.right-s.left,s.bottom-s.top),o=Math.max(n/2,0),r=Math.max(i.cutoutPercentage?o/100*i.cutoutPercentage:1,0),a=(o-r)/t.getVisibleDatasetCount();this.outerRadius=o-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,s,i,n){const o=n==="reset",r=this.chart,l=r.options.animation,c=this._cachedMeta.rScale,d=c.xCenter,h=c.yCenter,p=c.getIndexAngle(0)-.5*V;let f=p,g;const m=360/this.countVisibleElements();for(g=0;g<s;++g)f+=this._computeAngle(g,n,m);for(g=s;g<s+i;g++){const b=t[g];let y=f,v=f+this._computeAngle(g,n,m),S=r.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;f=v,o&&(l.animateScale&&(S=0),l.animateRotate&&(y=v=p));const _={x:d,y:h,innerRadius:0,outerRadius:S,startAngle:y,endAngle:v,options:this.resolveDataElementOptions(g,b.active?"active":n)};this.updateElement(b,g,_,n)}}countVisibleElements(){const t=this._cachedMeta;let s=0;return t.data.forEach((i,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&s++}),s}_computeAngle(t,s,i){return this.chart.getDataVisibility(t)?Bt(this.resolveDataElementOptions(t,s).angle||i):0}}class nf extends To{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}class of extends _e{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){const s=this._cachedMeta.vScale,i=this.getParsed(t);return{label:s.getLabels()[t],value:""+s.getLabelForValue(i[s.axis])}}parseObjectData(t,s,i,n){return cl.bind(this)(t,s,i,n)}update(t){const s=this._cachedMeta,i=s.dataset,n=s.data||[],o=s.iScale.getLabels();if(i.points=n,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const a={_loop:!0,_fullLoop:o.length===n.length,options:r};this.updateElement(i,void 0,a,t)}this.updateElements(n,0,n.length,t)}updateElements(t,s,i,n){const o=this._cachedMeta.rScale,r=n==="reset";for(let a=s;a<s+i;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":n),d=o.getPointPositionForValue(a,this.getParsed(a).r),h=r?o.xCenter:d.x,p=r?o.yCenter:d.y,f={x:h,y:p,angle:d.angle,skip:isNaN(h)||isNaN(p),options:c};this.updateElement(l,a,f,n)}}}class rf extends _e{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){const s=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:o}=s,r=this.getParsed(t),a=n.getLabelForValue(r.x),l=o.getLabelForValue(r.y);return{label:i[t]||"",value:"("+a+", "+l+")"}}update(t){const s=this._cachedMeta,{data:i=[]}=s,n=this.chart._animationsDisabled;let{start:o,count:r}=tl(s,i,n);if(this._drawStart=o,this._drawCount=r,el(s)&&(o=0,r=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=s;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=i;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!n,options:c},t)}else this.datasetElementType&&(delete s.dataset,this.datasetElementType=!1);this.updateElements(i,o,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,s,i,n){const o=n==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,d=this.resolveDataElementOptions(s,n),h=this.getSharedOptions(d),p=this.includeOptions(n,h),f=r.axis,g=a.axis,{spanGaps:m,segment:b}=this.options,y=hs(m)?m:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||o||n==="none";let S=s>0&&this.getParsed(s-1);for(let _=s;_<s+i;++_){const $=t[_],P=this.getParsed(_),T=v?$:{},D=N(P[g]),M=T[f]=r.getPixelForValue(P[f],_),I=T[g]=o||D?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,P,l):P[g],_);T.skip=isNaN(M)||isNaN(I)||D,T.stop=_>0&&Math.abs(P[f]-S[f])>y,b&&(T.parsed=P,T.raw=c.data[_]),p&&(T.options=h||this.resolveDataElementOptions(_,$.active?"active":n)),v||this.updateElement($,_,T,n),S=P}this.updateSharedOptions(h,n,d)}getMaxOverflow(){const t=this._cachedMeta,s=t.data||[];if(!this.options.showLine){let a=0;for(let l=s.length-1;l>=0;--l)a=Math.max(a,s[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const i=t.dataset,n=i.options&&i.options.borderWidth||0;if(!s.length)return n;const o=s[0].size(this.resolveDataElementOptions(0)),r=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(n,o,r)/2}}var af=Object.freeze({__proto__:null,BarController:Qp,BubbleController:tf,DoughnutController:To,LineController:sf,PieController:nf,PolarAreaController:vl,RadarController:of,ScatterController:rf});function De(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Do{static override(t){Object.assign(Do.prototype,t)}options;constructor(t){this.options=t||{}}init(){}formats(){return De()}parse(){return De()}format(){return De()}add(){return De()}diff(){return De()}startOf(){return De()}endOf(){return De()}}var lf={_date:Do};function cf(e,t,s,i){const{controller:n,data:o,_sorted:r}=e,a=n._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&r&&o.length){const c=a._reversePixels?_u:re;if(i){if(n._sharedOptions){const d=o[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const p=c(o,t,s-h),f=c(o,t,s+h);return{lo:p.lo,hi:f.hi}}}}else{const d=c(o,t,s);if(l){const{vScale:h}=n._cachedMeta,{_parsed:p}=e,f=p.slice(0,d.lo+1).reverse().findIndex(m=>!N(m[h.axis]));d.lo-=Math.max(0,f);const g=p.slice(d.hi).findIndex(m=>!N(m[h.axis]));d.hi+=Math.max(0,g)}return d}}return{lo:0,hi:o.length-1}}function on(e,t,s,i,n){const o=e.getSortedVisibleDatasetMetas(),r=s[t];for(let a=0,l=o.length;a<l;++a){const{index:c,data:d}=o[a],{lo:h,hi:p}=cf(o[a],t,r,n);for(let f=h;f<=p;++f){const g=d[f];g.skip||i(g,c,f)}}}function df(e){const t=e.indexOf("x")!==-1,s=e.indexOf("y")!==-1;return function(i,n){const o=t?Math.abs(i.x-n.x):0,r=s?Math.abs(i.y-n.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}}function wn(e,t,s,i,n){const o=[];return!n&&!e.isPointInArea(t)||on(e,s,t,function(a,l,c){!n&&!ae(a,e.chartArea,0)||a.inRange(t.x,t.y,i)&&o.push({element:a,datasetIndex:l,index:c})},!0),o}function hf(e,t,s,i){let n=[];function o(r,a,l){const{startAngle:c,endAngle:d}=r.getProps(["startAngle","endAngle"],i),{angle:h}=Ga(r,{x:t.x,y:t.y});Js(h,c,d)&&n.push({element:r,datasetIndex:a,index:l})}return on(e,s,t,o),n}function uf(e,t,s,i,n,o){let r=[];const a=df(s);let l=Number.POSITIVE_INFINITY;function c(d,h,p){const f=d.inRange(t.x,t.y,n);if(i&&!f)return;const g=d.getCenterPoint(n);if(!(!!o||e.isPointInArea(g))&&!f)return;const b=a(t,g);b<l?(r=[{element:d,datasetIndex:h,index:p}],l=b):b===l&&r.push({element:d,datasetIndex:h,index:p})}return on(e,s,t,c),r}function $n(e,t,s,i,n,o){return!o&&!e.isPointInArea(t)?[]:s==="r"&&!i?hf(e,t,s,n):uf(e,t,s,i,n,o)}function Mr(e,t,s,i,n){const o=[],r=s==="x"?"inXRange":"inYRange";let a=!1;return on(e,s,t,(l,c,d)=>{l[r]&&l[r](t[s],n)&&(o.push({element:l,datasetIndex:c,index:d}),a=a||l.inRange(t.x,t.y,n))}),i&&!a?[]:o}var pf={modes:{index(e,t,s,i){const n=Ee(t,e),o=s.axis||"x",r=s.includeInvisible||!1,a=s.intersect?wn(e,n,o,i,r):$n(e,n,o,!1,i,r),l=[];return a.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const d=a[0].index,h=c.data[d];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:d})}),l):[]},dataset(e,t,s,i){const n=Ee(t,e),o=s.axis||"xy",r=s.includeInvisible||!1;let a=s.intersect?wn(e,n,o,i,r):$n(e,n,o,!1,i,r);if(a.length>0){const l=a[0].datasetIndex,c=e.getDatasetMeta(l).data;a=[];for(let d=0;d<c.length;++d)a.push({element:c[d],datasetIndex:l,index:d})}return a},point(e,t,s,i){const n=Ee(t,e),o=s.axis||"xy",r=s.includeInvisible||!1;return wn(e,n,o,i,r)},nearest(e,t,s,i){const n=Ee(t,e),o=s.axis||"xy",r=s.includeInvisible||!1;return $n(e,n,o,s.intersect,i,r)},x(e,t,s,i){const n=Ee(t,e);return Mr(e,n,"x",s.intersect,i)},y(e,t,s,i){const n=Ee(t,e);return Mr(e,n,"y",s.intersect,i)}}};const kl=["left","top","right","bottom"];function Ds(e,t){return e.filter(s=>s.pos===t)}function Er(e,t){return e.filter(s=>kl.indexOf(s.pos)===-1&&s.box.axis===t)}function Ms(e,t){return e.sort((s,i)=>{const n=t?i:s,o=t?s:i;return n.weight===o.weight?n.index-o.index:n.weight-o.weight})}function ff(e){const t=[];let s,i,n,o,r,a;for(s=0,i=(e||[]).length;s<i;++s)n=e[s],{position:o,options:{stack:r,stackWeight:a=1}}=n,t.push({index:s,box:n,pos:o,horizontal:n.isHorizontal(),weight:n.weight,stack:r&&o+r,stackWeight:a});return t}function gf(e){const t={};for(const s of e){const{stack:i,pos:n,stackWeight:o}=s;if(!i||!kl.includes(n))continue;const r=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=o}return t}function mf(e,t){const s=gf(e),{vBoxMaxWidth:i,hBoxMaxHeight:n}=t;let o,r,a;for(o=0,r=e.length;o<r;++o){a=e[o];const{fullSize:l}=a.box,c=s[a.stack],d=c&&a.stackWeight/c.weight;a.horizontal?(a.width=d?d*i:l&&t.availableWidth,a.height=n):(a.width=i,a.height=d?d*n:l&&t.availableHeight)}return s}function bf(e){const t=ff(e),s=Ms(t.filter(c=>c.box.fullSize),!0),i=Ms(Ds(t,"left"),!0),n=Ms(Ds(t,"right")),o=Ms(Ds(t,"top"),!0),r=Ms(Ds(t,"bottom")),a=Er(t,"x"),l=Er(t,"y");return{fullSize:s,leftAndTop:i.concat(o),rightAndBottom:n.concat(l).concat(r).concat(a),chartArea:Ds(t,"chartArea"),vertical:i.concat(n).concat(l),horizontal:o.concat(r).concat(a)}}function Or(e,t,s,i){return Math.max(e[s],t[s])+Math.max(e[i],t[i])}function wl(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function xf(e,t,s,i){const{pos:n,box:o}=s,r=e.maxPadding;if(!j(n)){s.size&&(e[n]-=s.size);const h=i[s.stack]||{size:0,count:1};h.size=Math.max(h.size,s.horizontal?o.height:o.width),s.size=h.size/h.count,e[n]+=s.size}o.getPadding&&wl(r,o.getPadding());const a=Math.max(0,t.outerWidth-Or(r,e,"left","right")),l=Math.max(0,t.outerHeight-Or(r,e,"top","bottom")),c=a!==e.w,d=l!==e.h;return e.w=a,e.h=l,s.horizontal?{same:c,other:d}:{same:d,other:c}}function yf(e){const t=e.maxPadding;function s(i){const n=Math.max(t[i]-e[i],0);return e[i]+=n,n}e.y+=s("top"),e.x+=s("left"),s("right"),s("bottom")}function vf(e,t){const s=t.maxPadding;function i(n){const o={left:0,top:0,right:0,bottom:0};return n.forEach(r=>{o[r]=Math.max(t[r],s[r])}),o}return i(e?["left","right"]:["top","bottom"])}function js(e,t,s,i){const n=[];let o,r,a,l,c,d;for(o=0,r=e.length,c=0;o<r;++o){a=e[o],l=a.box,l.update(a.width||t.w,a.height||t.h,vf(a.horizontal,t));const{same:h,other:p}=xf(t,s,a,i);c|=h&&n.length,d=d||p,l.fullSize||n.push(a)}return c&&js(n,t,s,i)||d}function vi(e,t,s,i,n){e.top=s,e.left=t,e.right=t+i,e.bottom=s+n,e.width=i,e.height=n}function Ar(e,t,s,i){const n=s.padding;let{x:o,y:r}=t;for(const a of e){const l=a.box,c=i[a.stack]||{placed:0,weight:1},d=a.stackWeight/c.weight||1;if(a.horizontal){const h=t.w*d,p=c.size||l.height;Xs(c.start)&&(r=c.start),l.fullSize?vi(l,n.left,r,s.outerWidth-n.right-n.left,p):vi(l,t.left+c.placed,r,h,p),c.start=r,c.placed+=h,r=l.bottom}else{const h=t.h*d,p=c.size||l.width;Xs(c.start)&&(o=c.start),l.fullSize?vi(l,o,n.top,p,s.outerHeight-n.bottom-n.top):vi(l,o,t.top+c.placed,p,h),c.start=o,c.placed+=h,o=l.right}}t.x=o,t.y=r}var bt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(s){t.draw(s)}}]},e.boxes.push(t)},removeBox(e,t){const s=e.boxes?e.boxes.indexOf(t):-1;s!==-1&&e.boxes.splice(s,1)},configure(e,t,s){t.fullSize=s.fullSize,t.position=s.position,t.weight=s.weight},update(e,t,s,i){if(!e)return;const n=yt(e.options.layout.padding),o=Math.max(t-n.width,0),r=Math.max(s-n.height,0),a=bf(e.boxes),l=a.vertical,c=a.horizontal;U(e.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const d=l.reduce((m,b)=>b.box.options&&b.box.options.display===!1?m:m+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:s,padding:n,availableWidth:o,availableHeight:r,vBoxMaxWidth:o/2/d,hBoxMaxHeight:r/2}),p=Object.assign({},n);wl(p,yt(i));const f=Object.assign({maxPadding:p,w:o,h:r,x:n.left,y:n.top},n),g=mf(l.concat(c),h);js(a.fullSize,f,h,g),js(l,f,h,g),js(c,f,h,g)&&js(l,f,h,g),yf(f),Ar(a.leftAndTop,f,h,g),f.x+=f.w,f.y+=f.h,Ar(a.rightAndBottom,f,h,g),e.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},U(a.chartArea,m=>{const b=m.box;Object.assign(b,e.chartArea),b.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class $l{acquireContext(t,s){}releaseContext(t){return!1}addEventListener(t,s,i){}removeEventListener(t,s,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,s,i,n){return s=Math.max(0,s||t.width),i=i||t.height,{width:s,height:Math.max(0,n?Math.floor(s/n):i)}}isAttached(t){return!0}updateConfig(t){}}class kf extends $l{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ti="$chartjs",wf={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Ir=e=>e===null||e==="";function $f(e,t){const s=e.style,i=e.getAttribute("height"),n=e.getAttribute("width");if(e[Ti]={initial:{height:i,width:n,style:{display:s.display,height:s.height,width:s.width}}},s.display=s.display||"block",s.boxSizing=s.boxSizing||"border-box",Ir(n)){const o=br(e,"width");o!==void 0&&(e.width=o)}if(Ir(i))if(e.style.height==="")e.height=e.width/(t||2);else{const o=br(e,"height");o!==void 0&&(e.height=o)}return e}const _l=bp?{passive:!0}:!1;function _f(e,t,s){e&&e.addEventListener(t,s,_l)}function Sf(e,t,s){e&&e.canvas&&e.canvas.removeEventListener(t,s,_l)}function Cf(e,t){const s=wf[e.type]||e.type,{x:i,y:n}=Ee(e,t);return{type:s,chart:t,native:e,x:i!==void 0?i:null,y:n!==void 0?n:null}}function Hi(e,t){for(const s of e)if(s===t||s.contains(t))return!0}function Pf(e,t,s){const i=e.canvas,n=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||Hi(a.addedNodes,i),r=r&&!Hi(a.removedNodes,i);r&&s()});return n.observe(document,{childList:!0,subtree:!0}),n}function Tf(e,t,s){const i=e.canvas,n=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||Hi(a.removedNodes,i),r=r&&!Hi(a.addedNodes,i);r&&s()});return n.observe(document,{childList:!0,subtree:!0}),n}const Qs=new Map;let Rr=0;function Sl(){const e=window.devicePixelRatio;e!==Rr&&(Rr=e,Qs.forEach((t,s)=>{s.currentDevicePixelRatio!==e&&t()}))}function Df(e,t){Qs.size||window.addEventListener("resize",Sl),Qs.set(e,t)}function Mf(e){Qs.delete(e),Qs.size||window.removeEventListener("resize",Sl)}function Ef(e,t,s){const i=e.canvas,n=i&&Po(i);if(!n)return;const o=Qa((a,l)=>{const c=n.clientWidth;s(a,l),c<n.clientWidth&&s()},window),r=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||o(c,d)});return r.observe(n),Df(e,o),r}function _n(e,t,s){s&&s.disconnect(),t==="resize"&&Mf(e)}function Of(e,t,s){const i=e.canvas,n=Qa(o=>{e.ctx!==null&&s(Cf(o,e))},e);return _f(i,t,n),n}class Af extends $l{acquireContext(t,s){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?($f(t,s),i):null}releaseContext(t){const s=t.canvas;if(!s[Ti])return!1;const i=s[Ti].initial;["height","width"].forEach(o=>{const r=i[o];N(r)?s.removeAttribute(o):s.setAttribute(o,r)});const n=i.style||{};return Object.keys(n).forEach(o=>{s.style[o]=n[o]}),s.width=s.width,delete s[Ti],!0}addEventListener(t,s,i){this.removeEventListener(t,s);const n=t.$proxies||(t.$proxies={}),r={attach:Pf,detach:Tf,resize:Ef}[s]||Of;n[s]=r(t,s,i)}removeEventListener(t,s){const i=t.$proxies||(t.$proxies={}),n=i[s];if(!n)return;({attach:_n,detach:_n,resize:_n}[s]||Sf)(t,s,n),i[s]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,s,i,n){return mp(t,s,i,n)}isAttached(t){const s=t&&Po(t);return!!(s&&s.isConnected)}}function If(e){return!Co()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?kf:Af}class ue{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){const{x:s,y:i}=this.getProps(["x","y"],t);return{x:s,y:i}}hasValue(){return hs(this.x)&&hs(this.y)}getProps(t,s){const i=this.$animations;if(!s||!i)return this;const n={};return t.forEach(o=>{n[o]=i[o]&&i[o].active()?i[o]._to:this[o]}),n}}function Rf(e,t){const s=e.options.ticks,i=Lf(e),n=Math.min(s.maxTicksLimit||i,i),o=s.major.enabled?Ff(t):[],r=o.length,a=o[0],l=o[r-1],c=[];if(r>n)return jf(t,c,o,r/n),c;const d=Nf(o,t,n);if(r>0){let h,p;const f=r>1?Math.round((l-a)/(r-1)):null;for(ki(t,c,d,N(f)?0:a-f,a),h=0,p=r-1;h<p;h++)ki(t,c,d,o[h],o[h+1]);return ki(t,c,d,l,N(f)?t.length:l+f),c}return ki(t,c,d),c}function Lf(e){const t=e.options.offset,s=e._tickSize(),i=e._length/s+(t?0:1),n=e._maxLength/s;return Math.floor(Math.min(i,n))}function Nf(e,t,s){const i=zf(e),n=t.length/s;if(!i)return Math.max(n,1);const o=yu(i);for(let r=0,a=o.length-1;r<a;r++){const l=o[r];if(l>n)return l}return Math.max(n,1)}function Ff(e){const t=[];let s,i;for(s=0,i=e.length;s<i;s++)e[s].major&&t.push(s);return t}function jf(e,t,s,i){let n=0,o=s[0],r;for(i=Math.ceil(i),r=0;r<e.length;r++)r===o&&(t.push(e[r]),n++,o=s[n*i])}function ki(e,t,s,i,n){const o=E(i,0),r=Math.min(E(n,e.length),e.length);let a=0,l,c,d;for(s=Math.ceil(s),n&&(l=n-i,s=l/Math.floor(l/s)),d=o;d<0;)a++,d=Math.round(o+a*s);for(c=Math.max(o,0);c<r;c++)c===d&&(t.push(e[c]),a++,d=Math.round(o+a*s))}function zf(e){const t=e.length;let s,i;if(t<2)return!1;for(i=e[0],s=1;s<t;++s)if(e[s]-e[s-1]!==i)return!1;return i}const Bf=e=>e==="left"?"right":e==="right"?"left":e,Lr=(e,t,s)=>t==="top"||t==="left"?e[t]+s:e[t]-s,Nr=(e,t)=>Math.min(t||e,e);function Fr(e,t){const s=[],i=e.length/t,n=e.length;let o=0;for(;o<n;o+=i)s.push(e[Math.floor(o)]);return s}function Hf(e,t,s){const i=e.ticks.length,n=Math.min(t,i-1),o=e._startPixel,r=e._endPixel,a=1e-6;let l=e.getPixelForTick(n),c;if(!(s&&(i===1?c=Math.max(l-o,r-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(n-1))/2,l+=n<t?c:-c,l<o-a||l>r+a)))return l}function Vf(e,t){U(e,s=>{const i=s.gc,n=i.length/2;let o;if(n>t){for(o=0;o<n;++o)delete s.data[i[o]];i.splice(0,n)}})}function Es(e){return e.drawTicks?e.tickLength:0}function jr(e,t){if(!e.display)return 0;const s=rt(e.font,t),i=yt(e.padding);return(X(e.text)?e.text.length:1)*s.lineHeight+i.height}function Wf(e,t){return $e(e,{scale:t,type:"scale"})}function Uf(e,t,s){return $e(e,{tick:s,index:t,type:"tick"})}function qf(e,t,s){let i=vo(e);return(s&&t!=="right"||!s&&t==="right")&&(i=Bf(i)),i}function Kf(e,t,s,i){const{top:n,left:o,bottom:r,right:a,chart:l}=e,{chartArea:c,scales:d}=l;let h=0,p,f,g;const m=r-n,b=a-o;if(e.isHorizontal()){if(f=ft(i,o,a),j(s)){const y=Object.keys(s)[0],v=s[y];g=d[y].getPixelForValue(v)+m-t}else s==="center"?g=(c.bottom+c.top)/2+m-t:g=Lr(e,s,t);p=a-o}else{if(j(s)){const y=Object.keys(s)[0],v=s[y];f=d[y].getPixelForValue(v)-b+t}else s==="center"?f=(c.left+c.right)/2-b+t:f=Lr(e,s,t);g=ft(i,r,n),h=s==="left"?-st:st}return{titleX:f,titleY:g,maxWidth:p,rotation:h}}class ts extends ue{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,s){return t}getUserBounds(){let{_userMin:t,_userMax:s,_suggestedMin:i,_suggestedMax:n}=this;return t=Tt(t,Number.POSITIVE_INFINITY),s=Tt(s,Number.NEGATIVE_INFINITY),i=Tt(i,Number.POSITIVE_INFINITY),n=Tt(n,Number.NEGATIVE_INFINITY),{min:Tt(t,i),max:Tt(s,n),minDefined:Q(t),maxDefined:Q(s)}}getMinMax(t){let{min:s,max:i,minDefined:n,maxDefined:o}=this.getUserBounds(),r;if(n&&o)return{min:s,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)r=a[l].controller.getMinMax(this,t),n||(s=Math.min(s,r.min)),o||(i=Math.max(i,r.max));return s=o&&s>i?i:s,i=n&&s>i?s:i,{min:Tt(s,Tt(i,s)),max:Tt(i,Tt(s,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){K(this.options.beforeUpdate,[this])}update(t,s,i){const{beginAtZero:n,grace:o,ticks:r}=this.options,a=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=s,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Yu(this,o,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Fr(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=Rf(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,s,i;this.isHorizontal()?(s=this.left,i=this.right):(s=this.top,i=this.bottom,t=!t),this._startPixel=s,this._endPixel=i,this._reversePixels=t,this._length=i-s,this._alignToPixels=this.options.alignToPixels}afterUpdate(){K(this.options.afterUpdate,[this])}beforeSetDimensions(){K(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){K(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),K(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){K(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const s=this.options.ticks;let i,n,o;for(i=0,n=t.length;i<n;i++)o=t[i],o.label=K(s.callback,[o.value,i,t],this)}afterTickToLabelConversion(){K(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){K(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,s=t.ticks,i=Nr(this.ticks.length,t.ticks.maxTicksLimit),n=s.minRotation||0,o=s.maxRotation;let r=n,a,l,c;if(!this._isVisible()||!s.display||n>=o||i<=1||!this.isHorizontal()){this.labelRotation=n;return}const d=this._getLabelSizes(),h=d.widest.width,p=d.highest.height,f=dt(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/i:f/(i-1),h+6>a&&(a=f/(i-(t.offset?.5:1)),l=this.maxHeight-Es(t.grid)-s.padding-jr(t.title,this.chart.options.font),c=Math.sqrt(h*h+p*p),r=xo(Math.min(Math.asin(dt((d.highest.height+6)/a,-1,1)),Math.asin(dt(l/c,-1,1))-Math.asin(dt(p/c,-1,1)))),r=Math.max(n,Math.min(o,r))),this.labelRotation=r}afterCalculateLabelRotation(){K(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){K(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:s,options:{ticks:i,title:n,grid:o}}=this,r=this._isVisible(),a=this.isHorizontal();if(r){const l=jr(n,s.options.font);if(a?(t.width=this.maxWidth,t.height=Es(o)+l):(t.height=this.maxHeight,t.width=Es(o)+l),i.display&&this.ticks.length){const{first:c,last:d,widest:h,highest:p}=this._getLabelSizes(),f=i.padding*2,g=Bt(this.labelRotation),m=Math.cos(g),b=Math.sin(g);if(a){const y=i.mirror?0:b*h.width+m*p.height;t.height=Math.min(this.maxHeight,t.height+y+f)}else{const y=i.mirror?0:m*h.width+b*p.height;t.width=Math.min(this.maxWidth,t.width+y+f)}this._calculatePadding(c,d,b,m)}}this._handleMargins(),a?(this.width=this._length=s.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=s.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,s,i,n){const{ticks:{align:o,padding:r},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,f=0;l?c?(p=n*t.width,f=i*s.height):(p=i*t.height,f=n*s.width):o==="start"?f=s.width:o==="end"?p=t.width:o!=="inner"&&(p=t.width/2,f=s.width/2),this.paddingLeft=Math.max((p-d+r)*this.width/(this.width-d),0),this.paddingRight=Math.max((f-h+r)*this.width/(this.width-h),0)}else{let d=s.height/2,h=t.height/2;o==="start"?(d=0,h=t.height):o==="end"&&(d=s.height,h=0),this.paddingTop=d+r,this.paddingBottom=h+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){K(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:s}=this.options;return s==="top"||s==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let s,i;for(s=0,i=t.length;s<i;s++)N(t[s].label)&&(t.splice(s,1),i--,s--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const s=this.options.ticks.sampleSize;let i=this.ticks;s<i.length&&(i=Fr(i,s)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,s,i){const{ctx:n,_longestTextCache:o}=this,r=[],a=[],l=Math.floor(s/Nr(s,i));let c=0,d=0,h,p,f,g,m,b,y,v,S,_,$;for(h=0;h<s;h+=l){if(g=t[h].label,m=this._resolveTickFontOptions(h),n.font=b=m.string,y=o[b]=o[b]||{data:{},gc:[]},v=m.lineHeight,S=_=0,!N(g)&&!X(g))S=zi(n,y.data,y.gc,S,g),_=v;else if(X(g))for(p=0,f=g.length;p<f;++p)$=g[p],!N($)&&!X($)&&(S=zi(n,y.data,y.gc,S,$),_+=v);r.push(S),a.push(_),c=Math.max(S,c),d=Math.max(_,d)}Vf(o,s);const P=r.indexOf(c),T=a.indexOf(d),D=M=>({width:r[M]||0,height:a[M]||0});return{first:D(0),last:D(s-1),widest:D(P),highest:D(T),widths:r,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,s){return NaN}getValueForPixel(t){}getPixelForTick(t){const s=this.ticks;return t<0||t>s.length-1?null:this.getPixelForValue(s[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const s=this._startPixel+t*this._length;return $u(this._alignToPixels?Te(this.chart,s,0):s)}getDecimalForPixel(t){const s=(t-this._startPixel)/this._length;return this._reversePixels?1-s:s}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:s}=this;return t<0&&s<0?s:t>0&&s>0?t:0}getContext(t){const s=this.ticks||[];if(t>=0&&t<s.length){const i=s[t];return i.$context||(i.$context=Uf(this.getContext(),t,i))}return this.$context||(this.$context=Wf(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,s=Bt(this.labelRotation),i=Math.abs(Math.cos(s)),n=Math.abs(Math.sin(s)),o=this._getLabelSizes(),r=t.autoSkipPadding||0,a=o?o.widest.width+r:0,l=o?o.highest.height+r:0;return this.isHorizontal()?l*i>a*n?a/i:l/n:l*n<a*i?l/i:a/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const s=this.axis,i=this.chart,n=this.options,{grid:o,position:r,border:a}=n,l=o.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),p=Es(o),f=[],g=a.setContext(this.getContext()),m=g.display?g.width:0,b=m/2,y=function(G){return Te(i,G,m)};let v,S,_,$,P,T,D,M,I,R,z,ut;if(r==="top")v=y(this.bottom),T=this.bottom-p,M=v-b,R=y(t.top)+b,ut=t.bottom;else if(r==="bottom")v=y(this.top),R=t.top,ut=y(t.bottom)-b,T=v+b,M=this.top+p;else if(r==="left")v=y(this.right),P=this.right-p,D=v-b,I=y(t.left)+b,z=t.right;else if(r==="right")v=y(this.left),I=t.left,z=y(t.right)-b,P=v+b,D=this.left+p;else if(s==="x"){if(r==="center")v=y((t.top+t.bottom)/2+.5);else if(j(r)){const G=Object.keys(r)[0],et=r[G];v=y(this.chart.scales[G].getPixelForValue(et))}R=t.top,ut=t.bottom,T=v+b,M=T+p}else if(s==="y"){if(r==="center")v=y((t.left+t.right)/2);else if(j(r)){const G=Object.keys(r)[0],et=r[G];v=y(this.chart.scales[G].getPixelForValue(et))}P=v-b,D=P-p,I=t.left,z=t.right}const Pt=E(n.ticks.maxTicksLimit,h),q=Math.max(1,Math.ceil(h/Pt));for(S=0;S<h;S+=q){const G=this.getContext(S),et=o.setContext(G),Ft=a.setContext(G),pt=et.lineWidth,es=et.color,hi=Ft.dash||[],ss=Ft.dashOffset,$s=et.tickWidth,Se=et.tickColor,_s=et.tickBorderDash||[],Ce=et.tickBorderDashOffset;_=Hf(this,S,l),_!==void 0&&($=Te(i,_,pt),c?P=D=I=z=$:T=M=R=ut=$,f.push({tx1:P,ty1:T,tx2:D,ty2:M,x1:I,y1:R,x2:z,y2:ut,width:pt,color:es,borderDash:hi,borderDashOffset:ss,tickWidth:$s,tickColor:Se,tickBorderDash:_s,tickBorderDashOffset:Ce}))}return this._ticksLength=h,this._borderValue=v,f}_computeLabelItems(t){const s=this.axis,i=this.options,{position:n,ticks:o}=i,r=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:d,mirror:h}=o,p=Es(i.grid),f=p+d,g=h?-d:f,m=-Bt(this.labelRotation),b=[];let y,v,S,_,$,P,T,D,M,I,R,z,ut="middle";if(n==="top")P=this.bottom-g,T=this._getXAxisLabelAlignment();else if(n==="bottom")P=this.top+g,T=this._getXAxisLabelAlignment();else if(n==="left"){const q=this._getYAxisLabelAlignment(p);T=q.textAlign,$=q.x}else if(n==="right"){const q=this._getYAxisLabelAlignment(p);T=q.textAlign,$=q.x}else if(s==="x"){if(n==="center")P=(t.top+t.bottom)/2+f;else if(j(n)){const q=Object.keys(n)[0],G=n[q];P=this.chart.scales[q].getPixelForValue(G)+f}T=this._getXAxisLabelAlignment()}else if(s==="y"){if(n==="center")$=(t.left+t.right)/2-f;else if(j(n)){const q=Object.keys(n)[0],G=n[q];$=this.chart.scales[q].getPixelForValue(G)}T=this._getYAxisLabelAlignment(p).textAlign}s==="y"&&(l==="start"?ut="top":l==="end"&&(ut="bottom"));const Pt=this._getLabelSizes();for(y=0,v=a.length;y<v;++y){S=a[y],_=S.label;const q=o.setContext(this.getContext(y));D=this.getPixelForTick(y)+o.labelOffset,M=this._resolveTickFontOptions(y),I=M.lineHeight,R=X(_)?_.length:1;const G=R/2,et=q.color,Ft=q.textStrokeColor,pt=q.textStrokeWidth;let es=T;r?($=D,T==="inner"&&(y===v-1?es=this.options.reverse?"left":"right":y===0?es=this.options.reverse?"right":"left":es="center"),n==="top"?c==="near"||m!==0?z=-R*I+I/2:c==="center"?z=-Pt.highest.height/2-G*I+I:z=-Pt.highest.height+I/2:c==="near"||m!==0?z=I/2:c==="center"?z=Pt.highest.height/2-G*I:z=Pt.highest.height-R*I,h&&(z*=-1),m!==0&&!q.showLabelBackdrop&&($+=I/2*Math.sin(m))):(P=D,z=(1-R)*I/2);let hi;if(q.showLabelBackdrop){const ss=yt(q.backdropPadding),$s=Pt.heights[y],Se=Pt.widths[y];let _s=z-ss.top,Ce=0-ss.left;switch(ut){case"middle":_s-=$s/2;break;case"bottom":_s-=$s;break}switch(T){case"center":Ce-=Se/2;break;case"right":Ce-=Se;break;case"inner":y===v-1?Ce-=Se:y>0&&(Ce-=Se/2);break}hi={left:Ce,top:_s,width:Se+ss.width,height:$s+ss.height,color:q.backdropColor}}b.push({label:_,font:M,textOffset:z,options:{rotation:m,color:et,strokeColor:Ft,strokeWidth:pt,textAlign:es,textBaseline:ut,translation:[$,P],backdrop:hi}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:s}=this.options;if(-Bt(this.labelRotation))return t==="top"?"left":"right";let n="center";return s.align==="start"?n="left":s.align==="end"?n="right":s.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:s,ticks:{crossAlign:i,mirror:n,padding:o}}=this.options,r=this._getLabelSizes(),a=t+o,l=r.widest.width;let c,d;return s==="left"?n?(d=this.right+o,i==="near"?c="left":i==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-a,i==="near"?c="right":i==="center"?(c="center",d-=l/2):(c="left",d=this.left)):s==="right"?n?(d=this.left+o,i==="near"?c="right":i==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+a,i==="near"?c="left":i==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,s=this.options.position;if(s==="left"||s==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(s==="top"||s==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:s},left:i,top:n,width:o,height:r}=this;s&&(t.save(),t.fillStyle=s,t.fillRect(i,n,o,r),t.restore())}getLineWidthForValue(t){const s=this.options.grid;if(!this._isVisible()||!s.display)return 0;const n=this.ticks.findIndex(o=>o.value===t);return n>=0?s.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){const s=this.options.grid,i=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,r;const a=(l,c,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(s.display)for(o=0,r=n.length;o<r;++o){const l=n[o];s.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),s.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:s,options:{border:i,grid:n}}=this,o=i.setContext(this.getContext()),r=i.display?o.width:0;if(!r)return;const a=n.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,d,h,p;this.isHorizontal()?(c=Te(t,this.left,r)-r/2,d=Te(t,this.right,a)+a/2,h=p=l):(h=Te(t,this.top,r)-r/2,p=Te(t,this.bottom,a)+a/2,c=d=l),s.save(),s.lineWidth=o.width,s.strokeStyle=o.color,s.beginPath(),s.moveTo(c,h),s.lineTo(d,p),s.stroke(),s.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,n=this._computeLabelArea();n&&en(i,n);const o=this.getLabelItems(t);for(const r of o){const a=r.options,l=r.font,c=r.label,d=r.textOffset;Ge(i,c,0,d,l,a)}n&&sn(i)}drawTitle(){const{ctx:t,options:{position:s,title:i,reverse:n}}=this;if(!i.display)return;const o=rt(i.font),r=yt(i.padding),a=i.align;let l=o.lineHeight/2;s==="bottom"||s==="center"||j(s)?(l+=r.bottom,X(i.text)&&(l+=o.lineHeight*(i.text.length-1))):l+=r.top;const{titleX:c,titleY:d,maxWidth:h,rotation:p}=Kf(this,l,s,a);Ge(t,i.text,0,0,o,{color:i.color,maxWidth:h,rotation:p,textAlign:qf(a,s,n),textBaseline:"middle",translation:[c,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,s=t.ticks&&t.ticks.z||0,i=E(t.grid&&t.grid.z,-1),n=E(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==ts.prototype.draw?[{z:s,draw:o=>{this.draw(o)}}]:[{z:i,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:s,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const s=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",n=[];let o,r;for(o=0,r=s.length;o<r;++o){const a=s[o];a[i]===this.id&&(!t||a.type===t)&&n.push(a)}return n}_resolveTickFontOptions(t){const s=this.options.ticks.setContext(this.getContext(t));return rt(s.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class wi{constructor(t,s,i){this.type=t,this.scope=s,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const s=Object.getPrototypeOf(t);let i;Xf(s)&&(i=this.register(s));const n=this.items,o=t.id,r=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in n||(n[o]=t,Yf(t,r,i),this.override&&J.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const s=this.items,i=t.id,n=this.scope;i in s&&delete s[i],n&&i in J[n]&&(delete J[n][i],this.override&&delete Ye[i])}}function Yf(e,t,s){const i=Gs(Object.create(null),[s?J.get(s):{},J.get(t),e.defaults]);J.set(t,i),e.defaultRoutes&&Gf(t,e.defaultRoutes),e.descriptors&&J.describe(t,e.descriptors)}function Gf(e,t){Object.keys(t).forEach(s=>{const i=s.split("."),n=i.pop(),o=[e].concat(i).join("."),r=t[s].split("."),a=r.pop(),l=r.join(".");J.route(o,n,l,a)})}function Xf(e){return"id"in e&&"defaults"in e}class Jf{constructor(){this.controllers=new wi(_e,"datasets",!0),this.elements=new wi(ue,"elements"),this.plugins=new wi(Object,"plugins"),this.scales=new wi(ts,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,s,i){[...s].forEach(n=>{const o=i||this._getRegistryForType(n);i||o.isForType(n)||o===this.plugins&&n.id?this._exec(t,o,n):U(n,r=>{const a=i||this._getRegistryForType(r);this._exec(t,a,r)})})}_exec(t,s,i){const n=bo(t);K(i["before"+n],[],i),s[t](i),K(i["after"+n],[],i)}_getRegistryForType(t){for(let s=0;s<this._typedRegistries.length;s++){const i=this._typedRegistries[s];if(i.isForType(t))return i}return this.plugins}_get(t,s,i){const n=s.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return n}}var Kt=new Jf;class Zf{constructor(){this._init=void 0}notify(t,s,i,n){if(s==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const o=n?this._descriptors(t).filter(n):this._descriptors(t),r=this._notify(o,t,s,i);return s==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,s,i,n){n=n||{};for(const o of t){const r=o.plugin,a=r[i],l=[s,n,o.options];if(K(a,l,r)===!1&&n.cancelable)return!1}return!0}invalidate(){N(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const s=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),s}_createDescriptors(t,s){const i=t&&t.config,n=E(i.options&&i.options.plugins,{}),o=Qf(i);return n===!1&&!s?[]:eg(t,o,n,s)}_notifyStateChanges(t){const s=this._oldCache||[],i=this._cache,n=(o,r)=>o.filter(a=>!r.some(l=>a.plugin.id===l.plugin.id));this._notify(n(s,i),t,"stop"),this._notify(n(i,s),t,"start")}}function Qf(e){const t={},s=[],i=Object.keys(Kt.plugins.items);for(let o=0;o<i.length;o++)s.push(Kt.getPlugin(i[o]));const n=e.plugins||[];for(let o=0;o<n.length;o++){const r=n[o];s.indexOf(r)===-1&&(s.push(r),t[r.id]=!0)}return{plugins:s,localIds:t}}function tg(e,t){return!t&&e===!1?null:e===!0?{}:e}function eg(e,{plugins:t,localIds:s},i,n){const o=[],r=e.getContext();for(const a of t){const l=a.id,c=tg(i[l],n);c!==null&&o.push({plugin:a,options:sg(e.config,{plugin:a,local:s[l]},c,r)})}return o}function sg(e,{plugin:t,local:s},i,n){const o=e.pluginScopeKeys(t),r=e.getOptionScopes(i,o);return s&&t.defaults&&r.push(t.defaults),e.createResolver(r,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Vn(e,t){const s=J.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||s.indexAxis||"x"}function ig(e,t){let s=e;return e==="_index_"?s=t:e==="_value_"&&(s=t==="x"?"y":"x"),s}function ng(e,t){return e===t?"_index_":"_value_"}function zr(e){if(e==="x"||e==="y"||e==="r")return e}function og(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Wn(e,...t){if(zr(e))return e;for(const s of t){const i=s.axis||og(s.position)||e.length>1&&zr(e[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Br(e,t,s){if(s[t+"AxisID"]===e)return{axis:t}}function rg(e,t){if(t.data&&t.data.datasets){const s=t.data.datasets.filter(i=>i.xAxisID===e||i.yAxisID===e);if(s.length)return Br(e,"x",s[0])||Br(e,"y",s[0])}return{}}function ag(e,t){const s=Ye[e.type]||{scales:{}},i=t.scales||{},n=Vn(e.type,t),o=Object.create(null);return Object.keys(i).forEach(r=>{const a=i[r];if(!j(a))return console.error(`Invalid scale configuration for scale: ${r}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=Wn(r,a,rg(r,e),J.scales[a.type]),c=ng(l,n),d=s.scales||{};o[r]=Bs(Object.create(null),[{axis:l},a,d[l],d[c]])}),e.data.datasets.forEach(r=>{const a=r.type||e.type,l=r.indexAxis||Vn(a,t),d=(Ye[a]||{}).scales||{};Object.keys(d).forEach(h=>{const p=ig(h,l),f=r[p+"AxisID"]||p;o[f]=o[f]||Object.create(null),Bs(o[f],[{axis:p},i[f],d[h]])})}),Object.keys(o).forEach(r=>{const a=o[r];Bs(a,[J.scales[a.type],J.scale])}),o}function Cl(e){const t=e.options||(e.options={});t.plugins=E(t.plugins,{}),t.scales=ag(e,t)}function Pl(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function lg(e){return e=e||{},e.data=Pl(e.data),Cl(e),e}const Hr=new Map,Tl=new Set;function $i(e,t){let s=Hr.get(e);return s||(s=t(),Hr.set(e,s),Tl.add(s)),s}const Os=(e,t,s)=>{const i=ke(t,s);i!==void 0&&e.add(i)};class cg{constructor(t){this._config=lg(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Pl(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Cl(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return $i(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,s){return $i(`${t}.transition.${s}`,()=>[[`datasets.${t}.transitions.${s}`,`transitions.${s}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,s){return $i(`${t}-${s}`,()=>[[`datasets.${t}.elements.${s}`,`datasets.${t}`,`elements.${s}`,""]])}pluginScopeKeys(t){const s=t.id,i=this.type;return $i(`${i}-plugin-${s}`,()=>[[`plugins.${s}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,s){const i=this._scopeCache;let n=i.get(t);return(!n||s)&&(n=new Map,i.set(t,n)),n}getOptionScopes(t,s,i){const{options:n,type:o}=this,r=this._cachedScopes(t,i),a=r.get(s);if(a)return a;const l=new Set;s.forEach(d=>{t&&(l.add(t),d.forEach(h=>Os(l,t,h))),d.forEach(h=>Os(l,n,h)),d.forEach(h=>Os(l,Ye[o]||{},h)),d.forEach(h=>Os(l,J,h)),d.forEach(h=>Os(l,Bn,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Tl.has(s)&&r.set(s,c),c}chartOptionScopes(){const{options:t,type:s}=this;return[t,Ye[s]||{},J.datasets[s]||{},{type:s},J,Bn]}resolveNamedOptions(t,s,i,n=[""]){const o={$shared:!0},{resolver:r,subPrefixes:a}=Vr(this._resolverCache,t,n);let l=r;if(hg(r,s)){o.$shared=!1,i=we(i)?i():i;const c=this.createResolver(t,i,a);l=us(r,i,c)}for(const c of s)o[c]=l[c];return o}createResolver(t,s,i=[""],n){const{resolver:o}=Vr(this._resolverCache,t,i);return j(s)?us(o,s,void 0,n):o}}function Vr(e,t,s){let i=e.get(t);i||(i=new Map,e.set(t,i));const n=s.join();let o=i.get(n);return o||(o={resolver:$o(t,s),subPrefixes:s.filter(a=>!a.toLowerCase().includes("hover"))},i.set(n,o)),o}const dg=e=>j(e)&&Object.getOwnPropertyNames(e).some(t=>we(e[t]));function hg(e,t){const{isScriptable:s,isIndexable:i}=ol(e);for(const n of t){const o=s(n),r=i(n),a=(r||o)&&e[n];if(o&&(we(a)||dg(a))||r&&X(a))return!0}return!1}var ug="4.5.1";const pg=["top","bottom","left","right","chartArea"];function Wr(e,t){return e==="top"||e==="bottom"||pg.indexOf(e)===-1&&t==="x"}function Ur(e,t){return function(s,i){return s[e]===i[e]?s[t]-i[t]:s[e]-i[e]}}function qr(e){const t=e.chart,s=t.options.animation;t.notifyPlugins("afterRender"),K(s&&s.onComplete,[e],t)}function fg(e){const t=e.chart,s=t.options.animation;K(s&&s.onProgress,[e],t)}function Dl(e){return Co()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Di={},Kr=e=>{const t=Dl(e);return Object.values(Di).filter(s=>s.canvas===t).pop()};function gg(e,t,s){const i=Object.keys(e);for(const n of i){const o=+n;if(o>=t){const r=e[n];delete e[n],(s>0||o>t)&&(e[o+s]=r)}}}function mg(e,t,s,i){return!s||e.type==="mouseout"?null:i?t:e}class Mo{static defaults=J;static instances=Di;static overrides=Ye;static registry=Kt;static version=ug;static getChart=Kr;static register(...t){Kt.add(...t),Yr()}static unregister(...t){Kt.remove(...t),Yr()}constructor(t,s){const i=this.config=new cg(s),n=Dl(t),o=Kr(n);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const r=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||If(n)),this.platform.updateConfig(i);const a=this.platform.acquireContext(n,r.aspectRatio),l=a&&a.canvas,c=l&&l.height,d=l&&l.width;if(this.id=du(),this.ctx=a,this.canvas=l,this.width=d,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Zf,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Pu(h=>this.update(h),r.resizeDelay||0),this._dataChanges=[],Di[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}se.listen(this,"complete",qr),se.listen(this,"progress",fg),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:s},width:i,height:n,_aspectRatio:o}=this;return N(t)?s&&o?o:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Kt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():mr(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return pr(this.canvas,this.ctx),this}stop(){return se.stop(this),this}resize(t,s){se.running(this)?this._resizeBeforeDraw={width:t,height:s}:this._resize(t,s)}_resize(t,s){const i=this.options,n=this.canvas,o=i.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(n,t,s,o),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,mr(this,a,!0)&&(this.notifyPlugins("resize",{size:r}),K(i.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const s=this.options.scales||{};U(s,(i,n)=>{i.id=n})}buildOrUpdateScales(){const t=this.options,s=t.scales,i=this.scales,n=Object.keys(i).reduce((r,a)=>(r[a]=!1,r),{});let o=[];s&&(o=o.concat(Object.keys(s).map(r=>{const a=s[r],l=Wn(r,a),c=l==="r",d=l==="x";return{options:a,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),U(o,r=>{const a=r.options,l=a.id,c=Wn(l,a),d=E(a.type,r.dtype);(a.position===void 0||Wr(a.position,c)!==Wr(r.dposition))&&(a.position=r.dposition),n[l]=!0;let h=null;if(l in i&&i[l].type===d)h=i[l];else{const p=Kt.getScale(d);h=new p({id:l,type:d,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,t)}),U(n,(r,a)=>{r||delete i[a]}),U(i,r=>{bt.configure(this,r,r.options),bt.addBox(this,r)})}_updateMetasets(){const t=this._metasets,s=this.data.datasets.length,i=t.length;if(t.sort((n,o)=>n.index-o.index),i>s){for(let n=s;n<i;++n)this._destroyDatasetMeta(n);t.splice(s,i-s)}this._sortedMetasets=t.slice(0).sort(Ur("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:s}}=this;t.length>s.length&&delete this._stacks,t.forEach((i,n)=>{s.filter(o=>o===i._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){const t=[],s=this.data.datasets;let i,n;for(this._removeUnreferencedMetasets(),i=0,n=s.length;i<n;i++){const o=s[i];let r=this.getDatasetMeta(i);const a=o.type||this.config.type;if(r.type&&r.type!==a&&(this._destroyDatasetMeta(i),r=this.getDatasetMeta(i)),r.type=a,r.indexAxis=o.indexAxis||Vn(a,this.options),r.order=o.order||0,r.index=i,r.label=""+o.label,r.visible=this.isDatasetVisible(i),r.controller)r.controller.updateIndex(i),r.controller.linkScales();else{const l=Kt.getController(a),{datasetElementType:c,dataElementType:d}=J.datasets[a];Object.assign(l,{dataElementType:Kt.getElement(d),datasetElementType:c&&Kt.getElement(c)}),r.controller=new l(this,i),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){U(this.data.datasets,(t,s)=>{this.getDatasetMeta(s).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const s=this.config;s.update();const i=this._options=s.createResolver(s.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:h}=this.getDatasetMeta(c),p=!n&&o.indexOf(h)===-1;h.buildOrUpdateElements(p),r=Math.max(+h.getMaxOverflow(),r)}r=this._minPadding=i.layout.autoPadding?r:0,this._updateLayout(r),n||U(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Ur("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){U(this.scales,t=>{bt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,s=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!nr(s,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,s=this._getUniformDataChanges()||[];for(const{method:i,start:n,count:o}of s){const r=i==="_removeElements"?-o:o;gg(t,n,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const s=this.data.datasets.length,i=o=>new Set(t.filter(r=>r[0]===o).map((r,a)=>a+","+r.splice(1).join(","))),n=i(0);for(let o=1;o<s;o++)if(!nr(n,i(o)))return;return Array.from(n).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;bt.update(this,this.width,this.height,t);const s=this.chartArea,i=s.width<=0||s.height<=0;this._layers=[],U(this.boxes,n=>{i&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,o)=>{n._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let s=0,i=this.data.datasets.length;s<i;++s)this.getDatasetMeta(s).controller.configure();for(let s=0,i=this.data.datasets.length;s<i;++s)this._updateDataset(s,we(t)?t({datasetIndex:s}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,s){const i=this.getDatasetMeta(t),n={meta:i,index:t,mode:s,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(i.controller._update(s),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(se.has(this)?this.attached&&!se.running(this)&&se.start(this):(this.draw(),qr({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:n}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,n)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const s=this._layers;for(t=0;t<s.length&&s[t].z<=0;++t)s[t].draw(this.chartArea);for(this._drawDatasets();t<s.length;++t)s[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const s=this._sortedMetasets,i=[];let n,o;for(n=0,o=s.length;n<o;++n){const r=s[n];(!t||r.visible)&&i.push(r)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let s=t.length-1;s>=0;--s)this._drawDataset(t[s]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const s=this.ctx,i={meta:t,index:t.index,cancelable:!0},n=ml(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(n&&en(s,n),t.controller.draw(),n&&sn(s),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return ae(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,s,i,n){const o=pf.modes[s];return typeof o=="function"?o(this,t,i,n):[]}getDatasetMeta(t){const s=this.data.datasets[t],i=this._metasets;let n=i.filter(o=>o&&o._dataset===s).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:s&&s.order||0,index:t,_dataset:s,_parsed:[],_sorted:!1},i.push(n)),n}getContext(){return this.$context||(this.$context=$e(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const s=this.data.datasets[t];if(!s)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!s.hidden}setDatasetVisibility(t,s){const i=this.getDatasetMeta(t);i.hidden=!s}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,s,i){const n=i?"show":"hide",o=this.getDatasetMeta(t),r=o.controller._resolveAnimations(void 0,n);Xs(s)?(o.data[s].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),r.update(o,{visible:i}),this.update(a=>a.datasetIndex===t?n:void 0))}hide(t,s){this._updateVisibility(t,s,!1)}show(t,s){this._updateVisibility(t,s,!0)}_destroyDatasetMeta(t){const s=this._metasets[t];s&&s.controller&&s.controller._destroy(),delete this._metasets[t]}_stop(){let t,s;for(this.stop(),se.remove(this),t=0,s=this.data.datasets.length;t<s;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:s}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),pr(t,s),this.platform.releaseContext(s),this.canvas=null,this.ctx=null),delete Di[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,s=this.platform,i=(o,r)=>{s.addEventListener(this,o,r),t[o]=r},n=(o,r,a)=>{o.offsetX=r,o.offsetY=a,this._eventHandler(o)};U(this.options.events,o=>i(o,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,s=this.platform,i=(l,c)=>{s.addEventListener(this,l,c),t[l]=c},n=(l,c)=>{t[l]&&(s.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const a=()=>{n("attach",a),this.attached=!0,this.resize(),i("resize",o),i("detach",r)};r=()=>{this.attached=!1,n("resize",o),this._stop(),this._resize(0,0),i("attach",a)},s.isAttached(this.canvas)?a():r()}unbindEvents(){U(this._listeners,(t,s)=>{this.platform.removeEventListener(this,s,t)}),this._listeners={},U(this._responsiveListeners,(t,s)=>{this.platform.removeEventListener(this,s,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,s,i){const n=i?"set":"remove";let o,r,a,l;for(s==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+n+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){r=t[a];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[n+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const s=this._active||[],i=t.map(({datasetIndex:o,index:r})=>{const a=this.getDatasetMeta(o);if(!a)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:a.data[r],index:r}});!Ni(i,s)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,s))}notifyPlugins(t,s,i){return this._plugins.notify(this,t,s,i)}isPluginEnabled(t){return this._plugins._cache.filter(s=>s.plugin.id===t).length===1}_updateHoverStyles(t,s,i){const n=this.options.hover,o=(l,c)=>l.filter(d=>!c.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),r=o(s,t),a=i?t:o(t,s);r.length&&this.updateHoverStyle(r,n.mode,!1),a.length&&n.mode&&this.updateHoverStyle(a,n.mode,!0)}_eventHandler(t,s){const i={event:t,replay:s,cancelable:!0,inChartArea:this.isPointInArea(t)},n=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,n)===!1)return;const o=this._handleEvent(t,s,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,n),(o||i.changed)&&this.render(),this}_handleEvent(t,s,i){const{_active:n=[],options:o}=this,r=s,a=this._getActiveElements(t,n,i,r),l=mu(t),c=mg(t,this._lastEvent,i,l);i&&(this._lastEvent=null,K(o.onHover,[t,a,this],this),l&&K(o.onClick,[t,a,this],this));const d=!Ni(a,n);return(d||s)&&(this._active=a,this._updateHoverStyles(a,n,s)),this._lastEvent=c,d}_getActiveElements(t,s,i,n){if(t.type==="mouseout")return[];if(!i)return s;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,n)}}function Yr(){return U(Mo.instances,e=>e._plugins.invalidate())}function bg(e,t,s){const{startAngle:i,x:n,y:o,outerRadius:r,innerRadius:a,options:l}=t,{borderWidth:c,borderJoinStyle:d}=l,h=Math.min(c/r,gt(i-s));if(e.beginPath(),e.arc(n,o,r-c/2,i+h/2,s-h/2),a>0){const p=Math.min(c/a,gt(i-s));e.arc(n,o,a+c/2,s-p/2,i+p/2,!0)}else{const p=Math.min(c/2,r*gt(i-s));if(d==="round")e.arc(n,o,p,s-V/2,i+V/2,!0);else if(d==="bevel"){const f=2*p*p,g=-f*Math.cos(s+V/2)+n,m=-f*Math.sin(s+V/2)+o,b=f*Math.cos(i+V/2)+n,y=f*Math.sin(i+V/2)+o;e.lineTo(g,m),e.lineTo(b,y)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function xg(e,t,s){const{startAngle:i,pixelMargin:n,x:o,y:r,outerRadius:a,innerRadius:l}=t;let c=n/a;e.beginPath(),e.arc(o,r,a,i-c,s+c),l>n?(c=n/l,e.arc(o,r,l,s+c,i-c,!0)):e.arc(o,r,n,s+st,i-st),e.closePath(),e.clip()}function yg(e){return wo(e,["outerStart","outerEnd","innerStart","innerEnd"])}function vg(e,t,s,i){const n=yg(e.options.borderRadius),o=(s-t)/2,r=Math.min(o,i*t/2),a=l=>{const c=(s-Math.min(o,l))*i/2;return dt(l,0,Math.min(o,c))};return{outerStart:a(n.outerStart),outerEnd:a(n.outerEnd),innerStart:dt(n.innerStart,0,r),innerEnd:dt(n.innerEnd,0,r)}}function os(e,t,s,i){return{x:s+e*Math.cos(t),y:i+e*Math.sin(t)}}function Vi(e,t,s,i,n,o){const{x:r,y:a,startAngle:l,pixelMargin:c,innerRadius:d}=t,h=Math.max(t.outerRadius+i+s-c,0),p=d>0?d+i+s+c:0;let f=0;const g=n-l;if(i){const q=d>0?d-i:0,G=h>0?h-i:0,et=(q+G)/2,Ft=et!==0?g*et/(et+i):g;f=(g-Ft)/2}const m=Math.max(.001,g*h-s/V)/h,b=(g-m)/2,y=l+b+f,v=n-b-f,{outerStart:S,outerEnd:_,innerStart:$,innerEnd:P}=vg(t,p,h,v-y),T=h-S,D=h-_,M=y+S/T,I=v-_/D,R=p+$,z=p+P,ut=y+$/R,Pt=v-P/z;if(e.beginPath(),o){const q=(M+I)/2;if(e.arc(r,a,h,M,q),e.arc(r,a,h,q,I),_>0){const pt=os(D,I,r,a);e.arc(pt.x,pt.y,_,I,v+st)}const G=os(z,v,r,a);if(e.lineTo(G.x,G.y),P>0){const pt=os(z,Pt,r,a);e.arc(pt.x,pt.y,P,v+st,Pt+Math.PI)}const et=(v-P/p+(y+$/p))/2;if(e.arc(r,a,p,v-P/p,et,!0),e.arc(r,a,p,et,y+$/p,!0),$>0){const pt=os(R,ut,r,a);e.arc(pt.x,pt.y,$,ut+Math.PI,y-st)}const Ft=os(T,y,r,a);if(e.lineTo(Ft.x,Ft.y),S>0){const pt=os(T,M,r,a);e.arc(pt.x,pt.y,S,y-st,M)}}else{e.moveTo(r,a);const q=Math.cos(M)*h+r,G=Math.sin(M)*h+a;e.lineTo(q,G);const et=Math.cos(I)*h+r,Ft=Math.sin(I)*h+a;e.lineTo(et,Ft)}e.closePath()}function kg(e,t,s,i,n){const{fullCircles:o,startAngle:r,circumference:a}=t;let l=t.endAngle;if(o){Vi(e,t,s,i,l,n);for(let c=0;c<o;++c)e.fill();isNaN(a)||(l=r+(a%Y||Y))}return Vi(e,t,s,i,l,n),e.fill(),l}function wg(e,t,s,i,n){const{fullCircles:o,startAngle:r,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:d,borderDash:h,borderDashOffset:p,borderRadius:f}=l,g=l.borderAlign==="inner";if(!c)return;e.setLineDash(h||[]),e.lineDashOffset=p,g?(e.lineWidth=c*2,e.lineJoin=d||"round"):(e.lineWidth=c,e.lineJoin=d||"bevel");let m=t.endAngle;if(o){Vi(e,t,s,i,m,n);for(let b=0;b<o;++b)e.stroke();isNaN(a)||(m=r+(a%Y||Y))}g&&xg(e,t,m),l.selfJoin&&m-r>=V&&f===0&&d!=="miter"&&bg(e,t,m),o||(Vi(e,t,s,i,m,n),e.stroke())}class $g extends ue{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,s,i){const n=this.getProps(["x","y"],i),{angle:o,distance:r}=Ga(n,{x:t,y:s}),{startAngle:a,endAngle:l,innerRadius:c,outerRadius:d,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),p=(this.options.spacing+this.options.borderWidth)/2,f=E(h,l-a),g=Js(o,a,l)&&a!==l,m=f>=Y||g,b=oe(r,c+p,d+p);return m&&b}getCenterPoint(t){const{x:s,y:i,startAngle:n,endAngle:o,innerRadius:r,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:l,spacing:c}=this.options,d=(n+o)/2,h=(r+a+c+l)/2;return{x:s+Math.cos(d)*h,y:i+Math.sin(d)*h}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:s,circumference:i}=this,n=(s.offset||0)/4,o=(s.spacing||0)/2,r=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>Y?Math.floor(i/Y):0,i===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const a=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(a)*n,Math.sin(a)*n);const l=1-Math.sin(Math.min(V,i||0)),c=n*l;t.fillStyle=s.backgroundColor,t.strokeStyle=s.borderColor,kg(t,this,c,o,r),wg(t,this,c,o,r),t.restore()}}function Ml(e,t,s=t){e.lineCap=E(s.borderCapStyle,t.borderCapStyle),e.setLineDash(E(s.borderDash,t.borderDash)),e.lineDashOffset=E(s.borderDashOffset,t.borderDashOffset),e.lineJoin=E(s.borderJoinStyle,t.borderJoinStyle),e.lineWidth=E(s.borderWidth,t.borderWidth),e.strokeStyle=E(s.borderColor,t.borderColor)}function _g(e,t,s){e.lineTo(s.x,s.y)}function Sg(e){return e.stepped?ju:e.tension||e.cubicInterpolationMode==="monotone"?zu:_g}function El(e,t,s={}){const i=e.length,{start:n=0,end:o=i-1}=s,{start:r,end:a}=t,l=Math.max(n,r),c=Math.min(o,a),d=n<r&&o<r||n>a&&o>a;return{count:i,start:l,loop:t.loop,ilen:c<l&&!d?i+c-l:c-l}}function Cg(e,t,s,i){const{points:n,options:o}=t,{count:r,start:a,loop:l,ilen:c}=El(n,s,i),d=Sg(o);let{move:h=!0,reverse:p}=i||{},f,g,m;for(f=0;f<=c;++f)g=n[(a+(p?c-f:f))%r],!g.skip&&(h?(e.moveTo(g.x,g.y),h=!1):d(e,m,g,p,o.stepped),m=g);return l&&(g=n[(a+(p?c:0))%r],d(e,m,g,p,o.stepped)),!!l}function Pg(e,t,s,i){const n=t.points,{count:o,start:r,ilen:a}=El(n,s,i),{move:l=!0,reverse:c}=i||{};let d=0,h=0,p,f,g,m,b,y;const v=_=>(r+(c?a-_:_))%o,S=()=>{m!==b&&(e.lineTo(d,b),e.lineTo(d,m),e.lineTo(d,y))};for(l&&(f=n[v(0)],e.moveTo(f.x,f.y)),p=0;p<=a;++p){if(f=n[v(p)],f.skip)continue;const _=f.x,$=f.y,P=_|0;P===g?($<m?m=$:$>b&&(b=$),d=(h*d+_)/++h):(S(),e.lineTo(_,$),g=P,h=0,m=b=$),y=$}S()}function Un(e){const t=e.options,s=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!s?Pg:Cg}function Tg(e){return e.stepped?xp:e.tension||e.cubicInterpolationMode==="monotone"?yp:Oe}function Dg(e,t,s,i){let n=t._path;n||(n=t._path=new Path2D,t.path(n,s,i)&&n.closePath()),Ml(e,t.options),e.stroke(n)}function Mg(e,t,s,i){const{segments:n,options:o}=t,r=Un(t);for(const a of n)Ml(e,o,a.style),e.beginPath(),r(e,t,a,{start:s,end:s+i-1})&&e.closePath(),e.stroke()}const Eg=typeof Path2D=="function";function Og(e,t,s,i){Eg&&!t.options.segment?Dg(e,t,s,i):Mg(e,t,s,i)}class rn extends ue{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,s){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const n=i.spanGaps?this._loop:this._fullLoop;dp(this._points,i,t,n,s),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Sp(this,this.options.segment))}first(){const t=this.segments,s=this.points;return t.length&&s[t[0].start]}last(){const t=this.segments,s=this.points,i=t.length;return i&&s[t[i-1].end]}interpolate(t,s){const i=this.options,n=t[s],o=this.points,r=gl(this,{property:s,start:n,end:n});if(!r.length)return;const a=[],l=Tg(i);let c,d;for(c=0,d=r.length;c<d;++c){const{start:h,end:p}=r[c],f=o[h],g=o[p];if(f===g){a.push(f);continue}const m=Math.abs((n-f[s])/(g[s]-f[s])),b=l(f,g,m,i.stepped);b[s]=t[s],a.push(b)}return a.length===1?a[0]:a}pathSegment(t,s,i){return Un(this)(t,this,s,i)}path(t,s,i){const n=this.segments,o=Un(this);let r=this._loop;s=s||0,i=i||this.points.length-s;for(const a of n)r&=o(t,this,a,{start:s,end:s+i-1});return!!r}draw(t,s,i,n){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),Og(t,this,i,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Gr(e,t,s,i){const n=e.options,{[s]:o}=e.getProps([s],i);return Math.abs(t-o)<n.radius+n.hitRadius}class Ag extends ue{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,s,i){const n=this.options,{x:o,y:r}=this.getProps(["x","y"],i);return Math.pow(t-o,2)+Math.pow(s-r,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,s){return Gr(this,t,"x",s)}inYRange(t,s){return Gr(this,t,"y",s)}getCenterPoint(t){const{x:s,y:i}=this.getProps(["x","y"],t);return{x:s,y:i}}size(t){t=t||this.options||{};let s=t.radius||0;s=Math.max(s,s&&t.hoverRadius||0);const i=s&&t.borderWidth||0;return(s+i)*2}draw(t,s){const i=this.options;this.skip||i.radius<.1||!ae(this,s,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Hn(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function Ol(e,t){const{x:s,y:i,base:n,width:o,height:r}=e.getProps(["x","y","base","width","height"],t);let a,l,c,d,h;return e.horizontal?(h=r/2,a=Math.min(s,n),l=Math.max(s,n),c=i-h,d=i+h):(h=o/2,a=s-h,l=s+h,c=Math.min(i,n),d=Math.max(i,n)),{left:a,top:c,right:l,bottom:d}}function xe(e,t,s,i){return e?0:dt(t,s,i)}function Ig(e,t,s){const i=e.options.borderWidth,n=e.borderSkipped,o=nl(i);return{t:xe(n.top,o.top,0,s),r:xe(n.right,o.right,0,t),b:xe(n.bottom,o.bottom,0,s),l:xe(n.left,o.left,0,t)}}function Rg(e,t,s){const{enableBorderRadius:i}=e.getProps(["enableBorderRadius"]),n=e.options.borderRadius,o=Re(n),r=Math.min(t,s),a=e.borderSkipped,l=i||j(n);return{topLeft:xe(!l||a.top||a.left,o.topLeft,0,r),topRight:xe(!l||a.top||a.right,o.topRight,0,r),bottomLeft:xe(!l||a.bottom||a.left,o.bottomLeft,0,r),bottomRight:xe(!l||a.bottom||a.right,o.bottomRight,0,r)}}function Lg(e){const t=Ol(e),s=t.right-t.left,i=t.bottom-t.top,n=Ig(e,s/2,i/2),o=Rg(e,s/2,i/2);return{outer:{x:t.left,y:t.top,w:s,h:i,radius:o},inner:{x:t.left+n.l,y:t.top+n.t,w:s-n.l-n.r,h:i-n.t-n.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,o.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(n.b,n.r))}}}}function Sn(e,t,s,i){const n=t===null,o=s===null,a=e&&!(n&&o)&&Ol(e,i);return a&&(n||oe(t,a.left,a.right))&&(o||oe(s,a.top,a.bottom))}function Ng(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function Fg(e,t){e.rect(t.x,t.y,t.w,t.h)}function Cn(e,t,s={}){const i=e.x!==s.x?-t:0,n=e.y!==s.y?-t:0,o=(e.x+e.w!==s.x+s.w?t:0)-i,r=(e.y+e.h!==s.y+s.h?t:0)-n;return{x:e.x+i,y:e.y+n,w:e.w+o,h:e.h+r,radius:e.radius}}class jg extends ue{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:s,options:{borderColor:i,backgroundColor:n}}=this,{inner:o,outer:r}=Lg(this),a=Ng(r.radius)?Zs:Fg;t.save(),(r.w!==o.w||r.h!==o.h)&&(t.beginPath(),a(t,Cn(r,s,o)),t.clip(),a(t,Cn(o,-s,r)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,Cn(o,s)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,s,i){return Sn(this,t,s,i)}inXRange(t,s){return Sn(this,t,null,s)}inYRange(t,s){return Sn(this,null,t,s)}getCenterPoint(t){const{x:s,y:i,base:n,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(s+n)/2:s,y:o?i:(i+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}var zg=Object.freeze({__proto__:null,ArcElement:$g,BarElement:jg,LineElement:rn,PointElement:Ag});const qn=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Xr=qn.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function Al(e){return qn[e%qn.length]}function Il(e){return Xr[e%Xr.length]}function Bg(e,t){return e.borderColor=Al(t),e.backgroundColor=Il(t),++t}function Hg(e,t){return e.backgroundColor=e.data.map(()=>Al(t++)),t}function Vg(e,t){return e.backgroundColor=e.data.map(()=>Il(t++)),t}function Wg(e){let t=0;return(s,i)=>{const n=e.getDatasetMeta(i).controller;n instanceof To?t=Hg(s,t):n instanceof vl?t=Vg(s,t):n&&(t=Bg(s,t))}}function Jr(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function Ug(e){return e&&(e.borderColor||e.backgroundColor)}function qg(){return J.borderColor!=="rgba(0,0,0,0.1)"||J.backgroundColor!=="rgba(0,0,0,0.1)"}var Kg={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,s){if(!s.enabled)return;const{data:{datasets:i},options:n}=e.config,{elements:o}=n,r=Jr(i)||Ug(n)||o&&Jr(o)||qg();if(!s.forceOverride&&r)return;const a=Wg(e);i.forEach(a)}};function Yg(e,t,s,i,n){const o=n.samples||i;if(o>=s)return e.slice(t,t+s);const r=[],a=(s-2)/(o-2);let l=0;const c=t+s-1;let d=t,h,p,f,g,m;for(r[l++]=e[d],h=0;h<o-2;h++){let b=0,y=0,v;const S=Math.floor((h+1)*a)+1+t,_=Math.min(Math.floor((h+2)*a)+1,s)+t,$=_-S;for(v=S;v<_;v++)b+=e[v].x,y+=e[v].y;b/=$,y/=$;const P=Math.floor(h*a)+1+t,T=Math.min(Math.floor((h+1)*a)+1,s)+t,{x:D,y:M}=e[d];for(f=g=-1,v=P;v<T;v++)g=.5*Math.abs((D-b)*(e[v].y-M)-(D-e[v].x)*(y-M)),g>f&&(f=g,p=e[v],m=v);r[l++]=p,d=m}return r[l++]=e[c],r}function Gg(e,t,s,i){let n=0,o=0,r,a,l,c,d,h,p,f,g,m;const b=[],y=t+s-1,v=e[t].x,_=e[y].x-v;for(r=t;r<t+s;++r){a=e[r],l=(a.x-v)/_*i,c=a.y;const $=l|0;if($===d)c<g?(g=c,h=r):c>m&&(m=c,p=r),n=(o*n+a.x)/++o;else{const P=r-1;if(!N(h)&&!N(p)){const T=Math.min(h,p),D=Math.max(h,p);T!==f&&T!==P&&b.push({...e[T],x:n}),D!==f&&D!==P&&b.push({...e[D],x:n})}r>0&&P!==f&&b.push(e[P]),b.push(a),d=$,o=0,g=m=c,h=p=f=r}}return b}function Rl(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Zr(e){e.data.datasets.forEach(t=>{Rl(t)})}function Xg(e,t){const s=t.length;let i=0,n;const{iScale:o}=e,{min:r,max:a,minDefined:l,maxDefined:c}=o.getUserBounds();return l&&(i=dt(re(t,o.axis,r).lo,0,s-1)),c?n=dt(re(t,o.axis,a).hi+1,i,s)-i:n=s-i,{start:i,count:n}}var Jg={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,s)=>{if(!s.enabled){Zr(e);return}const i=e.width;e.data.datasets.forEach((n,o)=>{const{_data:r,indexAxis:a}=n,l=e.getDatasetMeta(o),c=r||n.data;if(Fs([a,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const d=e.scales[l.xAxisID];if(d.type!=="linear"&&d.type!=="time"||e.options.parsing)return;let{start:h,count:p}=Xg(l,c);const f=s.threshold||4*i;if(p<=f){Rl(n);return}N(r)&&(n._data=c,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(m){this._data=m}}));let g;switch(s.algorithm){case"lttb":g=Yg(c,h,p,i,s);break;case"min-max":g=Gg(c,h,p,i);break;default:throw new Error(`Unsupported decimation algorithm '${s.algorithm}'`)}n._decimated=g})},destroy(e){Zr(e)}};function Zg(e,t,s){const i=e.segments,n=e.points,o=t.points,r=[];for(const a of i){let{start:l,end:c}=a;c=an(l,c,n);const d=Kn(s,n[l],n[c],a.loop);if(!t.segments){r.push({source:a,target:d,start:n[l],end:n[c]});continue}const h=gl(t,d);for(const p of h){const f=Kn(s,o[p.start],o[p.end],p.loop),g=fl(a,n,f);for(const m of g)r.push({source:m,target:p,start:{[s]:Qr(d,f,"start",Math.max)},end:{[s]:Qr(d,f,"end",Math.min)}})}}return r}function Kn(e,t,s,i){if(i)return;let n=t[e],o=s[e];return e==="angle"&&(n=gt(n),o=gt(o)),{property:e,start:n,end:o}}function Qg(e,t){const{x:s=null,y:i=null}=e||{},n=t.points,o=[];return t.segments.forEach(({start:r,end:a})=>{a=an(r,a,n);const l=n[r],c=n[a];i!==null?(o.push({x:l.x,y:i}),o.push({x:c.x,y:i})):s!==null&&(o.push({x:s,y:l.y}),o.push({x:s,y:c.y}))}),o}function an(e,t,s){for(;t>e;t--){const i=s[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Qr(e,t,s,i){return e&&t?i(e[s],t[s]):e?e[s]:t?t[s]:0}function Ll(e,t){let s=[],i=!1;return X(e)?(i=!0,s=e):s=Qg(e,t),s.length?new rn({points:s,options:{tension:0},_loop:i,_fullLoop:i}):null}function ta(e){return e&&e.fill!==!1}function tm(e,t,s){let n=e[t].fill;const o=[t];let r;if(!s)return n;for(;n!==!1&&o.indexOf(n)===-1;){if(!Q(n))return n;if(r=e[n],!r)return!1;if(r.visible)return n;o.push(n),n=r.fill}return!1}function em(e,t,s){const i=om(e);if(j(i))return isNaN(i.value)?!1:i;let n=parseFloat(i);return Q(n)&&Math.floor(n)===n?sm(i[0],t,n,s):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function sm(e,t,s,i){return(e==="-"||e==="+")&&(s=t+s),s===t||s<0||s>=i?!1:s}function im(e,t){let s=null;return e==="start"?s=t.bottom:e==="end"?s=t.top:j(e)?s=t.getPixelForValue(e.value):t.getBasePixel&&(s=t.getBasePixel()),s}function nm(e,t,s){let i;return e==="start"?i=s:e==="end"?i=t.options.reverse?t.min:t.max:j(e)?i=e.value:i=t.getBaseValue(),i}function om(e){const t=e.options,s=t.fill;let i=E(s&&s.target,s);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function rm(e){const{scale:t,index:s,line:i}=e,n=[],o=i.segments,r=i.points,a=am(t,s);a.push(Ll({x:null,y:t.bottom},i));for(let l=0;l<o.length;l++){const c=o[l];for(let d=c.start;d<=c.end;d++)lm(n,r[d],a)}return new rn({points:n,options:{}})}function am(e,t){const s=[],i=e.getMatchingVisibleMetas("line");for(let n=0;n<i.length;n++){const o=i[n];if(o.index===t)break;o.hidden||s.unshift(o.dataset)}return s}function lm(e,t,s){const i=[];for(let n=0;n<s.length;n++){const o=s[n],{first:r,last:a,point:l}=cm(o,t,"x");if(!(!l||r&&a)){if(r)i.unshift(l);else if(e.push(l),!a)break}}e.push(...i)}function cm(e,t,s){const i=e.interpolate(t,s);if(!i)return{};const n=i[s],o=e.segments,r=e.points;let a=!1,l=!1;for(let c=0;c<o.length;c++){const d=o[c],h=r[d.start][s],p=r[d.end][s];if(oe(n,h,p)){a=n===h,l=n===p;break}}return{first:a,last:l,point:i}}class Nl{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,s,i){const{x:n,y:o,radius:r}=this;return s=s||{start:0,end:Y},t.arc(n,o,r,s.end,s.start,!0),!i.bounds}interpolate(t){const{x:s,y:i,radius:n}=this,o=t.angle;return{x:s+Math.cos(o)*n,y:i+Math.sin(o)*n,angle:o}}}function dm(e){const{chart:t,fill:s,line:i}=e;if(Q(s))return hm(t,s);if(s==="stack")return rm(e);if(s==="shape")return!0;const n=um(e);return n instanceof Nl?n:Ll(n,i)}function hm(e,t){const s=e.getDatasetMeta(t);return s&&e.isDatasetVisible(t)?s.dataset:null}function um(e){return(e.scale||{}).getPointPositionForValue?fm(e):pm(e)}function pm(e){const{scale:t={},fill:s}=e,i=im(s,t);if(Q(i)){const n=t.isHorizontal();return{x:n?i:null,y:n?null:i}}return null}function fm(e){const{scale:t,fill:s}=e,i=t.options,n=t.getLabels().length,o=i.reverse?t.max:t.min,r=nm(s,t,o),a=[];if(i.grid.circular){const l=t.getPointPositionForValue(0,o);return new Nl({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<n;++l)a.push(t.getPointPositionForValue(l,r));return a}function Pn(e,t,s){const i=dm(t),{chart:n,index:o,line:r,scale:a,axis:l}=t,c=r.options,d=c.fill,h=c.backgroundColor,{above:p=h,below:f=h}=d||{},g=n.getDatasetMeta(o),m=ml(n,g);i&&r.points.length&&(en(e,s),gm(e,{line:r,target:i,above:p,below:f,area:s,scale:a,axis:l,clip:m}),sn(e))}function gm(e,t){const{line:s,target:i,above:n,below:o,area:r,scale:a,clip:l}=t,c=s._loop?"angle":t.axis;e.save();let d=o;o!==n&&(c==="x"?(ea(e,i,r.top),Tn(e,{line:s,target:i,color:n,scale:a,property:c,clip:l}),e.restore(),e.save(),ea(e,i,r.bottom)):c==="y"&&(sa(e,i,r.left),Tn(e,{line:s,target:i,color:o,scale:a,property:c,clip:l}),e.restore(),e.save(),sa(e,i,r.right),d=n)),Tn(e,{line:s,target:i,color:d,scale:a,property:c,clip:l}),e.restore()}function ea(e,t,s){const{segments:i,points:n}=t;let o=!0,r=!1;e.beginPath();for(const a of i){const{start:l,end:c}=a,d=n[l],h=n[an(l,c,n)];o?(e.moveTo(d.x,d.y),o=!1):(e.lineTo(d.x,s),e.lineTo(d.x,d.y)),r=!!t.pathSegment(e,a,{move:r}),r?e.closePath():e.lineTo(h.x,s)}e.lineTo(t.first().x,s),e.closePath(),e.clip()}function sa(e,t,s){const{segments:i,points:n}=t;let o=!0,r=!1;e.beginPath();for(const a of i){const{start:l,end:c}=a,d=n[l],h=n[an(l,c,n)];o?(e.moveTo(d.x,d.y),o=!1):(e.lineTo(s,d.y),e.lineTo(d.x,d.y)),r=!!t.pathSegment(e,a,{move:r}),r?e.closePath():e.lineTo(s,h.y)}e.lineTo(s,t.first().y),e.closePath(),e.clip()}function Tn(e,t){const{line:s,target:i,property:n,color:o,scale:r,clip:a}=t,l=Zg(s,i,n);for(const{source:c,target:d,start:h,end:p}of l){const{style:{backgroundColor:f=o}={}}=c,g=i!==!0;e.save(),e.fillStyle=f,mm(e,r,a,g&&Kn(n,h,p)),e.beginPath();const m=!!s.pathSegment(e,c);let b;if(g){m?e.closePath():ia(e,i,p,n);const y=!!i.pathSegment(e,d,{move:m,reverse:!0});b=m&&y,b||ia(e,i,h,n)}e.closePath(),e.fill(b?"evenodd":"nonzero"),e.restore()}}function mm(e,t,s,i){const n=t.chart.chartArea,{property:o,start:r,end:a}=i||{};if(o==="x"||o==="y"){let l,c,d,h;o==="x"?(l=r,c=n.top,d=a,h=n.bottom):(l=n.left,c=r,d=n.right,h=a),e.beginPath(),s&&(l=Math.max(l,s.left),d=Math.min(d,s.right),c=Math.max(c,s.top),h=Math.min(h,s.bottom)),e.rect(l,c,d-l,h-c),e.clip()}}function ia(e,t,s,i){const n=t.interpolate(s,i);n&&e.lineTo(n.x,n.y)}var bm={id:"filler",afterDatasetsUpdate(e,t,s){const i=(e.data.datasets||[]).length,n=[];let o,r,a,l;for(r=0;r<i;++r)o=e.getDatasetMeta(r),a=o.dataset,l=null,a&&a.options&&a instanceof rn&&(l={visible:e.isDatasetVisible(r),index:r,fill:em(a,r,i),chart:e,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,n.push(l);for(r=0;r<i;++r)l=n[r],!(!l||l.fill===!1)&&(l.fill=tm(n,r,s.propagate))},beforeDraw(e,t,s){const i=s.drawTime==="beforeDraw",n=e.getSortedVisibleDatasetMetas(),o=e.chartArea;for(let r=n.length-1;r>=0;--r){const a=n[r].$filler;a&&(a.line.updateControlPoints(o,a.axis),i&&a.fill&&Pn(e.ctx,a,o))}},beforeDatasetsDraw(e,t,s){if(s.drawTime!=="beforeDatasetsDraw")return;const i=e.getSortedVisibleDatasetMetas();for(let n=i.length-1;n>=0;--n){const o=i[n].$filler;ta(o)&&Pn(e.ctx,o,e.chartArea)}},beforeDatasetDraw(e,t,s){const i=t.meta.$filler;!ta(i)||s.drawTime!=="beforeDatasetDraw"||Pn(e.ctx,i,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const na=(e,t)=>{let{boxHeight:s=t,boxWidth:i=t}=e;return e.usePointStyle&&(s=Math.min(s,t),i=e.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:s,itemHeight:Math.max(t,s)}},xm=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class oa extends ue{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,s,i){this.maxWidth=t,this.maxHeight=s,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let s=K(t.generateLabels,[this.chart],this)||[];t.filter&&(s=s.filter(i=>t.filter(i,this.chart.data))),t.sort&&(s=s.sort((i,n)=>t.sort(i,n,this.chart.data))),this.options.reverse&&s.reverse(),this.legendItems=s}fit(){const{options:t,ctx:s}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,n=rt(i.font),o=n.size,r=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=na(i,o);let c,d;s.font=n.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(r,o,a,l)+10):(d=this.maxHeight,c=this._fitCols(r,n,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,s,i,n){const{ctx:o,maxWidth:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=n+a;let h=t;o.textAlign="left",o.textBaseline="middle";let p=-1,f=-d;return this.legendItems.forEach((g,m)=>{const b=i+s/2+o.measureText(g.text).width;(m===0||c[c.length-1]+b+2*a>r)&&(h+=d,c[c.length-(m>0?0:1)]=0,f+=d,p++),l[m]={left:0,top:f,row:p,width:b,height:n},c[c.length-1]+=b+a}),h}_fitCols(t,s,i,n){const{ctx:o,maxHeight:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=r-t;let h=a,p=0,f=0,g=0,m=0;return this.legendItems.forEach((b,y)=>{const{itemWidth:v,itemHeight:S}=ym(i,s,o,b,n);y>0&&f+S+2*a>d&&(h+=p+a,c.push({width:p,height:f}),g+=p+a,m++,p=f=0),l[y]={left:g,top:f,col:m,width:v,height:S},p=Math.max(p,v),f+=S+a}),h+=p,c.push({width:p,height:f}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:s,options:{align:i,labels:{padding:n},rtl:o}}=this,r=rs(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=ft(i,this.left+n,this.right-this.lineWidths[a]);for(const c of s)a!==c.row&&(a=c.row,l=ft(i,this.left+n,this.right-this.lineWidths[a])),c.top+=this.top+t+n,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+n}else{let a=0,l=ft(i,this.top+t+n,this.bottom-this.columnSizes[a].height);for(const c of s)c.col!==a&&(a=c.col,l=ft(i,this.top+t+n,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+n,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;en(t,this),this._draw(),sn(t)}}_draw(){const{options:t,columnSizes:s,lineWidths:i,ctx:n}=this,{align:o,labels:r}=t,a=J.color,l=rs(t.rtl,this.left,this.width),c=rt(r.font),{padding:d}=r,h=c.size,p=h/2;let f;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=c.string;const{boxWidth:g,boxHeight:m,itemHeight:b}=na(r,h),y=function(P,T,D){if(isNaN(g)||g<=0||isNaN(m)||m<0)return;n.save();const M=E(D.lineWidth,1);if(n.fillStyle=E(D.fillStyle,a),n.lineCap=E(D.lineCap,"butt"),n.lineDashOffset=E(D.lineDashOffset,0),n.lineJoin=E(D.lineJoin,"miter"),n.lineWidth=M,n.strokeStyle=E(D.strokeStyle,a),n.setLineDash(E(D.lineDash,[])),r.usePointStyle){const I={radius:m*Math.SQRT2/2,pointStyle:D.pointStyle,rotation:D.rotation,borderWidth:M},R=l.xPlus(P,g/2),z=T+p;il(n,I,R,z,r.pointStyleWidth&&g)}else{const I=T+Math.max((h-m)/2,0),R=l.leftForLtr(P,g),z=Re(D.borderRadius);n.beginPath(),Object.values(z).some(ut=>ut!==0)?Zs(n,{x:R,y:I,w:g,h:m,radius:z}):n.rect(R,I,g,m),n.fill(),M!==0&&n.stroke()}n.restore()},v=function(P,T,D){Ge(n,D.text,P,T+b/2,c,{strikethrough:D.hidden,textAlign:l.textAlign(D.textAlign)})},S=this.isHorizontal(),_=this._computeTitleHeight();S?f={x:ft(o,this.left+d,this.right-i[0]),y:this.top+d+_,line:0}:f={x:this.left+d,y:ft(o,this.top+_+d,this.bottom-s[0].height),line:0},hl(this.ctx,t.textDirection);const $=b+d;this.legendItems.forEach((P,T)=>{n.strokeStyle=P.fontColor,n.fillStyle=P.fontColor;const D=n.measureText(P.text).width,M=l.textAlign(P.textAlign||(P.textAlign=r.textAlign)),I=g+p+D;let R=f.x,z=f.y;l.setWidth(this.width),S?T>0&&R+I+d>this.right&&(z=f.y+=$,f.line++,R=f.x=ft(o,this.left+d,this.right-i[f.line])):T>0&&z+$>this.bottom&&(R=f.x=R+s[f.line].width+d,f.line++,z=f.y=ft(o,this.top+_+d,this.bottom-s[f.line].height));const ut=l.x(R);if(y(ut,z,P),R=Tu(M,R+g+p,S?R+I:this.right,t.rtl),v(l.x(R),z,P),S)f.x+=I+d;else if(typeof P.text!="string"){const Pt=c.lineHeight;f.y+=Fl(P,Pt)+d}else f.y+=$}),ul(this.ctx,t.textDirection)}drawTitle(){const t=this.options,s=t.title,i=rt(s.font),n=yt(s.padding);if(!s.display)return;const o=rs(t.rtl,this.left,this.width),r=this.ctx,a=s.position,l=i.size/2,c=n.top+l;let d,h=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),d=this.top+c,h=ft(t.align,h,this.right-p);else{const g=this.columnSizes.reduce((m,b)=>Math.max(m,b.height),0);d=c+ft(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const f=ft(a,h,h+p);r.textAlign=o.textAlign(vo(a)),r.textBaseline="middle",r.strokeStyle=s.color,r.fillStyle=s.color,r.font=i.string,Ge(r,s.text,f,d,i)}_computeTitleHeight(){const t=this.options.title,s=rt(t.font),i=yt(t.padding);return t.display?s.lineHeight+i.height:0}_getLegendItemAt(t,s){let i,n,o;if(oe(t,this.left,this.right)&&oe(s,this.top,this.bottom)){for(o=this.legendHitBoxes,i=0;i<o.length;++i)if(n=o[i],oe(t,n.left,n.left+n.width)&&oe(s,n.top,n.top+n.height))return this.legendItems[i]}return null}handleEvent(t){const s=this.options;if(!wm(t.type,s))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,o=xm(n,i);n&&!o&&K(s.onLeave,[t,n,this],this),this._hoveredItem=i,i&&!o&&K(s.onHover,[t,i,this],this)}else i&&K(s.onClick,[t,i,this],this)}}function ym(e,t,s,i,n){const o=vm(i,e,t,s),r=km(n,i,t.lineHeight);return{itemWidth:o,itemHeight:r}}function vm(e,t,s,i){let n=e.text;return n&&typeof n!="string"&&(n=n.reduce((o,r)=>o.length>r.length?o:r)),t+s.size/2+i.measureText(n).width}function km(e,t,s){let i=e;return typeof t.text!="string"&&(i=Fl(t,s)),i}function Fl(e,t){const s=e.text?e.text.length:0;return t*s}function wm(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var $m={id:"legend",_element:oa,start(e,t,s){const i=e.legend=new oa({ctx:e.ctx,options:s,chart:e});bt.configure(e,i,s),bt.addBox(e,i)},stop(e){bt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,s){const i=e.legend;bt.configure(e,i,s),i.options=s},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,s){const i=t.datasetIndex,n=s.chart;n.isDatasetVisible(i)?(n.hide(i),t.hidden=!0):(n.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:s,pointStyle:i,textAlign:n,color:o,useBorderRadius:r,borderRadius:a}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(s?0:void 0),d=yt(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:n||c.textAlign,borderRadius:r&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Eo extends ue{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,s){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=s;const n=X(i.text)?i.text.length:1;this._padding=yt(i.padding);const o=n*rt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:s,left:i,bottom:n,right:o,options:r}=this,a=r.align;let l=0,c,d,h;return this.isHorizontal()?(d=ft(a,i,o),h=s+t,c=o-i):(r.position==="left"?(d=i+t,h=ft(a,n,s),l=V*-.5):(d=o-t,h=ft(a,s,n),l=V*.5),c=n-s),{titleX:d,titleY:h,maxWidth:c,rotation:l}}draw(){const t=this.ctx,s=this.options;if(!s.display)return;const i=rt(s.font),o=i.lineHeight/2+this._padding.top,{titleX:r,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(o);Ge(t,s.text,0,0,i,{color:s.color,maxWidth:l,rotation:c,textAlign:vo(s.align),textBaseline:"middle",translation:[r,a]})}}function _m(e,t){const s=new Eo({ctx:e.ctx,options:t,chart:e});bt.configure(e,s,t),bt.addBox(e,s),e.titleBlock=s}var Sm={id:"title",_element:Eo,start(e,t,s){_m(e,s)},stop(e){const t=e.titleBlock;bt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,s){const i=e.titleBlock;bt.configure(e,i,s),i.options=s},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const _i=new WeakMap;var Cm={id:"subtitle",start(e,t,s){const i=new Eo({ctx:e.ctx,options:s,chart:e});bt.configure(e,i,s),bt.addBox(e,i),_i.set(e,i)},stop(e){bt.removeBox(e,_i.get(e)),_i.delete(e)},beforeUpdate(e,t,s){const i=_i.get(e);bt.configure(e,i,s),i.options=s},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const zs={average(e){if(!e.length)return!1;let t,s,i=new Set,n=0,o=0;for(t=0,s=e.length;t<s;++t){const a=e[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();i.add(l.x),n+=l.y,++o}}return o===0||i.size===0?!1:{x:[...i].reduce((a,l)=>a+l)/i.size,y:n/o}},nearest(e,t){if(!e.length)return!1;let s=t.x,i=t.y,n=Number.POSITIVE_INFINITY,o,r,a;for(o=0,r=e.length;o<r;++o){const l=e[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=zn(t,c);d<n&&(n=d,a=l)}}if(a){const l=a.tooltipPosition();s=l.x,i=l.y}return{x:s,y:i}}};function qt(e,t){return t&&(X(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function ie(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Pm(e,t){const{element:s,datasetIndex:i,index:n}=t,o=e.getDatasetMeta(i).controller,{label:r,value:a}=o.getLabelAndValue(n);return{chart:e,label:r,parsed:o.getParsed(n),raw:e.data.datasets[i].data[n],formattedValue:a,dataset:o.getDataset(),dataIndex:n,datasetIndex:i,element:s}}function ra(e,t){const s=e.chart.ctx,{body:i,footer:n,title:o}=e,{boxWidth:r,boxHeight:a}=t,l=rt(t.bodyFont),c=rt(t.titleFont),d=rt(t.footerFont),h=o.length,p=n.length,f=i.length,g=yt(t.padding);let m=g.height,b=0,y=i.reduce((_,$)=>_+$.before.length+$.lines.length+$.after.length,0);if(y+=e.beforeBody.length+e.afterBody.length,h&&(m+=h*c.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),y){const _=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;m+=f*_+(y-f)*l.lineHeight+(y-1)*t.bodySpacing}p&&(m+=t.footerMarginTop+p*d.lineHeight+(p-1)*t.footerSpacing);let v=0;const S=function(_){b=Math.max(b,s.measureText(_).width+v)};return s.save(),s.font=c.string,U(e.title,S),s.font=l.string,U(e.beforeBody.concat(e.afterBody),S),v=t.displayColors?r+2+t.boxPadding:0,U(i,_=>{U(_.before,S),U(_.lines,S),U(_.after,S)}),v=0,s.font=d.string,U(e.footer,S),s.restore(),b+=g.width,{width:b,height:m}}function Tm(e,t){const{y:s,height:i}=t;return s<i/2?"top":s>e.height-i/2?"bottom":"center"}function Dm(e,t,s,i){const{x:n,width:o}=i,r=s.caretSize+s.caretPadding;if(e==="left"&&n+o+r>t.width||e==="right"&&n-o-r<0)return!0}function Mm(e,t,s,i){const{x:n,width:o}=s,{width:r,chartArea:{left:a,right:l}}=e;let c="center";return i==="center"?c=n<=(a+l)/2?"left":"right":n<=o/2?c="left":n>=r-o/2&&(c="right"),Dm(c,e,t,s)&&(c="center"),c}function aa(e,t,s){const i=s.yAlign||t.yAlign||Tm(e,s);return{xAlign:s.xAlign||t.xAlign||Mm(e,t,s,i),yAlign:i}}function Em(e,t){let{x:s,width:i}=e;return t==="right"?s-=i:t==="center"&&(s-=i/2),s}function Om(e,t,s){let{y:i,height:n}=e;return t==="top"?i+=s:t==="bottom"?i-=n+s:i-=n/2,i}function la(e,t,s,i){const{caretSize:n,caretPadding:o,cornerRadius:r}=e,{xAlign:a,yAlign:l}=s,c=n+o,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:f}=Re(r);let g=Em(t,a);const m=Om(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(d,p)+n:a==="right"&&(g+=Math.max(h,f)+n),{x:dt(g,0,i.width-t.width),y:dt(m,0,i.height-t.height)}}function Si(e,t,s){const i=yt(s.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-i.right:e.x+i.left}function ca(e){return qt([],ie(e))}function Am(e,t,s){return $e(e,{tooltip:t,tooltipItems:s,type:"tooltip"})}function da(e,t){const s=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return s?e.override(s):e}const jl={beforeTitle:ee,title(e){if(e.length>0){const t=e[0],s=t.chart.data.labels,i=s?s.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return s[t.dataIndex]}return""},afterTitle:ee,beforeBody:ee,beforeLabel:ee,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const s=e.formattedValue;return N(s)||(t+=s),t},labelColor(e){const s=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:s.borderColor,backgroundColor:s.backgroundColor,borderWidth:s.borderWidth,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const s=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:s.pointStyle,rotation:s.rotation}},afterLabel:ee,afterBody:ee,beforeFooter:ee,footer:ee,afterFooter:ee};function kt(e,t,s,i){const n=e[t].call(s,i);return typeof n>"u"?jl[t].call(s,i):n}class ha extends ue{static positioners=zs;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const s=this.chart,i=this.options.setContext(this.getContext()),n=i.enabled&&s.options.animation&&i.animations,o=new bl(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=Am(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,s){const{callbacks:i}=s,n=kt(i,"beforeTitle",this,t),o=kt(i,"title",this,t),r=kt(i,"afterTitle",this,t);let a=[];return a=qt(a,ie(n)),a=qt(a,ie(o)),a=qt(a,ie(r)),a}getBeforeBody(t,s){return ca(kt(s.callbacks,"beforeBody",this,t))}getBody(t,s){const{callbacks:i}=s,n=[];return U(t,o=>{const r={before:[],lines:[],after:[]},a=da(i,o);qt(r.before,ie(kt(a,"beforeLabel",this,o))),qt(r.lines,kt(a,"label",this,o)),qt(r.after,ie(kt(a,"afterLabel",this,o))),n.push(r)}),n}getAfterBody(t,s){return ca(kt(s.callbacks,"afterBody",this,t))}getFooter(t,s){const{callbacks:i}=s,n=kt(i,"beforeFooter",this,t),o=kt(i,"footer",this,t),r=kt(i,"afterFooter",this,t);let a=[];return a=qt(a,ie(n)),a=qt(a,ie(o)),a=qt(a,ie(r)),a}_createItems(t){const s=this._active,i=this.chart.data,n=[],o=[],r=[];let a=[],l,c;for(l=0,c=s.length;l<c;++l)a.push(Pm(this.chart,s[l]));return t.filter&&(a=a.filter((d,h,p)=>t.filter(d,h,p,i))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,i))),U(a,d=>{const h=da(t.callbacks,d);n.push(kt(h,"labelColor",this,d)),o.push(kt(h,"labelPointStyle",this,d)),r.push(kt(h,"labelTextColor",this,d))}),this.labelColors=n,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=a,a}update(t,s){const i=this.options.setContext(this.getContext()),n=this._active;let o,r=[];if(!n.length)this.opacity!==0&&(o={opacity:0});else{const a=zs[i.position].call(this,n,this._eventPosition);r=this._createItems(i),this.title=this.getTitle(r,i),this.beforeBody=this.getBeforeBody(r,i),this.body=this.getBody(r,i),this.afterBody=this.getAfterBody(r,i),this.footer=this.getFooter(r,i);const l=this._size=ra(this,i),c=Object.assign({},a,l),d=aa(this.chart,i,c),h=la(i,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,o={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:s})}drawCaret(t,s,i,n){const o=this.getCaretPosition(t,i,n);s.lineTo(o.x1,o.y1),s.lineTo(o.x2,o.y2),s.lineTo(o.x3,o.y3)}getCaretPosition(t,s,i){const{xAlign:n,yAlign:o}=this,{caretSize:r,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:h}=Re(a),{x:p,y:f}=t,{width:g,height:m}=s;let b,y,v,S,_,$;return o==="center"?(_=f+m/2,n==="left"?(b=p,y=b-r,S=_+r,$=_-r):(b=p+g,y=b+r,S=_-r,$=_+r),v=b):(n==="left"?y=p+Math.max(l,d)+r:n==="right"?y=p+g-Math.max(c,h)-r:y=this.caretX,o==="top"?(S=f,_=S-r,b=y-r,v=y+r):(S=f+m,_=S+r,b=y+r,v=y-r),$=S),{x1:b,x2:y,x3:v,y1:S,y2:_,y3:$}}drawTitle(t,s,i){const n=this.title,o=n.length;let r,a,l;if(o){const c=rs(i.rtl,this.x,this.width);for(t.x=Si(this,i.titleAlign,i),s.textAlign=c.textAlign(i.titleAlign),s.textBaseline="middle",r=rt(i.titleFont),a=i.titleSpacing,s.fillStyle=i.titleColor,s.font=r.string,l=0;l<o;++l)s.fillText(n[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+a,l+1===o&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,s,i,n,o){const r=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=o,d=rt(o.bodyFont),h=Si(this,"left",o),p=n.x(h),f=l<d.lineHeight?(d.lineHeight-l)/2:0,g=s.y+f;if(o.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},b=n.leftForLtr(p,c)+c/2,y=g+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Hn(t,m,b,y),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,Hn(t,m,b,y)}else{t.lineWidth=j(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const m=n.leftForLtr(p,c),b=n.leftForLtr(n.xPlus(p,1),c-2),y=Re(r.borderRadius);Object.values(y).some(v=>v!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Zs(t,{x:m,y:g,w:c,h:l,radius:y}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),Zs(t,{x:b,y:g+1,w:c-2,h:l-2,radius:y}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(m,g,c,l),t.strokeRect(m,g,c,l),t.fillStyle=r.backgroundColor,t.fillRect(b,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,s,i){const{body:n}=this,{bodySpacing:o,bodyAlign:r,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:d}=i,h=rt(i.bodyFont);let p=h.lineHeight,f=0;const g=rs(i.rtl,this.x,this.width),m=function(D){s.fillText(D,g.x(t.x+f),t.y+p/2),t.y+=p+o},b=g.textAlign(r);let y,v,S,_,$,P,T;for(s.textAlign=r,s.textBaseline="middle",s.font=h.string,t.x=Si(this,b,i),s.fillStyle=i.bodyColor,U(this.beforeBody,m),f=a&&b!=="right"?r==="center"?c/2+d:c+2+d:0,_=0,P=n.length;_<P;++_){for(y=n[_],v=this.labelTextColors[_],s.fillStyle=v,U(y.before,m),S=y.lines,a&&S.length&&(this._drawColorBox(s,t,_,g,i),p=Math.max(h.lineHeight,l)),$=0,T=S.length;$<T;++$)m(S[$]),p=h.lineHeight;U(y.after,m)}f=0,p=h.lineHeight,U(this.afterBody,m),t.y-=o}drawFooter(t,s,i){const n=this.footer,o=n.length;let r,a;if(o){const l=rs(i.rtl,this.x,this.width);for(t.x=Si(this,i.footerAlign,i),t.y+=i.footerMarginTop,s.textAlign=l.textAlign(i.footerAlign),s.textBaseline="middle",r=rt(i.footerFont),s.fillStyle=i.footerColor,s.font=r.string,a=0;a<o;++a)s.fillText(n[a],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+i.footerSpacing}}drawBackground(t,s,i,n){const{xAlign:o,yAlign:r}=this,{x:a,y:l}=t,{width:c,height:d}=i,{topLeft:h,topRight:p,bottomLeft:f,bottomRight:g}=Re(n.cornerRadius);s.fillStyle=n.backgroundColor,s.strokeStyle=n.borderColor,s.lineWidth=n.borderWidth,s.beginPath(),s.moveTo(a+h,l),r==="top"&&this.drawCaret(t,s,i,n),s.lineTo(a+c-p,l),s.quadraticCurveTo(a+c,l,a+c,l+p),r==="center"&&o==="right"&&this.drawCaret(t,s,i,n),s.lineTo(a+c,l+d-g),s.quadraticCurveTo(a+c,l+d,a+c-g,l+d),r==="bottom"&&this.drawCaret(t,s,i,n),s.lineTo(a+f,l+d),s.quadraticCurveTo(a,l+d,a,l+d-f),r==="center"&&o==="left"&&this.drawCaret(t,s,i,n),s.lineTo(a,l+h),s.quadraticCurveTo(a,l,a+h,l),s.closePath(),s.fill(),n.borderWidth>0&&s.stroke()}_updateAnimationTarget(t){const s=this.chart,i=this.$animations,n=i&&i.x,o=i&&i.y;if(n||o){const r=zs[t.position].call(this,this._active,this._eventPosition);if(!r)return;const a=this._size=ra(this,t),l=Object.assign({},r,this._size),c=aa(s,t,l),d=la(t,l,c,s);(n._to!==d.x||o._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const s=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(s);const n={width:this.width,height:this.height},o={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const r=yt(s.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;s.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(o,t,n,s),hl(t,s.textDirection),o.y+=r.top,this.drawTitle(o,t,s),this.drawBody(o,t,s),this.drawFooter(o,t,s),ul(t,s.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,s){const i=this._active,n=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),o=!Ni(i,n),r=this._positionChanged(n,s);(o||r)&&(this._active=n,this._eventPosition=s,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,s,i=!0){if(s&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,o=this._active||[],r=this._getActiveElements(t,o,s,i),a=this._positionChanged(r,t),l=s||!Ni(r,o)||a;return l&&(this._active=r,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,s))),l}_getActiveElements(t,s,i,n){const o=this.options;if(t.type==="mouseout")return[];if(!n)return s.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,o.mode,o,i);return o.reverse&&r.reverse(),r}_positionChanged(t,s){const{caretX:i,caretY:n,options:o}=this,r=zs[o.position].call(this,t,s);return r!==!1&&(i!==r.x||n!==r.y)}}var Im={id:"tooltip",_element:ha,positioners:zs,afterInit(e,t,s){s&&(e.tooltip=new ha({chart:e,options:s}))},beforeUpdate(e,t,s){e.tooltip&&e.tooltip.initialize(s)},reset(e,t,s){e.tooltip&&e.tooltip.initialize(s)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const s={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...s,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",s)}},afterEvent(e,t){if(e.tooltip){const s=t.replay;e.tooltip.handleEvent(t.event,s,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:jl},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Rm=Object.freeze({__proto__:null,Colors:Kg,Decimation:Jg,Filler:bm,Legend:$m,SubTitle:Cm,Title:Sm,Tooltip:Im});const Lm=(e,t,s,i)=>(typeof t=="string"?(s=e.push(t)-1,i.unshift({index:s,label:t})):isNaN(t)&&(s=null),s);function Nm(e,t,s,i){const n=e.indexOf(t);if(n===-1)return Lm(e,t,s,i);const o=e.lastIndexOf(t);return n!==o?s:n}const Fm=(e,t)=>e===null?null:dt(Math.round(e),0,t);function ua(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class jm extends ts{static id="category";static defaults={ticks:{callback:ua}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const s=this._addedLabels;if(s.length){const i=this.getLabels();for(const{index:n,label:o}of s)i[n]===o&&i.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,s){if(N(t))return null;const i=this.getLabels();return s=isFinite(s)&&i[s]===t?s:Nm(i,t,E(s,t),this._addedLabels),Fm(s,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:s}=this.getUserBounds();let{min:i,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),s||(n=this.getLabels().length-1)),this.min=i,this.max=n}buildTicks(){const t=this.min,s=this.max,i=this.options.offset,n=[];let o=this.getLabels();o=t===0&&s===o.length-1?o:o.slice(t,s+1),this._valueRange=Math.max(o.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let r=t;r<=s;r++)n.push({value:r});return n}getLabelForValue(t){return ua.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const s=this.ticks;return t<0||t>s.length-1?null:this.getPixelForValue(s[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function zm(e,t){const s=[],{bounds:n,step:o,min:r,max:a,precision:l,count:c,maxTicks:d,maxDigits:h,includeBounds:p}=e,f=o||1,g=d-1,{min:m,max:b}=t,y=!N(r),v=!N(a),S=!N(c),_=(b-m)/(h+1);let $=rr((b-m)/g/f)*f,P,T,D,M;if($<1e-14&&!y&&!v)return[{value:m},{value:b}];M=Math.ceil(b/$)-Math.floor(m/$),M>g&&($=rr(M*$/g/f)*f),N(l)||(P=Math.pow(10,l),$=Math.ceil($*P)/P),n==="ticks"?(T=Math.floor(m/$)*$,D=Math.ceil(b/$)*$):(T=m,D=b),y&&v&&o&&ku((a-r)/o,$/1e3)?(M=Math.round(Math.min((a-r)/$,d)),$=(a-r)/M,T=r,D=a):S?(T=y?r:T,D=v?a:D,M=c-1,$=(D-T)/M):(M=(D-T)/$,Hs(M,Math.round(M),$/1e3)?M=Math.round(M):M=Math.ceil(M));const I=Math.max(ar($),ar(T));P=Math.pow(10,N(l)?I:l),T=Math.round(T*P)/P,D=Math.round(D*P)/P;let R=0;for(y&&(p&&T!==r?(s.push({value:r}),T<r&&R++,Hs(Math.round((T+R*$)*P)/P,r,pa(r,_,e))&&R++):T<r&&R++);R<M;++R){const z=Math.round((T+R*$)*P)/P;if(v&&z>a)break;s.push({value:z})}return v&&p&&D!==a?s.length&&Hs(s[s.length-1].value,a,pa(a,_,e))?s[s.length-1].value=a:s.push({value:a}):(!v||D===a)&&s.push({value:D}),s}function pa(e,t,{horizontal:s,minRotation:i}){const n=Bt(i),o=(s?Math.sin(n):Math.cos(n))||.001,r=.75*t*(""+e).length;return Math.min(t/o,r)}class Wi extends ts{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,s){return N(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:s,maxDefined:i}=this.getUserBounds();let{min:n,max:o}=this;const r=l=>n=s?n:l,a=l=>o=i?o:l;if(t){const l=Yt(n),c=Yt(o);l<0&&c<0?a(0):l>0&&c>0&&r(0)}if(n===o){let l=o===0?1:Math.abs(o*.05);a(o+l),t||r(n-l)}this.min=n,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:s,stepSize:i}=t,n;return i?(n=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),s=s||11),s&&(n=Math.min(s,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,s=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const n={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:s.precision,step:s.stepSize,count:s.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:s.minRotation||0,includeBounds:s.includeBounds!==!1},o=this._range||this,r=zm(n,o);return t.bounds==="ticks"&&Ya(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let s=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const n=(i-s)/Math.max(t.length-1,1)/2;s-=n,i+=n}this._startValue=s,this._endValue=i,this._valueRange=i-s}getLabelForValue(t){return di(t,this.chart.options.locale,this.options.ticks.format)}}class Bm extends Wi{static id="linear";static defaults={ticks:{callback:tn.formatters.numeric}};determineDataLimits(){const{min:t,max:s}=this.getMinMax(!0);this.min=Q(t)?t:0,this.max=Q(s)?s:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),s=t?this.width:this.height,i=Bt(this.options.ticks.minRotation),n=(t?Math.sin(i):Math.cos(i))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(s/Math.min(40,o.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const ti=e=>Math.floor(me(e)),Me=(e,t)=>Math.pow(10,ti(e)+t);function fa(e){return e/Math.pow(10,ti(e))===1}function ga(e,t,s){const i=Math.pow(10,s),n=Math.floor(e/i);return Math.ceil(t/i)-n}function Hm(e,t){const s=t-e;let i=ti(s);for(;ga(e,t,i)>10;)i++;for(;ga(e,t,i)<10;)i--;return Math.min(i,ti(e))}function Vm(e,{min:t,max:s}){t=Tt(e.min,t);const i=[],n=ti(t);let o=Hm(t,s),r=o<0?Math.pow(10,Math.abs(o)):1;const a=Math.pow(10,o),l=n>o?Math.pow(10,n):0,c=Math.round((t-l)*r)/r,d=Math.floor((t-l)/a/10)*a*10;let h=Math.floor((c-d)/Math.pow(10,o)),p=Tt(e.min,Math.round((l+d+h*Math.pow(10,o))*r)/r);for(;p<s;)i.push({value:p,major:fa(p),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(o++,h=2,r=o>=0?1:r),p=Math.round((l+d+h*Math.pow(10,o))*r)/r;const f=Tt(e.max,p);return i.push({value:f,major:fa(f),significand:h}),i}class Wm extends ts{static id="logarithmic";static defaults={ticks:{callback:tn.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,s){const i=Wi.prototype.parse.apply(this,[t,s]);if(i===0){this._zero=!0;return}return Q(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:s}=this.getMinMax(!0);this.min=Q(t)?Math.max(0,t):null,this.max=Q(s)?Math.max(0,s):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Q(this._userMin)&&(this.min=t===Me(this.min,0)?Me(this.min,-1):Me(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:s}=this.getUserBounds();let i=this.min,n=this.max;const o=a=>i=t?i:a,r=a=>n=s?n:a;i===n&&(i<=0?(o(1),r(10)):(o(Me(i,-1)),r(Me(n,1)))),i<=0&&o(Me(n,-1)),n<=0&&r(Me(i,1)),this.min=i,this.max=n}buildTicks(){const t=this.options,s={min:this._userMin,max:this._userMax},i=Vm(s,this);return t.bounds==="ticks"&&Ya(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":di(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=me(t),this._valueRange=me(this.max)-me(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(me(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const s=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+s*this._valueRange)}}function Yn(e){const t=e.ticks;if(t.display&&e.display){const s=yt(t.backdropPadding);return E(t.font&&t.font.size,J.font.size)+s.height}return 0}function Um(e,t,s){return s=X(s)?s:[s],{w:Fu(e,t.string,s),h:s.length*t.lineHeight}}function ma(e,t,s,i,n){return e===i||e===n?{start:t-s/2,end:t+s/2}:e<i||e>n?{start:t-s,end:t}:{start:t,end:t+s}}function qm(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},s=Object.assign({},t),i=[],n=[],o=e._pointLabels.length,r=e.options.pointLabels,a=r.centerPointLabels?V/o:0;for(let l=0;l<o;l++){const c=r.setContext(e.getPointLabelContext(l));n[l]=c.padding;const d=e.getPointPosition(l,e.drawingArea+n[l],a),h=rt(c.font),p=Um(e.ctx,h,e._pointLabels[l]);i[l]=p;const f=gt(e.getIndexAngle(l)+a),g=Math.round(xo(f)),m=ma(g,d.x,p.w,0,180),b=ma(g,d.y,p.h,90,270);Km(s,t,f,m,b)}e.setCenterPoint(t.l-s.l,s.r-t.r,t.t-s.t,s.b-t.b),e._pointLabelItems=Xm(e,i,n)}function Km(e,t,s,i,n){const o=Math.abs(Math.sin(s)),r=Math.abs(Math.cos(s));let a=0,l=0;i.start<t.l?(a=(t.l-i.start)/o,e.l=Math.min(e.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/o,e.r=Math.max(e.r,t.r+a)),n.start<t.t?(l=(t.t-n.start)/r,e.t=Math.min(e.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/r,e.b=Math.max(e.b,t.b+l))}function Ym(e,t,s){const i=e.drawingArea,{extra:n,additionalAngle:o,padding:r,size:a}=s,l=e.getPointPosition(t,i+n+r,o),c=Math.round(xo(gt(l.angle+st))),d=Qm(l.y,a.h,c),h=Jm(c),p=Zm(l.x,a.w,h);return{visible:!0,x:l.x,y:d,textAlign:h,left:p,top:d,right:p+a.w,bottom:d+a.h}}function Gm(e,t){if(!t)return!0;const{left:s,top:i,right:n,bottom:o}=e;return!(ae({x:s,y:i},t)||ae({x:s,y:o},t)||ae({x:n,y:i},t)||ae({x:n,y:o},t))}function Xm(e,t,s){const i=[],n=e._pointLabels.length,o=e.options,{centerPointLabels:r,display:a}=o.pointLabels,l={extra:Yn(o)/2,additionalAngle:r?V/n:0};let c;for(let d=0;d<n;d++){l.padding=s[d],l.size=t[d];const h=Ym(e,d,l);i.push(h),a==="auto"&&(h.visible=Gm(h,c),h.visible&&(c=h))}return i}function Jm(e){return e===0||e===180?"center":e<180?"left":"right"}function Zm(e,t,s){return s==="right"?e-=t:s==="center"&&(e-=t/2),e}function Qm(e,t,s){return s===90||s===270?e-=t/2:(s>270||s<90)&&(e-=t),e}function tb(e,t,s){const{left:i,top:n,right:o,bottom:r}=s,{backdropColor:a}=t;if(!N(a)){const l=Re(t.borderRadius),c=yt(t.backdropPadding);e.fillStyle=a;const d=i-c.left,h=n-c.top,p=o-i+c.width,f=r-n+c.height;Object.values(l).some(g=>g!==0)?(e.beginPath(),Zs(e,{x:d,y:h,w:p,h:f,radius:l}),e.fill()):e.fillRect(d,h,p,f)}}function eb(e,t){const{ctx:s,options:{pointLabels:i}}=e;for(let n=t-1;n>=0;n--){const o=e._pointLabelItems[n];if(!o.visible)continue;const r=i.setContext(e.getPointLabelContext(n));tb(s,r,o);const a=rt(r.font),{x:l,y:c,textAlign:d}=o;Ge(s,e._pointLabels[n],l,c+a.lineHeight/2,a,{color:r.color,textAlign:d,textBaseline:"middle"})}}function zl(e,t,s,i){const{ctx:n}=e;if(s)n.arc(e.xCenter,e.yCenter,t,0,Y);else{let o=e.getPointPosition(0,t);n.moveTo(o.x,o.y);for(let r=1;r<i;r++)o=e.getPointPosition(r,t),n.lineTo(o.x,o.y)}}function sb(e,t,s,i,n){const o=e.ctx,r=t.circular,{color:a,lineWidth:l}=t;!r&&!i||!a||!l||s<0||(o.save(),o.strokeStyle=a,o.lineWidth=l,o.setLineDash(n.dash||[]),o.lineDashOffset=n.dashOffset,o.beginPath(),zl(e,s,r,i),o.closePath(),o.stroke(),o.restore())}function ib(e,t,s){return $e(e,{label:s,index:t,type:"pointLabel"})}class nb extends Wi{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:tn.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=yt(Yn(this.options)/2),s=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+s/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(s,i)/2)}determineDataLimits(){const{min:t,max:s}=this.getMinMax(!1);this.min=Q(t)&&!isNaN(t)?t:0,this.max=Q(s)&&!isNaN(s)?s:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Yn(this.options))}generateTickLabels(t){Wi.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((s,i)=>{const n=K(this.options.pointLabels.callback,[s,i],this);return n||n===0?n:""}).filter((s,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?qm(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,s,i,n){this.xCenter+=Math.floor((t-s)/2),this.yCenter+=Math.floor((i-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,s,i,n))}getIndexAngle(t){const s=Y/(this._pointLabels.length||1),i=this.options.startAngle||0;return gt(t*s+Bt(i))}getDistanceFromCenterForValue(t){if(N(t))return NaN;const s=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*s:(t-this.min)*s}getValueForDistanceFromCenter(t){if(N(t))return NaN;const s=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-s:this.min+s}getPointLabelContext(t){const s=this._pointLabels||[];if(t>=0&&t<s.length){const i=s[t];return ib(this.getContext(),t,i)}}getPointPosition(t,s,i=0){const n=this.getIndexAngle(t)-st+i;return{x:Math.cos(n)*s+this.xCenter,y:Math.sin(n)*s+this.yCenter,angle:n}}getPointPositionForValue(t,s){return this.getPointPosition(t,this.getDistanceFromCenterForValue(s))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:s,top:i,right:n,bottom:o}=this._pointLabelItems[t];return{left:s,top:i,right:n,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:s}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),zl(this,this.getDistanceFromCenterForValue(this._endValue),s,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,s=this.options,{angleLines:i,grid:n,border:o}=s,r=this._pointLabels.length;let a,l,c;if(s.pointLabels.display&&eb(this,r),n.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){l=this.getDistanceFromCenterForValue(d.value);const p=this.getContext(h),f=n.setContext(p),g=o.setContext(p);sb(this,f,l,r,g)}}),i.display){for(t.save(),a=r-1;a>=0;a--){const d=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:p}=d;!p||!h||(t.lineWidth=p,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,l=this.getDistanceFromCenterForValue(s.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,s=this.options,i=s.ticks;if(!i.display)return;const n=this.getIndexAngle(0);let o,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!s.reverse)return;const c=i.setContext(this.getContext(l)),d=rt(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=d.string,r=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const h=yt(c.backdropPadding);t.fillRect(-r/2-h.left,-o-d.size/2-h.top,r+h.width,d.size+h.height)}Ge(t,a.label,0,-o,d,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}const ln={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},wt=Object.keys(ln);function ba(e,t){return e-t}function xa(e,t){if(N(t))return null;const s=e._adapter,{parser:i,round:n,isoWeekday:o}=e._parseOpts;let r=t;return typeof i=="function"&&(r=i(r)),Q(r)||(r=typeof i=="string"?s.parse(r,i):s.parse(r)),r===null?null:(n&&(r=n==="week"&&(hs(o)||o===!0)?s.startOf(r,"isoWeek",o):s.startOf(r,n)),+r)}function ya(e,t,s,i){const n=wt.length;for(let o=wt.indexOf(e);o<n-1;++o){const r=ln[wt[o]],a=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((s-t)/(a*r.size))<=i)return wt[o]}return wt[n-1]}function ob(e,t,s,i,n){for(let o=wt.length-1;o>=wt.indexOf(s);o--){const r=wt[o];if(ln[r].common&&e._adapter.diff(n,i,r)>=t-1)return r}return wt[s?wt.indexOf(s):0]}function rb(e){for(let t=wt.indexOf(e)+1,s=wt.length;t<s;++t)if(ln[wt[t]].common)return wt[t]}function va(e,t,s){if(!s)e[t]=!0;else if(s.length){const{lo:i,hi:n}=yo(s,t),o=s[i]>=t?s[i]:s[n];e[o]=!0}}function ab(e,t,s,i){const n=e._adapter,o=+n.startOf(t[0].value,i),r=t[t.length-1].value;let a,l;for(a=o;a<=r;a=+n.add(a,1,i))l=s[a],l>=0&&(t[l].major=!0);return t}function ka(e,t,s){const i=[],n={},o=t.length;let r,a;for(r=0;r<o;++r)a=t[r],n[a]=r,i.push({value:a,major:!1});return o===0||!s?i:ab(e,i,n,s)}class Gn extends ts{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,s={}){const i=t.time||(t.time={}),n=this._adapter=new lf._date(t.adapters.date);n.init(s),Bs(i.displayFormats,n.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=s.normalized}parse(t,s){return t===void 0?null:xa(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,s=this._adapter,i=t.time.unit||"day";let{min:n,max:o,minDefined:r,maxDefined:a}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(n=Math.min(n,c.min)),!a&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!r||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=Q(n)&&!isNaN(n)?n:+s.startOf(Date.now(),i),o=Q(o)&&!isNaN(o)?o:+s.endOf(Date.now(),i)+1,this.min=Math.min(n,o-1),this.max=Math.max(n+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let s=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(s=t[0],i=t[t.length-1]),{min:s,max:i}}buildTicks(){const t=this.options,s=t.time,i=t.ticks,n=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const o=this.min,r=this.max,a=Su(n,o,r);return this._unit=s.unit||(i.autoSkip?ya(s.minUnit,this.min,this.max,this._getLabelCapacity(o)):ob(this,a.length,s.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:rb(this._unit),this.initOffsets(n),t.reverse&&a.reverse(),ka(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let s=0,i=0,n,o;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?s=1-n:s=(this.getDecimalForValue(t[1])-n)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?i=o:i=(o-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;s=dt(s,0,r),i=dt(i,0,r),this._offsets={start:s,end:i,factor:1/(s+1+i)}}_generate(){const t=this._adapter,s=this.min,i=this.max,n=this.options,o=n.time,r=o.unit||ya(o.minUnit,s,i,this._getLabelCapacity(s)),a=E(n.ticks.stepSize,1),l=r==="week"?o.isoWeekday:!1,c=hs(l)||l===!0,d={};let h=s,p,f;if(c&&(h=+t.startOf(h,"isoWeek",l)),h=+t.startOf(h,c?"day":r),t.diff(i,s,r)>1e5*a)throw new Error(s+" and "+i+" are too far apart with stepSize of "+a+" "+r);const g=n.ticks.source==="data"&&this.getDataTimestamps();for(p=h,f=0;p<i;p=+t.add(p,a,r),f++)va(d,p,g);return(p===i||n.bounds==="ticks"||f===1)&&va(d,p,g),Object.keys(d).sort(ba).map(m=>+m)}getLabelForValue(t){const s=this._adapter,i=this.options.time;return i.tooltipFormat?s.format(t,i.tooltipFormat):s.format(t,i.displayFormats.datetime)}format(t,s){const n=this.options.time.displayFormats,o=this._unit,r=s||n[o];return this._adapter.format(t,r)}_tickFormatFunction(t,s,i,n){const o=this.options,r=o.ticks.callback;if(r)return K(r,[t,s,i],this);const a=o.time.displayFormats,l=this._unit,c=this._majorUnit,d=l&&a[l],h=c&&a[c],p=i[s],f=c&&h&&p&&p.major;return this._adapter.format(t,n||(f?h:d))}generateTickLabels(t){let s,i,n;for(s=0,i=t.length;s<i;++s)n=t[s],n.label=this._tickFormatFunction(n.value,s,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const s=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((s.start+i)*s.factor)}getValueForPixel(t){const s=this._offsets,i=this.getDecimalForPixel(t)/s.factor-s.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const s=this.options.ticks,i=this.ctx.measureText(t).width,n=Bt(this.isHorizontal()?s.maxRotation:s.minRotation),o=Math.cos(n),r=Math.sin(n),a=this._resolveTickFontOptions(0).size;return{w:i*o+a*r,h:i*r+a*o}}_getLabelCapacity(t){const s=this.options.time,i=s.displayFormats,n=i[s.unit]||i.millisecond,o=this._tickFormatFunction(t,0,ka(this,[t],this._majorUnit),n),r=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],s,i;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(s=0,i=n.length;s<i;++s)t=t.concat(n[s].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let s,i;if(t.length)return t;const n=this.getLabels();for(s=0,i=n.length;s<i;++s)t.push(xa(this,n[s]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Ja(t.sort(ba))}}function Ci(e,t,s){let i=0,n=e.length-1,o,r,a,l;s?(t>=e[i].pos&&t<=e[n].pos&&({lo:i,hi:n}=re(e,"pos",t)),{pos:o,time:a}=e[i],{pos:r,time:l}=e[n]):(t>=e[i].time&&t<=e[n].time&&({lo:i,hi:n}=re(e,"time",t)),{time:o,pos:a}=e[i],{time:r,pos:l}=e[n]);const c=r-o;return c?a+(l-a)*(t-o)/c:a}class lb extends Gn{static id="timeseries";static defaults=Gn.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),s=this._table=this.buildLookupTable(t);this._minPos=Ci(s,this.min),this._tableRange=Ci(s,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:s,max:i}=this,n=[],o=[];let r,a,l,c,d;for(r=0,a=t.length;r<a;++r)c=t[r],c>=s&&c<=i&&n.push(c);if(n.length<2)return[{time:s,pos:0},{time:i,pos:1}];for(r=0,a=n.length;r<a;++r)d=n[r+1],l=n[r-1],c=n[r],Math.round((d+l)/2)!==c&&o.push({time:c,pos:r/(a-1)});return o}_generate(){const t=this.min,s=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(s)||i.length===1)&&i.push(s),i.sort((n,o)=>n-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const s=this.getDataTimestamps(),i=this.getLabelTimestamps();return s.length&&i.length?t=this.normalize(s.concat(i)):t=s.length?s:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Ci(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const s=this._offsets,i=this.getDecimalForPixel(t)/s.factor-s.end;return Ci(this._table,i*this._tableRange+this._minPos,!0)}}var cb=Object.freeze({__proto__:null,CategoryScale:jm,LinearScale:Bm,LogarithmicScale:Wm,RadialLinearScale:nb,TimeScale:Gn,TimeSeriesScale:lb});const db=[af,zg,Rm,cb];Mo.register(...db);var hb=Object.defineProperty,ub=Object.getOwnPropertyDescriptor,Oo=(e,t,s,i)=>{for(var n=i>1?void 0:i?ub(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&hb(t,s,n),n};let Ui=class extends H{constructor(){super(...arguments),this.config=null,this.height="200px",this.chart=null}render(){return u`<div style="position:relative;height:${this.height};width:100%"><canvas></canvas></div>`}updated(){const e=this.querySelector("canvas");e&&(this.chart&&(this.chart.destroy(),this.chart=null),this.config&&(this.chart=new Mo(e,this.config)))}disconnectedCallback(){super.disconnectedCallback(),this.chart?.destroy(),this.chart=null}};Oo([C({attribute:!1})],Ui.prototype,"config",2);Oo([C({type:String})],Ui.prototype,"height",2);Ui=Oo([O("finance-chart")],Ui);var pb=Object.defineProperty,fb=Object.getOwnPropertyDescriptor,pe=(e,t,s,i)=>{for(var n=i>1?void 0:i?fb(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&pb(t,s,n),n};let Jt=class extends H{constructor(){super(...arguments),this.value="EUR",this.name="currency",this.options=[],this.saved=[],this.open=!1,this.q="",this.px=0,this.py=0,this._onDoc=e=>{this.open&&!this.contains(e.target)&&this.close()},this._onReflow=()=>{this.open&&this.close()}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onDoc),window.addEventListener("scroll",this._onReflow,!0),window.addEventListener("resize",this._onReflow)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDoc),window.removeEventListener("scroll",this._onReflow,!0),window.removeEventListener("resize",this._onReflow)}close(){this.open=!1,this.q=""}toggle(e){if(e.stopPropagation(),this.open){this.close();return}const t=e.currentTarget.getBoundingClientRect();this.px=t.left,this.py=t.bottom+4,this.open=!0}pick(e){this.value=e,this.close(),this.dispatchEvent(new CustomEvent("currency-pick",{detail:e,bubbles:!0,composed:!0}))}updated(){this.open&&this.querySelector("input.cs-search")?.focus()}render(){const e=this.q.trim().toUpperCase(),t=this.options.length?this.options:this.saved,s=e?t.filter(i=>i.includes(e)):[...this.saved.filter(i=>t.includes(i)),...t.filter(i=>!this.saved.includes(i))];return u`
      <input type="hidden" name=${this.name} .value=${this.value} />
      <button type="button" class="inline-flex items-center gap-1 px-2 py-1 text-xs uppercase bg-surface border border-line rounded hover:border-ink"
        @click=${i=>this.toggle(i)}>${this.value||"—"} <span class="text-[8px] text-muted">▾</span></button>
      ${this.open?u`<div class="rounded-lg border border-line bg-surface shadow-lg w-40" style="position:fixed;left:${this.px}px;top:${this.py}px;z-index:50"
            @click=${i=>i.stopPropagation()}>
            <input type="text" class="cs-search w-full px-2 py-1.5 text-xs border-b border-line bg-bg focus:outline-none" placeholder="Search currency…"
              .value=${this.q} @input=${i=>{this.q=i.target.value}}
              @keydown=${i=>{i.key==="Enter"?(i.preventDefault(),s[0]&&this.pick(s[0])):i.key==="Escape"&&this.close()}} />
            <div class="max-h-52 overflow-y-auto py-1">
              ${s.length?s.map(i=>u`<button type="button"
                    class="flex w-full items-center justify-between px-3 py-1.5 text-sm hover:bg-hover ${i===this.value?"font-semibold text-ink":"text-ink"}"
                    @click=${()=>this.pick(i)}><span>${i}</span>${this.saved.includes(i)?u`<span class="text-[9px] text-muted">saved</span>`:k}</button>`):u`<div class="px-3 py-2 text-xs text-muted">No match</div>`}
            </div>
          </div>`:k}
    `}};pe([C({type:String})],Jt.prototype,"value",2);pe([C({type:String})],Jt.prototype,"name",2);pe([C({attribute:!1})],Jt.prototype,"options",2);pe([C({attribute:!1})],Jt.prototype,"saved",2);pe([x()],Jt.prototype,"open",2);pe([x()],Jt.prototype,"q",2);pe([x()],Jt.prototype,"px",2);pe([x()],Jt.prototype,"py",2);Jt=pe([O("currency-select")],Jt);var gb=Object.defineProperty,mb=Object.getOwnPropertyDescriptor,F=(e,t,s,i)=>{for(var n=i>1?void 0:i?mb(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&gb(t,s,n),n};const wa=["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#06b6d4","#ef4444","#84cc16","#f97316","#14b8a6","#a855f7","#3b82f6","#eab308","#22c55e","#e11d48","#0ea5e9","#d946ef","#65a30d"],$a=e=>wa[e%wa.length],bb=["🍎","🛒","🍕","🍔","☕","🍺","🚗","⛽","🏠","💡","💧","❤️","💊","🏥","🛍️","👕","🎬","🎮","🎵","✈️","🏖️","💻","📱","📶","🐤","👶","🎓","🎁","💰","🏦","📈","🐱","⚽","🏋️","🔧","📚","🎉","✂️","🌳","🚌"],Pi=[{key:"type",label:"Type"},{key:"category",label:"Category"},{key:"amount",label:"Amount"},{key:"frequency",label:"Frequency"},{key:"next",label:"Next due"},{key:"account",label:"Account"},{key:"end",label:"End"}],xb=["type","amount","frequency","next","category"];function As(){return new Date().toISOString().slice(0,7)}function _a(e,t){const[s,i]=e.split("-").map(Number),n=new Date(Date.UTC(s,i-1+t,1));return`${n.getUTCFullYear()}-${String(n.getUTCMonth()+1).padStart(2,"0")}`}function Is(e){const[t,s]=e.split("-").map(Number);return!t||!s?e:new Date(Date.UTC(t,s-1,1)).toLocaleDateString(void 0,{month:"short",year:"numeric"})}let L=class extends H{constructor(){super(...arguments),this.tab="budget",this.month=As(),this.loading=!0,this.base="EUR",this.budget=null,this.expandedCat=null,this.catTxns=[],this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,this.showHidden=!1,this.networth=null,this.recurring=[],this.year=null,this.yearN=new Date().getUTCFullYear(),this.expandedYearMonth=null,this.yearMonthTxns=[],this.editingSavings=!1,this.editingGoals=!1,this.editingTxnId=null,this.showIncome=!1,this.incomeTxns=[],this.showAccountAdd=!1,this.editingBalanceId=null,this.showRecurringAdd=!1,this.editingRecurId=null,this.cancelingRecurId=null,this.recurringColumns=[...xb],this.currencies=["EUR"],this.supportedCurrencies=[],this.lastCurrency="EUR",this.showSettings=!1,this.demoMode=!1,this.cards={savingsGoal:!0,fixedPayments:!0,expenseDonut:!0},this.showColMenu=!1,this.showEnded=!1,this._onDocClick=()=>{this.showColMenu&&(this.showColMenu=!1)},this._onOps=e=>{e.detail?.action==="refresh"&&this.refresh()},this._onCurrencyPick=e=>{const t=e.detail;t&&(this.lastCurrency=t,!this.currencies.includes(t)&&this.supportedCurrencies.includes(t)&&this.saveCurrencies([...this.currencies,t]))}}connectedCallback(){super.connectedCallback(),this.loadSettings(),this.refresh(),document.addEventListener("click",this._onDocClick),document.addEventListener("ops-event",this._onOps),this.addEventListener("currency-pick",this._onCurrencyPick)}async loadSettings(){try{const e=await fetch("/api/finance/settings");if(!e.ok)return;const t=await e.json();Array.isArray(t.currencies)&&t.currencies.length&&(this.currencies=t.currencies),Array.isArray(t.supportedCurrencies)&&(this.supportedCurrencies=t.supportedCurrencies),t.lastCurrency&&(this.lastCurrency=t.lastCurrency),t.baseCurrency&&(this.base=t.baseCurrency),t.recurringColumns&&t.recurringColumns.length&&(this.recurringColumns=t.recurringColumns),t.cards&&(this.cards={...this.cards,...t.cards})}catch{}}renderCurrencySelect(e){const t=this.supportedCurrencies.length?this.supportedCurrencies:this.currencies;return u`<currency-select name="currency" .value=${e} .saved=${this.currencies}
      .options=${t.includes(e)?t:[e,...t]}></currency-select>`}async changeBaseCurrency(e){await this.post("/base-currency",{currency:e}),await this.loadSettings(),await this.refresh()}async saveCurrencies(e){await this.post("/currencies",{currencies:e}),await this.loadSettings()}addCurrency(e){!e||this.currencies.includes(e)||this.saveCurrencies([...this.currencies,e])}removeCurrency(e){e!==this.base&&this.saveCurrencies(this.currencies.filter(t=>t!==e))}toggleCard(e){this.cards={...this.cards,[e]:!this.cards[e]},this.post("/cards",{cards:{[e]:this.cards[e]}})}renderSettings(){const e=this.supportedCurrencies.filter(t=>!this.currencies.includes(t));return u`
      <div class="mx-3 mt-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-semibold text-ink">Finance settings</span>
          <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.showSettings=!1}}>close</button>
        </div>
        <div class="flex items-center gap-2 mb-3 flex-wrap">
          <span class="text-[11px] uppercase tracking-wider text-muted">Base currency</span>
          <select class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
            @change=${t=>void this.changeBaseCurrency(t.target.value)}>
            ${this.supportedCurrencies.map(t=>u`<option value=${t} ?selected=${t===this.base}>${t}</option>`)}
          </select>
          <span class="text-[11px] text-muted">all amounts display in this</span>
        </div>
        <div class="text-[11px] uppercase tracking-wider text-muted mb-1">My currencies</div>
        <div class="flex flex-wrap gap-1.5 mb-2">
          ${this.currencies.map(t=>u`
            <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border border-line">
              ${t}
              ${t===this.base?u`<span class="text-[9px] text-muted">base</span>`:u`<button type="button" class="text-muted hover:text-red-500 leading-none" title="Remove" @click=${()=>this.removeCurrency(t)}>×</button>`}
            </span>`)}
        </div>
        ${e.length?u`<select class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
              @change=${t=>{const s=t.target;s.value&&this.addCurrency(s.value),s.value=""}}>
              <option value="">+ add currency…</option>
              ${e.map(t=>u`<option value=${t}>${t}</option>`)}
            </select>`:k}
        <div class="text-[11px] uppercase tracking-wider text-muted mt-4 mb-1">Budget cards</div>
        <div class="flex flex-col gap-1.5">
          ${[["savingsGoal","Savings goal"],["fixedPayments","Fixed payments"],["expenseDonut","Expense breakdown"]].map(([t,s])=>u`<label class="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" ?checked=${this.cards[t]} @change=${()=>this.toggleCard(t)} />
              <span>${s}</span>
            </label>`)}
        </div>
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onDocClick),document.removeEventListener("ops-event",this._onOps),this.removeEventListener("currency-pick",this._onCurrencyPick)}updated(e){["tab","month","yearN","expandedCat","showIncome","budget"].some(s=>e.has(s))&&this.publishView()}publishView(){const e={budget:"Budget",recurring:"Recurring",networth:"Net worth",year:"Year"};let t;if(this.tab==="budget"){if(t=`${Is(this.month)}`,this.showIncome&&(t+=", income panel open"),this.expandedCat!=null){const s=this.budget?.categories.find(i=>i.id===this.expandedCat);t+=`, expanded category "${s?.name??this.expandedCat}" (this month's transactions listed)`}}else this.tab==="year"?t=`${this.yearN} · spending-by-category chart + monthly income/spent/saved table`:this.tab==="networth"?t=`${Is(this.month)} · accounts grouped by bucket + net-worth trend`:t="recurring income/expenses table";w.getState().setViewContext({tool:"finance",summary:`Finance · ${e[this.tab]} tab · ${t}`})}async refresh(){this.loading=!0;try{if(this.tab==="budget"){const e=await fetch(`/api/finance/budget?month=${this.month}`);e.ok&&(this.budget=await e.json(),this.base=this.budget.baseCurrency),this.expandedCat!=null&&await this.loadCatTxns(this.expandedCat),this.showIncome&&await this.loadIncomeTxns()}else if(this.tab==="networth"){const e=await fetch(`/api/finance/networth?month=${this.month}`);e.ok&&(this.networth=await e.json(),this.base=this.networth.baseCurrency)}else if(this.tab==="recurring"){const[e,t,s]=await Promise.all([fetch("/api/finance/recurring"),fetch("/api/finance/settings"),fetch(`/api/finance/budget?month=${As()}`)]);if(e.ok&&(this.recurring=(await e.json()).items),t.ok){const i=await t.json();i.recurringColumns&&i.recurringColumns.length&&(this.recurringColumns=i.recurringColumns)}s.ok&&(this.budget=await s.json())}else if(this.tab==="year"){const e=await fetch(`/api/finance/year?year=${this.yearN}`);e.ok&&(this.year=await e.json(),this.base=this.year.baseCurrency)}}catch{}this.loading=!1}async loadCatTxns(e){try{const t=await fetch(`/api/finance/transactions?month=${this.month}&categoryId=${e}`);t.ok&&(this.catTxns=(await t.json()).items)}catch{}}async loadIncomeTxns(){try{const e=await fetch(`/api/finance/transactions?month=${this.month}&type=income`);e.ok&&(this.incomeTxns=(await e.json()).items)}catch{}}async toggleIncome(){this.showIncome=!this.showIncome,this.showIncome&&await this.loadIncomeTxns()}async post(e,t){await fetch(`/api/finance${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}async del(e){await fetch(`/api/finance${e}`,{method:"DELETE"})}async patch(e,t){await fetch(`/api/finance${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}fmt(e,t=this.base){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t,maximumFractionDigits:0}).format(e)}catch{return`${Math.round(e)} ${t}`}}fmtShort(e){const t=Math.abs(e),s=t>=1e3?`${(e/1e3).toFixed(t>=1e4?0:1)}k`:String(Math.round(e));return`${this.base==="EUR"?"€":""}${s}`}stat(e,t){return u`
      <div class="text-center">
        <div class="text-[11px] uppercase tracking-wider text-white/70">${e}</div>
        <div class="text-xl font-bold tabular-nums leading-tight">${this.fmt(t)}</div>
      </div>
    `}iconUrl(e){if(!/\p{Extended_Pictographic}/u.test(e))return null;const s=[.../\u200D/.test(e)?e:e.replace(/\uFE0F/g,"")].map(i=>i.codePointAt(0).toString(16)).join("-");return s?`/twemoji/${s}.svg`:null}renderIcon(e){if(!e)return u`<span class="text-muted text-sm">•</span>`;const t=this.iconUrl(e);return t?u`<img src=${t} alt="" class="w-5 h-5 select-none" draggable="false" />`:u`<span class="text-sm">${e}</span>`}setTab(e){this.tab!==e&&(this.tab=e,this.refresh())}gotoMonth(e){this.month=_a(this.month,e),this.expandedCat=null,this.editingSavings=!1,this.refresh()}toCurrentMonth(){const e=As();this.month!==e&&(this.month=e,this.expandedCat=null,this.editingSavings=!1,this.refresh())}async toggleCat(e){if(this.expandedCat===e){this.expandedCat=null,this.catTxns=[];return}this.expandedCat=e,await this.loadCatTxns(e)}async addCategory(){const e=this.newCat.trim();e&&(await this.post("/category",{name:e,icon:this.newCatIcon||null}),this.newCat="",this.newCatIcon="",this.emojiPickerFor=null,await this.refresh())}pickEmoji(e,t){if(e==="new"){this.newCatIcon=t,this.emojiPickerFor=null;return}(async()=>(await this.patch(`/category/${e}`,{icon:t||null}),this.emojiPickerFor=null,await this.refresh()))()}saveCatName(e,t){const s=t.trim();s&&this.patch(`/category/${e}`,{name:s})}renderEmojiPalette(e){return u`
      <div class="px-4 py-2 border-t border-line bg-bg/40 flex flex-wrap gap-1" @click=${t=>t.stopPropagation()}>
        ${bb.map(t=>u`<button type="button" class="w-7 h-7 rounded hover:bg-hover flex items-center justify-center text-lg leading-none"
            @click=${()=>this.pickEmoji(e,t)}>${t}</button>`)}
        <button type="button" class="px-2 text-[11px] text-muted hover:text-ink self-center" @click=${()=>this.pickEmoji(e,"")}>none</button>
      </div>
    `}async logTxn(e,t,s,i,n){!Number.isFinite(s)||s<=0||(await this.post("/transaction",{type:t,amount:s,currency:i||this.base,categoryId:e,name:n,date:`${this.month===As()?new Date().toISOString().slice(0,10):this.month+"-15"}`}),await this.refresh())}async setBudget(e,t){Number.isFinite(t)&&(await this.post("/budget",{categoryId:e,amount:t,month:this.month}),await this.refresh())}toggleEditGoals(){this.editingGoals=!this.editingGoals,this.emojiPickerFor=null,this.editingGoals?this.expandedCat=null:this.refresh()}saveGoalInline(e,t){!Number.isFinite(t)||t<0||this.post("/budget",{categoryId:e,amount:t,month:this.month})}async deleteTxn(e){await this.del(`/transaction/${e}`),await this.refresh()}startEditTxn(e){e.recurring_id==null&&(this.editingTxnId=e.id)}onSaveTxn(e,t){e.preventDefault();const s=e.target,i=s.elements.namedItem("date")?.value||t.date,n=s.elements.namedItem("name")?.value.trim()??"",o=Number(s.elements.namedItem("amount")?.value),r=(s.elements.namedItem("currency")?.value||t.original_currency).toUpperCase().trim();!Number.isFinite(o)||o<=0||this.saveTxnEdit(t.id,{date:i,name:n,amount:o,currency:r})}async saveTxnEdit(e,t){await this.patch(`/transaction/${e}`,t),this.editingTxnId=null,await this.refresh()}async archiveCategory(e){await this.patch(`/category/${e.id}`,{active:0}),this.expandedCat=null,await this.refresh()}async restoreCategory(e){await this.patch(`/category/${e}`,{active:1}),await this.refresh()}async deleteCategoryHard(e){confirm(`Permanently delete "${e.name}"? This can't be undone.`)&&(await this.del(`/category/${e.id}`),await this.refresh())}onQuickAdd(e,t,s){e.preventDefault();const i=e.target,n=Number(i.elements.namedItem("amount")?.value),o=(i.elements.namedItem("currency")?.value||this.base).toUpperCase().trim(),r=i.elements.namedItem("name")?.value.trim()||"";this.lastCurrency=o,this.logTxn(t,s,n,o,r),i.reset()}renderBar(e){const t=e===0?"bg-black/10":e>100?"bg-red-400":e>=75?"bg-amber-300":"bg-emerald-400";return u`
      <div class="h-2 w-full rounded-full bg-black/10 overflow-hidden">
        <div class="h-full rounded-full ${t}" style="width:${Math.min(100,e)}%"></div>
      </div>
    `}renderQuickAdd(e,t){return u`
      <form class="flex gap-1.5 items-center px-3 py-2" @submit=${s=>this.onQuickAdd(s,e,t)}>
        <input name="amount" type="number" step="1" inputmode="decimal" placeholder="amount"
          class="w-20 px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
        ${this.renderCurrencySelect(this.lastCurrency)}
        <input name="name" type="text" placeholder="what for…"
          class="flex-1 min-w-0 px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
        <button type="submit" class="px-2.5 py-1 text-sm rounded border border-ink text-ink hover:bg-hover">Add</button>
      </form>
    `}renderTxnRow(e){const t=e.recurring_id!=null;return this.editingTxnId===e.id?u`
        <li class="py-1">
          <form class="flex flex-wrap items-center gap-1.5 text-sm" @submit=${s=>this.onSaveTxn(s,e)}>
            <input name="date" type="date" .value=${e.date}
              class="px-1.5 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            <input name="name" type="text" .value=${e.name??""} placeholder="what for…"
              class="flex-1 min-w-[5rem] px-2 py-1 bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            <input name="amount" type="number" step="0.01" inputmode="decimal" .value=${String(e.original_amount)}
              class="w-20 px-2 py-1 text-right bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            ${this.renderCurrencySelect(e.original_currency)}
            <button type="submit" class="px-2 py-1 text-xs rounded border border-ink text-ink hover:bg-hover">Save</button>
            <button type="button" class="px-2 py-1 text-xs text-muted hover:text-ink" @click=${()=>{this.editingTxnId=null}}>Cancel</button>
          </form>
        </li>
      `:u`
      <li class="group flex items-center gap-2 py-1 text-sm ${t?"italic":""}">
        <span class="text-muted text-xs w-16 shrink-0 ${t?"":"cursor-pointer"}" @click=${()=>this.startEditTxn(e)}>${e.date.slice(5)}</span>
        <span class="flex-1 min-w-0 truncate ${t?"text-muted":"text-ink cursor-pointer hover:underline decoration-dotted underline-offset-2"}"
          @click=${()=>this.startEditTxn(e)} title=${t?"":"Edit"}>
          ${t?u`<span class="not-italic" title="Recurring — manage in the Recurring tab">↻ </span>`:k}${e.name||(e.type==="income"?"income":"—")}
        </span>
        <span class="shrink-0 tabular-nums ${t?"":"cursor-pointer"} ${e.type==="income"?"text-green-600":t?"text-muted":"text-ink"}"
          @click=${()=>this.startEditTxn(e)}>
          ${e.base!=null?this.fmt(e.base):`${e.original_amount} ${e.original_currency}`}
        </span>
        ${e.original_currency!==e.baseCurrency?u`<span class="text-[10px] text-muted shrink-0">${e.original_amount} ${e.original_currency}</span>`:k}
        ${t?u`<span class="w-3 shrink-0"></span>`:u`<button type="button" class="text-[10px] text-muted hover:text-red-500 opacity-0 group-hover:opacity-100 shrink-0"
              @click=${()=>void this.deleteTxn(e.id)} title="Delete">×</button>`}
      </li>
    `}renderCatTxns(){return this.catTxns.length?u`
      <ul class="px-3 pb-1">
        ${this.catTxns.map(e=>this.renderTxnRow(e))}
      </ul>
    `:u`<p class="px-3 py-2 text-xs text-muted">No transactions this month.</p>`}renderCategory(e,t=!1){const s=this.editingGoals,i=this.expandedCat===e.id&&!s&&!t,n=e.budget>0,o=n?Math.round(e.spent/e.budget*100):0,r=n&&e.spent>e.budget,a=!s&&!t;return u`
      <li class="border-b border-line/60 last:border-0">
        <div class="grid grid-cols-[26px_1fr_56px_56px_104px] items-center gap-2 px-4 py-1.5 ${a?"hover:bg-hover cursor-pointer":""}"
          @click=${a?()=>void this.toggleCat(e.id):null}>
          ${s?u`<button type="button" class="flex items-center justify-center hover:bg-hover rounded" title="Change icon"
                @click=${l=>{l.stopPropagation(),this.emojiPickerFor=this.emojiPickerFor===e.id?null:e.id}}>${this.renderIcon(e.icon)}</button>`:this.renderIcon(e.icon)}
          ${s?u`<input type="text" .value=${e.name}
                class="w-full text-sm px-1 py-0.5 bg-surface border border-line rounded focus:outline-none focus:border-ink"
                @click=${l=>l.stopPropagation()}
                @change=${l=>this.saveCatName(e.id,l.target.value)} />`:u`<span class="text-sm font-semibold truncate ${t?"text-muted":"text-ink"}">${e.name}</span>`}
          ${s?u`<input type="number" step="1" inputmode="decimal" .value=${n?String(e.budget):""} placeholder="0"
                class="w-full text-right text-sm px-1 py-0.5 bg-surface border border-line rounded focus:outline-none focus:border-ink"
                @click=${l=>l.stopPropagation()}
                @change=${l=>this.saveGoalInline(e.id,Number(l.target.value))} />`:u`<span class="text-sm text-right tabular-nums ${n?"text-muted":"text-muted/40"}">${n?this.fmt(e.budget):"—"}</span>`}
          <span class="text-right leading-tight">
            <span class="block text-sm font-semibold tabular-nums ${r?"text-red-500":t?"text-muted":"text-ink"}">${this.fmt(e.spent)}</span>
          </span>
          ${t?u`<div class="flex items-center justify-end gap-2 text-[11px]">
                <button type="button" class="text-ink/60 hover:text-ink" @click=${l=>{l.stopPropagation(),this.restoreCategory(e.id)}}>Unhide</button>
                <button type="button" class="text-muted hover:text-red-500" @click=${l=>{l.stopPropagation(),this.deleteCategoryHard(e)}}>Delete</button>
              </div>`:s?u`<button type="button" class="text-[11px] text-right text-muted hover:text-red-500"
                  @click=${l=>{l.stopPropagation(),this.archiveCategory(e)}}>hide</button>`:n?u`<div class="flex items-center gap-2">
                    <div class="flex-1 min-w-0">${this.renderBar(o)}</div>
                    <span class="w-8 shrink-0 text-right text-[11px] tabular-nums ${r?"text-red-500":"text-muted"}">${o}%</span>
                  </div>`:u`<span class="text-[11px] text-right text-ink/40">set goal</span>`}
        </div>
        ${s&&this.emojiPickerFor===e.id?this.renderEmojiPalette(e.id):k}
        ${i?u`
              <div class="bg-bg/40 border-t border-line">
                ${this.renderQuickAdd(e.id,"expense")}
                ${this.renderCatTxns()}
              </div>
            `:k}
      </li>
    `}renderIncomePanel(){const e=this.budget?.income.committedItems??[],t=this.incomeTxns.reduce((n,o)=>n+(o.base??0),0),s=e.reduce((n,o)=>n+o.base,0),i=n=>new Date(`${n}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return u`
      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2 border-b border-line bg-bg/40">
          <span class="text-[10px] uppercase tracking-wider text-muted">Income · ${Is(this.month)}</span>
          <span class="text-sm font-semibold tabular-nums text-emerald-600">${this.fmt(t+s)}</span>
        </div>
        ${this.incomeTxns.length||e.length?u`<ul class="px-3 py-1">
              ${this.incomeTxns.map(n=>this.renderTxnRow(n))}
              ${e.map(n=>u`
                <li class="flex items-center gap-2 py-1 text-sm italic text-muted" title="Expected recurring income">
                  <span class="text-xs w-16 shrink-0">${i(n.date)}</span>
                  <span class="flex-1 min-w-0 truncate"><span class="not-italic">↻ </span>${n.name}</span>
                  <span class="shrink-0 tabular-nums text-emerald-600/70">${this.fmt(n.base)}</span>
                  <span class="text-[10px] shrink-0">expected</span>
                </li>`)}
            </ul>`:u`<p class="px-4 py-2 text-xs text-muted">No income logged this month.</p>`}
        <div class="border-t border-line">${this.renderQuickAdd(null,"income")}</div>
      </div>
    `}renderBudget(){const e=this.budget;if(!e)return u`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`;const t=e.income.actual+(e.income.committed??0),s=e.categories.filter(n=>n.active===1),i=e.categories.filter(n=>n.active===0);return u`
      <!-- gradient summary -->
      <div class="m-3 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          <button type="button" class="text-center group" title="View & log income" @click=${()=>void this.toggleIncome()}>
            <div class="text-[11px] uppercase tracking-wider text-white/70 flex items-center justify-center gap-1">
              Income <span class="transition-transform ${this.showIncome?"rotate-180":""}">▾</span>
            </div>
            <div class="text-xl font-bold tabular-nums leading-tight group-hover:underline decoration-white/40">${this.fmt(t)}</div>
          </button>
          ${this.stat("Spent",e.totalSpent)}
          ${this.stat("Left to spend",e.leftToSpend)}
        </div>
      </div>

      ${this.showIncome?this.renderIncomePanel():k}

      <!-- budget card (left) + savings/fixed rail (right); stacks on mobile -->
      <div class="mx-3 mb-3 flex flex-col @2xl:flex-row gap-3 items-start">
      <div class="flex-1 min-w-0 w-full rounded-xl border border-line bg-surface overflow-hidden">
        <div class="grid grid-cols-[26px_1fr_56px_56px_104px] items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-wider text-muted">
          <span></span>
          <button type="button" class="group flex items-center gap-1 text-left uppercase tracking-wider hover:text-ink"
            title="Edit category names, icons & goals" @click=${()=>this.toggleEditGoals()}>
            ${this.editingGoals?"Done":u`Expenses <span class="opacity-0 group-hover:opacity-100">✎</span>`}
          </button>
          <span class="text-right">Goal</span>
          <span class="text-right">Actual</span>
          <span></span>
        </div>
        <ul>
          ${s.length?s.map(n=>this.renderCategory(n)):u`<li class="px-4 py-4 text-xs text-muted">No categories yet. Click “Expenses” to add one, or tell the keeper "budget 400 for groceries."</li>`}
        </ul>
        ${this.editingGoals?u`
              ${this.emojiPickerFor==="new"?this.renderEmojiPalette("new"):k}
              <div class="flex gap-2 px-3 py-2 border-t border-line">
                <button type="button" class="w-9 h-9 shrink-0 rounded-lg border border-line flex items-center justify-center hover:bg-hover"
                  title="Pick an icon" @click=${()=>{this.emojiPickerFor=this.emojiPickerFor==="new"?null:"new"}}>
                  ${this.newCatIcon?this.renderIcon(this.newCatIcon):u`<span class="text-muted text-sm">🙂</span>`}
                </button>
                <input type="text" placeholder="new category…" .value=${this.newCat}
                  class="flex-1 min-w-0 px-3 py-1.5 text-sm bg-bg border border-line rounded-lg focus:outline-none focus:border-ink"
                  @input=${n=>{this.newCat=n.target.value}}
                  @keydown=${n=>{n.key==="Enter"&&(n.preventDefault(),this.addCategory())}} />
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover"
                  @click=${()=>void this.addCategory()}>+ Category</button>
              </div>`:k}
        ${i.length?u`
              <div class="border-t border-line">
                <button type="button" class="px-4 py-2 text-[11px] ${this.showHidden?"text-ink":"text-muted"} hover:text-ink"
                  @click=${()=>{this.showHidden=!this.showHidden}}>Hidden · ${i.length}</button>
                ${this.showHidden?u`<ul>${i.map(n=>this.renderCategory(n,!0))}</ul>`:k}
              </div>`:k}
      </div>
      ${this.cards.savingsGoal||this.cards.fixedPayments?u`<div class="w-full @2xl:w-64 @2xl:shrink-0 flex flex-col gap-3">
            ${this.cards.savingsGoal?this.renderSavingsCard(e,t):k}
            ${this.cards.fixedPayments?this.renderFixedCard(e,t):k}
          </div>`:k}
      </div>

      ${this.cards.expenseDonut?this.renderExpenseDonut(e):k}
    `}onSaveSavings(e){e.preventDefault();const t=e.target,s=Number(t.elements.namedItem("amount").value);!Number.isFinite(s)||s<0||(async()=>(await this.post("/savings-goal",{month:this.month,amount:s}),this.editingSavings=!1,await this.refresh()))()}renderSavingsCard(e,t){const s=e.savingsGoal,i=t-e.totalSpent-e.totalCommitted,n=s&&s>0?Math.round(i/s*100):0;return u`
      <div class="rounded-xl border border-line bg-surface px-4 py-3">
        <div class="flex items-baseline justify-between">
          <span class="text-[10px] uppercase tracking-wider text-muted">Savings goal</span>
          ${s!=null&&!this.editingSavings?u`<span class="text-[11px] tabular-nums ${i>=s?"text-emerald-600":"text-muted"}">${n}%</span>`:k}
        </div>
        ${this.editingSavings?u`
              <form class="mt-1 flex items-center gap-1.5" @submit=${o=>this.onSaveSavings(o)}>
                <input name="amount" type="number" step="1" inputmode="decimal" .value=${s!=null?String(s):""} placeholder="0" autofocus
                  class="w-24 px-2 py-1 text-sm bg-bg border border-line rounded focus:outline-none focus:border-ink" />
                <span class="text-xs text-muted">${this.base}</span>
                <button type="submit" class="ml-auto text-[11px] text-ink hover:underline">Save</button>
                <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.editingSavings=!1}}>cancel</button>
              </form>`:u`
              <button type="button" class="mt-1 block text-left group" title="Edit savings goal" @click=${()=>{this.editingSavings=!0}}>
                ${s!=null?u`<span class="text-lg font-bold tabular-nums text-ink">${this.fmt(Math.max(0,i))}</span><span class="text-xs font-normal text-muted"> / ${this.fmt(s)}</span> <span class="text-[10px] text-muted group-hover:text-ink">✎</span>`:u`<span class="text-sm text-muted group-hover:text-ink">Set a savings goal ✎</span>`}
              </button>
              ${s!=null?u`<div class="mt-1.5">${this.renderBar(Math.max(0,n))}</div>`:k}`}
      </div>
    `}renderFixedCard(e,t){const s=e.fixedPayments,i=t>0?Math.round(s.total/t*100):0,n=o=>new Date(`${o}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"});return u`
      <div class="rounded-xl border border-line bg-surface px-4 py-3">
        <div class="flex items-baseline justify-between">
          <span class="text-[10px] uppercase tracking-wider text-muted">Fixed payments · ${s.count}</span>
          <span class="text-[11px] tabular-nums text-muted">${i}% of income</span>
        </div>
        <div class="mt-1 text-lg font-bold tabular-nums text-ink">${this.fmt(s.total)}</div>
        ${s.items.length?u`<ul class="mt-1.5 space-y-0.5 max-h-56 overflow-y-auto">
              ${s.items.map(o=>u`<li class="flex items-center gap-2 text-xs">
                <span class="text-muted w-12 shrink-0 tabular-nums">${n(o.date)}</span>
                <span class="flex-1 min-w-0 truncate text-ink">${o.name}</span>
                <span class="shrink-0 tabular-nums text-muted">${this.fmt(o.base)}</span>
              </li>`)}
            </ul>`:u`<p class="mt-1 text-[11px] text-muted">No recurring payments this month.</p>`}
      </div>
    `}renderExpenseDonut(e){const t=e.categories.filter(i=>i.spent>0).sort((i,n)=>n.spent-i.spent);if(!t.length)return k;const s={type:"doughnut",data:{labels:t.map(i=>i.name),datasets:[{data:t.map(i=>Math.round(i.spent)),backgroundColor:t.map((i,n)=>$a(n)),borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"62%",plugins:{legend:{position:"right",labels:{boxWidth:10,boxHeight:10,font:{size:11},padding:8}},tooltip:{callbacks:{label:i=>`${i.label}: ${this.fmt(Number(i.parsed))}`}}}}};return u`
      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="flex items-baseline justify-between mb-1">
          <span class="text-[10px] uppercase tracking-wider text-muted">Expense breakdown</span>
          <span class="text-[11px] tabular-nums text-muted">${this.fmt(e.totalSpent)}</span>
        </div>
        <finance-chart .config=${s} height="200px"></finance-chart>
      </div>
    `}onAddAccount(e){e.preventDefault();const t=e.target,s=t.elements.namedItem("name").value.trim(),i=(t.elements.namedItem("currency").value||this.base).toUpperCase().trim(),n=t.elements.namedItem("bucket").value,o=t.elements.namedItem("subtype").value.trim();if(!s||!i)return;const r=n==="Debts"?"debt":"asset";(async()=>(await this.post("/account",{name:s,currency:i,type:r,bucket:n,subtype:o||null}),this.showAccountAdd=!1,await this.refresh()))()}onSetBalance(e,t){t.preventDefault();const s=t.target,i=Number(s.elements.namedItem("amount").value);Number.isFinite(i)&&(async()=>(await this.post("/networth",{accountId:e,amount:i}),this.editingBalanceId=null,await this.refresh()))()}renderNwAccount(e){const t=this.editingBalanceId===e.id;return u`
      <li class="border-b border-line/60 last:border-0">
        <div class="flex items-center gap-2 px-4 py-2 hover:bg-hover cursor-pointer"
          @click=${()=>{this.editingBalanceId=t?null:e.id}}>
          <span class="flex-1 min-w-0 truncate">
            <span class="text-sm text-ink">${e.name}</span>
            ${e.subtype?u`<span class="ml-1.5 text-[10px] text-muted">${e.subtype}</span>`:k}
          </span>
          <span class="text-sm font-semibold shrink-0 tabular-nums ${e.type==="debt"?"text-red-500":"text-ink"}">
            ${e.base!=null?this.fmt(e.base):`${e.original} ${e.currency}`}
          </span>
        </div>
        ${t?u`
              <form class="flex gap-2 items-center flex-wrap px-4 py-2 bg-bg/40 border-t border-line"
                @submit=${s=>this.onSetBalance(e.id,s)}>
                <span class="text-[10px] uppercase tracking-wider text-muted">Balance</span>
                <input name="amount" type="number" step="1" inputmode="decimal" .value=${e.original?String(e.original):""}
                  class="w-28 px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <span class="text-xs text-muted">${e.currency}</span>
                <span class="text-[10px] text-muted">last: ${e.asOf}</span>
                <button type="submit" class="ml-auto px-2.5 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Save (today)</button>
              </form>`:k}
      </li>
    `}renderNetworth(){const e=this.networth;return e?u`
      <div class="m-3 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 text-white px-5 py-4 shadow-sm">
        <div class="text-[11px] uppercase tracking-wider text-white/70">Net worth · ${Is(e.month)}</div>
        <div class="text-2xl font-bold tabular-nums leading-tight">${this.fmt(e.total)}</div>
      </div>

      ${e.groups.length?e.groups.map(t=>u`
            <div class="mx-3 mb-3 rounded-xl border border-line bg-surface overflow-hidden">
              <div class="flex items-center justify-between px-4 py-2 border-b border-line bg-bg/40">
                <span class="text-[11px] uppercase tracking-wider text-muted">${t.bucket}</span>
                <span class="text-sm font-semibold tabular-nums ${t.total<0?"text-red-500":"text-ink"}">${this.fmt(t.total)}</span>
              </div>
              <ul>${t.accounts.map(s=>this.renderNwAccount(s))}</ul>
            </div>`):u`<div class="mx-3 mb-3 px-4 py-4 text-xs text-muted rounded-xl border border-line bg-surface">No accounts with a balance as of ${e.month}.</div>`}

      <div class="mx-3 mb-3">
        ${this.showAccountAdd?u`
              <form class="flex flex-wrap gap-2 items-center px-3 py-2 rounded-xl border border-line bg-bg/40" @submit=${t=>this.onAddAccount(t)}>
                <input name="name" placeholder="account name…" autofocus
                  class="flex-1 min-w-[8rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                ${this.renderCurrencySelect(this.lastCurrency)}
                <select name="bucket" class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="Liquid Assets">Liquid Assets</option>
                  <option value="Investments">Investments</option>
                  <option value="Physical Assets">Physical Assets</option>
                  <option value="Debts">Debts</option>
                </select>
                <input name="subtype" list="nw-subtypes" placeholder="type (e.g. Bank Account)"
                  class="flex-1 min-w-[7rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <datalist id="nw-subtypes">
                  <option value="Bank Account"></option><option value="Cash"></option><option value="Crypto"></option>
                  <option value="Stocks"></option><option value="Gold Investment"></option><option value="Vehicles"></option>
                  <option value="Primary Residence"></option><option value="Silver"></option>
                </datalist>
                <button type="submit" class="px-3 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Add</button>
                <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.showAccountAdd=!1}}>Cancel</button>
              </form>`:u`
              <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover"
                @click=${()=>{this.showAccountAdd=!0}}>+ Account</button>
              <span class="ml-2 text-[11px] text-muted">Tap an account to update its balance (saves to today).</span>`}
      </div>

      ${this.renderNetworthChart(e)}
    `:u`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`}renderNetworthChart(e){if(e.series.length<2)return k;const t={type:"line",data:{labels:e.series.map(s=>s.month),datasets:[{data:e.series.map(s=>Math.round(s.net)),borderColor:"#6366f1",backgroundColor:"rgba(99,102,241,0.12)",borderWidth:2,fill:!0,tension:.3,pointRadius:0,pointHoverRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:s=>this.fmt(Number(s.parsed.y))}}},scales:{x:{ticks:{maxTicksLimit:6,font:{size:10}},grid:{display:!1}},y:{ticks:{callback:s=>this.fmtShort(Number(s)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"}}}}};return u`
      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="text-[10px] uppercase tracking-wider text-muted mb-1">Net worth over time</div>
        <finance-chart .config=${t} height="200px"></finance-chart>
      </div>
    `}onAddRecurring(e){e.preventDefault();const t=e.target,s=t.elements.namedItem("name").value.trim(),i=Number(t.elements.namedItem("amount").value),n=(t.elements.namedItem("currency").value||this.base).toUpperCase().trim(),o=t.elements.namedItem("type").value,r=t.elements.namedItem("frequency").value,a=t.elements.namedItem("category").value.trim();if(!s||!Number.isFinite(i)||i<=0)return;const l={name:s,amount:i,currency:n,type:o,frequency:r};o==="expense"&&a&&(l.category=a),(async()=>(await this.post("/recurring",l),this.showRecurringAdd=!1,await this.refresh()))()}nextDue(e){const t=new Date().toISOString().slice(0,10),s=d=>!e.end_date||d<=e.end_date,[i,n,o]=e.start_date.split("-").map(Number);if(!i||!n||!o)return null;const r=d=>String(d).padStart(2,"0");if(e.frequency==="weekly"){let d=new Date(`${e.start_date}T00:00:00Z`);const h=new Date(`${t}T00:00:00Z`);if(d<h){const f=Math.ceil((h.getTime()-d.getTime())/6048e5);d=new Date(d.getTime()+f*7*864e5)}const p=d.toISOString().slice(0,10);return s(p)?p:null}const a=e.frequency==="yearly"?12:e.frequency==="quarterly"?3:1;let l=i,c=n;for(let d=0;d<2400;d++){const h=new Date(Date.UTC(l,c,0)).getUTCDate(),p=`${l}-${r(c)}-${r(Math.min(o,h))}`;if(p>=t)return s(p)?p:null;for(c+=a;c>12;)c-=12,l+=1}return null}toggleColumn(e){const t=this.recurringColumns.includes(e)?this.recurringColumns.filter(s=>s!==e):[...this.recurringColumns,e];this.recurringColumns=t,this.post("/recurring-columns",{columns:t})}toggleEditRecur(e){this.editingRecurId=this.editingRecurId===e?null:e,this.cancelingRecurId=null}startCancel(e){this.cancelingRecurId=this.cancelingRecurId===e?null:e,this.editingRecurId=null}onSaveRecur(e,t){e.preventDefault();const s=e.target,i=a=>s.elements.namedItem(a)?.value??"",n=i("type")==="income"?"income":"expense",o=Number(i("amount"));if(!i("name").trim()||!Number.isFinite(o)||o<=0)return;const r={name:i("name").trim(),amount:o,currency:(i("currency")||this.base).toUpperCase().trim(),type:n,frequency:i("frequency"),start:i("start"),category:n==="expense"&&i("category").trim()||null,end:i("end")||null};(async()=>(await this.patch(`/recurring/${t}`,r),this.editingRecurId=null,await this.refresh()))()}onConfirmCancel(e,t){e.preventDefault();const s=e.target.elements.namedItem("end")?.value;s&&(async()=>(await this.patch(`/recurring/${t}`,{end:s}),this.cancelingRecurId=null,await this.refresh()))()}async resumeRecur(e){await this.patch(`/recurring/${e}`,{end:null}),await this.refresh()}async deleteRecur(e){confirm("Delete this recurring item? Its logged transactions stay in your history; only the template is removed.")&&(await this.del(`/recurring/${e}`),this.editingRecurId=null,await this.refresh())}cancelIcon(){return u`<svg viewBox="0 0 16 16" class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="8" cy="8" r="6"></circle><line x1="4" y1="4" x2="12" y2="12"></line></svg>`}renderRecurRow(e){const t=e.type==="income",s=new Date().toISOString().slice(0,10),i=this.nextDue(e),n=d=>new Date(`${d}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short"}),o=!!e.end_date&&e.end_date>=s,r="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink",a=d=>{switch(d){case"type":return u`<td class="px-3 py-2"><span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${t?"bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-600"}">${t?"IN":"OUT"}</span></td>`;case"category":return u`<td class="px-3 py-2 whitespace-nowrap" title=${t?"income":e.category_name||""}>${t?this.renderIcon("💰"):e.category_icon?this.renderIcon(e.category_icon):u`<span class="text-muted">${e.category_name||"—"}</span>`}</td>`;case"amount":return u`<td class="px-3 py-2 text-right tabular-nums font-semibold whitespace-nowrap ${t?"text-emerald-600":"text-ink"}">${t?"+":""}${this.fmt(e.original_amount,e.original_currency)}</td>`;case"frequency":return u`<td class="px-3 py-2 text-muted whitespace-nowrap">${e.frequency}</td>`;case"next":return u`<td class="px-3 py-2 text-muted whitespace-nowrap">${i?n(i):"ended"}</td>`;case"account":return u`<td class="px-3 py-2 text-muted whitespace-nowrap">${e.account_name||"—"}</td>`;case"end":return u`<td class="px-3 py-2 text-muted whitespace-nowrap">${e.end_date||"—"}</td>`;default:return k}},l=2+Pi.filter(d=>this.recurringColumns.includes(d.key)).length,c=(d,h)=>d===h?"selected":"";return u`
      <tr class="group border-b border-line/60 last:border-0 cursor-pointer hover:bg-hover" @click=${()=>this.toggleEditRecur(e.id)}>
        <td class="px-3 py-2 font-medium text-ink whitespace-nowrap">
          ${e.name}
          ${o?u`<span class="ml-1.5 text-[10px] font-semibold text-amber-600">ending ${n(e.end_date)}</span>`:k}
        </td>
        ${Pi.filter(d=>this.recurringColumns.includes(d.key)).map(d=>a(d.key))}
        <td class="px-2 py-2 text-right">
          <button type="button" class="${o?"text-amber-500":"text-muted opacity-0 group-hover:opacity-100"} hover:text-red-500"
            @click=${d=>{d.stopPropagation(),this.startCancel(e.id)}} title="Cancel subscription">${this.cancelIcon()}</button>
        </td>
      </tr>
      ${this.cancelingRecurId===e.id?u`<tr><td colspan=${l} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${d=>d.stopPropagation()}>
            <form class="flex flex-wrap items-center gap-2" @submit=${d=>this.onConfirmCancel(d,e.id)}>
              <span class="text-[11px] uppercase tracking-wider text-muted">Cancel from</span>
              <input name="end" type="date" .value=${e.end_date||i||s} class=${r} />
              <button type="submit" class="px-2.5 py-1 text-sm rounded border border-ink text-ink hover:bg-hover">Confirm</button>
              ${e.end_date?u`<button type="button" class="text-[11px] text-ink/60 hover:text-ink" @click=${()=>void this.resumeRecur(e.id)}>resume</button>`:k}
              <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.cancelingRecurId=null}}>close</button>
              <span class="text-[11px] text-muted">A payment due on/after this date still runs, then it ends.</span>
            </form>
          </td></tr>`:k}
      ${this.editingRecurId===e.id?u`<tr><td colspan=${l} class="px-3 py-2 bg-bg/40 border-b border-line" @click=${d=>d.stopPropagation()}>
            <form class="flex flex-wrap items-center gap-2" @submit=${d=>this.onSaveRecur(d,e.id)}>
              <input name="name" .value=${e.name} class="flex-1 min-w-[7rem] ${r}" />
              <input name="amount" type="number" step="1" inputmode="decimal" .value=${String(e.original_amount)} class="w-20 ${r}" />
              ${this.renderCurrencySelect(e.original_currency)}
              <select name="type" class=${r}><option value="expense" ?selected=${!t}>expense</option><option value="income" ?selected=${t}>income</option></select>
              <select name="frequency" class=${r}>
                <option value="monthly" ?selected=${c(e.frequency,"monthly")==="selected"}>monthly</option>
                <option value="weekly" ?selected=${c(e.frequency,"weekly")==="selected"}>weekly</option>
                <option value="quarterly" ?selected=${c(e.frequency,"quarterly")==="selected"}>quarterly</option>
                <option value="yearly" ?selected=${c(e.frequency,"yearly")==="selected"}>yearly</option>
              </select>
              <input name="category" placeholder="category" .value=${e.category_name||""} class="flex-1 min-w-[6rem] ${r}" />
              <label class="flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted">start<input name="start" type="date" .value=${e.start_date} class=${r} /></label>
              <label class="flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted">cancel from<input name="end" type="date" .value=${e.end_date||""} class=${r} /></label>
              <button type="submit" class="px-3 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Save</button>
              <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.editingRecurId=null}}>close</button>
              ${e.end_date?u`<button type="button" class="ml-auto text-[11px] text-muted hover:text-red-500" @click=${()=>void this.deleteRecur(e.id)}>Delete</button>`:u`<span class="ml-auto text-[10px] text-muted">set a cancel date to enable delete</span>`}
              <span class="basis-full text-[10px] text-muted">A payment due on/after the cancel date still runs, then it ends. Deleting keeps logged transactions.</span>
            </form>
          </td></tr>`:k}
    `}monthlyEquiv(e){const t=e.base??e.original_amount;switch(e.frequency){case"weekly":return t*(52/12);case"quarterly":return t/3;case"yearly":return t/12;default:return t}}renderRecurringChart(){const e=this.recurring.filter(r=>r.type==="expense");if(!e.length)return k;const t=As(),s=[];for(let r=-11;r<=5;r++)s.push(_a(t,r));const i=s.indexOf(t),n=s.map(r=>{const a=`${r}-31`,l=`${r}-01`;let c=0;for(const d of e)d.start_date>a||d.end_date&&d.end_date<l||(c+=this.monthlyEquiv(d));return Math.round(c)});return u`
      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="text-[10px] uppercase tracking-wider text-muted mb-1">Monthly recurring outflow <span class="normal-case">(dashed = projected)</span></div>
        <finance-chart .config=${{type:"line",data:{labels:s,datasets:[{data:n,borderColor:"#8b5cf6",backgroundColor:"rgba(139,92,246,0.10)",borderWidth:2,fill:!0,tension:.25,pointRadius:0,pointHoverRadius:4,segment:{borderDash:r=>r.p1DataIndex>i?[5,4]:void 0}}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:r=>`${this.fmt(Number(r.parsed.y))}/mo`}}},scales:{x:{ticks:{maxTicksLimit:6,font:{size:10}},grid:{display:!1}},y:{ticks:{callback:r=>this.fmtShort(Number(r)),font:{size:10},maxTicksLimit:5},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}}} height="180px"></finance-chart>
      </div>
    `}renderRecurringHeader(){const e=`${this.month}-31`,t=`${this.month}-01`,s=this.recurring.filter(a=>a.start_date<=e&&(!a.end_date||a.end_date>=t));let i=0,n=0;for(const a of s)a.type==="income"?n+=this.monthlyEquiv(a):i+=this.monthlyEquiv(a);const o=this.budget?this.budget.income.actual+(this.budget.income.committed??0):n,r=o>0?Math.round(i/o*100):0;return u`
      <div class="m-3 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          ${this.stat("Out / mo",i)}
          ${this.stat("In / mo",n)}
          ${this.stat("Net / mo",n-i)}
        </div>
        ${o>0?u`<div class="mt-2 text-[11px] text-white/70 text-center">${s.length} active · fixed costs are ${r}% of income</div>`:k}
      </div>
    `}renderRecurring(){const e=new Date().toISOString().slice(0,10),t=n=>!!n.end_date&&n.end_date<e,s=this.recurring.filter(t),i=this.showEnded?this.recurring:this.recurring.filter(n=>!t(n));return u`
      ${this.recurring.length?this.renderRecurringHeader():k}
      <div class="mx-3 my-3 rounded-xl border border-line bg-surface overflow-hidden">
        <!-- column toggle -->
        <div class="relative flex items-center justify-end px-3 py-1.5 border-b border-line">
          <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${n=>{n.stopPropagation(),this.showColMenu=!this.showColMenu}}>Columns ▾</button>
          ${this.showColMenu?u`
                <div class="absolute right-3 top-8 z-20 rounded-xl border border-line bg-surface shadow-lg py-1" @click=${n=>n.stopPropagation()}>
                  ${Pi.map(n=>u`
                    <label class="flex items-center gap-2 px-3 py-1 text-sm hover:bg-hover cursor-pointer whitespace-nowrap">
                      <input type="checkbox" ?checked=${this.recurringColumns.includes(n.key)} @change=${()=>this.toggleColumn(n.key)} />
                      <span>${n.label}</span>
                    </label>`)}
                </div>`:k}
        </div>
        ${this.recurring.length?u`
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="text-[10px] uppercase tracking-wider text-muted border-b border-line">
                      <th class="text-left font-normal px-3 py-1.5">Name</th>
                      ${Pi.filter(n=>this.recurringColumns.includes(n.key)).map(n=>u`<th class="font-normal px-3 py-1.5 whitespace-nowrap ${n.key==="amount"?"text-right":"text-left"}">${n.label}</th>`)}
                      <th class="px-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    ${i.map(n=>this.renderRecurRow(n))}
                  </tbody>
                </table>
              </div>`:u`<div class="px-4 py-4 text-xs text-muted">No recurring items yet. They auto-log on their due date.</div>`}
        ${this.showRecurringAdd?u`
              <form class="flex flex-wrap gap-2 items-center px-3 py-2 border-t border-line bg-bg/40" @submit=${n=>this.onAddRecurring(n)}>
                <input name="name" placeholder="name (e.g. Rent)…" autofocus
                  class="flex-1 min-w-[7rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <input name="amount" type="number" step="1" inputmode="decimal" placeholder="amount"
                  class="w-20 px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                ${this.renderCurrencySelect(this.lastCurrency)}
                <select name="type" class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="expense">expense</option>
                  <option value="income">income</option>
                </select>
                <select name="frequency" class="px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="monthly">monthly</option>
                  <option value="weekly">weekly</option>
                  <option value="quarterly">quarterly</option>
                  <option value="yearly">yearly</option>
                </select>
                <input name="category" placeholder="category (expense)"
                  class="flex-1 min-w-[6rem] px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink" />
                <button type="submit" class="px-3 py-1 text-sm rounded-lg border border-ink text-ink hover:bg-hover">Add</button>
                <button type="button" class="text-[11px] text-muted hover:text-ink" @click=${()=>{this.showRecurringAdd=!1}}>Cancel</button>
              </form>`:u`
              <div class="px-3 py-2 border-t border-line flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="text-[11px] text-muted">Auto-logs on the due date.</span>
                  ${s.length?u`<button type="button" class="text-[11px] text-ink/60 hover:text-ink underline decoration-dotted"
                        @click=${()=>{this.showEnded=!this.showEnded}}>${this.showEnded?"Hide ended":`Show ${s.length} ended`}</button>`:k}
                </div>
                <button type="button" class="px-3 py-1.5 text-sm rounded-lg border border-ink text-ink hover:bg-hover"
                  @click=${()=>{this.showRecurringAdd=!0}}>+ Recurring</button>
              </div>`}
      </div>
      ${this.recurring.length?this.renderRecurringChart():k}
    `}gotoYear(e){this.yearN+=e,this.expandedYearMonth=null,this.refresh()}async toggleYearMonth(e){if(this.expandedYearMonth===e){this.expandedYearMonth=null;return}this.expandedYearMonth=e;try{const t=await fetch(`/api/finance/transactions?month=${e}`);t.ok&&(this.yearMonthTxns=(await t.json()).items)}catch{}}renderYearMonthDetail(){const e=this.yearMonthTxns;if(!e.length)return u`<p class="text-xs text-muted">No transactions.</p>`;const t=n=>{const o=n.recurring_id!=null;return u`<li class="flex items-center gap-2 py-0.5 text-xs ${o?"italic text-muted":""}">
        <span class="text-muted w-11 shrink-0 tabular-nums">${n.date.slice(5)}</span>
        <span class="flex-1 min-w-0 truncate">${o?"↻ ":""}${n.name||"—"}</span>
        <span class="shrink-0 tabular-nums ${n.type==="income"?"text-emerald-600":"text-ink"}">${n.base!=null?this.fmt(n.base):`${n.original_amount} ${n.original_currency}`}</span>
      </li>`},s=e.filter(n=>n.type==="income"),i=e.filter(n=>n.type==="expense");return u`
      <div class="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        <div>
          <div class="text-[10px] uppercase tracking-wider text-muted mb-0.5">Income</div>
          <ul>${s.length?s.map(t):u`<li class="text-xs text-muted">—</li>`}</ul>
        </div>
        <div>
          <div class="text-[10px] uppercase tracking-wider text-muted mb-0.5">Expenses</div>
          <ul>${i.length?i.map(t):u`<li class="text-xs text-muted">—</li>`}</ul>
        </div>
      </div>
    `}renderYear(){const e=this.year;if(!e)return u`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`;const t=e.months.map(d=>new Date(`${d.month}-01T00:00:00`).toLocaleDateString(void 0,{month:"short"})),s=8,i=e.categories.slice(0,s),n=e.categories.slice(s),o=n.length?Array.from({length:12},(d,h)=>n.reduce((p,f)=>p+(f.monthly[h]??0),0)):null,r=i.map((d,h)=>({type:"bar",label:d.name,data:d.monthly.map(p=>Math.round(p)),backgroundColor:$a(h),stack:"spend",borderWidth:0}));o&&r.push({type:"bar",label:"Other",data:o.map(d=>Math.round(d)),backgroundColor:"#94a3b8",stack:"spend",borderWidth:0});const a={type:"line",label:"Income",data:e.months.map(d=>Math.round(d.income)),borderColor:"#10b981",backgroundColor:"#10b981",borderWidth:2,tension:.3,pointRadius:0,pointHoverRadius:4,fill:!1,stack:"income"},l={type:"bar",data:{labels:t,datasets:[...r,a]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"bottom",labels:{boxWidth:10,boxHeight:10,font:{size:10},padding:6}},tooltip:{callbacks:{label:d=>`${d.dataset.label}: ${this.fmt(Number(d.parsed.y))}`}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{font:{size:10}}},y:{stacked:!0,ticks:{callback:d=>this.fmtShort(Number(d)),font:{size:10},maxTicksLimit:6},grid:{color:"rgba(0,0,0,0.05)"},beginAtZero:!0}}}},c=e.totals;return u`
      <div class="m-3 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 text-white px-5 py-4 shadow-sm">
        <div class="grid grid-cols-3 gap-2">
          ${this.stat("Income",c.income)}
          ${this.stat("Spent",c.spent)}
          ${this.stat("Saved",c.saved)}
        </div>
        <div class="mt-2 text-[11px] text-white/70">Savings rate ${Math.round(c.savingsRate*100)}%</div>
      </div>

      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface px-4 py-3">
        <div class="text-[10px] uppercase tracking-wider text-muted mb-1">Spending by category · income line</div>
        <finance-chart .config=${l} height="240px"></finance-chart>
      </div>

      <div class="mx-3 mb-3 rounded-xl border border-line bg-surface overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="text-[10px] uppercase tracking-wider text-muted border-b border-line">
                <th class="text-left font-normal px-3 py-1.5">Month</th>
                <th class="text-right font-normal px-3 py-1.5">Income</th>
                <th class="text-right font-normal px-3 py-1.5">Spent</th>
                <th class="text-right font-normal px-3 py-1.5">Saved</th>
                <th class="text-right font-normal px-3 py-1.5">Rate</th>
              </tr>
            </thead>
            <tbody>
              ${e.months.map((d,h)=>{const p=d.income>0?Math.round(d.saved/d.income*100):0,f=d.income===0&&d.spent===0,g=this.expandedYearMonth===d.month;return u`<tr class="border-b border-line/60 ${f?"opacity-40":"cursor-pointer hover:bg-hover"} ${g?"bg-hover":""}"
                    @click=${f?null:()=>void this.toggleYearMonth(d.month)}>
                    <td class="px-3 py-1.5 text-ink">${g?"▾":"▸"} ${t[h]}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-emerald-600">${d.income?this.fmt(d.income):"—"}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-ink">${d.spent?this.fmt(d.spent):"—"}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums ${d.saved<0?"text-red-500":"text-ink"}">${f?"—":this.fmt(d.saved)}</td>
                    <td class="px-3 py-1.5 text-right tabular-nums text-muted">${f?"—":`${p}%`}</td>
                  </tr>
                  ${g?u`<tr><td colspan="5" class="px-3 py-2 bg-bg/40 border-b border-line">${this.renderYearMonthDetail()}</td></tr>`:k}`})}
            </tbody>
            <tfoot>
              <tr class="border-t border-line font-semibold">
                <td class="px-3 py-1.5 text-ink">Total</td>
                <td class="px-3 py-1.5 text-right tabular-nums text-emerald-600">${this.fmt(c.income)}</td>
                <td class="px-3 py-1.5 text-right tabular-nums text-ink">${this.fmt(c.spent)}</td>
                <td class="px-3 py-1.5 text-right tabular-nums ${c.saved<0?"text-red-500":"text-ink"}">${this.fmt(c.saved)}</td>
                <td class="px-3 py-1.5 text-right tabular-nums text-muted">${Math.round(c.savingsRate*100)}%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    `}render(){const e=(t,s)=>u`
      <button type="button"
        class="px-3 py-1.5 text-sm border-b-2 ${this.tab===t?"border-ink text-ink":"border-transparent text-muted hover:text-ink"}"
        @click=${()=>this.setTab(t)}>${s}</button>
    `;return u`
      ${this.demoMode?u`<style>.finance-demo .tabular-nums { filter: blur(6px); user-select: none; transition: filter 0.2s; }</style>`:k}
      <div class="flex flex-col h-full ${this.demoMode?"finance-demo":""}">
        <header class="px-4 pt-2 border-b border-line shrink-0">
          <div class="max-w-xl sm:max-w-3xl mx-auto w-full flex items-center justify-between gap-2">
            <div class="flex gap-1 -mb-px">
              ${e("budget","Budget")} ${e("recurring","Recurring")} ${e("networth","Net worth")} ${e("year","Year")}
            </div>
            <div class="flex items-center gap-3 shrink-0">
              ${this.tab==="budget"||this.tab==="networth"?u`
                    <div class="flex items-center gap-2 text-sm">
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoMonth(-1)}>◀</button>
                      <button type="button" class="text-ink hover:underline decoration-dotted" title="Jump to current month" @click=${()=>this.toCurrentMonth()}>${Is(this.month)}</button>
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoMonth(1)}>▶</button>
                    </div>`:this.tab==="year"?u`
                    <div class="flex items-center gap-2 text-sm">
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoYear(-1)}>◀</button>
                      <span class="text-ink">${this.yearN}</span>
                      <button type="button" class="text-muted hover:text-ink px-1" @click=${()=>this.gotoYear(1)}>▶</button>
                    </div>`:k}
              <button type="button" class="text-base ${this.demoMode?"text-amber-500":"text-muted hover:text-ink"}" title="${this.demoMode?"Demo mode on — click to show real numbers":"Demo mode"}"
                @click=${()=>{this.demoMode=!this.demoMode}}><sc-icon name="lucide-${this.demoMode?"eye-off":"eye"}"></sc-icon></button>
              <button type="button" class="text-base ${this.showSettings?"text-ink":"text-muted hover:text-ink"}" title="Finance settings"
                @click=${()=>{this.showSettings=!this.showSettings}}>⚙</button>
            </div>
          </div>
        </header>
        <div class="flex-1 min-h-0 overflow-y-auto">
          <div class="max-w-xl sm:max-w-3xl mx-auto w-full @container">
            ${this.showSettings?this.renderSettings():k}
            ${this.loading?u`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.tab==="budget"?this.renderBudget():this.tab==="networth"?this.renderNetworth():this.tab==="year"?this.renderYear():this.renderRecurring()}
          </div>
        </div>
      </div>
    `}};F([x()],L.prototype,"tab",2);F([x()],L.prototype,"month",2);F([x()],L.prototype,"loading",2);F([x()],L.prototype,"base",2);F([x()],L.prototype,"budget",2);F([x()],L.prototype,"expandedCat",2);F([x()],L.prototype,"catTxns",2);F([x()],L.prototype,"newCat",2);F([x()],L.prototype,"newCatIcon",2);F([x()],L.prototype,"emojiPickerFor",2);F([x()],L.prototype,"showHidden",2);F([x()],L.prototype,"networth",2);F([x()],L.prototype,"recurring",2);F([x()],L.prototype,"year",2);F([x()],L.prototype,"yearN",2);F([x()],L.prototype,"expandedYearMonth",2);F([x()],L.prototype,"yearMonthTxns",2);F([x()],L.prototype,"editingSavings",2);F([x()],L.prototype,"editingGoals",2);F([x()],L.prototype,"editingTxnId",2);F([x()],L.prototype,"showIncome",2);F([x()],L.prototype,"incomeTxns",2);F([x()],L.prototype,"showAccountAdd",2);F([x()],L.prototype,"editingBalanceId",2);F([x()],L.prototype,"showRecurringAdd",2);F([x()],L.prototype,"editingRecurId",2);F([x()],L.prototype,"cancelingRecurId",2);F([x()],L.prototype,"recurringColumns",2);F([x()],L.prototype,"currencies",2);F([x()],L.prototype,"supportedCurrencies",2);F([x()],L.prototype,"lastCurrency",2);F([x()],L.prototype,"showSettings",2);F([x()],L.prototype,"demoMode",2);F([x()],L.prototype,"cards",2);F([x()],L.prototype,"showColMenu",2);F([x()],L.prototype,"showEnded",2);L=F([O("finance-section")],L);async function yb(e,t=400,s=.85){const i=URL.createObjectURL(e);try{const n=await new Promise((h,p)=>{const f=new Image;f.onload=()=>h(f),f.onerror=()=>p(new Error("could not decode image")),f.src=i}),o=Math.min(1,t/Math.max(n.width,n.height)),r=Math.max(1,Math.round(n.width*o)),a=Math.max(1,Math.round(n.height*o)),l=document.createElement("canvas");l.width=r,l.height=a;const c=l.getContext("2d");if(!c)return await vb(e);c.drawImage(n,0,0,r,a);const d=l.toDataURL("image/webp",s);return d.startsWith("data:image/webp")?d:l.toDataURL("image/jpeg",s)}finally{URL.revokeObjectURL(i)}}function vb(e){return new Promise((t,s)=>{const i=new FileReader;i.onload=()=>t(i.result),i.onerror=()=>s(i.error),i.readAsDataURL(e)})}var kb=Object.defineProperty,wb=Object.getOwnPropertyDescriptor,nt=(e,t,s,i)=>{for(var n=i>1?void 0:i?wb(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&kb(t,s,n),n};let tt=class extends H{constructor(){super(...arguments),this.view="list",this.circles=[],this.people=[],this.pendingCount=0,this.loading=!0,this.filter="all",this.selectedId=null,this.detail=null,this.adding=!1,this.pending=[],this.draftName="",this.draftCircle="",this.editingNote=null,this.creatingCircle=!1,this.editingField=null,this.settingsOpen=!1,this.showCompletedActions=!1,this.expandedNotes=[],this.photoMenuOpen=!1,this.onDocPointerDown=e=>{const t=e.composedPath();if(this.editingNote==="new"){const s=this.renderRoot.querySelector(".newnote-card");s&&!t.includes(s)&&this.saveNewNote()}if(this.editingField==="newfact"&&this.selectedId!=null){const s=this.renderRoot.querySelector(".newfact-form");s&&!t.includes(s)&&this.submitNewFact(this.selectedId)}else if(this.editingField==="newaction"&&this.selectedId!=null){const s=this.renderRoot.querySelector(".newaction-form");s&&!t.includes(s)&&this.submitAction(this.selectedId)}else if(this.editingField!=null){const s=this.renderRoot.querySelector(".inline-edit");s&&!t.includes(s)&&(s.blur(),s.dispatchEvent(new Event("blur")))}},this.onOpsEvent=e=>{e.detail?.action==="refresh"&&this.editingField==null&&this.editingNote==null&&this.refresh()},this.onPaste=async e=>{const t=e;if(this.selectedId==null||!t.clipboardData)return;const s=document.activeElement;if(s&&/^(INPUT|TEXTAREA)$/.test(s.tagName))return;for(const n of Array.from(t.clipboardData.items))if(n.type.startsWith("image/")){const o=n.getAsFile();if(o){t.preventDefault(),await this.uploadPhotoFile(this.selectedId,o);return}}const i=t.clipboardData.getData("text").trim();if(/^https?:\/\/.+/i.test(i)){t.preventDefault();try{const n=await fetch(`/api/circle/person/${this.selectedId}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:i})});if(!n.ok){const o=await n.json().catch(()=>({}));alert(`Couldn't use that image URL: ${o.error??n.status}`);return}await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}}}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.onDocPointerDown,!0),document.addEventListener("ops-event",this.onOpsEvent),document.addEventListener("paste",this.onPaste),this.refresh().then(()=>this.restoreOpen())}disconnectedCallback(){document.removeEventListener("pointerdown",this.onDocPointerDown,!0),document.removeEventListener("ops-event",this.onOpsEvent),document.removeEventListener("paste",this.onPaste),this.reportFocus(null),super.disconnectedCallback()}async refresh(){try{const e=await fetch("/api/circle");if(e.ok){const t=await e.json();this.circles=t.circles,this.people=t.people,this.pendingCount=t.pending_count}}catch{}this.loading=!1,this.selectedId!=null&&await this.loadDetail(this.selectedId)}async loadDetail(e){try{const t=await fetch(`/api/circle/person/${e}`);t.ok&&(this.detail=(await t.json()).person)}catch{}}open(e){this.selectedId=e,this.view="detail",this.editingNote=null,this.editingField=null,this.settingsOpen=!1,this.creatingCircle=!1,this.showCompletedActions=!1,this.expandedNotes=[],this.photoMenuOpen=!1;try{localStorage.setItem("circle.open",String(e))}catch{}this.reportFocus(e),this.loadDetail(e)}back(){this.view="list",this.selectedId=null,this.detail=null;try{localStorage.removeItem("circle.open")}catch{}this.reportFocus(null),this.refresh()}reportFocus(e){fetch("/api/circle/focus",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:e})}).catch(()=>{})}restoreOpen(){try{const e=localStorage.getItem("circle.open");e&&this.people.some(t=>t.id===Number(e))&&this.open(Number(e))}catch{}}circleName(e){return e==null?"New":this.circles.find(t=>t.id===e)?.name??"New"}async patchPerson(e,t){await fetch(`/api/circle/person/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async post(e,t){const s=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});await this.refresh();try{return await s.json()}catch{return null}}async patch(e,t){await fetch(e,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),await this.refresh()}async del(e){await fetch(e,{method:"DELETE"}),await this.refresh()}async createAndAssign(e,t){const s=t.trim();if(this.creatingCircle=!1,!s)return;const i=await this.post("/api/circle/circle",{name:s});i?.id&&await this.patchPerson(e,{circle_id:i.id})}async addPerson(){const e=this.draftName.trim();if(!e)return;const t=await this.post("/api/circle/person",{name:e,circle:this.draftCircle||null});this.draftName="",this.draftCircle="",this.adding=!1,t?.id&&this.open(t.id)}async removePerson(e){confirm(`Remove ${e.name} and everything you've remembered about them?`)&&(await this.del(`/api/circle/person/${e.id}`),this.back())}async onPhotoFile(e,t){const s=t.target,i=s.files?.[0];s.value="",i&&await this.uploadPhotoFile(e.id,i)}async uploadPhotoFile(e,t){if(!t.type.startsWith("image/")){alert("That's not an image.");return}if(t.size>25*1024*1024){alert("That image is enormous (max 25MB).");return}this.photoMenuOpen=!1;try{const s=await yb(t,400,.85);await this.patchPerson(e,{photo:s})}catch{alert("Couldn't process that image.")}}initials(e){const t=e.trim().split(/\s+/);return t.length===1?(t[0]?.slice(0,2)??"").toUpperCase():((t[0]?.[0]??"")+(t[t.length-1]?.[0]??"")).toUpperCase()}avatarStyle(e){let t=0;for(const s of e)t=(t*31+s.charCodeAt(0))%360;return`background:linear-gradient(135deg, hsl(${t} 68% 55%), hsl(${(t+48)%360} 70% 45%));`}renderAvatar(e,t="w-9 h-9",s="text-xs"){return e.photo?u`<img src=${e.photo} alt="" class="${t} rounded-full object-cover shrink-0" loading="lazy" />`:u`<span class="${t} ${s} rounded-full grid place-items-center text-white font-semibold shrink-0 shadow-sm" style=${this.avatarStyle(e.name)}>${this.initials(e.name)}</span>`}relTime(e){if(!e)return"never";const t=Math.floor((Date.now()/1e3-e)/86400);return t<=0?"today":t===1?"yesterday":t<30?`${t}d ago`:t<365?`${Math.floor(t/30)}mo ago`:`${Math.floor(t/365)}y ago`}fmtDate(e,t){return(e?new Date(e+"T12:00:00"):new Date(t*1e3)).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}filteredPeople(){return this.filter==="needs"?this.people.filter(e=>(e.open_actions??0)>0):this.filter==="all"?this.people:this.people.filter(e=>this.circleName(e.circle_id)===this.filter)}renderRow(e){const t=e.title&&e.company?`${e.title}, ${e.company}`:e.company??e.title??this.circleName(e.circle_id),s=e.open_actions??0;return u`
      <li class="border-b border-line last:border-b-0">
        <button type="button" class="group w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-hover" @click=${()=>this.open(e.id)}>
          ${this.renderAvatar(e,"w-10 h-10","text-sm")}
          <span class="flex-1 min-w-0">
            <span class="block text-sm font-medium text-ink truncate">${e.name}</span>
            <span class="block text-xs text-muted truncate">${t}</span>
          </span>
          ${s>0?u`<span class="shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-600 text-white">${s} to do</span>`:k}
          <span class="shrink-0 text-muted opacity-0 group-hover:opacity-100">›</span>
        </button>
      </li>`}renderListBody(){const e=this.filteredPeople();if(e.length===0)return u`<p class="px-4 py-3 text-xs text-muted">${this.filter==="needs"?"Nothing open. You're caught up.":"No one here yet. Add someone, or tell the Circle keeper about a person you met."}</p>`;if(this.filter!=="all")return u`<ul>${e.map(n=>this.renderRow(n))}</ul>`;const t=[...this.circles.map(n=>n.name),"New"],s=new Set,i=t.filter(n=>!s.has(n)&&(s.add(n),!0)).map(n=>({name:n,people:e.filter(o=>this.circleName(o.circle_id)===n)})).filter(n=>n.people.length>0);return u`${i.map(n=>u`
      <section>
        <h3 class="px-4 py-2 text-xs font-medium tracking-wide text-muted bg-bg sticky top-0 z-10 border-b border-line">${n.name} (${n.people.length})</h3>
        <ul>${n.people.map(o=>this.renderRow(o))}</ul>
      </section>`)}`}renderList(){const e=this.people.some(s=>(s.open_actions??0)>0),t=[{key:"all",label:"All"}];e&&t.push({key:"needs",label:"Needs you"});for(const s of this.circles)t.push({key:s.name,label:s.name});return u`
      <header class="px-4 py-3 border-b border-line shrink-0">
        <div class="flex items-center justify-between gap-2">
          <h2 class="text-lg font-semibold text-ink">Circles</h2>
          <div class="flex items-center gap-2">
            ${this.pendingCount>0?u`<button type="button" class="text-xs px-2 py-1 rounded-full bg-violet-500/15 text-violet-600 dark:text-violet-400 hover:bg-violet-500/25" @click=${()=>void this.openReview()}>${this.pendingCount} to confirm</button>`:k}
            <button type="button" class="text-xs px-2.5 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>{this.adding=!this.adding}}>+ Add</button>
          </div>
        </div>
        ${this.adding?u`
          <div class="flex flex-wrap gap-1.5 mt-2.5">
            <input type="text" placeholder="Name" class="flex-1 min-w-[8rem] px-2 py-1.5 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
              .value=${this.draftName} @input=${s=>this.draftName=s.target.value}
              @keydown=${s=>{s.key==="Enter"&&this.addPerson(),s.key==="Escape"&&(this.adding=!1)}} autofocus />
            <input type="text" list="circle-options" placeholder="Circle" class="w-32 px-2 py-1.5 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
              .value=${this.draftCircle} @input=${s=>this.draftCircle=s.target.value}
              @keydown=${s=>{s.key==="Enter"&&this.addPerson()}} />
            <datalist id="circle-options">${this.circles.map(s=>u`<option value=${s.name}></option>`)}</datalist>
            <button type="button" class="text-sm px-3 py-1.5 rounded bg-ink text-bg hover:opacity-90 disabled:opacity-40" ?disabled=${!this.draftName.trim()} @click=${()=>void this.addPerson()}>Add</button>
          </div>`:k}
        <div class="flex gap-1.5 mt-2.5 overflow-x-auto -mx-1 px-1 pb-0.5 no-scrollbar">
          ${t.map(s=>u`<button type="button" class="shrink-0 px-2.5 py-1 text-xs rounded-full border transition-colors ${this.filter===s.key?"border-ink bg-ink text-bg":"border-line text-muted hover:bg-hover"}" @click=${()=>this.filter=s.key}>${s.label}</button>`)}
        </div>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto">
        ${this.loading?u`<p class="px-4 py-3 text-xs text-muted">Loading…</p>`:this.renderListBody()}
      </div>`}section(e,t,s){return u`
      <section class="px-4 pt-4 pb-1">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-[11px] font-medium tracking-wide text-muted">${e}</h3>
          ${s??k}
        </div>
        ${t}
      </section>`}headerInput(e,t,s,i){return u`<input type="text" placeholder=${t} class="${s} bg-transparent w-full focus:outline-none focus:bg-surface rounded px-1 -mx-1"
      .value=${e??""} @change=${n=>i(n.target.value.trim())} />`}toggleNoteExpand(e){this.expandedNotes=this.expandedNotes.includes(e)?this.expandedNotes.filter(t=>t!==e):[...this.expandedNotes,e]}noteRows(e){const t=e.split(`
`).reduce((s,i)=>s+Math.max(1,Math.ceil(i.length/65)),0);return Math.min(40,Math.max(3,t+1))}autoGrow(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}truncateBody(e){const t=e.split(`
`);if(t.length>=6)return t.slice(0,5).join(`
`).trimEnd();if(e.length<=280)return e;const s=e.slice(0,260),i=s.lastIndexOf(" ");return(i>200?s.slice(0,i):s).trimEnd()}renderNoteCard(e,t){const s=t.body.length>280||(t.body.match(/\n/g)?.length??0)>=6,i=this.expandedNotes.includes(t.id);return u`
      <article class="group/note rounded-lg border border-line p-3 mb-2">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            ${this.editingField===`ntitle:${t.id}`?u`<input class="inline-edit w-full text-sm font-semibold text-ink bg-transparent focus:outline-none" .value=${t.title??""} autofocus
                  @blur=${n=>{this.patch(`/api/circle/note/${t.id}`,{title:n.target.value.trim()||null}),this.editingField=null}}
                  @keydown=${n=>{n.key==="Enter"?n.target.blur():n.key==="Escape"&&(this.editingField=null)}} />`:u`<h4 class="text-sm font-semibold text-ink cursor-text hover:bg-hover rounded px-1 -mx-1 truncate" @click=${()=>{this.editingField=`ntitle:${t.id}`}}>${t.title||u`<span class="text-muted/50 font-normal italic">Add a title</span>`}</h4>`}
          </div>
          <button type="button" class="opacity-0 group-hover/note:opacity-100 text-muted hover:text-red-500 text-xs shrink-0" @click=${()=>void this.del(`/api/circle/note/${t.id}`)}>✕</button>
        </div>
        <div class="text-[10px] text-muted mt-0.5">${this.fmtDate(t.occurred_on,t.created_at)}</div>
        ${this.editingField===`nbody:${t.id}`?u`<textarea class="inline-edit w-full text-sm text-ink/90 bg-transparent focus:outline-none leading-relaxed resize-none overflow-hidden mt-2" rows=${this.noteRows(t.body)} autofocus
              @input=${n=>this.autoGrow(n.target)}
              @blur=${n=>{this.patch(`/api/circle/note/${t.id}`,{body:n.target.value.trim()}),this.editingField=null}}>${t.body}</textarea>`:u`
              <p class="text-sm text-ink/90 mt-2 whitespace-pre-wrap leading-relaxed cursor-text hover:bg-hover rounded px-1 -mx-1" @click=${()=>{this.editingField=`nbody:${t.id}`}}>${i||!s?t.body:this.truncateBody(t.body)}${s?u`<button type="button" class="text-xs font-medium text-ink/70 hover:text-ink ml-1 align-baseline" @click=${n=>{n.stopPropagation(),this.toggleNoteExpand(t.id)}}>${i?" Show less":"… Read more"}</button>`:k}</p>`}
      </article>`}renderNewNoteCard(){return u`
      <article class="newnote-card rounded-lg border border-ink/40 p-3 mb-2">
        <input id="nn-title" type="text" placeholder="Title" class="w-full text-sm font-semibold text-ink bg-transparent focus:outline-none" />
        <div class="text-[10px] text-muted mt-0.5">${this.fmtDate(new Date().toISOString().slice(0,10),0)}</div>
        <textarea id="nn-body" rows="4" placeholder="What happened, what you talked about, your read on them…"
          class="w-full text-sm text-ink/90 bg-transparent focus:outline-none leading-relaxed resize-none mt-2" autofocus></textarea>
      </article>`}async saveNewNote(){if(this.editingNote!=="new"||this.selectedId==null)return;const e=this.renderRoot.querySelector("#nn-title")?.value.trim()||null,t=this.renderRoot.querySelector("#nn-body")?.value.trim();this.editingNote=null,t&&await this.post(`/api/circle/person/${this.selectedId}/note`,{title:e,body:t,kind:"talk",date:new Date().toISOString().slice(0,10)})}renderFacts(e){return u`
      ${e.facts.length===0?u`<p class="text-xs text-muted italic mb-1">Nothing yet. Add a detail, or it fills in as you talk about them.</p>`:k}
      <div class="space-y-1">
        ${e.facts.map(t=>u`
          <div class="flex items-center gap-2 group/f">
            <input type="text" placeholder="label" class="w-28 shrink-0 text-[11px] uppercase tracking-wide text-muted bg-transparent px-1 py-0.5 rounded focus:outline-none focus:bg-surface focus:text-ink"
              .value=${t.label??""} @change=${s=>void this.patch(`/api/circle/fact/${t.id}`,{label:s.target.value.trim()||null})} />
            <input type="text" class="flex-1 min-w-0 text-sm text-ink bg-transparent px-1 py-0.5 rounded focus:outline-none focus:bg-surface"
              .value=${t.value} @change=${s=>{const i=s.target.value.trim();i?this.patch(`/api/circle/fact/${t.id}`,{value:i}):this.del(`/api/circle/fact/${t.id}`)}} />
            <button type="button" class="opacity-0 group-hover/f:opacity-100 text-muted hover:text-red-500 text-xs" @click=${()=>void this.del(`/api/circle/fact/${t.id}`)}>✕</button>
          </div>`)}
      </div>
      <div class="flex gap-1.5 mt-2">
        <input id="fact-label" type="text" placeholder="label" class="w-28 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" />
        <input id="fact-value" type="text" placeholder="add a detail…" class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink"
          @keydown=${t=>{t.key==="Enter"&&this.submitFact(e.id)}} />
        <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitFact(e.id)}>Add</button>
      </div>`}parseTags(e){if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.map(String):[]}catch{return[]}}async setTags(e,t){await this.patch(`/api/circle/person/${e}`,{tags:t})}renderTags(e){const t=this.parseTags(e.tags);return u`
      <div class="flex flex-wrap items-center gap-1.5">
        ${t.map(s=>u`<span class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${s}
          <button type="button" class="text-muted hover:text-red-500" @click=${()=>void this.setTags(e.id,t.filter(i=>i!==s))}>✕</button></span>`)}
        <input type="text" placeholder="+ tag" class="w-20 text-xs bg-transparent px-1 py-0.5 focus:outline-none focus:bg-surface rounded text-ink"
          @keydown=${s=>{if(s.key==="Enter"){const i=s.target,n=i.value.trim();n&&!t.includes(n)&&(this.setTags(e.id,[...t,n]),i.value="")}}} />
      </div>`}submitFact(e){const t=this.renderRoot.querySelector("#fact-label"),s=this.renderRoot.querySelector("#fact-value"),i=s?.value.trim();i&&(this.post(`/api/circle/person/${e}/fact`,{value:i,label:t?.value.trim()||null}),t&&(t.value=""),s&&(s.value=""))}renderActions(e){const t=e.actions.filter(n=>n.done!==1),s=e.actions.filter(n=>n.done===1),i=this.showCompletedActions?[...t,...s]:t;return u`
      <ul class="space-y-0.5">${i.map(n=>u`
        <li class="flex items-center gap-2 group/a text-sm">
          <input type="checkbox" class="accent-ink" .checked=${n.done===1} @change=${o=>void this.patch(`/api/circle/action/${n.id}`,{done:o.target.checked})} />
          ${this.editingField===`action:${n.id}`?u`<input type="text" class="flex-1 px-1 py-0 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
                .value=${n.body}
                @blur=${o=>{const r=o.target.value.trim();r&&r!==n.body&&this.patch(`/api/circle/action/${n.id}`,{body:r}),this.editingField=null}}
                @keydown=${o=>{o.key==="Enter"?o.target.blur():o.key==="Escape"&&(this.editingField=null)}}
                @click=${o=>o.stopPropagation()} />`:u`<span class="flex-1 cursor-text ${n.done?"line-through text-muted":"text-ink"}" @click=${()=>{this.editingField=`action:${n.id}`}}>${n.body}</span>`}
          <button type="button" class="opacity-0 group-hover/a:opacity-100 text-muted hover:text-red-500 text-xs" @click=${()=>void this.del(`/api/circle/action/${n.id}`)}>✕</button>
        </li>`)}</ul>
      ${this.editingField==="newaction"?u`<div class="newaction-form flex gap-1.5 mt-1.5">
            <input id="action-body" type="text" placeholder="something you owe them…" class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" autofocus
              @keydown=${n=>{n.key==="Enter"?this.submitAction(e.id):n.key==="Escape"&&(this.editingField=null)}} />
            <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitAction(e.id)}>Add</button>
          </div>`:u`<div class="flex items-center gap-4 ${t.length?"mt-1.5":""}">
            <button type="button" class="text-xs text-muted hover:text-ink" @click=${()=>{this.editingField="newaction"}}>+ add</button>
            ${s.length?u`<button type="button" class="text-xs hover:text-ink ${this.showCompletedActions?"text-ink":"text-muted"}" @click=${()=>{this.showCompletedActions=!this.showCompletedActions}}>completed (${s.length})</button>`:k}
          </div>`}`}submitAction(e){const s=this.renderRoot.querySelector("#action-body")?.value.trim();this.editingField=null,s&&this.post(`/api/circle/person/${e}/action`,{body:s})}inlineField(e,t,s){return u`
      <label class="block">
        <span class="text-[10px] uppercase tracking-wider text-muted">${e}</span>
        <input type="text" class="w-full px-2 py-1 text-sm bg-surface border border-line rounded focus:outline-none focus:border-ink"
          .value=${t??""} @change=${i=>s(i.target.value.trim())} />
      </label>`}readKeepingInTouch(e){return e.next_meet_date?u`<div class="px-4 pt-1 pb-2 text-xs text-muted">Next meet · ${this.fmtDate(e.next_meet_date,0)}</div>`:k}readFacts(e){if(!e.facts.length)return k;const t=e.facts.filter(i=>i.label),s=e.facts.filter(i=>!i.label);return this.section("Details",u`
      ${t.map(i=>u`<div class="flex gap-3 py-0.5 text-sm">
        <span class="text-[11px] uppercase tracking-wide text-muted w-28 shrink-0 pt-0.5">${i.label}</span>
        <span class="text-ink flex-1">${i.value}</span></div>`)}
      ${s.length?u`<ul class="mt-1 space-y-0.5">${s.map(i=>u`<li class="text-sm text-ink flex gap-2"><span class="text-muted">•</span>${i.value}</li>`)}</ul>`:k}`)}readTags(e){const t=this.parseTags(e.tags);return t.length?this.section("Tags",u`<div class="flex flex-wrap gap-1.5">${t.map(s=>u`<span class="text-xs px-2 py-0.5 rounded-full bg-surface border border-line text-ink">${s}</span>`)}</div>`):k}readActions(e){return e.actions.length?this.section("Action items",u`<ul class="space-y-0.5">${e.actions.map(t=>u`
      <li class="flex items-center gap-2 text-sm">
        <input type="checkbox" class="accent-ink" .checked=${t.done===1} @change=${s=>void this.patch(`/api/circle/action/${t.id}`,{done:s.target.checked})} />
        <span class="${t.done?"line-through text-muted":"text-ink"}">${t.body}</span>
      </li>`)}</ul>`):k}readContact(e){const t=[];return e.email&&t.push(["Email",e.email]),e.phone&&t.push(["Phone",e.phone]),t.length?this.section("Details",u`${t.map(([s,i])=>u`<div class="flex gap-3 py-0.5 text-sm"><span class="text-[11px] uppercase tracking-wide text-muted w-28 shrink-0 pt-0.5">${s}</span><span class="text-ink flex-1">${i}</span></div>`)}`):k}renderDetailAvatar(e){return u`
      <div class="relative shrink-0">
        <button type="button" class="relative group/av w-16 h-16 rounded-full overflow-hidden block" title="Set photo" @click=${()=>{this.photoMenuOpen=!this.photoMenuOpen}}>
          ${e.photo?u`<img src=${e.photo} alt="" class="w-16 h-16 rounded-full object-cover" />`:u`<span class="w-16 h-16 text-xl rounded-full grid place-items-center text-white font-semibold shadow-sm" style=${this.avatarStyle(e.name)}>${this.initials(e.name)}</span>`}
          <span class="absolute inset-0 rounded-full bg-black/45 text-white text-[10px] grid place-items-center opacity-0 group-hover/av:opacity-100 transition-opacity">${e.photo?"Change":"Photo"}</span>
        </button>
        <input id="photo-file" type="file" accept="image/*" class="hidden" @change=${t=>void this.onPhotoFile(e,t)} />
        ${this.photoMenuOpen?this.renderPhotoMenu(e):k}
      </div>`}renderPhotoMenu(e){return u`
      <div class="fixed inset-0 z-20" @click=${()=>{this.photoMenuOpen=!1}}></div>
      <div class="absolute top-full left-0 mt-1.5 z-30 w-64 rounded-lg border border-line bg-bg shadow-lg p-3 text-sm" @click=${t=>t.stopPropagation()}>
        <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-hover text-ink" @click=${()=>this.photoInput?.click()}>Upload from computer</button>
        <div class="my-2 text-[11px] text-muted text-center">or paste an image URL</div>
        <div class="flex gap-1.5">
          <input id="photo-url-input" type="text" placeholder="https://…" class="flex-1 min-w-0 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink"
            @keydown=${t=>{t.key==="Enter"&&this.setPhotoFromUrl(e.id)}} />
          <button type="button" class="text-xs px-2 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>void this.setPhotoFromUrl(e.id)}>Set</button>
        </div>
        <p class="text-[11px] text-muted mt-2">Tip: copy any image (⌘C) and press ⌘V right here.</p>
        ${e.photo?u`<button type="button" class="text-xs text-muted hover:text-red-500 mt-2" @click=${()=>{this.patchPerson(e.id,{photo:null}),this.photoMenuOpen=!1}}>Remove photo</button>`:k}
      </div>`}async setPhotoFromUrl(e){const s=this.renderRoot.querySelector("#photo-url-input")?.value.trim();if(s)try{const i=await fetch(`/api/circle/person/${e}/photo-url`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:s})});if(!i.ok){const n=await i.json().catch(()=>({}));alert(`Couldn't use that image URL: ${n.error??i.status}`);return}this.photoMenuOpen=!1,await this.refresh()}catch{alert("Couldn't fetch that image URL.")}}editable(e,t,s,i,n=""){return this.editingField===e?u`<input type="text" class="inline-edit ${s} bg-surface rounded px-1 -mx-1 ring-1 ring-ink focus:outline-none w-full"
        .value=${t??""} autofocus
        @blur=${o=>{i(o.target.value.trim()),this.editingField=null}}
        @keydown=${o=>{o.key==="Enter"?o.target.blur():o.key==="Escape"&&(this.editingField=null)}} />`:t?u`<span class="${s} cursor-text hover:bg-hover rounded px-1 -mx-1 inline-block" @click=${()=>{this.editingField=e}}>${t}</span>`:n?u`<span class="${s} opacity-40 italic cursor-text hover:opacity-70 rounded px-1 -mx-1" @click=${()=>{this.editingField=e}}>${n}</span>`:k}onCircleSelect(e,t){const s=t.target.value;if(this.editingField=null,s==="__new__"){this.creatingCircle=!0;return}this.patchPerson(e.id,{circle_id:Number(s)})}renderBio(e){return this.editingField==="bio"?u`<textarea rows="5" class="inline-edit w-full text-sm text-ink bg-surface rounded p-2 ring-1 ring-ink focus:outline-none leading-relaxed resize-y"
        .value=${e.bio??""} autofocus
        @blur=${t=>{this.patchPerson(e.id,{bio:t.target.value.trim()||null}),this.editingField=null}}>${e.bio??""}</textarea>`:e.bio?u`<p class="text-sm text-ink leading-relaxed whitespace-pre-wrap cursor-text hover:bg-hover rounded p-1 -m-1" @click=${()=>{this.editingField="bio"}}>${e.bio}</p>`:u`<p class="text-sm opacity-40 italic cursor-text hover:opacity-70" @click=${()=>{this.editingField="bio"}}>Add a note on who they are to you…</p>`}renderKit(e){const t=(i,n,o,r)=>{if(this.editingField===i)return u`<input type="date" class="inline-edit px-1.5 py-0.5 text-xs bg-surface border border-ink rounded focus:outline-none" .value=${o??""} autofocus
          @change=${l=>{r(l.target.value),this.editingField=null}}
          @blur=${()=>{this.editingField=null}} />`;const a=o?this.fmtDate(o,0):null;return u`<button type="button" class="hover:text-ink ${a?"text-muted":"opacity-40 italic hover:opacity-70"}" @click=${()=>{this.editingField=i}}>${n} ${a??"—"}</button>`},s=e.last_met_at?new Date(e.last_met_at*1e3).toISOString().slice(0,10):null;return u`<div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
      <span>talked ${this.relTime(e.last_talked_at)} · <button type="button" class="hover:text-ink underline-offset-2 hover:underline" @click=${()=>void this.patchPerson(e.id,{last_talked_at:Math.floor(Date.now()/1e3)})}>mark now</button></span>
      ${t("nextmeet","next meet",e.next_meet_date,i=>void this.patchPerson(e.id,{next_meet_date:i||null}))}
      ${t("lastmet","last met",s,i=>void this.patchPerson(e.id,{last_met_date:i}))}
    </div>`}tidyLabel(e){return e===e.toUpperCase()&&e!==e.toLowerCase()?e.toLowerCase():e}renderDetailsList(e){return u`
      ${e.facts.map(t=>u`
        <div class="flex gap-3 py-0.5 text-sm group/d items-start">
          ${t.label?u`<span class="text-[11px] capitalize tracking-wide text-muted w-28 shrink-0 pt-1 cursor-text hover:text-ink" @click=${()=>{this.editingField=`factlabel:${t.id}`}}>${this.editingField===`factlabel:${t.id}`?u`<input type="text" class="inline-edit w-full bg-surface ring-1 ring-ink rounded px-1 focus:outline-none text-ink normal-case" .value=${t.label} autofocus @blur=${s=>{this.patch(`/api/circle/fact/${t.id}`,{label:s.target.value.trim()||null}),this.editingField=null}} @keydown=${s=>{s.key==="Enter"&&s.target.blur()}} />`:this.tidyLabel(t.label)}</span>`:u`<span class="text-muted pt-0.5">•</span>`}
          <span class="flex-1 min-w-0">${this.editable(`fact:${t.id}`,t.value,"text-ink",s=>s?void this.patch(`/api/circle/fact/${t.id}`,{value:s}):void this.del(`/api/circle/fact/${t.id}`))}</span>
          <button type="button" class="opacity-0 group-hover/d:opacity-100 text-muted hover:text-red-500 text-xs pt-1" @click=${()=>void this.del(`/api/circle/fact/${t.id}`)}>✕</button>
        </div>`)}
      ${this.editingField==="newfact"?u`<div class="newfact-form flex gap-1.5 mt-1.5">
            <input id="nf-label" type="text" placeholder="label" class="w-28 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" />
            <input id="nf-value" type="text" placeholder="detail" class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink" autofocus
              @keydown=${t=>{t.key==="Enter"?this.submitNewFact(e.id):t.key==="Escape"&&(this.editingField=null)}} />
            <button type="button" class="text-xs px-2 py-1 border border-line rounded hover:bg-hover" @click=${()=>this.submitNewFact(e.id)}>Add</button>
          </div>`:u`<button type="button" class="text-xs text-muted hover:text-ink mt-1.5" @click=${()=>{this.editingField="newfact"}}>+ add detail</button>`}`}submitNewFact(e){const t=this.renderRoot.querySelector("#nf-label"),i=this.renderRoot.querySelector("#nf-value")?.value.trim();if(!i){this.editingField=null;return}this.post(`/api/circle/person/${e}/fact`,{value:i,label:t?.value.trim()||null}),this.editingField=null}renderDetailBody(e){return u`
      <div class="px-4 py-4 flex flex-col sm:flex-row gap-4">
        <div class="flex items-start gap-3 sm:w-[46%] sm:shrink-0">
          ${this.renderDetailAvatar(e)}
          <div class="min-w-0 flex-1">
            <div class="text-lg font-semibold text-ink">${this.editable("name",e.name,"text-lg font-semibold text-ink",t=>t&&void this.patchPerson(e.id,{name:t}))}</div>
            <div class="text-sm text-muted">${this.editable("location",e.location,"text-sm text-muted",t=>void this.patchPerson(e.id,{location:t||null}),"+ add address")}</div>
            <div class="text-sm text-muted">${this.editable("title",e.title,"text-sm text-muted",t=>void this.patchPerson(e.id,{title:t||null}),"+ what they do")}</div>
            ${e.company||this.editingField==="company"?u`<div class="text-sm text-muted">${this.editable("company",e.company,"text-sm text-muted",t=>void this.patchPerson(e.id,{company:t||null}))}</div>`:k}
            <div class="mt-2">
              ${this.editingField==="circle"?u`<select class="inline-edit px-2 py-1 text-xs bg-surface border border-ink rounded focus:outline-none" autofocus @change=${t=>this.onCircleSelect(e,t)} @blur=${()=>{this.editingField=null}}>
                    ${this.circles.map(t=>u`<option value=${t.id} ?selected=${e.circle_id===t.id}>${t.name}</option>`)}
                    <option value="__new__">+ New circle…</option>
                  </select>`:this.creatingCircle?u`<input type="text" placeholder="new circle" class="w-28 px-2 py-1 text-xs bg-surface border border-ink rounded-full focus:outline-none" autofocus
                      @keydown=${t=>{t.key==="Enter"&&this.createAndAssign(e.id,t.target.value),t.key==="Escape"&&(this.creatingCircle=!1)}}
                      @blur=${()=>{this.creatingCircle=!1}} />`:u`<button type="button" class="text-xs px-2.5 py-0.5 rounded-full bg-surface border border-line text-ink hover:bg-hover" @click=${()=>{this.editingField="circle"}}>${e.circle_name??"New"}</button>`}
            </div>
          </div>
        </div>
        <div class="sm:flex-1 min-w-0">
          <span class="block text-[11px] font-medium tracking-wide text-muted mb-1">About</span>
          ${this.renderBio(e)}
        </div>
      </div>

      <div class="px-4 pb-1">${this.renderKit(e)}</div>

      ${this.section("Notes",u`
        ${this.editingNote==="new"?this.renderNewNoteCard():k}
        ${e.notes.length===0&&this.editingNote!=="new"?u`<p class="text-xs text-muted italic">No notes yet.</p>`:k}
        ${e.notes.map(t=>this.renderNoteCard(e,t))}
      `,u`<button type="button" class="text-xs text-ink hover:underline" @click=${()=>{this.editingNote="new"}}>+ New note</button>`)}

      ${this.section("Details",this.renderDetailsList(e))}

      ${this.section("Action items",this.renderActions(e))}

      <div class="px-4 py-3">
        <button type="button" class="text-xs text-muted/60 hover:text-red-500" @click=${()=>void this.removePerson(e)}>Remove contact</button>
      </div>`}renderSettingsPanel(){return this.settingsOpen?u`
      <div class="fixed inset-0 z-30" @click=${()=>{this.settingsOpen=!1}}></div>
      <div class="absolute right-3 top-12 z-40 w-56 rounded-lg border border-line bg-bg shadow-lg p-2 text-sm" @click=${e=>e.stopPropagation()}>
        <div class="px-2 py-1 text-[11px] font-medium tracking-wide text-muted">Circles settings</div>
        <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-hover text-muted cursor-default">Import contacts · soon</button>
        <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-hover text-muted cursor-default">Manage circles · soon</button>
      </div>`:k}renderDetail(){const e=this.detail;return e?u`
      <header class="relative px-3 py-2.5 border-b border-line shrink-0 flex items-center justify-between gap-2">
        <button type="button" class="text-base text-ink hover:bg-hover flex items-center gap-1 px-2 py-1 -ml-1 rounded" @click=${()=>this.back()}>‹ All</button>
        <button type="button" class="text-muted hover:text-ink p-1.5 rounded hover:bg-hover" title="Settings" @click=${()=>{this.settingsOpen=!this.settingsOpen}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
        ${this.renderSettingsPanel()}
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto">
        ${this.renderDetailBody(e)}
      </div>`:u`<div class="flex-1 grid place-items-center text-muted text-sm">Loading…</div>`}async openReview(){try{const e=await fetch("/api/circle/pending");e.ok&&(this.pending=(await e.json()).pending)}catch{}this.view="review"}async confirmPending(e,t){await fetch(`/api/circle/pending/${e}/confirm`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({person_id:t})}),this.pending=this.pending.filter(s=>s.id!==e),await this.refresh(),this.pending.length===0&&(this.view="list")}async rejectPending(e){await this.del(`/api/circle/pending/${e}`),this.pending=this.pending.filter(t=>t.id!==e),this.pending.length===0&&(this.view="list")}renderReview(){return u`
      <header class="px-3 py-2.5 border-b border-line shrink-0 flex items-center gap-2">
        <button type="button" class="text-sm text-muted hover:text-ink flex items-center gap-1 px-1.5 py-1 rounded hover:bg-hover" @click=${()=>{this.view="list"}}>‹ All</button>
        <span class="text-sm text-ink font-medium">Confirm what I picked up</span>
      </header>
      <div class="flex-1 min-h-0 overflow-y-auto px-4 py-3">
        ${this.pending.length===0?u`<p class="text-sm text-muted">Nothing to confirm.</p>`:k}
        <ul class="space-y-3">${this.pending.map(e=>u`
          <li class="border border-line rounded-lg p-3">
            <p class="text-sm text-ink mb-2">${e.suggestion}</p>
            ${e.person_id==null?u`
              <div class="flex items-center gap-1.5 mb-2">
                <span class="text-[10px] tracking-wide text-muted">Who?</span>
                <select id=${`pend-${e.id}`} class="flex-1 px-2 py-1 text-xs bg-surface border border-line rounded focus:outline-none focus:border-ink">
                  <option value="">pick a person…</option>
                  ${this.people.map(t=>u`<option value=${t.id}>${t.name}</option>`)}
                </select>
              </div>`:k}
            <div class="flex justify-end gap-2">
              <button type="button" class="text-xs px-2.5 py-1 text-muted hover:text-red-500" @click=${()=>void this.rejectPending(e.id)}>No</button>
              <button type="button" class="text-xs px-3 py-1 rounded bg-ink text-bg hover:opacity-90" @click=${()=>{const t=this.renderRoot.querySelector(`#pend-${e.id}`),s=e.person_id??(t?.value?Number(t.value):null);if(e.person_id==null&&s==null){alert("Pick a person first.");return}this.confirmPending(e.id,s)}}>Yes</button>
            </div>
          </li>`)}</ul>
      </div>`}render(){return u`<div class="flex flex-col h-full">
      ${this.view==="detail"?this.renderDetail():this.view==="review"?this.renderReview():this.renderList()}
    </div>`}};nt([x()],tt.prototype,"view",2);nt([x()],tt.prototype,"circles",2);nt([x()],tt.prototype,"people",2);nt([x()],tt.prototype,"pendingCount",2);nt([x()],tt.prototype,"loading",2);nt([x()],tt.prototype,"filter",2);nt([x()],tt.prototype,"selectedId",2);nt([x()],tt.prototype,"detail",2);nt([x()],tt.prototype,"adding",2);nt([x()],tt.prototype,"pending",2);nt([x()],tt.prototype,"draftName",2);nt([x()],tt.prototype,"draftCircle",2);nt([x()],tt.prototype,"editingNote",2);nt([x()],tt.prototype,"creatingCircle",2);nt([x()],tt.prototype,"editingField",2);nt([x()],tt.prototype,"settingsOpen",2);nt([x()],tt.prototype,"showCompletedActions",2);nt([x()],tt.prototype,"expandedNotes",2);nt([x()],tt.prototype,"photoMenuOpen",2);nt([Et("#photo-file")],tt.prototype,"photoInput",2);tt=nt([O("circle-section")],tt);var $b=Object.defineProperty,_b=Object.getOwnPropertyDescriptor,Bl=(e,t,s,i)=>{for(var n=i>1?void 0:i?_b(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&$b(t,s,n),n};const Sb=6e4;let Xn=class extends H{constructor(){super(...arguments),this.store=new Da(this,w,e=>({items:e.notifications,unread:e.notificationsUnread})),this.open=!1,this.onDocClick=e=>{this.open&&(e.composedPath().includes(this)||(this.open=!1))},this.onVisibility=()=>{document.visibilityState==="visible"&&w.getState().loadNotifications()}}connectedCallback(){super.connectedCallback(),w.getState().loadNotifications(),this.pollTimer=setInterval(()=>void w.getState().loadNotifications(),Sb),document.addEventListener("click",this.onDocClick),document.addEventListener("visibilitychange",this.onVisibility)}disconnectedCallback(){super.disconnectedCallback(),this.pollTimer&&clearInterval(this.pollTimer),document.removeEventListener("click",this.onDocClick),document.removeEventListener("visibilitychange",this.onVisibility)}toggle(){this.open=!this.open,this.open&&w.getState().loadNotifications()}parseAction(e){if(!e)return{type:"none"};try{return JSON.parse(e)}catch{return{type:"none"}}}async onItemClick(e){const t=this.parseAction(e.action);e.read_at==null&&w.getState().markNotificationRead(e.id),this.open=!1,t.type==="url"?window.open(t.href,"_blank","noopener"):t.type==="persona"&&this.dispatchEvent(new CustomEvent("notif-navigate",{detail:{persona:t.persona},bubbles:!0,composed:!0}))}onDismiss(e,t){e.stopPropagation(),w.getState().dismissNotification(t)}relTime(e){const t=Math.floor(Date.now()/1e3)-e;return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}render(){const e=this.store.state.notifications,t=this.store.state.notificationsUnread,s=u`<svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>`;return u`
      <div class="relative">
        <button
          type="button"
          class="relative p-2 rounded hover:bg-hover text-muted"
          aria-label="Notifications"
          title="Notifications"
          @click=${this.toggle}
        >
          ${s}
          ${t>0?u`<span
                class="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full bg-red-500 text-white text-[10px] font-semibold grid place-items-center leading-none"
                >${t>9?"9+":t}</span
              >`:k}
        </button>
        ${this.open?this.renderPanel(e,t):k}
      </div>
    `}renderPanel(e,t){return u`
      <div
        class="absolute right-0 mt-1 w-[min(20rem,calc(100vw-1.5rem))] max-h-[70vh] overflow-y-auto bg-surface border border-line rounded-xl shadow-lg z-50"
        role="menu"
      >
        <div class="flex items-center justify-between px-3 py-2 border-b border-line">
          <span class="text-xs font-semibold text-ink">Notifications</span>
          ${t>0?u`<button
                type="button"
                class="text-[11px] text-muted hover:text-ink"
                @click=${()=>void w.getState().markAllNotificationsRead()}
              >
                Mark all read
              </button>`:k}
        </div>
        ${e.length===0?u`<div class="px-3 py-6 text-center text-xs text-muted">You're all caught up.</div>`:e.map(s=>this.renderItem(s))}
      </div>
    `}renderItem(e){const t=e.read_at==null;return u`
      <div
        class="group flex items-start gap-2 px-3 py-2.5 border-b border-line last:border-0 hover:bg-hover cursor-pointer"
        role="menuitem"
        @click=${()=>void this.onItemClick(e)}
      >
        <span
          class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${t?"bg-blue-500":"bg-transparent"}"
        ></span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-semibold text-ink truncate">${e.title}</span>
            <span class="text-[10px] text-muted shrink-0">${this.relTime(e.created_at)}</span>
          </div>
          ${e.body?u`<p class="text-[11px] text-muted mt-0.5 leading-snug">${e.body}</p>`:k}
        </div>
        <button
          type="button"
          class="opacity-0 group-hover:opacity-100 text-muted hover:text-ink shrink-0 -mr-1"
          aria-label="Dismiss"
          title="Dismiss"
          @click=${s=>this.onDismiss(s,e.id)}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    `}};Bl([x()],Xn.prototype,"open",2);Xn=Bl([O("notification-bell")],Xn);var Cb=Object.defineProperty,Pb=Object.getOwnPropertyDescriptor,Nt=(e,t,s,i)=>{for(var n=i>1?void 0:i?Pb(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Cb(t,s,n),n};const Sa="slmai.cockpit.ideasCollapsed",Dn="slmai.cockpit.ideasSection.title",Mn="Ideas",Rs='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',En='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',Tb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';let Mt=class extends H{constructor(){super(...arguments),this.collapsed=!1,this.showHidden=!1,this.editingTitle=!1,this.titleValue=Mn,this.ideas=[],this.adding=!1,this.newText="",this.editingId=null,this.editText="",this.dragOverId=null,this.dragOverPos=null,this.draggingId=null}connectedCallback(){super.connectedCallback(),this.collapsed=localStorage.getItem(Sa)==="1",this.titleValue=localStorage.getItem(Dn)??Mn,fetch("/api/settings").then(e=>e.json()).then(e=>{const t=e["ui.section.ideas.title"];t&&(this.titleValue=t,localStorage.setItem(Dn,t))}).catch(()=>{}),this.load()}async load(){try{const t=await(await fetch("/api/ideas")).json();this.ideas=t.ideas}catch{}}startEditTitle(e){e.stopPropagation(),this.editingTitle=!0}commitTitleEdit(e){const t=e.trim()||Mn;this.editingTitle=!1,this.titleValue=t,localStorage.setItem(Dn,t),fetch("/api/settings",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({"ui.section.ideas.title":t})})}onTitleKey(e){e.key==="Enter"?(e.preventDefault(),this.commitTitleEdit(e.target.value)):e.key==="Escape"&&(e.preventDefault(),this.editingTitle=!1)}toggleCollapsed(){this.collapsed=!this.collapsed,localStorage.setItem(Sa,this.collapsed?"1":"0")}async toggleHidden(e,t){this.ideas=this.ideas.map(s=>s.id===e?{...s,hidden:t}:s);try{await fetch(`/api/ideas/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({hidden:t})})}catch{this.ideas=this.ideas.map(s=>s.id===e?{...s,hidden:!t}:s)}}async deleteIdea(e){const t=this.ideas;this.ideas=this.ideas.filter(s=>s.id!==e);try{await fetch(`/api/ideas/${e}`,{method:"DELETE"})}catch{this.ideas=t}}beginAdd(e){e.stopPropagation(),this.cancelEdit(),this.adding=!0,this.newText=""}async commitAdd(e=!1){if(!this.adding)return;const t=this.newText.trim();if(this.newText="",!t){this.adding=!1;return}e||(this.adding=!1);try{const i=await(await fetch("/api/ideas",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})})).json();this.ideas=[...this.ideas,{id:i.id,text:t,hidden:!1}]}catch{}}onAddKey(e){e.key==="Enter"?(e.preventDefault(),this.commitAdd(!0)):e.key==="Escape"&&(e.preventDefault(),this.adding=!1,this.newText="")}startEdit(e){this.adding=!1,this.editingId=e.id,this.editText=e.text}cancelEdit(){this.editingId=null,this.editText=""}async commitEdit(){const e=this.editingId;if(e===null)return;const t=this.editText.trim();if(this.cancelEdit(),!t)return;const s=this.ideas;this.ideas=this.ideas.map(i=>i.id===e?{...i,text:t}:i);try{await fetch(`/api/ideas/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})})}catch{this.ideas=s}}onEditKey(e){e.key==="Enter"?(e.preventDefault(),this.commitEdit()):e.key==="Escape"&&(e.preventDefault(),this.cancelEdit())}onDragStart(e,t){this.draggingId=t,e.dataTransfer&&(e.dataTransfer.setData("text/x-idea-id",String(t)),e.dataTransfer.effectAllowed="move")}onDragEnd(){this.draggingId=null,this.dragOverId=null,this.dragOverPos=null}onDragOver(e,t){if(!e.dataTransfer?.types.includes("text/x-idea-id"))return;e.preventDefault(),e.dataTransfer.dropEffect="move";const s=e.currentTarget.getBoundingClientRect();this.dragOverId=t,this.dragOverPos=e.clientY<s.top+s.height/2?"before":"after"}onDragLeave(){this.dragOverId=null,this.dragOverPos=null}async onDrop(e,t){const s=e.dataTransfer?.getData("text/x-idea-id"),i=s?Number(s):NaN,n=this.dragOverPos;if(this.dragOverId=null,this.dragOverPos=null,this.draggingId=null,!Number.isFinite(i)||i===t)return;e.preventDefault();const r=(this.showHidden?this.ideas:this.ideas.filter(f=>!f.hidden)).findIndex(f=>f.id===t);if(r<0)return;const a=n==="after"?r+1:r,l=this.ideas.slice(),c=l.findIndex(f=>f.id===i),d=l.findIndex(f=>f.id===t);if(c<0||d<0)return;const[h]=l.splice(c,1);if(!h)return;const p=n==="after"?d+(c<d?0:1):d-(c<d?1:0);l.splice(Math.max(0,p),0,h),this.ideas=l;try{await fetch(`/api/ideas/${i}/reorder`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index:a})})}catch{this.load()}}render(){const e=this.ideas.filter(s=>s.hidden),t=this.showHidden?this.ideas:this.ideas.filter(s=>!s.hidden);return u`
      <section class="group/section-header flex flex-col gap-1 pb-16">
        <header
          class="flex items-center gap-2 cursor-pointer select-none pt-4 pb-3"
          @click=${this.toggleCollapsed}
        >
          <span
            class="text-muted opacity-60"
            style="width:12px;height:12px;display:inline-flex;"
            >${ot(this.collapsed?Zi:Ji)}</span
          >
          ${this.editingTitle?u`<input
                class="text-lg italic font-normal text-ink leading-none bg-transparent border-b border-line outline-none"
                style="font-family:var(--font-display);letter-spacing:-0.01em;min-width:4ch;"
                .value=${this.titleValue}
                autofocus
                @click=${s=>s.stopPropagation()}
                @keydown=${this.onTitleKey}
                @blur=${s=>this.commitTitleEdit(s.target.value)}
              />`:u`<h2
                class="text-lg italic font-normal text-ink leading-none cursor-pointer"
                style="font-family:var(--font-display);letter-spacing:-0.01em;"
                title="Double-click to rename"
                @dblclick=${this.startEditTitle}
              >${this.titleValue}</h2>`}
          <span class="flex-1"></span>
          ${this.collapsed?k:u`
                ${e.length>0?u`
                      <button
                        type="button"
                        class="text-muted hover:text-ink"
                        style="width:16px;height:16px;display:inline-flex;opacity:${this.showHidden?"0.9":"0.5"};"
                        title=${this.showHidden?`Hide ${e.length} hidden idea${e.length===1?"":"s"}`:`Show ${e.length} hidden idea${e.length===1?"":"s"}`}
                        @click=${s=>{s.stopPropagation(),this.showHidden=!this.showHidden}}
                      >
                        ${ot(this.showHidden?Rs:En)}
                      </button>
                    `:k}
              `}
        </header>

        ${this.collapsed?k:u`
              <ul class="flex flex-col">
                ${t.map(s=>this.editingId===s.id?u`
                        <li class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 border-t-2 border-b-2 border-transparent">
                          <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                          <button
                            type="button"
                            class="shrink-0 inline-flex items-center justify-center text-muted"
                            style="width:16px;height:16px;"
                            title=${s.hidden?"Show idea":"Hide idea"}
                            @click=${i=>{i.stopPropagation(),this.toggleHidden(s.id,!s.hidden)}}
                          >${ot(s.hidden?En:Rs)}</button>
                          <input
                            class="flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none border-b border-line"
                            type="text"
                            autofocus
                            .value=${this.editText}
                            @input=${i=>this.editText=i.target.value}
                            @keydown=${this.onEditKey}
                            @blur=${()=>void this.commitEdit()}
                          />
                        </li>
                      `:u`
                        <li
                          class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 rounded hover:bg-hover group/idea
                            ${this.dragOverId===s.id&&this.dragOverPos==="before"?"border-t-2 border-t-accent":this.dragOverId===s.id&&this.dragOverPos==="after"?"border-b-2 border-b-accent":"border-t-2 border-b-2 border-transparent"}"
                          draggable=${this.draggingId===s.id?"true":"false"}
                          @dragstart=${i=>this.onDragStart(i,s.id)}
                          @dragend=${()=>this.onDragEnd()}
                          @dragover=${i=>this.onDragOver(i,s.id)}
                          @dragleave=${()=>this.onDragLeave()}
                          @drop=${i=>this.onDrop(i,s.id)}
                        >
                          <span
                            class="idea-handle shrink-0 cursor-grab text-muted opacity-0 group-hover/idea:opacity-60 hover:!opacity-100 select-none leading-none"
                            title="Drag to reorder"
                            style="font-size:14px;letter-spacing:-1px;"
                            @mousedown=${()=>{this.draggingId=s.id}}
                            @mouseup=${()=>{this.draggingId===s.id&&(this.draggingId=null)}}
                          >⠿</span>
                          <button
                            type="button"
                            class="shrink-0 inline-flex items-center justify-center transition-opacity ${s.hidden?"text-muted opacity-40":"text-muted opacity-60 hover:opacity-100"}"
                            style="width:16px;height:16px;"
                            title=${s.hidden?"Show idea":"Hide idea"}
                            @click=${i=>{i.stopPropagation(),this.toggleHidden(s.id,!s.hidden)}}
                          >${ot(s.hidden?En:Rs)}</button>
                          <span
                            class="flex-1 text-sm cursor-text ${s.hidden?"text-muted line-through":"text-ink"}"
                            @click=${()=>this.startEdit(s)}
                          >${s.text}</span>
                          <button
                            type="button"
                            class="shrink-0 text-muted opacity-0 group-hover/idea:opacity-100 hover:text-red-400 transition-opacity"
                            style="width:14px;height:14px;display:inline-flex;"
                            title="Delete idea"
                            @click=${i=>{i.stopPropagation(),this.deleteIdea(s.id)}}
                          >
                            ${ot(Tb)}
                          </button>
                        </li>
                      `)}
              </ul>
              ${this.adding?u`
                    <div class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2">
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex opacity-20" style="width:16px;height:16px;">${ot(Rs)}</span>
                      <input
                        class="flex-1 bg-transparent border-0 text-sm text-ink focus:outline-none"
                        type="text"
                        placeholder="New idea..."
                        autofocus
                        .value=${this.newText}
                        @input=${s=>this.newText=s.target.value}
                        @keydown=${this.onAddKey}
                        @blur=${()=>void this.commitAdd()}
                      />
                    </div>
                  `:u`
                    <div
                      class="flex items-center gap-2 py-1 pl-4 pr-1 -mx-2 rounded hover:bg-hover cursor-text"
                      @click=${()=>{this.cancelEdit(),this.adding=!0,this.newText=""}}
                    >
                      <span class="shrink-0 select-none opacity-0" style="font-size:14px;letter-spacing:-1px;">⠿</span>
                      <span class="shrink-0 inline-flex opacity-20" style="width:16px;height:16px;">${ot(Rs)}</span>
                      <span class="text-sm text-muted opacity-50">New idea...</span>
                    </div>
                  `}
            `}
      </section>
    `}};Nt([x()],Mt.prototype,"collapsed",2);Nt([x()],Mt.prototype,"showHidden",2);Nt([x()],Mt.prototype,"editingTitle",2);Nt([x()],Mt.prototype,"titleValue",2);Nt([x()],Mt.prototype,"ideas",2);Nt([x()],Mt.prototype,"adding",2);Nt([x()],Mt.prototype,"newText",2);Nt([x()],Mt.prototype,"editingId",2);Nt([x()],Mt.prototype,"editText",2);Nt([x()],Mt.prototype,"dragOverId",2);Nt([x()],Mt.prototype,"dragOverPos",2);Mt=Nt([O("ideas-section")],Mt);var Db=Object.defineProperty,Mb=Object.getOwnPropertyDescriptor,ws=(e,t,s,i)=>{for(var n=i>1?void 0:i?Mb(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Db(t,s,n),n};const Eb=[{key:"goals",label:"Goals"},{key:"grocery",label:"Grocery"},{key:"finance",label:"Finance"},{key:"circle",label:"Circles"},{key:"office",label:"Office",ownerOnly:!0},{key:"canvas",label:"Mana",ownerOnly:!0}];let It=class extends H{constructor(){super(...arguments),this.settingsOpen=!1,this.theme="light",this.mobileTab="chat",this.me=null,this.splitPct=It.DEFAULT_SPLIT,this.dragStartX=0,this.dragStartPct=It.DEFAULT_SPLIT,this.splitByMode={},this.rowNav=new Ca(this,{selector:"[data-row-key]",getKey:()=>w.getState().focusedRowKey,setKey:e=>w.getState().setFocusedRowKey(e),onToggle:e=>{const[t,s]=e.split(":"),i=Number(s);if(!Number.isFinite(i))return;const n=w.getState();if(t==="kr"){const o=n.goals.flatMap(r=>r.keyResults??[]).find(r=>r.id===i);o&&n.updateKeyResult(i,{done:!o.done})}else if(t==="commit"){const o=n.commitments.find(r=>r.id===i);o&&n.updateCommitment(i,{done:!o.done})}}}),this.onVisible=()=>{if(document.visibilityState==="hidden")return;const e=w.getState();e.loadThreads(),e.currentThreadId!=null&&e.loadMessages(e.currentThreadId),e.loadGoals(),e.loadCommitments()},this.opsScroll={},this.opsEl=null,this.onOpsScroll=()=>{this.opsEl&&this.renderedOpsMode&&(this.opsScroll[this.renderedOpsMode]=this.opsEl.scrollTop)},this.onSettingsClose=()=>{this.settingsOpen=!1},this.onDividerDown=e=>{e.preventDefault(),this.dragStartX=e.clientX,this.dragStartPct=this.splitPct,window.addEventListener("mousemove",this.onDividerMove),window.addEventListener("mouseup",this.onDividerUp),document.body.style.cursor="col-resize",document.body.style.userSelect="none"},this.onDividerMove=e=>{const t=this.querySelector("main");if(!t)return;const s=t.getBoundingClientRect().width;if(s<=0)return;const i=(e.clientX-this.dragStartX)/s*100,n=Math.max(25,Math.min(75,this.dragStartPct+i));this.splitPct=n},this.onDividerUp=()=>{window.removeEventListener("mousemove",this.onDividerMove),window.removeEventListener("mouseup",this.onDividerUp),document.body.style.cursor="",document.body.style.userSelect="",this.saveSplit()},this.resetSplit=()=>{this.splitPct=It.DEFAULT_SPLIT,this.saveSplit()}}connectedCallback(){super.connectedCallback();const e=w.getState();e.loadSettings().then(()=>this.applyTheme()),e.loadThreads(),fetch("/api/me").then(t=>t.ok?t.json():null).then(t=>{t&&(this.me=t)}).catch(()=>{}),this.unsubSettings=Z(this,w,t=>t.settings),this.unsubRightPaneMode=Z(this,w,t=>t.rightPaneMode),window.addEventListener("settings-close",this.onSettingsClose),this.loadSplits(),this.splitPct=this.splitFor(w.getState().rightPaneMode),document.addEventListener("visibilitychange",this.onVisible),window.addEventListener("focus",this.onVisible)}disconnectedCallback(){super.disconnectedCallback(),this.unsubSettings?.(),this.unsubRightPaneMode?.(),window.removeEventListener("settings-close",this.onSettingsClose),document.removeEventListener("visibilitychange",this.onVisible),window.removeEventListener("focus",this.onVisible),this.opsEl?.removeEventListener("scroll",this.onOpsScroll)}updated(){this.applyTheme(),this.restoreOpsScroll()}clampSplit(e){return Math.max(25,Math.min(75,e))}splitFor(e){return this.splitByMode[e]??this.legacySplit??It.DEFAULT_SPLIT}loadSplits(){try{const e=localStorage.getItem("cockpit.split_pct_by_mode");if(e){const s=JSON.parse(e);for(const[i,n]of Object.entries(s))typeof n=="number"&&Number.isFinite(n)&&(this.splitByMode[i]=this.clampSplit(n));return}const t=Number(localStorage.getItem("cockpit.split_pct"));Number.isFinite(t)&&t>0&&(this.legacySplit=this.clampSplit(t))}catch{}}saveSplit(){const e=w.getState().rightPaneMode;this.splitByMode[e]=this.splitPct;try{localStorage.setItem("cockpit.split_pct_by_mode",JSON.stringify(this.splitByMode))}catch{}}ensureOpsListener(){const e=this.querySelector("#ops-scroll");return e===this.opsEl?!1:(this.opsEl?.removeEventListener("scroll",this.onOpsScroll),this.opsEl=e,this.opsEl?.addEventListener("scroll",this.onOpsScroll,{passive:!0}),!0)}restoreOpsScroll(){const e=this.ensureOpsListener(),t=w.getState().rightPaneMode;if(t===this.renderedOpsMode&&!e)return;const s=t!==this.renderedOpsMode;if(this.renderedOpsMode=t,s){const o=this.splitFor(t);o!==this.splitPct&&(this.splitPct=o)}const i=this.opsEl;if(!i)return;const n=this.opsScroll[t]??0;i.scrollTop=n,requestAnimationFrame(()=>{this.opsEl===i&&(i.scrollTop=n)})}applyTheme(){const e=(()=>{try{return localStorage.getItem("cockpit.theme")}catch{return null}})(),s=(w.getState().settings["cockpit.theme"]??e??"light")==="dark"?"dark":"light";s!==this.theme&&(this.theme=s),document.documentElement.dataset.theme=s;try{localStorage.setItem("cockpit.theme",s)}catch{}}openSettings(){this.settingsOpen=!0}onVoiceClick(){document.dispatchEvent(new CustomEvent("voice-toggle",{bubbles:!0,composed:!0}))}onChatDragOver(e){!e.dataTransfer||!Array.from(e.dataTransfer.items).some(s=>s.kind==="file")||(e.preventDefault(),e.dataTransfer.dropEffect="copy")}onChatDrop(e){const t=Array.from(e.dataTransfer?.files??[]).filter(s=>s.type.startsWith("image/")||s.type==="application/pdf");t.length&&(e.preventDefault(),document.dispatchEvent(new CustomEvent("chat-attach",{detail:{files:t},bubbles:!0,composed:!0})))}toggleTheme(){const e=this.theme==="dark"?"light":"dark";try{localStorage.setItem("cockpit.theme",e)}catch{}w.getState().setSetting("cockpit.theme",e),document.documentElement.dataset.theme=e,this.theme=e}renderRightPaneContent(e){switch(e){case"goals":return u`
          <goals-section></goals-section>
          <week-section></week-section>
          <ideas-section></ideas-section>
        `;case"canvas":return u`<companion-canvas class="flex flex-col flex-1 min-h-0"></companion-canvas>`;case"grocery":return u`<grocery-section class="flex flex-col flex-1 min-h-0"></grocery-section>`;case"office":return u`<office-section class="flex flex-col flex-1 min-h-0"></office-section>`;case"finance":return u`<finance-section class="flex flex-col flex-1 min-h-0"></finance-section>`;case"circle":return u`<circle-section class="flex flex-col flex-1 min-h-0"></circle-section>`}}setRightPaneMode(e){w.getState().setRightPaneMode(e)}onNotifNavigate(e){const t=e.detail?.persona,i=t?{"goals-advisor":"goals","grocery-keeper":"grocery","office-keeper":"office","finance-keeper":"finance","circle-keeper":"circle",mana:"canvas"}[t]:void 0;i&&(!(i==="canvas"||i==="office")||this.me?.role==="owner")&&this.setRightPaneMode(i),this.mobileTab="chat"}render(){if(this.settingsOpen)return u`<settings-page></settings-page>`;const e=this.mobileTab==="chat",t=this.me?.role==="owner",s=Eb.filter(c=>!c.ownerOnly||t),i=w.getState().rightPaneMode,n=s.some(c=>c.key===i)?i:"goals",o=s.length>1,r=u`<svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>`,a=u`<svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>`,l=this.theme==="dark"?r:a;return u`
      <div class="h-[100dvh] flex flex-col bg-bg text-ink font-sans">
        <header
          class="flex items-center justify-between gap-2 px-3 sm:px-4 py-2"
        >
          <!-- Mobile control: a "chat" pill + one chip per tool. Tapping a tool
               chip switches to ops AND selects that tool directly (no cycling),
               so every tool is reachable. Hidden on lg+ (desktop has its own). -->
          <div class="flex lg:hidden items-center gap-0.5 overflow-x-auto bg-hover rounded-full p-0.5 text-xs">
            <button
              type="button"
              class="px-3 py-1 rounded-full shrink-0 transition-colors ${e?"bg-surface text-ink font-semibold":"text-muted"}"
              @click=${()=>{this.mobileTab="chat"}}
            >
              chat
            </button>
            ${s.map(c=>u`<button
                type="button"
                class="px-3 py-1 rounded-full shrink-0 transition-colors ${!e&&n===c.key?"bg-surface text-ink font-semibold":"text-muted"}"
                @click=${()=>{this.setRightPaneMode(c.key),this.mobileTab="ops"}}
              >${c.label.toLowerCase()}</button>`)}
          </div>
          <!-- Desktop mode switcher: same pill shape as mobile but no chat
               button (both panes are visible side-by-side on lg+). -->
          ${o?u`
                <div class="hidden lg:flex bg-hover rounded-full p-0.5 text-xs">
                  ${s.map(c=>u`
                      <button
                        type="button"
                        class="px-3 py-1 rounded-full transition-colors ${n===c.key?"bg-surface text-ink font-semibold":"text-muted hover:text-ink"}"
                        @click=${()=>this.setRightPaneMode(c.key)}
                      >
                        ${c.label.toLowerCase()}
                      </button>
                    `)}
                </div>
              `:u`<span class="hidden lg:block"></span>`}
          <div class="flex items-center gap-2" @notif-navigate=${this.onNotifNavigate}>
          <notification-bell></notification-bell>
          <button
            type="button"
            class="p-2 rounded hover:bg-hover text-muted"
            aria-label="Settings"
            title="Settings"
            @click=${this.openSettings}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"
              />
            </svg>
          </button>
          <button
            type="button"
            class="p-2 rounded hover:bg-hover text-muted"
            aria-label="Toggle theme"
            title="Toggle theme"
            @click=${this.toggleTheme}
          >
            ${l}
          </button>
          ${this.me?(()=>{const c=w.getState().settings,d=c[`user:${this.me.login}:profile_pic_url`],h=this.me.role==="owner"?c["cockpit.profile_pic_url"]:"",f=d||h||this.me.profilePic||"",g=this.me.displayName.slice(0,1).toUpperCase();return u`<div
                  class="flex items-center gap-1.5 pl-1 ml-1 border-l border-line"
                  title=${`${this.me.displayName} (${this.me.role}) — ${this.me.login}`}
                >
                  ${f?u`<img
                        src=${f}
                        alt=""
                        class="w-6 h-6 rounded-full object-cover"
                        referrerpolicy="no-referrer"
                        @error=${m=>{const b=m.target,y=b.parentElement;if(!y)return;b.remove();const v=document.createElement("span");v.className="w-6 h-6 rounded-full bg-hover grid place-items-center text-[10px] uppercase text-muted",v.textContent=g,y.appendChild(v)}}
                      />`:u`<span
                        class="w-6 h-6 rounded-full bg-hover grid place-items-center text-[10px] uppercase text-muted"
                        >${g}</span
                      >`}
                </div>`})():k}
          </div>
        </header>

        <main
          class="flex-1 flex flex-col lg:flex-row gap-3 lg:gap-0 px-0 lg:px-6 lg:pb-6 pb-0 overflow-hidden"
        >
          <section
            class="${e?"flex":"hidden"} lg:flex max-lg:flex-1 flex-col min-h-0 bg-surface lg:border lg:border-line border-t border-t-line max-lg:rounded-none lg:rounded-2xl px-3 sm:px-4 pt-2 pb-3 sm:pb-4 overflow-hidden lg:grow lg:shrink lg:[flex-basis:var(--split)]"
            style=${`--split: ${this.splitPct}%`}
            @dragover=${this.onChatDragOver}
            @drop=${this.onChatDrop}
          >
            <thread-list class="shrink-0"></thread-list>
            <chat-pane class="flex-1 min-h-0 my-3"></chat-pane>
            <chat-composer class="shrink-0"></chat-composer>
          </section>

          <!-- Draggable divider, desktop only. Drag to resize, double-click to reset. -->
          <div
            class="hidden lg:flex shrink-0 w-3 mx-1.5 group cursor-col-resize items-stretch select-none"
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize panes"
            @mousedown=${this.onDividerDown}
            @dblclick=${this.resetSplit}
          >
            <div
              class="m-auto w-[3px] h-12 rounded-full bg-line group-hover:bg-muted transition-colors"
            ></div>
          </div>

          <section
            id="ops-scroll"
            class="${e?"hidden lg:flex":"flex"} flex-col ${n==="grocery"||n==="office"||n==="circle"||n==="canvas"?"overflow-hidden":"overflow-y-auto p-4 sm:p-5 space-y-6"} bg-surface border-t border-t-line lg:border lg:border-line max-lg:rounded-none lg:rounded-2xl max-lg:flex-1 lg:grow lg:shrink lg:[flex-basis:var(--split-ops)]"
            style=${`--split-ops: ${100-this.splitPct}%`}
          >
            ${this.renderRightPaneContent(n)}
          </section>
        </main>

        <voice-controller></voice-controller>
      </div>
    `}};It.DEFAULT_SPLIT=50;ws([x()],It.prototype,"settingsOpen",2);ws([x()],It.prototype,"theme",2);ws([x()],It.prototype,"mobileTab",2);ws([x()],It.prototype,"me",2);ws([x()],It.prototype,"splitPct",2);It=ws([O("mana-app")],It);export{It as ManaApp};
