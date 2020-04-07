const db = require('../database/dbConfig');

const getMessages = () => {
  return db('messages');
};

const getMessageById = (id) => {
  return db('messages')
    .where({ id })
    .first()
    .then((message) => message);
};

const addMessage = (data) => {
  return db('messages')
    .insert(data, 'id')
    .then((ids) => {
      const [id] = ids;

      return getMessageById(id);
    });
};

const deleteMessage = (id) => {
  const deletedMessage = getMessageById(id);

  return db('messages')
    .where('id', id)
    .del()
    .then(() => {
      return deletedMessage;
    });
};

module.exports = {
  getMessages,
  getMessageById,
  addMessage,
  deleteMessage,
};
