const submitFunction = (event) => {
    if(!validationForm()){
        event.preventDefault();
    } else {
        event.preventDefault();

        alert(
            'Los datos enviados fueron: \n ' +
            'Nombre: ' + document.getElementById('name').value + '\n' + 
            'Apellido: ' + document.getElementById('lastName').value + '\n' + 
            'Documento:'  + document.getElementById('id').value + '\n' + 
            'Email: ' + document.getElementById('email').value + '\n' + 
            'Edad: ' + document.getElementById('age').value + '\n' + 
            'Actividad: ' + document.getElementById('activity').value + '\n' + 
            'Nivel de Educacion: ' + document.getElementById('educationLevel').value + '\n' 
        )
    }
}


document.getElementById('formulario').addEventListener('submit', submitFunction) //esto escucha el envio del formulario

function validationForm(){
    const textAreas = document.querySelectorAll('input[type="text"]');
    let correctValidation = true;

    textAreas.forEach(area => {
        let errorArea = document.getElementById('error' + area.id.charAt(0).toUpperCase() + area.id.slice(1)) //esto hace que la primera letra del campo sea mayuscula. 
        if (area.value.length == ''){
            showError(errorArea, 'Este campo es obligatorio')//Este es el msj que se imprimira en la pantalla en caso que el campo este vacio
            correctValidation = false
        }else if(area.value.length < 3){
            showError(errorArea, 'Este campo debe tener al menos 3 caracteres')//Este es el msj que se imprimira en la pantalla en caso que el campotenga 3 o menos caracteres
            correctValidation = false
        } else {
            unshowError(errorArea)
        }
    }) /* Estas lineas se encargan de validar que los input de tipo text muestren msj de error en caso querer ser enviados vacios o con menos de 3 caracteres*/ 



    //aqui validaremos que el formato de mail ingresado sea correcto
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ //este regex que hace la validadcion del formato de mail
        unshowError(errorEmail)
    } else {
        showError(errorEmail, 'Debes ingresar un formato de mail valido')
    }



    // Validaremos que la edad ingresada sea mayor a 18 años
    const age = document.getElementById('age');
    let errorAge = document.getElementById('errorAge');

    if(age.value <= 17){
        showError(errorAge, 'Debes ser mayor a 18 años para registrarte');
        validationForm = false
    }else {
        unshowError(errorAge)
    }



    // Validaremos la activity
    const activity = document.getElementById('activity')
    let errorActivity = document.getElementById('errorActivity')

    if(activity.value == ''){
        showError(errorActivity, 'Debes seleccionar una actividad');  
        correctValidation = false
    } else {
        unshowError(errorActivity)
    }



    // Validaremos la activity
    const educationLevel = document.getElementById('educationLevel')
    let errorEducationLevel = document.getElementById('errorEducationLevel')

    if(educationLevel.value == ''){
        showError(errorEducationLevel, 'Debes seleccionar un nivel de educacion')  
        correctValidation = false
    } else {
        unshowError(errorEducationLevel)
    }



    //validacion de aceptacion obligatoria de terminos y condiciones
    const acceptTerms = document.getElementById('acceptTerms')
    let errorAcceptTerms = document.getElementById('errorAcceptTerms')

    if(!acceptTerms.checked){
        showError(errorAcceptTerms, 'Debes aceptar los terminos y condiciones');
        correctValidation = false 
    } else {
        unshowError(errorAcceptTerms)
    }

    return correctValidation //esto dira si el formulario completo es valido
}

const showError = (element, msj) => {  //el metodo showError muestra el msj de error si existiese por eso tiene display block, en caso contrario no se muestra por eso tiene display none
    element.textContent = msj;
    element.style.display = 'block';
}
const unshowError = (element, msj) => { 
    element.textContent = '';
    element.style.display = 'none';
}

