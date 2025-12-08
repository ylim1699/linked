function o(t,a){const n=`<button class="join-button py-1.5 px-4" data-club-name="${t.name}">Join</button>`;return`
        <div class="group-card">
            <div class="card-image-wrapper">
                <img src="${t.imageSrc}" 
                     onerror="this.onerror=null; this.src='https://placehold.co/400x150/2563eb/ffffff?text=Image+Unavailable'"
                     alt="${t.fallbackText}" class="card-image">
            </div>
            <div class="card-content">
                <h3 class="card-title">
                    ${t.name}
                </h3>
                <p class="card-description">
                    ${t.description}
                </p>
                <div class="card-footer">
                    <div class="member-info">
                        <span>${t.members} members</span>
                    </div>
                    ${n}
                </div>
            </div>
        </div>
    `}function r(t,a){const e=a?"Joined":"Join Now",s=a?"join-button join-button-joined":"join-button",n=a?`<button class="${s} py-2 px-5 text-base cursor-not-allowed" disabled>${e}</button>`:`<button class="${s} py-2 px-5 text-base" data-club-name="${t.name}">${e}</button>`;return`
        <button id="modal-close-button" class="close-button">
            &times;
        </button>

        <div class="group-card" data-club-id="${t.name.replace(/\s/g,"_")}"> 
            <div class="card-image-wrapper">
                <img src="${t.imageSrc}" 
                     onerror="this.onerror=null; this.src='https://placehold.co/600x250/2563eb/ffffff?text=Image+Unavailable'"
                     alt="${t.fallbackText}" class="card-image">
            </div>
            <div class="card-content">
                <h3 class="card-title text-2xl mb-2">
                    ${t.name}
                </h3>
                <p class="card-description text-base mb-4 h-auto">
                    ${t.description}
                </p>
                <div class="member-info text-base text-gray-500 modal-member-info">
                    <span>${t.members} members</span>
                </div>
                <div class="modal-footer pt-3">
                    <a href="${t.link}" target="_blank" class="external-link-button">
                        Visit Page
                    </a>
                    ${n}
                </div>
            </div>
        </div>
    `}function i(t){return`
        <div class="group-card" data-club-name="${t.name}">
            <img src="${t.imageSrc}" alt="${t.name} banner" class="card-image" />
            <div class="p-4">
                <h2 class="card-title">${t.name}</h2>
                <p class="card-desc line-clamp-3">${t.description}</p>
                <div class="card-footer flex justify-between items-center">
                    <span class="members">${t.members} members</span>
                    <button class="join-btn unjoin-button" 
                            data-club-name="${t.name}">
                        Unjoin
                    </button>
                </div>
            </div>
        </div>
    `}function c(){return`
            <div class="empty-state-card">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
    </svg>
                <h2 class="text-xl font-bold text-dark-text mb-2">No Groups Joined Yet</h2>
                <p class="text-gray-500 mb-4 text-center">
                    It looks like you haven't connected with any organizations.
                </p>
                <a href="discover.html" class="empty-state-button">
                    Discover New Groups
                </a>
            </div>
        `}export{o as a,i as c,r as g,c as j};
