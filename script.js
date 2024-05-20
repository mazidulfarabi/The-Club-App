document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var phone = document.getElementById('phone').value;
    var passphrase = document.getElementById('password').value;

    var url = "https://sheets.googleapis.com/v4/spreadsheets/1qjkohNsJwA21P6lzkVkFtIXhWU2wxHZa6vY0WUWuEk4/values/members?alt=json&key=AIzaSyCJ4u6ZfdiiEAVh5p0bv4eoRIoYKGCTyR0";

    $.getJSON(url, function(data) {
        var isAuthenticated = false;
        var userData = {};

        for (var i = 1; i < data.values.length; i++) {
            if (phone === data.values[i][0] && passphrase === data.values[i][1]) {
                isAuthenticated = true;
                userData = {
                    name: data.values[i][2],
                    post: data.values[i][3],
                    designs: data.values[i][4],
                    captions: data.values[i][5],
                    // Add other fields as necessary
                };
                break;
            }
        }

        if (isAuthenticated) {
            sessionStorage.setItem('userData', JSON.stringify(userData));
            window.location.href = 'https://the-club-app.netlify.app/profile/';
        } else {
            alert('Invalid phone number or passphrase.');
        }
    }).fail(function() {
        alert('Error fetching data. Please try again later.');
    });
});