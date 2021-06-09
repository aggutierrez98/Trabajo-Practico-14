const { Router } = require("express");
const router = Router();
var personaController = require("./controllers/personaController");

router.post("/", function(req, res) {

    const { nombre, apellido, nickname, edad, email } = req.body
    try {
        if (!nombre || !apellido || !nickname || !edad || !email) {
            throw "Error en los parametros requeridos";
        }

        var persona = {
            nombre,
            apellido,
            nickname,
            edad,
            email
        }

        var personaNueva = personaController.guardarUnaPersona(persona);

        res.send(`La persona se creo satisfactoriamente, su id asignado es: ${personaNueva.id}`);

    } catch (error) {
        console.log(error);
        res.sendStatus(422).send("Se produjo el siguiente error: ", error);
    }

});

router.get("/", function(req, res) {

    try {

        var listadoPersonas = personaController.listarPersonas();

        res.send(`Las personas son: ${listadoPersonas}`);

    } catch (error) {
        console.log(error);
        res.sendStatus(422).send("Se produjo el siguiente error: ", error);
    }

});

router.get('/:id', function(req, res) {

    try {

        var personaBuscada = personaController.traerUnaPersona(persona);

        res.send(`La persona buscada: ${personaBuscada}`);

    } catch (error) {
        console.log(error);
        res.sendStatus(422).send("Se produjo el siguiente error: ", error);
    }

});

router.delete('/:id', function(req, res) {

    try {
        personaController.borrarPersona(id);

        res.send("La persona se borro satisfactoriamente");

    } catch (error) {
        console.log(error);
        res.sendStatus(422).send("Se produjo el siguiente error: ", error);
    }

});

router.put('/:id', function(req, res) {

    const { edad, email } = req.body
    try {
        if (!edad || !email) {
            throw "Error en los parametros requeridos";
        }
        var personaNueva = personaController.modificarPersona(id, edad, mail);

        res.send(`La persona se modifico satisfactoriamente, su id asignado es: ${personaNueva.id}`);

    } catch (error) {
        console.log(error);
        res.sendStatus(422).send("Se produjo el siguiente error: ", error);
    }

});

module.exports = router;