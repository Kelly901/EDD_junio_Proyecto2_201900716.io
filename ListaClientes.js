class Cliente {

    constructor(dpi, nombre, usuario, correo, contrasenia, telefono) {
        this.dpi = dpi;
        this.nombre = nombre
        this.usuario = usuario
        this.correo = correo
        this.contrasenia = contrasenia
        this.telefono = telefono
    }
}


class NodoCliente {

    constructor(cliente) {
        this.cliente = cliente
        this.siguiente = null
    }
}


class ListaCliente {

    constructor() {
        this.cabeza = null

    }
    insertar(cliente) {
        let nuevo = new NodoCliente(cliente)
        if (this.cabeza == null) {
            this.cabeza = nuevo
        } else {
            let aux = this.cabeza
            while (aux.siguiente != null) {

                aux = aux.siguiente
            }
            aux.siguiente = nuevo
        }
    }
    listaVacia() {
        return this.cabeza == null
    }

    mostrarLista() {
        let nodoAux = this.cabeza;

        while (nodoAux != null) {

            console.log(nodoAux.cliente.nombre)

            nodoAux = nodoAux.siguiente;
        }

    
    }
    //buscar el usuario existente
    buscarUsuario(usuario,password){
        let aux=this.cabeza;

        while (aux!=null) {
            if (aux.cliente.usuario==usuario && aux.cliente.contrasenia==password) {
                return true
            }
            aux=aux.siguiente
        }
        return false
     }
    //:::::::::::::::::::::::::graficar la lista


    graficar() {

        let grafo = "digraph G{\ngraph[size=\"11.20,5.25\"] label=\"Lista\";\nnode [shape=box];\n";
        let nodo = "";
        let conexiones = "";
        let cont = 0;
        let cont2 = 0;
        let auxiliar = this.cabeza;

        while (auxiliar != null) {
            nodo += "N" + cont + "[label=\"" + auxiliar.cliente.nombre + "\"];\n";
            if (auxiliar.siguiente != null) {
                cont2 = cont + 1;
                conexiones += "N" + cont + "-> N" + cont2 + ";\n";

            }
            cont++;

            auxiliar = auxiliar.siguiente;

        }

        grafo += nodo + "\n";
        grafo += "{rank=same;\n" + conexiones + "\n}\n}"

        console.log(grafo)
        d3.select('#lienzo').graphviz()
          
            .renderDot(grafo);

    }



}