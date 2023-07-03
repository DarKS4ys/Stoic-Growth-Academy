document.addEventListener('DOMContentLoaded', function() {
  var header = document.getElementById('heading');
  var textValues = ['Learn Video Editing Skills', 'Earn Money From Your Social Medias', 'Increase Your Social Media Views', 'Amplify Your Social Media Impact']; // Array of text values
  var currentIndex = 0;
  header.style.setProperty('--header-length', header.textContent.length);

  // Function to update the text
  function updateText() {
    header.textContent = textValues[currentIndex];
    currentIndex = (currentIndex + 1) % textValues.length; // the last expression makes it loop, Move to the next index in a circular manner // Update the --header-length CSS variable
    }



  // Delay the text update by 5 seconds (5000 milliseconds)
  setInterval(updateText, 5000);
});
