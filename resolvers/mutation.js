const Mutation = {
  createPost: (_, input, context) => {
    return context.dataSources.post.create(input);
  },
  addComment: (_, input, context) => {
    return context.dataSources.comment.create(input);
  },
};
module.exports = Mutation;
