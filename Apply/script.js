//selector from your HTML form
$('#my-form').submit(function(e) {
    //prevent the form from submiting so we can post to the google form
    e.preventDefault();
    //AJAX request
    $.ajax({
      url: 'https://docs.google.com/forms/u/0/d/e/1ONwyxiWrxwD6uQK9MeXeRsIY5JJU3i0EI7HJoPsTr8E/formResponse',     //The public Google Form url, but replace /view with /formResponse
      data: $('#my-form').serialize(), //Nifty jquery function that gets all the input data 
      type: 'POST', //tells ajax to post the data to the url
      dataType: "json", //the standard data type for most ajax requests
      statusCode: { //the status code from the POST request
        0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
          //success
          $('#form-success').text('hooray!');
          window.location.href="https://the-club-app.netlify.app/";
        }, 
        200: function(data) {//200 is a success code. it went through!
          //success
          $('#form-success').text('Success!');
          window.location.href="https://the-club-app.netlify.app/";
          alert(`Thank you for submitting!`);
        },
        403: function(data) {//403 is when something went wrong and the submission didn't go through
          //error
          alert('Please try again.');
        }
      }  
    });
  });