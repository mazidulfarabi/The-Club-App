document.addEventListener('DOMContentLoaded', function() {
    var userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
        document.getElementById('userPhone').value = userData.phone;
        // Display other fields as necessary
    } else {
        window.location.href = 'https://the-club-app.netlify.app/';
    }
});

//selector from your HTML form
$('#my-form').submit(function(e) {
    //prevent the form from submiting so we can post to the google form
    e.preventDefault();
    //AJAX request
    $.ajax({
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRFI3Pl3XZZmP0BQH7cmxCOaJC7Bj_L3BaaFYc-XxCgJPZ9Q/formResponse',     //The public Google Form url, but replace /view with /formResponse
      data: $('#my-form').serialize(), //Nifty jquery function that gets all the input data 
      type: 'POST', //tells ajax to post the data to the url
      dataType: "json", //the standard data type for most ajax requests
      statusCode: { //the status code from the POST request
        0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
          //success
          $('#form-success').text('hooray!');
          window.location.href="https://the-club-app.netlify.app/profile";
        }, 
        200: function(data) {//200 is a success code. it went through!
          //success
          $('#form-success').text('Success!');
          window.location.href="https://the-club-app.netlify.app/tasks";
          alert(`Thank you for submitting!`);
        },
        403: function(data) {//403 is when something went wrong and the submission didn't go through
          //error
          alert('Please try again.');
        }
      }  
    });
  });