const express= require("express");
const app= express();
const path= require("path");
const hbs= require("hbs");
const port= 8000;
const staticpath= path.join(__dirname, "../public");
const templatepath= path.join(__dirname, "../templates/views");
const partialspath= path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", templatepath);
app.use(express.static(staticpath));
hbs.registerPartials(partialspath);
app.get("/", (req, res)=>{
    res.render("index");
})
app.get("/about", (req, res)=>{
    res.render("about");
})
app.get("/weather", (req, res)=>{
    res.render("weather");
})
app.get("*", (req, res)=>{
    res.render("404", {
        errormsg: "Oops!! Page not found..."
    });
})
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})