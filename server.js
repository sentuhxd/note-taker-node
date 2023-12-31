// DEPENDENCIES
const express = require("express");
const routes = require("./routes/index.js");

// DATA

// APP/PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// ROUTES
app.use(routes);


// START THE SERVER
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
