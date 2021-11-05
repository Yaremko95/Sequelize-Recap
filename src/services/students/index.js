import express from "express";

import models from "../../db/models/index.js";

const { Student } = models;

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Student.findAll();
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Student.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Student.findByPk(req.params.id);
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Student.update(req.body, {
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
      const rowsCount = await Student.destroy({
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
