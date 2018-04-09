import { createApolloServer} from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
  user: User
}
`
// this comment is to get around a wierd update bug
const typeDefs = [
  testSchema,
  ResolutionsSchema,
  UsersSchema
];

const resolver = {
  Query: {
    hi() {
      return 'Hello Level Up'
    },
  }
}

const resolvers = merge(
  resolver,
  ResolutionsResolvers,
  UsersResolvers
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });