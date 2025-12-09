import { joinedClubTemplate, createJoinedCardHTML } from "./templates.mjs";
import { getJoinedClubs, getCurrentUser, logOutUser, logInUser } from "./auth.mjs";


const STORAGE_KEY = 'joinedClubs';

/**
 * @param {string} clubName - The name of the club to unjoin.
 */
function unjoinClub(clubName) {
    let joinedClubs = getJoinedClubs();
    const updatedClubs = joinedClubs.filter(c => c.name !== clubName);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedClubs));
    
    // Re-render the home page
    renderJoinedClubs(); 
}

function renderJoinedClubs() {
    const gridContainer = document.querySelector('#joined-groups-grid');
    if (!gridContainer) return;
    
    const joinedClubs = getJoinedClubs();

    if (joinedClubs.length === 0) {
        gridContainer.innerHTML = joinedClubTemplate();
        return;
    }
    
    const cardsHTML = joinedClubs.map(createJoinedCardHTML).join('');
    gridContainer.innerHTML = cardsHTML;
    
    setupUnjoinListeners();
}

function setupUnjoinListeners() {
    document.querySelectorAll('.unjoin-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const clubName = event.target.getAttribute('data-club-name');
            if (clubName) {
                unjoinClub(clubName);
            }
        });
    });
}

// --- HEADER UI UPDATE FUNCTION ---
function updateHeaderForAuth() {
    const user = getCurrentUser();
    // This targets the Sign Up link that will be replaced
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

document.addEventListener('DOMContentLoaded', () => {
    renderJoinedClubs();
    updateHeaderForAuth();
});

// --- EXPOSE FUNCTIONS GLOBALLY FOR TEMP AUTH DEMO ---
// This allows the simple <script> tag in your HTML to call logInUser() and getCurrentUser()
// before the module loads, ensuring the header is updated instantly.

window.logInUser = logInUser;
window.getCurrentUser = getCurrentUser;
window.logOutUser = logOutUser;