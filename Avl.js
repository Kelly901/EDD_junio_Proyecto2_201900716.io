
class Pelicula{

    constructor(id,nombre,descripcion,puntuacion,precio,comentario){
        this.id=id
        this.nombre=nombre
        this.descripcion=descripcion
        this.puntuacion=puntuacion
        this.precio=precio
        this.comentario=comentario
    }
}


class NodoAvl {
    static cor=1
    constructor(pelicula) {
        this.pelicula = pelicula
        this.altura = 1;
        this.left = null
        this.right = null;
        this.id=NodoAvl.cor++;
    }


    grafica(){
        let grafo;

        if (this.left==null && this.right==null) {
            grafo="nodo"+this.id+"[label =\""+this.pelicula.id+"\\n"+this.pelicula.nombre+"\"];\n";
        }else{
            grafo="nodo"+this.id+"[ label=\"<C0>|"+this.pelicula.id+"\\n"+this.pelicula.nombre+"|<C1>\"];\n";
        }

        if (this.left!=null) {
            grafo=grafo+this.left.grafica()+"nodo"+this.id+":C0->nodo"+this.left.id+"\n";

        }
        if (this.right!=null) {
            grafo=grafo+this.right.grafica()+"nodo"+this.id+":C1->nodo"+this.right.id+"\n";
        }

        return grafo;
    }



    crearGrafica(){
        let grafo="digraph g{\ngraph[size=\"11.20,5.25\"] label=\"Árbol Avl  \"; \nrankdir=TB;\nnode [shape=record,width=0.5,fontsize=15, fillcolor=gray51,style=filled];\n"
        //let nodo=null;
      //  let pila= new Pila();
    //    pila.push(raiz);
        let etiqueta="";
        let cont2=0;
        grafo+=this.grafica();
        grafo+="}\n"
        console.log(grafo)

        d3.select('#lienzo').graphviz()
       
        
     .renderDot(grafo);
    }
}

class ArbolAvl {

    constructor() {
        this.raiz = null;
    }


    altura(raiz) {
        if (raiz == null) {
            return 0;
        }
        return raiz.altura;
    }

    Maximo(dato1, dato2) {

        return dato1 > dato2 ? dato1 : dato2;
    }


    rotacionDerecha(raiz) {

        let temp = raiz.left;
        let temp2 = temp.right;

        temp.right = raiz;
        raiz.left = temp2;

        raiz.altura=this.Maximo(this.altura(raiz.left),this.altura(raiz.right))+1;
        temp.altura=this.Maximo(this.altura(temp.left),this.altura(temp.right)+1);

        return temp;
    }


    rotacionIzquierda(raiz){

        let temp=raiz.right;
        let temp2=temp.left;


        temp.left=raiz;
        raiz.right=temp2;

        raiz.altura=this.Maximo(this.altura(raiz.left),this.altura(raiz.right))+1;
        temp.altura=this.Maximo(this.altura(temp.left),this.altura(temp.right))+1;

        return temp;
    }


    banlace(raiz){

        if (raiz==null) {
            return 0
        }
        return this.altura(raiz.left)-this.altura(raiz.right)

    }


    insertar(nodo,pelicula){
        if (nodo==null) {
            nodo =new NodoAvl(pelicula)
        }

        if (pelicula.id<nodo.pelicula.id) {
            nodo.left=this.insertar(nodo.left,pelicula)
        }else if (pelicula.id>nodo.pelicula.id) {
            nodo.right=this.insertar(nodo.right,pelicula)
        }else{
            return nodo
        }

        nodo.altura=1+this.Maximo(this.altura(nodo.left),this.altura(nodo.right))

        let balance=this.banlace(nodo)

        if (balance>1 && pelicula.id<nodo.left.pelicula.id) {
            return this.rotacionDerecha(nodo)
        }

        if (balance<-1 && pelicula.id> nodo.right.pelicula.id) {
            return this.rotacionIzquierda(nodo)
        }

        if (balance>1 && pelicula.id>nodo.left.pelicula.id) {
            
            nodo.left=this.rotacionIzquierda(nodo.left)

            return this.rotacionDerecha(nodo)
        }

        if (balance<-1 && pelicula.id<nodo.right.pelicula.id) {
            nodo.right=this.rotacionDerecha(nodo.right)
            return this.rotacionIzquierda(nodo)
        }

        return nodo;
    }


    prer_order(nodo){
        console.log(":::::::::::::::::")
        if (nodo!=null) {
            console.log(":::::::::::")
            console.log(nodo.pelicula.nombre+" ")
            //______________________titulo___________________
            let h3_element=document.createElement("h3")
            let titulo=document.createTextNode(nodo.pelicula.nombre)
            h3_element.appendChild(titulo)
            // descripcion
            let p_element=document.createElement("p")
            let descripcion=document.createTextNode(nodo.pelicula.descripcion)
            //_______________________agregar boton info________________
            let boton=document.createElement("button")
            let textoBoton=document.createTextNode("Informacion")
            boton.appendChild(textoBoton)
            //__________________agregar boton alquilar_________
            let botonA=document.createElement("button")
            let textoBoton2=document.createTextNode("Alquilar")
            botonA.appendChild(textoBoton2)
            //_____________linea
            p_element.appendChild(descripcion)
            let linea=document.createElement('hr')
            if (App.mostrarPelis!=null) {
                App.mostrarPelis.appendChild(h3_element)
                App.mostrarPelis.appendChild(p_element)
                App.mostrarPelis.appendChild(boton)
                App.mostrarPelis.appendChild(botonA)
                App.mostrarPelis.appendChild(linea)

            }
           
            this.prer_order(nodo.left)
            this.prer_order(nodo.right)
        }
    }
//______________________________________________________________________________-



Comentarios_(nodo){
    console.log(":::::::::::::::::")
    if (nodo!=null) {
        console.log(":::::::::::")
        console.log(nodo.pelicula.nombre+" ")
        //______________________titulo___________________
        let h3_element=document.createElement("h3")
        let titulo=document.createTextNode(nodo.pelicula.nombre)
        h3_element.appendChild(titulo)
        // descripcion
        let p_element=document.createElement("p")
        let descripcion=document.createTextNode(nodo.pelicula.descripcion)
        //inpunt
        let label=document.createElement("label")
        let texto_label=document.createTextNode("Comentarios:")
        let input_element=document.createElement("input")
        label.appendChild(texto_label)

        //_______________________agregar boton info________________
        let boton=document.createElement("button")
        let textoBoton=document.createTextNode("Agregar comentario")
        boton.appendChild(textoBoton)
        //__________________agregar boton alquilar_________
       // let botonA=document.createElement("button")
        //let textoBoton2=document.createTextNode("Alquilar")
        //botonA.appendChild(textoBoton2)
        //_____________linea
        p_element.appendChild(descripcion)
        let linea=document.createElement('hr')
        if (CargarArchivo.div_peliculas!=null) {
            CargarArchivo.div_peliculas.appendChild(h3_element)
            CargarArchivo.div_peliculas.appendChild(p_element)
            CargarArchivo.div_peliculas.appendChild(boton)
            CargarArchivo.div_peliculas.appendChild(label)
            CargarArchivo.div_peliculas.appendChild(input_element)
           // App.mostrarPelis.appendChild(botonA)
           CargarArchivo.div_peliculas.appendChild(linea)

        }
       
        this.Comentarios_(nodo.left)
        this.Comentarios_(nodo.right)
    }
}
//mostrarPeliculas2
Ascendente(nodo){
    console.log(":::::::::::::::::")
    if (nodo!=null) {
        //____________izquierdo
        this.Ascendente(nodo.left)

        //________________Raiz___________________
        console.log(":::::::::::")

        console.log("id: "+nodo.pelicula.id)
        console.log(nodo.pelicula.nombre+" ")
        //______________________titulo___________________
        let h3_element=document.createElement("h3")
        let titulo=document.createTextNode(nodo.pelicula.nombre)
        h3_element.appendChild(titulo)
        // descripcion
        let p_element=document.createElement("p")
        let descripcion=document.createTextNode(nodo.pelicula.descripcion)
        //_______________________agregar boton info________________
        let boton=document.createElement("button")
        let textoBoton=document.createTextNode("Informacion")
        boton.appendChild(textoBoton)
        //__________________agregar boton alquilar_________
        let botonA=document.createElement("button")
        let textoBoton2=document.createTextNode("Alquilar")
        botonA.appendChild(textoBoton2)
        //_____________linea
        p_element.appendChild(descripcion)
        let linea=document.createElement('hr')
        if (App.mostrarPelis!=null) {
            App.mostrarPelis.appendChild(h3_element)
            App.mostrarPelis.appendChild(p_element)
            App.mostrarPelis.appendChild(boton)
            App.mostrarPelis.appendChild(botonA)
            App.mostrarPelis.appendChild(linea)

        }
       //--------------------------derecho
        this.Ascendente(nodo.right)
    }
}
//____________________________________________________

Descendente(nodo){
    console.log(":::::::::::::::::")
    if (nodo!=null) {
     
        this.Descendente(nodo.right)
 
        console.log(":::::::::::")
        console.log(nodo.pelicula.nombre+" ")
        //______________________titulo___________________
        let h3_element=document.createElement("h3")
        let titulo=document.createTextNode(nodo.pelicula.nombre)
        h3_element.appendChild(titulo)
        // descripcion
        let p_element=document.createElement("p")
        let descripcion=document.createTextNode(nodo.pelicula.descripcion)
        //_______________________agregar boton info________________
        let boton=document.createElement("button")
        let textoBoton=document.createTextNode("Informacion")
        boton.appendChild(textoBoton)
        //__________________agregar boton alquilar_________
        let botonA=document.createElement("button")
        let textoBoton2=document.createTextNode("Alquilar")
        botonA.appendChild(textoBoton2)
        //_____________linea
        p_element.appendChild(descripcion)
        let linea=document.createElement('hr')
        if (App.mostrarPelis!=null) {
            App.mostrarPelis.appendChild(h3_element)
            App.mostrarPelis.appendChild(p_element)
            App.mostrarPelis.appendChild(boton)
            App.mostrarPelis.appendChild(botonA)
            App.mostrarPelis.appendChild(linea)

        }
        this.Descendente(nodo.left)
    }
}
//_

    graficar(){
        this.raiz.crearGrafica();
    }

}


// var arbol=new  ArbolAvl()

// arbol.raiz=arbol.insertar(arbol.raiz,11)
// arbol.raiz=arbol.insertar(arbol.raiz,23)
// arbol.raiz=arbol.insertar(arbol.raiz,35)
// arbol.raiz=arbol.insertar(arbol.raiz,46)
// arbol.raiz=arbol.insertar(arbol.raiz,54)
// arbol.raiz=arbol.insertar(arbol.raiz,26)
// arbol.raiz=arbol.insertar(arbol.raiz,83)
// arbol.raiz=arbol.insertar(arbol.raiz,20)
// arbol.raiz=arbol.insertar(arbol.raiz,100)
// arbol.raiz=arbol.insertar(arbol.raiz,54)
// arbol.raiz=arbol.insertar(arbol.raiz,2)
// arbol.raiz=arbol.insertar(arbol.raiz,1)
// arbol.raiz=arbol.insertar(arbol.raiz,6)
// arbol.raiz=arbol.insertar(arbol.raiz,8)






//arbol.prer_order(arbol.raiz)
//arbol.graficar()