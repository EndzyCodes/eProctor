    // This variable is used to track whether the tab is currently focused or not.
    let isFocused = true;

    window.onblur = function() {
        // When the user switches away from the tab, set isFocused to false.
        isFocused = false;
    };

    // This event is triggered when the user switches back to the tab.
    window.onfocus = function() {
        // When the user switches back to the tab, set isFocused to true.
        isFocused = true;
    };

    // check tab every second
    let count = 0;
    setInterval(function() {
        if (!isFocused) {
            alert('Warning: You have switched away from the tab. Proctor have been notified.');
            // Open the YouTube link in a new tab
            // count += 1;
            // if (count === 1) {
            //     window.open('https://youtu.be/dQw4w9WgXcQ?si=swYwLdoV5WyZHuIV', '_blank');
            // }
        }
    }, 1000); // Check every second
    window.addEventListener('focus', function() {
        isFocused = true;
        count = 0; // Reset count when tab is focused again
    });

    document.getElementById('googleFormSubmission').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get the Google Form link from the input field
        const googleFormLink = document.getElementById('googleFormLink').value;
        if (googleFormLink === '') { // if no google form link pasted but the button was clicked
            alert('You need to enter a Google Form link.');
            return;
        }

        // Embed the Google Form within an iframe
        const embeddedFormContainer = document.getElementById('embeddedFormContainer');
        embeddedFormContainer.innerHTML = `<iframe src="${googleFormLink}" width="100%" height="800px"></iframe>`;


        // Hide the heading and form
        document.querySelector('h1').style.display = 'none';
        document.getElementById('googleFormSubmission').style.display = 'none';
    });