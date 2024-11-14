// Toggle dark/light mode
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Fetch content through CORS Anywhere
document.getElementById('fetch-btn').addEventListener('click', async () => {
    const url = document.getElementById('url-input').value;
    const output = document.getElementById('output');
    output.textContent = 'Fetching...';

    if (!url) {
        output.textContent = 'Please enter a URL.';
        return;
    }

    try {
        const corsProxy = 'https://cors-anywhere.herokuapp.com/';
        const response = await fetch(corsProxy + url);
        const data = await response.text();
        output.textContent = data;
    } catch (error) {
        output.textContent = 'Error fetching URL: ' + error.message;
    }
});
