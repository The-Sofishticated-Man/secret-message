import express from "express";
import SMUser from "../utils/mongoAPIUtils";
import xss from "xss";
import logger from "../utils/loggingUtils";
const router = express.Router();

router.post("/:userId", (req, res) => {
  const userId = req.params?.userId;
  logger.info(`got request to userId: ${userId}`);
  const secretMessage = req.body.secretMessage;
  logger.info(`with a message of: ${secretMessage}`);
  const sanitizedMessage = xss(secretMessage);
  logger.info(`sanitized message: ${sanitizedMessage}`);
  if (!secretMessage) {
    // secret message doesn't exist or is empty
    logger.error(`secret message is undefined or empty`);
    return res
      .status(400)
      .json({ error: "you didn't send a secretMessage dipshit" });
  } else {
    SMUser.updateOne(
      { _id: userId },
      {
        $push: {
          secretMessages: { message: sanitizedMessage, date: new Date() },
        },
      }
    )
      .then((value) => {
        // message saved successfully
        logger.info(`updated user: ${JSON.stringify(value)}`);
        return res.json({ message: "secret meassage sent successfully" });
      })
      .catch((error) => {
        // message failed to save
        logger.error(`failed to update user: ${error}`);
        return res.status(500).json({ error });
      });
  }
});

export default router;
