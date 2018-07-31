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
        self.parseFormat(this.format_input_el.value);

        self.parseContent(this.text_input_el.value);


        // console.log(this.prettyprint(this.data.entries));
        this.data_json_el.textContent = this.prettyprint(this.data.entries);

        self.sendUpdate();
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
            self.parseLine(line, line_index);
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
                self.parsePart(part, entry, index);
            }
            this.data.entries.push(entry);
        }
    }

    parsePart(raw_text, entry, data_format_index) {
        raw_text = raw_text.trim();
        // console.log('parseContent raw_text', raw_text);
        // TODO
        // implement different handling for different data formats
        entry[this.data_format[data_format_index]] = raw_text;
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
