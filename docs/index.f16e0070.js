function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},s=t.parcelRequire605a;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire605a=s),s.register("27Lyk",(function(t,o){var n,s;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>s),(e=>s=e));var a={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)a[t[o]]=e[t[o]]},s=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("27Lyk").register(JSON.parse('{"l1gf1":"index.f16e0070.js","dFjjW":"koala.381c436e.svg","z2aJN":"duck.35625f35.svg","9jQRK":"penguin.cbd7ba22.svg"}'));const a="https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users";localStorage.getItem("user");let r,l,i="";const c=document.querySelector("#sign-in"),u=document.querySelector("#user-input");c.addEventListener("click",(()=>{r=!1,console.log("OK du ska logga in"),p.style.display="none",u.style.display="flex",u.style.border="black 2px solid",c.style.display="none"}));const d=document.querySelector("#submit-btn"),p=document.querySelector("#sign-up");var g;g=new URL(s("27Lyk").resolve("dFjjW"),import.meta.url).toString();var f;f=new URL(s("27Lyk").resolve("z2aJN"),import.meta.url).toString();var m;m=new URL(s("27Lyk").resolve("9jQRK"),import.meta.url).toString(),p.addEventListener("click",(()=>{r=!0,console.log(r),p.style.display="none",u.style.display="flex";const e=document.createElement("div");console.log("OK, du ska skapa en user"),c.style.display="none",d.innerText="Create User";const t=document.createElement("img");let o=new URL(g);t.src=o.href;const n=document.createElement("img");let s=new URL(f);n.src=s.href;const a=document.createElement("img");let l=new URL(m);a.src=l.href;const y=document.createElement("h3");y.innerText="Choose your avatar by clicking the one you want",e.append(t,n,a),u.prepend(y,e),t.addEventListener("click",(()=>{console.log("You chose koala"),i="https://www.reshot.com/preview-assets/icons/NX7HW2CBSF/koala-NX7HW2CBSF.svg",n.style.display="none",a.style.display="none"})),n.addEventListener("click",(()=>{console.log("You chose duck"),i="https://www.reshot.com/preview-assets/icons/RYZ2P59AGC/duck-RYZ2P59AGC.svg",t.style.display="none",a.style.display="none"})),a.addEventListener("click",(()=>{console.log("You chose penguin"),i="https://www.reshot.com/preview-assets/icons/3BTWMSPU95/penguin-3BTWMSPU95.svg",t.style.display="none",n.style.display="none"}))}));document.querySelector("#input-form").addEventListener("submit",(e=>{e.preventDefault(),async function(){let e=document.querySelector("#username"),t=document.querySelector("#password");const o=document.querySelector("#error-message"),n=await fetch(a+".json"),s=await n.json();console.log(s);const c=Object.values(s),u=Object.keys(s);if(0==r){function d(n){for(let s=0;s<n.length;s++){const{username:a,password:r,avatar:l}=n[s];if(e.value!=a||t.value!=r)o.innerText="Wrong username or password";else{if(e.value==a&&t.value==r){o.innerText="",console.log("hittade user");const n=u[s];localStorage.setItem("user",e.value),localStorage.setItem("password",t.value),localStorage.setItem("avatar",l),localStorage.setItem("id",n),setTimeout((()=>{window.location.href="./html/profile.html"}),400);break}console.log("ingen user hittades"),o.innerText="no user found :("}}}d(c)}if(1==r){function p(n){for(let s=0;s<n.length;s++){const{username:a,password:r}=n[s];if(""==e.value||""==t.value||""==i){alert("fyll i alla inputs");break}if(e.value==a&&t.value==r){console.log("did you mean to sign in instead?"),o.innerText="User already exists, did you mean to sign in instead?",l=!1;break}if(e.value==a){console.log("user already exists, try a different username"),o.innerText="This name is taken :(",l=!1;break}e.value!=a&&(console.log("ingen user hittades, ny skall skapas"),l=!0)}}p(c)}if(1==l){async function g(e){const t={method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}},o=await fetch(a+".json",t),n=await o.json();console.log(n)}g({username:e.value,password:t.value,avatar:i}),localStorage.setItem("user",e.value),localStorage.setItem("password",t.value),localStorage.setItem("avatar",i),setTimeout((()=>{window.location.href="./html/profile.html"}),600)}}()}));
//# sourceMappingURL=index.f16e0070.js.map