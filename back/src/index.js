const express = require("express");
const app = express();

const clienteRoutes = require('./routes/cliente');

//middleware
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(function(req, res, next){
      /* Acceso a conexiones que requieran esta applicacion */
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "*");
      //res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
      res.header("Access-Control-Allow-Headers", "*");
      //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      next();
});

//create use
app.use(clienteRoutes);


//ROUTES//

app.listen(5000, ()=> {
      console.log("server has started on port 5000")
});