import winston from "winston"
const loggingLevel = process.env.BACKEND_LOGGING_LEVEL || "debug";
const logger = winston.createLogger({
    level: loggingLevel,
    format: winston.format.simple(),
    exitOnError: false,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "../../logs/errors.log",level: "error" }),
    ]
});

export default logger