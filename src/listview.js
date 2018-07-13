'use strict';

import './listview.css';

// import moment from 'moment';


export class ListView {
    constructor(data, main_el, data_update_event_name) {
        console.groupCollapsed('listview');

        this.data_update_event_name = data_update_event_name;
        this.data = data;
        this.main_el = main_el;
        console.log('this.main_el', this.main_el);

        this.init();

        this.main_el.addEventListener(
            this.data_update_event_name,
            (event) => {
                this.update(event);
            }
        );

        console.groupEnd();
    }

    init() {
        this.page = document.createElement('section');
        this.page.classList.add('DINA4');

        this.table = document.createElement('table');
        // this.table.classList.add('');
        const thead = document.createElement('thead');
        this.table.append(thead);
        const tbody = document.createElement('tbody');
        this.table.append(tbody);
        for (let entry of this.data.entries) {
            console.log(entry);
            const tr = document.createElement('tr');
            tbody.append(tr);
            // for (let format_obj of this.format) {
            //
            // }
            for (let part of entry.items()) {
                const td = document.createElement('td');
                tr.append(td);
                tr.textContent = part;
            }

        }


        this.page.append(this.table);
    }

    update(event) {
        console.log(event.detail);
    }
}
