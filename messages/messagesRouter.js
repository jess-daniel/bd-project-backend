const router = require('express').Router();

const Messages = require('./messagesModel');

// middleware
const messageValidation = require('../middlewares/messageValidation');
const apiLimit = require('../middlewares/rateLimit');

router.get('/', (req, res) => {
  Messages.getMessages()
    .then((messages) => {
      if (messages) {
        res.status(200).json(messages);
      } else {
        res.status(404).json({ message: 'No messages cuurently :/' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'server error', err });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Messages.getMessageById(id)
    .then((message) => {
      if (message) {
        res.status(200).json(message);
      } else {
        res.status(404).json({ message: 'No message by that id' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'server error', err });
    });
});

router.post('/', messageValidation, apiLimit, (req, res) => {
  const { body } = req;
  Messages.addMessage(body)
    .then((message) => {
      res.status(201).json(message);
    })
    .catch((err) => {
      res.status(500).json({ error: 'server error', err });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Messages.deleteMessage(id)
    .then((deletedMessage) => {
      if (deletedMessage) {
        res.status(200).json(deletedMessage);
      } else {
        res.status(404).json({ message: 'No message with specified id' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'server error', err });
    });
});

module.exports = router;
