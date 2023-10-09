// const criticasCurso = [];

let formulario = document.querySelector('#form')
let input = document.querySelector('.input')
let title = document.querySelector('#title');
let listOk = document.querySelector('#list-ok');
let listCancel = document.querySelector('#listCancel');



// creamos una funcion para validar el input 

function validateInput (array) {
    return [...array].every((input) => input.value !== '');
}


// funcion constructora

function Curso (nombre, modalidad, division){
    this.nombre = nombre;
    this.modalidad = modalidad;
    this.division = division;
    this.criticasPositivas = [];
    this.criticasNegativas = [];
    this.presentacion = function(){
        title.textContent = `Bienvenidos al curso de ${this.nombre} division ${this.division}`
    }
    this.agregarCritica = function(critica){
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            let btnOk = document.querySelector('#checkP').checked
            let critica = input.value;
            if (btnOk && input.value !== '') {
                this.criticasPositivas.push(critica);
            } else {
                alert('Algo salio mal')
            }
            listOk.innerHTML = ''
            listOk.innerHTML += `<li>${this.criticasPositivas}</li>`
            formulario.reset()
        })
       console.log(this.criticasPositivas);
}
    this.calcularRatingPromedio = function(){
        
    }
    this.mostrarInformacion = function(){
       
    }

}

let curso1 = new Curso('Programacion', "Online", "Ramallo")
curso1.presentacion()
curso1.agregarCritica()
curso1.calcularRatingPromedio()
curso1.mostrarInformacion()
