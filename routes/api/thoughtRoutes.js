const router = require('express').Router();

// GET all thoughts
router.get('/', async (req, res) => {
    try {
      const users = [];
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // GET a single thought
router.get('/:id', async (req, res) => {
    try {

      const user = {};

      if (!user) {
        res.status(404).json({ message: 'No thought found with that id!' });
        return;
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;