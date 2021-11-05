import express from "express";

import models from "../../db/models/index.js";

const { Class } = models;

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Class.findAll();
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Class.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Class.findByPk(req.params.id);
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Class.update(req.body, {
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
      const rowsCount = await Class.destroy({
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
