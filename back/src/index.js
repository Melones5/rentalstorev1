const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

const clienteRoutes = require('./routes/cliente');

//middleware
app.use(cors());
app.use(express.json());

//create use
app.use(clienteRoutes);


//ROUTES//

app.listen(5000, ()=> {
      console.log("server has started on port 5000")
});