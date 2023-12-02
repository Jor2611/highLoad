const express = require('express');
require('dotenv').config();
const setupDatabase = require('./config/setupDatabase');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', require('./routes/balance'));

async function startServer() {
  try {
    await setupDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();