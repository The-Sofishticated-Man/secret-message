import express, { Response, Request } from "express";
import authenticate from "../middleware/authentication";
import SMUser from "../utils/mongoAPIUtils";
import logger from "../utils/loggingUtils";
const router = express.Router();

// authenticate user
router.use(authenticate);

router.get("/", (req: Request, res: Response) => {
  logger.info("got messages request");
  SMUser.findById(req.user)
    .select({ secretMessages: 1, _id: 0 })
    .then((messages) => {
      // user found and messages sent
      logger.info("sending messages", messages);
      res.status(200).json(messages);
    })
    .catch((err) => {
      // either user not found or there was an error
      logger.error("error getting messages from database", err);
      res.status(404).json({ error: err });
    });
});

router.delete("/:id", (req: Request, res: Response) => {
  const messageID = req.params.id;
  logger.info("got delete request with param of: " + messageID);
  SMUser.updateOne(
    { _id: req.user },
    { $pull: { secretMessages: { _id: messageID } } }
  )
    .then((message) => {
      logger.info("deleted message: ", message);
      res.status(200).json({ message: "message deleted successfully" });
    })
    .catch((err) => {
      // either message not found or there was an error
      logger.error("error deleting message from database", err);
      res.status(500).json({ error: err });
    });
});
export default router;

