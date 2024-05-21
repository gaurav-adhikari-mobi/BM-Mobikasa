$(function() {
  $('.js-toggle-login-modal').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    closeOnBgClick: false,
    closeBtnInside: false,
    closeOnContentClick: false,
    tClose: 'x',
    removalDelay: 500,
    callbacks: {
      open: function() {
        window.setTimeout( function() { document.getElementById('password').focus(); }, 50 );
      },
      close: function() {
        window.setTimeout( function() { document.getElementById('email').focus(); }, 50 );
      }
    }
  });
  if ( $('.storefront-password-form .errors').size() ) {
    $('.js-toggle-login-modal').click();
  }
});