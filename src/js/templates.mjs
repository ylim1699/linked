const STORAGE_KEY = "joinedClubs";
function getJoinedClubs() {
  const clubsJson = localStorage.getItem(STORAGE_KEY);
  return clubsJson ? JSON.parse(clubsJson) : [];
}

/**
 * @param {Object} club
 * @param {boolean} isJoined - True if the club is already joined.
 */
export function createGroupCardHTML(club, isJoined) {
  const buttonText = isJoined ? "Joined" : "Join";
  const buttonClass = isJoined
    ? "join-button-joined cursor-not-allowed"
    : "join-button";

  const buttonHtml = isJoined
    ? `<button class="${buttonClass} py-1.5 px-4" disabled>${buttonText}</button>`
    : `<button class="${buttonClass} py-1.5 px-4" data-club-name="${club.name}">${buttonText}</button>`;

  return `
        <div class="group-card">
            <div class="card-image-wrapper">
                <img src="${club.imageSrc}" 
                     onerror="this.onerror=null; this.src='https://placehold.co/400x150/2563eb/ffffff?text=Image+Unavailable'"
                     alt="${club.fallbackText}" class="card-image">
            </div>
            <div class="card-content">
                <h3 class="card-title">
                    ${club.name}
                </h3>
                <p class="card-description">
                    ${club.description}
                </p>
                <div class="card-footer">
                    <div class="member-info">
                        <span>${club.members} members</span>
                    </div>
                    ${buttonHtml}
                </div>
            </div>
        </div>
    `;
}

/**
 * @param {Object} club
 * @param {boolean} isJoined - True if the club is already joined.
 */
export function getModalContentHTML(club, isJoined) {
  const buttonText = isJoined ? "Joined" : "Join Now";
  const buttonClass = isJoined
    ? "join-button join-button-joined"
    : "join-button";

  const joinButtonHtml = isJoined
    ? `<button class="${buttonClass} py-2 px-5 text-base cursor-not-allowed" disabled>${buttonText}</button>`
    : `<button class="${buttonClass} py-2 px-5 text-base" data-club-name="${club.name}">${buttonText}</button>`;

  return `
        <button id="modal-close-button" class="close-button">
            &times;
        </button>

        <div class="group-card" data-club-id="${club.name.replace(
          /\s/g,
          "_"
        )}"> 
            <div class="card-image-wrapper">
                <img src="${club.imageSrc}" 
                     onerror="this.onerror=null; this.src='https://placehold.co/600x250/2563eb/ffffff?text=Image+Unavailable'"
                     alt="${club.fallbackText}" class="card-image">
            </div>
            <div class="card-content">
                <h3 class="card-title text-2xl mb-2">
                    ${club.name}
                </h3>
                <p class="card-description text-base mb-4 h-auto">
                    ${club.description}
                </p>
                <div class="member-info text-base text-gray-500 modal-member-info">
                    <span>${club.members} members</span>
                </div>
                <div class="modal-footer pt-3">
                    <a href="${
                      club.link
                    }" target="_blank" class="external-link-button">
                        Visit Page
                    </a>
                    ${joinButtonHtml}
                </div>
            </div>
        </div>
    `;
}

export function createJoinedCardHTML(club) {
  return `
        <div class="group-card" data-club-name="${club.name}">
            <img src="${club.imageSrc}" alt="${club.name} banner" class="card-image" />
            <div class="p-4">
                <h2 class="card-title">${club.name}</h2>
                <p class="card-desc line-clamp-3">${club.description}</p>
                <div class="card-footer flex justify-between items-center">
                    <span class="members">${club.members} members</span>
                    <button class="join-btn unjoin-button" 
                            data-club-name="${club.name}">
                        Unjoin
                    </button>
                </div>
            </div>
        </div>
    `;
}

export function joinedClubTemplate() {
  return `
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
        `;
}
