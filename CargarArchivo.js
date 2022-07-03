

class CargarArchivo {

    static arbol_avl
    static listaCliente;
    static arbolBinario
    static tablaHash
    static div_actores;
    static div_categoria;
    static div_peliculas;

    static cargarPeliculas() {




        let auxiliar = "";
        let archivo = event.target.files[0];

        if (archivo) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let contenido = e.target.result;
                auxiliar = contenido;

                //console.log(contenido);
                CargarArchivo.arbol_avl = new ArbolAvl()
                let ob = JSON.parse(e.target.result);
                CargarArchivo.div_peliculas=document.getElementById("Comentarios")

                // console.log(ob)

                // constructor(dpi,nombre,correo,telefono,direccion,bibliografia){
                for (let index = 0; index < ob.length; index++) {
                    console.log("____________________________________")

                    const element = ob[index];
                    console.log("id_pelicula: " + element.id_pelicula)
                    console.log("nombre_pelicula: " + element.nombre_pelicula)
                    console.log("descripcion" + element.descripcion)
                    console.log("puntuacion_star" + element.puntuacion_star)
                    console.log("precion_Q" + element.precion_Q)
                    let pelicula = new Pelicula(element.id_pelicula, element.nombre_pelicula, element.descripcion, element.precion_Q)
                    CargarArchivo.arbol_avl.raiz = CargarArchivo.arbol_avl.insertar(CargarArchivo.arbol_avl.raiz, pelicula)

                }
                CargarArchivo.arbol_avl.prer_order(CargarArchivo.arbol_avl.raiz)
                alert("Archivo cargado")


                // CargarArchivo.arbol_bi.pre_order(CargarArchivo.arbol_bi.raiz)


                //localStorage("lista",JSON.stringify(lista))

            };
            try {
                reader.readAsText(archivo);
            } catch (error) {
                console.log("error");
            }
        } else {
            alert("no se ha seleccionado ningun archivo")
        }
    }
    //___________________________________________________________________________________-


    static cargarClientes() {


        let auxiliar = "";
        let archivo = event.target.files[0];

        if (archivo) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let contenido = e.target.result;
                auxiliar = contenido;

                //console.log(contenido);
                CargarArchivo.listaCliente = new ListaCliente()
                //
                let admin = new Cliente("2354168452525", "Wilfred Perez", "EDD", "123", "+502 (123) 123-4567")
                CargarArchivo.listaCliente.insertar(admin)
                let ob = JSON.parse(e.target.result);

                // console.log(ob)

                // constructor(dpi,nombre,correo,telefono,direccion,bibliografia){
                for (let index = 0; index < ob.length; index++) {
                    console.log("____________________________________")

                    const element = ob[index];
                    console.log("dpi: " + element.dpi)
                    console.log("nombre: " + element.nombre_completo)
                    console.log("usuario" + element.nombre_usuario)
                    console.log("correo" + element.correo)
                    console.log("contrasenia" + element.contrasenia)
                    console.log("telefono" + element.telefono)

                    let cliente = new Cliente(element.dpi, element.nombre_completo, element.nombre_usuario, element.correo, element.contrasenia, element.telefono)


                    CargarArchivo.listaCliente.insertar(cliente)
                }
                console.log("_________________________________________________\n")
                CargarArchivo.listaCliente.mostrarLista()
                alert("Archivo cargado")


                // CargarArchivo.arbol_bi.pre_order(CargarArchivo.arbol_bi.raiz)


                //localStorage("lista",JSON.stringify(lista))

            };
            try {
                reader.readAsText(archivo);
            } catch (error) {
                console.log("error");
            }
        } else {
            alert("no se ha seleccionado ningun archivo")
        }
    }

    //__________________________________________


    static cargarActores() {


        let auxiliar = "";
        let archivo = event.target.files[0];

        if (archivo) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let contenido = e.target.result;
                auxiliar = contenido;

                //console.log(contenido);
                CargarArchivo.arbolBinario = new ArbolBinario()
                CargarArchivo.div_actores=document.getElementById("mostrarActores")
                CargarArchivo.div_categoria=document.getElementById("mostrarCategorias")
                //______________________________________________________
                let ob = JSON.parse(e.target.result);

                // console.log(ob)

                // constructor(dpi,nombre,correo,telefono,direccion,bibliografia){
                for (let index = 0; index < ob.length; index++) {
                    console.log("____________________________________")

                    const element = ob[index];
                    console.log("dni: " + element.dni)
                    console.log("nombre: " + element.nombre_actor)
                    console.log("correo" + element.correo)

                    console.log("descripcion: " + element.descripcion)

                    let actor = new Actor(element.dni, element.nombre_actor, element.correo, element.descripcion)
                    CargarArchivo.arbolBinario.agregar(actor)
                }
                console.log("_________________________________________________\n")


                // CargarArchivo.arbol_bi.pre_order(CargarArchivo.arbol_bi.raiz)

                alert("Archivo cargado")

                //localStorage("lista",JSON.stringify(lista))

            };
            try {
                reader.readAsText(archivo);
            } catch (error) {
                console.log("error");
            }
        } else {
            alert("no se ha seleccionado ningun archivo")
        }
    }

    //______________________________-


    static cargarCategorias() {


        let auxiliar = "";
        let archivo = event.target.files[0];

        if (archivo) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let contenido = e.target.result;
                auxiliar = contenido;

                //console.log(contenido);
                CargarArchivo.tablaHash = new TablaHash()
                CargarArchivo.tablaHash.crearListas()
                let ob = JSON.parse(e.target.result);

                // console.log(ob)

                // constructor(dpi,nombre,correo,telefono,direccion,bibliografia){
                for (let index = 0; index < ob.length; index++) {
                    console.log("____________________________________")

                    const element = ob[index];
                    console.log("id_categoria: " + element.id_categoria)
                    console.log("Company: " + element.company)
                    let categoria = new Categoria(element.id_categoria, element.company)
                    CargarArchivo.tablaHash.insertar(categoria)
                }
                console.log("_________________________________________________\n")


                // CargarArchivo.arbol_bi.pre_order(CargarArchivo.arbol_bi.raiz)


                //localStorage("lista",JSON.stringify(lista))
                alert("Archivo cargado")

            };
            try {
                reader.readAsText(archivo);
            } catch (error) {
                console.log("error");
            }
        } else {
            alert("no se ha seleccionado ningun archivo")
        }
    }

}
//_______________________________

//:___________________________________________
window.addEventListener('load', () => {
    document.getElementById('archivo_P').addEventListener('change', CargarArchivo.cargarPeliculas)
});
//___________________________________________________________
window.addEventListener('load', () => {
    document.getElementById('archivo_Cliente').addEventListener('change', CargarArchivo.cargarClientes)
});
//___________________________________________
window.addEventListener('load', () => {
    document.getElementById('archivo_Actores').addEventListener('change', CargarArchivo.cargarActores)
});

//___________________________________________
window.addEventListener('load', () => {
    document.getElementById('archivo_Categorias').addEventListener('change', CargarArchivo.cargarCategorias)
});