import"./modulepreload-polyfill-B5Qt9EMX.js";const c="currentUser";function h(r){localStorage.setItem(c,r),p()}function u(){return localStorage.getItem(c)}function m(){localStorage.removeItem(c),window.location.reload()}function p(){const r=u(),a=document.getElementById("signup-button-placeholder");if(!a)return;const l=document.querySelector(".profile-menu");if(l&&l.remove(),r){a.style.display="none";const s=`
        <div class="profile-menu relative group">
        <button class="w-8 h-8 bg-blue-700 text-white rounded-full shadow border border-blue-700 font-semibold text-xs transition flex items-center justify-center cursor-pointer">
        ${r.slice(0,1).toUpperCase()+r.slice(1,2).toUpperCase()}
        </button>
        <div class="absolute right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-xl hidden group-hover:block z-50 profile-dropdown-fixed">
        <div class="py-2">
        <span class="block px-4 py-2 text-sm text-gray-700 font-medium">Hello, ${r}</span>
        <a href="#" id="logout-link" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Log Out
        </a>
        </div>
        </div>
        </div>
        `;a.insertAdjacentHTML("afterend",s);const n=document.getElementById("logout-link");n&&n.addEventListener("click",e=>{e.preventDefault(),m()})}else a.style.display="flex"}document.addEventListener("DOMContentLoaded",()=>{p();const r=document.getElementById("currentMonthYear"),a=document.getElementById("prevMonth"),l=document.getElementById("nextMonth"),d=document.querySelector(".calendar-grid");let s=new Date,n=s.getFullYear(),e=s.getMonth();const g=["January","February","March","April","May","June","July","August","September","October","November","December"];function i(){d.innerHTML="",["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(o=>{const t=document.createElement("div");t.classList.add("day-label"),t.textContent=o,d.appendChild(t)}),r.textContent=`${g[e]} ${n}`;const y=new Date(n,e,1).getDay(),f=new Date(n,e+1,0).getDate();for(let o=0;o<y;o++){const t=document.createElement("div");t.classList.add("calendar-day","empty"),d.appendChild(t)}for(let o=1;o<=f;o++){const t=document.createElement("div");t.classList.add("calendar-day"),t.textContent=o,t.dataset.date=`${n}-${e+1}-${o}`,n===2025&&e===10&&o===19&&t.classList.add("selected"),d.appendChild(t)}}a.addEventListener("click",()=>{e--,e<0&&(e=11,n--),i()}),l.addEventListener("click",()=>{e++,e>11&&(e=0,n++),i()}),i()});window.logInUser=h;window.getCurrentUser=u;window.logOutUser=m;
