import './editor.css';

import moment from 'moment';

export class RawParser {
    constructor(data, text_input_el, format_input_el, data_json_el) {
        console.groupCollapsed('RawParser');

        this.data_update_event_name = 'data_update';

        this.data = data;
        this.format_input_el = format_input_el;
        this.text_input_el = text_input_el;
        this.data_json_el = data_json_el;

        this.separator = '; ';
        this.data_format = [];
        this.min_part_count_default = 3;
        this.min_part_count = this.min_part_count_default;

        this.text_input_el.addEventListener(
            'input',
            () => {
                this.parse();
            }
        );

        this.parse();

        // console.log('this.text_input_el', this.text_input_el);
        console.groupEnd();
    }

    parse() {
        // update data_format
        this.parseFormat(this.format_input_el.value);

        this.parseContent(this.text_input_el.value);


        // console.log(this.prettyprint(this.data.entries));
        this.data_json_el.textContent = this.prettyprint(this.data.entries);

        this.sendUpdate();
    }

    parseFormat(raw_text) {
        raw_text = raw_text.trim();
        // console.log('parseFormat raw_text', raw_text);
        this.data_format = [];
        for (let part of raw_text.split(this.separator)) {
            this.data_format.push(part.trim());
        }
        // console.log('this.data_format', this.data_format);
        // update min part count
        if (this.min_part_count_default > this.data_format.length) {
            this.min_part_count = this.data_format.length;
        } else {
            this.min_part_count = this.min_part_count_default;
        }
    }

    parseContent(raw_text) {
        raw_text = raw_text.trim();
        // console.log('parseContent raw_text', raw_text);
        this.data.entries = [];
        // console.log('raw_text\n\n', raw_text);
        let lines = raw_text.split('\n');
        for (let [line_index, line] of lines.entries()) {
            this.parseLine(line, line_index);
        }
    }

    parseLine(line, index) {
        line = line.trim();
        // console.log('line: \'' + line + '\'');
        const parts = line.split(this.separator);
        if (parts.length >= this.min_part_count) {
            let entry = {};
            entry['line'] = index;
            for (let [index, part] of parts.entries()) {
                this.parsePart(part, entry, index);
            }
            this.data.entries.push(entry);
        }
    }

    parsePart(raw_text, entry, data_format_index) {
        raw_text = raw_text.trim();
        // console.log('parseContent raw_text', raw_text);
        // TODO
        // implement different handling for different data formats
        const data_format = this.data_format[data_format_index];
        // start_date; end_date; place; company; activity; description
        if (data_format.includes('date')) {
            entry[data_format] = new PartDate(raw_text);
        }
        else {
            entry[data_format] = new PartText(raw_text);
        }
    }

    sendUpdate () {
        // inform all that the data has changed..
        // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
        // https://developer.mozilla.org/en-US/docs/Web/API/Event/Event
        const update_event = new CustomEvent(
            this.data_update_event_name,
            {
                bubbles: true,
                detail: {
                    data: this.data,
                    message: 'parsed ♥',
                },
            }
        );
        this.text_input_el.dispatchEvent(update_event);
        // console.log('parsed ♥');
    }

    prettyprint(obj) {
        return JSON.stringify(obj, null, 2);
    }
}

class PartText {
    constructor(text_raw) {
        // console.groupCollapsed('PartText');

        this.raw = text_raw.trim();
        this.index = 0;
        this.data = [];

        this.init();

        // console.groupEnd();
    }

    init() {
        // if this.raw has no line-breaks use as is
        this.data = [this.raw];

        // handle newlines
        const newline_separator = /\\n/g;

        if (typeof this.raw == 'string' && newline_separator.test(this.raw)) {
            // this.raw = this.raw.replace(/\\n/g, '\n');
            this.data = this.raw.split(newline_separator);

            // this creates a infinity loop!!!
            // for (let index of this.raw.keys()) {
            //     // careful: this creates an infinity loop!!!
            //     // this.raw.splice(index+1, 0, document.createElement('br'));
            // }

            // forEach first creates an internal list of the elements to visit.
            // so no infinity loop..
            this.data.forEach(function(element, index) {
                this.data.splice(index+index+1, 0, document.createElement('br'));
                // this.raw.splice(index+index+1, 0, '- *test* -');
            }, this);
            // console.log('this.raw', this.raw);
        }
    }

    [Symbol.toString]() {
        return this.raw;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {value: this.data[this.index++], done: false};
                } else {
                    //If we would like to iterate over this again without forcing manual update of the index
                    this.index = 0;
                    return {done: true};
                }
            }
        };
    }

}

// class PartDate extends moment {
class PartDate {
    constructor(
        text_raw,
        parse_format = 'DD.MM.YYYY',
        display_format = 'DD.MM.YYYY'
    ) {
        // console.groupCollapsed('PartDate');

        text_raw = text_raw.trim();
        // super(text_raw, parse_format);
        this.moment = new moment(text_raw, parse_format);

        this.raw = text_raw;

        this._iterator_done = false;
        this.index = 0;
        // this.data = [];
        this.display_format = display_format;
        this.parse_format = parse_format;

        // console.groupEnd();

        // this.fn[Symbol.iterator] = this.test;
    }

    // [Symbol.toString]() {
    // toString() {
    //     console.log(
    //         'PartDate - special toString function:',
    //         this.moment.format(this.display_format)
    //     );
    //     // return this.moment.format(this.display_format);
    //     return this.moment.format();
    // }
    //
    // // [Symbol.valueOf]() {
    // valueOf() {
    //     console.log(
    //         'PartDate - special valueOf function:',
    //         this.moment.format(this.display_format)
    //     );
    //     // return this.moment.format(this.display_format);
    //     return this.moment.format();
    // }

    [Symbol.iterator]() {
        return {
            next: () => {
                // if (this._iterator_done) {
                //     this._iterator_done = true;
                if (this.index < 1) {
                    this.index++;
                    return {
                        value: this.moment.format(this.display_format),
                        done: false
                    };
                } else {
                    this.index = 0;
                    return {
                        done: true
                    };
                }
            }
        };
    }


}



export class TextAreaWithLineNumbers {
    constructor(textarea_el) {
        console.groupCollapsed('TextAreaWithLineNumbers');

        this.init(textarea_el);

        console.log('this.textarea_el', this.textarea_el);
        console.groupEnd();
    }

    init(textarea_el) {
        this.textarea_el = textarea_el;
        this.wrapper_el = document.createElement('div');
        this.wrapper_el.classList.add('textarea-wrapper');
        this.textarea_el.before(this.wrapper_el);

        this.linenumbers_el = document.createElement('label');
        this.linenumbers_el.setAttribute('for', this.textarea_el.id);
        this.linenumbers_el.textContent = '♥';


        this.wrapper_el.append(this.linenumbers_el);
        this.wrapper_el.append(this.textarea_el);
        // console.log(this.wrapper_el);

        this.textarea_el.addEventListener(
            'input',
            () => {
                this.update();
            }
        );

        this.update();
    }

    update() {
        // console.log('update');
        // update data_format
        // console.log('this.textarea_el.textContent', this.textarea_el.value);
        let line_count = this.textarea_el.value.match(/\n/g).length + 1;
        // console.log('line_count', line_count);
        let line_numbers =  [...Array(line_count).keys()].join('\n');
        // console.log('line_numbers', line_numbers);
        this.textarea_el.setAttribute('rows', line_count + 1);
        this.linenumbers_el.textContent = line_numbers;
    }

}