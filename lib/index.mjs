"use client";
import{jsx as e,Fragment as t}from"react/jsx-runtime";import{useLayoutEffect as n,useEffect as o,useRef as r,forwardRef as i,useMemo as s,memo as l,useReducer as c,useImperativeHandle as a}from"react";import{flushSync as u}from"react-dom";const h=Math.min,d=Math.max,f=Math.abs,_=Date.now,w=Object.values,g=Array.isArray,m=setTimeout,p=(e,t,n)=>h(n,d(t,e)),v=e=>null!=e,b=(e,t)=>{let n;const o=()=>{v(n)&&clearTimeout(n)},r=()=>{o(),n=m((()=>{n=null,e()}),t)};return r.t=o,r},S=e=>{let t,n;return(...o)=>(t||(t=!0,n=e(...o)),n)},z=e=>getComputedStyle(e),I=e=>e?parseFloat(e):0,y=-1,x=(e,t)=>{const n=e.o[t];return n===y?e.i:n},R=(e,t)=>{if(!e.l)return 0;if(e.u>=t)return e.h[t];let n=e.u,o=e.h[n];for(;n<t;)o+=x(e,n),e.h[++n]=o;return e.u=t,o},k=(e,t,n)=>{let o=R(e,n);for(;n>=0&&n<e.l;)if(o<=t){const r=x(e,n);if(o+r>t)break;o+=r,n++}else o-=x(e,--n);return p(n,0,e.l-1)},T=(e,t,n,o)=>{const r=k(e,t,h(n,e.l-1));return[r,k(e,t+o,r)]},O=(e,t,n)=>{const o=n?"unshift":"push";for(let n=e.l;n<t;n++)e.o[o](y),e.h.push(0===n?0:y);e.l=t},C=(e,t,n)=>{const o=t-e.l,r=o<0;let i;return r?(i=(n?e.o.splice(0,-o):e.o.splice(o)).reduce(((t,n)=>t+(n===y?e.i:n)),0),e.h.splice(o)):(i=e.i*o,O(e,e.l+o,n)),e.u=n?0:p(t-1,0,e.u),e.l=t,[i,r]},M="undefined"!=typeof window,H=()=>document.documentElement,J=/*#__PURE__*/S((e=>{const t="scrollLeft",n=e[t];e[t]=1;const o=e[t]<1;return e[t]=n,o})),W=/*#__PURE__*/S((()=>!!M&&"rtl"===z(H()).direction)),B=/*#__PURE__*/S((()=>/iP(hone|od|ad)/.test(navigator.userAgent))),L=/*#__PURE__*/S((()=>"scrollBehavior"in H().style)),$=(e,t,n)=>t.reduce(((t,[o,r])=>{const i=r-x(e,o);return(!n||i>0)&&(t+=i),t}),0),P=(e,t=40,n=0,o=((e,t)=>{const n={i:t,l:0,u:0,o:[],h:[]};return O(n,e),n})(e,t),r,i)=>{let s=t*d(n-1,0),l=0,c=0,a=0,u=0,_=0,w=0,g=0,m=!1,v=null,b=!1,S=[0,n];const z=new Set,I=()=>(e=>e.l?R(e,e.l-1)+x(e,e.l-1):0)(o),k=()=>I()-s+l+c,M=e=>p(e,0,k()),H=e=>{B()&&0!==g?w+=e:(_+=e,u++)},J=e=>{const t=g;return g=e,g!==t};return{_:()=>JSON.parse(JSON.stringify(o)),g:()=>v?[h(S[0],v[0]),d(S[1],v[1])]:S=T(o,a+w,S[0],s),m:e=>o.o[e]===y,p:()=>!!v&&o.o.slice(d(0,v[0]-1),h(o.l-1,v[1]+1)+1).includes(y),v(e){const t=R(o,e)-w;return r?t+d(0,s-I()):t},S:e=>x(o,e),I:()=>o.l,R:()=>a,k,T:()=>g,O:()=>s,C:()=>l,M:()=>d(I(),s-l-c),H:()=>u,J(){const e=_;return _=0,e},W(e,t){const n=[e,t];return z.add(n),()=>{z.delete(n)}},B(e,t){let n,r,d=0;switch(e){case 1:{const e=t.filter((([e,t])=>o.o[e]!==t));if(!e.length)break;let n=0;if(0===a);else if(a>k()-1.5)n=$(o,e,!0);else{const[t]=S;n=$(o,e.filter((([e])=>e<t)))}n&&H(n);let s=!1;e.forEach((([e,t])=>{((e,t,n)=>{const o=e.o[t]===y;return e.o[t]=n,e.u=h(t,e.u),o})(o,e,t)&&(s=!0)})),i&&s&&!a&&(e=>{const t=e.o.filter((e=>e!==y)),n=t[0];e.i=t.every((e=>e===n))?n:(e=>{const t=[...e].sort(((e,t)=>e-t)),n=e.length/2|0;return t.length%2==0?(t[n-1]+t[n])/2:t[n]})(t)})(o),d=2,b=r=!0;break}case 2:{const e=t[0]+t[1]+t[2];s!==e&&(s=e,l=t[1],c=t[2],d=2);break}case 3:if(t[1]){const e=k()-a,[n,r]=C(o,t[0],!0),i=r?-h(n,e):n;H(i),B()||(a=M(a+i)),d=1}else C(o,t[0]);break;case 4:{if(t===a)break;const e=t-a,n=b;b=!1,0!==g&&n||m||J(e<0?2:1),r=f(e)>s,a=M(t),d=5;break}case 5:J(0)&&(n=!0,d=1),m=!1,v=null;break;case 6:m=!0;break;case 7:v=T(o,t,S[0],s),d=1}d&&(n&&w&&(b=!0,_+=w,w=0,u++),z.forEach((([e,t])=>{d&e&&t(r)})))}}},V=M?n:o,X=(e,t,n)=>(()=>{let o=_()-50;return(...r)=>{const i=_();o+50<i&&(o=i,(o=>{if(0!==e.T()&&!o.ctrlKey&&(t?o.deltaX:o.deltaY)){const t=e.R();t>0&&t<e.k()&&n()}})(...r))}})(),Y=(e,t,n,o)=>J(e)||o?-n:t.k()-n,j=(e,t)=>{let n,o,r=!1;const i=t?"scrollLeft":"scrollTop",s=t?"overflowX":"overflowY",l=(o,r)=>t&&W()?Y(n,e,o,r):o,c=async(r,s)=>{if(!n)return;o&&o();const c=()=>p(r(),0,e.k()),a=()=>{let t;return[new Promise(((e,n)=>{t=e,m(o=n,150)})),e.W(2,(()=>{t&&t()}))]};if(s&&L()){for(;e.B(7,c()),e.p();){const[e,t]=a();try{await e}catch(e){return}finally{t()}}n.scrollTo({[t?"left":"top"]:l(c()),behavior:"smooth"})}else for(;;){const[t,o]=a();try{n[i]=l(c()),e.B(6),await t}catch(e){return}finally{o()}}};return{L(o){n=o;let s=!1,c=!1;const a=b((()=>{s?a():(c=!1,e.B(5))}),150),u=()=>{c&&(r=!0),e.B(4,l(o[i])),a()},h=X(e,t,a),d=()=>{s=!0,c=r=!1},f=()=>{s=!1,B()&&(c=!0)};return o.addEventListener("scroll",u),o.addEventListener("wheel",h,{passive:!0}),o.addEventListener("touchstart",d,{passive:!0}),o.addEventListener("touchend",f,{passive:!0}),()=>{o.removeEventListener("scroll",u),o.removeEventListener("wheel",h),o.removeEventListener("touchstart",d),o.removeEventListener("touchend",f),a.t()}},$(e){c((()=>e))},P(t){t+=e.R(),c((()=>t))},V(t,{align:n,smooth:o}={}){if(t=p(t,0,e.I()-1),"nearest"===n){const o=e.v(t),r=e.R();if(o<r)n="start";else{if(!(o+e.S(t)>r+e.O()))return;n="end"}}c((()=>"end"===n?e.C()+e.v(t)+e.S(t)-e.O():"center"===n?e.C()+e.v(t)+(e.S(t)-e.O())/2:e.C()+e.v(t)),o)},X:e=>{if(n){if(r){r=!1;const e=n.style,t=e[s];e[s]="hidden",m((()=>{e[s]=t}))}n[i]+=l(e,!0)}}}},D=(e,t)=>{let n;const o=t?"scrollX":"scrollY",r=t?"offsetLeft":"offsetTop",i=(o,r)=>t&&W()?Y(n,e,o,r):o;return{L(s){n=s;const l=(e,n)=>{const o=n+(t&&W()?window.innerWidth-e[r]-e.offsetWidth:e[r]),i=e.offsetParent;return e!==document.body&&i?l(i,o):o},c=b((()=>{e.B(5)}),150),a=()=>{e.B(4,i(window[o])-l(s,0)),c()},u=X(e,t,c);return window.addEventListener("scroll",a),window.addEventListener("wheel",u,{passive:!0}),()=>{window.removeEventListener("scroll",a),window.removeEventListener("wheel",u),c.t()}},X:e=>{window.scrollBy(t?i(e,!0):0,t?0:e)}}},N="current",U={},A=(e,t)=>{if(g(e))for(const n of e)A(n,t);else v(e)&&"boolean"!=typeof e&&t.push(e)},E=e=>{const t=[];return A(e,t),t},F=(e,t,n)=>d(e-(1===n?1:d(1,t)),0),G=(e,t,n,o)=>h(e+(2===n?1:d(1,t)),o-1),q=e=>{const t=r();return t[N]||(t[N]=e())},K=e=>{const t=r(e);return V((()=>{t[N]=e}),[e]),t},Q={box:"border-box"},Z=(e,t)=>{let n;const o=t?"width":"height",r=new WeakMap,i=new Map,s=new Set,l=S((()=>new ResizeObserver((l=>{const c=[];for(const{target:a,contentRect:u}of l)if(a.offsetParent)if(a===n)e.B(2,[u[o],u[t?"left":"top"],I(z(n)[t?"paddingRight":"paddingBottom"])]);else{const t=r.get(a);if(v(t))if(s.has(t)){i.has(a)&&clearTimeout(i.get(a));const n=setTimeout((()=>{i.delete(a),e.B(1,[[t,u[o]]])}),5);i.set(a,n)}else c.push([t,u[o]]),s.add(t)}c.length&&e.B(1,c)}))));return{Y(e){n=e;const t=l();return t.observe(e,Q),()=>{t.disconnect()}},j(e,t){const n=l();return r.set(e,t),n.observe(e),()=>{r.delete(e),n.unobserve(e)}}}},ee=(e,t)=>{const n=t?"width":"height",o=t?"innerWidth":"innerHeight",r=new WeakMap,i=S((()=>new ResizeObserver((t=>{const o=[];for(const{target:e,contentRect:i}of t){if(!e.offsetParent)continue;const t=r.get(e);v(t)&&o.push([t,i[n]])}o.length&&e.B(1,o)}))));return{Y(){const t=()=>{e.B(2,[window[o],0,0])};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t),i().disconnect()}},j(e,t){const n=i();return r.set(e,t),n.observe(e),()=>{r.delete(e),n.unobserve(e)}}}},te=(e,t)=>{let n;const o="height",r="width",i=new WeakMap,s=new Set,l=new Set,c=new Map,a=(e,t)=>`${e}-${t}`,u=S((()=>new ResizeObserver((u=>{const h=new Set,f=new Set;for(const{target:s,contentRect:l}of u)if(s.offsetParent)if(s===n){const i=z(n);e.B(2,[l[o],l.top,I(i.paddingBottom)]),t.B(2,[l[r],l.left,I(i.paddingRight)])}else{const e=i.get(s);if(e){const[t,n]=e,i=a(t,n),s=c.get(i),u=[l[o],l[r]];let d,_;s?(s[0]!==u[0]&&(d=!0),s[1]!==u[1]&&(_=!0)):d=_=!0,d&&h.add(t),_&&f.add(n),(d||_)&&c.set(i,u)}}if(h.size){const t=[];h.forEach((e=>{let n=0;l.forEach((t=>{const o=c.get(a(e,t));o&&(n=d(n,o[0]))})),n&&t.push([e,n])})),e.B(1,t)}if(f.size){const e=[];f.forEach((t=>{let n=0;s.forEach((e=>{const o=c.get(a(e,t));o&&(n=d(n,o[1]))})),n&&e.push([t,n])})),t.B(1,e)}}))));return{Y(e){n=e;const t=u();return t.observe(e,Q),()=>{t.disconnect()}},j(e,t,n){const o=u();return i.set(e,[t,n]),s.add(t),l.add(n),o.observe(e),()=>{i.delete(e),o.unobserve(e)}}}},ne=/*#__PURE__*/i((({children:t,attrs:n,width:o,height:r,scrolling:i},l)=>e("div",{ref:l,...n,children:e("div",{style:s((()=>({position:"relative",visibility:"hidden",width:null!=o?o:"100%",height:null!=r?r:"100%",pointerEvents:i?"none":"auto"})),[o,r,i]),children:t})}))),oe=/*#__PURE__*/l((({D:t,N:n,U:o,A:i,F:l,G:c,q:a})=>{const u=r(null);return V((()=>n.j(u[N],o)),[o]),e(c,{ref:u,style:s((()=>{const e={margin:0,padding:0,position:"absolute",[a?"height":"width"]:"100%",[a?"top":"left"]:0,[a?W()?"right":"left":"top"]:i,visibility:l?"hidden":"visible"};return a&&(e.display="flex"),e}),[i,l]),children:t})})),re=()=>[],ie=()=>c(re,void 0,re)[1],se=/*#__PURE__*/i((({children:n,overscan:i=4,initialItemSize:l,initialItemCount:c,shift:h,horizontal:d,reverse:f,cache:_,components:{Root:g=ne,Item:m="div"}=U,onScroll:p,onScrollStop:b,onRangeChange:S,...z},I)=>{const y=s((()=>E(n)),[n]),x=y.length,R=K(p),k=K(b),[T,O,C,M]=q((()=>{const e=!!d,t=P(x,l,c,_,!!f,!l);return[t,Z(t,e),j(t,e),e]}));x!==T.I()&&T.B(3,[x,h]);const H=ie(),[J,W]=T.g(),B=T.T(),L=T.H(),$=T.M(),X=r(null),Y=0!==B;V((()=>{const e=X[N],t=T.W(3,(e=>{e?u(H):H()})),n=T.W(4,(()=>{R[N]&&R[N](T.R())})),o=O.Y(e),r=C.L(e);return()=>{t(),n(),o(),r()}}),[]),V((()=>{const e=T.J();e&&C.X(e)}),[L]),o((()=>{Y||k[N]&&k[N]()}),[Y]),o((()=>{S&&S(J,W)}),[J,W]),a(I,(()=>({get cache(){return T._()},get scrollOffset(){return T.R()},get scrollSize(){return T.M()},get viewportSize(){return T.O()},scrollToIndex:C.V,scrollTo:C.$,scrollBy:C.P})),[]);const D=F(J,i,B),A=G(W,i,B,x),Q=[];for(let t=D;t<=A;t++){const n=y[t],o=n.key;Q.push(e(oe,{N:O,U:t,A:T.v(t),F:T.m(t),G:m,D:n,q:M},v(o)?o:"_"+t))}return e(t,{children:e(g,{ref:X,width:M?$:void 0,height:M?void 0:$,scrolling:Y,attrs:s((()=>({...z,style:{[M?"overflowX":"overflowY"]:"auto",display:M?"inline-block":"block",contain:"strict",width:"100%",height:"100%",...z.style}})),w(z)),children:Q})})})),le=/*#__PURE__*/i((({children:t,overscan:n=4,initialItemSize:i,initialItemCount:l,horizontal:c,cache:h,components:{Root:d=ne,Item:f="div"}=U,onScrollStop:_,onRangeChange:g,...m},p)=>{const b=s((()=>E(t)),[t]),S=b.length,z=K(_),[I,y,x,R]=q((()=>{const e=!!c,t=P(S,i,l,h,!1,!i);return[t,ee(t,e),D(t,e),e]}));S!==I.I()&&I.B(3,[S]);const k=ie(),[T,O]=I.g(),C=I.T(),M=I.H(),H=I.M(),J=r(null),W=0!==C;V((()=>{const e=J[N],t=I.W(3,(e=>{e?u(k):k()})),n=y.Y(e),o=x.L(e);return()=>{t(),n(),o()}}),[]),V((()=>{const e=I.J();e&&x.X(e)}),[M]),o((()=>{W||z[N]&&z[N]()}),[W]),o((()=>{g&&g(T,O)}),[T,O]),a(p,(()=>({get cache(){return I._()}})),[]);const B=F(T,n,C),L=G(O,n,C,S),$=[];for(let t=B;t<=L;t++){const n=b[t],o=n.key;$.push(e(oe,{N:y,U:t,A:I.v(t),F:I.m(t),G:f,D:n,q:R},v(o)?o:"_"+t))}return e(d,{ref:J,width:R?H:void 0,height:R?void 0:H,scrolling:W,attrs:s((()=>({...m,style:{display:R?"inline-block":"block",width:R?"auto":"100%",height:R?"100%":"auto",...m.style}})),w(m)),children:$})})),ce=(e,t)=>`${e}-${t}`,ae=/*#__PURE__*/l((({D:t,N:n,K:o,Z:i,ee:l,te:c,ne:a,oe:u,F:h,G:d})=>{const f=r(null);return V((()=>n.j(f[N],o,i)),[i,o]),e(d,{ref:f,style:s((()=>({display:"grid",margin:0,padding:0,position:"absolute",top:l,[W()?"right":"left"]:c,visibility:h?"hidden":"visible",minHeight:a,minWidth:u})),[l,c,u,a,h]),children:t})})),ue=/*#__PURE__*/i((({children:t,row:n,col:o,cellHeight:i=40,cellWidth:l=100,overscan:c=2,initialRowCount:h,initialColCount:d,components:{Root:f=ne,Cell:_="div"}=U,...g},m)=>{const[p,v,b,S,z]=q((()=>{const e=P(n,i,h),t=P(o,l,d);return[e,t,te(e,t),j(e,!1),j(t,!0)]}));n!==p.I()&&p.B(3,[n]),o!==v.I()&&v.B(3,[o]);const I=ie(),[y,x]=p.g(),[R,k]=v.g(),T=p.T(),O=v.T(),C=p.H(),M=v.H(),H=p.M(),J=v.M(),W=r(null),B=0!==T,L=0!==O;V((()=>{const e=W[N],t=e=>{e?u(I):I()},n=p.W(3,t),o=v.W(3,t),r=b.Y(e),i=S.L(e),s=z.L(e);return()=>{n(),o(),r(),i(),s()}}),[]),V((()=>{const e=p.J();e&&S.X(e)}),[C]),V((()=>{const e=v.J();e&&z.X(e)}),[M]),a(m,(()=>({get scrollOffset(){return[v.R(),p.R()]},get scrollSize(){return[v.M(),p.M()]},get viewportSize(){return[v.O(),p.O()]},scrollToIndex(e,t){z.V(e),S.V(t)},scrollTo(e,t){z.$(e),S.$(t)},scrollBy(e,t){z.P(e),S.P(t)}})),[]);const $=s((()=>{const e=new Map;return(n,o)=>{let r=e.get(ce(n,o));return r||e.set(ce(n,o),r=t({rowIndex:n,colIndex:o})),r}}),[t]),X=F(y,c,T),Y=G(x,c,T,n),D=F(R,c,O),A=G(k,c,O,o),E=[];for(let t=X;t<=Y;t++)for(let n=D;n<=A;n++)E.push(e(ae,{N:b,K:t,Z:n,ee:p.v(t),te:v.v(n),ne:p.S(t),oe:v.S(n),F:p.m(t)||v.m(n),G:_,D:$(t,n)},ce(t,n)));return e(f,{ref:W,width:J,height:H,scrolling:B||L,attrs:s((()=>({...g,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...g.style}})),w(g)),children:E})}));export{se as VList,le as WVList,ue as experimental_VGrid};
//# sourceMappingURL=index.mjs.map
