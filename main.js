// Capturando los campos
const nameInput = document.getElementById ( 'name' );
const emailInput = document.getElementById ( 'email' );
const phoneNumberInput = document.getElementById ( 'phone-number' );
const labelContainer = document.querySelectorAll ( '.label--container' );

let inputList = [];

inputList.push( nameInput, emailInput, phoneNumberInput );

function checkInput () {
    // nameInput.addEventListener( 'blur', function ( e ) {
    //     if ( e.target.value === '' ) {
    //         // Permite insertar elementos HTML de manera dinámicamente. El primer argumento es para indicar en donde se pondrá el elemento a añadir
    //         labelContainer[0].insertAdjacentHTML( 'beforeEnd', `<span class="warning">This field is required</span>` );
    //         nameInput.style.outline = '1px solid hsl(354, 84%, 57%)';
    //     }
    // });

    inputList.forEach( ( input ) => {
        input.addEventListener ( 'blur', function ( e ) {
            if ( e.target.value === '' ) {
                // Permite insertar elementos HTML de manera dinámicamente. El primer argumento es para indicar en donde se pondrá el elemento a añadir
                labelContainer[ inputList.indexOf( input ) ].insertAdjacentHTML( 'beforeEnd', `<span class="warning">This field is required</span>` );
                input.style.outline = '1px solid hsl(354, 84%, 57%)';
            } else {
                input.style.outline = '1px solid hsl(229, 24%, 87%)';
            }
        } )
    });
}

checkInput();

