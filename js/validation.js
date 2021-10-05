'use strict'
/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript
    

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

// 1)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const checkbx = document.querySelectorAll("#checkbox"),
    btn = document.querySelector('.button'),
    span = document.querySelector('span'),
    form = document.querySelector('form'),
    nm = document.querySelector('#name'),
    surnm = document.querySelector('#surname'),
    email = document.querySelector('#email');


function toggleInvalid(obj) {
    if (!obj.value) {
        obj.classList.add("invalid");
    } else {
        obj.classList.remove("invalid");
    }
}


btn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleInvalid(nm);
    toggleInvalid(surnm);
    toggleInvalid(email);
    let sw = false;

    checkbx.forEach(elem => {
        if (elem.checked) {
            sw = true;
        }

        if (elem.checked && nm.value && surnm.value && email.value) {
            form.submit();
        }
    })

    if (sw == false) {
        span.style.color = 'red';
    } else {
        span.style.color = '#6600FF';
    }
})

// 2) Przez localstorage ( nie działa do końca)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// const names = document.querySelectorAll('#name');;
// const btn = document.querySelector('.button');
// const checkboxs = document.querySelector('#checkbox')


// const firstNameField = document.querySelector('#name'),
//     secondName = document.querySelector('#surname'),
//     email = document.querySelector('#email'),
//     counter = 3;



// if (localStorage.getItem('isChecked')) {
//     checkboxs.checked = false;
// }


// checkboxs.addEventListener('change', () => {
//     if (checkboxs.checked == true) {
//         localStorage.setItem('isChecked', true);
//     } else {
//         localStorage.setItem('isChecked', false);
//     }
// });

// if (localStorage.getItem('isChecked') == true) {
//     return true;
// }
// else {
//     window.alert('Сhoose something in the checkboxes');
//     return false;
// }

// console.log(btn);
// console.log(checkboxs);
// console.log(names);

// if(!this.form.checkbox.checked)
// {
//     alert('You must agree to the terms first.');
//     return false;
// }


// names.addEventListener("input", () => {
//     if (names.validity.typeMismatch) {
//         names.setCustomValidity("I am expecting an e-mail address!");
//     } else {
//         names.setCustomValidity("");
//     }
// }
// );






