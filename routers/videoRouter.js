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
import { uploadVideo, onlyPrivate } from "../middlewares";
const videoRouter = express.Router();

// Video Edit
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
// Video Delete
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
