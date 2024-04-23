const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 8080;
app.get("/", (req, res) => {
  res.send(JSON.stringify([{name:'h'}]));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
