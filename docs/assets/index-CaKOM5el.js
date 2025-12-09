import"./modulepreload-polyfill-B5Qt9EMX.js";import{j as a,c}from"./templates-dQiHFTDc.js";import{l as g,g as i,a as s,b as l}from"./auth-D8scdDoQ.js";const b="joinedClubs";function p(e){const o=l().filter(n=>n.name!==e);localStorage.setItem(b,JSON.stringify(o)),u()}function u(){const e=document.querySelector("#joined-groups-grid");if(!e)return;const t=l();if(t.length===0){e.innerHTML=a();return}const o=t.map(c).join("");e.innerHTML=o,f()}function f(){document.querySelectorAll(".unjoin-button").forEach(e=>{e.addEventListener("click",t=>{const o=t.target.getAttribute("data-club-name");o&&p(o)})})}function m(){const e=i(),t=document.querySelector('a[href="signup.html"]');if(e&&t){const n=`
        <div class="profile-menu relative group">
        <button class="w-8 h-8 bg-blue-700 text-white rounded-full shadow border border-blue-700 font-semibold text-xs transition flex items-center justify-center cursor-pointer">
        ${e.slice(0,1).toUpperCase()+e.slice(1,2).toUpperCase()}
        </button>
        <div class="absolute right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-xl hidden group-hover:block z-50 profile-dropdown-fixed">
        <div class="py-2">
        <span class="block px-4 py-2 text-sm text-gray-700 font-medium">Hello, ${e}</span>
        <a href="#" id="logout-link" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Log Out
        </a>
        </div>
        </div>
        </div>
        `;t.outerHTML=n;const r=document.getElementById("logout-link");r&&r.addEventListener("click",d=>{d.preventDefault(),s()})}}document.addEventListener("DOMContentLoaded",()=>{u(),m()});window.logInUser=g;window.getCurrentUser=i;window.logOutUser=s;
