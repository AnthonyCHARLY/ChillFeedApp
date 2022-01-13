const express = require('express');

const bodyParser = require('body-parser');

const connectDB = require("./config/db")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.use(express.static(process.cwd()+"../../frontend/chillFeedNutrition/dist/"));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 

connectDB();

const routes = require("./routes/index");

app.use('/api',routes);



const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'chill feed  REST API',
            description: "A REST API built with Express and MongoDB.",
            version: '0.1',
        },
        servers: [
            {
                url: 'http://localhost:5000/api',
                description: 'Development server',
            },
        ],
    },
    apis: ["./src/routes/*.js"],
}

const openapiSpecification = swaggerJsDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));




app.listen(process.env.PORT || 5000, () => console.log('Up and running 🚀'));