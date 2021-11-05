import express from "express";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import models from "../../db/models/index.js";
import multer from "multer";

const { Teacher } = models;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "tutors",
  },
});

const parser = multer({ storage: storage });

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Teacher.findAll();
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Teacher.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });

router.post(
  "/:tutorId/image",
  parser.single("picture"),
  async (req, res, next) => {
    try {
      const image = req.file.path;
      console.log({ image });
      const result = await Teacher.update(
        { image },
        { where: { id: req.params.tutorId }, returning: true }
      );
      res.send({ result });
    } catch (error) {
      console.log(error);
    }
  }
);

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Teacher.findByPk(req.params.id);
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Teacher.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rowsCount = await Teacher.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send(rowsCount);
    } catch (error) {
      console.log(error);
    }
  });

export default router;
