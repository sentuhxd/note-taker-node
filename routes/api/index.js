const router = require("express").Router();

// route collections go here
const noteRoutes = require('./noteRoutes')

router.use(noteRoutes);

module.exports = router;
