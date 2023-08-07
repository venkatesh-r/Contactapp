const {constants} = require("../constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    
    switch (statusCode) {
           case constants.NOT_FOUND:
            res.json({
                title: "Not found", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
            case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation not found", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
            case constants.FORBIDDEN:
            res.json({
                title: "forbidden error", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
            case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized error", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
            case constants.SERVERERROR:
            res.json({
                title: "Server error", 
                message: err.message, 
                stackTrace: err.stack
            });
        default:
            console.log("No Error, All good")
            break;
    }
};

module.exports = errorHandler;