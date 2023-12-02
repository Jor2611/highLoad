const { Umzug, SequelizeStorage } = require('umzug');
const sequelize = require('./');

const migration = new Umzug({
	migrations: { glob: ['../migrations/*.js', { cwd: __dirname }] },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

module.exports = migration;
