// Capturando los campos
const nameInput = document.getElementById ( 'name' );
const emailInput = document.getElementById ( 'email' );
const phoneNumberInput = document.getElementById ( 'phone-number' );
const labelContainer = document.querySelectorAll ( '.label--container' );
const sentButton = document.querySelector( '.next-step-button' );
const goBackButton = document.querySelector( '.back-step-button' );

const stepContainer1 = document.getElementById( 'step1-total--container' );
const stepContainer2 = document.getElementById( 'step2-total--container' );

let inputList = [];

inputList.push( nameInput, emailInput, phoneNumberInput );

sentButton.addEventListener( 'click', checkInputButton);
goBackButton.addEventListener( 'click', goBack );

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
                labelContainer[ inputList.indexOf( input ) ].lastElementChild.innerText = 'This field is required';
                input.style.outline = '1px solid hsl(354, 84%, 57%)';
            } else {
                labelContainer[ inputList.indexOf( input ) ].lastElementChild.innerText = '';
                input.style.outline = '1px solid hsl(229, 24%, 87%)';
            }
        } );
    });


}

function checkInputButton () {
    inputList.forEach( ( input ) => {
        if ( input.value.length === 0 ) {
            // Permite insertar elementos HTML de manera dinámicamente. El primer argumento es para indicar en donde se pondrá el elemento a añadir
            labelContainer[ inputList.indexOf( input ) ].lastElementChild.innerText = 'This field is required';
            input.style.outline = '1px solid hsl(354, 84%, 57%)';
        }
    } );
}

function goBack () {
    stepContainer1.style.display = 'block';
    stepContainer2.style.display = 'none';
}

checkInput();



