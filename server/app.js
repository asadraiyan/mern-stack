const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
    origin: ["https://main--asad-mern-register.netlify.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.options("*", cors());

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());
app.use(cookieparser());

// we link the router files to make our route easy
const PORT = process.env.PORT;
app.use(require("./router/auth"));

app.get("/", (req, res) => {
  res.send("Hello world from the server app.js");
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
