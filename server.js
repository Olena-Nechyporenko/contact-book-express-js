const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Olena:KYP0ytaN9luWQ2W5@cluster0.q0mnbbs.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => console.log("Database connection successful"));
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

// KYP0ytaN9luWQ2W5
