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
        this.page.classList.add('sheet');
        this.page.classList.add('DINA4');
        this.page.classList.add('landscape');

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
        let tr = document.createElement('tr');
        this.thead.append(tr);
        for (let part_name in this.data.entries[0]) {
            const th = document.createElement('th');
            th.append(part_name);
            tr.append(th);
        }

        this.tbody = document.createElement('tbody');
        this.table.append(this.tbody);

        for (let entry of this.data.entries) {
            // console.log(entry);
            const tr = document.createElement('tr');
            this.tbody.append(tr);
            for (let part_name in entry) {
                const td = document.createElement('td');
                tr.append(td);
                console.log(
                    'typeof entry[part_name]',
                    typeof entry[part_name],
                    // '\n',
                    // 'entry[part_name]',
                    entry[part_name]
                );
                if (typeof entry[part_name] === 'object') {
                    console.log(
                        '...entry[part_name]',
                        ...entry[part_name]
                    );
                    td.append(...entry[part_name]);
                }
                else {
                    td.append(entry[part_name]);
                }
            }

        }
    }
}