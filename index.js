//LLAMADO AL APLICATIVO DEL SERVIDOR
const app = require("./src/app")

//LEVANTANDO EL SERVIDOR
app.listen(app.get("port") , ()=>{
    console.log("Servidor iniciado en el Puerto: ", app.get("port"));
})