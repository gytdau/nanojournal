var express = require('express');
var router = express.Router();
import requireAuthentication from '../middleware';
import Models from '../../models';
import uuid from 'uuid/v4';
import moment from 'moment';

router.use(requireAuthentication)
// Create a new item.
router.post('/create', async function (req, res, next) {
  req.body.id = uuid()
  await Models.Entry.create(
    {
      id: req.body.id,
      text: req.body.text,
      action: req.body.action,
      userId: req.user.id
    }
  ).then((item) => {
    item = item.toJSON()
    res.json(item)
  })
});

// Delete a item.
router.post('/delete', async function (req, res, next) {
  Models.Entry.destroy({
    where: {
      id: req.body.id,
      userId: req.user.id
    }
  })
  res.sendStatus(200)
});

// Update a item.
router.post('/update', async function (req, res, next) {
  await Models.Entry.findById(req.body.id).then((item) => {
    item.update(
      {
        text: req.body.text
      }
    ).then((item) => res.json(item))
  })
});

// View a item.
router.post('/view', async function (req, res, next) {
  Models.Entry.findById(req.body.id).then((item) => res.json(item))
});

// Search for items.
router.post('/search',
  async function (req, res, next) {
    return Models.Entry.findAll({
      limit: 15,
      where: {
        text: {
          $like: '%' + req.body.text + '%'
        }
      }
    }).then((items) => res.json({ results: items }))
  });

// List past items.
router.get('/day/:date', async function (req, res, next) {
  let date = req.params.date
  date = moment(date)
  let startDate = date.startOf("day").toDate()
  let endDate = date.endOf("day").toDate()
  const query = {
    where: {
      createdAt: {
        $between: [startDate, endDate]
      },
      userId: req.user.id
    },
    order: [['createdAt', 'DESC']],
  };
  Models.Entry.findAll(query).then((items) => res.json(items))
});

module.exports = router;
