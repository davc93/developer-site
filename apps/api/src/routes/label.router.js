const express = require("express");
const {LabelService} = require('../services/label.service');
const { checkAuth } = require("../middlewares/auth.jwt");
const { validatorHandler } = require("../middlewares/validator.handler");
const { createLabelDto, updateLabelDto } = require("../dtos/label.dto");


const router = express.Router()
const service = new LabelService()
router.get('/', async (req, res, next) => {
  try {
    const {query} = req
    const labels = await service.findAll(query);
    res.json(labels);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const label = await service.findOne(id);
      res.json(label);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',checkAuth,
  validatorHandler(createLabelDto,'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newLabel = await service.create(body);
      res.status(201).json(newLabel);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',checkAuth,
validatorHandler(updateLabelDto,'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const label = await service.update(id, body);
      res.json(label);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', checkAuth,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports =  router