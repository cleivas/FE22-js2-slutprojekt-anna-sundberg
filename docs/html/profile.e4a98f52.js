const e="https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users",t=localStorage.getItem("user");async function o(t,o){const n=await fetch(e+`/${t}.json`,{method:"DELETE"}),c=await n.json();console.log(c,"user is removed"),o.innerHTML=""}async function n(t){const o=await fetch(e+`/${t}/posts.json`,{method:"DELETE"}),n=await o.json();console.log(n,"posts are removed"),location.reload()}!async function(){const t=await fetch(e+".json"),o=await t.json();console.log(o);const n=Object.values(o),c=Object.keys(o);!function(e){let t=0;e.forEach((e=>{const{username:o}=e;if(o===s){const e=c[t];console.log(e),localStorage.setItem("id",e)}t++}))}(n)}(),setTimeout((()=>{f()}),300);const c=localStorage.getItem("avatar"),s=localStorage.getItem("user"),a=document.querySelector("#user-avatar"),r=document.querySelector("#username-txt");!async function(e,t,o,n){o.src=e,n.innerText=t}(c,s,a,r);!async function(o){const n=await fetch(e+".json"),c=await n.json();console.log(c);const s=Object.values(c),a=Object.keys(c);!function(e){let n=0;e.forEach((e=>{const{username:c,avatar:s}=e;if(c!=t){const e=document.createElement("h3");e.innerText=c;const t=document.createElement("img");t.src=s,t.style.maxHeight="100px";const r=document.createElement("div");r.append(e,t),o.append(r),r.classList.add("user-card");const l=a[n];t.addEventListener("click",(()=>{localStorage.setItem("viewUser",c),localStorage.setItem("viewUserAvatar",s),localStorage.setItem("viewedUserId",l),setTimeout((()=>{window.location.href="../html/userPage.html"}),100)}))}n++}))}(s)}(document.querySelector("#other-users-container"));const l=localStorage.getItem("id"),i=document.querySelector("#profile-container");document.querySelector("#remove-btn").addEventListener("click",(()=>{o(l,i),setTimeout((()=>{window.location.href="../html.html"}),300)}));document.querySelector("#remove-posts").addEventListener("click",(()=>{n(l)}));const u=document.querySelector("#publish-btn"),d=document.querySelector("#textarea");u.addEventListener("click",(t=>{t.preventDefault();const o=d.value;console.log(o),async function(t){if(""!=t){const o={method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}},n=await fetch(e+`/${l}/posts.json`,o),c=await n.json();console.log(c)}}(o),setTimeout((()=>{f()}),200),d.value=""}));const m=document.querySelector("#post-card");async function f(){const t=await fetch(e+`/${l}/posts.json`),o=await t.json();if(null!=o){console.log(o);const e=Object.values(o);console.log(e),n=e,(c=m).innerHTML="",n.forEach((e=>{const t=document.createElement("div");t.classList.add("post-card");const o=document.createElement("p");o.innerText=`${e}`,t.append(o),c.prepend(t)}))}else m.innerText="No posts yet";var n,c}
//# sourceMappingURL=profile.e4a98f52.js.map
