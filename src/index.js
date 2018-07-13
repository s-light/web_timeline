'use strict';

import './index.css';


import moment from 'moment';


import init from './navigation.js';




window.addEventListener('load', function(event) {
    showNow();
    init();
});

function showNow() {
    console.group('show Now');
    const timeline_el = document.querySelector('#timeline');
    // console.log('timeline_el', timeline_el);
    if (timeline_el) {
        let now_el = timeline_el.querySelector('#now');
        if (!now_el) {
            now_el = document.createElement('section');
            now_el.id = 'now';
            console.log('now_el', now_el);
            timeline_el.append(now_el);
        }
        now_el.textContent = moment().format('DD.MM.YYYY HH:mm:ss');
    }
    console.groupEnd();
}
