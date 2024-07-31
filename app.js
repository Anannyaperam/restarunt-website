document.addEventListener('DOMContentLoaded', function() {
  // Order Now button
  var orderNowButtons = document.querySelectorAll('.custom-outline-button, .delivery-and-payment-section .custom-button');
  orderNowButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      alert('Order Now button clicked!');
    });
  });

  // View Menu button
  var viewMenuButtons = document.querySelectorAll('.custom-button');
  viewMenuButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      alert('View Menu button clicked!');
    });
  });

  // Redeem Gift button
  var redeemGiftButton = document.querySelector('.thanking-customers-section .custom-button');
  redeemGiftButton.addEventListener('click', function() {
    alert('Redeem Gift button clicked!');
  });
});
