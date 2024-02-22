const User = require("../models/user");
const Notas = require("../models/nota");
const ctrl = {};

ctrl.inicio = (req,res)=>{
    res.render("index.hbs", {session: req.session})
};

ctrl.principal = async (req,res)=>{

    const user = await User.findOne({"_id":req.session._id}).select("-password");

    var notas = await Notas.find({"user":user._id});

    res.render("principal.hbs", {session: req.session, user, notas})
};

ctrl.about = (req,res)=>{
    res.render("about.hbs", {session: req.session})
};

module.exports = ctrl;