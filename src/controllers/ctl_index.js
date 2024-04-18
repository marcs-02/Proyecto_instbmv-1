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


module.exports = ctrl;