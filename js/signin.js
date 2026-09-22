$(document).ready(function () {
  $('#signinBtn').on('click', function () {
    const enteredPassword = $('#password').val();

    if (enteredPassword === 'lasagna') {
      sessionStorage.setItem('signedIn', 'true');
      
      // fix for 404 error message
      if (window.location.pathname.endsWith('signin.html')) {
        window.location.href = 'private.html';
      } else {
        window.location.href = 'pages/private.html';
      }
    } else {
      $('#message').text('nope. try again.');
    }
  });
});
