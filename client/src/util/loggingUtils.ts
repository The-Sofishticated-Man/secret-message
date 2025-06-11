import log from "loglevel";

log.setLevel(process.env.NODE_ENV === "production" ? "silent" : "debug");


export default log ;