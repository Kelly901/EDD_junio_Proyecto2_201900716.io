class App {
    static mostrarPelis;
    static mostrarPelis2;
    
    comprobarUsuario() {
        let nombre = document.getElementById("user").value;
        let password = document.getElementById("password").value;
        let checbox=document.getElementById("administrador").checked

        console.log("esto tiene "+(checbox))
        if (checbox) {

            if (nombre  == "EDD" && password == "123") {
                alert("Bienvenido admin")
                this.mostraPaginaAdmin()
    
    
            } else {

                if (CargarArchivo.listaCliente.buscarUsuario(nombre,password)) {
                    alert("Bienvenido "+nombre)
                    this.mostrarUsuarios()
                    
                }
                else{
                    alert("Usuario o contraseña incorrectos")
    
                }
               
            }
            
        }else{
           
            if (CargarArchivo.listaCliente.buscarUsuario(nombre,password)) {
                alert("Bienvenido "+nombre)
                this.mostrarUsuarios()
                
            }
            else{
                alert("Usuario o contraseña incorrectos")

            }
           
        }

       




    }

    mostrarUsuarios(){
        let opcionesUsuario =document.getElementById("opcionesUsuario")
        let cerrar = document.getElementById("cerrar");
        let admin = document.getElementById("login");
        let info = document.getElementById("info")
        let linea = document.getElementById("linea")




        admin.style.display="none"
        info.style.display="block"
        opcionesUsuario.style.display="block"
        linea.style.display="block"
        
        cerrar.style.display="inline"
    }

    mostrarPrincipal() {
        //princiaplG= opciones Generales de la principal
        let principalG = document.getElementById("opcionesGenerales");
        let admin = document.getElementById("login");
        let info = document.getElementById("info")


        admin.style.display = "none"
        info.style.display="block"
        principalG.style.display = "block"

    }


    mostrarLogin() {


        let admin = document.getElementById("login");
        let principalAdmin = document.getElementById("opcionesAdmin")
        let cargarCategorias=document.getElementById("cargar_Categorias")
        let botonesP=document.getElementById("botonesPelicula")

        let principalG = document.getElementById("opcionesGenerales");
        let cerrar = document.getElementById("cerrar");
        let vista_Imagen = document.getElementById("vista_Imagen")
        let opcionesUsuario =document.getElementById("opcionesUsuario")
        let botones=document.getElementById("botonesActores")
        if(CargarArchivo.div_peliculas!=null){

            CargarArchivo.div_peliculas.style.display="none"
        }
        if (CargarArchivo.div_categoria!=null) {
            CargarArchivo.div_categoria.style.display="none"
        }
        if (CargarArchivo.div_actores!=null) {
            CargarArchivo.div_actores.style.display="none"
        }
        if ( App.mostrarPelis!=null) {
            App.mostrarPelis.style.display="none"
        }

        botonesP.style.display="none"
        botones.style.display="none"
        let linea = document.getElementById("linea")
        let info = document.getElementById("info")
        cargarCategorias.style.display="none"
        principalAdmin.style.display = "none"
        principalG.style.display = "none"
        linea.style.display = "none"
        info.style.display = "none"
        opcionesUsuario.style.display="none"
        vista_Imagen.style.display="none"
        
        admin.style.display = "block"

    }

    mostraPaginaAdmin() {
        let principalAdmin = document.getElementById("opcionesAdmin")
        let admin = document.getElementById("login");
        let principalG = document.getElementById("opcionesGenerales");
        let cerrar = document.getElementById("cerrar");
        let iniciar = document.getElementById("iniciar")
        let linea = document.getElementById("linea")
        let info = document.getElementById("info")
        let cargar_peliculas = document.getElementById("cargar_peliculas")
        let vista_Imagen = document.getElementById("vista_Imagen")
        
        //_________
        admin.style.display = "none"
        principalG.style.display = "none"
        cargar_peliculas.style.display = "none"
        // iniciar.style.display="none"
       
        vista_Imagen.style.display = "flex"
        vista_Imagen.style.justifyContent="space-between"
        info.style.display = "block"
        linea.style.display = "block"
        cerrar.style.display = "inline"
        principalAdmin.style.display = "block"
    }


    CargarPeliculas() {
        let linea = document.getElementById("linea")

        let cargar_peliculas = document.getElementById("cargar_peliculas")
        let cargarClientes=document.getElementById("cargar_clientes")
        let cargarCategorias=document.getElementById("cargar_Categorias")
        

        let cerrar = document.getElementById("cerrar");

        cargar_peliculas.style.display = "block"
        cargarClientes.style.display="none"
        cargarCategorias.style.display="none"
        linea.style.display="block"
        cerrar.style.display="inline"
    }


    CargarClientes() {
        let cargar_peliculas = document.getElementById("cargar_peliculas")
        let cargar_cliente = document.getElementById("cargar_clientes")
        let cargarActores = document.getElementById("cargar_Actores")
        let cargarCategorias=document.getElementById("cargar_Categorias")

        
//________________
        cargar_peliculas.style.display = "none"
        cargarActores.style.display="none"
        cargarCategorias.style.display="none"
        cargar_cliente.style.display = "block"
    }

    CargarAutores() {
        let cargarActores = document.getElementById("cargar_Actores")
        let cargar_peliculas = document.getElementById("cargar_peliculas")

        let cargarClientes=document.getElementById("cargar_clientes")
        let cargarCategorias=document.getElementById("cargar_Categorias")

        //_______
        cargar_peliculas.style.display="none"
        cargarCategorias.style.display="none"
        cargarClientes.style.display="none"
        cargarActores.style.display = "block"
    }


    CargarCategoria() {
        let cargarActores = document.getElementById("cargar_Actores")
        let cargar_cliente = document.getElementById("cargar_clientes")
        let cargarCategoria = document.getElementById("cargar_Categorias")
        let cargar_peliculas = document.getElementById("cargar_peliculas")

        //_____________________
        cargar_peliculas.style.display="none"
        cargar_cliente.style.display="none"
        cargarActores.style.display="none"
        cargarCategoria.style.display = "block"
    }


    mostrarPelicula(){
        let cargarActores = document.getElementById("cargar_Actores")
        let cargarClientes=document.getElementById("cargar_clientes")
        let cargarCategorias=document.getElementById("cargar_Categorias")
        let cargar_peliculas = document.getElementById("cargar_peliculas")


        CargarArchivo.arbol_avl.graficar()
        //_______________________________
        let lienzo=document.getElementById("lienzo")
        //_______________________-
        cargar_peliculas.style.display="none"
        cargarCategorias.style.display="none"
        cargarClientes.style.display="none"
        cargarActores.style.display="none"
        lienzo.style.display="block"
    
    }

    mostrarCategoria(){
        CargarArchivo.tablaHash.grafica1()
        let cargarActores = document.getElementById("cargar_Actores")
        let lienzo=document.getElementById("lienzo")
        let cargarClientes=document.getElementById("cargar_clientes")
        let cargarCategorias=document.getElementById("cargar_Categorias")
        let cargar_peliculas = document.getElementById("cargar_peliculas")


        //___________
        cargar_peliculas.style.display="none"
        cargarCategorias.style.display="none"
        cargarClientes.style.display="none"
        cargarActores.style.display="none"
        lienzo.style.display="block"
    }

    mostrarCliente(){
        CargarArchivo.listaCliente.graficar()
        let cargar_peliculas = document.getElementById("cargar_peliculas")

        let cargarActores = document.getElementById("cargar_Actores")
        let lienzo=document.getElementById("lienzo")
        let cargarClientes=document.getElementById("cargar_clientes")
        let cargarCategorias=document.getElementById("cargar_Categorias")

        
        //_____________
        cargar_peliculas.style.display="none"
        cargarCategorias.style.display="none"
        cargarClientes.style.display="none"
        cargarActores.style.display="none"
        lienzo.style.display="block"
    }

    mostrarActores(){
        let cargarActores = document.getElementById("cargar_Actores")
        let cargarClientes=document.getElementById("cargar_clientes")
        let cargarCategorias=document.getElementById("cargar_Categorias")
        let cargar_peliculas = document.getElementById("cargar_peliculas")
        let vista=document.getElementById("mostrarPeli")


        CargarArchivo.arbolBinario.graficar()
        let lienzo=document.getElementById("lienzo")
        //___________-
        vista.style.display="none"
        cargar_peliculas.style.display="none"
        cargarCategorias.style.display="none"
        cargarClientes.style.display="none"
        cargarActores.style.display="none"
        lienzo.style.display="block"
    }

    MostrarPeliculas(){
        let botones=document.getElementById("botonesPelicula")
        App.mostrarPelis=document.getElementById("mostrarPeliculas")
        App.mostrarPelis.innerHTML=""
        let vista=document.getElementById("mostrarPeli")
        CargarArchivo.arbol_avl.prer_order(CargarArchivo.arbol_avl.raiz)

        if (CargarArchivo.div_categoria!=null) {
            CargarArchivo.div_categoria.style.display="none"
        }

        if (CargarArchivo.div_peliculas!=null) {
            CargarArchivo.div_peliculas.style.display="none"
        }
        //"text-align:center; display: block
        botones.style.display="block"
        vista.style.textAlign="center"
        vista.style.display="block"
    }

    MostrarPeliculas2(){
      
        //App.mostrarPelis=document.querySelector("#mostrarPeliculas")


        App.mostrarPelis.innerHTML=""
        CargarArchivo.arbol_avl.Ascendente(CargarArchivo.arbol_avl.raiz)

        //"text-align:center; display: block
        
    }

    MostrarPeliculas3(){

        App.mostrarPelis.innerHTML=""
        
        CargarArchivo.arbol_avl.Descendente(CargarArchivo.arbol_avl.raiz)
    }
    //mostrar botones del actores
    MostrarBotonesActores(){
        let botones=document.getElementById("botonesActores")
        let botonesP=document.getElementById("botonesPelicula")

        if(CargarArchivo.div_peliculas!=null){

            CargarArchivo.div_peliculas.style.display="none"
        }
        if (CargarArchivo.div_categoria!=null) {
            CargarArchivo.div_categoria.style.display="none"
        }

        if ( App.mostrarPelis!=null) {
            App.mostrarPelis.style.display="none"
        }
        botonesP.style.display="none"
        botones.style.display="block"
        
    }
    //mostrarActores
    MostrarAcotores_pre(){
       
      
        CargarArchivo.div_actores.innerHTML=""

        
        //"text-align:center; display: block
        CargarArchivo.arbolBinario.pre_orden(CargarArchivo.arbolBinario.raiz)

        CargarArchivo.div_actores.style.display="block"
        CargarArchivo.div_actores.style.textAlign="center"
    }

    //
    MostrarAcotores_in(){
       
      
        CargarArchivo.div_actores.innerHTML=""

        CargarArchivo.arbolBinario.in_orden(CargarArchivo.arbolBinario.raiz)

        
        //"text-align:center; display: block

        CargarArchivo.div_actores.style.display="block"
        CargarArchivo.div_actores.style.textAlign="center"
    }

    MostrarAcotores_post(){
       
      
        CargarArchivo.div_actores.innerHTML=""

        CargarArchivo.arbolBinario.post_orden(CargarArchivo.arbolBinario.raiz)
        
        //"text-align:center; display: block

        CargarArchivo.div_actores.style.display="block"
        CargarArchivo.div_actores.style.textAlign="center"
    }


    Mostrar_categorias(){
        let botones=document.getElementById("botonesActores")
        CargarArchivo.div_actores.innerHTML=""
        CargarArchivo.tablaHash.MostrarCategorias()
        botones.style.display="none"
        CargarArchivo.div_categoria.style.display="block"

        
    }


    mostrarComentarios(){
       // CargarArchivo.div_peliculas
        CargarArchivo.arbol_avl.Comentarios_(CargarArchivo.arbol_avl.raiz)
        let botones=document.getElementById("botonesActores")
        let botonesP=document.getElementById("botonesPelicula")

        if (CargarArchivo.div_categoria!=null) {
            CargarArchivo.div_categoria.style.display="none"
        }

        if (CargarArchivo.div_actores!=null) {
            CargarArchivo.div_actores.style.display="none"
        }
        if ( App.mostrarPelis!=null) {
            App.mostrarPelis.style.display="none"
        }
        botonesP.style.display="none"
        botones.style.display="none"
        CargarArchivo.div_peliculas.style.display="block"
    }

    agregarComentario(){
        let label=document.createElement("label")
        
    }
}


let a = new App();