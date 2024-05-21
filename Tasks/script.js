document.addEventListener('DOMContentLoaded', function() {
    var url = "https://sheets.googleapis.com/v4/spreadsheets/1zTiZgTCnsMQASTsBvnIteXz63Hyt6DphPNKm60Rlces/values/tasks?alt=json&key=AIzaSyCJ4u6ZfdiiEAVh5p0bv4eoRIoYKGCTyR0";

    $.getJSON(url, function(data) {
        var taskContainer = document.getElementById('taskContainer');
        var taskTemplate = document.getElementById('taskTemplate').content;

        for (var i = 1; i < data.values.length; i++) {
            // Clone the template
            var clone = document.importNode(taskTemplate, true);
            
            // Populate the cloned template with data
            clone.querySelector('.taskType').textContent = data.values[i][0];
            clone.querySelector('.taskTitle').textContent = data.values[i][1];
            clone.querySelector('.taskImage').src = data.values[i][2];
            clone.querySelector('.taskImage').alt = `Image for ${data.values[i][1]}`; // Optional: update the alt text
            clone.querySelector('.taskDetails').textContent = data.values[i][3];
            clone.querySelector('.postedByName').textContent = data.values[i][4];
            clone.querySelector('.postedByImage').src = data.values[i][5];
            clone.querySelector('.postedByImage').alt = `Image of ${data.values[i][4]}`; // Optional: update the alt text
            clone.querySelector('.postedByPost').textContent = data.values[i][6];
            
            // Append the clone to the container
            taskContainer.appendChild(clone);
        }
    }).fail(function() {
        alert('Error fetching data. Please try again later.');
    });
});