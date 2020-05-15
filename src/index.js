'use strict';

// Popup Call
const callBtn = () => {
    
    const callBtn = document.querySelectorAll('.call-btn'),
        popUpCall = document.querySelector('.popup-call');

    callBtn.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();

            popUpCall.style.display = 'block';
        })
    });

    popUpCall.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('popup-close') || target.matches('.popup-call')) {
            popUpCall.style.display = 'none';
        }
    });
        
};
callBtn();

// Accordion Common Questions
const accor = () => {

    const accordion = document.getElementById('accordion-two');

    accordion.addEventListener('click', event => {
        
        console.log(target);
    });


};
accor();


