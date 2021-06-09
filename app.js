var express = require("express");
var app = express();
var rutasPersona = require("./routes/persona");

app.use(express.urlencoded());


app.use("/persona", rutasPersona)

app.get('/', (req, res) => {
    res.json({
        mensaje: "bienvenido"
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en: http://localhost:${port}`)
})