document.getElementById('login-submit').addEventListener('click', function(){
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
  emailField.value = '';
  // get user password
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;
  passwordField.value = '';
  if(userEmail == 'ruman@rk.com' && userPassword == 'taka'){
    window.location.href ='banking.html'
  }
  
})

