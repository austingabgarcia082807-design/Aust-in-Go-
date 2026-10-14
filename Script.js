// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Interactive Booking Modal Functions
const modal = document.getElementById('bookingModal');
const modalCarTitle = document.getElementById('modalCarTitle');

function openBooking(carName, carPrice) {
    modal.style.display = 'flex';
    modalCarTitle.innerText = `Selected Vehicle: ${carName} (${carPrice})`;
}

function closeBooking() {
    modal.style.display = 'none';
}

// Close modal when clicking outside the modal content box
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle booking submission
function handleBookingSubmit(event) {
    event.preventDefault();
    alert('Thank you! Your reservation request has been successfully submitted. We will contact you shortly.');
    modal.style.display = 'none';
    document.getElementById('bookingForm').reset();
}