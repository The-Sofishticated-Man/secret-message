import winston from "winston"
const logger = winston.createLogger({
    level: "debug",
    format: winston.format.simple(),
    exitOnError: false,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "../../logs/errors.log",level: "error" }),
    ],
});

export default logger