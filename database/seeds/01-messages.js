exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: 1,
          name: 'Brad',
          date: '04-08-2020',
          message: 'Hello from 1, this is a test message!',
        },
        {
          id: 2,
          name: 'Tom',
          date: '04-08-2020',
          message: 'Hello from 2, this is a test message!',
        },
        {
          id: 3,
          name: 'James',
          date: '04-08-2020',
          message: 'Hello from 3, this is a test message!',
        },
      ]);
    });
};
