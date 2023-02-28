// Capturando los campos
const nameInput = document.getElementById ( 'name' );
const emailInput = document.getElementById ( 'email' );
const phoneNumberInput = document.getElementById ( 'phone-number' );
const labelContainer = document.querySelectorAll ( '.label--container' );


nameInput.addEventListener( 'blur', function ( e ) {
    if ( e.target.value === '' ) {
        // Permite insertar elementos HTML de manera dinámicamente. El primer argumento es para indicar en donde se pondrá el elemento a añadir
        labelContainer[0].insertAdjacentHTML( 'beforeEnd', `<span class="warning">This field is required</span>` );
        nameInput.style.outline = '1px solid hsl(354, 84%, 57%)';
    } else {
        
    }
});

emailInput.addEventListener( 'blur', function ( e ) {
    if ( e.target.value === '' ) {
        labelContainer[1].insertAdjacentHTML( 'beforeEnd', `<span class="warning">This field is required</span>` );
        emailInput.style.outline = '1px solid hsl(354, 84%, 57%)';
    }
} );

phoneNumberInput.addEventListener( 'blur', function ( e ) {
    if ( e.target.value === '' ) {
        labelContainer[2].insertAdjacentHTML( 'beforeEnd', `<span class="warning">This field is required</span>` );
        phoneNumberInput.style.outline = '1px solid hsl(354, 84%, 57%)';
    }
} );
