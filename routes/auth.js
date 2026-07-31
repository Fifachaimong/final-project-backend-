import express from "express";
import { ApplyResume, EditMyProfile, GetMyApplicationResult, GetMyProfile, GetPost, Login, Register } from "../controller/auth.js";
import schema from "../schema/auth.js";
import { ValidateBody } from "../middleware/validate.js";
import upload from "../middleware/upload.js";
import authMiddleware from "../middleware/authMiddleware.js";

const routes = express.Router()

routes.post('/register', ValidateBody(schema), Register)
routes.post('/login', Login)
routes.put('/profile', authMiddleware, EditMyProfile)
routes.get('/posts', GetPost)
routes.get('/profile', authMiddleware, GetMyProfile)
routes.get('/result', authMiddleware, GetMyApplicationResult)
routes.post("/apply/:postId", authMiddleware,
  upload.fields([
    {
      name: "resume",
      maxCount: 1,
    },
    {
      name: "transcript",
      maxCount: 1,
    },
  ]),
  ApplyResume
);

export default routes