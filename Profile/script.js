document.addEventListener('DOMContentLoaded', function() {
    var userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
        document.getElementById('userDesigns').textContent = userData.designs;
        // Display other fields as necessary
    } else {
        window.location.href = 'https://the-club-app.netlify.app/';
    }
});