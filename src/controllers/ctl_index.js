
const User = require("../models/user");
const ctrl = {};

ctrl.inicio = (req,res)=>{
    res.render("index.hbs", {session: req.session})
};


ctrl.principal = async (req, res) => {
    const user = await User.findOne({ "_id": req.session._id }).select("-password");

    res.render("principal.hbs", { session: req.session, user });
};

ctrl.about = (req,res)=>{
    res.render("about.hbs", {session: req.session})
};


const User = require("../models/user");
const Notas = require("../models/nota");
const ctrl = {};

ctrl.inicio = async (req,res)=>{

    res.render("index.hbs", {session: req.session})
};

ctrl.principal = async (req,res)=>{

    var users = []

    const user = await User.findOne({"_id":req.session._id}).select("-password");

    if(req.session.rol == "Administrador"){
        users = await User.find({"_id": { $nin: req.session._id}}).select("-password")
    }

    var notas = await Notas.find({"user":user._id});

    res.render("principal.hbs", {session: req.session,users, user, notas, ubicacion:req.path})
};

ctrl.about = (req,res)=>{
    res.render("about.hbs", {session: req.session, ubicacion:req.path})
};

module.exports = ctrl;