'use strict';

import './listview.css';

// import moment from 'moment';

import {TableContent, myFormat} from './listview_formats.js';


export class ListView {
    constructor(data, main_el, data_update_event_name) {
        // console.groupCollapsed('listview');
        console.group('listview');

        this.data_update_event_name = data_update_event_name;
        this.data = data;
        this.main_el = main_el;
        console.log('this.main_el', this.main_el);

        // this.tablecontent_creator = new TableContent(this.data);
        this.tablecontent_creator = new myFormat(this.data);

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
        // console.log('listview update', event);
        // clean up.
        this.thead.remove();
        this.tbody.remove();
        for (let current_class_name of this.table.classList.values()) {
            console.log(current_class_name);
            this.table.classList.remove(current_class_name);
        }
        // recreate
        this.table.classList.add(this.tablecontent_creator.get_css_class());
        this.thead = document.createElement('thead');
        this.table.append(this.thead);
        let tr = document.createElement('tr');
        this.thead.append(tr);
        this.tablecontent_creator.append_headers(tr);

        this.tbody = document.createElement('tbody');
        this.table.append(this.tbody);

        let temp_data = this.data.entries;
        temp_data = temp_data.sort(this.sort_entries);
        for (let entry of temp_data) {
            // console.log(entry);
            const tr = document.createElement('tr');
            this.tbody.append(tr);
            this.tablecontent_creator.append_row_content(tr, entry);

        }
    }

    sort_entries(a, b) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        // console.log('a.date_start.moment', a.date_start.moment);
        // console.log('b.date_start.moment', b.date_start.moment);
        let result = a.date_start.moment - b.date_start.moment;
        // console.log('result', result);
        if (result == 0) {
            // console.log('a/b .duration.moment\n', a.duration.moment, '\n', b.duration.moment);
            // console.log('a.duration.moment.count()', a.duration.moment.count());
            // console.log('b.duration.moment.count()', b.duration.moment.count());
            result = a.duration.moment.count() - b.duration.moment.count();
            // console.log('result', result);
        }
        return result;
    }

}
