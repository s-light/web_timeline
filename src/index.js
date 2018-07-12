'use strict';

import './style.scss';


import moment from 'moment';




window.addEventListener('load', function(event) {
    showNow();
});

function showNow() {
    console.group('show Now');
    let result = '';
    let el = document.querySelector('#now');
    console.log('el', el);
    if (!el) {
        console.log('create new section element');
        el = document.createElement('section');
        el.id = 'now';
        console.log('el', el);
        const el_body = document.querySelector('body');
        el_body.prepend(el);
    }
    el.textContent = moment().format('DD.MM.YYYY HH:mm:ss');
    console.groupEnd();
}