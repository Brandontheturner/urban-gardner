const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const UserRoutes = require("./express/routes/users");
const VegetableRoutes = require("./express/routes/vegetables");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-1ldg7.mongodb.net/UrbanGardner?retryWrites=true"
);

const port = process.env.PORT || 4001;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", UserRoutes);
app.use("/vegetables", VegetableRoutes);

app.get("/", (req, res) => res.send("Default route!"));

app.listen(port, () => {
  console.log(`Express app running on localhost:${port}`);
});
