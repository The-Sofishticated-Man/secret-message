import express from "express";
const router = express.Router();
import SMUser from "../utils/mongoAPIUtils";
import logger from "../utils/loggingUtils";

// GET /users/:userID
router.get("/:userID", (req, res) => {
  const userID = req.params.userID;
  logger.info(`got username fetch request with param of: ${userID}`);
  if (!userID) {
    logger.warn("userId is undefined/null");
    res.status(400).json({ error: "you sent a bad request dingus" });
  } else {
    SMUser.findById(userID)
      .select("username")
      .then((username) => {
        logger.info(`sending username: ${username}`);
        res.status(200).json(username);
      })
      .catch((err) => {
        logger.error("could not get username from database", err);
        res.status(404).json({ error: err });
      });
  }
});

export default router;
