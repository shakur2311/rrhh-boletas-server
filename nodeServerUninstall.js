const service = require('node-windows').Service

const svc = new service({
    name: "Boletas App Server",
    description:"Servidor booteable de boletas app",
    script: "E:\\practicandoProgra\\emochu-emails\\server\\index.js"
});

svc.on("uninstall",()=>{
    console.log("Servicio desinstalado");
});

svc.uninstall();