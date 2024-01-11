
module.exports = (app) => {
    
    app.get('/', function (req, res) {
        res.render("index.hbs")
    })

    app.get('/login', function (req, res) {
        res.render("login.hbs")
    })

}

