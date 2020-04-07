const messageValidation = (req, res, next) => {
  const { message } = req.body;
  if (!message) {
    res.status(400).json({ message: 'Please include a message!' });
  } else {
    next();
  }
};

module.exports = messageValidation;
