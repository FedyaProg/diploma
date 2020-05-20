'use strict';

// Popup Call   +++
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

// Accordion Common Questions   +++
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

// Sentence Block   +++
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

            if (target.closest('.construct-btn') && !target.matches('.call-btn')) {
                event.preventDefault();

                const currentPanel = target.closest('.panel-collapse');
                currentPanel.classList.remove('in');

                const NextPanel = currentPanel.closest('.panel').nextElementSibling;
                NextPanel.querySelector('.panel-collapse').classList.add('in');

            } else if (target.closest('.construct-btn')) {
                target = target.closest('.construct-btn');
            }

        });

    });


};
calc();

// Main Form
const mainForm = () => {

    const btn = document.querySelector('.main-form-btn'),
        input = document.querySelector('.phone-user');

    const errorMessage = 'Something gone wrong!',
        loadMessage = 'Loading...',
        successMessage = 'Thanks, We will contact you!';

    const forms = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                outputData();
            } else {
                errorData(request.status);
            }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'multipart/json');

        request.send(JSON.stringify(body));
    };

    forms.forEach(form => {
        form.addEventListener('input', event => {
            const target = event.target;
            if (target.name === 'user_phone') {
                target.value = target.value.replace(/[^\+\d]/g, '');
            }
            if (target.name === 'user_name' || target.name === 'user_message') {
                target.value = target.value.replace(/[^а-я ]/gi, '');
            }
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            form.append(statusMessage);
            statusMessage.style.cssText = `font-size: 2rem; color: #grey; `;
            const formData = new FormData(form);
            statusMessage.textContent = loadMessage;

            const body = {};
            for (const val of formData.entries()) {
                body[val[0]] = val[1];

                if (form[2]) {
                    body[val[0]] = val[1];
                    body[val[0]] = val[1];

                }
            }
            postData(body,
                () => {
                    statusMessage.style.cssText = `font-size: 2rem; color: grey;`;
                    statusMessage.textContent = successMessage;
                    form.reset();
                },
                error => {
                    statusMessage.style.cssText = `font-size: 2rem; color: red;`;
                    statusMessage.textContent = errorMessage;
                });
        });
    });

};
mainForm();



