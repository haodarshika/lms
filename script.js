

function setDynamicGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();
    let greetingText = '';

    if (hours < 12) {
        greetingText = 'Good Morning';
    } else if (hours < 18) {
        greetingText = 'Good Afternoon';
    } else {
        greetingText = 'Good Evening';
    }

    
    greetingElement.innerHTML = `${greetingText}<br>Welcome to the LMS Platform`;
}


const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});


setDynamicGreeting();