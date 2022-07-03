const { DataSource } = require("apollo-datasource");
const { Comment } = require("../model/comment.model");
class CommentDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }
  create(input) {
    return Comment.create(input);
  }
  async listByPostId(postId) {
    const comments = await Comment.find({ postId });
    console.log(
      "🚀 ~ file: comment.datasource.js ~ line 12 ~ CommentDataSource ~ listByPostId ~ comments",
      comments
    );
    return comments;
  }
}

module.exports = CommentDataSource;
