'use strict';

import './listview.css';

// import moment from 'moment';


export class ListView {
    constructor(data, main_el, data_update_event_name) {
        // console.groupCollapsed('listview');
        console.group('listview');

        this.data_update_event_name = data_update_event_name;
        this.data = data;
        this.main_el = main_el;
        console.log('this.main_el', this.main_el);

        this.init();
        this.update();

        // console.log(this.data_update_event_name);
        this.main_el.parentElement.addEventListener(
            this.data_update_event_name,
            (event) => {
                // console.log('ping');
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
        this.thead = document.createElement('thead');
        this.table.append(this.thead);
        this.tbody = document.createElement('tbody');
        this.table.append(this.tbody);

        this.page.append(this.table);
        this.main_el.append(this.page);
    }

    update(event) {
        console.log('listview update', event);
        // clean up.
        this.thead.remove();
        this.tbody.remove();
        // recreate
        this.thead = document.createElement('thead');
        this.table.append(this.thead);
        this.tbody = document.createElement('tbody');
        this.table.append(this.tbody);

        for (let entry of this.data.entries) {
            // console.log(entry);
            const tr = document.createElement('tr');
            this.tbody.append(tr);
            // for (let format_obj of this.format) {
            //
            // }
            for (let part_name in entry) {
                const td = document.createElement('td');
                tr.append(td);
                let value = entry[part_name];
                // console.log('value', value);
                // handle newlines
                const newline_separator = /\\n/g;
                if (typeof value == 'string' && newline_separator.test(value)) {
                    // value = value.replace(/\\n/g, '\n');
                    value = value.split(newline_separator);

                    // this creates a infinity loop!!!
                    // for (let index of value.keys()) {
                    //     // careful: this creates an infinity loop!!!
                    //     // value.splice(index+1, 0, document.createElement('br'));
                    // }

                    // forEach first creates an internal list of the elements to visit.
                    // so no infinity loop..
                    value.forEach(function(element, index) {
                        value.splice(index+index+1, 0, document.createElement('br'));
                        // value.splice(index+index+1, 0, '- *test* -');
                    });
                    // console.log('value', value);
                    td.append(...value);
                }
                else {
                    // console.log('value', value);
                    td.append(value);
                }
            }

        }
    }
}
