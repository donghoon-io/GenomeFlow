import{S as Pt,i as Zt,s as Rt,e as o,t as T,c as n,a as s,h as x,d as a,b as t,g as qe,G as e,j as de,k as i,m as u,N as at,O as Ut,P as wt,w as Pe,M as Mt,Q as kt,x as Ze,y as Re,W as Ct,q as Ue,o as Me,X as Lt,B as Ce,Y as qt,v as jt}from"../../../../chunks/vendor-63c306b5.js";/* empty css                                    */import{g as Gt,p as Ot}from"../../../../chunks/dateformat-fb1ebee0.js";function It(m,h,l){const d=m.slice();return d[7]=h[l],d}function Ht(m,h,l){const d=m.slice();return d[10]=h[l],d}function Vt(m){let h,l=m[10].file_name+"",d;return{c(){h=o("h3"),d=T(l),this.h()},l(p){h=n(p,"H3",{class:!0});var f=s(h);d=x(f,l),f.forEach(a),this.h()},h(){t(h,"class","text-lg leading-6 font-medium text-gray-900")},m(p,f){qe(p,h,f),e(h,d)},p(p,f){f&1&&l!==(l=p[10].file_name+"")&&de(d,l)},d(p){p&&a(h)}}}function At(m){let h,l,d,p=m[7].dno+"",f,I,E,A=m[7].dino+"",g,D,y,S=m[7].machine_type+"",U,P,H,z=m[7].cores+"",X,M,j,F=m[7].memory+"",Y,W,b,Z=m[7].disk+"",v,C,G,J,q;return{c(){h=o("tbody"),l=o("tr"),d=o("td"),f=T(p),I=i(),E=o("td"),g=T(A),D=i(),y=o("td"),U=T(S),P=i(),H=o("td"),X=T(z),M=i(),j=o("td"),Y=T(F),W=i(),b=o("td"),v=T(Z),C=i(),G=o("td"),J=T("PUT UPDATED TIME HERE"),q=i(),this.h()},l($){h=n($,"TBODY",{});var w=s(h);l=n(w,"TR",{});var _=s(l);d=n(_,"TD",{class:!0});var he=s(d);f=x(he,p),he.forEach(a),I=u(_),E=n(_,"TD",{class:!0});var ie=s(E);g=x(ie,A),ie.forEach(a),D=u(_),y=n(_,"TD",{class:!0});var O=s(y);U=x(O,S),O.forEach(a),P=u(_),H=n(_,"TD",{class:!0});var ue=s(H);X=x(ue,z),ue.forEach(a),M=u(_),j=n(_,"TD",{class:!0});var pe=s(j);Y=x(pe,F),pe.forEach(a),W=u(_),b=n(_,"TD",{class:!0});var B=s(b);v=x(B,Z),B.forEach(a),C=u(_),G=n(_,"TD",{class:!0});var fe=s(G);J=x(fe,"PUT UPDATED TIME HERE"),fe.forEach(a),_.forEach(a),q=u(w),w.forEach(a),this.h()},h(){t(d,"class","px-6 py-4"),t(E,"class","px-6 py-4"),t(y,"class","px-6 py-4"),t(H,"class","px-6 py-4"),t(j,"class","px-6 py-4"),t(b,"class","px-6 py-4"),t(G,"class","px-6 py-4")},m($,w){qe($,h,w),e(h,l),e(l,d),e(d,f),e(l,I),e(l,E),e(E,g),e(l,D),e(l,y),e(y,U),e(l,P),e(l,H),e(H,X),e(l,M),e(l,j),e(j,Y),e(l,W),e(l,b),e(b,v),e(l,C),e(l,G),e(G,J),e(h,q)},p($,w){w&2&&p!==(p=$[7].dno+"")&&de(f,p),w&2&&A!==(A=$[7].dino+"")&&de(g,A),w&2&&S!==(S=$[7].machine_type+"")&&de(U,S),w&2&&z!==(z=$[7].cores+"")&&de(X,z),w&2&&F!==(F=$[7].memory+"")&&de(Y,F),w&2&&Z!==(Z=$[7].disk+"")&&de(v,Z)},d($){$&&a(h)}}}function Bt(m){let h,l,d,p,f,I,E,A,g,D,y,S,U,P,H,z,X,M,j,F,Y,W,b,Z,v,C,G,J,q,$,w,_,he,ie,O,ue,pe,B,fe,je,K,Ge,Oe,ee,Be,Ne,Se,ge,ve,N,te,ae,ze,_e,Fe,Xe,le,se,Ye,me,Qe,We,re,oe,Je,Ee,Ke,et,Te,xe,ne,$e,tt,lt,De=m[0],k=[];for(let r=0;r<De.length;r+=1)k[r]=Vt(Ht(m,De,r));let ye=m[1],L=[];for(let r=0;r<ye.length;r+=1)L[r]=At(It(m,ye,r));return ae=new at({props:{data:[{group:"value",value:67}],options:{title:"CPU",resizable:!0,height:"250px",gauge:{type:"full",alignment:"center"},color:{scale:{value:"#0C5DD8"}}}}}),se=new at({props:{data:[{group:"value",value:67}],options:{title:"RAM",resizable:!0,height:"250px",gauge:{type:"full",alignment:"center"},color:{scale:{value:"#12CFEA"}}}}}),oe=new at({props:{data:[{group:"value",value:67}],options:{title:"HDD",resizable:!0,height:"250px",gauge:{type:"full",alignment:"center"},color:{scale:{value:"#FAE737"}}}}}),ne=new Ut({props:{data:[{group:"Legend 1",date:"2018-12-31T15:00:00.000Z",temp:23},{group:"Legend 1",date:"2019-01-31T15:00:00.000Z",temp:15},{group:"Legend 1",date:"2019-02-28T15:00:00.000Z",temp:24},{group:"Legend 1",date:"2019-03-31T15:00:00.000Z",temp:33},{group:"Legend 1",date:"2019-04-30T15:00:00.000Z",temp:23},{group:"Legend 1",date:"2019-05-31T15:00:00.000Z",temp:32},{group:"Legend 1",date:"2019-06-30T15:00:00.000Z",temp:23},{group:"Legend 2",date:"2018-12-31T15:00:00.000Z",rainfall:50},{group:"Legend 2",date:"2019-01-31T15:00:00.000Z",rainfall:65},{group:"Legend 2",date:"2019-02-28T15:00:00.000Z",rainfall:35},{group:"Legend 2",date:"2019-03-31T15:00:00.000Z",rainfall:43},{group:"Legend 2",date:"2019-04-30T15:00:00.000Z",rainfall:53},{group:"Legend 2",date:"2019-05-31T15:00:00.000Z",rainfall:19},{group:"Legend 2",date:"2019-06-30T15:00:00.000Z",rainfall:13}],options:{title:"Resource allocation over time",axes:{left:{title:"Legend 1",mapsTo:"temp"},bottom:{scaleType:"time",mapsTo:"date",title:"Date"},right:{title:"Legend 2",mapsTo:"rainfall",correspondingDatasets:["Legend 2"]}},curve:"curveMonotoneX",height:"400px"}}}),{c(){h=i(),l=o("section"),d=o("div"),p=o("div"),f=o("div"),I=o("div"),E=o("div"),A=o("a"),g=wt("svg"),D=wt("path"),y=i();for(let r=0;r<k.length;r+=1)k[r].c();S=i(),U=o("div"),P=o("div"),H=o("a"),z=T("DAG"),X=i(),M=o("a"),j=T("Task list"),F=i(),Y=o("hr"),W=i(),b=o("table"),Z=o("thead"),v=o("tr"),C=o("th"),G=T("(DNO)"),J=i(),q=o("th"),$=T("(DINO)"),w=i(),_=o("th"),he=T("Machine type"),ie=i(),O=o("th"),ue=T("CPU"),pe=i(),B=o("th"),fe=T("RAM"),je=i(),K=o("th"),Ge=T("HDD"),Oe=i(),ee=o("th"),Be=T("Updated"),Ne=i();for(let r=0;r<L.length;r+=1)L[r].c();Se=i(),ge=o("div"),ve=o("div"),N=o("div"),te=o("div"),Pe(ae.$$.fragment),ze=i(),_e=o("p"),Fe=T("67 of 100 used"),Xe=i(),le=o("div"),Pe(se.$$.fragment),Ye=i(),me=o("p"),Qe=T("67 of 100 used"),We=i(),re=o("div"),Pe(oe.$$.fragment),Je=i(),Ee=o("p"),Ke=T("67 of 100 used"),et=i(),Te=o("div"),xe=o("div"),Pe(ne.$$.fragment),this.h()},l(r){Mt('[data-svelte="svelte-1xvs3ag"]',document.head).forEach(a),h=u(r),l=n(r,"SECTION",{});var c=s(l);d=n(c,"DIV",{class:!0});var R=s(d);p=n(R,"DIV",{class:!0});var st=s(p);f=n(st,"DIV",{class:!0});var we=s(f);I=n(we,"DIV",{class:!0});var rt=s(I);E=n(rt,"DIV",{class:!0});var ke=s(E);A=n(ke,"A",{});var ot=s(A);g=kt(ot,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var nt=s(g);D=kt(nt,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),s(D).forEach(a),nt.forEach(a),ot.forEach(a),y=u(ke);for(let ce=0;ce<k.length;ce+=1)k[ce].l(ke);ke.forEach(a),rt.forEach(a),S=u(we),U=n(we,"DIV",{class:!0});var ct=s(U);P=n(ct,"DIV",{class:!0});var Le=s(P);H=n(Le,"A",{href:!0,class:!0});var dt=s(H);z=x(dt,"DAG"),dt.forEach(a),X=u(Le),M=n(Le,"A",{href:!0,class:!0});var ht=s(M);j=x(ht,"Task list"),ht.forEach(a),Le.forEach(a),ct.forEach(a),we.forEach(a),st.forEach(a),F=u(R),Y=n(R,"HR",{}),W=u(R),b=n(R,"TABLE",{class:!0});var Ie=s(b);Z=n(Ie,"THEAD",{class:!0});var it=s(Z);v=n(it,"TR",{});var V=s(v);C=n(V,"TH",{scope:!0,class:!0});var ut=s(C);G=x(ut,"(DNO)"),ut.forEach(a),J=u(V),q=n(V,"TH",{scope:!0,class:!0});var pt=s(q);$=x(pt,"(DINO)"),pt.forEach(a),w=u(V),_=n(V,"TH",{scope:!0,class:!0});var ft=s(_);he=x(ft,"Machine type"),ft.forEach(a),ie=u(V),O=n(V,"TH",{scope:!0,class:!0});var gt=s(O);ue=x(gt,"CPU"),gt.forEach(a),pe=u(V),B=n(V,"TH",{scope:!0,class:!0});var vt=s(B);fe=x(vt,"RAM"),vt.forEach(a),je=u(V),K=n(V,"TH",{scope:!0,class:!0});var _t=s(K);Ge=x(_t,"HDD"),_t.forEach(a),Oe=u(V),ee=n(V,"TH",{scope:!0,class:!0});var mt=s(ee);Be=x(mt,"Updated"),mt.forEach(a),V.forEach(a),it.forEach(a),Ne=u(Ie);for(let ce=0;ce<L.length;ce+=1)L[ce].l(Ie);Ie.forEach(a),R.forEach(a),Se=u(c),ge=n(c,"DIV",{class:!0});var Et=s(ge);ve=n(Et,"DIV",{class:!0});var Tt=s(ve);N=n(Tt,"DIV",{class:!0});var be=s(N);te=n(be,"DIV",{});var He=s(te);Ze(ae.$$.fragment,He),ze=u(He),_e=n(He,"P",{class:!0});var xt=s(_e);Fe=x(xt,"67 of 100 used"),xt.forEach(a),He.forEach(a),Xe=u(be),le=n(be,"DIV",{});var Ve=s(le);Ze(se.$$.fragment,Ve),Ye=u(Ve),me=n(Ve,"P",{class:!0});var Dt=s(me);Qe=x(Dt,"67 of 100 used"),Dt.forEach(a),Ve.forEach(a),We=u(be),re=n(be,"DIV",{});var Ae=s(re);Ze(oe.$$.fragment,Ae),Je=u(Ae),Ee=n(Ae,"P",{class:!0});var yt=s(Ee);Ke=x(yt,"67 of 100 used"),yt.forEach(a),Ae.forEach(a),be.forEach(a),Tt.forEach(a),Et.forEach(a),et=u(c),Te=n(c,"DIV",{class:!0});var bt=s(Te);xe=n(bt,"DIV",{class:!0});var $t=s(xe);Ze(ne.$$.fragment,$t),$t.forEach(a),bt.forEach(a),c.forEach(a),this.h()},h(){document.title="selected_task_dashboard",t(D,"stroke-linecap","round"),t(D,"stroke-linejoin","round"),t(D,"stroke-width","2"),t(D,"d","M10 19l-7-7m0 0l7-7m-7 7h18"),t(g,"class","w-6 h-6 dark:text-black"),t(g,"fill","none"),t(g,"stroke","currentColor"),t(g,"viewBox","0 0 24 24"),t(g,"xmlns","http://www.w3.org/2000/svg"),t(E,"class","flex gap-3"),t(I,"class","w-3/5"),t(H,"href","#"),t(H,"class","text-sm text-white hover:underline bg-gray-700 px-2 py-1 rounded-md"),t(M,"href","#"),t(M,"class","text-sm text-white hover:underline bg-gray-400 px-2 py-1 rounded-md"),t(P,"class","flex justify-end gap-3"),t(U,"class","w-2/5"),t(f,"class","flex"),t(p,"class","px-4 py-5 sm:px-6"),t(C,"scope","col"),t(C,"class","px-6 py-3"),t(q,"scope","col"),t(q,"class","px-6 py-3"),t(_,"scope","col"),t(_,"class","px-6 py-3"),t(O,"scope","col"),t(O,"class","px-6 py-3"),t(B,"scope","col"),t(B,"class","px-6 py-3"),t(K,"scope","col"),t(K,"class","px-6 py-3"),t(ee,"scope","col"),t(ee,"class","px-6 py-3"),t(Z,"class","text-xs text-gray-700 uppercase"),t(b,"class","w-full text-sm text-left text-gray-500"),t(d,"class","bg-gray-50 drop-shadow-lg overflow-hidden sm:rounded-lg mb-3"),t(_e,"class","mt-5 text-sm text-center"),t(me,"class","mt-5 text-sm text-center"),t(Ee,"class","mt-5 text-sm text-center"),t(N,"class","grid grid-cols-1 md:grid-cols-3 gap-4"),t(ve,"class","m-5"),t(ge,"class","relative overflow-x-auto bg-gray-50 drop-shadow-lg sm:rounded-lg mb-3"),t(xe,"class","p-5"),t(Te,"class","relative overflow-x-auto bg-gray-50 drop-shadow-lg sm:rounded-lg")},m(r,Q){qe(r,h,Q),qe(r,l,Q),e(l,d),e(d,p),e(p,f),e(f,I),e(I,E),e(E,A),e(A,g),e(g,D),e(E,y);for(let c=0;c<k.length;c+=1)k[c].m(E,null);e(f,S),e(f,U),e(U,P),e(P,H),e(H,z),e(P,X),e(P,M),e(M,j),e(d,F),e(d,Y),e(d,W),e(d,b),e(b,Z),e(Z,v),e(v,C),e(C,G),e(v,J),e(v,q),e(q,$),e(v,w),e(v,_),e(_,he),e(v,ie),e(v,O),e(O,ue),e(v,pe),e(v,B),e(B,fe),e(v,je),e(v,K),e(K,Ge),e(v,Oe),e(v,ee),e(ee,Be),e(b,Ne);for(let c=0;c<L.length;c+=1)L[c].m(b,null);e(l,Se),e(l,ge),e(ge,ve),e(ve,N),e(N,te),Re(ae,te,null),e(te,ze),e(te,_e),e(_e,Fe),e(N,Xe),e(N,le),Re(se,le,null),e(le,Ye),e(le,me),e(me,Qe),e(N,We),e(N,re),Re(oe,re,null),e(re,Je),e(re,Ee),e(Ee,Ke),e(l,et),e(l,Te),e(Te,xe),Re(ne,xe,null),$e=!0,tt||(lt=Ct(A,"click",m[2]),tt=!0)},p(r,[Q]){if(Q&1){De=r[0];let c;for(c=0;c<De.length;c+=1){const R=Ht(r,De,c);k[c]?k[c].p(R,Q):(k[c]=Vt(R),k[c].c(),k[c].m(E,null))}for(;c<k.length;c+=1)k[c].d(1);k.length=De.length}if(Q&2){ye=r[1];let c;for(c=0;c<ye.length;c+=1){const R=It(r,ye,c);L[c]?L[c].p(R,Q):(L[c]=At(R),L[c].c(),L[c].m(b,null))}for(;c<L.length;c+=1)L[c].d(1);L.length=ye.length}},i(r){$e||(Ue(ae.$$.fragment,r),Ue(se.$$.fragment,r),Ue(oe.$$.fragment,r),Ue(ne.$$.fragment,r),$e=!0)},o(r){Me(ae.$$.fragment,r),Me(se.$$.fragment,r),Me(oe.$$.fragment,r),Me(ne.$$.fragment,r),$e=!1},d(r){r&&a(h),r&&a(l),Lt(k,r),Lt(L,r),Ce(ae),Ce(se),Ce(oe),Ce(ne),tt=!1,lt()}}}function Nt(m,h,l){let d;qt(m,Ot,g=>l(4,d=g));const{id:p,id_task:f}=d.params;var I=[],E=[];return jt(()=>{fetch("http://127.0.0.1:5555/?"+new URLSearchParams({table:"job",query:"sno",equals:`${p}`}),{method:"GET"}).then(g=>g.json()).then(g=>{fetch("http://127.0.0.1:5555/?"+new URLSearchParams({table:"logger",query:"sno",equals:`${f}`}),{method:"GET"}).then(D=>D.json()).then(D=>{l(0,I=D),fetch("http://127.0.0.1:5555/?"+new URLSearchParams({table:"logger_resource_allocation",query:"sno",equals:`${p}`}),{method:"GET"}).then(y=>y.json()).then(y=>{l(1,E=y)}).catch(y=>{console.log(y),l(1,E=[])})}).catch(D=>{console.log(D),l(0,I=[])})}).catch(g=>{console.log(g)})}),[I,E,()=>Gt()]}class Xt extends Pt{constructor(h){super();Zt(this,h,Nt,Bt,Rt,{})}}export{Xt as default};