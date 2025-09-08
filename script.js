// === Dark Mode Toggle ===
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
}

// === Filter Listings by Location ===
const locationFilter = document.getElementById("location-filter");
const listings = document.querySelectorAll(".listing");

if (locationFilter) {
  locationFilter.addEventListener("change", () => {
    const value = locationFilter.value;
    listings.forEach(listing => {
      if (value === "all" || listing.dataset.location === value) {
        listing.style.display = "block";
      } else {
        listing.style.display = "none";
      }
    });
  });
}

// === FAQ Toggle ===
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// === Booking Form Validation ===
const form = document.getElementById("booking-form");
if (form) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const destinationInput = document.getElementById("destination");
  const checkinInput = document.getElementById("checkin");
  const checkoutInput = document.getElementById("checkout");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const destinationError = document.getElementById("destination-error");
  const formSuccess = document.getElementById("form-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Full name is required.";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Enter a valid email address.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Validate destination
    if (destinationInput.value === "") {
      destinationError.textContent = "Please select a destination.";
      valid = false;
    } else {
      destinationError.textContent = "";
    }

    // Validate dates
    if (checkinInput.value && checkoutInput.value) {
      if (new Date(checkinInput.value) >= new Date(checkoutInput.value)) {
        alert("Check-out date must be after check-in date.");
        valid = false;
      }
    }

    // Success
    if (valid) {
      formSuccess.textContent = "✅ Booking confirmed! We’ll email you the details.";
      form.reset();
    } else {
      formSuccess.textContent = "";
    }
  });
}

// === Book Now Button Shortcut ===
const bookButtons = document.querySelectorAll(".book-btn");
bookButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    const destinationInput = document.getElementById("destination");
    if (destinationInput) {
      destinationInput.value = btn.parentElement.dataset.location;
    }
  });
});
