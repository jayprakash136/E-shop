// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Slider Functionality
const sliderTrack = document.querySelector('.slider-track');
const prevButton = document.querySelector('.slider-nav.prev');
const nextButton = document.querySelector('.slider-nav.next');
const reviewCards = document.querySelectorAll('.review-card');
const cardWidth = reviewCards[0].offsetWidth + 20; // Card width + margin

let currentPosition = 0;

// Next Button
nextButton.addEventListener('click', () => {
  if (currentPosition > -(reviewCards.length - 1) * cardWidth) {
    currentPosition -= cardWidth;
    sliderTrack.style.transform = `translateX(${currentPosition}px)`;
  }
});

// Previous Button
prevButton.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    sliderTrack.style.transform = `translateX(${currentPosition}px)`;
  }
});

// <!-- SPECIALL OFFER -->

// Countdown Timer
const countdown = () => {
    const endDate = new Date("Febury 28, 2025 12:09:59").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
    document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;
  
    if (timeLeft < 0) {
      clearInterval(interval);
      document.querySelector(".countdown-timer").innerHTML = "<p>Offer Expired!</p>";
    }
  };
  
  const interval = setInterval(countdown, 1000);

//   <!-- Contact & Support -->
// FAQ Accordion Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    question.classList.toggle('active');
    if (question.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

// FOOTER