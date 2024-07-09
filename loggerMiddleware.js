// loggerMiddleware.js

function loggerMiddleware(req, res, next) {
    const startTime = new Date();
    const { method, url } = req;

    res.on('finish', () => {
        const endTime = new Date();
        const duration = endTime - startTime;
        console.log(`${method} ${url} - ${duration}ms`);
    });

    next();
}

module.exports = loggerMiddleware;
