// const express  = require('express');

// var {graphqlHTTP} = require('express-graphql')
// const schema =  require('./schema/schema')

// const app =  express();

// app.use("/graphql", graphqlHTTP({
//     graphiql: true,
//     // schema: testSchema
//     schema: schema
// }))

// app.listen(4000, ()=> { //localhost:4000
//  console.log('Listening for requests on my awesome port 4000');
//     })

const express  = require('express');
var {graphqlHTTP} = require('express-graphql')

const schema =  require('./server/schema/schema')
const testSchema = require('./server/schema/types_schema')
const mongoose =  require('mongoose')

const app =  express();

//mongodb+srv://zakwankollect:sonnaeun21@graphqlcluster.jtq7vvl.mongodb.net/?retryWrites=true&w=majority

const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());
app.use("/graphql", graphqlHTTP({
    graphiql: true,
    // schema: testSchema
    schema: schema
}))

//mongoose.connect(`mongodb+srv://zakwankollect:sonnaeun21@graphqlcluster.jtq7vvl.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority

//mongoose.connect(`mongodb+srv://zakwankollect:sonnaeun21@graphqlcluster.jtq7vvl.mongodb.net/graphqlcluster?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@graphqlcluster.jtq7vvl.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority
`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen({ port: port }, () => {
      console.log(process.env.mongoUserName);
      //localhost:4000
      console.log("Listening for requests on my awesome port " + port);
    });
  })
  .catch((e) => {
    console.log(process.env.mongoUserName);
    return console.log("Error:::" + e);
  });

// app.listen(4000, ()=> { //localhost:4000
//  console.log('Listening for requests on my awesome port 4000');
//     })