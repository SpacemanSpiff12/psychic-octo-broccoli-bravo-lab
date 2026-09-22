$(document).ready(function () {
  $('#signinBtn').on('click', function () {
    const enteredPassword = $('#password').val();

    if (enteredPassword === 'lasagna') {
      sessionStorage.setItem('signedIn', 'true');
      
      // take 2 at fixing the 404 error
      if (window.location.pathname.includes('/pages/')) {
        window.location.href = 'private.html';
      } else {
        window.location.href = 'pages/private.html';
      }
    } else {
      $('#message').text('nope. try again.');
    }
  });
});
