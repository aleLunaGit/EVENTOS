alert("Bienvenido")

class Alumnos {
    constructor(id, nombreA, apellidoA, idCursoA) {
        this.id = id,
        this.nombreA = nombreA,
            this.apellidoA = apellidoA,
            this.idCursoA = idCursoA
    }
}

class Profesores {
    constructor(id, nombreP, apellidoP, idCursoP) {
        this.id = id,
        this.nombreP = nombreP,
            this.apellidoP = apellidoP,
            this.idCursoP = idCursoP
    }    
}

let arrayA = []
let formuAl = document.querySelector("#formA")


let arrayP = []
let formuPr = document.querySelector("#formP")

