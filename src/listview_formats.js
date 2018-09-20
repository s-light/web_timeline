'use strict';

import './listview_formats.css';

// import {TableContent} from './listview.js';

// import moment from 'moment';



export class TableContent {
    // this class is a base class that just prints out all entries.
    constructor(data) {
        this.data = data;
        // console.log(this.data.entries[0]);
        // console.log(Object.getOwnPropertyNames(this.data.entries[0]));
        // console.log(Object.keys(this.data.entries[0]));
        this.output_headers = Object.keys(this.data.entries[0]);

        this.css_class = '';
    }

    get_css_class() {
        return this.css_class;
    }

    append_headers(tr) {
        for (let part_name of this.output_headers) {
            const th = document.createElement('th');
            th.append(part_name);
            tr.append(th);
        }
    }

    append_row_content(tr, entry) {
        for (let part_name in entry) {
            const td = document.createElement('td');
            tr.append(td);
            this.append_entry_part(entry, td, part_name);
        }
    }

    append_entry_part(entry, td, part_name) {
        // console.log(
        //     'typeof entry[part_name]',
        //     typeof entry[part_name],
        //     // '\n',
        //     // 'entry[part_name]',
        //     entry[part_name]
        // );
        if (typeof entry[part_name] === 'object') {
            td.append(...entry[part_name]);
        }
        else {
            td.append(entry[part_name]);
        }
    }

}

export class myFormat extends TableContent {
    constructor(data) {
        super(data);

        // update output_headers with custom strings
        this.output_headers = [
            'date',
            'company\nplace',
            'action',
            'details',
        ];

        // this is not used currently...
        // but helps getting a quick overview whats created..
        // available fields:
        // date_start; date_end; place; company; activity; description
        this.output_content = [
            'date_start\nduration',
            'company\nplace',
            'date_start',
            'date_start',
        ];

        this.css_class = 'myFormat';
    }

    append_row_content(tr, entry) {
        this.create_date(tr, entry);
        this.create_place(tr, entry);
        this.create_activity(tr, entry);
        this.create_details(tr, entry);
    }

    create_date(tr, entry) {
        const td = document.createElement('td');
        tr.append(td);

        this.append_entry_part(entry, td, 'date_start');
        const br = document.createElement('br');
        td.append(br);
        this.append_entry_part(entry, td, 'duration');
    }

    create_place(tr, entry) {
        const td = document.createElement('td');
        tr.append(td);

        this.append_entry_part(entry, td, 'company');
        const br = document.createElement('br');
        td.append(br);
        this.append_entry_part(entry, td, 'place');
    }

    create_activity(tr, entry) {
        const td = document.createElement('td');
        tr.append(td);

        this.append_entry_part(entry, td, 'activity');
    }

    create_details(tr, entry) {
        const td = document.createElement('td');
        tr.append(td);

        this.append_entry_part(entry, td, 'description');
    }


}
