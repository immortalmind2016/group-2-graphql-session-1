const mongoose = require("mongoose");

const post = new mongoose.Schema(
  {
    title: String,
    text: String,
  },
  { timestamps: true }
);

module.exports.Post = mongoose.model("Post", post);
