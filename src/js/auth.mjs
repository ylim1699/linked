// --- ./js/auth.mjs (NEW FILE) ---
const USER_KEY = 'currentUser';
const STORAGE_KEY = 'joinedClubs';

export function getCurrentUser() {
    return localStorage.getItem(USER_KEY);
}

export function logInUser(username) {
    localStorage.setItem(USER_KEY, username);
    // updateHeaderForAuth will be called by the consuming script (main, discover, calendar)
}

export function logOutUser() {
    localStorage.removeItem(USER_KEY);
    window.location.reload(); 
}

export function getJoinedClubs() {
    const clubsJson = localStorage.getItem(STORAGE_KEY);
    return clubsJson ? JSON.parse(clubsJson) : [];
}

