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
  Router.route("/UpdateBookDetails").put(Auth, UpdateBookDetailsController);
  Router.route("/DeleteBook").delete(Auth, DeleteBookController);
  Router.route("/ViewBookById").post(Auth, ViewBookByIdController);
  Router.route("/ViewAllBook").post(Auth, ViewAllBookController);
module.exports = Router;