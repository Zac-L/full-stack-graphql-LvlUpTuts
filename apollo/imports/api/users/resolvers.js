
export default {
  Query: {
    user(obj, args, {user}) {
      return user || {};
      }
    },
    User: {
      email: ({ emails }) => emails[0].address
    }
  };