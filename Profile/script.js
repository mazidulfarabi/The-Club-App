document.addEventListener('DOMContentLoaded', function() {
    var userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('userPost').textContent = userData.post;
        document.getElementById('userDesigns').textContent = userData.designs;
        document.getElementById('userCaptions').textContent = userData.captions;
        // Display other fields as necessary
    } else {
        window.location.href = 'https://the-club-app.netlify.app/';
    }
});