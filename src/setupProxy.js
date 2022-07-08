const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        [
            '/api',
            '/logout',
            '/login',
            '/private',
            '/oauth2/authorization/keycloak',
            '/login/oauth2/code/keycloak',
            '/token',
            '/business',
            '/api/user'
        ],
        createProxyMiddleware({
            target: 'http://localhost:8090',
            changeOrigin: true,
            xfwd: true,
        })
    );
};
