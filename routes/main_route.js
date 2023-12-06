const checkRoute = require('./check_route');
const traceabilityRoute = require('./traceability_route');

module.exports = function (app) {
    app.use('/check', checkRoute);
    app.use('/trace', traceabilityRoute);
}
