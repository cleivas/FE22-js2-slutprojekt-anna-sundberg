const e="https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users",t=localStorage.getItem("user");const s=document.querySelector("#name"),a=document.querySelector("#avatar"),o=document.querySelector("#other-users-container"),c=localStorage.getItem("viewUser"),n=localStorage.getItem("viewUserAvatar"),r=localStorage.getItem("viewedUserId"),l=document.querySelector("#post-card");!async function(e,t,s,a){s.src=e,a.innerText=t}(n,c,a,s),document.querySelector("#other-user").innerText=`${c}'s posts`,async function(){const e=`https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users/${r}/posts.json`,t=await fetch(e),s=await t.json();if(console.log(s),null!=s){const e=Object.values(s);console.log(e),a=e,l.innerHTML="",a.forEach((e=>{const t=document.createElement("div");t.classList.add("post-card");const s=document.createElement("p");s.innerText=`${e}`,t.append(s),l.prepend(t)}))}var a}(),async function(s){const a=await fetch(e+".json"),o=await a.json();console.log(o);const c=Object.values(o),n=Object.keys(o);!function(e){let a=0;e.forEach((e=>{const{username:o,avatar:c}=e;if(o!=t){const e=document.createElement("h3");e.innerText=o;const t=document.createElement("img");t.src=c,t.style.maxHeight="100px";const r=document.createElement("div");r.append(e,t),s.append(r),r.classList.add("user-card");const l=n[a];t.addEventListener("click",(()=>{localStorage.setItem("viewUser",o),localStorage.setItem("viewUserAvatar",c),localStorage.setItem("viewedUserId",l),setTimeout((()=>{location.assign("../html/userProfile.html")}),100)}))}a++}))}(c)}(o);
//# sourceMappingURL=userProfile.435514ee.js.map