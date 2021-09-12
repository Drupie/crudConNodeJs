var mysql = require ('mysql'); //llamo la libreria de mysql
var conexion = mysql.createConnection(
    {
host:"localhost",
database:"base1",
user:"root",
password:""
    }
);


conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conexion exitosa");
    }

});

///conexion exitosa

//mostrar select

conexion.query('SELECT * FROM articulos',(error,filas)=>{
if(error){
    throw error;
}
else{
}
filas.forEach(fila=>{
    console.log(fila);
})
});

//insertar datos
// conexion.query('INSERT INTO articulos (codigo,descripcion,precio) VALUES (1,"hola",123)',(error,results)=>{
//     if(error){
//         throw error;
//     }
//     else{
//     }
//     console.log("registro agregado",results);
//     });


//eliminar
// conexion.query('DELETE FROM articulos WHERE codigo=1',(error,results)=>{
//     if(error){
//         throw error;
//     }
//     else{
//     }
//     console.log("Se elimino un registro",results);
//     });


//update
conexion.query("UPDATE articulos SET descripcion='update' WHERE codigo=2",(error,results)=>{
    if(error){
        throw error;
    }
    else{
    }
    console.log("Se actualizo un registro",results);
    });
conexion.end();
































