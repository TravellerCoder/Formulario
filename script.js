const submitFunction = (event) => {
    event.preventDefault() //esto hace en primera medida que se prevenga la actualizacion de la pagina
    validationForm()
}

document.getElementById('formulario').addEventListener('submit', submitFunction) //esto escucha el envio del formulario

function validationForm(){
    let textAreas = document.querySelectorAll('input[type="text"]');
    let correctValidation = true;

    textAreas.forEach(area => {
        let errorArea = document.getElementById('error' + area.id.charAt(0).toUpperCase() + area.id.slice(1)) //esto hace que la primera letra del campo sea mayuscula. 
        if (area.value.length == ''){
            showError(errorArea, 'Este campo es obligatorio')
            correctValidation = false
        }else if(area.value.length < 3){
            showError(errorArea, 'Este campo debe tener al menos 3 caracteres')
            correctValidation = false
        } else {
            unshowError(errorArea)
        }
    });
}

const showError = (element, msj) => {  //el metodo showError muestra el msj de error si existiese por eso tiene display block, en caso contrario no se muestra por eso tiene display none
    element.textContent = msj;
    element.style.display = 'block';
}
const unshowError = (element, msj) => { 
    element.textContent = '';
    element.style.display = 'none';
}

/* Estas lineas se encargan de validar que los input de tipo text muestren msj de error en caso querer ser enviados vacios o con menos de 3 caracteres*/ 