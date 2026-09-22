$(document).ready(function () {
  const isSignedIn = sessionStorage.getItem('signedIn');

  if (isSignedIn === 'true') {
    $('#content').show();
  } else {
    $('#guardMessage').text('you are not signed in. Redirecting...');
    setTimeout(function () {
      window.location.href = 'signin.html';
    }, 1500);
  }

  $('#signoutBtn').on('click', function () {
    sessionStorage.removeItem('signedIn');
    window.location.href = 'signin.html';
  });
});
