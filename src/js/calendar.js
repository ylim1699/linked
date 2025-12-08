// --- USER AUTHENTICATION STATE MANAGEMENT ---
const USER_KEY = 'currentUser';

function logInUser(username) {
    localStorage.setItem(USER_KEY, username);
    updateHeaderForAuth();
}

function getCurrentUser() {
    return localStorage.getItem(USER_KEY);
}

function logOutUser() {
    localStorage.removeItem(USER_KEY);
    window.location.reload();
}

function updateHeaderForAuth() {
    const user = getCurrentUser();
    const signUpButtonPlaceholder = document.getElementById('signup-button-placeholder'); 
    
    if (!signUpButtonPlaceholder) return;

    // --- CONSOLIDATED CLEANUP ---
    // Remove any existing profile menu from the previous page load/state change
    const profileMenu = document.querySelector('.profile-menu');
    if (profileMenu) {
        profileMenu.remove();
    }
    // --- END CONSOLIDATED CLEANUP ---
    
    if (user) {
        // --- LOGGED IN: Inject Initials/Menu ---
        
        // Hide original placeholder
        signUpButtonPlaceholder.style.display = 'none'; 
        
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
        
        signUpButtonPlaceholder.insertAdjacentHTML('afterend', profileHtml);
        
        // Attach Log Out Listener
        const logoutLink = document.getElementById('logout-link');
        if (logoutLink) {
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                logOutUser();
            });
        }
    } else {
        // --- LOGGED OUT: Ensure static Sign Up button is visible ---
        
        // Restore display: flex to maintain Tailwind styling/alignment
        signUpButtonPlaceholder.style.display = 'flex'; 
    }
}

// --- CALENDAR LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. RUN AUTH CHECK FIRST
    updateHeaderForAuth();

    // 2. RUN CALENDAR LOGIC
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const calendarGrid = document.querySelector('.calendar-grid');

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth(); // 0-indexed

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function renderCalendar() {
        calendarGrid.innerHTML = ''; // Clear existing days

        // Re-add day labels (Sun, Mon, etc.)
        const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        dayLabels.forEach(label => {
            const dayLabelDiv = document.createElement('div');
            dayLabelDiv.classList.add('day-label');
            dayLabelDiv.textContent = label;
            calendarGrid.appendChild(dayLabelDiv);
        });

        currentMonthYear.textContent = `${monthNames[month]} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Fill in empty leading days
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('calendar-day', 'empty');
            calendarGrid.appendChild(emptyDiv);
        }

        // Fill in the days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('calendar-day');
            dayDiv.textContent = i;
            dayDiv.dataset.date = `${year}-${month + 1}-${i}`; // Store full date

            // Highlight November 19, 2025 as selected
            if (year === 2025 && month === 10 && i === 19) { 
                dayDiv.classList.add('selected');
            }

            calendarGrid.appendChild(dayDiv);
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        renderCalendar();
    });

    // Initial render
    renderCalendar();
});


// --- GLOBAL EXPOSURE (FOR TEMP SIGNUP/TESTING) ---
window.logInUser = logInUser;
window.getCurrentUser = getCurrentUser;
window.logOutUser = logOutUser;