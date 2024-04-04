const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;

app.use(cors());

//routes
const validateRouter = require("./routes/validation");
app.use("/", validateRouter);
app.listen(port, () => {
  console.log(`the server is running at port ${port}`);
});
