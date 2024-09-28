// Import Express
const express = require('express');
const dotenv = require('dotenv');
// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');
const bodyParser = require('body-parser');

dotenv.config()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to mongodb successfully")
}).catch((error) =>{
    console.log('Error',error)
})

// Define a port
const port = 3000;

// const homeMiddleware = ((req, res, next)=>{
//     if (10>20){
//         next()
//     } else {
//         res.send('Route not allowed')
//     }
// })

app.use('/employees',employeeRoutes)



// app.get('/about', (req, res) => {
//     res.send('Hello, This is about page!');
// });

// app.get('/home', homeMiddleware, (req, res) => {
//     res.send('Hello, This is home page!');
// });

// // Define a simple route
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//mongodb+srv://saritha:<db_password>@cluster0.pv692.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0