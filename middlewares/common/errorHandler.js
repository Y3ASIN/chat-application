const createError = require('http-errors');

// 404 not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, 'Your request content was not found!'));
}

// default error handler
function errorHandler(err, req, res, next) {
    res.locals.error = process.env.NODE_ENV === 'development' ? err : { message: err.massage };

    res.status(err.status || 500);

    if (res.locals.html) {
        // html error
        res.render('error.cjs', {
            title: 'Error page',
        });
    } else {
        // json error
        res.json(res.locals.error);
    }
}

module.exports = {
    notFoundHandler,
    errorHandler,
};
