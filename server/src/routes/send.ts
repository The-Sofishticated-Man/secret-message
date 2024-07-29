import express from "express";
import SMUser from "../utils/mongoAPIUtils";
import xss from "xss";
const router = express.Router();

router.post("/:userId", (req, res) => {
  const userId = req.params?.userId;
  console.log("got request to userId: ", userId);
  const secretMessage = req.body.secretMessage;
  console.log("with a message of: ", secretMessage);
  const sanitizedMessage = xss(secretMessage);
  console.log("sanitized message: ", sanitizedMessage);
  if (!secretMessage) {
    res.status(400).json({ error: "you didn't send a secretMessage dumbfuck" });
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
        console.log("updated user: ", value);
        res.json({ message: "secret meassage sent successfully" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error });
      });
  }
});

export default router;
