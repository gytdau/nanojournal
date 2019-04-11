var express = require('express');
var router = express.Router();
import requireAuthentication from '../middleware';
import Models from '../../models';
import uuid from 'uuid/v4';

// Create a new item.
router.post('/create', requireAuthentication, async function (req, res, next) {
  req.body.id = "item-" + uuid()
  await Models.Item.create(
    {
      id: req.body.id,
      text: req.body.text,
      action: req.body.action
    }
  ).then((item) => {
    item = item.toJSON()
    res.json(item)
  })
});

// Delete a item.
router.post('/delete', requireAuthentication, async function (req, res, next) {
  Models.Item.destroy({
    where: {
      id: req.body.id
    }
  })
  res.sendStatus(200)
});

// Update a item.
router.post('/update', requireAuthentication, async function (req, res, next) {
  await Models.Item.findById(req.body.id).then((item) => {
    item.update(
      {
        text: req.body.text
      }
    ).then((item) => res.json(item))
  })
});

// View a item.
router.post('/view', async function (req, res, next) {
  Models.Item.findById(req.body.id).then((item) => res.json(item))
});

// Search for items.
router.post('/search',
  async function (req, res, next) {
    return Models.Item.findAll({
      limit: 15,
      where: {
        text: {
          $like: '%' + req.body.text + '%'
        }
      }
    }).then((items) => res.json({ results: items }))
  });

// List past items.
router.get('/list', async function (req, res, next) {
  Models.Item.findAll({ limit: 10, order: [['createdAt', 'DESC']] }).then((items) => res.json(items))
});

module.exports = router;
