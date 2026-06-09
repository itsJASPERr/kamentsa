// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Donation Pop-up Window (Modal) Logic
const modal = document.getElementById('donationModal');
const navDonateBtn = document.getElementById('navDonateBtn');
const heroDonateBtn = document.getElementById('heroDonateBtn');
const projectDonateBtn = document.getElementById('projectDonateBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Function to open the window
function openModal() {
    modal.classList.add('active');
}

// Function to close the window
function closeModal() {
    modal.classList.remove('active');
}

// Event Listeners for opening the donation modal
if (navDonateBtn) navDonateBtn.addEventListener('click', openModal);
if (heroDonateBtn) heroDonateBtn.addEventListener('click', openModal);
if (projectDonateBtn) projectDonateBtn.addEventListener('click', openModal);

// Event Listener for closing the modal
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

// Close modal if user clicks anywhere outside of the content box
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
