(this["webpackJsonptrade-calculator"]=this["webpackJsonptrade-calculator"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(3),s=t.n(n),r=(t(9),t(1));t(10);var m=function(){var e=.0012,a=c.a.useState(1e4),t=Object(r.a)(a,2),l=t[0],n=t[1],s=c.a.useState(.002),m=Object(r.a)(s,2),u=m[0],i=m[1],o=c.a.useState(30),d=Object(r.a)(o,2),v=d[0],E=d[1],b=c.a.useState(.01),N=Object(r.a)(b,2),p=N[0],C=N[1],F=c.a.useState(0),h=Object(r.a)(F,2),S=h[0],f=h[1],j=c.a.useState(0),O=Object(r.a)(j,2),x=O[0],g=O[1],I=c.a.useState(0),w=Object(r.a)(I,2),B=w[0],T=w[1],$=c.a.useState(0),y=Object(r.a)($,2),R=y[0],L=y[1],k=c.a.useState(0),M=Object(r.a)(k,2),V=M[0],W=M[1],J=c.a.useState(0),P=Object(r.a)(J,2),A=P[0],q=P[1],z=c.a.useState(0),D=Object(r.a)(z,2),G=D[0],H=D[1],K=c.a.useState(0),Q=Object(r.a)(K,2),U=Q[0],X=Q[1],Y=c.a.useState(0),Z=Object(r.a)(Y,2),_=Z[0],ee=Z[1],ae=c.a.useState(0),te=Object(r.a)(ae,2),le=te[0],ce=te[1],ne=c.a.useState(0),se=Object(r.a)(ne,2),re=se[0],me=se[1],ue=c.a.useState(0),ie=Object(r.a)(ue,2),oe=ie[0],de=ie[1],ve=c.a.useState(0),Ee=Object(r.a)(ve,2),be=Ee[0],Ne=Ee[1],pe=c.a.useState(0),Ce=Object(r.a)(pe,2),Fe=Ce[0],he=Ce[1],Se=c.a.useState(0),fe=Object(r.a)(Se,2),je=fe[0],Oe=fe[1],xe=c.a.useState(0),ge=Object(r.a)(xe,2),Ie=ge[0],we=ge[1],Be=c.a.useState(0),Te=Object(r.a)(Be,2),$e=Te[0],ye=Te[1];c.a.useEffect((function(){if(isNaN(u)||isNaN(l)||isNaN(v)||isNaN(p))return f("-"),g("-"),T("-"),L("-"),W("-"),q("-"),H("-"),X("-"),ee("-"),ce("-"),me("-"),de("-"),Ne("-"),he("-"),Oe("-"),we("-"),void ye("-");var a=parseFloat(u),t=parseFloat(l),c=parseFloat(v),n=parseFloat(p),s=a-a*e,r=t*a,m=a-s,i=t*m,o=t+c,d=s*o,E=s*e,b=s-E,N=d*e,C=d-N,F=o/t,h=100*(F-1),S=a*c-2*a*t*e-2*a*c*e+a*t*e*e+a*c*e*e,j=n/(c-2*t*e-2*c*e+t*e*e+c*e*e),O=(n+2*a*t*e-a*t*e*e)/(a-2*a*e+a*e*e),x=(t+O)/t,I=100*(x-1);f(s.toFixed(8)+" BTC"),g("$"+r.toFixed(2)),T(m.toFixed(8)+" BTC"),L("$"+i.toFixed(2)),W("$"+o.toFixed(2)),q("$"+d.toFixed(2)),H("$"+C.toFixed(2)),X(b.toFixed(8)+" BTC"),ee(E.toFixed(8)+" BTC"),ce("$"+N.toFixed(2)),me(F.toFixed(8)),de(h.toFixed(2)+"%"),Ne("$"+S.toFixed(2)),he(j.toFixed(8)+" BTC"),Oe("$"+O.toFixed(2)),we(x.toFixed(8)),ye(I.toFixed(2)+"%")}),[l,u,v,p]);var Re=function(e){return c.a.createElement("div",{className:"ValueComponent"},c.a.createElement("h2",{className:"ValueLabel"},e.label),c.a.createElement("h2",{className:"Value"},e.value))};return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"Title"},"Trade Calculator"),c.a.createElement("div",{className:"Content"},c.a.createElement("div",{className:"Left"},c.a.createElement("div",{className:"Top"},c.a.createElement("div",{className:"Cell"},c.a.createElement("div",{className:"InputComponent"},c.a.createElement("h2",{className:"InputLabel"},"Price (p)"),c.a.createElement("input",{className:"Input",onChange:function(e){return n(e.target.value)},value:l})),c.a.createElement("div",{className:"InputComponent"},c.a.createElement("h2",{className:"InputLabel"},"Buy (b)"),c.a.createElement("input",{className:"Input",onChange:function(e){return i(e.target.value)},value:u}))),c.a.createElement("div",{className:"Cell"},c.a.createElement(Re,{label:"Receive (m)",value:S}),c.a.createElement(Re,{label:"Receive (bu)",value:x})),c.a.createElement("div",{className:"Cell"},c.a.createElement(Re,{label:"Fee (bbf)",value:B}),c.a.createElement(Re,{label:"Fee (buf)",value:R}))),c.a.createElement("div",{className:"Middle"},c.a.createElement("div",{className:"Cell"},c.a.createElement("div",{className:"InputComponent"},c.a.createElement("h2",{className:"InputLabel"},"Increase (i)"),c.a.createElement("input",{className:"Input",onChange:function(e){return E(e.target.value)},value:v}))),c.a.createElement("div",{className:"Cell"},c.a.createElement(Re,{label:"Change (c)",value:oe}),c.a.createElement(Re,{label:"Multiplier (d)",value:re}))),c.a.createElement("div",{className:"Bottom"},c.a.createElement("div",{className:"Cell"},c.a.createElement(Re,{label:"New Price (n)",value:V}),c.a.createElement(Re,{label:"Sell (s)",value:A})),c.a.createElement("div",{className:"Cell"},c.a.createElement(Re,{label:"Receive (t)",value:G}),c.a.createElement(Re,{label:"Receive (sb)",value:U})),c.a.createElement("div",{className:"Cell"},c.a.createElement(Re,{label:"Fee (suf)",value:le}),c.a.createElement(Re,{label:"Fee (sbf)",value:_})))),c.a.createElement("div",{className:"Right"},c.a.createElement("div",{className:"Top"},c.a.createElement("div",{className:"Cell"},c.a.createElement(Re,{label:"Fee (f)",value:e}),c.a.createElement("div",{className:"InputComponent"},c.a.createElement("h2",{className:"InputLabel"},"Wanted Return (w)"),c.a.createElement("input",{className:"Input",onChange:function(e){return C(e.target.value)},value:p})),c.a.createElement(Re,{label:"Needed b (yb)",value:Fe}))),c.a.createElement("div",{className:"Middle"},c.a.createElement("div",{className:"Cell"},c.a.createElement(Re,{label:"Needed i (yi)",value:je})),c.a.createElement("div",{className:"Cell"},c.a.createElement(Re,{label:"Needed change (yc)",value:$e}),c.a.createElement(Re,{label:"Needed multiplier (yd)",value:Ie}))),c.a.createElement("div",{className:"Bottom"},c.a.createElement("div",{className:"Cell"},c.a.createElement(Re,{label:"Return (r)",value:be}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.fb9d6661.chunk.js.map