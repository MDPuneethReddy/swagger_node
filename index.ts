import * as express from "express"
import * as cors from "cors"
import * as swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json';
const swaggerDocument=require("./swagger.json")
const app=express()
app.use(cors())
app.use('/api', swaggerUi.serve,   swaggerUi.setup(swaggerDocument));
app.listen(3000,()=>{
    console.log("listening at localhost:3000/api")
})