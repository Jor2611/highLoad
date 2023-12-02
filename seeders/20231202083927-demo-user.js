module.exports = {
  up: async ({ context: queryInterface }) => {
    return queryInterface.bulkInsert('users', [{
      balance: 10000,
      version: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async ({ context: queryInterface }) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};