module.exports = (app) => {

    app.get('/login', function (req, res) {
        res.render("auth/login.hbs")
    })

    app.get('/registro', function (req, res) {
        res.render("auth/registro.hbs")
    })

}