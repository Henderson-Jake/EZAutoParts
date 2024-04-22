const express = require("express");
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());
const db = require('./models');

// Routers
const usersRouter = require('./routes/Users');
app.use("/users", usersRouter);

 const productsRouter = require('./routes/products');
 app.use("/products", productsRouter);

 const categoriesRouter = require('./routes/categories');
 app.use("/categories", categoriesRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on 3001\n")
    }); 
});