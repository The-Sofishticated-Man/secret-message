import express, { Response, Request } from "express";
import authenticate from "../middleware/authentication";
import SMUser from "../utils/mongoAPIUtils";
import argon2 from "argon2";
const router = express.Router();

router.use(authenticate);
router.get("/", (req: Request, res: Response) => {
  console.log("got messages request");
  SMUser.findById(req.user)
    .select({ secretMessages: 1, _id: 0 })
    .then((messages) => {
      console.log("sending messages", messages);
      res.status(200).json(messages);
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
});

router.delete("/:id", (req: Request, res: Response) => {
  const messageID = req.params.id;
  console.log("got delete request with param of: " + messageID);
  SMUser.updateOne(
    { _id: req.user },
    { $pull: { secretMessages: { _id: messageID } } }
  )
    .then((message) => {
      console.log("deleted message: ", message);
      res.status(200).json({ message: "message deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});
export default router;
