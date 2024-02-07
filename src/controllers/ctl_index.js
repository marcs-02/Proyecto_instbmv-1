const ctrl = {};

ctrl.inicio = (req,res)=>{
    res.render("index.hbs")
};

ctrl.about = (req,res)=>{
    res.render("about.hbs")
};

module.exports = ctrl;