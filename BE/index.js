import express from "express";
// Morgan used for HTTP request
import morgan from "morgan";
// Make requests from an external server and prevent blocking by CORS
import cors from "cors";

global.__basedir = __dirname;

const app = express();

// Models
const db = require("./models/main");

// For production
db.sequelize.sync();

//For development
// db.sequelize.sync({
//   force: true
// }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes imports
require("./routes/favourite.routes")(app);

// Port assign

app.set("port", process.env.PORT || 5500);
app.listen(app.get("port"), () => {
  console.log("localhost" + app.get("port"));
});
