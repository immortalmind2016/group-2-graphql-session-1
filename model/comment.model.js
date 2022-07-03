const mongoose = require("mongoose");

const comment = new mongoose.Schema(
  {
    content: String,
    postId: String,
  },
  { timestamps: true }
);

module.exports.Comment = mongoose.model("Comment", comment);
