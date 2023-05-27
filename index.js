//DARK MODE -------------------------------------------------------------------------

const darkModeToggleBtn = document.querySelector("#dark-mode-toggle");

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
};

darkModeToggleBtn.addEventListener('click', toggleDarkMode);