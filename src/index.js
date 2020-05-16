'use strict';

// Popup Call
const callBtn = () => {

    const callBtn = document.querySelectorAll('.call-btn'),
        popUpCall = document.querySelector('.popup-call');

    callBtn.forEach(elem => {
        elem.addEventListener('click', event => {
            event.preventDefault();

            popUpCall.style.display = 'block';
        });
    });

    popUpCall.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('popup-close') || target.matches('.popup-call')) {
            popUpCall.style.display = 'none';
        }
    });

};
callBtn();

// Accordion Common Questions
const accor = () => {

    const accordion = document.getElementById('accordion-two'),
        panelHeader = document.querySelectorAll('.question-tab'),
        panelBody = document.querySelectorAll('.question-body');

    const toggleTab = index => {
        for (let i = 0; i < panelBody.length; i++) {
            if (index === i) {
                panelBody[i].classList.add('in');
            } else {
                panelBody[i].classList.remove('in');
            }
        }
    };

    accordion.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;
        target = target.closest('.question-tab');

        if (target) {
            panelHeader.forEach((item, i) => {
                if (item === target) {
                    toggleTab(i);

                }
            });

        }
    });


};
accor();




