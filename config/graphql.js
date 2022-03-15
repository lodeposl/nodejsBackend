import { ApolloServer, gql } from 'apollo-server-express'
import jwt from "jsonwebtoken"
import _ from "lodash"

import schemas from "../app/schemas/index.js"
import resolvers from "../app/resolvers/index.js"

//import resolvers


async function startApolloServer(app) {

    //schemas
    //const userTypeDefs = gql`${userSchema}`;
    //const userAdminTypeDefs = gql`${userSchema_Admin}`;
    
    //resolvers
    //const resolvers = _.merge({}, userResolvers,userResolvers_Admin)

    const server = new ApolloServer({
        typeDefs:[gql`${schemas}`],
        resolvers:resolvers,/*
        context: async ({ req }) => {
            const token = req.headers.authorization || '';
            let user;
            if (token !== '') {
                let decoded = jwt.verify(token, process.env.JWTkey);
                let user = await userModel.findById(decoded.id)
                return { user }
            }
            return { user };
        },*/
    });
    await server.start()
    server.applyMiddleware({ app, path: "/graphql" });
}
export default startApolloServer