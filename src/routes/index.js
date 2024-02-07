
const ctl_index = require("../controllers/ctl_index");

module.exports = (app) => {
    
    app.get('/',ctl_index.inicio);

    app.get('/about', ctl_index.about);

}

