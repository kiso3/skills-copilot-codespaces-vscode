// Create web server
const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on port ${port}`));