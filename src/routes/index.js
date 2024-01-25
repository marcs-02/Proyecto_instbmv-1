
module.exports = (app) => {
    
    app.get('/', function (req, res) {
        res.render("index.hbs")
    })

    app.get('/about', function (req, res) {
        res.render("about.hbs")
    })

}

