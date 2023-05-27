//DARK MODE -------------------------------------------------------------------------

const darkModeToggleBtn = document.querySelector("#dark-mode-toggle");

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
};

darkModeToggleBtn.addEventListener('click', toggleDarkMode);


// DOG CARDS MODALS -------------------------------------------------------------------

const backdrop = document.getElementById('backdrop');

function toggleModal(modalClass) {
    const modal = document.querySelector(`.modal.card.${modalClass}`);

    modal.classList.toggle('visible');
    backdrop.classList.toggle('visible');
}

function hideModal(modalClass) {
    const modal = document.querySelector(`.modal.card.${modalClass}`);

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

document.getElementById('chewie-button').addEventListener('click', function() {
    toggleModal('chewie');
});

document.getElementById('chewie-cancel').addEventListener('click', function() {
    toggleModal('chewie');
});

document.getElementById('spock-button').addEventListener('click', function() {
    toggleModal('spock');
});

document.getElementById('spock-cancel').addEventListener('click', function() {
    toggleModal('spock');
});

backdrop.addEventListener('click', function() {
    hideModal('chewie');
    hideModal('spock');
});


