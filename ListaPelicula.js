
class NodoListaPelicula{

    constructor(pelicula){
        this.pelicula=pelicula
        this.siguiente=null
    }
}
class ListaPelicula{

    constructor(){
        this.cabeza=null
    }

    insertar(pelicula) {
        let nuevo = new NodoCliente(pelicula)
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
    
}
