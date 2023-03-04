// Capturando los campos
const nameInput = document.getElementById ( 'name' );
const emailInput = document.getElementById ( 'email' );
const phoneNumberInput = document.getElementById ( 'phone-number' );
const labelContainer = document.querySelectorAll ( '.label--container' );
const sentButton = document.querySelector( '.next-step-button' );
const secondStepButton = document.getElementById( 'second-step--button' );
const thirdStepButton = document.getElementById( 'third-step--button' );
const goBackButton = document.querySelectorAll( '.back-step-button' );
const checkboxBilling = document.getElementById( 'checkbox-billing' );
const onsItemContainer = document.querySelectorAll( 'ons--item' );

const onlineServicesCb = document.getElementById( 'online-services-cb' );
const largerStorageCb = document.getElementById( 'larger-storage-cb' );
const customizableProfileCb = document.getElementById( 'customizable-profile-cb' );

const stepContainer1 = document.getElementById( 'step1-total--container' );
const stepContainer2 = document.getElementById( 'step2-total--container' );
const stepContainer3 = document.getElementById( 'step3-total--container' );

let isStep2Active = false;
let isStep3Active = false;
let isStep4Active = false;

let inputList = [];
let checkboxList = [];

inputList.push( nameInput, emailInput, phoneNumberInput );
checkboxList.push( onlineServicesCb, largerStorageCb, customizableProfileCb );

sentButton.addEventListener( 'click', checkInputButton);
secondStepButton.addEventListener( 'click', choosePlan );
thirdStepButton.addEventListener( 'click', addOns );

goBackButton.forEach( ( button ) => {
    button.addEventListener( 'click', goBack )
});

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

checkInput();

function checkInputButton () {
    inputList.forEach( ( input ) => {
        if ( input.value === '' ) {
            // Permite insertar elementos HTML de manera dinámicamente. El primer argumento es para indicar en donde se pondrá el elemento a añadir
            labelContainer[ inputList.indexOf( input ) ].lastElementChild.innerText = 'This field is required';
            input.style.outline = '1px solid hsl(354, 84%, 57%)';
        }
    } );

    if(nameInput.value != '' && emailInput.value != '' && phoneNumberInput.value != ''){
        stepContainer1.style.display = 'none';
        stepContainer2.style.display = 'block';
        isStep2Active = true;
    }
}

function choosePlan () {
    const plan1 = document.getElementById( 'plan1' );
    const plan2 = document.getElementById( 'plan2' );
    const plan3 = document.getElementById( 'plan3' );

    if ( plan1.checked ) {
        console.log( 'Se escogió el plan numero 1' );
    } else if ( plan2.checked ) {
        console.log( 'Se escogió el plan numero 2.' );
    } else if ( plan3.checked ) {
        console.log( 'Se escogió el plan numero 3.' );
    }

    if ( checkboxBilling.checked ) {
        console.log( 'Se pagara al año' );
    } else {
        console.log( 'Se pagará al mes' );
    }

    if ( plan1.checked || plan2.checked || plan3.checked ) {
        stepContainer2.style.display = 'none';
        stepContainer3.style.display = 'block';
        isStep2Active = false;
        isStep3Active = true;
    }
}

function addOns () {
    checkboxList.forEach( ( checkbox ) => {
        if( checkbox.id === 'online-services-cb' && checkbox.checked ) {
            console.log( 'Online Services' );
        } else if ( checkbox.id === 'larger-storage-cb' && checkbox.checked ) {
            console.log( 'Larger Storage' );
        } else if ( checkbox.id === 'customizable-profile-cb' && checkbox.checked ) {
            console.log( 'Customizable Profile' );
        }
    })

}

function goBack () {
    // let isStep1 = false;
    if ( isStep2Active === true ) {
        stepContainer1.style.display = 'block';
        stepContainer2.style.display = 'none';
    } else if ( isStep3Active === true ) {
        isStep2Active = true;
        stepContainer2.style.display = 'block';
        stepContainer3.style.display = 'none';
    }
}





