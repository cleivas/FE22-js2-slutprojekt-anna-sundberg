function e(e,t,o,s){Object.defineProperty(e,t,{get:o,set:s,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},n=t.parcelRequire605a;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){s[e]=t},t.parcelRequire605a=n),n.register("27Lyk",(function(t,o){var s,n;e(t.exports,"register",(()=>s),(e=>s=e)),e(t.exports,"resolve",(()=>n),(e=>n=e));var l={};s=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)l[t[o]]=e[t[o]]},n=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n("27Lyk").register(JSON.parse('{"6evGa":"index.e3985832.js","dFjjW":"koala.381c436e.svg","z2aJN":"duck.35625f35.svg","9jQRK":"penguin.cbd7ba22.svg"}'));const l="https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users";localStorage.getItem("user");let a="";const r=document.querySelector("#sign-in"),i=document.querySelector("#user-input");r.addEventListener("click",(()=>{d=!1,console.log("OK du ska logga in"),u.style.display="none",i.style.display="flex",i.style.border="black 2px solid",r.style.display="none"}));const c=document.querySelector("#submit-btn"),u=document.querySelector("#sign-up");let d=!1;var p;p=new URL(n("27Lyk").resolve("dFjjW"),import.meta.url).toString();var g;g=new URL(n("27Lyk").resolve("z2aJN"),import.meta.url).toString();var v;v=new URL(n("27Lyk").resolve("9jQRK"),import.meta.url).toString(),u.addEventListener("click",(()=>{d=!0,u.style.display="none",i.style.display="flex";const e=document.createElement("div");console.log("OK, du ska skapa en user"),r.style.display="none",c.innerText="Create User";const t=document.createElement("img");let o=new URL(p);t.src=o.href;const s=document.createElement("img");let n=new URL(g);s.src=n.href;const l=document.createElement("img");let y=new URL(v);l.src=y.href;const f=document.createElement("h3");f.innerText="Choose your avatar by clicking the one you want",e.append(t,s,l),i.prepend(f,e),t.addEventListener("click",(()=>{console.log("You chose koala"),a="https://www.reshot.com/preview-assets/icons/NX7HW2CBSF/koala-NX7HW2CBSF.svg",s.style.display="none",l.style.display="none"})),s.addEventListener("click",(()=>{console.log("You chose duck"),a="https://www.reshot.com/preview-assets/icons/RYZ2P59AGC/duck-RYZ2P59AGC.svg",t.style.display="none",l.style.display="none"})),l.addEventListener("click",(()=>{console.log("You chose penguin"),a="https://www.reshot.com/preview-assets/icons/3BTWMSPU95/penguin-3BTWMSPU95.svg",t.style.display="none",s.style.display="none"}))})),c.addEventListener("click",(e=>{e.preventDefault(),async function(){let e=document.querySelector("#username"),t=document.querySelector("#password");const o=await fetch(l+".json"),s=await o.json();console.log(s);const n=Object.values(s),r=Object.keys(s);if(0==d)for(let c=0;c<n.length;c++){const{username:u,password:p,avatar:g}=n[c];if(""==e.value||""==t.value){alert("fyll i alla inputs");break}if(e.value==u&&t.value==p){console.log("hittade user"),console.log(u,p,g,r[c]);const v=r[c];localStorage.setItem("user",e.value),localStorage.setItem("password",t.value),localStorage.setItem("avatar",g),localStorage.setItem("id",v),setTimeout((()=>{location.assign("src/html/profile.html")}),400);break}console.log("ingen user hittades")}else if(1==d)for(let f=0;f<n.length;f++){const{username:m,password:w,avatar:h}=n[f];if(console.log(e.value,m,t.value,w),""==e.value||""==t.value||""==a){alert("fyll i alla inputs");break}if(e.value==m&&t.value==w){console.log("did you mean to sign in instead?"),y=!1;break}if(e.value==m){console.log("user already exists, try a different username"),y=!1;break}e.value!=m&&(console.log("ingen user hittades, ny skall skapas"),y=!0)}if(1==y){async function i(e){const t={method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}},o=await fetch(l+".json",t),s=await o.json();console.log(s)}i({username:e.value,password:t.value,avatar:a}),localStorage.setItem("user",e.value),localStorage.setItem("password",t.value),localStorage.setItem("avatar",a),setTimeout((()=>{window.location.href="src/html/profile.html"}),600)}}()}));let y=!1;
//# sourceMappingURL=index.e3985832.js.map
