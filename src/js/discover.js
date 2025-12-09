import { createGroupCardHTML, getModalContentHTML } from "./templates.mjs";
import { clubsData } from "./clubs.mjs";
import { getJoinedClubs, getCurrentUser, logOutUser, logInUser } from "./auth.mjs";

// --- SHARED USER AUTHENTICATION STATE MANAGEMENT ---
const STORAGE_KEY = 'joinedClubs';
const USER_KEY = 'currentUser';

// --- HEADER UI UPDATE FUNCTION (Should be working now) ---
function updateHeaderForAuth() {
    const user = getCurrentUser();
    const signUpButton = document.querySelector('a[href="signup.html"]'); 
    
    if (user && signUpButton) {
        const initials = user.slice(0, 1).toUpperCase() + user.slice(1, 2).toUpperCase();
        
        const profileHtml = `
        <div class="profile-menu relative group">
        <button class="w-8 h-8 bg-blue-700 text-white rounded-full shadow border border-blue-700 font-semibold text-xs transition flex items-center justify-center cursor-pointer">
        ${initials}
        </button>
        <div class="absolute right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-xl hidden group-hover:block z-50 profile-dropdown-fixed">
        <div class="py-2">
        <span class="block px-4 py-2 text-sm text-gray-700 font-medium">Hello, ${user}</span>
        <a href="#" id="logout-link" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Log Out
        </a>
        </div>
        </div>
        </div>
        `;
        
        signUpButton.outerHTML = profileHtml;
        
        const logoutLink = document.getElementById('logout-link');
        if (logoutLink) {
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                logOutUser();
            });
        }
    }
}
// --- END OF AUTH BLOCK ---


/**
 * @param {Object} club 
 */
function joinClub(club) {
    let joinedClubs = getJoinedClubs();
    if (!joinedClubs.some(c => c.name === club.name)) {
        joinedClubs.push(club);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(joinedClubs));
        
        filterAndSortClubs(); // <-- Rerender the visible list
        closeClubModal(); 
    }
}

function handleJoinClick(event) {
    event.stopPropagation();
    const clubName = event.target.getAttribute('data-club-name');
    if (clubName) {
        const clubToJoin = clubsData.find(c => c.name === clubName);
        if (clubToJoin) {
            joinClub(clubToJoin);
        }
    }
}

// --- RENDERING, FILTERING, MODAL LOGIC ---

function renderGroups(groups) {
    const container = document.getElementById('groups-list-container');
    if (!container) return; 
    
    // 1. Filter out clubs already joined before rendering
    const joinedClubsNames = getJoinedClubs().map(c => c.name);
    const visibleClubs = groups.filter(club => !joinedClubsNames.includes(club.name));

    container.innerHTML = ''; 

    // 2. Group clubs by category
    const groupedClubs = visibleClubs.reduce((acc, club) => {
        const category = (club.category || club.name.charAt(0)).toUpperCase();
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(club);
        return acc;
    }, {});

    const sortedCategories = Object.keys(groupedClubs).sort();

    // 3. Render HTML
    sortedCategories.forEach((category, index) => {
        const categoryHeader = `
            <h2 class="category-heading ${index > 0 ? 'mt-10' : ''}">
                ${category}
            </h2>
        `;
        
        const cardsHTML = groupedClubs[category].map(club => {
            let cardHtml = createGroupCardHTML(club, false); 
            return cardHtml.replace('<div class="group-card"', `<div class="group-card" data-club-name="${club.name}"`);
        }).join('');
        
        const gridHTML = `<div class="groups-grid">${cardsHTML}</div>`;
        container.innerHTML += categoryHeader + gridHTML;
    });

    setupCardClickListeners();
}

const getSortValue = () => {
    const sortSelect = document.getElementById('sort-select');
    return sortSelect ? sortSelect.value : 'az';
};

const getSearchText = () => {
    const searchInput = document.getElementById('search-input');
    return searchInput ? searchInput.value.toLowerCase() : '';
};

function filterAndSortClubs() {
    const searchText = getSearchText();
    const sortValue = getSortValue();

    const filteredClubs = clubsData.filter(club => 
        club.name.toLowerCase().includes(searchText) || 
        club.description.toLowerCase().includes(searchText)
    );

    let sortedClubs = [...filteredClubs];

    switch (sortValue) {
        case 'az':
            sortedClubs.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'members':
            sortedClubs.sort((a, b) => b.members - a.members);
            break;
        case 'newest':
            sortedClubs.sort((a, b) => {
                const newComparison = (b.new === true) - (a.new === true);
                if (newComparison !== 0) return newComparison;
                return a.name.localeCompare(b.name);
            });
            break;
    }
    renderGroups(sortedClubs);
}

function openClubModal(clubName) {
    const modal = document.getElementById('club-modal');
    const modalContent = document.getElementById('modal-content-container');
    
    const club = clubsData.find(c => c.name === clubName);

    if (modal && modalContent && club) {
        const isJoined = getJoinedClubs().some(c => c.name === clubName);
        
        modalContent.innerHTML = getModalContentHTML(club, isJoined);
        
        const closeButton = document.getElementById('modal-close-button');
        if (closeButton) {
             closeButton.addEventListener('click', closeClubModal);
        }
        
        const joinButton = modalContent.querySelector('.modal-footer .join-button');
        if (joinButton && !isJoined) { 
            joinButton.addEventListener('click', handleJoinClick);
        }

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    }
}

function closeClubModal() {
    const modal = document.getElementById('club-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function setupCardClickListeners() {
    const cards = document.querySelectorAll('.group-card');
    cards.forEach(card => {
        const clubName = card.getAttribute('data-club-name');
        if (clubName) {
            
            card.addEventListener('click', (event) => {
                if (event.target.closest('.join-button') || event.target.closest('.external-link-button')) {
                    return; 
                }
                openClubModal(clubName);
            });
    
            const joinButton = card.querySelector('.card-footer .join-button');
            if (joinButton && !joinButton.hasAttribute('disabled')) {
                 joinButton.addEventListener('click', handleJoinClick);
            }
        }
    });
}

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Update Header UI first
    updateHeaderForAuth();
    
    // 2. Setup event listeners for filtering and modal
    filterAndSortClubs();
    
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndSortClubs);
    }
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterAndSortClubs);
    }
    
    // 3. Setup Modal close handlers
    const modalCloseButton = document.getElementById('modal-close-button');
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', closeClubModal);
    }
    const modalBackdrop = document.getElementById('club-modal');
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeClubModal();
            }
        });
    }
});

// --- GLOBAL EXPOSURE (FOR TEMP SIGNUP/TESTING) ---
window.logInUser = logInUser;
window.getCurrentUser = getCurrentUser;
window.logOutUser = logOutUser;