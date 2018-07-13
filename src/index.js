'use strict';

import './index.css';
import './fancy_background.css';

import navigation_init from './navigation.js';
import * as timeline_module from './timeline.js';
import * as editor_module from './editor.js';
import * as listview_module from './listview.js';




// window.addEventListener('load', function(event) {
window.addEventListener('load', function() {
    console.log('init application');
    navigation_init();

    let data = {
        entries: [],
    };
    window.debug_data = data;

    const timeline_el = document.querySelector('#timeline');
    // const my_timeline = new timeline_module.TimeLine(data, timeline_el);
    new timeline_module.TimeLine(data, timeline_el);


    const raw_data_format_input_el = document.querySelector('#raw_data_format_input');
    const text_input_el = document.querySelector('#raw_data_input');
    const data_json_el = document.querySelector('#data_json');
    // new editor_module.RawParser(
    const my_rawparser = new editor_module.RawParser(
        data,
        text_input_el,
        raw_data_format_input_el,
        data_json_el
    );
    new editor_module.TextAreaWithLineNumbers(text_input_el);

    const listview_el = document.querySelector('#listview');
    new listview_module.ListView(
        data,
        listview_el,
        my_rawparser.data_update_event_name
    );

    // document.addEventListener(
    //     my_rawparser.data_update_event_name,
    //     (event) => {
    //         console.log(event);
    //     }
    // );
    // console.log(my_rawparser.data_update_event_name);

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
