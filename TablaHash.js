class Categoria {

    constructor(id, company) {
        this.id = id
        this.company = company
    }
}

class NodoLista {


    constructor(categoria) {
        this.categoria = categoria
        this.siguiente = null
    }

}


class ListaSimple {

    constructor() {
        this.cabeza = null;
    }

    insertar(categoria) {


        let nuevo = new NodoLista(categoria)
        if (this.cabeza == null) {
            this.cabeza = nuevo
        } else {
            let aux = this.cabeza;
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

            console.log(nodoAux.categoria.company)

            nodoAux = nodoAux.siguiente;
        }
    }

}

class NodoTabla {

    constructor(llave, lista) {
        this.lista = lista
        this.llave = llave
        this.siguiente = null
    }
}
class TablaHash {

    constructor() {
        this.tamanio = 20;
        this.cabeza = null
        this.factor = 0
        this.id = 0
    }

    crearListas() {
        for (let index = 0; index < 20; index++) {

            let lista = new ListaSimple()

            this.agregarListas(index, lista)
        }

    }

    agregarListas(llave, lista) {
        let nuevo = new NodoTabla(llave, lista)
        if (this.cabeza == null) {
            this.cabeza = nuevo
        } else {
            let aux = this.cabeza;
            while (aux.siguiente != null) {

                aux = aux.siguiente
            }

            aux.siguiente = nuevo
        }

    }

    buscarLista(llave, categoria) {

        let temp = this.cabeza
        while (temp != null) {

            if (temp.llave == llave) {

                temp.lista.insertar(categoria)
                break
            }

            temp = temp.siguiente
        }


    }
    insertar(categoria) {

        this.factor = (this.id / this.tamanio) * 100

        if (this.factor < 75 && this.factor >= 0) {

            let llave = categoria.id % 20;

            if (this.buscarLlave(llave)) {

                this.buscarLista(llave, categoria)
            }
        }
    }

    buscarLlave(llave) {

        let temp = this.cabeza
        while (temp != null) {

            if (temp.llave == llave) {
                return true
            }

            temp = temp.siguiente
        }
        return false
    }


    mostrar() {

        let temp = this.cabeza

        while (temp != null) {
            console.log(":::::::::::::::::::")
            console.log("llave----" + temp.llave)
            console.log(temp.lista.mostrarLista())
            temp = temp.siguiente
        }
    }

    //______________________________----

    grafica1() {
        let grafo = "digraph G{rankdir=\"LR\"\ngraph[size=\"11.70,6.25\"] label=\"Tabla Hash \";\nnode[shape=box];\n";
        let conexion = "";
        let nodos = "";
        let cont = 0;
        let cont2 = 0;
        let contl = 0;
        let contl2 = 0;
        let nodos2 = ""
        // let contAnterior = this.tamanio;
        let temp = this.cabeza;
        let principal = "";

        while (temp != null) {
            console.log("___________________________________________________________")


            principal += "N" + cont + ";";
            nodos += "N" + cont + "[label=\"Key: " + temp.llave + "\\n" + "\"] ;\n"

            if (temp.siguiente != null) {
                cont2 = cont + 1;
                console.log("cont2 " + cont2)
                conexion += "N" + cont + "->N" + cont2 + ";\n";
                // conexion += "N" + cont2 + "->N" + cont + ";\n";

            }
            let tempL = temp.lista.cabeza;

            while (tempL != null) {

                if (tempL == temp.lista.cabeza) {

                    conexion += "N" + cont + "->Nc" + contl + ";\n";
                }

                nodos += "Nc" + contl + "[label=\"" + tempL.categoria.company + "\"];\n";

                if (tempL.siguiente != null) {

                    contl2 = contl + 1;
                    conexion += "Nc" + contl + "->Nc" + contl2 + ";\n"
                }
                contl++;
                tempL = tempL.siguiente;
            }

            //cont++;




            temp = temp.siguiente;
            cont++;
        }



        // while (temp.siguiente!=this.cabeza) {



        //conexion += "N" + (this.tamanio - 1)+ "->N0";
        //console.log((2*this.tamanio - 1))
        grafo += nodos + "\n";
        grafo += conexion + "\n";
        grafo += "{rank=same;" + principal + "}";
        grafo += "\n}";
        console.log(grafo);

        d3.select('#lienzo').graphviz()
            .width(1300)
            .height(1000)
            .renderDot(grafo);

    }


    MostrarCategorias() {
        let aux = this.cabeza
        while (aux != null) {
            let temp = aux.lista.cabeza
            while (temp != null) {
                let tarjeta = "<div class=\"card w-50\" style=\"width: 2rem; display: inline-block; margin: 5px 10px;\" >"
                tarjeta += "<div class=\"card-body\">"
                tarjeta += "<h5 class=\"card-title\">"+temp.categoria.company+"</h5>"
                tarjeta += "<p class=\"card-text\"> id: "+temp.categoria.id+"</p>"
                tarjeta += "<p class=\"card-text\">Key: "+aux.llave+"</p>"
                tarjeta += "</div>"
                tarjeta += "</div>"
                if (CargarArchivo.div_categoria!=null) {
                CargarArchivo.div_categoria.innerHTML+=tarjeta
                    
                }
                temp = temp.siguiente

            }
            aux = aux.siguiente
        }
    }
}




//let t=new TablaHash()


// t.crearListas()
// t.insertar(15)
// t.insertar(35)
// t.insertar(68)
// t.insertar(54)
// t.insertar(21)
// t.insertar(85)
// t.insertar(35)
// t.insertar(36)
// t.insertar(32)
// t.insertar(10)
// t.insertar(25)
// t.insertar(35)
// t.insertar(68)
// t.insertar(68)
// t.insertar(9)
// t.insertar(54)
// t.insertar(87)











// t.mostrar()

// t.grafica1()



