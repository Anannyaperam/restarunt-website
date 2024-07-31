// Function to display alerts for button clicks
function showAlert(message) {
  alert(message);
}

// Function to handle 'Order Now' button clicks
function handleOrderNowClick() {
  showAlert('Order Now button clicked!');
}

// Function to handle 'View Menu' button clicks
function handleViewMenuClick() {
  showAlert('View Menu button clicked!');
}

// Function to handle 'Redeem Gift' button clicks
function handleRedeemGiftClick() {
  showAlert('Redeem Gift button clicked!');
}

// Function to set up event listeners for buttons
function setUpEventListeners() {
  // Select buttons using querySelectorAll and add event listeners
  var orderNowButtons = document.querySelectorAll('.custom-outline-button, .delivery-and-payment-section .custom-button');
  orderNowButtons.forEach(function(button) {
    button.addEventListener('click', handleOrderNowClick);
  });

  var viewMenuButtons = document.querySelectorAll('.banner-section-bg-container .custom-button');
  viewMenuButtons.forEach(function(button) {
    button.addEventListener('click', handleViewMenuClick);
  });

  var redeemGiftButton = document.querySelector('.thanking-customers-section .custom-button');
  redeemGiftButton.addEventListener('click', handleRedeemGiftClick);
}

// Function to handle smooth scrolling for navigation links
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}

// Function to set up smooth scrolling for navigation links
function setUpSmoothScrolling() {
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var target = this.getAttribute('href');
      smoothScroll(target);
    });
  });
}

// Function to handle navbar collapse on link click for mobile view
function handleNavbarCollapse() {
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  var navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
}

// Initialize the app
function init() {
  setUpEventListeners();
  setUpSmoothScrolling();
  handleNavbarCollapse();
}

// Wait for the DOM content to be fully loaded before initializing the app
document.addEventListener('DOMContentLoaded', init);
