const status = {
    200: "Done",
    201: "Created",
    404: "Not found",
    500: "Error server"
}

const success = (req, res, statusCode, msg, data) => {
    res.status(statusCode).json({
        ok: true,
        message: msg,
        statusMessage: status[statusCode],
        data
    })
}

const error = (req, res, statusCode, msg, data) => {
    res.status(statusCode).json({
        ok: false,
        message: msg,
        statusMessage: status[statusCode],
        data
    })
}

module.exports = {
    success,
    error
}