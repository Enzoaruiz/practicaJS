// const criticasCurso = [];

let formulario = document.querySelector('#form')
let input = document.querySelector('.input');
let btnOk = document.querySelector('#btnOk');
let btnCancel = document.querySelector('#btnCancel');

const like = () => {   
    btnOk.addEventListener('click', (critica) =>{
    let criticaP = input.value;
    if  (critica !== '') {
        criticasPositivas.push(critica);
        } else {
            alert('Debes de ingresar una critica');
        }
})
}

const disLike = () => {
    btnCancel.addEventListener('click', (critica) =>{
    let criticaN = input.value;
    if  (critica !== '') {
    criticasNegativas.push(critica);
    } else {
        alert('Debes de ingresar una critica');
    }
})
}

// funcion constructora

function Curso (nombre, modalidad, division){
    this.nombre = nombre;
    this.modalidad = modalidad;
    this.division = division;
    this.criticasPositivas = [];
    this.criticasNegativas = [];
    this.presentacion = function(){
        // console.log(`Bienvenidos al curso de ${this.nombre} en la modalidad: ${this.modalidad}`);
    }
    this.agregarCritica = function(critica){
        formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        if (like || disLike) {
            console.log('Critica agregada');
        } else {
            console.log('No se agrego critica');
        }
        // console.log(evento);
    })
}
    this.calcularRatingPromedio = function(){
        if (this.criticasPositivas.length > this.criticasNegativas.length){
            console.log('Criticas mayormente positivas');
        } else {
            console.log('Criticas mayormente negativas');
        }
    }
    this.mostrarInformacion = function(){
        console.log(`Bienvenidos al curso de ${this.nombre} en la modalidad: ${this.modalidad}`);
        // console.log(`Criticas: ${this.criticas}`);
        // console.log(this.calcularRatingPromedio);
    }
}


let curso1 = new Curso('Programacion', "Online", "Ramallo")
curso1.presentacion()
curso1.agregarCritica()
// curso1.calcularRatingPromedio()
curso1.mostrarInformacion()
