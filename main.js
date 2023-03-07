// Capturando los campos
const nameInput = document.getElementById ( 'name' );
const emailInput = document.getElementById ( 'email' );
const phoneNumberInput = document.getElementById ( 'phone-number' );

// Contenedores de elementos
const labelContainer = document.querySelectorAll ( '.label--container' );
const planInfoContainer = document.getElementById( 'plan-info--container' );

const stepContainer1 = document.getElementById( 'step1-total--container' );
const stepContainer2 = document.getElementById( 'step2-total--container' );
const stepContainer3 = document.getElementById( 'step3-total--container' );
const stepContainer4 = document.getElementById( 'step4-total--container' );

// Botones para cambiar de paso
const firstStepButton = document.querySelector( '.next-step-button' );
const secondStepButton = document.getElementById( 'second-step--button' );
const thirdStepButton = document.getElementById( 'third-step--button' );

const goBackButton = document.querySelectorAll( '.back-step-button' );

// checkbox
const billingCb = document.getElementById( 'checkbox-billing' );

const onlineServicesCbMonthly = document.getElementById( 'online-services-cb-monthly' );
const largerStorageCbMonthly = document.getElementById( 'larger-storage-cb-monthly' );
const customizableProfileCbMonthly = document.getElementById( 'customizable-profile-cb-monthly' );
const onlineServicesCbYearly = document.getElementById( 'online-services-cb-yearly' );
const largerStorageCbYearly = document.getElementById( 'larger-storage-cb-yearly' );
const customizableProfileCbYearly = document.getElementById( 'customizable-profile-cb-yearly' );

// contenedores de pago mensual o anual
const stepContainer2Monthly = document.getElementById( 'monthly-plan--container' );
const stepContainer2Yearly = document.getElementById( 'yearly-plan--container' );

const stepContainer3Monthly = document.querySelector( '.step3-monthly--container' );
const stepContainer3Yearly = document.querySelector( '.step3-yearly--container' );

const stepContainer4Monthly = document.querySelector( '.step4-monthly--container' );
const stepContainer4Yearly = document.querySelector( '.step4-yearly--container' );

// Variables globales
const plan1 = document.getElementById( 'plan1' );
const plan2 = document.getElementById( 'plan2' );
const plan3 = document.getElementById( 'plan3' );
const plan4 = document.getElementById( 'plan4' );
const plan5 = document.getElementById( 'plan5' );
const plan6 = document.getElementById( 'plan6' );

let isStep2Active = false;
let isStep3Active = false;
let isStep4Active = false;

let planSelected;
let billing;

let inputList = [];
let checkboxList = [];
let plans = [];

inputList.push( nameInput, emailInput, phoneNumberInput );
checkboxList.push( onlineServicesCbMonthly, largerStorageCbMonthly, customizableProfileCbMonthly, onlineServicesCbYearly, largerStorageCbYearly, customizableProfileCbYearly );

firstStepButton.addEventListener( 'click', checkInputButton);
secondStepButton.addEventListener( 'click', validatePlan );
thirdStepButton.addEventListener( 'click', addOns );

billingCb.addEventListener( 'click', chooseBilling );

goBackButton.forEach( ( button ) => {
    button.addEventListener( 'click', goBack )
});

class PlanMonthly {
    constructor( icon, name, price, billing ) {
        this.icon = icon;
        this.name = name;
        this.price = price;
        this.billing = 'Monthly';
    }
}

class PlanYearly {
    constructor( icon, name, price, billing ) {
        this.icon = icon;
        this.name = name;
        this.price = price;
        this.billing = 'Yearly';
    }
}

let arcadeMonthly = new PlanMonthly('./assets/images/icon-arcade.svg', 'Arcade', '$9/mo');
let arcadeYearly = new PlanMonthly('./assets/images/icon-arcade.svg', 'Arcade', '$90/ye');

plans.push( arcadeMonthly, arcadeYearly );


// Funcion para checar si algun input esta vacio
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

// Funcion para checar si un input esta vacio al momento de dar click en el boton de cambiar de paso
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

// Funcion para escoger un plan y su tipo de pago
function choosePlan () {
    if ( plan1.checked || plan4.cheked) {
        planSelected = 'Arcade';
    } else if ( plan2.checked || plan5.checked ) {
        planSelected = 'Advanced';
    } else if ( plan3.checked || plan6.checked) {
        planSelected = 'Pro';
    }
}

// funcion para escoger el tipo de pago
function chooseBilling () {
    let monthlyPlanContainer = document.getElementById( 'monthly-plan--container' );
    let yearlyPlanContainer = document.getElementById( 'yearly-plan--container' );
    let monthlyP = document.getElementById( 'monthly-p' );
    let yearlyP = document.getElementById( 'yearly-p' );

    // Mostrar los diferentes tipos de ons dependiendo del tipo de facturacion
    if ( !billingCb.checked ) {
        billing = 'Monthly';
        yearlyPlanContainer.classList.add( 'hide' );
        monthlyPlanContainer.classList.remove( 'hide' );
        monthlyP.style.color = 'hsl(213, 96%, 18%)';
        yearlyP.style.color = 'hsl(231, 11%, 63%)';
    } else if ( billingCb.checked ){
        billing = 'Yearly';
        monthlyPlanContainer.classList.add( 'hide' );
        yearlyPlanContainer.classList.remove( 'hide' );
        yearlyP.style.color = 'hsl(213, 96%, 18%)';
        monthlyP.style.color = 'hsl(231, 11%, 63%)';
    }
}

function validatePlan () {
    choosePlan();
    chooseBilling();

    stepContainer2.style.display = 'none';

    // Pasar de paso unicamente cuando se haya seleccionado algun plan
    if ( plan1.checked || plan2.checked || plan3.checked ) {
        stepContainer3Monthly.style.display = 'block';
    } else if ( plan4.checked || plan5.checked || plan6.checked ) {
        stepContainer3Yearly.style.display = 'block';
    }

    isStep2Active = false;
    isStep3Active = true;
}

// Funcion para añadir los complementos
function addOns () {
    checkboxList.forEach( ( checkbox ) => {
        if( checkbox.id === 'online-services-cb-monthly' && checkbox.checked ) {
            console.log( 'Online Services' );
            billing = 'Monthly';
        } else if ( checkbox.id === 'larger-storage-cb-monthly' && checkbox.checked ) {
            console.log( 'Larger Storage' );
            billing = 'Monthly';
        } else if ( checkbox.id === 'customizable-profile-cb-monthly' && checkbox.checked ) {
            console.log( 'Customizable Profile' );
            billing = 'Monthly';
        } else if ( checkbox.id === 'online-services-cb-yearly' && checkbox.checked ) {
            console.log( 'Customizable Profile' );
            billing = 'Yearly';
        } else if ( checkbox.id === 'larger-storage-cb-yearly' && checkbox.checked ) {
            console.log( 'Customizable Profile' );
            billing = 'Yearly';
        } else if ( checkbox.id === 'customizable-profile-cb-yearly' && checkbox.checked ) {
            console.log( 'Customizable Profile' );
            billing = 'Yearly';
        } 
    })

    //showInfo();
    stepContainer4Monthly.style.display = 'block';

}

// funcion para imprimir la informacion final
function showInfo () {
    stepContainer3.style.display = 'none';

    plans.forEach( (plan) => {
        if ( plan.name === planSelected ) { 
            let planInfo = `
                <div id="name-price--container">
                    <div>
                        <p id="plan-name">${plan.name} (${plan.billing})</p>
                        <a href="">Change</a>
                    </div>
                    <p>${plan.price}</p>
                </div>
            `;
            planInfoContainer.innerHTML += planInfo;
        }
        
    } )
    isStep4Active = true;
}

// Funcion para regresar un paso
function goBack () {

    if ( isStep2Active === true ) {
        stepContainer1.style.display = 'block';
        stepContainer2.style.display = 'none';
        stepContainer3.style.display = 'none';
        console.log('ok')
    } else if ( isStep3Active === true ) {
        isStep2Active = true;

        stepContainer2.style.display = 'block';
        stepContainer3.style.display = 'none'; 
        stepContainer3Yearly.style.display = 'none'; 

        // checkboxList.forEach( ( checkbox ) => {
        //     checkbox.checked = false;
        // })
    }
    // if ( isStep2Active === true ) {
    //     stepContainer1.style.display = 'block';
    //     stepContainer2.style.display = 'none';
    // } else if ( isStep3Active === true ) {
    //     isStep2Active = true;

    //     stepContainer2.style.display = 'block';
    //     stepContainer3.style.display = 'none';

    //     checkboxList.forEach( ( checkbox ) => {
    //         checkbox.checked = false;
    //     })
    // } else if ( isStep4Active === true ) {
    //     console.log(isStep4Active)
    // }
}






