'use strict';

import './index.css';
import './fancy_background.css';

import navigation_init from './navigation.js';
import * as timeline_module from './timeline.js';
import * as editor_module from './editor.js';




// window.addEventListener('load', function(event) {
window.addEventListener('load', function() {
    console.log('init application');
    navigation_init();

    let data = {} ;

    const parent_timeline_el = document.querySelector('#timeline');
    const my_timeline = new timeline_module.TimeLine(data, parent_timeline_el);
    const text_input_el = document.querySelector('#raw_data_input');
    const bt_parse = document.querySelector('#bt_parse');
    const my_rawparser = new editor_module.RawParser(data, text_input_el);
    bt_parse.addEventListener(
        'click',
        event => {
            my_rawparser.parse();
        }
    );
});

// function showNow() {
//     console.groupCollapsed('show Now');
//     // const timeline_el = document.querySelector('#timeline');
//     // // console.log('timeline_el', timeline_el);
//     // if (timeline_el) {
//     //     // let now_el = timeline_el.querySelector('#now');
//     //     // if (!now_el) {
//     //     //     now_el = document.createElement('section');
//     //     //     now_el.id = 'now';
//     //     //     console.log('now_el', now_el);
//     //     //     timeline_el.append(now_el);
//     //     // }
//     //     // now_el.textContent = moment().format('DD.MM.YYYY HH:mm:ss');
//     // }
//     console.groupEnd();
// }
