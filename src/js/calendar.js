import { getCurrentUser, logOutUser, logInUser, getJoinedClubs } from "./auth.mjs";
import { clubsData } from "./clubs.mjs";



// --- USER AUTHENTICATION STATE MANAGEMENT ---
const USER_KEY = 'currentUser'; 

function updateHeaderForAuth() {
    // Uses imported getCurrentUser()
    const user = getCurrentUser();
    const signUpButtonPlaceholder = document.querySelector('a[href="signup.html"]'); 
    
    if (!signUpButtonPlaceholder) return;

    // Remove any existing profile menu
    const profileMenu = document.querySelector('.profile-menu');
    if (profileMenu) {
        profileMenu.remove();
    }
    
    // Restore Sign Up button visibility by default
    signUpButtonPlaceholder.style.display = 'flex'; 

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
                // Uses imported logOutUser()
                logOutUser();
            });
        }
    } 
}

// --- CALENDAR LOGIC & EVENT INTEGRATION ---

/**
 * Aggregates all events from clubs the user has joined.
 * @returns {Object<string, Array<Object>>} A map of date string ('YYYY-MM-DD') to event objects.
 */
function getEventsForJoinedClubs() {
    const joinedClubs = getJoinedClubs();
    const eventsByDate = {};

    joinedClubs.forEach(joinedClub => {
        const fullClub = clubsData.find(c => c.name === joinedClub.name);
        
        if (fullClub && fullClub.events) {
            fullClub.events.forEach(event => {
                const parts = event.date.split('-'); 
                let [month, day, eventYear] = parts.map(p => parseInt(p, 10));

                const standardizedMonth = String(month).padStart(2, '0');
                const standardizedDay = String(day).padStart(2, '0');
                
                const dateKey = `${eventYear}-${standardizedMonth}-${standardizedDay}`;

                if (!eventsByDate[dateKey]) {
                    eventsByDate[dateKey] = [];
                }

                eventsByDate[dateKey].push({
                    clubName: fullClub.name,
                    eventName: event.name,
                    link: event.link
                });
            });
        }
    });

    return eventsByDate;
}

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth(); // 0-indexed


// ⭐ NEW: Modal Functions ⭐

function closeEventModal() {
    const modal = document.getElementById('event-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
        // Remove 'selected' class from all days when modal is closed
        document.querySelectorAll('.calendar-day').forEach(day => {
            day.classList.remove('selected');
        });
    }
}

/**
 * Renders event details and opens the modal.
 * @param {string} dateKey - The date string ('YYYY-MM-DD').
 * @param {Array<Object>} events - Array of event objects for that day.
 */
function openEventModal(dateKey, events) {
    const modal = document.getElementById('event-modal');
    const eventsTitle = document.getElementById('events-title');
    const eventsList = document.getElementById('events-list');
    
    if (!modal || !eventsTitle || !eventsList) return;

    // Remove 'selected' class from all days
    document.querySelectorAll('.calendar-day').forEach(day => {
        day.classList.remove('selected');
    });

    // Add 'selected' class to the clicked day
    const clickedDay = document.querySelector(`.calendar-day[data-date="${dateKey}"]`);
    if (clickedDay) {
        clickedDay.classList.add('selected');
    }

    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const dateTitle = new Date(dateKey + 'T00:00:00').toLocaleDateString(undefined, options);

    eventsTitle.textContent = `Events on ${dateTitle}`;
    eventsList.innerHTML = '';
    
    if (events.length === 0) {
        eventsList.innerHTML = `<p class="no-events-message">No scheduled events from your joined groups for this day.</p>`;
    } else {
        events.forEach(event => {
            const item = document.createElement('div');
            item.classList.add('event-item');
            
            const eventHtml = `
                <p class="event-club-name">${event.clubName}</p>
                <p class="font-semibold text-lg">${event.eventName}</p>
                <a href="${event.link}" target="_blank" class="event-link">View Event Details &rarr;</a>
            `;
            item.innerHTML = eventHtml;
            eventsList.appendChild(item);
        });
    }
    
    // Show the modal and prevent background scrolling
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

// ⭐ END NEW Modal Functions ⭐


function renderCalendar() {
    const calendarGrid = document.querySelector('.calendar-grid');
    const currentMonthYear = document.getElementById('currentMonthYear');
    if (!calendarGrid || !currentMonthYear) return;
    
    // Ensure modal is closed when rendering a new month
    closeEventModal();
    
    // Get events for the current month
    const allEvents = getEventsForJoinedClubs();

    calendarGrid.innerHTML = ''; // Clear existing days

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

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
        
        // Standardized date key for event lookup (e.g., '2025-12-10')
        const standardizedMonth = String(month + 1).padStart(2, '0');
        const standardizedDay = String(i).padStart(2, '0');
        const dateKey = `${year}-${standardizedMonth}-${standardizedDay}`;
        
        dayDiv.dataset.date = dateKey; // Store full date

        // Check for events on this day
        const eventsOnThisDay = allEvents[dateKey];
        const hasEvents = eventsOnThisDay && eventsOnThisDay.length > 0;

        if (hasEvents) {
            dayDiv.classList.add('has-events');
            
            // Append a dot/marker for visual indication
            const eventMarker = document.createElement('div');
            eventMarker.classList.add('event-marker');
            eventMarker.textContent = hasEvents ? eventsOnThisDay.length : ''; // Show number of events
            dayDiv.appendChild(eventMarker);

            // Setup click listener to display event details (uses openEventModal)
            dayDiv.addEventListener('click', () => openEventModal(dateKey, eventsOnThisDay));
        } else {
             // For days without events, still allow basic selection to show "No Events" in modal
             dayDiv.addEventListener('click', () => openEventModal(dateKey, []));
        }

        // Highlight today's date
        const today = new Date();
        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            dayDiv.classList.add('today');
        }

        calendarGrid.appendChild(dayDiv);
    }
}

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. RUN AUTH CHECK FIRST
    updateHeaderForAuth();

    // 2. RUN CALENDAR LOGIC
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const modal = document.getElementById('event-modal');
    const modalCloseButton = document.getElementById('modal-close-button');


    // Initial render
    renderCalendar();
    
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
    
    // ⭐ Modal Close Listeners ⭐
    
    // Close button click
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', closeEventModal);
    }
    
    // Backdrop click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeEventModal();
            }
        });
    }

});


// --- GLOBAL EXPOSURE (FOR TEMP SIGNUP/TESTING) ---
window.logInUser = logInUser;
window.getCurrentUser = getCurrentUser;
window.logOutUser = logOutUser;