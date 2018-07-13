import './editor.css';

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
        let raw_format = this.format_input_el.value.trim();
        // console.log('raw_format', raw_format);
        this.data_format = [];
        for (let part of raw_format.split(this.separator)) {
            this.data_format.push(part.trim());
        }
        // console.log('this.data_format', this.data_format);

        this.data.entries = [];
        // let raw_text = this.text_input_el.value;
        let raw_text = this.text_input_el.textContent.trim();
        // console.log('raw_text\n\n', raw_text);
        let lines = raw_text.split('\n');
        for (let [line_index, line] of lines.entries()) {
            // this.parseline(line);
            line = line.trim();
            // console.log('line: \'' + line + '\'');
            const parts = line.split(this.separator);
            if (parts.length >= this.data_format.length) {
                let entry = {};
                entry['line'] = line_index;
                for (let [index, part] of parts.entries()) {
                    entry[this.data_format[index]] = part.trim();
                }
                this.data.entries.push(entry);
            }
        }

        // console.log(this.prettyprint(this.data.entries));
        this.data_json_el.textContent = this.prettyprint(this.data.entries);

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
