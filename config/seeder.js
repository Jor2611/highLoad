const { Umzug, SequelizeStorage } = require('umzug');
const sequelize = require('./');

const seeder = new Umzug({
  migrations: { glob: ['../seeders/*.js', { cwd: __dirname }] },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

module.exports = seeder;
