'use strict';
import moment from 'moment';



window.addEventListener('load', function(event) {
    showNow();
});

function showNow() {
    console.group('show Now');
    let result = '';
    let el = document.querySelector('#now');
    if (el) {
        el.textContent = moment().format('DD.MM.YYYY H:mm:ss');
    }
    console.groupEnd();
}
