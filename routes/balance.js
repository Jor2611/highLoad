const express = require('express');
const router = express.Router();
const sequelize = require('../config');
const User = require('../models/user');
const { OptimisticLockError } = require('sequelize');

router.post('/update-balance', (req, res) => {
  const { userId, amount } = req.body;
  const maxRetries = process.env.DEADLOCK_RETRY || 5; // Maximum number of retries for optimistic locking

  const updateUserBalance = async (attempt = 1) => {
    const trx = await sequelize.transaction();

    try {
      const user = await User.findByPk(userId, { transaction: trx });

      if (!user) {
        await trx.rollback();
        return res.status(404).send('User not found');
      }

      if (user.balance - amount < 0) {
        await trx.rollback();
        console.log('Insufficient');
        return res.status(400).send('Insufficient balance');
      }

      user.balance -= amount;
      await user.save({ transaction: trx });
      await trx.commit();

      return res.status(200).json({ newBalance: user.balance });
    } catch (error) {
      await trx.rollback();

      if (error instanceof OptimisticLockError && attempt < maxRetries) {
        console.log(`Deadlock encountered, retrying ${attempt} of ${maxRetries}`);
        return updateUserBalance(attempt + 1);
      } else {
        return res.status(500).send('An error occurred, please try again later');
      }
    }
  };

  updateUserBalance();
});

module.exports = router;
