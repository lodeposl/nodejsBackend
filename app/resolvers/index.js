
const resolvers = {
  Query: {
    bop: async (root, args, context) => {
      return args.name=="name";
    },

  }
}
export default resolvers;