const Query = {
  posts: (_, args, context) => {
    return context.dataSources.post.list();
  },
  comments: (_, { postId }, context) => {
    return context.dataSources.comments.listByPostId(postId);
  },
};
module.exports = Query;
