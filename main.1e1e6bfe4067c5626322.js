(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,o,e){},QfWi:function(t,o,e){"use strict";e.r(o);e("L1EO");const n={start:document.querySelector("button[data-action=start]"),stop:document.querySelector("button[data-action=stop]"),body:document.querySelector("body")};console.dir(n.start);const s=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];let a=null;const l=(t,o)=>{n.body.style.backgroundColor=""+s[((t,o)=>Math.floor(Math.random()*(o-t+1)+t))(t,o)],n.body.style.backgroundImage=null,n.start.disabled=!0,console.log(Date.now())};n.start.addEventListener("click",()=>{console.log(a),a=setInterval(l,1e3,0,s.length-1)}),n.stop.addEventListener("click",()=>{clearInterval(a),n.start.disabled=!1,n.body.style.backgroundColor=null,n.body.style.backgroundImage="url('https://source.unsplash.com/WLUHO9A_xik/1600x900')"})}},[["QfWi",1]]]);
//# sourceMappingURL=main.1e1e6bfe4067c5626322.js.map