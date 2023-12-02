const migrate = require('./migration');
const seeder = require('./seeder');

async function setupDatabase() {
  try {
    await migrate.up();
    console.log('Migrations executed successfully');
    await seeder.up();
    console.log('Seeders executed successfully');
  } catch (error) {
    console.error('Error during migrations or seeders:', error);
    throw error;
  }
}

module.exports = setupDatabase;
