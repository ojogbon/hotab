const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const multer = require("multer");

const staffroutes = require("./route/staffRoute");
const serviceRoute = require("./route/serviceRoute");
const productRoute = require("./route/productRoute");
const userRoute = require("./route/userRoute");
const licenseRoute = require("./route/licenseRoute");
const blogRoute = require("./route/blogRoute");
const aboutUsRoute = require("./route/aboutUsRoute");
const commentRoute = require("./route/commentRoute");
const adminRoute = require("./route/adminRoute");
const contactUsRoute = require("./route/contactUsRoute");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());

// app.use('/', (req, res) => {
//     res.send("hello world");
// });

// console.log(process.env)

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "public", "sb-admin")));

// create the storage location for multer
const multerstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assest/home/img");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const name = file.originalname.split(".")[0];
    cb(null, `${name}-${Date.now()}.${ext}`);
  }
});
// filters for only files that is an image
const multerfilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// multer middleware for every request
app.use(
  multer({
    storage: multerstorage,
    fileFilter: multerfilter
  }).single("image")
);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/aboutus.html", (req, res) => {
  res.render("aboutus");
});

app.get("/blog.html", (req, res) => {
  res.render("blog");
});

app.get("/services.html", (req, res) => {
  res.render("services");
});
app.get("/contactus.html", (req, res) => {
  res.render("contactus");
});

app.get("/product.html", (req, res) => {
  res.render("product");
});

app.use(adminRoute);
app.use(serviceRoute);
app.use(blogRoute);
app.use(aboutUsRoute);
app.use(contactUsRoute);
app.use("/api/v1", staffroutes);
app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", licenseRoute);

app.use("/api/v1", commentRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/hotlab", { useNewUrlParser: true })
  .then(() => {
    console.log("Database connection successfull");
  });

app.listen(3000, () => {
  console.log("app started on port 3000");
});
