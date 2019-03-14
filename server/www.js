
const next = require('next');
const http = require('http');
const express = require('express')();

const dev = process.env.NODE_ENV !== 'production';
const port = 3000;

const nextApp = next({
    dev
});

const handleNextRequests = nextApp.getRequestHandler();

express.get('*', (req, res) => {
    handleNextRequests(req, res)
});

nextApp.prepare().then(() => {
    const httpServer = http.createServer(express);

    httpServer.listen(port,  err => {
        if(err) {
            throw err;
        }

        console.log(`> Ready on http://localhost:${port}`);
    });
});