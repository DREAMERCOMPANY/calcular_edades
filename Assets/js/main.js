const actualYear = new Date().getFullYear()
let resultado = 0
let fullYear = 0



 // Selecciona el input de tipo date
 let dateInput = document.getElementById('date');

 // Agrega un evento 'change' que se ejecuta cuando el usuario selecciona una fecha
 dateInput.addEventListener('change', function() {
   let year = dateInput.value
   fullYear = parseInt(year.split('-')[0] )
   console.log(fullYear);
 });

 const showyearinfo = document.querySelector('.info__btn')

 showyearinfo.addEventListener('click', ()=>{
    resultado = actualYear - fullYear
    const resultyears = document.getElementById('resultado')

    if(fullYear>=2024){
        resultyears.innerHTML= `
        <p>No puedes nacer en el año ${fullYear}, aun no has nacido.</p>
    `
    }else if(fullYear<=1910){
        resultyears.innerHTML= `
        <p>Naciste en el año ${fullYear}, Gracias por existir.</p>
    `

    } else{
        resultyears.innerHTML= `
        <p>Naciste en el año ${fullYear}, actualmente tienes ${resultado} años.</p>
    `
    }
  
 })



    






