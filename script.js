
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop back to the last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    }
    
    // Update the slider position
    const newTransformValue = -100 * currentSlide; 
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue}%)`;
}

// Next button functionality
nextButton.addEventListener('click', () => changeSlide(1));

// Previous button functionality
prevButton.addEventListener('click', () => changeSlide(-1));

// Optional: Auto slide every 5 seconds
setInterval(() => changeSlide(1), 5000); // Change slide every 5 seconds




// Function to change slides
function changeSlide(index) {
    const slider = document.querySelector('.slider');
    if (index >= totalSlides) {
        currentSlide = 0; // Reset to the first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Go to the last slide
    } else {
        currentSlide = index;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`; // Slide effect
}

// Navigate to next slide
document.getElementById('next').addEventListener('click', () => {
    changeSlide(currentSlide + 1);
});

// Navigate to previous slide
document.getElementById('prev').addEventListener('click', () => {
    changeSlide(currentSlide - 1);
});

// Automatically change slide every 5 seconds
setInterval(() => {
    changeSlide(currentSlide + 1);
}, 5000); // 5000ms = 5 seconds

// Show the first slide initially
showSlide(currentSlideIndex);
function handleBooking(event) {
    event.preventDefault(); // Prevent form submission

    // Get user data from the form
    const name = document.getElementById('name').value;
    const destination = document.getElementById('destination').value;
    const price = document.querySelector(`#destination option[value='${destination}']`).dataset.price;

    // Redirect to thank you page with name and price as query parameters
    window.location.href = `thankyou.html?name=${encodeURIComponent(name)}&price=${price}`;
}

function handleFeedback(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('feedbackName').value;

    // Show thank you message
    alert(`Thank you for your feedback, ${name}! We appreciate your input.`);
    
    // Clear the form
    document.getElementById('feedbackForm').reset();
}
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('dates');
    const today = new Date().toISOString().split('T')[0];

    // Set the minimum date to today
    dateInput.setAttribute('min', today);

    // Validate the date on change
    dateInput.addEventListener('change', () => {
        const selectedDate = new Date(dateInput.value);
        const todayDate = new Date();

        // Check if the selected date is in the past
        if (selectedDate < todayDate) {
            alert('Please select a future date.');
            dateInput.value = ''; // Clear the invalid input
        }
    });
});
