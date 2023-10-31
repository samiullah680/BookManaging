const Router = require("express");
const BookModel = require("../Models/BookModel/AllBookModel");
const { log } = require("console");
const AddNewBookController = async (req, res) => {
  try {
    let post = await BookModel.create({ ...req.body, user_id: req.user.id });
    console.log("Post:",post,req.body);
    res.status(200).json({
      success: true,
      status: 200,
      data: post,
      message: "New Book Added Successfull",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      status: 400,
      message: err.message,
    });
  }
};
const UpdateBookDetailsController = async (req, res) => {
  const editData = {
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    price: req.body.price,
  };
  try {
    let post = await BookModel.findByIdAndUpdate(req.body.id, editData, {
      new: true,
    });
    if (post) {
      res.status(200).json({
        success: true,
        status: 200,
        message: " Successfull updated",
      });
    } else {
      res.status(400).json({
        success: false,
        status: 400,
        message: "No Book found",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      status: 400,
      message: err.message,
    });
  }
};

const DeleteBookController = async (req, res) => {
  try {
    let deleteProduct = await BookModel.findByIdAndRemove(req.body.id);
    if (deleteProduct) {
      res.status(200).json({
        success: true,
        status: 200,
        message: "Book  deleted successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        status: 400,
        message: "No Book found",
      });

    }
  } catch (err) {
    res.status(400).json({
      success: false,
      status: 400,
      message: err.message,
    });
  }
};

const ViewAllBookController = async (req, res) => {

  let count = req.body.count;
  let activePage = req.body.activePage - 1;
  try {
    const filter = {
      user_id: req.user.id,
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      price: req.body.price,
    };
    const filterQuery = Object.entries(filter).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    if (req.body.search != undefined && req.body.search != "") {
      filterQuery.$or = [
        { title: { "$regex": req.body.search, "$options": "i" } },
        { brand: { "$regex": req.body.search, "$options": "i" } },
      ];
    }
    let TotleCount = await BookModel.count(filterQuery);
    const product = await BookModel.find(filterQuery)
      .limit(count)
      .skip(count * activePage);

    res.status(200).json({
      success: true,
      status: 200,
      data: product,
      TotleCount,
      message: "all Book View",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      status: 400,
      message: err.message,
    });
  }
};

const ViewBookByIdController = async (req, res) => {
  try {
    let singleBook = await BookModel.findOne({
      _id: req.body.id,
    });
    if (singleBook) {
      res.status(200).json({
        success: true,
        status: 200,
        data: singleBook,
        message: "  successfully view book by id",
      });
    } else {
      res.status(400).json({
        success: false,
        status: 400,
        message: "No book found",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      status: 400,
      message: err.message,
    });
  }
};

module.exports = {
    AddNewBookController,
    UpdateBookDetailsController,
    DeleteBookController,
    ViewAllBookController,
    ViewBookByIdController,
};