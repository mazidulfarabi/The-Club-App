
    var url = "https://sheets.googleapis.com/v4/spreadsheets/1zTiZgTCnsMQASTsBvnIteXz63Hyt6DphPNKm60Rlces/values/tasks?alt=json&key=AIzaSyCJ4u6ZfdiiEAVh5p0bv4eoRIoYKGCTyR0";

    $.getJSON(url, function(data) {


        for (var i = 1; i < data.values.length; i++) {

            document.getElementById('taskType').textContent = data.values[i][0];
            document.getElementById('taskTitle').textContent = data.values[i][1];
            document.getElementById('taskImage').src = data.values[i][2];
            document.getElementById('taskDetails').textContent = data.values[i][3];
            document.getElementById('postedByName').textContent = data.values[i][4];
            document.getElementById('postedByImage').src = data.values[i][5];
            document.getElementById('postedByPost').textContent = data.values[i][6];
                break;
        }
            window.location.href = 'https://the-club-app.netlify.app/profile/';


    });