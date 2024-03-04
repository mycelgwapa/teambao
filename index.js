// Array of notes
var warningNotes = [
    "Hiiiiii Can I Ask Something?????",
    "Im Sorry If this Is sudden Buttttt",
    "I really miss youuu and im craving for your kissesss😖",
    "Will youu giveee meee  a vmmm for the kiss loveee???",
    "ThankYouuuuuuuuu I realllyyyyy loveeeeee youuuuu sooo muchhhhh😍💋",
];

// Initialize the currentIndex to 0
var currentIndex = 0;

// Number of notes before redirect
var notesBeforeRedirect = 5;

function showSequentialWarning() {
    var warningNoteContainer = document.getElementById("warningNoteContainer");
    
    // Display the warning note
    warningNoteContainer.innerHTML = warningNotes[currentIndex] + '<br><button onclick="nextWarningNote()">OK</button>';
    warningNoteContainer.style.display = "block";
}

function nextWarningNote() {
    currentIndex++;
    var warningNoteContainer = document.getElementById("warningNoteContainer");
    
    // Hide the warning note container
    warningNoteContainer.style.display = "none";
    
    // Check if the currentIndex reached the notesBeforeRedirect
    if (currentIndex < notesBeforeRedirect) {
        // If not, show the next warning note
        showSequentialWarning();
    } else {
        // If reached the notesBeforeRedirect, redirect to loading.html after the last warning note
        setTimeout(function() {
            window.location.href = "loading.html";
        }, 1000); // Delay before redirecting (adjust as needed)
    }
}
