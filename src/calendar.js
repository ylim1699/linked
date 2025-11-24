document.addEventListener('DOMContentLoaded', () => {
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

        // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        // Get the number of days in the current month
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
            dayDiv.dataset.date = `${year}-${month + 1}-${i}`; // Store full date for potential events

            // Highlight November 19, 2025 as selected, similar to the image
            if (year === 2025 && month === 10 && i === 19) { // Month 10 is November (0-indexed)
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