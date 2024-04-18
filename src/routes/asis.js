const ctl_asis = require("../controllers/ctl_asis");
const {isAuth,notAuth} = require("../helpers/auth")

module.exports = (app) => {

    app.get('/asistencia', isAuth, ctl_asis.asistencia);
    app.post('/asistencia', isAuth, ctl_asis.asistencia);

}