const Post = {
  id: (parent) => {
    return parent._id;
  },

  comments: (parent, args, context) => {
    const postId = parent._id;
    return context.dataSources.comment.listByPostId(postId);
  },
};

module.exports = Post;
