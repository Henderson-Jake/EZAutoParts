const express = require("express");
const app = express();
app.use(express.json());

const db = require('./models');

// Routers
const usersRouter = require('./routes/Users');
app.use("/users", usersRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on 3001\n")
    }); 
});