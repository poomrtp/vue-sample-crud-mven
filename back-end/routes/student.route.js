const express = require("express");
const studentRoute = express.Router;

// student model
let StudentModel = require("../models/Student");

// get all student data
studentRoute.route("/").get((req, res, next) => {
  StudentModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Create student data
studentRoute.route("/create-student").post((req, res, next) => {
  StudentModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
