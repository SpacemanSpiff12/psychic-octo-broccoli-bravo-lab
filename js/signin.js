$(document).ready(function () {
  $('#signinBtn').on('click', function () {
    const enteredPassword = $('#password').val();

    if (enteredPassword === 'lasagna') {
      sessionStorage.setItem('signedIn', 'true');
      window.location.href = 'private.html';
    } else {
      $('#message').text('nope. try again.');
    }
  });
});
