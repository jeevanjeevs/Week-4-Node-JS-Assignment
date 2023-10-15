const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const config = require("./config.json");

app.set("view engine", "pug"); 

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("homepage.pug");
});


app.post("/", (req, res) => {
  const { title, firstName, lastName, power, city } = req.body;

  
  let heroes = [];
  try {
    const heroesData = fs.readFileSync("heroes.json");
    heroes = JSON.parse(heroesData);
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }

  
  heroes.push({ title, firstName, lastName, power, city });

  
  fs.writeFileSync("heroes.json", JSON.stringify(heroes, null, 2));


  res.redirect("/heroes");
});


app.get("/heroes", (req, res) => {
  let heroes = [];

 
  try {
    const heroesData = fs.readFileSync("heroes.json");
    heroes = JSON.parse(heroesData);
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }

  res.render("homepage.pug", { heroes });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
