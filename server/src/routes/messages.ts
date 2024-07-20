import express, { Response, Request } from "express";
import authenticate from "../middleware/authentication";
import SMUser from "../utils/mongoAPIUtils";
const router = express.Router();

router.use(authenticate);

router.get("/", (req: Request, res: Response) => {
  SMUser.findById(req.user)
    .select("secretMessages")
    .then((messagesObject) => {
      res.status(200).json(messagesObject?.secretMessages);
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
});
export default router;
