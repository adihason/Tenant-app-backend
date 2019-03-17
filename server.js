const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const homePageRouter = require("./routes/homePage");
const tenantsRouter = require("./routes/tenants");
const usersRouter = require("./routes/users");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join("../frontend")));


app.use("/", homePageRouter);
app.use("/tenants", tenantsRouter);
app.use("/users", usersRouter);

mongoose.connect('mongodb://localhost:27017/TanentsApp', {useNewUrlParser: true})
.then(result => {
    app.listen(3000, () => {
        console.log('app is running on port 3000');
    });
})
.catch(err => {
    console.log(err);
});


module.exports = app;