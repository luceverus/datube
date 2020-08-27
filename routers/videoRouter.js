import express from "express";
import routes from "../routes";
import {
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
const videoRouter = express.Router();

// Video Edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
// Video Delete
videoRouter.get(routes.deleteVideo(), deleteVideo);
// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
