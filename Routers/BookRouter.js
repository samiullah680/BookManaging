const Router = require("express").Router();
const Auth = require("../Middlewares/AuthMiddleware");
const {
    AddNewBookController,
    UpdateBookDetailsController,
    DeleteBookController,
    ViewBookByIdController,
    ViewAllBookController,
  } = require("../Controllers/BookController");
  Router.route("/AddNewBook").post(Auth, AddNewBookController);
  Router.route("/UpdateBookDetails").post(Auth, UpdateBookDetailsController);
  Router.route("/DeleteBook").post(Auth, DeleteBookController);
  Router.route("/ViewBookById").post(Auth, ViewBookByIdController);
  Router.route("/ViewAllBook").post(Auth, ViewAllBookController);
module.exports = Router;