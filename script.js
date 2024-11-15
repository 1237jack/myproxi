document.getElementById('fetch-btn').addEventListener('click', async () => {
    const url = document.getElementById('url-input').value;
    const output = document.getElementById('output');
    output.textContent = 'Fetching...';

    if (!url) {
        output.textContent = 'Please enter a URL.';
        return;
    }

    try {
        // Replace `https://your-proxy-url` with the actual URL of your deployed proxy
        const proxyUrl = `https://your-proxy-url/proxy?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        const data = await response.text();
        output.textContent = data;
    } catch (error) {
        output.textContent = 'Error fetching URL: ' + error.message;
    }
});
