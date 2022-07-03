class Actor {

    constructor(dni, nombre, correo, descripcion) {
        this.dni = dni
        this.nombre = nombre
        this.correo = correo
        this.descripcion = descripcion
    }
}

class NodoArbolBinario {

    static cor = 1
    constructor(actor) {
        this.actor = actor
        this.left = null
        this.right = null
        this.id = NodoArbolBinario.cor++;

    }


    grafica() {
        let grafo;

        if (this.left == null && this.right == null) {
            grafo = "nodo" + this.id + "[label =\"" + this.actor.dni+"\\n"+this.actor.nombre + "\"];\n";
        } else {
            grafo = "nodo" + this.id + "[ label=\"<C0>|" + this.actor.dni+"\\n"+this.actor.nombre + "|<C1>\"];\n";
        }

        if (this.left != null) {
            grafo = grafo + this.left.grafica() + "nodo" + this.id + ":C0->nodo" + this.left.id + "\n";

        }
        if (this.right != null) {
            grafo = grafo + this.right.grafica() + "nodo" + this.id + ":C1->nodo" + this.right.id + "\n";
        }

        return grafo;
    }


    crearGrafica() {
        let grafo = "digraph g{\ngraph[size=\"11.20,5.25\"] label=\"Árbol binario  \"; \nrankdir=TB;\nnode [shape=record,width=0.5,fontsize=15, fillcolor=gray51,style=filled];\n"
        //let nodo=null;
        //  let pila= new Pila();
        //    pila.push(raiz);
        let etiqueta = "";
        let cont2 = 0;
        grafo += this.grafica();
        grafo += "}\n"

        d3.select('#lienzo').graphviz()


            .renderDot(grafo);
    }
}


class ArbolBinario {

    constructor() {
        this.raiz = null;
    }

    agregar(actor) {
        this.raiz = this.agregar2(actor, this.raiz)
    }

    agregar2(actor, raiz) {

        if (raiz == null) {

            let nodoArbol = new NodoArbolBinario(actor)
            return nodoArbol
        } else {
            if (actor.dni < raiz.actor.dni) {

                raiz.left = this.agregar2(actor, raiz.left)
            } else if (actor.dni > raiz.actor.dni) {

                raiz.right = this.agregar2(actor, raiz.right)
            } else {
                console.log("repetido")
            }
        }

        return raiz
    }

    pre_orden(raiz) {
        this.pre_orden2(raiz);
    }

    pre_orden2(raiz) {
        if (raiz != null) {
            //::::::
            let h3_element = document.createElement("h3")
            let titulo = document.createTextNode("Nombre: "+raiz.actor.nombre)
            h3_element.appendChild(titulo)
            // descripcion
            let p_element = document.createElement("p")
            let descripcion = document.createTextNode(raiz.actor.descripcion)
            //_______________________agregar boton info________________
            //let boton = document.createElement("button")
            //let textoBoton = document.createTextNode("Informacion")
            //boton.appendChild(textoBoton)
            //__________________agregar boton alquilar_________
            //let botonA = document.createElement("button")
            //let textoBoton2 = document.createTextNode("Alquilar")
            //botonA.appendChild(textoBoton2)
            //_____________linea
            p_element.appendChild(descripcion)
            let linea = document.createElement('hr')
            if (CargarArchivo.div_actores != null) {
                CargarArchivo.div_actores.appendChild(h3_element)
                CargarArchivo.div_actores.appendChild(p_element)
                //App.mostrarPelis.appendChild(boton)
              //  App.mostrarPelis.appendChild(botonA)
                CargarArchivo.div_actores.appendChild(linea)

            }
            //_____________
            this.pre_orden2(raiz.left)
            this.pre_orden2(raiz.right)
        }
    }
    //__________-in

    in_orden(raiz) {
        this.in_orden2(raiz);
    }

    in_orden2(raiz) {
        if (raiz != null) {
            //::::::
            this.in_orden2(raiz.left)

            let h3_element = document.createElement("h3")
            let titulo = document.createTextNode("Nombre: "+raiz.actor.nombre)
            h3_element.appendChild(titulo)
            // descripcion
            let p_element = document.createElement("p")
            let descripcion = document.createTextNode(raiz.actor.descripcion)
            //_______________________agregar boton info________________
            //let boton = document.createElement("button")
            //let textoBoton = document.createTextNode("Informacion")
            //boton.appendChild(textoBoton)
            //__________________agregar boton alquilar_________
            //let botonA = document.createElement("button")
            //let textoBoton2 = document.createTextNode("Alquilar")
            //botonA.appendChild(textoBoton2)
            //_____________linea
            p_element.appendChild(descripcion)
            let linea = document.createElement('hr')
            if (CargarArchivo.div_actores != null) {
                CargarArchivo.div_actores.appendChild(h3_element)
                CargarArchivo.div_actores.appendChild(p_element)
                //App.mostrarPelis.appendChild(boton)
              //  App.mostrarPelis.appendChild(botonA)
                CargarArchivo.div_actores.appendChild(linea)

            }
            //_____________
            this.in_orden2(raiz.right)
        }
    }
    //
    //____________post
    post_orden(raiz) {
        this.post_orden2(raiz);
    }

    post_orden2(raiz) {
        if (raiz != null) {
            //::::::
            this.post_orden2(raiz.left)
            this.post_orden2(raiz.right)
//:::::::::::::::::::::::::::::::::::::::::::::
            let h3_element = document.createElement("h3")
            let titulo = document.createTextNode("Nombre: "+raiz.actor.nombre)
            h3_element.appendChild(titulo)
            // descripcion
            let p_element = document.createElement("p")
            let descripcion = document.createTextNode(raiz.actor.descripcion)
            //_______________________agregar boton info________________
            //let boton = document.createElement("button")
            //let textoBoton = document.createTextNode("Informacion")
            //boton.appendChild(textoBoton)
            //__________________agregar boton alquilar_________
            //let botonA = document.createElement("button")
            //let textoBoton2 = document.createTextNode("Alquilar")
            //botonA.appendChild(textoBoton2)
            //_____________linea
            p_element.appendChild(descripcion)
            let linea = document.createElement('hr')
            if (CargarArchivo.div_actores != null) {
                CargarArchivo.div_actores.appendChild(h3_element)
                CargarArchivo.div_actores.appendChild(p_element)
                //App.mostrarPelis.appendChild(boton)
              //  App.mostrarPelis.appendChild(botonA)
                CargarArchivo.div_actores.appendChild(linea)

            }
            //_____________
        }
    }


    graficar() {
        this.raiz.crearGrafica();
    }
}