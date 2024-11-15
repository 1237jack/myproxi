const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy middleware options
app.use('/proxy', createProxyMiddleware({
    target: '', // Target will be dynamically assigned based on request
    changeOrigin: true,
    pathRewrite: (path, req) => path.replace('/proxy/', '/'),
    router: req => req.query.url, // Dynamically use `url` query parameter as target
    onProxyReq: (proxyReq, req) => {
        // Rewrite request headers if necessary
        proxyReq.setHeader('User-Agent', 'Mozilla/5.0');
    },
}));

// Serve HTML frontend if desired (optional)
app.get('/', (req, res) => {
    res.send(`<html><body><h1>Proxy Server is Running</h1><p>Use /proxy?url=http://example.com to access a URL.</p></body></html>`);
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
