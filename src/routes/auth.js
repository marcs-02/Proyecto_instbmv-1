const ctl_auth = require("../controllers/ctl_auth");

module.exports = (app) => {

    app.get('/login', ctl_auth.login);
    app.post('/login', ctl_auth.ingresar);

    app.get('/salir',ctl_auth.salir);

    app.get('/registro', ctl_auth.registro);
    app.post("/registro", ctl_auth.guardar);

}