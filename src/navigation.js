'use strict';

import './navigation.css';

export default function init() {
    console.group('navigation');
    const nav_el = document.querySelector('header > nav > ul');
    console.log('nav_el', nav_el);
    if (nav_el) {
        for (const li_el of nav_el.querySelectorAll('li')) {
            console.log('li_el', li_el);
            if (li_el.hasAttribute('data-target_id')) {
                const target_id = li_el.getAttribute('data-target_id');
                const target_el = document.getElementById(target_id);
                if (target_el) {
                    target_el.classList.add('nav_toggle');
                    li_el.addEventListener(
                        'click',
                        event => {
                            // console.log(this);
                            toggleView(event, target_el);
                        }
                    );
                }
            }
        }
    }
    console.groupEnd();
}

function toggleView(event, target_el) {
    // console.log(event);
    for (const el of document.querySelectorAll('.nav_toggle')) {
        if (el === target_el) {
            el.classList.remove('hidden');
        }
        else {
            el.classList.add('hidden');
        }
    }
}
