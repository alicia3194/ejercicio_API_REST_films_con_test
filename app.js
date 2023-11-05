require("dotenv").config({
  path: "api.env",
});

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const filmsRouters = require("./routes/films");
app.use("/", filmsRouters);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
