const User = require("../models/user");
const ctrl = {};

ctrl.login = (req,res) =>{
    res.render("auth/login.hbs");
};

ctrl.registro = (req,res) =>{
    res.render("auth/registro.hbs");
}

ctrl.guardar = (req,res) =>{

    const {name, email, password, confirm_password} = req.body;

    if(name != "" && email != "" && password != "" && confirm_password != ""){

        if(password == confirm_password){

            const usuario = new User({
                name,
                email,
                password,
            });
            
            usuario.save();

        }

    }

}

module.exports = ctrl;