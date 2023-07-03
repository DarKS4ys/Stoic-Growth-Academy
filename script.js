document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('heading');
  const textValues = [
    'Learn Video and Image Editing Skills',
    'Make Money Online From Social Media',
    'Increase Your Social Media Views',
    'Amplify Your Social Media Impact',
  ]; // Array of text values
  let currentIndex = 0;
  header.style.setProperty('--header-length', header.textContent.length);

  const menu = document.querySelector('.menu');
  const close = document.querySelector('.close');
  const nav = document.querySelector('.menu-nav');

  menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
  });

  close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
  });

  // Function to update the text
  function updateText() {
    header.textContent = textValues[currentIndex];
    currentIndex = (currentIndex + 1) % textValues.length; // the last expression makes it loop, Move to the next index in a circular manner // Update the --header-length CSS variable
  }

  // Delay the text update by 5 seconds (5000 milliseconds)
  setInterval(updateText, 5000);
});
