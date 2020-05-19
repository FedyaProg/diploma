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

// Sentence Block
const sentenceBlock = () => {

    const btn = document.querySelector('.add-sentence-btn'),
        invisBlock = document.querySelectorAll('.invis-block'),
        popUpDiscount = document.querySelector('.popup-discount'),
        btnDiscount = document.querySelectorAll('.sentence-btn');

    btn.addEventListener('click', () => {

        invisBlock.forEach(item => {
            item.style.display = 'block';
        });

        btn.style.display = 'none';

    });

    btnDiscount.forEach(item => {
        item.addEventListener('click', () => {
            popUpDiscount.style.display = 'block';
        });
    });

    popUpDiscount.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('popup-close') || target.matches('.popup-discount')) {
            popUpDiscount.style.display = 'none';
        }
    });

};
sentenceBlock();

// Popup Gauging
const gauging = () => {
    const btn = document.querySelector('.gauging-button'),
        popUpCheck = document.querySelector('.popup-check');

    btn.addEventListener('click', () => {
        popUpCheck.style.display = 'block';
    });

    popUpCheck.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('popup-close') || target.matches('.popup-check')) {
            popUpCheck.style.display = 'none';
        }
    });

};
gauging();

// Popup Consultation Section
const popUpConsult = () => {

    const btn = document.querySelector('.consultation-btn'),
        popUpConsult = document.querySelector('.popup-consultation'),
        input = document.querySelector('.consultation-input');

    btn.addEventListener('click', () => {
        popUpConsult.style.display = 'block';
    });

    popUpConsult.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('popup-close') || target.matches('.popup-consultation')) {
            popUpConsult.style.display = 'none';
        }
    });




};
popUpConsult();

// Calculator
const calc = () => {

    const accordion = document.getElementById('accordion'),
        accBtn = document.querySelectorAll('.construct-btn'),
        accHeader = document.querySelectorAll('.panel-heading'),
        accBody = document.querySelectorAll('.panel-collapse');
    let turn = 0;

    accordion.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;
        target = target.closest('.panel-heading');

        if (target) {
            accHeader.forEach((item, index) => {
                if (target === item) {
                    accBody[index].classList.add('in');
                } else {
                    accBody[index].classList.remove('in');
                }
            });
        }
    });

    accBtn.forEach(item => {
        item.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.construct-btn');
            console.log(target);


        });
    });

};
calc();

// Main Form
const mainForm = () => {

    const form = document.querySelector('.main-form'),
        btn = document.querySelector('.main-form-btn'),
        input = document.querySelector('.phone-user');

    const errorMessage = 'Something goes wrong',
        successMessage = 'We will contact you soon',
        loadMessage = 'Loading...';


    const statusMessage = document.createElement('div');


    form.addEventListener('submit', event => {
        event.preventDefault();
        form.append(statusMessage);

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            statusMessage.textContent = loadMessage;
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                statusMessage.textContent = successMessage;
            } else {
                statusMessage.textContent = errorMessage;
            }
        });

        request.open('POST', './server.php', true);
        request.setRequestHeader('Content-Type', 'multipart/form-data');
        const formData = new FormData(form);
        request.send(formData);


    });




};
mainForm();