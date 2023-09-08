const expresss = require("express");
const cors = require("cors");

const app = expresss();


var corsOptions = {
    origin : "http://localhost:8081"
};


app.use(cors (corsOptions));

app.use(expresss.json());

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
    res.json({ message: "Bem vindo ao meu eccomerce." });
  });


const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});