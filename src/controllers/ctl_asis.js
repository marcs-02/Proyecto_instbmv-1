const Asistencia = require('../models/asistencia');
const User = require('../models/user');
const ctrl = {};


ctrl.asistencia = async (req, res) => {
    const user = await User.findOne({ "_id": req.session._id }).select("-password");
    const userId = req.session._id;
    if (!userId) {
        return res.status(401).json({ message: 'Usuario no autenticado' });
    }
    const usuario = await User.findById(userId);
    if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    const asistencia = new Asistencia({
        user: userId,
        nombre: usuario.name,
        email: usuario.email,
        fecha: new Date()
    });
    await asistencia.save();

    let registrosAsistencia;

    if (usuario.rol === 'Administrador') {
        // Si el usuario es un administrador, obtener los registros de asistencia de usuarios que no son administradores
        registrosAsistencia = await Asistencia.find({ 'user': { $ne: userId }, 'rol': { $ne: 'Administrador' } });
    } else {
        // Si el usuario es un cliente, obtener solo sus propios registros de asistencia
        registrosAsistencia = await Asistencia.find({ 'user': userId });
    }

    res.render('auth/table.hbs', { registrosAsistencia, session: req.session, user });

}

module.exports = ctrl;