require("dotenv").config();
const express = require("express");
const path = require("path");
const TeachableMachine = require("@sashido/teachablemachine-node");
const multer = require("multer");

//Modelos
const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/TPGc0GeBz/",
});

// PoseView

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//
const prefix = "/pose";
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".")[1];
    cb(null, `images/${file.originalname}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

app.get("/inicio", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "inicio.html"))
});
app.get("/wiki", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "wiki.html"))
});
app.get("/team", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "team.html"))
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "inicio.html"))
});

app.get("/formulario", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "formulario.html"));
});

app.get(`${prefix}/sentadilla`, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "sentadilla.html"));
})
app.get(`${prefix}/lagartija`, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "lagartija.html"));
})
app.get(`${prefix}/abdominal`, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "abdominal.html"));
})

app.post("/modelo", upload.single("file"), (req, res) => {
  console.log(req.file);
  const url_dir = "http://localhost:8080/images/" + req.file.originalname;
  console.log(url_dir);
  return model
    .classify({
      imageUrl: url_dir,
    })
    .then((predictions) => {
      console.log(predictions);
      return res.json(predictions);
    })
    .catch((e) => {
      console.error(e);
      res.status(500).send("Something went wrong!");
    });
  //res.json({})
});

app.get("/image/classify", async (req, res) => {
  const { url } = req.query;
  return model
    .classify({
      imageUrl: url,
    })
    .then((predictions) => {
      console.log(predictions);
      return res.json(predictions);
    })
    .catch((e) => {
      console.error(e);
      res.status(500).send("Something went wrong!");
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("En l??nea running on port:", port));
