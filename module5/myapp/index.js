
const express = require("express");
const routes = require("./routes/myapproutes");
const calculationRoute = require("./routes/calculatorRoutes");
const app = express();
const port = 3000;

// Middleware
app.use('/', express.static("public")); // serve static files like index.html, CSS, images
app.use('/myapp', routes); // custom routes from another file
app.use('/Calculate', calculationRoute)

// Your own routes
app.get("/home", (req, res) => {
    res.send('Hello world, welcome to our backend');
});

app.get("/contact", (req, res) => {
    res.send("please contact 02111111");
});

app.get("/about", (req, res) => {
    res.send("we are Academy school");
});

// Start server
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});


