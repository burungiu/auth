
$(document).ready( () => {
  $('#login_btn').on("click", () => {
    axios.post('/login', {
      "name": $('#email_field').val(),
      "password": $('#password_field').val()
    })
  .then(function (response) {
    console.log(response);
      if (response.data.token) {
        window.sessionStorage.setItem('token', response.data.token);
        $(location).attr('href', '/user')
      }
    })
  .catch(function (error) {
    Promise.reject(error);
  });
  });
});
